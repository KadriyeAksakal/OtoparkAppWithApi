import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Slides} from 'ionic-angular';
import {ViewChild}from '@angular/core';
import { CekilenAracPage } from '../cekilen-arac/cekilen-arac';
import { OtoparkPage } from '../otopark/otopark';
import { ProfilPage } from '../profil/profil';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   @ViewChild(Slides) slides: Slides;
   Result ={
    Header:"" ,
    Description:"",
    Image:"",
    Url:""

   }
  kapasite:any;
  constructor(public navCtrl: NavController) {
  
  
  } 
 /* getKapasite(){
    this.rest.getKapasite().then(data=>{
      this.kapasite=data;
      console.log(this.kapasite);
    });
  }*/
  
  ionViewDidLoad(){
    setTimeout(()=>this.slides.slideTo(1, 1000),1000);
  }
  arac()
  {this.navCtrl.push(CekilenAracPage);
  }
  otopark()
  {
    this.navCtrl.push(OtoparkPage);
  }
  profil()
  {
    this.navCtrl.push(ProfilPage);
  }
  
}
