# Xteink Crossink clippings sorter

This is trivial script that converts the 'My Clippings.txt' file into a sorted (by book) list of highlights.

## Usage

```sh
git clone git@github.com:nkhil/xteink-highlights-sorter.git
cd xteink-highlights-sorter

npm install
```

Once you've cloned and installed dependencies, add your 'My Clippings.txt' file into the root folder and rename it as 'data.txt'.

```sh
npm run build:watch

node build/main.js
```
