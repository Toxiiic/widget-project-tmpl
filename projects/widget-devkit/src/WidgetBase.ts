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
    
    ngOnInit (): void { }
    /** 元部件容器组件渲染后调用，应在此处 resize echarts 尺寸 */
    onContainerInit (): void { }
    onResized (): void { }

}