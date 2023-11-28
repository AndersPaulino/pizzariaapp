import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendalistComponent } from './vendalist.component';

describe('VendalistComponent', () => {
  let component: VendalistComponent;
  let fixture: ComponentFixture<VendalistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendalistComponent]
    });
    fixture = TestBed.createComponent(VendalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
