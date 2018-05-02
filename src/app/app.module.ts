import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { ChooseHeroComponent } from './choose-hero/choose-hero.component';
import { HomeComponent } from './home/home.component';
import { HeroItemComponent } from './hero-item/hero-item.component';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register.service';
import { HeroService } from './hero.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: ChooseHeroComponent },
  { path: 'hero/:id', component: RegisterComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ChooseHeroComponent,
    HomeComponent,
    HeroItemComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    HttpClientModule,
    HttpModule
  ],
  providers: [HeroService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
