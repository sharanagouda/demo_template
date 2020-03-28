# CD-TV-CLIENT-TEMPLATE

## Project Setup

**NB: Before following the setup steps**, you'll need to do the following. This is because some packages are coming from a private NPM repository (https://nexus-prod-mercury.dnitv.net/repository/npm-group/)

#### Github Access Token

Generate yourself a personal token https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/, with the only permission required is

```
admin:org / read:org
```

#### Login to Nexus

Login to Discovery Sonatype nexus

`npm login --scope @discovery-dni --registry https://nexus-prod-mercury.dnitv.net/repository/npm-group/`

```
> Username: <Github handle>
> Password: <Github Personal Access Token>
> Email: <Company account>
```

### Setup Steps

Ensure that you have the latest version of yarn and lerna installed

```
brew install yarn
brew install lerna
```

#### Core

```
git clone git@github.com:DNI-Mercury/cd-tv-core.git
cd cd-tv-core
yarn && yarn build
lerna exec yarn link
```

#### Client Template

**If you have already cloned this template into another repo, then your repo name and directory might be different.**

```
git clone git@github.com:DNI-Mercury/cd-tv-client-template.git
cd cd-tv-client-template
```

Put an `.env` file in the root of the project and fill it with

- `LOCAL_DEV_URL`: Domain used for local dev, example `http://localhost` or your ip address
- `APP_URL_PORT`: eg. `8081`

```
git checkout develop
chmod 777 ./update.sh
```

`update.sh` (runs yarn link on packages)

`yarn && yarn dev`
**(should be fine, but if you get an error, then use `yarn watch` and then `yarn start` in different terminals. Error is because of a race condition between the 2 commands. Will be fixed (smile))**

## Important!

**If yarn && yarn dev fail this is usually because you have not correctly logged into nexus please ensure you have logged in with you git username and access token, trouble shooting steps for nexus can be found here**

If you are still have issues with `yarn && yarn dev`, then try running `yarn watch` and `yarn start` in seperate terminal windows. Wait for `yarn watch` to complete before running `yarn start`

https://discovery-digital.atlassian.net/wiki/spaces/MERCURY/pages/386793734/NPM+connection+to+Nexus+Repository+Manager

## Samsung 2015/2016 TVs support

**ES6 features are not supported on Samsung 2015/2016 TVs natively, therefore some of them have been polyfilled in the present project, or Babel plugins have been provided in the "cd-tv-core" project.  
https://github.com/DNI-Mercury/cd-tv-core  
&nbsp;  
Some guidance have to be followed when using some specific features that aren't supported yet in the two projects.**

Instead of using:

```
Array.prototype.includes()
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

please use:

```
lodash.includes
```

https://www.npmjs.com/package/lodash.includes
