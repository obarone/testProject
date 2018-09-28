;
import { EditorComponent } from './editor/editor.component';
import { PersonaViewComponent } from './persona-view/persona-view.component';
import { PersonaToolbarComponent } from './persona-toolbar/persona-toolbar.component';
import { PageToolbarComponent } from './ui-components/page-toolbar/page-toolbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// services
import { ApiService } from '../services/api/api.service';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PageToolbarComponent,
    PersonaToolbarComponent,
    PersonaViewComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
