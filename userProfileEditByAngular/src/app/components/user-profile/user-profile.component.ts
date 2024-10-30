import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit{

  user: User = new User()

  isLoader: boolean = true

  ngOnInit(): void {
    this.fetchUserData()
  }

  fetchUserData() {
    this.user.firstName = 'giorgi';
    this.user.lastName = 'giotgadze';
    this.user.email = 'giotgadze@gmail.com';
    this.user.phoneNumber = '555554856';
    this.user.profilePicture = 'https://gg.com/path/to/profile-picture.jpg';
  }

  constructor(private router: Router) {}

  navigateToEdit(data: User) {
    this.router.navigate(['/editProfile'], { state: { user: data }});
  }

}
