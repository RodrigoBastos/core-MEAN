/**
 * Created by Rodrigo Bastos on 15/03/16.
 */

//AngularJS
//= include ../components/angular/angular.js
//= include ../components/angular-ui-router/release/angular-ui-router.js
//= include ../components/angular-foundation/mm-foundation-tpls.js


//App Specific
//= include partials/dashboard.js

(function(){
    angular.module('app', [
        'mm.foundation',
        'ui.router',

        'app.dashboard'
    ])
})();