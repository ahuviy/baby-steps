import { Component, ViewChild, ElementRef } from '@angular/core';
import { GsapService } from '../../services/gsap.service';
import { TabsService } from '../../services/tabs.service';

const SECTION_HEIGHT = 664;

@Component({
    selector: 'bs-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
    @ViewChild('scrollable') scrollable: ElementRef;

    activeTabId = this.tabsService.activeTabId;

    constructor(
        private gsap: GsapService,
        public tabsService: TabsService,
    ) { }

    ngAfterViewInit() {
        this.tabsService.activeTabId$.subscribe(newVal => {
            if (newVal === this.activeTabId) return;
            const activeTabIndex = this.tabsService.tabs.findIndex(t => t.tabId === newVal);
            const prevTabIndex = this.tabsService.tabs.findIndex(t => t.tabId === this.activeTabId);
            if (activeTabIndex !== undefined && prevTabIndex !== undefined) {
                this.gsap.scrollTo(
                    this.scrollable.nativeElement,
                    0.2 * Math.abs(activeTabIndex - prevTabIndex),
                    SECTION_HEIGHT * activeTabIndex
                );
            }
            this.activeTabId = newVal;
        });
    }
}
