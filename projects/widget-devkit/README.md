# WidgetDevkit

元部件（Widget）开发依赖包。



## 元部件开发流程

1. 新建 Angular Library `widget-example`；
2. 修改 `widget-example.component.ts`, 使`WidgetExampleComponent ` 继承 `WidgetBase`，实现所有抽象方法；
3. 给 `WidgetExampleComponent` 增加装饰器 `@Widget({ name: 'widget-name' })`
4. 编码
5. 打包流程



## Classes API

### WidgetBase

*abstract* *class* **WidgetBase** *implements* *OnInit*

所有元部件的基类。元部件组件类必须继承此类。

#### Properties

*@Input* **option**: *WidgetOptions* 当前元部件的所有输入数据。

#### Callbacks

**onResized** (): *void* 当前元部件容器大小改变时调用，可在此时改变元部件内容大小。

*abstract* **ngOnInit** (): *void* 即Angular 的 OnInit.ngOnInit()。



### WidgetOptions

*interface* **WidgetOptions**

#### Properties

title: *string* 元部件显示的部件标题文字。



### WidgetTitleBarComponent

*class* **WidgetTitleBarComponent** *implements* *OnInit*

元部件的公共标题栏组件，提供了标题, 标题旁数字, 查看更多按钮, 设置按钮；可设置显示内容，是否显示，按钮点击回调。

若无法满足需求可自行实现标题栏。





## 元部件包文件结构

```
widget-example/
	logo.png			（logo图片）
	preview.jpeg		（预览图）
	main.js				（打包后的元部件的主体脚本）
	widget-config.json	（元部件的配置文件）
	README.md			（元部件的说明文档）
	assets/				（元部件使用的静态资源文件目录）
		...
```



## widget-config.json

元部件的配置文件。最简单版本的配置文件如下：

```json
/* 仅配置必填项（名称及运行时依赖），其他可选项保持默认配置 */
{
	"name": "widget-example",
    "dependencies": {
        "echarts": "4.2.1"
    }
}
```

完整的配置项及含义如下：

```json
{
    /* 元部件名称，必需 */
	"name": "widget-example",
    /* 版本号，可选，以下为默认值 */
    "version": "0.0.1",
    /* 元部件提供的资源文件路径，可选，以下为默认值 */
    "paths": {
        "main": "./main.js", 
        "logo": "./logo.png",
        "preview": "./preview.png",
        "assets": "./assets"
    },
    /* 元部件尺寸范围，可选，以下为默认值 */
    "size": {
        "minCols": 3,
        "minRows": 3,
        "maxCols": 12,
        "maxRows": 12,
    },
    /* 运行时依赖包及其版本，必需 */
    "dependencies": {
        "echarts": "4.2.1"
    }
}
```

