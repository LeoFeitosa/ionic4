import { CepService } from './../cep.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-externa',
  templateUrl: './api-externa.page.html',
  styleUrls: ['./api-externa.page.scss'],
})
export class ApiExternaPage implements OnInit {

  result: any;
  constructor(private cepService: CepService) { }

  ngOnInit() {
  }

  cep() {
    this.cepService.obserEndereco('02857010')
    .then((response)=>{
      this.result = JSON.stringify(response);
    })
    .catch((response)=>{
      this.result = JSON.stringify(response);
    })
  }
}
