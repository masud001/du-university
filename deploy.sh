#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m "deployment commit"
git push -f git@github.com:masud001/du-university.git master:gh-pages

cd -
