import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { SabordetailsComponent } from './sabordetails.component';

describe('SabordetailsComponent', () => {
  let component: SabordetailsComponent;
  let fixture: ComponentFixture<SabordetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SabordetailsComponent],
      imports: [HttpClientTestingModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(SabordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form fields', () => {
    expect(component.sabor).toBeDefined();
    expect(component.sabor.nomeSabor).toBe('');
  });

  it('should bind the input field correctly', () => {
    const compiled = fixture.debugElement.nativeElement;
    const saborInput = compiled.querySelector('input[name="exampleInputText1"]');

    const mockSabor = { nomeSabor: 'Test Sabor', id: 1, ativo: true, registro: new Date(), atualizar: new Date() };
    component.sabor = mockSabor;
    fixture.detectChanges();

    expect(saborInput.value).toEqual(mockSabor.nomeSabor);
  });

  it('should call the salvar method on form submit', () => {
    spyOn(component, 'salvar');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    expect(component.salvar).toHaveBeenCalled();
  });

  it('should emit the retorno event when salvar is called', () => {
    spyOn(component.retorno, 'emit');
    component.salvar();
    expect(component.retorno.emit).toHaveBeenCalled();
  });


});
