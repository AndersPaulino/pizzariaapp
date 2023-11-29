import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal , NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Funcionario } from 'src/app/models/funcionario/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario/funcionario.service';

@Component({
  selector: 'app-funcionariolist',
  templateUrl: './funcionariolist.component.html',
  styleUrls: ['./funcionariolist.component.scss']
})
export class FuncionariolistComponent {

  lista: Funcionario[] = [];

  funcionarioSelecionadoParaEdicao: Funcionario = new Funcionario();
  indiceSelecionadoParaEdicao!: number;

  @Output() retorno = new EventEmitter<Funcionario>();
  @Input() modoLancamento: boolean = false;

  modalService = inject(NgbModal);
  funcionarioService = inject(FuncionarioService);

  constructor() {
    this.listAll();
  }

  listAll() {
    this.funcionarioService.listAll().subscribe({
      next: lista => {
        this.lista = lista;
      },
      error: erro => {
        alert('Observe o erro no console!');
        console.error(erro);
      }
    });
  }

  exemploErro() {
    this.funcionarioService.exemploErro().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.lista = lista;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Observe o erro no console!');
        console.error(erro);
      }
    });
  }
  
  adicionar(modal: any) {
    this.funcionarioSelecionadoParaEdicao = new Funcionario();
    this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, funcionario: Funcionario, indice: number) {
    this.funcionarioSelecionadoParaEdicao = { ...funcionario };
    this.indiceSelecionadoParaEdicao = indice;
    this.modalService.open(modal, { size: 'sm' });
  }

  addOuEditarFuncionario(funcionario: Funcionario) {
    const onComplete = () => {
      this.listAll();
      this.modalService.dismissAll();
    };

    if (funcionario.id) {
      console.log("Aqui foi atualizar");
      this.funcionarioService.atualizarFuncionario(funcionario.id, funcionario).subscribe(onComplete);
    } else {
      console.log("Aqui foi cadastrar");
      this.funcionarioService.cadastrarFuncionario(funcionario).subscribe(onComplete);
    }
  }

  deletar(id: number) {
    this.funcionarioService.deletarFuncionario(id).subscribe(() => this.listAll());
  }

  lancamento(funcionario: Funcionario){
    this.retorno.emit(funcionario);
  }
}