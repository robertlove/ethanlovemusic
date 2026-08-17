# Ethan Love Music

## Installation

### Clone repository

```shell
git clone git@github.com:robertlove/ethanlovemusic.git
cd ethanlovemusic
```

### Install dependencies

```shell
bundle install
npm install -g purgecss
gem install html-proofer
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

### Check HTML

```shell
htmlproofer ./_site --swap-urls '^/ethanlovemusic/:/'
```

## Contributing

See [Contributing](https://github.com/robertlove/.github/blob/master/CONTRIBUTING.md).

## Credits

See [Contributors](https://github.com/robertlove/ethanlovemusic/graphs/contributors).