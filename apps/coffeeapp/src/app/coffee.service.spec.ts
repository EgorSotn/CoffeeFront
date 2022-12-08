import {TestBed} from "@angular/core/testing";
import {Util} from "./util";

import {CoffeeService} from "./coffee.service";
import any = jasmine.any;


describe('CoffeeService', () => {
  let coffeeService:CoffeeService;


  let valueServiceSpy: jasmine.SpyObj<Util>;
  beforeEach(async () => {
    const spy = jasmine.createSpyObj('Util',
      ["getAllIngredient", "addToListCoffee", "getCoffeeByIngredients"]);
    TestBed.configureTestingModule({
      providers: [
        CoffeeService,
        {provide: Util, useValue: spy}
      ]
    });

    coffeeService = TestBed.inject(CoffeeService);

    valueServiceSpy = TestBed.inject(Util) as jasmine.SpyObj<Util>;
  });
  // @ts-ignore
  it('#addToListCoffee should add coffee and return', () => {
    // @ts-ignore
    let coffee: Coffee;
    // let arr:String[];
    // arr = ["1","3r"]
    // coffee.ingredients = [];
    // coffee.id = 1;
    // coffee.title = "aa";
    // coffee.image  = "image";
    // coffee.description = "description";

    coffeeService = TestBed.inject(CoffeeService);
    valueServiceSpy.addToListCoffee.and.returnValue(coffee);


    // @ts-ignore
    expect(coffeeService.addCoffee(jasmine.anything())).toBe(coffee);
  });
  // it('getAllIngredient should add coffee and return', () => {
  //   // @ts-ignore
  //   let coffee: Coffee;
  //
  //   let arr:Set<String> = new Set<String>();
  //   arr.add("ingredient1")
  //   arr.add("ingredient2")
  //
  //   coffeeService = TestBed.inject(CoffeeService);
  //   valueServiceSpy.getAllIngredient.and.returnValue(arr);
  //
  //
  //   // @ts-ignore
  //   expect(coffeeService.getAllIngredient(jasmine.anything())).toEqual(arr);
  // });

});
