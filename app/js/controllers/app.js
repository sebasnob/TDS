// Definir el modulo `productApp`
var productApp = angular.module('productApp', []);

// Definir el controlador para el modulo de productApp `ProductListController` 
productApp.controller('ProductListController', function ProductListController($scope) {
  $scope.products = [
    {
      name: 'Celular Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Celular Iphone 6s',
      snippet: 'The Next, Next Generation.'
    }, {
      name: 'Camiseta oficial Adidas NOB',
      snippet: 'Talle xs.'
    }
  ];
});