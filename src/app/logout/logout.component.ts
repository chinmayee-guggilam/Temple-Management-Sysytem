import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    // Add your logout logic here (e.g., clear local storage, etc.)
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  cancel(): void {
    this.router.navigate(['/']); // Navigate to home page or previous page
  }

}