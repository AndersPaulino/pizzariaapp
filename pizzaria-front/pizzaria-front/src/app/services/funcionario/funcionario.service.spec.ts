import { TestBed,ComponentFixture } from '@angular/core/testing';
import { FuncionarioService } from './funcionario.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('FuncionarioService', () => {
    let component: FuncionarioService;
    let fixture: ComponentFixture<FuncionarioService>;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [FuncionarioService],
        imports: [HttpClientTestingModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      });
      fixture = TestBed.createComponent(FuncionarioService);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  it('should be created', () => {
    expect(FuncionarioService).toBeTruthy();
  });

    //CASO DE TESTE 1
it('TESTE 1 - Criação OK do Componente', () => {
    expect(component).toBeTruthy();
  });
});