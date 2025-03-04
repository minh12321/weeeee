import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withFetch,  withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';
import { ThemSanPhamComponent } from './them-san-pham/them-san-pham.component';

@NgModule({ declarations: [
        AppComponent,
        RegisterComponent,
        LoginComponent,
        HomeComponent,
        AccountComponent,
        AdminComponent,
        MenuComponent,
        ThemSanPhamComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule], providers: [provideHttpClient(withFetch()), provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
