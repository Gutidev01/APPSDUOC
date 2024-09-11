import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage {
  nombre: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router, private alertController: AlertController) {}

  async onRegister() {
    if (this.password === this.confirmPassword) {
      const successAlert = await this.alertController.create({
        header: 'Registro exitoso',
        message: `¡Bienvenido ${this.nombre}! Tu cuenta ha sido creada.`,
        buttons: ['OK']
      });
      await successAlert.present();

      this.router.navigate(['/iniciar-sesion']);
    } else {
      const errorAlert = await this.alertController.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden',
        buttons: ['OK']
      });
      await errorAlert.present();
    }
  }

  goToLogin() {
    this.router.navigate(['/iniciar-sesion']);
  }
}
