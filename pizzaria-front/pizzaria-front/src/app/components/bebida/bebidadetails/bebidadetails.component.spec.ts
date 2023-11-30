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
});
