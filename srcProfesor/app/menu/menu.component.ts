import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  constructor(private router: Router, private authService: AuthService) {}

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/iniciar-sesion']);
  }
}
