
export interface WidgetOptions {
    // 大小 title
    [name: string]: any
}

export interface WidgetComponent {

    option: WidgetOptions
    onResized?: () => void,
}