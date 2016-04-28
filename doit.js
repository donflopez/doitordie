'use strict';

function DoIt ( cb ) {
  let toHell = null,
      _this = this,
      spirit = null,
      called = false;

  this.orDie = function ( dead ) {
    toHell = dead;
  };

  this.in = function ( time ) {
    spirit = setTimeout( function () {
      if ( called ) {return;}
      toHell();
    }, time );

    return _this;
  };

  function done() {
    if ( spirit ) {
      clearTimeout( spirit );
    }
    else {
      called = true;
    }
  }

  if ( typeof cb === 'function' ) {
    cb( done );
  }
}

module.exports = DoIt;
