# Contributing to kindle-ui

Want to contribute to kindle-ui? There are a few things you need to know.

## Start development

```bash
git clone https://gitee.com/rivertwilight/kindle-ui.git
```

We recommend you to use vscode workspace to open this project. You can do this by cliking the [kindle-ui.codespace](./kindle-ui.code-workspace) file.

Then, run this commands in root folder with Yarn 2.

```bash
yarn
yarn run dev
```

Open [https://localhost:3000](https://localhost:3000) at your browser and start hacking!.

<details>
    <summary>How does it work?</summary>
    
    We use yarn's workspace to manage the dependency, which is enabled in package.json by:

    ```json
    "workspaces": [
        "packages/*"
    ]
    ```

    In the [docs](./packages/docs/) folder, we'll link '@kindle-ui/core' to local version instead of the online so we can test the component locally.

    ```json
    "dependencies": {
        "@kindle-ui/core": "workspace:*",
    }
    ```
</detials>

## 常见问题

### I. 抛出“Can't resolve 'kindle-ui'...”之类的错误

请尝试以下三种解决方案：

1. 检查`dist`文件夹是否为空，如果是，运行`npm run build`构建生产包，然后运行`npm run dev`。

2. 检查`playground/node_modules/kindle-ui`是否存在并链接到根目录。 如果没有，你可能需要在 `playgrpund` 文件夹中手动运行 `npm i ../ -save`。

3. 如果 1 和 2 都不起作用，打开两个终端，在第一个终端运行`npm run build-watch`，在另一个终端运行`npm run start-playground`。
