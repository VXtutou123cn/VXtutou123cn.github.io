export const zhNavbar = [
    //单层
    {
        text: '主页',
        link: '/',
        // 该元素将一直处于激活状态
        activeMatch: '/',
    },
    //两层嵌套
    {
        text: '学习',
        children:
            [
                {
                    text: '八股',
                    children:
                        [
                            { text: '博客', link: 'https://blog.csdn.net/leader_song' },
                            { text: '八股', link: '/js/' }
                        ]
                },
                {
                    text: '网站',
                    children:
                        [
                            { text: 'Java', link: 'https://code.iglooblog.top/html/1.html' },
                            { text: 'SpringCloud', link: 'https://1m29yg5p67.k.topthink.com/@markdown' },
                            { text: 'Gitee', link: 'https://code.iglooblog.top/css/1.html' }
                        ]
                },
            ],
    },
    //多个条目
    {
        text: '工具',
        children: [
            { text: '政治', link: 'politics' },
            { text: '英语', link: 'english' }
        ],
    },
    {
        text: '关于',
        link: '/about',
    },
    
    // 字符串 - 页面文件路径
    // '/Guide/README.md',
]