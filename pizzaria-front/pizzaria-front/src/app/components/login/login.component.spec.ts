import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the logar method on form submit', () => {
    spyOn(component, 'logar');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    expect(component.logar).toHaveBeenCalled();
  });

  it('should bind the login input value to usuario.login', waitForAsync(() => {
    const loginInput = fixture.nativeElement.querySelector('input[name="loginInput"]');
    const testValue = 'testLogin';

    fixture.whenStable().then(() => {
      loginInput.value = testValue;
      loginInput.dispatchEvent(new Event('input'));

      fixture.detectChanges(); // Detect changes after updating input value

      expect(component.usuario.login).toEqual(testValue);
    });
  }));

  it('should bind the senha input value to usuario.senha', waitForAsync(() => {
    const senhaInput = fixture.nativeElement.querySelector('input[name="senhaInput"]');
    const testValue = 'testSenha';

    fixture.whenStable().then(() => {
      senhaInput.value = testValue;
      senhaInput.dispatchEvent(new Event('input'));

      fixture.detectChanges(); // Detect changes after updating input value

      expect(component.usuario.senha).toEqual(testValue);
    });
  }));

  it('should update the view when usuario.login changes', fakeAsync(() => {
    const loginInput = fixture.nativeElement.querySelector('input[name="loginInput"]');
    const testValue = '';

    component.usuario.login = testValue;
    fixture.detectChanges();
    tick();

    expect(loginInput.value).toEqual(testValue);
  }));

  it('should update the view when usuario.senha changes', fakeAsync(() => {
    const senhaInput = fixture.nativeElement.querySelector('input[name="senhaInput"]');
    const testValue = '';

    component.usuario.senha = testValue;
    fixture.detectChanges();
    tick();

    expect(senhaInput.value).toEqual(testValue);
  }));
});
