import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanidPage } from './scanid';

@NgModule({
  declarations: [
    ScanidPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanidPage),
  ],
})
export class ScanidPageModule {}
