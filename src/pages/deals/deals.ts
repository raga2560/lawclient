import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Contract } from '../../providers/contract';

/**
 * Generated class for the DealsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deals',
  templateUrl: 'deals.html',
})
export class DealsPage {

  numberofparties : Number;
  contracts: Array<any>;
  contract: any;
  balance: any;
  loading: any;
  contractdata: any;
  contractid : any;
  dealerid : any;

  constructor(public navCtrl: NavController, public contractService: Contract, 
              public loadingCtrl: LoadingController,
              public navParams: NavParams) {

         this.dealerid = 'surya';
         this.contracts = [];
         //this.getContracts();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractIssuePage');
    this.getContracts();
  }

  showLoader(){

    this.loading = this.loadingCtrl.create({
      content: 'Working...'
    });

    this.loading.present();

  }
  refresh()
  {
    this.getContracts();
  }
 
  selectContract(contract) 
  {
    this.navCtrl.push('ContractCreatedPage', {contract: contract});
     
  } 

  getContracts() {
    this.showLoader();

   var dealer = {
        dealerid: this.dealerid
   };
   this.contractService.getContracts(dealer).then((result) => {
                this.loading.dismiss();
                console.log(result);
                if(result instanceof Array && result.length > 0) {
                   this.contracts = result;
                }
                else {

                   this.contracts = [];
                }
                                }, (err) => {
                this.loading.dismiss();
                   this.contracts = [];
                                });
  }

  
}
