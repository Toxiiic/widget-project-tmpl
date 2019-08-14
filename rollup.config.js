import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
// import typescript from 'rollup-plugin-typescript2';
// let graph = require("rollup-plugin-graph");
// let graphOptions = {prune: true};
import { uglify } from "rollup-plugin-uglify";

export default {
    // input: './widget-aot-pkg-demo/widget-aot-pkg-demo.ngfactory.js',
    //input:'./dist/out-tsc/projects/widget-aot-pkg-demo/src/public-api.js',
    // input: './out-tsc/lib/projects/widget-echarts/src/public-api.js',
    // output: {
    //     file: 'dist/widget-echarts.umd.js',
    //     format: 'umd',
    //      name:'widget-echarts'
    // },
    input: './out-tsc/lib/projects/widget-weather/src/public-api.js',
    output: {
        file: 'dist/widget-weather.umd.js',
        format: 'umd',
         name:'widget-weather'
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
        
        // uglify(),
        // graph(graphOptions)
        // typescript({
        //     typescript: require('typescript')
        // })
    ],
    external: [
        // 'plugins-core',
        '@angular/core',
        "@angular/common",
        '@widget/manifest',
        'echarts'
    ]
}