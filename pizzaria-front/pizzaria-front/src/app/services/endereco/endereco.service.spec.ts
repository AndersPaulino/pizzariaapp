import { TestBed,ComponentFixture } from '@angular/core/testing';
import { EnderecoService } from './endereco.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('EnderecoService', () => {
    let component: EnderecoService;
    let fixture: ComponentFixture<EnderecoService>;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [EnderecoService],
        imports: [HttpClientTestingModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      });
      fixture = TestBed.createComponent(EnderecoService);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  it('should be created', () => {
    expect(EnderecoService).toBeTruthy();
  });

    //CASO DE TESTE 1
it('TESTE 1 - Criação OK do Componente', () => {
    expect(component).toBeTruthy();
  });
});