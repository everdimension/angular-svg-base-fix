(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['angular'], factory);
  } else if (typeof module !== 'undefined' && typeof module.exports === 'object') {
    // CommonJS support (for us webpack/browserify/ComponentJS folks)
    module.exports = factory(require('angular'));
  } else {
    // in the case of no module loading system
    // then don't worry about creating a global
    // variable like you would in normal UMD.
    // It's not really helpful... Just call your factory
    return factory(root.angular);
  }
}(this, function (angular) {
  'use strict';

  var moduleName = 'svgBaseFix';
  angular.module(moduleName, [])

    .directive('svgBaseFix', ['$rootScope', function($rootScope) {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          var attr = 'xlinkHref';

          var initialUrl = attrs[attr];
          var parsingNode = document.createElement('a');

          attrs.$observe(attr, updateValue);
          $rootScope.$on('$locationChangeSuccess', updateValue);

          function updateValue() {
            var newVal;
            parsingNode.setAttribute(
              'href',
              location.pathname + location.search + initialUrl
            );
            newVal = parsingNode.toString();

            if (newVal && attrs[attr] !== newVal) {
              attrs.$set(attr, parsingNode.toString());
            }
          }
        }
      };
    }]);

  return moduleName;
}));
