import { ElementRef, AfterViewInit, Renderer } from '@angular/core';
import { PlacementTypes } from './position';
import { StyleTypes } from './style.type';
import { AlignmentTypes } from './alignment.type';
export declare class TooltipContentComponent implements AfterViewInit {
    element: ElementRef;
    private renderer;
    host: any;
    showCaret: boolean;
    type: StyleTypes;
    placement: PlacementTypes;
    alignment: AlignmentTypes;
    spacing: number;
    cssClass: string;
    title: string;
    caretElm: any;
    readonly cssClasses: string;
    constructor(element: ElementRef, renderer: Renderer);
    ngAfterViewInit(): void;
    position(): void;
    positionContent(nativeElm: any, hostDim: any, elmDim: any): void;
    positionCaret(hostDim: any, elmDim: any): void;
    checkFlip(hostDim: any, elmDim: any): void;
    onWindowResize(): void;
}
