import { EditorComponent } from './editor/editor.component';
import { PersonaViewComponent } from './persona-view/persona-view.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularDraggableModule } from 'angular2-draggable';
import { AppComponent } from './app.component';

// services
import { ApiService } from '../services/api/api.service';

// UI-components
import { PersonaToolbarComponent } from './persona-toolbar/persona-toolbar.component';
import { PageToolbarComponent } from './ui-components/page-toolbar/page-toolbar.component';
import { EditButtonComponent } from './ui-components/edit-button/edit-button.component';
import { ToolbarButtonComponent } from './ui-components/toolbar-button/toolbar-button.component';
import { ShortTextComponent } from './ui-components/short-text/short-text.component';
import { AvatarComponent } from './ui-components/avatar/avatar.component';
import { AddElementToolbarComponent } from './add-element-toolbar/add-element-toolbar.component';
import { AddElementButtonComponent } from './add-element-button/add-element-button.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PageToolbarComponent,
    PersonaToolbarComponent,
    PersonaViewComponent,
    EditorComponent,
    ToolbarButtonComponent,
    EditButtonComponent,
    ShortTextComponent,
    AvatarComponent,
    AddElementToolbarComponent,
    AddElementButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
