import { Component, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { GsapService } from '../../services/gsap.service';
import { TabsService } from '../../services/tabs.service';

@Component({
    selector: 'bs-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
    @ViewChild('highlight') highlight: ElementRef;

    activeTabId = this.tabsService.activeTabId;

    constructor(
        private gsap: GsapService,
        public tabsService: TabsService,
    ) { }

    ngAfterViewInit() {
        this.tabsService.activeTabId$.subscribe(this.changeTab);
    }

    changeTab = (newTabId: string) => {
        if (newTabId === this.activeTabId) return;
        const activeTabIndex = this.tabsService.tabs.findIndex(t => t.tabId === newTabId);
        const prevTabIndex = this.tabsService.tabs.findIndex(t => t.tabId === this.activeTabId);
        if (activeTabIndex !== undefined && prevTabIndex !== undefined) {
            this.gsap.cssTo(
                this.highlight.nativeElement,
                0.2 * Math.abs(activeTabIndex - prevTabIndex),
                { y: `${activeTabIndex * 100}%` }
            );
        }
        this.activeTabId = newTabId;
    }
}
