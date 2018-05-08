/**
 * Model to Passenger
 * 
 * @author Raíssa Horta <raissahrta@hotmail.com>
 * @version 1.0.0 07/05/2018
 */

class Passenger {

  constructor(model) {
    this.id = model ? model.id : undefined;
    this.name = model ? model.name : undefined;
    this.telephone = model ? model.telephone : undefined;

  }

}
