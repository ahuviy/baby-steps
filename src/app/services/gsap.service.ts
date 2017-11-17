import { Injectable } from '@angular/core';
import { TweenLite } from 'gsap/TweenLite';
import 'gsap/CSSPlugin';
import 'gsap/ScrollToPlugin';

declare const Power1: any;

// This service is in charge of animations. It wraps the GreenSock (GSAP) library.
@Injectable()
export class GsapService {
    /**
     * Create a scroll animation.
     */
    scrollTo(container: HTMLElement, duration: number, to: number) {
        TweenLite.to(container, duration, {
            scrollTo: to,
            ease: Power1.easeInOut
        });
    }

    /**
     * Create a general CSS animation.
     */
    cssTo(element: HTMLElement, duration: number, css?: any) {
        const defaults = {
            ease: Power1.easeInOut
        };
        css = Object.assign({}, defaults, css || {});
        TweenLite.to(element, duration, css);
    }
}
