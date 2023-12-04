# Navigation Nation

导航菜单动画小项目

在线预览 [GitHub Pages](https://azir-dev.github.io/navigation-nation/)

## 要点文档

> SASS 变量、嵌套语法和多种选择器的使用
>
> [SASS](https://sass-lang.com/)

> CSS Animation
>
> [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation)

## 感谢免费资源提供商

> icon
>
> favicon.ico: [https://favicon.io/emoji-favicons/hear-no-evil-monkey/](https://favicon.io/emoji-favicons/hear-no-evil-monkey/)

> 字体库
>
> [Google Fonts Nova+Square](https://fonts.google.com/specimen/Nova+Square)

> 图片库
>
> [Unsplash](https://unsplash.com/)

## 技术栈

> [SASS](https://sass-lang.com/)

> [Vite 打包 VanillaJs](https://cn.vitejs.dev/)

> [MDN HTML](https://developer.mozilla.org/zh-CN/docs/Learn/HTML)

> [MDN CSS](https://developer.mozilla.org/zh-CN/docs/Learn/CSS)

> [Javascript (VanillaJs)](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript)

## 代码库、版本管理及静态页面托管

> [github](https://github.com/)

## Vite 部署到 GitHubPages 笔记

> vite.config.js

```js
/** @type {import('vite').UserConfig} */
export default {
  base: "/navigation-nation/",
};
```

> github pages setting

```
# 将静态内容部署到 GitHub Pages 的简易工作流程
name: Deploy static content to Pages

on:
  # 仅在推送到默认分支时运行。
  push:
    branches: ['master']

  # 这个选项可以使你手动在 Action tab 页面触发工作流
  workflow_dispatch:

# 设置 GITHUB_TOKEN 的权限，以允许部署到 GitHub Pages。
permissions:
  contents: read
  pages: write
  id-token: write

# 允许一个并发的部署
concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  # 单次部署的工作描述
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v3
        with:
          node-version: 18.18.0
          cache: 'npm'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          # Upload dist repository
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```
