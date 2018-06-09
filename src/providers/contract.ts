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

  getContracts(){

    var tryurl = this.url + '/api/contract/getContracts' 
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
  

  deleteContract(contractid){

    var tryurl = this.url + '/api/contract/delete/' + contractid;

  	return new Promise((resolve, reject) => {

	    let headers = new Headers();
	    headers.append('Authorization', this.authService.token);

	    this.http.delete(tryurl, {headers: headers}).subscribe((res) => {
	    	resolve(res);
	    }, (err) => {
	    	reject(err);
	    });    

  	});

  }


  executeContract(contractdata){
    var contractid =1;

    var tryurl = this.url + '/api/contract/execute/' + contractid;

  	return new Promise((resolve, reject) => {

	    let headers = new Headers();
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
