//profile.component.ts
import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
selector:'app-profile',
imports:[NgOptimizedImage],
templateUrl: './profile.html',
styleUrl: './profile.css'
})

export class ProfileComponent{
  name: string = "Arjun Singh";
role: string = "Software Developer";
location: string = "Bengaluru, India";
linkedinUrl: string = "https://www.linkedin_profile_url.com";
githubUrl: string = "https://github_profile_url.com";
}