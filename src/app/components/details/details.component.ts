import { Component, ViewChild, ElementRef } from '@angular/core';
import { GsapService } from '../../services/gsap.service';
import { TabsService } from '../../services/tabs.service';
import { FriendsService } from '../../services/friends.service';
import { Friend } from '../../interfaces/server.interface';

const SECTION_HEIGHT = 664;

@Component({
    selector: 'bs-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
    @ViewChild('scrollable') scrollable: ElementRef;

    activeTabId = this.tabsService.activeTabId;
    messages: { [babyStep: string]: string } = {};

    constructor(
        private gsap: GsapService,
        public tabsService: TabsService,
        public friendsService: FriendsService,
    ) { }

    ngOnInit() {
        this.friendsService.fetch().subscribe(res => {
            this.messages = this.formatMessages(res);
        });
    }

    ngAfterViewInit() {
        this.tabsService.activeTabId$.subscribe(this.changeTab);
    }

    private changeTab = (newTabId: string) => {
        if (newTabId === this.activeTabId) return;
        const activeTabIndex = this.tabsService.tabs.findIndex(t => t.tabId === newTabId);
        const prevTabIndex = this.tabsService.tabs.findIndex(t => t.tabId === this.activeTabId);
        if (activeTabIndex !== undefined && prevTabIndex !== undefined) {
            this.gsap.scrollTo(
                this.scrollable.nativeElement,
                0.2 * Math.abs(activeTabIndex - prevTabIndex),
                SECTION_HEIGHT * activeTabIndex
            );
        }
        this.activeTabId = newTabId;
    }

    private formatMessages(friends: { [babyStep: string]: Friend[] }): { [babyStep: string]: string } {
        const fullname = (f) => `${f.firstName} ${f.lastName}`;
        const messages: any = {};
        for (let step in friends) {
            const group = friends[step];
            if (group.length === 0) {
                messages[step] = '';
            } else if (group.length === 1) {
                messages[step] = `<b>${fullname(group[0])}</b> is also on this step`;
            } else if (group.length === 2) {
                messages[step] = `<b>${fullname(group[0])}</b> and <b>${fullname(group[1])}</b>` +
                    ` are also on this step`;
            } else {
                messages[step] = `<b>${fullname(group[0])}</b>, <b>${fullname(group[1])}</b>, ` +
                    `and ${group.length - 2} other friend${group.length > 3 ? 's' : ''}` +
                    ` are also on this step`;
            }
        }
        return messages;
    }
}
