import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-component-toast',
  templateUrl: './component-toast.page.html',
  styleUrls: ['./component-toast.page.scss'],
})
export class ComponentToastPage implements OnInit {

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async showToast(position: any) {
    let toast = await this.toastCtrl.create({
      message: 'Enviado via toast',
      duration: 2000,
      position: position
    });

    toast.present();
  }

  async showToastButton() {
    let toast = await this.toastCtrl.create({
      message: 'Toast com botão',
      duration: 2000,
      showCloseButton: true
    });

    toast.present();
  }

  async showToastButtonText() {
    let toast = await this.toastCtrl.create({
      message: 'Toast com botão e texto para fechar',
      showCloseButton: true,
      closeButtonText: 'Fechar'
    });

    toast.present();
  }

  async showToastButtonTextLong() {
    let toast = await this.toastCtrl.create({
      message: 'Toast com botão e texto longo longo longo longo longo longo longo longo longo longo longo longo longo longo longo longo',   
      showCloseButton: true,
      closeButtonText: 'Fechar'
    });

    toast.present();
  }
  
  async showToastButtonTextLongTranslucent() {
    let toast = await this.toastCtrl.create({
      message: 'Toast com botão e texto longo longo longo longo longo longo longo longo longo longo longo longo longo longo longo longo',
      position: 'top',
      showCloseButton: true,
      closeButtonText: 'Fechar',
      translucent: true
    });

    toast.present();
  }

}
