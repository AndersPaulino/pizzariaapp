import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { ClientedetailsComponent } from './clientedetails.component';
import { FormsModule } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente/cliente';
import { Endereco } from 'src/app/models/endereco/endereco';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { HttpClientModule } from '@angular/common/http';

describe('ClientedetailsComponent', () => {
  let component: ClientedetailsComponent;
  let fixture: ComponentFixture<ClientedetailsComponent>;
  let clienteService: ClienteService;
  let modalService: NgbModal;
  let modalRef: NgbModalRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientedetailsComponent],
      imports: [FormsModule, HttpClientModule],
      providers: [ClienteService, NgbModal],
    });
    fixture = TestBed.createComponent(ClientedetailsComponent);
    component = fixture.componentInstance;
    clienteService = TestBed.inject(ClienteService);
    modalService = TestBed.inject(NgbModal);
    modalRef = modalService.open('content'); // Create the modalRef object
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

  it('should call excluir when an endereco is deleted', () => {
    const endereco = new Endereco();
    component.cliente.endereco = [endereco];
    component.excluir(endereco, 0);
    expect(component.cliente.endereco.length).toBe(0);
  });

  it('should call lancar when the button is clicked', () => {
    spyOn(modalService, 'open').and.returnValue({ componentInstance: {} } as NgbModalRef);
    component.lancar('modal1');
    expect(modalService.open).toHaveBeenCalled();
  });

  it('should update cliente property when endereco is deleted', () => {
    const endereco = new Endereco();
    component.cliente.endereco = [endereco];
    component.excluir(endereco, 0);
    expect(component.cliente.endereco.length).toBe(0);
  });

  it('should open modal when lancar is called', () => {
    spyOn(modalService, 'open').and.returnValue({ componentInstance: {} } as NgbModalRef);
    component.lancar('modal1');
    expect(modalService.open).toHaveBeenCalled();
  });

  it('should not emit retorno event if cliente is not set', () => {
    spyOn(component.retorno, 'emit');
    component.salvar();
    expect(component.retorno.emit).not.toHaveBeenCalled();
  });

  it('should not delete endereco if index is out of bounds', () => {
    const endereco = new Endereco();
    component.cliente.endereco = [endereco];
    component.excluir(endereco, 1);
    expect(component.cliente.endereco.length).toBe(1);
  });
});
