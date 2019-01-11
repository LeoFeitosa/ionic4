import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-component-modal-interno',
  templateUrl: './component-modal-interno.page.html',
  styleUrls: ['./component-modal-interno.page.scss'],
})
export class ComponentModalInternoPage implements OnInit {

  constructor(
    private navParam: NavParams,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController) { }

  async ngOnInit() {
    let nome = this.navParam.get('nome');
    let idade = this.navParam.get('idade');

    let alerta = await this.alertCtrl.create({
      header: 'Bem vindo!',
      message: 'Seja bem vindo ' + nome + ' parabéns pelos seus ' + idade + ' anos.'
    });

    return await alerta.present();
  }

  async closeModal() {
    let parametroResposta = {nome: 'Akira Toriyama', idade: '63'};
    
    this.modalCtrl.dismiss(parametroResposta);
  }
}
