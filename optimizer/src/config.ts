

    
export let MAX_DELETE= 11080;// 4690 //#hier
export let undeletablefn = [950,  1772,
    // 2746, // create nodes
    4668,
     4678, 4682, 4714, 4709, 4719, 4724, 4730,  4735, 4741, 
     4746, 4751, 4756, 4762, 4767, // TODO wegen ternary
    7865, // end of function wrong detected
    7881,  // TODO: important: contains content
    // 8041,
    9403, 
     5317, 
    9361, // INFO: create element,
     2746,
    //  4605, 4662, 5317, 6412, 7392, 7419, 8134,
    //  7881,
    
];
export const checkFn = [
    
    // hard to delete or single line fn or fn dependency
    2257, 2275, 2122, 1648, 3694, 4030, 8129,
    // 2278,
    // manuell vs. automatic ???
    // 801, 
     8256,
]
export const undeletable2 = []
// TODO: 1062: what it is?
// detect where empty fn is used
export const keepFnName = [
    // 109, 
    9271,
    2928,
    2758,
    // 962,
     1179,
    4266,
    // 3624,
     4976,
    //  4099,  // TODO: next is undeletable
    // next
    // 4277,
    4834, 
    8135, 
    // 8159,
    //   8350, 
    //  502,
     5105,
    //  7003,
     9403,
    
    // 601,
    // 10397, // TODO: dot of  fn needs to be keeped

    // optimized

    // 104,
    
];
// undeletable keep lines
export const undeletable1 = [
     5317, 8134,
    // 964, 973, 
    [2166,2169], [2180, 2184], 
    [2186,2187],
    //  [2201, 2205],
     [2209,2211], 2214,2218,  2220, // optimized Ln(e, t)
    3029, 3027, [2978,2980], 2983, 
[2973, 2976], [2969,2971],3026, 3028, [2959, 2969], 2969,
   

// 1311,
//  1729, 
// 1753, //  TODO: possible somewhere else to delete properties
    2013, // otherwise not shown: append to dom
// 3004, // create instance
1781, // render Element
9365, 9372,
1948, 2024,
    // 2926, 
    2961, 
    // 3022,
     3027, 
    
    4181,
     2010, 2011, 2933, 2974, 2975, 2989, 3029,
    // 6474,
    2971,  2973,
    [2960,2964], 2976,[2978-2983],[2988,2990],
    // 2557, 2559,// fn call && Ft(e, 512, r)
    2159, 2218, 
    2923,2925,
    1611, 
    // 1614, 
    // [2418, 2422],
    // [2930, 2933],
    2933,

    // TODO: 2709
    2709, 
    
    2720, 2727,   2741, 2744,
     2764,   [2769,2772], 2775, 2776, 2796, 2817, 2819, 
    // TODO: 2844 wird nicht erkannt
   2830, 2831, 2833, [2835, 2837], [2842, 2846],   2852, 2861, 2862,
   // TODO: 3596 
//    3596,
    
    // 3601, 
    // 3667,
    4658,
    // [4667,4684], //TODO wegen ? 
    9375,
    9348, //DefaultRenderer,
    9365, // createElement
    // 1773, 
    // 1774, 1781, [1785,1787],
    2989,
    // 2299,

    // TODO: warum nicht löschbar
    //  2312, 2319, 
    //  2336,
    // 2326, 
    //  2337,  //TODO: händisch ausprobiert
    2938, 2939, 2940, 2942, 2945, 2947, 2948, 2952, // händisch ausprobiert
    
    // done
    [2135, 2137], [2144,2145], [2147, 2150],  2159,  2162,
    2120,
    1756,[1758, 1762], [1764, 1765], [1769, 1770],
    // 1483,
    1439,  [1445,1447], [1449,1450], 1456, [1463, 1464], 1466,
     1479,
    // 1884,
     1945,1948, 1949, [1964, 1967],
     1974, 1982, 1986, 1988, 1989, 1992, 1997, 2002, //todo
    2024, [2019, 2022], [2015, 2017], 2013, [2006, 2011], // TODO some stuff from other side deleted
    3706, 3710, 3713, 3715,
     4308,4314,[4310, 4312], 4316, [4323,4324],
    // [4349, 4350],
    //  4358, 4360, 
    // 4377,
    // 4369,
    // 4379, 
    // 4380,
    //  [4379,4380],
     [4405, 4408], 4544,
    4529, 4533, 4534, 4536,
    [4624,4625  ], 4627, 4628, [4645, 4648], 4654, 4653, 
    // 4690,
     4797, 4804, 
    // [4807, 4823], 
    4834,  
    [4840,4842 ],
    // 5027,
    5161, 
    [6425, 6427], 6431, 
    [6930, 6931], 6934,
    [7386, 7389],
    9325,
    [2747,2749], 2751,
    // [10397,10400],
    // 802, 804,
    [1648, 1655],
    [2124, 2129], 2258, 2276, 3695, 4031, 
    // 8130,

// 4685, 4686, 4693,4778, 
// 4779,
5106, [5108, 5110], 
// [5127, 5129],
//  7018,
9413,
4270,



    ];
export let deleteIifeBlocks = [114, 159,
        //  181,
        251,281, 311, 328, 344, 
        // 600, 
        691,
        830, 
        // 860,
        912,
        //  1034, 
        1061,
        1206, 4204, 
        //4249, 
        // 4264, 
        //4286, 4298,
        //4527
        4573, 4586, 4609, 
        // 4616, 
        // 4621, 4643,
         4663,
        //  4685, // manually triggerd
        //   5780,  // ?? not an iifee
        4877, 4901, 
        4975, 
        //5025, 5154
        5318, 5327, 5386, 5434, 5518, 5537, 5548, 5561, 
        //5970
        6012, 6052, 6062, 6283, 6326, 
        // 6375, 
        //6423, 6478,
        // 6523, 6683
        6776,
        //  6806
        6825, 
        // 6926,
        // 7003, // hides view
        7026, 7042, 7209, 7235, 
        //7384, 7512
        7670, 7681, 7713, 
        // 7722,
        7818, 8245,
        //  8257, 
        // 8355, 8359
        8394, 8919, 8994, 
        // 9120
        9185, 9199, 9235, 
        // 9250, 9271, 9320
        // 9355
        9467, 9489, 9586, 9714, 9730, 9786, 9860, 9989
        ,10088,10244,10257,
        10268,10279,10290,10301,10332,
        
    
        ]
    
export let todoDeletable = [
    2753,  
    [6394, 6411], // object delete
    5244,[5235, 5250],
    //5234, //partielles delete
    [9310, 9319],
    2929, // componentRendererType delete everywhere
    [2192, 2199],
]
export let todoAutomize = [
    9327, 
    // 4807, 4815 /// not automized deletable?
    4823, 9361, 1772, 601,
    4663,
    // optimized
    2164,
    //  2958, // TODO
    2131, 2118, 1755,
    // 1423, 
    1433, 692,
    //  1789,
     4299, 4528, 4644, 5026,
    6424, 2746, 
    // 4685, 
    //  7519,
      502, 191, 5105, 
    // 5126, 
    // 5145,
    //  104,
    // 7003,
    9403,
    4266,
    // 4677,
    // 10087,
    // 8256,
]

export let deleteLOC1 = [
    
    12,[15,29],[31,38], [40,52], [65,68], 105,112,113,
    [249, 250], 280, 310,
    502,[521, 538],  540, 596, 599,
    800,803,  [809, 813], 
    [944, 958],
    [902, 910], [947, 952], [954, 955],959,
      

    // #1000
    1176,[1024, 1033],1902, 1906, 1909,1793, 1468, 1448,1477, 1478,
    // #2000
    [2138, 2140],[2188, 2208],2761, 2326,
    2924, 2926,2967,2972, 2981, 2982,[2984, 2986], 
    [2991, 3025], 2959, 2967, 2968,2162,
2709,
    // #3000
    3030, 
    
    // #4000
    4525, 4417, 4248, 4323, 4324, 4236, 4237,
    [4663, 4684], 4526, 4541, 4543,  4562, 4247, 4244,
    [4606,4608], 4876, 4572,  4540, 4565, 4539, 4238,
    4199,
    // 4200,
    // TODO 4201
    4295,
    [4300, 4306],
    [4045, 4059], [4066, 4083], [4096, 4098], [4120, 4122],
    4231, [4239,4243], [4251, 4261], 4273, 4274,4297,
    4202, 4235,  4245, 4246, 4296, [4485, 4487],
    [4428, 4444], 4412, 4414, [4454, 4463], [4807, 4833],
[4465, 4474], 4450,4449, 4423, 4424, 4426, 4427,[4420,4421],
[4546, 4561], 4563, 4564, [4633, 4638], [4871, 4873],[4223, 4229],[4285, 4294], 4281, 4789, [4569, 4571], [4036, 4038],

    // #5000
    [5036, 5039],5314, 5219, [5018, 5020],  5517, [5229, 5233], 
    [5071, 5080], 5069, 5065, 5081, 5085, 5086, 5087, 
[5049, 5053], [5042, 5046], 5040, 5033, [5954, 5969],
[5235, 5250], 5232, [5222, 5227], 5162, 5168,5031,
    5064, 5088,
    // #6000
    6364, 6417, 6365, 6366, 6368, 6997, 6999, 
    [6414, 6416], [6418, 6420], 6422,
    6370, 6371, 6373, [6394, 6410], [6435, 6458], [6952, 6992], 6936,
6464, [6466, 6474], [6460, 6462],[6947, 6949],
    
    // #7000
    7001, 7002, 7393, 7387, 7390, 7041,[7021, 7025],
      [7395,7461], 7928, 7929, 7934,
      7937, 7940,
      7963, 7964, 7967,
      7990, 7991, 7994,
    7504, 7508, 7873,7901,
    [7472, 7482],7392, 7883,
    // 7963, 7964, 7967, 7885, 
    // 7901, 
    // TODO: 7885
    // TODO 7905, // mach bullets mittig 
   
    7506, 7706, 7020,
    // 7888,7890, 7891, // TODO: macht headline mittig
    7505,7668,[7895, 7899], [7922, 7925], [7956, 7959],[7983, 7986],
    [7527, 7541],7666, 7667, 7669, 7507,  7880,
    
    // #8000
    8917, [8308, 8353], 8306, 8307, 4653, 4656, [8010, 8014],
    [8017, 8019], 8305, 8135,8137, 8144,//
    8244,   8255,8158, 8354, 8410, [8021,8024],
    [8154, 8156], [8150, 8151],8918, 8138, 8132,
    // #9000
    [9317, 9319], [9097, 9119], [9551,9557], [9682, 9712],
    [9771, 9785], [9955, 9988],
    9465, 9466, 9197,9713,[9546, 9550],9359,
    [9388, 9394],9198, 9309, 9271, 

    // #10000
    10391, 10572, [10080, 10086], 10331,
    [10358, 10376], 10371, [10379, 10410], [10413, 10415] , [10392, 10402],
    10418,[10313, 10329], [10352, 10354],

    // TODO r.P
    7888,[7888, 7891],7908,
    [7908, 7911], 7926, 7945, [7945, 7948],7960,
    7972, [7972, 7975], 7987,7999, [7999, 8002],

// TODO
// 502, 4268, 4273, 4293, 4296, 6365, 
// TODO: why not?  4236,
// TODO macht left [7890, 7891],

// TODO 7926, 7960, 7987,
// [7956, 7960],
// [7983, 7987],
// [8010, 8014],
// [8154, 8156],8150, 8151, 

// 4405
//t.set(n.provide, {  fn: n.provide,  value: R });
// var o = n.provide;// #CL1 START i:10399 orig: 10
// var i = {  fn: n.provide,  value: R };

]
export const specialReplacements = [
    { line: 30, value: 'n(e, u, c);'},
    { line: 3029, value: 'Zr(zt(e, 0).componentView)'},
    { line: 1988, value: 'name: i,'},
    { line: 2960, value: 'if (!!e.parent) {'},
    { line: 1945, value: 'var M = (s).map(function(e) {'},
    { line: 4405, value: 't.set(n.provide, {  fn: n.provide,  value: R });'},
    { line: 4312, value: 'if (n instanceof Array) {'},
    { line: 5026, value: 'var e = Ö;'},
    { line: 1948, value: 'return [\'\', e[0], e[1]];'},
    { line: 9356, value: 'var e = Ö;'},
    // { line: 5088, value: '})(Ö,Ö);'},
    { line: 4324, value: 'var i = {  fn: n.provide,  value: R };'},
    { line: 4379, value: 'return {  fn: e.provide,  value: R };'},
    { line: 10377, value: 'r.W(4608,K, K, [Ö,Ö]),'},
    { line: 10378, value: 'r.W(6144, r.v, Ö, [K]),'},
    { line: 10412, value: 'r.W(131584, r.e, r.e, [r.r, r.K, r.l, r.h, r.g]),'},
    { line: 10357, value: 'r.W(512, r.g, r.J, [[8, [a]], [3], Ö]),'},
    { line: 10411, value: 'r.W(512, r.c, r.c, []),'},
    { line: 4544, value: 'this.resolve();'},
    { line: 7386, value: 'var o = this;'},
    { line: 4312, value: 'if ((n = n) instanceof Array) {'},
    { line: 4323, value: 'var o = n.provide;'},
    { line: 2933, value: 'return zr(e.root, e.root.renderer, e, t.element.componentProvider, n);'},
    // { line: 2931, value: '? e.root.rendererFactory.createRenderer()'},
    { line: 4360, value: 'var i = e.provide;'},
    { line: 7462, value: 'var t = this._ngModuleDefFactory();'},
    { line: 2974, value: 'var c = i.element.componentView();'},
    { line: 6463, value: 'var o = this.viewDefFactory();'},
    // { line: 4545, value: '}();'},
    { line: 4419, value: 's = n.value;'},
    { line: 3695, value: 'return Fr(uo( o.injector.get($e),  n), r, i);'},
    { line: 3703, value: 'function uo(n, o) {'},
    { line: 9327, value: 'e.prototype.createRenderer = function() {'},
    { line: 2129, value: 'return {  providersByKey: t, providers: e };'},
    { line: 5048, value: 'var s = n.injector.get();'},
    { line: 7894, value: "[['style', 'text-align:center']], Ö"},
    { line: 2337, value: "})(e, (t ));"},
    { line: 6369, value: " { provide: Ye },"},
    { line: 5228, value: "var n =this._componentFactoryResolver.resolveComponentFactory(e);"},
    { line: 2708, value: "function Pr( n) {"},
    { line: 10355, value: "var Je = r.M(o, [Ö], function(e) {"},
    // { line: 3601, value: "to(zt(e, 0).componentView, t);"},
    { line: 4446, value: "? new (c.bind.apply(c))"},
    { line: 4447, value: ": null;"},
    { line: 4453, value: "})(t, n);"},
    { line: 4413, value: "return (function e(t, n) {"},
    { line: 4415, value: "return (function(t, n) {"},
    { line: 1992, value: "componentView: l,"},
    { line: 8141, value: "Ö,"},
    { line: 2009, value: "if (e.parent ) {"},
    { line: 2319, value: "flags: t"},
    { line: 2154, value: "var i =  Ln(e, o);"},
    { line: 4658, value: "return this.factory.create(e, t, n, this.ngModule);"},
    { line: 5035, value: "var o =new Ne();"},
    { line: 4124, value: "return Ö;"},
    { line: 10357, value: "r.W(512, r.g, r.J, [[8, [a]], [3, r.g], Ö]),"},
    { line: 2021, value: "s.setAttribute(r, c[1], c[2]);"},
    { line: 3713, value: "renderer: n.createRenderer(),"},
    { line: 6421, value: "var Rn = Xt(Ö);"},
    // { line: 7443, value: "Qt.setCurrentNode = Ö;"},
    // { line: 5233, value: "var o = null;"},
    // { line: 5234, value: "var i;"},
    { line: 6937, value: "e._providers = [];"},
    { line: 6950, value: "return Hn(this, {  tokenKey: Xt(e) });"},
    { line: 5234, value: " n.create(P.NULL, [],  n.selector);"},
    { line: 6424, value: "function t(t, n, r) {"},
    // { line: 6465, value: "Qt.createRootView(e, t, n, o, r);"},
    { line: 2135, value: "if (t.flags) {"},
    { line: 4314, value: "e(t, n[0]);"},
    { line: 4627, value: "var o = e[0];"},
    { line: 3601, value: "Zr(zt(e, 0).componentView)"},
    { line: 1790, value: "var t = e();"},
    // { line: 2141, value: "if (t.flags) {"},

    // { line: 2299, value: "return (function(e, t) {"},
   { line: 2278, value: "function hr(e, t) {"},
    // return { deps: t, fn: n, useNew: o, value: r };
    { line: 1446, value: "e();"},
    // { line: 1448, value: "var s = n.concat(t);"},
    { line: 1450, value: "var e = P.create({ providers: n.concat(t) });"},
    { line: 2120, value: "return { deps: yn(r), flags: e, token: t, value: n };"},
    { line: 1466, value: "return Le;"},
    { line: 1651, value: "t =  '_' + Jt.size;"},
    { line: 4198, value: "var r;"},
    { line: 1729, value: "return !!e.parent;"},
    { line: 4270, value: "return new U(e.providers);"},
    { line: 4379, value: "return {  fn: n,  value: r };"},
    { line: 8146, value: '('},
    { line: 2159, value: 'return Ln(e, o);'},
    { line: 1790, value: 'var t = (!t) ? e() : mn.get(e);'},
    { line: 4464, value: '})(e, n);'},
    { line: 7465, value: 'e,'},
    { line: 2758, value: 'function jr(t) {'},
    { line: 7398, value: 'var e = {'},
    // { line: 1792, value: 't = e() '},
    { line: 8153, value: '}'},
    { line: 3029, value: '$r(e);'},
    { line: 8149, value: ']'},
    // { line: 8009, value: ']'},
    { line: 8020, value: ']'},
    // { line: 1907, value: 'A = kn(i);'},
    { line: 7904, value: '( r._1( [\'\\n    Welcome to \', \'!\\n  \'])),'},

    { line: 8148, value: '{ flags: 49152},'},
    // { line: 10331, value: "var qe = Object(r.D)(r.H);"},
    { line: 10419, value: "Object(r.D)(r.H)()"},

    // TODO: IIFE automize
    { line: 4200, value: "var i = Ö;"},
    { line: 4201, value: "var s = Ö;"},
    { line: 4203, value: "var a = Ö;"},
    { line: 8134, value: "var o = Ö;"},
    { line: 8135, value: "var i = Ö;"},
    { line: 8138, value: "var s = Ö;"},
    { line: 9395, value: "return document.querySelector(e);"},
    { line: 2010, value: "r = s.createElement(o.name, o.ns);"},
    // { line: 2016, value: "uerySelector(e);"},

    // r = s.selectRootElement(e);
    // { line: 8149, value: '}'},

    { line: 1781, value: 'return n.renderParent? zt(e, n.renderParent.nodeIndex).renderElement : t'},
    
    // TODO: replace function automize
    { line: 6465, value: 'io(e, t, n, o, r);'},
    { line: 2975, value: 'a = Br(e, i, c);'},
    { line: 2928, value: 'function Br(e, t, n) {'},
    { line: 7463, value: 'return ir('},
    { line: 8148, value: '{ flags: 49152},'},
    
    // replacements
    // { line: 7888, value: 'Ö,'},
    // { line: 7889, value: 'Ö,'},
    // { line: 7890, value: 'Ö,'},
    // { line: 7891, value: 'Ö,'},
    // { line: 7903, value: 'r.P( Ö,Ö,Ö,Ö,1, \'h1\', [], Ö,Ö,Ö,Ö,Ö)),'},
    // { line: 7908, value: 'Ö,'},
    // { line: 7909, value: 'Ö,'},
    // { line: 7910, value: 'Ö,'},
    // { line: 7911, value: 'Ö,'},
    // { line: 7926, value: 'Ö'},
    // { line: 7931, value: 'r.P(  Ö,Ö,Ö,Ö,1, \'h2\', [], Ö,Ö,Ö,Ö,Ö)),'},
    // { line: 7936, value: 'r.P( Ö,Ö,Ö,Ö,22, \'ul\', [], Ö,Ö,Ö,Ö,Ö)),'},
    // { line: 7939, value: 'r.P( Ö,Ö,Ö,Ö,5, \'li\', [], Ö,Ö,Ö,Ö,Ö)),'},
    // { line: 7942, value: 'r.P( Ö,Ö,Ö,Ö,2, \'h2\', [], Ö,Ö,Ö,Ö,Ö)),'},
    // { line: 7945, value: 'Ö,'},
    // { line: 7946, value: 'Ö,'},
    // { line: 7947, value: 'Ö,'},
    // { line: 7948, value: 'Ö,'},
    // { line: 7960, value: 'Ö'},
    // { line: 7966, value: 'r.P( Ö,Ö,Ö,Ö,5, \'li\', [], Ö,Ö,Ö,Ö,Ö)),'},
    // { line: 7969, value: 'r.P( Ö,Ö,Ö,Ö,2, \'h2\', [], Ö,Ö,Ö,Ö,Ö)),'},
    // { line: 7972, value: 'Ö,'},
    // { line: 7973, value: 'Ö,'},
    // { line: 7974, value: 'Ö,'},
    // { line: 7975, value: 'Ö,'},
    // { line: 7987, value: 'Ö'},
    // { line: 7993, value: 'r.P( Ö,Ö,Ö,Ö,5, \'li\', [], Ö,Ö,Ö,Ö,Ö)),'},
    // { line: 7996, value: 'r.P( Ö,Ö,Ö,Ö,2, \'h2\', [], Ö,Ö,Ö,Ö,Ö)),'},
    // { line: 7999, value: 'Ö,'},
    // { line: 8000, value: 'Ö,'},
    // { line: 8001, value: 'Ö,'},
    // { line: 8002, value: 'Ö,'},
    // { line: 8147, value: 'r.P( Ö,Ö,Ö,Ö,1, \'app-root\', [], Ö,Ö,Ö,u,Ö)),'},
    
    
    { line: 1893, value: 'function On( o, i, s, l) {'},

    // #r.P
    { line: 7903, value: 'r.P( 1, \'h1\', [],Ö)),'},
    { line: 7931, value: 'r.P( 1, \'h2\', [],Ö)),'},
    { line: 7936, value: 'r.P( 22, \'ul\', [],Ö)),'},
    { line: 7939, value: 'r.P( 5, \'li\', [],Ö)),'},
    { line: 7942, value: 'r.P( 2, \'h2\', [],Ö)),'},
    { line: 7966, value: 'r.P( 5, \'li\', [],Ö)),'},
    { line: 7969, value: 'r.P( 2, \'h2\', [],Ö)),'},
    { line: 7993, value: 'r.P( 5, \'li\', [],Ö)),'},
    { line: 7996, value: 'r.P( 2, \'h2\', [],Ö)),'},
    { line: 8147, value: 'r.P( 1, \'app-root\', [], u)),'},
    { line: 7921, value: '], Ö'},
    { line: 7955, value: '], Ö'},
    { line: 7982, value: '],Ö'},
    { line: 8009, value: '],Ö'},


]

//deletableFn 6375

// var xe = function() {}();
export let emptyIIFe = [
    4663
]
export let deletableFunctions = [
    114,159, 251, 281, 311,  344,  691, 830, 912, 
    // 1034, 
    // 1886,
    
    587,
    // TODO QA1: 
    7483,
    // TODO : KFB01
    // 5385,
    5386,

    
      8129,
       8256, 8257,
     
     // TODO später: CB2
     // TODO QB 
     
     // Done
     6375, 6776, 6825, 7042, 7026,
     6806, 
  6523, 5970, 7818, 9235, 7235, 9467, 9489, 9860, 9989, 10244, 10257, 10268, 10279, 10290, 10301,  
  4609, 5318, 5434, 5518, 5537, 5561, 6012, 6062, 7209, 8245,
  5324,  77, 98, 5010, 5558, 6683, 
  6272,
  1349, 1352, 1355,1390, 1734, 1886, 2866, 8094, 1228,
  5548, 6052,
  600, 4084,
   4108, 4117, 4126, 4129, 4141, 4186, 4189, 4192, 4195, 5385,
   8160, 10397,860,  7525, 7559, 7670, 7681, 7707, 7710, 7713, 7722,
7854, 9786, 9730, 9586, 9185,
//  8994,
328, 
181,4215, 4282, 4877, 4901, 5145, 5252, 5307, 5327, 6283, 6326,
6392, 6478, 7664, 7658, 4573, 4586,
 104,
10087, 10088, 9714, 545, 560, 5021, 
// 4249,
4975, 6374, 2348, 8489, 8994, 9120,
10332, 8446, 8256,
4249, 4616, 5126, 7868,  106, 109, 962, 1005,
// 1058, 1061, 
// 974,
// 7870,
3,
9271,
  8086, 8033, 1423, 1362, 1386,
4663, 4685,  4222, 7519, 10312,
4204,
8919, 6412, 901, 806, 962,
801, 7392,
// 964, 
6806, 1728, 1879,
4542, 7502, 502, 2758, 4147, 4488, 1303, 1789, 4168,2278,
5057, 10421, 943, 799, 1005, 6393, 9199, 1005, 1269, 3595,
// TODO 3624,
 1429,1656, 2863, 7003, 1481, 4605, 8041, 8304, 4099, 4165,4123,
1409, 1416, 1420, 1423, 8129, 8359, 8394, 8355, 2954, 814, 9250, 9310, 4277,
]
