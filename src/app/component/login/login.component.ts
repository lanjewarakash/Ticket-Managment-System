import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}
  login!: FormGroup;

  ngOnInit(): void {
    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onLogin() {
    if (this.login.valid) {
      let data = {
        email: this.login.value.email,
        password: this.login.value.password,
      };
      console.log(this.login.value.email + 'Input Email');

      this.userService.getUser().subscribe((response: any) => {
        let count = 0;

        for (let i = 0; i < response.length; i++) {
          if (
            response[i].email == data.email &&
            response[i].password == data.password
          ) {
            count++;
            localStorage.setItem('roll', response[i].SelectRoll);

            this.router.navigateByUrl('/dashboard/home');
          }
        }
        if (count == 0) {
          this.snackbar.open('Please Enter Valid Credentials', 'OK', {
            duration: 3000,
            verticalPosition: 'bottom',
          });
        }
      });
    }
  }
}
