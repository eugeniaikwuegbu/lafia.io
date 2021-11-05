# About
Dropper Service

## Installation
To clone the project:
```bash
https://github.com/GOFAST-hub/dropper-service.git
```
`cd` into the `dropper-service` directory
```bash
cd dropper-service
```

create a `.env` file with actual values similar to the `.env.example` file.

install project dependencies
```
yarn install
```

compile Typescript files to Javascript (by continuously watching)
```bash
yarn tsc -w
```

open another terminal, and run the project
```bash
yarn start:dev
```

## Knex.js Configuration

To make migrations
```bash
yarn mg:make <migration-name>

or

NODE_ENV=<development-environment> yarn mg:make <migration-name>
```

To run all migrations
```bash
yarn mg:latest
```

To create seeds

```bash
yarn seed:make <seed-name>
```

To run seeds on database
```bash
yarn seed:run
`````





