import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzadetailsComponent } from './pizzadetails.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';
import { By } from '@angular/platform-browser';

describe('PizzadetailsComponent', () => {
  let component: PizzadetailsComponent;
  let fixture: ComponentFixture<PizzadetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzadetailsComponent],
      imports: [HttpClientTestingModule,FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(PizzadetailsComponent);
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

it('should call the salvar method on form submit', () => {
  spyOn(component, 'salvar');
  const form = fixture.nativeElement.querySelector('form');
  form.dispatchEvent(new Event('submit'));
  expect(component.salvar).toHaveBeenCalled();
});

it('should call the onTamanhoChange method on select change', () => {
  spyOn(component, 'onTamanhoChange');
  const select = fixture.debugElement.query(By.css('select')).nativeElement;
  select.value = 'MEDIA';
  select.dispatchEvent(new Event('change'));
  expect(component.onTamanhoChange).toHaveBeenCalled();
});
});
