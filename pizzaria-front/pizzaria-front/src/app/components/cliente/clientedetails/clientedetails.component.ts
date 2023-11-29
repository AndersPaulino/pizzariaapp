import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/models/cliente/cliente';
import { Endereco } from 'src/app/models/endereco/endereco';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
@Component({
  selector: 'app-clientedetails',
  templateUrl: './clientedetails.component.html',
  styleUrls: ['./clientedetails.component.scss']
})
export class ClientedetailsComponent {
  @Input() cliente: Cliente = new Cliente();
  @Output() retorno = new EventEmitter<Cliente>();
  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  clienteService = inject(ClienteService);

  constructor(){}

  salvar(){
    this.retorno.emit(this.cliente);
  }

  excluir(endereco: Endereco, indice: number) {
    this.cliente.endereco.splice(indice,1);
  }

  retornoEnderecoList(endereco: Endereco): void {
    this.cliente.endereco.push(endereco);
    this.modalRef.dismiss();
  }
  

  lancar(modal: any) {
    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }
}