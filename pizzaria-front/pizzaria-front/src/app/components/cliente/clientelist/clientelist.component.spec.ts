import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientelistComponent } from './clientelist.component';

describe('ClientelistComponent', () => {
  let component: ClientelistComponent;
  let fixture: ComponentFixture<ClientelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientelistComponent]
    });
    fixture = TestBed.createComponent(ClientelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
