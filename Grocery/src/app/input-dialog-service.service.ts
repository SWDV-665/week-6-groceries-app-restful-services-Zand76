import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from './groceries-service.service';


@Injectable({
  providedIn: 'root'
})
export class InputDialogServiceService {

  constructor(
    public alertCtrl: AlertController,
    public dataService: GroceriesServiceService
    ) {
    console.log('Hello InputDialogService');
   }

  async showPrompt(item?, index?) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: item ? "Edit Item" : "Add Item", //If there is no item...
      message: item ? "Please edit item" : "Please enter item", //...add new item
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name',
          value: item ? item.name : null //if no item
        },        
        {
          name: 'quantity',
          type: 'number',
          placeholder: 'Quantity',
          min: 1,
          max: 10,
          value: item ? item.quantity : null
        },
      ],
      
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: data => {
            console.log('Cancel clicked');
          }
        }, 
        {
          text: 'Save',
          handler: data => {
            console.log('Save Handler', data);
            if (index !== undefined) {  //If item exists
              item.name = data.name;
              item.quantity = data.quantity;
              this.dataService.editItem(item, index);
            }
            else {
              this.dataService.addItem(data);
            }
          }
        }
      ]
    });
    await alert.present();
  }

}
