import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BebidaDetailsComponent } from './bebidadetails.component';
import { Bebida } from 'src/app/models/bebida/bebida';

describe('BebidaDetailsComponent', () => {
  let component: BebidaDetailsComponent;
  let fixture: ComponentFixture<BebidaDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BebidaDetailsComponent]
    });
    fixture = TestBed.createComponent(BebidaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit bebida when salvar is called', () => {
    const bebida = new Bebida();
    spyOn(component.retorno, 'emit');
    component.bebida = bebida;
    component.salvar();
    expect(component.retorno.emit).toHaveBeenCalledWith(bebida);
  });


});