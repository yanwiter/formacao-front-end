import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  public pensamento: Pensamento = {
     id:0,
     conteudo:'',
     autoria:'',
     modelo:''
  }
  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pensamentoService.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
    this.pensamento = pensamento;
    })
  }

  public excluirPensamento(){
    if(this.pensamento.id){
      this.pensamentoService.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarPensamentos']);
      })
    }
  }

  public cancelar(){
this.router.navigate(['/listarPensamentos']);
  }
}
