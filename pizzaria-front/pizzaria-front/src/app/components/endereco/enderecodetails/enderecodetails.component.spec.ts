import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnderecodetailsComponent } from './enderecodetails.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('EnderecodetailsComponent', () => {
  let component: EnderecodetailsComponent;
  let fixture: ComponentFixture<EnderecodetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnderecodetailsComponent],
      imports: [HttpClientTestingModule,FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(EnderecodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the input fields initialized', () => {
    const bairroInput = fixture.nativeElement.querySelector('input[name="exampleInputText1"]');
    const ruaInput = fixture.nativeElement.querySelector('input[name="exampleInputText2"]');
    const numeroInput = fixture.nativeElement.querySelector('input[name="exampleInputPassword1"]');

    expect(bairroInput).toBeTruthy();
    expect(ruaInput).toBeTruthy();
    expect(numeroInput).toBeTruthy();
  });

  it('should update the model on input change', () => {
    const bairroInput = fixture.nativeElement.querySelector('input[name="exampleInputText1"]');
    bairroInput.value = 'Example Bairro';
    bairroInput.dispatchEvent(new Event('input'));

    expect(component.endereco.bairro).toBe('Example Bairro');
  });

  it('should call salvar method on form submit', () => {
    spyOn(component, 'salvar');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    expect(component.salvar).toHaveBeenCalled();
  });
});