// ─────────────────────────────────────────────
//  ENRICHED DATASET — Act Navigation Prototype
//  Drop-in replacement for the SCENARIOS object.
//
//  New fields per target:
//    - branches:    string[]   (multi-tag: geo + function)
//    - baselineYear: number
//    - targetYear:   number
//    - functionArea: string    (named 'functionArea' to avoid
//                               the JS reserved word 'function')
//
//  All existing fields preserved:
//    id, name, track, objective, owner, region,
//    actions, subTargets, depth, pid, kids
//
//  Column mapping for the nested table:
//    Name          → name (with indent / chevron)
//    Actions       → actions (aggregated for parents)
//    Branches      → branches
//    Baseline year → baselineYear
//    Target year   → targetYear
//    Region        → region
//    Function      → functionArea
// ─────────────────────────────────────────────

const SCENARIOS = {
  fy2026: {
    name: 'FY2026 Reduction Plan',
    date: 'Apr 8, 2026',
    trackCount: 3,
    targets: [
      // ── Scope 1 ──────────────────────────────────────────────────────
      {id:1,  name:"Reduce Scope 1 Emissions −30%",   track:"Scope 1", objective:"−30%",  owner:"Marie Laurent",  region:"Global",    actions:0, subTargets:8, depth:0, pid:null, kids:[2,10,11,12],
       branches:["Global"],                         baselineYear:2021, targetYear:2030, functionArea:"Corporate"},

      // L1
      {id:2,  name:"Fleet Decarbonization",            track:"Scope 1", objective:"−35%",  owner:"Pierre Dubois",  region:"Europe",    actions:0, subTargets:4, depth:1, pid:1,    kids:[3,8,9],
       branches:["West Europe","Transport"],         baselineYear:2021, targetYear:2029, functionArea:"Transport"},

      // L2
      {id:3,  name:"Fleet Electrification — France",   track:"Scope 1", objective:"−40%",  owner:"Pierre Dubois",  region:"France",    actions:0, subTargets:2, depth:2, pid:2,    kids:[4,7],
       branches:["France","Transport"],              baselineYear:2021, targetYear:2029, functionArea:"Transport"},

      // L3
      {id:4,  name:"Paris Region Fleet",               track:"Scope 1", objective:"−45%",  owner:"Pierre Dubois",  region:"France",    actions:0, subTargets:2, depth:3, pid:3,    kids:[5,6],
       branches:["Paris","Transport"],               baselineYear:2021, targetYear:2029, functionArea:"Transport"},

      // L4
      {id:5,  name:"Paris — Light Vehicles",           track:"Scope 1", objective:"−50%",  owner:"Pierre Dubois",  region:"France",    actions:3, subTargets:0, depth:4, pid:4,    kids:[],
       branches:["Paris","Transport"],               baselineYear:2022, targetYear:2029, functionArea:"Transport"},
      {id:6,  name:"Paris — Heavy Trucks",             track:"Scope 1", objective:"−40%",  owner:"Pierre Dubois",  region:"France",    actions:2, subTargets:0, depth:4, pid:4,    kids:[],
       branches:["Paris","Transport"],               baselineYear:2022, targetYear:2029, functionArea:"Transport"},

      // L3
      {id:7,  name:"Lyon Region Fleet",                track:"Scope 1", objective:"−35%",  owner:"Pierre Dubois",  region:"France",    actions:4, subTargets:0, depth:3, pid:3,    kids:[],
       branches:["Lyon","Transport"],                baselineYear:2021, targetYear:2029, functionArea:"Transport"},

      // L2
      {id:8,  name:"Fleet Electrification — Germany",  track:"Scope 1", objective:"−25%",  owner:"Hans Weber",     region:"Germany",   actions:1, subTargets:0, depth:2, pid:2,    kids:[],
       branches:["Germany","Transport"],             baselineYear:2021, targetYear:2029, functionArea:"Transport"},
      {id:9,  name:"Fleet Fuel Switching — US",        track:"Scope 1", objective:"−20%",  owner:"James Miller",   region:"Americas",  actions:0, subTargets:0, depth:2, pid:2,    kids:[],
       branches:["Americas","Transport"],            baselineYear:2021, targetYear:2030, functionArea:"Transport"},

      // L1
      {id:10, name:"Buildings Energy — France",        track:"Scope 1", objective:"−40%",  owner:"Pierre Dubois",  region:"France",    actions:2, subTargets:0, depth:1, pid:1,    kids:[],
       branches:["France","Operations"],             baselineYear:2021, targetYear:2029, functionArea:"Operations"},
      {id:11, name:"Buildings Energy — Germany",       track:"Scope 1", objective:"−35%",  owner:"Hans Weber",     region:"Germany",   actions:0, subTargets:0, depth:1, pid:1,    kids:[],
       branches:["Germany","Operations"],            baselineYear:2021, targetYear:2029, functionArea:"Operations"},
      {id:12, name:"Manufacturing Process",            track:"Scope 1", objective:"−15%",  owner:"Yuki Tanaka",    region:"APAC",      actions:1, subTargets:0, depth:1, pid:1,    kids:[],
       branches:["APAC","Factory"],                  baselineYear:2021, targetYear:2029, functionArea:"Factory"},

      // ── Scope 2 ──────────────────────────────────────────────────────
      {id:13, name:"Reduce Scope 2 Emissions −50%",    track:"Scope 2", objective:"−50%",  owner:"Marie Laurent",  region:"Global",    actions:0, subTargets:3, depth:0, pid:null, kids:[14,15,16],
       branches:["Global"],                          baselineYear:2021, targetYear:2030, functionArea:"Corporate"},

      // L1
      {id:14, name:"Renewable Energy Procurement",     track:"Scope 2", objective:"−60%",  owner:"Sophie Martin",  region:"Europe",    actions:4, subTargets:0, depth:1, pid:13,   kids:[],
       branches:["Europe","Operations"],             baselineYear:2021, targetYear:2029, functionArea:"Operations"},
      {id:15, name:"On-site Solar — Tokyo Plant",      track:"Scope 2", objective:"−20%",  owner:"Yuki Tanaka",    region:"APAC",      actions:2, subTargets:0, depth:1, pid:13,   kids:[],
       branches:["APAC","Factory"],                  baselineYear:2021, targetYear:2029, functionArea:"Factory"},
      {id:16, name:"Grid Decarbonization — US",        track:"Scope 2", objective:"−30%",  owner:"James Miller",   region:"Americas",  actions:1, subTargets:0, depth:1, pid:13,   kids:[],
       branches:["Americas","Operations"],           baselineYear:2021, targetYear:2029, functionArea:"Operations"},

      // ── Scope 3 ──────────────────────────────────────────────────────
      {id:17, name:"Reduce Scope 3 Emissions −40%",    track:"Scope 3", objective:"−40%",  owner:"Marie Laurent",  region:"Global",    actions:0, subTargets:9, depth:0, pid:null, kids:[18,24,25,26,27],
       branches:["Global"],                          baselineYear:2021, targetYear:2030, functionArea:"Corporate"},

      // L1
      {id:18, name:"Supplier Engagement Program",      track:"Scope 3", objective:"−25%",  owner:"Lisa Chen",      region:"Global",    actions:0, subTargets:4, depth:1, pid:17,   kids:[19,22,23],
       branches:["Global","Supply Chain"],           baselineYear:2021, targetYear:2029, functionArea:"Supply Chain"},

      // L2
      {id:19, name:"Tier 1 Suppliers — Packaging",     track:"Scope 3", objective:"−30%",  owner:"Lisa Chen",      region:"Europe",    actions:0, subTargets:2, depth:2, pid:18,   kids:[20,21],
       branches:["Europe","Packaging"],              baselineYear:2021, targetYear:2029, functionArea:"Packaging"},

      // L3
      {id:20, name:"Packaging — Plastics",             track:"Scope 3", objective:"−35%",  owner:"Lisa Chen",      region:"Europe",    actions:2, subTargets:0, depth:3, pid:19,   kids:[],
       branches:["Europe","Packaging"],              baselineYear:2022, targetYear:2029, functionArea:"Packaging"},
      {id:21, name:"Packaging — Cardboard",            track:"Scope 3", objective:"−25%",  owner:"Lisa Chen",      region:"Europe",    actions:1, subTargets:0, depth:3, pid:19,   kids:[],
       branches:["Europe","Packaging"],              baselineYear:2022, targetYear:2029, functionArea:"Packaging"},

      // L2
      {id:22, name:"Tier 1 Suppliers — Raw Materials", track:"Scope 3", objective:"−20%",  owner:"Lisa Chen",      region:"Global",    actions:0, subTargets:0, depth:2, pid:18,   kids:[],
       branches:["Global","Supply Chain"],           baselineYear:2021, targetYear:2029, functionArea:"Supply Chain"},
      {id:23, name:"Tier 2 Suppliers — Logistics",     track:"Scope 3", objective:"−15%",  owner:"Lisa Chen",      region:"Global",    actions:1, subTargets:0, depth:2, pid:18,   kids:[],
       branches:["Global","Supply Chain"],           baselineYear:2021, targetYear:2029, functionArea:"Supply Chain"},

      // L1
      {id:24, name:"Business Travel Reduction",        track:"Scope 3", objective:"−50%",  owner:"Sophie Martin",  region:"Global",    actions:3, subTargets:0, depth:1, pid:17,   kids:[],
       branches:["Global","Corporate"],              baselineYear:2021, targetYear:2029, functionArea:"Corporate"},
      {id:25, name:"Employee Commuting",               track:"Scope 3", objective:"−30%",  owner:"Pierre Dubois",  region:"France",    actions:1, subTargets:0, depth:1, pid:17,   kids:[],
       branches:["France","Corporate"],              baselineYear:2021, targetYear:2029, functionArea:"Corporate"},
      {id:26, name:"Logistics Optimization",           track:"Scope 3", objective:"−35%",  owner:"Hans Weber",     region:"Europe",    actions:0, subTargets:0, depth:1, pid:17,   kids:[],
       branches:["Europe","Supply Chain"],           baselineYear:2021, targetYear:2029, functionArea:"Supply Chain"},
      {id:27, name:"Digital Services Footprint",       track:"Scope 3", objective:"−20%",  owner:"James Miller",   region:"Americas",  actions:0, subTargets:0, depth:1, pid:17,   kids:[],
       branches:["Americas","IT"],                   baselineYear:2021, targetYear:2029, functionArea:"IT"},

      // ── Water ────────────────────────────────────────────────────────
      {id:28, name:"Reduce Water Consumption −20%",    track:"Water",   objective:"−20%",  owner:"Yuki Tanaka",    region:"APAC",      actions:0, subTargets:2, depth:0, pid:null, kids:[29,30],
       branches:["APAC"],                            baselineYear:2021, targetYear:2030, functionArea:"Operations"},

      // L1
      {id:29, name:"Cooling System Retrofit — Tokyo",  track:"Water",   objective:"−30%",  owner:"Yuki Tanaka",    region:"APAC",      actions:2, subTargets:0, depth:1, pid:28,   kids:[],
       branches:["APAC","Factory"],                  baselineYear:2021, targetYear:2029, functionArea:"Factory"},
      {id:30, name:"Water Recycling — Lyon Plant",     track:"Water",   objective:"−15%",  owner:"Pierre Dubois",  region:"France",    actions:1, subTargets:0, depth:1, pid:28,   kids:[],
       branches:["France","Factory"],                baselineYear:2021, targetYear:2029, functionArea:"Factory"},
    ]
  },

  fy2027: {
    name: 'FY2027 Ambitious Plan',
    date: 'Mar 22, 2026',
    targets: [
      {id:101, name:"Net Zero Scope 1",           track:"Scope 1", objective:"−100%", owner:"Marie Laurent",  region:"Global",    actions:2, subTargets:0, depth:0, pid:null, kids:[],
       branches:["Global"],                       baselineYear:2021, targetYear:2030, functionArea:"Corporate"},
      {id:102, name:"Net Zero Scope 2",           track:"Scope 2", objective:"−100%", owner:"Marie Laurent",  region:"Global",    actions:3, subTargets:0, depth:0, pid:null, kids:[],
       branches:["Global"],                       baselineYear:2021, targetYear:2030, functionArea:"Corporate"},
      {id:103, name:"Scope 3 Halving",            track:"Scope 3", objective:"−50%",  owner:"Lisa Chen",      region:"Global",    actions:1, subTargets:0, depth:0, pid:null, kids:[],
       branches:["Global","Supply Chain"],        baselineYear:2021, targetYear:2030, functionArea:"Supply Chain"},
      {id:104, name:"Full Renewable Energy",      track:"Scope 2", objective:"−100%", owner:"Sophie Martin",  region:"Europe",    actions:4, subTargets:0, depth:0, pid:null, kids:[],
       branches:["Europe","Operations"],          baselineYear:2021, targetYear:2030, functionArea:"Operations"},
      {id:105, name:"Zero Business Travel",       track:"Scope 3", objective:"−100%", owner:"Sophie Martin",  region:"Global",    actions:0, subTargets:0, depth:0, pid:null, kids:[],
       branches:["Global","Corporate"],           baselineYear:2021, targetYear:2030, functionArea:"Corporate"},
      {id:106, name:"Water Neutral Operations",   track:"Water",   objective:"−100%", owner:"Yuki Tanaka",    region:"APAC",      actions:0, subTargets:0, depth:0, pid:null, kids:[],
       branches:["APAC","Operations"],            baselineYear:2021, targetYear:2030, functionArea:"Operations"},
      {id:107, name:"Circular Packaging",         track:"Waste",   objective:"−100%", owner:"Hans Weber",     region:"Europe",    actions:2, subTargets:0, depth:0, pid:null, kids:[],
       branches:["Europe","Packaging"],           baselineYear:2021, targetYear:2030, functionArea:"Packaging"},
      {id:108, name:"Carbon Removal Investment",  track:"Scope 1", objective:"−20%",  owner:"James Miller",   region:"Americas",  actions:0, subTargets:0, depth:0, pid:null, kids:[],
       branches:["Americas","Corporate"],         baselineYear:2021, targetYear:2030, functionArea:"Corporate"},
    ]
  },

  conservative: {
    name: 'Conservative Baseline',
    date: 'Jan 15, 2026',
    targets: [
      {id:201, name:"Scope 1 Compliance", track:"Scope 1", objective:"−10%", owner:"Marie Laurent",  region:"Global",   actions:5, subTargets:0, depth:0, pid:null, kids:[],
       branches:["Global"],                    baselineYear:2021, targetYear:2030, functionArea:"Corporate"},
      {id:202, name:"Scope 2 Efficiency", track:"Scope 2", objective:"−15%", owner:"Sophie Martin",  region:"Europe",   actions:3, subTargets:0, depth:0, pid:null, kids:[],
       branches:["Europe","Operations"],       baselineYear:2021, targetYear:2030, functionArea:"Operations"},
      {id:203, name:"Supplier Basics",    track:"Scope 3", objective:"−5%",  owner:"Lisa Chen",      region:"Global",   actions:2, subTargets:0, depth:0, pid:null, kids:[],
       branches:["Global","Supply Chain"],     baselineYear:2021, targetYear:2030, functionArea:"Supply Chain"},
      {id:204, name:"Water Monitoring",   track:"Water",   objective:"−5%",  owner:"Yuki Tanaka",    region:"APAC",     actions:1, subTargets:0, depth:0, pid:null, kids:[],
       branches:["APAC","Operations"],         baselineYear:2021, targetYear:2030, functionArea:"Operations"},
      {id:205, name:"Waste Reporting",    track:"Waste",   objective:"−10%", owner:"Hans Weber",     region:"Germany",  actions:1, subTargets:0, depth:0, pid:null, kids:[],
       branches:["Germany","Operations"],      baselineYear:2021, targetYear:2030, functionArea:"Operations"},
    ]
  }
};

const SCENARIO_ORDER = ['fy2026','fy2027','conservative'];
