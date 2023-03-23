import { Pensamento } from './../pensamento';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input()
  pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Yan Witer',
    modelo: 'modelo2'
  }

  constructor() { }

  ngOnInit(): void {
  }

  public larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

}
