import { Component, OnInit } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQrPage implements OnInit {
  qrCodeUrl: string = '';
  textToEncode: string = 'Aquí va el texto o URL que quieres convertir en QR';

  constructor() { }

  ngOnInit() {
  }

  async generateQRCode(): Promise<void> {
    try {
      this.qrCodeUrl = await QRCode.toDataURL(this.textToEncode);
    } catch (error) {
      console.error('Error generando el QR:', error);
    }
  }
}
