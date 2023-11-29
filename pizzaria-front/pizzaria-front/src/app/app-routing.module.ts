import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/layout/index/index.component';
import { BebidasListComponent } from './components/bebida/bebidalist/bebidalist.component';
import { EnderecolistComponent } from './components/endereco/enderecolist/enderecolist.component';
import { SaborlistComponent } from './components/sabor/saborlist/saborlist.component';
import { FuncionariolistComponent } from './components/funcionario/funcionariolist/funcionariolist.component';
import { ClientelistComponent } from './components/cliente/clientelist/clientelist.component';
import { PizzalistComponent } from './components/pizza/pizzalist/pizzalist.component';
import { VendaListComponent } from './components/venda/vendalist/vendalist.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  {
    path: "admin", component: IndexComponent, children: [
      { path: "bebida", component: BebidasListComponent },
      { path: "endereco", component: EnderecolistComponent },
      { path: "sabor", component: SaborlistComponent },
      { path: "funcionario", component:FuncionariolistComponent },
      { path: "cliente", component:ClientelistComponent },
      { path: "pizza", component:PizzalistComponent },
      { path: "venda", component:VendaListComponent }
]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
