import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ScrollToModule} from 'ng2-scroll-to';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { JunglenomicsComponent } from './junglenomics/junglenomics.component';
import { SkillmiComponent } from './skillmi/skillmi.component';
import { KoncentricComponent } from './koncentric/koncentric.component';
import { KrysalisComponent } from './krysalis/krysalis.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    JunglenomicsComponent,
    SkillmiComponent,
    KoncentricComponent,
    KrysalisComponent
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
