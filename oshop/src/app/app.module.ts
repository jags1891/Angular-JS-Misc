import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule, Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { DataTableModule } from 'angular5-data-table';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BootstrapNavbarComponent } from './bootstrap-navbar/bootstrap-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth-service.service';
import { AuthGaurd } from './auth-gaurd.service';
import { UserService } from './user.service';
import { AdminAuthGaurd } from './admin-auth-gaurd.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';



@NgModule({
  declarations: [
    AppComponent,
    BootstrapNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'login', component: LoginComponent},

      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGaurd]},
      {path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGaurd]},
      {path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGaurd]},

      {
        path: 'admin/orders',
        component: AdminOrdersComponent,
        canActivate: [AuthGaurd, AdminAuthGaurd]
      },

      {
        path: 'admin/products/new',
        component: ProductFormComponent,
        canActivate: [AuthGaurd, AdminAuthGaurd]
      },
      {
        path: 'admin/products/:id',
        component: ProductFormComponent,
        canActivate: [AuthGaurd, AdminAuthGaurd]
      },
      {
        path: 'admin/products',
        component: AdminProductsComponent,
        canActivate: [AuthGaurd, AdminAuthGaurd]
      }

    ])
  ],
  providers: [
    AuthService,
    AuthGaurd,
    AdminAuthGaurd,
    UserService,
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
