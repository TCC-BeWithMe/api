angular.module("ifsp").controller("ContatosController", function ($scope) {
    $scope.total = 0;
    $scope.incrementa = function () {
        $scope.total++;
    };
    $scope.contatos = [
        { "_id": 1, "nome": "Gabriela Mota", "email": "gabriela.mota@ifsp.edu.br" },
        { "_id": 2, "nome": "Larissa Ellen", "email": "larissa.ellen@ifsp.edu.br" },
        { "_id": 3, "nome": "Fabio Teixeira", "email": "fabio.teixeira@ifsp.edu.br" }
    ];
    $scope.filtro = ''
});
