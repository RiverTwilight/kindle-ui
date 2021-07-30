# kindlye

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FRiverTwilight%2Fkindlye.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FRiverTwilight%2Fkindlye?ref=badge_shield)

🎞A kindle-styled React component library.

## Features

-   [x] 4 native Kindle componenets
-   [ ] Light / Dark theme

## Contribution

```bash
git clone https://github.com/rivertwilight/kindlye.git
npm run i-all
npm run dev
```

if it throws an error like `Can't resolve 'kindle'...`, you may need to run `npm i ../ -save`mannually in `playgrpund` folder.

## Usage

### Navbar

### Container

If you want to use AmazonEmber font(around 106kb) to get a more kindle-ish ui, you can wrap your app with `Container` componenet, which add a global font-family.

```JSX
import { Container } from "kindlye";

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

## License

inspired by [this article](https://hinammehra.medium.com/build-a-private-react-component-library-cra-rollup-material-ui-github-package-registry-1e14da93e790)

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FRiverTwilight%2Fkindlye.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FRiverTwilight%2Fkindlye?ref=badge_large)
