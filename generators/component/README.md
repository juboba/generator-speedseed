# Component generator

> Note: This generator is still in alpha and only works for AngularJS applications.

### Usage

```bash
yo speedseed:component [component_name]
```
Running
```bash
yo speedseed:component example
```
will generate:
```bash
`-- example
    |-- _main.scss
    |-- _tpl.html
    `-- main.js
```
The main.js file will contain:
```javascript
angular
.module('myAppName')
.component('example', {
  template: ` include('app/components/example', '_tpl', 'html') `,

  controller() {

    this.$onInit = () => {
    }

  }
})

```

## TODO
* Add the component files to the main.scss file.
* Add support for version 0.8.0 with multiple css preprocessors.
* Add the component `js` file to the `index.html` file to be imported.
