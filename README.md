# 元部件项目
此项目由 widget cli WIDGET_CLI_VERSION 生成。

## 实例

### 准备
第一步，全局安装 widget-cli 命令行工具：

```shell
$ npm i @gspwidget/widget-cli -g
```

第二步，在安装完成后执行以下命令，在当前目录内创建一个元部件总项目（之后的元部件都在这个总项目中）：

```bash
# 会出现询问输入，填写项目信息
$ widget init
```

假设在 `D:/` 目录下执行命令，填写的总项目名为 `widget-project`，则生成元部件项目 `D:/widget-project`。

第三步，进入元部件项目，执行以下命令，新增一个元部件：

```shell
$ widget add
```

假设填写元部件名称为 `widget-weather`，则元部件存放目录为 `D:/widget-project/projects/widget-weather`，开发元部件就是编写元部件目录内的 .ts，.html，.css 文件。

今后每当需要新建一个元部件，就可以在总项目内任意位置运行 `widget add` 命令。


> 元部件项目就是加入了特殊配置的 Angular 项目，利用 widget-cli 工具可以省去手动增改配置的麻烦、元部件打包配置的麻烦。
>
> 每个元部件都是一个 Angular Library 中的组件，所以相关细节都可以在 [Angular 文档](https://angular.cn/) 中查找。所以，开发元部件就是开发一个 Angular Library。

### 实现天气元部件 widget-weather







## aot 打包支持

1. 项目根目录下添加rollup.config.js
2. angular lib 工程下，添加tsconfig.ngc.json
3. package.json文件下添加以下代码：

```javascript

    "build:echarts": "ng build widget-echarts",
    "ngc:echarts": "ngc -p ./projects/widget-echarts/tsconfig.ngc.json",
    "rollup": "rollup --config rollup.config.js",
    "min":"uglifyjs ./dist/widget-echarts.umd.min.js",
    "terser":"terser widget-echarts.umd.js -c -m -o widget-echarts.umd.min.js"

```

4. 开始打包
   1. 首先执行`npm run ngc:echarts`,进行ngc 编译,ngc 编译的结果会生成到`out-tsc`文件夹。
   2. 替换`out-tsc`文件夹下的public-api.js,添加ngFactory后缀名。示例如下：

```typescript
export * from './lib/widget-echarts.service';
export * from './lib/widget-echarts.component';
export * from './lib/widget-echarts.module';
```

源文件

```typescript

export * from './lib/widget-echarts.service';
export * from './lib/widget-echarts.component.ngfactory';
export * from './lib/widget-echarts.module.ngfactory';

```

替换后的

5. 修改rollup.config.js中的`input` `output` 项目名称，使用rollup进行打包，执行`npm run rollup`。
