import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { BebidaDetailsComponent } from './bebidadetails.component';
import { FormsModule } from '@angular/forms';
import { Bebida } from 'src/app/models/bebida/bebida';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BebidaService } from 'src/app/services/bebida/bebida.service';

describe('BebidaDetailsComponent', () => {
  let component: BebidaDetailsComponent;
  let fixture: ComponentFixture<BebidaDetailsComponent>;
  let service: BebidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BebidaDetailsComponent],
      imports: [HttpClientTestingModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(BebidaDetailsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(BebidaService);
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

// CASO DE TESTE 4
it('TESTE 4 - Criação OK do Service', () => {
  const bebida = new Bebida();
  bebida.nomeBebida = 'Coca-Cola';
  bebida.valorBebida = 3.5;

  service.cadastrarBebida(bebida).subscribe();

  const expected = { nome: 'Coca-Cola', valor: 3.5 };
  const actual = service.cadastrarBebida;

  expect(actual).toEqual(expected);
});

// CASO DE TESTE 5
it('TESTE 5 - Atualização de Bebida', () => {
  const bebidaAtual = new Bebida();
  bebidaAtual.nomeBebida = 'Coca-Cola Atualizada';
  bebidaAtual.valorBebida = 3.9;

  service.atualizarBebida(1, bebidaAtual).subscribe();

  const expected = { nome: 'Coca-Cola Atualizada', valor: 3.9 };
  const actual = service.atualizarBebida;

  expect(actual).toEqual(expected);
});

// CASO DE TESTE 6
it('TESTE 6 - Deletar Bebida', () => {
  service.deletarBebida(1).subscribe();

  const expectedLength = 0;
  const actualLength = service.listAll.length;

  expect(actualLength).toEqual(expectedLength);
});

// CASO DE TESTE 7
it('TESTE 7 - Exemplo de Erro', () => {
  service.exemploErro().subscribe();

  const expectedError = 'Erro ao obter bebidas';
  const actualError = service.exemploErro;

  expect(actualError).toEqual(expectedError);
});
});
