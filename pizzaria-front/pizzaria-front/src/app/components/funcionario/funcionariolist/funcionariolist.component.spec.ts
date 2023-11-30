import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuncionariolistComponent } from './funcionariolist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';
import { Funcionario } from 'src/app/models/funcionario/funcionario';

describe('FuncionariolistComponent', () => {
  let component: FuncionariolistComponent;
  let fixture: ComponentFixture<FuncionariolistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionariolistComponent],
      imports: [HttpClientTestingModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(FuncionariolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Teste de criação do componente
  it('TESTE 1 - Criação OK do Componente', () => {
    expect(component).toBeTruthy();
  });

  it('should display the list of employees', () => {
    // Simular dados de entrada
    component.lista = [
      { id: 1, nomeFuncionario: 'Funcionário 1', ativo: true, registro: new Date(), atualizar: new Date() },
      { id: 2, nomeFuncionario: 'Funcionário 2', ativo: false, registro: new Date(), atualizar: new Date() },
    ];
    fixture.detectChanges();

    // Verificar a saída renderizada
    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(2);
    expect(rows[0].cells[1].textContent).toContain('Funcionário 1');
    expect(rows[0].cells[2].textContent).toContain('Sim');
  });


});
