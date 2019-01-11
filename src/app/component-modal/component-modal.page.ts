import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ComponentModalInternoPage } from '../component-modal-interno/component-modal-interno.page';

@Component({
  selector: 'app-component-modal',
  templateUrl: './component-modal.page.html',
  styleUrls: ['./component-modal.page.scss'],
})
export class ComponentModalPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async showModal() {
    let modal = await this.modalCtrl.create({
      component: ComponentModalInternoPage,
      componentProps: { nome: 'Son Goku', idade: 40 }
    });

    //fecha modal e pega parametro passado por 'modaInterno'
    modal.onDidDismiss().then(
      async (responseModal) => {
        let alerta = await this.alertCtrl.create({
          header: 'Enviando parametros para o modal.',
          message: 'Nome ' + responseModal.data.nome + ' Idade ' + responseModal.data.idade + ' anos.'
        });

        return await alerta.present();
      })

    return await modal.present();
  }

}
