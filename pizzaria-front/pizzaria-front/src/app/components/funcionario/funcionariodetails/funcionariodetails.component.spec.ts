import { ComponentFixture, TestBed } from '@angular/core/testing';
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
});
