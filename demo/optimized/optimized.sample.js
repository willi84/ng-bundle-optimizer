Ö = function() {};
var r = e = Ö;

function gn(e, t, n) {
    return n.renderParent ? e.nodes[n.renderParent.nodeIndex].renderElement : t
}

function Nn(e, t, n) {
    var o = n.element;
    e.parent ? (r = document.createElement(o.name), gn(e, t, n).appendChild(r)) : r = document.querySelector("app-root");
    for (var a = 0; a < o.attrs.length; a++) {
        var c = o.attrs[a];
        r.setAttribute(c[0], c[1])
    }
    return r
}

function zr(n, r, o) {
    return {
        def: o,
        parent: n,
        parentNodeDef: r,
        nodes: i
    }
}

function Zr(e) {
    e.parent && (t = e.parent.nodes[e.parentNodeDef.parent.nodeIndex].renderElement);
    for (var n = e.def, r = e.nodes, o = 0; o < n.nodes.length; o++) {
        var i = n.nodes[o];
        switch (201347067 & i.flags) {
            case 1:
                s = {
                    renderElement: Nn(e, t, i),
                    componentView: zr(e, i.element.componentProvider, i.element.componentView())
                };
                break;
            case 2:
                s = gn(e, t, i).appendChild(document.createTextNode(i.text.prefix))
        }
        r[o] = s
    }
    Zr(e.nodes[0].componentView)
}
On = function(o, i, s, l) {
    return {
        flags: 33554433,
        childCount: o,
        element: {
            name: i,
            attrs: s,
            componentView: l
        }
    }
}, Pr = function(n) {
    return {
        flags: 2,
        text: {
            prefix: n[0]
        }
    }
}, jr = function(t) {
    for (var c = null, h = 0; h < t.length; h++) {
        var v = t[h];
        if (v.nodeIndex = h, v.parent = c, v.renderParent = l, 20224 & v.flags && (c.element.componentProvider = v), 0 < v.childCount) l = c = v;
        else
            for (; c && h === c.nodeIndex + c.childCount;) l = (c = c.parent) && Ö(c) ? c.renderParent : c
    }
    return {
        nodes: t
    }
};
var i = Ö,
    l = "__paramaters__";
re = function(e) {
    var t = this;
    this.donePromise = new Promise(function(e, n) {
        t.resolve = e
    })
};
var Ne = function(e) {
        this._inner = Zone.current, (t = this)._inner = t._inner.fork({
            onHandleError: function() {}
        })
    },
    Ye = void(e.prototype.bootstrapModuleFactory = function(e) {
        return (new Ne)._inner.run(function() {
            (s = new re).resolve(), s.donePromise.then(function() {
                Zr(zr(null, null, Ö.BAR()))
            })
        })
    });
u = function() {
    return jr([Pr(["\n"]), On(6, "div", [
        ["style", "text-align:center"]
    ], Ö), On(1, "h1", [], Ö), Pr(["\n    Welcome to ", "!\n  "]), Pr(["\n  "]), On(0, "img", [
        ["alt", "Angular Logo"],
        ["src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="],
        ["width", "300"]
    ], Ö), On(1, "h2", [], Ö), Pr(["Here are some links to help you start: "]), On(22, "ul", [], Ö), On(5, "li", [], Ö), On(2, "h2", [], Ö), On(1, "a", [
        ["href", "https://angular.io/tutorial"],
        ["rel", "noopener"],
        ["target", "_blank"]
    ], Ö), Pr(["Tour of Heroes"]), On(5, "li", [], Ö), On(2, "h2", [], Ö), On(1, "a", [
        ["href", "https://github.com/angular/angular-cli/wiki"],
        ["rel", "noopener"],
        ["target", "_blank"]
    ], Ö), Pr(["CLI Documentation"]), On(5, "li", [], Ö), On(2, "h2", [], Ö), On(1, "a", [
        ["href", "https://blog.angular.io/"],
        ["rel", "noopener"],
        ["target", "_blank"]
    ], Ö), Pr(["Angular blog"])])
}, e.BAR = function(e) {
    return jr([On(1, "app-root", [], u), {
        flags: 49152
    }])
}, e, (new Ö).bootstrapModuleFactory(Ö);