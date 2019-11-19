import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { ScanidPage } from '../scanid/scanid';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  gotoFPPage()
  {   
    this.navCtrl.push(ForgotpasswordPage);
  }

  login()
  {
    this.navCtrl.push(ScanidPage);
  }

}
