
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Component/login/login.component';
  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import{HttpClientModule} from '@angular/common/http'
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule, MatGridListModule, MatMenuModule, MatToolbarModule, MatCheckboxModule, MatListModule, MatButtonToggleModule, } from '@angular/material';
import{FlexLayoutModule} from '@angular/flex-layout';
import {  MatInputModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from "@angular/material";
import { MoviesComponent } from './Component/movies/movies.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatListModule, 
    MatButtonToggleModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
