;(function () {
  angular.module('angularPlayground')
    .component('controllersComponent', {
      controller: ControllersController,
      templateUrl: '/app/components/controllers/controllers.html'
    })

  function ControllersController () {
    this.controllersStatus = 'Working';
    this.friends = ['Joey', 'Chandler', 'Monica', 'Phoebe', 'Ross', 'Rachel'];
    this.newFriend = '';
    this.addFriend = function(friend) {
      this.friends.push(friend);
      this.newFriend = ''
    }
  }
}())
