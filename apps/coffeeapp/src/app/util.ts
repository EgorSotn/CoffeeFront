import {Coffee} from "./coffee";
import {Injectable} from "@angular/core";
import {Data} from "./data";

@Injectable({
  providedIn: 'root'
})
export class Util{
  // @ts-ignore
  private coffees: Coffee[];
  // @ts-ignore
  private ingredientsList: Set<String>;
  constructor(data: Data) {
    // @ts-ignore
    this.ingredientsList = new Set<String>();
    this.coffees = data.coffees;
  }

  public getAllIngredient(){
    this.coffees.forEach(value => {
      value.ingredients.forEach(i=>{
        this.ingredientsList.add(i);
      })
    })
    return this.ingredientsList;
  }




  public addToListCoffee(coffee: Coffee):Coffee{
    console.log(coffee);
    this.coffees.push(coffee)
    coffee.ingredients.forEach(i=>{
      this.ingredientsList.add(i);
    });
    return coffee;
  }
  public getAllCoffee():Coffee[]{
    return this.coffees;
  }
  public deleteCoffeeById(id:Number) {
    this.coffees.filter(value => value.id != id);
  }
  public getCoffeeById(id:Number):Coffee | null {
      // @ts-ignore
    this.coffees.forEach(value => {
        if(value.id == id){
          return value;
        }
      })
    return null;
  }
  public getCoffeeByIngredients(ings:String[]):Coffee[]{
    let count  = 0;
    let buff: Coffee[] = [];

    this.coffees.forEach(value => {
      for(let i = 0; i<value.ingredients.length; ++i){
        for(let j = i; j<ings.length; ++j) {
          if (value.ingredients[i] === ings[j]) {
            count++;
          }
        }
      }
      if(count === value.ingredients.length && value.ingredients.length == ings.length  &&  ings.length!=0){
        console.log(value);
        buff.push(value);
      }
      count = 0;
    })

    // console.log(buff);

    return buff;
  }
}
