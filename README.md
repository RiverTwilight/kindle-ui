# Kindle-UI

![](/screenshots/cover.jpg)

## 🍊Features

-   [x] 10 interactive Kindle components（Dialog, Button, List, Navbar...)
-   [x] Light / Dark theme switch
-   [x] Native kindle OS font (Optional)
-   [ ] Still developing...

```bash
npm i kindle-ui
```

## App

An app is a highly-integrated app in kindle, in most case you cannot edit it. If you use them in your project, you may need to also add a router yourself.

### Browser

### Reader

## Componenets

### Navbar

Navbar is an integrated kindle native component. All icons are un-editable, but you can still change some status and callback functions such as battery, device name and so on.

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

If you want to use AmazonEmber font(around 106kb) and dark mode to get a more kindle-ish ui, you can wrap your app with `Container` componenet, which adds a global font-family.

```JSX
import { Container } from "kindyle";

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

Use `Typography` to present an article or other rich-text content.

| name      | optional | default | description     |
| :-------- | :------: | :-----: | --------------- |
| greyImage |  false   |  true   | make image grey |

### Button

| name | optional | default | description    |
| :--- | :------: | :-----: | -------------- |
| href |   true   |   --    | make it a link |

## Contribution

```bash
git clone https://github.com/rivertwilight/kindyle.git
npm run i-all
npm run dev
```

if it throws an error like `Can't resolve 'kindle'...`, Try three solustions:

1. Check whether the `dist` folder is empty, if so, run `npm run build` to build a production bundle then run `npm run dev`.

2. Check whether the `playground/node_modules/kindyle` exsit and linked to root directory. if not, you may need to run `npm i ../ -save`mannually in `playgrpund` folder.

3. If both 1 and 2 doesn't work, open two terminals, run `npm run build-watch`in first erminal and run `npm run start-playground` in another one.

## License

MIT

inspired by [this blog](https://ash.ms)

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FRiverTwilight%2Fkindyle.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FRiverTwilight%2Fkindyle?ref=badge_large)
