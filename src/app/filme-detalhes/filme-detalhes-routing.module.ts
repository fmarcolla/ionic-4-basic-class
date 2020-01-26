import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmeDetalhesPage } from './filme-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: FilmeDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmeDetalhesPageRoutingModule {}
