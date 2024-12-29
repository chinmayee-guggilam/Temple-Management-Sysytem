import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  contactus(): void {
    // Add your logout logic here (e.g., clear local storage, etc.)
    localStorage.clear();
    this.router.navigate(['/contact']);
  }
}
