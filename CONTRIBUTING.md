# Contributing to kindle-ui

Want to contribute to kindle-ui? There are a few things you need to know.

```bash
git clone https://gitee.com/rivertwilight/kindle-ui.git
npm run i-all
npm run dev
```

## 常见问题

### I. 抛出“Can't resolve 'kindle-ui'...”之类的错误

请尝试以下三种解决方案：

1. 检查`dist`文件夹是否为空，如果是，运行`npm run build`构建生产包，然后运行`npm run dev`。

2. 检查`playground/node_modules/kindle-ui`是否存在并链接到根目录。 如果没有，你可能需要在 `playgrpund` 文件夹中手动运行 `npm i ../ -save`。

3. 如果 1 和 2 都不起作用，打开两个终端，在第一个终端运行`npm run build-watch`，在另一个终端运行`npm run start-playground`。
