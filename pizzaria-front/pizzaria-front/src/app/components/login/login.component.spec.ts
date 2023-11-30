import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule,FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(LoginComponent);
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

it('should display the login form', () => {
  fixture.detectChanges();

  // Verify the rendered output
  const form = fixture.nativeElement.querySelector('form');
  expect(form).toBeTruthy();
  expect(form.querySelector('input').type).toBe('text');
  expect(form.querySelector('input').required).toBeTruthy();
  expect(form.querySelector('input').value).toBe('');
  expect(form.querySelector('input').placeholder).toBe('Digite seu login');
  expect(form.querySelector('button').type).toBe('submit');
  expect(form.querySelector('button').disabled).toBe(false);
});

it('should call the logar method on form submit', () => {
  spyOn(component, 'logar');
  const form = fixture.nativeElement.querySelector('form');
  form.dispatchEvent(new Event('submit'));
  expect(component.logar).toHaveBeenCalled();
});
});
