import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidadetailsComponent } from './bebidadetails.component';

describe('BebidadetailsComponent', () => {
  let component: BebidadetailsComponent;
  let fixture: ComponentFixture<BebidadetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BebidadetailsComponent]
    });
    fixture = TestBed.createComponent(BebidadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
