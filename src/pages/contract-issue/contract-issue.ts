import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CouponIssuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract-issue',
  templateUrl: 'contract-issue.html',
})
export class ContractIssuePage {
  numberofparties : Number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.numberofparties = 1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CouponIssuePage');
  }

}