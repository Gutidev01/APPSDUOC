import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscanearQrPageRoutingModule } from './escanear-qr-routing.module';

import { EscanearQrPage } from './escanear-qr.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscanearQrPageRoutingModule
  ],
  declarations: [EscanearQrPage,MenuComponent]
})
export class EscanearQrPageModule {}
