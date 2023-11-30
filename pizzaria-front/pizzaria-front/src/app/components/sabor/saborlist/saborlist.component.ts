import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Sabor } from 'src/app/models/sabor/sabor';
import { SaborService } from 'src/app/services/sabor/sabor.service';
@Component({
  selector: 'app-saborlist',
  templateUrl: './saborlist.component.html',
  styleUrls: ['./saborlist.component.scss']
})
export class SaborlistComponent {
  lista: Sabor[] = [];
  mensagemErro: string | undefined;
  
  @Output() retorno = new EventEmitter<Sabor>();
  @Input() modoLancamento: boolean = false;


  saborSelecionadaParaEdicao: Sabor = new Sabor();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  saborService = inject(SaborService);

  constructor() {
    this.listAll();
  }

  listAll() {
    this.saborService.listAll().subscribe({
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
    this.saborService.exemploErro().subscribe({
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
    this.saborSelecionadaParaEdicao = new Sabor();
    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, sabor: Sabor, indice: number) {
    this.saborSelecionadaParaEdicao = { ...sabor };
    this.indiceSelecionadoParaEdicao = indice;
    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }

  addOuEditarSabor(sabor: Sabor) {
    const onComplete = () => {
      this.listAll();
      this.modalRef.dismiss();
    };

    if (sabor.id) {
      console.log("Aqui foi atualizar");
      this.saborService.atualizarSabor(sabor.id, sabor).subscribe(onComplete);
    } else {
      console.log("Aqui foi cadastrar");
      this.saborService.cadastrarSabor(sabor).subscribe(onComplete);
    }
  }

  deletar(id: number) {
    this.saborService.deletarSabor(id).subscribe(() => this.listAll());
  }

  lancamento(sabor: Sabor){
    this.retorno.emit(sabor);
  }
}