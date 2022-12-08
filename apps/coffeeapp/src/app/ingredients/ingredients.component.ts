import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
;

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css'],
})
export class IngredientsComponent {
  @Output() searchEvent = new EventEmitter<String[]>;

  public form: FormGroup;
  @Input()  ingredients: String[];
  public findIngr: String[];

  constructor(fb: FormBuilder) {
    this.ingredients = [];
    this.findIngr = [];
    this.form = fb.group({
      selectedIngredients:  new FormArray([])
    });
  }
  submit() {
    console.log(this.ingredients);
    this.searchEvent.emit(this.findIngr);
  }

  public onCheckboxChange(event: any) {
    const selectedIngredients = (this.form.controls['selectedIngredients'] as FormArray);
    if (event.target.checked) {
      selectedIngredients.push(new FormControl(event.target.value));
    } else {
      const index = selectedIngredients.controls.findIndex(x => x.value === event.target.value);
      selectedIngredients.removeAt(index);
    }
    this.findIngr = selectedIngredients.value
  }
}
