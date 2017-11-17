import { Component } from '@angular/core';

@Component({
    selector: 'bs-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
    tabs = [
        { id: '1', text: 'Baby Step 1', icon: 'icons_small_bs1.png', active: true },
        { id: '2', text: 'Baby Step 2', icon: 'icons_small_bs2.png', active: false },
        { id: '3', text: 'Baby Step 3', icon: 'icons_small_bs3.png', active: false },
        { id: '4', text: 'Baby Step 4', icon: 'icons_small_bs4.png', active: false },
        { id: '5', text: 'Baby Step 5', icon: 'icons_small_bs5.png', active: false },
        { id: '6', text: 'Baby Step 6', icon: 'icons_small_bs6.png', active: false },
        { id: '7', text: 'Baby Step 7', icon: 'icons_small_bs7.png', active: false }
    ];
    activeHighlightTransform = 'translateY(0%)';

    switchTo(id: string) {
        let activeTab = this.tabs.find(t => t.active);
        if (id !== activeTab.id) {
            activeTab.active = false;
            let newActiveIndex = this.tabs.findIndex(t => t.id === id);
            let newActiveTab = this.tabs[newActiveIndex];
            newActiveTab.active = true;
            this.activeHighlightTransform = `translateY(${newActiveIndex * 100}%)`;
        }
    }
}
