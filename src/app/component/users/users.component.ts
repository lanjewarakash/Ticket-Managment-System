import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddUserComponent } from '../add-user/add-user.component';
import { UserService } from 'src/app/Service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  toggle = { toggle: true };
  constructor(
    private dialog: MatDialog,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.getUserInfo();
  }
  displayedColumns: string[] = ['name', 'email', 'SelectRoll', 'action'];
  dataSource!: MatTableDataSource<any>;

  addUserInfo() {
    const dialogRef = this.dialog.open(AddUserComponent, { data: this.toggle });
    dialogRef.afterClosed().subscribe({
      next: (Resp) => {
        if (Resp) {
          this.getUserInfo();
        }
      },
    });
  }
  changeUserPassInfo(data: any) {
    // this.toggle.toggle = false

    data = { ...data, toggle: false };
    this.dialog.open(AddUserComponent, {data});
    console.log(data);

    this.getUserInfo();
    
  }

  getUserInfo() {
    this.userService.getUserInfo().subscribe((Resp: any) => {
      this.dataSource = new MatTableDataSource(Resp);
    });
  }
  // updatePass(id: any, data: any) {
  //   this.userService.updateUserInfo(id, data).subscribe((Resp: any) => {});
  // }
  deleteUserInfo(id: any) {
    this.userService.deleteUSerInfo(id).subscribe((Resp) => {});
    this.snackBar.open('UserInfo is Deleted', '', {
      duration: 2000,
      verticalPosition: 'bottom',
    });
    this.getUserInfo();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
