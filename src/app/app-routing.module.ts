import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendedorCreateComponent } from './components/views/vendedor/vendedor-create/vendedor-create.component';
import { HomeComponent } from './components/views/home/home.component';
import { VendaCreateComponent } from './components/views/venda/venda-create/venda-create.component';
import { VendaReadAllComponent } from './components/views/venda/venda-read-all/venda-read-all.component';
import { VendaReadComponent } from './components/views/venda/venda-read/venda-read.component';
import { VendaUpdateComponent } from './components/views/venda/venda-update/venda-update.component';
import { VendaBuscaIdComponent } from './components/views/venda/venda-buscaId/venda-buscaId.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'vendedor/create',
    component: VendedorCreateComponent
  },
  {
    path: 'vendas',
    component: VendaReadAllComponent
  },
  {
    path: 'vendas/create',
    component: VendaCreateComponent
  },
  {
    path: 'vendas/buscaId',
    component: VendaBuscaIdComponent
  },
  {
    path: 'vendas/:id/update',
    component: VendaUpdateComponent
  },
  {
    path: 'vendas/:id/read',
    component: VendaReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }