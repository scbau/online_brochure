/*
ng build --prod --base-href https://scbau.github.io/training_module/
ngh --dir=dist/offline-app
*/


import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { MainviewComponent } from './modules/mainview/mainview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared/material.module';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { MatCarouselModule } from '@ngmodule/material-carousel';

// for local data
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory/in-memory-data.service';
import { InMemoryDataListService } from './services/in-memory/in-memory-datalist.service';

import { PersistenceService } from './services/persistence/persistence.service';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DownloadComponent } from './modules/download/download.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainviewComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    /*HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataListService, { dataEncapsulation: false }
    ),*/
    AppRoutingModule,
    MaterialModule,
    MatCarouselModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    PdfViewerModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: (persistenceService: PersistenceService) => () => persistenceService.connect(),
    deps: [PersistenceService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
