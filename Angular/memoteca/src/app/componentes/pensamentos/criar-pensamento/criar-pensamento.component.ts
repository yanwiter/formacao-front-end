import { PensamentoService } from '../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  public pensamento: Pensamento = {
    conteudo:'',
    autoria:'',
    modelo:''
  }
  constructor(
    private router: Router,
    private pensamentoService: PensamentoService
    ) { }

  ngOnInit(): void {
  }

  public criarPensamento() {
    this.pensamentoService.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamentos'])
    });

  }

  public cancelarPensamento() {
    this.router.navigate(['/listarPensamentos'])
  }

}
