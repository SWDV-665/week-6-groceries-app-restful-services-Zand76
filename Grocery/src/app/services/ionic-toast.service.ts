import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IonicToastService {

  public toastCtrl: any;

  constructor(
    public toast: ToastController
  ) { }

  showToast() {
    this.toastCtrl = this.toast.create({
      message: 'Removing Item - ',
      duration: 3000,
      position: 'top'
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
}
