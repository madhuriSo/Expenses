import { Component } from '@angular/core';

import { EditItemComponent } from './components/edit-item/edit-item.component';
import {Item} from './models/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EXPENSES';
  amount='xyz';
  item=new Item();

  addExpense(){
    console.log("Add this expense "+this.item.title+" Amount: "+this.item.amount);
  }
}


