import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login', 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private http: HttpClient, private router: Router,private authService: UserService) { }

  login() {
    const user = this.loginForm.value;
    this.authService.login(user).subscribe(response => {
      if (response.message === 'Login successful!') {
        this.router.navigate(['/']); // Navigate to home page
        this.loginForm.reset(); // Reset the form
      } else {
        alert(response.message);
      }
    });
  }
}