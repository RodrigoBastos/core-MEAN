/**
 * Created by Rodrigo Bastos on 28/10/15.
 */

//AngularJS
//= include ../components/angular/angular.js
//= include ../components/angular-ui-router/release/angular-ui-router.js
//= include ../components/angular-foundation/mm-foundation.js
//= include ../components/ng-tags-input/ng-tags-input.js


// App Specific
//= include partials/collaborative-routes.js
//= include partials/collaborative-controllers.js


(function () {
  angular.module('application', [
    'ui.router',

    // App Specific
    'application.routes',
    'application.controllers',

    'mm.foundation',
    'ngTagsInput'

  ]);
})();