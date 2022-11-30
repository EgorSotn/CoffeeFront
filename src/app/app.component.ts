import {Component, OnInit} from '@angular/core';
import {Coffee} from "./coffee";
import {CoffeeService} from "./coffee.service";

import {FormArray, FormBuilder, FormControl, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'coffeeapp';
  form: FormGroup;

  // public coffees: Coffee[];

  public searchCoffee: Coffee[];

  public ingredients: String[];

  public findIngr:String[];
  constructor(private  coffeeService:CoffeeService, fb: FormBuilder){
    // this.coffees = [];
    this.searchCoffee = [];
    this.ingredients = [];
    this.findIngr = [];
    this.form = fb.group({
      selectedIngredients:  new FormArray([])
    });
  }
  public onOpenModal(coffee:Coffee | null, mode: string):void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode == 'add'){
      button.setAttribute('data-target', '#addCoffeeModal');
    }
    // @ts-ignore
    container.appendChild(button);
    button.click();
  }
  public onCheckboxChange(event: any) {
    const selectedIngredients = (this.form.controls['selectedIngredients'] as FormArray);
    if (event.target.checked) {
      selectedIngredients.push(new FormControl(event.target.value));
    } else {
      const index = selectedIngredients.controls.findIndex(x => x.value === event.target.value);
      selectedIngredients.removeAt(index);
    }
    this.findIngr = selectedIngredients.value;
  }
  submit() {
     this.searchCoffee = this.coffeeService.getCoffeeByIngredients(this.findIngr);
  }


  // public getCoffees(){
  //   this.coffees = this.coffeeService.getCoffee();
  // }
  public onAddCoffee(addForm:NgForm) {
    // @ts-ignore
    document.getElementById('add-coffee-form').click();
    let coffee: Coffee = addForm.value
    this.coffeeService.addCoffee(coffee);
  }
  public getIngredients(){
    this.ingredients = this.coffeeService.getAllIngredient();
  }

  ngOnInit(): void {
 //   this.getCoffees();
    this.getIngredients();
  }


}
