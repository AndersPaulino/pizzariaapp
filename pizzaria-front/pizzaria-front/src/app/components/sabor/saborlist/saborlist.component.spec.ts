import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaborlistComponent } from './saborlist.component';

describe('SaborlistComponent', () => {
  let component: SaborlistComponent;
  let fixture: ComponentFixture<SaborlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaborlistComponent]
    });
    fixture = TestBed.createComponent(SaborlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
