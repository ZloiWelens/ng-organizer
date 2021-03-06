import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CalendarComponent} from './calendar/calendar.component';
import {SelectorComponent} from './selector/selector.component';
import {OrganizerComponent} from './organizer/organizer.component';
import {MomentPipe} from './shared/moment.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        CalendarComponent,
        SelectorComponent,
        OrganizerComponent,
        MomentPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
