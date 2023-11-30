import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnderecolistComponent } from './enderecolist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('EnderecolistComponent', () => {
  let component: EnderecolistComponent;
  let fixture: ComponentFixture<EnderecolistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnderecolistComponent],
      imports: [HttpClientTestingModule,FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(EnderecolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the list of addresses', () => {
    component.lista = [
      { id: 1, bairro: 'Example Bairro 1', rua: 'Example Rua 1', numero: 123, ativo: true, registro: new Date(), atualizar: new Date() },
      { id: 2, bairro: 'Example Bairro 2', rua: 'Example Rua 2', numero: 456, ativo: false, registro: new Date(), atualizar: new Date() },
    ];
    fixture.detectChanges();

    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(2);
    expect(rows[0].cells[1].textContent).toContain('Example Bairro 1');
    expect(rows[0].cells[2].textContent).toContain('Example Rua 1');
    expect(rows[0].cells[3].textContent).toContain('123');
    expect(rows[0].cells[4].textContent).toContain('Sim');
    expect(rows[1].cells[1].textContent).toContain('Example Bairro 2');
    expect(rows[1].cells[2].textContent).toContain('Example Rua 2');
    expect(rows[1].cells[3].textContent).toContain('456');
    expect(rows[1].cells[4].textContent).toContain('Não');
  });

  it('should call editar method on edit button click', () => {
    spyOn(component, 'editar');
    const editButton = fixture.nativeElement.querySelector('tbody tr:first-child button:first-child');
    editButton.click();

    expect(component.editar).toHaveBeenCalled();
  });

  it('should call editar method on edit button click', () => {
    spyOn(component, 'editar');
    fixture.detectChanges(); // Garante que o template seja renderizado
    const editButton = fixture.nativeElement.querySelector('button.btn-primary');
    editButton.click();
  
    expect(component.editar).toHaveBeenCalled();
  });
});
