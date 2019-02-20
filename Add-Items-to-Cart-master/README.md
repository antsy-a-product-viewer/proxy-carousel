# Project Name
Add to Cart
> 

## Related Projects

  - https://github.com/antsy-a-product-viewer/shop-summary
  - https://github.com/antsy-a-product-viewer/reviews
  - https://github.com/antsy-a-product-viewer/Photo-Carousel

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

-mongod 
-mongo 
-npm run seed
-npm start 
-npm run react-dev

## Running the tests

-npm run test

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- Mongoose 5.4.10
- Mongodb 3.1.13

## Development

This repo will focus on the front end development side of a product's add to cart component. 
-The project started off with generating 100 random items and seeding them into our mongoDb. Mongodb was chosen because it is a great scaling database and there are not a lot of complex transactions taking place in the server/database side. 
-I created a server that intermediates between the client and sends requests to access information from the database at a specific productId.
-I created a client that renders a product's information based on the unique productId that can be reached from an url. /checkout/productId.

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install

```

