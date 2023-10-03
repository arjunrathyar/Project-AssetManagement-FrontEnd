import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})

export class AdminHomeComponent {
  
  constructor(private router: Router) {}

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
