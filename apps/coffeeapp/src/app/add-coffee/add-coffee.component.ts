import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Coffee} from "../coffee";
import {CoffeeService} from "../coffee.service";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-add-coffee',
  templateUrl: './add-coffee.component.html',
  styleUrls: ['./add-coffee.component.css'],
})
export class AddCoffeeComponent {
  @Output() outEnter = new EventEmitter<Coffee>;
  private ingredients: String[];
  constructor() {
    this.ingredients = [];
  }
  public onAddCoffee(addForm:NgForm):void {
    // @ts-ignore
    document.getElementById('add-coffee-form').click();
    let coffee: Coffee = addForm.value;
    coffee.title  = addForm.value.title;
    let newIngr = addForm.value.ingredients.split(", ")
    coffee.ingredients = newIngr;

    this.outEnter.emit(coffee);
  }
}
