import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTableComponent } from './my-table/my-table.component';
import { FormsModule } from '@angular/forms';
import { AddNewProductComponent } from './add-new-product/add-new-product.component'

@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent,
    AddNewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MyTableComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
