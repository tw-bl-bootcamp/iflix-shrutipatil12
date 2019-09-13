import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/user/user';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UsersService, private snackbar: MatSnackBar, private router: Router) { }
  ngOnInit() {
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'You must enter a Email' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'You must enter a 8 character value' :
      this.password.hasError('password') ? 'Not a valid password' :
        '';
  }

  user: User = new User();

  onClicked() {
    console.log("data", this.user);

    this.user.email = this.email.value;
    this.user.password = this.password.value;

    this.userService.login(this.user, 'login').subscribe(
      (response: any) => {
        console.log("res", response);
        var email = response.data.email;
        var password = response.data.password;

        localStorage.setItem("email", email)
        localStorage.setItem("password", password);
        this.snackbar.open("login Successfull", "end now", { duration: 4000 });

      },
      err => {
        this.snackbar.open("login UnSuccessfull Enter correct data", "end now", { duration: 4000 });

      }
    );
  }
}
