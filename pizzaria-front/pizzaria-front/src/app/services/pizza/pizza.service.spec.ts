import { TestBed,ComponentFixture } from '@angular/core/testing';
import { PizzaService } from './pizza.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('PizzaService', () => {
    let component: PizzaService;
    let fixture: ComponentFixture<PizzaService>;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [PizzaService],
        imports: [HttpClientTestingModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      });
      fixture = TestBed.createComponent(PizzaService);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  it('should be created', () => {
    expect(PizzaService).toBeTruthy();
  });

    //CASO DE TESTE 1
it('TESTE 1 - Criação OK do Componente', () => {
    expect(component).toBeTruthy();
  });
});