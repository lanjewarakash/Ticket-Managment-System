import { Component, Inject, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  User!: FormGroup;

  SelectRoll: string[] = ['MENTOR', 'Co-ORDINATOR', 'HR', 'ENGINEER'];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  toggler!: boolean;

  ngOnInit(): void {
    this.User = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength]],
      SelectRoll: ['', [Validators.required]],
    });

    this.User.patchValue(this.data);
    this.toggler = this.data.toggle;
  }

  addUser() {
    if (this.User.valid) {
      console.log('getting User Data', this.User.value);

      console.log('getting User Data', this.User.value);
      let data = {
        name: this.User.value.name,
        email: this.User.value.email,
        password: this.User.value.password,
        SelectRoll: this.User.value.SelectRoll,
        role: 'user',
      };
      this.userService.addUserInfo(data).subscribe((responce: any) => {
        console.log('Add Users successfully', responce);
      });
      this.snackBar.open('User Info Added successfully', '', {
        duration: 2000,
        verticalPosition: 'bottom',
      });

      this.dialogRef.close(true);
    }
  }

  updateUser() {
    this.userService.updateUserInfo(this.data.id, this.User.value).subscribe({
      next: (resp: any) => {
        this.snackBar.open('User Info Update Successfully', '', {
          duration: 2000,
          verticalPosition: 'bottom',
        });
        location.reload();

        this.dialogRef.close(true);
      },
    });
  }
}
