(function() {
  function BlocChatCookies($cookies, $uibModal){

    var currentUser = $cookies.get('blocChatCurrentUser');
    console.log(currentUser);
    if (!currentUser || currentUser ===''){
      console.log("no current user");
      $uibModal.open({
        animation: 'false',
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: '../templates/username.html',
        controller: 'UsernameCtrl',
        controllerAs: 'username',
        size: 'sm',
        backdrop:'static',
        keyboard: false,
      });
    }
}
angular
    .module('blocChat')
    .run(['$cookies','$uibModal', BlocChatCookies]);


})();
