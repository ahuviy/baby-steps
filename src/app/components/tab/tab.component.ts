import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
    selector: 'bs-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss']
})
export class TabComponent {
    @Input() id: string;
    @Input() text: string;
    @Input() isActive: boolean;

    bgImage: string;

    ngOnChanges(changes: SimpleChanges) {
        if (changes.isActive) {
            this.bgImage = `url(/assets/icons/icons_small_bs${this.id}${this.isActive ? '_blue' : ''}.png)`;
        }
    }
}
