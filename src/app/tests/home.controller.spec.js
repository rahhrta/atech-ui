/**
 * Test Controller to Home
 *
 * @author Raíssa Horta <raissahrta@hotmail.com>
 * @version 1.0.0 07/05/2018
 */
'use sctrict';
describe('Home Controller Test', function () {
  var control,
      state,
      homeService,
      flash;

  // Runs before each test
  beforeEach(function () {
    angular.mock.module('app');
  });

  // Runs before each test
  beforeEach(inject(function ($controller, HomeService, $state, Flash) {
    homeService                = HomeService;
    state                      = $state;
    flash                      = Flash;

    // mocks
    initMocks();

    control = $controller('HomeController');
  }));

  // Creates mocks
  function initMocks() {
  }

  it('Should define controller', function () {
    expect(control).toBeDefined();
  });


});
