import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { ImagePicker } from '@ionic-native/photo-library/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  data: any[] = []
  registerUserForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private imagePicker: ImagePicker) {
    this.registerUserForm = this.fb.group({
      
      'firstName' : ['', [Validators.required]],
      'secondName': ['', [Validators.required]]
  
  })
  }
  
  selectPicture(){
    console.log('inicia método');
    
    let options = {
      maximumImagesCount: 8,
      width: 500,
      height: 500,
      quality: 75
    }

    console.log('luego de options');
    

    this.imagePicker.getPictures(options).then((results) => {
      console.log('ejecuta peticion');
      
      for (var i = 0; i < results.length; i++) {
        console.log('comienza a recorrer');
        
          console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });

    // console.log('Entró a selectPicture')
    // this.photoLibrary.requestAuthorization().then(() => {
    //   console.log('Entró a selectPicture2')
    //   this.photoLibrary.getLibrary().subscribe({
    //     next: library => {
    //       library.forEach(function(libraryItem) {
    //         console.log(libraryItem.id);          // ID of the photo
    //         console.log(libraryItem.photoURL);    // Cross-platform access to photo
    //         console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
    //         console.log(libraryItem.fileName);
    //         console.log(libraryItem.width);
    //         console.log(libraryItem.height);
    //         console.log(libraryItem.creationDate);
    //         console.log(libraryItem.latitude);
    //         console.log(libraryItem.longitude);
    //         console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
    //       });
    //     },
    //     error: err => { console.log('could not get photos'); },
    //     complete: () => { console.log('done getting photos'); }
    //   });
    // })
    // .catch(err => console.log('permissions weren\'t granted'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
