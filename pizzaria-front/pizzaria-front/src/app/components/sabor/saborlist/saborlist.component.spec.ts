import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SaborlistComponent } from './saborlist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SaborService } from 'src/app/services/sabor/sabor.service';
import { of, throwError } from 'rxjs';
import { Sabor } from 'src/app/models/sabor/sabor';

describe('SaborlistComponent', () => {
  let component: SaborlistComponent;
  let fixture: ComponentFixture<SaborlistComponent>;
  let modalService: NgbModal;
  let saborService: SaborService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaborlistComponent],
      imports: [HttpClientTestingModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [NgbModal, SaborService],
    });
    fixture = TestBed.createComponent(SaborlistComponent);
    component = fixture.componentInstance;
    modalService = TestBed.inject(NgbModal);
    saborService = TestBed.inject(SaborService);
    spyOn(component, 'listAll').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the list of flavors', () => {
    component.lista = [
      { id: 1, nomeSabor: 'Sabor 1', ativo: true, registro: new Date(), atualizar: new Date() },
      { id: 2, nomeSabor: 'Sabor 2', ativo: false, registro: new Date(), atualizar: new Date() },
    ];
    fixture.detectChanges();
    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(2);
    expect(rows[0].cells[1].textContent).toContain('Sabor 1');
    expect(rows[0].cells[2].textContent).toContain('Sim');
    expect(rows[1].cells[1].textContent).toContain('Sabor 2');
    expect(rows[1].cells[2].textContent).toContain('Não');
  });

  it('should handle listAll success', fakeAsync(() => {
    const sabores: Sabor[] = [
      { id: 1, nomeSabor: 'Sabor 1', ativo: true, registro: new Date(), atualizar: new Date() },
      { id: 2, nomeSabor: 'Sabor 2', ativo: false, registro: new Date(), atualizar: new Date() },
    ];
    spyOn(saborService, 'listAll').and.returnValue(of(sabores));

    component.listAll();
    tick();

    expect(component.lista).toEqual(sabores);
  }));

  it('should handle listAll error', fakeAsync(() => {
    spyOn(saborService, 'listAll').and.returnValue(throwError('Erro ao buscar sabores'));

    component.listAll();
    tick();

    expect(component.lista).toEqual([]);
  }));

  it('should handle exemploErro success', fakeAsync(() => {
    const sabores: Sabor[] = [
      { id: 1, nomeSabor: 'Sabor 1', ativo: true, registro: new Date(), atualizar: new Date() },
      { id: 2, nomeSabor: 'Sabor 2', ativo: false, registro: new Date(), atualizar: new Date() },
    ];
    spyOn(saborService, 'exemploErro').and.returnValue(of(sabores));

    component.exemploErro();
    tick();

    expect(component.lista).toEqual(sabores);
  }));

  it('should handle exemploErro error', fakeAsync(() => {
    spyOn(saborService, 'exemploErro').and.returnValue(throwError('Erro no exemploErro'));

    component.exemploErro();
    tick();

    // You can add expectations for error handling logic if needed
  }));

  it('should initialize saborSelecionadaParaEdicao and open modal on adicionar', () => {
    component.adicionar({});
  
    expect(component.saborSelecionadaParaEdicao).toBeDefined();
    expect(component.saborSelecionadaParaEdicao.id).toBeUndefined();
    expect(component.modalRef).toBeDefined();
    expect(modalService.open).toHaveBeenCalled();
  });
  
  it('should update saborSelecionadaParaEdicao and open modal on editar', () => {
    const sabor: Sabor = { id: 1, nomeSabor: 'Sabor 1', ativo: true, registro: new Date(), atualizar: new Date() };
    const indice = 0;
  
    component.editar({}, sabor, indice);
  
    expect(component.saborSelecionadaParaEdicao).toEqual(sabor);
    expect(component.indiceSelecionadoParaEdicao).toEqual(indice);
    expect(component.modalRef).toBeDefined();
    expect(modalService.open).toHaveBeenCalled();
  });
  
  it('should call listAll and close modal after addOuEditarSabor', fakeAsync(() => {
    const sabor: Sabor = { id: 1, nomeSabor: 'Sabor 1', ativo: true, registro: new Date(), atualizar: new Date() };
    spyOn(saborService, 'cadastrarSabor').and.returnValue(of('Cadastro bem-sucedido'));
  
    component.addOuEditarSabor(sabor);
    tick();
  
    expect(component.listAll).toHaveBeenCalled();
  }));
  
  it('should call listAll and close modal after addOuEditarSabor for updating', fakeAsync(() => {
    const sabor: Sabor = { id: 1, nomeSabor: 'Sabor 1', ativo: true, registro: new Date(), atualizar: new Date() };
    spyOn(saborService, 'atualizarSabor').and.returnValue(of('Atualização bem-sucedida'));
    component.saborSelecionadaParaEdicao.id = 1;
  
    component.addOuEditarSabor(component.saborSelecionadaParaEdicao);
    tick();
  
    expect(component.listAll).toHaveBeenCalled();
  }));

  it('should handle deletar error', fakeAsync(() => {
    spyOn(saborService, 'deletarSabor').and.returnValue(throwError('Erro ao deletar sabor'));
  
    component.deletar(1);
    tick();
  
    expect(component.listAll).not.toHaveBeenCalled();
    // You can also test if the error handling logic is working as expected
  }));

  it('should emit retorno on lancamento', () => {
    const sabor: Sabor = { id: 1, nomeSabor: 'Sabor 1', ativo: true, registro: new Date(), atualizar: new Date() };
    spyOn(component.retorno, 'emit');
  
    component.lancamento(sabor);
  
    expect(component.retorno.emit).toHaveBeenCalledWith(sabor);
  });

});
