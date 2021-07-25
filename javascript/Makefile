.PHONY: install
install:
	@find . -maxdepth 1 -type d \( ! -name . \) -exec bash -c "cd '{}' && echo '{}' && pnpm install" \;

.PHONY: test
test:
	@find . -maxdepth 1 -type d \( ! -name . \) -exec bash -c "cd '{}' && echo '{}' && pnpm test" \;
