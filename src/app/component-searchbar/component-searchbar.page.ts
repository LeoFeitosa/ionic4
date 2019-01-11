import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-searchbar',
  templateUrl: './component-searchbar.page.html',
  styleUrls: ['./component-searchbar.page.scss'],
})
export class ComponentSearchbarPage implements OnInit {

  nome: string = '';
  pessoas: any;
  pessoasFiltradas: any;

  constructor() {
    this.pessoas = [
      { id: 1, idade: 33, nome: 'Marcos' },
      { id: 2, idade: 54, nome: 'Maria' },
      { id: 3, idade: 82, nome: 'João' },
      { id: 4, idade: 21, nome: 'Tiago' },
      { id: 5, idade: 73, nome: 'Lucas' },
      { id: 6, idade: 44, nome: 'Mateus' },
      { id: 7, idade: 83, nome: 'Ronaldo' },
      { id: 8, idade: 51, nome: 'Alex' },
      { id: 9, idade: 31, nome: 'Sonia' },
      { id: 10, idade: 62, nome: 'Rita' },
      { id: 11, idade: 78, nome: 'Rafael' },
      { id: 12, idade: 23, nome: 'Michelangelo' },
      { id: 13, idade: 14, nome: 'Donatello' },
    ];

    this.pessoasFiltradas = this.pessoas;
  }

  ngOnInit() {
  }

  filtrarItens() {
    this.pessoasFiltradas = this.filtrarPessoas(this.nome);
  }

  filtrarPessoas(termo) {
    return this.pessoasFiltradas.filter((item) => {
      return item.nome.toLowerCase().includes(termo.toLowerCase());
    });
  }

}
