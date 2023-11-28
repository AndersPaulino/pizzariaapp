import { TestBed,ComponentFixture } from '@angular/core/testing';
import { VendaService } from './venda.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('VendaService', () => {
    let component: VendaService;
    let fixture: ComponentFixture<VendaService>;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [VendaService],
        imports: [HttpClientTestingModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      });
      fixture = TestBed.createComponent(VendaService);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  it('should be created', () => {
    expect(VendaService).toBeTruthy();
  });

    //CASO DE TESTE 1
it('TESTE 1 - Criação OK do Componente', () => {
    expect(component).toBeTruthy();
  });
});