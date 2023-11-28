import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzadetailsComponent } from './pizzadetails.component';

describe('PizzadetailsComponent', () => {
  let component: PizzadetailsComponent;
  let fixture: ComponentFixture<PizzadetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzadetailsComponent]
    });
    fixture = TestBed.createComponent(PizzadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
