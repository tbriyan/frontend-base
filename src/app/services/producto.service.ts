import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ProductoService {
  private _urlBackend: string = 'http://localhost:3000/';
  constructor(private http: HttpClient){}
  
  obtenerProductos(): Observable<IProducto[]> {
    return this.http.get<IProducto[]>(this._urlBackend+"item");
  }

  agregarProducto(producto: IProducto): Observable<any> {
    return this.http.post(this._urlBackend+"item", producto);
  }

  eliminarProducto(id: string): Observable<any> {
    return this.http.delete(`${this._urlBackend+"item"}/${id}`);
  }

}
