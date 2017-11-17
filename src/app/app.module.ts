import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DetailsComponent } from './components/details/details.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TabComponent } from './components/tab/tab.component';
import { GsapService } from './services/gsap.service';
import { TabsService } from './services/tabs.service';

@NgModule({
    declarations: [
        AppComponent,
        DetailsComponent,
        NavigationComponent,
        TabComponent,
    ],
    imports: [
        BrowserModule,
    ],
    providers: [
        GsapService,
        TabsService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
