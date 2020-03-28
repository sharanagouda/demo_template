#!/usr/bin/env bash
set -e

BRANCH=`git branch | grep \* | cut -d ' ' -f2`

if [[ "${BRANCH}" != hotfix/* ]]; then
    exit 1
fi

YARNHOOK_BYPASS=true git rev-parse --verify --quiet staging && git checkout staging || git checkout --track origin/staging
YARNHOOK_BYPASS=true git reset --hard HEAD
YARNHOOK_BYPASS=true git clean -xfd
YARNHOOK_BYPASS=true git pull
YARNHOOK_BYPASS=true git merge --no-ff "${BRANCH}" -m "chore: merge ${BRANCH} into staging"

YARNHOOK_BYPASS=true git checkout "${BRANCH}"
YARNHOOK_BYPASS=true git reset --hard HEAD
YARNHOOK_BYPASS=true git clean -xfd

YARNHOOK_BYPASS=true git rev-parse --verify --quiet staging && git checkout develop || git checkout --track origin/develop
YARNHOOK_BYPASS=true git reset --hard HEAD
YARNHOOK_BYPASS=true git clean -xfd
YARNHOOK_BYPASS=true git pull
YARNHOOK_BYPASS=true git merge --no-ff "${BRANCH}" -m "chore: merge ${BRANCH} into develop"

YARNHOOK_BYPASS=true git push --atomic origin staging develop