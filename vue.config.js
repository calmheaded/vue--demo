const path = require("path");
const webpack = require("webpack");
const env = process.env.NODE_ENV;
// console.log(env, 'env')
// console.log(process.env.VUE_APP_TITLE, 'VUE_APP_TITLE')
//  splitchuank 插件    mini-css-extract-plugin 插件

// let path = require('path') //引入node的path模块
// 看到项目各模块的大小，可以按需优化
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
function resolve(dir) {
    return path.join(__dirname, dir);
}
// https://cli.vuejs.org/config/
module.exports = {
    //* ?Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径
    // publicPath: "/production-sub-path/",
    publicPath: "", // 基本路径
    outputDir: "dist", // 修改打包文件所在的目录名称
    assetsDir: "", // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    indexPath: "index.html", // 指定生成的 index.html的名称
    //* ？ entry: './src/main.js'//打包的入口文件 和从0搭建的进行对比一下 发现错误在哪
    // filename: 'test.html'  //同上c
    // title: "title"//同
    // boolean | 'warning' | 'default' | 'error'
    lintOnSave: true, // 是否开启eslint检查
    productionSourceMap: false, // 是否需要生产环境的 source map
    runtimeCompiler: false, // 是否使用包含运行时编译器的 Vue 构建版本 vue.runtime.esm.js true是vue.esm.js
    // 使用插件第一种方式  问题是本地没有生成stats.json 报告
    // https://github.com/neutrinojs/webpack-chain#getting-started
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    configureWebpack: {
        plugins: [
            //   new BundleAnalyzerPlugin({
            //     analyzerMode: 'server',
            //     analyzerHost: '127.0.0.1',
            //     analyzerPort: 8886,
            //     reportFilename: 'report.html',
            //     defaultSizes: 'parsed',
            //     openAnalyzer: true,
            //     generateStatsFile: true,
            //     statsFilename: 'stats.json',
            //     statsOptions: null,
            //     logLevel: 'info'
            //   }),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })
        ],
        resolve: {
            alias: {
                "@": resolve("src")
                // views: resolve("src/views"),
                // components: resolve("src/components")
            }
        }
    },
    // 链式调用方式 参数:need to do test reportFilename参数
    chainWebpack: config => {
        console.log(config.module.js, "config");
        // juejin.im/post/58e8acf10ce46300585a7a42
        // https://www.yht7.com/news/95012
        // 预加载
        // config.plugins.delete("preload"); // TODO: need test
        // config.plugins.delete("prefetch"); // TODO: need test
        // if (process.env.NODE_ENV === "production") {
        // pug模板
        // config.module
        //   .rule("pug")
        //   .use("pug-plain-loader")
        //   .loader("pug-plain-loader")
        //   .end();
        config.module
            .rule("pug")
            .test(/\.pug$/)
            .use("pug-html-loader")
            .loader("pug-html-loader")
            .end();

        // config
        //   .plugin("BundleAnalyzerPlugin")
        //   .use(BundleAnalyzerPlugin)
        //   .tap(() => [
        //     {
        //       analyzerMode: "server",
        //       analyzerHost: "127.0.0.1",
        //       analyzerPort: 8881,
        //       reportFilename: "report.html",
        //       defaultSizes: "parsed",
        //       openAnalyzer: false,
        //       generateStatsFile: true,
        //       statsFilename: "stats.json",
        //       statsOptions: null,
        //       logLevel: "info"
        //     }
        //   ]);
    },
    devServer: {
        // contentBase: './aday', //配置开发服务器运行时的文件根目录
        port: "8070", // 配置端口号
        // compress: true, // 服务器压缩
        open: false, // 自动打开浏览器
        // hot: false //热更新
        // progress: true, //编译的进度条
        // overlay: {
        //     warnings: false,
        //     errors: true
        // },
        // 配置跨域
        // proxy: {
        //     "/workshop/list": {
        //         target:
        //             "https://www.easy-mock.com/mock/5b4590d46039fe6f1bc80f13/portal", //接口域名地址
        //         changeOrigin: true, //是否需要托管站点
        //         pathRewrite: {
        //             //是否重定向
        //             "^/workshop/list": "/workshop/list"
        //         }
        //     },
        //     "/portal/sysdict/outherin": {
        //         target:
        //             " https://www.easy-mock.com/mock/5b4d7411b78715562c929690/xiao", //接口域名地址
        //         changeOrigin: true, //是否需要托管站点
        //         pathRewrite: {
        //             //是否重定向
        //             "^/portal/sysdict/outherin": "/portal/sysdict/outherin"
        //         }
        //     },
        //     // http://qdev.api.quclouds.com/api/media/creative/list-creative?total=0&page=1&page_size=20
        //     "/api": {
        //         target:
        //             " http://qdev.api.quclouds.com", //接口域名地址
        //         changeOrigin: true, //是否需要托管站点
        //         pathRewrite: {
        //             //是否重定向
        //             "^/api": "/api"
        //         }
        //     }
        // }
        // 跨域配置 不生效
        // headers: {
        //     "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Headers":
        //         "X-Requested-With,Content-Type,Accept-Ranges",
        //     "Access-Control-Allow-Methods":
        //         "GET,HEAD,POST,PUT,DELETE,TRACE,OPTIONS,PATCH"
        // },
        // 下面正确
        proxy: {
            // context: [
            //     '/users/*',
            // '/lists'
            //   ],
            "/factorylist": {
                target:
                    " https://www.easy-mock.com/mock/5bb055552babcf0256d454ba/xkx",
                pathRewrite: { "^/factorylist": "" }
            },
            "/users/*": {
                target: " http://zmc9y8.natappfree.cc"
            },
            "/lists/*": {
                target: " http://zmc9y8.natappfree.cc"
            },
            "/test": {
                target: " http://zmc9y8.natappfree.cc",
                pathRewrite: { "^/test": "" }
            },
            "/goods": {
                target: " http://zmc9y8.natappfree.cc"
            },
            "/goods/*": {
                target: " http://zmc9y8.natappfree.cc"
            }
        }
        // 也正确
        // proxy: {
        //     "/api": {
        //         target: "http://qdev.api.quclouds.com", // 代理地址
        //          ws: true, // 允许代理 websockets 协议
        //         secure: false,
        //         changeOrigin: true// 需要虚拟托管的站点要设计为true。建议设为 true，开发时大部分情况都是虚拟托管的站点
        //     }
        // }
    }

    // configureWebpack: config => {
    //   // if (process.env.NODE_ENV === 'production') {
    //   //   // console.log(config, '1')
    //   //   // 为生产环境修改配置...
    //   // } else {
    //   //   // console.log(11111111111, '2')
    //   //   // 为开发环境修改配置...
    //   // }

    // }
};
