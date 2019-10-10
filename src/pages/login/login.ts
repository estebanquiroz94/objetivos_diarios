import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  data: any[] = []
  registerForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb : FormBuilder) {

    this.registerForm = this.fb.group({
      
      'email' : ['', [Validators.email, Validators.required]],
      'password' : ['',[Validators.required]]

  })
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  authenticateUser(){
    console.log(this.data);
    
    
  }

}
