import { Component } from '@angular/core';



@Component({
    selector: 'pm-app',
    template: `<div class='container'>
    <nav class="navbar navbar-inverse ">
        <ul class="nav navbar-nav">
            <li><a routerLink="/home">Home</a></li>
            <li><a routerLink="/products">Products</a></li>
            <li><a routerLink="/addproducts">Add Product</a></li>
        </ul>
    </nav>
    <router-outlet></router-outlet>
    <div>`,
})
export class AppComponent {

    title : string = "Hello Angular";

 }
