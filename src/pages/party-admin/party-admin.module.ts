import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartyAdminPage } from './party-admin';

@NgModule({
  declarations: [
    PartyAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(PartyAdminPage),
  ]
})
export class PartyAdminPageModule {}
