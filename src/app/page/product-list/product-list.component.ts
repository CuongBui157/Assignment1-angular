import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { IProduct } from 'src/app/interfaces/IProduct';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
    products!: IProduct[];
    constructor(private productService: ProductService) {
        this.productService
            .getProduct()
            .subscribe((products) => (this.products = products));
    }
    onHandleRemove(id: any) {
        this.productService.deleteProduct(id).subscribe(() => {
            this.products = this.products.filter((product) => product.id != id);
        });
    }
}
