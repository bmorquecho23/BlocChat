(function() {
    function HomeCtrl(Room, Message, $cookies) {
      this.Rooms = Room.all;
      this.messages = null;
      this.currentUser = $cookies.get('blocChatCurrentUser');


      this.selectRoom=function(room){
        this.currentRoom=room;
        this.messages=Message.getByRoomId(room.$id);
      }

      this.sendMessage = function(){
        this.newMessage.roomId = this.currentRoom.$id;
        this.newMessage.username = this.currentUser;
        this.newMessage.sentAt = Date.now();
        Message.send(this.newMessage);
      }

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room','Message','$cookies', HomeCtrl]);
})();
