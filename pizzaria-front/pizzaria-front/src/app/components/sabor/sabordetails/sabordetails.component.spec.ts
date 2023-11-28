import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabordetailsComponent } from './sabordetails.component';

describe('SabordetailsComponent', () => {
  let component: SabordetailsComponent;
  let fixture: ComponentFixture<SabordetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SabordetailsComponent]
    });
    fixture = TestBed.createComponent(SabordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
