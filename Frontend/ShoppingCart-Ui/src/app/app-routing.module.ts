import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component'
import { CustomerComponent } from './components/register/customer/customer.component'
import { MerchantComponent } from './components/register/merchant/merchant.component'
import { DelivaryAgentComponent } from './components/register/delivary-agent/delivary-agent.component'
import { GetProductComponent } from './components/shopping-cart/get-product/get-product.component'
import { CartComponent } from './components/shopping-cart/cart/cart.component'
import { AuthGuard } from './services/auth.guard'
import { PostProductComponent } from './components/shopping-cart/post-product/post-product.component'
import { UpdateProductComponent } from './components/shopping-cart/update-product/update-product.component'
import { OrdersComponent } from './components/orders/orders.component'
import { PurchasesComponent } from './components/purchases/purchases.component'
import { DeliveryComponent } from './components/delivery/delivery.component'
import { DAgentGuardGuard } from './services/d-agent-guard.guard'
import { MerchantGuardGuard } from './services/merchant-guard.guard'
import { CustomerGuardGuard } from './services/customer-guard.guard'
import { PaymentComponent } from './components/payment/payment.component'

const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'customer',component:CustomerComponent},
  {path:'merchant',component:MerchantComponent},
  {path:'deliveryAgent',component:DelivaryAgentComponent},
  {path:'cart/:id',component:CartComponent,canActivate:[AuthGuard]},
  {path:'manageStock',component:PostProductComponent,canActivate:[MerchantGuardGuard]},
  {path:'product/:name',component:GetProductComponent},
  {path:'updateProduct/:id',component:UpdateProductComponent},
  {path:'purchase',component:OrdersComponent},
  {path:'orders/:id',component:PurchasesComponent,canActivate:[CustomerGuardGuard]},
  {path:'delivery',component:DeliveryComponent,canActivate:[DAgentGuardGuard]},
  {path:'profile/:id',component:PaymentComponent},
  { path: 'shop', component: ShoppingCartComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
