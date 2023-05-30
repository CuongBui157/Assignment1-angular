import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ProductListComponent } from './page/product-list/product-list.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { ProductEditComponent } from './page/product-edit/product-edit.component';
import { ProductAddComponent } from './page/product-add/product-add.component';

const routes: Routes = [
    { path: '', component: HomepageComponent },
    {
        path: 'admin',
        component: AdminLayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'product', component: ProductListComponent },
            { path: 'product/add', component: ProductAddComponent },
            { path: 'product/:id/edit', component: ProductEditComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
