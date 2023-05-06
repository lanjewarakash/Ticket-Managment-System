import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { LogoutPopupComponent } from '../logout-popup/logout-popup.component';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(
    public dialog: MatDialog,
    private service: UserService,
    
  ) {}

  user: boolean = false;
  roll = false;

  openDialog(): void {
    this.dialog.open(LogoutPopupComponent, {
      width: '230px',
    });
  }
  ngOnInit() {
    this.service.getUserInfo().subscribe((Resp: any) => {
      if (localStorage.getItem('roll') == 'ADMIN') {
        this.roll = true;
      } else {
        this.roll = false;
      }

      if (Resp[0].email == 'Admin@gmail.com') {
        this.user = true;
      }
    });
  }
}
