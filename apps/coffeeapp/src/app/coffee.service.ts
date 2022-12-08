import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {environment} from "../environments/environment";
import {Coffee} from "./coffee";
import {Util} from "./util";



@Injectable({
  providedIn: 'root'
})
export class CoffeeService{
  private apiServerUrl = environment.apiBaseUrl;


  constructor(private util: Util) {}


  public getCoffeeByIngredients(ingredients:String[]){
    return this.util.getCoffeeByIngredients(ingredients);
  }
  public addCoffee(coffee: Coffee):Coffee{
    return this.util.addToListCoffee(coffee);
  }
  public getAllIngredient(): String[]{
    return Array.from(this.util.getAllIngredient());
  }
  // public updateCoffee(coffee: Coffee):Observable<Coffee>{
  //   // this.http.put<Coffee>(`${this.apiServerUrl}/api/book/update`,book);
  //   // @ts-ignore
  //   return null;
  // }



}
