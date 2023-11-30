import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { FuncionariolistComponent } from './funcionariolist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';
import { Funcionario } from 'src/app/models/funcionario/funcionario';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FuncionarioService } from 'src/app/services/funcionario/funcionario.service';
import { of, throwError } from 'rxjs';

describe('FuncionariolistComponent', () => {
  let component: FuncionariolistComponent;
  let fixture: ComponentFixture<FuncionariolistComponent>;
  let modalService: NgbModal;
  let funcionarioService: FuncionarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionariolistComponent],
      imports: [HttpClientTestingModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [NgbModal, FuncionarioService],
    });
    fixture = TestBed.createComponent(FuncionariolistComponent);
    component = fixture.componentInstance;
    modalService = TestBed.inject(NgbModal);
    funcionarioService = TestBed.inject(FuncionarioService);
    spyOn(component, 'listAll').and.callThrough();
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

  it('should call listAll on ngOnInit', () => {
    spyOn(component, 'listAll');
    component.ngOnInit();
    expect(component.listAll).toHaveBeenCalled();
  });

  it('should handle listAll success', fakeAsync(() => {
    const funcionarios = [
      { id: 1, nomeFuncionario: 'Funcionário 1', ativo: true, registro: new Date(), atualizar: new Date() },
      { id: 2, nomeFuncionario: 'Funcionário 2', ativo: false, registro: new Date(), atualizar: new Date() },
    ];
    spyOn(funcionarioService, 'listAll').and.returnValue(of(funcionarios));

    component.listAll();
    tick();

    expect(component.lista).toEqual(funcionarios);
  }));

  it('should handle listAll error', fakeAsync(() => {
    spyOn(funcionarioService, 'listAll').and.returnValue(throwError('Erro ao buscar funcionários'));

    component.listAll();
    tick();

    expect(component.lista).toEqual([]);
    // You can also test if the error handling logic is working as expected
  }));

  it('should handle exemploErro success', fakeAsync(() => {
    const funcionarios = [
      { id: 1, nomeFuncionario: 'Funcionário 1', ativo: true, registro: new Date(), atualizar: new Date() },
      { id: 2, nomeFuncionario: 'Funcionário 2', ativo: false, registro: new Date(), atualizar: new Date() },
    ];
    spyOn(funcionarioService, 'exemploErro').and.returnValue(of(funcionarios));

    component.exemploErro();
    tick();

    expect(component.lista).toEqual(funcionarios);
  }));

  it('should handle exemploErro error', fakeAsync(() => {
    spyOn(funcionarioService, 'exemploErro').and.returnValue(throwError('Erro no exemploErro'));

    component.exemploErro();
    tick();

  }));
});
