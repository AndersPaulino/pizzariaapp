import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EnderecodetailsComponent } from './enderecodetails.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('EnderecodetailsComponent', () => {
  let component: EnderecodetailsComponent;
  let fixture: ComponentFixture<EnderecodetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnderecodetailsComponent],
      imports: [HttpClientTestingModule,FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(EnderecodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the input fields initialized', () => {
    const bairroInput = fixture.nativeElement.querySelector('input[name="exampleInputText1"]');
    const ruaInput = fixture.nativeElement.querySelector('input[name="exampleInputText2"]');
    const numeroInput = fixture.nativeElement.querySelector('input[name="exampleInputPassword1"]');

    expect(bairroInput).toBeTruthy();
    expect(ruaInput).toBeTruthy();
    expect(numeroInput).toBeTruthy();
  });


  it('should call salvar method on form submit', () => {
    spyOn(component, 'salvar');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    expect(component.salvar).toHaveBeenCalled();
  });

  it('should bind the input fields bidirectionally', waitForAsync(() => {
    const compiled = fixture.debugElement.nativeElement;

    const bairroInput = compiled.querySelector('input[name="exampleInputText1"]');
    const ruaInput = compiled.querySelector('input[name="exampleInputText2"]');
    const numeroInput = compiled.querySelector('input[name="exampleInputPassword1"]');

    // Simule a entrada do usuário
    bairroInput.value = 'Teste Bairro';
    bairroInput.dispatchEvent(new Event('input'));

    ruaInput.value = 'Teste Rua';
    ruaInput.dispatchEvent(new Event('input'));

    numeroInput.value = '42';
    numeroInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    // Verifique se as alterações no modelo são refletidas corretamente
    expect(component.endereco.bairro).toEqual('Teste Bairro');
    expect(component.endereco.rua).toEqual('Teste Rua');
    expect(component.endereco.numero).toEqual(42);
}));

it('should require bairro field', waitForAsync(() => {
  const compiled = fixture.debugElement.nativeElement;
  const form = compiled.querySelector('form');

  // Deixe o campo de bairro vazio
  component.endereco.bairro = '';
  fixture.detectChanges();

  // Tente enviar o formulário
  form.dispatchEvent(new Event('submit'));

  // Verifique se a validação está correta
  // Implemente isso de acordo com suas regras de validação específicas
  expect(component.salvar).not.toHaveBeenCalled(); // Certifique-se de que o método salvar não foi chamado
}));

});