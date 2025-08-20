import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ProductService } from './app.service';
import { Producto } from './producto/producto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, TableModule, Producto],
  providers: [ProductService],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'Mi tienda de productos';

  constructor() {}

  ngOnInit() {}
}
