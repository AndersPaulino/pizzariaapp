import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { BebidaDetailsComponent } from './bebidadetails.component';
import { FormsModule } from '@angular/forms';
import { Bebida } from 'src/app/models/bebida/bebida';
import { BebidaService } from 'src/app/services/bebida/bebida.service';
import { inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

describe('BebidaDetailsComponent', () => {
  let component: BebidaDetailsComponent;
  let fixture: ComponentFixture<BebidaDetailsComponent>;
  let bebidaService: BebidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BebidaDetailsComponent],
      imports: [FormsModule, HttpClientModule],
      providers: [BebidaService],
    });
    fixture = TestBed.createComponent(BebidaDetailsComponent);
    component = fixture.componentInstance;
    bebidaService = TestBed.inject(BebidaService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the bebida when salvar is called', () => {
    const bebida = new Bebida();
    spyOn(component.retorno, 'emit');

    component.bebida = bebida;
    component.salvar();

    expect(component.retorno.emit).toHaveBeenCalledWith(bebida);
  });

  it('should render the form with input fields and a submit button', waitForAsync(() => {
    component.bebida = new Bebida();
    fixture.detectChanges();

    const formElement = fixture.nativeElement.querySelector('form');
    expect(formElement).toBeTruthy();

    const nomeInput = fixture.nativeElement.querySelector('input[name="exampleInputText1"]');
    const valorInput = fixture.nativeElement.querySelector('input[name="exampleInputPassword1"]');
    const submitButton = fixture.nativeElement.querySelector('button[type="submit"]');

    expect(nomeInput).toBeTruthy();
    expect(valorInput).toBeTruthy();
    expect(submitButton).toBeTruthy();
  }));

  it('should bind the input fields correctly', waitForAsync(() => {
    const compiled = fixture.debugElement.nativeElement;

    // Simulate user input
    const nomeInput = compiled.querySelector('input[name="exampleInputText1"]');
    const valorInput = compiled.querySelector('input[name="exampleInputPassword1"]');

    const mockBebida: Bebida = {
      id: 1,
      ativo: true,
      registro: new Date(),
      atualizar: new Date(),
      nomeBebida: 'Test Bebida',
      valorBebida: 10.99,
    };

    // Update the component's bebida property with the mock data
    component.bebida = mockBebida;
    fixture.detectChanges();

    // Check if the input fields are correctly bound
    expect(nomeInput.value).toEqual(mockBebida.nomeBebida);
    expect(parseFloat(valorInput.value)).toEqual(mockBebida.valorBebida);
}));


  it('should update the component property on input changes', waitForAsync(() => {
    const compiled = fixture.debugElement.nativeElement;

    // Simulate user input
    const nomeInput = compiled.querySelector('input[name="exampleInputText1"]');
    const valorInput = compiled.querySelector('input[name="exampleInputPassword1"]');

    // Update input fields with new values
    const newNome = 'New Test Bebida';
    const newValor = 15.99;

    // Trigger input events to simulate user typing
    nomeInput.value = newNome;
    nomeInput.dispatchEvent(new Event('input'));

    valorInput.value = newValor.toString();
    valorInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    // Check if the component property is correctly updated
    expect(component.bebida.nomeBebida).toEqual(newNome);
    expect(component.bebida.valorBebida).toEqual(newValor);
  }));
});
