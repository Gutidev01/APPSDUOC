import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JustificacionInasistenciasPage } from './justificacion-inasistencias.page';

const routes: Routes = [
  {
    path: '',
    component: JustificacionInasistenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JustificacionInasistenciasPageRoutingModule {}
