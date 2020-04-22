![Vapiano](https://github.com/ThamosIO/vapiano/blob/master/front/assets/vapiano.png?raw=true)

# Vapiano

Vapiano is a simple tool I made to study conjugation in any language.

I couldn't find a tool that catered exactly to my needs, so I made it.

I made it so that you can use it for any language (that uses the latin alphabet for now).

## What it does

Gives you the possibility to :

- Study any verb (from your database) in any tense, with the ability to filter by tense
- Train any verb in any tense

![Sample](https://github.com/ThamosIO/vapiano/blob/master/front/assets/sample.png?raw=true)

## What you need to do

First, install direnv :

```bash
# macOS
$ brew install direnv

# Debian-like
$ apt install direnv
```

This is a Node.js / MongoDB / Preact project, so you need [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [MongoDB](https://docs.mongodb.com/guides/server/install/) installed.

Once this is done:

```bash
$ npm i
```

## What kind of data you need

You need a set of data to insert in the DB.

This project works well with [this scrapper](https://github.com/ThamosIO/language-verb-scrapper) (which was created for this project).

Use it to get the right data. The scrapper will create a json file which can be inserted using the `insert-data` script.

> You could also insert verbs directly into the database but it might be tedious.

For the insertion script to work, you need to have a `json` file containing all the verbs, it should be called `scrapped-verbs.json` and be placed in the `./api/scripts` folder.

Once you have it, run the following command:

```bash
$ npm run insert-data
```

## Starting the project

```bash
$ npm start
```

You can now go to `http://localhost:8080`.

## Credits

Icons made by Freepik from www.flaticon.com.

Font used for the logo is [Wild Youth](https://www.pixelsurplus.com/freebies/wild-youth) by Jeremy Vessey.

## License

> MIT License
>
> Copyright (c) [2020][Thomas RAIMOND]
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
