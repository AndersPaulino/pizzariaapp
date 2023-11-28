import { TestBed,ComponentFixture } from '@angular/core/testing';
import { SaborService } from './sabor.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('SaborService', () => {
    let component: SaborService;
    let fixture: ComponentFixture<SaborService>;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [SaborService],
        imports: [HttpClientTestingModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      });
      fixture = TestBed.createComponent(SaborService);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  it('should be created', () => {
    expect(SaborService).toBeTruthy();
  });

    //CASO DE TESTE 1
it('TESTE 1 - Criação OK do Componente', () => {
    expect(component).toBeTruthy();
  });
});