import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { cloneDeep } from 'lodash';
import { Friend } from '../interfaces/server.interface';

@Injectable()
export class FriendsService {
    private _friends: { [babyStep: string]: Friend[] };

    constructor(private http: HttpClient) { }

    /**
     * Fetches the friends from the cache, or via AJAX request if
     * no cached copy is present.
     */
    fetch(): Observable<{ [babyStep: string]: Friend[] }> {
        if (this._friends) return of(cloneDeep(this._friends));
        else return this.http.get<Friend[]>('/api/friends').map(res => {
            const friends = {};

            // Split friends to baby-step groups
            res.forEach(f => {
                const id = f.babyStep;
                if (!friends[id]) {
                    friends[id] = [];
                }
                friends[id].push(f);
            });

            // Sort all friend-groups by last-name ascending.
            for (let id in friends) {
                friends[id].sort((f1, f2) => {
                    if (f1.lastName.toLowerCase() > f2.lastName.toLowerCase()) return 1;
                    if (f1.lastName.toLowerCase() < f2.lastName.toLowerCase()) return -1;
                    else return 0;
                });
            }
            this._friends = friends;
            return cloneDeep(this._friends);
        });
    }
}
