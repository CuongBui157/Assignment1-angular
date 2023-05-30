import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';
import { ProductService } from 'src/app/service/product.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-product-add',
    templateUrl: './product-add.component.html',
    styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent {
    productForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(6)]],
        price: [0],
    });

    constructor(
        private productService: ProductService,
        private fb: FormBuilder
    ) {}

    onHandleAdd() {
        const product: IProduct = {
            name: this.productForm.value.name || '',
            price: this.productForm.value.price || 0,
        };
        this.productService
            .addProduct(product)
            .subscribe(() => console.log('Add success'));
    }
}
