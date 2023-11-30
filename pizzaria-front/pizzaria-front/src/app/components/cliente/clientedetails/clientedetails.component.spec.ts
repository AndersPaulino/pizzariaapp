import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { ClientedetailsComponent } from './clientedetails.component';
import { FormsModule } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente/cliente';
import { Endereco } from 'src/app/models/endereco/endereco';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

describe('ClientedetailsComponent', () => {
  let component: ClientedetailsComponent;
  let fixture: ComponentFixture<ClientedetailsComponent>;
  let clienteService: ClienteService;
  let modalService: NgbModal;
  let modalRef: NgbModalRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientedetailsComponent],
      imports: [FormsModule],
      providers: [ClienteService, NgbModal],
    });
    fixture = TestBed.createComponent(ClientedetailsComponent);
    component = fixture.componentInstance;
    clienteService = TestBed.inject(ClienteService);
    modalService = TestBed.inject(NgbModal);
    modalRef = modalService.open('content'); // Crie o objeto modalRef
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call salvar when the form is submitted', () => {
    spyOn(component.retorno, 'emit');
    component.cliente = new Cliente();
    component.salvar();
    expect(component.retorno.emit).toHaveBeenCalledWith(component.cliente);
  });

  it('should call excluir when a endereco is deleted', () => {
    const endereco = new Endereco();
    component.cliente.endereco = [endereco];
    component.excluir(endereco, 0);
    expect(component.cliente.endereco.length).toBe(0);
  });

  it('should call retornoEnderecoList when a endereco is added', () => {
    spyOn(component.modalRef, 'dismiss');
    const endereco = new Endereco();
    component.retornoEnderecoList(endereco);
    expect(component.cliente.endereco.length).toBe(1);
    expect(component.modalRef.dismiss).toHaveBeenCalled();
  });

  it('should call lancar when the button is clicked', () => {
    spyOn(modalService, 'open').and.returnValue({ componentInstance: { } } as NgbModalRef);
    component.lancar('modal1');
    expect(modalService.open).toHaveBeenCalled();
  });
});