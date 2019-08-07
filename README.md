# WidgetExamples

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

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
