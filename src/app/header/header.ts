// src/app/header/header.ts
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], // Required for routing links
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header { }