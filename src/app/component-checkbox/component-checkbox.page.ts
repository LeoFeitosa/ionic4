import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-checkbox',
  templateUrl: './component-checkbox.page.html',
  styleUrls: ['./component-checkbox.page.scss'],
})
export class ComponentCheckboxPage implements OnInit {

  meses : any[] = [
    {nomeMes: 'Janeiro', valor: 1, marcado: false},
    {nomeMes: 'Fevereiro', valor: 1, marcado: true},
    {nomeMes: 'Março', valor: 1, marcado: true},
    {nomeMes: 'Abril', valor: 1, marcado: true},
    {nomeMes: 'Maio', valor: 1, marcado: false}
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.meses);
  }

  exibirMeses(){
    console.table(this.meses);
  }
}
