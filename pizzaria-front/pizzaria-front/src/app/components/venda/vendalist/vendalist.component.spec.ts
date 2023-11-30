import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VendaListComponent } from './vendalist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('VendaListComponent', () => {
  let component: VendaListComponent;
  let fixture: ComponentFixture<VendaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendaListComponent],
      imports: [HttpClientTestingModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(VendaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the list of sales', () => {
    // Simulate input data
    component.lista = [
      { 
        id: 1, 
        ativo: true, 
        cliente: [{
          id: 1, 
          ativo: true, 
          nomeCliente: 'Test Cliente', 
          cpf: '123456789', 
          registro: new Date(), 
          atualizar: new Date(),
          endereco: [{
            id: 1,
            ativo: true,
            bairro: 'Test Bairro',
            rua: 'Test Rua',
            numero: 123,
            registro: new Date(),
            atualizar: new Date()
          }]
        }],      
        funcionario: [{
          id: 1, 
          ativo: true, 
          nomeFuncionario: 'Test Funcionario', 
          registro: new Date(), 
          atualizar: new Date()
        }],      
        pizzas: [],
        bebidas: [],
        emitirNota: false,
        entregar: false,
        valorVenda: 0,
        registro: new Date(),
        atualizar: new Date()
      },
      { 
        id: 2, 
        ativo: false, 
        cliente: [{
          id: 2, 
          ativo: false, 
          nomeCliente: 'Test Cliente 2', 
          cpf: '987654321', 
          registro: new Date(), 
          atualizar: new Date(),
          endereco: [{
            id: 2,
            ativo: false,
            bairro: 'Test Bairro 2',
            rua: 'Test Rua 2',
            numero: 456,
            registro: new Date(),
            atualizar: new Date()
          }]
        }],      
        funcionario: [{
          id: 2, 
          ativo: false, 
          nomeFuncionario: 'Test Funcionario 2', 
          registro: new Date(), 
          atualizar: new Date()
        }],      
        pizzas: [],
        bebidas: [],
        emitirNota: true,
        entregar: true,
        valorVenda: 50,
        registro: new Date(),
        atualizar: new Date()
      },
    ];
    fixture.detectChanges();

    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(2);
    expect(rows[0].cells[1].textContent).toContain('Test Cliente');
    expect(rows[0].cells[2].textContent).toContain('Test Funcionario');
    expect(rows[0].cells[3].textContent).toContain('Não');
    expect(rows[1].cells[1].textContent).toContain('Test Cliente 2');
    expect(rows[1].cells[2].textContent).toContain('Test Funcionario 2');
    expect(rows[1].cells[3].textContent).toContain('Sim');
  });


});
