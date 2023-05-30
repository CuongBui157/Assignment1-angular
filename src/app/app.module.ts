import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { AboutpageComponent } from './page/aboutpage/aboutpage.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ProductListComponent } from './page/product-list/product-list.component';
import { ProductAddComponent } from './page/product-add/product-add.component';
import { ProductEditComponent } from './page/product-edit/product-edit.component';

@NgModule({
    declarations: [AppComponent, AdminLayoutComponent, BaseLayoutComponent, HomepageComponent, AboutpageComponent, DashboardComponent, ProductListComponent, ProductAddComponent, ProductEditComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
