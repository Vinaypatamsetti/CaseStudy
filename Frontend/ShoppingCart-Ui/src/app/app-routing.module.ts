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

const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'customer',component:CustomerComponent},
  {path:'merchant',component:MerchantComponent},
  {path:'deliveryAgent',component:DelivaryAgentComponent},
  {path:'cart/:id',component:CartComponent,canActivate:[AuthGuard]},
  {path:'manage Stock',component:PostProductComponent},
  {path:'product/:name',component:GetProductComponent},
  {path:'updateProduct/:id',component:UpdateProductComponent},
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
