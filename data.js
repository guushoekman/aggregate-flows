var global_flows = [
  {
   "label": "Land won crushed rock",
   "from": "Reserves",
   "to": "Extraction",
   "value": 92195,
   "material": "rock",
   "color": "#e41a1c"
  },
  {
   "label": "Land won sand and gravel",
   "from": "Reserves",
   "to": "Extraction",
   "value": 44124,
   "material": "Sand and gravel",
   "color": "#377eb8"
  },
  {
   "label": "Marine dredged sand and gravel",
   "from": "Reserves",
   "to": "Extraction",
   "value": 15946,
   "material": "Sand and gravel",
   "color": "#308edb"
  },
  {
   "label": "Raw sand and gravel",
   "from": "Extraction",
   "to": "Processing / production",
   "value": 33419,
   "material": "Sand and gravel",
   "color": "#377eb8"
  },
  {
   "label": "Raw crushed rock",
   "from": "Extraction",
   "to": "Processing / production",
   "value": 81488,
   "material": "rock",
   "color": "#e41a1c"
  },
  {
   "label": "Overburden / interburden",
   "from": "Extraction",
   "to": "Waste management",
   "value": 10706,
   "material": false,
   "color": "#b2b260"
  },
  {
   "label": "Aggregates used as fill",
   "from": "Extraction",
   "to": "Use",
   "value": 10633,
   "material": false,
   "color": "#8e8e39"
  },
  {
   "label": "Concreting crushed rock",
   "from": "Processing / production",
   "to": "Manufacturing",
   "value": 11886,
   "material": "rock",
   "color": "#e41a1c"
  },
  {
   "label": "Concreting gravel",
   "from": "Processing / production",
   "to": "Manufacturing",
   "value": 11563,
   "material": "Sand and gravel",
   "color": "#377eb8"
  },
  {
   "label": "Concreting sand",
   "from": "Processing / production",
   "to": "Manufacturing",
   "value": 19106,
   "material": "Sand and gravel",
   "color": "#a6cee3"
  },
  {
   "label": "Asphalt sand",
   "from": "Processing / production",
   "to": "Manufacturing",
   "value": 929,
   "material": "Sand and gravel",
   "color": "#a6cee3"
  },
  {
   "label": "Asphalt gravel",
   "from": "Processing / production",
   "to": "Manufacturing",
   "value": 458,
   "material": "Sand and gravel",
   "color": "#377eb8"
  },
  {
   "label": "Asphalt crushed rock",
   "from": "Processing / production",
   "to": "Manufacturing",
   "value": 4025,
   "material": "rock",
   "color": "#e41a1c"
  },
  {
   "label": "Mortal sand",
   "from": "Processing / production",
   "to": "Manufacturing",
   "value": 5634,
   "material": "Sand and gravel",
   "color": "#a6cee3"
  },
  {
   "label": "Exports of processed sand, gravel and crushed rock",
   "from": "Processing / production",
   "to": "Export",
   "value": 4949,
   "material": false,
   "color": "#b15928"
  },
  {
   "label": "Scalping and fines",
   "from": "Processing / production",
   "to": "Waste management",
   "value": 11886,
   "material": false,
   "color": "#967630"
  },
  {
   "label": "Non-aggregate use",
   "from": "Processing / production",
   "to": "Use",
   "value": 9909,
   "material": false,
   "color": "#c93c7b"
  },
  {
   "label": "Other aggregates",
   "from": "Processing / production",
   "to": "Use",
   "value": 29127,
   "material": false,
   "color": "#96305e"
  },
  {
   "label": "Recycled C&D flows",
   "from": "Waste management",
   "to": "Processing / production",
   "value": 40790,
   "material": false,
   "color": "#96305e"
  },
  {
   "label": "Recycled processing / production waste",
   "from": "Waste management",
   "to": "Processing / production",
   "value": 6535,
   "material": false,
   "color": "#458926"
  },
  {
   "label": "Concrete, asphalt and mortar for infrastructure",
   "from": "Manufacturing",
   "to": "Use",
   "value": 676,
   "material": "Concrete, asphalt and mortar ",
   "color": "#c63574"
  },
  {
   "label": "Concrete, asphalt and mortar for building",
   "from": "Manufacturing",
   "to": "Use",
   "value": 15564,
   "material": "Concrete, asphalt and mortar ",
   "color": "#ba7895"
  },
  {
   "label": "Manufacturing waste",
   "from": "Manufacturing",
   "to": "Waste management",
   "value": 10666,
   "material": false,
   "color": "#7a7a56"
  },
  {
   "label": "Imports of processed sand, gravel and crushed rock",
   "from": "Import",
   "to": "Manufacturing",
   "value": 8467,
   "material": false,
   "color": "#6a3d9a"
  },
  {
   "label": "Processed crushed rock imports",
   "from": "Import",
   "to": "Use",
   "value": 8922,
   "material": "rock",
   "color": "#e41a1c"
  },
  {
   "label": "End-of-life",
   "from": "Use",
   "to": "Waste management",
   "value": 28024,
   "material": false,
   "color": "#7a7a56"
  },
  {
   "label": "Recycling deconstruction flows",
   "from": "Waste management",
   "to": "Use",
   "value": 5237,
   "material": false,
   "color": "#7a7a56"
  }
]

var extraction_flows = [
  {
    "from": "Terrestrial",
    "to": "Extraction",
    "value": 92560,
    "material": "Crushed Rock",
    "label": "Extraction Crushed Rock"
  },
  {
    "from": "Terrestrial",
    "to": "Extraction",
    "value": 26524,
    "material": "Gravel",
    "label": "Extraction Gravel"
  },
  {
    "from": "Terrestrial",
    "to": "Extraction",
    "value": 17695,
    "material": "Sand",
    "label": "Extraction Sand"
  },
  {
    "from": "Marine",
    "to": "Extraction",
    "value": 7212,
    "material": "Gravel",
    "label": "Extraction Gravel"
  },
  {
    "from": "Marine",
    "to": "Extraction",
    "value": 4800,
    "material": "Sand",
    "label": "Extraction Sand"
  },
  {
    "from": "Extraction",
    "to": "Processing/Production",
    "value": 84122,
    "material": "Crushed Rock",
    "label": "Processing/Production Crushed Rock"
  },
  {
    "from": "Extraction",
    "to": "Processing/Production",
    "value": 24106,
    "material": "Gravel",
    "label": "Processing/Production Gravel"
  },
  {
    "from": "Extraction",
    "to": "Processing/Production",
    "value": 16327,
    "material": "Sand",
    "label": "Processing/Production Sand"
  },
  {
    "from": "Extraction",
    "to": "Use as Fill",
    "value": 9814,
    "material": "Crushed Rock",
    "label": "Fill Crushed Rock"
  },
  {
    "from": "Extraction",
    "to": "Use as Fill",
    "value": 2047,
    "material": "Gravel",
    "label": "Fill Gravel"
  },
  {
    "from": "Extraction",
    "to": "Use as Fill",
    "value": 1381,
    "material": "Sand",
    "label": "Fill Sand"
  },
  {
    "from": "Extraction",
    "to": "Waste Processing",
    "value": 6637,
    "material": "Crushed Rock",
    "label": "Overburden and Interburden Crushed Rock"
  },
  {
    "from": "Extraction",
    "to": "Waste Processing",
    "value": 2047,
    "material": "Gravel",
    "label": "Overburden and Interburden Gravel"
  },
  {
    "from": "Extraction",
    "to": "Waste Processing",
    "value": 1159,
    "material": "Sand",
    "label": "Overburden and Interburden Sand"
  }
]

var processing_flows = [
   {
     "index": 0,
     "from": "Extraction",
     "to": "Overburden and Interburden",
     "value": 6637,
     "material": "Crushed rock"
   },
   {
     "index": 1,
     "from": "Extraction",
     "to": "Use as Fill",
     "value": 9814,
     "material": "Crushed rock"
   },
   {
     "index": 2,
     "from": "Extraction",
     "to": "Processing/Production",
     "value": 84122,
     "material": "Crushed rock"
   },
   {
     "index": 3,
     "from": "Extraction",
     "to": "Overburden and Interburden",
     "value": 1659,
     "material": "Gravel"
   },
   {
     "index": 4,
     "from": "Extraction",
     "to": "Processing/Production",
     "value": 24106,
     "material": "Gravel"
   },
   {
     "index": 5,
     "from": "Extraction",
     "to": "Use as Fill",
     "value": 2047,
     "material": "Gravel"
   },
   {
     "index": 6,
     "from": "Extraction",
     "to": "Overburden and Interburden",
     "value": 1159,
     "material": "Sand"
   },
   {
     "index": 7,
     "from": "Extraction",
     "to": "Processing/Production",
     "value": 16327,
     "material": "Sand"
   },
   {
     "index": 8,
     "from": "Extraction",
     "to": "Use as Fill",
     "value": 1380,
     "material": "Sand"
   },
   {
     "index": 9,
     "from": "Demolition",
     "to": "Processing/Production",
     "value": 33690,
     "material": "Non-Primary"
   },
   {
     "index": 10,
     "from": "Secondary Aggregates",
     "to": "Processing/Production",
     "value": 5175,
     "material": "Non-Primary"
   },
   {
     "index": 11,
     "from": "Marine Dredged Outside English Waters",
     "to": "Processing/Production",
     "value": 597,
     "material": "Sand"
   },
   {
     "index": 12,
     "from": "Scalpings and Fines",
     "to": "Processing/Production",
     "value": 6900,
     "material": "Non-Primary"
   },
   {
     "index": 13,
     "from": "Processing/Production",
     "to": "Concreting Manufacturing",
     "value": 8783,
     "material": "Crushed rock"
   },
   {
     "index": 14,
     "from": "Processing/Production",
     "to": "Aggregate Use",
     "value": 14046,
     "material": "Crushed rock"
   },
   {
     "index": 15,
     "from": "Processing/Production",
     "to": "Non-aggregate Use",
     "value": 5728,
     "material": "Crushed rock"
   },
   {
     "index": 16,
     "from": "Processing/Production",
     "to": "Asphalt Manufacturing",
     "value": 3019,
     "material": "Crushed rock"
   },
   {
     "index": 17,
     "from": "Processing/Production",
     "to": "Use as Fill",
     "value": 4059,
     "material": "Crushed rock"
   },
   {
     "index": 18,
     "from": "Processing/Production",
     "to": "Scalpings and Fines",
     "value": 2977,
     "material": "Crushed rock"
   },
   {
     "index": 19,
     "from": "Processing/Production",
     "to": "Concreting Manufacturing",
     "value": 8252,
     "material": "Gravel"
   },
   {
     "index": 20,
     "from": "Processing/Production",
     "to": "Aggregate Use",
     "value": 4297,
     "material": "Gravel"
   },
   {
     "index": 21,
     "from": "Processing/Production",
     "to": "Non-aggregate Use",
     "value": 1667,
     "material": "Gravel"
   },
   {
     "index": 22,
     "from": "Processing/Production",
     "to": "Asphalt Manufacturing",
     "value": 238,
     "material": "Gravel"
   },
   {
     "index": 23,
     "from": "Processing/Production",
     "to": "Use as Fill",
     "value": 3349,
     "material": "Gravel"
   },
   {
     "index": 24,
     "from": "Processing/Production",
     "to": "Land Won",
     "value": 1993,
     "material": "Gravel"
   },
   {
     "index": 25,
     "from": "Processing/Production",
     "to": "Scalpings and Fines",
     "value": 981,
     "material": "Gravel"
   },
   {
     "index": 26,
     "from": "Processing/Production",
     "to": "Concreting Manufacturing",
     "value": 13711,
     "material": "Sand"
   },
   {
     "index": 27,
     "from": "Processing/Production",
     "to": "Aggregate Use",
     "value": 2494,
     "material": "Sand"
   },
   {
     "index": 28,
     "from": "Processing/Production",
     "to": "Non-aggregate Use",
     "value": 760,
     "material": "Sand"
   },
   {
     "index": 29,
     "from": "Processing/Production",
     "to": "Asphalt Manufacturing",
     "value": 373,
     "material": "Sand"
   },
   {
     "index": 30,
     "from": "Processing/Production",
     "to": "Mortar Manufacturing",
     "value": 3822,
     "material": "Sand"
   },
   {
     "index": 31,
     "from": "Processing/Production",
     "to": "Use as Fill",
     "value": 1991,
     "material": "Sand"
   },
   {
     "index": 32,
     "from": "Processing/Production",
     "to": "Land Won",
     "value": 1377,
     "material": "Sand"
   },
   {
     "index": 33,
     "from": "Processing/Production",
     "to": "Marine Dredged",
     "value": 1377,
     "material": "Sand"
   },
   {
     "index": 34,
     "from": "Processing/Production",
     "to": "Scalpings and Fines",
     "value": 399,
     "material": "Sand"
   },
   {
     "index": 35,
     "from": "Processing/Production",
     "to": "C&D Waste",
     "value": 28770,
     "material": "Non-Primary"
   },
   {
     "index": 36,
     "from": "Processing/Production",
     "to": "Processing/Production Secondary Aggregates",
     "value": 1293,
     "material": "Non-Primary"
   },
   {
     "index": 37,
     "from": "C&D Waste",
     "to": "Concreting Manufacturing",
     "value": 11825,
     "material": "Non-Primary"
   },
   {
     "index": 38,
     "from": "C&D Waste",
     "to": "Aggregate Use",
     "value": 7572,
     "material": "Non-Primary"
   },
   {
     "index": 39,
     "from": "C&D Waste",
     "to": "Non-aggregate Use",
     "value": 2865,
     "material": "Non-Primary"
   },
   {
     "index": 40,
     "from": "C&D Waste",
     "to": "Asphalt Manufacturing",
     "value": 1097,
     "material": "Non-Primary"
   },
   {
     "index": 41,
     "from": "C&D Waste",
     "to": "Mortar Manufacturing",
     "value": 1569,
     "material": "Non-Primary"
   },
   {
     "index": 42,
     "from": "C&D Waste",
     "to": "Use as Fill",
     "value": 1410,
     "material": "Gravel"
   },
   {
     "index": 43,
     "from": "C&D Waste",
     "to": "Use as Fill",
     "value": 1036,
     "material": "Sand"
   },
   {
     "index": 44,
     "from": "C&D Waste",
     "to": "Scalpings and Fines",
     "value": 1396,
     "material": "Non-Primary"
   },
   {
     "index": 45,
     "from": "Processing/Production Secondary Aggregates",
     "to": "Aggregate Use",
     "value": 725,
     "material": "Non-Primary"
   },
   {
     "index": 46,
     "from": "Processing/Production Secondary Aggregates",
     "to": "Mortar Manufacturing",
     "value": 239,
     "material": "Non-Primary"
   },
   {
     "index": 47,
     "from": "Processing/Production Secondary Aggregates",
     "to": "Scalpings and Fines",
     "value": 329,
     "material": "Non-Primary"
   },
   {
     "index": 48,
     "from": "Land Won",
     "to": "Trade",
     "value": 3370,
     "material": "All"
   },
   {
     "index": 49,
     "from": "Marine Dredged",
     "to": "Trade",
     "value": 1377,
     "material": "All"
   }
]

var use_flows = [
 {
   "from": "Manufacturing",
   "to": "Infrastructure",
   "color": "gold",
   "material": "sand",
   "value": "333.769537678534"
 },
 {
   "from": "Manufacturing",
   "to": "Infrastructure",
   "color": "red",
   "material": "gravel",
   "value": "324.387643446985"
 },
 {
   "from": "Manufacturing",
   "to": "Infrastructure",
   "color": "brown",
   "material": "rock",
   "value": "17.6152694083819"
 },
 {
   "from": "Manufacturing",
   "to": "Buildings",
   "color": "gold",
   "material": "sand",
   "value": "5186.6986485523"
 },
 {
   "from": "Manufacturing",
   "to": "Buildings",
   "color": "red",
   "material": "gravel",
   "value": "5189.44859475411"
 },
 {
   "from": "Manufacturing",
   "to": "Buildings",
   "color": "brown",
   "material": "rock",
   "value": "5187.666340537"
 },
 {
   "from": "Imports",
   "to": "Infrastructure",
   "color": "gray",
   "material": "",
   "value": "9706.04471936397"
 },
 {
   "from": "Imports",
   "to": "Other",
   "color": "gray",
   "material": "",
   "value": "69881.160220754"
 },
 {
   "from": "Extraction",
   "to": "Landscaping",
   "color": "brown",
   "material": "rock",
   "value": "5316.48745884014"
 },
 {
   "from": "Infrastructure",
   "to": "Waste management",
   "color": "gold",
   "material": "sand",
   "value": "3.80843755851354"
 },
 {
   "from": "Infrastructure",
   "to": "Waste management",
   "color": "red",
   "material": "gravel",
   "value": "3.47950718079574"
 },
 {
   "from": "Infrastructure",
   "to": "Waste management",
   "color": "brown",
   "material": "rock",
   "value": "19287.4109486573"
 },
 {
   "from": "Infrastructure",
   "to": "Waste management",
   "color": "gray",
   "material": "",
   "value": "5657.64303688887"
 },
 {
   "from": "Buildings",
   "to": "Waste management",
   "color": "gold",
   "material": "sand",
   "value": "1151.18939038922"
 },
 {
   "from": "Buildings",
   "to": "Waste management",
   "color": "red",
   "material": "gravel",
   "value": "1153.07241855671"
 },
 {
   "from": "Buildings",
   "to": "Waste management",
   "color": "brown",
   "material": "rock",
   "value": "1152.4491695606"
 },
 {
   "from": "Landscaping",
   "to": "Waste management",
   "color": "gray",
   "material": "",
   "value": "49924.4581933499"
 },
 {
   "from": "Extraction",
   "to": "Landscaping",
   "color": "gray",
   "material": "",
   "value": "5316.90125055856"
 },
 {
   "from": "Infrastructure",
   "to": "Stock",
   "color": "gray",
   "material": "",
   "value": "6788.51830932751"
 },
 {
   "from": "Buildings",
   "to": "Stock",
   "color": "gray",
   "material": "",
   "value": "12102.4991191652"
 },
 {
   "from": "Landscaping",
   "to": "Stock",
   "color": "gray",
   "material": "",
   "value": "10705.0322836594"
 },
 {
   "from": "Other",
   "to": "Stock",
   "color": "gray",
   "material": "",
   "value": "58872.9601151639"
 }
]
