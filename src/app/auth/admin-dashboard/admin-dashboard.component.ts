import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // Function to logout
  logout(): void {
    // Clear any authentication tokens, etc. (if applicable)
    // Then navigate to the login page
    this.router.navigate(['auth/login']);
  }

  // Function to navigate based on the button clicked
  navigateTo(destination: string): void {
    if (destination === 'asset-creation') {
      this.router.navigate(['/asset-definition']);
    } else if (destination === 'vendor-creation') {
      this.router.navigate(['/vendor/list']);
    } else if (destination === 'approve-reject') {
      this.router.navigate(['/purchase/list']);
    }
  }

}
