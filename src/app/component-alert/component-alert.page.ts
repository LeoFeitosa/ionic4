import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-component-alert',
  templateUrl: './component-alert.page.html',
  styleUrls: ['./component-alert.page.scss'],
})
export class ComponentAlertPage implements OnInit {

  constructor(private alertCtrl : AlertController) { }

  ngOnInit() {
  }

  async abrirAlertSimples(){
    let alert = await this.alertCtrl.create({
      header: 'Alert Simples',
      subHeader: 'Sub Header',
      message: 'Mensagem do alert SIMPLES',
      buttons: [
        'ok'
      ]
    });
    await alert.present();
  }
    
  async abrirAlertMultiplosBotoes(){
    let alert = await this.alertCtrl.create({
      header: 'Alert Multiplo',
      message: 'Mensagem do alert MULTIPLO BOTÕES',
      buttons: [
        'ok',
        'Cancelar',
        'Abrir Modal',
        'Delete'
      ]
    });
    await alert.present();
  }

  async abrirAlertConfirmacao(){
    let alert = await this.alertCtrl.create({
      header: 'Alert Confirmação',
      message: 'Deseja cancelar o pedido <b>XPTO</b>?',
      cssClass: 'secondary',
      buttons: [
        { 
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: ()=>{
            console.log('Pedido XPTO cancelado');
          }
        },
        { 
          text: 'Pagar',
          handler: ()=>{
            console.log('Pago com sucesso');
          }
        }
      ]
    });
    await alert.present();
  }
  
  async abrirPrompt(){
    let alert = await this.alertCtrl.create({
      header: 'Acesso restrito',
      inputs: [
        {
          name: 'login', 
          type: 'text',
          placeholder: 'Iniforme seu login'
        },
        {
          name: 'senha', 
          type: 'password',
          placeholder: 'Iniforme sua senha'
        }
      ],
      buttons: [
        {
          text: 'Novo',
          cssClass: 'secondary',
          role: 'cancel',
          handler: ()=>{
            console.log('Aqui abre a tela de cadastro de novos usuários')
          }
        },
        {
          text: 'Entrar',
          handler: (data)=>{
            console.log('Seja bem vindo fulado!', data)
          }
        }
      ]
    });
    await alert.present();
  }

  async abrirRadio(){
    let alert = await this.alertCtrl.create({
      header: 'Acesso restrito',
      inputs: [
        {
          name: 'radio 1', 
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true
        },
        {
          name: 'radio 2', 
          type: 'radio',
          label: 'Radio 2',
          value: 'value2',
        },
        {
          name: 'radio 3', 
          type: 'radio',
          label: 'Radio 3',
          value: 'value3',
        },
        {
          name: 'radio 4', 
          type: 'radio',
          label: 'Radio 4',
          value: 'value4',
        },
        {
          name: 'radio 5', 
          type: 'radio',
          label: 'Radio 5',
          value: 'value5',
        },
        {
          name: 'radio 6', 
          type: 'radio',
          label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6',
          value: 'value6',
        },
        {
          name: 'radio 7', 
          type: 'radio',
          label: 'Radio 7',
          value: 'value7',
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          cssClass: 'secondary',
          role: 'cancel',
          handler: ()=>{
            console.log('Cancel')
          }
        },
        {
          text: 'Ok',
          handler: (data)=>{
            console.log('Confirm', data)
          }
        }
      ]
    });
    await alert.present();
  }

  async abrirCheckbox(){
    let alert = await this.alertCtrl.create({
      header: 'Acesso restrito',
      inputs: [
        {
          name: 'checkbox 1', 
          type: 'checkbox',
          label: 'Checkbox 1',
          value: 'value1',
          checked: true
        },
        {
          name: 'checkbox 2', 
          type: 'checkbox',
          label: 'Checkbox 2',
          value: 'value2',
        },
        {
          name: 'checkbox 3', 
          type: 'checkbox',
          label: 'Checkbox 3',
          value: 'value3',
        },
        {
          name: 'checkbox 4', 
          type: 'checkbox',
          label: 'Checkbox 4',
          value: 'value4',
        },
        {
          name: 'checkbox 5', 
          type: 'checkbox',
          label: 'Checkbox 5',
          value: 'value5',
        },
        {
          name: 'checkbox 6', 
          type: 'checkbox',
          label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
          value: 'value6',
        },
        {
          name: 'checkbox 7', 
          type: 'checkbox',
          label: 'Checkbox 7',
          value: 'value7',
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          cssClass: 'secondary',
          role: 'cancel',
          handler: ()=>{
            console.log('Cancel')
          }
        },
        {
          text: 'Ok',
          handler: (data)=>{
            console.log('Confirm', data)
          }
        }
      ]
    });
    await alert.present();
  }
  
}
