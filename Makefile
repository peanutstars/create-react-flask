#

SHELL   := /bin/bash



all:
	@(echo "Nothing To Do.")

build:
	@(cd client && yarn build)

init: add-lib
	@(cd client && yarn)

add-lib:
	@(cd client && yarn add react-router-dom query-string axios semantic-ui-react semantic-ui-css)
	@(cd client && yarn add cross-env --dev)



.PHONY: build init add-lib
