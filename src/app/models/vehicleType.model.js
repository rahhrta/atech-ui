/**
 * Model to VehicleType
 * 
 * @author Raíssa Horta <raissahrta@hotmail.com>
 * @version 1.0.0 07/05/2018
 */
class VehicleType {

  constructor(model) {
    this.id = model.id ? model.id : undefined;
    this.name = model.name ? model.name : undefined;
  }

}