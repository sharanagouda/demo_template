#!/usr/bin/env bash
set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
SV="$(dirname "${DIR}")/node_modules/.bin/standard-version"

BRANCH=`git branch | grep \* | cut -d ' ' -f2`

if [[ "${BRANCH}" == "staging" ]]; then
    yarn
    ${SV}

    YARNHOOK_BYPASS=true git rev-parse --verify --quiet master && git checkout master || git checkout --track origin/master
    YARNHOOK_BYPASS=true git reset --hard HEAD
    YARNHOOK_BYPASS=true git clean -xfd
    YARNHOOK_BYPASS=true git merge --ff staging

    YARNHOOK_BYPASS=true git checkout staging
    YARNHOOK_BYPASS=true git reset --hard HEAD
    YARNHOOK_BYPASS=true git clean -xfd

    YARNHOOK_BYPASS=true git rev-parse --verify --quiet develop && git checkout develop || git checkout --track origin/develop
    YARNHOOK_BYPASS=true git reset --hard HEAD
    YARNHOOK_BYPASS=true git clean -xfd
    YARNHOOK_BYPASS=true git merge --no-ff staging -m "chore: merge staging into develop"

    YARNHOOK_BYPASS=true git push --atomic --follow-tags origin master staging develop
fi

if [[ "${BRANCH}" == "develop" ]]; then
    YARNHOOK_BYPASS=true git rev-parse --verify --quiet staging && git checkout staging || git checkout --track origin/staging
    YARNHOOK_BYPASS=true git reset --hard HEAD
    YARNHOOK_BYPASS=true git clean -xfd
    YARNHOOK_BYPASS=true git merge --no-ff develop -m "chore: merge develop into staging"

    YARNHOOK_BYPASS=true git push --atomic --tags origin staging develop
fi
