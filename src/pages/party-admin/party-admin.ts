import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the WalletRadminPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-party-admin',
  templateUrl: 'party-admin.html'
})
export class PartyAdminPage {

  partyactionRoot = 'PartyactionPage'
  partysettingRoot = 'PartysettingPage'
  transactionsRoot = 'TransactionsPage'
  balancesRoot = 'BalancesPage'


  constructor(public navCtrl: NavController) {}

}
