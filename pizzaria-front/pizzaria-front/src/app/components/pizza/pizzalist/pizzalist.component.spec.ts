import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PizzalistComponent } from './pizzalist.component';
import { NgbModal, NgbModalModule, NgbModalRef, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PizzaService } from 'src/app/services/pizza/pizza.service';
import { Pizza } from 'src/app/models/pizza/pizza';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('PizzalistComponent', () => {
  let component: PizzalistComponent;
  let fixture: ComponentFixture<PizzalistComponent>;
  let modalService: NgbModal;
  let pizzaService: PizzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzalistComponent],
      imports: [NgbModalModule, NgbModule,HttpClientModule],
      providers: [NgbModal, PizzaService],
    });
    fixture = TestBed.createComponent(PizzalistComponent);
    component = fixture.componentInstance;
    modalService = TestBed.inject(NgbModal);
    pizzaService = TestBed.inject(PizzaService);
    spyOn(component, 'listAll').and.callThrough();
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
