import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { BebidaListComponent } from './bebidalist.component';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModalModule, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BebidaService } from 'src/app/services/bebida/bebida.service';
import { of, throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('BebidaListComponent', () => {
  let component: BebidaListComponent;
  let fixture: ComponentFixture<BebidaListComponent>;
  let modalService: NgbModal;
  let bebidaService: BebidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BebidaListComponent],
      imports: [FormsModule, NgbModalModule, HttpClientModule],
      providers: [NgbModal, BebidaService],
    });
    fixture = TestBed.createComponent(BebidaListComponent);
    component = fixture.componentInstance;
    modalService = TestBed.inject(NgbModal);
    bebidaService = TestBed.inject(BebidaService);
    spyOn(component, 'listAll').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open modal on adicionar', () => {
    spyOn(modalService, 'open').and.returnValue({ result: Promise.resolve(true) } as NgbModalRef);
    component.adicionar({});
    expect(modalService.open).toHaveBeenCalled();
  });

  it('should open modal on editar', () => {
    const bebida = { id: 1, nomeBebida: 'Coca-Cola', valorBebida: 2.5, ativo: true, registro: new Date(), atualizar: new Date() };
    spyOn(modalService, 'open').and.returnValue({ result: Promise.resolve(true) } as NgbModalRef);
    component.editar({}, bebida, 0);
    expect(modalService.open).toHaveBeenCalled();
    expect(component.bebidaSelecionadaParaEdicao).toEqual(bebida);
    expect(component.indiceSelecionadoParaEdicao).toEqual(0);
  });

  it('should emit retorno on lancamento', () => {
    const bebida = { id: 1, nomeBebida: 'Coca-Cola', valorBebida: 2.5, ativo: true, registro: new Date(), atualizar: new Date() };
    spyOn(component.retorno, 'emit');
    component.lancamento(bebida);
    expect(component.retorno.emit).toHaveBeenCalledWith(bebida);
  });

  it('should handle listAll success', fakeAsync(() => {
    const bebida = { id: 1, nomeBebida: 'Coca-Cola', valorBebida: 2.5, ativo: true, registro: new Date(), atualizar: new Date() };
    spyOn(bebidaService, 'listAll').and.returnValue(of([bebida]));

    component.listAll();
    tick();

    expect(component.lista).toEqual([bebida]);
}));

  it('should handle listAll error', fakeAsync(() => {
    spyOn(bebidaService, 'listAll').and.returnValue(throwError('Erro ao buscar bebidas'));

    component.listAll();
    tick();

    expect(component.lista).toEqual([]);
    // You can also test if the error handling logic is working as expected
  }));

  it('should handle listAll success with empty list', fakeAsync(() => {
    spyOn(bebidaService, 'listAll').and.returnValue(of([]));

    component.listAll();
    tick();

    expect(component.lista).toEqual([]);
    expect(component.mensagemErro).toBeUndefined(); // Verifica se a mensagem de erro está indefinida
  }));

  it('should handle listAll error with error message', fakeAsync(() => {
    const errorMessage = 'Erro ao buscar bebidas';
    spyOn(bebidaService, 'listAll').and.returnValue(throwError(errorMessage));

    component.listAll();
    tick();

    expect(component.lista).toEqual([]);
    expect(component.mensagemErro).toEqual(errorMessage); // Verifica se a mensagem de erro está definida corretamente
  }));

  it('should handle addOuEditarBebida for updating', fakeAsync(() => {
    const bebida = { id: 1, nomeBebida: 'Coca-Cola', valorBebida: 2.5, ativo: true, registro: new Date(), atualizar: new Date() };
    spyOn(bebidaService, 'atualizarBebida').and.returnValue(of('Atualização bem-sucedida'));
  
    component.addOuEditarBebida(bebida);
    tick();
  
    expect(component.lista).toEqual([bebida]);
  }));
  
  it('should handle addOuEditarBebida for creating', fakeAsync(() => {
    const bebida = { id: 1, nomeBebida: 'Coca-Cola', valorBebida: 2.5, ativo: true, registro: new Date(), atualizar: new Date() };
    spyOn(bebidaService, 'cadastrarBebida').and.returnValue(of('Cadastro bem-sucedido'));
  
    component.addOuEditarBebida(bebida);
    tick();
  
    expect(component.lista).toEqual([bebida]);
  }));
  
  it('should handle deletar', fakeAsync(() => {
    const bebida = { id: 1, nomeBebida: 'Coca-Cola', valorBebida: 2.5, ativo: true, registro: new Date(), atualizar: new Date() };
    spyOn(bebidaService, 'deletarBebida').and.returnValue(of('Deleção bem-sucedida'));
  
    component.deletar(1);
    tick();

    expect(component.lista).toEqual([]);
  }));
  
});
