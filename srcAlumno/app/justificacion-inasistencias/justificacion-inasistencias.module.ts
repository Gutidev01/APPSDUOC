import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JustificacionInasistenciasPageRoutingModule } from './justificacion-inasistencias-routing.module';

import { JustificacionInasistenciasPage } from './justificacion-inasistencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JustificacionInasistenciasPageRoutingModule
  ],
  declarations: [JustificacionInasistenciasPage]
})
export class JustificacionInasistenciasPageModule {}
