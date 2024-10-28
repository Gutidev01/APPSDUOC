import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicrudService } from '../services/apicrud.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  constructor(private router: Router, private apicrudService: ApicrudService) {}

  onLogout() {
    this.router.navigate(['/iniciar-sesion']);
  }
}
