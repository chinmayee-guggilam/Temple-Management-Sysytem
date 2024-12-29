import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  message: string = '';
  messageClass: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
   // Validate username
   if (!this.username || this.username.trim() === '') {
    this.message = 'Username is required.';
    this.messageClass = 'error';
    return;
  }

  if (this.username.length < 5) {
    this.message = 'Username must be at least 5 characters long.';
    this.messageClass = 'error';
    return;
  }

  // Validate email
  if (!this.email || this.email.trim() === '') {
    this.message = 'Email is required.';
    this.messageClass = 'error';
    return;
  }

  if (!this.validateEmail(this.email)) {
    this.message = 'Invalid email address.';
    this.messageClass = 'error';
    return;
  }

  // Validate password
  if (!this.password || this.password.trim() === '') {
    this.message = 'Password is required.';
    this.messageClass = 'error';
    return;
  }

  if (this.password.length < 6) {
    this.message = 'Password must be at least 6 characters long.';
    this.messageClass = 'error';
    return;
  }    
    this.http.post<any>('http://localhost:8081/user/register', {
      username: this.username,
      email: this.email,
      password: this.password
    }).subscribe(
      response => {
        // Handle successful registration
        this.message = 'Registration successful!';
        this.messageClass = 'success';

        // Clear input fields
        this.username = '';
        this.email = '';
        this.password = '';

        // Navigate to login page after 2 seconds
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 500);
      },
      error => {
        // Handle error
        if (error.status === 400 && error.error.message === 'Username already taken') {
          this.message = 'Username already taken. Please choose a different username.';
        } else {
          this.message = 'Registration Success.Yahoo';
        }
        this.messageClass = 'error';
      }
    );
  }
  validateEmail(email: string) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

}