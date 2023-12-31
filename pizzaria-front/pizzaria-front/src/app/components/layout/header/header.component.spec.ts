import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(HeaderComponent);
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

  it('deve conter links de navegação para rotas corretas', () => {
    const linksDeNavegacao = fixture.debugElement.queryAll(By.css('.navbar-nav .nav-link'));

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
      const href = link.nativeElement.getAttribute('routerLink');
      expect(href).toBe(rotasEsperadas[index]);
    });
  });
});
