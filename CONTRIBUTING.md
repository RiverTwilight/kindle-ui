# Contributing to kindle-ui

Want to contribute to kindle-ui? There are a few things you need to know.

## Start development

```bash
git clone https://github.com/rivertwilight/kindle-ui.git
```

It's recommended to use vscode workspace to open this project. You can do this by cliking the [kindle-ui.codespace](./kindle-ui.code-workspace) file.

Then, run this commands in root folder with `pnpm`.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) at your browser and start hacking (it should opened automatically).

## Publish the package

1. Change the version number in `package.json` of the package you want to update (e.g. `@kindle-ui/core`)

2. Run these command at the package directory

```bash
npm publish
```

## 常见问题

### I. 抛出“Can't resolve 'kindle-ui'...”之类的错误

请尝试以下三种解决方案：

1. 检查`dist`文件夹是否为空，如果是，运行`npm run build`构建生产包，然后运行`npm run dev`。

2. 检查`playground/node_modules/kindle-ui`是否存在并链接到根目录。 如果没有，你可能需要在 `playgrpund` 文件夹中手动运行 `npm i ../ -save`。

3. 如果 1 和 2 都不起作用，打开两个终端，在第一个终端运行`npm run build-watch`，在另一个终端运行`npm run start-playground`。

## Reference

-   [YouTube](https://www.youtube.com/watch?v=jsooU1Hgaf4)
