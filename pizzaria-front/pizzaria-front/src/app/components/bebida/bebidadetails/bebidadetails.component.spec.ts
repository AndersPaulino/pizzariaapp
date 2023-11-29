import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { BebidaDetailsComponent } from './bebidadetails.component';
import { FormsModule } from '@angular/forms';
import { Bebida } from 'src/app/models/bebida/bebida';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('BebidaDetailsComponent', () => {
  let component: BebidaDetailsComponent;
  let fixture: ComponentFixture<BebidaDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BebidaDetailsComponent],
      imports: [HttpClientTestingModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(BebidaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // CASO DE TESTE 1
  it('TESTE 1 - Criação OK do Componente', () => {
    expect(component).toBeTruthy();
  });

  // CASO DE TESTE 2
  it('TESTE 2 - Inicialização do formulário', () => {
    const formElement = fixture.nativeElement.querySelector('form');
    expect(formElement).toBeTruthy();

    const nomeInput = fixture.nativeElement.querySelector('input[name="exampleInputText1"]');
    const valorInput = fixture.nativeElement.querySelector('input[name="exampleInputPassword1"]');
    const submitButton = fixture.nativeElement.querySelector('button[type="submit"]');

    expect(nomeInput).toBeTruthy();
    expect(valorInput).toBeTruthy();
    expect(submitButton).toBeTruthy();
  });

  // CASO DE TESTE 3
  it('TESTE 3 - Submissão do formulário', fakeAsync(() => {
    spyOn(component.retorno, 'emit');
    const bebida = new Bebida();
    component.bebida = bebida;

    const nomeInput = fixture.nativeElement.querySelector('input[name="exampleInputText1"]');
    const valorInput = fixture.nativeElement.querySelector('input[name="exampleInputPassword1"]');
    const submitButton = fixture.nativeElement.querySelector('button[type="submit"]');

    // Simula a entrada de dados
    nomeInput.value = 'Coca-Cola';
    valorInput.value = 3.5;
    nomeInput.dispatchEvent(new Event('input'));
    valorInput.dispatchEvent(new Event('input'));

    // Submete o formulário
    submitButton.click();
    tick();
    fixture.detectChanges();

    // Verifica se o evento de retorno foi chamado com a bebida correta
    expect(component.retorno.emit).toHaveBeenCalledWith(bebida);
  }));

  // Adicione mais casos de teste conforme necessário
});
