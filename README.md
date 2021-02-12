# Project Name

> Title-Banner Service for rpt25-FEC-tater-tots

## Related Projects

  - https://github.com/rpt25-FEC-tatertots/similar-to-this-product.git
  - https://github.com/rpt25-FEC-tatertots/GiGi-DetailedImages.git
  - https://github.com/rpt25-FEC-tatertots/Image-Service-David.git
  - https://github.com/rpt25-FEC-tatertots/overview.git
  - https://github.com/rpt25-FEC-tatertots/GiGi-Sourcing.git
  - https://github.com/rpt25-FEC-tatertots/Inventory-Service-Danny.git
  - https://github.com/rpt25-FEC-tatertots/Reviews-Service-David.git
  - https://github.com/rpt25-FEC-tatertots/proxy-danny.git

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage


> NPM Install
> If you have password for your MySQL, replace line 6 in database > index.js file with your password. If not, comment out line 6 and uncomment line 7.
> Run the following in your terminal
if you have a password, change Hello123 to your own password.
  mysql -u root -pHello123< database/schema.sql
if not, run
  mysql -u root -p < database/schema.sql
>Run the following in a terminal
  npm run seed
>Create the bundle
  npm run react-dev
>Start the server
  npm run server-dev

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```