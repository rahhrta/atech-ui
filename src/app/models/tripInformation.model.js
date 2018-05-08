/**
 * Model to TripInformation
 * 
 * @author Raíssa Horta <raissahrta@hotmail.com>
 * @version 1.0.0 07/05/2018
 */

class TripInformation {

  constructor(model) {
    this.orderNumber = model && model.orderNumber ? model.orderNumber : undefined;
    this.origin = model && model.origin ? model.origin : undefined;    
    this.destination = model && model.destination ? model.destination : undefined;   
    this.date = model && model.date ? model.date : undefined;
    this.time = model && model.time ? model.date : undefined;
    this.vehicleType = model && model.vehicleType ? new VehicleType(model.vehicleType) : undefined;
    this.passengers = model && model.passengers ? model.passengers : [];
  }
}