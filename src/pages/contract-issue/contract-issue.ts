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
  partyid: any;
  userid: any;
  percentage: any;
  depositaddress: any;
  aggrement: any;
  parties: Array<any>;

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
     this.depositaddress = '';
     this.aggrement = '';
      this.parties = [];
      var party = {
          partyid: 'dealer',
          userid: 'surya',
          percentage: 10,
          pinsent: false,
          pinreceived: false,
          pinprovided: ''
      };
      this.parties.push(party);

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


  saveParty()
  {
      var party = {
          partyid: this.partyid,
          userid: this.userid,
          percentage: this.percentage,
          pinsent: false,
          pinreceived: false,
          pinprovided: false

      };

      this.parties.push(party);
  }
  
  createContract() {
    this.showLoader();
    this.contractdata = {
     user: 'surya',
     depositaddress: this.depositaddress,
     parties: this.parties,
     aggrement: '',
     details: ''
    };

   this.contractService.createContract(this.contractdata).then((result) => {
                this.loading.dismiss();
                this.contract = result;
                this.navCtrl.push('DealsPage');
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
