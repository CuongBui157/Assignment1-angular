import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';
import { ProductService } from 'src/app/service/product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent {
    product!: IProduct;
    productForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(6)]],
        price: [0],
    });

    constructor(
        private productService: ProductService,
        private fb: FormBuilder,
        private route: ActivatedRoute
    ) {}

    onHandleEdit() {}
}
