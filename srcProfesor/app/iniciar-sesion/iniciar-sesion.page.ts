import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage {

  email: string = '';  
  password: string = ''; 

  constructor(
    private authService: AuthService, 
    private router: Router,
    private alertController: AlertController  
  ) {}

  async onLogin() {
    this.authService.login(this.email, this.password).subscribe(async (response: { success: boolean }) => {
      if (response.success) {

        this.router.navigate(['/generar-qr']);
      } else {
  
        const alert = await this.alertController.create({
          header: 'Error de inicio de sesión',
          message: 'Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }

  goToRegister() {
    this.router.navigate(['/registrar']);
  }
}
