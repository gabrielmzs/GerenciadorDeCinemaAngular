import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  valorInput: string = "";

  constructor(private router: Router) { }

  menuExpanded = false; // Inicialmente, o menu está recolhido

  toggleMenu() {
    this.menuExpanded = !this.menuExpanded; // Inverte o estado do menu
  }



}
