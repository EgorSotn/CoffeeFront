import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoffeeService } from './coffee.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCoffeeComponent } from './add-coffee/add-coffee.component';
import { EditCoffeeComponent } from './edit-coffee/edit-coffee.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCoffeeComponent,
    EditCoffeeComponent,
    IngredientsComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [CoffeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
