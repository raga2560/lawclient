import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DealadminPage } from './dealadmin';

@NgModule({
  declarations: [
    DealadminPage,
  ],
  imports: [
    IonicPageModule.forChild(DealadminPage),
  ],
})
export class DealadminPageModule {}
