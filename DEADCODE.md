# DEADCODE

```
if (line.match(/.*[^\?|\:|\{|\(|\[]{1}$/)) {
    //NOT: line starts with var
        if (line.match(/^\s*var\s[^\s]*\s*\=\s*.*$/)) {
            // AO.keepLine('#1', STATUS.ERROR);
        } else if (line.match(/^\s*return\s*[^\;]*\;$/)) {
            // TODO  line starts with . (TODO)
            // TODO if (line.match(/^\s[^\.]{1}.*$/)) {
            // TODO if (line.match(/^.*[^\;]{1}\s*$/)) {
            // detect return
            // AO.keepLine('#A2', STATUS.POTENTIAL);
        } else {
            // AO.keepLine('#00x', STATUS.POTENTIAL);
        }
    // }
    } else

```

```
var M = (function() {// #QA6 i:9432 orig: 
          function e() {}// #QA4 i:9432 orig: 
          e.prototype.get = function(e, t) {// #QA1 i:9432 orig: 
            // if (t === void 0) {// #QA1 i:9432 orig: 
            //   t = A;// #QA1 i:9432 orig: 
            // }// #QA1 i:9432 orig: 
            // if (t === A) {// #QA1 i:9432 orig: 
            //   throw new Error(// #QA1 i:9432 orig: 
            //     'NullInjectorError: No provider for ' + I(e) + '!'// #QA1 i:9432 orig: 
            //   );// #QA1 i:9432 orig: 
            // }// #QA1 i:9432 orig: 
            return t;// #QA1 i:9432 orig: 
          };// #QA1 i:9432 orig: 
          return e;// #QA1 i:9432 orig: 
        })();//

var xe =function(n){};

var xe = function() {}();
```

```
if(DOB.changeBlock === true){
        // AO.changeBlock('changeBlock', '#CB', false);
        if(!AO.isStartActiveBlock()){
            AO.deleteLine('#CB');
        } else {
            AO.deleteLine('#CB END', {'changeBlock': false });
        }
    } else if(DOB.deleteBlock === true){
        if(!AO.isStartActiveBlock()){
            AO.deleteLine('#DB');
        } else {
            if(DOB.blockStart !== ''){

                if(LOB.has(IF, DOB.blockStart)){
                    AO.deleteLine('#DBZ', {'deleteBlock': LOB.has(ELSE) === true,  'blockStart': '' })
                    
                } else {

                    AO.deleteLine('#DBX END', {'deleteBlock': false, 'blockStart': '' });
                }
            } else {
                AO.deleteLine('#DB END', {'deleteBlock': false, 'blockStart': '' });

            }
        }
    } else if(DOB.keepFnBlock === true){
        // TODO hier
        AO.changeBlock('keepFnBlock', 'KB', true);
    } else  {
        AO.deleteLine("#DB START", { 'deleteBlock': true});
    }
    // create an Array of deletable stuff
    const deletableEntry = sRemoveLines[DOB.indexDeletableLine];
    if (deletableEntry) {

        // deactivated
        DOB.indexDeletableLine++;
        if (sRemoveLines[DOB.indexDeletableLine]) {
            DOB.updateNext(sRemoveLines[DOB.indexDeletableLine]);
        }
    }
```

```
// #DSL i: orig:       var r = n('TToO');
// #DSL i: orig:       var o = n('YaPU');
// #DSL i: orig:       var i = n('OVmG');
// #DSL i: orig:       var s = n('VwZZ');
```

```

// fake argument
function Nn(e, t, n) {
    var r;
    var o = n.element;
    var i = e.root.selectorOrNode;
    var s = e.renderer;
    if (e.parent || !i) {console.log('hier');
    r = o.name ? s.createElement(o.name, o.ns) : s.createComment('');console.log(r);
    var u = gn(e, t, n);
    if (u) {
        s.appendChild(u, r);
    }
    } else {
    r = s.selectRootElement(i);
    }
    if (o.attrs) {
    for (var a = 0; a < o.attrs.length; a++) {
        var c = o.attrs[a];
        s.setAttribute(r, c[1], c[2], c[0]);
    }
    }
    return r;
}
```
