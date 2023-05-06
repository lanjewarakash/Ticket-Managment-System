import { Dialog } from '@angular/cdk/dialog';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
import { LogoutPopupComponent } from '../logout-popup/logout-popup.component';
import { AddFollowUpComponent } from '../add-follow-up/add-follow-up.component';

@Component({
  selector: 'app-tiket-details',
  templateUrl: './tiket-details.component.html',
  styleUrls: ['./tiket-details.component.scss'],
})
export class TiketDetailsComponent implements OnInit {
  ngOnInit(): void {
    this.getData();
  }

  ticketdata: any;

  constructor(private userService: UserService, private dialog : Dialog) {}

  getData() {
    this.userService.getTicketInfobyId(localStorage.getItem('ticketId')).subscribe((Resp: any) => {
      this.ticketdata = Resp;
      console.log(this.ticketdata);
      
    });
  }

  addFollowUp(){

    this.dialog.open(AddFollowUpComponent)
  
  }

  
}
