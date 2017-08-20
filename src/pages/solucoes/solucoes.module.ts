import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SolucoesPage } from './solucoes';

@NgModule({
  declarations: [
    SolucoesPage,
  ],
  imports: [
    IonicPageModule.forChild(SolucoesPage),
  ],
})
export class SolucoesPageModule {}
