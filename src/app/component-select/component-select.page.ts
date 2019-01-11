import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-select',
  templateUrl: './component-select.page.html',
  styleUrls: ['./component-select.page.scss'],
})
export class ComponentSelectPage implements OnInit {

  customOptions: any = {
    header: 'Melhores frutas',
    subHeader: 'Selecione o que deseja comprar',
    message: 'apenas 1,00 real',
    translucent: true
  };

  constructor() { }

  ngOnInit() {
  }

}
