import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TabsContentComponent } from './components/tabs-content/tabs-content.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';

@NgModule({
    declarations: [
        AppComponent,
        TabsContentComponent,
        TabsComponent,
        TabComponent,
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
