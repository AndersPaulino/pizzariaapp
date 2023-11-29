import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Sabor } from 'src/app/models/sabor/sabor';
import { SaborService } from 'src/app/services/sabor/sabor.service';
@Component({
  selector: 'app-sabordetails',
  templateUrl: './sabordetails.component.html',
  styleUrls: ['./sabordetails.component.scss']
})
export class SabordetailsComponent {

  @Input() sabor: Sabor = new Sabor();
  @Output() retorno = new EventEmitter<Sabor>;

  saborService = inject(SaborService);

  constructor(){}

  salvar(){
    this.retorno.emit(this.sabor);
  }
}