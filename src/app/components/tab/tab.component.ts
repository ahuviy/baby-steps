import { Component, Input } from '@angular/core';
import { TabData } from '../../services/tabs.service';

@Component({
    selector: 'bs-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss']
})
export class TabComponent {
    @Input() tab: TabData;
    @Input() isActive: boolean;
}
