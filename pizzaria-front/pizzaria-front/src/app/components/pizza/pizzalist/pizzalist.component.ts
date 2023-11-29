import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal , NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Pizza } from 'src/app/models/pizza/pizza';
import { PizzaService } from 'src/app/services/pizza/pizza.service';
@Component({
  selector: 'app-pizzalist',
  templateUrl: './pizzalist.component.html',
  styleUrls: ['./pizzalist.component.scss']
})
export class PizzalistComponent {

  lista: Pizza[] = [];

  pizzaSelecionadoParaEdicao: Pizza = new Pizza();
  indiceSelecionadoParaEdicao!: number;

  @Output() retorno = new EventEmitter<Pizza>();
  @Input() modoLancamento: boolean = false;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  pizzaService = inject(PizzaService);

  constructor() {
    this.listAll();
  }

  listAll() {
    this.pizzaService.listAll().subscribe({
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
    this.pizzaService.exemploErro().subscribe({
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
    this.pizzaSelecionadoParaEdicao = new Pizza();
    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, pizza: Pizza, indice: number) {
    this.pizzaSelecionadoParaEdicao = { ...pizza };
    this.indiceSelecionadoParaEdicao = indice;
    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }

  addOuEditarPizza(pizza: Pizza) {
    const onComplete = () => {
      this.listAll();
      this.modalRef.dismiss();
    };

    if (pizza.id) {
      console.log("Aqui foi atualizar");
      this.pizzaService.atualizarPizza(pizza.id, pizza).subscribe(onComplete);
    } else {
      console.log("Aqui foi cadastrar");
      this.pizzaService.cadastrarPizza(pizza).subscribe(onComplete);
    }
  }

  deletar(id: number) {
    this.pizzaService.deletarPizza(id).subscribe(() => this.listAll());
  }

  lancamento(pizza: Pizza){
    this.retorno.emit(pizza);
  }
}