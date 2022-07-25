import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { TopLayoutComponent } from './components/top-layout/top-layout.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { FoodItemComponent } from './components/food-item/food-item.component';
import { LearnmoreButtonComponent } from './components/learnmore-button/learnmore-button.component';
import { FilterPipe } from './filter.pipe';
import { SearchComponent } from './components/search/search.component';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPopoverModule } from 'ng-zorro-antd/popover';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    TopLayoutComponent,
    FoodItemComponent,
    LearnmoreButtonComponent,
    FilterPipe,
    SearchComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: TopLayoutComponent},
      {path: 'about-us', component: AboutUsComponent}
      ]),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzInputModule,
    NzGridModule,
    NzPopoverModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
