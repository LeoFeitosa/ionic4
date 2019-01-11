import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { loadInternal } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-component-loading',
  templateUrl: './component-loading.page.html',
  styleUrls: ['./component-loading.page.scss'],
})
export class ComponentLoadingPage implements OnInit {

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  async exibeLoadingPadrao() {
    let loading = await this.loadingCtrl.create({
      message: 'Processando...',
      duration: 2000
    });

    return await loading.present();
  }

  async exibeLoadingCustomizadoSpinner(spinnerNome) {
    let loading = await this.loadingCtrl.create({
      spinner: spinnerNome,
      message: 'Processando...',
      duration: 1500,
      translucent: true
    });
    
    return await loading.present();
  }

  async exibeLoadingTranslucent() {
    let loading = await this.loadingCtrl.create({
      message: 'Translucent...',
      duration: 1500,
      translucent: true
    });
    
    return await loading.present();
  }

  async showLoadingConsumindoApi() {
    let loading = await this.loadingCtrl.create({
      message: 'Simulando requisição para o servidor'
    });

    setTimeout(()=>{
      console.log('Responsta do servidor, simulação.')
      loading.dismiss();
    }, 5000);
    
    return await loading.present();
  }

}
