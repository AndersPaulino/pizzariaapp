import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaborlistComponent } from './saborlist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('SaborlistComponent', () => {
  let component: SaborlistComponent;
  let fixture: ComponentFixture<SaborlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaborlistComponent],
      imports: [HttpClientTestingModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(SaborlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the list of flavors', () => {
    component.lista = [
      { id: 1, nomeSabor: 'Sabor 1', ativo: true, registro: new Date(), atualizar: new Date() },
      { id: 2, nomeSabor: 'Sabor 2', ativo: false, registro: new Date(), atualizar: new Date() },
    ];
    fixture.detectChanges();
    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(2);
    expect(rows[0].cells[1].textContent).toContain('Sabor 1');
    expect(rows[0].cells[2].textContent).toContain('Sim');
    expect(rows[1].cells[1].textContent).toContain('Sabor 2');
    expect(rows[1].cells[2].textContent).toContain('Não');
  });


});
