;(function() {
    'use strict';

    angular
        .module('admin')
        .factory('IngredientsFactory', IngredientsFactory);

    IngredientsFactory.$inject = ['$cacheFactory'];

    function IngredientsFactory($cacheFactory) {
        var cache = $cacheFactory.get('potluck');
        var ingredients = cache.get('ingredients');
        var factory = {
            ingredients: ingredients,
        };
        return factory;
    }


})();
