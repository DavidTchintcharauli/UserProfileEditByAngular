import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-user-profile-edit-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile-edit-component.component.html',
  styleUrl: './user-profile-edit-component.component.css'
})
export class UserProfileEditComponentComponent {
  constructor(private router: Router) {}

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }

  Submit() {
    console.log('submited')
  }
}
