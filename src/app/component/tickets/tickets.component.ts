import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddTicketComponent } from '../add-ticket/add-ticket.component';
import { UserService } from 'src/app/Service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TiketDetailsComponent } from '../tiket-details/tiket-details.component';
import { LogoutPopupComponent } from '../logout-popup/logout-popup.component';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private userService: UserService,
    private snackbar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.getTicketInfo();
  }
  displayedColumns: string[] = [
    'S/N',
    'Ticket Id',
    'Issue',
    'Engineer Name',
    'Status',
    'Action',
  ];
  dataSource!: MatTableDataSource<any>;

  addTicket() {
    const dialogRef = this.dialog.open(AddTicketComponent);
    dialogRef.afterClosed().subscribe({
      next: (Resp) => {
        if (Resp) {
          this.getTicketInfo();
        }
      },
    });
  }

  getTicketInfo() {
    this.userService.getTicketInfo().subscribe((Resp: any) => {
      this.dataSource = new MatTableDataSource(Resp);
    });
  }

  deleteTicketsInfo(id: any) {
    this.userService.deleteTickeInfo(id).subscribe((Resp) => {});
    this.snackbar.open('UserInfo is Deleted', 'Undo', {
      duration: 2000,
      verticalPosition: 'bottom',
    });
   
    this.getTicketInfo();
  }

  // viewTicktes(data:any) {
    
  //   data = { ...data, toggle: false };
  
    // this.dialog.open(TiketDetailsComponent , {data});
    // console.log(data);
    
    
  // }

  viewTicktes(rowid:any){
    localStorage.setItem('ticketId', rowid);
  
    this.dialog.open(TiketDetailsComponent );
    console.log();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deletepopUP(){
    this.dialog.open(LogoutPopupComponent)
  }
  UpdateTicket(){
    this.dialog.open(TicketsComponent)
  }

  


}
