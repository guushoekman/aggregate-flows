var global_flows = [
  {
   "label": "Land won crushed rock",
   "from": "Reserves",
   "to": "Extraction",
   "value": 92195,
   "category": "rock",
   "color": "#e41a1c"
  },
  {
   "label": "Land won sand and gravel",
   "from": "Reserves",
   "to": "Extraction",
   "value": 44124,
   "category": "Sand and gravel",
   "color": "#377eb8"
  },
  {
   "label": "Marine dredged sand and gravel",
   "from": "Reserves",
   "to": "Extraction",
   "value": 15946,
   "category": "Sand and gravel",
   "color": "#308edb"
  },
  {
   "label": "Raw sand and gravel",
   "from": "Extraction",
   "to": "Processing / production",
   "value": 33419,
   "category": "Sand and gravel",
   "color": "#377eb8"
  },
  {
   "label": "Raw crushed rock",
   "from": "Extraction",
   "to": "Processing / production",
   "value": 81488,
   "category": "rock",
   "color": "#e41a1c"
  },
  {
   "label": "Overburden / interburden",
   "from": "Extraction",
   "to": "Waste management",
   "value": 10706,
   "category": false,
   "color": "#b2b260"
  },
  {
   "label": "Aggregates used as fill",
   "from": "Extraction",
   "to": "Use",
   "value": 10633,
   "category": false,
   "color": "#8e8e39"
  },
  {
   "label": "Concreting crushed rock",
   "from": "Processing / production",
   "to": "Manufacturing",
   "value": 11886,
   "category": "rock",
   "color": "#e41a1c"
  },
  {
   "label": "Concreting gravel",
   "from": "Processing / production",
   "to": "Manufacturing",
   "value": 11563,
   "category": "Sand and gravel",
   "color": "#377eb8"
  },
  {
   "label": "Concreting sand",
   "from": "Processing / production",
   "to": "Manufacturing",
   "value": 19106,
   "category": "Sand and gravel",
   "color": "#a6cee3"
  },
  {
   "label": "Asphalt sand",
   "from": "Processing / production",
   "to": "Manufacturing",
   "value": 929,
   "category": "Sand and gravel",
   "color": "#a6cee3"
  },
  {
   "label": "Asphalt gravel",
   "from": "Processing / production",
   "to": "Manufacturing",
   "value": 458,
   "category": "Sand and gravel",
   "color": "#377eb8"
  },
  {
   "label": "Asphalt crushed rock",
   "from": "Processing / production",
   "to": "Manufacturing",
   "value": 4025,
   "category": "rock",
   "color": "#e41a1c"
  },
  {
   "label": "Mortal sand",
   "from": "Processing / production",
   "to": "Manufacturing",
   "value": 5634,
   "category": "Sand and gravel",
   "color": "#a6cee3"
  },
  {
   "label": "Exports of processed sand, gravel and crushed rock",
   "from": "Processing / production",
   "to": "Export",
   "value": 4949,
   "category": false,
   "color": "#b15928"
  },
  {
   "label": "Scalping and fines",
   "from": "Processing / production",
   "to": "Waste management",
   "value": 11886,
   "category": false,
   "color": "#967630"
  },
  {
   "label": "Non-aggregate use",
   "from": "Processing / production",
   "to": "Use",
   "value": 9909,
   "category": false,
   "color": "#c93c7b"
  },
  {
   "label": "Other aggregates",
   "from": "Processing / production",
   "to": "Use",
   "value": 29127,
   "category": false,
   "color": "#96305e"
  },
  {
   "label": "Recycled C&D flows",
   "from": "Waste management",
   "to": "Processing / production",
   "value": 40790,
   "category": false,
   "color": "#96305e"
  },
  {
   "label": "Recycled processing / production waste",
   "from": "Waste management",
   "to": "Processing / production",
   "value": 6535,
   "category": false,
   "color": "#458926"
  },
  {
   "label": "Concrete, asphalt and mortar for infrastructure",
   "from": "Manufacturing",
   "to": "Use",
   "value": 676,
   "category": "Concrete, asphalt and mortar ",
   "color": "#c63574"
  },
  {
   "label": "Concrete, asphalt and mortar for building",
   "from": "Manufacturing",
   "to": "Use",
   "value": 15564,
   "category": "Concrete, asphalt and mortar ",
   "color": "#ba7895"
  },
  {
   "label": "Manufacturing waste",
   "from": "Manufacturing",
   "to": "Waste management",
   "value": 10666,
   "category": false,
   "color": "#7a7a56"
  },
  {
   "label": "Imports of processed sand, gravel and crushed rock",
   "from": "Import",
   "to": "Manufacturing",
   "value": 8467,
   "category": false,
   "color": "#6a3d9a"
  },
  {
   "label": "Processed crushed rock imports",
   "from": "Import",
   "to": "Use",
   "value": 8922,
   "category": "rock",
   "color": "#e41a1c"
  },
  {
   "label": "End-of-life",
   "from": "Use",
   "to": "Waste management",
   "value": 28024,
   "category": false,
   "color": "#7a7a56"
  },
  {
   "label": "Recycling deconstruction flows",
   "from": "Waste management",
   "to": "Use",
   "value": 5237,
   "category": false,
   "color": "#7a7a56"
  }
]

var use_flows = [
 {
   "from": "Manufacturing",
   "to": "Infrastructure",
   "color": "gold",
   "category": "sand",
   "value": "333.769537678534"
 },
 {
   "from": "Manufacturing",
   "to": "Infrastructure",
   "color": "red",
   "category": "gravel",
   "value": "324.387643446985"
 },
 {
   "from": "Manufacturing",
   "to": "Infrastructure",
   "color": "brown",
   "category": "rock",
   "value": "17.6152694083819"
 },
 {
   "from": "Manufacturing",
   "to": "Buildings",
   "color": "gold",
   "category": "sand",
   "value": "5186.6986485523"
 },
 {
   "from": "Manufacturing",
   "to": "Buildings",
   "color": "red",
   "category": "gravel",
   "value": "5189.44859475411"
 },
 {
   "from": "Manufacturing",
   "to": "Buildings",
   "color": "brown",
   "category": "rock",
   "value": "5187.666340537"
 },
 {
   "from": "Imports",
   "to": "Infrastructure",
   "color": "gray",
   "category": "",
   "value": "9706.04471936397"
 },
 {
   "from": "Imports",
   "to": "Other",
   "color": "gray",
   "category": "",
   "value": "69881.160220754"
 },
 {
   "from": "Extraction",
   "to": "Landscaping",
   "color": "brown",
   "category": "rock",
   "value": "5316.48745884014"
 },
 {
   "from": "Infrastructure",
   "to": "Waste management",
   "color": "gold",
   "category": "sand",
   "value": "3.80843755851354"
 },
 {
   "from": "Infrastructure",
   "to": "Waste management",
   "color": "red",
   "category": "gravel",
   "value": "3.47950718079574"
 },
 {
   "from": "Infrastructure",
   "to": "Waste management",
   "color": "brown",
   "category": "rock",
   "value": "19287.4109486573"
 },
 {
   "from": "Infrastructure",
   "to": "Waste management",
   "color": "gray",
   "category": "",
   "value": "5657.64303688887"
 },
 {
   "from": "Buildings",
   "to": "Waste management",
   "color": "gold",
   "category": "sand",
   "value": "1151.18939038922"
 },
 {
   "from": "Buildings",
   "to": "Waste management",
   "color": "red",
   "category": "gravel",
   "value": "1153.07241855671"
 },
 {
   "from": "Buildings",
   "to": "Waste management",
   "color": "brown",
   "category": "rock",
   "value": "1152.4491695606"
 },
 {
   "from": "Landscaping",
   "to": "Waste management",
   "color": "gray",
   "category": "",
   "value": "49924.4581933499"
 },
 {
   "from": "Extraction",
   "to": "Landscaping",
   "color": "gray",
   "category": "",
   "value": "5316.90125055856"
 },
 {
   "from": "Infrastructure",
   "to": "Stock",
   "color": "gray",
   "category": "",
   "value": "6788.51830932751"
 },
 {
   "from": "Buildings",
   "to": "Stock",
   "color": "gray",
   "category": "",
   "value": "12102.4991191652"
 },
 {
   "from": "Landscaping",
   "to": "Stock",
   "color": "gray",
   "category": "",
   "value": "10705.0322836594"
 },
 {
   "from": "Other",
   "to": "Stock",
   "color": "gray",
   "category": "",
   "value": "58872.9601151639"
 }
]

var buildings_flows = [
 {
   "from": "Manufacturing",
   "to": "Commercial buildings",
   "color": "gold",
   "category": "sand",
   "value": 6069
 },
 {
   "from": "Manufacturing",
   "to": "Social buildings",
   "color": "gold",
   "category": "sand",
   "value": 5982
 },
 {
   "from": "Manufacturing",
   "to": "Residential buildings",
   "color": "gold",
   "category": "sand",
   "value": 5993
 },
 {
   "from": "Manufacturing",
   "to": "Commercial buildings",
   "color": "red",
   "category": "gravel",
   "value": 2417
 },
 {
   "from": "Manufacturing",
   "to": "Social buildings",
   "color": "red",
   "category": "gravel",
   "value": 2417
 },
 {
   "from": "Manufacturing",
   "to": "Residential buildings",
   "color": "red",
   "category": "gravel",
   "value": 2417
 },
 {
   "from": "Manufacturing",
   "to": "Commercial buildings",
   "color": "brown",
   "category": "rock",
   "value": 2507
 },
 {
   "from": "Manufacturing",
   "to": "Social buildings",
   "color": "brown",
   "category": "rock",
   "value": 2507
 },
 {
   "from": "Manufacturing",
   "to": "Residential buildings",
   "color": "brown",
   "category": "rock",
   "value": 2507
 },
 {
   "from": "Commercial buildings",
   "to": "Stock",
   "color": "lightgray",
   "category": "stock",
   "value": 4512
 },
 {
   "from": "Social buildings",
   "to": "Stock",
   "color": "lightgray",
   "category": "stock",
   "value": 4512
 },
 {
   "from": "Residential buildings",
   "to": "Stock",
   "color": "lightgray",
   "category": "stock",
   "value": 4512
 },
 {
   "from": "Commercial buildings",
   "to": "Waste management",
   "color": "gold",
   "category": "sand",
   "value": 4566
 },
 {
   "from": "Social buildings",
   "to": "Waste management",
   "color": "gold",
   "category": "sand",
   "value": 4479
 },
 {
   "from": "Residential buildings",
   "to": "Waste management",
   "color": "gold",
   "category": "sand",
   "value": 4490
 },
 {
   "from": "Commercial buildings",
   "to": "Waste management",
   "color": "red",
   "category": "gravel",
   "value": 913
 },
 {
   "from": "Social buildings",
   "to": "Waste management",
   "color": "red",
   "category": "gravel",
   "value": 913
 },
 {
   "from": "Residential buildings",
   "to": "Waste management",
   "color": "red",
   "category": "gravel",
   "value": 913
 },
 {
   "from": "Commercial buildings",
   "to": "Waste management",
   "color": "brown",
   "category": "rock",
   "value": 1004
 },
 {
   "from": "Social buildings",
   "to": "Waste management",
   "color": "brown",
   "category": "rock",
   "value": 1004
 },
 {
   "from": "Residential buildings",
   "to": "Waste management",
   "color": "brown",
   "category": "rock",
   "value": 1004
 }
]