import { Component, signal } from '@angular/core';
import { ProfileComponent } from './profile/profile';
import { ProjectComponent } from './project/project';

@Component({
  selector: 'app-root',
  imports: [ProfileComponent, ProjectComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-developer-portfolio');
}
