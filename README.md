## [WIP] jyeah

This is the WIP of a small library for writing HTML as a JSON object.

## Development
Run `app.js`:

    node app.js

## API
**jyeah** should only have one method: `build`. This method takes a JSON object and returns HTML:

```javascript
jYeah.build({
 "header": {
   "links": {
     "Home": "http://home",
     "About":  "http://about"
   },
   "text": "Stuffff",
   "title": "Title",
   "subtitle": "Subtitle"
   }
 });
```

The `build` method takes only one argument that should be a JSON object. This JSON should have only one or more of the following properties:

    const EXPECTED_PROPS = ['links', 'text', 'title', 'subtitle'];

The code written before should translate into:

    <header>
	    <a href="http://home">Home</a>
	    <a href="http://about">About</a>
	</header>
	<p>Stuffff</p>
	<h1>Title</h1>
	<h2>Subtitle</h2>

## License

Released under The MIT License.