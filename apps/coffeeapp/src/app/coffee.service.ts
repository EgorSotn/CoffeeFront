import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Coffee} from "./coffee";
import {Util} from "./util";



@Injectable({
  providedIn: 'root'
})
export class CoffeeService{
  private apiServerUrl = environment.apiBaseUrl;
  // @ts-ignore
  // private util:Util;

  constructor(private util: Util, private http: HttpClient) {}

  public getCoffee():Coffee[] {
    return this.util.getAllCoffee();
  }
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

  public deleteCoffee(coffeeId: Number):void{
    return this.util.deleteCoffeeById(coffeeId);
  }
  public getCoffeeById(coffeeId: Number):Coffee | null{
    return this.util.getCoffeeById(coffeeId);
  }

}
