import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal , NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/models/cliente/cliente';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
@Component({
  selector: 'app-clientelist',
  templateUrl: './clientelist.component.html',
  styleUrls: ['./clientelist.component.scss']
})
export class ClientelistComponent {

  lista: Cliente[] = [];
  mensagemErro: string | undefined;

  clienteSelecionadoParaEdicao: Cliente = new Cliente();
  indiceSelecionadoParaEdicao!: number;

  @Output() retorno = new EventEmitter<Cliente>();
  @Input() modoLancamento: boolean = false;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  clienteService = inject(ClienteService);

  constructor() {
    this.listAll();
  }

  listAll() {
    this.clienteService.listAll().subscribe({
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
    this.clienteService.exemploErro().subscribe({
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
    this.clienteSelecionadoParaEdicao = new Cliente();
    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, cliente: Cliente, indice: number) {
    this.clienteSelecionadoParaEdicao = { ...cliente };
    this.indiceSelecionadoParaEdicao = indice;
    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }

  addOuEditarCliente(cliente: Cliente) {
    const onComplete = () => {
      this.listAll();
      this.modalRef.dismiss();
    };

    if (cliente.id) {
      console.log("Aqui foi atualizar");
      console.log(cliente);
      this.clienteService.atualizarCliente(cliente.id, cliente).subscribe(onComplete);
    } else {
      console.log("Aqui foi cadastrar");
      console.log(cliente);
      this.clienteService.cadastrarCliente(cliente).subscribe(onComplete);
    }
  }

  deletar(id: number) {
    this.clienteService.deletarCliente(id).subscribe(() => this.listAll());
  }

  lancamento(cliente: Cliente){
    this.retorno.emit(cliente);
  }

}