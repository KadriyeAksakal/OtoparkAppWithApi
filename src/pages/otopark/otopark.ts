import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
@IonicPage()
@Component({
  selector: 'page-otopark',
  templateUrl: 'otopark.html',
})
export class OtoparkPage {
   url:string= "***********api adresi************";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtoparkPage');
  }
getOtopark
nasilGiderim()
  {
     this.navCtrl.push(BackgroundGeolocation);
  }

}

