import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { VendadetailsComponent } from './vendadetails.component';
import { VendaService } from 'src/app/services/venda/venda.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Venda } from 'src/app/models/venda/venda';

describe('VendadetailsComponent', () => {
  let component: VendadetailsComponent;
  let fixture: ComponentFixture<VendadetailsComponent>;
  let modalService: NgbModal;
  let vendaService: VendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendadetailsComponent],
      imports: [NgbModalModule, HttpClientModule, FormsModule],
      providers: [NgbModal, VendaService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(VendadetailsComponent);
    component = fixture.componentInstance;
    modalService = TestBed.inject(NgbModal);
    vendaService = TestBed.inject(VendaService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call salvar method on button click', () => {
    spyOn(component.retorno, 'emit');
    component.salvar();

    expect(component.retorno.emit).toHaveBeenCalledWith(component.venda);
  });

  it('should open modal on button click', () => {
    spyOn(modalService, 'open');
    component.lancar('modal5');

    expect(modalService.open).toHaveBeenCalledOnceWith('modal5');
  });

  it('should call excluirVenda method on button click', () => {
    spyOn(component, 'excluirVenda');
    const mockVenda: Venda = {
      id: 1,
      ativo: true,
      cliente: { 
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
      },
            funcionario: { id: 1, ativo: true, nomeFuncionario: 'Test Funcionario', registro: new Date(), atualizar: new Date() },
      pizzas: [],
      bebidas: [],
      emitirNota: false,
      entregar: false,
      valorVenda: 0,
      registro: new Date(),
      atualizar: new Date()
    };
  
    // Simula o botão sendo clicado
    component.excluirVenda(mockVenda, 0);
  
    // Agora, você verifica se a função foi chamada com os parâmetros esperados
    expect(component.excluirVenda).toHaveBeenCalledWith(mockVenda, 0);
  });
  

  // Adicione mais testes conforme necessário para cobrir diferentes cenários.

});
