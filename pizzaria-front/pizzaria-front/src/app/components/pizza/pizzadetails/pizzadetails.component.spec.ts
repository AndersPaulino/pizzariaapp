import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzadetailsComponent } from './pizzadetails.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';
import { By } from '@angular/platform-browser';
import { SaborlistComponent } from '../../sabor/saborlist/saborlist.component';

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

it('should call the lancar method on button click', () => {
  spyOn(component, 'lancar');
  const lancarButton = fixture.nativeElement.querySelector('button[aria-label="Close"]');
  lancarButton.click();
  expect(component.lancar).toHaveBeenCalled();
});

it('should call the excluir method on button click in the table', () => {
  spyOn(component, 'excluir');
  const excluirButton = fixture.nativeElement.querySelector('tbody button.btn-primary');
  excluirButton.click();
  expect(component.excluir).toHaveBeenCalled();
});


it('should handle the retorno event from app-saborlist component', () => {
  spyOn(component, 'retornoSaborList');
  const appSaborList = fixture.debugElement.query(By.directive(SaborlistComponent)).componentInstance;
  appSaborList.retorno.emit(/* Simule o evento de retorno */);
  expect(component.retornoSaborList).toHaveBeenCalled();
});


});
