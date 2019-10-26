import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { DishService } from 'src/app/services/dish.service';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AddDishComponent } from './components/add-dish/add-dish.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AddDishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(
      {
        positionClass: 'toast-top-right',
        closeButton: true
      }
    ) // ToastrModule added
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
