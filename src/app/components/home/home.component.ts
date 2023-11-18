import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
// import { CartService } from '../cart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.products;
    });
  }

  getStars(rating: number): boolean[] {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(true); // Dolu yıldız
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(true); // Yarım yıldız
      } else {
        stars.push(false); // Boş yıldız
      }
    }
    if (rating === 5 && stars.length < 5) {
      stars.push(false);
    }

    return stars;
  }

  hasHalfStar(index: number, rating: number): boolean {
    const fullStars = Math.floor(rating);
    return index === fullStars && rating % 1 !== 0;
  }

  // Ürün açıklamasını göstermek için
  showProductDescription(product: any): void {
    // Diğer ürünleri kapat
    this.products.forEach(p => p.showDescription = false);
    // Şu anki ürünü aç
    product.showDescription = true;
    product.thumbnail = this.resizeProductImage(product.thumbnail, 500, 500);
  }
  resizeProductImage(imageUrl: string, width: number, height: number): string {
    return `${imageUrl}?width=${width}&height=${height}`;
  }
}

