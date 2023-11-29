import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnderecolistComponent } from './enderecolist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('EnderecolistComponent', () => {
  let component: EnderecolistComponent;
  let fixture: ComponentFixture<EnderecolistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnderecolistComponent],
      imports: [HttpClientTestingModule,FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(EnderecolistComponent);
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
});
