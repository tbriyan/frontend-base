import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ProductService } from './app.service';

export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, TableModule],
  providers: [ProductService],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'mi-app';

  products!: any[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProductsMini().then((data) => {
      this.products = data;
    });
  }

  obtenerProductos(){
    this.productService.obtenerProductos().subscribe((data) => {
      console.log(data);
    })
  }
}
