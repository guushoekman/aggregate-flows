var global_flows = [
 {
   "index": 0,
   "from": "Reserves",
   "to": "Extraction",
   "value": 92560,
   "material": "Crushed Rock"
 },
 {
   "index": 1,
   "from": "Reserves",
   "to": "Extraction",
   "value": 44219,
   "material": "Land Won Sand and Gravel"
 },
 {
   "index": 2,
   "from": "Reserves",
   "to": "Extraction",
   "value": 12012,
   "material": "Marine Dredged Sand and Gravel"
 },
 {
   "index": 3,
   "from": "Extraction",
   "to": "Processing/Production",
   "value": 84122,
   "material": "Crushed Rock"
 },
 {
   "index": 4,
   "from": "Extraction",
   "to": "Processing/Production",
   "value": 51248,
   "material": "Sand and Gravel"
 },
 {
   "index": 5,
   "from": "Extraction",
   "to": "Use",
   "value": 4258,
   "material": "Fill"
 },
 {
   "index": 6,
   "from": "Extraction",
   "to": "Waste Management",
   "value": 9455,
   "material": "Overburden and Interburden"
 },
 {
   "index": 7,
   "from": "Marine Dredged Outside English Waters",
   "to": "Processing/Production",
   "value": 598,
   "material": "Marine Dredged Sand and Gravel"
 },
 {
   "index": 8,
   "from": "Secondary Aggregates",
   "to": "Processing/Production",
   "value": 5175,
   "material": "Non-Primary"
 },
 {
   "index": 9,
   "from": "Processing/Production",
   "to": "Export",
   "value": 4954,
   "material": "All"
 },
 {
   "index": 10,
   "from": "Waste Management",
   "to": "Processing/Production",
   "value": 33690,
   "material": "C&D Waste"
 },
 {
   "index": 11,
   "from": "Waste Management",
   "to": "Processing/Production",
   "value": 6700,
   "material": "Recycled Processing/Production Waste"
 },
 {
   "index": 12,
   "from": "Processing/Production",
   "to": "Manufacturing",
   "value": 30746,
   "material": "Concrete Materials"
 },
 {
   "index": 13,
   "from": "Processing/Production",
   "to": "Manufacturing",
   "value": 3630,
   "material": "Asphalt Materials"
 },
 {
   "index": 14,
   "from": "Processing/Production",
   "to": "Manufacturing",
   "value": 3823,
   "material": "Mortar Sand"
 },
 {
   "index": 15,
   "from": "Processing/Production",
   "to": "Waste Management",
   "value": 6082,
   "material": "Scalpings and Fines"
 },
 {
   "index": 16,
   "from": "Processing/Production",
   "to": "Use",
   "value": 7787,
   "material": "Fill"
 },
 {
   "index": 17,
   "from": "Processing/Production",
   "to": "Use",
   "value": 40152,
   "material": "Other Aggregate and Non-Aggregate Use"
 },
 {
   "index": 18,
   "from": "Import",
   "to": "Manufacturing",
   "value": 8456,
   "material": "All"
 },
 {
   "index": 19,
   "from": "Manufacturing",
   "to": "Use",
   "value": 30786,
   "material": "Infrastructure Materials"
 },
 {
   "index": 20,
   "from": "Manufacturing",
   "to": "Use",
   "value": 57930,
   "material": "Building Materials"
 },
 {
   "index": 21,
   "from": "Manufacturing",
   "to": "Waste Management",
   "value": 832,
   "material": "Manufacturing Waste"
 },
 {
   "index": 22,
   "from": "Waste Management",
   "to": "Manufacturing",
   "value": 7071,
   "material": "C&D Waste"
 },
 {
   "index": 23,
   "from": "Import",
   "to": "Use",
   "value": 1117,
   "material": "Crushed Rock"
 },
 {
   "index": 24,
   "from": "Use",
   "to": "Waste Management",
   "value": 46561,
   "material": "C&D Waste"
 },
 {
   "index": 25,
   "from": "Waste Management",
   "to": "Use",
   "value": 4046,
   "material": "Deconstruction Materials"
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

var reserves_flows = [
  {
   "index": 0,
   "from": "Reserves",
   "to": "Terrestrial",
   "value": 136779,
   "material": "All"
  },
  {
   "index": 1,
   "from": "Reserves",
   "to": "Marine",
   "value": 12012,
   "material": "All"
  },
  {
   "index": 2,
   "from": "Reserves",
   "to": "Stock",
   "value": 2338,
   "material": "All"
  },
  {
   "index": 3,
   "from": "Terrestrial",
   "to": "Extraction",
   "value": 92560,
   "material": "Crushed Rock"
  },
  {
   "index": 4,
   "from": "Terrestrial",
   "to": "Extraction",
   "value": 26524,
   "material": "Gravel"
  },
  {
   "index": 5,
   "from": "Terrestrial",
   "to": "Extraction",
   "value": 17695,
   "material": "Sand"
  },
  {
   "index": 6,
   "from": "Marine",
   "to": "Extraction",
   "value": 7212,
   "material": "Gravel"
  },
  {
   "index": 7,
   "from": "Marine",
   "to": "Extraction",
   "value": 4800,
   "material": "Sand"
  },
  {
   "index": 8,
   "from": "Marine",
   "to": "Stock",
   "value": 2338,
   "material": "All"
  }
]

var use_flows = [
 {
   "index": 0,
   "from": "Mortar Manufacturing",
   "to": "Buildings",
   "value": 270,
   "material": "Sand"
 },
 {
   "index": 1,
   "from": "Concreting Manufacturing",
   "to": "Buildings",
   "value": 27038,
   "material": "Crushed Rock"
 },
 {
   "index": 2,
   "from": "Concreting Manufacturing",
   "to": "Buildings",
   "value": 8793,
   "material": "Gravel"
 },
 {
   "index": 3,
   "from": "Concreting Manufacturing",
   "to": "Other Infrastructure",
   "value": 5378,
   "material": "Gravel"
 },
 {
   "index": 4,
   "from": "Concreting Manufacturing",
   "to": "Buildings",
   "value": 5841,
   "material": "Sand"
 },
 {
   "index": 5,
   "from": "Concreting Manufacturing",
   "to": "Other Infrastructure",
   "value": 15394,
   "material": "Sand"
 },
 {
   "index": 6,
   "from": "Concreting Manufacturing",
   "to": "Buildings",
   "value": 16245,
   "material": "C&D Waste"
 },
 {
   "index": 7,
   "from": "Asphalt Manufacturing",
   "to": "Road",
   "value": 10014,
   "material": "Crushed Rock"
 },
 {
   "index": 8,
   "from": "Processing/Production Crushed Rock",
   "to": "Railway Ballast",
   "value": 23457,
   "material": "Crushed Rock"
 },
 {
   "index": 9,
   "from": "Processing/Production Crushed Rock",
   "to": "Aggregate Use",
   "value": 14046,
   "material": "Crushed Rock"
 },
 {
   "index": 10,
   "from": "Processing/Production Crushed Rock",
   "to": "Non-aggregate Use",
   "value": 5728,
   "material": "Crushed Rock"
 },
 {
   "index": 11,
   "from": "Processing/Production Crushed Rock",
   "to": "Use as Fill",
   "value": 4059,
   "material": "Crushed Rock"
 },
 {
   "index": 12,
   "from": "Processing/Production Gravel",
   "to": "Aggregate Use",
   "value": 4297,
   "material": "Gravel"
 },
 {
   "index": 13,
   "from": "Processing/Production Gravel",
   "to": "Non-aggregate Use",
   "value": 1667,
   "material": "Gravel"
 },
 {
   "index": 14,
   "from": "Processing/Production Gravel",
   "to": "Use as Fill",
   "value": 3349,
   "material": "Gravel"
 },
 {
   "index": 15,
   "from": "Processing/Production Sand",
   "to": "Aggregate Use",
   "value": 2494,
   "material": "Sand"
 },
 {
   "index": 16,
   "from": "Processing/Production Sand",
   "to": "Non-aggregate Use",
   "value": 760,
   "material": "Sand"
 },
 {
   "index": 17,
   "from": "Processing/Production Sand",
   "to": "Use as Fill",
   "value": 1991,
   "material": "Sand"
 },
 {
   "index": 18,
   "from": "Processing/Production C&D Waste",
   "to": "Aggregate Use",
   "value": 7572,
   "material": "Non-Primary"
 },
 {
   "index": 19,
   "from": "Processing/Production C&D Waste",
   "to": "Non-aggregate Use",
   "value": 2865,
   "material": "Non-Primary"
 },
 {
   "index": 20,
   "from": "Processing/Production C&D Waste",
   "to": "Fill Sand",
   "value": 1036,
   "material": "Sand"
 },
 {
   "index": 21,
   "from": "Processing/Production C&D Waste",
   "to": "Fill Gravel",
   "value": 1410,
   "material": "Gravel"
 },
 {
   "index": 22,
   "from": "Processing/Production Secondary Aggregates",
   "to": "Aggregate Use",
   "value": 725,
   "material": "Non-Primary"
 },
 {
   "index": 23,
   "from": "Trade Crushed Rock",
   "to": "Aggregate Use",
   "value": 1117,
   "material": "Crushed Rock"
 },
 {
   "index": 24,
   "from": "Extraction",
   "to": "Use as Fill",
   "value": 9814,
   "material": "Crushed Rock"
 },
 {
   "index": 25,
   "from": "Extraction",
   "to": "Use as Fill",
   "value": 2047,
   "material": "Gravel"
 },
 {
   "index": 26,
   "from": "Extraction",
   "to": "Use as Fill",
   "value": 1381,
   "material": "Sand"
 },
 {
   "index": 27,
   "from": "Other Infrastructure",
   "to": "Infrastructure",
   "value": 20772,
   "material": "All"
 },
 {
   "index": 28,
   "from": "Road",
   "to": "Infrastructure",
   "value": 10014,
   "material": "All"
 },
 {
   "index": 29,
   "from": "Railway Ballast",
   "to": "Infrastructure",
   "value": 23457,
   "material": "Crushed Rock"
 },
 {
   "index": 30,
   "from": "Buildings",
   "to": "Deconstruction",
   "value": 2201,
   "material": "All"
 },
 {
   "index": 31,
   "from": "Buildings",
   "to": "Demolition",
   "value": 12211,
   "material": "All"
 },
 {
   "index": 32,
   "from": "Buildings",
   "to": "Stock",
   "value": 12115,
   "material": "All"
 },
 {
   "index": 33,
   "from": "Deconstruction",
   "to": "Use",
   "value": 4046,
   "material": "All"
 },
 {
   "index": 34,
   "from": "Infrastructure",
   "to": "Deconstruction",
   "value": 2492,
   "material": "All"
 },
 {
   "index": 35,
   "from": "Infrastructure",
   "to": "Demolition",
   "value": 29658,
   "material": "All"
 },
 {
   "index": 36,
   "from": "Infrastructure",
   "to": "Stock",
   "value": 16296,
   "material": "All"
 },
 {
   "index": 37,
   "from": "Aggregate Use",
   "to": "Stock",
   "value": 35998,
   "material": "All"
 },
 {
   "index": 38,
   "from": "Non-aggregate Use",
   "to": "Stock",
   "value": 4003,
   "material": "All"
 },
 {
   "index": 39,
   "from": "Waste Management",
   "to": "Use as Fill",
   "value": 11204,
   "material": "All"
 },
 {
   "index": 40,
   "from": "Use as Fill",
   "to": "Stock",
   "value": 38539,
   "material": "All"
 }
]

var infrastructure_flows = [
 {
   "index": 0,
   "from": "Processing/Production",
   "to": "Railway Ballast",
   "value": 23457,
   "material": "Crushed Rock"
 },
 {
   "index": 1,
   "from": "Concreting Manufacturing",
   "to": "Other Infrastructure",
   "value": 5378,
   "material": "Gravel"
 },
 {
   "index": 2,
   "from": "Concreting Manufacturing",
   "to": "Other Infrastructure",
   "value": 15394,
   "material": "Sand"
 },
 {
   "index": 3,
   "from": "Asphalt Manufacturing",
   "to": "Road Crushed Rock",
   "value": 10014,
   "material": "Crushed Rock"
 },
 {
   "index": 4,
   "from": "Railway Ballast",
   "to": "Demolition",
   "value": 1471,
   "material": "Crushed Rock"
 },
 {
   "index": 5,
   "from": "Railway Ballast",
   "to": "Stock",
   "value": 146,
   "material": "Crushed Rock"
 },
 {
   "index": 6,
   "from": "Other Infrastructure",
   "to": "Demolition",
   "value": 17260,
   "material": "All"
 },
 {
   "index": 7,
   "from": "Other Infrastructure",
   "to": "Deconstruction",
   "value": 2492,
   "material": "All"
 },
 {
   "index": 8,
   "from": "Other Infrastructure",
   "to": "Stock",
   "value": 3154,
   "material": "All"
 },
 {
   "index": 9,
   "from": "Road Crushed Rock",
   "to": "Demolition",
   "value": 6802,
   "material": "Crushed Rock"
 },
 {
   "index": 10,
   "from": "Road Crushed Rock",
   "to": "Stock",
   "value": 8468,
   "material": "Crushed Rock"
 },
 {
   "index": 11,
   "from": "Road Gravel",
   "to": "Demolition",
   "value": 2380,
   "material": "Gravel"
 },
 {
   "index": 12,
   "from": "Road Gravel",
   "to": "Stock",
   "value": 2717,
   "material": "Gravel"
 },
 {
   "index": 13,
   "from": "Road Sand",
   "to": "Demolition",
   "value": 1745,
   "material": "Sand"
 },
 {
   "index": 14,
   "from": "Road Sand",
   "to": "Stock",
   "value": 1811,
   "material": "Sand"
 },
 {
   "index": 15,
   "from": "Demolition",
   "to": "Waste Management",
   "value": 29658,
   "material": "All"
 },
 {
   "index": 16,
   "from": "Deconstruction",
   "to": "Waste Management",
   "value": 2492,
   "material": "All"
 }
]

var manufacturing_flows = [
 {
   "index": 0,
   "from": "Processing/Production",
   "to": "Railway Ballast",
   "value": 23457,
   "material": "Crushed Rock"
 },
 {
   "index": 1,
   "from": "Processing/Production",
   "to": "Asphalt Manufacturing",
   "value": 3019,
   "material": "Crushed Rock"
 },
 {
   "index": 2,
   "from": "Processing/Production",
   "to": "Concreting Manufacturing",
   "value": 8783,
   "material": "Crushed Rock"
 },
 {
   "index": 3,
   "from": "Processing/Production",
   "to": "Asphalt Manufacturing",
   "value": 238,
   "material": "Gravel"
 },
 {
   "index": 4,
   "from": "Processing/Production",
   "to": "Concreting Manufacturing",
   "value": 8252,
   "material": "Gravel"
 },
 {
   "index": 5,
   "from": "Processing/Production",
   "to": "Asphalt Manufacturing",
   "value": 373,
   "material": "Sand"
 },
 {
   "index": 6,
   "from": "Processing/Production",
   "to": "Concreting Manufacturing",
   "value": 13711,
   "material": "Sand"
 },
 {
   "index": 7,
   "from": "Processing/Production",
   "to": "Mortar Manufacturing",
   "value": 3822,
   "material": "Sand"
 },
 {
   "index": 8,
   "from": "Processing/Production",
   "to": "Processing/Production C&D Waste",
   "value": 14491,
   "material": "C&D Waste"
 },
 {
   "index": 9,
   "from": "Processing/Production",
   "to": "Processing/Production Secondary Aggregates",
   "value": 239,
   "material": "Secondary Aggregates"
 },
 {
   "index": 10,
   "from": "Processing/Production C&D Waste",
   "to": "Asphalt Manufacturing",
   "value": 1097,
   "material": "Non-Primary"
 },
 {
   "index": 11,
   "from": "Processing/Production C&D Waste",
   "to": "Concreting Manufacturing",
   "value": 11825,
   "material": "Non-Primary"
 },
 {
   "index": 12,
   "from": "Processing/Production C&D Waste",
   "to": "Mortar Manufacturing",
   "value": 1569,
   "material": "Non-Primary"
 },
 {
   "index": 13,
   "from": "Demolition",
   "to": "Concreting Manufacturing",
   "value": 7071,
   "material": "C&D Waste"
 },
 {
   "index": 14,
   "from": "Trade",
   "to": "Land Won",
   "value": 7983,
   "material": "All"
 },
 {
   "index": 15,
   "from": "Land Won",
   "to": "Asphalt Manufacturing",
   "value": 984,
   "material": "Crushed Rock"
 },
 {
   "index": 16,
   "from": "Land Won",
   "to": "Concreting Manufacturing",
   "value": 6999,
   "material": "Crushed Rock"
 },
 {
   "index": 17,
   "from": "Land Won",
   "to": "Concreting Manufacturing",
   "value": 473,
   "material": "Gravel"
 },
 {
   "index": 18,
   "from": "Asphalt Manufacturing",
   "to": "Road",
   "value": 10014,
   "material": "Crushed Rock"
 },
 {
   "index": 19,
   "from": "Concreting Manufacturing",
   "to": "Buildings",
   "value": 26781,
   "material": "Crushed Rock"
 },
 {
   "index": 20,
   "from": "Concreting Manufacturing",
   "to": "Reprocessing",
   "value": 257,
   "material": "Crushed Rock"
 },
 {
   "index": 21,
   "from": "Concreting Manufacturing",
   "to": "Buildings",
   "value": 16245,
   "material": "C&D Waste"
 },
 {
   "index": 22,
   "from": "Concreting Manufacturing",
   "to": "Other Infrastructure",
   "value": 5378,
   "material": "Gravel"
 },
 {
   "index": 23,
   "from": "Concreting Manufacturing",
   "to": "Buildings",
   "value": 8793,
   "material": "Gravel"
 },
 {
   "index": 24,
   "from": "Concreting Manufacturing",
   "to": "Other Infrastructure",
   "value": 15394,
   "material": "Sand"
 },
 {
   "index": 25,
   "from": "Concreting Manufacturing",
   "to": "Buildings",
   "value": 6111,
   "material": "Sand"
 },
 {
   "index": 26,
   "from": "Mortar Manufacturing",
   "to": "Buildings",
   "value": 270,
   "material": "Sand"
 },
 {
   "index": 27,
   "from": "Mortar Manufacturing",
   "to": "Reprocessing",
   "value": 346,
   "material": "Sand"
 },
 {
   "index": 28,
   "from": "Mortar Manufacturing",
   "to": "Landfill",
   "value": 229,
   "material": "Sand"
 },
 {
   "index": 29,
   "from": "Landfill",
   "to": "Waste Management",
   "value": 229,
   "material": "All"
 },
 {
   "index": 30,
   "from": "Reprocessing",
   "to": "Waste Management",
   "value": 603,
   "material": "All"
 },
 {
   "index": 31,
   "from": "Railway Ballast",
   "to": "Infrastructure",
   "value": 23457,
   "material": "Crushed Rock"
 },
 {
   "index": 32,
   "from": "Road",
   "to": "Infrastructure",
   "value": 10014,
   "material": "All"
 },
 {
   "index": 33,
   "from": "Other Infrastructure",
   "to": "Infrastructure",
   "value": 20772,
   "material": "All"
 }
]

var waste_flows = [
 {
   "index": 0,
   "from": "Extraction",
   "to": "Overburden and Interburden",
   "value": 6637,
   "material": "Crushed Rock"
 },
 {
   "index": 1,
   "from": "Extraction",
   "to": "Overburden and Interburden",
   "value": 2047,
   "material": "Gravel"
 },
 {
   "index": 2,
   "from": "Extraction",
   "to": "Overburden and Interburden",
   "value": 1159,
   "material": "Sand"
 },
 {
   "index": 3,
   "from": "Extraction",
   "to": "Overburden and Interburden",
   "value": 814,
   "material": "Marine Dredged Gravel"
 },
 {
   "index": 4,
   "from": "Extraction",
   "to": "Overburden and Interburden",
   "value": 613,
   "material": "Marine Dredged Sand"
 },
 {
   "index": 5,
   "from": "Processing/Production",
   "to": "Scalpings and Fines",
   "value": 2977,
   "material": "Crushed Rock"
 },
 {
   "index": 6,
   "from": "Processing/Production",
   "to": "Scalpings and Fines",
   "value": 981,
   "material": "Gravel"
 },
 {
   "index": 7,
   "from": "Processing/Production",
   "to": "Scalpings and Fines",
   "value": 399,
   "material": "Sand"
 },
 {
   "index": 8,
   "from": "Processing/Production",
   "to": "Scalpings and Fines",
   "value": 329,
   "material": "Non-Primary"
 },
 {
   "index": 9,
   "from": "Processing/Production",
   "to": "Scalpings and Fines",
   "value": 1396,
   "material": "C&D Waste"
 },
 {
   "index": 10,
   "from": "Manufacturing",
   "to": "Concreting Crushed Rock",
   "value": 257,
   "material": "Crushed Rock"
 },
 {
   "index": 11,
   "from": "Manufacturing",
   "to": "Mortar Manufacturing",
   "value": 575,
   "material": "Sand"
 },
 {
   "index": 12,
   "from": "Deconstruction",
   "to": "Use",
   "value": 4046,
   "material": "All"
 },
 {
   "index": 13,
   "from": "Concreting Crushed Rock",
   "to": "Manufacturing Waste",
   "value": 257,
   "material": "Crushed Rock"
 },
 {
   "index": 14,
   "from": "Mortar Manufacturing",
   "to": "Manufacturing Waste",
   "value": 346,
   "material": "Sand"
 },
 {
   "index": 15,
   "from": "Mortar Manufacturing",
   "to": "Landfill",
   "value": 229,
   "material": "Sand"
 },
 {
   "index": 16,
   "from": "Use",
   "to": "Railway Ballast",
   "value": 1471,
   "material": "Crushed Rock"
 },
 {
   "index": 17,
   "from": "Use",
   "to": "Road",
   "value": 10927,
   "material": "All"
 },
 {
   "index": 18,
   "from": "Use",
   "to": "Other Infrastructure",
   "value": 19752,
   "material": "All"
 },
 {
   "index": 19,
   "from": "Use",
   "to": "Buildings",
   "value": 14412,
   "material": "All"
 },
 {
   "index": 20,
   "from": "Overburden and Interburden",
   "to": "Use as Fill",
   "value": 11204,
   "material": "All"
 },
 {
   "index": 21,
   "from": "Overburden and Interburden",
   "to": "Stock",
   "value": 4498,
   "material": "All"
 },
 {
   "index": 22,
   "from": "Overburden and Interburden",
   "to": "Other Waste Processing",
   "value": 11270,
   "material": "All"
 },
 {
   "index": 23,
   "from": "Scalpings and Fines",
   "to": "Other Waste Processing",
   "value": 6082,
   "material": "All"
 },
 {
   "index": 24,
   "from": "Scalpings and Fines",
   "to": "Stock",
   "value": 250,
   "material": "All"
 },
 {
   "index": 25,
   "from": "Scalpings and Fines",
   "to": "Recycled Waste",
   "value": 6900,
   "material": "All"
 },
 {
   "index": 26,
   "from": "Manufacturing Waste",
   "to": "Other Waste Processing",
   "value": 603,
   "material": "All"
 },
 {
   "index": 27,
   "from": "Manufacturing Waste",
   "to": "Stock",
   "value": 1000,
   "material": "All"
 },
 {
   "index": 28,
   "from": "Railway Ballast",
   "to": "Demolition",
   "value": 1471,
   "material": "Crushed Rock"
 },
 {
   "index": 29,
   "from": "Road",
   "to": "Demolition",
   "value": 6802,
   "material": "Crushed Rock"
 },
 {
   "index": 30,
   "from": "Road",
   "to": "Demolition",
   "value": 2380,
   "material": "Gravel"
 },
 {
   "index": 31,
   "from": "Road",
   "to": "Demolition",
   "value": 1745,
   "material": "Sand"
 },
 {
   "index": 32,
   "from": "Other Infrastructure",
   "to": "Demolition",
   "value": 17260,
   "material": "All"
 },
 {
   "index": 33,
   "from": "Other Infrastructure",
   "to": "Deconstruction",
   "value": 2492,
   "material": "All"
 },
 {
   "index": 34,
   "from": "Buildings",
   "to": "Demolition",
   "value": 7689,
   "material": "Crushed Rock"
 },
 {
   "index": 35,
   "from": "Buildings",
   "to": "Deconstruction",
   "value": 1937,
   "material": "Crushed Rock"
 },
 {
   "index": 36,
   "from": "Buildings",
   "to": "Demolition",
   "value": 2619,
   "material": "Gravel"
 },
 {
   "index": 37,
   "from": "Buildings",
   "to": "Demolition",
   "value": 1903,
   "material": "Sand"
 },
 {
   "index": 38,
   "from": "Buildings",
   "to": "Deconstruction",
   "value": 264,
   "material": "Sand"
 },
 {
   "index": 39,
   "from": "Demolition",
   "to": "Landfill",
   "value": 13400,
   "material": "All"
 },
 {
   "index": 40,
   "from": "Demolition",
   "to": "Processing/Production C&D",
   "value": 33690,
   "material": "C&D Waste"
 },
 {
   "index": 41,
   "from": "Demolition",
   "to": "Concreting C&D",
   "value": 7071,
   "material": "C&D Waste"
 },
 {
   "index": 42,
   "from": "Landfill",
   "to": "Stock",
   "value": 15000,
   "material": "All"
 },
 {
   "index": 43,
   "from": "Other Waste Processing",
   "to": "Stock",
   "value": 4998,
   "material": "All"
 }
]