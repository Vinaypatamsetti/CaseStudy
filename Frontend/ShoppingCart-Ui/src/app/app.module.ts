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
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { DelivaryAgentComponent } from './components/register/delivary-agent/delivary-agent.component';
import { MerchantComponent } from './components/register/merchant/merchant.component';
import { CustomerComponent } from './components/register/customer/customer.component';
import { GetProductComponent } from './components/shopping-cart/get-product/get-product.component';
import { TokenService } from './services/jwttoken.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
 
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    CustomerComponent,
    MerchantComponent,
    DelivaryAgentComponent,
    GetProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    [{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenService,
      multi: true
    }]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
