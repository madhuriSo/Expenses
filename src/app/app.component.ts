import { Component } from '@angular/core';

import { EditItemComponent } from './components/edit-item/edit-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Expenses';
  amount='xyz';
}
