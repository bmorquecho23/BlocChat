(function() {
    function ModalInstanceCtrl($uibModalInstance,Room) {
        var RoomObject = Room;
        this.ok = function () {
          RoomObject.add(this.name);
          $uibModalInstance.dismiss(this.name);
        };
        this.cancel =function(){
          $uibModalInstance.dismiss('cancel');
        }


    }

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ModalInstanceCtrl);
})();
