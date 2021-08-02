# react library starter

Typescript react library starter, with demo page. 

## Features

* Bundle with [parcel v2](https://v2.parceljs.org)
* Generate `commonjs`, `esmodule`, `d.ts` and `example.html`
* Auto deploy github demo page.

## Command

* `pnpm dev`: Start dev server
* `pnpm build`: Build production bundle.

## Auto deploy github page

require environment variable

* `DeployPath`: which path you want to deploy to github page, default is `./dist`
* `DeployBranch`: the github page branch name, default is `gh-page` 
* `GitHubEmail`: you github email
* `GitHubUser`: you github username
* `GitHubRepo`: github repository name
* `GitHubKEY`: github personal access token, create a new token with the `repo` scope from [here](https://github.com/settings/tokens/new).

see more details: [deploy_gh_page.sh](./deploy_gh_page.sh)