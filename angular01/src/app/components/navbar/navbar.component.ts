import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar', // nombre del componente
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isLogged: boolean = false; // flag -> verifica si el usuario está o no logged
  menu: Array<any> = [
    { link: '/home', text: 'Home' },
    { link: '/login', text: 'Login' },
    { link: '/characters', text: 'Personajes' },
  ];
}
