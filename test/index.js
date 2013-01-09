var helper = require('./helper'),
    assert = helper.assert,
    debug = helper.debug;

var Differ = require('../lib/'),
    differ = new Differ();

// -----------------------
//  Test
// --------------------

module.exports = {

  'Differ': {
    'new': {
      '()': function() {
        assert.instanceOf ( differ, require('../lib/') );

        Differ.reset();

        var differ2 = new Differ();

        assert.typeOf ( differ2.options, 'object' );
        assert.deepEqual ( differ2.options.custom, undefined );
      },

      '(options)': function() {
        Differ.reset();

        var differ2 = new Differ({custom: {foo: 'bar'}});

        assert.equal ( differ2.url, null );
        assert.typeOf ( differ2.options, 'object' );
        assert.deepEqual ( differ2.options.custom, {foo: 'bar'} );
      }
    },

    '.klass': function() {
      assert.property ( differ, 'klass' );
      assert.equal ( differ.klass, Differ );
    },

    '.name': function() {
      assert.property ( Differ, 'name' );
      assert.equal ( Differ.name, 'Differ' );
    },

    '.defaults': function() {
      assert.property ( Differ, 'defaults' );

      assert.typeOf ( Differ.defaults.options, 'object' );
    },

    '.options': function() {
      assert.property ( Differ, 'options' );
      assert.typeOf ( Differ.options, 'null' );
    },

    '.reset()': function() {
      assert.property ( Differ, 'reset' );
      assert.typeOf ( Differ.reset, 'function' );

      Differ.options = {foo: "bar"};
      assert.deepEqual ( Differ.options, {foo: "bar"} );
      assert.deepEqual ( Differ.defaults.options, {} );

      Differ.reset();

      assert.equal ( Differ.options, Differ.defaults.options );
    }
  },

  'Differ.prototype': {
    '.name': function() {
      assert.property ( differ, 'name' );
      assert.equal ( differ.name, 'Differ' );
    },

    '#options': function() {
      assert.property ( differ, 'options' );
      assert.typeOf ( differ.options, 'object' );
    },

    '#engine': function() {
      assert.property ( differ, 'engine' );
      assert.typeOf ( differ.engine, 'null' );
    },

    '#diff': function() {
      assert.property ( differ, 'diff' );
      assert.typeOf ( differ.diff, 'function' );
      assert.throws ( differ.diff, Error );
    }
  }

};
