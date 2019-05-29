#

SHELL   := /bin/bash



all:
	@(echo "Nothing To Do.")

build:
	@(cd client && yarn build)

init:
	@(cd client && yarn && yarn eject)

add-lib:
	@(cd client && yarn add react-router-dom query-string)
	@(cd client && yarn add cross-env --dev)



.PHONY: build init add-lib
