import { TestBed,ComponentFixture } from '@angular/core/testing';
import { ClienteService } from './cliente.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ClienteService', () => {
    let component: ClienteService;
    let fixture: ComponentFixture<ClienteService>;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ClienteService],
        imports: [HttpClientTestingModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      });
      fixture = TestBed.createComponent(ClienteService);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  it('should be created', () => {
    expect(ClienteService).toBeTruthy();
  });

    //CASO DE TESTE 1
it('TESTE 1 - Criação OK do Componente', () => {
    expect(component).toBeTruthy();
  });
});