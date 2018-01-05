(function() {
    function HomeCtrl(Room, Message) {
      this.Rooms = Room.all;
      this.messages = null;


      this.selectRoom=function(room){
        this.currentRoom=room;
        this.messages=Message.getByRoomId(room.$id);
        console.log(room.$id);
        console.log(Message.getByRoomId(room.$id));
      }

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room','Message', HomeCtrl]);
})();
