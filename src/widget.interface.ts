
export interface WidgetOptions {
    [name: string]: any
}

export interface WidgetComponent {

    option: WidgetOptions
    onResized?: () => void,
}