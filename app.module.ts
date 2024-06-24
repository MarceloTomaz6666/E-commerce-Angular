import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { PixComponent } from './pix/pix.component';
import { AppRoutingModule } from './app-routing.module'; // Import the AppRoutingModule

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductGalleryComponent,
    HomeComponent,
    CatalogComponent,
    ContactComponent,
    LoginComponent,
    CartComponent,
    PixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Add the AppRoutingModule to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
