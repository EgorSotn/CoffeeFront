import {Component, Input} from '@angular/core';
import {Coffee} from "../coffee";
import {CoffeeService} from "../coffee.service";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-edit-coffee',
  templateUrl: './edit-coffee.component.html',
  styleUrls: ['./edit-coffee.component.css'],
})
export class EditCoffeeComponent {
  // @ts-ignore
  @Input() searchCoffee: Coffee[];
  constructor() {
    this.searchCoffee = [];
  }

}
