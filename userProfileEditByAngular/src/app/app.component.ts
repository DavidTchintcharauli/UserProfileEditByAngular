import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { UserProfileEditComponentComponent } from './components/user-profile-edit-component/user-profile-edit-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserProfileEditComponentComponent, UserProfileComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'userProfileEditByAngular';
}
