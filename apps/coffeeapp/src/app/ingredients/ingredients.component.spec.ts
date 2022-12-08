import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsComponent } from './ingredients.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('IngredientsComponent', () => {
  let component: IngredientsComponent;
  let fixture: ComponentFixture<IngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IngredientsComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(IngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
