// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { Product } from './product.model';

// @Injectable({
//   providedIn: 'root',
// })

// export class CartService {
//   private cartItems: Product[] = [];
//   private cartItemsSubject = new BehaviorSubject<Product[]>([]);

//   cartItems$ = this.cartItemsSubject.asObservable();

//   addToCart(product: Product): void {
//     this.cartItems.push(product);
//     this.cartItemsSubject.next([...this.cartItems]);
//   }

//   getCartItems(): Product[] {
//     return this.cartItems;
//   }
  
//   clearCart(): void {
//     this.cartItems = [];
//     this.cartItemsSubject.next([...this.cartItems]);
//   }
// }


