import { Component, OnInit, Input } from '@angular/core';

export interface WidgetOptions {
    title: string,
    // minCols?: number, maxCols?: number,
    // minRows?: number, maxRows?: number,

    // TODO: 数据源相关
    [name: string]: any
}

export abstract class WidgetBase implements OnInit {

    @Input() option: WidgetOptions = {
        title: '未定义标题'
    }
    
    abstract ngOnInit (): void
    onResized (): void { }


}