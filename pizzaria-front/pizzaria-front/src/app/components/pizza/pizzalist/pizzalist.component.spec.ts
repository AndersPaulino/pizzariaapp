import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { PizzalistComponent } from './pizzalist.component';
import { NgbModal, NgbModalModule, NgbModalRef, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PizzaService } from 'src/app/services/pizza/pizza.service';
import { Pizza } from 'src/app/models/pizza/pizza';
import { Sabor } from 'src/app/models/sabor/sabor';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('PizzalistComponent', () => {
  let component: PizzalistComponent;
  let fixture: ComponentFixture<PizzalistComponent>;
  let modalService: NgbModal;
  let pizzaService: PizzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzalistComponent],
      imports: [NgbModalModule, NgbModule, HttpClientModule],
      providers: [NgbModal, PizzaService],
    });
    fixture = TestBed.createComponent(PizzalistComponent);
    component = fixture.componentInstance;
    modalService = TestBed.inject(NgbModal);
    pizzaService = TestBed.inject(PizzaService);
    spyOn(component, 'listAll').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call listAll method on initialization', () => {
    expect(component.listAll).toHaveBeenCalled();
  });

  it('should display the list of pizzas', () => {
    const pizzaList: Pizza[] = [
      {
        id: 1,
        ativo: true,
        sabor: [
          { id: 1, ativo: true, nomeSabor: 'Sabor 1', registro: new Date(), atualizar: new Date() },
          { id: 2, ativo: false, nomeSabor: 'Sabor 2', registro: new Date(), atualizar: new Date() },
        ],
        tamanho: 'M',
        qtdeSabor: 2,
        valorPizza: 20.0,
        registro: new Date(),
        atualizar: new Date(),
      },
      {
        id: 2,
        ativo: false,
        sabor: [
          { id: 3, ativo: true, nomeSabor: 'Sabor 3', registro: new Date(), atualizar: new Date() },
          { id: 4, ativo: false, nomeSabor: 'Sabor 4', registro: new Date(), atualizar: new Date() },
        ],
        tamanho: 'G',
        qtdeSabor: 2,
        valorPizza: 25.0,
        registro: new Date(),
        atualizar: new Date(),
      },
    ];

    spyOn(pizzaService, 'listAll').and.returnValue(of(pizzaList));

    fixture.detectChanges();

    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(2);
    expect(rows[0].cells[1].textContent).toContain('Sabor 1, Sabor 2');
    expect(rows[0].cells[2].textContent).toContain('M');
    expect(rows[0].cells[3].textContent).toContain('2');
    expect(rows[0].cells[4].textContent).toContain('20.0');
    expect(rows[0].cells[5].textContent).toContain('Sim');
    expect(rows[1].cells[1].textContent).toContain('Sabor 3, Sabor 4');
    expect(rows[1].cells[2].textContent).toContain('G');
    expect(rows[1].cells[3].textContent).toContain('2');
    expect(rows[1].cells[4].textContent).toContain('25.0');
    expect(rows[1].cells[5].textContent).toContain('Não');
  });

  it('should open modal on adicionar', () => {
    spyOn(modalService, 'open').and.returnValue({ result: Promise.resolve(true) } as NgbModalRef);
    component.adicionar({});
    expect(modalService.open).toHaveBeenCalled();
  });

  it('should open modal on editar', () => {
    const pizza: Pizza = {
      id: 1,
      ativo: true,
      sabor: [
        { id: 1, ativo: true, nomeSabor: 'Sabor 1', registro: new Date(), atualizar: new Date() },
        { id: 2, ativo: false, nomeSabor: 'Sabor 2', registro: new Date(), atualizar: new Date() },
      ],
      tamanho: 'M',
      qtdeSabor: 2,
      valorPizza: 20.0,
      registro: new Date(),
      atualizar: new Date(),
    };

    spyOn(modalService, 'open').and.returnValue({ result: Promise.resolve(true) } as NgbModalRef);
    component.editar({}, pizza, 0);
    expect(modalService.open).toHaveBeenCalled();
    expect(component.pizzaSelecionadoParaEdicao).toEqual(pizza);
    expect(component.indiceSelecionadoParaEdicao).toEqual(0);
  });

  it('should emit retorno on lancamento', () => {
    const pizza: Pizza = {
      id: 1,
      ativo: true,
      sabor: [
        { id: 1, ativo: true, nomeSabor: 'Sabor 1', registro: new Date(), atualizar: new Date() },
        { id: 2, ativo: false, nomeSabor: 'Sabor 2', registro: new Date(), atualizar: new Date() },
      ],
      tamanho: 'M',
      qtdeSabor: 2,
      valorPizza: 20.0,
      registro: new Date(),
      atualizar: new Date(),
    };

    spyOn(component.retorno, 'emit');
    component.lancamento(pizza);
    expect(component.retorno.emit).toHaveBeenCalledWith(pizza);
  });

  // Adicione mais testes conforme necessário para cobrir diferentes cenários.

});
