import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.scss'],
})
export class AddTicketComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private dialogRef: DialogRef,
    private snackBar: MatSnackBar
  ) {}

  ticket!: FormGroup;

  Issues: string[] = [
    'Incorrect login credentials',
    'Account lockout',
    'System downtime',
    'Browser compatibility',
    'User permissions',
    'Security issues',
  ];

  ngOnInit(): void {
    this.ticket = this.formBuilder.group({
      CIC_ID: ['', [Validators.required]],
      Engineer_Name: ['', [Validators.required]],
      Issue: ['', [Validators.required]],
      Issue_Dec: ['', [Validators.required]],
      Additional_Info: ['', [Validators.required]],
    });
    
  }

  addTicket() {
    if (this.ticket.valid) {
      let data = {
        CIC_ID: this.ticket.value.CIC_ID,
        Engineer_Name: this.ticket.value.Engineer_Name,
        Issues: this.ticket.value.Issue,
        Issues_Dec: this.ticket.value.Issue_Dec,
        Additional_Info: this.ticket.value.Additional_Info,
      };
      this.userService.addTicket(data).subscribe((resp: any) => {
        console.log('TIcktes', resp);
      });
      this.snackBar.open('User Info Added successfully', '', {
        duration: 2000,
        verticalPosition: 'bottom',
      });

      this.dialogRef.close(true);

    }
  }
}
