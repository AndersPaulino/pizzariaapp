import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientedetailsComponent } from './clientedetails.component';

describe('ClientedetailsComponent', () => {
  let component: ClientedetailsComponent;
  let fixture: ComponentFixture<ClientedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientedetailsComponent]
    });
    fixture = TestBed.createComponent(ClientedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
