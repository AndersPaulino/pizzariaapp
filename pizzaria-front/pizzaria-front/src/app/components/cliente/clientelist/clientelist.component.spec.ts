import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { ClientelistComponent } from './clientelist.component';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModalModule, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('ClientelistComponent', () => {
  let component: ClientelistComponent;
  let fixture: ComponentFixture<ClientelistComponent>;
  let modalService: NgbModal;
  let clienteService: ClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientelistComponent],
      imports: [FormsModule, NgbModalModule, HttpClientModule],
      providers: [NgbModal, ClienteService],
    });
    fixture = TestBed.createComponent(ClientelistComponent);
    component = fixture.componentInstance;
    modalService = TestBed.inject(NgbModal);
    clienteService = TestBed.inject(ClienteService);
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

  
});
