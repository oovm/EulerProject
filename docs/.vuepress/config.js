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
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `./favicon.ico` }]
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
                    ['/Lv0-炼气/1-10.md', 'Level1-10'],
                    ['/Lv0-炼气/11-20.md', 'Level11-20'],
                    ['/Lv0-炼气/21-30.md', 'Level21-30'],
                    ['/Lv0-炼气/31-40.md', 'Level31-40'],
                    ['/Lv0-炼气/41-50.md', 'Level41-50'],
                    ['/Lv0-炼气/51-60.md', 'Level51-60'],
                    ['/Lv0-炼气/61-70.md', 'Level61-70'],
                    ['/Lv0-炼气/71-80.md', 'Level71-80'],
                    ['/Lv0-炼气/81-90.md', 'Level81-90'],
                    ['/Lv0-炼气/91-100.md', 'Level91-100'],
                ]
            },
            {
                title: 'Level101-200',
                collapsable: true,
                children: [
                    ['/Lv1-旋照/101-110.md', 'Level101-110'],
                    ['/Lv1-旋照/111-120.md', 'Level111-120'],
                    ['/Lv1-旋照/121-130.md', 'Level121-130'],
                    ['/Lv1-旋照/131-140.md', 'Level131-140'],
                    ['/Lv1-旋照/141-150.md', 'Level141-150'],
                    ['/Lv1-旋照/151-160.md', 'Level151-160'],
                    ['/Lv1-旋照/161-170.md', 'Level161-170'],
                                        ['/Lv1-旋照/171-180.md', 'Level151-160'],
                                        ['/Lv1-旋照/181-190.md', 'Level161-170'],
                                        ['/Lv1-旋照/191-200.md', 'Level161-170'],
                ]
            },
            {
                title: 'Level201-300',
                collapsable: true,
                children: [
                    ['/Lv2-筑基/201-210.md', 'Level201-210'],
                ]
            },
            {
                title: 'Level301-400',
                collapsable: true,
                children: [
                    ['/Lv3-金丹/301-310.md', 'Level301-310'],
                ]
            },
            {
                title: 'Level401-500',
                collapsable: true,
                children: [
                    ['/Lv4-灵寂/401-410.md', 'Level401-410'],
                ]
            },
            {
                title: 'Level501-600',
                collapsable: true,
                children: [
                    ['/Lv5-元婴/501-510.md', 'Level501-510'],
                ]
            },
            {
                title: 'Level601-700',
                collapsable: true,
                children: [
                    ['/Lv6-分神/601-610.md', 'Level601-610'],
                ]
            },
            {
                title: 'Level701-800',
                collapsable: true,
                children: [
                    ['/Lv7-合体/701-710.md', 'Level701-710'],
                ]
            },
            {
                title: 'Level801-900',
                collapsable: true,
                children: [
                    ['/Lv8-练虚/801-810.md', 'Level801-810'],
                ]
            },
            {
                title: 'Level901-1000',
                collapsable: true,
                children: [
                    ['/Lv9-大乘/901-910.md', 'Level901-910'],
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
