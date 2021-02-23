import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Componentes
import { EmpleadosComponent } from './empleados/empleados.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { TokenInterceptorService } from './services/token-interceptor.service';

// Seguridad
import { AuthGuard } from './auth.guard';
import { FooterComponent } from './shared/footer/footer.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.TRACE,
      serverLogLevel: NgxLoggerLevel.ERROR,
      disableConsoleLogging: false
    }),
    
  ],
  providers: [
    AuthGuard, 
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true
      }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
