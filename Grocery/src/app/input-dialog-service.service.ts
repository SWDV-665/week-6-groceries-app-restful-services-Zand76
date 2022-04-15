import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from './groceries-service.service';


@Injectable({
  providedIn: 'root'
})
export class InputDialogServiceService {

  constructor(
    public toastCtrl: ToastController, 
    public alertCtrl: AlertController,
    public dataService: GroceriesServiceService
    ) {
    console.log('Hello InputDialogService');
   }

  async showPrompt(item?, index?) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: item ? 'Edit Item': 'Add Item', //If there is no item...
      message: item ? "Please edit item": 'Please enter item', //...add new item
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name',
          value: item ? item.name: null //if no item
        },        
        {
          name: 'quantity',
          type: 'number',
          placeholder: 'Quantity',
          min: 1,
          max: 10,
          value: item ? item.quantity: null
        },
        ],
      
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (item) => {
            console.log('Cancel clicked');
          }
        }, {
          text: 'Save',
          handler: (item) => {
            console.log('Save clicked', item);
            if (index !== undefined) {  //If item exists
              this.dataService.editItem(item, index);
            }
            else {
              this.dataService.addItem(item);
            }
          }
        }
      ]
    });
    await alert.present();
  }

}
