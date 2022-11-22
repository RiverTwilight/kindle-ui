<a href="https://app.fossa.com/projects/git%2Bgithub.com%2FRiverTwilight%2Fkindyle?ref=badge_large">
<img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FRiverTwilight%2Fkindyle.svg?type=large" align="right" height="288" width="288">
</a>

# Kindle-UI

[English Version](./README.en.md) | 简体中文

一个用于在浏览器中构建 Kindle 系统的组件库。

~~本项目是我高考前最后一个坑啦，欢迎 PR！~~

Amazon 官方已于今年八月陆续推送新版本的 UI。

## 🍊 特性

-   [x] 11 个交互式 Kindle 组件（对话框、按钮、列表、文本框、导航栏...）
-   [x] 夜间模式
-   [x] 原汁原味 Kindle OS 字体（可选）
-   [x] 100% TypeScript
-   [ ] 多样式对话框
-   [ ] `Expermintal Browser` App
-   [ ] `Font Setting` App
-   [ ] Unit test

```bash
npm i kindle-ui
```

## App

App 是 kindle 中高度集成的应用程序，大多数情况下你无法对其进行编辑。 如果你在你的项目中使用它们，你可能还需要自己添加一个路由器。

### 实验性浏览器

## 🪟 组件

### Navbar

Navbar 是一个集成的 Kindle 原生组件。 所有图标都是不可编辑的，但你仍然可以更改一些状态和回调函数，例如电池、设备名称等。

<details>
  <summary>Example:</summary>
  
```JSX
<Navbar>
	<StatuBar airplane battery={86} deviceName="My Kindle" />
	<ActionBar>
		<ActionGroup>
			<ActionItem
				onClick={() => {
					history.push("/");
				}}
			>
				<HomeOutlineIcon />
				home
			</ActionItem>
			<ActionItem
				onClick={() => {
					history.goBack();
				}}
			>
				<ArrowBackSharpIcon />
				BACK
			</ActionItem>
			<ActionItem>
				<CogSharpIcon />
				settings
			</ActionItem>
		</ActionGroup>
		<ActionBarSpace />
		<ActionGroup>
			<SearchBar />
			<ActionBarMenu
				items={[
					{
						textPrimary: "Github",
						component: "a",
						href: "https://github.com/rivertwilight",
					},
				]}
			/>
		</ActionGroup>
	</ActionBar>
</Navbar>
```
</details>

### Container

使用 Container 容器可以赋予神色模式切换的能力。

```JSX
import { Container } from "@kindle-ui/core";

function App() {
	return (
		<Container>
            {/* ... */}
		</Container>
	);
}

export default App;
```

### Typography

使用`Typography`来呈现文章或其他富文本内容。

| name      | optional | default | description    |
| :-------- | :------: | :-----: | -------------- |
| greyImage |  false   |  true   | 图片显示为黑白 |

### Button

| name | optional | default | description |
| :--- | :------: | :-----: | ----------- |
| href |   true   |   --    | --          |

### List

<details>
  <summary>Example:</summary>

```JSX
	<List>
		<ListItem component={Link} to="/reader">
			<ListItemText primary="尘埃落定" second="阿来著" />
		</ListItem>
		<ListItem component="a" href="https://github.com">
			<ListItemText
				primary="The Adventure of Sherlok Holmoes (福尔摩斯探案集）"
				second="Arthur Conan Doyle"
			/>
			<ListItemIcon
				onClick={() => {
					alert("Hello");
				}}
			>
				<EllipsisVerticalIcon />
			</ListItemIcon>
		</ListItem>
	</List>
```

</details>

| name | optional | default | description |
| :--- | :------: | :-----: | ----------- |
| href |   true   |   --    | --          |

## 字体

```bash
npm i kindle-fonts
# or
yarn add kindle-fonts
```

Then import it in your project:

```JSX
import "kindle-fonts/bookerly.css";
import "kindle-fonts/amazon-ember.css";
```

## 贡献

```bash
git clone https://gitee.com/rivertwilight/kindle-ui.git
npm run i-all
npm run dev
```

### 常见问题

#### I. 抛出“Can't resolve 'kindle-ui'...”之类的错误

请尝试以下三种解决方案：

1. 检查`dist`文件夹是否为空，如果是，运行`npm run build`构建生产包，然后运行`npm run dev`。

2. 检查`playground/node_modules/kindle-ui`是否存在并链接到根目录。 如果没有，你可能需要在 `playgrpund` 文件夹中手动运行 `npm i ../ -save`。

3. 如果 1 和 2 都不起作用，打开两个终端，在第一个终端运行`npm run build-watch`，在另一个终端运行`npm run start-playground`。

## License

MIT

灵感来源于 [这个博客](https://ash.ms)
