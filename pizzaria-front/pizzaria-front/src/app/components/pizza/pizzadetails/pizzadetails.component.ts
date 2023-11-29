import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Pizza } from 'src/app/models/pizza/pizza';
import { Sabor } from 'src/app/models/sabor/sabor';
import { PizzaService } from 'src/app/services/pizza/pizza.service';

@Component({
  selector: 'app-pizzadetails',
  templateUrl: './pizzadetails.component.html',
  styleUrls: ['./pizzadetails.component.scss']
})
export class PizzadetailsComponent {
  @Input() pizza: Pizza = new Pizza();
  @Output() retorno = new EventEmitter<Pizza>();
  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  pizzaService = inject(PizzaService);

  tamanhoAnteriorSelecionado: string = this.pizza.tamanho;

  constructor() {}

  onTamanhoChange(): void {
    this.calcularQuantidadeSabor();
    this.verificarTamanhoAlterado();
  }

  salvar(): void {
    if (this.pizza.sabor.length > 0) {
      this.retorno.emit(this.pizza);
    } else {
      window.alert('Pelo menos um sabor deve estar associado à pizza antes de cadastrá-la.');
    }
  }

  excluir(pizza: Pizza, indice: number): void {
    this.pizza.sabor.splice(indice, 1);
  }

  retornoSaborList(sabor: Sabor): void {
    this.pizza.sabor.push(sabor);
    this.modalRef.dismiss();
  }

  lancar(modal: any): void {
    this.calcularQuantidadeSabor();
    this.verificarTamanhoAlterado();

    if (this.pizza.sabor.length === 0 || this.pizza.sabor.length < this.pizza.qtdeSabor) {
      this.modalRef = this.modalService.open(modal, { size: 'lg' });
    } else {
      window.alert('Limite de sabores excedido para este tamanho de pizza.');
    }
  }

  private calcularQuantidadeSabor(): void {
    switch (this.pizza.tamanho) {
      case 'PEQUENA':
        this.pizza.qtdeSabor = 1;
        break;
      case 'MEDIA':
        this.pizza.qtdeSabor = 2;
        break;
      case 'GRANDE':
        this.pizza.qtdeSabor = 3;
        break;
      case 'FAMILIA':
        this.pizza.qtdeSabor = 4;
        break;
      default:
        this.pizza.qtdeSabor = 0;
        break;
    }
  }

  private verificarTamanhoAlterado(): void {
    if (this.pizza.tamanho !== this.tamanhoAnteriorSelecionado) {
      // Verifique se a quantidade de sabores existentes é maior que a nova quantidade permitida.
      if (this.pizza.sabor.length <= this.pizza.qtdeSabor) {
        // Se a quantidade de sabores é menor ou igual à nova quantidade permitida, não limpe a lista de sabores.
        this.tamanhoAnteriorSelecionado = this.pizza.tamanho;
      } else {
        // Se a quantidade de sabores existentes é maior que a nova quantidade permitida, limpe a lista de sabores.
        this.pizza.sabor = [];
        this.tamanhoAnteriorSelecionado = this.pizza.tamanho;
      }
    }
  }
}