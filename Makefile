GIT_BRANCH=$(shell git rev-parse --abbrev-ref HEAD)
GIT_LAST_COMMIT_HASH=$(shell git rev-parse --short HEAD)
PROJECT_ID=personal-site
GCR_ADDRESS=gcr.io/topgrade-hosting
DOCKER_BUILD_TAG=$(PROJECT_ID)-$(GIT_BRANCH)
DOCKER_PUBLISH_TAG=$(GCR_ADDRESS)/$(PROJECT_ID)-$(GIT_BRANCH):$(GIT_LAST_COMMIT_HASH)

app-help:
	@echo "Application specific targets:"
	@echo "  build-image     build a docker image with the source code"
	@echo "  publish-image   publish the docker image to $(GCR_ADDESS)"
	@echo ""

build-image:
	@echo "Building from scratch: $(DOCKER_BUILD_TAG)"
	@docker build -f Dockerfile -t $(DOCKER_BUILD_TAG) .
	@echo "Done! use 'make publish-image' to push new image"

publish-image:
	@echo "Publishing image"
	@docker tag $(DOCKER_BUILD_TAG) $(DOCKER_PUBLISH_TAG)
	@docker push $(DOCKER_PUBLISH_TAG)
	@echo "Done publishing. Image address: $(DOCKER_PUBLISH_TAG)"
