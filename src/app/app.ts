// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header'; // Adjust path if needed

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'irisz-maria-website';
}