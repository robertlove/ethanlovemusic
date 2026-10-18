# Ethan Love Music

Multi-instrumentalist in Sydney, Australia. Drums, guitar, bass, and keyboards. Covers and original compositions. @ethanlove.music.

## Installation

### Clone repository

```shell
git clone git@github.com:robertlove/ethanlovemusic.git
cd ethanlovemusic
```

### Install dependencies

```shell
bundle install
npm i -g purgecss
npm i -g lightningcss-cli
```

## Usage

### Serve site

```shell
bundle exec jekyll serve
```

### Remove unused CSS

```shell
purgecss --config ./purgecss.config.js
```

### Minify CSS

```shell
lightningcss --minify ./_site/assets/css/style.css -o ./_site/assets/css/style.css
```

## Contributing

See [Contributing](https://github.com/robertlove/.github/blob/master/CONTRIBUTING.md).

## Credits

See [Contributors](https://github.com/robertlove/ethanlovemusic/graphs/contributors).
