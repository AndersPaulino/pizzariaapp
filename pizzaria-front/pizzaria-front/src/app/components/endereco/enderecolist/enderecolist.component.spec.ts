import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { EnderecolistComponent } from './enderecolist.component';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModalModule, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EnderecoService } from 'src/app/services/endereco/endereco.service';
import { of, throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('EnderecolistComponent', () => {
  let component: EnderecolistComponent;
  let fixture: ComponentFixture<EnderecolistComponent>;
  let modalService: NgbModal;
  let enderecoService: EnderecoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnderecolistComponent],
      imports: [FormsModule, NgbModalModule, HttpClientModule],
      providers: [NgbModal, EnderecoService],
    });
    fixture = TestBed.createComponent(EnderecolistComponent);
    component = fixture.componentInstance;
    modalService = TestBed.inject(NgbModal);
    enderecoService = TestBed.inject(EnderecoService);
    spyOn(component, 'listAll').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the list of addresses', () => {
    component.lista = [
      { id: 1, bairro: 'Example Bairro 1', rua: 'Example Rua 1', numero: 123, ativo: true, registro: new Date(), atualizar: new Date() },
      { id: 2, bairro: 'Example Bairro 2', rua: 'Example Rua 2', numero: 456, ativo: false, registro: new Date(), atualizar: new Date() },
    ];
    fixture.detectChanges();

    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(2);
    expect(rows[0].cells[1].textContent).toContain('Example Bairro 1');
    expect(rows[0].cells[2].textContent).toContain('Example Rua 1');
    expect(rows[0].cells[3].textContent).toContain('123');
    expect(rows[0].cells[4].textContent).toContain('Sim');
    expect(rows[1].cells[1].textContent).toContain('Example Bairro 2');
    expect(rows[1].cells[2].textContent).toContain('Example Rua 2');
    expect(rows[1].cells[3].textContent).toContain('456');
    expect(rows[1].cells[4].textContent).toContain('Não');
  });

  it('should call listAll on ngOnInit', () => {
    spyOn(component, 'listAll');
    component.ngOnInit();
    expect(component.listAll).toHaveBeenCalled();
  });

  it('should handle listAll success', fakeAsync(() => {
    const enderecos = [
      { id: 1, bairro: 'Example Bairro 1', rua: 'Example Rua 1', numero: 123, ativo: true, registro: new Date(), atualizar: new Date() },
      { id: 2, bairro: 'Example Bairro 2', rua: 'Example Rua 2', numero: 456, ativo: false, registro: new Date(), atualizar: new Date() },
    ];
    spyOn(enderecoService, 'listAll').and.returnValue(of(enderecos));

    component.listAll();
    tick();

    expect(component.lista).toEqual(enderecos);
  }));

  it('should handle listAll error', fakeAsync(() => {
    spyOn(enderecoService, 'listAll').and.returnValue(throwError('Erro ao buscar endereços'));

    component.listAll();
    tick();

    expect(component.lista).toEqual([]);
    // You can also test if the error handling logic is working as expected
  }));

  // Add more tests as needed for other functions in the EnderecolistComponent class
});
