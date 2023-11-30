import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientedetailsComponent } from './components/cliente/clientedetails/clientedetails.component';
import { ClientelistComponent } from './components/cliente/clientelist/clientelist.component';
import { EnderecolistComponent } from './components/endereco/enderecolist/enderecolist.component';
import { EnderecodetailsComponent } from './components/endereco/enderecodetails/enderecodetails.component';
import { FuncionariolistComponent } from './components/funcionario/funcionariolist/funcionariolist.component';
import { FuncionariodetailsComponent } from './components/funcionario/funcionariodetails/funcionariodetails.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { PizzalistComponent } from './components/pizza/pizzalist/pizzalist.component';
import { PizzadetailsComponent } from './components/pizza/pizzadetails/pizzadetails.component';
import { SaborlistComponent } from './components/sabor/saborlist/saborlist.component';
import { SabordetailsComponent } from './components/sabor/sabordetails/sabordetails.component';
import { LoginComponent } from './components/login/login.component';
import { VendaListComponent } from './components/venda/vendalist/vendalist.component';
import { VendadetailsComponent } from './components/venda/vendadetails/vendadetails.component';
import { IndexComponent } from './components/layout/index/index.component';
import { BebidaListComponent } from './components/bebida/bebidalist/bebidalist.component';
import { BebidaDetailsComponent } from './components/bebida/bebidadetails/bebidadetails.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientedetailsComponent,
    ClientelistComponent,
    EnderecolistComponent,
    EnderecodetailsComponent,
    BebidaDetailsComponent,
    BebidaListComponent,
    FuncionariolistComponent,
    FuncionariodetailsComponent,
    HeaderComponent,
    IndexComponent,
    FooterComponent,
    MenuComponent,
    PizzalistComponent,
    PizzadetailsComponent,
    SaborlistComponent,
    SabordetailsComponent,
    LoginComponent,
    VendaListComponent,
    VendadetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
