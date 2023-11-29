import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Endereco } from 'src/app/models/endereco/endereco';
import { EnderecoService } from 'src/app/services/endereco/endereco.service';

@Component({
  selector: 'app-enderecodetails',
  templateUrl: './enderecodetails.component.html',
  styleUrls: ['./enderecodetails.component.scss']
})
export class EnderecodetailsComponent {

  @Input() endereco: Endereco = new Endereco();
  @Output() retorno = new EventEmitter<Endereco>;

  enderecoService = inject(EnderecoService);

  constructor(){}

  salvar(){
    this.retorno.emit(this.endereco);
  }
}