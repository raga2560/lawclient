import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Auth } from './auth';
import 'rxjs/add/operator/map';

import { environment } from '../config/environment';

let url = environment.url;

@Injectable()
export class Contract {

  url : string;
  constructor(public http: Http, public authService: Auth) {
     this.url = url;

  }

  getContracts(dealer){

    var tryurl = this.url + '/api/contract/getcontracts' 
    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Authorization', this.authService.token);

      this.http.get(tryurl, {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });

  }

  getContract(contractid ){


    var tryurl = this.url + '/api/contract/getContract/' + contractid;
    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Authorization', this.authService.token);

      this.http.get(tryurl, {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });

  }

  createContract(contractdata){

    var tryurl = this.url + '/api/contract/createcontract/';

    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', this.authService.token);

      this.http.post(tryurl ,JSON.stringify(contractdata), {headers: headers})
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });

    });

  }
  

  deleteContract(contractdata){

    var tryurl = this.url + '/api/contract/delete/' ;

  	return new Promise((resolve, reject) => {

	    let headers = new Headers();
            headers.append('Content-Type', 'application/json');
	    headers.append('Authorization', this.authService.token);

           this.http.post(tryurl,JSON.stringify(contractdata), {headers: headers})
          .map(res => res.json())
          .subscribe(res => {
	    	resolve(res);
	    }, (err) => {
	    	reject(err);
	    });    

  	});

  }


  executeContract(contractdata){
    var contractid =1;

    var tryurl = this.url + '/api/contract/execute/' ;

  	return new Promise((resolve, reject) => {

	    let headers = new Headers();
            headers.append('Content-Type', 'application/json');
	    headers.append('Authorization', this.authService.token);

           this.http.post(tryurl,JSON.stringify(contractdata), {headers: headers})
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });


  	});

  }


}
