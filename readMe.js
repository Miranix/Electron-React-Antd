const 文件说明 = {
    'electron-main': { // 主进程目录
        render:主进程打包目录,
        'index.js': 主进程入口文件,
        'logo.png': 项目logo,
        'preload.js': 主进程预加载文件,
    },
    'electron-renderer': { // 渲染进程目录
        model: { // 数据模型  
        },
        src: { // 业务代码
            common: { // 公共方法
            },
            components: { // 公共组件
            },
            views: { // 页面
            },
        }
    },
    scripts: 脚手架
}
