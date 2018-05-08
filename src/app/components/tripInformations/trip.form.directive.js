/**
 * Modal to add tripInformations
 *
 * @author Raíssa Horta <raissahrta@hotmail.com>
 * @version 1.0.0 07/05/2018
 */
'use sctrict';
function tripFormModal() {
  const directive = {
    restrict: 'E',
    replace: true,
    scope: {
      callback: '=',
      vehicleTypes: '='
    },
    templateUrl: 'app/components/tripInformations/trip.form.html',
    controller: tripFormController,
    controllerAs: 'ctrl',
    bindToController: true
  }

  return directive;
}

angular.module('app').controller('tripFormController', tripFormController);
tripFormController.$inject = ['Flash', '$timeout'];
function tripFormController(Flash, $timeout) {

  const ctrl = this;

  ctrl.save = () => {
    ctrl.callback(ctrl.model);
  };

  const passengerIsAdded = () => {
    return _.find(ctrl.model.passengers, {name: ctrl.passenger.name, telephone: ctrl.passenger.telephone}) ? true : false;
  }

  ctrl.addPassenger = () => {

    if(!passengerIsAdded()) {
      ctrl.model.passengers.push(ctrl.passenger);
      ctrl.passenger = new Passenger();
      clearForm(ctrl.passengerForm);
    } else {
      Flash.create('danger', "Passageiro já está adicionado na viagem.", 5000);
    }
  };

  ctrl.openCalendar = () => {
    ctrl.formCalendars.startDate.opened = true;
  };

  const defineCalendarObject = () => {
    ctrl.formCalendars = {
      startDate: {
        showWeeks: false,
        opened: false
      }
    };
  };

  const clearForm = (form) => {
    form.$setUntouched();
    form.$setPristine();
  };

  $timeout(() => {
    angular.element(`.modal`).on("hide.bs.modal", function () {
      ctrl.passenger = new Passenger();
      ctrl.model = new TripInformation();
      clearForm(ctrl.form);
      clearForm(ctrl.passengerForm);
    });
  });
  
  function Init() {
    ctrl.model = new TripInformation();
    defineCalendarObject();
  }

  Init();
}

angular.module('app').directive('tripFormModal', tripFormModal);
tripFormModal.$inject = [];
