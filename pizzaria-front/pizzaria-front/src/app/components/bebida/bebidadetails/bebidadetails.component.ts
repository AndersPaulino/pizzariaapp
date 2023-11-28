import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Bebida } from 'src/app/models/bebida/bebida';
import { BebidaService } from 'src/app/services/bebida/bebida.service';

@Component({
  selector: 'app-bebida-details',
  templateUrl: './bebidadetails.component.html',
  styleUrls: ['./bebidadetails.component.scss']
})
export class BebidaDetailsComponent {

  @Input() bebida: Bebida = new Bebida();
  @Output() retorno = new EventEmitter<Bebida>();

  bebidaService = inject(BebidaService);

  constructor(){}

  salvar(){
    this.retorno.emit(this.bebida);
  }
}