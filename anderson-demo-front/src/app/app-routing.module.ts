import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCreateComponent } from './components/cliente-create/cliente-create.component';
import { ClienteSearchComponent } from './components/cliente-search/cliente-search.component';

const routes: Routes = [
  { path: 'createCliente', component: ClienteCreateComponent },
  { path: 'listCliente', component: ClienteSearchComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
