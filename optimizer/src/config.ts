

    
export let MAX_DELETE= 11080;// 4690 //#hier
export let undeletablefn = [
    1772, // keep: fn will be modified, gn near render parent
];

// TODO: 1062: what it is?
// detect where empty fn is used
export const keepFnName = [
    // 2758
    // 1772// keep: fn will be modified, gn near render parent
];
// undeletable keep lines
export const undeletable1 = [
    2758, 1772, // keep 1772: fn will be modified, gn near render parent
 [2959,2969],  // TODO Details?
1781, // render Element
    // 2971,  
    // 2962, 2976,[2978-2983],[2988,2990],
    // 2557, 2559,// fn call && Ft(e, 512, r)
    // 1614, 
    // [2418, 2422],
    // [2930, 2933],

    // TODO: 2709
    2709, 
    
    2720, 
    2727,  
     2741,
      2744,
     2764,
        [2769,2772], 2775,  
    // TODO: 2844 wird nicht erkannt
   2830, 2831,  [2835, 2836], [2842, 2846],   2852, 2861, 2862,
   // TODO: 3596 
//    3596,
    
    // 3601, 
    // 3667,
    // [4667,4684], //TODO wegen ? 
    9348, //DefaultRenderer,
    // 1773, 
    // 1774, 1781, [1785,1787],
    2989,
    // 2299,

    2938, 2939, 2940,  2945, 2947, 2948, 2952, // händisch ausprobiert
    
    // done
    //    2162,
       1967,
     1974, 1982, 1986, 1988, 1989,  1997, 2002, //todo
    2024, [2019, 2022], [2015, 2017], 2013, 2006, [2009, 2011], // TODO some stuff from other side deleted
    9325,
    ];


export let deleteLOC1 = [
    12,[15,29],[31,38], [40,52], [65,68], 105,112,113,
    [249, 250], 280, 310,
    502,[521, 538],  540, 596, 599,
    800,803,  [809, 813],
    [944, 958],
    [902, 910], [947, 952], [954, 955],959,
    [2,1175], 7501, 7879, 8133, [10424, 10430],

    // #1000
   1177,  1762, 1764,1445,1446, 1447,1456,1176,[1024, 1033],
   1902, 1906, 1909,1793, 1468, 1448,1477, 1478,
    // #2000
    // TODO 2959
    2007,2011, 
    [2138, 2140],2147, 2150,[2162, 2164], 2169,
    [2125,2126],[2188, 2220],
    2709,
    
    2924, 2926,2947,2948,[2960, 2962], 2964,[ 2967, 2968],
    [2970, 2977],2981, 2982,[2985, 2986],  2987, 
    [2990, 3025],
    
     
     

    // #3000
    3030, 3710, 3027,
    // #4000
    4214, 4200,4198,4411, 4627, 4632,4624,4647, 4648,4425,4445,4280,4203,4525, [4415, 4419], 4311, 4407, 4451, 4453,4422, 4413, 4464,[4446, 4448], 4248, 4323, 4324, 4236, 4237,
    [4663, 4684], 4526, 4541, 4543,  4562, 4247, 4244,
    [4606,4608], 4876, 4572,  4540, 4565, 4539, 4238,
    4199,
    // TODO 4200,
    4201, 
    4295, 4655,
    [4300, 4306],
    [4045, 4059], [4066, 4083], [4096, 4098], [4120, 4122],
    4231, [4239,4243], [4251, 4261], 4273, 4274,4297,
    4202, 4235,  4245, 4246, 4296, [4485, 4487],
    [4428, 4444], 4412, 4414, [4454, 4463], [4807, 4833],
[4465, 4474], 4450,4449, 4423, 4424, 4426, 4427,[4420,4421],
[4546, 4561], 4563, 4564, [4633, 4638], [4871, 4873],[4223, 4229],[4285, 4294], 4281, 4789, [4569, 4571], [4036, 4038],

    // #5000
    5066,5032, 5090, 5025, 5153,5152,5047,5155,5220,5034,5234, 5035,5026,5317,5048,5009,[5036, 5039],5314, 5219, [5018, 5020],  5517, [5229, 5233], 
    [5071, 5080], 5069, 5065, 5081, 5085, 5086, 5087, 
[5049, 5053], [5042, 5046], 5040, 5033, [5954, 5969],
[5235, 5250], 5232, [5222, 5227], 5162, 5168,5031,
    5064, 5088,
    // #6000
  6367,6413,6369, 6372, 6927,6945,6427,6421,6426, 6930,6434,6463,6364, 6417, 6365, 6366, 6368, 6997, 6999, 
    [6414, 6416], [6418, 6420], 6422,
    6370, 6371, 6373, [6394, 6410], [6435, 6458], [6952, 6992], 6936,
6464, [6466, 6474], [6460, 6462],[6947, 6949],
    
    // #7000
    7500,7385, 7391, 7462,7388,7001, 7002, 7393, 7387, 7390, 7041,[7021, 7025],
      [7395,7461], 
    [7472, 7482],7392, 
     7706, 7020, [7466, 7468],
    [7504,7508],7668,
    [7527, 7541],7666, 7667, 7669,   
    7880, // use strict
    
    // #8000
    8157, 8140, 8141,8134, 8917, [8308, 8353], 8306, 8307, 4653, 4656, [8010, 8014],
    [8017, 8019], 8305, 8135,8137, 8144,//
    8244,   8255,8158, 8354, 8410, [8021,8024],
    [8154, 8156], [8150, 8151],8918, 8138, 8132,
    // #9000
    9348,[9317, 9319], [9097, 9119], [9551,9557], [9682, 9712],
    [9771, 9785], [9955, 9988], 9325,
    9465, 9466, 9197,9713,[9546, 9550],9359,
    [9388, 9394],9198, 9309, 9271, 

    // #10000
     10355, 10417,10356,10416, 10419,10411,10357,10412,10377, 10378,10391, 10572, [10080, 10086], 10331,
    [10358, 10376], 10371, [10379, 10410], [10413, 10415] , [10392, 10402],
    10418,[10313, 10329], [10352, 10354],

    // TODO r.P
    7888,[7888, 7891],7908,
    [7908, 7911], 7926, 7945, [7945, 7948],7960,
    7972, [7972, 7975], 7987,7999, [7999, 8002],



//t.set(n.provide, {  fn: n.provide,  value: R });
// var o = n.provide;// #CL1 START i:10399 orig: 10
// var i = {  fn: n.provide,  value: R };

]
export const specialReplacements = [
    { line: 1772, value: 'function gn(n) {'},
    { line: 1781, value: 'return n? Ö[n.nodeIndex].renderElement : FOO'},
    { line: 1974, value: 'flags: 1,'},
    { line: 1893, value: 'On = function( o, i, s) {'},
    { line: 1988, value: 'name: i,'},
    { line: 1989, value: 'attrs:s || [],'},

    { line: 2004, value: 'function Nn(e,  n) {'},
    { line: 2009, value: "if (e.parent ) {"},
    { line: 2010, value: 'r = document.createElement(o.name);'},
    { line: 2013, value: 'gn(n.renderParent).appendChild(r);'},
    { line: 2016, value: 'r = document.querySelector(\'app-root\');'},
    { line: 2021, value: 'r.setAttribute( c[0], c[1]);'},
    { line: 2708, value: 'Pr = function(n) {'},
    { line: 2741, value: 'text: n,'},
    { line: 2758, value: 'jr = function(t) {'},
    { line: 2764, value: 'var c = l = null;'},
    { line: 2831, value: 'c = l = v;'},
    { line: 2842, value: 'l = (c = c.parent) && null ? c.renderParent : c;'},
    { line: 2935, value: 'function zr( n, o) {'},
    { line: 2945, value: 'nodes: Ö,'},
    { line: 2959, value: ''},
    { line: 2960, value: 'if (e.parent) {'},
    { line: 2969, value: 'if(i.flags === 1) {'},
    { line: 2961, value: 'FOO = Ö[0].renderElement;'},
    { line: 2979, value: 'renderElement: Nn(e, i),'},
    { line: 2980, value: 'componentView: zr( e,jr([On(6, "div", [["style", "text-align:center"]]), On(1, "h1"), Pr(["\\n    Welcome to app!\\n  "]), Pr("\\n  "), On(0, "img", [["alt", "Angular Logo"], ["src", "ng.svg"], ["width", "300"]]), On(1, "h2"), Pr("Here are some links to help you start: "), On(22, "ul"), On(5, "li"), On(2, "h2"), On(1, "a", [["href", "https://angular.io/tutorial"], ["rel", "noopener"], ["target", "_blank"]]), Pr("Tour of Heroes"), On(5, "li"), On(2, "h2"), On(1, "a", [["href", "https://github.com/angular/angular-cli/wiki"], ["rel", "noopener"], ["target", "_blank"]]), Pr("CLI Documentation"), On(5, "li"), On(2, "h2"), On(1, "a", [["href", "https://blog.angular.io/"], ["rel", "noopener"], ["target", "_blank"]]), Pr("Angular blog")])),'},
    { line: 2984, value: 'Ö[o] = s;'},
    { line: 2988, value: '} else {'},
    { line: 2989, value: 'Ö[i.parent.nodeIndex].renderElement.appendChild(document.createTextNode(i.text));'},
    
    { line: 3028, value: '} FOO = Ö[0].renderElement;'},
    { line: 3029, value: '!e.parent && Zr(s.componentView);'},
    
    { line: 10420, value: 'Zr(zr( null,jr([On(1, "app-root")])))'},
    
]

export let deletableFunctions = [
    //  691,
    7483,
    5386,
    8257,
    2758,
    // 2977, // deleted as line

    // Done
     6375, 
    6776,
     6825,
      7042,
       7026,
    //  6806, 
  6523,
   
  5970, 
//    7818, 
   9235, 
   7235,
    9467,
     9489, 
     9860, 
     9989, 
     10244, 
     10257, 
     10268, 
     10279,
      10290, 
      10301, 
       
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
9271, 8139, 4781, 4780, 4527,
  8086, 8033, 1423, 1362, 1386, 4298, 
4663, 4685,  4222, 7519, 10312, 4030,
4204, 4162, 4159, 4171, 4180, 4183,
8919, 6412, 901, 806, 962, 6946, 1755, 4177,
801, 7392, 1433, 4622, 4144,4621, 2118, 4174, 4135, 4060,
// 964, 
6806, 1728, 1879, 1178, 4042, 3703, 6424, 9387, 9327, 9355, 9320, 4643,
4264, 4111, 3694, 2922, 2928, 5221, 2275, 1610, 2746, 4856, 5105, 6459,
4542, 7502, 502, 2758, 4147, 4488, 1303, 1789, 4168,2278, 2257,  4033,
5154, 4538, 6423, 6926, 2131, 2122, 7384, 5041,
5057, 10421, 943, 799, 1005, 6393, 9199, 1005, 1269, 3595, 7394, 1648,
 1429,1656, 2863, 7003, 1481,
//   4605,
   8041, 8304, 4099, 4165,4123,
1409, 1416, 1420, 1423, 8129, 8359, 8394, 8355, 2954, 814, 9250, 9310, 4277,

// TODO
4605, 
]
export const emptyfunctions = [
]
