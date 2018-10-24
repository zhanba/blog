---
title: 'front end devtools'
date: '2017-08-21'
---

- Commitizen 提供交互式命令行提交 commit 信息
  - validate-commit-msg/commitlint 验证 commit 信息格式，推荐格式规范为 angular 规范
- husky 设置 Git precommit 钩子
- lint-staged 调用 lint 工具，只检查本次提交的代码
- prettier 代码格式化

- tslint 代码错误/最佳实践/代码风格
- stylelint

- standard-version 自动管理版本号，生成 CHANGELOG，打 tag

  - cz-conventional-changelog 根据 commit 生成项目日志

  ```bash
  git push --follow-tags origin master && npm publish
  ```

- jest 代码测试
- webpack 代码构建
- nodemon 检测文件变化，自动重启
- 浏览器
  - Devtools
  - react developer tools
  - redux devtools
- vscode 自定义配置和插件
  - Auto Close Tag
  - Auto Rename Tag
  - Debugger for Chrome
  - GitLens
  - markdownlint
  - npm: 检查 package.json
  - npm Intellisense: 自动提示包名
  - Path Intellisense
  - Prettier
  - stylelint
  - TSLint
  - Typescript React code snippets

#### Webpack

> - webpack is a static module bundler for modern JavaScript applications
> - builds a dependency graph
> - generates one or more bundles

- entry
- output
- loader
  - babel-loader
  - ts-loader
  - url-loader
  - style-loader
  - css-loader
  - postcss-loader
  - less-loader
- plugin

  - webpack.ContextReplacementPlugin
  - html-webpack-plugin
  - copy-webpack-plugin

  - fork-ts-checker-webpack-plugin
  - stylelint-webpack-plugin

  - clean-webpack-plugin
  - mini-css-extract-plugin
  - uglifyjs-webpack-plugin
  - webpack-bundle-analyzer
