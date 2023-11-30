import { Component, EventEmitter, Input, Output ,inject} from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Venda } from 'src/app/models/venda/venda';
import { Cliente } from 'src/app/models/cliente/cliente';
import { Funcionario } from 'src/app/models/funcionario/funcionario';
import { Pizza } from 'src/app/models/pizza/pizza';
import { Bebida } from 'src/app/models/bebida/bebida';
import { VendaService } from 'src/app/services/venda/venda.service';

@Component({
  selector: 'app-vendadetails',
  templateUrl: './vendadetails.component.html',
  styleUrls: ['./vendadetails.component.scss']
})
export class VendadetailsComponent {
  @Input() venda: Venda = new Venda();
  @Output() retorno = new EventEmitter<Venda>();
  modalRef!: NgbModalRef;
  vendaService = inject(VendaService);
  

  constructor(private modalService: NgbModal){}

  salvar() {
    this.retorno.emit(this.venda);
  }

  excluirVenda(venda: Venda, indice: number) {
    if (venda.id !== null) {
      this.vendaService.deletarVenda(venda.id).subscribe(() => {
        // Remover a venda da lista de vendas
        this.retorno.emit();
      });
    }
  }

  excluirCliente(cliente: Cliente, indice: number) {
    if (Array.isArray(this.venda.cliente) && cliente !== null) {
      this.venda.cliente.splice(indice, 1);
    }
  }
  
  excluirFuncionario(funcionario: Funcionario, indice: number) {
    if (Array.isArray(this.venda.funcionario) && funcionario !== null) {
      this.venda.funcionario.splice(indice, 1);
    }
  }

  excluirPizza(pizza: Pizza, indice: number) {
    if (Array.isArray(this.venda.pizzas) && pizza !== null) {
      this.venda.pizzas.splice(indice, 1);
    }
  }

  excluirBebida(bebida: Bebida, indice: number) {
    if (Array.isArray(this.venda.bebidas) && bebida !== null) {
      this.venda.bebidas.splice(indice, 1);
    }
  }

  retornoClienteList(cliente: Cliente): void {
    this.venda.cliente.push(cliente);
    this.modalRef.dismiss();
  }

  retornoFuncionarioList(funcionario: Funcionario): void {
    this.venda.funcionario.push(funcionario);
    this.modalRef.dismiss();
  }

  retornoPizzaList(pizza: Pizza): void {
    this.venda.pizzas.push(pizza);
    this.modalRef.dismiss();
  }

  retornoBebidaList(bebida: Bebida): void {
    this.venda.bebidas.push(bebida);
    this.modalRef.dismiss();
  }

  lancar(modal: any) {
    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }
}