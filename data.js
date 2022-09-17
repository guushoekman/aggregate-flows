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

var buildings_flows = [
 {
   "from": "Manufacturing",
   "to": "Commercial buildings",
   "color": "gold",
   "material": "sand",
   "value": 6069
 },
 {
   "from": "Manufacturing",
   "to": "Social buildings",
   "color": "gold",
   "material": "sand",
   "value": 5982
 },
 {
   "from": "Manufacturing",
   "to": "Residential buildings",
   "color": "gold",
   "material": "sand",
   "value": 5993
 },
 {
   "from": "Manufacturing",
   "to": "Commercial buildings",
   "color": "red",
   "material": "gravel",
   "value": 2417
 },
 {
   "from": "Manufacturing",
   "to": "Social buildings",
   "color": "red",
   "material": "gravel",
   "value": 2417
 },
 {
   "from": "Manufacturing",
   "to": "Residential buildings",
   "color": "red",
   "material": "gravel",
   "value": 2417
 },
 {
   "from": "Manufacturing",
   "to": "Commercial buildings",
   "color": "brown",
   "material": "rock",
   "value": 2507
 },
 {
   "from": "Manufacturing",
   "to": "Social buildings",
   "color": "brown",
   "material": "rock",
   "value": 2507
 },
 {
   "from": "Manufacturing",
   "to": "Residential buildings",
   "color": "brown",
   "material": "rock",
   "value": 2507
 },
 {
   "from": "Commercial buildings",
   "to": "Stock",
   "color": "lightgray",
   "material": "stock",
   "value": 4512
 },
 {
   "from": "Social buildings",
   "to": "Stock",
   "color": "lightgray",
   "material": "stock",
   "value": 4512
 },
 {
   "from": "Residential buildings",
   "to": "Stock",
   "color": "lightgray",
   "material": "stock",
   "value": 4512
 },
 {
   "from": "Commercial buildings",
   "to": "Waste management",
   "color": "gold",
   "material": "sand",
   "value": 4566
 },
 {
   "from": "Social buildings",
   "to": "Waste management",
   "color": "gold",
   "material": "sand",
   "value": 4479
 },
 {
   "from": "Residential buildings",
   "to": "Waste management",
   "color": "gold",
   "material": "sand",
   "value": 4490
 },
 {
   "from": "Commercial buildings",
   "to": "Waste management",
   "color": "red",
   "material": "gravel",
   "value": 913
 },
 {
   "from": "Social buildings",
   "to": "Waste management",
   "color": "red",
   "material": "gravel",
   "value": 913
 },
 {
   "from": "Residential buildings",
   "to": "Waste management",
   "color": "red",
   "material": "gravel",
   "value": 913
 },
 {
   "from": "Commercial buildings",
   "to": "Waste management",
   "color": "brown",
   "material": "rock",
   "value": 1004
 },
 {
   "from": "Social buildings",
   "to": "Waste management",
   "color": "brown",
   "material": "rock",
   "value": 1004
 },
 {
   "from": "Residential buildings",
   "to": "Waste management",
   "color": "brown",
   "material": "rock",
   "value": 1004
 }
]