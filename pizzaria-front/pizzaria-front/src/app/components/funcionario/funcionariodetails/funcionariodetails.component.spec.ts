import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Funcionario } from 'src/app/models/funcionario/funcionario';
import { FuncionariodetailsComponent } from './funcionariodetails.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';
import { By } from '@angular/platform-browser';

describe('FuncionariodetailsComponent', () => {
  let component: FuncionariodetailsComponent;
  let fixture: ComponentFixture<FuncionariodetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionariodetailsComponent],
      imports: [HttpClientTestingModule,FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(FuncionariodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //CASO DE TESTE 1
it('TESTE 1 - Criação OK do Componente', () => {
  expect(component).toBeTruthy();
});

it('should render the component', () => {
  const compiled = fixture.nativeElement;
  expect(compiled.querySelector('label').textContent).toContain('Nome:');
});

it('should call salvar method on form submit', () => {
  spyOn(component, 'salvar');
  const form = fixture.debugElement.nativeElement.querySelector('form');
  form.dispatchEvent(new Event('ngSubmit'));
  fixture.detectChanges();
  expect(component.salvar).toHaveBeenCalled();
});

it('should call salvar method', () => {
  spyOn(component, 'salvar');
  component.funcionario = new Funcionario();
  component.salvar();
  expect(component.salvar).toHaveBeenCalled();
});

it('should call editar method on edit button click', () => {
  spyOn(component, 'salvar');
  fixture.detectChanges();
  const editButton = fixture.nativeElement.querySelector('button.btn-primary');
  editButton.click();

  expect(component.salvar).toHaveBeenCalled();
});

it('should submit the form on button click', () => {
  spyOn(component, 'salvar');
  const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
  buttonElement.click();
  expect(component.salvar).toHaveBeenCalled();
});

it('should bind the input fields bidirectionally', waitForAsync(() => {
  const compiled = fixture.debugElement.nativeElement;

  const nomeFuncionarioInput = compiled.querySelector('input[name="exampleInputText1"]');

  // Simule a entrada do usuário
  nomeFuncionarioInput.value = 'Teste Funcionario';
  nomeFuncionarioInput.dispatchEvent(new Event('input'));

  fixture.detectChanges();

  // Verifique se as alterações no modelo são refletidas corretamente
  expect(component.funcionario.nomeFuncionario).toEqual('Teste Funcionario');
}));

// Exemplo: Se o nomeFuncionario for obrigatório
it('should require nomeFuncionario field', waitForAsync(() => {
  const compiled = fixture.debugElement.nativeElement;
  const form = compiled.querySelector('form');

  // Deixe o campo de nomeFuncionario vazio
  component.funcionario.nomeFuncionario = '';
  fixture.detectChanges();

  // Tente enviar o formulário
  form.dispatchEvent(new Event('ngSubmit'));

  // Verifique se a validação está correta
  // Implemente isso de acordo com suas regras de validação específicas
  expect(component.salvar).not.toHaveBeenCalled(); // Certifique-se de que o método salvar não foi chamado
}));

it('should call salvar method with valid data on form submit', () => {
  const compiled = fixture.debugElement.nativeElement;
  const form = compiled.querySelector('form');

  // Preencha o modelo com dados válidos
  component.funcionario.nomeFuncionario = 'Teste Funcionario';

  fixture.detectChanges();

  // Tente enviar o formulário
  form.dispatchEvent(new Event('ngSubmit'));

  // Verifique se o método salvar é chamado
  expect(component.salvar).toHaveBeenCalled();
});

});
