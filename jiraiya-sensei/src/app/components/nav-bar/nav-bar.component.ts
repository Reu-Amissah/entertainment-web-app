import { Component } from '@angular/core';
import { NavItems } from '../../Interface/navItems';
import { CommonModule, NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NgClass],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  navItems: NavItems[] = [
    {
      name: 'home',
      location: '../home',
      img: '../../../assets/icon-nav-home.svg',
    },
    {
      name: 'movies',
      location: '../movies',
      img: '../../../assets/icon-nav-movies.svg',
    },
    {
      name: 'series',
      location: '../series',
      img: '../../../assets/icon-nav-tv-series.svg',
    },
    {
      name: 'bookmarks',
      location: '../bookmarks',
      img: '../../../assets/icon-nav-bookmark.svg',
    },
  ];
}
