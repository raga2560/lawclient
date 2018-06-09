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
  contractdata: any;
  contractid : any;

  constructor(public navCtrl: NavController, public contractService: Contract, 
              public loadingCtrl: LoadingController,
              public navParams: NavParams) {

       this.contractid = navParams.data.contractid;
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
        contractid: this.contractid;
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



  
}
