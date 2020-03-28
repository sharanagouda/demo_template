nbin = ./node_modules/.bin
commit = $(nbin)/commit
prettier = $(nbin)/prettier "{,**/}{,.}*.{css,sass,scss,js,json,jsx,md,yml,yaml}" --write
webpack = $(nbin)/webpack --config ./config/webpack/webpack.config.js
eslint = $(nbin)/eslint src
changeCWD = ./

.PHONY: build clean clean-deep commit format lint watch watch-client watch-server

-include .env
export $(shell sed 's/=.*//' .env)

dev:
	$(MAKE) -j watch watch-server

build: clean
	$(webpack)
	cd dist/; yarn init -y; yarn add @discovery-dni/cd-tv.server morgan express express-handlebars dotenv
	cd ../

debug-build: clean
	$(webpack)
	cd dist/; yarn init -y; yarn add @discovery-dni/cd-tv.server morgan express express-handlebars dotenv
	cd ../
	cp update.sh dist/update.sh; cp .env dist/.env
	cd dist/; sh ./update.sh

watch: clean
	${webpack} --watch 

watch-server:
	@sleep 15
	@echo "Starting dev server..."
	@node ./dev-server.js

clean:
	rm -rf ./dist

clean-deep: clean
	rm -rf ./node_modules

commit:
	 $(commit)

format:
	$(prettier) --write

lint:
	$(prettier) --check
	$(eslint) src

open:
	wait-port $(APP_URL_PORT) && open-cli "$(LOCAL_DEV_URL):$(APP_URL_PORT)/login?debug=true&sonicBase=test"
