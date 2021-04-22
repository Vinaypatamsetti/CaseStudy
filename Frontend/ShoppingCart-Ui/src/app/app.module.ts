import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { DelivaryAgentComponent } from './components/register/delivary-agent/delivary-agent.component';
import { MerchantComponent } from './components/register/merchant/merchant.component';
import { CustomerComponent } from './components/register/customer/customer.component';
import { GetProductComponent } from './components/shopping-cart/get-product/get-product.component';
import { TokenService } from './services/jwttoken.service';
import { PostProductComponent } from './components/shopping-cart/post-product/post-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateProductComponent } from './components/shopping-cart/update-product/update-product.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PurchasesComponent } from './components/purchases/purchases.component';
import {MatTableModule} from '@angular/material/table';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { PaymentComponent } from './components/payment/payment.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    ProductListComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    CustomerComponent,
    MerchantComponent,
    DelivaryAgentComponent,
    GetProductComponent,
    PostProductComponent,
    UpdateProductComponent,
    OrdersComponent,
    PurchasesComponent,
    DeliveryComponent,
    PaymentComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [
    [{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenService,
      multi: true
    }],[
      { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    ]

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
