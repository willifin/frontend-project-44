install:
		npm ci

brain-even:
		node bin/brain-even.js
.PHONY: brain-even

brain-games:
		node bin/brain-games.js

publish:
		npm publish --dry-run

lint:
		npx eslint .