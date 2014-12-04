var should = require('should');
var is = require('../is');

var falseArr = {
    length: function () {
        return 42;
    }
};

describe('Boolean', function () {
    var type = Boolean;
    
    it('is ok for Boolean', function () {
        is(true).a(type).should.be.true;
        is(false).a(type).should.be.true;
        is(new Boolean('true')).a(type).should.be.true;
    });

    it('is not ok for every other type', function () {
        is(null).a(type).should.be.false;
        is(undefined).a(type).should.be.false;
        is(0).a(type).should.be.false;
        is(new Number(5)).a(type).should.be.false;
        is('test string').a(type).should.be.false;
        is('').a(type).should.be.false;
        is({}).a(type).should.be.false;
        is([1, 2, 3]).a(type).should.be.false;
        is(falseArr).a(type).should.be.false;
    });
});

describe('Null', function () {
    var type = null;
    
    it('is ok for null', function () {
        is(null).a(type).should.be.true;
    });

    it('is not ok for every other type', function () {
        is(true).a(type).should.be.false;
        is(false).a(type).should.be.false;
        is(new Boolean('true')).a(type).should.be.false;
        is(undefined).a(type).should.be.false;
        is(0).a(type).should.be.false;
        is(new Number(5)).a(type).should.be.false;
        is('test string').a(type).should.be.false;
        is('').a(type).should.be.false;
        is({}).a(type).should.be.false;
        is([1, 2, 3]).a(type).should.be.false;
        is(falseArr).a(type).should.be.false;
    });
});

describe('Undefined', function () {
    var type = undefined;
    
    it('is ok for undefined', function () {
        is(undefined).a(type).should.be.true;
    });

    it('is not ok for every other type', function () {
        is(true).a(type).should.be.false;
        is(false).a(type).should.be.false;
        is(new Boolean('true')).a(type).should.be.false;
        is(null).a(type).should.be.false;
        is(0).a(type).should.be.false;
        is(new Number(5)).a(type).should.be.false;
        is('test string').a(type).should.be.false;
        is('').a(type).should.be.false;
        is({}).a(type).should.be.false;
        is([1, 2, 3]).a(type).should.be.false;
        is(falseArr).a(type).should.be.false;
    });
});

describe('Number', function () {
    var type = Number;
    
    it('is ok for Number', function () {
        is(0).a(type).should.be.true;
        is(new Number(5)).a(type).should.be.true;
    });

    it('is not ok for every other type', function () {
        is(NaN).a(type).should.be.false;
        is(true).a(type).should.be.false;
        is(false).a(type).should.be.false;
        is(new Boolean('true')).a(type).should.be.false;
        is(null).a(type).should.be.false;
        is(undefined).a(type).should.be.false;
        is('test string').a(type).should.be.false;
        is('').a(type).should.be.false;
        is({}).a(type).should.be.false;
        is([1, 2, 3]).a(type).should.be.false;
        is(falseArr).a(type).should.be.false;
    });
});

describe('String', function () {
    var type = String;
    
    it('is ok for String', function () {
        is('test string').a(type).should.be.true;
        is('').a(type).should.be.true;
    });

    it('is not ok for every other type', function () {
        is(true).a(type).should.be.false;
        is(false).a(type).should.be.false;
        is(new Boolean('true')).a(type).should.be.false;
        is(null).a(type).should.be.false;
        is(undefined).a(type).should.be.false;
        is(0).a(type).should.be.false;
        is(new Number(5)).a(type).should.be.false;
        is({}).a(type).should.be.false;
        is([1, 2, 3]).a(type).should.be.false;
        is(falseArr).a(type).should.be.false;
    });
});

describe('Object', function () {
    var type = Object;
    
    it('is ok for Object', function () {
        is({}).a(type).should.be.true;
        is(falseArr).a(type).should.be.true;
    });

    it('is not ok for every other type', function () {
        is(true).a(type).should.be.false;
        is(false).a(type).should.be.false;
        is(new Boolean('true')).a(type).should.be.false;
        is(null).a(type).should.be.false;
        is(undefined).a(type).should.be.false;
        is(0).a(type).should.be.false;
        is(new Number(5)).a(type).should.be.false;
        is('test string').a(type).should.be.false;
        is('').a(type).should.be.false;
        is([1, 2, 3]).a(type).should.be.false;
    });
});

describe('Array', function () {
    var type = Array;
    
    it('is ok for Array', function () {
        is([1, 2, 3]).a(type).should.be.true;
        is([]).a(type).should.be.true;
    });

    it('is not ok for every other type', function () {
        is(true).a(type).should.be.false;
        is(false).a(type).should.be.false;
        is(new Boolean('true')).a(type).should.be.false;
        is(null).a(type).should.be.false;
        is(undefined).a(type).should.be.false;
        is(0).a(type).should.be.false;
        is(new Number(5)).a(type).should.be.false;
        is('test string').a(type).should.be.false;
        is('').a(type).should.be.false;
        is({}).a(type).should.be.false;
        is(falseArr).a(type).should.be.false;
    });
});
