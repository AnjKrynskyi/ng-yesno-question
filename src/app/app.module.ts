import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { HeaderComponent } from './main-view/header/header.component';
import { ContentComponent } from './main-view/content/content.component';
import { FooterComponent } from './main-view/footer/footer.component';
import { CapitalizePipe } from './shared/pipes/capitalize.pipe';
import { LightboxComponent } from './main-view/content/lightbox/lightbox.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    CapitalizePipe,
    LightboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    Title,
    CapitalizePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
