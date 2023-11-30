import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { VendadetailsComponent } from './vendadetails.component';
import { VendaService } from 'src/app/services/venda/venda.service';
import { HttpClientModule } from '@angular/common/http';

describe('VendadetailsComponent', () => {
  let component: VendadetailsComponent;
  let fixture: ComponentFixture<VendadetailsComponent>;
  let modalService: NgbModal;
  let vendaService: VendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendadetailsComponent],
      imports: [NgbModalModule,HttpClientModule],
      providers: [NgbModal, VendaService],
    });

    fixture = TestBed.createComponent(VendadetailsComponent);
    component = fixture.componentInstance;

    // Create a spy object for VendaService
    const vendaServiceSpy = jasmine.createSpyObj('VendaService', ['deletarVenda']);

    // Override the component's vendaService with the spy object
    component.vendaService = vendaServiceSpy;

    // Assign the spy object to the local variable for further reference
    vendaService = TestBed.inject(VendaService) as jasmine.SpyObj<VendaService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call salvar method on button click', () => {
    spyOn(component.retorno, 'emit');
    component.salvar();

    expect(component.retorno.emit).toHaveBeenCalledWith(component.venda);
  });



});
