//export const helper = () => {}// #QA1 i:21 orig: 
(function() {// #QA1 i:21 orig: 
  function t(n) {// #QA3 i:21 orig: 2
// #KB1 i:2 orig:     if (e[n]) {
// #KB1 i:2 orig:       return e[n].exports;
// #KB1 i:2 orig:     }
// #KB1 i:2 orig:     var o = (e[n] = { i: n, l: false, exports: {} });
// #KB1 i:2 orig:     r[n].call(o.exports, o, o.exports, t);
// #KB1 i:2 orig:     o.l = true;
// #KB1 i:2 orig:     return o.exports;
  }// #KB1 END i:70 orig: 
  var r = [];// #QA1 i:71 orig: 
  var n = window.webpackJsonp;// #QA1 i:71 orig: 
  window.webpackJsonp = function(e, u, c) {// #QA1 i:71 orig: 
    var f;// #QA1 i:71 orig: 
    var i;// #QA1 i:71 orig: 
    var p;// #QA1 i:71 orig: 
    var a = 0;// #QA1 i:71 orig: 
    for (var l = []; a < e.length; a++) {// #QA1 i:71 orig: 
      if (o[(i = e[a])]) {// #QA1 i:71 orig: 
        l.push(o[i][0]);// #QA1 i:71 orig: 
      }// #QA1 i:71 orig: 
      o[i] = 0;// #QA1 i:71 orig: 
    }// #QA1 i:71 orig: 
    for (f in u) {// #QA1 i:71 orig: 
      if (Object.prototype.hasOwnProperty.call(u, f)) {// #QA1 i:71 orig: 
        r[f] = u[f];// #QA1 i:71 orig: 
      }// #QA1 i:71 orig: 
    }// #QA1 i:71 orig: 
    for (n && n(e, u, c); l.length; ) {// #QA1 i:71 orig: 
      l.shift()();// #QA1 i:71 orig: 
    }// #QA1 i:71 orig: 
    if (c) {// #QA1 i:71 orig: 
      for (a = 0; a < c.length; a++) {// #QA1 i:71 orig: 
        p = t((t.s = c[a]));// #QA1 i:71 orig: 
      }// #QA1 i:71 orig: 
    }// #QA1 i:71 orig: 
    return p;// #QA1 i:71 orig: 
  };// #QA1 i:71 orig: 
  var e = {};// #QA1 i:71 orig: 
  var o = { 3: 0 };// #QA1 i:71 orig: 
  t.m = r;// #QA1 i:71 orig: 
  t.c = e;// #QA1 i:71 orig: 
  t.d = function(r, n, e) {// #QA1 i:71 orig: 
    if (!t.o(r, n)) {// #QA1 i:71 orig: 
      Object.defineProperty(r, n, {// #QA1 i:71 orig: 
        configurable: false,// #QA1 i:71 orig: 
        enumerable: true,// #QA1 i:71 orig: 
        get: e,// #QA1 i:71 orig: 
      });// #QA1 i:71 orig: 
    }// #QA1 i:71 orig: 
  };// #QA1 i:71 orig: 
// #DB5 START i:2 orig:   t.n = function(r) {//#RF [object Object]
// #DB i:2 orig:     var n =
// #DB i:2 orig:       r && r.__esModule
// #DB i:2 orig:         ? function() {
// #DB i:2 orig:             return r.default;
// #DB i:2 orig:           }
// #DB i:2 orig:         : function() {
// #DB i:2 orig:             return r;
// #DB i:2 orig:           };
// #DB i:2 orig:     t.d(n, 'a', n);
// #DB i:2 orig:     return n;
// #DB END i: orig:   };
  t.o = function(r, n) {// #QA1 i:127 orig: 
    return Object.prototype.hasOwnProperty.call(r, n);// #QA1 i:127 orig: 
  };// #QA1 i:127 orig: 
  t.p = '';// #QA1 i:127 orig: 
// #DB5 START i:2 orig:   t.oe = function(r) {//#RF [object Object]
// #DB i:2 orig:     console.error(r);
// #DB i:2 orig:     throw r;
// #DB END i: orig:   };
})();// #QA1 i:132 orig: 
webpackJsonp(// #QA1 i:132 orig: 
  [1],// #QA1 i:132 orig: 
  {// #QA1 i:132 orig: 
// #KFB02 START i:4 orig:     '+CnV': function(e, t, n) {
// #DB i:4 orig:       'use strict';
// #DB i:4 orig:       n.d(t, 'a', function() {
// #DB i:4 orig:         return r;
// #DB i:4 orig:       });
// #DB i:4 orig:       var r = (function(e) {
// #DB i:4 orig:         var t;
// #DB i:4 orig:         var r = n('AMGY').a.Symbol;
// #DB i:4 orig:         if (typeof r == 'function') {
// #DB i:4 orig:           if (r.observable) {
// #DB i:4 orig:             t = r.observable;
// #DB i:4 orig:           } else {
// #DB i:4 orig:             t = r('observable');
// #DB i:4 orig:             r.observable = t;
// #DB i:4 orig:           }
// #DB i:4 orig:         } else {
// #DB i:4 orig:           t = '@@observable';
// #DB i:4 orig:         }
// #DB i:4 orig:         return t;
// #DB i:4 orig:       })();
// #DB END i: orig:     },
// #KFB02 START i:4 orig:     '/iUD': function(e, t, n) {
// #DB i:4 orig:       'use strict';
// #DB i:4 orig:       t.a = function(e) {
// #DB i:4 orig:         return typeof e == 'function';
// #DB i:4 orig:       };
// #DB END i: orig:     },
    '/nXB': function(e, t, n) {// #QA1 i:198 orig: 
      'use strict';// #QA1 i:198 orig: 
      function u(e) {// #QA3 i:198 orig: 6
// #KB1 i:6 orig:         return e && typeof e.schedule == 'function';
      }// #KB1 END i:199 orig: 
      function m(e) {// #KFB3 START i:201 orig: 6//#RF [object Object]
// #KB1 i:6 orig:         return e;
      }// #KB1 END i:202 orig: 
      var r = n('YaPU');// #QA1 i:203 orig: 
      var o = n('TToO');// #QA1 i:203 orig: 
// #DB START YYY START i:6 orig:       var i = (function() {
// #DB i:6 orig:         function t(t, n) {//#RF [object Object]
// #DB i:6 orig:           e.call(this);
// #DB i:6 orig:           this.value = t;
// #DB i:6 orig:           this.scheduler = n;
// #DB i:6 orig:           this._isScalar = true;
// #DB i:6 orig:           if (n) {
// #DB i:6 orig:             this._isScalar = false;
// #DB i:6 orig:           }
// #DB i:6 orig:         }
// #DB i:6 orig:         var e = r.a;
// #DB i:6 orig:         Object(o.b)(t, e);
// #DB i:6 orig:         t.create = function(e, n) {//#RF [object Object]
// #DB i:6 orig:           return new t(e, n);
// #DB i:6 orig:         };
// #DB i:6 orig:         t.dispatch = function(e) {//#RF [object Object]
// #DB i:6 orig:           var t = e.value;
// #DB i:6 orig:           var n = e.subscriber;
// #DB i:6 orig:           if (e.done) {
// #DB i:6 orig:             n.complete();
// #DB i:6 orig:           } else {
// #DB i:6 orig:             n.next(t);
// #DB i:6 orig:             if (!n.closed) {
// #DB i:6 orig:               e.done = true;
// #DB i:6 orig:               this.schedule(e);
// #DB i:6 orig:             }
// #DB i:6 orig:           }
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype._subscribe = function(e) {//#RF [object Object]
// #DB i:6 orig:           var n = this.value;
// #DB i:6 orig:           var r = this.scheduler;
// #DB i:6 orig:           if (r) {
// #DB i:6 orig:             return r.schedule(t.dispatch, 0, {
// #DB i:6 orig:               done: false,
// #DB i:6 orig:               value: n,
// #DB i:6 orig:               subscriber: e,
// #DB i:6 orig:             });
// #DB i:6 orig:           }
// #DB i:6 orig:           e.next(n);
// #DB i:6 orig:           if (!e.closed) {
// #DB i:6 orig:             e.complete();
// #DB i:6 orig:           }
// #DB i:6 orig:         };
// #DB i:6 orig:         return t;
// #DB END i: orig:       })();
// #DB START YYY START i:6 orig:       var s = (function() {
// #DB i:6 orig:         function t(t) {//#RF [object Object]
// #DB i:6 orig:           e.call(this);
// #DB i:6 orig:           this.scheduler = t;
// #DB i:6 orig:         }
// #DB i:6 orig:         var e = r.a;
// #DB i:6 orig:         Object(o.b)(t, e);
// #DB i:6 orig:         t.create = function(e) {//#RF [object Object]
// #DB i:6 orig:           return new t(e);
// #DB i:6 orig:         };
// #DB i:6 orig:         t.dispatch = function(e) {//#RF [object Object]
// #DB i:6 orig:           e.subscriber.complete();
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype._subscribe = function(e) {//#RF [object Object]
// #DB i:6 orig:           var n = this.scheduler;
// #DB i:6 orig:           if (n) {
// #DB i:6 orig:             return n.schedule(t.dispatch, 0, { subscriber: e });
// #DB i:6 orig:           }
// #DB i:6 orig:           e.complete();
// #DB i:6 orig:         };
// #DB i:6 orig:         return t;
// #DB END i: orig:       })();
      var a = (function() {// #QB i:364 orig: 
        function t(t, n) {// #QA3 i:364 orig: 8
// #KB1 i:8 orig:           e.call(this);
// #KB1 i:8 orig:           this.array = t;
// #KB1 i:8 orig:           this.scheduler = n;
// #KB1 i:8 orig:           if (!n && t.length === 1) {
// #KB1 i:8 orig:             this._isScalar = true;
// #KB1 i:8 orig:             this.value = t[0];
// #KB1 i:8 orig:           }
        }// #KB1 END i:377 orig: 
        var e = r.a;// #QB i:380 orig: 
        Object(o.b)(t, e);// #QA1 i:380 orig: 
// #DB5 START i:8 orig:         t.create = function(e, n) {//#RF [object Object]
// #DB i:8 orig:           return new t(e, n);
// #DB END i: orig:         };
// #DB5 START i:8 orig:         t.of = function() {//#RF [object Object]
// #DB i:8 orig:           var e = [];
// #DB i:8 orig:           for (var n = 0; n < arguments.length; n++) {
// #DB i:8 orig:             e[n - 0] = arguments[n];
// #DB i:8 orig:           }
// #DB i:8 orig:           var r = e[e.length - 1];
// #DB i:8 orig:           if (u(r)) {
// #DB i:8 orig:             e.pop();
// #DB i:8 orig:           } else {
// #DB i:8 orig:             r = null;
// #DB i:8 orig:           }
// #DB i:8 orig:           var o = e.length;
// #DB i:8 orig:           if (o > 1) {
// #DB i:8 orig:             return new t(e, r);
// #DB i:8 orig:           } else if (o === 1) {
// #DB i:8 orig:             return new i(e[0], r);
// #DB i:8 orig:           } else {
// #DB i:8 orig:             return new s(r);
// #DB i:8 orig:           }
// #DB END i: orig:         };
// #DB5 START i:8 orig:         t.dispatch = function(e) {//#RF [object Object]
// #DB i:8 orig:           var t = e.array;
// #DB i:8 orig:           var n = e.index;
// #DB i:8 orig:           var r = e.subscriber;
// #DB i:8 orig:           if (n >= e.count) {
// #DB i:8 orig:             r.complete();
// #DB i:8 orig:           } else {
// #DB i:8 orig:             r.next(t[n]);
// #DB i:8 orig:             if (!r.closed) {
// #DB i:8 orig:               e.index = n + 1;
// #DB i:8 orig:               this.schedule(e);
// #DB i:8 orig:             }
// #DB i:8 orig:           }
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype._subscribe = function(e) {//#RF [object Object]
// #DB i:8 orig:           var n = this.array;
// #DB i:8 orig:           var r = n.length;
// #DB i:8 orig:           var o = this.scheduler;
// #DB i:8 orig:           if (o) {
// #DB i:8 orig:             return o.schedule(t.dispatch, 0, {
// #DB i:8 orig:               array: n,
// #DB i:8 orig:               index: 0,
// #DB i:8 orig:               count: r,
// #DB i:8 orig:               subscriber: e,
// #DB i:8 orig:             });
// #DB i:8 orig:           }
// #DB i:8 orig:           for (var i = 0; i < r && !e.closed; i++) {
// #DB i:8 orig:             e.next(n[i]);
// #DB i:8 orig:           }
// #DB i:8 orig:           e.complete();
// #DB END i: orig:         };
        return t;// #QA1 i:483 orig: 
      })();// #QA1 i:483 orig: 
// #DSL i: orig:       var c = n('AMGY');
// #DSL i: orig:       var l = n('dgOU');
// #DB START YYY START i:6 orig:       var d = (function() {
// #DB i:6 orig:         var e = c.a;
// #DB i:6 orig:         var t = e.Symbol;
// #DB i:6 orig:         if (typeof t == 'function') {
// #DB i:6 orig:           if (!t.iterator) {
// #DB i:6 orig:             t.iterator = t('iterator polyfill');
// #DB i:6 orig:           }
// #DB i:6 orig:           return t.iterator;
// #DB i:6 orig:         }
// #DB i:6 orig:         var n = e.Set;
// #DB i:6 orig:         if (n && typeof new n()['@@iterator'] == 'function') {
// #DB i:6 orig:           return '@@iterator';
// #DB i:6 orig:         }
// #DB i:6 orig:         var r = e.Map;
// #DB i:6 orig:         if (r) {
// #DB i:6 orig:           var o = Object.getOwnPropertyNames(r.prototype);
// #DB i:6 orig:           for (var i = 0; i < o.length; ++i) {
// #DB i:6 orig:             var s = o[i];
// #DB i:6 orig:             if (
// #DB i:6 orig:               s !== 'entries' &&
// #DB i:6 orig:               s !== 'size' &&
// #DB i:6 orig:               r.prototype[s] === r.prototype.entries
// #DB i:6 orig:             ) {
// #DB i:6 orig:               return s;
// #DB i:6 orig:             }
// #DB i:6 orig:           }
// #DB i:6 orig:         }
// #DB i:6 orig:         return '@@iterator';
// #DB END i: orig:       })();
// #DSL i: orig:       var f = n('OVmG');
// #DB START YYY START i:6 orig:       var p = (function() {
// #DB i:6 orig:         function t(t, n, r) {//#RF [object Object]
// #DB i:6 orig:           e.call(this);
// #DB i:6 orig:           this.parent = t;
// #DB i:6 orig:           this.outerValue = n;
// #DB i:6 orig:           this.outerIndex = r;
// #DB i:6 orig:           this.index = 0;
// #DB i:6 orig:         }
// #DB i:6 orig:         var e = f.a;
// #DB i:6 orig:         Object(o.b)(t, e);
// #DB i:6 orig:         t.prototype._next = function(e) {//#RF [object Object]
// #DB i:6 orig:           this.parent.notifyNext(
// #DB i:6 orig:             this.outerValue,
// #DB i:6 orig:             e,
// #DB i:6 orig:             this.outerIndex,
// #DB i:6 orig:             this.index++,
// #DB i:6 orig:             this
// #DB i:6 orig:           );
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype._error = function(e) {//#RF [object Object]
// #DB i:6 orig:           this.parent.notifyError(e, this);
// #DB i:6 orig:           this.unsubscribe();
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype._complete = function() {//#RF [object Object]
// #DB i:6 orig:           this.parent.notifyComplete(this);
// #DB i:6 orig:           this.unsubscribe();
// #DB i:6 orig:         };
// #DB i:6 orig:         return t;
// #DB END i: orig:       })();
// #DSL i: orig:       var h = n('+CnV');
// #DB START YYY START i:6 orig:       var v = (function() {
// #DB i:6 orig:         function t() {//#RF [object Object]
// #DB i:6 orig:           e.apply(this, arguments);
// #DB i:6 orig:         }
// #DB i:6 orig:         var e = f.a;
// #DB i:6 orig:         Object(o.b)(t, e);
// #DB i:6 orig:         t.prototype.notifyNext = function(e, t, n, r, o) {//#RF [object Object]
// #DB i:6 orig:           this.destination.next(t);
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype.notifyError = function(e, t) {//#RF [object Object]
// #DB i:6 orig:           this.destination.error(e);
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype.notifyComplete = function(e) {//#RF [object Object]
// #DB i:6 orig:           this.destination.complete();
// #DB i:6 orig:         };
// #DB i:6 orig:         return t;
// #DB END i: orig:       })();
      var y =function(n){};// #CB2 START i:702 orig: 6
// #CB i:6 orig:         function e(e, t, n) {
// #CB i:6 orig:           if (n === void 0) {
// #CB i:6 orig:             n = Number.POSITIVE_INFINITY;
// #CB i:6 orig:           }
// #CB i:6 orig:           this.project = e;
// #CB i:6 orig:           this.resultSelector = t;
// #CB i:6 orig:           this.concurrent = n;
// #CB i:6 orig:         }
// #CB i:6 orig:         e.prototype.call = function(e, t) {//#RF [object Object]
// #CB i:6 orig:           return t.subscribe(
// #CB i:6 orig:             new g(e, this.project, this.resultSelector, this.concurrent)
// #CB i:6 orig:           );
// #CB i:6 orig:         };
// #CB i:6 orig:         return e;
// #CB END i: orig:       })();
// #DB START YYY START i:6 orig:       var g = (function() {
// #DB i:6 orig:         function t(t, n, r, o) {//#RF [object Object]
// #DB i:6 orig:           if (o === void 0) {
// #DB i:6 orig:             o = Number.POSITIVE_INFINITY;
// #DB i:6 orig:           }
// #DB i:6 orig:           e.call(this, t);
// #DB i:6 orig:           this.project = n;
// #DB i:6 orig:           this.resultSelector = r;
// #DB i:6 orig:           this.concurrent = o;
// #DB i:6 orig:           this.hasCompleted = false;
// #DB i:6 orig:           this.buffer = [];
// #DB i:6 orig:           this.active = 0;
// #DB i:6 orig:           this.index = 0;
// #DB i:6 orig:         }
// #DB i:6 orig:         var e = v;
// #DB i:6 orig:         Object(o.b)(t, e);
// #DB i:6 orig:         t.prototype._next = function(e) {//#RF [object Object]
// #DB i:6 orig:           if (this.active < this.concurrent) {
// #DB i:6 orig:             this._tryNext(e);
// #DB i:6 orig:           } else {
// #DB i:6 orig:             this.buffer.push(e);
// #DB i:6 orig:           }
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype._tryNext = function(e) {//#RF [object Object]
// #DB i:6 orig:           var t;
// #DB i:6 orig:           var n = this.index++;
// #DB i:6 orig:           try {
// #DB i:6 orig:             t = this.project(e, n);
// #DB i:6 orig:           } catch (e) {
// #DB i:6 orig:             this.destination.error(e);
// #DB i:6 orig:             return;
// #DB i:6 orig:           }
// #DB i:6 orig:           this.active++;
// #DB i:6 orig:           this._innerSub(t, e, n);
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype._innerSub = function(e, t, n) {//#RF [object Object]
// #DB i:6 orig:           this.add(
// #DB i:6 orig:             (function(e, t, n, o) {
// #DB i:6 orig:               var i;
// #DB i:6 orig:               var s = new p(e, n, o);
// #DB i:6 orig:               if (s.closed) {
// #DB i:6 orig:                 return null;
// #DB i:6 orig:               }
// #DB i:6 orig:               if (t instanceof r.a) {
// #DB i:6 orig:                 if (t._isScalar) {
// #DB i:6 orig:                   s.next(t.value);
// #DB i:6 orig:                   s.complete();
// #DB i:6 orig:                   return null;
// #DB i:6 orig:                 } else {
// #DB i:6 orig:                   s.syncErrorThrowable = true;
// #DB i:6 orig:                   return t.subscribe(s);
// #DB i:6 orig:                 }
// #DB i:6 orig:               }
// #DB i:6 orig:               if ((i = t) && typeof i.length == 'number') {
// #DB i:6 orig:                 var u = 0;
// #DB i:6 orig:                 for (var a = t.length; u < a && !s.closed; u++) {
// #DB i:6 orig:                   s.next(t[u]);
// #DB i:6 orig:                 }
// #DB i:6 orig:                 if (!s.closed) {
// #DB i:6 orig:                   s.complete();
// #DB i:6 orig:                 }
// #DB i:6 orig:               } else {
// #DB i:6 orig:                 if (
// #DB i:6 orig:                   t &&
// #DB i:6 orig:                   typeof t.subscribe != 'function' &&
// #DB i:6 orig:                   typeof t.then == 'function'
// #DB i:6 orig:                 ) {
// #DB i:6 orig:                   t
// #DB i:6 orig:                     .then(
// #DB i:6 orig:                       function(e) {
// #DB i:6 orig:                         if (!s.closed) {
// #DB i:6 orig:                           s.next(e);
// #DB i:6 orig:                           s.complete();
// #DB i:6 orig:                         }
// #DB i:6 orig:                       },
// #DB i:6 orig:                       function(e) {
// #DB i:6 orig:                         return s.error(e);
// #DB i:6 orig:                       }
// #DB i:6 orig:                     )
// #DB i:6 orig:                     .then(null, function(e) {
// #DB i:6 orig:                       c.a.setTimeout(function() {
// #DB i:6 orig:                         throw e;
// #DB i:6 orig:                       });
// #DB i:6 orig:                     });
// #DB i:6 orig:                   return s;
// #DB i:6 orig:                 }
// #DB i:6 orig:                 if (t && typeof t[d] == 'function') {
// #DB i:6 orig:                   for (var f = t[d](); ; ) {
// #DB i:6 orig:                     var v = f.next();
// #DB i:6 orig:                     if (v.done) {
// #DB i:6 orig:                       s.complete();
// #DB i:6 orig:                       break;
// #DB i:6 orig:                     }
// #DB i:6 orig:                     s.next(v.value);
// #DB i:6 orig:                     if (s.closed) {
// #DB i:6 orig:                       break;
// #DB i:6 orig:                     }
// #DB i:6 orig:                   }
// #DB i:6 orig:                 } else if (t && typeof t[h.a] == 'function') {
// #DB i:6 orig:                   var y = t[h.a]();
// #DB i:6 orig:                   if (typeof y.subscribe == 'function') {
// #DB i:6 orig:                     return y.subscribe(new p(e, n, o));
// #DB i:6 orig:                   }
// #DB i:6 orig:                   s.error(
// #DB i:6 orig:                     new TypeError(
// #DB i:6 orig:                       'Provided object does not correctly implement Symbol.observable'
// #DB i:6 orig:                     )
// #DB i:6 orig:                   );
// #DB i:6 orig:                 } else {
// #DB i:6 orig:                   var g = Object(l.a)(t) ? 'an invalid object' : "'" + t + "'";
// #DB i:6 orig:                   s.error(
// #DB i:6 orig:                     new TypeError(
// #DB i:6 orig:                       'You provided ' +
// #DB i:6 orig:                         g +
// #DB i:6 orig:                         ' where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.'
// #DB i:6 orig:                     )
// #DB i:6 orig:                   );
// #DB i:6 orig:                 }
// #DB i:6 orig:               }
// #DB i:6 orig:               return null;
// #DB i:6 orig:             })(this, e, t, n)
// #DB i:6 orig:           );
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype._complete = function() {//#RF [object Object]
// #DB i:6 orig:           this.hasCompleted = true;
// #DB i:6 orig:           if (this.active === 0 && this.buffer.length === 0) {
// #DB i:6 orig:             this.destination.complete();
// #DB i:6 orig:           }
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype.notifyNext = function(e, t, n, r, o) {//#RF [object Object]
// #DB i:6 orig:           if (this.resultSelector) {
// #DB i:6 orig:             this._notifyResultSelector(e, t, n, r);
// #DB i:6 orig:           } else {
// #DB i:6 orig:             this.destination.next(t);
// #DB i:6 orig:           }
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype._notifyResultSelector = function(e, t, n, r) {//#RF [object Object]
// #DB i:6 orig:           var o;
// #DB i:6 orig:           try {
// #DB i:6 orig:             o = this.resultSelector(e, t, n, r);
// #DB i:6 orig:           } catch (e) {
// #DB i:6 orig:             this.destination.error(e);
// #DB i:6 orig:             return;
// #DB i:6 orig:           }
// #DB i:6 orig:           this.destination.next(o);
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype.notifyComplete = function(e) {//#RF [object Object]
// #DB i:6 orig:           var t = this.buffer;
// #DB i:6 orig:           this.remove(e);
// #DB i:6 orig:           this.active--;
// #DB i:6 orig:           if (t.length > 0) {
// #DB i:6 orig:             this._next(t.shift());
// #DB i:6 orig:           } else if (this.active === 0 && this.hasCompleted) {
// #DB i:6 orig:             this.destination.complete();
// #DB i:6 orig:           }
// #DB i:6 orig:         };
// #DB i:6 orig:         return t;
// #DB END i: orig:       })();
      t.a = function() {// #QA1 i:1139 orig: 
        var e = [];// #QA1 i:1139 orig: 
        for (var t = 0; t < arguments.length; t++) {// #QA1 i:1139 orig: 
          e[t - 0] = arguments[t];// #QA1 i:1139 orig: 
        }// #QA1 i:1139 orig: 
        var n = Number.POSITIVE_INFINITY;// #QA1 i:1139 orig: 
        var o = null;// #QA1 i:1139 orig: 
        var i = e[e.length - 1];// #QA1 i:1139 orig: 
        if (u(i)) {// #QA1 i:1139 orig: 
          o = e.pop();// #QA1 i:1139 orig: 
          if (e.length > 1 && typeof e[e.length - 1] == 'number') {// #QA1 i:1139 orig: 
            n = e.pop();// #QA1 i:1139 orig: 
          }// #QA1 i:1139 orig: 
        } else if (typeof i == 'number') {// #QA1 i:1139 orig: 
          n = e.pop();// #QA1 i:1139 orig: 
        }// #QA1 i:1139 orig: 
        if (o === null && e.length === 1 && e[0] instanceof r.a) {// #QA1 i:1139 orig: 
          return e[0];// #QA1 i:1139 orig: 
        } else {// #QA1 i:1139 orig: 
          return (function() {// #QA1 i:1139 orig: 
            var e = n;// #QA1 i:1139 orig: 
            if (e === void 0) {// #QA1 i:1139 orig: 
              e = Number.POSITIVE_INFINITY;// #QA1 i:1139 orig: 
            }// #QA1 i:1139 orig: 
            return (function(e, t, n) {// #QA1 i:1139 orig: 
              if (n === void 0) {// #QA1 i:1139 orig: 
                n = Number.POSITIVE_INFINITY;// #QA1 i:1139 orig: 
              }// #QA1 i:1139 orig: 
              return function(r) {// #QA1 i:1139 orig: 
                if (typeof t == 'number') {// #QA1 i:1139 orig: 
                  n = t;// #QA1 i:1139 orig: 
                  t = null;// #QA1 i:1139 orig: 
                }// #QA1 i:1139 orig: 
                return r.lift(new y(e, t, n));// #QA1 i:1139 orig: 
              };// #QA1 i:1139 orig: 
            })(m, null, e);// #QA1 i:1139 orig: 
          })()(new a(e, o));// #QA1 i:1139 orig: 
        }// #QA1 i:1139 orig: 
      };// #QA1 i:1139 orig: 
    },// #QA1 i:1139 orig: 
    0: function(e, t, n) {// #QA1 i:1139 orig: 
      e.exports = n('x35b');// #QA1 i:1139 orig: 
    },// #QA1 i:1139 orig: 
    AMGY: function(e, t, n) {// #QA1 i:1139 orig: 
      'use strict';// #QA1 i:1139 orig: 
      (function(e) {// #QA1 i:1139 orig: 
        n.d(t, 'a', function() {// #QA1 i:1139 orig: 
          return i;// #QA1 i:1139 orig: 
        });// #QA1 i:1139 orig: 
        var r = typeof window != 'undefined' && window;// #QA1 i:1139 orig: 
        var o =// #QA1 i:1139 orig: 
          typeof self != 'undefined' &&// #QA1 i:1139 orig: 
          typeof WorkerGlobalScope != 'undefined' &&// #QA1 i:1139 orig: 
          self instanceof WorkerGlobalScope &&// #QA1 i:1139 orig: 
          self;// #QA1 i:1139 orig: 
        var i = r || (typeof e != 'undefined' && e) || o;// #QA1 i:1139 orig: 
      }.call(t, n('DuR2')));// #QA1 i:1139 orig: 
    },// #QA1 i:1139 orig: 
    DuR2: function(e, t) {// #QA1 i:1139 orig: 
      var n;// #QA1 i:1139 orig: 
      n = (function() {// #QA1 i:1139 orig: 
        return this;// #QA1 i:1139 orig: 
      })();// #QA1 i:1139 orig: 
      try {// #QA1 i:1139 orig: 
        n = n || Function('return this')() || eval('this');// #QA1 i:1139 orig: 
      } catch (e) {// #QA1 i:1139 orig: 
        if (typeof window == 'object') {// #QA1 i:1139 orig: 
          n = window;// #QA1 i:1139 orig: 
        }// #QA1 i:1139 orig: 
      }// #QA1 i:1139 orig: 
      e.exports = n;// #QA1 i:1139 orig: 
    },// #QA1 i:1139 orig: 
// #DB7 START i:4 orig:     Jnfr: function(e, t) {//#RF [object Object]
// #DB i:4 orig:       function n(e) {
// #DB i:4 orig:         return Promise.resolve().then(function() {
// #DB i:4 orig:           throw new Error("Cannot find module '" + e + "'.");
// #DB i:4 orig:         });
// #DB i:4 orig:       }
// #DB i:4 orig:       n.keys = function() {
// #DB i:4 orig:         return [];
// #DB i:4 orig:       };
// #DB i:4 orig:       n.resolve = n;
// #DB i:4 orig:       e.exports = n;
// #DB i:4 orig:       n.id = 'Jnfr';
// #DB END i: orig:     },
    OVmG: function(e, t, n) {// #QA1 i:1190 orig: 
      'use strict';// #QA1 i:1190 orig: 
// #DB6 START i:6 orig:       function l(e) {//#RF [object Object]
// #DB i:6 orig:         return e instanceof a || ('syncErrorThrowable' in e && e[u.a]);
// #DB END i: orig:       }
      n.d(t, 'a', function() {// #QA1 i:1193 orig: 
        return a;// #QA1 i:1193 orig: 
      });// #QA1 i:1193 orig: 
      var r = n('TToO');// #QA1 i:1193 orig: 
// #DSL i: orig:       var o = n('/iUD');
      var i = n('VwZZ');// #QA1 i:1193 orig: 
      var s = n('t7NR');// #QA1 i:1193 orig: 
// #DSL i: orig:       var u = n('tLDX');
// #DELFUN START i:6 orig:       var a = (function() {
// #DB i:6 orig:         function t(t, n, r) {
// #DB i:6 orig:           switch ((e.call(this),
// #DB i:6 orig:           (this.syncErrorValue = null),
// #DB i:6 orig:           (this.syncErrorThrown = false),
// #DB i:6 orig:           (this.syncErrorThrowable = false),
// #DB i:6 orig:           (this.isStopped = false),
// #DB i:6 orig:           arguments.length)) {
// #DB i:6 orig:             case 0:
// #DB i:6 orig:               this.destination = s.a;
// #DB i:6 orig:               break;
// #DB i:6 orig:             case 1:
// #DB i:6 orig:               if (!t) {
// #DB i:6 orig:                 this.destination = s.a;
// #DB i:6 orig:                 break;
// #DB i:6 orig:               }
// #DB i:6 orig:               if (typeof t == 'object') {
// #DB i:6 orig:                 if (l(t)) {
// #DB i:6 orig:                   var o = t[u.a]();
// #DB i:6 orig:                   this.syncErrorThrowable = o.syncErrorThrowable;
// #DB i:6 orig:                   this.destination = o;
// #DB i:6 orig:                   o.add(this);
// #DB i:6 orig:                 } else {
// #DB i:6 orig:                   this.syncErrorThrowable = true;
// #DB i:6 orig:                   this.destination = new c(this, t);
// #DB i:6 orig:                 }
// #DB i:6 orig:                 break;
// #DB i:6 orig:               }
// #DB i:6 orig:             default:
// #DB i:6 orig:               this.syncErrorThrowable = true;
// #DB i:6 orig:               this.destination = new c(this, t, n, r);
// #DB i:6 orig:           }
// #DB i:6 orig:         }
// #DB i:6 orig:         var e = i.a;
// #DB i:6 orig:         Object(r.b)(t, e);
// #DB i:6 orig:         t.prototype[u.a] = function() {//#RF [object Object]
// #DB i:6 orig:           return this;
// #DB i:6 orig:         };
// #DB i:6 orig:         t.create = function(e, n, r) {//#RF [object Object]
// #DB i:6 orig:           var o = new t(e, n, r);
// #DB i:6 orig:           o.syncErrorThrowable = false;
// #DB i:6 orig:           return o;
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype.next = function(e) {
// #DB i:6 orig:           if (!this.isStopped) {
// #DB i:6 orig:             this._next(e);
// #DB i:6 orig:           }
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype.error = function(e) {//#RF [object Object]
// #DB i:6 orig:           if (!this.isStopped) {
// #DB i:6 orig:             this.isStopped = true;
// #DB i:6 orig:             this._error(e);
// #DB i:6 orig:           }
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype.complete = function() {//#RF [object Object]
// #DB i:6 orig:           if (!this.isStopped) {
// #DB i:6 orig:             this.isStopped = true;
// #DB i:6 orig:             this._complete();
// #DB i:6 orig:           }
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype.unsubscribe = function() {//#RF [object Object]
// #DB i:6 orig:           if (!this.closed) {
// #DB i:6 orig:             this.isStopped = true;
// #DB i:6 orig:             e.prototype.unsubscribe.call(this);
// #DB i:6 orig:           }
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype._next = function(e) {
// #DB i:6 orig:           this.destination.next(e);
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype._error = function(e) {//#RF [object Object]
// #DB i:6 orig:           this.destination.error(e);
// #DB i:6 orig:           this.unsubscribe();
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype._complete = function() {//#RF [object Object]
// #DB i:6 orig:           this.destination.complete();
// #DB i:6 orig:           this.unsubscribe();
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype._unsubscribeAndRecycle = function() {//#RF [object Object]
// #DB i:6 orig:           var e = this._parent;
// #DB i:6 orig:           var t = this._parents;
// #DB i:6 orig:           this._parent = null;
// #DB i:6 orig:           this._parents = null;
// #DB i:6 orig:           this.unsubscribe();
// #DB i:6 orig:           this.closed = false;
// #DB i:6 orig:           this.isStopped = false;
// #DB i:6 orig:           this._parent = e;
// #DB i:6 orig:           this._parents = t;
// #DB i:6 orig:           return this;
// #DB i:6 orig:         };
// #DB i:6 orig:         return t;
// #DB END i: orig:       })();
// #DB START YYY START i:6 orig:       var c = (function() {
// #DB i:6 orig:         function t(t, n, r, i) {
// #DB i:6 orig:           var u;
// #DB i:6 orig:           e.call(this);
// #DB i:6 orig:           this._parentSubscriber = t;
// #DB i:6 orig:           var a = this;
// #DB i:6 orig:           if (Object(o.a)(n)) {
// #DB i:6 orig:             u = n;
// #DB i:6 orig:           } else if (n) {
// #DB i:6 orig:             u = n.next;
// #DB i:6 orig:             r = n.error;
// #DB i:6 orig:             i = n.complete;
// #DB i:6 orig:             if (n !== s.a) {
// #DB i:6 orig:               a = Object.create(n);
// #DB i:6 orig:               if (Object(o.a)(a.unsubscribe)) {
// #DB i:6 orig:                 this.add(a.unsubscribe.bind(a));
// #DB i:6 orig:               }
// #DB i:6 orig:               a.unsubscribe = this.unsubscribe.bind(this);
// #DB i:6 orig:             }
// #DB i:6 orig:           }
// #DB i:6 orig:           this._context = a;
// #DB i:6 orig:           this._next = u;
// #DB i:6 orig:           this._error = r;
// #DB i:6 orig:           this._complete = i;
// #DB i:6 orig:         }
// #DB i:6 orig:         var e = a;
// #DB i:6 orig:         Object(r.b)(t, e);
// #DB i:6 orig:         t.prototype.next = function(e) {
// #DB i:6 orig:           if (!this.isStopped && this._next) {
// #DB i:6 orig:             var t = this._parentSubscriber;
// #DB i:6 orig:             if (t.syncErrorThrowable) {
// #DB i:6 orig:               if (this.__tryOrSetError(t, this._next, e)) {
// #DB i:6 orig:                 this.unsubscribe();
// #DB i:6 orig:               }
// #DB i:6 orig:             } else {
// #DB i:6 orig:               this.__tryOrUnsub(this._next, e);
// #DB i:6 orig:             }
// #DB i:6 orig:           }
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype.error = function(e) {//#RF [object Object]
// #DB i:6 orig:           if (!this.isStopped) {
// #DB i:6 orig:             var t = this._parentSubscriber;
// #DB i:6 orig:             if (this._error) {
// #DB i:6 orig:               if (t.syncErrorThrowable) {
// #DB i:6 orig:                 this.__tryOrSetError(t, this._error, e);
// #DB i:6 orig:                 this.unsubscribe();
// #DB i:6 orig:               } else {
// #DB i:6 orig:                 this.__tryOrUnsub(this._error, e);
// #DB i:6 orig:                 this.unsubscribe();
// #DB i:6 orig:               }
// #DB i:6 orig:             } else {
// #DB i:6 orig:               if (!t.syncErrorThrowable) {
// #DB i:6 orig:                 this.unsubscribe();
// #DB i:6 orig:                 throw e;
// #DB i:6 orig:               }
// #DB i:6 orig:               t.syncErrorValue = e;
// #DB i:6 orig:               t.syncErrorThrown = true;
// #DB i:6 orig:               this.unsubscribe();
// #DB i:6 orig:             }
// #DB i:6 orig:           }
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype.complete = function() {//#RF [object Object]
// #DB i:6 orig:           var e = this;
// #DB i:6 orig:           if (!this.isStopped) {
// #DB i:6 orig:             var t = this._parentSubscriber;
// #DB i:6 orig:             if (this._complete) {
// #DB i:6 orig:               var n = function() {
// #DB i:6 orig:                 return e._complete.call(e._context);
// #DB i:6 orig:               };
// #DB i:6 orig:               if (t.syncErrorThrowable) {
// #DB i:6 orig:                 this.__tryOrSetError(t, n);
// #DB i:6 orig:                 this.unsubscribe();
// #DB i:6 orig:               } else {
// #DB i:6 orig:                 this.__tryOrUnsub(n);
// #DB i:6 orig:                 this.unsubscribe();
// #DB i:6 orig:               }
// #DB i:6 orig:             } else {
// #DB i:6 orig:               this.unsubscribe();
// #DB i:6 orig:             }
// #DB i:6 orig:           }
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype.__tryOrUnsub = function(e, t) {
// #DB i:6 orig:           try {
// #DB i:6 orig:             e.call(this._context, t);
// #DB i:6 orig:           } catch (e) {
// #DB i:6 orig:             this.unsubscribe();
// #DB i:6 orig:             throw e;
// #DB i:6 orig:           }
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype.__tryOrSetError = function(e, t, n) {//#RF [object Object]
// #DB i:6 orig:           try {
// #DB i:6 orig:             t.call(this._context, n);
// #DB i:6 orig:           } catch (t) {
// #DB i:6 orig:             e.syncErrorValue = t;
// #DB i:6 orig:             e.syncErrorThrown = true;
// #DB i:6 orig:             return true;
// #DB i:6 orig:           }
// #DB i:6 orig:           return false;
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype._unsubscribe = function() {//#RF [object Object]
// #DB i:6 orig:           var e = this._parentSubscriber;
// #DB i:6 orig:           this._context = null;
// #DB i:6 orig:           this._parentSubscriber = null;
// #DB i:6 orig:           e.unsubscribe();
// #DB i:6 orig:         };
// #DB i:6 orig:         return t;
// #DB END i: orig:       })();
    },// #QA1 i:1829 orig: 
    Rf9G: function(e, t, n) {// #QA1 i:1829 orig: 
      'use strict';console.log(arguments)// #QA1 i:1829 orig: 
      function a() {// #QB i:1829 orig: 
        return function(e) {// #QA1 i:1829 orig: 
          return e.lift(new c(e));// #QB i:1829 orig: 
        };// #QA1 i:1829 orig: 
      }// #QA1 i:1829 orig: 
      function h() {// #KFB3 START i:1829 orig: 6//#RF [object Object]
// #KB1 i:6 orig:         return new o.a();
      }// #KB1 END i:1830 orig: 
// #DSL i: orig:       var r = n('TToO');
// #DSL i: orig:       var o = n('g5jc');
// #DSL i: orig:       var i = n('YaPU');
// #DSL i: orig:       var s = n('OVmG');
// #DSL i: orig:       var u = n('VwZZ');
      var c =function(n){};// #CB2 START i:1831 orig: 6
// #CB i:6 orig:         function e(e) {
// #CB i:6 orig:           this.connectable = e;
// #CB i:6 orig:         }
// #CB i:6 orig:         e.prototype.call = function(e, t) {//#RF [object Object]
// #CB i:6 orig:           var n = this.connectable;
// #CB i:6 orig:           n._refCount++;
// #CB i:6 orig:           var r = new l(e, n);
// #CB i:6 orig:           var o = t.subscribe(r);
// #CB i:6 orig:           if (!r.closed) {
// #CB i:6 orig:             r.connection = n.connect();
// #CB i:6 orig:           }
// #CB i:6 orig:           return o;
// #CB i:6 orig:         };
// #CB i:6 orig:         return e;
// #CB END i: orig:       })();
// #DB START YYY START i:6 orig:       var l = (function() {
// #DB i:6 orig:         function t(t, n) {//#RF [object Object]
// #DB i:6 orig:           e.call(this, t);
// #DB i:6 orig:           this.connectable = n;
// #DB i:6 orig:         }
// #DB i:6 orig:         var e = s.a;
// #DB i:6 orig:         Object(r.b)(t, e);
// #DB i:6 orig:         t.prototype._unsubscribe = function() {//#RF [object Object]
// #DB i:6 orig:           var e = this.connectable;
// #DB i:6 orig:           if (e) {
// #DB i:6 orig:             this.connectable = null;
// #DB i:6 orig:             var t = e._refCount;
// #DB i:6 orig:             if (t <= 0) {
// #DB i:6 orig:               this.connection = null;
// #DB i:6 orig:             } else if (((e._refCount = t - 1), t > 1)) {
// #DB i:6 orig:               this.connection = null;
// #DB i:6 orig:             } else {
// #DB i:6 orig:               var n = this.connection;
// #DB i:6 orig:               var r = e._connection;
// #DB i:6 orig:               this.connection = null;
// #DB i:6 orig:               if (!!r && (!n || r === n)) {
// #DB i:6 orig:                 r.unsubscribe();
// #DB i:6 orig:               }
// #DB i:6 orig:             }
// #DB i:6 orig:           } else {
// #DB i:6 orig:             this.connection = null;
// #DB i:6 orig:           }
// #DB i:6 orig:         };
// #DB i:6 orig:         return t;
// #DB END i: orig:       })();
      var d =function(n){};// #CB2 START i:1942 orig: 6
// #CB i:6 orig:         function t(t, n) {//#RF [object Object]
// #CB i:6 orig:           e.call(this);
// #CB i:6 orig:           this.source = t;
// #CB i:6 orig:           this.subjectFactory = n;
// #CB i:6 orig:           this._refCount = 0;
// #CB i:6 orig:           this._isComplete = false;
// #CB i:6 orig:         }
// #CB i:6 orig:         var e = i.a;
// #CB i:6 orig:         Object(r.b)(t, e);
// #CB i:6 orig:         t.prototype._subscribe = function(e) {//#RF [object Object]
// #CB i:6 orig:           return this.getSubject().subscribe(e);
// #CB i:6 orig:         };
// #CB i:6 orig:         t.prototype.getSubject = function() {//#RF [object Object]
// #CB i:6 orig:           var e = this._subject;
// #CB i:6 orig:           if (!e || !!e.isStopped) {
// #CB i:6 orig:             this._subject = this.subjectFactory();
// #CB i:6 orig:           }
// #CB i:6 orig:           return this._subject;
// #CB i:6 orig:         };
// #CB i:6 orig:         t.prototype.connect = function() {//#RF [object Object]
// #CB i:6 orig:           var e = this._connection;
// #CB i:6 orig:           if (!e) {
// #CB i:6 orig:             this._isComplete = false;
// #CB i:6 orig:             (e = this._connection = new u.a()).add(
// #CB i:6 orig:               this.source.subscribe(new p(this.getSubject(), this))
// #CB i:6 orig:             );
// #CB i:6 orig:             if (e.closed) {
// #CB i:6 orig:               this._connection = null;
// #CB i:6 orig:               e = u.a.EMPTY;
// #CB i:6 orig:             } else {
// #CB i:6 orig:               this._connection = e;
// #CB i:6 orig:             }
// #CB i:6 orig:           }
// #CB i:6 orig:           return e;
// #CB i:6 orig:         };
// #CB i:6 orig:         t.prototype.refCount = function() {//#RF [object Object]
// #CB i:6 orig:           return a()(this);
// #CB i:6 orig:         };
// #CB i:6 orig:         return t;
// #CB END i: orig:       })().prototype;
      var f = {// #QA1 i:2069 orig: 
        operator: { value: null },// #QA1 i:2069 orig: 
        _refCount: { value: 0, writable: true },// #QA1 i:2069 orig: 
        _subject: { value: null, writable: true },// #QA1 i:2069 orig: 
        _connection: { value: null, writable: true },// #QA1 i:2069 orig: 
        _subscribe: { value: d._subscribe },// #QA1 i:2069 orig: 
        _isComplete: { value: d._isComplete, writable: true },// #QA1 i:2069 orig: 
        getSubject: { value: d.getSubject },// #QA1 i:2069 orig: 
        connect: { value: d.connect },// #QA1 i:2069 orig: 
        refCount: { value: d.refCount },// #QA1 i:2069 orig: 
      };// #QA1 i:2069 orig: 
// #DB START YYY START i:6 orig:       var p = (function() {
// #DB i:6 orig:         function t(t, n) {//#RF [object Object]
// #DB i:6 orig:           e.call(this, t);
// #DB i:6 orig:           this.connectable = n;
// #DB i:6 orig:         }
// #DB i:6 orig:         var e = o.b;
// #DB i:6 orig:         Object(r.b)(t, e);
// #DB i:6 orig:         t.prototype._error = function(t) {//#RF [object Object]
// #DB i:6 orig:           this._unsubscribe();
// #DB i:6 orig:           e.prototype._error.call(this, t);
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype._complete = function() {//#RF [object Object]
// #DB i:6 orig:           this.connectable._isComplete = true;
// #DB i:6 orig:           this._unsubscribe();
// #DB i:6 orig:           e.prototype._complete.call(this);
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype._unsubscribe = function() {//#RF [object Object]
// #DB i:6 orig:           var e = this.connectable;
// #DB i:6 orig:           if (e) {
// #DB i:6 orig:             this.connectable = null;
// #DB i:6 orig:             var t = e._connection;
// #DB i:6 orig:             e._refCount = 0;
// #DB i:6 orig:             e._subject = null;
// #DB i:6 orig:             e._connection = null;
// #DB i:6 orig:             if (t) {
// #DB i:6 orig:               t.unsubscribe();
// #DB i:6 orig:             }
// #DB i:6 orig:           }
// #DB i:6 orig:         };
// #DB i:6 orig:         return t;
// #DB END i: orig:       })();
      t.a = function() {// #QA1 i:2216 orig: 
        return a()(// #QA1 i:2216 orig: 
          ((e = h),// #QA1 i:2216 orig: 
          function(t) {// #QA1 i:2216 orig: 
            var n =// #QA1 i:2216 orig: 
              typeof e == 'function'// #QA1 i:2216 orig: 
                ? e// #QA1 i:2216 orig: 
                : function() {// #QA1 i:2216 orig: //#RF [object Object]
                    return e;// #QA1 i:2216 orig: 
                  };// #QA1 i:2216 orig: 
            var r = Object.create(t, f);// #QA1 i:2216 orig: 
            r.source = t;// #QA1 i:2216 orig: 
            r.subjectFactory = n;// #QA1 i:2216 orig: 
            return r;// #QA1 i:2216 orig: 
          })(this)// #QA1 i:2216 orig: 
        );// #QA1 i:2216 orig: 
// #DSL i: orig:         var e;
      };// #QA1 i:2216 orig: 
    },// #QA1 i:2216 orig: 
    TToO: function(e, t, n) {// #QA1 i:2216 orig: 
      'use strict';// #QA1 i:2216 orig: 
      t.b = function(e, t) {// #QA1 i:2216 orig: 
        function n() {// #QA3 i:2216 orig: 8
// #KB1 i:8 orig:           this.constructor = e;
        }// #KB1 END i:2222 orig: 
        r(e, t);// #QA1 i:2223 orig: 
        e.prototype =// #QA1 i:2223 orig: 
          t === null// #QA1 i:2223 orig: 
            ? Object.create(t)// #QA1 i:2223 orig: 
            : ((n.prototype = t.prototype), new n());// #QA1 i:2223 orig: 
      };// #QA1 i:2223 orig: 
      n.d(t, 'a', function() {// #QA1 i:2223 orig: 
        return o;// #QA1 i:2223 orig: 
      });// #QA1 i:2223 orig: 
      var r =// #QA1 i:2223 orig: 
        Object.setPrototypeOf ||// #QA1 i:2223 orig: 
        ({ __proto__: [] } instanceof Array &&// #QA1 i:2223 orig: 
          function(e, t) {// #KFB01 START i:2223 orig: 10//#RF [object Object]
// #KB1 i:10 orig:             e.__proto__ = t;
          }) ||// #KB1 END i:2224 orig: 
        function(e, t) {// #KFB01 START i:2226 orig: 8//#RF [object Object]
// #KB1 i:8 orig:           for (var n in t) {
// #KB1 i:8 orig:             if (t.hasOwnProperty(n)) {
// #KB1 i:8 orig:               e[n] = t[n];
// #KB1 i:8 orig:             }
// #KB1 i:8 orig:           }
        };// #KB1 END i:2232 orig: 
      var o =// #QA1 i:2233 orig: 
        Object.assign ||// #QA1 i:2233 orig: 
        function(e) {// #KFB01 START i:2233 orig: 8//#RF [object Object]
// #KB1 i:8 orig:           var t;
// #KB1 i:8 orig:           var n = 1;
// #KB1 i:8 orig:           for (var r = arguments.length; n < r; n++) {
// #KB1 i:8 orig:             for (var o in (t = arguments[n])) {
// #KB1 i:8 orig:               if (Object.prototype.hasOwnProperty.call(t, o)) {
// #KB1 i:8 orig:                 e[o] = t[o];
// #KB1 i:8 orig:               }
// #KB1 i:8 orig:             }
// #KB1 i:8 orig:           }
// #KB1 i:8 orig:           return e;
        };// #KB1 END i:2254 orig: 
    },// #QA1 i:2261 orig: 
    VwZZ: function(e, t, n) {// #QA1 i:2261 orig: 
      'use strict';// #QA1 i:2261 orig: 
// #DB6 START i:6 orig:       function a() {//#RF [object Object]
// #DB i:6 orig:         try {
// #DB i:6 orig:           return r.apply(this, arguments);
// #DB i:6 orig:         } catch (e) {
// #DB i:6 orig:           u.e = e;
// #DB i:6 orig:           return u;
// #DB i:6 orig:         }
// #DB END i: orig:       }
// #DB6 START i:6 orig:       function c(e) {//#RF [object Object]
// #DB i:6 orig:         r = e;
// #DB i:6 orig:         return a;
// #DB END i: orig:       }
// #DB6 START i:6 orig:       function p(e) {//#RF [object Object]
// #DB i:6 orig:         return e.reduce(function(e, t) {
// #DB i:6 orig:           return e.concat(t instanceof d ? t.errors : t);
// #DB i:6 orig:         }, []);
// #DB END i: orig:       }
// #DSL i: orig:       var r;
// #DSL i: orig:       var o =
// #DSL i: orig:         Array.isArray ||
// #DB7 START i:8 orig:         function(e) {//#RF [object Object]
// #DB i:8 orig:           return e && typeof e.length == 'number';
// #DB END i: orig:         };
// #DSL i: orig:       var i = n('dgOU');
// #DSL i: orig:       var s = n('/iUD');
// #DSL i: orig:       var u = { e: {} };
// #DSL i: orig:       var l = n('TToO');
// #DB START YYY START i:6 orig:       var d = (function() {
// #DB i:6 orig:         function t(t) {//#RF [object Object]
// #DB i:6 orig:           e.call(this);
// #DB i:6 orig:           this.errors = t;
// #DB i:6 orig:           var n = Error.call(
// #DB i:6 orig:             this,
// #DB i:6 orig:             t
// #DB i:6 orig:               ? t.length +
// #DB i:6 orig:                 ' errors occurred during unsubscription:\n  ' +
// #DB i:6 orig:                 t
// #DB i:6 orig:                   .map(function(e, t) {
// #DB i:6 orig:                     return t + 1 + ') ' + e.toString();
// #DB i:6 orig:                   })
// #DB i:6 orig:                   .join('\n  ')
// #DB i:6 orig:               : ''
// #DB i:6 orig:           );
// #DB i:6 orig:           this.name = n.name = 'UnsubscriptionError';
// #DB i:6 orig:           this.stack = n.stack;
// #DB i:6 orig:           this.message = n.message;
// #DB i:6 orig:         }
// #DB i:6 orig:         var e = Error;
// #DB i:6 orig:         Object(l.b)(t, e);
// #DB i:6 orig:         return t;
// #DB END i: orig:       })();
      n.d(t, 'a', function() {// #QA1 i:2399 orig: 
        return f;// #QA1 i:2399 orig: 
      });// #QA1 i:2399 orig: 
      var f =function(n){};// #CB2 START i:2399 orig: 6
// #CB i:6 orig:         function e(e) {
// #CB i:6 orig:           this.closed = false;
// #CB i:6 orig:           this._parent = null;
// #CB i:6 orig:           this._parents = null;
// #CB i:6 orig:           this._subscriptions = null;
// #CB i:6 orig:           if (e) {
// #CB i:6 orig:             this._unsubscribe = e;
// #CB i:6 orig:           }
// #CB i:6 orig:         }
// #CB i:6 orig:         var t;
// #CB i:6 orig:         e.prototype.unsubscribe = function() {//#RF [object Object]
// #CB i:6 orig:           var e;
// #CB i:6 orig:           var t = false;
// #CB i:6 orig:           if (!this.closed) {
// #CB i:6 orig:             var n = this._parent;
// #CB i:6 orig:             var r = this._parents;
// #CB i:6 orig:             var a = this._unsubscribe;
// #CB i:6 orig:             var l = this._subscriptions;
// #CB i:6 orig:             this.closed = true;
// #CB i:6 orig:             this._parent = null;
// #CB i:6 orig:             this._parents = null;
// #CB i:6 orig:             this._subscriptions = null;
// #CB i:6 orig:             var f = -1;
// #CB i:6 orig:             for (var h = r ? r.length : 0; n; ) {
// #CB i:6 orig:               n.remove(this);
// #CB i:6 orig:               n = (++f < h && r[f]) || null;
// #CB i:6 orig:             }
// #CB i:6 orig:             if (Object(s.a)(a) && c(a).call(this) === u) {
// #CB i:6 orig:               t = true;
// #CB i:6 orig:               e = e || (u.e instanceof d ? p(u.e.errors) : [u.e]);
// #CB i:6 orig:             }
// #CB i:6 orig:             if (o(l)) {
// #CB i:6 orig:               f = -1;
// #CB i:6 orig:               for (h = l.length; ++f < h; ) {
// #CB i:6 orig:                 var v = l[f];
// #CB i:6 orig:                 if (Object(i.a)(v) && c(v.unsubscribe).call(v) === u) {
// #CB i:6 orig:                   t = true;
// #CB i:6 orig:                   e = e || [];
// #CB i:6 orig:                   var y = u.e;
// #CB i:6 orig:                   if (y instanceof d) {
// #CB i:6 orig:                     e = e.concat(p(y.errors));
// #CB i:6 orig:                   } else {
// #CB i:6 orig:                     e.push(y);
// #CB i:6 orig:                   }
// #CB i:6 orig:                 }
// #CB i:6 orig:               }
// #CB i:6 orig:             }
// #CB i:6 orig:             if (t) {
// #CB i:6 orig:               throw new d(e);
// #CB i:6 orig:             }
// #CB i:6 orig:           }
// #CB i:6 orig:         };
// #CB i:6 orig:         e.prototype.add = function(t) {
// #CB i:6 orig:           if (!t || t === e.EMPTY) {
// #CB i:6 orig:             return e.EMPTY;
// #CB i:6 orig:           }
// #CB i:6 orig:           if (t === this) {
// #CB i:6 orig:             return this;
// #CB i:6 orig:           }
// #CB i:6 orig:           var n = t;
// #CB i:6 orig:           switch (typeof t) {
// #CB i:6 orig:             case 'function':
// #CB i:6 orig:               n = new e(t);
// #CB i:6 orig:             case 'object':
// #CB i:6 orig:               if (n.closed || typeof n.unsubscribe != 'function') {
// #CB i:6 orig:                 return n;
// #CB i:6 orig:               }
// #CB i:6 orig:               if (this.closed) {
// #CB i:6 orig:                 n.unsubscribe();
// #CB i:6 orig:                 return n;
// #CB i:6 orig:               }
// #CB i:6 orig:               if (typeof n._addParent != 'function') {
// #CB i:6 orig:                 var r = n;
// #CB i:6 orig:                 (n = new e())._subscriptions = [r];
// #CB i:6 orig:               }
// #CB i:6 orig:               break;
// #CB i:6 orig:             default:
// #CB i:6 orig:               throw new Error(
// #CB i:6 orig:                 'unrecognized teardown ' + t + ' added to Subscription.'
// #CB i:6 orig:               );
// #CB i:6 orig:           }
// #CB i:6 orig:           (this._subscriptions || (this._subscriptions = [])).push(n);
// #CB i:6 orig:           n._addParent(this);
// #CB i:6 orig:           return n;
// #CB i:6 orig:         };
// #CB i:6 orig:         e.prototype.remove = function(e) {//#RF [object Object]
// #CB i:6 orig:           var t = this._subscriptions;
// #CB i:6 orig:           if (t) {
// #CB i:6 orig:             var n = t.indexOf(e);
// #CB i:6 orig:             if (n !== -1) {
// #CB i:6 orig:               t.splice(n, 1);
// #CB i:6 orig:             }
// #CB i:6 orig:           }
// #CB i:6 orig:         };
// #CB i:6 orig:         e.prototype._addParent = function(e) {
// #CB i:6 orig:           var t = this._parent;
// #CB i:6 orig:           var n = this._parents;
// #CB i:6 orig:           if (t && t !== e) {
// #CB i:6 orig:             if (n) {
// #CB i:6 orig:               if (n.indexOf(e) === -1) {
// #CB i:6 orig:                 n.push(e);
// #CB i:6 orig:               }
// #CB i:6 orig:             } else {
// #CB i:6 orig:               this._parents = [e];
// #CB i:6 orig:             }
// #CB i:6 orig:           } else {
// #CB i:6 orig:             this._parent = e;
// #CB i:6 orig:           }
// #CB i:6 orig:         };
// #CB i:6 orig:         e.EMPTY = (((t = new e()).closed = true), t);
// #CB i:6 orig:         return e;
// #CB END i: orig:       })();
    },// #QA1 i:2611 orig: 
    WT6e: function(e, t, n) {// #QA1 i:2611 orig: 
      'use strict';// #QA1 i:2611 orig: 
      (function(e) {// #QA1 i:2611 orig: 
        function d(e, t, n) {// #QA3 i:2611 orig: 8
// #KB1 i:8 orig:           function o() {//#RF [object Object]
// #KB1 i:8 orig:             function s(e, t, n) {
// #KB1 i:8 orig:               for (
// #KB1 i:8 orig:                 var r = e.hasOwnProperty(l)
// #KB1 i:8 orig:                   ? e[l]
// #KB1 i:8 orig:                   : Object.defineProperty(e, l, { value: [] })[l];
// #KB1 i:8 orig:                 r.length <= n;
// #KB1 i:8 orig: 
// #KB1 i:8 orig:               ) {
// #KB1 i:8 orig:                 r.push(null);
// #KB1 i:8 orig:               }
// #KB1 i:8 orig:               (r[n] = r[n] || []).push(i);
// #KB1 i:8 orig:               return e;
// #KB1 i:8 orig:             }
// #KB1 i:8 orig:             var e = [];
// #KB1 i:8 orig:             for (var t = 0; t < arguments.length; t++) {
// #KB1 i:8 orig:               e[t] = arguments[t];
// #KB1 i:8 orig:             }
// #KB1 i:8 orig:             if (this instanceof o) {
// #KB1 i:8 orig:               r.apply(this, e);
// #KB1 i:8 orig:               return this;
// #KB1 i:8 orig:             }
// #KB1 i:8 orig:             var n;
// #KB1 i:8 orig:             var i = new ((n = o).bind.apply(n, [void 0].concat(e)))();
// #KB1 i:8 orig:             s.annotation = i;
// #KB1 i:8 orig:             return s;
// #KB1 i:8 orig:           }
// #KB1 i:8 orig:           var r = (function() {
// #KB1 i:8 orig:             var e = t;
// #KB1 i:8 orig:             return function() {//#RF [object Object]
// #KB1 i:8 orig:               var t = [];
// #KB1 i:8 orig:               for (var n = 0; n < arguments.length; n++) {
// #KB1 i:8 orig:                 t[n] = arguments[n];
// #KB1 i:8 orig:               }
// #KB1 i:8 orig:               if (e) {
// #KB1 i:8 orig:                 var r = e.apply(void 0, t);
// #KB1 i:8 orig:                 for (var o in r) {
// #KB1 i:8 orig:                   this[o] = r[o];
// #KB1 i:8 orig:                 }
// #KB1 i:8 orig:               }
// #KB1 i:8 orig:             };
// #KB1 i:8 orig:           })();
// #KB1 i:8 orig:           if (n) {
// #KB1 i:8 orig:             o.prototype = Object.create(n.prototype);
// #KB1 i:8 orig:           }
// #KB1 i:8 orig:           o.prototype.ngMetadataName = e;
// #KB1 i:8 orig:           o.annotationCls = o;
// #KB1 i:8 orig:           return o;
        }// #KB1 END i:2684 orig: 
// #Q8 START i:8 orig:         function x() {
// #DB i:8 orig:           if (!E) {
// #DB i:8 orig:             var e = w.Symbol;
// #DB i:8 orig:             if (e && e.iterator) {
// #DB i:8 orig:               E = e.iterator;
// #DB i:8 orig:             } else {
// #DB i:8 orig:               var t = Object.getOwnPropertyNames(Map.prototype);
// #DB i:8 orig:               for (var n = 0; n < t.length; ++n) {
// #DB i:8 orig:                 var r = t[n];
// #DB i:8 orig:                 if (
// #DB i:8 orig:                   r !== 'entries' &&
// #DB i:8 orig:                   r !== 'size' &&
// #DB i:8 orig:                   Map.prototype[r] === Map.prototype.entries
// #DB i:8 orig:                 ) {
// #DB i:8 orig:                   E = r;
// #DB i:8 orig:                 }
// #DB i:8 orig:               }
// #DB i:8 orig:             }
// #DB i:8 orig:           }
// #DB i:8 orig:           return E;
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function T(e) {//#RF [object Object]
// #DB i:8 orig:           if (typeof Zone == 'undefined') {
// #DB i:8 orig:             C.then(function() {
// #DB i:8 orig:               if (e) {
// #DB i:8 orig:                 e.apply(null, null);
// #DB i:8 orig:               }
// #DB i:8 orig:             });
// #DB i:8 orig:           } else {
// #DB i:8 orig:             Zone.current.scheduleMicroTask('scheduleMicrotask', e);
// #DB i:8 orig:           }
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function k(e, t) {//#RF [object Object]
// #DB i:8 orig:           return (
// #DB i:8 orig:             e === t ||
// #DB i:8 orig:             (typeof e == 'number' &&
// #DB i:8 orig:               typeof t == 'number' &&
// #DB i:8 orig:               isNaN(e) &&
// #DB i:8 orig:               isNaN(t))
// #DB i:8 orig:           );
// #DB END i: orig:         }
        function I(e) {// #QA3 i:2898 orig: 8
// #KB1 i:8 orig:           if (typeof e == 'string') {
// #KB1 i:8 orig:             return e;
// #KB1 i:8 orig:           }
// #KB1 i:8 orig:           if (e instanceof Array) {
// #KB1 i:8 orig:             return '[' + e.map(I).join(', ') + ']';
// #KB1 i:8 orig:           }
// #KB1 i:8 orig:           if (e == null) {
// #KB1 i:8 orig:             return '' + e;
// #KB1 i:8 orig:           }
// #KB1 i:8 orig:           if (e.overriddenName) {
// #KB1 i:8 orig:             return '' + e.overriddenName;
// #KB1 i:8 orig:           }
// #KB1 i:8 orig:           if (e.name) {
// #KB1 i:8 orig:             return '' + e.name;
// #KB1 i:8 orig:           }
// #KB1 i:8 orig:           var t = e.toString();
// #KB1 i:8 orig:           if (t == null) {
// #KB1 i:8 orig:             return '' + t;
// #KB1 i:8 orig:           }
// #KB1 i:8 orig:           var n = t.indexOf('\n');
// #KB1 i:8 orig:           if (n === -1) {
// #KB1 i:8 orig:             return t;
// #KB1 i:8 orig:           } else {
// #KB1 i:8 orig:             return t.substring(0, n);
// #KB1 i:8 orig:           }
        }// #KB1 END i:3000 orig: 
// #DB6 START i:8 orig:         function O(e) {//#RF [object Object]
// #DB i:8 orig:           e.__forward_ref__ = O;
// #DB i:8 orig:           e.toString = function() {
// #DB i:8 orig:             return I(this());
// #DB i:8 orig:           };
// #DB i:8 orig:           return e;
// #DB END i: orig:         }
        function N(e) {// #QA3 i:3017 orig: 8
// #KB1 i:8 orig:           if (
// #KB1 i:8 orig:             typeof e == 'function' &&
// #KB1 i:8 orig:             e.hasOwnProperty('__forward_ref__') &&
// #KB1 i:8 orig:             e.__forward_ref__ === O
// #KB1 i:8 orig:           ) {
// #KB1 i:8 orig:             return e();
// #KB1 i:8 orig:           } else {
            return e;// #NOT DELETABLE i:3029 orig: 8
// #KB1 i:8 orig:           }
        }// #KB1 END i:3033 orig: 
// #DB6 START i:8 orig:         function Z(e) {//#RF [object Object]
// #DB i:8 orig:           return Q('Cannot mix multi providers and regular providers', e);
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function W(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           if (n === void 0) {
// #DB i:8 orig:             n = null;
// #DB i:8 orig:           }
// #DB i:8 orig:           e = e && e.charAt(0) === '\n' && e.charAt(1) == z ? e.substr(2) : e;
// #DB i:8 orig:           var r = I(t);
// #DB i:8 orig:           if (t instanceof Array) {
// #DB i:8 orig:             r = t.map(I).join(' -> ');
// #DB i:8 orig:           } else if (typeof t == 'object') {
// #DB i:8 orig:             var o = [];
// #DB i:8 orig:             for (var i in t) {
// #DB i:8 orig:               if (t.hasOwnProperty(i)) {
// #DB i:8 orig:                 var s = t[i];
// #DB i:8 orig:                 o.push(
// #DB i:8 orig:                   i + ':' + (typeof s == 'string' ? JSON.stringify(s) : I(s))
// #DB i:8 orig:                 );
// #DB i:8 orig:               }
// #DB i:8 orig:             }
// #DB i:8 orig:             r = '{' + o.join(', ') + '}';
// #DB i:8 orig:           }
// #DB i:8 orig:           return (
// #DB i:8 orig:             'StaticInjectorError' +
// #DB i:8 orig:             (n ? '(' + n + ')' : '') +
// #DB i:8 orig:             '[' +
// #DB i:8 orig:             r +
// #DB i:8 orig:             ']: ' +
// #DB i:8 orig:             e.replace(B, '\n  ')
// #DB i:8 orig:           );
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Q(e, t) {//#RF [object Object]
// #DB i:8 orig:           return new Error(W(e, t));
// #DB END i: orig:         }
// #Q8 START i:8 orig:         function K(e) {
// #DB i:8 orig:           return e[G];
// #DB END i: orig:         }
// #Q8 START i:8 orig:         function J(e) {
// #DB i:8 orig:           return e[q];
// #DB END i: orig:         }
// #Q8 START i:8 orig:         function X(e) {
// #DB i:8 orig:           var t = [];
// #DB i:8 orig:           for (var n = 1; n < arguments.length; n++) {
// #DB i:8 orig:             t[n - 1] = arguments[n];
// #DB i:8 orig:           }
// #DB i:8 orig:           e.error.apply(e, t);
// #DB END i: orig:         }
        function ee(e) {// #QA3 i:3090 orig: 8
// #KB1 i:8 orig:           return !!e && typeof e.then == 'function';
        }// #KB1 END i:3091 orig: 
// #DB6 START i:8 orig:         function te(e) {//#RF [object Object]
// #DB i:8 orig:           return !!e && typeof e.subscribe == 'function';
// #DB END i: orig:         }
        function ie() {// #KFB3 START i:3096 orig: 8//#RF [object Object]
// #KB1 i:8 orig:           return '' + se() + se() + se();
        }// #KB1 END i:3097 orig: 
// #DB6 START i:8 orig:         function se() {//#RF [object Object]
// #DB i:8 orig:           return String.fromCharCode(97 + Math.floor(25 * Math.random()));
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function de() {//#RF [object Object]
// #DB i:8 orig:           throw new Error('Runtime compiler is not loaded');
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function ve(e) {//#RF [object Object]
// #DB i:8 orig:           var t = Error(
// #DB i:8 orig:             'No component factory found for ' +
// #DB i:8 orig:               I(e) +
// #DB i:8 orig:               '. Did you add it to @NgModule.entryComponents?'
// #DB i:8 orig:           );
// #DB i:8 orig:           t[me] = e;
// #DB i:8 orig:           return t;
// #DB END i: orig:         }
        function Te(e, t) {// #QA3 i:3116 orig: 8
// #KB1 i:8 orig:           return null;
        }// #KB1 END i:3118 orig: 
// #DL SINGLE FUNC i: orig:         function Se() {}//#RF [object Object]
// #Q8 START i:8 orig:         function Me(e) {
// #DB i:8 orig:           if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable) {
// #DB i:8 orig:             try {
// #DB i:8 orig:               e._nesting++;
// #DB i:8 orig:               e.onMicrotaskEmpty.emit(null);
// #DB i:8 orig:             } finally {
// #DB i:8 orig:               e._nesting--;
// #DB i:8 orig:               if (!e.hasPendingMicrotasks) {
// #DB i:8 orig:                 try {
// #DB i:8 orig:                   e.runOutsideAngular(function() {
// #DB i:8 orig:                     return e.onStable.emit(null);
// #DB i:8 orig:                   });
// #DB i:8 orig:                 } finally {
// #DB i:8 orig:                   e.isStable = true;
// #DB i:8 orig:                 }
// #DB i:8 orig:               }
// #DB i:8 orig:             }
// #DB i:8 orig:           }
// #DB END i: orig:         }
        function Pe(e) {// #QA3 i:3145 orig: 8
// #KB1 i:8 orig:           e._nesting++;
// #KB1 i:8 orig:           if (e.isStable) {
// #KB1 i:8 orig:             e.isStable = false;
// #KB1 i:8 orig:             e.onUnstable.emit(null);
// #KB1 i:8 orig:           }
        }// #KB1 END i:3153 orig: 
        function De(e) {// #QA3 i:3154 orig: 8
// #KB1 i:8 orig:           e._nesting--;
// #KB1 i:8 orig:           Me(e);
        }// #KB1 END i:3157 orig: 
        function He(e) {// #QA3 i:3159 orig: 8
// #KB1 i:8 orig:           Fe = e;
        }// #KB1 END i:3160 orig: 
        function Ze() {// #KBQ i:3162 orig: 8
// #KB1 i:8 orig:           if (ze) {
// #KB1 i:8 orig:             throw new Error('Cannot enable prod mode after platform setup.');
// #KB1 i:8 orig:           }
// #KB1 i:8 orig:           Be = false;
        }// #KB1 END i:3168 orig: 
        function We() {// #QA3 i:3169 orig: 8
// #KB1 i:8 orig:           ze = true;
// #KB1 i:8 orig:           return Be;
        }// #KB1 END i:3172 orig: 
        function Ge(e, t, n) {// #KBQ i:3174 orig: 8
// #KB1 i:8 orig:           if (n === void 0) {
// #KB1 i:8 orig:             n = [];
// #KB1 i:8 orig:           }
// #KB1 i:8 orig:           var r = 'Platform: ' + t;
// #KB1 i:8 orig:           var o = new c(r);
          return function(t) {// #NOT DELETABLE i:3181 orig: 8
// #KB1 i:8 orig:             if (t === void 0) {
// #KB1 i:8 orig:               t = [];
// #KB1 i:8 orig:             }
// #KB1 i:8 orig:             var i = qe();
// #KB1 i:8 orig:             if (!i || i.injector.get(Ue, false)) {
              if (e) {// #NOT DELETABLE i:3188 orig: 8
                e(n.concat(t).concat({ provide: o, useValue: true }));// #NOT DELETABLE i:3189 orig: 8
              } else {// #NOT DELETABLE i:3191 orig: 8
                var s = n.concat(t).concat({ provide: o, useValue: true });// #NOT DELETABLE i:3192 orig: 8
                (function() {// #NOT DELETABLE i:3193 orig: 8
                  var e = P.create({ providers: s, name: r });// #NOT DELETABLE i:3195 orig: 8
// #KB1 i:8 orig:                   if (Le && !Le.destroyed && !Le.injector.get(Ue, false)) {
// #KB1 i:8 orig:                     throw new Error(
// #KB1 i:8 orig:                       'There can be only one platform. Destroy the previous one to create a new one.'
// #KB1 i:8 orig:                     );
// #KB1 i:8 orig:                   }
                  Le = e.get(Ye);// #NOT DELETABLE i:3203 orig: 8
// #KB1 i:8 orig:                   var t = e.get(ue, null);
// #KB1 i:8 orig:                   if (t) {
// #KB1 i:8 orig:                     t.forEach(function(e) {
// #KB1 i:8 orig:                       return e();
// #KB1 i:8 orig:                     });
// #KB1 i:8 orig:                   }
                })();// #NOT DELETABLE i:3212 orig: 8
              }// #NOT DELETABLE i:3213 orig: 8
// #KB1 i:8 orig:             }
            return (function() {// #NOT DELETABLE i:3216 orig: 8
// #KB1 i:8 orig:               var e = o;
              var t = qe();// #NOT DELETABLE i:3219 orig: 8
// #KB1 i:8 orig:               if (!t) {
// #KB1 i:8 orig:                 throw new Error('No platform exists!');
// #KB1 i:8 orig:               }
// #KB1 i:8 orig:               if (!t.injector.get(e, null)) {
// #KB1 i:8 orig:                 throw new Error(
// #KB1 i:8 orig:                   'A platform with a different configuration has been created. Please destroy it first.'
// #KB1 i:8 orig:                 );
// #KB1 i:8 orig:               }
              return t;// #NOT DELETABLE i:3232 orig: 8
            })();// #NOT DELETABLE i:3237 orig: 8
          };// #NOT DELETABLE i:3238 orig: 8
        }// #KB1 END i:3239 orig: 
        function qe() {// #KBQ i:3240 orig: 8
// #KB1 i:8 orig:           if (Le && !Le.destroyed) {
            return Le;// #NOT DELETABLE i:3241 orig: 8
// #KB1 i:8 orig:           } else {
// #KB1 i:8 orig:             return null;
// #KB1 i:8 orig:           }
        }// #KB1 END i:3247 orig: 
// #DB6 START i:8 orig:         function Ke(e, t) {//#RF [object Object]
// #DB i:8 orig:           if (Array.isArray(t)) {
// #DB i:8 orig:             return t.reduce(Ke, e);
// #DB i:8 orig:           } else {
// #DB i:8 orig:             return Object(r.a)({}, e, t);
// #DB i:8 orig:           }
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Xe(e, t) {//#RF [object Object]
// #DB i:8 orig:           var n = e.indexOf(t);
// #DB i:8 orig:           if (n > -1) {
// #DB i:8 orig:             e.splice(n, 1);
// #DB i:8 orig:           }
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function st(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           e.childNodes.forEach(function(e) {
// #DB i:8 orig:             if (e instanceof it) {
// #DB i:8 orig:               if (t(e)) {
// #DB i:8 orig:                 n.push(e);
// #DB i:8 orig:               }
// #DB i:8 orig:               st(e, t, n);
// #DB i:8 orig:             }
// #DB i:8 orig:           });
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function ut(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           if (e instanceof it) {
// #DB i:8 orig:             e.childNodes.forEach(function(e) {
// #DB i:8 orig:               if (t(e)) {
// #DB i:8 orig:                 n.push(e);
// #DB i:8 orig:               }
// #DB i:8 orig:               if (e instanceof it) {
// #DB i:8 orig:                 ut(e, t, n);
// #DB i:8 orig:               }
// #DB i:8 orig:             });
// #DB i:8 orig:           }
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function ct(e) {//#RF [object Object]
// #DB i:8 orig:           return at.get(e) || null;
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function lt(e) {//#RF [object Object]
// #DB i:8 orig:           at.set(e.nativeNode, e);
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function dt(e, t) {//#RF [object Object]
// #DB i:8 orig:           var n = ht(e);
// #DB i:8 orig:           var r = ht(t);
// #DB i:8 orig:           if (n && r) {
// #DB i:8 orig:             return (function(e, t, n) {
// #DB i:8 orig:               var r = e[x()]();
// #DB i:8 orig:               for (var o = t[x()](); ; ) {
// #DB i:8 orig:                 var i = r.next();
// #DB i:8 orig:                 var s = o.next();
// #DB i:8 orig:                 if (i.done && s.done) {
// #DB i:8 orig:                   return true;
// #DB i:8 orig:                 }
// #DB i:8 orig:                 if (i.done || s.done) {
// #DB i:8 orig:                   return false;
// #DB i:8 orig:                 }
// #DB i:8 orig:                 if (!n(i.value, s.value)) {
// #DB i:8 orig:                   return false;
// #DB i:8 orig:                 }
// #DB i:8 orig:               }
// #DB i:8 orig:             })(e, t, dt);
// #DB i:8 orig:           } else {
// #DB i:8 orig:             return (
// #DB i:8 orig:               (!n &&
// #DB i:8 orig:                 !!e &&
// #DB i:8 orig:                 (typeof e == 'object' || typeof e == 'function') &&
// #DB i:8 orig:                 !r &&
// #DB i:8 orig:                 !!t &&
// #DB i:8 orig:                 (typeof t == 'object' || typeof t == 'function')) ||
// #DB i:8 orig:               k(e, t)
// #DB i:8 orig:             );
// #DB i:8 orig:           }
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function ht(e) {//#RF [object Object]
// #DB i:8 orig:           return (
// #DB i:8 orig:             !!vt(e) && (Array.isArray(e) || (!(e instanceof Map) && x() in e))
// #DB i:8 orig:           );
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function vt(e) {//#RF [object Object]
// #DB i:8 orig:           return e !== null && (typeof e == 'function' || typeof e == 'object');
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Ct(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           var r = e.previousIndex;
// #DB i:8 orig:           if (r === null) {
// #DB i:8 orig:             return r;
// #DB i:8 orig:           }
// #DB i:8 orig:           var o = 0;
// #DB i:8 orig:           if (n && r < n.length) {
// #DB i:8 orig:             o = n[r];
// #DB i:8 orig:           }
// #DB i:8 orig:           return r + t + o;
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Pt() {//#RF [object Object]
// #DB i:8 orig:           return Nt;
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Dt() {//#RF [object Object]
// #DB i:8 orig:           return St;
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Rt(e) {//#RF [object Object]
// #DB i:8 orig:           return e || 'en-US';
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Lt(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           var r = e.state;
// #DB i:8 orig:           var o = 1792 & r;
// #DB i:8 orig:           if (o === t) {
// #DB i:8 orig:             e.state = (-1793 & r) | n;
// #DB i:8 orig:             e.initIndex = -1;
// #DB i:8 orig:             return true;
// #DB i:8 orig:           } else {
// #DB i:8 orig:             return o === n;
// #DB i:8 orig:           }
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Ft(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           return (
// #DB i:8 orig:             (1792 & e.state) === t &&
// #DB i:8 orig:             e.initIndex <= n &&
// #DB i:8 orig:             ((e.initIndex = n + 1), true)
// #DB i:8 orig:           );
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Bt(e, t) {//#RF [object Object]
// #DB i:8 orig:           return e.nodes[t];
// #DB END i: orig:         }
        function zt(e, t) {// #KFB3 START i:3411 orig: 8//#RF [object Object]
          return e.nodes[t];// #NOT DELETABLE i:3411 orig: 8
        }// #KB1 END i:3412 orig: 
        function Ut(e, t) {// #KFB3 START i:3414 orig: 8//#RF [object Object]
          return e.nodes[t];// #NOT DELETABLE i:3414 orig: 8
        }// #KB1 END i:3417 orig: 
// #DB6 START i:8 orig:         function Zt(e, t) {//#RF [object Object]
// #DB i:8 orig:           return e.nodes[t];
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Wt(e, t) {//#RF [object Object]
// #DB i:8 orig:           return e.nodes[t];
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Gt(e, t, n, r) {//#RF [object Object]
// #DB i:8 orig:           var o =
// #DB i:8 orig:             "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '" +
// #DB i:8 orig:             t +
// #DB i:8 orig:             "'. Current value: '" +
// #DB i:8 orig:             n +
// #DB i:8 orig:             "'.";
// #DB i:8 orig:           if (r) {
// #DB i:8 orig:             o +=
// #DB i:8 orig:               ' It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?';
// #DB i:8 orig:           }
// #DB i:8 orig:           return (function(e, t) {
// #DB i:8 orig:             var n = new Error(e);
// #DB i:8 orig:             qt(n, t);
// #DB i:8 orig:             return n;
// #DB i:8 orig:           })(o, e);
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function qt(e, t) {//#RF [object Object]
// #DB i:8 orig:           e[G] = t;
// #DB i:8 orig:           e[Y] = t.logError.bind(t);
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Yt(e) {//#RF [object Object]
// #DB i:8 orig:           return new Error(
// #DB i:8 orig:             'ViewDestroyedError: Attempt to use a destroyed view: ' + e
// #DB i:8 orig:           );
// #DB END i: orig:         }
        function Xt(e) {// #QB i:3458 orig: 
          var t = Jt.get(e);// #QB i:3458 orig: 
          if (!t) {// #QB i:3458 orig: 
            t = I(e) + '_' + Jt.size;// #QB i:3458 orig: 
            Jt.set(e, t);// #QB i:3458 orig: 
          }// #QB i:3458 orig: 
          return t;// #QB i:3458 orig: 
        }// #QA1 i:3458 orig: 
        function tn(e) {// #QA3 i:3458 orig: 8
// #KB1 i:8 orig:           return {
// #KB1 i:8 orig:             id: $t,
// #KB1 i:8 orig:             styles: e.styles,
// #KB1 i:8 orig:             encapsulation: e.encapsulation,
// #KB1 i:8 orig:             data: e.data,
// #KB1 i:8 orig:           };
        }// #KB1 END i:3466 orig: 
// #DB6 START i:8 orig:         function rn(e, t, n, r) {//#RF [object Object]
// #DB i:8 orig:           return !!(2 & e.state) || !k(e.oldValues[t.bindingIndex + n], r);
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function on(e, t, n, r) {//#RF [object Object]
// #DB i:8 orig:           return (
// #DB i:8 orig:             !!rn(e, t, n, r) && ((e.oldValues[t.bindingIndex + n] = r), true)
// #DB i:8 orig:           );
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function sn(e, t, n, r) {//#RF [object Object]
// #DB i:8 orig:           var o = e.oldValues[t.bindingIndex + n];
// #DB i:8 orig:           if (1 & e.state || !dt(o, r)) {
// #DB i:8 orig:             var i = t.bindings[n].name;
// #DB i:8 orig:             throw Gt(
// #DB i:8 orig:               Qt.createDebugContext(e, t.nodeIndex),
// #DB i:8 orig:               i + ': ' + o,
// #DB i:8 orig:               i + ': ' + r,
// #DB i:8 orig:               (1 & e.state) != 0
// #DB i:8 orig:             );
// #DB i:8 orig:           }
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function un(e) {//#RF [object Object]
// #DB i:8 orig:           for (var t = e; t; ) {
// #DB i:8 orig:             if (2 & t.def.flags) {
// #DB i:8 orig:               t.state |= 8;
// #DB i:8 orig:             }
// #DB i:8 orig:             t = t.viewContainerParent || t.parent;
// #DB i:8 orig:           }
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function an(e, t) {//#RF [object Object]
// #DB i:8 orig:           for (var n = e; n && n !== t; ) {
// #DB i:8 orig:             n.state |= 64;
// #DB i:8 orig:             n = n.viewContainerParent || n.parent;
// #DB i:8 orig:           }
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function cn(e, t, n, r) {//#RF [object Object]
// #DB i:8 orig:           try {
// #DB i:8 orig:             un(33554432 & e.def.nodes[t].flags ? zt(e, t).componentView : e);
// #DB i:8 orig:             return Qt.handleEvent(e, t, n, r);
// #DB i:8 orig:           } catch (t) {
// #DB i:8 orig:             e.root.errorHandler.handleError(t);
// #DB i:8 orig:           }
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function ln(e) {//#RF [object Object]
// #DB i:8 orig:           if (e.parent) {
// #DB i:8 orig:             return zt(e.parent, e.parentNodeDef.nodeIndex);
// #DB i:8 orig:           } else {
// #DB i:8 orig:             return null;
// #DB i:8 orig:           }
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function dn(e) {//#RF [object Object]
// #DB i:8 orig:           if (e.parent) {
// #DB i:8 orig:             return e.parentNodeDef.parent;
// #DB i:8 orig:           } else {
// #DB i:8 orig:             return null;
// #DB i:8 orig:           }
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function fn(e, t) {//#RF [object Object]
// #DB i:8 orig:           switch (201347067 & t.flags) {
// #DB i:8 orig:             case 1:
// #DB i:8 orig:               return zt(e, t.nodeIndex).renderElement;
// #DB i:8 orig:             case 2:
// #DB i:8 orig:               return Bt(e, t.nodeIndex).renderText;
// #DB i:8 orig:           }
// #DB END i: orig:         }
        function pn(e) {// #QB i:3565 orig: 
          return !!e.parent && !!(32768 & e.parentNodeDef.flags);// #QA1 i:3565 orig: 
        }// #QA1 i:3565 orig: 
// #DB6 START i:8 orig:         function hn(e) {//#RF [object Object]
// #DB i:8 orig:           return !!e.parent && !(32768 & e.parentNodeDef.flags);
// #DB END i: orig:         }
// #Q8 START i:8 orig:         function vn(e) {
// #DB i:8 orig:           var t = {};
// #DB i:8 orig:           var n = 0;
// #DB i:8 orig:           var r = {};
// #DB i:8 orig:           if (e) {
// #DB i:8 orig:             e.forEach(function(e) {//#RF [object Object]
// #DB i:8 orig:               var o = e[0];
// #DB i:8 orig:               var i = e[1];
// #DB i:8 orig:               if (typeof o == 'number') {
// #DB i:8 orig:                 t[o] = i;
// #DB i:8 orig:                 n |= (function() {
// #DB i:8 orig:                   var e = o;
// #DB i:8 orig:                   return 1 << (e % 32);
// #DB i:8 orig:                 })();
// #DB i:8 orig:               } else {
// #DB i:8 orig:                 r[o] = i;
// #DB i:8 orig:               }
// #DB i:8 orig:             });
// #DB i:8 orig:           }
// #DB i:8 orig:           return { matchedQueries: t, references: r, matchedQueryIds: n };
// #DB END i: orig:         }
        function yn(e, t) {// #KBQ i:3599 orig: 8
          return e.map(function(e) {// #NOT DELETABLE i:3599 orig: 8
// #KB1 i:8 orig:             var n;
            var r;// #NOT DELETABLE i:3601 orig: 8
            if (Array.isArray(e)) {// #NOT DELETABLE i:3602 orig: 8
              r = e[0];// #NOT DELETABLE i:3603 orig: 8
              n = e[1];// #NOT DELETABLE i:3609 orig: 8
            } else {// #NOT DELETABLE i:3610 orig: 8
// #KB1 i:8 orig:               r = 0;
              n = e;// #NOT DELETABLE i:3612 orig: 8
            }// #NOT DELETABLE i:3613 orig: 8
// #KB1 i:8 orig:             if (n && (typeof n == 'function' || typeof n == 'object') && t) {
// #KB1 i:8 orig:               Object.defineProperty(n, S, { value: t, configurable: true });
// #KB1 i:8 orig:             }
            return { flags: r, token: n, tokenKey: Xt(n) };// #NOT DELETABLE i:3618 orig: 8
          });// #NOT DELETABLE i:3619 orig: 8
        }// #KB1 END i:3625 orig: 
        function gn(e, t, n) {// #KBQ i:3626 orig: 8//#RF [object Object]
          var r = n.renderParent;// #NOT DELETABLE i:3626 orig: 8
          if (r) {// #NOT DELETABLE i:3628 orig: 8
// #KB1 i:8 orig:             if (
// #KB1 i:8 orig:               (1 & r.flags) == 0 ||
// #KB1 i:8 orig:               (33554432 & r.flags) == 0 ||
// #KB1 i:8 orig:               (r.element.componentRendererType &&
// #KB1 i:8 orig:                 r.element.componentRendererType.encapsulation === f.Native)
// #KB1 i:8 orig:             ) {
              return zt(e, n.renderParent.nodeIndex).renderElement;// #NOT DELETABLE i:3638 orig: 8
// #KB1 i:8 orig:             } else {
// #KB1 i:8 orig:               return;
// #KB1 i:8 orig:             }
          } else {// #NOT DELETABLE i:3644 orig: 8
            return t;// #NOT DELETABLE i:3646 orig: 8
          }// #NOT DELETABLE i:3647 orig: 8
        }// #KB1 END i:3648 orig: 
        function bn(e) {// #KBQ i:3649 orig: 8
          var t = mn.get(e);// #NOT DELETABLE i:3649 orig: 8
          if (!t) {// #NOT DELETABLE i:3650 orig: 8
            (t = e(function() {// #NOT DELETABLE i:3653 orig: 8
              return Kt;// #NOT DELETABLE i:3655 orig: 8
            })).factory = e;// #NOT DELETABLE i:3656 orig: 8
// #KB1 i:8 orig:             mn.set(e, t);
          }// #NOT DELETABLE i:3658 orig: 8
          return t;// #NOT DELETABLE i:3659 orig: 8
        }// #KB1 END i:3662 orig: 
// #DB6 START i:8 orig:         function _n(e, t, n, r, o) {//#RF [object Object]
// #DB i:8 orig:           if (t === 3) {
// #DB i:8 orig:             n = e.renderer.parentNode(fn(e, e.def.lastRenderRootNode));
// #DB i:8 orig:           }
// #DB i:8 orig:           wn(e, t, 0, e.def.nodes.length - 1, n, r, o);
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function wn(e, t, n, r, o, i, s) {//#RF [object Object]
// #DB i:8 orig:           for (var u = n; u <= r; u++) {
// #DB i:8 orig:             var a = e.def.nodes[u];
// #DB i:8 orig:             if (11 & a.flags) {
// #DB i:8 orig:               En(e, a, t, o, i, s);
// #DB i:8 orig:             }
// #DB i:8 orig:             u += a.childCount;
// #DB i:8 orig:           }
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Cn(e, t, n, r, o, i) {//#RF [object Object]
// #DB i:8 orig:           for (var s = e; s && !pn(s); ) {
// #DB i:8 orig:             s = s.parent;
// #DB i:8 orig:           }
// #DB i:8 orig:           var u = s.parent;
// #DB i:8 orig:           var a = dn(s);
// #DB i:8 orig:           var c = a.nodeIndex + a.childCount;
// #DB i:8 orig:           for (var l = a.nodeIndex + 1; l <= c; l++) {
// #DB i:8 orig:             var d = u.def.nodes[l];
// #DB i:8 orig:             if (d.ngContentIndex === t) {
// #DB i:8 orig:               En(u, d, n, r, o, i);
// #DB i:8 orig:             }
// #DB i:8 orig:             l += d.childCount;
// #DB i:8 orig:           }
// #DB i:8 orig:           if (!u.parent) {
// #DB i:8 orig:             var f = e.root.projectableNodes[t];
// #DB i:8 orig:             if (f) {
// #DB i:8 orig:               for (l = 0; l < f.length; l++) {
// #DB i:8 orig:                 xn(e, f[l], n, r, o, i);
// #DB i:8 orig:               }
// #DB i:8 orig:             }
// #DB i:8 orig:           }
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function En(e, t, n, r, o, i) {//#RF [object Object]
// #DB i:8 orig:           if (8 & t.flags) {
// #DB i:8 orig:             Cn(e, t.ngContent.index, n, r, o, i);
// #DB i:8 orig:           } else {
// #DB i:8 orig:             var s = fn(e, t);
// #DB i:8 orig:             if (n === 3 && 33554432 & t.flags && 48 & t.bindingFlags) {
// #DB i:8 orig:               if (16 & t.bindingFlags) {
// #DB i:8 orig:                 xn(e, s, n, r, o, i);
// #DB i:8 orig:               }
// #DB i:8 orig:               if (32 & t.bindingFlags) {
// #DB i:8 orig:                 xn(zt(e, t.nodeIndex).componentView, s, n, r, o, i);
// #DB i:8 orig:               }
// #DB i:8 orig:             } else {
// #DB i:8 orig:               xn(e, s, n, r, o, i);
// #DB i:8 orig:             }
// #DB i:8 orig:             if (16777216 & t.flags) {
// #DB i:8 orig:               var u = zt(e, t.nodeIndex).viewContainer._embeddedViews;
// #DB i:8 orig:               for (var a = 0; a < u.length; a++) {
// #DB i:8 orig:                 _n(u[a], n, r, o, i);
// #DB i:8 orig:               }
// #DB i:8 orig:             }
// #DB i:8 orig:             if (1 & t.flags && !t.element.name) {
// #DB i:8 orig:               wn(e, n, t.nodeIndex + 1, t.nodeIndex + t.childCount, r, o, i);
// #DB i:8 orig:             }
// #DB i:8 orig:           }
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function xn(e, t, n, r, o, i) {//#RF [object Object]
// #DB i:8 orig:           var s = e.renderer;
// #DB i:8 orig:           switch (n) {
// #DB i:8 orig:             case 1:
// #DB i:8 orig:               s.appendChild(r, t);
// #DB i:8 orig:               break;
// #DB i:8 orig:             case 2:
// #DB i:8 orig:               s.insertBefore(r, t, o);
// #DB i:8 orig:               break;
// #DB i:8 orig:             case 3:
// #DB i:8 orig:               s.removeChild(r, t);
// #DB i:8 orig:               break;
// #DB i:8 orig:             case 0:
// #DB i:8 orig:               i.push(t);
// #DB i:8 orig:           }
// #DB END i: orig:         }
        function kn(e) {// #QA3 i:3812 orig: 8
// #KB1 i:8 orig:           if (e[0] === ':') {
// #KB1 i:8 orig:             var t = e.match(Tn);
// #KB1 i:8 orig:             return [t[1], t[2]];
// #KB1 i:8 orig:           }
          return ['', e];// #NOT DELETABLE i:3817 orig: 8
        }// #KB1 END i:3820 orig: 
// #Q8 START i:8 orig:         function In(e) {
// #DB i:8 orig:           var t = 0;
// #DB i:8 orig:           for (var n = 0; n < e.length; n++) {
// #DB i:8 orig:             t |= e[n].flags;
// #DB i:8 orig:           }
// #DB i:8 orig:           return t;
// #DB END i: orig:         }
        function On(e, t, n, r, o, i, s, u, a, c, l, d) {// #QA3 i:3831 orig: 8
// #KB1 i:8 orig:           if (s === void 0) {
// #KB1 i:8 orig:             s = [];
// #KB1 i:8 orig:           }
// #KB1 i:8 orig:           if (!c) {
// #KB1 i:8 orig:             c = Kt;
// #KB1 i:8 orig:           }
// #KB1 i:8 orig:           var p = vn(n);
// #KB1 i:8 orig:           var h = p.matchedQueries;
          var v = p.references;// #NOT DELETABLE i:3845 orig: 8
// #KB1 i:8 orig:           var y = p.matchedQueryIds;
// #KB1 i:8 orig:           var g = null;
// #KB1 i:8 orig:           var m = null;
          if (i) {// #NOT DELETABLE i:3855 orig: 8
            g = (A = kn(i))[0];// #NOT DELETABLE i:3858 orig: 8
            m = A[1];// #NOT DELETABLE i:3861 orig: 8
          }// #NOT DELETABLE i:3862 orig: 8
// #KB1 i:8 orig:           u = u || [];
// #KB1 i:8 orig:           var b = new Array(u.length);
// #KB1 i:8 orig:           for (var _ = 0; _ < u.length; _++) {
// #KB1 i:8 orig:             var w = u[_];
// #KB1 i:8 orig:             var C = w[0];
// #KB1 i:8 orig:             var E = w[2];
// #KB1 i:8 orig:             var x = kn(w[1]);
// #KB1 i:8 orig:             var T = x[0];
// #KB1 i:8 orig:             var k = x[1];
// #KB1 i:8 orig:             var I = void 0;
// #KB1 i:8 orig:             var O = void 0;
// #KB1 i:8 orig:             switch (15 & C) {
// #KB1 i:8 orig:               case 4:
// #KB1 i:8 orig:                 O = E;
// #KB1 i:8 orig:                 break;
// #KB1 i:8 orig:               case 1:
// #KB1 i:8 orig:               case 8:
// #KB1 i:8 orig:                 I = E;
// #KB1 i:8 orig:             }
// #KB1 i:8 orig:             b[_] = {
// #KB1 i:8 orig:               flags: C,
// #KB1 i:8 orig:               ns: T,
// #KB1 i:8 orig:               name: k,
// #KB1 i:8 orig:               nonMinifiedName: k,
// #KB1 i:8 orig:               securityContext: I,
// #KB1 i:8 orig:               suffix: O,
// #KB1 i:8 orig:             };
// #KB1 i:8 orig:           }
// #KB1 i:8 orig:           a = a || [];
// #KB1 i:8 orig:           var N = new Array(a.length);
// #KB1 i:8 orig:           for (_ = 0; _ < a.length; _++) {
// #KB1 i:8 orig:             var S = a[_];
// #KB1 i:8 orig:             N[_] = { type: 0, target: S[0], eventName: S[1], propName: null };
// #KB1 i:8 orig:           }
// #KB1 i:8 orig:           var A;
          var M = (s = s || []).map(function(e) {// #NOT DELETABLE i:3922 orig: 8//#RF [object Object]
            var t = e[1];// #NOT DELETABLE i:3923 orig: 8
            var n = kn(e[0]);// #NOT DELETABLE i:3924 orig: 8
            return [n[0], n[1], t];// #NOT DELETABLE i:3925 orig: 8
          });// #NOT DELETABLE i:3926 orig: 8
// #KB1 i:8 orig:           d = (function() {
// #KB1 i:8 orig:             var e = d;
// #KB1 i:8 orig:             if (e && e.id === $t) {
// #KB1 i:8 orig:               var t =
// #KB1 i:8 orig:                 (e.encapsulation != null && e.encapsulation !== f.None) ||
// #KB1 i:8 orig:                 e.styles.length ||
// #KB1 i:8 orig:                 Object.keys(e.data).length;
// #KB1 i:8 orig:               e.id = t ? 'c' + nn++ : en;
// #KB1 i:8 orig:             }
// #KB1 i:8 orig:             if (e && e.id === en) {
// #KB1 i:8 orig:               e = null;
// #KB1 i:8 orig:             }
// #KB1 i:8 orig:             return e || null;
// #KB1 i:8 orig:           })();
          if (l) {// #NOT DELETABLE i:3953 orig: 8
            t |= 33554432;// #NOT DELETABLE i:3963 orig: 8
          }// #NOT DELETABLE i:3966 orig: 8
          return {// #NOT DELETABLE i:3967 orig: 8
// #KB1 i:8 orig:             nodeIndex: -1,
// #KB1 i:8 orig:             parent: null,
// #KB1 i:8 orig:             renderParent: null,
// #KB1 i:8 orig:             bindingIndex: -1,
// #KB1 i:8 orig:             outputIndex: -1,
// #KB1 i:8 orig:             checkIndex: e,
            flags: (t |= 1),// #NOT DELETABLE i:3980 orig: 8
// #KB1 i:8 orig:             childFlags: 0,
// #KB1 i:8 orig:             directChildFlags: 0,
// #KB1 i:8 orig:             childMatchedQueries: 0,
// #KB1 i:8 orig:             matchedQueries: h,
// #KB1 i:8 orig:             matchedQueryIds: y,
// #KB1 i:8 orig:             references: v,
// #KB1 i:8 orig:             ngContentIndex: r,
            childCount: o,// #NOT DELETABLE i:3996 orig: 8
// #KB1 i:8 orig:             bindings: b,
// #KB1 i:8 orig:             bindingFlags: In(b),
// #KB1 i:8 orig:             outputs: N,
            element: {// #NOT DELETABLE i:4003 orig: 8
// #KB1 i:8 orig:               ns: g,
              name: m,// #NOT DELETABLE i:4005 orig: 8
              attrs: M,// #NOT DELETABLE i:4006 orig: 8
// #KB1 i:8 orig:               template: null,
// #KB1 i:8 orig:               componentProvider: null,
              componentView: l || null,// #NOT DELETABLE i:4009 orig: 8
// #KB1 i:8 orig:               componentRendererType: d,
// #KB1 i:8 orig:               publicProviders: null,
// #KB1 i:8 orig:               allProviders: null,
// #KB1 i:8 orig:               handleEvent: c || Kt,
            },// #NOT DELETABLE i:4016 orig: 8
// #KB1 i:8 orig:             provider: null,
// #KB1 i:8 orig:             text: null,
// #KB1 i:8 orig:             query: null,
// #KB1 i:8 orig:             ngContent: null,
          };// #NOT DELETABLE i:4027 orig: 8
        }// #KB1 END i:4040 orig: 
        function Nn(e, t, n) {// #QA3 i:4064 orig: 8
// #KB1 i:8 orig:           var r;
          var o = n.element;// #NOT DELETABLE i:4079 orig: 8
          var i = e.root.selectorOrNode;// #NOT DELETABLE i:4088 orig: 8
          var s = e.renderer;// #NOT DELETABLE i:4091 orig: 8
          if (e.parent || !i) {// #NOT DELETABLE i:4094 orig: 8
            r = o.name ? s.createElement(o.name, o.ns) : s.createComment('');// #NOT DELETABLE i:4103 orig: 8
            var u = gn(e, t, n);// #NOT DELETABLE i:4106 orig: 8
// #KB1 i:8 orig:             if (u) {
              s.appendChild(u, r);// #NOT DELETABLE i:4133 orig: 8
// #KB1 i:8 orig:             }
          } else {// #NOT DELETABLE i:4151 orig: 8
            r = s.selectRootElement(i);// #NOT DELETABLE i:4154 orig: 8
          }// #NOT DELETABLE i:4157 orig: 8
// #KB1 i:8 orig:           if (o.attrs) {
            for (var a = 0; a < o.attrs.length; a++) {// #NOT DELETABLE i:4233 orig: 8
              var c = o.attrs[a];// #NOT DELETABLE i:4253 orig: 8
              s.setAttribute(r, c[1], c[2], c[0]);// #NOT DELETABLE i:4256 orig: 8
            }// #NOT DELETABLE i:4268 orig: 8
// #KB1 i:8 orig:           }
          return r;// #NOT DELETABLE i:4293 orig: 8
        }// #KB1 END i:4304 orig: 
// #DB6 START i:8 orig:         function Sn(e, t, n, r) {//#RF [object Object]
// #DB i:8 orig:           for (var o = 0; o < n.outputs.length; o++) {
// #DB i:8 orig:             var i = n.outputs[o];
// #DB i:8 orig:             var s = An(
// #DB i:8 orig:               e,
// #DB i:8 orig:               n.nodeIndex,
// #DB i:8 orig:               ((d = i.eventName), (l = i.target) ? l + ':' + d : d)
// #DB i:8 orig:             );
// #DB i:8 orig:             var u = i.target;
// #DB i:8 orig:             var a = e;
// #DB i:8 orig:             if (i.target === 'component') {
// #DB i:8 orig:               u = null;
// #DB i:8 orig:               a = t;
// #DB i:8 orig:             }
// #DB i:8 orig:             var c = a.renderer.listen(u || r, i.eventName, s);
// #DB i:8 orig:             e.disposables[n.outputIndex + o] = c;
// #DB i:8 orig:           }
// #DB i:8 orig:           var l;
// #DB i:8 orig:           var d;
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function An(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           return function(r) {
// #DB i:8 orig:             return cn(e, t, n, r);
// #DB i:8 orig:           };
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Mn(e, t, n, r) {//#RF [object Object]
// #DB i:8 orig:           if (!on(e, t, n, r)) {
// #DB i:8 orig:             return false;
// #DB i:8 orig:           }
// #DB i:8 orig:           var o = t.bindings[n];
// #DB i:8 orig:           var i = zt(e, t.nodeIndex);
// #DB i:8 orig:           var s = i.renderElement;
// #DB i:8 orig:           var u = o.name;
// #DB i:8 orig:           switch (15 & o.flags) {
// #DB i:8 orig:             case 1:
// #DB i:8 orig:               (function(e, t, n, r, o, i) {
// #DB i:8 orig:                 var s = t.securityContext;
// #DB i:8 orig:                 var u = s ? e.root.sanitizer.sanitize(s, i) : i;
// #DB i:8 orig:                 u = u != null ? u.toString() : null;
// #DB i:8 orig:                 var a = e.renderer;
// #DB i:8 orig:                 if (i == null) {
// #DB i:8 orig:                   a.removeAttribute(n, o, r);
// #DB i:8 orig:                 } else {
// #DB i:8 orig:                   a.setAttribute(n, o, u, r);
// #DB i:8 orig:                 }
// #DB i:8 orig:               })(e, o, s, o.ns, u, r);
// #DB i:8 orig:               break;
// #DB i:8 orig:             case 2:
// #DB i:8 orig:               (function(e, t, n, r) {
// #DB i:8 orig:                 var o = e.renderer;
// #DB i:8 orig:                 if (r) {
// #DB i:8 orig:                   o.addClass(t, n);
// #DB i:8 orig:                 } else {
// #DB i:8 orig:                   o.removeClass(t, n);
// #DB i:8 orig:                 }
// #DB i:8 orig:               })(e, s, u, r);
// #DB i:8 orig:               break;
// #DB i:8 orig:             case 4:
// #DB i:8 orig:               (function(e, t, n, r, o) {
// #DB i:8 orig:                 var i = e.root.sanitizer.sanitize(Vt.STYLE, o);
// #DB i:8 orig:                 if (i == null) {
// #DB i:8 orig:                   i = null;
// #DB i:8 orig:                 } else {
// #DB i:8 orig:                   i = i.toString();
// #DB i:8 orig:                   var s = t.suffix;
// #DB i:8 orig:                   if (s != null) {
// #DB i:8 orig:                     i += s;
// #DB i:8 orig:                   }
// #DB i:8 orig:                 }
// #DB i:8 orig:                 var u = e.renderer;
// #DB i:8 orig:                 if (i == null) {
// #DB i:8 orig:                   u.removeStyle(n, r);
// #DB i:8 orig:                 } else {
// #DB i:8 orig:                   u.setStyle(n, r, i);
// #DB i:8 orig:                 }
// #DB i:8 orig:               })(e, o, s, u, r);
// #DB i:8 orig:               break;
// #DB i:8 orig:             case 8:
// #DB i:8 orig:               (function(e, t, n, r, o) {
// #DB i:8 orig:                 var i = t.securityContext;
// #DB i:8 orig:                 var s = i ? e.root.sanitizer.sanitize(i, o) : o;
// #DB i:8 orig:                 e.renderer.setProperty(n, r, s);
// #DB i:8 orig:               })(
// #DB i:8 orig:                 33554432 & t.flags && 32 & o.flags ? i.componentView : e,
// #DB i:8 orig:                 o,
// #DB i:8 orig:                 s,
// #DB i:8 orig:                 u,
// #DB i:8 orig:                 r
// #DB i:8 orig:               );
// #DB i:8 orig:           }
// #DB i:8 orig:           return true;
// #DB END i: orig:         }
        function jn(e, t, n, r) {// #KBQ i:4830 orig: 8
// #KB1 i:8 orig:           n = N(n);
          return { index: -1, deps: yn(r, I(t)), flags: e, token: t, value: n };// #NOT DELETABLE i:4835 orig: 8
        }// #KB1 END i:4836 orig: 
        function Vn(e) {// #QA5 i:4837 orig: 8
// #KB1 i:8 orig:           var t = {};
          for (var n = 0; n < e.length; n++) {// #NOT DELETABLE i:4839 orig: 8
            var r = e[n];// #NOT DELETABLE i:4844 orig: 8
            r.index = n;// #NOT DELETABLE i:4847 orig: 8
            t[Xt(r.token)] = r;// #NOT DELETABLE i:4848 orig: 8
          }// #NOT DELETABLE i:4852 orig: 8
          return { factory: null, providersByKey: t, providers: e };// #NOT DELETABLE i:4853 orig: 8
        }// #KB1 END i:4860 orig: 
        function Hn(e, t, n) {// #KBQ i:4861 orig: 8
// #KB1 i:8 orig:           if (n === void 0) {
// #KB1 i:8 orig:             n = P.THROW_IF_NOT_FOUND;
// #KB1 i:8 orig:           }
          if (8 & t.flags) {// #NOT DELETABLE i:4865 orig: 8
            return t.token;// #NOT DELETABLE i:4869 orig: 8
          }// #NOT DELETABLE i:4879 orig: 8
          if (2 & t.flags) {// #NOT DELETABLE i:4880 orig: 8
            n = null;// #NOT DELETABLE i:4881 orig: 8
          }// #NOT DELETABLE i:4882 orig: 8
          if (1 & t.flags) {// #NOT DELETABLE i:4883 orig: 8
            return e._parent.get(t.token, n);// #NOT DELETABLE i:4884 orig: 8
          }// #NOT DELETABLE i:4885 orig: 8
          var r = t.tokenKey;// #NOT DELETABLE i:4888 orig: 8
          switch (r) {// #NOT DELETABLE i:4891 orig: 8
// #KB1 i:8 orig:             case Dn:
            case Rn:// #NOT DELETABLE i:4897 orig: 8
              return e;// #NOT DELETABLE i:4903 orig: 8
          }// #NOT DELETABLE i:4904 orig: 8
          var o = e._def.providersByKey[r];// #NOT DELETABLE i:4905 orig: 8
          if (o) {// #NOT DELETABLE i:4906 orig: 8
            var i = e._providers[o.index];// #NOT DELETABLE i:4907 orig: 8
            if (i === void 0) {// #NOT DELETABLE i:4908 orig: 8
              i = e._providers[o.index] = Ln(e, o);// #NOT DELETABLE i:4911 orig: 8
            }// #NOT DELETABLE i:4912 orig: 8
// #KB1 i:8 orig:             if (i === Pn) {
// #KB1 i:8 orig:               return;
// #KB1 i:8 orig:             } else {
              return i;// #NOT DELETABLE i:4919 orig: 8
// #KB1 i:8 orig:             }
          }// #NOT DELETABLE i:4922 orig: 8
          return e._parent.get(t.token, n);// #NOT DELETABLE i:4923 orig: 8
        }// #KB1 END i:4924 orig: 
        function Ln(e, t) {// #KBQ i:4931 orig: 8
          var n;// #NOT DELETABLE i:4931 orig: 8
          switch (201347067 & t.flags) {// #NOT DELETABLE i:4932 orig: 8
            case 512:// #NOT DELETABLE i:4933 orig: 8
              n = (function(e, t, n) {// #NOT DELETABLE i:4936 orig: 8
                var r = n.length;// #NOT DELETABLE i:4937 orig: 8
// #KB1 i:8 orig:                 switch (r) {
// #KB1 i:8 orig:                   case 0:
// #KB1 i:8 orig:                     return new t();
// #KB1 i:8 orig:                   case 1:
// #KB1 i:8 orig:                     return new t(Hn(e, n[0]));
// #KB1 i:8 orig:                   case 2:
// #KB1 i:8 orig:                     return new t(Hn(e, n[0]), Hn(e, n[1]));
// #KB1 i:8 orig:                   case 3:
// #KB1 i:8 orig:                     return new t(Hn(e, n[0]), Hn(e, n[1]), Hn(e, n[2]));
// #KB1 i:8 orig:                   default:
                    var o = new Array(r);// #NOT DELETABLE i:4960 orig: 8
                    for (var i = 0; i < r; i++) {// #NOT DELETABLE i:4964 orig: 8
                      o[i] = Hn(e, n[i]);// #NOT DELETABLE i:4965 orig: 8
                    }// #NOT DELETABLE i:4968 orig: 8
                    return new (t.bind.apply(t, [void 0].concat(o)))();// #NOT DELETABLE i:4971 orig: 8
// #KB1 i:8 orig:                 }
              })(e, t.value, t.deps);// #NOT DELETABLE i:4978 orig: 8
              break;// #NOT DELETABLE i:4981 orig: 8
            case 1024:// #NOT DELETABLE i:4984 orig: 8
              n = (function(e, t, n) {// #NOT DELETABLE i:4987 orig: 8
                var r = n.length;// #NOT DELETABLE i:4990 orig: 8
// #KB1 i:8 orig:                 switch (r) {
// #KB1 i:8 orig:                   case 0:
// #KB1 i:8 orig:                     return t();
// #KB1 i:8 orig:                   case 1:
// #KB1 i:8 orig:                     return t(Hn(e, n[0]));
// #KB1 i:8 orig:                   case 2:
// #KB1 i:8 orig:                     return t(Hn(e, n[0]), Hn(e, n[1]));
// #KB1 i:8 orig:                   case 3:
// #KB1 i:8 orig:                     return t(Hn(e, n[0]), Hn(e, n[1]), Hn(e, n[2]));
// #KB1 i:8 orig:                   default:
                    var o = Array(r);// #NOT DELETABLE i:5055 orig: 8
                    for (var i = 0; i < r; i++) {// #NOT DELETABLE i:5060 orig: 8
                      o[i] = Hn(e, n[i]);// #NOT DELETABLE i:5069 orig: 8
                    }// #NOT DELETABLE i:5079 orig: 8
                    return t.apply(void 0, o);// #NOT DELETABLE i:5082 orig: 8
// #KB1 i:8 orig:                 }
              })(e, t.value, t.deps);// #NOT DELETABLE i:5085 orig: 8
              break;// #NOT DELETABLE i:5092 orig: 8
            case 2048:// #NOT DELETABLE i:5093 orig: 8
              n = Hn(e, t.deps[0]);// #NOT DELETABLE i:5094 orig: 8
              break;// #NOT DELETABLE i:5096 orig: 8
// #KB1 i:8 orig:             case 256:
// #KB1 i:8 orig:               n = t.value;
          }// #NOT DELETABLE i:5102 orig: 8
// #KB1 i:8 orig:           if (n === void 0) {
// #KB1 i:8 orig:             return Pn;
// #KB1 i:8 orig:           } else {
            return n;// #NOT DELETABLE i:5121 orig: 8
// #KB1 i:8 orig:           }
        }// #KB1 END i:5134 orig: 
// #DB6 START i:8 orig:         function Fn(e, t) {//#RF [object Object]
// #DB i:8 orig:           var n = e.viewContainer._embeddedViews;
// #DB i:8 orig:           if (t == null || t >= n.length) {
// #DB i:8 orig:             t = n.length - 1;
// #DB i:8 orig:           }
// #DB i:8 orig:           if (t < 0) {
// #DB i:8 orig:             return null;
// #DB i:8 orig:           }
// #DB i:8 orig:           var r = n[t];
// #DB i:8 orig:           r.viewContainerParent = null;
// #DB i:8 orig:           Zn(n, t);
// #DB i:8 orig:           Qt.dirtyParentQueries(r);
// #DB i:8 orig:           zn(r);
// #DB i:8 orig:           return r;
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Bn(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           var r = t ? fn(t, t.def.lastRenderRootNode) : e.renderElement;
// #DB i:8 orig:           _n(n, 2, n.renderer.parentNode(r), n.renderer.nextSibling(r), void 0);
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function zn(e) {//#RF [object Object]
// #DB i:8 orig:           _n(e, 3, null, null, void 0);
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Un(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           if (t >= e.length) {
// #DB i:8 orig:             e.push(n);
// #DB i:8 orig:           } else {
// #DB i:8 orig:             e.splice(t, 0, n);
// #DB i:8 orig:           }
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Zn(e, t) {//#RF [object Object]
// #DB i:8 orig:           if (t >= e.length - 1) {
// #DB i:8 orig:             e.pop();
// #DB i:8 orig:           } else {
// #DB i:8 orig:             e.splice(t, 1);
// #DB i:8 orig:           }
// #DB END i: orig:         }
        function Qn(e, t, n, r, o, i) {// #QB i:5240 orig: 
          return new Gn(e, t, n, r, o, i);// #QA1 i:5240 orig: 
        }// #QA1 i:5240 orig: 
// #DB6 START i:8 orig:         function Yn(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           return new Kn(e, t, n);
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Jn(e) {//#RF [object Object]
// #DB i:8 orig:           return new Xn(e);
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function $n(e, t) {//#RF [object Object]
// #DB i:8 orig:           return new er(e, t);
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function tr(e, t) {//#RF [object Object]
// #DB i:8 orig:           return new nr(e, t);
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function rr(e) {//#RF [object Object]
// #DB i:8 orig:           return new or(e.renderer);
// #DB END i: orig:         }
        function ir(e, t, n, r) {// #QB i:5270 orig: 
          return new sr(e, t, n, r);// #QA1 i:5270 orig: 
        }// #QA1 i:5270 orig: 
        function hr(e, t, n, r, o, i, s, u) {// #QA3 i:5270 orig: 8
// #KB1 i:8 orig:           var a = [];
// #KB1 i:8 orig:           if (s) {
// #KB1 i:8 orig:             for (var c in s) {
// #KB1 i:8 orig:               var l = s[c];
// #KB1 i:8 orig:               a[l[0]] = {
// #KB1 i:8 orig:                 flags: 8,
// #KB1 i:8 orig:                 name: c,
// #KB1 i:8 orig:                 nonMinifiedName: l[1],
// #KB1 i:8 orig:                 ns: null,
// #KB1 i:8 orig:                 securityContext: null,
// #KB1 i:8 orig:                 suffix: null,
// #KB1 i:8 orig:               };
// #KB1 i:8 orig:             }
// #KB1 i:8 orig:           }
// #KB1 i:8 orig:           var d = [];
// #KB1 i:8 orig:           if (u) {
// #KB1 i:8 orig:             for (var f in u) {
// #KB1 i:8 orig:               d.push({ type: 1, propName: f, target: null, eventName: u[f] });
// #KB1 i:8 orig:             }
// #KB1 i:8 orig:           }
          return (function(e, t, n, r, o, i, s, u, a) {// #NOT DELETABLE i:5331 orig: 8
// #KB1 i:8 orig:             var c = vn(n);
// #KB1 i:8 orig:             var l = c.matchedQueries;
// #KB1 i:8 orig:             var d = c.references;
// #KB1 i:8 orig:             var f = c.matchedQueryIds;
// #KB1 i:8 orig:             if (!a) {
// #KB1 i:8 orig:               a = [];
// #KB1 i:8 orig:             }
// #KB1 i:8 orig:             if (!u) {
// #KB1 i:8 orig:               u = [];
// #KB1 i:8 orig:             }
// #KB1 i:8 orig:             i = N(i);
// #KB1 i:8 orig:             var p = yn(s, I(o));
            return {// #NOT DELETABLE i:5364 orig: 8
// #KB1 i:8 orig:               nodeIndex: -1,
// #KB1 i:8 orig:               parent: null,
// #KB1 i:8 orig:               renderParent: null,
// #KB1 i:8 orig:               bindingIndex: -1,
// #KB1 i:8 orig:               outputIndex: -1,
// #KB1 i:8 orig:               checkIndex: e,
              flags: t,// #NOT DELETABLE i:5377 orig: 8
// #KB1 i:8 orig:               childFlags: 0,
// #KB1 i:8 orig:               directChildFlags: 0,
// #KB1 i:8 orig:               childMatchedQueries: 0,
// #KB1 i:8 orig:               matchedQueries: l,
// #KB1 i:8 orig:               matchedQueryIds: f,
// #KB1 i:8 orig:               references: d,
              ngContentIndex: -1,// #NOT DELETABLE i:5393 orig: 8
// #KB1 i:8 orig:               childCount: r,
// #KB1 i:8 orig:               bindings: u,
// #KB1 i:8 orig:               bindingFlags: In(u),
// #KB1 i:8 orig:               outputs: a,
// #KB1 i:8 orig:               element: null,
// #KB1 i:8 orig:               provider: { token: o, value: i, deps: p },
// #KB1 i:8 orig:               text: null,
// #KB1 i:8 orig:               query: null,
// #KB1 i:8 orig:               ngContent: null,
            };// #NOT DELETABLE i:5439 orig: 8
          })(e, (t |= 16384), n, r, o, o, i, a, d);// #NOT DELETABLE i:5440 orig: 8
        }// #KB1 END i:5441 orig: 
// #DB6 START i:8 orig:         function vr(e, t) {//#RF [object Object]
// #DB i:8 orig:           return br(e, t);
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function yr(e, t) {//#RF [object Object]
// #DB i:8 orig:           for (var n = e; n.parent && !pn(n); ) {
// #DB i:8 orig:             n = n.parent;
// #DB i:8 orig:           }
// #DB i:8 orig:           return _r(n.parent, dn(n), true, t.provider.value, t.provider.deps);
// #DB END i: orig:         }
        function gr(e, t) {// #KFB3 START i:5456 orig: 8//#RF [object Object]
// #KB1 i:8 orig:           var n = _r(
// #KB1 i:8 orig:             e,
// #KB1 i:8 orig:             t.parent,
// #KB1 i:8 orig:             (32768 & t.flags) > 0,
// #KB1 i:8 orig:             t.provider.value,
// #KB1 i:8 orig:             t.provider.deps
// #KB1 i:8 orig:           );
// #KB1 i:8 orig:           if (t.outputs.length) {
// #KB1 i:8 orig:             for (var r = 0; r < t.outputs.length; r++) {
// #KB1 i:8 orig:               var o = t.outputs[r];
// #KB1 i:8 orig:               var i = n[o.propName].subscribe(
// #KB1 i:8 orig:                 mr(e, t.parent.nodeIndex, o.eventName)
// #KB1 i:8 orig:               );
// #KB1 i:8 orig:               e.disposables[t.outputIndex + r] = i.unsubscribe.bind(i);
// #KB1 i:8 orig:             }
// #KB1 i:8 orig:           }
// #KB1 i:8 orig:           return n;
        }// #KB1 END i:5487 orig: 
// #DB6 START i:8 orig:         function mr(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           return function(r) {
// #DB i:8 orig:             return cn(e, t, n, r);
// #DB i:8 orig:           };
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function br(e, t) {//#RF [object Object]
// #DB i:8 orig:           var n = (8192 & t.flags) > 0;
// #DB i:8 orig:           var r = t.provider;
// #DB i:8 orig:           switch (201347067 & t.flags) {
// #DB i:8 orig:             case 512:
// #DB i:8 orig:               return _r(e, t.parent, n, r.value, r.deps);
// #DB i:8 orig:             case 1024:
// #DB i:8 orig:               return (function(e, t, n, r, o) {
// #DB i:8 orig:                 var i = o.length;
// #DB i:8 orig:                 switch (i) {
// #DB i:8 orig:                   case 0:
// #DB i:8 orig:                     return r();
// #DB i:8 orig:                   case 1:
// #DB i:8 orig:                     return r(Cr(e, t, n, o[0]));
// #DB i:8 orig:                   case 2:
// #DB i:8 orig:                     return r(Cr(e, t, n, o[0]), Cr(e, t, n, o[1]));
// #DB i:8 orig:                   case 3:
// #DB i:8 orig:                     return r(
// #DB i:8 orig:                       Cr(e, t, n, o[0]),
// #DB i:8 orig:                       Cr(e, t, n, o[1]),
// #DB i:8 orig:                       Cr(e, t, n, o[2])
// #DB i:8 orig:                     );
// #DB i:8 orig:                   default:
// #DB i:8 orig:                     var s = Array(i);
// #DB i:8 orig:                     for (var u = 0; u < i; u++) {
// #DB i:8 orig:                       s[u] = Cr(e, t, n, o[u]);
// #DB i:8 orig:                     }
// #DB i:8 orig:                     return r.apply(void 0, s);
// #DB i:8 orig:                 }
// #DB i:8 orig:               })(e, t.parent, n, r.value, r.deps);
// #DB i:8 orig:             case 2048:
// #DB i:8 orig:               return Cr(e, t.parent, n, r.deps[0]);
// #DB i:8 orig:             case 256:
// #DB i:8 orig:               return r.value;
// #DB i:8 orig:           }
// #DB END i: orig:         }
        function _r(e, t, n, r, o) {// #NOT DELETABLE i:5580 orig: //#RF [object Object]
          var i = o.length;// #QA1 i:5580 orig: 
          switch (i) {// #QA1 i:5580 orig: 
            case 0:// #QA1 i:5580 orig: 
              return new r();// #QA1 i:5580 orig: 
            case 1:// #QA1 i:5580 orig: 
              return new r(Cr(e, t, n, o[0]));// #QA1 i:5580 orig: 
            case 2:// #QA1 i:5580 orig: 
              return new r(Cr(e, t, n, o[0]), Cr(e, t, n, o[1]));// #QA1 i:5580 orig: 
            case 3:// #QB i:5580 orig: 
              return new r(// #QB i:5580 orig: 
                Cr(e, t, n, o[0]),// #QB i:5580 orig: 
                Cr(e, t, n, o[1]),// #QB i:5580 orig: 
                Cr(e, t, n, o[2])// #QB i:5580 orig: 
              );// #QA1 i:5580 orig: 
            default:// #QA1 i:5580 orig: 
              var s = new Array(i);// #QA1 i:5580 orig: 
              for (var u = 0; u < i; u++) {// #QA1 i:5580 orig: 
                s[u] = Cr(e, t, n, o[u]);// #QA1 i:5580 orig: 
              }// #QA1 i:5580 orig: 
              return new (r.bind.apply(r, [void 0].concat(s)))();// #QA1 i:5580 orig: 
          }// #QA1 i:5580 orig: 
        }// #QA1 i:5580 orig: 
        function Cr(e, t, n, r, o) {// #KFB3 START i:5580 orig: 8//#RF [object Object]
// #KB1 i:8 orig:           if (o === void 0) {
// #KB1 i:8 orig:             o = P.THROW_IF_NOT_FOUND;
// #KB1 i:8 orig:           }
// #KB1 i:8 orig:           if (8 & r.flags) {
// #KB1 i:8 orig:             return r.token;
// #KB1 i:8 orig:           }
// #KB1 i:8 orig:           var i = e;
// #KB1 i:8 orig:           if (2 & r.flags) {
// #KB1 i:8 orig:             o = null;
// #KB1 i:8 orig:           }
// #KB1 i:8 orig:           var s = r.tokenKey;
// #KB1 i:8 orig:           if (s === fr) {
// #KB1 i:8 orig:             n = !!t && !!t.element.componentView;
// #KB1 i:8 orig:           }
// #KB1 i:8 orig:           for (t && 1 & r.flags && ((n = false), (t = t.parent)); e; ) {
// #KB1 i:8 orig:             if (t) {
// #KB1 i:8 orig:               switch (s) {
// #KB1 i:8 orig:                 case ur:
// #KB1 i:8 orig:                   return rr(Er(e, t, n));
// #KB1 i:8 orig:                 case ar:
// #KB1 i:8 orig:                   return Er(e, t, n).renderer;
// #KB1 i:8 orig:                 case cr:
// #KB1 i:8 orig:                   return new tt(zt(e, t.nodeIndex).renderElement);
// #KB1 i:8 orig:                 case lr:
// #KB1 i:8 orig:                   return zt(e, t.nodeIndex).viewContainer;
// #KB1 i:8 orig:                 case dr:
// #KB1 i:8 orig:                   if (t.element.template) {
// #KB1 i:8 orig:                     return zt(e, t.nodeIndex).template;
// #KB1 i:8 orig:                   }
// #KB1 i:8 orig:                   break;
// #KB1 i:8 orig:                 case fr:
// #KB1 i:8 orig:                   return Jn(Er(e, t, n));
// #KB1 i:8 orig:                 case pr:
// #KB1 i:8 orig:                   return tr(e, t);
// #KB1 i:8 orig:                 default:
// #KB1 i:8 orig:                   var u = (n
// #KB1 i:8 orig:                     ? t.element.allProviders
// #KB1 i:8 orig:                     : t.element.publicProviders)[s];
// #KB1 i:8 orig:                   if (u) {
// #KB1 i:8 orig:                     var a = Ut(e, u.nodeIndex);
// #KB1 i:8 orig:                     if (!a) {
// #KB1 i:8 orig:                       a = { instance: br(e, u) };
// #KB1 i:8 orig:                       e.nodes[u.nodeIndex] = a;
// #KB1 i:8 orig:                     }
// #KB1 i:8 orig:                     return a.instance;
// #KB1 i:8 orig:                   }
// #KB1 i:8 orig:               }
// #KB1 i:8 orig:             }
// #KB1 i:8 orig:             n = pn(e);
// #KB1 i:8 orig:             t = dn(e);
// #KB1 i:8 orig:             e = e.parent;
// #KB1 i:8 orig:           }
// #KB1 i:8 orig:           var c = i.root.injector.get(r.token, wr);
// #KB1 i:8 orig:           if (c !== wr || o === wr) {
// #KB1 i:8 orig:             return c;
// #KB1 i:8 orig:           } else {
// #KB1 i:8 orig:             return i.root.ngModule.injector.get(r.token, o);
// #KB1 i:8 orig:           }
        }// #KB1 END i:5691 orig: 
// #DB6 START i:8 orig:         function Er(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           var r;
// #DB i:8 orig:           if (n) {
// #DB i:8 orig:             r = zt(e, t.nodeIndex).componentView;
// #DB i:8 orig:           } else {
// #DB i:8 orig:             for (r = e; r.parent && !pn(r); ) {
// #DB i:8 orig:               r = r.parent;
// #DB i:8 orig:             }
// #DB i:8 orig:           }
// #DB i:8 orig:           return r;
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function xr(e, t, n, r, o, i) {//#RF [object Object]
// #DB i:8 orig:           if (32768 & n.flags) {
// #DB i:8 orig:             var s = zt(e, n.parent.nodeIndex).componentView;
// #DB i:8 orig:             if (2 & s.def.flags) {
// #DB i:8 orig:               s.state |= 8;
// #DB i:8 orig:             }
// #DB i:8 orig:           }
// #DB i:8 orig:           t.instance[n.bindings[r].name] = o;
// #DB i:8 orig:           if (524288 & n.flags) {
// #DB i:8 orig:             i = i || {};
// #DB i:8 orig:             var u = ft.unwrap(e.oldValues[n.bindingIndex + r]);
// #DB i:8 orig:             i[n.bindings[r].nonMinifiedName] = new pt(u, o, (2 & e.state) != 0);
// #DB i:8 orig:           }
// #DB i:8 orig:           e.oldValues[n.bindingIndex + r] = o;
// #DB i:8 orig:           return i;
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Tr(e, t) {//#RF [object Object]
// #DB i:8 orig:           if (e.def.nodeFlags & t) {
// #DB i:8 orig:             var n = e.def.nodes;
// #DB i:8 orig:             var r = 0;
// #DB i:8 orig:             for (var o = 0; o < n.length; o++) {
// #DB i:8 orig:               var i = n[o];
// #DB i:8 orig:               var s = i.parent;
// #DB i:8 orig:               if (!s && i.flags & t) {
// #DB i:8 orig:                 Ir(e, o, i.flags & t, r++);
// #DB i:8 orig:               }
// #DB i:8 orig:               for (
// #DB i:8 orig:                 (i.childFlags & t) == 0 && (o += i.childCount);
// #DB i:8 orig:                 s && 1 & s.flags && o === s.nodeIndex + s.childCount;
// #DB i:8 orig: 
// #DB i:8 orig:               ) {
// #DB i:8 orig:                 if (s.directChildFlags & t) {
// #DB i:8 orig:                   r = kr(e, s, t, r);
// #DB i:8 orig:                 }
// #DB i:8 orig:                 s = s.parent;
// #DB i:8 orig:               }
// #DB i:8 orig:             }
// #DB i:8 orig:           }
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function kr(e, t, n, r) {//#RF [object Object]
// #DB i:8 orig:           for (var o = t.nodeIndex + 1; o <= t.nodeIndex + t.childCount; o++) {
// #DB i:8 orig:             var i = e.def.nodes[o];
// #DB i:8 orig:             if (i.flags & n) {
// #DB i:8 orig:               Ir(e, o, i.flags & n, r++);
// #DB i:8 orig:             }
// #DB i:8 orig:             o += i.childCount;
// #DB i:8 orig:           }
// #DB i:8 orig:           return r;
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Ir(e, t, n, r) {//#RF [object Object]
// #DB i:8 orig:           var o = Ut(e, t);
// #DB i:8 orig:           if (o) {
// #DB i:8 orig:             var i = o.instance;
// #DB i:8 orig:             if (i) {
// #DB i:8 orig:               Qt.setCurrentNode(e, t);
              if (1048576 & n && Ft(e, 512, r)) {// #NOT DELETABLE i:5819 orig: 8
// #DB i:8 orig:                 i.ngAfterContentInit();
              }// #NOT DELETABLE i:5822 orig: 8
// #DB i:8 orig:               if (2097152 & n) {
// #DB i:8 orig:                 i.ngAfterContentChecked();
// #DB i:8 orig:               }
// #DB i:8 orig:               if (4194304 & n && Ft(e, 768, r)) {
// #DB i:8 orig:                 i.ngAfterViewInit();
// #DB i:8 orig:               }
// #DB i:8 orig:               if (8388608 & n) {
// #DB i:8 orig:                 i.ngAfterViewChecked();
// #DB i:8 orig:               }
// #DB i:8 orig:               if (131072 & n) {
// #DB i:8 orig:                 i.ngOnDestroy();
// #DB i:8 orig:               }
// #DB i:8 orig:             }
// #DB i:8 orig:           }
// #DB END i: orig:         }
        function Or(e) {// #KFB3 START i:5847 orig: 8//#RF [object Object]
// #KB1 i:8 orig:           for (var t = e.def.nodeMatchedQueries; e.parent && hn(e); ) {
// #KB1 i:8 orig:             var n = e.parentNodeDef;
// #KB1 i:8 orig:             e = e.parent;
// #KB1 i:8 orig:             var r = n.nodeIndex + n.childCount;
// #KB1 i:8 orig:             for (var o = 0; o <= r; o++) {
// #KB1 i:8 orig:               if (
// #KB1 i:8 orig:                 67108864 & (i = e.def.nodes[o]).flags &&
// #KB1 i:8 orig:                 536870912 & i.flags &&
// #KB1 i:8 orig:                 (i.query.filterId & t) === i.query.filterId
// #KB1 i:8 orig:               ) {
// #KB1 i:8 orig:                 Wt(e, o).setDirty();
// #KB1 i:8 orig:               }
// #KB1 i:8 orig:               if (
// #KB1 i:8 orig:                 (!!(1 & i.flags) && !!(o + i.childCount < n.nodeIndex)) ||
// #KB1 i:8 orig:                 !(67108864 & i.childFlags) ||
// #KB1 i:8 orig:                 !(536870912 & i.childFlags)
// #KB1 i:8 orig:               ) {
// #KB1 i:8 orig:                 o += i.childCount;
// #KB1 i:8 orig:               }
// #KB1 i:8 orig:             }
// #KB1 i:8 orig:           }
// #KB1 i:8 orig:           if (134217728 & e.def.nodeFlags) {
// #KB1 i:8 orig:             for (o = 0; o < e.def.nodes.length; o++) {
// #KB1 i:8 orig:               var i;
// #KB1 i:8 orig:               if (
// #KB1 i:8 orig:                 134217728 & (i = e.def.nodes[o]).flags &&
// #KB1 i:8 orig:                 536870912 & i.flags
// #KB1 i:8 orig:               ) {
// #KB1 i:8 orig:                 Wt(e, o).setDirty();
// #KB1 i:8 orig:               }
// #KB1 i:8 orig:               o += i.childCount;
// #KB1 i:8 orig:             }
// #KB1 i:8 orig:           }
        }// #KB1 END i:5903 orig: 
// #DB6 START i:8 orig:         function Nr(e, t) {//#RF [object Object]
// #DB i:8 orig:           var n = Wt(e, t.nodeIndex);
// #DB i:8 orig:           if (n.dirty) {
// #DB i:8 orig:             var r;
// #DB i:8 orig:             var o = void 0;
// #DB i:8 orig:             if (67108864 & t.flags) {
// #DB i:8 orig:               var i = t.parent.parent;
// #DB i:8 orig:               o = Sr(e, i.nodeIndex, i.nodeIndex + i.childCount, t.query, []);
// #DB i:8 orig:               r = Ut(e, t.parent.nodeIndex).instance;
// #DB i:8 orig:             } else if (134217728 & t.flags) {
// #DB i:8 orig:               o = Sr(e, 0, e.def.nodes.length - 1, t.query, []);
// #DB i:8 orig:               r = e.component;
// #DB i:8 orig:             }
// #DB i:8 orig:             n.reset(o);
// #DB i:8 orig:             var s = t.query.bindings;
// #DB i:8 orig:             var u = false;
// #DB i:8 orig:             for (var a = 0; a < s.length; a++) {
// #DB i:8 orig:               var c = s[a];
// #DB i:8 orig:               var l = void 0;
// #DB i:8 orig:               switch (c.bindingType) {
// #DB i:8 orig:                 case 0:
// #DB i:8 orig:                   l = n.first;
// #DB i:8 orig:                   break;
// #DB i:8 orig:                 case 1:
// #DB i:8 orig:                   l = n;
// #DB i:8 orig:                   u = true;
// #DB i:8 orig:               }
// #DB i:8 orig:               r[c.propName] = l;
// #DB i:8 orig:             }
// #DB i:8 orig:             if (u) {
// #DB i:8 orig:               n.notifyOnChanges();
// #DB i:8 orig:             }
// #DB i:8 orig:           }
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Sr(e, t, n, r, o) {//#RF [object Object]
// #DB i:8 orig:           for (var i = t; i <= n; i++) {
// #DB i:8 orig:             var s = e.def.nodes[i];
// #DB i:8 orig:             var u = s.matchedQueries[r.id];
// #DB i:8 orig:             if (u != null) {
// #DB i:8 orig:               o.push(Ar(e, s, u));
// #DB i:8 orig:             }
// #DB i:8 orig:             if (
// #DB i:8 orig:               1 & s.flags &&
// #DB i:8 orig:               s.element.template &&
// #DB i:8 orig:               (s.element.template.nodeMatchedQueries & r.filterId) ===
// #DB i:8 orig:                 r.filterId
// #DB i:8 orig:             ) {
// #DB i:8 orig:               var a = zt(e, i);
// #DB i:8 orig:               if ((s.childMatchedQueries & r.filterId) === r.filterId) {
// #DB i:8 orig:                 Sr(e, i + 1, i + s.childCount, r, o);
// #DB i:8 orig:                 i += s.childCount;
// #DB i:8 orig:               }
// #DB i:8 orig:               if (16777216 & s.flags) {
// #DB i:8 orig:                 var c = a.viewContainer._embeddedViews;
// #DB i:8 orig:                 for (var l = 0; l < c.length; l++) {
// #DB i:8 orig:                   var d = c[l];
// #DB i:8 orig:                   var f = ln(d);
// #DB i:8 orig:                   if (f && f === a) {
// #DB i:8 orig:                     Sr(d, 0, d.def.nodes.length - 1, r, o);
// #DB i:8 orig:                   }
// #DB i:8 orig:                 }
// #DB i:8 orig:               }
// #DB i:8 orig:               var p = a.template._projectedViews;
// #DB i:8 orig:               if (p) {
// #DB i:8 orig:                 for (l = 0; l < p.length; l++) {
// #DB i:8 orig:                   var h = p[l];
// #DB i:8 orig:                   Sr(h, 0, h.def.nodes.length - 1, r, o);
// #DB i:8 orig:                 }
// #DB i:8 orig:               }
// #DB i:8 orig:             }
// #DB i:8 orig:             if ((s.childMatchedQueries & r.filterId) !== r.filterId) {
// #DB i:8 orig:               i += s.childCount;
// #DB i:8 orig:             }
// #DB i:8 orig:           }
// #DB i:8 orig:           return o;
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Ar(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           if (n != null) {
// #DB i:8 orig:             switch (n) {
// #DB i:8 orig:               case 1:
// #DB i:8 orig:                 return zt(e, t.nodeIndex).renderElement;
// #DB i:8 orig:               case 0:
// #DB i:8 orig:                 return new tt(zt(e, t.nodeIndex).renderElement);
// #DB i:8 orig:               case 2:
// #DB i:8 orig:                 return zt(e, t.nodeIndex).template;
// #DB i:8 orig:               case 3:
// #DB i:8 orig:                 return zt(e, t.nodeIndex).viewContainer;
// #DB i:8 orig:               case 4:
// #DB i:8 orig:                 return Ut(e, t.nodeIndex).instance;
// #DB i:8 orig:             }
// #DB i:8 orig:           }
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Mr(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           var r = gn(e, t, n);
// #DB i:8 orig:           if (r) {
// #DB i:8 orig:             Cn(e, n.ngContent.index, 1, r, null, void 0);
// #DB i:8 orig:           }
// #DB END i: orig:         }
        function Pr(e, t, n) {// #KFB3 START i:6088 orig: 8//#RF [object Object]
          var r = new Array(n.length - 1);// #NOT DELETABLE i:6088 orig: 8
// #KB1 i:8 orig:           for (var o = 1; o < n.length; o++) {
// #KB1 i:8 orig:             r[o - 1] = {
// #KB1 i:8 orig:               flags: 8,
// #KB1 i:8 orig:               name: null,
// #KB1 i:8 orig:               ns: null,
// #KB1 i:8 orig:               nonMinifiedName: null,
// #KB1 i:8 orig:               securityContext: null,
// #KB1 i:8 orig:               suffix: n[o],
// #KB1 i:8 orig:             };
// #KB1 i:8 orig:           }
          return {// #NOT DELETABLE i:6118 orig: 8
// #KB1 i:8 orig:             nodeIndex: -1,
// #KB1 i:8 orig:             parent: null,
// #KB1 i:8 orig:             renderParent: null,
// #KB1 i:8 orig:             bindingIndex: -1,
// #KB1 i:8 orig:             outputIndex: -1,
// #KB1 i:8 orig:             checkIndex: e,
            flags: 2,// #NOT DELETABLE i:6137 orig: 8
// #KB1 i:8 orig:             childFlags: 0,
// #KB1 i:8 orig:             directChildFlags: 0,
// #KB1 i:8 orig:             childMatchedQueries: 0,
// #KB1 i:8 orig:             matchedQueries: {},
// #KB1 i:8 orig:             matchedQueryIds: 0,
// #KB1 i:8 orig:             references: {},
// #KB1 i:8 orig:             ngContentIndex: t,
// #KB1 i:8 orig:             childCount: 0,
            bindings: r,// #NOT DELETABLE i:6149 orig: 8
// #KB1 i:8 orig:             bindingFlags: 8,
            outputs: [],// #NOT DELETABLE i:6151 orig: 8
// #KB1 i:8 orig:             element: null,
// #KB1 i:8 orig:             provider: null,
            text: { prefix: n[0] },// #NOT DELETABLE i:6155 orig: 8
// #KB1 i:8 orig:             query: null,
// #KB1 i:8 orig:             ngContent: null,
          };// #NOT DELETABLE i:6159 orig: 8
        }// #KB1 END i:6160 orig: 
        function Dr(e, t, n) {// #KBQ i:6161 orig: 8//#RF [object Object]
          var o = e.renderer;// #NOT DELETABLE i:6161 orig: 8
          var r = o.createText(n.text.prefix);// #NOT DELETABLE i:6162 orig: 8
          var i = gn(e, t, n);// #NOT DELETABLE i:6163 orig: 8
          if (i) {// #NOT DELETABLE i:6166 orig: 8
            o.appendChild(i, r);// #NOT DELETABLE i:6167 orig: 8
          }// #NOT DELETABLE i:6169 orig: 8
// #KB1 i:8 orig:           return { renderText: r };
        }// #KB1 END i:6172 orig: 
// #DB6 START i:8 orig:         function Rr(e, t) {//#RF [object Object]
// #DB i:8 orig:           return (e != null ? e.toString() : '') + t.suffix;
// #DB END i: orig:         }
        function jr(e, t, n, r) {// #KB START2 i:6177 orig: 8
// #KB1 i:8 orig:           var o = 0;
// #KB1 i:8 orig:           var i = 0;
          var s = 0;// #NOT DELETABLE i:6179 orig: 8
// #KB1 i:8 orig:           var u = 0;
// #KB1 i:8 orig:           var a = 0;
          var c = null;// #NOT DELETABLE i:6183 orig: 8
          var l = null;// #NOT DELETABLE i:6184 orig: 8
// #KB1 i:8 orig:           var d = false;
// #KB1 i:8 orig:           var f = false;
// #KB1 i:8 orig:           var p = null;
          for (var h = 0; h < t.length; h++) {// #NOT DELETABLE i:6190 orig: 8
            var v = t[h];// #NOT DELETABLE i:6191 orig: 8
            v.nodeIndex = h;// #NOT DELETABLE i:6193 orig: 8
            v.parent = c;// #NOT DELETABLE i:6195 orig: 8
// #KB1 i:8 orig:             v.bindingIndex = o;
// #KB1 i:8 orig:             v.outputIndex = i;
            v.renderParent = l;// #NOT DELETABLE i:6200 orig: 8
            s |= v.flags;// #NOT DELETABLE i:6201 orig: 8
// #KB1 i:8 orig:             a |= v.matchedQueryIds;
// #KB1 i:8 orig:             if (v.element) {
// #KB1 i:8 orig:               var y = v.element;
// #KB1 i:8 orig:               y.publicProviders = c
// #KB1 i:8 orig:                 ? c.element.publicProviders
// #KB1 i:8 orig:                 : Object.create(null);
// #KB1 i:8 orig:               y.allProviders = y.publicProviders;
// #KB1 i:8 orig:               d = false;
// #KB1 i:8 orig:               f = false;
// #KB1 i:8 orig:               if (v.element.template) {
// #KB1 i:8 orig:                 a |= v.element.template.nodeMatchedQueries;
// #KB1 i:8 orig:               }
// #KB1 i:8 orig:             }
// #KB1 i:8 orig:             Hr(c, v, t.length);
// #KB1 i:8 orig:             o += v.bindings.length;
// #KB1 i:8 orig:             i += v.outputs.length;
// #KB1 i:8 orig:             if (!l && 3 & v.flags) {
// #KB1 i:8 orig:               p = v;
// #KB1 i:8 orig:             }
            if (20224 & v.flags) {// #NOT DELETABLE i:6227 orig: 8
// #KB1 i:8 orig:               if (!d) {
// #KB1 i:8 orig:                 d = true;
// #KB1 i:8 orig:                 c.element.publicProviders = Object.create(
// #KB1 i:8 orig:                   c.element.publicProviders
// #KB1 i:8 orig:                 );
// #KB1 i:8 orig:                 c.element.allProviders = c.element.publicProviders;
// #KB1 i:8 orig:               }
// #KB1 i:8 orig:               var g = (32768 & v.flags) != 0;
// #KB1 i:8 orig:               if ((8192 & v.flags) == 0 || g) {
// #KB1 i:8 orig:                 c.element.publicProviders[Xt(v.provider.token)] = v;
// #KB1 i:8 orig:               } else {
// #KB1 i:8 orig:                 if (!f) {
// #KB1 i:8 orig:                   f = true;
// #KB1 i:8 orig:                   c.element.allProviders = Object.create(
// #KB1 i:8 orig:                     c.element.publicProviders
// #KB1 i:8 orig:                   );
// #KB1 i:8 orig:                 }
// #KB1 i:8 orig:                 c.element.allProviders[Xt(v.provider.token)] = v;
// #KB1 i:8 orig:               }
// #KB1 i:8 orig:               if (g) {
                c.element.componentProvider = v;// #NOT DELETABLE i:6265 orig: 8
// #KB1 i:8 orig:               }
            }// #NOT DELETABLE i:6273 orig: 8
// #KB1 i:8 orig:             if (c) {
// #KB1 i:8 orig:               c.childFlags |= v.flags;
// #KB1 i:8 orig:               c.directChildFlags |= v.flags;
// #KB1 i:8 orig:               c.childMatchedQueries |= v.matchedQueryIds;
// #KB1 i:8 orig:               if (v.element && v.element.template) {
// #KB1 i:8 orig:                 c.childMatchedQueries |= v.element.template.nodeMatchedQueries;
// #KB1 i:8 orig:               }
// #KB1 i:8 orig:             } else {
// #KB1 i:8 orig:               u |= v.flags;
// #KB1 i:8 orig:             }
            if (v.childCount > 0) {// #NOT DELETABLE i:6290 orig: 8
              c = v;// #NOT DELETABLE i:6292 orig: 8
              if (!Vr(v)) {// #NOT DELETABLE i:6295 orig: 8
                l = v;// #NOT DELETABLE i:6298 orig: 8
              }// #NOT DELETABLE i:6299 orig: 8
            } else {// #NOT DELETABLE i:6303 orig: 8
              while (c && h === c.nodeIndex + c.childCount) {// #NOT DELETABLE i:6310 orig: 8
                var m = c.parent;// #NOT DELETABLE i:6311 orig: 8
                if (m) {// #NOT DELETABLE i:6313 orig: 8
                  m.childFlags |= c.childFlags;// #NOT DELETABLE i:6314 orig: 8
                  m.childMatchedQueries |= c.childMatchedQueries;// #NOT DELETABLE i:6316 orig: 8
                }// #NOT DELETABLE i:6331 orig: 8
                l = (c = m) && Vr(c) ? c.renderParent : c;// #NOT DELETABLE i:6332 orig: 8
              }// #NOT DELETABLE i:6333 orig: 8
            }// #NOT DELETABLE i:6335 orig: 8
          }// #NOT DELETABLE i:6338 orig: 8
          return {// #NOT DELETABLE i:6341 orig: 8
// #KB1 i:8 orig:             factory: null,
            nodeFlags: s,// #NOT DELETABLE i:6346 orig: 8
// #KB1 i:8 orig:             rootNodeFlags: u,
// #KB1 i:8 orig:             nodeMatchedQueries: a,
// #KB1 i:8 orig:             flags: e,
            nodes: t,// #NOT DELETABLE i:6356 orig: 8
// #KB1 i:8 orig:             updateDirectives: n || Kt,
// #KB1 i:8 orig:             updateRenderer: r || Kt,
// #KB1 i:8 orig:             handleEvent: function(e, n, r, o) {//#RF [object Object]
// #KB1 i:8 orig:               return t[n].element.handleEvent(e, r, o);
// #KB1 i:8 orig:             },
// #KB1 i:8 orig:             bindingCount: o,
// #KB1 i:8 orig:             outputCount: i,
// #KB1 i:8 orig:             lastRenderRootNode: p,
          };// #NOT DELETABLE i:6480 orig: 8
        }// #KB1 END i:6481 orig: 
        function Vr(e) {// #QA3 i:6482 orig: 8
// #KB1 i:8 orig:           return (1 & e.flags) != 0 && e.element.name === null;
        }// #KB1 END i:6483 orig: 
// #Q8 START i:8 orig:         function Hr(e, t, n) {
// #DB i:8 orig:           var r = t.element && t.element.template;
// #DB i:8 orig:           if (r) {
// #DB i:8 orig:             if (!r.lastRenderRootNode) {
// #DB i:8 orig:               throw new Error(
// #DB i:8 orig:                 'Illegal State: Embedded templates without nodes are not allowed!'
// #DB i:8 orig:               );
// #DB i:8 orig:             }
// #DB i:8 orig:             if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags) {
// #DB i:8 orig:               throw new Error(
// #DB i:8 orig:                 "Illegal State: Last root node of a template can't have embedded views, at index " +
// #DB i:8 orig:                   t.nodeIndex +
// #DB i:8 orig:                   '!'
// #DB i:8 orig:               );
// #DB i:8 orig:             }
// #DB i:8 orig:           }
// #DB i:8 orig:           if (20224 & t.flags && (1 & (e ? e.flags : 0)) == 0) {
// #DB i:8 orig:             throw new Error(
// #DB i:8 orig:               'Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index ' +
// #DB i:8 orig:                 t.nodeIndex +
// #DB i:8 orig:                 '!'
// #DB i:8 orig:             );
// #DB i:8 orig:           }
// #DB i:8 orig:           if (t.query) {
// #DB i:8 orig:             if (67108864 & t.flags && (!e || (16384 & e.flags) == 0)) {
// #DB i:8 orig:               throw new Error(
// #DB i:8 orig:                 'Illegal State: Content Query nodes need to be children of directives, at index ' +
// #DB i:8 orig:                   t.nodeIndex +
// #DB i:8 orig:                   '!'
// #DB i:8 orig:               );
// #DB i:8 orig:             }
// #DB i:8 orig:             if (134217728 & t.flags && e) {
// #DB i:8 orig:               throw new Error(
// #DB i:8 orig:                 'Illegal State: View Query nodes have to be top level nodes, at index ' +
// #DB i:8 orig:                   t.nodeIndex +
// #DB i:8 orig:                   '!'
// #DB i:8 orig:               );
// #DB i:8 orig:             }
// #DB i:8 orig:           }
// #DB i:8 orig:           if (t.childCount) {
// #DB i:8 orig:             var o = e ? e.nodeIndex + e.childCount : n - 1;
// #DB i:8 orig:             if (t.nodeIndex <= o && t.nodeIndex + t.childCount > o) {
// #DB i:8 orig:               throw new Error(
// #DB i:8 orig:                 'Illegal State: childCount of node leads outside of parent, at index ' +
// #DB i:8 orig:                   t.nodeIndex +
// #DB i:8 orig:                   '!'
// #DB i:8 orig:               );
// #DB i:8 orig:             }
// #DB i:8 orig:           }
// #DB END i: orig:         }
        function Lr(e, t, n, r) {// #KFB3 START i:6610 orig: 8//#RF [object Object]
// #KB1 i:8 orig:           var o = zr(e.root, e.renderer, e, t, n);
// #KB1 i:8 orig:           Ur(o, e.component, r);
// #KB1 i:8 orig:           Zr(o);
// #KB1 i:8 orig:           return o;
        }// #KB1 END i:6614 orig: 
        function Fr(e, t, n) {// #QB i:6615 orig: 
          var r = zr(e, e.renderer, null, null, t);// #QA1 i:6615 orig: 
          Ur(r, n, n);// #QB i:6615 orig: 
          Zr(r);// #QB i:6615 orig: 
          return r;// #QA1 i:6615 orig: 
        }// #QA1 i:6615 orig: 
        function Br(e, t, n, r) {// #KFB3 START i:6615 orig: 8//#RF [object Object]
          var i = t.element.componentRendererType;// #NOT DELETABLE i:6615 orig: 8
          var o = i// #NOT DELETABLE i:6616 orig: 8
            ? e.root.rendererFactory.createRenderer(r, i)// #NOT DELETABLE i:6617 orig: 8
            : e.root.renderer;// #NOT DELETABLE i:6618 orig: 8
          return zr(e.root, o, e, t.element.componentProvider, n);// #NOT DELETABLE i:6620 orig: 8
        }// #KB1 END i:6621 orig: 
        function zr(e, t, n, r, o) {// #QA3 i:6622 orig: 8
// #KB1 i:8 orig:           var i = new Array(o.nodes.length);
// #KB1 i:8 orig:           var s = o.outputCount ? new Array(o.outputCount) : null;
          return {// #NOT DELETABLE i:6624 orig: 8
            def: o,// #NOT DELETABLE i:6625 orig: 8
            parent: n,// #NOT DELETABLE i:6626 orig: 8
// #KB1 i:8 orig:             viewContainerParent: null,
            parentNodeDef: r,// #NOT DELETABLE i:6628 orig: 8
// #KB1 i:8 orig:             context: null,
// #KB1 i:8 orig:             component: null,
            nodes: i,// #NOT DELETABLE i:6636 orig: 8
// #KB1 i:8 orig:             state: 13,
            root: e,// #NOT DELETABLE i:6638 orig: 8
            renderer: t,// #NOT DELETABLE i:6641 orig: 8
// #KB1 i:8 orig:             oldValues: new Array(o.bindingCount),
// #KB1 i:8 orig:             disposables: s,
// #KB1 i:8 orig:             initIndex: -1,
          };// #NOT DELETABLE i:6651 orig: 8
        }// #KB1 END i:6654 orig: 
        function Ur(e, t, n) {// #QA3 i:6655 orig: 8
// #KB1 i:8 orig:           e.component = t;
// #KB1 i:8 orig:           e.context = n;
        }// #KB1 END i:6658 orig: 
        function Zr(e) {// #QB i:6659 orig: 
          var t;// #QB i:6659 orig: 
          if (pn(e)) {// #QB i:6659 orig: 
            t = zt(e.parent, e.parentNodeDef.parent.nodeIndex).renderElement;// #QB i:6659 orig: 
          }// #QB i:6659 orig: 
          var n = e.def;// #QB i:6659 orig: 
          var r = e.nodes;// #QB i:6659 orig: 
          for (var o = 0; o < n.nodes.length; o++) {// #QB i:6659 orig: 
            var i = n.nodes[o];// #QB i:6659 orig: 
            Qt.setCurrentNode(e, o);// #QB i:6659 orig: 
            var s = void 0;// #QB i:6659 orig: 
            switch (201347067 & i.flags) {// #QB i:6659 orig: 
              case 1:// #QB i:6659 orig: 
                var u = Nn(e, t, i);// #QB i:6659 orig: 
                var a = void 0;// #QB i:6659 orig: 
                if (33554432 & i.flags) {// #QB i:6659 orig: 
                  var c = bn(i.element.componentView);// #QB i:6659 orig: 
                  a = Qt.createComponentView(e, i, c, u);// #QB i:6659 orig: 
                }// #QA1 i:6659 orig: 
// #SD i: orig:                 Sn(e, a, i, u);
                s = {// #QB i:6659 orig: 
                  renderElement: u,// #QB i:6659 orig: 
                  componentView: a,// #QB i:6659 orig: 
                  viewContainer: null,// #QB i:6659 orig: 
                  template: i.element.template ? $n(e, i) : void 0,// #QB i:6659 orig: 
                };// #QA1 i:6659 orig: 
                if (16777216 & i.flags) {// #QA1 i:6659 orig: 
                  s.viewContainer = Yn(e, i, s);// #QA1 i:6659 orig: 
                }// #QA1 i:6659 orig: 
                break;// #QB i:6659 orig: 
              case 2:// #QB i:6659 orig: 
                s = Dr(e, t, i);// #QB i:6659 orig: 
                break;// #QA1 i:6659 orig: 
              case 512:// #QA1 i:6659 orig: 
              case 1024:// #QA1 i:6659 orig: 
              case 2048:// #QA1 i:6659 orig: 
              case 256:// #QA1 i:6659 orig: 
                if (!(s = r[o]) && !(4096 & i.flags)) {// #QA1 i:6659 orig: 
                  s = { instance: vr(e, i) };// #QA1 i:6659 orig: 
                }// #QA1 i:6659 orig: 
                break;// #QA1 i:6659 orig: 
              case 16:// #QA1 i:6659 orig: 
                s = { instance: yr(e, i) };// #QA1 i:6659 orig: 
                break;// #QA1 i:6659 orig: 
              case 16384:// #QA1 i:6659 orig: 
                if (!(s = r[o])) {// #QB i:6659 orig: 
                  s = { instance: gr(e, i) };// #QA1 i:6659 orig: 
                }// #QA1 i:6659 orig: 
                if (32768 & i.flags) {// #QA1 i:6659 orig: 
                  Ur(// #QA1 i:6659 orig: 
                    zt(e, i.parent.nodeIndex).componentView,// #QA1 i:6659 orig: 
                    s.instance,// #QA1 i:6659 orig: 
                    s.instance// #QA1 i:6659 orig: 
                  );// #QA1 i:6659 orig: 
                }// #QA1 i:6659 orig: 
                break;// #QA1 i:6659 orig: 
              case 32:// #QA1 i:6659 orig: 
              case 64:// #QA1 i:6659 orig: 
              case 128:// #QA1 i:6659 orig: 
                s = { value: void 0 };// #QA1 i:6659 orig: 
                break;// #QA1 i:6659 orig: 
              case 67108864:// #QA1 i:6659 orig: 
              case 134217728:// #QA1 i:6659 orig: 
                s = new nt();// #QB i:6659 orig: 
                break;// #QA1 i:6659 orig: 
              case 8:// #QA1 i:6659 orig: 
                Mr(e, t, i);// #QA1 i:6659 orig: 
                s = void 0;// #QB i:6659 orig: 
            }// #QB i:6659 orig: 
            r[o] = s;// #QB i:6659 orig: 
          }// #QB i:6659 orig: 
          $r(e, Xr.CreateViewNodes);// #QA1 i:6659 orig: 
          ro(e, 201326592, 268435456, 0);// #QA1 i:6659 orig: 
        }// #QA1 i:6659 orig: 
// #DB6 START i:8 orig:         function Wr(e) {//#RF [object Object]
// #DB i:8 orig:           qr(e);
// #DB i:8 orig:           Qt.updateDirectives(e, 1);
// #DB i:8 orig:           eo(e, Xr.CheckNoChanges);
// #DB i:8 orig:           Qt.updateRenderer(e, 1);
// #DB i:8 orig:           $r(e, Xr.CheckNoChanges);
// #DB i:8 orig:           e.state &= -97;
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Qr(e) {//#RF [object Object]
// #DB i:8 orig:           if (1 & e.state) {
// #DB i:8 orig:             e.state &= -2;
// #DB i:8 orig:             e.state |= 2;
// #DB i:8 orig:           } else {
// #DB i:8 orig:             e.state &= -3;
// #DB i:8 orig:           }
// #DB i:8 orig:           Lt(e, 0, 256);
// #DB i:8 orig:           qr(e);
// #DB i:8 orig:           Qt.updateDirectives(e, 0);
// #DB i:8 orig:           eo(e, Xr.CheckAndUpdate);
// #DB i:8 orig:           ro(e, 67108864, 536870912, 0);
// #DB i:8 orig:           var t = Lt(e, 256, 512);
// #DB i:8 orig:           Tr(e, 2097152 | (t ? 1048576 : 0));
// #DB i:8 orig:           Qt.updateRenderer(e, 0);
// #DB i:8 orig:           $r(e, Xr.CheckAndUpdate);
// #DB i:8 orig:           ro(e, 134217728, 536870912, 0);
// #DB i:8 orig:           Tr(e, 8388608 | ((t = Lt(e, 512, 768)) ? 4194304 : 0));
// #DB i:8 orig:           if (2 & e.def.flags) {
// #DB i:8 orig:             e.state &= -9;
// #DB i:8 orig:           }
// #DB i:8 orig:           e.state &= -97;
// #DB i:8 orig:           Lt(e, 768, 1024);
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Gr(e, t, n, r, o, i, s, u, a, c, l, d, f) {//#RF [object Object]
// #DB i:8 orig:           if (n === 0) {
// #DB i:8 orig:             return (function(e, t, n, r, o, i, s, u, a, c, l, d) {
// #DB i:8 orig:               switch (201347067 & t.flags) {
// #DB i:8 orig:                 case 1:
// #DB i:8 orig:                   return (function(e, t, n, r, o, i, s, u, a, c, l, d) {
// #DB i:8 orig:                     var f = t.bindings.length;
// #DB i:8 orig:                     var p = false;
// #DB i:8 orig:                     if (f > 0 && Mn(e, t, 0, n)) {
// #DB i:8 orig:                       p = true;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (f > 1 && Mn(e, t, 1, r)) {
// #DB i:8 orig:                       p = true;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (f > 2 && Mn(e, t, 2, o)) {
// #DB i:8 orig:                       p = true;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (f > 3 && Mn(e, t, 3, i)) {
// #DB i:8 orig:                       p = true;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (f > 4 && Mn(e, t, 4, s)) {
// #DB i:8 orig:                       p = true;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (f > 5 && Mn(e, t, 5, u)) {
// #DB i:8 orig:                       p = true;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (f > 6 && Mn(e, t, 6, a)) {
// #DB i:8 orig:                       p = true;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (f > 7 && Mn(e, t, 7, c)) {
// #DB i:8 orig:                       p = true;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (f > 8 && Mn(e, t, 8, l)) {
// #DB i:8 orig:                       p = true;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (f > 9 && Mn(e, t, 9, d)) {
// #DB i:8 orig:                       p = true;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     return p;
// #DB i:8 orig:                   })(e, t, n, r, o, i, s, u, a, c, l, d);
// #DB i:8 orig:                 case 2:
// #DB i:8 orig:                   return (function(e, t, n, r, o, i, s, u, a, c, l, d) {
// #DB i:8 orig:                     var f = false;
// #DB i:8 orig:                     var p = t.bindings;
// #DB i:8 orig:                     var h = p.length;
// #DB i:8 orig:                     if (h > 0 && on(e, t, 0, n)) {
// #DB i:8 orig:                       f = true;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (h > 1 && on(e, t, 1, r)) {
// #DB i:8 orig:                       f = true;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (h > 2 && on(e, t, 2, o)) {
// #DB i:8 orig:                       f = true;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (h > 3 && on(e, t, 3, i)) {
// #DB i:8 orig:                       f = true;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (h > 4 && on(e, t, 4, s)) {
// #DB i:8 orig:                       f = true;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (h > 5 && on(e, t, 5, u)) {
// #DB i:8 orig:                       f = true;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (h > 6 && on(e, t, 6, a)) {
// #DB i:8 orig:                       f = true;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (h > 7 && on(e, t, 7, c)) {
// #DB i:8 orig:                       f = true;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (h > 8 && on(e, t, 8, l)) {
// #DB i:8 orig:                       f = true;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (h > 9 && on(e, t, 9, d)) {
// #DB i:8 orig:                       f = true;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (f) {
// #DB i:8 orig:                       var v = t.text.prefix;
// #DB i:8 orig:                       if (h > 0) {
// #DB i:8 orig:                         v += Rr(n, p[0]);
// #DB i:8 orig:                       }
// #DB i:8 orig:                       if (h > 1) {
// #DB i:8 orig:                         v += Rr(r, p[1]);
// #DB i:8 orig:                       }
// #DB i:8 orig:                       if (h > 2) {
// #DB i:8 orig:                         v += Rr(o, p[2]);
// #DB i:8 orig:                       }
// #DB i:8 orig:                       if (h > 3) {
// #DB i:8 orig:                         v += Rr(i, p[3]);
// #DB i:8 orig:                       }
// #DB i:8 orig:                       if (h > 4) {
// #DB i:8 orig:                         v += Rr(s, p[4]);
// #DB i:8 orig:                       }
// #DB i:8 orig:                       if (h > 5) {
// #DB i:8 orig:                         v += Rr(u, p[5]);
// #DB i:8 orig:                       }
// #DB i:8 orig:                       if (h > 6) {
// #DB i:8 orig:                         v += Rr(a, p[6]);
// #DB i:8 orig:                       }
// #DB i:8 orig:                       if (h > 7) {
// #DB i:8 orig:                         v += Rr(c, p[7]);
// #DB i:8 orig:                       }
// #DB i:8 orig:                       if (h > 8) {
// #DB i:8 orig:                         v += Rr(l, p[8]);
// #DB i:8 orig:                       }
// #DB i:8 orig:                       if (h > 9) {
// #DB i:8 orig:                         v += Rr(d, p[9]);
// #DB i:8 orig:                       }
// #DB i:8 orig:                       var y = Bt(e, t.nodeIndex).renderText;
// #DB i:8 orig:                       e.renderer.setValue(y, v);
// #DB i:8 orig:                     }
// #DB i:8 orig:                     return f;
// #DB i:8 orig:                   })(e, t, n, r, o, i, s, u, a, c, l, d);
// #DB i:8 orig:                 case 16384:
// #DB i:8 orig:                   return (function(e, t, n, r, o, i, s, u, a, c, l, d) {
// #DB i:8 orig:                     var f = Ut(e, t.nodeIndex);
// #DB i:8 orig:                     var p = f.instance;
// #DB i:8 orig:                     var h = false;
// #DB i:8 orig:                     var v = void 0;
// #DB i:8 orig:                     var y = t.bindings.length;
// #DB i:8 orig:                     if (y > 0 && rn(e, t, 0, n)) {
// #DB i:8 orig:                       h = true;
// #DB i:8 orig:                       v = xr(e, f, t, 0, n, v);
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (y > 1 && rn(e, t, 1, r)) {
// #DB i:8 orig:                       h = true;
// #DB i:8 orig:                       v = xr(e, f, t, 1, r, v);
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (y > 2 && rn(e, t, 2, o)) {
// #DB i:8 orig:                       h = true;
// #DB i:8 orig:                       v = xr(e, f, t, 2, o, v);
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (y > 3 && rn(e, t, 3, i)) {
// #DB i:8 orig:                       h = true;
// #DB i:8 orig:                       v = xr(e, f, t, 3, i, v);
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (y > 4 && rn(e, t, 4, s)) {
// #DB i:8 orig:                       h = true;
// #DB i:8 orig:                       v = xr(e, f, t, 4, s, v);
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (y > 5 && rn(e, t, 5, u)) {
// #DB i:8 orig:                       h = true;
// #DB i:8 orig:                       v = xr(e, f, t, 5, u, v);
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (y > 6 && rn(e, t, 6, a)) {
// #DB i:8 orig:                       h = true;
// #DB i:8 orig:                       v = xr(e, f, t, 6, a, v);
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (y > 7 && rn(e, t, 7, c)) {
// #DB i:8 orig:                       h = true;
// #DB i:8 orig:                       v = xr(e, f, t, 7, c, v);
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (y > 8 && rn(e, t, 8, l)) {
// #DB i:8 orig:                       h = true;
// #DB i:8 orig:                       v = xr(e, f, t, 8, l, v);
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (y > 9 && rn(e, t, 9, d)) {
// #DB i:8 orig:                       h = true;
// #DB i:8 orig:                       v = xr(e, f, t, 9, d, v);
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (v) {
// #DB i:8 orig:                       p.ngOnChanges(v);
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (65536 & t.flags && Ft(e, 256, t.nodeIndex)) {
// #DB i:8 orig:                       p.ngOnInit();
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (262144 & t.flags) {
// #DB i:8 orig:                       p.ngDoCheck();
// #DB i:8 orig:                     }
// #DB i:8 orig:                     return h;
// #DB i:8 orig:                   })(e, t, n, r, o, i, s, u, a, c, l, d);
// #DB i:8 orig:                 case 32:
// #DB i:8 orig:                 case 64:
// #DB i:8 orig:                 case 128:
// #DB i:8 orig:                   return (function(e, t, n, r, o, i, s, u, a, c, l, d) {
// #DB i:8 orig:                     var f = t.bindings;
// #DB i:8 orig:                     var p = false;
// #DB i:8 orig:                     var h = f.length;
// #DB i:8 orig:                     if (h > 0 && on(e, t, 0, n)) {
// #DB i:8 orig:                       p = true;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (h > 1 && on(e, t, 1, r)) {
// #DB i:8 orig:                       p = true;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (h > 2 && on(e, t, 2, o)) {
// #DB i:8 orig:                       p = true;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (h > 3 && on(e, t, 3, i)) {
// #DB i:8 orig:                       p = true;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (h > 4 && on(e, t, 4, s)) {
// #DB i:8 orig:                       p = true;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (h > 5 && on(e, t, 5, u)) {
// #DB i:8 orig:                       p = true;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (h > 6 && on(e, t, 6, a)) {
// #DB i:8 orig:                       p = true;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (h > 7 && on(e, t, 7, c)) {
// #DB i:8 orig:                       p = true;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (h > 8 && on(e, t, 8, l)) {
// #DB i:8 orig:                       p = true;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (h > 9 && on(e, t, 9, d)) {
// #DB i:8 orig:                       p = true;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (p) {
// #DB i:8 orig:                       var v = Zt(e, t.nodeIndex);
// #DB i:8 orig:                       var y = void 0;
// #DB i:8 orig:                       switch (201347067 & t.flags) {
// #DB i:8 orig:                         case 32:
// #DB i:8 orig:                           y = new Array(f.length);
// #DB i:8 orig:                           if (h > 0) {
// #DB i:8 orig:                             y[0] = n;
// #DB i:8 orig:                           }
// #DB i:8 orig:                           if (h > 1) {
// #DB i:8 orig:                             y[1] = r;
// #DB i:8 orig:                           }
// #DB i:8 orig:                           if (h > 2) {
// #DB i:8 orig:                             y[2] = o;
// #DB i:8 orig:                           }
// #DB i:8 orig:                           if (h > 3) {
// #DB i:8 orig:                             y[3] = i;
// #DB i:8 orig:                           }
// #DB i:8 orig:                           if (h > 4) {
// #DB i:8 orig:                             y[4] = s;
// #DB i:8 orig:                           }
// #DB i:8 orig:                           if (h > 5) {
// #DB i:8 orig:                             y[5] = u;
// #DB i:8 orig:                           }
// #DB i:8 orig:                           if (h > 6) {
// #DB i:8 orig:                             y[6] = a;
// #DB i:8 orig:                           }
// #DB i:8 orig:                           if (h > 7) {
// #DB i:8 orig:                             y[7] = c;
// #DB i:8 orig:                           }
// #DB i:8 orig:                           if (h > 8) {
// #DB i:8 orig:                             y[8] = l;
// #DB i:8 orig:                           }
// #DB i:8 orig:                           if (h > 9) {
// #DB i:8 orig:                             y[9] = d;
// #DB i:8 orig:                           }
// #DB i:8 orig:                           break;
// #DB i:8 orig:                         case 64:
// #DB i:8 orig:                           y = {};
// #DB i:8 orig:                           if (h > 0) {
// #DB i:8 orig:                             y[f[0].name] = n;
// #DB i:8 orig:                           }
// #DB i:8 orig:                           if (h > 1) {
// #DB i:8 orig:                             y[f[1].name] = r;
// #DB i:8 orig:                           }
// #DB i:8 orig:                           if (h > 2) {
// #DB i:8 orig:                             y[f[2].name] = o;
// #DB i:8 orig:                           }
// #DB i:8 orig:                           if (h > 3) {
// #DB i:8 orig:                             y[f[3].name] = i;
// #DB i:8 orig:                           }
// #DB i:8 orig:                           if (h > 4) {
// #DB i:8 orig:                             y[f[4].name] = s;
// #DB i:8 orig:                           }
// #DB i:8 orig:                           if (h > 5) {
// #DB i:8 orig:                             y[f[5].name] = u;
// #DB i:8 orig:                           }
// #DB i:8 orig:                           if (h > 6) {
// #DB i:8 orig:                             y[f[6].name] = a;
// #DB i:8 orig:                           }
// #DB i:8 orig:                           if (h > 7) {
// #DB i:8 orig:                             y[f[7].name] = c;
// #DB i:8 orig:                           }
// #DB i:8 orig:                           if (h > 8) {
// #DB i:8 orig:                             y[f[8].name] = l;
// #DB i:8 orig:                           }
// #DB i:8 orig:                           if (h > 9) {
// #DB i:8 orig:                             y[f[9].name] = d;
// #DB i:8 orig:                           }
// #DB i:8 orig:                           break;
// #DB i:8 orig:                         case 128:
// #DB i:8 orig:                           var g = n;
// #DB i:8 orig:                           switch (h) {
// #DB i:8 orig:                             case 1:
// #DB i:8 orig:                               y = g.transform(n);
// #DB i:8 orig:                               break;
// #DB i:8 orig:                             case 2:
// #DB i:8 orig:                               y = g.transform(r);
// #DB i:8 orig:                               break;
// #DB i:8 orig:                             case 3:
// #DB i:8 orig:                               y = g.transform(r, o);
// #DB i:8 orig:                               break;
// #DB i:8 orig:                             case 4:
// #DB i:8 orig:                               y = g.transform(r, o, i);
// #DB i:8 orig:                               break;
// #DB i:8 orig:                             case 5:
// #DB i:8 orig:                               y = g.transform(r, o, i, s);
// #DB i:8 orig:                               break;
// #DB i:8 orig:                             case 6:
// #DB i:8 orig:                               y = g.transform(r, o, i, s, u);
// #DB i:8 orig:                               break;
// #DB i:8 orig:                             case 7:
// #DB i:8 orig:                               y = g.transform(r, o, i, s, u, a);
// #DB i:8 orig:                               break;
// #DB i:8 orig:                             case 8:
// #DB i:8 orig:                               y = g.transform(r, o, i, s, u, a, c);
// #DB i:8 orig:                               break;
// #DB i:8 orig:                             case 9:
// #DB i:8 orig:                               y = g.transform(r, o, i, s, u, a, c, l);
// #DB i:8 orig:                               break;
// #DB i:8 orig:                             case 10:
// #DB i:8 orig:                               y = g.transform(r, o, i, s, u, a, c, l, d);
// #DB i:8 orig:                           }
// #DB i:8 orig:                       }
// #DB i:8 orig:                       v.value = y;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     return p;
// #DB i:8 orig:                   })(e, t, n, r, o, i, s, u, a, c, l, d);
// #DB i:8 orig:                 default:
// #DB i:8 orig:                   throw 'unreachable';
// #DB i:8 orig:               }
// #DB i:8 orig:             })(e, t, r, o, i, s, u, a, c, l, d, f);
// #DB i:8 orig:           } else {
// #DB i:8 orig:             return (function(e, t, n) {
// #DB i:8 orig:               switch (201347067 & t.flags) {
// #DB i:8 orig:                 case 1:
// #DB i:8 orig:                   return (function(e, t, n) {
// #DB i:8 orig:                     var r = false;
// #DB i:8 orig:                     for (var o = 0; o < n.length; o++) {
// #DB i:8 orig:                       if (Mn(e, t, o, n[o])) {
// #DB i:8 orig:                         r = true;
// #DB i:8 orig:                       }
// #DB i:8 orig:                     }
// #DB i:8 orig:                     return r;
// #DB i:8 orig:                   })(e, t, n);
// #DB i:8 orig:                 case 2:
// #DB i:8 orig:                   return (function(e, t, n) {
// #DB i:8 orig:                     var r = t.bindings;
// #DB i:8 orig:                     var o = false;
// #DB i:8 orig:                     for (var i = 0; i < n.length; i++) {
// #DB i:8 orig:                       if (on(e, t, i, n[i])) {
// #DB i:8 orig:                         o = true;
// #DB i:8 orig:                       }
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (o) {
// #DB i:8 orig:                       var s = '';
// #DB i:8 orig:                       for (i = 0; i < n.length; i++) {
// #DB i:8 orig:                         s += Rr(n[i], r[i]);
// #DB i:8 orig:                       }
// #DB i:8 orig:                       s = t.text.prefix + s;
// #DB i:8 orig:                       var u = Bt(e, t.nodeIndex).renderText;
// #DB i:8 orig:                       e.renderer.setValue(u, s);
// #DB i:8 orig:                     }
// #DB i:8 orig:                     return o;
// #DB i:8 orig:                   })(e, t, n);
// #DB i:8 orig:                 case 16384:
// #DB i:8 orig:                   return (function(e, t, n) {
// #DB i:8 orig:                     var r = Ut(e, t.nodeIndex);
// #DB i:8 orig:                     var o = r.instance;
// #DB i:8 orig:                     var i = false;
// #DB i:8 orig:                     var s = void 0;
// #DB i:8 orig:                     for (var u = 0; u < n.length; u++) {
// #DB i:8 orig:                       if (rn(e, t, u, n[u])) {
// #DB i:8 orig:                         i = true;
// #DB i:8 orig:                         s = xr(e, r, t, u, n[u], s);
// #DB i:8 orig:                       }
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (s) {
// #DB i:8 orig:                       o.ngOnChanges(s);
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (65536 & t.flags && Ft(e, 256, t.nodeIndex)) {
// #DB i:8 orig:                       o.ngOnInit();
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (262144 & t.flags) {
// #DB i:8 orig:                       o.ngDoCheck();
// #DB i:8 orig:                     }
// #DB i:8 orig:                     return i;
// #DB i:8 orig:                   })(e, t, n);
// #DB i:8 orig:                 case 32:
// #DB i:8 orig:                 case 64:
// #DB i:8 orig:                 case 128:
// #DB i:8 orig:                   return (function(e, t, n) {
// #DB i:8 orig:                     var r = t.bindings;
// #DB i:8 orig:                     var o = false;
// #DB i:8 orig:                     for (var i = 0; i < n.length; i++) {
// #DB i:8 orig:                       if (on(e, t, i, n[i])) {
// #DB i:8 orig:                         o = true;
// #DB i:8 orig:                       }
// #DB i:8 orig:                     }
// #DB i:8 orig:                     if (o) {
// #DB i:8 orig:                       var s = Zt(e, t.nodeIndex);
// #DB i:8 orig:                       var u = void 0;
// #DB i:8 orig:                       switch (201347067 & t.flags) {
// #DB i:8 orig:                         case 32:
// #DB i:8 orig:                           u = n;
// #DB i:8 orig:                           break;
// #DB i:8 orig:                         case 64:
// #DB i:8 orig:                           u = {};
// #DB i:8 orig:                           for (i = 0; i < n.length; i++) {
// #DB i:8 orig:                             u[r[i].name] = n[i];
// #DB i:8 orig:                           }
// #DB i:8 orig:                           break;
// #DB i:8 orig:                         case 128:
// #DB i:8 orig:                           var a = n[0];
// #DB i:8 orig:                           var c = n.slice(1);
// #DB i:8 orig:                           u = a.transform.apply(a, c);
// #DB i:8 orig:                       }
// #DB i:8 orig:                       s.value = u;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     return o;
// #DB i:8 orig:                   })(e, t, n);
// #DB i:8 orig:                 default:
// #DB i:8 orig:                   throw 'unreachable';
// #DB i:8 orig:               }
// #DB i:8 orig:             })(e, t, r);
// #DB i:8 orig:           }
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function qr(e) {//#RF [object Object]
// #DB i:8 orig:           var t = e.def;
// #DB i:8 orig:           if (4 & t.nodeFlags) {
// #DB i:8 orig:             for (var n = 0; n < t.nodes.length; n++) {
// #DB i:8 orig:               var r = t.nodes[n];
// #DB i:8 orig:               if (4 & r.flags) {
// #DB i:8 orig:                 var o = zt(e, n).template._projectedViews;
// #DB i:8 orig:                 if (o) {
// #DB i:8 orig:                   for (var i = 0; i < o.length; i++) {
// #DB i:8 orig:                     var s = o[i];
// #DB i:8 orig:                     s.state |= 32;
// #DB i:8 orig:                     an(s, e);
// #DB i:8 orig:                   }
// #DB i:8 orig:                 }
// #DB i:8 orig:               } else if ((4 & r.childFlags) == 0) {
// #DB i:8 orig:                 n += r.childCount;
// #DB i:8 orig:               }
// #DB i:8 orig:             }
// #DB i:8 orig:           }
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Yr(e, t, n, r, o, i, s, u, a, c, l, d, f) {//#RF [object Object]
// #DB i:8 orig:           if (n === 0) {
// #DB i:8 orig:             (function(e, t, n, r, o, i, s, u, a, c, l, d) {
// #DB i:8 orig:               var f = t.bindings.length;
// #DB i:8 orig:               if (f > 0) {
// #DB i:8 orig:                 sn(e, t, 0, n);
// #DB i:8 orig:               }
// #DB i:8 orig:               if (f > 1) {
// #DB i:8 orig:                 sn(e, t, 1, r);
// #DB i:8 orig:               }
// #DB i:8 orig:               if (f > 2) {
// #DB i:8 orig:                 sn(e, t, 2, o);
// #DB i:8 orig:               }
// #DB i:8 orig:               if (f > 3) {
// #DB i:8 orig:                 sn(e, t, 3, i);
// #DB i:8 orig:               }
// #DB i:8 orig:               if (f > 4) {
// #DB i:8 orig:                 sn(e, t, 4, s);
// #DB i:8 orig:               }
// #DB i:8 orig:               if (f > 5) {
// #DB i:8 orig:                 sn(e, t, 5, u);
// #DB i:8 orig:               }
// #DB i:8 orig:               if (f > 6) {
// #DB i:8 orig:                 sn(e, t, 6, a);
// #DB i:8 orig:               }
// #DB i:8 orig:               if (f > 7) {
// #DB i:8 orig:                 sn(e, t, 7, c);
// #DB i:8 orig:               }
// #DB i:8 orig:               if (f > 8) {
// #DB i:8 orig:                 sn(e, t, 8, l);
// #DB i:8 orig:               }
// #DB i:8 orig:               if (f > 9) {
// #DB i:8 orig:                 sn(e, t, 9, d);
// #DB i:8 orig:               }
// #DB i:8 orig:             })(e, t, r, o, i, s, u, a, c, l, d, f);
// #DB i:8 orig:           } else {
// #DB i:8 orig:             (function(e, t, n) {
// #DB i:8 orig:               for (var r = 0; r < n.length; r++) {
// #DB i:8 orig:                 sn(e, t, r, n[r]);
// #DB i:8 orig:               }
// #DB i:8 orig:             })(e, t, r);
// #DB i:8 orig:           }
// #DB i:8 orig:           return false;
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Kr(e, t) {//#RF [object Object]
// #DB i:8 orig:           if (Wt(e, t.nodeIndex).dirty) {
// #DB i:8 orig:             throw Gt(
// #DB i:8 orig:               Qt.createDebugContext(e, t.nodeIndex),
// #DB i:8 orig:               'Query ' + t.query.id + ' not dirty',
// #DB i:8 orig:               'Query ' + t.query.id + ' dirty',
// #DB i:8 orig:               (1 & e.state) != 0
// #DB i:8 orig:             );
// #DB i:8 orig:           }
// #DB END i: orig:         }
        function Jr(e) {// #KFB3 START i:8529 orig: 8//#RF [object Object]
// #KB1 i:8 orig:           if (!(128 & e.state)) {
// #KB1 i:8 orig:             eo(e, Xr.Destroy);
// #KB1 i:8 orig:             $r(e, Xr.Destroy);
// #KB1 i:8 orig:             Tr(e, 131072);
// #KB1 i:8 orig:             if (e.disposables) {
// #KB1 i:8 orig:               for (var t = 0; t < e.disposables.length; t++) {
// #KB1 i:8 orig:                 e.disposables[t]();
// #KB1 i:8 orig:               }
// #KB1 i:8 orig:             }
// #KB1 i:8 orig:             (function(e) {
// #KB1 i:8 orig:               if (16 & e.state) {
// #KB1 i:8 orig:                 var t = ln(e);
// #KB1 i:8 orig:                 if (t) {
// #KB1 i:8 orig:                   var n = t.template._projectedViews;
// #KB1 i:8 orig:                   if (n) {
// #KB1 i:8 orig:                     Zn(n, n.indexOf(e));
// #KB1 i:8 orig:                     Qt.dirtyParentQueries(e);
// #KB1 i:8 orig:                   }
// #KB1 i:8 orig:                 }
// #KB1 i:8 orig:               }
// #KB1 i:8 orig:             })(e);
// #KB1 i:8 orig:             if (e.renderer.destroyNode) {
// #KB1 i:8 orig:               (function(e) {
// #KB1 i:8 orig:                 var t = e.def.nodes.length;
// #KB1 i:8 orig:                 for (var n = 0; n < t; n++) {
// #KB1 i:8 orig:                   var r = e.def.nodes[n];
// #KB1 i:8 orig:                   if (1 & r.flags) {
// #KB1 i:8 orig:                     e.renderer.destroyNode(zt(e, n).renderElement);
// #KB1 i:8 orig:                   } else if (2 & r.flags) {
// #KB1 i:8 orig:                     e.renderer.destroyNode(Bt(e, n).renderText);
// #KB1 i:8 orig:                   } else if (67108864 & r.flags || 134217728 & r.flags) {
// #KB1 i:8 orig:                     Wt(e, n).destroy();
// #KB1 i:8 orig:                   }
// #KB1 i:8 orig:                 }
// #KB1 i:8 orig:               })(e);
// #KB1 i:8 orig:             }
// #KB1 i:8 orig:             if (pn(e)) {
// #KB1 i:8 orig:               e.renderer.destroy();
// #KB1 i:8 orig:             }
// #KB1 i:8 orig:             e.state |= 128;
// #KB1 i:8 orig:           }
        }// #KB1 END i:8638 orig: 
        function $r(e, t) {// #KFB3 START i:8641 orig: 8//#RF [object Object]
          var n = e.def;// #NOT DELETABLE i:8641 orig: 8
// #KB1 i:8 orig:           if (33554432 & n.nodeFlags) {
            for (var r = 0; r < n.nodes.length; r++) {// #NOT DELETABLE i:8643 orig: 8
// #KB1 i:8 orig:               var o = n.nodes[r];
// #KB1 i:8 orig:               if (33554432 & o.flags) {
                to(zt(e, r).componentView, t);// #NOT DELETABLE i:8655 orig: 8
// #KB1 i:8 orig:               } else if ((33554432 & o.childFlags) == 0) {
// #KB1 i:8 orig:                 r += o.childCount;
// #KB1 i:8 orig:               }
            }// #NOT DELETABLE i:8661 orig: 8
// #KB1 i:8 orig:           }
        }// #KB1 END i:8665 orig: 
// #DB6 START i:8 orig:         function eo(e, t) {//#RF [object Object]
// #DB i:8 orig:           var n = e.def;
// #DB i:8 orig:           if (16777216 & n.nodeFlags) {
// #DB i:8 orig:             for (var r = 0; r < n.nodes.length; r++) {
// #DB i:8 orig:               var o = n.nodes[r];
// #DB i:8 orig:               if (16777216 & o.flags) {
// #DB i:8 orig:                 var i = zt(e, r).viewContainer._embeddedViews;
// #DB i:8 orig:                 for (var s = 0; s < i.length; s++) {
// #DB i:8 orig:                   to(i[s], t);
// #DB i:8 orig:                 }
// #DB i:8 orig:               } else if ((16777216 & o.childFlags) == 0) {
// #DB i:8 orig:                 r += o.childCount;
// #DB i:8 orig:               }
// #DB i:8 orig:             }
// #DB i:8 orig:           }
// #DB END i: orig:         }
        function to(e, t) {// #KFB3 START i:8712 orig: 8//#RF [object Object]
// #KB1 i:8 orig:           var n = e.state;
// #KB1 i:8 orig:           switch (t) {
// #KB1 i:8 orig:             case Xr.CheckNoChanges:
// #KB1 i:8 orig:               if ((128 & n) == 0) {
// #KB1 i:8 orig:                 if ((12 & n) == 12) {
// #KB1 i:8 orig:                   Wr(e);
// #KB1 i:8 orig:                 } else if (64 & n) {
// #KB1 i:8 orig:                   no(e, Xr.CheckNoChangesProjectedViews);
// #KB1 i:8 orig:                 }
// #KB1 i:8 orig:               }
// #KB1 i:8 orig:               break;
// #KB1 i:8 orig:             case Xr.CheckNoChangesProjectedViews:
// #KB1 i:8 orig:               if ((128 & n) == 0) {
// #KB1 i:8 orig:                 if (32 & n) {
// #KB1 i:8 orig:                   Wr(e);
// #KB1 i:8 orig:                 } else if (64 & n) {
// #KB1 i:8 orig:                   no(e, t);
// #KB1 i:8 orig:                 }
// #KB1 i:8 orig:               }
// #KB1 i:8 orig:               break;
// #KB1 i:8 orig:             case Xr.CheckAndUpdate:
// #KB1 i:8 orig:               if ((128 & n) == 0) {
// #KB1 i:8 orig:                 if ((12 & n) == 12) {
// #KB1 i:8 orig:                   Qr(e);
// #KB1 i:8 orig:                 } else if (64 & n) {
// #KB1 i:8 orig:                   no(e, Xr.CheckAndUpdateProjectedViews);
// #KB1 i:8 orig:                 }
// #KB1 i:8 orig:               }
// #KB1 i:8 orig:               break;
// #KB1 i:8 orig:             case Xr.CheckAndUpdateProjectedViews:
// #KB1 i:8 orig:               if ((128 & n) == 0) {
// #KB1 i:8 orig:                 if (32 & n) {
// #KB1 i:8 orig:                   Qr(e);
// #KB1 i:8 orig:                 } else if (64 & n) {
// #KB1 i:8 orig:                   no(e, t);
// #KB1 i:8 orig:                 }
// #KB1 i:8 orig:               }
// #KB1 i:8 orig:               break;
// #KB1 i:8 orig:             case Xr.Destroy:
// #KB1 i:8 orig:               Jr(e);
// #KB1 i:8 orig:               break;
// #KB1 i:8 orig:             case Xr.CreateViewNodes:
              Zr(e);// #NOT DELETABLE i:8824 orig: 8
// #KB1 i:8 orig:           }
        }// #KB1 END i:8831 orig: 
// #DB6 START i:8 orig:         function no(e, t) {//#RF [object Object]
// #DB i:8 orig:           eo(e, t);
// #DB i:8 orig:           $r(e, t);
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function ro(e, t, n, r) {//#RF [object Object]
// #DB i:8 orig:           if (e.def.nodeFlags & t && e.def.nodeFlags & n) {
// #DB i:8 orig:             var o = e.def.nodes.length;
// #DB i:8 orig:             for (var i = 0; i < o; i++) {
// #DB i:8 orig:               var s = e.def.nodes[i];
// #DB i:8 orig:               if (s.flags & t && s.flags & n) {
// #DB i:8 orig:                 switch ((Qt.setCurrentNode(e, s.nodeIndex), r)) {
// #DB i:8 orig:                   case 0:
// #DB i:8 orig:                     Nr(e, s);
// #DB i:8 orig:                     break;
// #DB i:8 orig:                   case 1:
// #DB i:8 orig:                     Kr(e, s);
// #DB i:8 orig:                 }
// #DB i:8 orig:               }
// #DB i:8 orig:               if (!(s.childFlags & t) || !(s.childFlags & n)) {
// #DB i:8 orig:                 i += s.childCount;
// #DB i:8 orig:               }
// #DB i:8 orig:             }
// #DB i:8 orig:           }
// #DB END i: orig:         }
        function io(e, t, n, r, o, i) {// #QB i:8881 orig: 
          return Fr(uo(e, o, o.injector.get($e), t, n), r, i);// #QA1 i:8881 orig: 
        }// #QA1 i:8881 orig: 
// #DB6 START i:8 orig:         function so(e, t, n, r, o, i) {//#RF [object Object]
// #DB i:8 orig:           var s = o.injector.get($e);
// #DB i:8 orig:           var u = uo(e, o, new Bo(s), t, n);
// #DB i:8 orig:           var a = go(r);
// #DB i:8 orig:           return Lo(ko.create, Fr, null, [u, a, i]);
// #DB END i: orig:         }
        function uo(e, t, n, r, o) {// #QA3 i:8894 orig: 8
// #KB1 i:8 orig:           var i = t.injector.get(Ht);
// #KB1 i:8 orig:           var s = t.injector.get($);
          return {// #NOT DELETABLE i:8898 orig: 8
// #KB1 i:8 orig:             ngModule: t,
// #KB1 i:8 orig:             injector: e,
// #KB1 i:8 orig:             projectableNodes: r,
            selectorOrNode: o,// #NOT DELETABLE i:8902 orig: 8
// #KB1 i:8 orig:             sanitizer: i,
// #KB1 i:8 orig:             rendererFactory: n,
            renderer: n.createRenderer(null, null),// #NOT DELETABLE i:8905 orig: 8
// #KB1 i:8 orig:             errorHandler: s,
          };// #NOT DELETABLE i:8909 orig: 8
        }// #KB1 END i:8913 orig: 
// #DB6 START i:8 orig:         function ao(e, t, n, r) {//#RF [object Object]
// #DB i:8 orig:           var o = go(n);
// #DB i:8 orig:           return Lo(ko.create, Lr, null, [e, t, o, r]);
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function co(e, t, n, r) {//#RF [object Object]
// #DB i:8 orig:           n = po.get(t.element.componentProvider.provider.token) || go(n);
// #DB i:8 orig:           return Lo(ko.create, Br, null, [e, t, n, r]);
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function lo(e, t, n, r) {//#RF [object Object]
// #DB i:8 orig:           return ir(
// #DB i:8 orig:             e,
// #DB i:8 orig:             t,
// #DB i:8 orig:             n,
// #DB i:8 orig:             (function() {
// #DB i:8 orig:               var e = r;
// #DB i:8 orig:               var t = (function(e) {
// #DB i:8 orig:                 var t = false;
// #DB i:8 orig:                 var n = false;
// #DB i:8 orig:                 if (fo.size === 0) {
// #DB i:8 orig:                   return { hasOverrides: t, hasDeprecatedOverrides: n };
// #DB i:8 orig:                 } else {
// #DB i:8 orig:                   e.providers.forEach(function(e) {
// #DB i:8 orig:                     var r = fo.get(e.token);
// #DB i:8 orig:                     if (3840 & e.flags && r) {
// #DB i:8 orig:                       t = true;
// #DB i:8 orig:                       n = n || r.deprecatedBehavior;
// #DB i:8 orig:                     }
// #DB i:8 orig:                   });
// #DB i:8 orig:                   return { hasOverrides: t, hasDeprecatedOverrides: n };
// #DB i:8 orig:                 }
// #DB i:8 orig:               })(e);
// #DB i:8 orig:               var n = t.hasDeprecatedOverrides;
// #DB i:8 orig:               if (t.hasOverrides) {
// #DB i:8 orig:                 (function(e) {
// #DB i:8 orig:                   for (var t = 0; t < e.providers.length; t++) {
// #DB i:8 orig:                     var r = e.providers[t];
// #DB i:8 orig:                     if (n) {
// #DB i:8 orig:                       r.flags |= 4096;
// #DB i:8 orig:                     }
// #DB i:8 orig:                     var o = fo.get(r.token);
// #DB i:8 orig:                     if (o) {
// #DB i:8 orig:                       r.flags = (-3841 & r.flags) | o.flags;
// #DB i:8 orig:                       r.deps = yn(o.deps);
// #DB i:8 orig:                       r.value = o.value;
// #DB i:8 orig:                     }
// #DB i:8 orig:                   }
// #DB i:8 orig:                 })(
// #DB i:8 orig:                   (e = e.factory(function() {
// #DB i:8 orig:                     return Kt;
// #DB i:8 orig:                   }))
// #DB i:8 orig:                 );
// #DB i:8 orig:                 return e;
// #DB i:8 orig:               } else {
// #DB i:8 orig:                 return e;
// #DB i:8 orig:               }
// #DB i:8 orig:             })()
// #DB i:8 orig:           );
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function ho(e) {//#RF [object Object]
// #DB i:8 orig:           fo.set(e.token, e);
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function vo(e, t) {//#RF [object Object]
// #DB i:8 orig:           var n = bn(bn(t.viewDefFactory).nodes[0].element.componentView);
// #DB i:8 orig:           po.set(e, n);
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function yo() {//#RF [object Object]
// #DB i:8 orig:           fo.clear();
// #DB i:8 orig:           po.clear();
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function go(e) {//#RF [object Object]
// #DB i:8 orig:           function r(e, t) {
// #DB i:8 orig:             for (var n = t + 1; n < e.nodes.length; n++) {
// #DB i:8 orig:               var r = e.nodes[n];
// #DB i:8 orig:               if (1 & r.flags) {
// #DB i:8 orig:                 return;
// #DB i:8 orig:               }
// #DB i:8 orig:               if (3840 & r.flags) {
// #DB i:8 orig:                 var o = r.provider;
// #DB i:8 orig:                 var i = fo.get(o.token);
// #DB i:8 orig:                 if (i) {
// #DB i:8 orig:                   r.flags = (-3841 & r.flags) | i.flags;
// #DB i:8 orig:                   o.deps = yn(i.deps);
// #DB i:8 orig:                   o.value = i.value;
// #DB i:8 orig:                 }
// #DB i:8 orig:               }
// #DB i:8 orig:             }
// #DB i:8 orig:           }
// #DB i:8 orig:           if (fo.size === 0) {
// #DB i:8 orig:             return e;
// #DB i:8 orig:           }
// #DB i:8 orig:           var t = (function(e) {
// #DB i:8 orig:             var t = [];
// #DB i:8 orig:             var n = null;
// #DB i:8 orig:             for (var r = 0; r < e.nodes.length; r++) {
// #DB i:8 orig:               var o = e.nodes[r];
// #DB i:8 orig:               if (1 & o.flags) {
// #DB i:8 orig:                 n = o;
// #DB i:8 orig:               }
// #DB i:8 orig:               if (n && 3840 & o.flags && fo.has(o.provider.token)) {
// #DB i:8 orig:                 t.push(n.nodeIndex);
// #DB i:8 orig:                 n = null;
// #DB i:8 orig:               }
// #DB i:8 orig:             }
// #DB i:8 orig:             return t;
// #DB i:8 orig:           })(e);
// #DB i:8 orig:           if (t.length === 0) {
// #DB i:8 orig:             return e;
// #DB i:8 orig:           }
// #DB i:8 orig:           e = e.factory(function() {
// #DB i:8 orig:             return Kt;
// #DB i:8 orig:           });
// #DB i:8 orig:           for (var n = 0; n < t.length; n++) {
// #DB i:8 orig:             r(e, t[n]);
// #DB i:8 orig:           }
// #DB i:8 orig:           return e;
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function mo(e, t, n, r, o, i, s, u, a, c, l, d, f) {//#RF [object Object]
// #DB i:8 orig:           var p = e.def.nodes[t];
// #DB i:8 orig:           Gr(e, p, n, r, o, i, s, u, a, c, l, d, f);
// #DB i:8 orig:           if (224 & p.flags) {
// #DB i:8 orig:             return Zt(e, t).value;
// #DB i:8 orig:           } else {
// #DB i:8 orig:             return;
// #DB i:8 orig:           }
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function bo(e, t, n, r, o, i, s, u, a, c, l, d, f) {//#RF [object Object]
// #DB i:8 orig:           var p = e.def.nodes[t];
// #DB i:8 orig:           Yr(e, p, n, r, o, i, s, u, a, c, l, d, f);
// #DB i:8 orig:           if (224 & p.flags) {
// #DB i:8 orig:             return Zt(e, t).value;
// #DB i:8 orig:           } else {
// #DB i:8 orig:             return;
// #DB i:8 orig:           }
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function _o(e) {//#RF [object Object]
// #DB i:8 orig:           return Lo(ko.detectChanges, Qr, null, [e]);
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function wo(e) {//#RF [object Object]
// #DB i:8 orig:           return Lo(ko.checkNoChanges, Wr, null, [e]);
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Co(e) {//#RF [object Object]
// #DB i:8 orig:           return Lo(ko.destroy, Jr, null, [e]);
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Io(e, t) {//#RF [object Object]
// #DB i:8 orig:           xo = e;
// #DB i:8 orig:           To = t;
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Oo(e, t, n, r) {//#RF [object Object]
// #DB i:8 orig:           Io(e, t);
// #DB i:8 orig:           return Lo(ko.handleEvent, e.def.handleEvent, null, [e, t, n, r]);
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function No(e, t) {//#RF [object Object]
// #DB i:8 orig:           if (128 & e.state) {
// #DB i:8 orig:             throw Yt(ko[Eo]);
// #DB i:8 orig:           }
// #DB i:8 orig:           Io(e, Ro(e, 0));
// #DB i:8 orig:           return e.def.updateDirectives(function(e, n, r) {
// #DB i:8 orig:             var o = [];
// #DB i:8 orig:             for (var i = 3; i < arguments.length; i++) {
// #DB i:8 orig:               o[i - 3] = arguments[i];
// #DB i:8 orig:             }
// #DB i:8 orig:             var s = e.def.nodes[n];
// #DB i:8 orig:             if (t === 0) {
// #DB i:8 orig:               Ao(e, s, r, o);
// #DB i:8 orig:             } else {
// #DB i:8 orig:               Mo(e, s, r, o);
// #DB i:8 orig:             }
// #DB i:8 orig:             if (16384 & s.flags) {
// #DB i:8 orig:               Io(e, Ro(e, n));
// #DB i:8 orig:             }
// #DB i:8 orig:             if (224 & s.flags) {
// #DB i:8 orig:               return Zt(e, s.nodeIndex).value;
// #DB i:8 orig:             } else {
// #DB i:8 orig:               return;
// #DB i:8 orig:             }
// #DB i:8 orig:           }, e);
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function So(e, t) {//#RF [object Object]
// #DB i:8 orig:           if (128 & e.state) {
// #DB i:8 orig:             throw Yt(ko[Eo]);
// #DB i:8 orig:           }
// #DB i:8 orig:           Io(e, jo(e, 0));
// #DB i:8 orig:           return e.def.updateRenderer(function(e, n, r) {
// #DB i:8 orig:             var o = [];
// #DB i:8 orig:             for (var i = 3; i < arguments.length; i++) {
// #DB i:8 orig:               o[i - 3] = arguments[i];
// #DB i:8 orig:             }
// #DB i:8 orig:             var s = e.def.nodes[n];
// #DB i:8 orig:             if (t === 0) {
// #DB i:8 orig:               Ao(e, s, r, o);
// #DB i:8 orig:             } else {
// #DB i:8 orig:               Mo(e, s, r, o);
// #DB i:8 orig:             }
// #DB i:8 orig:             if (3 & s.flags) {
// #DB i:8 orig:               Io(e, jo(e, n));
// #DB i:8 orig:             }
// #DB i:8 orig:             if (224 & s.flags) {
// #DB i:8 orig:               return Zt(e, s.nodeIndex).value;
// #DB i:8 orig:             } else {
// #DB i:8 orig:               return;
// #DB i:8 orig:             }
// #DB i:8 orig:           }, e);
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Ao(e, t, n, r) {//#RF [object Object]
// #DB i:8 orig:           if (Gr.apply(void 0, [e, t, n].concat(r))) {
// #DB i:8 orig:             var o = n === 1 ? r[0] : r;
// #DB i:8 orig:             if (16384 & t.flags) {
// #DB i:8 orig:               var i = {};
// #DB i:8 orig:               for (var s = 0; s < t.bindings.length; s++) {
// #DB i:8 orig:                 var u = t.bindings[s];
// #DB i:8 orig:                 var a = o[s];
// #DB i:8 orig:                 if (8 & u.flags) {
// #DB i:8 orig:                   i[
// #DB i:8 orig:                     ((f = u.nonMinifiedName),
// #DB i:8 orig:                     'ng-reflect-' +
// #DB i:8 orig:                       (f = f.replace(/[$@]/g, '_').replace(Po, function() {
// #DB i:8 orig:                         var e = [];
// #DB i:8 orig:                         for (var t = 0; t < arguments.length; t++) {
// #DB i:8 orig:                           e[t] = arguments[t];
// #DB i:8 orig:                         }
// #DB i:8 orig:                         return '-' + e[1].toLowerCase();
// #DB i:8 orig:                       })))
// #DB i:8 orig:                   ] = Do(a);
// #DB i:8 orig:                 }
// #DB i:8 orig:               }
// #DB i:8 orig:               var c = t.parent;
// #DB i:8 orig:               var l = zt(e, c.nodeIndex).renderElement;
// #DB i:8 orig:               if (c.element.name) {
// #DB i:8 orig:                 for (var d in i) {
// #DB i:8 orig:                   if ((a = i[d]) == null) {
// #DB i:8 orig:                     e.renderer.removeAttribute(l, d);
// #DB i:8 orig:                   } else {
// #DB i:8 orig:                     e.renderer.setAttribute(l, d, a);
// #DB i:8 orig:                   }
// #DB i:8 orig:                 }
// #DB i:8 orig:               } else {
// #DB i:8 orig:                 e.renderer.setValue(
// #DB i:8 orig:                   l,
// #DB i:8 orig:                   'bindings=' + JSON.stringify(i, null, 2)
// #DB i:8 orig:                 );
// #DB i:8 orig:               }
// #DB i:8 orig:             }
// #DB i:8 orig:           }
// #DB i:8 orig:           var f;
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Mo(e, t, n, r) {//#RF [object Object]
// #DB i:8 orig:           Yr.apply(void 0, [e, t, n].concat(r));
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Do(e) {//#RF [object Object]
// #DB i:8 orig:           try {
// #DB i:8 orig:             if (e == null) {
// #DB i:8 orig:               return e;
// #DB i:8 orig:             } else {
// #DB i:8 orig:               return e.toString().slice(0, 30);
// #DB i:8 orig:             }
// #DB i:8 orig:           } catch (e) {
// #DB i:8 orig:             return '[ERROR] Exception while trying to serialize the value';
// #DB i:8 orig:           }
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Ro(e, t) {//#RF [object Object]
// #DB i:8 orig:           for (var n = t; n < e.def.nodes.length; n++) {
// #DB i:8 orig:             var r = e.def.nodes[n];
// #DB i:8 orig:             if (16384 & r.flags && r.bindings && r.bindings.length) {
// #DB i:8 orig:               return n;
// #DB i:8 orig:             }
// #DB i:8 orig:           }
// #DB i:8 orig:           return null;
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function jo(e, t) {//#RF [object Object]
// #DB i:8 orig:           for (var n = t; n < e.def.nodes.length; n++) {
// #DB i:8 orig:             var r = e.def.nodes[n];
// #DB i:8 orig:             if (3 & r.flags && r.bindings && r.bindings.length) {
// #DB i:8 orig:               return n;
// #DB i:8 orig:             }
// #DB i:8 orig:           }
// #DB i:8 orig:           return null;
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Ho(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           for (var r in t.references) {
// #DB i:8 orig:             n[r] = Ar(e, t, t.references[r]);
// #DB i:8 orig:           }
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Lo(e, t, n, r) {//#RF [object Object]
// #DB i:8 orig:           var o = Eo;
// #DB i:8 orig:           var i = xo;
// #DB i:8 orig:           var s = To;
// #DB i:8 orig:           try {
// #DB i:8 orig:             Eo = e;
// #DB i:8 orig:             var u = t.apply(n, r);
// #DB i:8 orig:             xo = i;
// #DB i:8 orig:             To = s;
// #DB i:8 orig:             Eo = o;
// #DB i:8 orig:             return u;
// #DB i:8 orig:           } catch (e) {
// #DB i:8 orig:             if (K(e) || !xo) {
// #DB i:8 orig:               throw e;
// #DB i:8 orig:             }
// #DB i:8 orig:             throw (function(e, t) {
// #DB i:8 orig:               if (!(e instanceof Error)) {
// #DB i:8 orig:                 e = new Error(e.toString());
// #DB i:8 orig:               }
// #DB i:8 orig:               qt(e, t);
// #DB i:8 orig:               return e;
// #DB i:8 orig:             })(e, Fo());
// #DB i:8 orig:           }
// #DB END i: orig:         }
// #DB6 START i:8 orig:         function Fo() {//#RF [object Object]
// #DB i:8 orig:           if (xo) {
// #DB i:8 orig:             return new Vo(xo, To);
// #DB i:8 orig:           } else {
// #DB i:8 orig:             return null;
// #DB i:8 orig:           }
// #DB END i: orig:         }
        function Uo(e, t, n) {// #QB i:9650 orig: 
          return new Wo(e, t, n);// #QA1 i:9650 orig: 
        }// #QA1 i:9650 orig: 
        n.d(t, 'e', function() {// #QA1 i:9650 orig: 
          return Je;// #QA1 i:9650 orig: 
        });// #QA1 i:9650 orig: 
        n.d(t, 'E', function() {// #QA1 i:9650 orig: 
          return Ze;// #QA1 i:9650 orig: 
        });// #QA1 i:9650 orig: 
// #DB7 START i:8 orig:         n.d(t, 'G', function() {//#RF [object Object]
// #DB i:8 orig:           return We;
// #DB END i: orig:         });
        n.d(t, 'D', function() {// #QA1 i:9655 orig: 
          return Ge;// #QA1 i:9655 orig: 
        });// #QA1 i:9655 orig: 
        n.d(t, 'q', function() {// #QA1 i:9655 orig: 
          return Qe;// #QA1 i:9655 orig: 
        });// #QA1 i:9655 orig: 
        n.d(t, 'a', function() {// #QA1 i:9655 orig: 
          return oe;// #QA1 i:9655 orig: 
        });// #QA1 i:9655 orig: 
        n.d(t, 'u', function() {// #QA1 i:9655 orig: 
          return ue;// #QA1 i:9655 orig: 
        });// #QA1 i:9655 orig: 
        n.d(t, 't', function() {// #QA1 i:9655 orig: 
          return ae;// #QA1 i:9655 orig: 
        });// #QA1 i:9655 orig: 
        n.d(t, 'b', function() {// #QA1 i:9655 orig: 
          return ne;// #QA1 i:9655 orig: 
        });// #QA1 i:9655 orig: 
        n.d(t, 'c', function() {// #QA1 i:9655 orig: 
          return re;// #QA1 i:9655 orig: 
        });// #QA1 i:9655 orig: 
// #DB7 START i:8 orig:         n.d(t, 'F', function() {//#RF [object Object]
// #DB i:8 orig:           return ct;
// #DB END i: orig:         });
        n.d(t, 'z', function() {// #QA1 i:9657 orig: 
          return je;// #QA1 i:9657 orig: 
        });// #QA1 i:9657 orig: 
        n.d(t, 'I', function() {// #QA1 i:9657 orig: 
          return He;// #QA1 i:9657 orig: 
        });// #QA1 i:9657 orig: 
        n.d(t, 'o', function() {// #QA1 i:9657 orig: 
          return Mt;// #QA1 i:9657 orig: 
        });// #QA1 i:9657 orig: 
        n.d(t, 'd', function() {// #QA1 i:9657 orig: 
          return jt;// #QA1 i:9657 orig: 
        });// #QA1 i:9657 orig: 
// #DB7 START i:8 orig:         n.d(t, 'i', function() {//#RF [object Object]
// #DB i:8 orig:           return Oe;
// #DB END i: orig:         });
        n.d(t, 'h', function() {// #QA1 i:9660 orig: 
          return $;// #QA1 i:9660 orig: 
        });// #QA1 i:9660 orig: 
// #KFB02 START i:8 orig:         n.d(t, 'x', function() {
// #DB i:8 orig:           return Ht;
// #DB END i: orig:         });
// #DB7 START i:8 orig:         n.d(t, 'y', function() {//#RF [object Object]
// #DB i:8 orig:           return Vt;
// #DB END i: orig:         });
// #DB7 START i:8 orig:         n.d(t, 'B', function() {//#RF [object Object]
// #DB i:8 orig:           return f;
// #DB END i: orig:         });
// #DB7 START i:8 orig:         n.d(t, 'A', function() {//#RF [object Object]
// #DB i:8 orig:           return p;
// #DB END i: orig:         });
        n.d(t, 'l', function() {// #QB i:9669 orig: 
          return P;// #QA1 i:9669 orig: 
        });// #QA1 i:9669 orig: 
        n.d(t, 'k', function() {// #QB i:9669 orig: 
          return c;// #QA1 i:9669 orig: 
        });// #QA1 i:9669 orig: 
// #DB7 START i:8 orig:         n.d(t, 'j', function() {//#RF [object Object]
// #DB i:8 orig:           return v;
// #DB END i: orig:         });
// #DB7 START i:8 orig:         n.d(t, 's', function() {//#RF [object Object]
// #DB i:8 orig:           return y;
// #DB END i: orig:         });
// #KFB02 START i:8 orig:         n.d(t, 'r', function() {
// #DB i:8 orig:           return Ne;
// #DB END i: orig:         });
        n.d(t, 'v', function() {// #QA1 i:9721 orig: 
          return $e;// #QA1 i:9721 orig: 
        });// #QA1 i:9721 orig: 
// #DB7 START i:8 orig:         n.d(t, 'w', function() {//#RF [object Object]
// #DB i:8 orig:           return et;
// #DB END i: orig:         });
// #KFB02 START i:8 orig:         n.d(t, 'f', function() {
// #DB i:8 orig:           return fe;
// #DB END i: orig:         });
        n.d(t, 'g', function() {// #QA1 i:9740 orig: 
          return _e;// #QA1 i:9740 orig: 
        });// #QA1 i:9740 orig: 
        n.d(t, 'p', function() {// #QA1 i:9740 orig: 
          return Ee;// #QA1 i:9740 orig: 
        });// #QA1 i:9740 orig: 
// #KFB02 START i:8 orig:         n.d(t, 'm', function() {
// #DB i:8 orig:           return kt;
// #DB END i: orig:         });
// #KFB02 START i:8 orig:         n.d(t, 'n', function() {
// #DB i:8 orig:           return It;
// #DB END i: orig:         });
// #DB7 START i:8 orig:         n.d(t, 'C', function() {//#RF [object Object]
// #DB i:8 orig:           return ft;
// #DB END i: orig:         });
        n.d(t, 'H', function() {// #QA1 i:9752 orig: 
          return At;// #QA1 i:9752 orig: 
        });// #QA1 i:9752 orig: 
// #DB7 START i:8 orig:         n.d(t, 'S', function() {//#RF [object Object]
// #DB i:8 orig:           return ht;
// #DB END i: orig:         });
// #KFB02 START i:8 orig:         n.d(t, 'K', function() {
// #DB i:8 orig:           return le;
// #DB END i: orig:         });
        n.d(t, 'J', function() {// #QA1 i:9756 orig: 
          return we;// #QA1 i:9756 orig: 
        });// #QA1 i:9756 orig: 
        n.d(t, 'Q', function() {// #QA1 i:9756 orig: 
          return w;// #QA1 i:9756 orig: 
        });// #QA1 i:9756 orig: 
// #DB7 START i:8 orig:         n.d(t, '_0', function() {//#RF [object Object]
// #DB i:8 orig:           return I;
// #DB END i: orig:         });
// #DB7 START i:8 orig:         n.d(t, 'T', function() {//#RF [object Object]
// #DB i:8 orig:           return te;
// #DB END i: orig:         });
// #DB7 START i:8 orig:         n.d(t, 'U', function() {//#RF [object Object]
// #DB i:8 orig:           return ee;
// #DB END i: orig:         });
        n.d(t, 'L', function() {// #QA1 i:9774 orig: 
          return Qn;// #QA1 i:9774 orig: 
        });// #QA1 i:9774 orig: 
        n.d(t, 'M', function() {// #QA1 i:9774 orig: 
          return Uo;// #QA1 i:9774 orig: 
        });// #QA1 i:9774 orig: 
        n.d(t, 'N', function() {// #QA1 i:9774 orig: 
          return tn;// #QA1 i:9774 orig: 
        });// #QA1 i:9774 orig: 
        n.d(t, 'O', function() {// #QA1 i:9774 orig: 
          return hr;// #QA1 i:9774 orig: 
        });// #QA1 i:9774 orig: 
        n.d(t, 'P', function() {// #QA1 i:9774 orig: 
          return On;// #QA1 i:9774 orig: 
        });// #QA1 i:9774 orig: 
        n.d(t, 'V', function() {// #QA1 i:9774 orig: 
          return Vn;// #QA1 i:9774 orig: 
        });// #QA1 i:9774 orig: 
        n.d(t, 'W', function() {// #QA1 i:9774 orig: 
          return jn;// #QA1 i:9774 orig: 
        });// #QA1 i:9774 orig: 
        n.d(t, '_1', function() {// #KFB01 START i:9774 orig: 8//#RF [object Object]
          return Pr;// #NOT DELETABLE i:9774 orig: 8
        });// #KB1 END i:9777 orig: 
        n.d(t, '_2', function() {// #QA1 i:9780 orig: 
          return jr;// #QA1 i:9780 orig: 
        });// #QA1 i:9780 orig: 
// #KFB02 START i:8 orig:         n.d(t, 'X', function() {
// #DB i:8 orig:           return Pt;
// #DB END i: orig:         });
// #KFB02 START i:8 orig:         n.d(t, 'Y', function() {
// #DB i:8 orig:           return Dt;
// #DB END i: orig:         });
// #KFB02 START i:8 orig:         n.d(t, 'Z', function() {
// #DB i:8 orig:           return Rt;
// #DB END i: orig:         });
// #KFB02 START i:8 orig:         n.d(t, 'R', function() {
// #DB i:8 orig:           return ie;
// #DB END i: orig:         });
        var r = n('TToO');// #QA1 i:9804 orig: 
        var o = n('YaPU');// #QA1 i:9804 orig: 
        var i = n('/nXB');// #QA1 i:9804 orig: 
        var s = n('Rf9G');// #QA1 i:9804 orig: 
// #DSL i: orig:         var u = n('g5jc');
        var a = n('VwZZ');// #QA1 i:9804 orig: 
        var c =function(n){};// #CB2 START i:9804 orig: 8
// #CB i:8 orig:           function e(e) {
// #CB i:8 orig:             this._desc = e;
// #CB i:8 orig:             this.ngMetadataName = 'InjectionToken';
// #CB i:8 orig:           }
// #CB i:8 orig:           e.prototype.toString = function() {
// #CB i:8 orig:             return 'InjectionToken ' + this._desc;
// #CB i:8 orig:           };
// #CB i:8 orig:           return e;
// #CB END i: orig:         })();
        var l = '__paramaters__';// #QA1 i:9814 orig: 
        var f =function(n){};// #CB2 START i:9814 orig: 8
// #CB i:8 orig:           var e = { Emulated: 0, Native: 1, None: 2 };
// #CB i:8 orig:           e[e.Emulated] = 'Emulated';
// #CB i:8 orig:           e[e.Native] = 'Native';
// #CB i:8 orig:           e[e.None] = 'None';
// #CB i:8 orig:           return e;
// #CB END i: orig:         })();
        var p = function(e) {// #QA1 i:9823 orig: 
          this.full = e;// #QA1 i:9823 orig: 
          this.major = e.split('.')[0];// #QA1 i:9823 orig: 
          this.minor = e.split('.')[1];// #QA1 i:9823 orig: 
          this.patch = e// #QA1 i:9823 orig: 
            .split('.')// #QA1 i:9823 orig: 
            .slice(2)// #QA1 i:9823 orig: 
            .join('.');// #QA1 i:9823 orig: 
        };// #QA1 i:9823 orig: 
        var h = new p('5.2.10');// #QA1 i:9823 orig: 
// #DB7 START i:8 orig:         var v = d('Inject', function(e) {//#RF [object Object]
// #DB i:8 orig:           return { token: e };
// #DB END i: orig:         });
// #DSL i: orig:         var y = d('Optional');
        var g = d('Self');// #QA1 i:9827 orig: 
        var m = d('SkipSelf');// #QA1 i:9827 orig: 
        var b = typeof window != 'undefined' && window;// #QA1 i:9827 orig: 
        var _ =// #QA1 i:9827 orig: 
          typeof self != 'undefined' &&// #QA1 i:9827 orig: 
          typeof WorkerGlobalScope != 'undefined' &&// #QA1 i:9827 orig: 
          self instanceof WorkerGlobalScope &&// #QA1 i:9827 orig: 
          self;// #QA1 i:9827 orig: 
        var w = b || (typeof e != 'undefined' && e) || _;// #QA1 i:9827 orig: 
// #DSL i: orig:         var C = Promise.resolve(0);
// #DSL i: orig:         var E = null;
        var S = '__source';// #QA1 i:9827 orig: 
        var A = new Object();// #QA1 i:9827 orig: 
        var M = (function() {// #QA6 i:9827 orig: 
          function e() {}// #QA4 i:9827 orig: 
          e.prototype.get = function(e, t) {// #QA1 i:9827 orig: 
            if (t === void 0) {// #QA1 i:9827 orig: 
              t = A;// #QA1 i:9827 orig: 
            }// #QA1 i:9827 orig: 
            if (t === A) {// #QA1 i:9827 orig: 
              throw new Error(// #QA1 i:9827 orig: 
                'NullInjectorError: No provider for ' + I(e) + '!'// #QA1 i:9827 orig: 
              );// #QA1 i:9827 orig: 
            }// #QA1 i:9827 orig: 
            return t;// #QA1 i:9827 orig: 
          };// #QA1 i:9827 orig: 
          return e;// #QA1 i:9827 orig: 
        })();// #QA1 i:9827 orig: 
        var P = (function() {// #QA6 i:9827 orig: 
// #DL SINGLE FUNC i: orig:           function e() {}//#RF [object Object]
          e.create = function(e, t) {// #QA1 i:9827 orig: 
            if (Array.isArray(e)) {// #QA1 i:9827 orig: 
              return new U(e, t);// #QA1 i:9827 orig: 
            } else {// #QA1 i:9827 orig: 
              return new U(e.providers, e.parent, e.name || null);// #QA1 i:9827 orig: 
            }// #QA1 i:9827 orig: 
          };// #QA1 i:9827 orig: 
          e.THROW_IF_NOT_FOUND = A;// #QA1 i:9827 orig: 
          e.NULL = new M();// #QA1 i:9827 orig: 
          return e;// #QA1 i:9827 orig: 
        })();// #QA1 i:9827 orig: 
        var D = function(e) {// #KFB01 START i:9827 orig: 8//#RF [object Object]
// #KB1 i:8 orig:           return e;
        };// #KB1 END i:9828 orig: 
        var R = [];// #QA1 i:9829 orig: 
        var j = D;// #QA1 i:9829 orig: 
        var V = function() {// #QA1 i:9829 orig: 
          return Array.prototype.slice.call(arguments);// #QA1 i:9829 orig: 
        };// #QA1 i:9829 orig: 
        var H = {};// #QA1 i:9829 orig: 
        var L = (function() {// #QA6 i:9829 orig: 
          var e = { provide: String, useValue: H };// #QA1 i:9829 orig: 
          for (var t in e) {// #QA1 i:9829 orig: 
            if (e[t] === H) {// #QA1 i:9829 orig: 
              return t;// #QA1 i:9829 orig: 
            }// #QA1 i:9829 orig: 
          }// #QA1 i:9829 orig: 
          throw Error('!prop');// #QA1 i:9829 orig: 
        })();// #QA1 i:9829 orig: 
        var F = P.NULL;// #QA1 i:9829 orig: 
// #DSL i: orig:         var B = /\n/gm;
        var z = '\u0275';// #QA1 i:9829 orig: 
        var U = (function() {// #QA6 i:9829 orig: 
          function e(e, t, n) {// #KBQ i:9829 orig: 10
            if (t === void 0) {// #NOT DELETABLE i:9829 orig: 10
              t = F;// #NOT DELETABLE i:9830 orig: 10
            }// #NOT DELETABLE i:9831 orig: 10
// #KB1 i:10 orig:             if (n === void 0) {
// #KB1 i:10 orig:               n = null;
// #KB1 i:10 orig:             }
            this.parent = t;// #NOT DELETABLE i:9836 orig: 10
// #KB1 i:10 orig:             this.source = n;
            var r = (this._records = new Map());// #NOT DELETABLE i:9842 orig: 10
            r.set(P, { token: P, fn: D, deps: R, value: this, useNew: false });// #NOT DELETABLE i:9843 orig: 10
            (function e(t, n) {// #NOT DELETABLE i:9844 orig: 10
              if (n) {// #NOT DELETABLE i:9845 orig: 10
                if ((n = N(n)) instanceof Array) {// #NOT DELETABLE i:9851 orig: 10
                  for (var r = 0; r < n.length; r++) {// #NOT DELETABLE i:9853 orig: 10
                    e(t, n[r]);// #NOT DELETABLE i:9855 orig: 10
                  }// #NOT DELETABLE i:9862 orig: 10
                } else {// #NOT DELETABLE i:9863 orig: 10
// #KB1 i:10 orig:                   if (typeof n == 'function') {
// #KB1 i:10 orig:                     throw Q('Function/Class not supported', n);
// #KB1 i:10 orig:                   }
// #KB1 i:10 orig:                   if (!n || typeof n != 'object' || !n.provide) {
// #KB1 i:10 orig:                     throw Q('Unexpected provider', n);
// #KB1 i:10 orig:                   }
                  var o = N(n.provide);// #NOT DELETABLE i:9870 orig: 10
                  var i = (function(e) {// #NOT DELETABLE i:9872 orig: 10
                    var t = (function(e) {// #NOT DELETABLE i:9876 orig: 10
                      var t = R;// #NOT DELETABLE i:9880 orig: 10
                      var n = e.deps;// #NOT DELETABLE i:9884 orig: 10
                      if (n && n.length) {// #NOT DELETABLE i:9888 orig: 10
                        t = [];// #NOT DELETABLE i:9889 orig: 10
                        for (var r = 0; r < n.length; r++) {// #NOT DELETABLE i:9891 orig: 10
                          var o = 6;// #NOT DELETABLE i:9897 orig: 10
                          if ((a = N(n[r])) instanceof Array) {// #NOT DELETABLE i:9901 orig: 10
// #KB1 i:10 orig:                             var i = 0;
// #KB1 i:10 orig:                             for (var s = a; i < s.length; i++) {
// #KB1 i:10 orig:                               var u = s[i];
// #KB1 i:10 orig:                               if (u instanceof y || u == y) {
// #KB1 i:10 orig:                                 o |= 1;
// #KB1 i:10 orig:                               } else if (u instanceof m || u == m) {
// #KB1 i:10 orig:                                 o &= -3;
// #KB1 i:10 orig:                               } else if (u instanceof g || u == g) {
// #KB1 i:10 orig:                                 o &= -5;
// #KB1 i:10 orig:                               } else {
// #KB1 i:10 orig:                                 a = u instanceof v ? u.token : N(u);
// #KB1 i:10 orig:                               }
// #KB1 i:10 orig:                             }
                          }// #NOT DELETABLE i:9919 orig: 10
                          t.push({ token: a, options: o });// #NOT DELETABLE i:9920 orig: 10
                        }// #NOT DELETABLE i:9922 orig: 10
                      } else if (e.useExisting) {// #NOT DELETABLE i:9926 orig: 10
                        var a;// #NOT DELETABLE i:9927 orig: 10
// #KB1 i:10 orig:                         t = [{ token: (a = N(e.useExisting)), options: 6 }];
// #KB1 i:10 orig:                       } else if (!n && !(L in e)) {
// #KB1 i:10 orig:                         throw Q("'deps' required", e);
                      }// #NOT DELETABLE i:9932 orig: 10
                      return t;// #NOT DELETABLE i:9933 orig: 10
                    })(e);// #NOT DELETABLE i:9935 orig: 10
                    var n = D;// #NOT DELETABLE i:9939 orig: 10
                    var r = R;// #NOT DELETABLE i:9940 orig: 10
                    var o = false;// #NOT DELETABLE i:9941 orig: 10
                    var i = N(e.provide);// #NOT DELETABLE i:9942 orig: 10
                    if (L in e) {// #NOT DELETABLE i:9945 orig: 10
                      r = e.useValue;// #NOT DELETABLE i:9946 orig: 10
                    } else if (e.useFactory) {// #NOT DELETABLE i:9947 orig: 10
// #KB1 i:10 orig:                       n = e.useFactory;
// #KB1 i:10 orig:                     } else if (e.useExisting) {
// #KB1 i:10 orig:                     } else if (e.useClass) {
// #KB1 i:10 orig:                       o = true;
// #KB1 i:10 orig:                       n = N(e.useClass);
                    } else {// #NOT DELETABLE i:9996 orig: 10
// #KB1 i:10 orig:                       if (typeof i != 'function') {
// #KB1 i:10 orig:                         throw Q(
// #KB1 i:10 orig:                           'StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable',
// #KB1 i:10 orig:                           e
// #KB1 i:10 orig:                         );
// #KB1 i:10 orig:                       }
                      o = true;// #NOT DELETABLE i:10005 orig: 10
                      n = i;// #NOT DELETABLE i:10007 orig: 10
                    }// #NOT DELETABLE i:10008 orig: 10
                    return { deps: t, fn: n, useNew: o, value: r };// #NOT DELETABLE i:10009 orig: 10
                  })(n);// #NOT DELETABLE i:10011 orig: 10
// #KB1 i:10 orig:                   if (n.multi === true) {
// #KB1 i:10 orig:                     var s = t.get(o);
// #KB1 i:10 orig:                     if (s) {
// #KB1 i:10 orig:                       if (s.fn !== V) {
// #KB1 i:10 orig:                         throw Z(o);
// #KB1 i:10 orig:                       }
// #KB1 i:10 orig:                     } else {
// #KB1 i:10 orig:                       t.set(
// #KB1 i:10 orig:                         o,
// #KB1 i:10 orig:                         (s = {
// #KB1 i:10 orig:                           token: n.provide,
// #KB1 i:10 orig:                           deps: [],
// #KB1 i:10 orig:                           useNew: false,
// #KB1 i:10 orig:                           fn: V,
// #KB1 i:10 orig:                           value: R,
// #KB1 i:10 orig:                         })
// #KB1 i:10 orig:                       );
// #KB1 i:10 orig:                     }
// #KB1 i:10 orig:                     s.deps.push({ token: (o = n), options: 6 });
// #KB1 i:10 orig:                   }
// #KB1 i:10 orig:                   var u = t.get(o);
// #KB1 i:10 orig:                   if (u && u.fn == V) {
// #KB1 i:10 orig:                     throw Z(o);
// #KB1 i:10 orig:                   }
                  t.set(o, i);// #NOT DELETABLE i:10050 orig: 10
                }// #NOT DELETABLE i:10053 orig: 10
              }// #NOT DELETABLE i:10055 orig: 10
            })(r, e);// #NOT DELETABLE i:10059 orig: 10
          }// #KB1 END i:10060 orig: 
          e.prototype.get = function(e, t) {// #QA1 i:10061 orig: 
            var n = this._records.get(e);// #QA1 i:10061 orig: 
            try {// #QA1 i:10061 orig: 
              return (function e(t, n, r, o, i) {// #QA1 i:10061 orig: 
                try {// #QA1 i:10061 orig: 
                  return (function(t, n, r, o, i) {// #QA1 i:10061 orig: 
                    var s;// #QA1 i:10061 orig: 
                    var u;// #QA1 i:10061 orig: 
                    if (n) {// #QA1 i:10061 orig: 
                      if ((s = n.value) == j) {// #QA1 i:10061 orig: 
                        throw Error(z + 'Circular dependency');// #QA1 i:10061 orig: 
                      }// #QA1 i:10061 orig: 
                      if (s === R) {// #QA1 i:10061 orig: 
                        n.value = j;// #QA1 i:10061 orig: 
                        var a = n.useNew;// #QA1 i:10061 orig: 
                        var c = n.fn;// #QA1 i:10061 orig: 
                        var l = n.deps;// #QA1 i:10061 orig: 
                        var d = R;// #QA1 i:10061 orig: 
                        if (l.length) {// #QA1 i:10061 orig: 
                          d = [];// #QA1 i:10061 orig: 
                          for (var f = 0; f < l.length; f++) {// #QA1 i:10061 orig: 
                            var p = l[f];// #QA1 i:10061 orig: 
                            var h = p.options;// #QA1 i:10061 orig: 
                            var v = 2 & h ? r.get(p.token) : void 0;// #QA1 i:10061 orig: 
                            d.push(// #QA1 i:10061 orig: 
                              e(// #QA1 i:10061 orig: 
                                p.token,// #QA1 i:10061 orig: 
                                v,// #QA1 i:10061 orig: 
                                r,// #QA1 i:10061 orig: 
                                v || 4 & h ? o : F,// #QA1 i:10061 orig: 
                                1 & h ? null : P.THROW_IF_NOT_FOUND// #QA1 i:10061 orig: 
                              )// #QA1 i:10061 orig: 
                            );// #QA1 i:10061 orig: 
                          }// #QA1 i:10061 orig: 
                        }// #QA1 i:10061 orig: 
                        n.value = s = a// #QA1 i:10061 orig: 
                          ? new ((u = c).bind.apply(u, [void 0].concat(d)))()// #QA1 i:10061 orig: 
                          : c.apply(void 0, d);// #QA1 i:10061 orig: 
                      }// #QA1 i:10061 orig: 
                    } else {// #QA1 i:10061 orig: 
                      s = o.get(t, i);// #QA1 i:10061 orig: 
                    }// #QA1 i:10061 orig: 
                    return s;// #QA1 i:10061 orig: 
                  })(t, n, r, o, i);// #QA1 i:10061 orig: 
                } catch (e) {// #QA1 i:10061 orig: 
                  if (!(e instanceof Error)) {// #QA1 i:10061 orig: 
                    e = new Error(e);// #QA1 i:10061 orig: 
                  }// #QA1 i:10061 orig: 
                  (e.ngTempTokenPath = e.ngTempTokenPath || []).unshift(t);// #QA1 i:10061 orig: 
                  if (n && n.value == j) {// #QA1 i:10061 orig: 
                    n.value = R;// #QA1 i:10061 orig: 
                  }// #QA1 i:10061 orig: 
                  throw e;// #QA1 i:10061 orig: 
                }// #QA1 i:10061 orig: 
              })(e, n, this._records, this.parent, t);// #QA1 i:10061 orig: 
            } catch (t) {// #QA1 i:10061 orig: 
              var r = t.ngTempTokenPath;// #QA1 i:10061 orig: 
              if (e[S]) {// #QA1 i:10061 orig: 
                r.unshift(e[S]);// #QA1 i:10061 orig: 
              }// #QA1 i:10061 orig: 
              t.message = W('\n' + t.message, r, this.source);// #QA1 i:10061 orig: 
              t.ngTokenPath = r;// #QA1 i:10061 orig: 
              t.ngTempTokenPath = null;// #QA1 i:10061 orig: 
              throw t;// #QA1 i:10061 orig: 
            }// #QA1 i:10061 orig: 
          };// #QA1 i:10061 orig: 
// #DB4 START i:10 orig:           e.prototype.toString = function() {//#RF [object Object]
// #DB i:10 orig:             var e = [];
// #DB i:10 orig:             this._records.forEach(function(t, n) {
// #DB i:10 orig:               return e.push(I(n));
// #DB i:10 orig:             });
// #DB i:10 orig:             return 'StaticInjector[' + e.join(', ') + ']';
// #DB END i: orig:           };
          return e;// #QA1 i:10076 orig: 
        })();// #QA1 i:10076 orig: 
// #DSL i: orig:         var G = 'ngDebugContext';
// #DSL i: orig:         var q = 'ngOriginalError';
// #DSL i: orig:         var Y = 'ngErrorLogger';
        var $ =function(n){};// #CB2 START i:10076 orig: 8
// #CB i:8 orig:           function e() {
// #CB i:8 orig:             this._console = console;
// #CB i:8 orig:           }
// #CB i:8 orig:           e.prototype.handleError = function(e) {
// #CB i:8 orig:             var t = this._findOriginalError(e);
// #CB i:8 orig:             var n = this._findContext(e);
// #CB i:8 orig:             var r = (function(e) {
// #CB i:8 orig:               return e[Y] || X;
// #CB i:8 orig:             })(e);
// #CB i:8 orig:             r(this._console, 'ERROR', e);
// #CB i:8 orig:             if (t) {
// #CB i:8 orig:               r(this._console, 'ORIGINAL ERROR', t);
// #CB i:8 orig:             }
// #CB i:8 orig:             if (n) {
// #CB i:8 orig:               r(this._console, 'ERROR CONTEXT', n);
// #CB i:8 orig:             }
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype._findContext = function(e) {
// #CB i:8 orig:             if (e) {
// #CB i:8 orig:               if (K(e)) {
// #CB i:8 orig:                 return K(e);
// #CB i:8 orig:               } else {
// #CB i:8 orig:                 return this._findContext(J(e));
// #CB i:8 orig:               }
// #CB i:8 orig:             } else {
// #CB i:8 orig:               return null;
// #CB i:8 orig:             }
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype._findOriginalError = function(e) {
// #CB i:8 orig:             for (var t = J(e); t && J(t); ) {
// #CB i:8 orig:               t = J(t);
// #CB i:8 orig:             }
// #CB i:8 orig:             return t;
// #CB i:8 orig:           };
// #CB i:8 orig:           return e;
// #CB END i: orig:         })();
        Function;// #QA1 i:10151 orig: 
        var ne = new c('Application Initializer');// #QA1 i:10151 orig: 
        var re = (function() {// #QA6 i:10151 orig: 
          function e(e) {// #KBQ i:10151 orig: 10
            var t = this;// #NOT DELETABLE i:10151 orig: 10
// #KB1 i:10 orig:             this.appInits = e;
// #KB1 i:10 orig:             this.initialized = false;
// #KB1 i:10 orig:             this.done = false;
            this.donePromise = new Promise(function(e, n) {// #NOT DELETABLE i:10156 orig: 10
              t.resolve = e;// #NOT DELETABLE i:10157 orig: 10
// #KB1 i:10 orig:               t.reject = n;
            });// #NOT DELETABLE i:10162 orig: 10
          }// #KB1 END i:10163 orig: 
          e.prototype.runInitializers = function() {// #QA1 i:10164 orig: 
            var e = this;// #QA1 i:10164 orig: 
            if (!this.initialized) {// #QA1 i:10164 orig: 
              var t = [];// #QA1 i:10164 orig: 
              var n = function() {// #QA1 i:10164 orig: 
                e.done = true;// #QA1 i:10164 orig: 
                e.resolve();// #QA1 i:10164 orig: 
              };// #QA1 i:10164 orig: 
              if (this.appInits) {// #QA1 i:10164 orig: 
                for (var r = 0; r < this.appInits.length; r++) {// #QA1 i:10164 orig: 
                  var o = this.appInits[r]();// #QA1 i:10164 orig: 
                  if (ee(o)) {// #QA1 i:10164 orig: 
                    t.push(o);// #QA1 i:10164 orig: 
                  }// #QA1 i:10164 orig: 
                }// #QA1 i:10164 orig: 
              }// #QA1 i:10164 orig: 
              Promise.all(t)// #QA1 i:10164 orig: 
                .then(function() {// #QA1 i:10164 orig: 
                  n();// #QA1 i:10164 orig: 
                })// #QA1 i:10164 orig: 
// #DB7 START i:16 orig:                 .catch(function(t) {//#RF [object Object]
// #DB i:16 orig:                   e.reject(t);
// #DB END i: orig:                 });
              if (t.length === 0) {// #QA1 i:10166 orig: 
                n();// #QA1 i:10166 orig: 
              }// #QA1 i:10166 orig: 
              this.initialized = true;// #QA1 i:10166 orig: 
            }// #QA1 i:10166 orig: 
          };// #QA1 i:10166 orig: 
          return e;// #QA1 i:10166 orig: 
        })();// #QA1 i:10166 orig: 
        var oe = new c('AppId');// #QA1 i:10166 orig: 
        var ue = new c('Platform Initializer');// #QA1 i:10166 orig: 
        var ae = new c('Platform ID');// #QA1 i:10166 orig: 
// #DSL i: orig:         var ce = new c('appBootstrapListener');
        var le =function(n){};// #CB2 START i:10166 orig: 8
// #CB i:8 orig:           function e() {}
// #CB i:8 orig:           e.prototype.log = function(e) {//#RF [object Object]
// #CB i:8 orig:             console.log(e);
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.warn = function(e) {//#RF [object Object]
// #CB i:8 orig:             console.warn(e);
// #CB i:8 orig:           };
// #CB i:8 orig:           e.ctorParameters = function() {//#RF [object Object]
// #CB i:8 orig:             return [];
// #CB i:8 orig:           };
// #CB i:8 orig:           return e;
// #CB END i: orig:         })();
        var fe =function(n){};// #CB2 START i:10194 orig: 8
// #CB i:8 orig:           function e() {}//#RF [object Object]
// #CB i:8 orig:           e.prototype.compileModuleSync = function(e) {//#RF [object Object]
// #CB i:8 orig:             throw de();
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.compileModuleAsync = function(e) {//#RF [object Object]
// #CB i:8 orig:             throw de();
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.compileModuleAndAllComponentsSync = function(e) {//#RF [object Object]
// #CB i:8 orig:             throw de();
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.compileModuleAndAllComponentsAsync = function(e) {//#RF [object Object]
// #CB i:8 orig:             throw de();
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.clearCache = function() {};//#RF [object Object]
// #CB i:8 orig:           e.prototype.clearCacheFor = function(e) {};//#RF [object Object]
// #CB i:8 orig:           return e;
// #CB END i: orig:         })();
// #DL SINGLE FUNC i: orig:         var pe = function() {};//#RF [object Object]
        var he = function() {};// #QA4 i:10249 orig: 
        var ye;// #QA1 i:10249 orig: 
        var ge;// #QA1 i:10249 orig: 
// #DSL i: orig:         var me = 'ngComponent';
// #DB START YYY START i:8 orig:         var be = (function() {
// #DB i:8 orig:           function e() {}
// #DB i:8 orig:           e.prototype.resolveComponentFactory = function(e) {//#RF [object Object]
// #DB i:8 orig:             throw ve(e);
// #DB i:8 orig:           };
// #DB i:8 orig:           return e;
// #DB END i: orig:         })();
        var _e =function(n){};// #CB2 START i:10286 orig: 8
// #CB i:8 orig:           function e() {}//#RF [object Object]
// #CB i:8 orig:           e.NULL = new be();
// #CB i:8 orig:           return e;
// #CB END i: orig:         })();
        var we = (function() {// #QA6 i:10308 orig: 
          function e(e, t, n) {// #QA3 i:10308 orig: 10
// #KB1 i:10 orig:             this._parent = t;
            this._ngModule = n;// #NOT DELETABLE i:10335 orig: 10
            this._factories = new Map();// #NOT DELETABLE i:10341 orig: 10
            for (var r = 0; r < e.length; r++) {// #NOT DELETABLE i:10398 orig: 10
              var o = e[r];// #NOT DELETABLE i:10399 orig: 10
              this._factories.set(o.componentType, o);// #NOT DELETABLE i:10399 orig: 10
            }// #NOT DELETABLE i:10399 orig: 10
          }// #KB1 END i:10399 orig: 
          e.prototype.resolveComponentFactory = function(e) {// #QA1 i:10399 orig: 
            var t = this._factories.get(e);// #QA1 i:10399 orig: 
            if (!t && this._parent) {// #QA1 i:10399 orig: 
              t = this._parent.resolveComponentFactory(e);// #QA1 i:10399 orig: 
            }// #QA1 i:10399 orig: 
            if (!t) {// #QA1 i:10399 orig: 
              throw ve(e);// #QA1 i:10399 orig: 
            }// #QA1 i:10399 orig: 
            return new Ce(t, this._ngModule);// #QA1 i:10399 orig: 
          };// #QA1 i:10399 orig: 
          return e;// #QA1 i:10399 orig: 
        })();// #QA1 i:10399 orig: 
        var Ce = (function() {// #QA6 i:10399 orig: 
          function t(t, n) {// #KBQ i:10399 orig: 10
            var r = e.call(this) || this;// #NOT DELETABLE i:10399 orig: 10
            r.factory = t;// #NOT DELETABLE i:10399 orig: 10
            r.ngModule = n;// #NOT DELETABLE i:10399 orig: 10
            r.selector = t.selector;// #NOT DELETABLE i:10399 orig: 10
// #KB1 i:10 orig:             r.componentType = t.componentType;
// #KB1 i:10 orig:             r.ngContentSelectors = t.ngContentSelectors;
// #KB1 i:10 orig:             r.inputs = t.inputs;
// #KB1 i:10 orig:             r.outputs = t.outputs;
            return r;// #NOT DELETABLE i:10399 orig: 10
          }// #KB1 END i:10399 orig: 
          var e = he;// #QA1 i:10399 orig: 
          Object(r.b)(t, e);// #QA1 i:10399 orig: 
          t.prototype.create = function(e, t, n, r) {// #QB i:10399 orig: 
            return this.factory.create(e, t, n, r || this.ngModule);// #QA1 i:10399 orig: 
          };// #QA1 i:10399 orig: 
          return t;// #QA1 i:10399 orig: 
        })();// #QA1 i:10399 orig: 
        var Ee = function() {};// #QA4 i:10399 orig: //#RF [object Object]
        var xe =function(){}();// #CB3 START i:10399 orig: 8
// #CB i:8 orig:           var e = w.wtf;
// #CB i:8 orig:           return !!e && !!(ye = e.trace) && !((ge = ye.events), 0);
// #CB END i: orig:         })();
        var ke = xe// #QA1 i:10399 orig: 
          ? function(e, t) {// #QA1 i:10399 orig: //#RF [object Object]
              if (t === void 0) {// #QA1 i:10399 orig: 
                t = null;// #QA1 i:10399 orig: 
              }// #QA1 i:10399 orig: 
              return ge.createScope(e, t);// #QA1 i:10399 orig: 
            }// #QA1 i:10399 orig: 
          : function(e, t) {// #QA1 i:10399 orig: 
              return Te;// #QA1 i:10399 orig: 
            };// #QA1 i:10399 orig: 
        var Ie = xe// #QA1 i:10399 orig: 
          ? function(e, t) {// #QA1 i:10399 orig: //#RF [object Object]
              ye.leaveScope(e, t);// #QA1 i:10399 orig: 
              return t;// #QA1 i:10399 orig: 
            }// #QA1 i:10399 orig: 
          : function(e, t) {// #QA1 i:10399 orig: 
              return t;// #QA1 i:10399 orig: 
            };// #QB i:10399 orig: 
        var Oe = (function() {// #KBQ i:10399 orig: 8
          function t(t) {// #NOT DELETABLE i:10399 orig: 8
// #KB1 i:8 orig:             if (t === void 0) {
// #KB1 i:8 orig:               t = false;
// #KB1 i:8 orig:             }
// #KB1 i:8 orig:             var n = e.call(this) || this;
// #KB1 i:8 orig:             n.__isAsync = t;
// #KB1 i:8 orig:             return n;
          }// #NOT DELETABLE i:10399 orig: 8
// #KB1 i:8 orig:           var e = u.a;
// #KB1 i:8 orig:           Object(r.b)(t, e);
// #KB1 i:8 orig:           t.prototype.emit = function(t) {
// #KB1 i:8 orig:             e.prototype.next.call(this, t);
// #KB1 i:8 orig:           };
// #KB1 i:8 orig:           t.prototype.subscribe = function(t, n, r) {
// #KB1 i:8 orig:             var o;
// #KB1 i:8 orig:             var i = function(e) {//#RF [object Object]
// #KB1 i:8 orig:               return null;
// #KB1 i:8 orig:             };
// #KB1 i:8 orig:             var s = function() {//#RF [object Object]
// #KB1 i:8 orig:               return null;
// #KB1 i:8 orig:             };
// #KB1 i:8 orig:             if (t && typeof t == 'object') {
// #KB1 i:8 orig:               o = this.__isAsync
// #KB1 i:8 orig:                 ? function(e) {//#RF [object Object]
// #KB1 i:8 orig:                     setTimeout(function() {
// #KB1 i:8 orig:                       return t.next(e);
// #KB1 i:8 orig:                     });
// #KB1 i:8 orig:                   }
// #KB1 i:8 orig:                 : function(e) {
// #KB1 i:8 orig:                     t.next(e);
// #KB1 i:8 orig:                   };
// #KB1 i:8 orig:               if (t.error) {
// #KB1 i:8 orig:                 i = this.__isAsync
// #KB1 i:8 orig:                   ? function(e) {//#RF [object Object]
// #KB1 i:8 orig:                       setTimeout(function() {
// #KB1 i:8 orig:                         return t.error(e);
// #KB1 i:8 orig:                       });
// #KB1 i:8 orig:                     }
// #KB1 i:8 orig:                   : function(e) {//#RF [object Object]
// #KB1 i:8 orig:                       t.error(e);
// #KB1 i:8 orig:                     };
// #KB1 i:8 orig:               }
// #KB1 i:8 orig:               if (t.complete) {
// #KB1 i:8 orig:                 s = this.__isAsync
// #KB1 i:8 orig:                   ? function() {//#RF [object Object]
// #KB1 i:8 orig:                       setTimeout(function() {
// #KB1 i:8 orig:                         return t.complete();
// #KB1 i:8 orig:                       });
// #KB1 i:8 orig:                     }
// #KB1 i:8 orig:                   : function() {//#RF [object Object]
// #KB1 i:8 orig:                       t.complete();
// #KB1 i:8 orig:                     };
// #KB1 i:8 orig:               }
// #KB1 i:8 orig:             } else {
// #KB1 i:8 orig:               o = this.__isAsync
// #KB1 i:8 orig:                 ? function(e) {//#RF [object Object]
// #KB1 i:8 orig:                     setTimeout(function() {
// #KB1 i:8 orig:                       return t(e);
// #KB1 i:8 orig:                     });
// #KB1 i:8 orig:                   }
// #KB1 i:8 orig:                 : function(e) {//#RF [object Object]
// #KB1 i:8 orig:                     t(e);
// #KB1 i:8 orig:                   };
// #KB1 i:8 orig:               if (n) {
// #KB1 i:8 orig:                 i = this.__isAsync
// #KB1 i:8 orig:                   ? function(e) {//#RF [object Object]
// #KB1 i:8 orig:                       setTimeout(function() {
// #KB1 i:8 orig:                         return n(e);
// #KB1 i:8 orig:                       });
// #KB1 i:8 orig:                     }
// #KB1 i:8 orig:                   : function(e) {//#RF [object Object]
// #KB1 i:8 orig:                       n(e);
// #KB1 i:8 orig:                     };
// #KB1 i:8 orig:               }
// #KB1 i:8 orig:               if (r) {
// #KB1 i:8 orig:                 s = this.__isAsync
// #KB1 i:8 orig:                   ? function() {//#RF [object Object]
// #KB1 i:8 orig:                       setTimeout(function() {
// #KB1 i:8 orig:                         return r();
// #KB1 i:8 orig:                       });
// #KB1 i:8 orig:                     }
// #KB1 i:8 orig:                   : function() {//#RF [object Object]
// #KB1 i:8 orig:                       r();
// #KB1 i:8 orig:                     };
// #KB1 i:8 orig:               }
// #KB1 i:8 orig:             }
// #KB1 i:8 orig:             var u = e.prototype.subscribe.call(this, o, i, s);
// #KB1 i:8 orig:             if (t instanceof a.a) {
// #KB1 i:8 orig:               t.add(u);
// #KB1 i:8 orig:             }
// #KB1 i:8 orig:             return u;
// #KB1 i:8 orig:           };
          return t;// #NOT DELETABLE i:10399 orig: 8
        })();// #KB1 END i:10399 orig: 
        var Ne = (function() {// #QA6 i:10399 orig: 
          function e(e) {// #QA3 i:10399 orig: 10
// #KB1 i:10 orig:             var t;
// #KB1 i:10 orig:             var n = e.enableLongStackTrace;
// #KB1 i:10 orig:             var r = n !== void 0 && n;
// #KB1 i:10 orig:             this.hasPendingMicrotasks = false;
// #KB1 i:10 orig:             this.hasPendingMacrotasks = false;
// #KB1 i:10 orig:             this.isStable = true;
// #KB1 i:10 orig:             this.onUnstable = new Oe(false);
            this.onMicrotaskEmpty = new Oe(false);// #NOT DELETABLE i:10399 orig: 10
// #KB1 i:10 orig:             this.onStable = new Oe(false);
// #KB1 i:10 orig:             this.onError = new Oe(false);
// #KB1 i:10 orig:             if (typeof Zone == 'undefined') {
// #KB1 i:10 orig:               throw new Error('In this configuration Angular requires Zone.js');
// #KB1 i:10 orig:             }
// #KB1 i:10 orig:             Zone.assertZonePatched();
// #KB1 i:10 orig:             this._nesting = 0;
            this._outer = this._inner = Zone.current;// #NOT DELETABLE i:10399 orig: 10
// #KB1 i:10 orig:             if (Zone.wtfZoneSpec) {
// #KB1 i:10 orig:               this._inner = this._inner.fork(Zone.wtfZoneSpec);
// #KB1 i:10 orig:             }
// #KB1 i:10 orig:             if (r && Zone.longStackTraceZoneSpec) {
// #KB1 i:10 orig:               this._inner = this._inner.fork(Zone.longStackTraceZoneSpec);
// #KB1 i:10 orig:             }
            (t = this)._inner = t._inner.fork({// #NOT DELETABLE i:10399 orig: 10
// #KB1 i:10 orig:               name: 'angular',
// #KB1 i:10 orig:               properties: { isAngularZone: true },
              onInvokeTask: function(e, n, r, o, i, s) {// #NOT DELETABLE i:10399 orig: 10
                try {// #NOT DELETABLE i:10399 orig: 10
                  Pe(t);// #NOT DELETABLE i:10399 orig: 10
                  return e.invokeTask(r, o, i, s);// #NOT DELETABLE i:10399 orig: 10
                } finally {// #NOT DELETABLE i:10399 orig: 10
                  De(t);// #NOT DELETABLE i:10399 orig: 10
                }// #NOT DELETABLE i:10399 orig: 10
              },// #NOT DELETABLE i:10399 orig: 10
              onInvoke: function(e, n, r, o, i, s, u) {// #NOT DELETABLE i:10399 orig: 10
                try {// #NOT DELETABLE i:10399 orig: 10
                  Pe(t);// #NOT DELETABLE i:10399 orig: 10
                  return e.invoke(r, o, i, s, u);// #NOT DELETABLE i:10399 orig: 10
                } finally {// #NOT DELETABLE i:10399 orig: 10
                  De(t);// #NOT DELETABLE i:10399 orig: 10
                }// #NOT DELETABLE i:10399 orig: 10
              },// #NOT DELETABLE i:10399 orig: 10
              onHasTask: function(e, n, r, o) {// #NOT DELETABLE i:10399 orig: 10
// #KB1 i:10 orig:                 e.hasTask(r, o);
// #KB1 i:10 orig:                 if (n === r) {
// #KB1 i:10 orig:                   if (o.change == 'microTask') {
// #KB1 i:10 orig:                     t.hasPendingMicrotasks = o.microTask;
// #KB1 i:10 orig:                     Me(t);
// #KB1 i:10 orig:                   } else if (o.change == 'macroTask') {
// #KB1 i:10 orig:                     t.hasPendingMacrotasks = o.macroTask;
// #KB1 i:10 orig:                   }
// #KB1 i:10 orig:                 }
              },// #NOT DELETABLE i:10399 orig: 10
              onHandleError: function(e, n, r, o) {// #NOT DELETABLE i:10399 orig: 10//#RF [object Object]
// #KB1 i:10 orig:                 e.handleError(r, o);
// #KB1 i:10 orig:                 t.runOutsideAngular(function() {
// #KB1 i:10 orig:                   return t.onError.emit(o);
// #KB1 i:10 orig:                 });
// #KB1 i:10 orig:                 return false;
              },// #NOT DELETABLE i:10399 orig: 10
            });// #NOT DELETABLE i:10399 orig: 10
          }// #KB1 END i:10399 orig: 
// #DB5 START i:10 orig:           e.isInAngularZone = function() {//#RF [object Object]
// #DB i:10 orig:             return Zone.current.get('isAngularZone') === true;
// #DB END i: orig:           };
// #DB5 START i:10 orig:           e.assertInAngularZone = function() {//#RF [object Object]
// #DB i:10 orig:             if (!e.isInAngularZone()) {
// #DB i:10 orig:               throw new Error('Expected to be in Angular Zone, but it is not!');
// #DB i:10 orig:             }
// #DB END i: orig:           };
// #DB5 START i:10 orig:           e.assertNotInAngularZone = function() {//#RF [object Object]
// #DB i:10 orig:             if (e.isInAngularZone()) {
// #DB i:10 orig:               throw new Error('Expected to not be in Angular Zone, but it is!');
// #DB i:10 orig:             }
// #DB END i: orig:           };
          e.prototype.run = function(e, t, n) {// #QA1 i:10399 orig: 
            return this._inner.run(e, t, n);// #QA1 i:10399 orig: 
          };// #QA1 i:10399 orig: 
// #DB4 START i:10 orig:           e.prototype.runTask = function(e, t, n, r) {//#RF [object Object]
// #DB i:10 orig:             var o = this._inner;
// #DB i:10 orig:             var i = o.scheduleEventTask('NgZoneEvent: ' + r, e, Ae, Se, Se);
// #DB i:10 orig:             try {
// #DB i:10 orig:               return o.runTask(i, t, n);
// #DB i:10 orig:             } finally {
// #DB i:10 orig:               o.cancelTask(i);
// #DB i:10 orig:             }
// #DB END i: orig:           };
// #DB4 START i:10 orig:           e.prototype.runGuarded = function(e, t, n) {//#RF [object Object]
// #DB i:10 orig:             return this._inner.runGuarded(e, t, n);
// #DB END i: orig:           };
          e.prototype.runOutsideAngular = function(e) {// #QA1 i:10399 orig: 
            return this._outer.run(e);// #QA1 i:10399 orig: 
          };// #QA1 i:10399 orig: 
          return e;// #QA1 i:10399 orig: 
        })();// #QA1 i:10399 orig: 
// #DSL i: orig:         var Ae = {};
        var Re =function(n){};// #CB2 START i:10399 orig: 8
// #CB i:8 orig:           function e() {//#RF [object Object]
// #CB i:8 orig:             this.hasPendingMicrotasks = false;
// #CB i:8 orig:             this.hasPendingMacrotasks = false;
// #CB i:8 orig:             this.isStable = true;
// #CB i:8 orig:             this.onUnstable = new Oe();
// #CB i:8 orig:             this.onMicrotaskEmpty = new Oe();
// #CB i:8 orig:             this.onStable = new Oe();
// #CB i:8 orig:             this.onError = new Oe();
// #CB i:8 orig:           }
// #CB i:8 orig:           e.prototype.run = function(e) {//#RF [object Object]
// #CB i:8 orig:             return e();
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.runGuarded = function(e) {//#RF [object Object]
// #CB i:8 orig:             return e();
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.runOutsideAngular = function(e) {//#RF [object Object]
// #CB i:8 orig:             return e();
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.runTask = function(e) {//#RF [object Object]
// #CB i:8 orig:             return e();
// #CB i:8 orig:           };
// #CB i:8 orig:           return e;
// #CB END i: orig:         })();
        var je =function(n){};// #CB2 START i:10399 orig: 8
// #CB i:8 orig:           function e(e) {//#RF [object Object]
// #CB i:8 orig:             this._ngZone = e;
// #CB i:8 orig:             this._pendingCount = 0;
// #CB i:8 orig:             this._isZoneStable = true;
// #CB i:8 orig:             this._didWork = false;
// #CB i:8 orig:             this._callbacks = [];
// #CB i:8 orig:             this._watchAngularEvents();
// #CB i:8 orig:           }
// #CB i:8 orig:           e.prototype._watchAngularEvents = function() {//#RF [object Object]
// #CB i:8 orig:             var e = this;
// #CB i:8 orig:             this._ngZone.onUnstable.subscribe({
// #CB i:8 orig:               next: function() {
// #CB i:8 orig:                 e._didWork = true;
// #CB i:8 orig:                 e._isZoneStable = false;
// #CB i:8 orig:               },
// #CB i:8 orig:             });
// #CB i:8 orig:             this._ngZone.runOutsideAngular(function() {
// #CB i:8 orig:               e._ngZone.onStable.subscribe({
// #CB i:8 orig:                 next: function() {
// #CB i:8 orig:                   Ne.assertNotInAngularZone();
// #CB i:8 orig:                   T(function() {
// #CB i:8 orig:                     e._isZoneStable = true;
// #CB i:8 orig:                     e._runCallbacksIfReady();
// #CB i:8 orig:                   });
// #CB i:8 orig:                 },
// #CB i:8 orig:               });
// #CB i:8 orig:             });
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.increasePendingRequestCount = function() {//#RF [object Object]
// #CB i:8 orig:             this._pendingCount += 1;
// #CB i:8 orig:             this._didWork = true;
// #CB i:8 orig:             return this._pendingCount;
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.decreasePendingRequestCount = function() {//#RF [object Object]
// #CB i:8 orig:             this._pendingCount -= 1;
// #CB i:8 orig:             if (this._pendingCount < 0) {
// #CB i:8 orig:               throw new Error('pending async requests below zero');
// #CB i:8 orig:             }
// #CB i:8 orig:             this._runCallbacksIfReady();
// #CB i:8 orig:             return this._pendingCount;
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.isStable = function() {//#RF [object Object]
// #CB i:8 orig:             return (
// #CB i:8 orig:               this._isZoneStable &&
// #CB i:8 orig:               this._pendingCount == 0 &&
// #CB i:8 orig:               !this._ngZone.hasPendingMacrotasks
// #CB i:8 orig:             );
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype._runCallbacksIfReady = function() {//#RF [object Object]
// #CB i:8 orig:             var e = this;
// #CB i:8 orig:             if (this.isStable()) {
// #CB i:8 orig:               T(function() {
// #CB i:8 orig:                 while (e._callbacks.length !== 0) {
// #CB i:8 orig:                   e._callbacks.pop()(e._didWork);
// #CB i:8 orig:                 }
// #CB i:8 orig:                 e._didWork = false;
// #CB i:8 orig:               });
// #CB i:8 orig:             } else {
// #CB i:8 orig:               this._didWork = true;
// #CB i:8 orig:             }
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.whenStable = function(e) {//#RF [object Object]
// #CB i:8 orig:             this._callbacks.push(e);
// #CB i:8 orig:             this._runCallbacksIfReady();
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.getPendingRequestCount = function() {//#RF [object Object]
// #CB i:8 orig:             return this._pendingCount;
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.findProviders = function(e, t, n) {//#RF [object Object]
// #CB i:8 orig:             return [];
// #CB i:8 orig:           };
// #CB i:8 orig:           return e;
// #CB END i: orig:         })();
        var Ve =function(n){};// #CB2 START i:10399 orig: 8
// #CB i:8 orig:           function e() {//#RF [object Object]
// #CB i:8 orig:             this._applications = new Map();
// #CB i:8 orig:             Fe.addToWindow(this);
// #CB i:8 orig:           }
// #CB i:8 orig:           e.prototype.registerApplication = function(e, t) {//#RF [object Object]
// #CB i:8 orig:             this._applications.set(e, t);
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.unregisterApplication = function(e) {//#RF [object Object]
// #CB i:8 orig:             this._applications.delete(e);
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.unregisterAllApplications = function() {//#RF [object Object]
// #CB i:8 orig:             this._applications.clear();
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.getTestability = function(e) {//#RF [object Object]
// #CB i:8 orig:             return this._applications.get(e) || null;
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.getAllTestabilities = function() {//#RF [object Object]
// #CB i:8 orig:             return Array.from(this._applications.values());
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.getAllRootElements = function() {//#RF [object Object]
// #CB i:8 orig:             return Array.from(this._applications.keys());
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.findTestabilityInTree = function(e, t) {//#RF [object Object]
// #CB i:8 orig:             if (t === void 0) {
// #CB i:8 orig:               t = true;
// #CB i:8 orig:             }
// #CB i:8 orig:             return Fe.findTestabilityInTree(this, e, t);
// #CB i:8 orig:           };
// #CB i:8 orig:           e.ctorParameters = function() {//#RF [object Object]
// #CB i:8 orig:             return [];
// #CB i:8 orig:           };
// #CB i:8 orig:           return e;
// #CB END i: orig:         })();
        var Le;// #QA1 i:10399 orig: 
// #KFB02 START i:8 orig:         var Fe = new ((function() {
// #DB i:8 orig:           function e() {}
// #DB i:8 orig:           e.prototype.addToWindow = function(e) {};//#RF [object Object]
// #DB i:8 orig:           e.prototype.findTestabilityInTree = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:             return null;
// #DB i:8 orig:           };
// #DB i:8 orig:           return e;
// #DB END i: orig:         })())();
// #DSL i: orig:         var Be = true;
// #DSL i: orig:         var ze = false;
// #DSL i: orig:         var Ue = new c('AllowMultipleToken');
        var Qe = function(e, t) {// #KFB01 START i:10399 orig: 8//#RF [object Object]
// #KB1 i:8 orig:           this.name = e;
// #KB1 i:8 orig:           this.token = t;
        };// #KB1 END i:10399 orig: 
        var Ye = (function() {// #QA6 i:10399 orig: 
          function e(e) {// #KBQ i:10399 orig: 10
            this._injector = e;// #NOT DELETABLE i:10399 orig: 10
// #KB1 i:10 orig:             this._modules = [];
// #KB1 i:10 orig:             this._destroyListeners = [];
// #KB1 i:10 orig:             this._destroyed = false;
          }// #KB1 END i:10399 orig: 
          e.prototype.bootstrapModuleFactory = function(e, t) {// #QA1 i:10399 orig: 
            var n;// #QA1 i:10399 orig: 
            var r = this;// #QA1 i:10399 orig: 
            var o =// #QA1 i:10399 orig: 
              (n = t ? t.ngZone : void 0) === 'noop'// #QA1 i:10399 orig: 
                ? new Re()// #QA1 i:10399 orig: 
                : (n === 'zone.js' ? void 0 : n) ||// #QA1 i:10399 orig: 
                  new Ne({ enableLongStackTrace: We() });// #QA1 i:10399 orig: 
            var i = [{ provide: Ne, useValue: o }];// #QA1 i:10399 orig: 
            return o.run(function() {// #QA1 i:10399 orig: 
              var t = P.create({// #QA1 i:10399 orig: 
                providers: i,// #QA1 i:10399 orig: 
                parent: r.injector,// #QA1 i:10399 orig: 
                name: e.moduleType.name,// #QA1 i:10399 orig: 
              });// #QA1 i:10399 orig: 
              var n = e.create(t);// #QA1 i:10399 orig: 
              var s = n.injector.get($, null);// #QA1 i:10399 orig: 
              if (!s) {// #QA1 i:10399 orig: 
                throw new Error(// #QA1 i:10399 orig: 
                  'No ErrorHandler. Is platform module (BrowserModule) included?'// #QA1 i:10399 orig: 
                );// #QA1 i:10399 orig: 
              }// #QA1 i:10399 orig: 
// #DB7 START i:14 orig:               n.onDestroy(function() {//#RF [object Object]
// #DB i:14 orig:                 return Xe(r._modules, n);
// #DB END i: orig:               });
// #DB3 START i:14 orig:               o.runOutsideAngular(function() {
// #DB i:14 orig:                 return o.onError.subscribe({
// #DB i:14 orig:                   next: function(e) {//#RF [object Object]
// #DB i:14 orig:                     s.handleError(e);
// #DB i:14 orig:                   },
// #DB i:14 orig:                 });
// #DB END i: orig:               });
              return (function(e, t, o) {// #QA1 i:10399 orig: 
                try {// #QA1 i:10399 orig: 
                  (s = n.injector.get(re)).runInitializers();// #QA1 i:10399 orig: 
                  var i = s.donePromise.then(function() {// #QA1 i:10399 orig: 
                    r._moduleDoBootstrap(n);// #QA1 i:10399 orig: 
                    return n;// #QA1 i:10399 orig: 
                  });// #QA1 i:10399 orig: 
                  if (ee(i)) {// #QA1 i:10399 orig: 
                    return i.catch(function(n) {// #QA1 i:10399 orig: 
                      t.runOutsideAngular(function() {// #QA1 i:10399 orig: 
                        return e.handleError(n);// #QA1 i:10399 orig: 
                      });// #QA1 i:10399 orig: 
                      throw n;// #QA1 i:10399 orig: 
                    });// #QA1 i:10399 orig: 
                  } else {// #QA1 i:10399 orig: 
                    return i;// #QA1 i:10399 orig: 
                  }// #QA1 i:10399 orig: 
                } catch (n) {// #QA1 i:10399 orig: 
// #DB7 START i:18 orig:                   t.runOutsideAngular(function() {//#RF [object Object]
// #DB i:18 orig:                     return e.handleError(n);
// #DB END i: orig:                   });
                  throw n;// #QA1 i:10399 orig: 
                }// #QA1 i:10399 orig: 
                var s;// #QA1 i:10399 orig: 
              })(s, o);// #QA1 i:10399 orig: 
            });// #QA1 i:10399 orig: 
          };// #QA1 i:10399 orig: 
// #DB4 START i:10 orig:           e.prototype.bootstrapModule = function(e, t) {//#RF [object Object]
// #DB i:10 orig:             var n = this;
// #DB i:10 orig:             if (t === void 0) {
// #DB i:10 orig:               t = [];
// #DB i:10 orig:             }
// #DB i:10 orig:             var r = this.injector.get(pe);
// #DB i:10 orig:             var o = Ke({}, t);
// #DB i:10 orig:             return r
// #DB i:10 orig:               .createCompiler([o])
// #DB i:10 orig:               .compileModuleAsync(e)
// #DB i:10 orig:               .then(function(e) {
// #DB i:10 orig:                 return n.bootstrapModuleFactory(e, o);
// #DB i:10 orig:               });
// #DB END i: orig:           };
          e.prototype._moduleDoBootstrap = function(e) {// #QA1 i:10399 orig: 
            var t = e.injector.get(Je);// #QA1 i:10399 orig: 
            if (e._bootstrapComponents.length > 0) {// #QA1 i:10399 orig: 
              e._bootstrapComponents.forEach(function(e) {// #QA1 i:10399 orig: 
                return t.bootstrap(e);// #QA1 i:10399 orig: 
              });// #QA1 i:10399 orig: 
            } else {// #QA1 i:10399 orig: 
              if (!e.instance.ngDoBootstrap) {// #QA1 i:10399 orig: 
                throw new Error(// #QA1 i:10399 orig: 
                  'The module ' +// #QA1 i:10399 orig: 
                    I(e.instance.constructor) +// #QA1 i:10399 orig: 
                    ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.'// #QA1 i:10399 orig: 
                );// #QA1 i:10399 orig: 
              }// #QA1 i:10399 orig: 
              e.instance.ngDoBootstrap(t);// #QA1 i:10399 orig: 
            }// #QA1 i:10399 orig: 
            this._modules.push(e);// #QA1 i:10399 orig: 
          };// #QA1 i:10399 orig: 
// #DB4 START i:10 orig:           e.prototype.onDestroy = function(e) {//#RF [object Object]
// #DB i:10 orig:             this._destroyListeners.push(e);
// #DB END i: orig:           };
          Object.defineProperty(e.prototype, 'injector', {// #QA1 i:10399 orig: 
            get: function() {// #QA1 i:10399 orig: 
              return this._injector;// #QA1 i:10399 orig: 
            },// #QA1 i:10399 orig: 
            enumerable: true,// #QA1 i:10399 orig: 
            configurable: true,// #QA1 i:10399 orig: 
          });// #QA1 i:10399 orig: 
// #DB4 START i:10 orig:           e.prototype.destroy = function() {//#RF [object Object]
// #DB i:10 orig:             if (this._destroyed) {
// #DB i:10 orig:               throw new Error('The platform has already been destroyed!');
// #DB i:10 orig:             }
// #DB i:10 orig:             this._modules.slice().forEach(function(e) {
// #DB i:10 orig:               return e.destroy();
// #DB i:10 orig:             });
// #DB i:10 orig:             this._destroyListeners.forEach(function(e) {
// #DB i:10 orig:               return e();
// #DB i:10 orig:             });
// #DB i:10 orig:             this._destroyed = true;
// #DB END i: orig:           };
          Object.defineProperty(e.prototype, 'destroyed', {// #QA1 i:10399 orig: 
            get: function() {// #QA1 i:10399 orig: 
              return this._destroyed;// #QA1 i:10399 orig: 
            },// #QA1 i:10399 orig: 
            enumerable: true,// #QA1 i:10399 orig: 
            configurable: true,// #QA1 i:10399 orig: 
          });// #QA1 i:10399 orig: 
          return e;// #QA1 i:10399 orig: 
        })();// #QA1 i:10399 orig: 
        var Je = (function() {// #QA6 i:10399 orig: 
          function e(e, t, n, r, u, a) {// #QA3 i:10399 orig: 10
// #KB1 i:10 orig:             var c = this;
// #KB1 i:10 orig:             this._zone = e;
// #KB1 i:10 orig:             this._console = t;
// #KB1 i:10 orig:             this._injector = n;
// #KB1 i:10 orig:             this._exceptionHandler = r;
            this._componentFactoryResolver = u;// #NOT DELETABLE i:10399 orig: 10
            this._initStatus = a;// #NOT DELETABLE i:10399 orig: 10
// #KB1 i:10 orig:             this._bootstrapListeners = [];
// #KB1 i:10 orig:             this._views = [];
// #KB1 i:10 orig:             this._runningTick = false;
// #KB1 i:10 orig:             this._enforceNoNewChanges = false;
// #KB1 i:10 orig:             this._stable = true;
            this.componentTypes = [];// #NOT DELETABLE i:10399 orig: 10
// #KB1 i:10 orig:             this.components = [];
// #KB1 i:10 orig:             this._enforceNoNewChanges = We();
// #KB1 i:10 orig:             this._zone.onMicrotaskEmpty.subscribe({
// #KB1 i:10 orig:               next: function() {
// #KB1 i:10 orig:                 c._zone.run(function() {
// #KB1 i:10 orig:                   c.tick();
// #KB1 i:10 orig:                 });
// #KB1 i:10 orig:               },
// #KB1 i:10 orig:             });
// #KB1 i:10 orig:             var l = new o.a(function(e) {//#RF [object Object]
// #KB1 i:10 orig:               c._stable =
// #KB1 i:10 orig:                 c._zone.isStable &&
// #KB1 i:10 orig:                 !c._zone.hasPendingMacrotasks &&
// #KB1 i:10 orig:                 !c._zone.hasPendingMicrotasks;
// #KB1 i:10 orig:               c._zone.runOutsideAngular(function() {
// #KB1 i:10 orig:                 e.next(c._stable);
// #KB1 i:10 orig:                 e.complete();
// #KB1 i:10 orig:               });
// #KB1 i:10 orig:             });
            var d = new o.a(function(e) {// #NOT DELETABLE i:10399 orig: 10//#RF [object Object]
// #KB1 i:10 orig:               var t;
// #KB1 i:10 orig:               c._zone.runOutsideAngular(function() {
// #KB1 i:10 orig:                 t = c._zone.onStable.subscribe(function() {
// #KB1 i:10 orig:                   Ne.assertNotInAngularZone();
// #KB1 i:10 orig:                   T(function() {
// #KB1 i:10 orig:                     if (
// #KB1 i:10 orig:                       !c._stable &&
// #KB1 i:10 orig:                       !c._zone.hasPendingMacrotasks &&
// #KB1 i:10 orig:                       !c._zone.hasPendingMicrotasks
// #KB1 i:10 orig:                     ) {
// #KB1 i:10 orig:                       c._stable = true;
// #KB1 i:10 orig:                       e.next(true);
// #KB1 i:10 orig:                     }
// #KB1 i:10 orig:                   });
// #KB1 i:10 orig:                 });
// #KB1 i:10 orig:               });
// #KB1 i:10 orig:               var n = c._zone.onUnstable.subscribe(function() {
// #KB1 i:10 orig:                 Ne.assertInAngularZone();
// #KB1 i:10 orig:                 if (c._stable) {
// #KB1 i:10 orig:                   c._stable = false;
// #KB1 i:10 orig:                   c._zone.runOutsideAngular(function() {
// #KB1 i:10 orig:                     e.next(false);
// #KB1 i:10 orig:                   });
// #KB1 i:10 orig:                 }
// #KB1 i:10 orig:               });
// #KB1 i:10 orig:               return function() {
// #KB1 i:10 orig:                 t.unsubscribe();
// #KB1 i:10 orig:                 n.unsubscribe();
// #KB1 i:10 orig:               };
            });// #NOT DELETABLE i:10399 orig: 10
            this.isStable = Object(i.a)(l, s.a.call(d));// #NOT DELETABLE i:10399 orig: 10
          }// #KB1 END i:10399 orig: 
          e.prototype.bootstrap = function(e, t) {// #QA1 i:10399 orig: 
            var r = this;// #QA1 i:10399 orig: 
            if (!this._initStatus.done) {// #QA1 i:10399 orig: 
              throw new Error(// #QA1 i:10399 orig: 
                'Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.'// #QA1 i:10399 orig: 
              );// #QA1 i:10399 orig: 
            }// #QA1 i:10399 orig: 
            var n =// #QA1 i:10399 orig: 
              e instanceof he// #QA1 i:10399 orig: 
                ? e// #QA1 i:10399 orig: 
                : this._componentFactoryResolver.resolveComponentFactory(e);// #QA1 i:10399 orig: 
            this.componentTypes.push(n.componentType);// #QA1 i:10399 orig: 
            var o = n instanceof Ce ? null : this._injector.get(Ee);// #QA1 i:10399 orig: 
            var i = n.create(P.NULL, [], t || n.selector, o);// #QA1 i:10399 orig: 
// #DB7 START i:12 orig:             i.onDestroy(function() {//#RF [object Object]
// #DB i:12 orig:               r._unloadComponent(i);
// #DB END i: orig:             });
            var s = i.injector.get(je, null);// #QA1 i:10399 orig: 
            if (s) {// #QA1 i:10399 orig: 
              i.injector// #QA1 i:10399 orig: 
                .get(Ve)// #QA1 i:10399 orig: 
                .registerApplication(i.location.nativeElement, s);// #QA1 i:10399 orig: 
            }// #QA1 i:10399 orig: 
            this._loadComponent(i);// #QA1 i:10399 orig: 
            if (We()) {// #QA1 i:10399 orig: 
              this._console.log(// #QA1 i:10399 orig: 
                'Angular is running in the development mode. Call enableProdMode() to enable the production mode.'// #QA1 i:10399 orig: 
              );// #QA1 i:10399 orig: 
            }// #QA1 i:10399 orig: 
            return i;// #QA1 i:10399 orig: 
          };// #QA1 i:10399 orig: 
          e.prototype.tick = function() {// #QA1 i:10399 orig: 
            var t = this;// #QA1 i:10399 orig: 
            if (this._runningTick) {// #QA1 i:10399 orig: 
              throw new Error('ApplicationRef.tick is called recursively');// #QA1 i:10399 orig: 
            }// #QA1 i:10399 orig: 
            var n = e._tickScope();// #QA1 i:10399 orig: 
            try {// #QA1 i:10399 orig: 
              this._runningTick = true;// #QA1 i:10399 orig: 
// #DB7 START i:14 orig:               this._views.forEach(function(e) {//#RF [object Object]
// #DB i:14 orig:                 return e.detectChanges();
// #DB END i: orig:               });
              if (this._enforceNoNewChanges) {// #QA1 i:10399 orig: 
// #DB7 START i:16 orig:                 this._views.forEach(function(e) {//#RF [object Object]
// #DB i:16 orig:                   return e.checkNoChanges();
// #DB END i: orig:                 });
              }// #QA1 i:10399 orig: 
            } catch (e) {// #QA1 i:10399 orig: 
// #DB7 START i:14 orig:               this._zone.runOutsideAngular(function() {//#RF [object Object]
// #DB i:14 orig:                 return t._exceptionHandler.handleError(e);
// #DB END i: orig:               });
            } finally {// #QA1 i:10399 orig: 
              this._runningTick = false;// #QA1 i:10399 orig: 
              Ie(n);// #QA1 i:10399 orig: 
            }// #QA1 i:10399 orig: 
          };// #QA1 i:10399 orig: 
// #DB4 START i:10 orig:           e.prototype.attachView = function(e) {//#RF [object Object]
// #DB i:10 orig:             var t = e;
// #DB i:10 orig:             this._views.push(t);
// #DB i:10 orig:             t.attachToAppRef(this);
// #DB END i: orig:           };
// #DB4 START i:10 orig:           e.prototype.detachView = function(e) {//#RF [object Object]
// #DB i:10 orig:             var t = e;
// #DB i:10 orig:             Xe(this._views, t);
// #DB i:10 orig:             t.detachFromAppRef();
// #DB END i: orig:           };
// #DB4 START i:10 orig:           e.prototype._loadComponent = function(e) {//#RF [object Object]
// #DB i:10 orig:             this.attachView(e.hostView);
// #DB i:10 orig:             this.tick();
// #DB i:10 orig:             this.components.push(e);
// #DB i:10 orig:             this._injector
// #DB i:10 orig:               .get(ce, [])
// #DB i:10 orig:               .concat(this._bootstrapListeners)
// #DB i:10 orig:               .forEach(function(t) {
// #DB i:10 orig:                 return t(e);
// #DB i:10 orig:               });
// #DB END i: orig:           };
// #DB4 START i:10 orig:           e.prototype._unloadComponent = function(e) {//#RF [object Object]
// #DB i:10 orig:             this.detachView(e.hostView);
// #DB i:10 orig:             Xe(this.components, e);
// #DB END i: orig:           };
// #DB4 START i:10 orig:           e.prototype.ngOnDestroy = function() {//#RF [object Object]
// #DB i:10 orig:             this._views.slice().forEach(function(e) {
// #DB i:10 orig:               return e.destroy();
// #DB i:10 orig:             });
// #DB END i: orig:           };
          Object.defineProperty(e.prototype, 'viewCount', {// #QA1 i:10399 orig: 
// #DB7 START i:12 orig:             get: function() {//#RF [object Object]
// #DB i:12 orig:               return this._views.length;
// #DB END i: orig:             },
            enumerable: true,// #QA1 i:10399 orig: 
            configurable: true,// #QA1 i:10399 orig: 
          });// #QA1 i:10399 orig: 
          e._tickScope = ke('ApplicationRef#tick()');// #QA1 i:10399 orig: 
          return e;// #QA1 i:10399 orig: 
        })();// #QA1 i:10399 orig: 
        var $e = function() {};// #QA4 i:10399 orig: //#RF [object Object]
// #DB START YYY START i:8 orig:         var et = (function() {
// #DB i:8 orig:           var e = { Important: 1, DashCase: 2 };
// #DB i:8 orig:           e[e.Important] = 'Important';
// #DB i:8 orig:           e[e.DashCase] = 'DashCase';
// #DB i:8 orig:           return e;
// #DB END i: orig:         })();
// #DB7 START i:8 orig:         var tt = function(e) {//#RF [object Object]
// #DB i:8 orig:           this.nativeElement = e;
// #DB END i: orig:         };
        var nt =function(n){};// #CB2 START i:10399 orig: 8
// #CB i:8 orig:           function e() {//#RF [object Object]
// #CB i:8 orig:             this.dirty = true;
// #CB i:8 orig:             this._results = [];
// #CB i:8 orig:             this.changes = new Oe();
// #CB i:8 orig:             this.length = 0;
// #CB i:8 orig:           }
// #CB i:8 orig:           e.prototype.map = function(e) {//#RF [object Object]
// #CB i:8 orig:             return this._results.map(e);
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.filter = function(e) {//#RF [object Object]
// #CB i:8 orig:             return this._results.filter(e);
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.find = function(e) {//#RF [object Object]
// #CB i:8 orig:             return this._results.find(e);
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.reduce = function(e, t) {//#RF [object Object]
// #CB i:8 orig:             return this._results.reduce(e, t);
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.forEach = function(e) {//#RF [object Object]
// #CB i:8 orig:             this._results.forEach(e);
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.some = function(e) {//#RF [object Object]
// #CB i:8 orig:             return this._results.some(e);
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.toArray = function() {//#RF [object Object]
// #CB i:8 orig:             return this._results.slice();
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype[x()] = function() {//#RF [object Object]
// #CB i:8 orig:             return this._results[x()]();
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.toString = function() {//#RF [object Object]
// #CB i:8 orig:             return this._results.toString();
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.reset = function(e) {//#RF [object Object]
// #CB i:8 orig:             this._results = (function e(t) {
// #CB i:8 orig:               return t.reduce(function(t, n) {
// #CB i:8 orig:                 var r = Array.isArray(n) ? e(n) : n;
// #CB i:8 orig:                 return t.concat(r);
// #CB i:8 orig:               }, []);
// #CB i:8 orig:             })(e);
// #CB i:8 orig:             this.dirty = false;
// #CB i:8 orig:             this.length = this._results.length;
// #CB i:8 orig:             this.last = this._results[this.length - 1];
// #CB i:8 orig:             this.first = this._results[0];
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.notifyOnChanges = function() {//#RF [object Object]
// #CB i:8 orig:             this.changes.emit(this);
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.setDirty = function() {//#RF [object Object]
// #CB i:8 orig:             this.dirty = true;
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.destroy = function() {//#RF [object Object]
// #CB i:8 orig:             this.changes.complete();
// #CB i:8 orig:             this.changes.unsubscribe();
// #CB i:8 orig:           };
// #CB i:8 orig:           return e;
// #CB END i: orig:         })();
// #DL SINGLE FUNC i: orig:         var rt = function() {};//#RF [object Object]
// #DB START YYY START i:8 orig:         var ot = (function() {
// #DB i:8 orig:           function e(e, t, n) {//#RF [object Object]
// #DB i:8 orig:             this._debugContext = n;
// #DB i:8 orig:             this.nativeNode = e;
// #DB i:8 orig:             if (t && t instanceof it) {
// #DB i:8 orig:               t.addChild(this);
// #DB i:8 orig:             } else {
// #DB i:8 orig:               this.parent = null;
// #DB i:8 orig:             }
// #DB i:8 orig:             this.listeners = [];
// #DB i:8 orig:           }
// #DB i:8 orig:           Object.defineProperty(e.prototype, 'injector', {
// #DB i:8 orig:             get: function() {//#RF [object Object]
// #DB i:8 orig:               return this._debugContext.injector;
// #DB i:8 orig:             },
// #DB i:8 orig:             enumerable: true,
// #DB i:8 orig:             configurable: true,
// #DB i:8 orig:           });
// #DB i:8 orig:           Object.defineProperty(e.prototype, 'componentInstance', {
// #DB i:8 orig:             get: function() {//#RF [object Object]
// #DB i:8 orig:               return this._debugContext.component;
// #DB i:8 orig:             },
// #DB i:8 orig:             enumerable: true,
// #DB i:8 orig:             configurable: true,
// #DB i:8 orig:           });
// #DB i:8 orig:           Object.defineProperty(e.prototype, 'context', {
// #DB i:8 orig:             get: function() {//#RF [object Object]
// #DB i:8 orig:               return this._debugContext.context;
// #DB i:8 orig:             },
// #DB i:8 orig:             enumerable: true,
// #DB i:8 orig:             configurable: true,
// #DB i:8 orig:           });
// #DB i:8 orig:           Object.defineProperty(e.prototype, 'references', {
// #DB i:8 orig:             get: function() {//#RF [object Object]
// #DB i:8 orig:               return this._debugContext.references;
// #DB i:8 orig:             },
// #DB i:8 orig:             enumerable: true,
// #DB i:8 orig:             configurable: true,
// #DB i:8 orig:           });
// #DB i:8 orig:           Object.defineProperty(e.prototype, 'providerTokens', {
// #DB i:8 orig:             get: function() {//#RF [object Object]
// #DB i:8 orig:               return this._debugContext.providerTokens;
// #DB i:8 orig:             },
// #DB i:8 orig:             enumerable: true,
// #DB i:8 orig:             configurable: true,
// #DB i:8 orig:           });
// #DB i:8 orig:           return e;
// #DB END i: orig:         })();
// #DB START YYY START i:8 orig:         var it = (function() {
// #DB i:8 orig:           function t(t, n, r) {//#RF [object Object]
// #DB i:8 orig:             var o = e.call(this, t, n, r) || this;
// #DB i:8 orig:             o.properties = {};
// #DB i:8 orig:             o.attributes = {};
// #DB i:8 orig:             o.classes = {};
// #DB i:8 orig:             o.styles = {};
// #DB i:8 orig:             o.childNodes = [];
// #DB i:8 orig:             o.nativeElement = t;
// #DB i:8 orig:             return o;
// #DB i:8 orig:           }
// #DB i:8 orig:           var e = ot;
// #DB i:8 orig:           Object(r.b)(t, e);
// #DB i:8 orig:           t.prototype.addChild = function(e) {//#RF [object Object]
// #DB i:8 orig:             if (e) {
// #DB i:8 orig:               this.childNodes.push(e);
// #DB i:8 orig:               e.parent = this;
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           t.prototype.removeChild = function(e) {//#RF [object Object]
// #DB i:8 orig:             var t = this.childNodes.indexOf(e);
// #DB i:8 orig:             if (t !== -1) {
// #DB i:8 orig:               e.parent = null;
// #DB i:8 orig:               this.childNodes.splice(t, 1);
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           t.prototype.insertChildrenAfter = function(e, t) {//#RF [object Object]
// #DB i:8 orig:             var n;
// #DB i:8 orig:             var r = this;
// #DB i:8 orig:             var o = this.childNodes.indexOf(e);
// #DB i:8 orig:             if (o !== -1) {
// #DB i:8 orig:               (n = this.childNodes).splice.apply(n, [o + 1, 0].concat(t));
// #DB i:8 orig:               t.forEach(function(e) {
// #DB i:8 orig:                 if (e.parent) {
// #DB i:8 orig:                   e.parent.removeChild(e);
// #DB i:8 orig:                 }
// #DB i:8 orig:                 e.parent = r;
// #DB i:8 orig:               });
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           t.prototype.insertBefore = function(e, t) {//#RF [object Object]
// #DB i:8 orig:             var n = this.childNodes.indexOf(e);
// #DB i:8 orig:             if (n === -1) {
// #DB i:8 orig:               this.addChild(t);
// #DB i:8 orig:             } else {
// #DB i:8 orig:               if (t.parent) {
// #DB i:8 orig:                 t.parent.removeChild(t);
// #DB i:8 orig:               }
// #DB i:8 orig:               t.parent = this;
// #DB i:8 orig:               this.childNodes.splice(n, 0, t);
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           t.prototype.query = function(e) {//#RF [object Object]
// #DB i:8 orig:             return this.queryAll(e)[0] || null;
// #DB i:8 orig:           };
// #DB i:8 orig:           t.prototype.queryAll = function(e) {//#RF [object Object]
// #DB i:8 orig:             var t = [];
// #DB i:8 orig:             st(this, e, t);
// #DB i:8 orig:             return t;
// #DB i:8 orig:           };
// #DB i:8 orig:           t.prototype.queryAllNodes = function(e) {//#RF [object Object]
// #DB i:8 orig:             var t = [];
// #DB i:8 orig:             ut(this, e, t);
// #DB i:8 orig:             return t;
// #DB i:8 orig:           };
// #DB i:8 orig:           Object.defineProperty(t.prototype, 'children', {
// #DB i:8 orig:             get: function() {//#RF [object Object]
// #DB i:8 orig:               return this.childNodes.filter(function(e) {
// #DB i:8 orig:                 return e instanceof t;
// #DB i:8 orig:               });
// #DB i:8 orig:             },
// #DB i:8 orig:             enumerable: true,
// #DB i:8 orig:             configurable: true,
// #DB i:8 orig:           });
// #DB i:8 orig:           t.prototype.triggerEventHandler = function(e, t) {//#RF [object Object]
// #DB i:8 orig:             this.listeners.forEach(function(n) {
// #DB i:8 orig:               if (n.name == e) {
// #DB i:8 orig:                 n.callback(t);
// #DB i:8 orig:               }
// #DB i:8 orig:             });
// #DB i:8 orig:           };
// #DB i:8 orig:           return t;
// #DB END i: orig:         })();
// #DSL i: orig:         var at = new Map();
// #DB START YYY START i:8 orig:         var ft = (function() {
// #DB i:8 orig:           function e(e) {//#RF [object Object]
// #DB i:8 orig:             this.wrapped = e;
// #DB i:8 orig:           }
// #DB i:8 orig:           e.wrap = function(t) {//#RF [object Object]
// #DB i:8 orig:             return new e(t);
// #DB i:8 orig:           };
// #DB i:8 orig:           e.unwrap = function(t) {//#RF [object Object]
// #DB i:8 orig:             if (e.isWrapped(t)) {
// #DB i:8 orig:               return t.wrapped;
// #DB i:8 orig:             } else {
// #DB i:8 orig:               return t;
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.isWrapped = function(t) {//#RF [object Object]
// #DB i:8 orig:             return t instanceof e;
// #DB i:8 orig:           };
// #DB i:8 orig:           return e;
// #DB END i: orig:         })();
// #DB START YYY START i:8 orig:         var pt = (function() {
// #DB i:8 orig:           function e(e, t, n) {//#RF [object Object]
// #DB i:8 orig:             this.previousValue = e;
// #DB i:8 orig:             this.currentValue = t;
// #DB i:8 orig:             this.firstChange = n;
// #DB i:8 orig:           }
// #DB i:8 orig:           e.prototype.isFirstChange = function() {//#RF [object Object]
// #DB i:8 orig:             return this.firstChange;
// #DB i:8 orig:           };
// #DB i:8 orig:           return e;
// #DB END i: orig:         })();
// #DB START YYY START i:8 orig:         var yt = (function() {
// #DB i:8 orig:           function e() {}
// #DB i:8 orig:           e.prototype.supports = function(e) {//#RF [object Object]
// #DB i:8 orig:             return ht(e);
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.create = function(e) {//#RF [object Object]
// #DB i:8 orig:             return new mt(e);
// #DB i:8 orig:           };
// #DB i:8 orig:           return e;
// #DB END i: orig:         })();
// #DB7 START i:8 orig:         var gt = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           return t;
// #DB END i: orig:         };
// #DB START YYY START i:8 orig:         var mt = (function() {
// #DB i:8 orig:           function e(e) {//#RF [object Object]
// #DB i:8 orig:             this.length = 0;
// #DB i:8 orig:             this._linkedRecords = null;
// #DB i:8 orig:             this._unlinkedRecords = null;
// #DB i:8 orig:             this._previousItHead = null;
// #DB i:8 orig:             this._itHead = null;
// #DB i:8 orig:             this._itTail = null;
// #DB i:8 orig:             this._additionsHead = null;
// #DB i:8 orig:             this._additionsTail = null;
// #DB i:8 orig:             this._movesHead = null;
// #DB i:8 orig:             this._movesTail = null;
// #DB i:8 orig:             this._removalsHead = null;
// #DB i:8 orig:             this._removalsTail = null;
// #DB i:8 orig:             this._identityChangesHead = null;
// #DB i:8 orig:             this._identityChangesTail = null;
// #DB i:8 orig:             this._trackByFn = e || gt;
// #DB i:8 orig:           }
// #DB i:8 orig:           e.prototype.forEachItem = function(e) {//#RF [object Object]
// #DB i:8 orig:             for (var t = this._itHead; t !== null; t = t._next) {
// #DB i:8 orig:               e(t);
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.forEachOperation = function(e) {//#RF [object Object]
// #DB i:8 orig:             var t = this._itHead;
// #DB i:8 orig:             var n = this._removalsHead;
// #DB i:8 orig:             var r = 0;
// #DB i:8 orig:             for (var o = null; t || n; ) {
// #DB i:8 orig:               var i = !n || (t && t.currentIndex < Ct(n, r, o)) ? t : n;
// #DB i:8 orig:               var s = Ct(i, r, o);
// #DB i:8 orig:               var u = i.currentIndex;
// #DB i:8 orig:               if (i === n) {
// #DB i:8 orig:                 r--;
// #DB i:8 orig:                 n = n._nextRemoved;
// #DB i:8 orig:               } else if (((t = t._next), i.previousIndex == null)) {
// #DB i:8 orig:                 r++;
// #DB i:8 orig:               } else {
// #DB i:8 orig:                 if (!o) {
// #DB i:8 orig:                   o = [];
// #DB i:8 orig:                 }
// #DB i:8 orig:                 var a = s - r;
// #DB i:8 orig:                 var c = u - r;
// #DB i:8 orig:                 if (a != c) {
// #DB i:8 orig:                   for (var l = 0; l < a; l++) {
// #DB i:8 orig:                     var d = l < o.length ? o[l] : (o[l] = 0);
// #DB i:8 orig:                     var f = d + l;
// #DB i:8 orig:                     if (c <= f && f < a) {
// #DB i:8 orig:                       o[l] = d + 1;
// #DB i:8 orig:                     }
// #DB i:8 orig:                   }
// #DB i:8 orig:                   o[i.previousIndex] = c - a;
// #DB i:8 orig:                 }
// #DB i:8 orig:               }
// #DB i:8 orig:               if (s !== u) {
// #DB i:8 orig:                 e(i, s, u);
// #DB i:8 orig:               }
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.forEachPreviousItem = function(e) {//#RF [object Object]
// #DB i:8 orig:             for (
// #DB i:8 orig:               var t = this._previousItHead;
// #DB i:8 orig:               t !== null;
// #DB i:8 orig:               t = t._nextPrevious
// #DB i:8 orig:             ) {
// #DB i:8 orig:               e(t);
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.forEachAddedItem = function(e) {//#RF [object Object]
// #DB i:8 orig:             for (var t = this._additionsHead; t !== null; t = t._nextAdded) {
// #DB i:8 orig:               e(t);
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.forEachMovedItem = function(e) {//#RF [object Object]
// #DB i:8 orig:             for (var t = this._movesHead; t !== null; t = t._nextMoved) {
// #DB i:8 orig:               e(t);
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.forEachRemovedItem = function(e) {//#RF [object Object]
// #DB i:8 orig:             for (var t = this._removalsHead; t !== null; t = t._nextRemoved) {
// #DB i:8 orig:               e(t);
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.forEachIdentityChange = function(e) {//#RF [object Object]
// #DB i:8 orig:             for (
// #DB i:8 orig:               var t = this._identityChangesHead;
// #DB i:8 orig:               t !== null;
// #DB i:8 orig:               t = t._nextIdentityChange
// #DB i:8 orig:             ) {
// #DB i:8 orig:               e(t);
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.diff = function(e) {//#RF [object Object]
// #DB i:8 orig:             if (e == null) {
// #DB i:8 orig:               e = [];
// #DB i:8 orig:             }
// #DB i:8 orig:             if (!ht(e)) {
// #DB i:8 orig:               throw new Error(
// #DB i:8 orig:                 "Error trying to diff '" +
// #DB i:8 orig:                   I(e) +
// #DB i:8 orig:                   "'. Only arrays and iterables are allowed"
// #DB i:8 orig:               );
// #DB i:8 orig:             }
// #DB i:8 orig:             if (this.check(e)) {
// #DB i:8 orig:               return this;
// #DB i:8 orig:             } else {
// #DB i:8 orig:               return null;
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.onDestroy = function() {};//#RF [object Object]
// #DB i:8 orig:           e.prototype.check = function(e) {//#RF [object Object]
// #DB i:8 orig:             var t = this;
// #DB i:8 orig:             this._reset();
// #DB i:8 orig:             var n;
// #DB i:8 orig:             var r;
// #DB i:8 orig:             var o;
// #DB i:8 orig:             var i = this._itHead;
// #DB i:8 orig:             var s = false;
// #DB i:8 orig:             if (Array.isArray(e)) {
// #DB i:8 orig:               this.length = e.length;
// #DB i:8 orig:               for (var u = 0; u < this.length; u++) {
// #DB i:8 orig:                 o = this._trackByFn(u, (r = e[u]));
// #DB i:8 orig:                 if (i !== null && k(i.trackById, o)) {
// #DB i:8 orig:                   if (s) {
// #DB i:8 orig:                     i = this._verifyReinsertion(i, r, o, u);
// #DB i:8 orig:                   }
// #DB i:8 orig:                   if (!k(i.item, r)) {
// #DB i:8 orig:                     this._addIdentityChange(i, r);
// #DB i:8 orig:                   }
// #DB i:8 orig:                 } else {
// #DB i:8 orig:                   i = this._mismatch(i, r, o, u);
// #DB i:8 orig:                   s = true;
// #DB i:8 orig:                 }
// #DB i:8 orig:                 i = i._next;
// #DB i:8 orig:               }
// #DB i:8 orig:             } else {
// #DB i:8 orig:               n = 0;
// #DB i:8 orig:               (function(e, t) {
// #DB i:8 orig:                 if (Array.isArray(e)) {
// #DB i:8 orig:                   for (var n = 0; n < e.length; n++) {
// #DB i:8 orig:                     t(e[n]);
// #DB i:8 orig:                   }
// #DB i:8 orig:                 } else {
// #DB i:8 orig:                   var r = e[x()]();
// #DB i:8 orig:                   for (var o = void 0; !(o = r.next()).done; ) {
// #DB i:8 orig:                     t(o.value);
// #DB i:8 orig:                   }
// #DB i:8 orig:                 }
// #DB i:8 orig:               })(e, function(e) {
// #DB i:8 orig:                 o = t._trackByFn(n, e);
// #DB i:8 orig:                 if (i !== null && k(i.trackById, o)) {
// #DB i:8 orig:                   if (s) {
// #DB i:8 orig:                     i = t._verifyReinsertion(i, e, o, n);
// #DB i:8 orig:                   }
// #DB i:8 orig:                   if (!k(i.item, e)) {
// #DB i:8 orig:                     t._addIdentityChange(i, e);
// #DB i:8 orig:                   }
// #DB i:8 orig:                 } else {
// #DB i:8 orig:                   i = t._mismatch(i, e, o, n);
// #DB i:8 orig:                   s = true;
// #DB i:8 orig:                 }
// #DB i:8 orig:                 i = i._next;
// #DB i:8 orig:                 n++;
// #DB i:8 orig:               });
// #DB i:8 orig:               this.length = n;
// #DB i:8 orig:             }
// #DB i:8 orig:             this._truncate(i);
// #DB i:8 orig:             this.collection = e;
// #DB i:8 orig:             return this.isDirty;
// #DB i:8 orig:           };
// #DB i:8 orig:           Object.defineProperty(e.prototype, 'isDirty', {
// #DB i:8 orig:             get: function() {//#RF [object Object]
// #DB i:8 orig:               return (
// #DB i:8 orig:                 this._additionsHead !== null ||
// #DB i:8 orig:                 this._movesHead !== null ||
// #DB i:8 orig:                 this._removalsHead !== null ||
// #DB i:8 orig:                 this._identityChangesHead !== null
// #DB i:8 orig:               );
// #DB i:8 orig:             },
// #DB i:8 orig:             enumerable: true,
// #DB i:8 orig:             configurable: true,
// #DB i:8 orig:           });
// #DB i:8 orig:           e.prototype._reset = function() {//#RF [object Object]
// #DB i:8 orig:             if (this.isDirty) {
// #DB i:8 orig:               var e = void 0;
// #DB i:8 orig:               var t = void 0;
// #DB i:8 orig:               for (
// #DB i:8 orig:                 e = this._previousItHead = this._itHead;
// #DB i:8 orig:                 e !== null;
// #DB i:8 orig:                 e = e._next
// #DB i:8 orig:               ) {
// #DB i:8 orig:                 e._nextPrevious = e._next;
// #DB i:8 orig:               }
// #DB i:8 orig:               for (e = this._additionsHead; e !== null; e = e._nextAdded) {
// #DB i:8 orig:                 e.previousIndex = e.currentIndex;
// #DB i:8 orig:               }
// #DB i:8 orig:               this._additionsHead = this._additionsTail = null;
// #DB i:8 orig:               for (e = this._movesHead; e !== null; e = t) {
// #DB i:8 orig:                 e.previousIndex = e.currentIndex;
// #DB i:8 orig:                 t = e._nextMoved;
// #DB i:8 orig:               }
// #DB i:8 orig:               this._movesHead = this._movesTail = null;
// #DB i:8 orig:               this._removalsHead = this._removalsTail = null;
// #DB i:8 orig:               this._identityChangesHead = this._identityChangesTail = null;
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype._mismatch = function(e, t, n, r) {//#RF [object Object]
// #DB i:8 orig:             var o;
// #DB i:8 orig:             if (e === null) {
// #DB i:8 orig:               o = this._itTail;
// #DB i:8 orig:             } else {
// #DB i:8 orig:               o = e._prev;
// #DB i:8 orig:               this._remove(e);
// #DB i:8 orig:             }
// #DB i:8 orig:             if (
// #DB i:8 orig:               (e =
// #DB i:8 orig:                 this._linkedRecords === null
// #DB i:8 orig:                   ? null
// #DB i:8 orig:                   : this._linkedRecords.get(n, r)) === null
// #DB i:8 orig:             ) {
// #DB i:8 orig:               if (
// #DB i:8 orig:                 (e =
// #DB i:8 orig:                   this._unlinkedRecords === null
// #DB i:8 orig:                     ? null
// #DB i:8 orig:                     : this._unlinkedRecords.get(n, null)) === null
// #DB i:8 orig:               ) {
// #DB i:8 orig:                 e = this._addAfter(new bt(t, n), o, r);
// #DB i:8 orig:               } else {
// #DB i:8 orig:                 if (!k(e.item, t)) {
// #DB i:8 orig:                   this._addIdentityChange(e, t);
// #DB i:8 orig:                 }
// #DB i:8 orig:                 this._reinsertAfter(e, o, r);
// #DB i:8 orig:               }
// #DB i:8 orig:             } else {
// #DB i:8 orig:               if (!k(e.item, t)) {
// #DB i:8 orig:                 this._addIdentityChange(e, t);
// #DB i:8 orig:               }
// #DB i:8 orig:               this._moveAfter(e, o, r);
// #DB i:8 orig:             }
// #DB i:8 orig:             return e;
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype._verifyReinsertion = function(e, t, n, r) {//#RF [object Object]
// #DB i:8 orig:             var o =
// #DB i:8 orig:               this._unlinkedRecords === null
// #DB i:8 orig:                 ? null
// #DB i:8 orig:                 : this._unlinkedRecords.get(n, null);
// #DB i:8 orig:             if (o === null) {
// #DB i:8 orig:               if (e.currentIndex != r) {
// #DB i:8 orig:                 e.currentIndex = r;
// #DB i:8 orig:                 this._addToMoves(e, r);
// #DB i:8 orig:               }
// #DB i:8 orig:             } else {
// #DB i:8 orig:               e = this._reinsertAfter(o, e._prev, r);
// #DB i:8 orig:             }
// #DB i:8 orig:             return e;
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype._truncate = function(e) {//#RF [object Object]
// #DB i:8 orig:             while (e !== null) {
// #DB i:8 orig:               var t = e._next;
// #DB i:8 orig:               this._addToRemovals(this._unlink(e));
// #DB i:8 orig:               e = t;
// #DB i:8 orig:             }
// #DB i:8 orig:             if (this._unlinkedRecords !== null) {
// #DB i:8 orig:               this._unlinkedRecords.clear();
// #DB i:8 orig:             }
// #DB i:8 orig:             if (this._additionsTail !== null) {
// #DB i:8 orig:               this._additionsTail._nextAdded = null;
// #DB i:8 orig:             }
// #DB i:8 orig:             if (this._movesTail !== null) {
// #DB i:8 orig:               this._movesTail._nextMoved = null;
// #DB i:8 orig:             }
// #DB i:8 orig:             if (this._itTail !== null) {
// #DB i:8 orig:               this._itTail._next = null;
// #DB i:8 orig:             }
// #DB i:8 orig:             if (this._removalsTail !== null) {
// #DB i:8 orig:               this._removalsTail._nextRemoved = null;
// #DB i:8 orig:             }
// #DB i:8 orig:             if (this._identityChangesTail !== null) {
// #DB i:8 orig:               this._identityChangesTail._nextIdentityChange = null;
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype._reinsertAfter = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:             if (this._unlinkedRecords !== null) {
// #DB i:8 orig:               this._unlinkedRecords.remove(e);
// #DB i:8 orig:             }
// #DB i:8 orig:             var r = e._prevRemoved;
// #DB i:8 orig:             var o = e._nextRemoved;
// #DB i:8 orig:             if (r === null) {
// #DB i:8 orig:               this._removalsHead = o;
// #DB i:8 orig:             } else {
// #DB i:8 orig:               r._nextRemoved = o;
// #DB i:8 orig:             }
// #DB i:8 orig:             if (o === null) {
// #DB i:8 orig:               this._removalsTail = r;
// #DB i:8 orig:             } else {
// #DB i:8 orig:               o._prevRemoved = r;
// #DB i:8 orig:             }
// #DB i:8 orig:             this._insertAfter(e, t, n);
// #DB i:8 orig:             this._addToMoves(e, n);
// #DB i:8 orig:             return e;
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype._moveAfter = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:             this._unlink(e);
// #DB i:8 orig:             this._insertAfter(e, t, n);
// #DB i:8 orig:             this._addToMoves(e, n);
// #DB i:8 orig:             return e;
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype._addAfter = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:             this._insertAfter(e, t, n);
// #DB i:8 orig:             this._additionsTail =
// #DB i:8 orig:               this._additionsTail === null
// #DB i:8 orig:                 ? (this._additionsHead = e)
// #DB i:8 orig:                 : (this._additionsTail._nextAdded = e);
// #DB i:8 orig:             return e;
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype._insertAfter = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:             var r = t === null ? this._itHead : t._next;
// #DB i:8 orig:             e._next = r;
// #DB i:8 orig:             e._prev = t;
// #DB i:8 orig:             if (r === null) {
// #DB i:8 orig:               this._itTail = e;
// #DB i:8 orig:             } else {
// #DB i:8 orig:               r._prev = e;
// #DB i:8 orig:             }
// #DB i:8 orig:             if (t === null) {
// #DB i:8 orig:               this._itHead = e;
// #DB i:8 orig:             } else {
// #DB i:8 orig:               t._next = e;
// #DB i:8 orig:             }
// #DB i:8 orig:             if (this._linkedRecords === null) {
// #DB i:8 orig:               this._linkedRecords = new wt();
// #DB i:8 orig:             }
// #DB i:8 orig:             this._linkedRecords.put(e);
// #DB i:8 orig:             e.currentIndex = n;
// #DB i:8 orig:             return e;
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype._remove = function(e) {//#RF [object Object]
// #DB i:8 orig:             return this._addToRemovals(this._unlink(e));
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype._unlink = function(e) {//#RF [object Object]
// #DB i:8 orig:             if (this._linkedRecords !== null) {
// #DB i:8 orig:               this._linkedRecords.remove(e);
// #DB i:8 orig:             }
// #DB i:8 orig:             var t = e._prev;
// #DB i:8 orig:             var n = e._next;
// #DB i:8 orig:             if (t === null) {
// #DB i:8 orig:               this._itHead = n;
// #DB i:8 orig:             } else {
// #DB i:8 orig:               t._next = n;
// #DB i:8 orig:             }
// #DB i:8 orig:             if (n === null) {
// #DB i:8 orig:               this._itTail = t;
// #DB i:8 orig:             } else {
// #DB i:8 orig:               n._prev = t;
// #DB i:8 orig:             }
// #DB i:8 orig:             return e;
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype._addToMoves = function(e, t) {//#RF [object Object]
// #DB i:8 orig:             if (e.previousIndex === t) {
// #DB i:8 orig:               return e;
// #DB i:8 orig:             } else {
// #DB i:8 orig:               this._movesTail =
// #DB i:8 orig:                 this._movesTail === null
// #DB i:8 orig:                   ? (this._movesHead = e)
// #DB i:8 orig:                   : (this._movesTail._nextMoved = e);
// #DB i:8 orig:               return e;
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype._addToRemovals = function(e) {//#RF [object Object]
// #DB i:8 orig:             if (this._unlinkedRecords === null) {
// #DB i:8 orig:               this._unlinkedRecords = new wt();
// #DB i:8 orig:             }
// #DB i:8 orig:             this._unlinkedRecords.put(e);
// #DB i:8 orig:             e.currentIndex = null;
// #DB i:8 orig:             e._nextRemoved = null;
// #DB i:8 orig:             if (this._removalsTail === null) {
// #DB i:8 orig:               this._removalsTail = this._removalsHead = e;
// #DB i:8 orig:               e._prevRemoved = null;
// #DB i:8 orig:             } else {
// #DB i:8 orig:               e._prevRemoved = this._removalsTail;
// #DB i:8 orig:               this._removalsTail = this._removalsTail._nextRemoved = e;
// #DB i:8 orig:             }
// #DB i:8 orig:             return e;
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype._addIdentityChange = function(e, t) {//#RF [object Object]
// #DB i:8 orig:             e.item = t;
// #DB i:8 orig:             this._identityChangesTail =
// #DB i:8 orig:               this._identityChangesTail === null
// #DB i:8 orig:                 ? (this._identityChangesHead = e)
// #DB i:8 orig:                 : (this._identityChangesTail._nextIdentityChange = e);
// #DB i:8 orig:             return e;
// #DB i:8 orig:           };
// #DB i:8 orig:           return e;
// #DB END i: orig:         })();
// #DB7 START i:8 orig:         var bt = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           this.item = e;
// #DB i:8 orig:           this.trackById = t;
// #DB i:8 orig:           this.currentIndex = null;
// #DB i:8 orig:           this.previousIndex = null;
// #DB i:8 orig:           this._nextPrevious = null;
// #DB i:8 orig:           this._prev = null;
// #DB i:8 orig:           this._next = null;
// #DB i:8 orig:           this._prevDup = null;
// #DB i:8 orig:           this._nextDup = null;
// #DB i:8 orig:           this._prevRemoved = null;
// #DB i:8 orig:           this._nextRemoved = null;
// #DB i:8 orig:           this._nextAdded = null;
// #DB i:8 orig:           this._nextMoved = null;
// #DB i:8 orig:           this._nextIdentityChange = null;
// #DB END i: orig:         };
// #DELFUN START i:8 orig:         var _t = (function() {
// #DB i:8 orig:           function e() {//#RF [object Object]
// #DB i:8 orig:             this._head = null;
// #DB i:8 orig:             this._tail = null;
// #DB i:8 orig:           }
// #DB i:8 orig:           e.prototype.add = function(e) {//#RF [object Object]
// #DB i:8 orig:             if (this._head === null) {
// #DB i:8 orig:               this._head = this._tail = e;
// #DB i:8 orig:               e._nextDup = null;
// #DB i:8 orig:               e._prevDup = null;
// #DB i:8 orig:             } else {
// #DB i:8 orig:               this._tail._nextDup = e;
// #DB i:8 orig:               e._prevDup = this._tail;
// #DB i:8 orig:               e._nextDup = null;
// #DB i:8 orig:               this._tail = e;
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.get = function(e, t) {//#RF [object Object]
// #DB i:8 orig:             for (var n = this._head; n !== null; n = n._nextDup) {
// #DB i:8 orig:               if ((t === null || t <= n.currentIndex) && k(n.trackById, e)) {
// #DB i:8 orig:                 return n;
// #DB i:8 orig:               }
// #DB i:8 orig:             }
// #DB i:8 orig:             return null;
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.remove = function(e) {//#RF [object Object]
// #DB i:8 orig:             var t = e._prevDup;
// #DB i:8 orig:             var n = e._nextDup;
// #DB i:8 orig:             if (t === null) {
// #DB i:8 orig:               this._head = n;
// #DB i:8 orig:             } else {
// #DB i:8 orig:               t._nextDup = n;
// #DB i:8 orig:             }
// #DB i:8 orig:             if (n === null) {
// #DB i:8 orig:               this._tail = t;
// #DB i:8 orig:             } else {
// #DB i:8 orig:               n._prevDup = t;
// #DB i:8 orig:             }
// #DB i:8 orig:             return this._head === null;
// #DB i:8 orig:           };
// #DB i:8 orig:           return e;
// #DB END i: orig:         })();
// #DB START YYY START i:8 orig:         var wt = (function() {
// #DB i:8 orig:           function e() {//#RF [object Object]
// #DB i:8 orig:             this.map = new Map();
// #DB i:8 orig:           }
// #DB i:8 orig:           e.prototype.put = function(e) {//#RF [object Object]
// #DB i:8 orig:             var t = e.trackById;
// #DB i:8 orig:             var n = this.map.get(t);
// #DB i:8 orig:             if (!n) {
// #DB i:8 orig:               n = new _t();
// #DB i:8 orig:               this.map.set(t, n);
// #DB i:8 orig:             }
// #DB i:8 orig:             n.add(e);
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.get = function(e, t) {//#RF [object Object]
// #DB i:8 orig:             var n = this.map.get(e);
// #DB i:8 orig:             if (n) {
// #DB i:8 orig:               return n.get(e, t);
// #DB i:8 orig:             } else {
// #DB i:8 orig:               return null;
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.remove = function(e) {//#RF [object Object]
// #DB i:8 orig:             var t = e.trackById;
// #DB i:8 orig:             if (this.map.get(t).remove(e)) {
// #DB i:8 orig:               this.map.delete(t);
// #DB i:8 orig:             }
// #DB i:8 orig:             return e;
// #DB i:8 orig:           };
// #DB i:8 orig:           Object.defineProperty(e.prototype, 'isEmpty', {
// #DB i:8 orig:             get: function() {//#RF [object Object]
// #DB i:8 orig:               return this.map.size === 0;
// #DB i:8 orig:             },
// #DB i:8 orig:             enumerable: true,
// #DB i:8 orig:             configurable: true,
// #DB i:8 orig:           });
// #DB i:8 orig:           e.prototype.clear = function() {//#RF [object Object]
// #DB i:8 orig:             this.map.clear();
// #DB i:8 orig:           };
// #DB i:8 orig:           return e;
// #DB END i: orig:         })();
// #DB START YYY START i:8 orig:         var Et = (function() {
// #DB i:8 orig:           function e() {}
// #DB i:8 orig:           e.prototype.supports = function(e) {//#RF [object Object]
// #DB i:8 orig:             return e instanceof Map || vt(e);
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.create = function() {//#RF [object Object]
// #DB i:8 orig:             return new xt();
// #DB i:8 orig:           };
// #DB i:8 orig:           return e;
// #DB END i: orig:         })();
// #DB START YYY START i:8 orig:         var xt = (function() {
// #DB i:8 orig:           function e() {//#RF [object Object]
// #DB i:8 orig:             this._records = new Map();
// #DB i:8 orig:             this._mapHead = null;
// #DB i:8 orig:             this._appendAfter = null;
// #DB i:8 orig:             this._previousMapHead = null;
// #DB i:8 orig:             this._changesHead = null;
// #DB i:8 orig:             this._changesTail = null;
// #DB i:8 orig:             this._additionsHead = null;
// #DB i:8 orig:             this._additionsTail = null;
// #DB i:8 orig:             this._removalsHead = null;
// #DB i:8 orig:             this._removalsTail = null;
// #DB i:8 orig:           }
// #DB i:8 orig:           Object.defineProperty(e.prototype, 'isDirty', {
// #DB i:8 orig:             get: function() {//#RF [object Object]
// #DB i:8 orig:               return (
// #DB i:8 orig:                 this._additionsHead !== null ||
// #DB i:8 orig:                 this._changesHead !== null ||
// #DB i:8 orig:                 this._removalsHead !== null
// #DB i:8 orig:               );
// #DB i:8 orig:             },
// #DB i:8 orig:             enumerable: true,
// #DB i:8 orig:             configurable: true,
// #DB i:8 orig:           });
// #DB i:8 orig:           e.prototype.forEachItem = function(e) {//#RF [object Object]
// #DB i:8 orig:             for (var t = this._mapHead; t !== null; t = t._next) {
// #DB i:8 orig:               e(t);
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.forEachPreviousItem = function(e) {//#RF [object Object]
// #DB i:8 orig:             for (
// #DB i:8 orig:               var t = this._previousMapHead;
// #DB i:8 orig:               t !== null;
// #DB i:8 orig:               t = t._nextPrevious
// #DB i:8 orig:             ) {
// #DB i:8 orig:               e(t);
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.forEachChangedItem = function(e) {//#RF [object Object]
// #DB i:8 orig:             for (var t = this._changesHead; t !== null; t = t._nextChanged) {
// #DB i:8 orig:               e(t);
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.forEachAddedItem = function(e) {//#RF [object Object]
// #DB i:8 orig:             for (var t = this._additionsHead; t !== null; t = t._nextAdded) {
// #DB i:8 orig:               e(t);
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.forEachRemovedItem = function(e) {//#RF [object Object]
// #DB i:8 orig:             for (var t = this._removalsHead; t !== null; t = t._nextRemoved) {
// #DB i:8 orig:               e(t);
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.diff = function(e) {//#RF [object Object]
// #DB i:8 orig:             if (e) {
// #DB i:8 orig:               if (!(e instanceof Map) && !vt(e)) {
// #DB i:8 orig:                 throw new Error(
// #DB i:8 orig:                   "Error trying to diff '" +
// #DB i:8 orig:                     I(e) +
// #DB i:8 orig:                     "'. Only maps and objects are allowed"
// #DB i:8 orig:                 );
// #DB i:8 orig:               }
// #DB i:8 orig:             } else {
// #DB i:8 orig:               e = new Map();
// #DB i:8 orig:             }
// #DB i:8 orig:             if (this.check(e)) {
// #DB i:8 orig:               return this;
// #DB i:8 orig:             } else {
// #DB i:8 orig:               return null;
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.onDestroy = function() {};//#RF [object Object]
// #DB i:8 orig:           e.prototype.check = function(e) {//#RF [object Object]
// #DB i:8 orig:             var t = this;
// #DB i:8 orig:             this._reset();
// #DB i:8 orig:             var n = this._mapHead;
// #DB i:8 orig:             this._appendAfter = null;
// #DB i:8 orig:             this._forEach(e, function(e, r) {
// #DB i:8 orig:               if (n && n.key === r) {
// #DB i:8 orig:                 t._maybeAddToChanges(n, e);
// #DB i:8 orig:                 t._appendAfter = n;
// #DB i:8 orig:                 n = n._next;
// #DB i:8 orig:               } else {
// #DB i:8 orig:                 var o = t._getOrCreateRecordForKey(r, e);
// #DB i:8 orig:                 n = t._insertBeforeOrAppend(n, o);
// #DB i:8 orig:               }
// #DB i:8 orig:             });
// #DB i:8 orig:             if (n) {
// #DB i:8 orig:               if (n._prev) {
// #DB i:8 orig:                 n._prev._next = null;
// #DB i:8 orig:               }
// #DB i:8 orig:               this._removalsHead = n;
// #DB i:8 orig:               for (var r = n; r !== null; r = r._nextRemoved) {
// #DB i:8 orig:                 if (r === this._mapHead) {
// #DB i:8 orig:                   this._mapHead = null;
// #DB i:8 orig:                 }
// #DB i:8 orig:                 this._records.delete(r.key);
// #DB i:8 orig:                 r._nextRemoved = r._next;
// #DB i:8 orig:                 r.previousValue = r.currentValue;
// #DB i:8 orig:                 r.currentValue = null;
// #DB i:8 orig:                 r._prev = null;
// #DB i:8 orig:                 r._next = null;
// #DB i:8 orig:               }
// #DB i:8 orig:             }
// #DB i:8 orig:             if (this._changesTail) {
// #DB i:8 orig:               this._changesTail._nextChanged = null;
// #DB i:8 orig:             }
// #DB i:8 orig:             if (this._additionsTail) {
// #DB i:8 orig:               this._additionsTail._nextAdded = null;
// #DB i:8 orig:             }
// #DB i:8 orig:             return this.isDirty;
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype._insertBeforeOrAppend = function(e, t) {//#RF [object Object]
// #DB i:8 orig:             if (e) {
// #DB i:8 orig:               var n = e._prev;
// #DB i:8 orig:               t._next = e;
// #DB i:8 orig:               t._prev = n;
// #DB i:8 orig:               e._prev = t;
// #DB i:8 orig:               if (n) {
// #DB i:8 orig:                 n._next = t;
// #DB i:8 orig:               }
// #DB i:8 orig:               if (e === this._mapHead) {
// #DB i:8 orig:                 this._mapHead = t;
// #DB i:8 orig:               }
// #DB i:8 orig:               this._appendAfter = e;
// #DB i:8 orig:               return e;
// #DB i:8 orig:             }
// #DB i:8 orig:             if (this._appendAfter) {
// #DB i:8 orig:               this._appendAfter._next = t;
// #DB i:8 orig:               t._prev = this._appendAfter;
// #DB i:8 orig:             } else {
// #DB i:8 orig:               this._mapHead = t;
// #DB i:8 orig:             }
// #DB i:8 orig:             this._appendAfter = t;
// #DB i:8 orig:             return null;
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype._getOrCreateRecordForKey = function(e, t) {//#RF [object Object]
// #DB i:8 orig:             if (this._records.has(e)) {
// #DB i:8 orig:               var n = this._records.get(e);
// #DB i:8 orig:               this._maybeAddToChanges(n, t);
// #DB i:8 orig:               var r = n._prev;
// #DB i:8 orig:               var o = n._next;
// #DB i:8 orig:               if (r) {
// #DB i:8 orig:                 r._next = o;
// #DB i:8 orig:               }
// #DB i:8 orig:               if (o) {
// #DB i:8 orig:                 o._prev = r;
// #DB i:8 orig:               }
// #DB i:8 orig:               n._next = null;
// #DB i:8 orig:               n._prev = null;
// #DB i:8 orig:               return n;
// #DB i:8 orig:             }
// #DB i:8 orig:             var i = new Tt(e);
// #DB i:8 orig:             this._records.set(e, i);
// #DB i:8 orig:             i.currentValue = t;
// #DB i:8 orig:             this._addToAdditions(i);
// #DB i:8 orig:             return i;
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype._reset = function() {//#RF [object Object]
// #DB i:8 orig:             if (this.isDirty) {
// #DB i:8 orig:               var e = void 0;
// #DB i:8 orig:               this._previousMapHead = this._mapHead;
// #DB i:8 orig:               for (e = this._previousMapHead; e !== null; e = e._next) {
// #DB i:8 orig:                 e._nextPrevious = e._next;
// #DB i:8 orig:               }
// #DB i:8 orig:               for (e = this._changesHead; e !== null; e = e._nextChanged) {
// #DB i:8 orig:                 e.previousValue = e.currentValue;
// #DB i:8 orig:               }
// #DB i:8 orig:               for (e = this._additionsHead; e != null; e = e._nextAdded) {
// #DB i:8 orig:                 e.previousValue = e.currentValue;
// #DB i:8 orig:               }
// #DB i:8 orig:               this._changesHead = this._changesTail = null;
// #DB i:8 orig:               this._additionsHead = this._additionsTail = null;
// #DB i:8 orig:               this._removalsHead = null;
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype._maybeAddToChanges = function(e, t) {//#RF [object Object]
// #DB i:8 orig:             if (!k(t, e.currentValue)) {
// #DB i:8 orig:               e.previousValue = e.currentValue;
// #DB i:8 orig:               e.currentValue = t;
// #DB i:8 orig:               this._addToChanges(e);
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype._addToAdditions = function(e) {//#RF [object Object]
// #DB i:8 orig:             if (this._additionsHead === null) {
// #DB i:8 orig:               this._additionsHead = this._additionsTail = e;
// #DB i:8 orig:             } else {
// #DB i:8 orig:               this._additionsTail._nextAdded = e;
// #DB i:8 orig:               this._additionsTail = e;
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype._addToChanges = function(e) {//#RF [object Object]
// #DB i:8 orig:             if (this._changesHead === null) {
// #DB i:8 orig:               this._changesHead = this._changesTail = e;
// #DB i:8 orig:             } else {
// #DB i:8 orig:               this._changesTail._nextChanged = e;
// #DB i:8 orig:               this._changesTail = e;
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype._forEach = function(e, t) {//#RF [object Object]
// #DB i:8 orig:             if (e instanceof Map) {
// #DB i:8 orig:               e.forEach(t);
// #DB i:8 orig:             } else {
// #DB i:8 orig:               Object.keys(e).forEach(function(n) {
// #DB i:8 orig:                 return t(e[n], n);
// #DB i:8 orig:               });
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           return e;
// #DB END i: orig:         })();
// #DB7 START i:8 orig:         var Tt = function(e) {//#RF [object Object]
// #DB i:8 orig:           this.key = e;
// #DB i:8 orig:           this.previousValue = null;
// #DB i:8 orig:           this.currentValue = null;
// #DB i:8 orig:           this._nextPrevious = null;
// #DB i:8 orig:           this._next = null;
// #DB i:8 orig:           this._prev = null;
// #DB i:8 orig:           this._nextAdded = null;
// #DB i:8 orig:           this._nextRemoved = null;
// #DB i:8 orig:           this._nextChanged = null;
// #DB END i: orig:         };
        var kt =function(n){};// #CB2 START i:10399 orig: 8
// #CB i:8 orig:           function e(e) {
// #CB i:8 orig:             this.factories = e;
// #CB i:8 orig:           }
// #CB i:8 orig:           e.create = function(t, n) {//#RF [object Object]
// #CB i:8 orig:             if (n != null) {
// #CB i:8 orig:               var r = n.factories.slice();
// #CB i:8 orig:               return new e((t = t.concat(r)));
// #CB i:8 orig:             }
// #CB i:8 orig:             return new e(t);
// #CB i:8 orig:           };
// #CB i:8 orig:           e.extend = function(t) {//#RF [object Object]
// #CB i:8 orig:             return {
// #CB i:8 orig:               provide: e,
// #CB i:8 orig:               useFactory: function(n) {
// #CB i:8 orig:                 if (!n) {
// #CB i:8 orig:                   throw new Error(
// #CB i:8 orig:                     'Cannot extend IterableDiffers without a parent injector'
// #CB i:8 orig:                   );
// #CB i:8 orig:                 }
// #CB i:8 orig:                 return e.create(t, n);
// #CB i:8 orig:               },
// #CB i:8 orig:               deps: [[e, new m(), new y()]],
// #CB i:8 orig:             };
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.find = function(e) {//#RF [object Object]
// #CB i:8 orig:             var t;
// #CB i:8 orig:             var n = this.factories.find(function(t) {
// #CB i:8 orig:               return t.supports(e);
// #CB i:8 orig:             });
// #CB i:8 orig:             if (n != null) {
// #CB i:8 orig:               return n;
// #CB i:8 orig:             }
// #CB i:8 orig:             throw new Error(
// #CB i:8 orig:               "Cannot find a differ supporting object '" +
// #CB i:8 orig:                 e +
// #CB i:8 orig:                 "' of type '" +
// #CB i:8 orig:                 ((t = e).name || typeof t) +
// #CB i:8 orig:                 "'"
// #CB i:8 orig:             );
// #CB i:8 orig:           };
// #CB i:8 orig:           return e;
// #CB END i: orig:         })();
        var It =function(n){};// #CB2 START i:10399 orig: 8
// #CB i:8 orig:           function e(e) {
// #CB i:8 orig:             this.factories = e;
// #CB i:8 orig:           }
// #CB i:8 orig:           e.create = function(t, n) {//#RF [object Object]
// #CB i:8 orig:             if (n) {
// #CB i:8 orig:               var r = n.factories.slice();
// #CB i:8 orig:               t = t.concat(r);
// #CB i:8 orig:             }
// #CB i:8 orig:             return new e(t);
// #CB i:8 orig:           };
// #CB i:8 orig:           e.extend = function(t) {//#RF [object Object]
// #CB i:8 orig:             return {
// #CB i:8 orig:               provide: e,
// #CB i:8 orig:               useFactory: function(n) {
// #CB i:8 orig:                 if (!n) {
// #CB i:8 orig:                   throw new Error(
// #CB i:8 orig:                     'Cannot extend KeyValueDiffers without a parent injector'
// #CB i:8 orig:                   );
// #CB i:8 orig:                 }
// #CB i:8 orig:                 return e.create(t, n);
// #CB i:8 orig:               },
// #CB i:8 orig:               deps: [[e, new m(), new y()]],
// #CB i:8 orig:             };
// #CB i:8 orig:           };
// #CB i:8 orig:           e.prototype.find = function(e) {//#RF [object Object]
// #CB i:8 orig:             var t = this.factories.find(function(t) {
// #CB i:8 orig:               return t.supports(e);
// #CB i:8 orig:             });
// #CB i:8 orig:             if (t) {
// #CB i:8 orig:               return t;
// #CB i:8 orig:             }
// #CB i:8 orig:             throw new Error(
// #CB i:8 orig:               "Cannot find a differ supporting object '" + e + "'"
// #CB i:8 orig:             );
// #CB i:8 orig:           };
// #CB i:8 orig:           return e;
// #CB END i: orig:         })();
// #DSL i: orig:         var Ot = [new Et()];
// #DSL i: orig:         var Nt = new kt([new yt()]);
// #DSL i: orig:         var St = new It(Ot);
        var At = Ge(null, 'core', [// #QA1 i:10399 orig: 
// #DSL i: orig:           { provide: ae, useValue: 'unknown' },
          { provide: Ye, deps: [P] },// #QA1 i:10399 orig: 
          { provide: Ve, deps: [] },// #QA1 i:10399 orig: 
          { provide: le, deps: [] },// #QA1 i:10399 orig: 
        ]);// #QA1 i:10399 orig: 
        var Mt = new c('LocaleId');// #QA1 i:10399 orig: 
        var jt = function(e) {};// #QA4 i:10399 orig: 
// #DB START YYY START i:8 orig:         var Vt = (function() {
// #DB i:8 orig:           var e = {
// #DB i:8 orig:             NONE: 0,
// #DB i:8 orig:             HTML: 1,
// #DB i:8 orig:             STYLE: 2,
// #DB i:8 orig:             SCRIPT: 3,
// #DB i:8 orig:             URL: 4,
// #DB i:8 orig:             RESOURCE_URL: 5,
// #DB i:8 orig:           };
// #DB i:8 orig:           e[e.NONE] = 'NONE';
// #DB i:8 orig:           e[e.HTML] = 'HTML';
// #DB i:8 orig:           e[e.STYLE] = 'STYLE';
// #DB i:8 orig:           e[e.SCRIPT] = 'SCRIPT';
// #DB i:8 orig:           e[e.URL] = 'URL';
// #DB i:8 orig:           e[e.RESOURCE_URL] = 'RESOURCE_URL';
// #DB i:8 orig:           return e;
// #DB END i: orig:         })();
        var Ht = function() {};// #KFB01 START i:10399 orig: 8//#RF [object Object]
        var Qt = {// #KB1 END i:10399 orig: 
          setCurrentNode: void 0,// #QA1 i:10399 orig: 
          createRootView: void 0,// #QA1 i:10399 orig: 
          createEmbeddedView: void 0,// #QA1 i:10399 orig: 
          createComponentView: void 0,// #QA1 i:10399 orig: 
          createNgModuleRef: void 0,// #QA1 i:10399 orig: 
          overrideProvider: void 0,// #QA1 i:10399 orig: 
          overrideComponentView: void 0,// #QA1 i:10399 orig: 
          clearOverrides: void 0,// #QA1 i:10399 orig: 
          checkAndUpdateView: void 0,// #QA1 i:10399 orig: 
          checkNoChangesView: void 0,// #QA1 i:10399 orig: 
          destroyView: void 0,// #QA1 i:10399 orig: 
          resolveDep: void 0,// #QA1 i:10399 orig: 
          createDebugContext: void 0,// #QA1 i:10399 orig: 
          handleEvent: void 0,// #QA1 i:10399 orig: 
          updateDirectives: void 0,// #QA1 i:10399 orig: 
          updateRenderer: void 0,// #QA1 i:10399 orig: 
          dirtyParentQueries: void 0,// #QA1 i:10399 orig: 
        };// #QA1 i:10399 orig: 
        var Kt = function() {};// #QA4 i:10399 orig: 
        var Jt = new Map();// #QA1 i:10399 orig: 
// #DSL i: orig:         var $t = '$$undefined';
// #DSL i: orig:         var en = '$$empty';
// #DSL i: orig:         var nn = 0;
        var mn = new WeakMap();// #QA1 i:10399 orig: 
// #DSL i: orig:         var Tn = /^:([^:]+):(.+)$/;
// #DSL i: orig:         var Pn = new Object();
// #DSL i: orig:         var Dn = Xt(P);
        var Rn = Xt(Ee);// #QA1 i:10399 orig: 
        var Wn = new Object();// #QA1 i:10399 orig: 
        var Gn = (function() {// #QA6 i:10399 orig: 
          function t(t, n, r, o, i, s) {// #KBQ i:10399 orig: 10
            var u = e.call(this) || this;// #NOT DELETABLE i:10399 orig: 10
            u.selector = t;// #NOT DELETABLE i:10399 orig: 10
            u.componentType = n;// #NOT DELETABLE i:10399 orig: 10
// #KB1 i:10 orig:             u._inputs = o;
// #KB1 i:10 orig:             u._outputs = i;
// #KB1 i:10 orig:             u.ngContentSelectors = s;
            u.viewDefFactory = r;// #NOT DELETABLE i:10399 orig: 10
// #KB1 i:10 orig:             return u;
          }// #KB1 END i:10399 orig: 
          var e = he;// #QA1 i:10399 orig: 
          Object(r.b)(t, e);// #QA1 i:10399 orig: 
          Object.defineProperty(t.prototype, 'inputs', {// #QA1 i:10399 orig: 
            get: function() {// #QA1 i:10399 orig: 
              var e = [];// #QA1 i:10399 orig: 
              var t = this._inputs;// #QA1 i:10399 orig: 
              for (var n in t) {// #QA1 i:10399 orig: 
                e.push({ propName: n, templateName: t[n] });// #QA1 i:10399 orig: 
              }// #QA1 i:10399 orig: 
              return e;// #QA1 i:10399 orig: 
            },// #QA1 i:10399 orig: 
            enumerable: true,// #QA1 i:10399 orig: 
            configurable: true,// #QA1 i:10399 orig: 
          });// #QA1 i:10399 orig: 
          Object.defineProperty(t.prototype, 'outputs', {// #QA1 i:10399 orig: 
            get: function() {// #QA1 i:10399 orig: 
              var e = [];// #QA1 i:10399 orig: 
              for (var t in this._outputs) {// #QA1 i:10399 orig: 
                e.push({ propName: t, templateName: this._outputs[t] });// #QA1 i:10399 orig: 
              }// #QA1 i:10399 orig: 
              return e;// #QA1 i:10399 orig: 
            },// #QA1 i:10399 orig: 
            enumerable: true,// #QA1 i:10399 orig: 
            configurable: true,// #QA1 i:10399 orig: 
          });// #QA1 i:10399 orig: 
          t.prototype.create = function(e, t, n, r) {// #QA1 i:10399 orig: 
            if (!r) {// #QA1 i:10399 orig: 
              throw new Error('ngModule should be provided');// #QA1 i:10399 orig: 
            }// #QA1 i:10399 orig: 
            var o = bn(this.viewDefFactory);// #QA1 i:10399 orig: 
            var i = o.nodes[0].element.componentProvider.nodeIndex;// #QA1 i:10399 orig: 
            var s = Qt.createRootView(e, t || [], n, o, r, Wn);// #QA1 i:10399 orig: 
            var u = Ut(s, i).instance;// #QA1 i:10399 orig: 
            if (n) {// #QA1 i:10399 orig: 
              s.renderer.setAttribute(// #QA1 i:10399 orig: 
                zt(s, 0).renderElement,// #QA1 i:10399 orig: 
                'ng-version',// #QA1 i:10399 orig: 
                h.full// #QA1 i:10399 orig: 
              );// #QA1 i:10399 orig: 
            }// #QB i:10399 orig: 
            return new qn(s, new Xn(s), u);// #QA1 i:10399 orig: 
          };// #QA1 i:10399 orig: 
          return t;// #QA1 i:10399 orig: 
        })();// #QA1 i:10399 orig: 
        var qn = (function() {// #QA6 i:10399 orig: 
// #DB6 START i:10 orig:           function t(t, n, r) {//#RF [object Object]
// #DB i:10 orig:             var o = e.call(this) || this;
// #DB i:10 orig:             o._view = t;
// #DB i:10 orig:             o._viewRef = n;
// #DB i:10 orig:             o._component = r;
// #DB i:10 orig:             o._elDef = o._view.def.nodes[0];
// #DB i:10 orig:             o.hostView = n;
// #DB i:10 orig:             o.changeDetectorRef = n;
// #DB i:10 orig:             o.instance = r;
// #DB i:10 orig:             return o;
// #DB END i: orig:           }
// #DL SINGLE FUNC i: orig:           var e = function() {};//#RF [object Object]
          Object(r.b)(t, e);// #QA1 i:10399 orig: 
          Object.defineProperty(t.prototype, 'location', {// #QA1 i:10399 orig: 
// #DB7 START i:12 orig:             get: function() {//#RF [object Object]
// #DB i:12 orig:               return new tt(
// #DB i:12 orig:                 zt(this._view, this._elDef.nodeIndex).renderElement
// #DB i:12 orig:               );
// #DB END i: orig:             },
            enumerable: true,// #QA1 i:10399 orig: 
            configurable: true,// #QA1 i:10399 orig: 
          });// #QA1 i:10399 orig: 
          Object.defineProperty(t.prototype, 'injector', {// #QA1 i:10399 orig: 
// #DB7 START i:12 orig:             get: function() {//#RF [object Object]
// #DB i:12 orig:               return new nr(this._view, this._elDef);
// #DB END i: orig:             },
            enumerable: true,// #QA1 i:10399 orig: 
            configurable: true,// #QA1 i:10399 orig: 
          });// #QA1 i:10399 orig: 
          Object.defineProperty(t.prototype, 'componentType', {// #QA1 i:10399 orig: 
// #DB7 START i:12 orig:             get: function() {//#RF [object Object]
// #DB i:12 orig:               return this._component.constructor;
// #DB END i: orig:             },
            enumerable: true,// #QA1 i:10399 orig: 
            configurable: true,// #QA1 i:10399 orig: 
          });// #QA1 i:10399 orig: 
// #DB4 START i:10 orig:           t.prototype.destroy = function() {//#RF [object Object]
// #DB i:10 orig:             this._viewRef.destroy();
// #DB END i: orig:           };
// #DB4 START i:10 orig:           t.prototype.onDestroy = function(e) {//#RF [object Object]
// #DB i:10 orig:             this._viewRef.onDestroy(e);
// #DB END i: orig:           };
          return t;// #QA1 i:10399 orig: 
        })();// #QA1 i:10399 orig: 
// #DELFUN START i:8 orig:         var Kn = (function() {
// #DB i:8 orig:           function e(e, t, n) {//#RF [object Object]
// #DB i:8 orig:             this._view = e;
// #DB i:8 orig:             this._elDef = t;
// #DB i:8 orig:             this._data = n;
// #DB i:8 orig:             this._embeddedViews = [];
// #DB i:8 orig:           }
// #DB i:8 orig:           Object.defineProperty(e.prototype, 'element', {
// #DB i:8 orig:             get: function() {//#RF [object Object]
// #DB i:8 orig:               return new tt(this._data.renderElement);
// #DB i:8 orig:             },
// #DB i:8 orig:             enumerable: true,
// #DB i:8 orig:             configurable: true,
// #DB i:8 orig:           });
// #DB i:8 orig:           Object.defineProperty(e.prototype, 'injector', {
// #DB i:8 orig:             get: function() {//#RF [object Object]
// #DB i:8 orig:               return new nr(this._view, this._elDef);
// #DB i:8 orig:             },
// #DB i:8 orig:             enumerable: true,
// #DB i:8 orig:             configurable: true,
// #DB i:8 orig:           });
// #DB i:8 orig:           Object.defineProperty(e.prototype, 'parentInjector', {
// #DB i:8 orig:             get: function() {//#RF [object Object]
// #DB i:8 orig:               var e = this._view;
// #DB i:8 orig:               for (var t = this._elDef.parent; !t && e; ) {
// #DB i:8 orig:                 t = dn(e);
// #DB i:8 orig:                 e = e.parent;
// #DB i:8 orig:               }
// #DB i:8 orig:               if (e) {
// #DB i:8 orig:                 return new nr(e, t);
// #DB i:8 orig:               } else {
// #DB i:8 orig:                 return new nr(this._view, null);
// #DB i:8 orig:               }
// #DB i:8 orig:             },
// #DB i:8 orig:             enumerable: true,
// #DB i:8 orig:             configurable: true,
// #DB i:8 orig:           });
// #DB i:8 orig:           e.prototype.clear = function() {//#RF [object Object]
// #DB i:8 orig:             for (var e = this._embeddedViews.length - 1; e >= 0; e--) {
// #DB i:8 orig:               var t = Fn(this._data, e);
// #DB i:8 orig:               Qt.destroyView(t);
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.get = function(e) {//#RF [object Object]
// #DB i:8 orig:             var t = this._embeddedViews[e];
// #DB i:8 orig:             if (t) {
// #DB i:8 orig:               var n = new Xn(t);
// #DB i:8 orig:               n.attachToViewContainerRef(this);
// #DB i:8 orig:               return n;
// #DB i:8 orig:             }
// #DB i:8 orig:             return null;
// #DB i:8 orig:           };
// #DB i:8 orig:           Object.defineProperty(e.prototype, 'length', {
// #DB i:8 orig:             get: function() {//#RF [object Object]
// #DB i:8 orig:               return this._embeddedViews.length;
// #DB i:8 orig:             },
// #DB i:8 orig:             enumerable: true,
// #DB i:8 orig:             configurable: true,
// #DB i:8 orig:           });
// #DB i:8 orig:           e.prototype.createEmbeddedView = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:             var r = e.createEmbeddedView(t || {});
// #DB i:8 orig:             this.insert(r, n);
// #DB i:8 orig:             return r;
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.createComponent = function(e, t, n, r, o) {//#RF [object Object]
// #DB i:8 orig:             var i = n || this.parentInjector;
// #DB i:8 orig:             if (!o && !(e instanceof Ce)) {
// #DB i:8 orig:               o = i.get(Ee);
// #DB i:8 orig:             }
// #DB i:8 orig:             var s = e.create(i, r, void 0, o);
// #DB i:8 orig:             this.insert(s.hostView, t);
// #DB i:8 orig:             return s;
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.insert = function(e, t) {//#RF [object Object]
// #DB i:8 orig:             if (e.destroyed) {
// #DB i:8 orig:               throw new Error(
// #DB i:8 orig:                 'Cannot insert a destroyed View in a ViewContainer!'
// #DB i:8 orig:               );
// #DB i:8 orig:             }
// #DB i:8 orig:             var n;
// #DB i:8 orig:             var r;
// #DB i:8 orig:             var s = e;
// #DB i:8 orig:             var o = s._view;
// #DB i:8 orig:             var i = (n = this._data).viewContainer._embeddedViews;
// #DB i:8 orig:             if ((r = t) === null || r === void 0) {
// #DB i:8 orig:               r = i.length;
// #DB i:8 orig:             }
// #DB i:8 orig:             o.viewContainerParent = this._view;
// #DB i:8 orig:             Un(i, r, o);
// #DB i:8 orig:             (function(e, t) {
// #DB i:8 orig:               var n = ln(t);
// #DB i:8 orig:               if (n && n !== e && !(16 & t.state)) {
// #DB i:8 orig:                 t.state |= 16;
// #DB i:8 orig:                 var r = n.template._projectedViews;
// #DB i:8 orig:                 if (!r) {
// #DB i:8 orig:                   r = n.template._projectedViews = [];
// #DB i:8 orig:                 }
// #DB i:8 orig:                 r.push(t);
// #DB i:8 orig:                 (function() {
// #DB i:8 orig:                   var e = 0;
// #DB i:8 orig:                   var n = t.parentNodeDef;
// #DB i:8 orig:                   if (!(4 & n.flags)) {
// #DB i:8 orig:                     t.parent.def.nodeFlags |= 4;
// #DB i:8 orig:                     n.flags |= 4;
// #DB i:8 orig:                     for (var r = n.parent; r; ) {
// #DB i:8 orig:                       r.childFlags |= 4;
// #DB i:8 orig:                       r = r.parent;
// #DB i:8 orig:                     }
// #DB i:8 orig:                   }
// #DB i:8 orig:                 })();
// #DB i:8 orig:               }
// #DB i:8 orig:             })(n, o);
// #DB i:8 orig:             Qt.dirtyParentQueries(o);
// #DB i:8 orig:             Bn(n, r > 0 ? i[r - 1] : null, o);
// #DB i:8 orig:             s.attachToViewContainerRef(this);
// #DB i:8 orig:             return e;
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.move = function(e, t) {//#RF [object Object]
// #DB i:8 orig:             if (e.destroyed) {
// #DB i:8 orig:               throw new Error(
// #DB i:8 orig:                 'Cannot move a destroyed View in a ViewContainer!'
// #DB i:8 orig:               );
// #DB i:8 orig:             }
// #DB i:8 orig:             var n;
// #DB i:8 orig:             var r;
// #DB i:8 orig:             var i;
// #DB i:8 orig:             var u = this._embeddedViews.indexOf(e._view);
// #DB i:8 orig:             var o = t;
// #DB i:8 orig:             var s = (i = (n = this._data).viewContainer._embeddedViews)[
// #DB i:8 orig:               (r = u)
// #DB i:8 orig:             ];
// #DB i:8 orig:             Zn(i, r);
// #DB i:8 orig:             if (o == null) {
// #DB i:8 orig:               o = i.length;
// #DB i:8 orig:             }
// #DB i:8 orig:             Un(i, o, s);
// #DB i:8 orig:             Qt.dirtyParentQueries(s);
// #DB i:8 orig:             zn(s);
// #DB i:8 orig:             Bn(n, o > 0 ? i[o - 1] : null, s);
// #DB i:8 orig:             return e;
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.indexOf = function(e) {//#RF [object Object]
// #DB i:8 orig:             return this._embeddedViews.indexOf(e._view);
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.remove = function(e) {//#RF [object Object]
// #DB i:8 orig:             var t = Fn(this._data, e);
// #DB i:8 orig:             if (t) {
// #DB i:8 orig:               Qt.destroyView(t);
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.detach = function(e) {//#RF [object Object]
// #DB i:8 orig:             var t = Fn(this._data, e);
// #DB i:8 orig:             if (t) {
// #DB i:8 orig:               return new Xn(t);
// #DB i:8 orig:             } else {
// #DB i:8 orig:               return null;
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           return e;
// #DB END i: orig:         })();
// #DELFUN START i:8 orig:         var Xn = (function() {
// #DB i:8 orig:           function e(e) {//#RF [object Object]
// #DB i:8 orig:             this._view = e;
// #DB i:8 orig:             this._viewContainerRef = null;
// #DB i:8 orig:             this._appRef = null;
// #DB i:8 orig:           }
// #DB i:8 orig:           Object.defineProperty(e.prototype, 'rootNodes', {
// #DB i:8 orig:             get: function() {//#RF [object Object]
// #DB i:8 orig:               _n(this._view, 0, void 0, void 0, (e = []));
// #DB i:8 orig:               return e;
// #DB i:8 orig:               var e;
// #DB i:8 orig:             },
// #DB i:8 orig:             enumerable: true,
// #DB i:8 orig:             configurable: true,
// #DB i:8 orig:           });
// #DB i:8 orig:           Object.defineProperty(e.prototype, 'context', {
// #DB i:8 orig:             get: function() {//#RF [object Object]
// #DB i:8 orig:               return this._view.context;
// #DB i:8 orig:             },
// #DB i:8 orig:             enumerable: true,
// #DB i:8 orig:             configurable: true,
// #DB i:8 orig:           });
// #DB i:8 orig:           Object.defineProperty(e.prototype, 'destroyed', {
// #DB i:8 orig:             get: function() {//#RF [object Object]
// #DB i:8 orig:               return (128 & this._view.state) != 0;
// #DB i:8 orig:             },
// #DB i:8 orig:             enumerable: true,
// #DB i:8 orig:             configurable: true,
// #DB i:8 orig:           });
// #DB i:8 orig:           e.prototype.markForCheck = function() {//#RF [object Object]
// #DB i:8 orig:             un(this._view);
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.detach = function() {//#RF [object Object]
// #DB i:8 orig:             this._view.state &= -5;
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.detectChanges = function() {//#RF [object Object]
// #DB i:8 orig:             var e = this._view.root.rendererFactory;
// #DB i:8 orig:             if (e.begin) {
// #DB i:8 orig:               e.begin();
// #DB i:8 orig:             }
// #DB i:8 orig:             try {
// #DB i:8 orig:               Qt.checkAndUpdateView(this._view);
// #DB i:8 orig:             } finally {
// #DB i:8 orig:               if (e.end) {
// #DB i:8 orig:                 e.end();
// #DB i:8 orig:               }
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.checkNoChanges = function() {//#RF [object Object]
// #DB i:8 orig:             Qt.checkNoChangesView(this._view);
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.reattach = function() {//#RF [object Object]
// #DB i:8 orig:             this._view.state |= 4;
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.onDestroy = function(e) {//#RF [object Object]
// #DB i:8 orig:             if (!this._view.disposables) {
// #DB i:8 orig:               this._view.disposables = [];
// #DB i:8 orig:             }
// #DB i:8 orig:             this._view.disposables.push(e);
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.destroy = function() {//#RF [object Object]
// #DB i:8 orig:             if (this._appRef) {
// #DB i:8 orig:               this._appRef.detachView(this);
// #DB i:8 orig:             } else if (this._viewContainerRef) {
// #DB i:8 orig:               this._viewContainerRef.detach(
// #DB i:8 orig:                 this._viewContainerRef.indexOf(this)
// #DB i:8 orig:               );
// #DB i:8 orig:             }
// #DB i:8 orig:             Qt.destroyView(this._view);
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.detachFromAppRef = function() {//#RF [object Object]
// #DB i:8 orig:             this._appRef = null;
// #DB i:8 orig:             zn(this._view);
// #DB i:8 orig:             Qt.dirtyParentQueries(this._view);
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.attachToAppRef = function(e) {//#RF [object Object]
// #DB i:8 orig:             if (this._viewContainerRef) {
// #DB i:8 orig:               throw new Error(
// #DB i:8 orig:                 'This view is already attached to a ViewContainer!'
// #DB i:8 orig:               );
// #DB i:8 orig:             }
// #DB i:8 orig:             this._appRef = e;
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.attachToViewContainerRef = function(e) {//#RF [object Object]
// #DB i:8 orig:             if (this._appRef) {
// #DB i:8 orig:               throw new Error(
// #DB i:8 orig:                 'This view is already attached directly to the ApplicationRef!'
// #DB i:8 orig:               );
// #DB i:8 orig:             }
// #DB i:8 orig:             this._viewContainerRef = e;
// #DB i:8 orig:           };
// #DB i:8 orig:           return e;
// #DB END i: orig:         })();
// #DB START YYY START i:8 orig:         var er = (function() {
// #DB i:8 orig:           function t(t, n) {//#RF [object Object]
// #DB i:8 orig:             var r = e.call(this) || this;
// #DB i:8 orig:             r._parentView = t;
// #DB i:8 orig:             r._def = n;
// #DB i:8 orig:             return r;
// #DB i:8 orig:           }
// #DB i:8 orig:           var e = rt;
// #DB i:8 orig:           Object(r.b)(t, e);
// #DB i:8 orig:           t.prototype.createEmbeddedView = function(e) {//#RF [object Object]
// #DB i:8 orig:             return new Xn(
// #DB i:8 orig:               Qt.createEmbeddedView(
// #DB i:8 orig:                 this._parentView,
// #DB i:8 orig:                 this._def,
// #DB i:8 orig:                 this._def.element.template,
// #DB i:8 orig:                 e
// #DB i:8 orig:               )
// #DB i:8 orig:             );
// #DB i:8 orig:           };
// #DB i:8 orig:           Object.defineProperty(t.prototype, 'elementRef', {
// #DB i:8 orig:             get: function() {//#RF [object Object]
// #DB i:8 orig:               return new tt(
// #DB i:8 orig:                 zt(this._parentView, this._def.nodeIndex).renderElement
// #DB i:8 orig:               );
// #DB i:8 orig:             },
// #DB i:8 orig:             enumerable: true,
// #DB i:8 orig:             configurable: true,
// #DB i:8 orig:           });
// #DB i:8 orig:           return t;
// #DB END i: orig:         })();
// #DB START YYY START i:8 orig:         var nr = (function() {
// #DB i:8 orig:           function e(e, t) {//#RF [object Object]
// #DB i:8 orig:             this.view = e;
// #DB i:8 orig:             this.elDef = t;
// #DB i:8 orig:           }
// #DB i:8 orig:           e.prototype.get = function(e, t) {//#RF [object Object]
// #DB i:8 orig:             if (t === void 0) {
// #DB i:8 orig:               t = P.THROW_IF_NOT_FOUND;
// #DB i:8 orig:             }
// #DB i:8 orig:             return Qt.resolveDep(
// #DB i:8 orig:               this.view,
// #DB i:8 orig:               this.elDef,
// #DB i:8 orig:               !!this.elDef && (33554432 & this.elDef.flags) != 0,
// #DB i:8 orig:               { flags: 0, token: e, tokenKey: Xt(e) },
// #DB i:8 orig:               t
// #DB i:8 orig:             );
// #DB i:8 orig:           };
// #DB i:8 orig:           return e;
// #DB END i: orig:         })();
// #DB START YYY START i:8 orig:         var or = (function() {
// #DB i:8 orig:           function e(e) {//#RF [object Object]
// #DB i:8 orig:             this.delegate = e;
// #DB i:8 orig:           }
// #DB i:8 orig:           e.prototype.selectRootElement = function(e) {//#RF [object Object]
// #DB i:8 orig:             return this.delegate.selectRootElement(e);
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.createElement = function(e, t) {//#RF [object Object]
// #DB i:8 orig:             var n = kn(t);
// #DB i:8 orig:             var r = this.delegate.createElement(n[1], n[0]);
// #DB i:8 orig:             if (e) {
// #DB i:8 orig:               this.delegate.appendChild(e, r);
// #DB i:8 orig:             }
// #DB i:8 orig:             return r;
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.createViewRoot = function(e) {//#RF [object Object]
// #DB i:8 orig:             return e;
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.createTemplateAnchor = function(e) {//#RF [object Object]
// #DB i:8 orig:             var t = this.delegate.createComment('');
// #DB i:8 orig:             if (e) {
// #DB i:8 orig:               this.delegate.appendChild(e, t);
// #DB i:8 orig:             }
// #DB i:8 orig:             return t;
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.createText = function(e, t) {//#RF [object Object]
// #DB i:8 orig:             var n = this.delegate.createText(t);
// #DB i:8 orig:             if (e) {
// #DB i:8 orig:               this.delegate.appendChild(e, n);
// #DB i:8 orig:             }
// #DB i:8 orig:             return n;
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.projectNodes = function(e, t) {//#RF [object Object]
// #DB i:8 orig:             for (var n = 0; n < t.length; n++) {
// #DB i:8 orig:               this.delegate.appendChild(e, t[n]);
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.attachViewAfter = function(e, t) {//#RF [object Object]
// #DB i:8 orig:             var n = this.delegate.parentNode(e);
// #DB i:8 orig:             var r = this.delegate.nextSibling(e);
// #DB i:8 orig:             for (var o = 0; o < t.length; o++) {
// #DB i:8 orig:               this.delegate.insertBefore(n, t[o], r);
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.detachView = function(e) {//#RF [object Object]
// #DB i:8 orig:             for (var t = 0; t < e.length; t++) {
// #DB i:8 orig:               var n = e[t];
// #DB i:8 orig:               var r = this.delegate.parentNode(n);
// #DB i:8 orig:               this.delegate.removeChild(r, n);
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.destroyView = function(e, t) {//#RF [object Object]
// #DB i:8 orig:             for (var n = 0; n < t.length; n++) {
// #DB i:8 orig:               this.delegate.destroyNode(t[n]);
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.listen = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:             return this.delegate.listen(e, t, n);
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.listenGlobal = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:             return this.delegate.listen(e, t, n);
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.setElementProperty = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:             this.delegate.setProperty(e, t, n);
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.setElementAttribute = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:             var r = kn(t);
// #DB i:8 orig:             var o = r[0];
// #DB i:8 orig:             var i = r[1];
// #DB i:8 orig:             if (n == null) {
// #DB i:8 orig:               this.delegate.removeAttribute(e, i, o);
// #DB i:8 orig:             } else {
// #DB i:8 orig:               this.delegate.setAttribute(e, i, n, o);
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.setBindingDebugInfo = function(e, t, n) {};//#RF [object Object]
// #DB i:8 orig:           e.prototype.setElementClass = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:             if (n) {
// #DB i:8 orig:               this.delegate.addClass(e, t);
// #DB i:8 orig:             } else {
// #DB i:8 orig:               this.delegate.removeClass(e, t);
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.setElementStyle = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:             if (n == null) {
// #DB i:8 orig:               this.delegate.removeStyle(e, t);
// #DB i:8 orig:             } else {
// #DB i:8 orig:               this.delegate.setStyle(e, t, n);
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.invokeElementMethod = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:             e[t].apply(e, n);
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.setText = function(e, t) {//#RF [object Object]
// #DB i:8 orig:             this.delegate.setValue(e, t);
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.animate = function() {//#RF [object Object]
// #DB i:8 orig:             throw new Error('Renderer.animate is no longer supported!');
// #DB i:8 orig:           };
// #DB i:8 orig:           return e;
// #DB END i: orig:         })();
        var sr = (function() {// #QA6 i:10399 orig: 
          function e(e, t, n, r) {// #QA3 i:10399 orig: 10
// #KB1 i:10 orig:             this._moduleType = e;
            this._parent = t;// #NOT DELETABLE i:10399 orig: 10
            this._bootstrapComponents = n;// #NOT DELETABLE i:10399 orig: 10
            this._def = r;// #NOT DELETABLE i:10399 orig: 10
// #KB1 i:10 orig:             this._destroyListeners = [];
// #KB1 i:10 orig:             this._destroyed = false;
            this.injector = this;// #NOT DELETABLE i:10399 orig: 10
            (function(e) {// #NOT DELETABLE i:10399 orig: 10
              var t = e._def;// #NOT DELETABLE i:10399 orig: 10
              var n = (e._providers = new Array(t.providers.length));// #NOT DELETABLE i:10399 orig: 10
// #KB1 i:10 orig:               for (var r = 0; r < t.providers.length; r++) {
// #KB1 i:10 orig:                 var o = t.providers[r];
// #KB1 i:10 orig:                 if (!(4096 & o.flags)) {
// #KB1 i:10 orig:                   n[r] = Ln(e, o);
// #KB1 i:10 orig:                 }
// #KB1 i:10 orig:               }
            })(this);// #NOT DELETABLE i:10399 orig: 10
          }// #KB1 END i:10399 orig: 
          e.prototype.get = function(e, t) {// #QA1 i:10399 orig: 
            if (t === void 0) {// #QA1 i:10399 orig: 
              t = P.THROW_IF_NOT_FOUND;// #QA1 i:10399 orig: 
            }// #QA1 i:10399 orig: 
            return Hn(this, { token: e, tokenKey: Xt(e), flags: 0 }, t);// #QA1 i:10399 orig: 
          };// #QA1 i:10399 orig: 
          Object.defineProperty(e.prototype, 'instance', {// #QA1 i:10399 orig: 
// #DB7 START i:12 orig:             get: function() {//#RF [object Object]
// #DB i:12 orig:               return this.get(this._moduleType);
// #DB END i: orig:             },
            enumerable: true,// #QA1 i:10399 orig: 
            configurable: true,// #QA1 i:10399 orig: 
          });// #QA1 i:10399 orig: 
          Object.defineProperty(e.prototype, 'componentFactoryResolver', {// #QA1 i:10399 orig: 
// #DB7 START i:12 orig:             get: function() {//#RF [object Object]
// #DB i:12 orig:               return this.get(_e);
// #DB END i: orig:             },
            enumerable: true,// #QA1 i:10399 orig: 
            configurable: true,// #QA1 i:10399 orig: 
          });// #QA1 i:10399 orig: 
// #DB4 START i:10 orig:           e.prototype.destroy = function() {//#RF [object Object]
// #DB i:10 orig:             if (this._destroyed) {
// #DB i:10 orig:               throw new Error(
// #DB i:10 orig:                 'The ng module ' +
// #DB i:10 orig:                   I(this.instance.constructor) +
// #DB i:10 orig:                   ' has already been destroyed.'
// #DB i:10 orig:               );
// #DB i:10 orig:             }
// #DB i:10 orig:             this._destroyed = true;
// #DB i:10 orig:             (function(e, t) {
// #DB i:10 orig:               var n = e._def;
// #DB i:10 orig:               for (var r = 0; r < n.providers.length; r++) {
// #DB i:10 orig:                 if (131072 & n.providers[r].flags) {
// #DB i:10 orig:                   var o = e._providers[r];
// #DB i:10 orig:                   if (o && o !== Pn) {
// #DB i:10 orig:                     o.ngOnDestroy();
// #DB i:10 orig:                   }
// #DB i:10 orig:                 }
// #DB i:10 orig:               }
// #DB i:10 orig:             })(this);
// #DB i:10 orig:             this._destroyListeners.forEach(function(e) {
// #DB i:10 orig:               return e();
// #DB i:10 orig:             });
// #DB END i: orig:           };
          e.prototype.onDestroy = function(e) {// #QA1 i:10399 orig: 
            this._destroyListeners.push(e);// #QA1 i:10399 orig: 
          };// #QA1 i:10399 orig: 
          return e;// #QA1 i:10399 orig: 
        })();// #QA1 i:10399 orig: 
// #DL SINGLE FUNC i: orig:         var ur = Xt(function() {});//#RF [object Object]
// #DL SINGLE FUNC i: orig:         var ar = Xt(function() {});//#RF [object Object]
// #DSL i: orig:         var cr = Xt(tt);
// #DL SINGLE FUNC i: orig:         var lr = Xt(function() {});//#RF [object Object]
// #DSL i: orig:         var dr = Xt(rt);
// #DL SINGLE FUNC i: orig:         var fr = Xt(function() {});//#RF [object Object]
// #DSL i: orig:         var pr = Xt(P);
// #DSL i: orig:         var wr = {};
        var Xr = (function() {// #QA6 i:10399 orig: 
          var e = {// #QA1 i:10399 orig: 
            CreateViewNodes: 0,// #QA1 i:10399 orig: 
            CheckNoChanges: 1,// #QA1 i:10399 orig: 
            CheckNoChangesProjectedViews: 2,// #QA1 i:10399 orig: 
            CheckAndUpdate: 3,// #QA1 i:10399 orig: 
            CheckAndUpdateProjectedViews: 4,// #QA1 i:10399 orig: 
            Destroy: 5,// #QA1 i:10399 orig: 
          };// #QA1 i:10399 orig: 
          e[e.CreateViewNodes] = 'CreateViewNodes';// #QA1 i:10399 orig: 
          e[e.CheckNoChanges] = 'CheckNoChanges';// #QA1 i:10399 orig: 
          e[e.CheckNoChangesProjectedViews] = 'CheckNoChangesProjectedViews';// #QA1 i:10399 orig: 
          e[e.CheckAndUpdate] = 'CheckAndUpdate';// #QA1 i:10399 orig: 
          e[e.CheckAndUpdateProjectedViews] = 'CheckAndUpdateProjectedViews';// #QA1 i:10399 orig: 
          e[e.Destroy] = 'Destroy';// #QA1 i:10399 orig: 
          return e;// #QA1 i:10399 orig: 
        })();// #QA1 i:10399 orig: 
        var oo = false;// #QA1 i:10399 orig: 
// #DSL i: orig:         var fo = new Map();
// #DSL i: orig:         var po = new Map();
// #DSL i: orig:         var Eo;
// #DSL i: orig:         var xo;
// #DSL i: orig:         var To;
// #DB START YYY START i:8 orig:         var ko = (function() {
// #DB i:8 orig:           var e = {
// #DB i:8 orig:             create: 0,
// #DB i:8 orig:             detectChanges: 1,
// #DB i:8 orig:             checkNoChanges: 2,
// #DB i:8 orig:             destroy: 3,
// #DB i:8 orig:             handleEvent: 4,
// #DB i:8 orig:           };
// #DB i:8 orig:           e[e.create] = 'create';
// #DB i:8 orig:           e[e.detectChanges] = 'detectChanges';
// #DB i:8 orig:           e[e.checkNoChanges] = 'checkNoChanges';
// #DB i:8 orig:           e[e.destroy] = 'destroy';
// #DB i:8 orig:           e[e.handleEvent] = 'handleEvent';
// #DB i:8 orig:           return e;
// #DB END i: orig:         })();
// #DSL i: orig:         var Po = /([A-Z])/g;
// #DB START YYY START i:8 orig:         var Vo = (function() {
// #DB i:8 orig:           function e(e, t) {//#RF [object Object]
// #DB i:8 orig:             this.view = e;
// #DB i:8 orig:             this.nodeIndex = t;
// #DB i:8 orig:             if (t == null) {
// #DB i:8 orig:               this.nodeIndex = t = 0;
// #DB i:8 orig:             }
// #DB i:8 orig:             this.nodeDef = e.def.nodes[t];
// #DB i:8 orig:             var n = this.nodeDef;
// #DB i:8 orig:             for (var r = e; n && (1 & n.flags) == 0; ) {
// #DB i:8 orig:               n = n.parent;
// #DB i:8 orig:             }
// #DB i:8 orig:             if (!n) {
// #DB i:8 orig:               while (!n && r) {
// #DB i:8 orig:                 n = dn(r);
// #DB i:8 orig:                 r = r.parent;
// #DB i:8 orig:               }
// #DB i:8 orig:             }
// #DB i:8 orig:             this.elDef = n;
// #DB i:8 orig:             this.elView = r;
// #DB i:8 orig:           }
// #DB i:8 orig:           Object.defineProperty(e.prototype, 'elOrCompView', {
// #DB i:8 orig:             get: function() {//#RF [object Object]
// #DB i:8 orig:               return (
// #DB i:8 orig:                 zt(this.elView, this.elDef.nodeIndex).componentView || this.view
// #DB i:8 orig:               );
// #DB i:8 orig:             },
// #DB i:8 orig:             enumerable: true,
// #DB i:8 orig:             configurable: true,
// #DB i:8 orig:           });
// #DB i:8 orig:           Object.defineProperty(e.prototype, 'injector', {
// #DB i:8 orig:             get: function() {//#RF [object Object]
// #DB i:8 orig:               return tr(this.elView, this.elDef);
// #DB i:8 orig:             },
// #DB i:8 orig:             enumerable: true,
// #DB i:8 orig:             configurable: true,
// #DB i:8 orig:           });
// #DB i:8 orig:           Object.defineProperty(e.prototype, 'component', {
// #DB i:8 orig:             get: function() {//#RF [object Object]
// #DB i:8 orig:               return this.elOrCompView.component;
// #DB i:8 orig:             },
// #DB i:8 orig:             enumerable: true,
// #DB i:8 orig:             configurable: true,
// #DB i:8 orig:           });
// #DB i:8 orig:           Object.defineProperty(e.prototype, 'context', {
// #DB i:8 orig:             get: function() {//#RF [object Object]
// #DB i:8 orig:               return this.elOrCompView.context;
// #DB i:8 orig:             },
// #DB i:8 orig:             enumerable: true,
// #DB i:8 orig:             configurable: true,
// #DB i:8 orig:           });
// #DB i:8 orig:           Object.defineProperty(e.prototype, 'providerTokens', {
// #DB i:8 orig:             get: function() {//#RF [object Object]
// #DB i:8 orig:               var e = [];
// #DB i:8 orig:               if (this.elDef) {
// #DB i:8 orig:                 for (
// #DB i:8 orig:                   var t = this.elDef.nodeIndex + 1;
// #DB i:8 orig:                   t <= this.elDef.nodeIndex + this.elDef.childCount;
// #DB i:8 orig:                   t++
// #DB i:8 orig:                 ) {
// #DB i:8 orig:                   var n = this.elView.def.nodes[t];
// #DB i:8 orig:                   if (20224 & n.flags) {
// #DB i:8 orig:                     e.push(n.provider.token);
// #DB i:8 orig:                   }
// #DB i:8 orig:                   t += n.childCount;
// #DB i:8 orig:                 }
// #DB i:8 orig:               }
// #DB i:8 orig:               return e;
// #DB i:8 orig:             },
// #DB i:8 orig:             enumerable: true,
// #DB i:8 orig:             configurable: true,
// #DB i:8 orig:           });
// #DB i:8 orig:           Object.defineProperty(e.prototype, 'references', {
// #DB i:8 orig:             get: function() {//#RF [object Object]
// #DB i:8 orig:               var e = {};
// #DB i:8 orig:               if (this.elDef) {
// #DB i:8 orig:                 Ho(this.elView, this.elDef, e);
// #DB i:8 orig:                 for (
// #DB i:8 orig:                   var t = this.elDef.nodeIndex + 1;
// #DB i:8 orig:                   t <= this.elDef.nodeIndex + this.elDef.childCount;
// #DB i:8 orig:                   t++
// #DB i:8 orig:                 ) {
// #DB i:8 orig:                   var n = this.elView.def.nodes[t];
// #DB i:8 orig:                   if (20224 & n.flags) {
// #DB i:8 orig:                     Ho(this.elView, n, e);
// #DB i:8 orig:                   }
// #DB i:8 orig:                   t += n.childCount;
// #DB i:8 orig:                 }
// #DB i:8 orig:               }
// #DB i:8 orig:               return e;
// #DB i:8 orig:             },
// #DB i:8 orig:             enumerable: true,
// #DB i:8 orig:             configurable: true,
// #DB i:8 orig:           });
// #DB i:8 orig:           Object.defineProperty(e.prototype, 'componentRenderElement', {
// #DB i:8 orig:             get: function() {//#RF [object Object]
// #DB i:8 orig:               var e = (function(e) {
// #DB i:8 orig:                 while (e && !pn(e)) {
// #DB i:8 orig:                   e = e.parent;
// #DB i:8 orig:                 }
// #DB i:8 orig:                 if (e.parent) {
// #DB i:8 orig:                   return zt(e.parent, dn(e).nodeIndex);
// #DB i:8 orig:                 } else {
// #DB i:8 orig:                   return null;
// #DB i:8 orig:                 }
// #DB i:8 orig:               })(this.elOrCompView);
// #DB i:8 orig:               if (e) {
// #DB i:8 orig:                 return e.renderElement;
// #DB i:8 orig:               } else {
// #DB i:8 orig:                 return;
// #DB i:8 orig:               }
// #DB i:8 orig:             },
// #DB i:8 orig:             enumerable: true,
// #DB i:8 orig:             configurable: true,
// #DB i:8 orig:           });
// #DB i:8 orig:           Object.defineProperty(e.prototype, 'renderNode', {
// #DB i:8 orig:             get: function() {//#RF [object Object]
// #DB i:8 orig:               if (2 & this.nodeDef.flags) {
// #DB i:8 orig:                 return fn(this.view, this.nodeDef);
// #DB i:8 orig:               } else {
// #DB i:8 orig:                 return fn(this.elView, this.elDef);
// #DB i:8 orig:               }
// #DB i:8 orig:             },
// #DB i:8 orig:             enumerable: true,
// #DB i:8 orig:             configurable: true,
// #DB i:8 orig:           });
// #DB i:8 orig:           e.prototype.logError = function(e) {//#RF [object Object]
// #DB i:8 orig:             var t;
// #DB i:8 orig:             var n;
// #DB i:8 orig:             var r = [];
// #DB i:8 orig:             for (var o = 1; o < arguments.length; o++) {
// #DB i:8 orig:               r[o - 1] = arguments[o];
// #DB i:8 orig:             }
// #DB i:8 orig:             if (2 & this.nodeDef.flags) {
// #DB i:8 orig:               t = this.view.def;
// #DB i:8 orig:               n = this.nodeDef.nodeIndex;
// #DB i:8 orig:             } else {
// #DB i:8 orig:               t = this.elView.def;
// #DB i:8 orig:               n = this.elDef.nodeIndex;
// #DB i:8 orig:             }
// #DB i:8 orig:             var i = (function(e, t) {
// #DB i:8 orig:               var n = -1;
// #DB i:8 orig:               for (var r = 0; r <= t; r++) {
// #DB i:8 orig:                 if (3 & e.nodes[r].flags) {
// #DB i:8 orig:                   n++;
// #DB i:8 orig:                 }
// #DB i:8 orig:               }
// #DB i:8 orig:               return n;
// #DB i:8 orig:             })(t, n);
// #DB i:8 orig:             var s = -1;
// #DB i:8 orig:             t.factory(function() {
// #DB i:8 orig:               if (++s === i) {
// #DB i:8 orig:                 return (t = e.error).bind.apply(t, [e].concat(r));
// #DB i:8 orig:               } else {
// #DB i:8 orig:                 return Kt;
// #DB i:8 orig:               }
// #DB i:8 orig:               var t;
// #DB i:8 orig:             });
// #DB i:8 orig:             if (s < i) {
// #DB i:8 orig:               e.error(
// #DB i:8 orig:                 'Illegal state: the ViewDefinitionFactory did not call the logger!'
// #DB i:8 orig:               );
// #DB i:8 orig:               e.error.apply(e, r);
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           return e;
// #DB END i: orig:         })();
// #DB START YYY START i:8 orig:         var Bo = (function() {
// #DB i:8 orig:           function e(e) {//#RF [object Object]
// #DB i:8 orig:             this.delegate = e;
// #DB i:8 orig:           }
// #DB i:8 orig:           e.prototype.createRenderer = function(e, t) {//#RF [object Object]
// #DB i:8 orig:             return new zo(this.delegate.createRenderer(e, t));
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.begin = function() {//#RF [object Object]
// #DB i:8 orig:             if (this.delegate.begin) {
// #DB i:8 orig:               this.delegate.begin();
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.end = function() {//#RF [object Object]
// #DB i:8 orig:             if (this.delegate.end) {
// #DB i:8 orig:               this.delegate.end();
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.whenRenderingDone = function() {//#RF [object Object]
// #DB i:8 orig:             if (this.delegate.whenRenderingDone) {
// #DB i:8 orig:               return this.delegate.whenRenderingDone();
// #DB i:8 orig:             } else {
// #DB i:8 orig:               return Promise.resolve(null);
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           return e;
// #DB END i: orig:         })();
// #DB START YYY START i:8 orig:         var zo = (function() {
// #DB i:8 orig:           function e(e) {//#RF [object Object]
// #DB i:8 orig:             this.delegate = e;
// #DB i:8 orig:             this.data = this.delegate.data;
// #DB i:8 orig:           }
// #DB i:8 orig:           e.prototype.destroyNode = function(e) {//#RF [object Object]
// #DB i:8 orig:             (function(e) {
// #DB i:8 orig:               at.delete(e.nativeNode);
// #DB i:8 orig:             })(ct(e));
// #DB i:8 orig:             if (this.delegate.destroyNode) {
// #DB i:8 orig:               this.delegate.destroyNode(e);
// #DB i:8 orig:             }
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.destroy = function() {//#RF [object Object]
// #DB i:8 orig:             this.delegate.destroy();
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.createElement = function(e, t) {//#RF [object Object]
// #DB i:8 orig:             var n = this.delegate.createElement(e, t);
// #DB i:8 orig:             var r = Fo();
// #DB i:8 orig:             if (r) {
// #DB i:8 orig:               var o = new it(n, null, r);
// #DB i:8 orig:               o.name = e;
// #DB i:8 orig:               lt(o);
// #DB i:8 orig:             }
// #DB i:8 orig:             return n;
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.createComment = function(e) {//#RF [object Object]
// #DB i:8 orig:             var t = this.delegate.createComment(e);
// #DB i:8 orig:             var n = Fo();
// #DB i:8 orig:             if (n) {
// #DB i:8 orig:               lt(new ot(t, null, n));
// #DB i:8 orig:             }
// #DB i:8 orig:             return t;
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.createText = function(e) {//#RF [object Object]
// #DB i:8 orig:             var t = this.delegate.createText(e);
// #DB i:8 orig:             var n = Fo();
// #DB i:8 orig:             if (n) {
// #DB i:8 orig:               lt(new ot(t, null, n));
// #DB i:8 orig:             }
// #DB i:8 orig:             return t;
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.appendChild = function(e, t) {//#RF [object Object]
// #DB i:8 orig:             var n = ct(e);
// #DB i:8 orig:             var r = ct(t);
// #DB i:8 orig:             if (n && r && n instanceof it) {
// #DB i:8 orig:               n.addChild(r);
// #DB i:8 orig:             }
// #DB i:8 orig:             this.delegate.appendChild(e, t);
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.insertBefore = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:             var r = ct(e);
// #DB i:8 orig:             var o = ct(t);
// #DB i:8 orig:             var i = ct(n);
// #DB i:8 orig:             if (r && o && r instanceof it) {
// #DB i:8 orig:               r.insertBefore(i, o);
// #DB i:8 orig:             }
// #DB i:8 orig:             this.delegate.insertBefore(e, t, n);
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.removeChild = function(e, t) {//#RF [object Object]
// #DB i:8 orig:             var n = ct(e);
// #DB i:8 orig:             var r = ct(t);
// #DB i:8 orig:             if (n && r && n instanceof it) {
// #DB i:8 orig:               n.removeChild(r);
// #DB i:8 orig:             }
// #DB i:8 orig:             this.delegate.removeChild(e, t);
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.selectRootElement = function(e) {//#RF [object Object]
// #DB i:8 orig:             var t = this.delegate.selectRootElement(e);
// #DB i:8 orig:             var n = Fo();
// #DB i:8 orig:             if (n) {
// #DB i:8 orig:               lt(new it(t, null, n));
// #DB i:8 orig:             }
// #DB i:8 orig:             return t;
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.setAttribute = function(e, t, n, r) {//#RF [object Object]
// #DB i:8 orig:             var o = ct(e);
// #DB i:8 orig:             if (o && o instanceof it) {
// #DB i:8 orig:               o.attributes[r ? r + ':' + t : t] = n;
// #DB i:8 orig:             }
// #DB i:8 orig:             this.delegate.setAttribute(e, t, n, r);
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.removeAttribute = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:             var r = ct(e);
// #DB i:8 orig:             if (r && r instanceof it) {
// #DB i:8 orig:               r.attributes[n ? n + ':' + t : t] = null;
// #DB i:8 orig:             }
// #DB i:8 orig:             this.delegate.removeAttribute(e, t, n);
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.addClass = function(e, t) {//#RF [object Object]
// #DB i:8 orig:             var n = ct(e);
// #DB i:8 orig:             if (n && n instanceof it) {
// #DB i:8 orig:               n.classes[t] = true;
// #DB i:8 orig:             }
// #DB i:8 orig:             this.delegate.addClass(e, t);
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.removeClass = function(e, t) {//#RF [object Object]
// #DB i:8 orig:             var n = ct(e);
// #DB i:8 orig:             if (n && n instanceof it) {
// #DB i:8 orig:               n.classes[t] = false;
// #DB i:8 orig:             }
// #DB i:8 orig:             this.delegate.removeClass(e, t);
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.setStyle = function(e, t, n, r) {//#RF [object Object]
// #DB i:8 orig:             var o = ct(e);
// #DB i:8 orig:             if (o && o instanceof it) {
// #DB i:8 orig:               o.styles[t] = n;
// #DB i:8 orig:             }
// #DB i:8 orig:             this.delegate.setStyle(e, t, n, r);
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.removeStyle = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:             var r = ct(e);
// #DB i:8 orig:             if (r && r instanceof it) {
// #DB i:8 orig:               r.styles[t] = null;
// #DB i:8 orig:             }
// #DB i:8 orig:             this.delegate.removeStyle(e, t, n);
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.setProperty = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:             var r = ct(e);
// #DB i:8 orig:             if (r && r instanceof it) {
// #DB i:8 orig:               r.properties[t] = n;
// #DB i:8 orig:             }
// #DB i:8 orig:             this.delegate.setProperty(e, t, n);
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.listen = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:             if (typeof e != 'string') {
// #DB i:8 orig:               var r = ct(e);
// #DB i:8 orig:               if (r) {
// #DB i:8 orig:                 r.listeners.push(
// #DB i:8 orig:                   new function(e, t) {
// #DB i:8 orig:                     this.name = e;
// #DB i:8 orig:                     this.callback = t;
// #DB i:8 orig:                   }(t, n)
// #DB i:8 orig:                 );
// #DB i:8 orig:               }
// #DB i:8 orig:             }
// #DB i:8 orig:             return this.delegate.listen(e, t, n);
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.parentNode = function(e) {//#RF [object Object]
// #DB i:8 orig:             return this.delegate.parentNode(e);
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.nextSibling = function(e) {//#RF [object Object]
// #DB i:8 orig:             return this.delegate.nextSibling(e);
// #DB i:8 orig:           };
// #DB i:8 orig:           e.prototype.setValue = function(e, t) {//#RF [object Object]
// #DB i:8 orig:             return this.delegate.setValue(e, t);
// #DB i:8 orig:           };
// #DB i:8 orig:           return e;
// #DB END i: orig:         })();
        var Wo = (function() {// #QA6 i:10399 orig: 
          function t(t, n, r) {// #QB i:10399 orig: 
            var o = e.call(this) || this;// #QB i:10399 orig: 
            o.moduleType = t;// #QB i:10399 orig: 
            o._bootstrapComponents = n;// #QB i:10399 orig: 
            o._ngModuleDefFactory = r;// #QA1 i:10399 orig: 
            return o;// #QA1 i:10399 orig: 
          }// #QA1 i:10399 orig: 
          var e = function() {};// #QA4 i:10399 orig: 
          Object(r.b)(t, e);// #QA1 i:10399 orig: 
          t.prototype.create = function(e) {// #QA1 i:10399 orig: 
            (function() {// #QA1 i:10399 orig: 
              if (!oo) {// #QA1 i:10399 orig: 
                oo = true;// #QA1 i:10399 orig: 
                var e = We()// #QA1 i:10399 orig: 
                  ? {// #QA1 i:10399 orig: 
// #DSL i: orig:                       setCurrentNode: Io,
// #DSL i: orig:                       createRootView: so,
// #DSL i: orig:                       createEmbeddedView: ao,
// #DSL i: orig:                       createComponentView: co,
// #DSL i: orig:                       createNgModuleRef: lo,
// #DSL i: orig:                       overrideProvider: ho,
// #DSL i: orig:                       overrideComponentView: vo,
// #DSL i: orig:                       clearOverrides: yo,
// #DSL i: orig:                       checkAndUpdateView: _o,
// #DSL i: orig:                       checkNoChangesView: wo,
// #DSL i: orig:                       destroyView: Co,
// #DB7 START i:22 orig:                       createDebugContext: function(e, t) {//#RF [object Object]
// #DB i:22 orig:                         return new Vo(e, t);
// #DB END i: orig:                       },
// #DSL i: orig:                       handleEvent: Oo,
// #DSL i: orig:                       updateDirectives: No,
// #DSL i: orig:                       updateRenderer: So,
                    }// #QA1 i:10399 orig: 
                  : {// #QA1 i:10399 orig: 
                      setCurrentNode: function() {},// #QA4 i:10399 orig: 
                      createRootView: io,// #QA1 i:10399 orig: 
// #DSL i: orig:                       createEmbeddedView: Lr,
                      createComponentView: Br,// #QA1 i:10399 orig: 
                      createNgModuleRef: ir,// #QA1 i:10399 orig: 
// #DSL i: orig:                       overrideProvider: Kt,
// #DSL i: orig:                       overrideComponentView: Kt,
// #DSL i: orig:                       clearOverrides: Kt,
// #SD i: orig:                       checkAndUpdateView: Qr,
// #SD i: orig:                       checkNoChangesView: Wr,
// #DSL i: orig:                       destroyView: Jr,
// #DB7 START i:22 orig:                       createDebugContext: function(e, t) {//#RF [object Object]
// #DB i:22 orig:                         return new Vo(e, t);
// #DB END i: orig:                       },
// #DB7 START i:22 orig:                       handleEvent: function(e, t, n, r) {//#RF [object Object]
// #DB i:22 orig:                         return e.def.handleEvent(e, t, n, r);
// #DB END i: orig:                       },
// #DB7 START i:22 orig:                       updateDirectives: function(e, t) {//#RF [object Object]
// #DB i:22 orig:                         return e.def.updateDirectives(t === 0 ? mo : bo, e);
// #DB END i: orig:                       },
// #DB7 START i:22 orig:                       updateRenderer: function(e, t) {//#RF [object Object]
// #DB i:22 orig:                         return e.def.updateRenderer(t === 0 ? mo : bo, e);
// #DB END i: orig:                       },
                    };// #QA1 i:10399 orig: 
                Qt.setCurrentNode = e.setCurrentNode;// #QA1 i:10399 orig: 
                Qt.createRootView = e.createRootView;// #QA1 i:10399 orig: 
// #DSL i: orig:                 Qt.createEmbeddedView = e.createEmbeddedView;
                Qt.createComponentView = e.createComponentView;// #QA1 i:10399 orig: 
                Qt.createNgModuleRef = e.createNgModuleRef;// #QA1 i:10399 orig: 
// #DSL i: orig:                 Qt.overrideProvider = e.overrideProvider;
// #DSL i: orig:                 Qt.overrideComponentView = e.overrideComponentView;
// #DSL i: orig:                 Qt.clearOverrides = e.clearOverrides;
// #DSL i: orig:                 Qt.checkAndUpdateView = e.checkAndUpdateView;
// #DSL i: orig:                 Qt.checkNoChangesView = e.checkNoChangesView;
// #DSL i: orig:                 Qt.destroyView = e.destroyView;
// #DSL i: orig:                 Qt.resolveDep = Cr;
// #DSL i: orig:                 Qt.createDebugContext = e.createDebugContext;
// #DSL i: orig:                 Qt.handleEvent = e.handleEvent;
// #DSL i: orig:                 Qt.updateDirectives = e.updateDirectives;
// #DSL i: orig:                 Qt.updateRenderer = e.updateRenderer;
// #DSL i: orig:                 Qt.dirtyParentQueries = Or;
              }// #QA1 i:10399 orig: 
            })();// #QA1 i:10399 orig: 
            var t = bn(this._ngModuleDefFactory);// #QA1 i:10399 orig: 
            return Qt.createNgModuleRef(// #QA1 i:10399 orig: 
              this.moduleType,// #QA1 i:10399 orig: 
              e || P.NULL,// #QA1 i:10399 orig: 
              this._bootstrapComponents,// #QA1 i:10399 orig: 
              t// #QA1 i:10399 orig: 
            );// #QA1 i:10399 orig: 
          };// #QA1 i:10399 orig: 
          return t;// #QA1 i:10399 orig: 
        })();// #QA1 i:10399 orig: 
// #DSL i: orig:         if (typeof ngDevMode == 'undefined') {
// #DSL i: orig:           if (typeof window != 'undefined') {
// #DSL i: orig:             window.ngDevMode = true;
// #DSL i: orig:           }
// #DSL i: orig:           if (typeof self != 'undefined') {
// #DSL i: orig:             self.ngDevMode = true;
// #DSL i: orig:           }
// #DSL i: orig:           if (typeof e != 'undefined') {
// #DSL i: orig:             e.ngDevMode = true;
// #DSL i: orig:           }
// #DSL i: orig:         }
// #KFB02 START i:8 orig:         var Zo = (function(e, t, n) {
// #DB i:8 orig:           return {
// #DB i:8 orig:             parent: Zo,
// #DB i:8 orig:             id: null,
// #DB i:8 orig:             node: null,
// #DB i:8 orig:             data: [],
// #DB i:8 orig:             ngStaticData: [],
// #DB i:8 orig:             cleanup: null,
// #DB i:8 orig:             renderer: null,
// #DB i:8 orig:             child: null,
// #DB i:8 orig:             tail: null,
// #DB i:8 orig:             next: null,
// #DB i:8 orig:             bindingStartIndex: null,
// #DB i:8 orig:             creationMode: true,
// #DB i:8 orig:             viewHookStartIndex: null,
// #DB i:8 orig:           };
// #DB END i: orig:         })();
      }.call(t, n('DuR2')));// #QA1 i:10399 orig: 
    },// #QA1 i:10399 orig: 
    YaPU: function(e, t, n) {// #QA1 i:10399 orig: 
      'use strict';// #QA1 i:10399 orig: 
// #DSL i: orig:       var r = n('AMGY');
// #DSL i: orig:       var o = n('OVmG');
// #DSL i: orig:       var i = n('tLDX');
      var s = n('t7NR');// #QA1 i:10399 orig: 
// #DSL i: orig:       var u = n('+CnV');
      n.d(t, 'a', function() {// #QA1 i:10399 orig: 
        return a;// #QA1 i:10399 orig: 
      });// #QA1 i:10399 orig: 
      var a = (function() {// #QA6 i:10399 orig: 
        function e(e) {// #QA3 i:10399 orig: 8
// #KB1 i:8 orig:           this._isScalar = false;
// #KB1 i:8 orig:           if (e) {
// #KB1 i:8 orig:             this._subscribe = e;
// #KB1 i:8 orig:           }
        }// #KB1 END i:10399 orig: 
        e.prototype.lift = function(t) {// #QA1 i:10399 orig: 
          var n = new e();// #QA1 i:10399 orig: 
          n.source = this;// #QA1 i:10399 orig: 
          n.operator = t;// #QA1 i:10399 orig: 
          return n;// #QA1 i:10399 orig: 
        };// #QA1 i:10399 orig: 
        e.prototype.subscribe = function(e, t, n) {// #QA1 i:10399 orig: 
          var r = this.operator;// #QA1 i:10399 orig: 
          var u = (function(e, t, n) {// #QA1 i:10399 orig: 
            if (e) {// #QA1 i:10399 orig: 
              if (e instanceof o.a) {// #QA1 i:10399 orig: 
                return e;// #QA1 i:10399 orig: 
              }// #QA1 i:10399 orig: 
              if (e[i.a]) {// #QA1 i:10399 orig: 
                return e[i.a]();// #QA1 i:10399 orig: 
              }// #QA1 i:10399 orig: 
            }// #QA1 i:10399 orig: 
            if (e || t || n) {// #QA1 i:10399 orig: 
              return new o.a(e, t, n);// #QA1 i:10399 orig: 
            } else {// #QA1 i:10399 orig: 
              return new o.a(s.a);// #QA1 i:10399 orig: 
            }// #QA1 i:10399 orig: 
          })(e, t, n);// #QA1 i:10399 orig: 
          if (r) {// #QA1 i:10399 orig: 
            r.call(u, this.source);// #QA1 i:10399 orig: 
          } else {// #QA1 i:10399 orig: 
            u.add(// #QA1 i:10399 orig: 
              this.source || !u.syncErrorThrowable// #QA1 i:10399 orig: 
                ? this._subscribe(u)// #QA1 i:10399 orig: 
                : this._trySubscribe(u)// #QA1 i:10399 orig: 
            );// #QA1 i:10399 orig: 
          }// #QA1 i:10399 orig: 
          if (// #QA1 i:10399 orig: 
            u.syncErrorThrowable &&// #QA1 i:10399 orig: 
            ((u.syncErrorThrowable = false), u.syncErrorThrown)// #QA1 i:10399 orig: 
          ) {// #QA1 i:10399 orig: 
            throw u.syncErrorValue;// #QA1 i:10399 orig: 
          }// #QA1 i:10399 orig: 
          return u;// #QA1 i:10399 orig: 
        };// #QA1 i:10399 orig: 
        e.prototype._trySubscribe = function(e) {// #QA1 i:10399 orig: 
          try {// #QA1 i:10399 orig: 
            return this._subscribe(e);// #QA1 i:10399 orig: 
          } catch (t) {// #QA1 i:10399 orig: 
            e.syncErrorThrown = true;// #QA1 i:10399 orig: 
            e.syncErrorValue = t;// #QA1 i:10399 orig: 
            e.error(t);// #QA1 i:10399 orig: 
          }// #QA1 i:10399 orig: 
        };// #QA1 i:10399 orig: 
// #DB4 START i:8 orig:         e.prototype.forEach = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           var n = this;
// #DB i:8 orig:           if (!t) {
// #DB i:8 orig:             if (r.a.Rx && r.a.Rx.config && r.a.Rx.config.Promise) {
// #DB i:8 orig:               t = r.a.Rx.config.Promise;
// #DB i:8 orig:             } else if (r.a.Promise) {
// #DB i:8 orig:               t = r.a.Promise;
// #DB i:8 orig:             }
// #DB i:8 orig:           }
// #DB i:8 orig:           if (!t) {
// #DB i:8 orig:             throw new Error('no Promise impl found');
// #DB i:8 orig:           }
// #DB i:8 orig:           return new t(function(t, r) {
// #DB i:8 orig:             var o = n.subscribe(
// #DB i:8 orig:               function(t) {
// #DB i:8 orig:                 if (o) {
// #DB i:8 orig:                   try {
// #DB i:8 orig:                     e(t);
// #DB i:8 orig:                   } catch (e) {
// #DB i:8 orig:                     r(e);
// #DB i:8 orig:                     o.unsubscribe();
// #DB i:8 orig:                   }
// #DB i:8 orig:                 } else {
// #DB i:8 orig:                   e(t);
// #DB i:8 orig:                 }
// #DB i:8 orig:               },
// #DB i:8 orig:               r,
// #DB i:8 orig:               t
// #DB i:8 orig:             );
// #DB i:8 orig:           });
// #DB END i: orig:         };
// #DB4 START i:8 orig:         e.prototype._subscribe = function(e) {//#RF [object Object]
// #DB i:8 orig:           return this.source.subscribe(e);
// #DB END i: orig:         };
// #DB5 START i:8 orig:         e.prototype[u.a] = function() {//#RF [object Object]
// #DB i:8 orig:           return this;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         e.prototype.pipe = function() {//#RF [object Object]
// #DB i:8 orig:           var e = [];
// #DB i:8 orig:           for (var t = 0; t < arguments.length; t++) {
// #DB i:8 orig:             e[t - 0] = arguments[t];
// #DB i:8 orig:           }
// #DB i:8 orig:           if (e.length === 0) {
// #DB i:8 orig:             return this;
// #DB i:8 orig:           } else {
// #DB i:8 orig:             return ((n = e)
// #DB i:8 orig:               ? n.length === 1
// #DB i:8 orig:                 ? n[0]
// #DB i:8 orig:                 : function(e) {
// #DB i:8 orig:                     return n.reduce(function(e, t) {
// #DB i:8 orig:                       return t(e);
// #DB i:8 orig:                     }, e);
// #DB i:8 orig:                   }
// #DB i:8 orig:               : function() {})(this);
// #DB i:8 orig:           }
// #DB i:8 orig:           var n;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         e.prototype.toPromise = function(e) {//#RF [object Object]
// #DB i:8 orig:           var t = this;
// #DB i:8 orig:           if (!e) {
// #DB i:8 orig:             if (r.a.Rx && r.a.Rx.config && r.a.Rx.config.Promise) {
// #DB i:8 orig:               e = r.a.Rx.config.Promise;
// #DB i:8 orig:             } else if (r.a.Promise) {
// #DB i:8 orig:               e = r.a.Promise;
// #DB i:8 orig:             }
// #DB i:8 orig:           }
// #DB i:8 orig:           if (!e) {
// #DB i:8 orig:             throw new Error('no Promise impl found');
// #DB i:8 orig:           }
// #DB i:8 orig:           return new e(function(e, n) {
// #DB i:8 orig:             var r;
// #DB i:8 orig:             t.subscribe(
// #DB i:8 orig:               function(e) {
// #DB i:8 orig:                 return (r = e);
// #DB i:8 orig:               },
// #DB i:8 orig:               function(e) {
// #DB i:8 orig:                 return n(e);
// #DB i:8 orig:               },
// #DB i:8 orig:               function() {
// #DB i:8 orig:                 return e(r);
// #DB i:8 orig:               }
// #DB i:8 orig:             );
// #DB i:8 orig:           });
// #DB END i: orig:         };
// #DB5 START i:8 orig:         e.create = function(t) {//#RF [object Object]
// #DB i:8 orig:           return new e(t);
// #DB END i: orig:         };
        return e;// #QA1 i:10399 orig: 
      })();// #QA1 i:10399 orig: 
    },// #QA1 i:10399 orig: 
    dgOU: function(e, t, n) {// #QA1 i:10399 orig: 
      'use strict';// #QA1 i:10399 orig: 
// #DB5 START i:6 orig:       t.a = function(e) {//#RF [object Object]
// #DB i:6 orig:         return e != null && typeof e == 'object';
// #DB END i: orig:       };
    },// #QA1 i:10399 orig: 
    g5jc: function(e, t, n) {// #QA1 i:10399 orig: 
      'use strict';// #QA1 i:10399 orig: 
      var r = n('TToO');// #QA1 i:10399 orig: 
      var o = n('YaPU');// #QA1 i:10399 orig: 
// #DSL i: orig:       var i = n('OVmG');
      var s = n('VwZZ');// #QA1 i:10399 orig: 
      var u =function(n){};// #CB2 START i:10399 orig: 6
// #CB i:6 orig:         function t() {//#RF [object Object]
// #CB i:6 orig:           var t = e.call(this, 'object unsubscribed');
// #CB i:6 orig:           this.name = t.name = 'ObjectUnsubscribedError';
// #CB i:6 orig:           this.stack = t.stack;
// #CB i:6 orig:           this.message = t.message;
// #CB i:6 orig:         }
// #CB i:6 orig:         var e = Error;
// #CB i:6 orig:         Object(r.b)(t, e);
// #CB i:6 orig:         return t;
// #CB END i: orig:       })();
      var a =function(n){};// #CB2 START i:10399 orig: 6
// #CB i:6 orig:         function t(t, n) {
// #CB i:6 orig:           e.call(this);
// #CB i:6 orig:           this.subject = t;
// #CB i:6 orig:           this.subscriber = n;
// #CB i:6 orig:           this.closed = false;
// #CB i:6 orig:         }
// #CB i:6 orig:         var e = s.a;
// #CB i:6 orig:         Object(r.b)(t, e);
// #CB i:6 orig:         t.prototype.unsubscribe = function() {//#RF [object Object]
// #CB i:6 orig:           if (!this.closed) {
// #CB i:6 orig:             this.closed = true;
// #CB i:6 orig:             var e = this.subject;
// #CB i:6 orig:             var t = e.observers;
// #CB i:6 orig:             this.subject = null;
// #CB i:6 orig:             if (t && t.length !== 0 && !e.isStopped && !e.closed) {
// #CB i:6 orig:               var n = t.indexOf(this.subscriber);
// #CB i:6 orig:               if (n !== -1) {
// #CB i:6 orig:                 t.splice(n, 1);
// #CB i:6 orig:               }
// #CB i:6 orig:             }
// #CB i:6 orig:           }
// #CB i:6 orig:         };
// #CB i:6 orig:         return t;
// #CB END i: orig:       })();
// #DSL i: orig:       var c = n('tLDX');
      n.d(t, 'b', function() {// #QA1 i:10399 orig: 
        return l;// #QA1 i:10399 orig: 
      });// #QA1 i:10399 orig: 
      n.d(t, 'a', function() {// #QA1 i:10399 orig: 
        return d;// #QA1 i:10399 orig: 
      });// #QA1 i:10399 orig: 
      var l =function(n){};// #CB2 START i:10399 orig: 6
// #CB i:6 orig:         function t(t) {//#RF [object Object]
// #CB i:6 orig:           e.call(this, t);
// #CB i:6 orig:           this.destination = t;
// #CB i:6 orig:         }
// #CB i:6 orig:         var e = i.a;
// #CB i:6 orig:         Object(r.b)(t, e);
// #CB i:6 orig:         return t;
// #CB END i: orig:       })();
      var d = (function() {// #QA6 i:10399 orig: 
        function t() {// #QA3 i:10399 orig: 8
// #KB1 i:8 orig:           e.call(this);
// #KB1 i:8 orig:           this.observers = [];
// #KB1 i:8 orig:           this.closed = false;
// #KB1 i:8 orig:           this.isStopped = false;
// #KB1 i:8 orig:           this.hasError = false;
// #KB1 i:8 orig:           this.thrownError = null;
        }// #KB1 END i:10399 orig: 
        var e = o.a;// #QA1 i:10399 orig: 
        Object(r.b)(t, e);// #QA1 i:10399 orig: 
// #DB5 START i:8 orig:         t.prototype[c.a] = function() {//#RF [object Object]
// #DB i:8 orig:           return new l(this);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.lift = function(e) {//#RF [object Object]
// #DB i:8 orig:           var t = new f(this, this);
// #DB i:8 orig:           t.operator = e;
// #DB i:8 orig:           return t;
// #DB END i: orig:         };
        t.prototype.next = function(e) {// #QA1 i:10399 orig: 
          if (this.closed) {// #QA1 i:10399 orig: 
            throw new u();// #QA1 i:10399 orig: 
          }// #QA1 i:10399 orig: 
          if (!this.isStopped) {// #QA1 i:10399 orig: 
            var t = this.observers;// #QA1 i:10399 orig: 
            var n = t.length;// #QA1 i:10399 orig: 
            var r = t.slice();// #QA1 i:10399 orig: 
            for (var o = 0; o < n; o++) {// #QA1 i:10399 orig: 
              r[o].next(e);// #QA1 i:10399 orig: 
            }// #QA1 i:10399 orig: 
          }// #QA1 i:10399 orig: 
        };// #QA1 i:10399 orig: 
// #DB4 START i:8 orig:         t.prototype.error = function(e) {//#RF [object Object]
// #DB i:8 orig:           if (this.closed) {
// #DB i:8 orig:             throw new u();
// #DB i:8 orig:           }
// #DB i:8 orig:           this.hasError = true;
// #DB i:8 orig:           this.thrownError = e;
// #DB i:8 orig:           this.isStopped = true;
// #DB i:8 orig:           var t = this.observers;
// #DB i:8 orig:           var n = t.length;
// #DB i:8 orig:           var r = t.slice();
// #DB i:8 orig:           for (var o = 0; o < n; o++) {
// #DB i:8 orig:             r[o].error(e);
// #DB i:8 orig:           }
// #DB i:8 orig:           this.observers.length = 0;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.complete = function() {//#RF [object Object]
// #DB i:8 orig:           if (this.closed) {
// #DB i:8 orig:             throw new u();
// #DB i:8 orig:           }
// #DB i:8 orig:           this.isStopped = true;
// #DB i:8 orig:           var e = this.observers;
// #DB i:8 orig:           var t = e.length;
// #DB i:8 orig:           var n = e.slice();
// #DB i:8 orig:           for (var r = 0; r < t; r++) {
// #DB i:8 orig:             n[r].complete();
// #DB i:8 orig:           }
// #DB i:8 orig:           this.observers.length = 0;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.unsubscribe = function() {//#RF [object Object]
// #DB i:8 orig:           this.isStopped = true;
// #DB i:8 orig:           this.closed = true;
// #DB i:8 orig:           this.observers = null;
// #DB END i: orig:         };
        t.prototype._trySubscribe = function(t) {// #QA1 i:10399 orig: 
          if (this.closed) {// #QA1 i:10399 orig: 
            throw new u();// #QA1 i:10399 orig: 
          }// #QA1 i:10399 orig: 
          return e.prototype._trySubscribe.call(this, t);// #QA1 i:10399 orig: 
        };// #QA1 i:10399 orig: 
        t.prototype._subscribe = function(e) {// #QA1 i:10399 orig: 
          if (this.closed) {// #QA1 i:10399 orig: 
            throw new u();// #QA1 i:10399 orig: 
          }// #QA1 i:10399 orig: 
          if (this.hasError) {// #QA1 i:10399 orig: 
            e.error(this.thrownError);// #QA1 i:10399 orig: 
            return s.a.EMPTY;// #QA1 i:10399 orig: 
          } else if (this.isStopped) {// #QA1 i:10399 orig: 
            e.complete();// #QA1 i:10399 orig: 
            return s.a.EMPTY;// #QA1 i:10399 orig: 
          } else {// #QA1 i:10399 orig: 
            this.observers.push(e);// #QA1 i:10399 orig: 
            return new a(this, e);// #QA1 i:10399 orig: 
          }// #QA1 i:10399 orig: 
        };// #QA1 i:10399 orig: 
// #DB4 START i:8 orig:         t.prototype.asObservable = function() {//#RF [object Object]
// #DB i:8 orig:           var e = new o.a();
// #DB i:8 orig:           e.source = this;
// #DB i:8 orig:           return e;
// #DB END i: orig:         };
// #DB5 START i:8 orig:         t.create = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           return new f(e, t);
// #DB END i: orig:         };
        return t;// #QA1 i:10399 orig: 
      })();// #QA1 i:10399 orig: 
// #DB START YYY START i:6 orig:       var f = (function() {
// #DB i:6 orig:         function t(t, n) {//#RF [object Object]
// #DB i:6 orig:           e.call(this);
// #DB i:6 orig:           this.destination = t;
// #DB i:6 orig:           this.source = n;
// #DB i:6 orig:         }
// #DB i:6 orig:         var e = d;
// #DB i:6 orig:         Object(r.b)(t, e);
// #DB i:6 orig:         t.prototype.next = function(e) {//#RF [object Object]
// #DB i:6 orig:           var t = this.destination;
// #DB i:6 orig:           if (t && t.next) {
// #DB i:6 orig:             t.next(e);
// #DB i:6 orig:           }
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype.error = function(e) {//#RF [object Object]
// #DB i:6 orig:           var t = this.destination;
// #DB i:6 orig:           if (t && t.error) {
// #DB i:6 orig:             this.destination.error(e);
// #DB i:6 orig:           }
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype.complete = function() {//#RF [object Object]
// #DB i:6 orig:           var e = this.destination;
// #DB i:6 orig:           if (e && e.complete) {
// #DB i:6 orig:             this.destination.complete();
// #DB i:6 orig:           }
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype._subscribe = function(e) {//#RF [object Object]
// #DB i:6 orig:           if (this.source) {
// #DB i:6 orig:             return this.source.subscribe(e);
// #DB i:6 orig:           } else {
// #DB i:6 orig:             return s.a.EMPTY;
// #DB i:6 orig:           }
// #DB i:6 orig:         };
// #DB i:6 orig:         return t;
// #DB END i: orig:       })();
    },// #QA1 i:10399 orig: 
    t7NR: function(e, t, n) {// #QA1 i:10399 orig: 
      'use strict';// #QA1 i:10399 orig: 
      n.d(t, 'a', function() {// #QA1 i:10399 orig: 
        return r;// #QA1 i:10399 orig: 
      });// #QA1 i:10399 orig: 
      var r = {// #QA1 i:10399 orig: 
        closed: true,// #QA1 i:10399 orig: 
// #DL SINGLE FUNC i: orig:         next: function(e) {},//#RF [object Object]
// #DB7 START i:8 orig:         error: function(e) {//#RF [object Object]
// #DB i:8 orig:           throw e;
// #DB END i: orig:         },
        complete: function() {},// #QA4 i:10399 orig: //#RF [object Object]
      };// #QA1 i:10399 orig: 
    },// #QA1 i:10399 orig: 
    tLDX: function(e, t, n) {// #QA1 i:10399 orig: 
      'use strict';// #QA1 i:10399 orig: 
      n.d(t, 'a', function() {// #QA1 i:10399 orig: 
        return o;// #QA1 i:10399 orig: 
      });// #QA1 i:10399 orig: 
// #DSL i: orig:       var r = n('AMGY').a.Symbol;
      var o =// #QA1 i:10399 orig: 
        typeof r == 'function' && typeof r.for == 'function'// #QA1 i:10399 orig: 
          ? r.for('rxSubscriber')// #QA1 i:10399 orig: 
          : '@@rxSubscriber';// #QA1 i:10399 orig: 
    },// #QA1 i:10399 orig: 
    x35b: function(e, t, n) {// #QA1 i:10399 orig: 
      'use strict';// #QA1 i:10399 orig: 
      function u(e) {// #QA2 i:10399 orig: //#RF [object Object]
        return r._2(// #QA1 i:10399 orig: 
          0,// #QA1 i:10399 orig: 
          [// #QA1 i:10399 orig: 
            (e()(), r._1(-1, null, ['\n'])),// #QA1 i:10399 orig: 
            (e()(),// #QA1 i:10399 orig: 
            r.P(// #QA1 i:10399 orig: 
              1,// #QA1 i:10399 orig: 
              0,// #QA1 i:10399 orig: 
              null,// #QA1 i:10399 orig: 
              null,// #QA1 i:10399 orig: 
              6,// #QA1 i:10399 orig: 
              'div',// #QA1 i:10399 orig: 
              [['style', 'text-align:center']],// #QA1 i:10399 orig: 
              null,// #QA1 i:10399 orig: 
              null,// #QA1 i:10399 orig: 
              null,// #QA1 i:10399 orig: 
              null,// #QA1 i:10399 orig: 
              null// #QA1 i:10399 orig: 
            )),// #QA1 i:10399 orig: 
            (e()(), r._1(-1, null, ['\n  '])),// #QA1 i:10399 orig: 
            (e()(),// #QA1 i:10399 orig: 
            r.P(3, 0, null, null, 1, 'h1', [], null, null, null, null, null)),// #QA1 i:10399 orig: 
            (e()(), r._1(4, null, ['\n    Welcome to ', '!\n  '])),// #QA1 i:10399 orig: 
            (e()(), r._1(-1, null, ['\n  '])),// #QA1 i:10399 orig: 
            (e()(),// #QA1 i:10399 orig: 
            r.P(// #QA1 i:10399 orig: 
              6,// #QA1 i:10399 orig: 
              0,// #QA1 i:10399 orig: 
              null,// #QA1 i:10399 orig: 
              null,// #QA1 i:10399 orig: 
              0,// #QA1 i:10399 orig: 
              'img',// #QA1 i:10399 orig: 
              [// #QA1 i:10399 orig: 
                ['alt', 'Angular Logo'],// #QA1 i:10399 orig: 
                [// #QA1 i:10399 orig: 
                  'src',// #QA1 i:10399 orig: 
                  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==',// #QA1 i:10399 orig: 
                ],// #QA1 i:10399 orig: 
                ['width', '300'],// #QA1 i:10399 orig: 
              ],// #QA1 i:10399 orig: 
              null,// #QA1 i:10399 orig: 
              null,// #QA1 i:10399 orig: 
              null,// #QA1 i:10399 orig: 
              null,// #QA1 i:10399 orig: 
              null// #QA1 i:10399 orig: 
            )),// #QA1 i:10399 orig: 
            (e()(), r._1(-1, null, ['\n'])),// #QA1 i:10399 orig: 
            (e()(), r._1(-1, null, ['\n'])),// #QA1 i:10399 orig: 
            (e()(),// #QA1 i:10399 orig: 
            r.P(9, 0, null, null, 1, 'h2', [], null, null, null, null, null)),// #QA1 i:10399 orig: 
            (e()(),// #QA1 i:10399 orig: 
            r._1(-1, null, ['Here are some links to help you start: '])),// #QA1 i:10399 orig: 
            (e()(), r._1(-1, null, ['\n'])),// #QA1 i:10399 orig: 
            (e()(),// #QA1 i:10399 orig: 
            r.P(12, 0, null, null, 22, 'ul', [], null, null, null, null, null)),// #QA1 i:10399 orig: 
            (e()(), r._1(-1, null, ['\n  '])),// #QA1 i:10399 orig: 
            (e()(),// #QA1 i:10399 orig: 
            r.P(14, 0, null, null, 5, 'li', [], null, null, null, null, null)),// #QA1 i:10399 orig: 
            (e()(), r._1(-1, null, ['\n    '])),// #QA1 i:10399 orig: 
            (e()(),// #QA1 i:10399 orig: 
            r.P(16, 0, null, null, 2, 'h2', [], null, null, null, null, null)),// #QA1 i:10399 orig: 
            (e()(),// #QA1 i:10399 orig: 
            r.P(// #QA1 i:10399 orig: 
              17,// #QA1 i:10399 orig: 
              0,// #QA1 i:10399 orig: 
              null,// #QA1 i:10399 orig: 
              null,// #QA1 i:10399 orig: 
              1,// #QA1 i:10399 orig: 
              'a',// #QA1 i:10399 orig: 
              [// #QA1 i:10399 orig: 
                ['href', 'https://angular.io/tutorial'],// #QA1 i:10399 orig: 
                ['rel', 'noopener'],// #QA1 i:10399 orig: 
                ['target', '_blank'],// #QA1 i:10399 orig: 
              ],// #QA1 i:10399 orig: 
              null,// #QA1 i:10399 orig: 
              null,// #QA1 i:10399 orig: 
              null,// #QA1 i:10399 orig: 
              null,// #QA1 i:10399 orig: 
              null// #QA1 i:10399 orig: 
            )),// #QA1 i:10399 orig: 
            (e()(), r._1(-1, null, ['Tour of Heroes'])),// #QA1 i:10399 orig: 
            (e()(), r._1(-1, null, ['\n  '])),// #QA1 i:10399 orig: 
            (e()(), r._1(-1, null, ['\n  '])),// #QA1 i:10399 orig: 
            (e()(),// #QA1 i:10399 orig: 
            r.P(21, 0, null, null, 5, 'li', [], null, null, null, null, null)),// #QA1 i:10399 orig: 
            (e()(), r._1(-1, null, ['\n    '])),// #QA1 i:10399 orig: 
            (e()(),// #QA1 i:10399 orig: 
            r.P(23, 0, null, null, 2, 'h2', [], null, null, null, null, null)),// #QA1 i:10399 orig: 
            (e()(),// #QA1 i:10399 orig: 
            r.P(// #QA1 i:10399 orig: 
              24,// #QA1 i:10399 orig: 
              0,// #QA1 i:10399 orig: 
              null,// #QA1 i:10399 orig: 
              null,// #QA1 i:10399 orig: 
              1,// #QA1 i:10399 orig: 
              'a',// #QA1 i:10399 orig: 
              [// #QA1 i:10399 orig: 
                ['href', 'https://github.com/angular/angular-cli/wiki'],// #QA1 i:10399 orig: 
                ['rel', 'noopener'],// #QA1 i:10399 orig: 
                ['target', '_blank'],// #QA1 i:10399 orig: 
              ],// #QA1 i:10399 orig: 
              null,// #QA1 i:10399 orig: 
              null,// #QA1 i:10399 orig: 
              null,// #QA1 i:10399 orig: 
              null,// #QA1 i:10399 orig: 
              null// #QA1 i:10399 orig: 
            )),// #QA1 i:10399 orig: 
            (e()(), r._1(-1, null, ['CLI Documentation'])),// #QA1 i:10399 orig: 
            (e()(), r._1(-1, null, ['\n  '])),// #QA1 i:10399 orig: 
            (e()(), r._1(-1, null, ['\n  '])),// #QA1 i:10399 orig: 
            (e()(),// #QA1 i:10399 orig: 
            r.P(28, 0, null, null, 5, 'li', [], null, null, null, null, null)),// #QA1 i:10399 orig: 
            (e()(), r._1(-1, null, ['\n    '])),// #QA1 i:10399 orig: 
            (e()(),// #QA1 i:10399 orig: 
            r.P(30, 0, null, null, 2, 'h2', [], null, null, null, null, null)),// #QA1 i:10399 orig: 
            (e()(),// #QA1 i:10399 orig: 
            r.P(// #QA1 i:10399 orig: 
              31,// #QA1 i:10399 orig: 
              0,// #QA1 i:10399 orig: 
              null,// #QA1 i:10399 orig: 
              null,// #QA1 i:10399 orig: 
              1,// #QA1 i:10399 orig: 
              'a',// #QA1 i:10399 orig: 
              [// #QA1 i:10399 orig: 
                ['href', 'https://blog.angular.io/'],// #QA1 i:10399 orig: 
                ['rel', 'noopener'],// #QA1 i:10399 orig: 
                ['target', '_blank'],// #QA1 i:10399 orig: 
              ],// #QA1 i:10399 orig: 
              null,// #QA1 i:10399 orig: 
              null,// #QA1 i:10399 orig: 
              null,// #QA1 i:10399 orig: 
              null,// #QA1 i:10399 orig: 
              null// #QA1 i:10399 orig: 
            )),// #QA1 i:10399 orig: 
            (e()(), r._1(-1, null, ['Angular blog'])),// #QA1 i:10399 orig: 
            (e()(), r._1(-1, null, ['\n  '])),// #QA1 i:10399 orig: 
            (e()(), r._1(-1, null, ['\n'])),// #QA1 i:10399 orig: 
            (e()(), r._1(-1, null, ['\n\n'])),// #QA1 i:10399 orig: 
          ],// #QA1 i:10399 orig: 
          null,// #QA1 i:10399 orig: 
          function(e, t) {// #QA1 i:10399 orig: 
            e(t, 4, 0, t.component.title);// #QA1 i:10399 orig: 
          }// #QA1 i:10399 orig: 
        );// #QA1 i:10399 orig: 
      }// #QA1 i:10399 orig: 
// #DB6 START i:6 orig:       function _() {//#RF [object Object]
// #DB i:6 orig:         return b;
// #DB END i: orig:       }
// #DB6 START i:6 orig:       function N() {//#RF [object Object]
// #DB i:6 orig:         return !!window.history.pushState;
// #DB END i: orig:       }
      function j(e, t) {// #QA3 i:10399 orig: 6
// #KB1 i:6 orig:         if (typeof COMPILED == 'undefined' || !COMPILED) {
// #KB1 i:6 orig:           (r.Q.ng = r.Q.ng || {})[e] = t;
// #KB1 i:6 orig:         }
      }// #KB1 END i:10399 orig: 
      function H(e) {// #KFB3 START i:10399 orig: 6//#RF [object Object]
// #KB1 i:6 orig:         return Object(r.F)(e);
      }// #KB1 END i:10399 orig: 
// #QCC START i:6 orig:       function q(e, t, n) {//#RF [object Object]
// #DB i:6 orig:         for (var r = 0; r < t.length; r++) {
// #DB i:6 orig:           var o = t[r];
// #DB i:6 orig:           if (Array.isArray(o)) {
// #DB i:6 orig:             q(e, o, n);
// #DB i:6 orig:           } else {
// #DB i:6 orig:             o = o.replace(W, e);
// #DB i:6 orig:             n.push(o);
// #DB i:6 orig:           }
// #DB i:6 orig:         }
// #DB i:6 orig:         return n;
// #DB END i: orig:       }
// #DB6 START i:6 orig:       function Y(e) {//#RF [object Object]
// #DB i:6 orig:         return function(t) {
// #DB i:6 orig:           if (e(t) === false) {
// #DB i:6 orig:             t.preventDefault();
// #DB i:6 orig:             t.returnValue = false;
// #DB i:6 orig:           }
// #DB i:6 orig:         };
// #DB END i: orig:       }
// #DB6 START i:6 orig:       function $(e, t) {//#RF [object Object]
// #DB i:6 orig:         if (e.charCodeAt(0) === X) {
// #DB i:6 orig:           throw new Error(
// #DB i:6 orig:             'Found the synthetic ' +
// #DB i:6 orig:               t +
// #DB i:6 orig:               ' ' +
// #DB i:6 orig:               e +
// #DB i:6 orig:               '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.'
// #DB i:6 orig:           );
// #DB i:6 orig:         }
// #DB END i: orig:       }
// #DB6 START i:6 orig:       function we(e) {//#RF [object Object]
// #DB i:6 orig:         if ((e = String(e)).match(be) || e.match(_e)) {
// #DB i:6 orig:           return e;
// #DB i:6 orig:         } else {
// #DB i:6 orig:           if (Object(r.G)()) {
// #DB i:6 orig:             _().log(
// #DB i:6 orig:               'WARNING: sanitizing unsafe URL value ' +
// #DB i:6 orig:                 e +
// #DB i:6 orig:                 ' (see http://g.co/ng/security#xss)'
// #DB i:6 orig:             );
// #DB i:6 orig:           }
// #DB i:6 orig:           return 'unsafe:' + e;
// #DB i:6 orig:         }
// #DB END i: orig:       }
      function Ce(e) {// #QA3 i:10399 orig: 6
// #KB1 i:6 orig:         var t = {};
// #KB1 i:6 orig:         var n = 0;
// #KB1 i:6 orig:         for (var r = e.split(','); n < r.length; n++) {
// #KB1 i:6 orig:           t[r[n]] = true;
// #KB1 i:6 orig:         }
// #KB1 i:6 orig:         return t;
      }// #KB1 END i:10399 orig: 
// #Q8 START i:6 orig:       function Ee() {
// #DB i:6 orig:         var e = [];
// #DB i:6 orig:         for (var t = 0; t < arguments.length; t++) {
// #DB i:6 orig:           e[t] = arguments[t];
// #DB i:6 orig:         }
// #DB i:6 orig:         var n = {};
// #DB i:6 orig:         var r = 0;
// #DB i:6 orig:         for (var o = e; r < o.length; r++) {
// #DB i:6 orig:           var i = o[r];
// #DB i:6 orig:           for (var s in i) {
// #DB i:6 orig:             if (i.hasOwnProperty(s)) {
// #DB i:6 orig:               n[s] = true;
// #DB i:6 orig:             }
// #DB i:6 orig:           }
// #DB i:6 orig:         }
// #DB i:6 orig:         return n;
// #DB END i: orig:       }
// #DB6 START i:6 orig:       function je(e) {//#RF [object Object]
// #DB i:6 orig:         return e
// #DB i:6 orig:           .replace(/&/g, '&amp;')
// #DB i:6 orig:           .replace(De, function(e) {
// #DB i:6 orig:             return (
// #DB i:6 orig:               '&#' +
// #DB i:6 orig:               (1024 * (e.charCodeAt(0) - 55296) +
// #DB i:6 orig:                 (e.charCodeAt(1) - 56320) +
// #DB i:6 orig:                 65536) +
// #DB i:6 orig:               ';'
// #DB i:6 orig:             );
// #DB i:6 orig:           })
// #DB i:6 orig:           .replace(Re, function(e) {
// #DB i:6 orig:             return '&#' + e.charCodeAt(0) + ';';
// #DB i:6 orig:           })
// #DB i:6 orig:           .replace(/</g, '&lt;')
// #DB i:6 orig:           .replace(/>/g, '&gt;');
// #DB END i: orig:       }
      function Ye() {// #QB i:10399 orig: 
        return new r.h();// #QA1 i:10399 orig: 
      }// #QA1 i:10399 orig: 
      Object.defineProperty(t, '__esModule', { value: true });// #QA1 i:10399 orig: 
      var r = n('WT6e');// #QA1 i:10399 orig: 
      var o = function() {};// #QA4 i:10399 orig: 
      var i = function() {// #KFB01 START i:10399 orig: 6//#RF [object Object]
// #KB1 i:6 orig:         this.title = 'my Performance App';
      };// #KB1 END i:10399 orig: 
      var s = r.N({ encapsulation: 0, styles: [['']], data: {} });// #QA1 i:10399 orig: 
      var a = r.L(// #QA1 i:10399 orig: 
        'app-root',// #QA1 i:10399 orig: 
        i,// #QA1 i:10399 orig: 
        function(e) {// #QA1 i:10399 orig: 
          return r._2(// #QA1 i:10399 orig: 
            0,// #QA1 i:10399 orig: 
            [// #QA1 i:10399 orig: 
              (e()(),// #QA1 i:10399 orig: 
              r.P(0, 0, null, null, 1, 'app-root', [], null, null, null, u, s)),// #QA1 i:10399 orig: 
              r.O(1, 49152, null, 0, i, [], null, null),// #QA1 i:10399 orig: 
            ],// #QA1 i:10399 orig: 
            null,// #QA1 i:10399 orig: 
            null// #QA1 i:10399 orig: 
          );// #QA1 i:10399 orig: 
        },// #QA1 i:10399 orig: 
        {},// #QA1 i:10399 orig: 
        {},// #QA1 i:10399 orig: 
        []// #QA1 i:10399 orig: 
      );// #QA1 i:10399 orig: 
      var c = n('TToO');// #QA1 i:10399 orig: 
      var l = function() {};// #KFB01 START i:10399 orig: 6//#RF [object Object]
// #DBAA START i:6 orig:       var d = [
// #DB i:6 orig:         'en',
// #DB i:6 orig:         [['a', 'p'], ['AM', 'PM']],
// #DB i:6 orig:         [['AM', 'PM'], ,],
// #DB i:6 orig:         [
// #DB i:6 orig:           ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
// #DB i:6 orig:           ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
// #DB i:6 orig:           [
// #DB i:6 orig:             'Sunday',
// #DB i:6 orig:             'Monday',
// #DB i:6 orig:             'Tuesday',
// #DB i:6 orig:             'Wednesday',
// #DB i:6 orig:             'Thursday',
// #DB i:6 orig:             'Friday',
// #DB i:6 orig:             'Saturday',
// #DB i:6 orig:           ],
// #DB i:6 orig:           ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
// #DB i:6 orig:         ],
// #DB i:6 orig:         ,
// #DB i:6 orig:         [
// #DB i:6 orig:           ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
// #DB i:6 orig:           [
// #DB i:6 orig:             'Jan',
// #DB i:6 orig:             'Feb',
// #DB i:6 orig:             'Mar',
// #DB i:6 orig:             'Apr',
// #DB i:6 orig:             'May',
// #DB i:6 orig:             'Jun',
// #DB i:6 orig:             'Jul',
// #DB i:6 orig:             'Aug',
// #DB i:6 orig:             'Sep',
// #DB i:6 orig:             'Oct',
// #DB i:6 orig:             'Nov',
// #DB i:6 orig:             'Dec',
// #DB i:6 orig:           ],
// #DB i:6 orig:           [
// #DB i:6 orig:             'January',
// #DB i:6 orig:             'February',
// #DB i:6 orig:             'March',
// #DB i:6 orig:             'April',
// #DB i:6 orig:             'May',
// #DB i:6 orig:             'June',
// #DB i:6 orig:             'July',
// #DB i:6 orig:             'August',
// #DB i:6 orig:             'September',
// #DB i:6 orig:             'October',
// #DB i:6 orig:             'November',
// #DB i:6 orig:             'December',
// #DB i:6 orig:           ],
// #DB i:6 orig:         ],
// #DB i:6 orig:         ,
// #DB i:6 orig:         [['B', 'A'], ['BC', 'AD'], ['Before Christ', 'Anno Domini']],
// #DB i:6 orig:         0,
// #DB i:6 orig:         [6, 0],
// #DB i:6 orig:         ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
// #DB i:6 orig:         ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
// #DB i:6 orig:         ['{1}, {0}', , "{1} 'at' {0}"],
// #DB i:6 orig:         [
// #DB i:6 orig:           '.',
// #DB i:6 orig:           ',',
// #DB i:6 orig:           ';',
// #DB i:6 orig:           '%',
// #DB i:6 orig:           '+',
// #DB i:6 orig:           '-',
// #DB i:6 orig:           'E',
// #DB i:6 orig:           '\xD7',
// #DB i:6 orig:           '\u2030',
// #DB i:6 orig:           '\u221E',
// #DB i:6 orig:           'NaN',
// #DB i:6 orig:           ':',
// #DB i:6 orig:         ],
// #DB i:6 orig:         ['#,##0.###', '#,##0%', '\xA4#,##0.00', '#E0'],
// #DB i:6 orig:         '$',
// #DB i:6 orig:         'US Dollar',
// #DB i:6 orig:         function(e) {//#RF [object Object]
// #DB i:6 orig:           var t = Math.floor(Math.abs(e));
// #DB i:6 orig:           var n = e.toString().replace(/^[^.]*\.?/, '').length;
// #DB i:6 orig:           if (t === 1 && n === 0) {
// #DB i:6 orig:             return 1;
// #DB i:6 orig:           } else {
// #DB i:6 orig:             return 5;
// #DB i:6 orig:           }
// #DB i:6 orig:         },
// #DB END i: orig:       ];
// #DSL i: orig:       var f = {};
// #DB START YYY START i:6 orig:       var p = (function() {
// #DB i:6 orig:         var e = { Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5 };
// #DB i:6 orig:         e[e.Zero] = 'Zero';
// #DB i:6 orig:         e[e.One] = 'One';
// #DB i:6 orig:         e[e.Two] = 'Two';
// #DB i:6 orig:         e[e.Few] = 'Few';
// #DB i:6 orig:         e[e.Many] = 'Many';
// #DB i:6 orig:         e[e.Other] = 'Other';
// #DB i:6 orig:         return e;
// #DB END i: orig:       })();
      var h = new r.k('UseV4Plurals');// #QA1 i:10399 orig: 
      var v = function() {};// #QB i:10399 orig: //#RF [object Object]
      var y =function(n){};// #CB2 START i:10399 orig: 6
// #CB i:6 orig:         function t(t, n) {//#RF [object Object]
// #CB i:6 orig:           var r = e.call(this) || this;
// #CB i:6 orig:           r.locale = t;
// #CB i:6 orig:           r.deprecatedPluralFn = n;
// #CB i:6 orig:           return r;
// #CB i:6 orig:         }
// #CB i:6 orig:         var e = v;
// #CB i:6 orig:         Object(c.b)(t, e);
// #CB i:6 orig:         t.prototype.getPluralCategory = function(e, t) {//#RF [object Object]
// #CB i:6 orig:           switch (this.deprecatedPluralFn
// #CB i:6 orig:             ? this.deprecatedPluralFn(t || this.locale, e)
// #CB i:6 orig:             : (function(e) {
// #CB i:6 orig:                 return (function(e) {
// #CB i:6 orig:                   var t = e.toLowerCase().replace(/_/g, '-');
// #CB i:6 orig:                   var n = f[t];
// #CB i:6 orig:                   if (n) {
// #CB i:6 orig:                     return n;
// #CB i:6 orig:                   }
// #CB i:6 orig:                   var r = t.split('-')[0];
// #CB i:6 orig:                   if ((n = f[r])) {
// #CB i:6 orig:                     return n;
// #CB i:6 orig:                   }
// #CB i:6 orig:                   if (r === 'en') {
// #CB i:6 orig:                     return d;
// #CB i:6 orig:                   }
// #CB i:6 orig:                   throw new Error(
// #CB i:6 orig:                     'Missing locale data for the locale "' + e + '".'
// #CB i:6 orig:                   );
// #CB i:6 orig:                 })(e)[17];
// #CB i:6 orig:               })(t || this.locale)(e)) {
// #CB i:6 orig:             case p.Zero:
// #CB i:6 orig:               return 'zero';
// #CB i:6 orig:             case p.One:
// #CB i:6 orig:               return 'one';
// #CB i:6 orig:             case p.Two:
// #CB i:6 orig:               return 'two';
// #CB i:6 orig:             case p.Few:
// #CB i:6 orig:               return 'few';
// #CB i:6 orig:             case p.Many:
// #CB i:6 orig:               return 'many';
// #CB i:6 orig:             default:
// #CB i:6 orig:               return 'other';
// #CB i:6 orig:           }
// #CB i:6 orig:         };
// #CB i:6 orig:         return t;
// #CB END i: orig:       })();
      var g = function() {};// #QA4 i:10399 orig: 
      var m = new r.k('DocumentToken');// #QA1 i:10399 orig: 
      var b = null;// #QA1 i:10399 orig: 
      var w;// #QA1 i:10399 orig: 
// #DSL i: orig:       var C = {
// #DSL i: orig:         class: 'className',
// #DSL i: orig:         innerHtml: 'innerHTML',
// #DSL i: orig:         readonly: 'readOnly',
// #DSL i: orig:         tabindex: 'tabIndex',
// #DSL i: orig:       };
// #DSL i: orig:       var E = {
// #DSL i: orig:         '': 'Backspace',
// #DSL i: orig:         '	': 'Tab',
// #DSL i: orig:         '': 'Delete',
// #DSL i: orig:         '': 'Escape',
// #DSL i: orig:         Del: 'Delete',
// #DSL i: orig:         Esc: 'Escape',
// #DSL i: orig:         Left: 'ArrowLeft',
// #DSL i: orig:         Right: 'ArrowRight',
// #DSL i: orig:         Up: 'ArrowUp',
// #DSL i: orig:         Down: 'ArrowDown',
// #DSL i: orig:         Menu: 'ContextMenu',
// #DSL i: orig:         Scroll: 'ScrollLock',
// #DSL i: orig:         Win: 'OS',
// #DSL i: orig:       };
// #DSL i: orig:       var x = {
// #DSL i: orig:         A: '1',
// #DSL i: orig:         B: '2',
// #DSL i: orig:         C: '3',
// #DSL i: orig:         D: '4',
// #DSL i: orig:         E: '5',
// #DSL i: orig:         F: '6',
// #DSL i: orig:         G: '7',
// #DSL i: orig:         H: '8',
// #DSL i: orig:         I: '9',
// #DSL i: orig:         J: '*',
// #DSL i: orig:         K: '+',
// #DSL i: orig:         M: '-',
// #DSL i: orig:         N: '.',
// #DSL i: orig:         O: '/',
// #DSL i: orig:         '`': '0',
// #DSL i: orig:         '': 'NumLock',
// #DSL i: orig:       };
      if (r.Q.Node) {// #QA1 i:10399 orig: 
        w =// #QA1 i:10399 orig: 
          r.Q.Node.prototype.contains ||// #QA1 i:10399 orig: 
          function(e) {// #QB i:10399 orig: //#RF [object Object]
            return !!(16 & this.compareDocumentPosition(e));// #QA1 i:10399 orig: 
          };// #QA1 i:10399 orig: 
      }// #QA1 i:10399 orig: 
      var T;// #QA1 i:10399 orig: 
      var k = (function() {// #QA6 i:10399 orig: 
        function t() {// #QA3 i:10399 orig: 8
// #KB1 i:8 orig:           return (e !== null && e.apply(this, arguments)) || this;
        }// #KB1 END i:10399 orig: 
        var e = (function() {// #QA6 i:10399 orig: 
          function t() {// #QA3 i:10399 orig: 10
// #KB1 i:10 orig:             var t = e.call(this) || this;
// #KB1 i:10 orig:             t._animationPrefix = null;
// #KB1 i:10 orig:             t._transitionEnd = null;
// #KB1 i:10 orig:             try {
// #KB1 i:10 orig:               var n = t.createElement('div', document);
// #KB1 i:10 orig:               if (t.getStyle(n, 'animationName') == null) {
// #KB1 i:10 orig:                 var r = ['Webkit', 'Moz', 'O', 'ms'];
// #KB1 i:10 orig:                 for (var o = 0; o < r.length; o++) {
// #KB1 i:10 orig:                   if (t.getStyle(n, r[o] + 'AnimationName') != null) {
// #KB1 i:10 orig:                     t._animationPrefix = '-' + r[o].toLowerCase() + '-';
// #KB1 i:10 orig:                     break;
// #KB1 i:10 orig:                   }
// #KB1 i:10 orig:                 }
// #KB1 i:10 orig:               } else {
// #KB1 i:10 orig:                 t._animationPrefix = '';
// #KB1 i:10 orig:               }
// #KB1 i:10 orig:               var i = {
// #KB1 i:10 orig:                 WebkitTransition: 'webkitTransitionEnd',
// #KB1 i:10 orig:                 MozTransition: 'transitionend',
// #KB1 i:10 orig:                 OTransition: 'oTransitionEnd otransitionend',
// #KB1 i:10 orig:                 transition: 'transitionend',
// #KB1 i:10 orig:               };
// #KB1 i:10 orig:               Object.keys(i).forEach(function(e) {
// #KB1 i:10 orig:                 if (t.getStyle(n, e) != null) {
// #KB1 i:10 orig:                   t._transitionEnd = i[e];
// #KB1 i:10 orig:                 }
// #KB1 i:10 orig:               });
// #KB1 i:10 orig:             } catch (e) {
// #KB1 i:10 orig:               t._animationPrefix = null;
// #KB1 i:10 orig:               t._transitionEnd = null;
// #KB1 i:10 orig:             }
// #KB1 i:10 orig:             return t;
          }// #KB1 END i:10399 orig: 
          var e =function(n){};// #CB2 START i:10399 orig: 10
// #CB i:10 orig:             function e() {
// #CB i:10 orig:               this.resourceLoaderType = null;
// #CB i:10 orig:             }
// #CB i:10 orig:             Object.defineProperty(e.prototype, 'attrToPropMap', {
// #CB i:10 orig:               get: function() {//#RF [object Object]
// #CB i:10 orig:                 return this._attrToPropMap;
// #CB i:10 orig:               },
// #CB i:10 orig:               set: function(e) {//#RF [object Object]
// #CB i:10 orig:                 this._attrToPropMap = e;
// #CB i:10 orig:               },
// #CB i:10 orig:               enumerable: true,
// #CB i:10 orig:               configurable: true,
// #CB i:10 orig:             });
// #CB i:10 orig:             return e;
// #CB END i: orig:           })();
          Object(c.b)(t, e);// #QA1 i:10399 orig: 
// #DB4 START i:10 orig:           t.prototype.getDistributedNodes = function(e) {//#RF [object Object]
// #DB i:10 orig:             return e.getDistributedNodes();
// #DB END i: orig:           };
// #DB4 START i:10 orig:           t.prototype.resolveAndSetHref = function(e, t, n) {//#RF [object Object]
// #DB i:10 orig:             e.href = n == null ? t : t + '/../' + n;
// #DB END i: orig:           };
// #DB4 START i:10 orig:           t.prototype.supportsDOMEvents = function() {//#RF [object Object]
// #DB i:10 orig:             return true;
// #DB END i: orig:           };
// #DB4 START i:10 orig:           t.prototype.supportsNativeShadowDOM = function() {//#RF [object Object]
// #DB i:10 orig:             return typeof document.body.createShadowRoot == 'function';
// #DB END i: orig:           };
// #DB4 START i:10 orig:           t.prototype.getAnimationPrefix = function() {//#RF [object Object]
// #DB i:10 orig:             if (this._animationPrefix) {
// #DB i:10 orig:               return this._animationPrefix;
// #DB i:10 orig:             } else {
// #DB i:10 orig:               return '';
// #DB i:10 orig:             }
// #DB END i: orig:           };
// #DB4 START i:10 orig:           t.prototype.getTransitionEnd = function() {//#RF [object Object]
// #DB i:10 orig:             if (this._transitionEnd) {
// #DB i:10 orig:               return this._transitionEnd;
// #DB i:10 orig:             } else {
// #DB i:10 orig:               return '';
// #DB i:10 orig:             }
// #DB END i: orig:           };
// #DB4 START i:10 orig:           t.prototype.supportsAnimation = function() {//#RF [object Object]
// #DB i:10 orig:             return this._animationPrefix != null && this._transitionEnd != null;
// #DB END i: orig:           };
          return t;// #QA1 i:10399 orig: 
        })();// #QA1 i:10399 orig: 
        Object(c.b)(t, e);// #QA1 i:10399 orig: 
// #DB4 START i:8 orig:         t.prototype.parse = function(e) {//#RF [object Object]
// #DB i:8 orig:           throw new Error('parse not implemented');
// #DB END i: orig:         };
        t.makeCurrent = function() {// #QA1 i:10399 orig: 
          var e = new t();// #QA1 i:10399 orig: 
          if (!b) {// #QA1 i:10399 orig: 
            b = e;// #QA1 i:10399 orig: 
          }// #QA1 i:10399 orig: 
        };// #QA1 i:10399 orig: 
// #DB4 START i:8 orig:         t.prototype.hasProperty = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           return t in e;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.setProperty = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           e[t] = n;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.getProperty = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           return e[t];
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.invoke = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           var r;
// #DB i:8 orig:           (r = e)[t].apply(r, n);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.logError = function(e) {//#RF [object Object]
// #DB i:8 orig:           if (window.console) {
// #DB i:8 orig:             if (console.error) {
// #DB i:8 orig:               console.error(e);
// #DB i:8 orig:             } else {
// #DB i:8 orig:               console.log(e);
// #DB i:8 orig:             }
// #DB i:8 orig:           }
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.log = function(e) {//#RF [object Object]
// #DB i:8 orig:           if (window.console && window.console.log) {
// #DB i:8 orig:             window.console.log(e);
// #DB i:8 orig:           }
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.logGroup = function(e) {//#RF [object Object]
// #DB i:8 orig:           if (window.console && window.console.group) {
// #DB i:8 orig:             window.console.group(e);
// #DB i:8 orig:           }
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.logGroupEnd = function() {//#RF [object Object]
// #DB i:8 orig:           if (window.console && window.console.groupEnd) {
// #DB i:8 orig:             window.console.groupEnd();
// #DB i:8 orig:           }
// #DB END i: orig:         };
        Object.defineProperty(t.prototype, 'attrToPropMap', {// #QA1 i:10399 orig: 
// #DB7 START i:10 orig:           get: function() {//#RF [object Object]
// #DB i:10 orig:             return C;
// #DB END i: orig:           },
          enumerable: true,// #QA1 i:10399 orig: 
          configurable: true,// #QA1 i:10399 orig: 
        });// #QA1 i:10399 orig: 
// #DB4 START i:8 orig:         t.prototype.contains = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           return w.call(e, t);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.querySelector = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           return e.querySelector(t);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.querySelectorAll = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           return e.querySelectorAll(t);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.on = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           e.addEventListener(t, n, false);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.onAndCancel = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           e.addEventListener(t, n, false);
// #DB i:8 orig:           return function() {
// #DB i:8 orig:             e.removeEventListener(t, n, false);
// #DB i:8 orig:           };
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.dispatchEvent = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           e.dispatchEvent(t);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.createMouseEvent = function(e) {//#RF [object Object]
// #DB i:8 orig:           var t = this.getDefaultDocument().createEvent('MouseEvent');
// #DB i:8 orig:           t.initEvent(e, true, true);
// #DB i:8 orig:           return t;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.createEvent = function(e) {//#RF [object Object]
// #DB i:8 orig:           var t = this.getDefaultDocument().createEvent('Event');
// #DB i:8 orig:           t.initEvent(e, true, true);
// #DB i:8 orig:           return t;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.preventDefault = function(e) {//#RF [object Object]
// #DB i:8 orig:           e.preventDefault();
// #DB i:8 orig:           e.returnValue = false;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.isPrevented = function(e) {//#RF [object Object]
// #DB i:8 orig:           return (
// #DB i:8 orig:             e.defaultPrevented || (e.returnValue != null && !e.returnValue)
// #DB i:8 orig:           );
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.getInnerHTML = function(e) {//#RF [object Object]
// #DB i:8 orig:           return e.innerHTML;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.getTemplateContent = function(e) {//#RF [object Object]
// #DB i:8 orig:           if ('content' in e && this.isTemplateElement(e)) {
// #DB i:8 orig:             return e.content;
// #DB i:8 orig:           } else {
// #DB i:8 orig:             return null;
// #DB i:8 orig:           }
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.getOuterHTML = function(e) {//#RF [object Object]
// #DB i:8 orig:           return e.outerHTML;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.nodeName = function(e) {//#RF [object Object]
// #DB i:8 orig:           return e.nodeName;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.nodeValue = function(e) {//#RF [object Object]
// #DB i:8 orig:           return e.nodeValue;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.type = function(e) {//#RF [object Object]
// #DB i:8 orig:           return e.type;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.content = function(e) {//#RF [object Object]
// #DB i:8 orig:           if (this.hasProperty(e, 'content')) {
// #DB i:8 orig:             return e.content;
// #DB i:8 orig:           } else {
// #DB i:8 orig:             return e;
// #DB i:8 orig:           }
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.firstChild = function(e) {//#RF [object Object]
// #DB i:8 orig:           return e.firstChild;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.nextSibling = function(e) {//#RF [object Object]
// #DB i:8 orig:           return e.nextSibling;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.parentElement = function(e) {//#RF [object Object]
// #DB i:8 orig:           return e.parentNode;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.childNodes = function(e) {//#RF [object Object]
// #DB i:8 orig:           return e.childNodes;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.childNodesAsList = function(e) {//#RF [object Object]
// #DB i:8 orig:           var t = e.childNodes;
// #DB i:8 orig:           var n = new Array(t.length);
// #DB i:8 orig:           for (var r = 0; r < t.length; r++) {
// #DB i:8 orig:             n[r] = t[r];
// #DB i:8 orig:           }
// #DB i:8 orig:           return n;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.clearNodes = function(e) {//#RF [object Object]
// #DB i:8 orig:           while (e.firstChild) {
// #DB i:8 orig:             e.removeChild(e.firstChild);
// #DB i:8 orig:           }
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.appendChild = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           e.appendChild(t);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.removeChild = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           e.removeChild(t);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.replaceChild = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           e.replaceChild(t, n);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.remove = function(e) {//#RF [object Object]
// #DB i:8 orig:           if (e.parentNode) {
// #DB i:8 orig:             e.parentNode.removeChild(e);
// #DB i:8 orig:           }
// #DB i:8 orig:           return e;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.insertBefore = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           e.insertBefore(n, t);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.insertAllBefore = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           n.forEach(function(n) {
// #DB i:8 orig:             return e.insertBefore(n, t);
// #DB i:8 orig:           });
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.insertAfter = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           e.insertBefore(n, t.nextSibling);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.setInnerHTML = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           e.innerHTML = t;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.getText = function(e) {//#RF [object Object]
// #DB i:8 orig:           return e.textContent;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.setText = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           e.textContent = t;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.getValue = function(e) {//#RF [object Object]
// #DB i:8 orig:           return e.value;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.setValue = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           e.value = t;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.getChecked = function(e) {//#RF [object Object]
// #DB i:8 orig:           return e.checked;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.setChecked = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           e.checked = t;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.createComment = function(e) {//#RF [object Object]
// #DB i:8 orig:           return this.getDefaultDocument().createComment(e);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.createTemplate = function(e) {//#RF [object Object]
// #DB i:8 orig:           var t = this.getDefaultDocument().createElement('template');
// #DB i:8 orig:           t.innerHTML = e;
// #DB i:8 orig:           return t;
// #DB END i: orig:         };
        t.prototype.createElement = function(e, t) {// #QA1 i:10399 orig: 
          return (t = t || this.getDefaultDocument()).createElement(e);// #QA1 i:10399 orig: 
        };// #QA1 i:10399 orig: 
// #DB4 START i:8 orig:         t.prototype.createElementNS = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           return (n = n || this.getDefaultDocument()).createElementNS(e, t);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.createTextNode = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           return (t = t || this.getDefaultDocument()).createTextNode(e);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.createScriptTag = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           var r = (n = n || this.getDefaultDocument()).createElement('SCRIPT');
// #DB i:8 orig:           r.setAttribute(e, t);
// #DB i:8 orig:           return r;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.createStyleElement = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           var n = (t = t || this.getDefaultDocument()).createElement('style');
// #DB i:8 orig:           this.appendChild(n, this.createTextNode(e, t));
// #DB i:8 orig:           return n;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.createShadowRoot = function(e) {//#RF [object Object]
// #DB i:8 orig:           return e.createShadowRoot();
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.getShadowRoot = function(e) {//#RF [object Object]
// #DB i:8 orig:           return e.shadowRoot;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.getHost = function(e) {//#RF [object Object]
// #DB i:8 orig:           return e.host;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.clone = function(e) {//#RF [object Object]
// #DB i:8 orig:           return e.cloneNode(true);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.getElementsByClassName = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           return e.getElementsByClassName(t);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.getElementsByTagName = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           return e.getElementsByTagName(t);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.classList = function(e) {//#RF [object Object]
// #DB i:8 orig:           return Array.prototype.slice.call(e.classList, 0);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.addClass = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           e.classList.add(t);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.removeClass = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           e.classList.remove(t);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.hasClass = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           return e.classList.contains(t);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.setStyle = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           e.style[t] = n;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.removeStyle = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           e.style[t] = '';
// #DB END i: orig:         };
        t.prototype.getStyle = function(e, t) {// #QA1 i:10399 orig: 
          return e.style[t];// #QA1 i:10399 orig: 
        };// #QA1 i:10399 orig: 
// #DB4 START i:8 orig:         t.prototype.hasStyle = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           var r = this.getStyle(e, t) || '';
// #DB i:8 orig:           if (n) {
// #DB i:8 orig:             return r == n;
// #DB i:8 orig:           } else {
// #DB i:8 orig:             return r.length > 0;
// #DB i:8 orig:           }
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.tagName = function(e) {//#RF [object Object]
// #DB i:8 orig:           return e.tagName;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.attributeMap = function(e) {//#RF [object Object]
// #DB i:8 orig:           var t = new Map();
// #DB i:8 orig:           var n = e.attributes;
// #DB i:8 orig:           for (var r = 0; r < n.length; r++) {
// #DB i:8 orig:             var o = n.item(r);
// #DB i:8 orig:             t.set(o.name, o.value);
// #DB i:8 orig:           }
// #DB i:8 orig:           return t;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.hasAttribute = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           return e.hasAttribute(t);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.hasAttributeNS = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           return e.hasAttributeNS(t, n);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.getAttribute = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           return e.getAttribute(t);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.getAttributeNS = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           return e.getAttributeNS(t, n);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.setAttribute = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           e.setAttribute(t, n);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.setAttributeNS = function(e, t, n, r) {//#RF [object Object]
// #DB i:8 orig:           e.setAttributeNS(t, n, r);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.removeAttribute = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           e.removeAttribute(t);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.removeAttributeNS = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           e.removeAttributeNS(t, n);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.templateAwareRoot = function(e) {//#RF [object Object]
// #DB i:8 orig:           if (this.isTemplateElement(e)) {
// #DB i:8 orig:             return this.content(e);
// #DB i:8 orig:           } else {
// #DB i:8 orig:             return e;
// #DB i:8 orig:           }
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.createHtmlDocument = function() {//#RF [object Object]
// #DB i:8 orig:           return document.implementation.createHTMLDocument('fakeTitle');
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.getDefaultDocument = function() {//#RF [object Object]
// #DB i:8 orig:           return document;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.getBoundingClientRect = function(e) {//#RF [object Object]
// #DB i:8 orig:           try {
// #DB i:8 orig:             return e.getBoundingClientRect();
// #DB i:8 orig:           } catch (e) {
// #DB i:8 orig:             return {
// #DB i:8 orig:               top: 0,
// #DB i:8 orig:               bottom: 0,
// #DB i:8 orig:               left: 0,
// #DB i:8 orig:               right: 0,
// #DB i:8 orig:               width: 0,
// #DB i:8 orig:               height: 0,
// #DB i:8 orig:             };
// #DB i:8 orig:           }
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.getTitle = function(e) {//#RF [object Object]
// #DB i:8 orig:           return e.title;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.setTitle = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           e.title = t || '';
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.elementMatches = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           return (
// #DB i:8 orig:             !!this.isElementNode(e) &&
// #DB i:8 orig:             ((e.matches && e.matches(t)) ||
// #DB i:8 orig:               (e.msMatchesSelector && e.msMatchesSelector(t)) ||
// #DB i:8 orig:               (e.webkitMatchesSelector && e.webkitMatchesSelector(t)))
// #DB i:8 orig:           );
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.isTemplateElement = function(e) {//#RF [object Object]
// #DB i:8 orig:           return this.isElementNode(e) && e.nodeName === 'TEMPLATE';
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.isTextNode = function(e) {//#RF [object Object]
// #DB i:8 orig:           return e.nodeType === Node.TEXT_NODE;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.isCommentNode = function(e) {//#RF [object Object]
// #DB i:8 orig:           return e.nodeType === Node.COMMENT_NODE;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.isElementNode = function(e) {//#RF [object Object]
// #DB i:8 orig:           return e.nodeType === Node.ELEMENT_NODE;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.hasShadowRoot = function(e) {//#RF [object Object]
// #DB i:8 orig:           return e.shadowRoot != null && e instanceof HTMLElement;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.isShadowRoot = function(e) {//#RF [object Object]
// #DB i:8 orig:           return e instanceof DocumentFragment;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.importIntoDoc = function(e) {//#RF [object Object]
// #DB i:8 orig:           return document.importNode(this.templateAwareRoot(e), true);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.adoptNode = function(e) {//#RF [object Object]
// #DB i:8 orig:           return document.adoptNode(e);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.getHref = function(e) {//#RF [object Object]
// #DB i:8 orig:           return e.getAttribute('href');
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.getEventKey = function(e) {//#RF [object Object]
// #DB i:8 orig:           var t = e.key;
// #DB i:8 orig:           if (t == null) {
// #DB i:8 orig:             if ((t = e.keyIdentifier) == null) {
// #DB i:8 orig:               return 'Unidentified';
// #DB i:8 orig:             }
// #DB i:8 orig:             if (t.startsWith('U+')) {
// #DB i:8 orig:               t = String.fromCharCode(parseInt(t.substring(2), 16));
// #DB i:8 orig:               if (e.location === 3 && x.hasOwnProperty(t)) {
// #DB i:8 orig:                 t = x[t];
// #DB i:8 orig:               }
// #DB i:8 orig:             }
// #DB i:8 orig:           }
// #DB i:8 orig:           return E[t] || t;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.getGlobalEventTarget = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           if (t === 'window') {
// #DB i:8 orig:             return window;
// #DB i:8 orig:           } else if (t === 'document') {
// #DB i:8 orig:             return e;
// #DB i:8 orig:           } else if (t === 'body') {
// #DB i:8 orig:             return e.body;
// #DB i:8 orig:           } else {
// #DB i:8 orig:             return null;
// #DB i:8 orig:           }
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.getHistory = function() {//#RF [object Object]
// #DB i:8 orig:           return window.history;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.getLocation = function() {//#RF [object Object]
// #DB i:8 orig:           return window.location;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.getBaseHref = function(e) {//#RF [object Object]
// #DB i:8 orig:           var t;
// #DB i:8 orig:           var n =
// #DB i:8 orig:             I || (I = document.querySelector('base'))
// #DB i:8 orig:               ? I.getAttribute('href')
// #DB i:8 orig:               : null;
// #DB i:8 orig:           if (n == null) {
// #DB i:8 orig:             return null;
// #DB i:8 orig:           } else {
// #DB i:8 orig:             t = n;
// #DB i:8 orig:             if (!T) {
// #DB i:8 orig:               T = document.createElement('a');
// #DB i:8 orig:             }
// #DB i:8 orig:             T.setAttribute('href', t);
// #DB i:8 orig:             if (T.pathname.charAt(0) === '/') {
// #DB i:8 orig:               return T.pathname;
// #DB i:8 orig:             } else {
// #DB i:8 orig:               return '/' + T.pathname;
// #DB i:8 orig:             }
// #DB i:8 orig:           }
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.resetBaseElement = function() {//#RF [object Object]
// #DB i:8 orig:           I = null;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.getUserAgent = function() {//#RF [object Object]
// #DB i:8 orig:           return window.navigator.userAgent;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.setData = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           this.setAttribute(e, 'data-' + t, n);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.getData = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           return this.getAttribute(e, 'data-' + t);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.getComputedStyle = function(e) {//#RF [object Object]
// #DB i:8 orig:           return getComputedStyle(e);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.supportsWebAnimation = function() {//#RF [object Object]
// #DB i:8 orig:           return typeof Element.prototype.animate == 'function';
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.performanceNow = function() {//#RF [object Object]
// #DB i:8 orig:           if (window.performance && window.performance.now) {
// #DB i:8 orig:             return window.performance.now();
// #DB i:8 orig:           } else {
// #DB i:8 orig:             return new Date().getTime();
// #DB i:8 orig:           }
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.supportsCookies = function() {//#RF [object Object]
// #DB i:8 orig:           return true;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.getCookie = function(e) {//#RF [object Object]
// #DB i:8 orig:           return (function(e, t) {
// #DB i:8 orig:             t = encodeURIComponent(t);
// #DB i:8 orig:             var n = 0;
// #DB i:8 orig:             for (var r = e.split(';'); n < r.length; n++) {
// #DB i:8 orig:               var o = r[n];
// #DB i:8 orig:               var i = o.indexOf('=');
// #DB i:8 orig:               var s = i == -1 ? [o, ''] : [o.slice(0, i), o.slice(i + 1)];
// #DB i:8 orig:               var u = s[1];
// #DB i:8 orig:               if (s[0].trim() === t) {
// #DB i:8 orig:                 return decodeURIComponent(u);
// #DB i:8 orig:               }
// #DB i:8 orig:             }
// #DB i:8 orig:             return null;
// #DB i:8 orig:           })(document.cookie, e);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.setCookie = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           document.cookie = encodeURIComponent(e) + '=' + encodeURIComponent(t);
// #DB END i: orig:         };
        return t;// #QA1 i:10399 orig: 
      })();// #QA1 i:10399 orig: 
// #DSL i: orig:       var I = null;
      var O = m;// #QA1 i:10399 orig: 
      var S =function(n){};// #CB2 START i:10399 orig: 6
// #CB i:6 orig:         function t(t) {//#RF [object Object]
// #CB i:6 orig:           var n = e.call(this) || this;
// #CB i:6 orig:           n._doc = t;
// #CB i:6 orig:           n._init();
// #CB i:6 orig:           return n;
// #CB i:6 orig:         }
// #CB i:6 orig:         var e = l;
// #CB i:6 orig:         Object(c.b)(t, e);
// #CB i:6 orig:         t.prototype._init = function() {//#RF [object Object]
// #CB i:6 orig:           this.location = _().getLocation();
// #CB i:6 orig:           this._history = _().getHistory();
// #CB i:6 orig:         };
// #CB i:6 orig:         t.prototype.getBaseHrefFromDOM = function() {//#RF [object Object]
// #CB i:6 orig:           return _().getBaseHref(this._doc);
// #CB i:6 orig:         };
// #CB i:6 orig:         t.prototype.onPopState = function(e) {//#RF [object Object]
// #CB i:6 orig:           _()
// #CB i:6 orig:             .getGlobalEventTarget(this._doc, 'window')
// #CB i:6 orig:             .addEventListener('popstate', e, false);
// #CB i:6 orig:         };
// #CB i:6 orig:         t.prototype.onHashChange = function(e) {//#RF [object Object]
// #CB i:6 orig:           _()
// #CB i:6 orig:             .getGlobalEventTarget(this._doc, 'window')
// #CB i:6 orig:             .addEventListener('hashchange', e, false);
// #CB i:6 orig:         };
// #CB i:6 orig:         Object.defineProperty(t.prototype, 'pathname', {
// #CB i:6 orig:           get: function() {//#RF [object Object]
// #CB i:6 orig:             return this.location.pathname;
// #CB i:6 orig:           },
// #CB i:6 orig:           set: function(e) {//#RF [object Object]
// #CB i:6 orig:             this.location.pathname = e;
// #CB i:6 orig:           },
// #CB i:6 orig:           enumerable: true,
// #CB i:6 orig:           configurable: true,
// #CB i:6 orig:         });
// #CB i:6 orig:         Object.defineProperty(t.prototype, 'search', {
// #CB i:6 orig:           get: function() {//#RF [object Object]
// #CB i:6 orig:             return this.location.search;
// #CB i:6 orig:           },
// #CB i:6 orig:           enumerable: true,
// #CB i:6 orig:           configurable: true,
// #CB i:6 orig:         });
// #CB i:6 orig:         Object.defineProperty(t.prototype, 'hash', {
// #CB i:6 orig:           get: function() {//#RF [object Object]
// #CB i:6 orig:             return this.location.hash;
// #CB i:6 orig:           },
// #CB i:6 orig:           enumerable: true,
// #CB i:6 orig:           configurable: true,
// #CB i:6 orig:         });
// #CB i:6 orig:         t.prototype.pushState = function(e, t, n) {//#RF [object Object]
// #CB i:6 orig:           if (N()) {
// #CB i:6 orig:             this._history.pushState(e, t, n);
// #CB i:6 orig:           } else {
// #CB i:6 orig:             this.location.hash = n;
// #CB i:6 orig:           }
// #CB i:6 orig:         };
// #CB i:6 orig:         t.prototype.replaceState = function(e, t, n) {//#RF [object Object]
// #CB i:6 orig:           if (N()) {
// #CB i:6 orig:             this._history.replaceState(e, t, n);
// #CB i:6 orig:           } else {
// #CB i:6 orig:             this.location.hash = n;
// #CB i:6 orig:           }
// #CB i:6 orig:         };
// #CB i:6 orig:         t.prototype.forward = function() {//#RF [object Object]
// #CB i:6 orig:           this._history.forward();
// #CB i:6 orig:         };
// #CB i:6 orig:         t.prototype.back = function() {//#RF [object Object]
// #CB i:6 orig:           this._history.back();
// #CB i:6 orig:         };
// #CB i:6 orig:         t.ctorParameters = function() {//#RF [object Object]
// #CB i:6 orig:           return [{ type: void 0, decorators: [{ type: r.j, args: [O] }] }];
// #CB i:6 orig:         };
// #CB i:6 orig:         return t;
// #CB END i: orig:       })();
      var A =function(n){};// #CB2 START i:10399 orig: 6
// #CB i:6 orig:         function e(e) {//#RF [object Object]
// #CB i:6 orig:           this._doc = e;
// #CB i:6 orig:           this._dom = _();
// #CB i:6 orig:         }
// #CB i:6 orig:         e.prototype.addTag = function(e, t) {//#RF [object Object]
// #CB i:6 orig:           if (t === void 0) {
// #CB i:6 orig:             t = false;
// #CB i:6 orig:           }
// #CB i:6 orig:           if (e) {
// #CB i:6 orig:             return this._getOrCreateElement(e, t);
// #CB i:6 orig:           } else {
// #CB i:6 orig:             return null;
// #CB i:6 orig:           }
// #CB i:6 orig:         };
// #CB i:6 orig:         e.prototype.addTags = function(e, t) {//#RF [object Object]
// #CB i:6 orig:           var n = this;
// #CB i:6 orig:           if (t === void 0) {
// #CB i:6 orig:             t = false;
// #CB i:6 orig:           }
// #CB i:6 orig:           if (e) {
// #CB i:6 orig:             return e.reduce(function(e, r) {
// #CB i:6 orig:               if (r) {
// #CB i:6 orig:                 e.push(n._getOrCreateElement(r, t));
// #CB i:6 orig:               }
// #CB i:6 orig:               return e;
// #CB i:6 orig:             }, []);
// #CB i:6 orig:           } else {
// #CB i:6 orig:             return [];
// #CB i:6 orig:           }
// #CB i:6 orig:         };
// #CB i:6 orig:         e.prototype.getTag = function(e) {//#RF [object Object]
// #CB i:6 orig:           return (
// #CB i:6 orig:             (e && this._dom.querySelector(this._doc, 'meta[' + e + ']')) || null
// #CB i:6 orig:           );
// #CB i:6 orig:         };
// #CB i:6 orig:         e.prototype.getTags = function(e) {//#RF [object Object]
// #CB i:6 orig:           if (!e) {
// #CB i:6 orig:             return [];
// #CB i:6 orig:           }
// #CB i:6 orig:           var t = this._dom.querySelectorAll(this._doc, 'meta[' + e + ']');
// #CB i:6 orig:           if (t) {
// #CB i:6 orig:             return [].slice.call(t);
// #CB i:6 orig:           } else {
// #CB i:6 orig:             return [];
// #CB i:6 orig:           }
// #CB i:6 orig:         };
// #CB i:6 orig:         e.prototype.updateTag = function(e, t) {//#RF [object Object]
// #CB i:6 orig:           if (!e) {
// #CB i:6 orig:             return null;
// #CB i:6 orig:           }
// #CB i:6 orig:           t = t || this._parseSelector(e);
// #CB i:6 orig:           var n = this.getTag(t);
// #CB i:6 orig:           if (n) {
// #CB i:6 orig:             return this._setMetaElementAttributes(e, n);
// #CB i:6 orig:           } else {
// #CB i:6 orig:             return this._getOrCreateElement(e, true);
// #CB i:6 orig:           }
// #CB i:6 orig:         };
// #CB i:6 orig:         e.prototype.removeTag = function(e) {//#RF [object Object]
// #CB i:6 orig:           this.removeTagElement(this.getTag(e));
// #CB i:6 orig:         };
// #CB i:6 orig:         e.prototype.removeTagElement = function(e) {//#RF [object Object]
// #CB i:6 orig:           if (e) {
// #CB i:6 orig:             this._dom.remove(e);
// #CB i:6 orig:           }
// #CB i:6 orig:         };
// #CB i:6 orig:         e.prototype._getOrCreateElement = function(e, t) {//#RF [object Object]
// #CB i:6 orig:           if (t === void 0) {
// #CB i:6 orig:             t = false;
// #CB i:6 orig:           }
// #CB i:6 orig:           if (!t) {
// #CB i:6 orig:             var n = this._parseSelector(e);
// #CB i:6 orig:             var r = this.getTag(n);
// #CB i:6 orig:             if (r && this._containsAttributes(e, r)) {
// #CB i:6 orig:               return r;
// #CB i:6 orig:             }
// #CB i:6 orig:           }
// #CB i:6 orig:           var o = this._dom.createElement('meta');
// #CB i:6 orig:           this._setMetaElementAttributes(e, o);
// #CB i:6 orig:           var i = this._dom.getElementsByTagName(this._doc, 'head')[0];
// #CB i:6 orig:           this._dom.appendChild(i, o);
// #CB i:6 orig:           return o;
// #CB i:6 orig:         };
// #CB i:6 orig:         e.prototype._setMetaElementAttributes = function(e, t) {//#RF [object Object]
// #CB i:6 orig:           var n = this;
// #CB i:6 orig:           Object.keys(e).forEach(function(r) {
// #CB i:6 orig:             return n._dom.setAttribute(t, r, e[r]);
// #CB i:6 orig:           });
// #CB i:6 orig:           return t;
// #CB i:6 orig:         };
// #CB i:6 orig:         e.prototype._parseSelector = function(e) {//#RF [object Object]
// #CB i:6 orig:           var t = e.name ? 'name' : 'property';
// #CB i:6 orig:           return t + '="' + e[t] + '"';
// #CB i:6 orig:         };
// #CB i:6 orig:         e.prototype._containsAttributes = function(e, t) {//#RF [object Object]
// #CB i:6 orig:           var n = this;
// #CB i:6 orig:           return Object.keys(e).every(function(r) {
// #CB i:6 orig:             return n._dom.getAttribute(t, r) === e[r];
// #CB i:6 orig:           });
// #CB i:6 orig:         };
// #CB i:6 orig:         return e;
// #CB END i: orig:       })();
// #DSL i: orig:       var M = new r.k('TRANSITION_ID');
// #DSL i: orig:       var P = [
// #DSL i: orig:         {
// #DSL i: orig:           provide: r.b,
// #DB7 START i:10 orig:           useFactory: function(e, t, n) {//#RF [object Object]
// #DB i:10 orig:             return function() {
// #DB i:10 orig:               n.get(r.c).donePromise.then(function() {
// #DB i:10 orig:                 var n = _();
// #DB i:10 orig:                 Array.prototype.slice
// #DB i:10 orig:                   .apply(n.querySelectorAll(t, 'style[ng-transition]'))
// #DB i:10 orig:                   .filter(function(t) {
// #DB i:10 orig:                     return n.getAttribute(t, 'ng-transition') === e;
// #DB i:10 orig:                   })
// #DB i:10 orig:                   .forEach(function(e) {
// #DB i:10 orig:                     return n.remove(e);
// #DB i:10 orig:                   });
// #DB i:10 orig:               });
// #DB i:10 orig:             };
// #DB END i: orig:           },
// #DSL i: orig:           deps: [M, O, r.l],
// #DSL i: orig:           multi: true,
// #DSL i: orig:         },
// #DSL i: orig:       ];
      var D = (function() {// #QA6 i:10399 orig: 
        function e() {}// #QA4 i:10399 orig: 
        e.init = function() {// #QA1 i:10399 orig: 
          Object(r.I)(new e());// #QA1 i:10399 orig: 
        };// #QA1 i:10399 orig: 
// #DB4 START i:8 orig:         e.prototype.addToWindow = function(e) {//#RF [object Object]
// #DB i:8 orig:           r.Q.getAngularTestability = function(t, n) {
// #DB i:8 orig:             if (n === void 0) {
// #DB i:8 orig:               n = true;
// #DB i:8 orig:             }
// #DB i:8 orig:             var r = e.findTestabilityInTree(t, n);
// #DB i:8 orig:             if (r == null) {
// #DB i:8 orig:               throw new Error('Could not find testability for element.');
// #DB i:8 orig:             }
// #DB i:8 orig:             return r;
// #DB i:8 orig:           };
// #DB i:8 orig:           r.Q.getAllAngularTestabilities = function() {
// #DB i:8 orig:             return e.getAllTestabilities();
// #DB i:8 orig:           };
// #DB i:8 orig:           r.Q.getAllAngularRootElements = function() {
// #DB i:8 orig:             return e.getAllRootElements();
// #DB i:8 orig:           };
// #DB i:8 orig:           if (!r.Q.frameworkStabilizers) {
// #DB i:8 orig:             r.Q.frameworkStabilizers = [];
// #DB i:8 orig:           }
// #DB i:8 orig:           r.Q.frameworkStabilizers.push(function(e) {
// #DB i:8 orig:             var t = r.Q.getAllAngularTestabilities();
// #DB i:8 orig:             var n = t.length;
// #DB i:8 orig:             var o = false;
// #DB i:8 orig:             var i = function(t) {
// #DB i:8 orig:               o = o || t;
// #DB i:8 orig:               if (--n == 0) {
// #DB i:8 orig:                 e(o);
// #DB i:8 orig:               }
// #DB i:8 orig:             };
// #DB i:8 orig:             t.forEach(function(e) {
// #DB i:8 orig:               e.whenStable(i);
// #DB i:8 orig:             });
// #DB i:8 orig:           });
// #DB END i: orig:         };
// #DB4 START i:8 orig:         e.prototype.findTestabilityInTree = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           if (t == null) {
// #DB i:8 orig:             return null;
// #DB i:8 orig:           }
// #DB i:8 orig:           var r = e.getTestability(t);
// #DB i:8 orig:           if (r == null) {
// #DB i:8 orig:             if (n) {
// #DB i:8 orig:               if (_().isShadowRoot(t)) {
// #DB i:8 orig:                 return this.findTestabilityInTree(e, _().getHost(t), true);
// #DB i:8 orig:               } else {
// #DB i:8 orig:                 return this.findTestabilityInTree(
// #DB i:8 orig:                   e,
// #DB i:8 orig:                   _().parentElement(t),
// #DB i:8 orig:                   true
// #DB i:8 orig:                 );
// #DB i:8 orig:               }
// #DB i:8 orig:             } else {
// #DB i:8 orig:               return null;
// #DB i:8 orig:             }
// #DB i:8 orig:           } else {
// #DB i:8 orig:             return r;
// #DB i:8 orig:           }
// #DB END i: orig:         };
        return e;// #QA1 i:10399 orig: 
      })();// #QA1 i:10399 orig: 
      var R =function(n){};// #CB2 START i:10399 orig: 6
// #CB i:6 orig:         function e(e) {//#RF [object Object]
// #CB i:6 orig:           this._doc = e;
// #CB i:6 orig:         }
// #CB i:6 orig:         e.prototype.getTitle = function() {//#RF [object Object]
// #CB i:6 orig:           return _().getTitle(this._doc);
// #CB i:6 orig:         };
// #CB i:6 orig:         e.prototype.setTitle = function(e) {//#RF [object Object]
// #CB i:6 orig:           _().setTitle(this._doc, e);
// #CB i:6 orig:         };
// #CB i:6 orig:         return e;
// #CB END i: orig:       })();
      var V = { ApplicationRef: r.e, NgZone: r.r };// #QA1 i:10399 orig: 
      var L = new r.k('EventManagerPlugins');// #QA1 i:10399 orig: 
      var F =function(n){};// #CB2 START i:10399 orig: 6
// #CB i:6 orig:         function e(e, t) {
// #CB i:6 orig:           var n = this;
// #CB i:6 orig:           this._zone = t;
// #CB i:6 orig:           this._eventNameToPlugin = new Map();
// #CB i:6 orig:           e.forEach(function(e) {
// #CB i:6 orig:             return (e.manager = n);
// #CB i:6 orig:           });
// #CB i:6 orig:           this._plugins = e.slice().reverse();
// #CB i:6 orig:         }
// #CB i:6 orig:         e.prototype.addEventListener = function(e, t, n) {//#RF [object Object]
// #CB i:6 orig:           return this._findPluginFor(t).addEventListener(e, t, n);
// #CB i:6 orig:         };
// #CB i:6 orig:         e.prototype.addGlobalEventListener = function(e, t, n) {//#RF [object Object]
// #CB i:6 orig:           return this._findPluginFor(t).addGlobalEventListener(e, t, n);
// #CB i:6 orig:         };
// #CB i:6 orig:         e.prototype.getZone = function() {//#RF [object Object]
// #CB i:6 orig:           return this._zone;
// #CB i:6 orig:         };
// #CB i:6 orig:         e.prototype._findPluginFor = function(e) {//#RF [object Object]
// #CB i:6 orig:           var t = this._eventNameToPlugin.get(e);
// #CB i:6 orig:           if (t) {
// #CB i:6 orig:             return t;
// #CB i:6 orig:           }
// #CB i:6 orig:           var n = this._plugins;
// #CB i:6 orig:           for (var r = 0; r < n.length; r++) {
// #CB i:6 orig:             var o = n[r];
// #CB i:6 orig:             if (o.supports(e)) {
// #CB i:6 orig:               this._eventNameToPlugin.set(e, o);
// #CB i:6 orig:               return o;
// #CB i:6 orig:             }
// #CB i:6 orig:           }
// #CB i:6 orig:           throw new Error('No event manager plugin found for event ' + e);
// #CB i:6 orig:         };
// #CB i:6 orig:         return e;
// #CB END i: orig:       })();
// #DB START YYY START i:6 orig:       var B = (function() {
// #DB i:6 orig:         function e(e) {
// #DB i:6 orig:           this._doc = e;
// #DB i:6 orig:         }
// #DB i:6 orig:         e.prototype.addGlobalEventListener = function(e, t, n) {//#RF [object Object]
// #DB i:6 orig:           var r = _().getGlobalEventTarget(this._doc, e);
// #DB i:6 orig:           if (!r) {
// #DB i:6 orig:             throw new Error(
// #DB i:6 orig:               'Unsupported event target ' + r + ' for event ' + t
// #DB i:6 orig:             );
// #DB i:6 orig:           }
// #DB i:6 orig:           return this.addEventListener(r, t, n);
// #DB i:6 orig:         };
// #DB i:6 orig:         return e;
// #DB END i: orig:       })();
      var z = (function() {// #QA6 i:10399 orig: 
        function e() {// #QA3 i:10399 orig: 8
// #KB1 i:8 orig:           this._stylesSet = new Set();
        }// #KB1 END i:10399 orig: 
// #DB4 START i:8 orig:         e.prototype.addStyles = function(e) {//#RF [object Object]
// #DB i:8 orig:           var t = this;
// #DB i:8 orig:           var n = new Set();
// #DB i:8 orig:           e.forEach(function(e) {
// #DB i:8 orig:             if (!t._stylesSet.has(e)) {
// #DB i:8 orig:               t._stylesSet.add(e);
// #DB i:8 orig:               n.add(e);
// #DB i:8 orig:             }
// #DB i:8 orig:           });
// #DB i:8 orig:           this.onStylesAdded(n);
// #DB END i: orig:         };
// #DL SINGLE FUNC i: orig:         e.prototype.onStylesAdded = function(e) {};//#RF [object Object]
// #DB4 START i:8 orig:         e.prototype.getAllStyles = function() {//#RF [object Object]
// #DB i:8 orig:           return Array.from(this._stylesSet);
// #DB END i: orig:         };
        return e;// #QA1 i:10399 orig: 
      })();// #QA1 i:10399 orig: 
      var U = (function() {// #QA6 i:10399 orig: 
        function t(t) {// #QA3 i:10399 orig: 8
// #KB1 i:8 orig:           var n = e.call(this) || this;
// #KB1 i:8 orig:           n._doc = t;
// #KB1 i:8 orig:           n._hostNodes = new Set();
// #KB1 i:8 orig:           n._styleNodes = new Set();
// #KB1 i:8 orig:           n._hostNodes.add(t.head);
// #KB1 i:8 orig:           return n;
        }// #KB1 END i:10399 orig: 
        var e = z;// #QA1 i:10399 orig: 
        Object(c.b)(t, e);// #QA1 i:10399 orig: 
// #DB4 START i:8 orig:         t.prototype._addStylesToHost = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           var n = this;
// #DB i:8 orig:           e.forEach(function(e) {
// #DB i:8 orig:             var r = n._doc.createElement('style');
// #DB i:8 orig:             r.textContent = e;
// #DB i:8 orig:             n._styleNodes.add(t.appendChild(r));
// #DB i:8 orig:           });
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.addHost = function(e) {//#RF [object Object]
// #DB i:8 orig:           this._addStylesToHost(this._stylesSet, e);
// #DB i:8 orig:           this._hostNodes.add(e);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.removeHost = function(e) {//#RF [object Object]
// #DB i:8 orig:           this._hostNodes.delete(e);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.onStylesAdded = function(e) {//#RF [object Object]
// #DB i:8 orig:           var t = this;
// #DB i:8 orig:           this._hostNodes.forEach(function(n) {
// #DB i:8 orig:             return t._addStylesToHost(e, n);
// #DB i:8 orig:           });
// #DB END i: orig:         };
// #DB4 START i:8 orig:         t.prototype.ngOnDestroy = function() {//#RF [object Object]
// #DB i:8 orig:           this._styleNodes.forEach(function(e) {
// #DB i:8 orig:             return _().remove(e);
// #DB i:8 orig:           });
// #DB END i: orig:         };
        return t;// #QA1 i:10399 orig: 
      })();// #QA1 i:10399 orig: 
      var Z = {// #QA1 i:10399 orig: 
        svg: 'http://www.w3.org/2000/svg',// #QA1 i:10399 orig: 
        xhtml: 'http://www.w3.org/1999/xhtml',// #QA1 i:10399 orig: 
        xlink: 'http://www.w3.org/1999/xlink',// #QA1 i:10399 orig: 
        xml: 'http://www.w3.org/XML/1998/namespace',// #QA1 i:10399 orig: 
        xmlns: 'http://www.w3.org/2000/xmlns/',// #QA1 i:10399 orig: 
      };// #QA1 i:10399 orig: 
// #DSL i: orig:       var W = /%COMP%/g;
// #DSL i: orig:       var Q = '_nghost-%COMP%';
// #DSL i: orig:       var G = '_ngcontent-%COMP%';
      var K = (function() {// #QA6 i:10399 orig: 
        function e(e, t) {// #QA3 i:10399 orig: 8
// #KB1 i:8 orig:           this.eventManager = e;
// #KB1 i:8 orig:           this.sharedStylesHost = t;
// #KB1 i:8 orig:           this.rendererByCompId = new Map();
          this.defaultRenderer = new J(e);// #NOT DELETABLE i:10399 orig: 8
        }// #KB1 END i:10399 orig: 
        e.prototype.createRenderer = function(e, t) {// #KBQ i:10399 orig: 8
// #KB1 i:8 orig:           if (!e || !t) {
// #KB1 i:8 orig:             return this.defaultRenderer;
// #KB1 i:8 orig:           }
// #KB1 i:8 orig:           switch (t.encapsulation) {
// #KB1 i:8 orig:             case r.B.Emulated:
// #KB1 i:8 orig:               var n = this.rendererByCompId.get(t.id);
// #KB1 i:8 orig:               if (!n) {
// #KB1 i:8 orig:                 n = new te(this.eventManager, this.sharedStylesHost, t);
// #KB1 i:8 orig:                 this.rendererByCompId.set(t.id, n);
// #KB1 i:8 orig:               }
// #KB1 i:8 orig:               n.applyToHost(e);
// #KB1 i:8 orig:               return n;
// #KB1 i:8 orig:             case r.B.Native:
// #KB1 i:8 orig:               return new ne(this.eventManager, this.sharedStylesHost, e, t);
// #KB1 i:8 orig:             default:
// #KB1 i:8 orig:               if (!this.rendererByCompId.has(t.id)) {
// #KB1 i:8 orig:                 var o = q(t.id, t.styles, []);
// #KB1 i:8 orig:                 this.sharedStylesHost.addStyles(o);
// #KB1 i:8 orig:                 this.rendererByCompId.set(t.id, this.defaultRenderer);
// #KB1 i:8 orig:               }
              return this.defaultRenderer;// #NOT DELETABLE i:10399 orig: 8
// #KB1 i:8 orig:           }
        };// #KB1 END i:10399 orig: 
// #DL SINGLE FUNC i: orig:         e.prototype.begin = function() {};//#RF [object Object]
// #DL SINGLE FUNC i: orig:         e.prototype.end = function() {};//#RF [object Object]
        return e;// #QA1 i:10399 orig: 
      })();// #QA1 i:10399 orig: 
      var J = (function() {// #QA6 i:10399 orig: 
        function e(e) {// #QA3 i:10399 orig: 8
// #KB1 i:8 orig:           this.eventManager = e;
// #KB1 i:8 orig:           this.data = Object.create(null);
        }// #KB1 END i:10399 orig: 
// #DL SINGLE FUNC i: orig:         e.prototype.destroy = function() {};//#RF [object Object]
        e.prototype.createElement = function(e, t) {// #KBQ i:10399 orig: 8//#RF [object Object]
// #KB1 i:8 orig:           if (t) {
// #KB1 i:8 orig:             return document.createElementNS(Z[t], e);
// #KB1 i:8 orig:           } else {
            return document.createElement(e);// #NOT DELETABLE i:10399 orig: 8
// #KB1 i:8 orig:           }
        };// #KB1 END i:10399 orig: 
// #DB4 START i:8 orig:         e.prototype.createComment = function(e) {//#RF [object Object]
// #DB i:8 orig:           return document.createComment(e);
// #DB END i: orig:         };
        e.prototype.createText = function(e) {// #DB ERROR i:10399 orig: //#RF [object Object]
          return document.createTextNode(e);// #QA1 i:10399 orig: 
        };// #QA1 i:10399 orig: 
        e.prototype.appendChild = function(e, t) {// #DB ERROR i:10399 orig: //#RF [object Object]
          e.appendChild(t);// #QA1 i:10399 orig: 
        };// #QA1 i:10399 orig: 
// #DB4 START i:8 orig:         e.prototype.insertBefore = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           if (e) {
// #DB i:8 orig:             e.insertBefore(t, n);
// #DB i:8 orig:           }
// #DB END i: orig:         };
// #DB4 START i:8 orig:         e.prototype.removeChild = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           if (e) {
// #DB i:8 orig:             e.removeChild(t);
// #DB i:8 orig:           }
// #DB END i: orig:         };
        e.prototype.selectRootElement = function(e) {// #QA1 i:10399 orig: 
          var t = typeof e == 'string' ? document.querySelector(e) : e;// #QA1 i:10399 orig: 
          if (!t) {// #QA1 i:10399 orig: 
            throw new Error(// #QA1 i:10399 orig: 
              'The selector "' + e + '" did not match any elements'// #QA1 i:10399 orig: 
            );// #QA1 i:10399 orig: 
          }// #QA1 i:10399 orig: 
          t.textContent = '';// #QA1 i:10399 orig: 
          return t;// #QA1 i:10399 orig: 
        };// #QA1 i:10399 orig: 
// #DB4 START i:8 orig:         e.prototype.parentNode = function(e) {//#RF [object Object]
// #DB i:8 orig:           return e.parentNode;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         e.prototype.nextSibling = function(e) {//#RF [object Object]
// #DB i:8 orig:           return e.nextSibling;
// #DB END i: orig:         };
        e.prototype.setAttribute = function(e, t, n, r) {// #QA1 i:10399 orig: //#RF [object Object]
          if (r) {// #QA1 i:10399 orig: 
            t = r + ':' + t;// #QA1 i:10399 orig: 
            var o = Z[r];// #QA1 i:10399 orig: 
            if (o) {// #QA1 i:10399 orig: 
              e.setAttributeNS(o, t, n);// #QA1 i:10399 orig: 
            } else {// #QA1 i:10399 orig: 
              e.setAttribute(t, n);// #QA1 i:10399 orig: 
            }// #QA1 i:10399 orig: 
          } else {// #QA1 i:10399 orig: 
            e.setAttribute(t, n);// #QA1 i:10399 orig: 
          }// #QA1 i:10399 orig: 
        };// #QA1 i:10399 orig: 
// #DB4 START i:8 orig:         e.prototype.removeAttribute = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           if (n) {
// #DB i:8 orig:             var r = Z[n];
// #DB i:8 orig:             if (r) {
// #DB i:8 orig:               e.removeAttributeNS(r, t);
// #DB i:8 orig:             } else {
// #DB i:8 orig:               e.removeAttribute(n + ':' + t);
// #DB i:8 orig:             }
// #DB i:8 orig:           } else {
// #DB i:8 orig:             e.removeAttribute(t);
// #DB i:8 orig:           }
// #DB END i: orig:         };
// #DB4 START i:8 orig:         e.prototype.addClass = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           e.classList.add(t);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         e.prototype.removeClass = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           e.classList.remove(t);
// #DB END i: orig:         };
// #DB4 START i:8 orig:         e.prototype.setStyle = function(e, t, n, o) {//#RF [object Object]
// #DB i:8 orig:           if (o & r.w.DashCase) {
// #DB i:8 orig:             e.style.setProperty(t, n, o & r.w.Important ? 'important' : '');
// #DB i:8 orig:           } else {
// #DB i:8 orig:             e.style[t] = n;
// #DB i:8 orig:           }
// #DB END i: orig:         };
// #DB4 START i:8 orig:         e.prototype.removeStyle = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           if (n & r.w.DashCase) {
// #DB i:8 orig:             e.style.removeProperty(t);
// #DB i:8 orig:           } else {
// #DB i:8 orig:             e.style[t] = '';
// #DB i:8 orig:           }
// #DB END i: orig:         };
// #DB4 START i:8 orig:         e.prototype.setProperty = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           $(t, 'property');
// #DB i:8 orig:           e[t] = n;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         e.prototype.setValue = function(e, t) {//#RF [object Object]
// #DB i:8 orig:           e.nodeValue = t;
// #DB END i: orig:         };
// #DB4 START i:8 orig:         e.prototype.listen = function(e, t, n) {//#RF [object Object]
// #DB i:8 orig:           $(t, 'listener');
// #DB i:8 orig:           if (typeof e == 'string') {
// #DB i:8 orig:             return this.eventManager.addGlobalEventListener(e, t, Y(n));
// #DB i:8 orig:           } else {
// #DB i:8 orig:             return this.eventManager.addEventListener(e, t, Y(n));
// #DB i:8 orig:           }
// #DB END i: orig:         };
        return e;// #QA1 i:10399 orig: 
      })();// #QA1 i:10399 orig: 
      var X = '@'.charCodeAt(0);// #QA1 i:10399 orig: 
      var ee;// #QA1 i:10399 orig: 
// #DB START YYY START i:6 orig:       var te = (function() {
// #DB i:6 orig:         function t(t, n, r) {//#RF [object Object]
// #DB i:6 orig:           var o = e.call(this, t) || this;
// #DB i:6 orig:           o.component = r;
// #DB i:6 orig:           var i = q(r.id, r.styles, []);
// #DB i:6 orig:           n.addStyles(i);
// #DB i:6 orig:           o.contentAttr = G.replace(W, r.id);
// #DB i:6 orig:           o.hostAttr = Q.replace(W, r.id);
// #DB i:6 orig:           return o;
// #DB i:6 orig:         }
// #DB i:6 orig:         var e = J;
// #DB i:6 orig:         Object(c.b)(t, e);
// #DB i:6 orig:         t.prototype.applyToHost = function(t) {//#RF [object Object]
// #DB i:6 orig:           e.prototype.setAttribute.call(this, t, this.hostAttr, '');
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype.createElement = function(t, n) {//#RF [object Object]
// #DB i:6 orig:           var r = e.prototype.createElement.call(this, t, n);
// #DB i:6 orig:           e.prototype.setAttribute.call(this, r, this.contentAttr, '');
// #DB i:6 orig:           return r;
// #DB i:6 orig:         };
// #DB i:6 orig:         return t;
// #DB END i: orig:       })();
// #DB START YYY START i:6 orig:       var ne = (function() {
// #DB i:6 orig:         function t(t, n, r, o) {//#RF [object Object]
// #DB i:6 orig:           var i = e.call(this, t) || this;
// #DB i:6 orig:           i.sharedStylesHost = n;
// #DB i:6 orig:           i.hostEl = r;
// #DB i:6 orig:           i.component = o;
// #DB i:6 orig:           i.shadowRoot = r.createShadowRoot();
// #DB i:6 orig:           i.sharedStylesHost.addHost(i.shadowRoot);
// #DB i:6 orig:           var s = q(o.id, o.styles, []);
// #DB i:6 orig:           for (var u = 0; u < s.length; u++) {
// #DB i:6 orig:             var a = document.createElement('style');
// #DB i:6 orig:             a.textContent = s[u];
// #DB i:6 orig:             i.shadowRoot.appendChild(a);
// #DB i:6 orig:           }
// #DB i:6 orig:           return i;
// #DB i:6 orig:         }
// #DB i:6 orig:         var e = J;
// #DB i:6 orig:         Object(c.b)(t, e);
// #DB i:6 orig:         t.prototype.nodeOrShadowRoot = function(e) {//#RF [object Object]
// #DB i:6 orig:           if (e === this.hostEl) {
// #DB i:6 orig:             return this.shadowRoot;
// #DB i:6 orig:           } else {
// #DB i:6 orig:             return e;
// #DB i:6 orig:           }
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype.destroy = function() {//#RF [object Object]
// #DB i:6 orig:           this.sharedStylesHost.removeHost(this.shadowRoot);
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype.appendChild = function(t, n) {//#RF [object Object]
// #DB i:6 orig:           return e.prototype.appendChild.call(
// #DB i:6 orig:             this,
// #DB i:6 orig:             this.nodeOrShadowRoot(t),
// #DB i:6 orig:             n
// #DB i:6 orig:           );
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype.insertBefore = function(t, n, r) {//#RF [object Object]
// #DB i:6 orig:           return e.prototype.insertBefore.call(
// #DB i:6 orig:             this,
// #DB i:6 orig:             this.nodeOrShadowRoot(t),
// #DB i:6 orig:             n,
// #DB i:6 orig:             r
// #DB i:6 orig:           );
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype.removeChild = function(t, n) {//#RF [object Object]
// #DB i:6 orig:           return e.prototype.removeChild.call(
// #DB i:6 orig:             this,
// #DB i:6 orig:             this.nodeOrShadowRoot(t),
// #DB i:6 orig:             n
// #DB i:6 orig:           );
// #DB i:6 orig:         };
// #DB i:6 orig:         t.prototype.parentNode = function(t) {//#RF [object Object]
// #DB i:6 orig:           return this.nodeOrShadowRoot(
// #DB i:6 orig:             e.prototype.parentNode.call(this, this.nodeOrShadowRoot(t))
// #DB i:6 orig:           );
// #DB i:6 orig:         };
// #DB i:6 orig:         return t;
// #DB END i: orig:       })();
// #DSL i: orig:       var re =
// #DSL i: orig:         (typeof Zone != 'undefined' && Zone.__symbol__) ||
// #DB7 START i:8 orig:         function(e) {//#RF [object Object]
// #DB i:8 orig:           return '__zone_symbol__' + e;
// #DB END i: orig:         };
// #DSL i: orig:       var oe = re('addEventListener');
// #DSL i: orig:       var ie = re('removeEventListener');
// #DSL i: orig:       var se = {};
// #DSL i: orig:       var ue = '__zone_symbol__propagationStopped';
// #DSL i: orig:       if (typeof Zone != 'undefined' && Zone[re('BLACK_LISTED_EVENTS')]) {
// #DSL i: orig:         ee = {};
// #DSL i: orig:       }
// #DB7 START i:6 orig:       var ae = function(e) {//#RF [object Object]
// #DB i:6 orig:         return !!ee && ee.hasOwnProperty(e);
// #DB END i: orig:       };
// #DB7 START i:6 orig:       var ce = function(e) {//#RF [object Object]
// #DB i:6 orig:         var t = se[e.type];
// #DB i:6 orig:         if (t) {
// #DB i:6 orig:           var n = this[t];
// #DB i:6 orig:           if (n) {
// #DB i:6 orig:             var r = [e];
// #DB i:6 orig:             if (n.length === 1) {
// #DB i:6 orig:               if ((s = n[0]).zone === Zone.current) {
// #DB i:6 orig:                 return s.handler.apply(this, r);
// #DB i:6 orig:               } else {
// #DB i:6 orig:                 return s.zone.run(s.handler, this, r);
// #DB i:6 orig:               }
// #DB i:6 orig:             }
// #DB i:6 orig:             var o = n.slice();
// #DB i:6 orig:             for (var i = 0; i < o.length && e[ue] !== true; i++) {
// #DB i:6 orig:               var s;
// #DB i:6 orig:               if ((s = o[i]).zone === Zone.current) {
// #DB i:6 orig:                 s.handler.apply(this, r);
// #DB i:6 orig:               } else {
// #DB i:6 orig:                 s.zone.run(s.handler, this, r);
// #DB i:6 orig:               }
// #DB i:6 orig:             }
// #DB i:6 orig:           }
// #DB i:6 orig:         }
// #DB END i: orig:       };
      var le =function(n){};// #CB2 START i:10399 orig: 6
// #CB i:6 orig:         function t(t, n) {
// #CB i:6 orig:           var r = e.call(this, t) || this;
// #CB i:6 orig:           r.ngZone = n;
// #CB i:6 orig:           r.patchEvent();
// #CB i:6 orig:           return r;
// #CB i:6 orig:         }
// #CB i:6 orig:         var e = B;
// #CB i:6 orig:         Object(c.b)(t, e);
// #CB i:6 orig:         t.prototype.patchEvent = function() {
// #CB i:6 orig:           if (
// #CB i:6 orig:             Event &&
// #CB i:6 orig:             Event.prototype &&
// #CB i:6 orig:             !Event.prototype.__zone_symbol__stopImmediatePropagation
// #CB i:6 orig:           ) {
// #CB i:6 orig:             var e = (Event.prototype.__zone_symbol__stopImmediatePropagation =
// #CB i:6 orig:               Event.prototype.stopImmediatePropagation);
// #CB i:6 orig:             Event.prototype.stopImmediatePropagation = function() {//#RF [object Object]
// #CB i:6 orig:               if (this) {
// #CB i:6 orig:                 this[ue] = true;
// #CB i:6 orig:               }
// #CB i:6 orig:               if (e) {
// #CB i:6 orig:                 e.apply(this, arguments);
// #CB i:6 orig:               }
// #CB i:6 orig:             };
// #CB i:6 orig:           }
// #CB i:6 orig:         };
// #CB i:6 orig:         t.prototype.supports = function(e) {//#RF [object Object]
// #CB i:6 orig:           return true;
// #CB i:6 orig:         };
// #CB i:6 orig:         t.prototype.addEventListener = function(e, t, n) {//#RF [object Object]
// #CB i:6 orig:           var o = this;
// #CB i:6 orig:           var i = n;
// #CB i:6 orig:           if (!e[oe] || (r.r.isInAngularZone() && !ae(t))) {
// #CB i:6 orig:             e.addEventListener(t, i, false);
// #CB i:6 orig:           } else {
// #CB i:6 orig:             var s = se[t];
// #CB i:6 orig:             if (!s) {
// #CB i:6 orig:               s = se[t] = re('ANGULAR' + t + 'FALSE');
// #CB i:6 orig:             }
// #CB i:6 orig:             var u = e[s];
// #CB i:6 orig:             var a = u && u.length > 0;
// #CB i:6 orig:             if (!u) {
// #CB i:6 orig:               u = e[s] = [];
// #CB i:6 orig:             }
// #CB i:6 orig:             var c = ae(t) ? Zone.root : Zone.current;
// #CB i:6 orig:             if (u.length === 0) {
// #CB i:6 orig:               u.push({ zone: c, handler: i });
// #CB i:6 orig:             } else {
// #CB i:6 orig:               var l = false;
// #CB i:6 orig:               for (var d = 0; d < u.length; d++) {
// #CB i:6 orig:                 if (u[d].handler === i) {
// #CB i:6 orig:                   l = true;
// #CB i:6 orig:                   break;
// #CB i:6 orig:                 }
// #CB i:6 orig:               }
// #CB i:6 orig:               if (!l) {
// #CB i:6 orig:                 u.push({ zone: c, handler: i });
// #CB i:6 orig:               }
// #CB i:6 orig:             }
// #CB i:6 orig:             if (!a) {
// #CB i:6 orig:               e[oe](t, ce, false);
// #CB i:6 orig:             }
// #CB i:6 orig:           }
// #CB i:6 orig:           return function() {
// #CB i:6 orig:             return o.removeEventListener(e, t, i);
// #CB i:6 orig:           };
// #CB i:6 orig:         };
// #CB i:6 orig:         t.prototype.removeEventListener = function(e, t, n) {//#RF [object Object]
// #CB i:6 orig:           var r = e[ie];
// #CB i:6 orig:           if (!r) {
// #CB i:6 orig:             return e.removeEventListener.apply(e, [t, n, false]);
// #CB i:6 orig:           }
// #CB i:6 orig:           var o = se[t];
// #CB i:6 orig:           var i = o && e[o];
// #CB i:6 orig:           if (!i) {
// #CB i:6 orig:             return e.removeEventListener.apply(e, [t, n, false]);
// #CB i:6 orig:           }
// #CB i:6 orig:           var s = false;
// #CB i:6 orig:           for (var u = 0; u < i.length; u++) {
// #CB i:6 orig:             if (i[u].handler === n) {
// #CB i:6 orig:               s = true;
// #CB i:6 orig:               i.splice(u, 1);
// #CB i:6 orig:               break;
// #CB i:6 orig:             }
// #CB i:6 orig:           }
// #CB i:6 orig:           if (s) {
// #CB i:6 orig:             if (i.length === 0) {
// #CB i:6 orig:               r.apply(e, [t, ce, false]);
// #CB i:6 orig:             }
// #CB i:6 orig:           } else {
// #CB i:6 orig:             e.removeEventListener.apply(e, [t, n, false]);
// #CB i:6 orig:           }
// #CB i:6 orig:         };
// #CB i:6 orig:         return t;
// #CB END i: orig:       })();
// #DSL i: orig:       var de = {
// #DSL i: orig:         pan: true,
// #DSL i: orig:         panstart: true,
// #DSL i: orig:         panmove: true,
// #DSL i: orig:         panend: true,
// #DSL i: orig:         pancancel: true,
// #DSL i: orig:         panleft: true,
// #DSL i: orig:         panright: true,
// #DSL i: orig:         panup: true,
// #DSL i: orig:         pandown: true,
// #DSL i: orig:         pinch: true,
// #DSL i: orig:         pinchstart: true,
// #DSL i: orig:         pinchmove: true,
// #DSL i: orig:         pinchend: true,
// #DSL i: orig:         pinchcancel: true,
// #DSL i: orig:         pinchin: true,
// #DSL i: orig:         pinchout: true,
// #DSL i: orig:         press: true,
// #DSL i: orig:         pressup: true,
// #DSL i: orig:         rotate: true,
// #DSL i: orig:         rotatestart: true,
// #DSL i: orig:         rotatemove: true,
// #DSL i: orig:         rotateend: true,
// #DSL i: orig:         rotatecancel: true,
// #DSL i: orig:         swipe: true,
// #DSL i: orig:         swipeleft: true,
// #DSL i: orig:         swiperight: true,
// #DSL i: orig:         swipeup: true,
// #DSL i: orig:         swipedown: true,
// #DSL i: orig:         tap: true,
// #DSL i: orig:       };
      var fe = new r.k('HammerGestureConfig');// #QA1 i:10399 orig: 
      var pe =function(n){};// #CB2 START i:10399 orig: 6
// #CB i:6 orig:         function e() {
// #CB i:6 orig:           this.events = [];
// #CB i:6 orig:           this.overrides = {};
// #CB i:6 orig:         }
// #CB i:6 orig:         e.prototype.buildHammer = function(e) {//#RF [object Object]
// #CB i:6 orig:           var t = new Hammer(e);
// #CB i:6 orig:           for (var n in (t.get('pinch').set({ enable: true }),
// #CB i:6 orig:           t.get('rotate').set({ enable: true }),
// #CB i:6 orig:           this.overrides)) {
// #CB i:6 orig:             t.get(n).set(this.overrides[n]);
// #CB i:6 orig:           }
// #CB i:6 orig:           return t;
// #CB i:6 orig:         };
// #CB i:6 orig:         return e;
// #CB END i: orig:       })();
      var he =function(n){};// #CB2 START i:10399 orig: 6
// #CB i:6 orig:         function t(t, n) {
// #CB i:6 orig:           var r = e.call(this, t) || this;
// #CB i:6 orig:           r._config = n;
// #CB i:6 orig:           return r;
// #CB i:6 orig:         }
// #CB i:6 orig:         var e = B;
// #CB i:6 orig:         Object(c.b)(t, e);
// #CB i:6 orig:         t.prototype.supports = function(e) {//#RF [object Object]
// #CB i:6 orig:           if (!de.hasOwnProperty(e.toLowerCase()) && !this.isCustomEvent(e)) {
// #CB i:6 orig:             return false;
// #CB i:6 orig:           }
// #CB i:6 orig:           if (!window.Hammer) {
// #CB i:6 orig:             throw new Error(
// #CB i:6 orig:               'Hammer.js is not loaded, can not bind ' + e + ' event'
// #CB i:6 orig:             );
// #CB i:6 orig:           }
// #CB i:6 orig:           return true;
// #CB i:6 orig:         };
// #CB i:6 orig:         t.prototype.addEventListener = function(e, t, n) {//#RF [object Object]
// #CB i:6 orig:           var r = this;
// #CB i:6 orig:           var o = this.manager.getZone();
// #CB i:6 orig:           t = t.toLowerCase();
// #CB i:6 orig:           return o.runOutsideAngular(function() {
// #CB i:6 orig:             var i = r._config.buildHammer(e);
// #CB i:6 orig:             var s = function(e) {
// #CB i:6 orig:               o.runGuarded(function() {
// #CB i:6 orig:                 n(e);
// #CB i:6 orig:               });
// #CB i:6 orig:             };
// #CB i:6 orig:             i.on(t, s);
// #CB i:6 orig:             return function() {
// #CB i:6 orig:               return i.off(t, s);
// #CB i:6 orig:             };
// #CB i:6 orig:           });
// #CB i:6 orig:         };
// #CB i:6 orig:         t.prototype.isCustomEvent = function(e) {//#RF [object Object]
// #CB i:6 orig:           return this._config.events.indexOf(e) > -1;
// #CB i:6 orig:         };
// #CB i:6 orig:         return t;
// #CB END i: orig:       })();
// #DSL i: orig:       var ve = ['alt', 'control', 'meta', 'shift'];
// #DSL i: orig:       var ye = {
// #DB7 START i:8 orig:         alt: function(e) {//#RF [object Object]
// #DB i:8 orig:           return e.altKey;
// #DB END i: orig:         },
// #DB7 START i:8 orig:         control: function(e) {//#RF [object Object]
// #DB i:8 orig:           return e.ctrlKey;
// #DB END i: orig:         },
// #DB7 START i:8 orig:         meta: function(e) {//#RF [object Object]
// #DB i:8 orig:           return e.metaKey;
// #DB END i: orig:         },
// #DB7 START i:8 orig:         shift: function(e) {//#RF [object Object]
// #DB i:8 orig:           return e.shiftKey;
// #DB END i: orig:         },
// #DSL i: orig:       };
      var ge =function(n){};// #CB2 START i:10399 orig: 6
// #CB i:6 orig:         function t(t) {
// #CB i:6 orig:           return e.call(this, t) || this;
// #CB i:6 orig:         }
// #CB i:6 orig:         var e = B;
// #CB i:6 orig:         Object(c.b)(t, e);
// #CB i:6 orig:         t.prototype.supports = function(e) {//#RF [object Object]
// #CB i:6 orig:           return t.parseEventName(e) != null;
// #CB i:6 orig:         };
// #CB i:6 orig:         t.prototype.addEventListener = function(e, n, r) {//#RF [object Object]
// #CB i:6 orig:           var o = t.parseEventName(n);
// #CB i:6 orig:           var i = t.eventCallback(o.fullKey, r, this.manager.getZone());
// #CB i:6 orig:           return this.manager.getZone().runOutsideAngular(function() {
// #CB i:6 orig:             return _().onAndCancel(e, o.domEventName, i);
// #CB i:6 orig:           });
// #CB i:6 orig:         };
// #CB i:6 orig:         t.parseEventName = function(e) {//#RF [object Object]
// #CB i:6 orig:           var n = e.toLowerCase().split('.');
// #CB i:6 orig:           var r = n.shift();
// #CB i:6 orig:           if (n.length === 0 || (r !== 'keydown' && r !== 'keyup')) {
// #CB i:6 orig:             return null;
// #CB i:6 orig:           }
// #CB i:6 orig:           var o = t._normalizeKey(n.pop());
// #CB i:6 orig:           var i = '';
// #CB i:6 orig:           ve.forEach(function(e) {
// #CB i:6 orig:             var t = n.indexOf(e);
// #CB i:6 orig:             if (t > -1) {
// #CB i:6 orig:               n.splice(t, 1);
// #CB i:6 orig:               i += e + '.';
// #CB i:6 orig:             }
// #CB i:6 orig:           });
// #CB i:6 orig:           i += o;
// #CB i:6 orig:           if (n.length != 0 || o.length === 0) {
// #CB i:6 orig:             return null;
// #CB i:6 orig:           }
// #CB i:6 orig:           var s = {};
// #CB i:6 orig:           s.domEventName = r;
// #CB i:6 orig:           s.fullKey = i;
// #CB i:6 orig:           return s;
// #CB i:6 orig:         };
// #CB i:6 orig:         t.getEventFullKey = function(e) {//#RF [object Object]
// #CB i:6 orig:           var t = '';
// #CB i:6 orig:           var n = _().getEventKey(e);
// #CB i:6 orig:           if ((n = n.toLowerCase()) === ' ') {
// #CB i:6 orig:             n = 'space';
// #CB i:6 orig:           } else if (n === '.') {
// #CB i:6 orig:             n = 'dot';
// #CB i:6 orig:           }
// #CB i:6 orig:           ve.forEach(function(r) {
// #CB i:6 orig:             if (r != n && ye[r](e)) {
// #CB i:6 orig:               t += r + '.';
// #CB i:6 orig:             }
// #CB i:6 orig:           });
// #CB i:6 orig:           return (t += n);
// #CB i:6 orig:         };
// #CB i:6 orig:         t.eventCallback = function(e, n, r) {//#RF [object Object]
// #CB i:6 orig:           return function(o) {
// #CB i:6 orig:             if (t.getEventFullKey(o) === e) {
// #CB i:6 orig:               r.runGuarded(function() {
// #CB i:6 orig:                 return n(o);
// #CB i:6 orig:               });
// #CB i:6 orig:             }
// #CB i:6 orig:           };
// #CB i:6 orig:         };
// #CB i:6 orig:         t._normalizeKey = function(e) {//#RF [object Object]
// #CB i:6 orig:           switch (e) {
// #CB i:6 orig:             case 'esc':
// #CB i:6 orig:               return 'escape';
// #CB i:6 orig:             default:
// #CB i:6 orig:               return e;
// #CB i:6 orig:           }
// #CB i:6 orig:         };
// #CB i:6 orig:         return t;
// #CB END i: orig:       })();
// #DB START YYY START i:6 orig:       var me = (function() {
// #DB i:6 orig:         function e(e, t) {//#RF [object Object]
// #DB i:6 orig:           this.defaultDoc = e;
// #DB i:6 orig:           this.DOM = t;
// #DB i:6 orig:           var n = this.DOM.createHtmlDocument();
// #DB i:6 orig:           this.inertBodyElement = n.body;
// #DB i:6 orig:           if (this.inertBodyElement == null) {
// #DB i:6 orig:             var r = this.DOM.createElement('html', n);
// #DB i:6 orig:             this.inertBodyElement = this.DOM.createElement('body', n);
// #DB i:6 orig:             this.DOM.appendChild(r, this.inertBodyElement);
// #DB i:6 orig:             this.DOM.appendChild(n, r);
// #DB i:6 orig:           }
// #DB i:6 orig:           this.DOM.setInnerHTML(
// #DB i:6 orig:             this.inertBodyElement,
// #DB i:6 orig:             '<svg><g onload="this.parentNode.remove()"></g></svg>'
// #DB i:6 orig:           );
// #DB i:6 orig:           if (
// #DB i:6 orig:             !this.inertBodyElement.querySelector ||
// #DB i:6 orig:             this.inertBodyElement.querySelector('svg')
// #DB i:6 orig:           ) {
// #DB i:6 orig:             this.DOM.setInnerHTML(
// #DB i:6 orig:               this.inertBodyElement,
// #DB i:6 orig:               '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">'
// #DB i:6 orig:             );
// #DB i:6 orig:             this.getInertBodyElement =
// #DB i:6 orig:               this.inertBodyElement.querySelector &&
// #DB i:6 orig:               this.inertBodyElement.querySelector('svg img') &&
// #DB i:6 orig:               (function() {
// #DB i:6 orig:                 try {
// #DB i:6 orig:                   return !!window.DOMParser;
// #DB i:6 orig:                 } catch (e) {
// #DB i:6 orig:                   return false;
// #DB i:6 orig:                 }
// #DB i:6 orig:               })()
// #DB i:6 orig:                 ? this.getInertBodyElement_DOMParser
// #DB i:6 orig:                 : this.getInertBodyElement_InertDocument;
// #DB i:6 orig:           } else {
// #DB i:6 orig:             this.getInertBodyElement = this.getInertBodyElement_XHR;
// #DB i:6 orig:           }
// #DB i:6 orig:         }
// #DB i:6 orig:         e.prototype.getInertBodyElement_XHR = function(e) {//#RF [object Object]
// #DB i:6 orig:           e = '<body><remove></remove>' + e + '</body>';
// #DB i:6 orig:           try {
// #DB i:6 orig:             e = encodeURI(e);
// #DB i:6 orig:           } catch (e) {
// #DB i:6 orig:             return null;
// #DB i:6 orig:           }
// #DB i:6 orig:           var t = new XMLHttpRequest();
// #DB i:6 orig:           t.responseType = 'document';
// #DB i:6 orig:           t.open('GET', 'data:text/html;charset=utf-8,' + e, false);
// #DB i:6 orig:           t.send(null);
// #DB i:6 orig:           var n = t.response.body;
// #DB i:6 orig:           n.removeChild(n.firstChild);
// #DB i:6 orig:           return n;
// #DB i:6 orig:         };
// #DB i:6 orig:         e.prototype.getInertBodyElement_DOMParser = function(e) {//#RF [object Object]
// #DB i:6 orig:           e = '<body><remove></remove>' + e + '</body>';
// #DB i:6 orig:           try {
// #DB i:6 orig:             var t = new window.DOMParser().parseFromString(e, 'text/html').body;
// #DB i:6 orig:             t.removeChild(t.firstChild);
// #DB i:6 orig:             return t;
// #DB i:6 orig:           } catch (e) {
// #DB i:6 orig:             return null;
// #DB i:6 orig:           }
// #DB i:6 orig:         };
// #DB i:6 orig:         e.prototype.getInertBodyElement_InertDocument = function(e) {//#RF [object Object]
// #DB i:6 orig:           var t = this.DOM.createElement('template');
// #DB i:6 orig:           if ('content' in t) {
// #DB i:6 orig:             this.DOM.setInnerHTML(t, e);
// #DB i:6 orig:             return t;
// #DB i:6 orig:           } else {
// #DB i:6 orig:             this.DOM.setInnerHTML(this.inertBodyElement, e);
// #DB i:6 orig:             if (this.defaultDoc.documentMode) {
// #DB i:6 orig:               this.stripCustomNsAttrs(this.inertBodyElement);
// #DB i:6 orig:             }
// #DB i:6 orig:             return this.inertBodyElement;
// #DB i:6 orig:           }
// #DB i:6 orig:         };
// #DB i:6 orig:         e.prototype.stripCustomNsAttrs = function(e) {//#RF [object Object]
// #DB i:6 orig:           var t = this;
// #DB i:6 orig:           this.DOM.attributeMap(e).forEach(function(n, r) {
// #DB i:6 orig:             if (r === 'xmlns:ns1' || r.indexOf('ns1:') === 0) {
// #DB i:6 orig:               t.DOM.removeAttribute(e, r);
// #DB i:6 orig:             }
// #DB i:6 orig:           });
// #DB i:6 orig:           var n = 0;
// #DB i:6 orig:           for (var r = this.DOM.childNodesAsList(e); n < r.length; n++) {
// #DB i:6 orig:             var o = r[n];
// #DB i:6 orig:             if (this.DOM.isElementNode(o)) {
// #DB i:6 orig:               this.stripCustomNsAttrs(o);
// #DB i:6 orig:             }
// #DB i:6 orig:           }
// #DB i:6 orig:         };
// #DB i:6 orig:         return e;
// #DB END i: orig:       })();
// #DSL i: orig:       var be = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
// #DSL i: orig:       var _e = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
// #DSL i: orig:       var xe;
// #DSL i: orig:       var Te = Ce('area,br,col,hr,img,wbr');
      var ke = Ce('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr');// #QA1 i:10399 orig: 
      var Ie = Ce('rp,rt');// #QA1 i:10399 orig: 
// #DSL i: orig:       var Oe = Ee(Ie, ke);
// #DSL i: orig:       var Ne = Ee(
// #DSL i: orig:         Te,
// #DSL i: orig:         Ee(
// #DSL i: orig:           ke,
// #DSL i: orig:           Ce(
// #DSL i: orig:             'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
// #DSL i: orig:           )
// #DSL i: orig:         ),
// #DSL i: orig:         Ee(
// #DSL i: orig:           Ie,
// #DSL i: orig:           Ce(
// #DSL i: orig:             'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
// #DSL i: orig:           )
// #DSL i: orig:         ),
// #DSL i: orig:         Oe
// #DSL i: orig:       );
      var Se = Ce(// #QA1 i:10399 orig: 
        'background,cite,href,itemtype,longdesc,poster,src,xlink:href'// #QA1 i:10399 orig: 
      );// #QA1 i:10399 orig: 
      var Ae = Ce('srcset');// #QA1 i:10399 orig: 
// #DSL i: orig:       var Me = Ee(
// #DSL i: orig:         Se,
// #DSL i: orig:         Ae,
// #DSL i: orig:         Ce(
// #DSL i: orig:           'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
// #DSL i: orig:         )
// #DSL i: orig:       );
// #DB START YYY START i:6 orig:       var Pe = (function() {
// #DB i:6 orig:         function e() {//#RF [object Object]
// #DB i:6 orig:           this.sanitizedSomething = false;
// #DB i:6 orig:           this.buf = [];
// #DB i:6 orig:           this.DOM = _();
// #DB i:6 orig:         }
// #DB i:6 orig:         e.prototype.sanitizeChildren = function(e) {//#RF [object Object]
// #DB i:6 orig:           for (var t = this.DOM.firstChild(e); t; ) {
// #DB i:6 orig:             if (this.DOM.isElementNode(t)) {
// #DB i:6 orig:               this.startElement(t);
// #DB i:6 orig:             } else if (this.DOM.isTextNode(t)) {
// #DB i:6 orig:               this.chars(this.DOM.nodeValue(t));
// #DB i:6 orig:             } else {
// #DB i:6 orig:               this.sanitizedSomething = true;
// #DB i:6 orig:             }
// #DB i:6 orig:             if (this.DOM.firstChild(t)) {
// #DB i:6 orig:               t = this.DOM.firstChild(t);
// #DB i:6 orig:             } else {
// #DB i:6 orig:               while (t) {
// #DB i:6 orig:                 if (this.DOM.isElementNode(t)) {
// #DB i:6 orig:                   this.endElement(t);
// #DB i:6 orig:                 }
// #DB i:6 orig:                 var n = this.checkClobberedElement(t, this.DOM.nextSibling(t));
// #DB i:6 orig:                 if (n) {
// #DB i:6 orig:                   t = n;
// #DB i:6 orig:                   break;
// #DB i:6 orig:                 }
// #DB i:6 orig:                 t = this.checkClobberedElement(t, this.DOM.parentElement(t));
// #DB i:6 orig:               }
// #DB i:6 orig:             }
// #DB i:6 orig:           }
// #DB i:6 orig:           return this.buf.join('');
// #DB i:6 orig:         };
// #DB i:6 orig:         e.prototype.startElement = function(e) {//#RF [object Object]
// #DB i:6 orig:           var t = this;
// #DB i:6 orig:           var n = this.DOM.nodeName(e).toLowerCase();
// #DB i:6 orig:           if (Ne.hasOwnProperty(n)) {
// #DB i:6 orig:             this.buf.push('<');
// #DB i:6 orig:             this.buf.push(n);
// #DB i:6 orig:             this.DOM.attributeMap(e).forEach(function(e, n) {
// #DB i:6 orig:               var r;
// #DB i:6 orig:               var o = n.toLowerCase();
// #DB i:6 orig:               if (Me.hasOwnProperty(o)) {
// #DB i:6 orig:                 if (Se[o]) {
// #DB i:6 orig:                   e = we(e);
// #DB i:6 orig:                 }
// #DB i:6 orig:                 if (Ae[o]) {
// #DB i:6 orig:                   r = e;
// #DB i:6 orig:                   e = (r = String(r))
// #DB i:6 orig:                     .split(',')
// #DB i:6 orig:                     .map(function(e) {
// #DB i:6 orig:                       return we(e.trim());
// #DB i:6 orig:                     })
// #DB i:6 orig:                     .join(', ');
// #DB i:6 orig:                 }
// #DB i:6 orig:                 t.buf.push(' ');
// #DB i:6 orig:                 t.buf.push(n);
// #DB i:6 orig:                 t.buf.push('="');
// #DB i:6 orig:                 t.buf.push(je(e));
// #DB i:6 orig:                 t.buf.push('"');
// #DB i:6 orig:               } else {
// #DB i:6 orig:                 t.sanitizedSomething = true;
// #DB i:6 orig:               }
// #DB i:6 orig:             });
// #DB i:6 orig:             this.buf.push('>');
// #DB i:6 orig:           } else {
// #DB i:6 orig:             this.sanitizedSomething = true;
// #DB i:6 orig:           }
// #DB i:6 orig:         };
// #DB i:6 orig:         e.prototype.endElement = function(e) {//#RF [object Object]
// #DB i:6 orig:           var t = this.DOM.nodeName(e).toLowerCase();
// #DB i:6 orig:           if (Ne.hasOwnProperty(t) && !Te.hasOwnProperty(t)) {
// #DB i:6 orig:             this.buf.push('</');
// #DB i:6 orig:             this.buf.push(t);
// #DB i:6 orig:             this.buf.push('>');
// #DB i:6 orig:           }
// #DB i:6 orig:         };
// #DB i:6 orig:         e.prototype.chars = function(e) {//#RF [object Object]
// #DB i:6 orig:           this.buf.push(je(e));
// #DB i:6 orig:         };
// #DB i:6 orig:         e.prototype.checkClobberedElement = function(e, t) {//#RF [object Object]
// #DB i:6 orig:           if (t && this.DOM.contains(e, t)) {
// #DB i:6 orig:             throw new Error(
// #DB i:6 orig:               'Failed to sanitize html because the element is clobbered: ' +
// #DB i:6 orig:                 this.DOM.getOuterHTML(e)
// #DB i:6 orig:             );
// #DB i:6 orig:           }
// #DB i:6 orig:           return t;
// #DB i:6 orig:         };
// #DB i:6 orig:         return e;
// #DB END i: orig:       })();
// #DSL i: orig:       var De = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
// #DSL i: orig:       var Re = /([^\#-~ |!])/g;
// #DSL i: orig:       var Ve = new RegExp(
// #DSL i: orig:         '^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$',
// #DSL i: orig:         'g'
// #DSL i: orig:       );
// #DSL i: orig:       var He = /^url\(([^)]+)\)$/;
      var Le = function() {};// #QA4 i:10399 orig: 
      var Fe =function(n){};// #CB2 START i:10399 orig: 6
// #CB i:6 orig:         function t(t) {
// #CB i:6 orig:           var n = e.call(this) || this;
// #CB i:6 orig:           n._doc = t;
// #CB i:6 orig:           return n;
// #CB i:6 orig:         }
// #CB i:6 orig:         var e = Le;
// #CB i:6 orig:         Object(c.b)(t, e);
// #CB i:6 orig:         t.prototype.sanitize = function(e, t) {//#RF [object Object]
// #CB i:6 orig:           if (t == null) {
// #CB i:6 orig:             return null;
// #CB i:6 orig:           }
// #CB i:6 orig:           switch (e) {
// #CB i:6 orig:             case r.y.NONE:
// #CB i:6 orig:               return t;
// #CB i:6 orig:             case r.y.HTML:
// #CB i:6 orig:               if (t instanceof ze) {
// #CB i:6 orig:                 return t.changingThisBreaksApplicationSecurity;
// #CB i:6 orig:               } else {
// #CB i:6 orig:                 this.checkNotSafeValue(t, 'HTML');
// #CB i:6 orig:                 return (function(e, t) {
// #CB i:6 orig:                   var n = _();
// #CB i:6 orig:                   var o = null;
// #CB i:6 orig:                   try {
// #CB i:6 orig:                     xe = xe || new me(e, n);
// #CB i:6 orig:                     var i = t ? String(t) : '';
// #CB i:6 orig:                     o = xe.getInertBodyElement(i);
// #CB i:6 orig:                     var s = 5;
// #CB i:6 orig:                     var u = i;
// #CB i:6 orig:                     do {
// #CB i:6 orig:                       if (s === 0) {
// #CB i:6 orig:                         throw new Error(
// #CB i:6 orig:                           'Failed to sanitize html because the input is unstable'
// #CB i:6 orig:                         );
// #CB i:6 orig:                       }
// #CB i:6 orig:                       s--;
// #CB i:6 orig:                       i = u;
// #CB i:6 orig:                       u = n.getInnerHTML(o);
// #CB i:6 orig:                       o = xe.getInertBodyElement(i);
// #CB i:6 orig:                     } while (i !== u);
// #CB i:6 orig:                     var a = new Pe();
// #CB i:6 orig:                     var c = a.sanitizeChildren(n.getTemplateContent(o) || o);
// #CB i:6 orig:                     if (Object(r.G)() && a.sanitizedSomething) {
// #CB i:6 orig:                       n.log(
// #CB i:6 orig:                         'WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss).'
// #CB i:6 orig:                       );
// #CB i:6 orig:                     }
// #CB i:6 orig:                     return c;
// #CB i:6 orig:                   } finally {
// #CB i:6 orig:                     if (o) {
// #CB i:6 orig:                       var l = n.getTemplateContent(o) || o;
// #CB i:6 orig:                       var d = 0;
// #CB i:6 orig:                       for (var f = n.childNodesAsList(l); d < f.length; d++) {
// #CB i:6 orig:                         n.removeChild(l, f[d]);
// #CB i:6 orig:                       }
// #CB i:6 orig:                     }
// #CB i:6 orig:                   }
// #CB i:6 orig:                 })(this._doc, String(t));
// #CB i:6 orig:               }
// #CB i:6 orig:             case r.y.STYLE:
// #CB i:6 orig:               if (t instanceof Ue) {
// #CB i:6 orig:                 return t.changingThisBreaksApplicationSecurity;
// #CB i:6 orig:               } else {
// #CB i:6 orig:                 this.checkNotSafeValue(t, 'Style');
// #CB i:6 orig:                 return (function(e) {
// #CB i:6 orig:                   if (!(e = String(e).trim())) {
// #CB i:6 orig:                     return '';
// #CB i:6 orig:                   }
// #CB i:6 orig:                   var t = e.match(He);
// #CB i:6 orig:                   if (
// #CB i:6 orig:                     (t && we(t[1]) === t[1]) ||
// #CB i:6 orig:                     (e.match(Ve) &&
// #CB i:6 orig:                       (function(e) {
// #CB i:6 orig:                         var t = true;
// #CB i:6 orig:                         var n = true;
// #CB i:6 orig:                         for (var r = 0; r < e.length; r++) {
// #CB i:6 orig:                           var o = e.charAt(r);
// #CB i:6 orig:                           if (o === "'" && n) {
// #CB i:6 orig:                             t = !t;
// #CB i:6 orig:                           } else if (o === '"' && t) {
// #CB i:6 orig:                             n = !n;
// #CB i:6 orig:                           }
// #CB i:6 orig:                         }
// #CB i:6 orig:                         return t && n;
// #CB i:6 orig:                       })(e))
// #CB i:6 orig:                   ) {
// #CB i:6 orig:                     return e;
// #CB i:6 orig:                   } else {
// #CB i:6 orig:                     if (Object(r.G)()) {
// #CB i:6 orig:                       _().log(
// #CB i:6 orig:                         'WARNING: sanitizing unsafe style value ' +
// #CB i:6 orig:                           e +
// #CB i:6 orig:                           ' (see http://g.co/ng/security#xss).'
// #CB i:6 orig:                       );
// #CB i:6 orig:                     }
// #CB i:6 orig:                     return 'unsafe';
// #CB i:6 orig:                   }
// #CB i:6 orig:                 })(t);
// #CB i:6 orig:               }
// #CB i:6 orig:             case r.y.SCRIPT:
// #CB i:6 orig:               if (t instanceof Ze) {
// #CB i:6 orig:                 return t.changingThisBreaksApplicationSecurity;
// #CB i:6 orig:               }
// #CB i:6 orig:               this.checkNotSafeValue(t, 'Script');
// #CB i:6 orig:               throw new Error('unsafe value used in a script context');
// #CB i:6 orig:             case r.y.URL:
// #CB i:6 orig:               if (t instanceof Qe || t instanceof We) {
// #CB i:6 orig:                 return t.changingThisBreaksApplicationSecurity;
// #CB i:6 orig:               } else {
// #CB i:6 orig:                 this.checkNotSafeValue(t, 'URL');
// #CB i:6 orig:                 return we(String(t));
// #CB i:6 orig:               }
// #CB i:6 orig:             case r.y.RESOURCE_URL:
// #CB i:6 orig:               if (t instanceof Qe) {
// #CB i:6 orig:                 return t.changingThisBreaksApplicationSecurity;
// #CB i:6 orig:               }
// #CB i:6 orig:               this.checkNotSafeValue(t, 'ResourceURL');
// #CB i:6 orig:               throw new Error(
// #CB i:6 orig:                 'unsafe value used in a resource URL context (see http://g.co/ng/security#xss)'
// #CB i:6 orig:               );
// #CB i:6 orig:             default:
// #CB i:6 orig:               throw new Error(
// #CB i:6 orig:                 'Unexpected SecurityContext ' +
// #CB i:6 orig:                   e +
// #CB i:6 orig:                   ' (see http://g.co/ng/security#xss)'
// #CB i:6 orig:               );
// #CB i:6 orig:           }
// #CB i:6 orig:         };
// #CB i:6 orig:         t.prototype.checkNotSafeValue = function(e, t) {//#RF [object Object]
// #CB i:6 orig:           if (e instanceof Be) {
// #CB i:6 orig:             throw new Error(
// #CB i:6 orig:               'Required a safe ' +
// #CB i:6 orig:                 t +
// #CB i:6 orig:                 ', got a ' +
// #CB i:6 orig:                 e.getTypeName() +
// #CB i:6 orig:                 ' (see http://g.co/ng/security#xss)'
// #CB i:6 orig:             );
// #CB i:6 orig:           }
// #CB i:6 orig:         };
// #CB i:6 orig:         t.prototype.bypassSecurityTrustHtml = function(e) {//#RF [object Object]
// #CB i:6 orig:           return new ze(e);
// #CB i:6 orig:         };
// #CB i:6 orig:         t.prototype.bypassSecurityTrustStyle = function(e) {//#RF [object Object]
// #CB i:6 orig:           return new Ue(e);
// #CB i:6 orig:         };
// #CB i:6 orig:         t.prototype.bypassSecurityTrustScript = function(e) {//#RF [object Object]
// #CB i:6 orig:           return new Ze(e);
// #CB i:6 orig:         };
// #CB i:6 orig:         t.prototype.bypassSecurityTrustUrl = function(e) {//#RF [object Object]
// #CB i:6 orig:           return new We(e);
// #CB i:6 orig:         };
// #CB i:6 orig:         t.prototype.bypassSecurityTrustResourceUrl = function(e) {//#RF [object Object]
// #CB i:6 orig:           return new Qe(e);
// #CB i:6 orig:         };
// #CB i:6 orig:         return t;
// #CB END i: orig:       })();
// #DB START YYY START i:6 orig:       var Be = (function() {
// #DB i:6 orig:         function e(e) {//#RF [object Object]
// #DB i:6 orig:           this.changingThisBreaksApplicationSecurity = e;
// #DB i:6 orig:         }
// #DB i:6 orig:         e.prototype.toString = function() {//#RF [object Object]
// #DB i:6 orig:           return (
// #DB i:6 orig:             'SafeValue must use [property]=binding: ' +
// #DB i:6 orig:             this.changingThisBreaksApplicationSecurity +
// #DB i:6 orig:             ' (see http://g.co/ng/security#xss)'
// #DB i:6 orig:           );
// #DB i:6 orig:         };
// #DB i:6 orig:         return e;
// #DB END i: orig:       })();
// #DB START YYY START i:6 orig:       var ze = (function() {
// #DB i:6 orig:         function t() {//#RF [object Object]
// #DB i:6 orig:           return (e !== null && e.apply(this, arguments)) || this;
// #DB i:6 orig:         }
// #DB i:6 orig:         var e = Be;
// #DB i:6 orig:         Object(c.b)(t, e);
// #DB i:6 orig:         t.prototype.getTypeName = function() {//#RF [object Object]
// #DB i:6 orig:           return 'HTML';
// #DB i:6 orig:         };
// #DB i:6 orig:         return t;
// #DB END i: orig:       })();
// #DB START YYY START i:6 orig:       var Ue = (function() {
// #DB i:6 orig:         function t() {//#RF [object Object]
// #DB i:6 orig:           return (e !== null && e.apply(this, arguments)) || this;
// #DB i:6 orig:         }
// #DB i:6 orig:         var e = Be;
// #DB i:6 orig:         Object(c.b)(t, e);
// #DB i:6 orig:         t.prototype.getTypeName = function() {//#RF [object Object]
// #DB i:6 orig:           return 'Style';
// #DB i:6 orig:         };
// #DB i:6 orig:         return t;
// #DB END i: orig:       })();
// #DB START YYY START i:6 orig:       var Ze = (function() {
// #DB i:6 orig:         function t() {//#RF [object Object]
// #DB i:6 orig:           return (e !== null && e.apply(this, arguments)) || this;
// #DB i:6 orig:         }
// #DB i:6 orig:         var e = Be;
// #DB i:6 orig:         Object(c.b)(t, e);
// #DB i:6 orig:         t.prototype.getTypeName = function() {//#RF [object Object]
// #DB i:6 orig:           return 'Script';
// #DB i:6 orig:         };
// #DB i:6 orig:         return t;
// #DB END i: orig:       })();
// #DB START YYY START i:6 orig:       var We = (function() {
// #DB i:6 orig:         function t() {//#RF [object Object]
// #DB i:6 orig:           return (e !== null && e.apply(this, arguments)) || this;
// #DB i:6 orig:         }
// #DB i:6 orig:         var e = Be;
// #DB i:6 orig:         Object(c.b)(t, e);
// #DB i:6 orig:         t.prototype.getTypeName = function() {//#RF [object Object]
// #DB i:6 orig:           return 'URL';
// #DB i:6 orig:         };
// #DB i:6 orig:         return t;
// #DB END i: orig:       })();
// #DB START YYY START i:6 orig:       var Qe = (function() {
// #DB i:6 orig:         function t() {//#RF [object Object]
// #DB i:6 orig:           return (e !== null && e.apply(this, arguments)) || this;
// #DB i:6 orig:         }
// #DB i:6 orig:         var e = Be;
// #DB i:6 orig:         Object(c.b)(t, e);
// #DB i:6 orig:         t.prototype.getTypeName = function() {//#RF [object Object]
// #DB i:6 orig:           return 'ResourceURL';
// #DB i:6 orig:         };
// #DB i:6 orig:         return t;
// #DB END i: orig:       })();
      var Ge = [// #QA1 i:10399 orig: 
        { provide: r.t, useValue: 'browser' },// #QA1 i:10399 orig: 
        {// #QA1 i:10399 orig: 
          provide: r.u,// #QA1 i:10399 orig: 
          useValue: function() {// #QA1 i:10399 orig: 
            k.makeCurrent();// #QA1 i:10399 orig: 
            D.init();// #QA1 i:10399 orig: 
          },// #QA1 i:10399 orig: 
          multi: true,// #QA1 i:10399 orig: 
        },// #QA1 i:10399 orig: 
        { provide: l, useClass: S, deps: [O] },// #QA1 i:10399 orig: 
        {// #QA1 i:10399 orig: 
          provide: O,// #QA1 i:10399 orig: 
          useFactory: function() {// #QA1 i:10399 orig: 
            return document;// #QA1 i:10399 orig: 
          },// #QA1 i:10399 orig: 
          deps: [],// #QA1 i:10399 orig: 
        },// #QA1 i:10399 orig: 
      ];// #QA1 i:10399 orig: 
      var qe = Object(r.D)(r.H, 'browser', Ge);// #QA1 i:10399 orig: 
      var Ke =function(n){};// #CB2 START i:10399 orig: 6
// #CB i:6 orig:         function e(e) {
// #CB i:6 orig:           if (e) {
// #CB i:6 orig:             throw new Error(
// #CB i:6 orig:               'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
// #CB i:6 orig:             );
// #CB i:6 orig:           }
// #CB i:6 orig:         }
// #CB i:6 orig:         e.withServerTransition = function(t) {//#RF [object Object]
// #CB i:6 orig:           return {
// #CB i:6 orig:             ngModule: e,
// #CB i:6 orig:             providers: [
// #CB i:6 orig:               { provide: r.a, useValue: t.appId },
// #CB i:6 orig:               { provide: M, useExisting: r.a },
// #CB i:6 orig:               P,
// #CB i:6 orig:             ],
// #CB i:6 orig:           };
// #CB i:6 orig:         };
// #CB i:6 orig:         return e;
// #CB END i: orig:       })();
      if (typeof window != 'undefined') {// #QA1 i:10399 orig: 
        window;// #QA1 i:10399 orig: 
      }// #QA1 i:10399 orig: 
      var Je = r.M(o, [i], function(e) {// #QA1 i:10399 orig: 
        return r.V([// #QA1 i:10399 orig: 
          r.W(512, r.g, r.J, [[8, [a]], [3, r.g], r.p]),// #QA1 i:10399 orig: 
          r.W(5120, r.o, r.Z, [[3, r.o]]),// #QA1 i:10399 orig: 
          r.W(4608, v, y, [r.o, [2, h]]),// #QA1 i:10399 orig: 
          r.W(4608, r.f, r.f, []),// #QA1 i:10399 orig: 
          r.W(5120, r.a, r.R, []),// #QA1 i:10399 orig: 
          r.W(5120, r.m, r.X, []),// #QA1 i:10399 orig: 
          r.W(5120, r.n, r.Y, []),// #QA1 i:10399 orig: 
          r.W(4608, Le, Fe, [m]),// #QA1 i:10399 orig: 
          r.W(6144, r.x, null, [Le]),// #QA1 i:10399 orig: 
          r.W(4608, fe, pe, []),// #QA1 i:10399 orig: 
          r.W(// #QA1 i:10399 orig: 
            5120,// #QA1 i:10399 orig: 
            L,// #QA1 i:10399 orig: 
            function(e, t, n, r, o) {// #QA1 i:10399 orig: 
              return [new le(e, t), new ge(n), new he(r, o)];// #QA1 i:10399 orig: 
            },// #QA1 i:10399 orig: 
            [m, r.r, m, m, fe]// #QA1 i:10399 orig: 
          ),// #QA1 i:10399 orig: 
          r.W(4608, F, F, [L, r.r]),// #QA1 i:10399 orig: 
          r.W(135680, U, U, [m]),// #QA1 i:10399 orig: 
          r.W(4608, K, K, [F, U]),// #QA1 i:10399 orig: 
          r.W(6144, r.v, null, [K]),// #QA1 i:10399 orig: 
          r.W(6144, z, null, [U]),// #QA1 i:10399 orig: 
          r.W(4608, r.z, r.z, [r.r]),// #QA1 i:10399 orig: 
          r.W(4608, A, A, [m]),// #QA1 i:10399 orig: 
          r.W(4608, R, R, [m]),// #QA1 i:10399 orig: 
          r.W(512, g, g, []),// #QA1 i:10399 orig: 
          r.W(1024, r.h, Ye, []),// #QA1 i:10399 orig: 
          r.W(// #QA1 i:10399 orig: 
            1024,// #QA1 i:10399 orig: 
            r.b,// #QA1 i:10399 orig: 
            function(e) {// #QA1 i:10399 orig: 
              return [// #QA1 i:10399 orig: 
                ((t = e),// #QA1 i:10399 orig: 
// #DSL i: orig:                 j('probe', H),
                j(// #QA1 i:10399 orig: 
                  'coreTokens',// #QA1 i:10399 orig: 
                  Object(c.a)(// #QA1 i:10399 orig: 
                    {},// #QA1 i:10399 orig: 
                    V,// #QA1 i:10399 orig: 
                    (t || []).reduce(function(e, t) {// #KFB01 START i:10399 orig: 20//#RF [object Object]
// #KB1 i:20 orig:                       e[t.name] = t.token;
// #KB1 i:20 orig:                       return e;
                    }, {})// #KB1 END i:10399 orig: 
                  )// #QA1 i:10399 orig: 
                ),// #QA1 i:10399 orig: 
                function() {// #QA1 i:10399 orig: 
                  return H;// #QA1 i:10399 orig: 
                }),// #QA1 i:10399 orig: 
              ];// #QA1 i:10399 orig: 
              var t;// #QA1 i:10399 orig: 
            },// #QA1 i:10399 orig: 
            [[2, r.q]]// #QA1 i:10399 orig: 
          ),// #QA1 i:10399 orig: 
          r.W(512, r.c, r.c, [[2, r.b]]),// #QA1 i:10399 orig: 
          r.W(131584, r.e, r.e, [r.r, r.K, r.l, r.h, r.g, r.c]),// #QA1 i:10399 orig: 
          r.W(512, r.d, r.d, [r.e]),// #QA1 i:10399 orig: 
          r.W(512, Ke, Ke, [[3, Ke]]),// #QA1 i:10399 orig: 
          r.W(512, o, o, []),// #QA1 i:10399 orig: 
        ]);// #QA1 i:10399 orig: 
      });// #QA1 i:10399 orig: 
      Object(r.E)();// #QA1 i:10399 orig: 
      qe()// #QA1 i:10399 orig: 
        .bootstrapModuleFactory(Je)// #QA1 i:10399 orig: 
// #DB3 START i:8 orig:         .catch(function(e) {
// #DB i:8 orig:           return console.log(e);
// #DB END i: orig:         });
    },// #QA1 i:10399 orig: 
  },// #QA1 i:10399 orig: 
  [0]// #QA1 i:10399 orig: 
);// #QA1 i:10399 orig: 
