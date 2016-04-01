# Angular svg base fix

A small directive for fixing SVG ``xlink:href`` within a document with a base tag

### Installation

via npm:

```
npm install angular-svg-base-fix
```

via bower:

```
bower install angular-svg-base-fix
```

### How to use

```javascript
angular
  .module( 'myApp', ['svgBaseFix'] )
  .config( function($locationProvider) {
    $locationProvider.html5Mode(true);
  });
```

```html
<svg>
  <use svg-base-fix xlink:href="#icon-name"></use>
</svg>
```
