import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bebida } from 'src/app/models/bebida/bebida';
import { BebidasListComponent } from './bebidalist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BebidasListComponent', () => {
  let component: BebidasListComponent;
  let fixture: ComponentFixture<BebidasListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BebidasListComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(BebidasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should open modal when presentModal is called', () => {
    const modalRef = { show: jasmine.createSpy('show') };
    component.adicionar(modalRef);
    expect(modalRef.show).toHaveBeenCalled();
  });

  it('should open modal for editing when editarModal is called', () => {
    const bebida = new Bebida();
    bebida.id = 1;
    bebida.nomeBebida = 'Teste';
    bebida.valorBebida = 10;
    component.lista = [bebida];

    const modalRef = { show: jasmine.createSpy('show') };
    component.editar(modalRef, bebida, 0);
    expect(modalRef.show).toHaveBeenCalled();
  });

  it('should delete a bebida from the list when deletar is called', () => {
    const bebida = new Bebida();
    bebida.id = 1;
    component.lista = [bebida];

    component.deletar(bebida.id);
    expect(component.lista).toEqual([]);
  });

  it('should add a bebida to the list when lancamento is called', () => {
    const bebida = new Bebida();
    bebida.id = 1;
    bebida.nomeBebida = 'Teste';
    bebida.valorBebida = 10;
    component.lista = [];

    component.lancamento(bebida);
    expect(component.lista).toEqual([bebida]);
    expect(component.lista[0].ativo).toBe(true);
  });

  it('should render the component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Bebidas!');
  });

  it('should add a bebida to the list when lancamento is called', () => {
    const bebida = new Bebida();
    bebida.id = 1;
    bebida.nomeBebida = 'Teste';
    bebida.valorBebida = 10;
    component.lista = [];

    component.lancamento(bebida);
    expect(component.lista).toEqual([bebida]);
    expect(component.lista[0].ativo).toBe(true);
  });
});
