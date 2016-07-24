module.exports = {
    dest: 'docs/.build',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'EulerProject',
            lastUpdated: 'Last Updated',
        }
    },
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `./favicon.png` }]
    ],
    themeConfig: {
        repo: 'GalAster/EulerProject',
        editLinks: true,
        docsDir: 'docs',
        markdown: {
            lineNumbers: true
        },
        sidebar: [
            {
                title: 'Level1-100',
                collapsable: true,
                children: [
                    ['/Lv0 炼气/1-10.md', 'Level1-10'],
                    ['/Lv0 炼气/11-20.md', 'Level11-20'],
                    ['/Lv0 炼气/21-30.md', 'Level21-30'],
                    ['/Lv0 炼气/31-40.md', 'Level31-40'],
                    ['/Lv0 炼气/41-50.md', 'Level41-50'],
                    ['/Lv0 炼气/51-60.md', 'Level51-60'],
                    ['/Lv0 炼气/61-70.md', 'Level61-70'],
                    ['/Lv0 炼气/71-80.md', 'Level71-80'],
                    ['/Lv0 炼气/81-90.md', 'Level81-90'],
                    ['/Lv0 炼气/91-100.md', 'Level91-100'],
                ]
            },
            {
                title: 'Level101-200',
                collapsable: true,
                children: [
                    ['/Lv1 旋照/101-110.md', 'Level101-110'],
                    ['/Lv1 旋照/111-120.md', 'Level111-120'],
                    ['/Lv1 旋照/121-130.md', 'Level121-130'],
                    ['/Lv1 旋照/131-140.md', 'Level131-140'],
                    ['/Lv1 旋照/141-150.md', 'Level141-150'],
                    ['/Lv1 旋照/151-160.md', 'Level151-160'],
                    ['/Lv1 旋照/161-170.md', 'Level161-170'],
                ]
            },
        ]
    },
    serviceWorker: true,
    markdown: {
        config: md => {
        }
    },
    plugins: {
        mathjax: {
            target: 'chtml',
            presets: [],
        },
    }
};
