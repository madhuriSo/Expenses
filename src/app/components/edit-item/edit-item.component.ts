import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService } from '../../services/item.service';
import {Item} from '../../models/item.model';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css'],
  
})
export class EditItemComponent implements OnInit {

  public items: Observable<Item[]>;
  public constructor(private itemService:ItemService) {
   

   }

  ngOnInit():void{
    console.log("EditItemComponent---oninit---");
    this.items=this.itemService.all();

    console.log(this.items.subscribe((res: any) => {
   
      console.log(res);
    }, err => {
      console.log(err);
    }));

  
  }

}
