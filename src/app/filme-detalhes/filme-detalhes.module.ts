import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmeDetalhesPageRoutingModule } from './filme-detalhes-routing.module';

import { FilmeDetalhesPage } from './filme-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmeDetalhesPageRoutingModule
  ],
  declarations: [FilmeDetalhesPage]
})
export class FilmeDetalhesPageModule {}
