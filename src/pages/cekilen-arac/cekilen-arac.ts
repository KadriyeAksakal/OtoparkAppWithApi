import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/*import { HomePage } from '../home/home';*/


@IonicPage()
@Component({
  selector: 'page-cekilen-arac',
  templateUrl: 'cekilen-arac.html',
})
export class CekilenAracPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CekilenAracPage');
  }
  

}
