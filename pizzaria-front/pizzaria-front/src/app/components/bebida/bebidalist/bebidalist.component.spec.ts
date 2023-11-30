import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { BebidaDetailsComponent } from '../bebidadetails/bebidadetails.component';
import { FormsModule } from '@angular/forms';
import { Bebida } from 'src/app/models/bebida/bebida';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BebidaService } from 'src/app/services/bebida/bebida.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { BebidasListComponent } from './bebidalist.component';

describe('BebidasListComponent', () => {
  let component: BebidasListComponent;
  let fixture: ComponentFixture<BebidasListComponent>;
  let bebidaService: BebidaService;
  let modalService: NgbModal;
  let modalRef: NgbModalRef;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BebidasListComponent],
      imports: [HttpClientTestingModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [BebidaService, NgbModal],
    });
    fixture = TestBed.createComponent(BebidasListComponent);
    component = fixture.componentInstance;
    bebidaService = TestBed.inject(BebidaService);
    modalService = TestBed.inject(NgbModal);
    modalRef = modalService.open('content'); // Adicione esta linha
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // CASO DE TESTE 1
  it('should call listAll when the component is initialized', () => {
    component.listAll();
    expect(component.lista).toBeDefined();
    expect(component.lista.length).toBeGreaterThan(0);
  });

  // CASO DE TESTE 2
  it('should call exemploErro when the component is initialized', () => {
    component.exemploErro();
    expect(component.lista).toBeDefined();
    expect(component.lista.length).toBeGreaterThan(0);
  });

  // CASO DE TESTE 3
  it('should call adicionar when the button is clicked', () => {
    component.adicionar(modalRef);
    expect(modalRef.shown).toHaveBeenCalled();
  });

  // CASO DE TESTE 4
  it('should call editar when the button is clicked', () => {
    const bebida = new Bebida();
    bebida.id = 1;
    bebida.nomeBebida = 'Teste';
    bebida.valorBebida = 10;
    component.lista = [bebida];

    component.editar(modalRef, bebida, 0);
    expect(modalRef.shown).toHaveBeenCalled();
  });

  // CASO DE TESTE 5
  it('should call addOuEditarBebida when the button is clicked', () => {
    const bebida = new Bebida();
    bebida.id = 1;
    bebida.nomeBebida = 'Teste';
    bebida.valorBebida = 10;
    component.lista = [bebida];

    component.addOuEditarBebida(bebida);
    expect(component.lista).toEqual([]);
  });

  // CASO DE TESTE 6
  it('should call deletar when the button is clicked', () => {
    const bebida = new Bebida();
    bebida.id = 1;
    component.lista = [bebida];

    component.deletar(bebida.id);
    expect(component.lista).toEqual([]);
  });

  // CASO DE TESTE 7
  it('should call lancamento when the button is clicked', () => {
    const bebida = new Bebida();
    bebida.id = 1;
    bebida.nomeBebida = 'Teste';
    bebida.valorBebida = 10;
    component.lista = [bebida];

    component.lancamento(bebida);
    expect(component.lista).toEqual([bebida]);
    expect(component.lista[0].ativo).toBe(true);
  });
});