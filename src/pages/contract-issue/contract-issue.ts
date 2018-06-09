import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Contract } from '../../providers/contract';

/**
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
  contracts: any;
  contract: any;
  balance: any;
  loading: any;
  contractdata: any;

  constructor(public navCtrl: NavController, public contractService: Contract, 
              public loadingCtrl: LoadingController,
              public navParams: NavParams) {

       this.contractdata = {
            contractid: '',
            contracttype: '',
	    contractvalue: '',
            contractpin: ''
       };
     this.numberofparties = 1;
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
  
  contractCreate() {
    this.showLoader();

   this.contractService.createContract(this.contractdata).then((result) => {
                this.loading.dismiss();
                this.contract = result;
                                        console.log("contract created");
                                }, (err) => {
                this.loading.dismiss();
                                        console.log("not allowed"+ err);
                                });
  }

  getContract() {
    this.showLoader();

   var contractdata = {
        name: 'test'
   };
   this.contractService.getContract(contractdata).then((result) => {
                this.loading.dismiss();
                this.contract = result;
                                        console.log("contract created");
                                }, (err) => {
                this.loading.dismiss();
                                        console.log("not allowed"+ err);
                                });
  }

  
  
  
}
