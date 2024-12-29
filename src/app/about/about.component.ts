import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
  }

  register(): void {
    this.router.navigate(['/register']);
  }
  getUsers(): void {
    this.router.navigate(['/profile']);
  }  
}
