import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [HttpClientTestingModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // CASO DE TESTE 1
  it('TESTE 1 - Criação OK do Componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve conter o texto adequado no parágrafo', () => {
    const paragraphElement: HTMLElement = fixture.nativeElement.querySelector('p');
    expect(paragraphElement).toBeTruthy();

    const expectedText = 'Criado por Anderson Paulino e Matheus Aguiar\nAlunos do 4 Periodo de Engenharia de Software\n©UniÁmerica';
    expect(paragraphElement.textContent).toContain(expectedText);
  });
});
