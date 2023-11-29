import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaborlistComponent } from './saborlist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('SaborlistComponent', () => {
  let component: SaborlistComponent;
  let fixture: ComponentFixture<SaborlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaborlistComponent],
      imports: [HttpClientTestingModule,FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(SaborlistComponent);
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
