
/**
 *
 * Controller to Home
 *
 * @author Raíssa Horta <raissahrta@hotmail.com>
 * @version 1.0.0 07/05/2018
 */
'use sctrict';
function HomeController($state, HomeService, Flash) {
  /* global _ */
  const vm = this;

  vm.saveTripInformations = (model) => {

    model.orderNumber = 'OD/' + Date.parse(new Date());

    vm.tripInformations.push(model);
    
    angular.element('#tripModalForm').modal("hide");

    Flash.create('success', "Solicitação de viagem criada com sucesso!", 5000);
    
  };

  const getVehicleTypes = () => {
    vm.vehicleTypes = HomeService.getVehicleTypes();
  };

  const init = () => {
    vm.tripInformations = [];
    getVehicleTypes();
  };

  init();

}
angular.module('app').controller('HomeController', HomeController);
HomeController.$inject = ['$state', 'HomeService', 'Flash'];
