import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicrudService } from '../services/apicrud.service';
import { AlertController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import { usuarios } from '../../interfaces/users.interface'; 

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage {

  email: string = '';  
  password: string = ''; 

  constructor(
    private apicrudService: ApicrudService, 
    private router: Router,
    private alertController: AlertController  
  ) {}

  async onLogin() {
    this.apicrudService.login(this.email, this.password).subscribe(async (response) => {
      if (response.success) {
   
        let usuarios: usuarios[] | undefined;
        try {
          usuarios = await firstValueFrom(this.apicrudService.getUsuarios());
        } catch (error) {
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'No se pudieron obtener los usuarios.',
            buttons: ['OK']
          });
          await alert.present();
          return; 
        }

        
        if (usuarios && usuarios.length > 0) {
          const user = usuarios.find(u => u.email === this.email);
          
          if (user) {
            
            const welcomeAlert = await this.alertController.create({
              header: 'Bienvenido',
              message: `¡Bienvenido(a) de nuevo, ${user.name}!`, 
              buttons: ['OK']
            });
            await welcomeAlert.present();
            
            
            this.router.navigate(['/inicio']);
          } else {
            
            const alert = await this.alertController.create({
              header: 'Error',
              message: 'Usuario no encontrado.',
              buttons: ['OK']
            });
            await alert.present();
          }
        } else {

          const alert = await this.alertController.create({
            header: 'Error',
            message: 'No se encontraron usuarios.',
            buttons: ['OK']
          });
          await alert.present();
        }
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
