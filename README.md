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
npx purgecss --config ./purgecss.config.js
```

### Minify CSS

```shell
npx lightningcss --minify ./_site/assets/css/style.css -o ./_site/assets/css/style.css
```

## Credits

See [Contributors](https://github.com/robertlove/ethanlovemusic/graphs/contributors).
