import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { BalanceService } from '../../providers/balance.service';

/**
 * Generated class for the BalancesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-balances',
  templateUrl: 'balances.html',
})
export class BalancesPage {


  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  balances: Array <any>;
  balance: any;
  balanceitem: any;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
 	public loadingCtrl: LoadingController,
	public balanceService: BalanceService) {

    this.items = [];
    this.loading = this.loadingCtrl.create();


    this.balances = [];
    this.balance = {
	address: '2N5ZyMz5xmt47znM9CCKnrLbXmymGLknus9',
	balance: 0,
	unconfirmed_n_tx :0 ,
	unconfirmed_balance :0 ,
	final_balance :0 


	};


  }

  ionViewDidLoad() {
    this.loading.present();

     var address = {
	data: '2N5ZyMz5xmt47znM9CCKnrLbXmymGLknus9'
	};
//https://stackoverflow.com/questions/42104629/angular-2-checking-for-server-errors-from-subscribe

      this.balanceService
      .getBalances(address).subscribe(posts  => {
//	alert(JSON.stringify(posts));
      this.balance = posts;
	//console.log(this.balances);
        this.loading.dismiss();
    }, error => {
	console.log(error);
        this.loading.dismiss();
    });

  }



/*
var ws = new WebSocket("wss://socket.blockcypher.com/v1/btc/main");
var count = 0;
ws.onmessage = function (event) {
  var tx = JSON.parse(event.data);
  var shortHash = tx.hash.substring(0, 6) + "...";
  var total = tx.total / 100000000;
  var addrs = tx.addresses.join(", ");
  console.log("Unconfirmed transaction " + shortHash + " totalling " + total + "BTC involving addresses " + addrs + "");
  count++;
  if (count > 10) ws.close();
}
ws.onopen = function(event) {
  ws.send(JSON.stringify({event: "unconfirmed-tx"}));
}
*/
}

