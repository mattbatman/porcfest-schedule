#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build
npm run export

# navigate into the build output directory
cd out

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# git init
git checkout gh-pages
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push origin gh-pages

cd -