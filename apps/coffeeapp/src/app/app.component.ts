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


  public coffees: Coffee[];

  public searchCoffee: Coffee[];

  // @ts-ignore
  public ingredients: String[];

  public findIngr: String[];
  constructor(private  coffeeService:CoffeeService){
    this.coffees = [];
    this.searchCoffee = [];
    this.findIngr = [];

  }

  public onOpenModal(coffee:Coffee | null, mode: string):void{
    console.log(coffee, mode);
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
  public addCoffee(coffee:Coffee){
    console.log(coffee);

    this.coffeeService.addCoffee(coffee);
    coffee.ingredients.forEach(n=>{
      this.ingredients.push(n);
    })
  }
  public searchCoffeeService(searIngr:String[]){
    console.log(searIngr);
    this.searchCoffee = this.coffeeService.getCoffeeByIngredients(searIngr);
    console.log(this.searchCoffee);
  }

  public getIngredients(){
    this.ingredients = this.coffeeService.getAllIngredient();
  }

  ngOnInit(): void {
   this.getIngredients();
  }

}
