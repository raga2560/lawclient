import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Contract } from '../../providers/contract';

/**
 * Generated class for the ContractCreatedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract-created',
  templateUrl: 'contract-created.html',
})
export class ContractCreatedPage {

  numberofparties : Number;
  contracts: any;
  contract: any;
  balance: any;
  loading: any;
  amount: any;
  contractdata: any;
  contractid : any;

  constructor(public navCtrl: NavController, public contractService: Contract, 
              public loadingCtrl: LoadingController,
              public navParams: NavParams) {

       this.contract = null;
       if(typeof this.navParams.data.contract == "undefined")
       {
	  this.navCtrl.push('DealsPage');
       }
       this.contract = this.navParams.data.contract;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractIssuePage');
  }

  showLoader(){

    this.loading = this.loadingCtrl.create({
      content: 'Working...'
    });

    this.loading.present();

  }
  

  getContract() {
    this.showLoader();

   var contractdata = {
        contractid: this.contractid
   };
   this.contractService.getContract(contractdata).then((result) => {
                this.loading.dismiss();
//                this.contract = result;
                                        console.log("contract created");
                                }, (err) => {
                this.loading.dismiss();
                                        console.log("not allowed"+ err);
                                });
  }


  deleteContract() {
    this.showLoader();

   var contractdata = {
        contractid: this.contractid
   };
   this.contractService.deleteContract(contractdata).then((result) => {
                this.loading.dismiss();
//                this.contract = result;
                                        console.log("contract created");
                                }, (err) => {
                this.loading.dismiss();
                                        console.log("not allowed"+ err);
                                });
  }
  executeContract() {
    var contractdata = {
       contract: this.contract,
       amount: this.amount  
    };
    this.showLoader();

   this.contractService.executeContract(contractdata).then((result) => {
                this.loading.dismiss();
//                this.contract = result;
                                        console.log("contract created");
                                }, (err) => {
                this.loading.dismiss();
                                        console.log("not allowed"+ err);
                                });
  }
  
  
}
