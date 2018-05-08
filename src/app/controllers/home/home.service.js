/**
 * Serivce to Home
 *
 * @author Raíssa Horta <raissahrta@hotmail.com>
 * @version 1.0.0 07/05/2018
 */
angular.module('app').factory('HomeService', HomeService);
HomeService.$inject = [];

function HomeService() {

  const getVehicleTypes = () => {

    const vehicleTypes = [
      {
        "id": 1,
        "name": "Micro-ônibus",
      }, {
        "id": 2,
        "name": "Ônibus",
      }, {
        "id": 3,
        "name": "Taxi",
      }];

    return vehicleTypes;

  };

  const HomeService = {
    getVehicleTypes  : getVehicleTypes
  };

  return HomeService;
}
