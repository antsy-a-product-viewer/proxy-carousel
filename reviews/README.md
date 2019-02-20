# Antsy Reviews

> This project will comprise the reviews component for an item on an ecommerce store

## Related Projects

  - https://github.com/antsy-a-product-viewer/shop-summary
  - https://github.com/antsy-a-product-viewer/Photo-Carousel
  - https://github.com/antsy-a-product-viewer/Add-Items-to-Cart

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

1. rename `sampleKeys.js` file to `keys.js` which will contain your mysql credentials

2. rename `sampleConfig.txt` file to `config.txt` which will contain your mysql credentials

3. `npm run create-db` - creates the database in mysql

4. `npm run seed-db` - this runs migrations and seeds the db created the db to use in mysql and creates a migrations folder showing that these migrations were run. If you ever want to start from scratch your first step would be to `npm run rollback` which will rollback the migrations and get rid of the db

5. `npm run react-dev` - this will start webpack

6. `npm run server` - starts nodemon on port 3020


## Requirements

## Development

### Installing Dependencies

From within the root directory:

`npm install`

