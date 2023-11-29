import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal , NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Venda } from 'src/app/models/venda/venda';
import { VendaService } from 'src/app/services/venda/venda.service';

@Component({
  selector: 'app-vendalist',
  templateUrl: './vendalist.component.html',
  styleUrls: ['./vendalist.component.scss']
})
export class VendaListComponent {

  lista: Venda[] = [];
  vendaSelecionadaParaEdicao: Venda = new Venda();
  indiceSelecionadoParaEdicao!: number;

  @Output() retorno = new EventEmitter<Venda>();
  @Input() modoLancamento: boolean = false;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  vendaService = inject(VendaService);

  constructor() {
    this.listAll();
  }

  listAll() {
    this.vendaService.listAll().subscribe({
      next: lista => {
        this.lista = lista;
      },
      error: erro => {
        alert('Observe o erro no console!');
        console.error(erro);
      }
    });
  }

  adicionar(modal: any) {
    this.vendaSelecionadaParaEdicao = new Venda();
    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, venda: Venda, indice: number) {
    this.vendaSelecionadaParaEdicao = { ...venda };
    this.indiceSelecionadoParaEdicao = indice;
    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }

  addOuEditarVenda(venda: Venda) {
    const onComplete = () => {
      this.listAll();
      this.modalRef.dismiss();
    };

    if (venda.id) {
      console.log("Aqui foi atualizar");
      this.vendaService.atualizarVenda(venda.id, venda).subscribe(onComplete);
    } else {
      console.log("Aqui foi cadastrar");
      this.vendaService.cadastrarVenda(venda).subscribe(onComplete);
    }
  }

  deletar(id: number) {
    this.vendaService.deletarVenda(id).subscribe(() => this.listAll());
  }

  lancamento(venda: Venda){
    this.retorno.emit(venda);
  }
}