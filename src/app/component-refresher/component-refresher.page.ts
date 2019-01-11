import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-refresher',
  templateUrl: './component-refresher.page.html',
  styleUrls: ['./component-refresher.page.scss'],
})
export class ComponentRefresherPage implements OnInit {

  message: string = 'Puxe para atualizar';

  constructor() { }

  ngOnInit() {
  }

  atualizarMensagem(event: any) {
    setTimeout(() => {
      this.message = 'Parabéns, refresher atualizou a mensagem';
      event.target.complete();
    }, 2000);
  }

}
