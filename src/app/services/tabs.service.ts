import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { appData, TabData } from '../app.data';
export { TabData };

// This service is in charge of managing the tabs' state.
@Injectable()
export class TabsService {
    private _activeTabId$ = new BehaviorSubject<string>('1');

    /**
     * Subscribe to this to get updates for changes in active tab.
     */
    activeTabId$ = this._activeTabId$.asObservable();

    /**
     * The snapshot of the current active tab.
     */
    get activeTabId() {
        return this._activeTabId$.getValue();
    }

    /**
     * Gets all the tab data.
     */
    get tabs() {
        return appData;
    }

    /**
     * Sets the new active tab.
     */
    setActive(id: string) {
        const activeTab = appData.find(t => t.tabId === id);
        if (activeTab) {
            this._activeTabId$.next(activeTab.tabId);
        } else {
            console.warn('setting an active tab that doesn\'t exist');
        }
    }
}
