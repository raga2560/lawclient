import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContractIssuePage } from './contract-issue';

@NgModule({
  declarations: [
    ContractIssuePage,
  ],
  imports: [
    IonicPageModule.forChild(ContractIssuePage),
  ],
})
export class ContractIssuePageModule {}
