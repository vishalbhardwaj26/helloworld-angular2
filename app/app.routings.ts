import { RouterModule, Routes } from '@angular/router';
import {AddProductsComponent} from './products/addproducts.component';
import {ProductsComponent} from './products/products.component';



const app_routes: Routes = [
  { path: '',  pathMatch:'full', redirectTo: '/home' },
  { path: 'home',  component: ProductsComponent },
  { path: 'products',  component: ProductsComponent },
  { path: 'addproducts', component: AddProductsComponent }
];

export const app_routing = RouterModule.forRoot(app_routes);