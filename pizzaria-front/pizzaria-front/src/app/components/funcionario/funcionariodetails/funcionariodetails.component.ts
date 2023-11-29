import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario/funcionario.service';

@Component({
  selector: 'app-funcionariodetails',
  templateUrl: './funcionariodetails.component.html',
  styleUrls: ['./funcionariodetails.component.scss']
})
export class FuncionariodetailsComponent {

  @Input() funcionario: Funcionario = new Funcionario();
  @Output() retorno = new EventEmitter<Funcionario>;

  funcionarioService = inject(FuncionarioService);

  constructor(){}

  salvar(){
    this.retorno.emit(this.funcionario);
  }
}