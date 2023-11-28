import { TestBed,ComponentFixture } from '@angular/core/testing';
import { BebidaService } from './bebida.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('BebidaService', () => {
    let component: BebidaService;
    let fixture: ComponentFixture<BebidaService>;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [BebidaService],
        imports: [HttpClientTestingModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      });
      fixture = TestBed.createComponent(BebidaService);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  it('should be created', () => {
    expect(BebidaService).toBeTruthy();
  });

    //CASO DE TESTE 1
it('TESTE 1 - Criação OK do Componente', () => {
    expect(component).toBeTruthy();
  });
});