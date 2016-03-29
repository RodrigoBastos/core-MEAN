/**
 * Created by Rodrigo Bastos on 15/03/16.
 */

//AngularJS
//= include ../components/angular/angular.js
//= include ../components/angular-ui-router/release/angular-ui-router.js

//= include ../components/angular-animate/angular-animate.min.js
//= include ../components/angular-aria/angular-aria.min.js
//= include ../components/angular-material/angular-material.min.js


//App Specific
//= include partials/dashboard.js

(function(){
    angular.module('app', [
        'ui.router',
        'ngMaterial',
        'app.dashboard'
    ])
})();