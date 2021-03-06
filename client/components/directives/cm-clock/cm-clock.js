(function(){
  'use strict';

  angular.module('cmClockModule', [])
  .directive('cmClock', ['$interval', function($interval){
    var o = {};

    o.restrict    = 'A';
    o.templateUrl = '/components/directives/cm-clock/cm-clock.html';
    o.scope       = {frequency:'@'};
    o.link        = function(scope, element, attrs){
                      function updateTime(){
                        scope.date = (new Date()).getTime();
                      }

                      var id = $interval(updateTime, scope.frequency * 1);

                      element.on('$destroy', function(){
                        $interval.cancel(id);
                      });

                      updateTime();
                    };

    return o;
  }]);
})();

