import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ScrollToModule} from 'ng2-scroll-to';

import { AuthGuard } from './_guards/index';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { JunglenomicsComponent } from './junglenomics/junglenomics.component';
import { SkillmiComponent } from './skillmi/skillmi.component';
import { KoncentricComponent } from './koncentric/koncentric.component';
import { KrysalisComponent } from './krysalis/krysalis.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [ 
  { path: '', component: LoginComponent },
  { path: 'main', component: MainComponent, canActivateChild: [AuthGuard],
    children: [
        { path: 'logout', component: LogoutComponent },
        { path: 'junglenomics', component: JunglenomicsComponent },
        { path: 'skillmi', component: SkillmiComponent },
        { path: 'krysalis', component: KrysalisComponent },
        { path: 'koncentric', component: KoncentricComponent },
   ]
}
]


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    JunglenomicsComponent,
    SkillmiComponent,
    KoncentricComponent,
    KrysalisComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot(),
  
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
