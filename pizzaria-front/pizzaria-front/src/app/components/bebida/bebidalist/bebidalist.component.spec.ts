import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { BebidasListComponent } from './bebidalist.component';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModalModule, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BebidaService } from 'src/app/services/bebida/bebida.service';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('BebidasListComponent', () => {
  let component: BebidasListComponent;
  let fixture: ComponentFixture<BebidasListComponent>;
  let modalService: NgbModal;
  let bebidaService: BebidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BebidasListComponent],
      imports: [FormsModule, NgbModalModule,HttpClientModule],
      providers: [NgbModal, BebidaService],
    });
    fixture = TestBed.createComponent(BebidasListComponent);
    component = fixture.componentInstance;
    modalService = TestBed.inject(NgbModal);
    bebidaService = TestBed.inject(BebidaService);
    spyOn(component, 'listAll').and.callThrough(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should open modal on adicionar', () => {
    spyOn(modalService, 'open').and.returnValue({ result: Promise.resolve(true) } as NgbModalRef);
    component.adicionar({});
    expect(modalService.open).toHaveBeenCalled();
  });

  it('should open modal on editar', () => {
    const bebida = { id: 1, nomeBebida: 'Coca-Cola', valorBebida: 2.5, ativo: true, registro: new Date(), atualizar: new Date() };
    spyOn(modalService, 'open').and.returnValue({ result: Promise.resolve(true) } as NgbModalRef);
    component.editar({}, bebida, 0);
    expect(modalService.open).toHaveBeenCalled();
    expect(component.bebidaSelecionadaParaEdicao).toEqual(bebida);
    expect(component.indiceSelecionadoParaEdicao).toEqual(0);
  });


  it('should emit retorno on lancamento', () => {
    const bebida = { id: 1, nomeBebida: 'Coca-Cola', valorBebida: 2.5, ativo: true, registro: new Date(), atualizar: new Date() };
    spyOn(component.retorno, 'emit');
    component.lancamento(bebida);
    expect(component.retorno.emit).toHaveBeenCalledWith(bebida);
  });
});
