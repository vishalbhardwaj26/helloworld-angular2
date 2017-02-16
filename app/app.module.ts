import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {CalcComponent} from './calc.component';
import {FormsModule} from '@angular/forms';

import {AddProductsComponent} from './products/addproducts.component';
import {ProductsComponent} from './products/products.component';
import {app_routing} from './app.routings';

import { RouterModule, Routes } from '@angular/router';


@NgModule({
  imports: [ BrowserModule, FormsModule, app_routing,RouterModule ],
  declarations: [ AppComponent,
  CalcComponent,AddProductsComponent,ProductsComponent
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
