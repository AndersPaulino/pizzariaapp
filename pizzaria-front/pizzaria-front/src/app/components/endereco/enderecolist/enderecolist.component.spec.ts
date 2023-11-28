import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecolistComponent } from './enderecolist.component';

describe('EnderecolistComponent', () => {
  let component: EnderecolistComponent;
  let fixture: ComponentFixture<EnderecolistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnderecolistComponent]
    });
    fixture = TestBed.createComponent(EnderecolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
