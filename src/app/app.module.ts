import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from "./components/acerca-de/acerca-de.component";
import { HeaderComponent } from "./components/header/header.component";
import { LogoAPComponent } from "./components/logo-ap/logo-ap.component";
import { BannerComponent } from "./components/banner/banner.component";
import { EducacionComponent } from "./components/educacion/educacion.component";
import { ExperienciaComponent } from "./components/experiencia/experiencia.component";
import { HysComponent } from "./components/hys/hys.component";
import { ProyectoComponent } from "./components/proyecto/proyecto.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component'


@NgModule({
    declarations: [
        AppComponent,
        AcercaDeComponent,
        HeaderComponent,
        LogoAPComponent,
        BannerComponent,
        EducacionComponent,
        ExperienciaComponent,
        HysComponent,
        ProyectoComponent,
        FooterComponent,
        HomeComponent,
        LoginComponent
    ],

    providers: [],
    bootstrap: [AppComponent],

    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgCircleProgressModule.forRoot({}),
        HttpClientModule
    ]
})
export class AppModule { }
