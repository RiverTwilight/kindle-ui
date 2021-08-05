# kindyle

![](/screenshots/cover.jpg)

## Features

-   [x] 4 native Kindle componenets
-   [x] Light / Dark theme

## Usage

```bash
npm i kindyle
```

### Navbar

Navbar is an integrated kindle native component. All icons are un-editable, but you can still change some status and callback functions such as battery, device name and so on.

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

## Contribution

```bash
git clone https://github.com/rivertwilight/kindyle.git
npm run i-all
npm run dev
```

if it throws an error like `Can't resolve 'kindle'...`, follow the steps below to solve:

1. Check whether the `dist` folder is empty, if so, run `npm run build` to build a production bundle then run `npm run dev`.

2. Check whether the `playground/node_modules/kindyle` exsit and linked to root directory. if not, you may need to run `npm i ../ -save`mannually in `playgrpund` folder.

## License

inspired by [this article](https://hinammehra.medium.com/build-a-private-react-component-library-cra-rollup-material-ui-github-package-registry-1e14da93e790)

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FRiverTwilight%2Fkindyle.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FRiverTwilight%2Fkindyle?ref=badge_large)
