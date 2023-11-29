import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [HttpClientTestingModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //CASO DE TESTE 1
  it('TESTE 1 - Criação OK do Componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve conter links de navegação para rotas corretas', () => {
    const linksDeNavegacao = fixture.debugElement.queryAll(By.css('.navbar-nav .nav-link'));

    // Substitua as rotas abaixo pelos caminhos reais do seu aplicativo
    const rotasEsperadas = [
      '/admin/bebida',
      '/admin/sabor',
      '/admin/endereco',
      '/admin/funcionario',
      '/admin/cliente',
      '/admin/pizza',
      '/admin/venda',
      '/login',
    ];

    linksDeNavegacao.forEach((link, index) => {
      const href = link.nativeElement.getAttribute('href');
      expect(href).toBe(rotasEsperadas[index]);
    });
  });
});