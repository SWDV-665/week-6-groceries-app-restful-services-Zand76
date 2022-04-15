import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceriesServiceService {

  items = [];

  constructor() {
    console.log('Hello GroceriesService Service');
   }

  getItems() {
    return this.items;
  }

  removeItem(index) {
    this.items.splice(index, 1);//Research this more
  }

  addItem(item) {
    this.items.push(item);
  }

  editItem(item, index) {
    this.items[index] = item; //Research more
  }

}
