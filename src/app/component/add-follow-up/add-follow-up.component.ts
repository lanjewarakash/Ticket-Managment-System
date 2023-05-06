import { Component } from '@angular/core';


@Component({
  selector: 'app-add-follow-up',
  templateUrl: './add-follow-up.component.html',
  styleUrls: ['./add-follow-up.component.scss']
})
export class AddFollowUpComponent {
  date: any;

  dateAndTime: Array<any> = [
    { laterToday: '20:00', Tomorrow: '8:00', nextWeek: 'Mon,8:00' },
  ];

  


}
