import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ProductoService } from '../services/producto.service';
import { Observable } from 'rxjs';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-producto',
  imports: [TableModule, CardModule, ButtonModule],
  providers: [ProductoService],
  templateUrl: './producto.html',
  styleUrl: './producto.scss',
  standalone: true,
})
export class Producto implements OnInit {
  public listaProducto: IProducto[];

  constructor(private productoService: ProductoService) {
    this.listaProducto = [];
  }

  ngOnInit(): void {
    this._initialize();
  }

  private _initialize(): void {
    this.productoService.obtenerProductos().subscribe((data: IProducto[]) => {
      console.log(data);
      this.listaProducto = data;
    });
  }

  public agregar(producto: IProducto): void {
    console.log(producto);
    this.productoService.agregarProducto(producto).subscribe({
      next: (res) => {
        alert('Producto agregado exitosamente!');
      },
      error: (err) => {
        console.error('Error al agregar producto:', err);
      },
    });
  }

  public eliminar(producto: IProducto): void {
    this.productoService.eliminarProducto(producto.id).subscribe({
      next: (res) => {
        alert('Producto eliminado exitosamente!');
      },
      error: (err) => {
        console.error('Error al eliminar producto:', err);
      },
    });
  }
}
