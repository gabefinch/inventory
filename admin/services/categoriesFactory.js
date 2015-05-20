;(function() {
    'use strict';

    angular
        .module('admin')
        .factory('CategoriesFactory', CategoriesFactory);

    CategoriesFactory.$inject = ['$cacheFactory'];

    function CategoriesFactory($cacheFactory) {
        var cache = $cacheFactory.get('potluck');
        var ingredients = cache.get('ingredients');
        var categories = cache.get('categories');
        var factory = {
            categories: categories,
        };
        return factory;
            }
})();