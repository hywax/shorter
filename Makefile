CONTAINER_NAMESPACE = ghcr.io/hywax/shorter

.PHONY: help
help: ## Help
	@grep -E '^[0-9a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: run-lint-makefile
run-lint-makefile: ## Run lint for Makefile
	perl -pi -e 's/^  */\t/' Makefile

.PHONY: build-web-container ## Build web container image
build-web-container:
	docker build -t ${CONTAINER_NAMESPACE}-web:latest -f docker/web/Dockerfile .
