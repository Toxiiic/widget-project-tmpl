import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
// import typescript from 'rollup-plugin-typescript2';
// let graph = require("rollup-plugin-graph");
// let graphOptions = {prune: true};
// import { uglify } from "rollup-plugin-uglify";
import uglify from "rollup-plugin-uglify-es";

export default function (commandLineArgs) {
    let widgetName = commandLineArgs.configWidgetName
    // input: './widget-aot-pkg-demo/widget-aot-pkg-demo.ngfactory.js',
    //input:'./dist/out-tsc/projects/widget-aot-pkg-demo/src/public-api.js',
    return {
        input: `./out-tsc/lib/projects/${widgetName}/src/public-api.js`,
        output: {
            file: `./projects/${widgetName}/release/main.js`,
            format: 'umd',
            name: widgetName
        },
        
        globals:{
            echarts:'echarts'
        },
        plugins: [
            resolve({
                // pass custom options to the resolve plugin
                // customResolveOptions: {
                //     moduleDirectory: '../../node_modules'
                // }
            }),
            commonjs(),
            
            // graph(graphOptions)
            // typescript({
            //     typescript: require('typescript')
            // })
            // uglify(),
        ],
        external: [
            // 'plugins-core',
            '@angular/core',
            "@angular/common",
            "@angular/common/http",
            '@angular/forms',
            '@angular/platform-browser',
            '@angular/platform-browser/animations',
            '@angular/animations',
            "@angular/animations/browser",
            'ngx-bootstrap/modal',
            'ngx-bootstrap/accordion',
            "ngx-bootstrap/collapse",
            '@toxiic/widget-devkit',
            'echarts',
            // '../../../../node_modules/@toxiic/widget-devkit/widget-manifest.ngfactory'
        ]
    }
}