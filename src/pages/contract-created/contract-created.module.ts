import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContractCreatedPage } from './contract-created';

@NgModule({
  declarations: [
    ContractCreatedPage,
  ],
  imports: [
    IonicPageModule.forChild(ContractCreatedPage),
  ],
})
export class ContractCreatedPageModule {}
