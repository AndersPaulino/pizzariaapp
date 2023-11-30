import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PizzalistComponent } from './pizzalist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';
import { By } from '@angular/platform-browser';
import { timestamp } from 'rxjs';

describe('PizzalistComponent', () => {
  let component: PizzalistComponent;
  let fixture: ComponentFixture<PizzalistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzalistComponent],
      imports: [HttpClientTestingModule,FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(PizzalistComponent);
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

it('should create the component', () => {
  expect(component).toBeTruthy();
});


it('should call editar method on edit button click', () => {
  spyOn(component, 'editar');
  const editButton = fixture.debugElement.query(By.css('button.btn-primary')).nativeElement;
  editButton.click();
  expect(component.editar).toHaveBeenCalled();
});

it('should call deletar method on delete button click', () => {
  spyOn(component, 'deletar');
  const deleteButton = fixture.debugElement.query(By.css('button.btn-danger')).nativeElement;
  deleteButton.click();
  expect(component.deletar).toHaveBeenCalled();
});

});
