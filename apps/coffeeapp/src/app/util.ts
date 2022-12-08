import {Coffee} from "./coffee";
import {Injectable} from "@angular/core";
import {Data} from "./data";

@Injectable({
  providedIn: 'root'
})
export class Util{
  // @ts-ignore
  private _coffees: Coffee[];
  // @ts-ignore
  private ingredientsList: Set<String>;
  constructor(data: Data) {
    // @ts-ignore
    this.ingredientsList = new Set<String>();
    this._coffees = data.coffees;
  }

  get coffees(): Coffee[] {
    return this._coffees;
  }

  public getAllIngredient(){
    this._coffees.forEach(value => {
      value.ingredients.forEach(i=>{
        this.ingredientsList.add(i);
      })
    })
    return this.ingredientsList;
  }




  public addToListCoffee(coffee: Coffee):Coffee{
    console.log(coffee);
    this._coffees.push(coffee)
    coffee.ingredients.forEach(i=>{
      this.ingredientsList.add(i);
    });
    return coffee;
  }

  public getCoffeeByIngredients(ings:String[]):Coffee[]{
    let count  = 0;
    let buff: Set<Coffee> = new Set<Coffee>();
    return  this._coffees.filter((product: Coffee) => {
      // @ts-ignore
      const productIngredients: Set<string> = new Set(product.ingredients);

      // @ts-ignore
      return ings.every((item: string) => productIngredients.has(item));
    });
    // this.coffees.forEach(value => {
    //
    //   for(let i = 0; i<value.ingredients.length; ++i){
    //     for(let j = i; j<ings.length ; ++j) {
    //       if (value.ingredients[i] === ings[j]) {
    //         count++;
    //       }
    //     }
    //     if(count == ings.length  &&  ings.length!=0){
    //       console.log(value);
    //       buff.add(value);
    //     }
    //   }
    //   count = 0;
    // })
    //
    // // console.log(buff);
    //
    // return Array.from(buff);
  }
}
