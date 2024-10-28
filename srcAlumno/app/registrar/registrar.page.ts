import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApicrudService } from '../services/apicrud.service'; // Importar el servicio

@Component({
  selector: 'app-register',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router, private alertController: AlertController, private apicrudService: ApicrudService) {}

  async onRegister() {
    if (this.password === this.confirmPassword) {
      const newUsuario = {
        id: Date.now(),
        name: this.name,
        email: this.email,
        password: this.password
      };

      // Registrar el nuevo usuario
      this.apicrudService.postUsuarios(newUsuario).subscribe(async () => {
        const successAlert = await this.alertController.create({
          header: 'Registro exitoso',
          message: `¡Bienvenido ${this.name}! Tu cuenta ha sido creada.`,
          buttons: ['OK']
        });
        await successAlert.present();

        this.router.navigate(['/iniciar-sesion']);
      });
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
