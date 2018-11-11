angular.module('myApp')
        .controller('loginCtrl', loginCtrl);

function loginCtrl($scope, Data){
    Data.get('users').then(function(data) {
		// body...
        $scope.users = data.data;
        $scope.validate = function(users) {
            for(var i=0; i < users.length; i++){
                if(($scope.username == users[i].username) && ($scope.password == users[i].password)){
                    //console.log("#/Home"+ users[i].firstname + "/" + users[i].middlename + "/" + users[i].lastname + "/" + users[i].position + "/" + users[i].department);
                    window.location.assign("#/Home/"+ users[i].firstname + "/" + users[i].middlename + "/" + users[i].lastname + "/" + users[i].position + "/" + users[i].department);
                    break;
                }
            }
        }
    });
    
}