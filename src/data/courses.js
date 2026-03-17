// ============================================================
// UPSKILL ENERGY — COURSE DATA
// All course content, modules, quizzes, and assessments
// ============================================================

export const PATHWAYS = [
  { id: 'energy-ready', name: 'Energy Ready', subtitle: 'New Entrants', color: 'blue' },
  { id: 'process-safety', name: 'Process Safety', subtitle: 'Safety Professionals', color: 'yellow' },
  { id: 'energy-transition', name: 'Energy Transition', subtitle: 'O&G Transition', color: 'green' },
  { id: 'leadership', name: 'Leadership & Competence', subtitle: 'Managers & Leaders', color: 'purple' },
];

// ============================================================
// COURSE 1: ENERGY SECTOR FUNDAMENTALS
// ============================================================

const course1Modules = [
  {
    id: 'esf-m1',
    title: 'Introduction to the Energy Sector',
    duration: '25 min',
    content: `
<h2>How the Energy Industry is Structured</h2>
<p>The energy sector is one of the world's largest and most complex industries, responsible for extracting, processing, and delivering the fuels and power that underpin every aspect of modern civilisation. To work effectively in this sector — in any role — you must understand how the different segments connect, who the key players are, and why the industry operates the way it does.</p>
<p>At its most fundamental level, the energy sector divides into three broad segments: <strong>upstream</strong>, <strong>midstream</strong>, and <strong>downstream</strong> operations. These terms originate from oil and gas, but they map loosely onto other energy forms too.</p>

<h3>The Three Segments</h3>
<p><strong>Upstream</strong> refers to the exploration and production (E&P) phase. This is where companies search for hydrocarbon reservoirs beneath the earth's surface, drill wells to access those reservoirs, and bring oil and gas to the surface. Upstream operations are characterised by high capital expenditure, technical complexity, and significant geological risk.</p>
<p><strong>Midstream</strong> covers the transportation and storage of hydrocarbons between the production site and the refinery or end user. This includes pipelines (both onshore and subsea), tanker shipping, liquefied natural gas (LNG) terminals, and storage facilities. Midstream assets are often regulated as quasi-utilities because they form critical national infrastructure.</p>
<p><strong>Downstream</strong> encompasses refining, petrochemicals, and distribution to the end consumer. Refineries convert crude oil into usable products — petrol, diesel, aviation fuel, lubricants, and feedstocks for the chemical industry. Downstream operations are process-intensive and run continuously (24/7, 365 days a year).</p>

<div class="diagram-box">
  <div class="diagram-title">Energy Sector Value Chain</div>
  <pre>
  UPSTREAM              MIDSTREAM              DOWNSTREAM
  ─────────────────     ─────────────────      ──────────────────
  Seismic Survey   →    Pipeline Transport  →  Refinery Processing
  Exploration Well       LNG Terminals          Petrochemicals
  Production Well        Storage Tanks          Fuel Distribution
  Wellhead/Manifold      Tanker Shipping         Retail Forecourts
  Processing (FPSO)      Compression Stations    End Consumer
  </pre>
</div>

<h3>Key Organisations in the UK and Global Energy Sector</h3>
<p>Understanding who regulates and operates in this sector is essential for anyone pursuing a career in energy.</p>
<p><strong>OPITO</strong> (Offshore Petroleum Industry Training Organisation) is the global skills body for the energy industry. OPITO develops and maintains training standards used by operators worldwide — including the BOSIET (Basic Offshore Safety Induction and Emergency Training) that almost every offshore worker must hold before setting foot on an installation.</p>
<p><strong>The Health and Safety Executive (HSE)</strong> is the UK's primary regulator for major hazard industries including offshore oil and gas. Following the Piper Alpha disaster in 1988, the regulatory landscape shifted significantly, placing a duty on operators to produce Safety Cases demonstrating they can manage major accident hazards.</p>
<p><strong>NOCs vs IOCs</strong> — National Oil Companies (NOCs) such as Saudi Aramco, ADNOC, and Petrobras are owned by their respective governments and often hold the majority of the world's proven reserves. International Oil Companies (IOCs) such as Shell, BP, TotalEnergies, and ExxonMobil are publicly listed and operate globally. This distinction matters commercially and culturally — working for an NOC as a contractor, for example, has different expectations and compliance requirements than working for an IOC-operated asset.</p>

<h3>Why Energy Matters Globally</h3>
<p>Global primary energy demand currently sits at approximately 600 exajoules per year. Despite two decades of growth in renewables, fossil fuels still account for around 80% of that demand. The energy sector employs tens of millions of people directly and hundreds of millions indirectly through supply chains. Energy price volatility directly affects inflation, national security, and geopolitical stability.</p>
<p>For workers entering the sector, this means your work is genuinely consequential. An instrument technician maintaining a safety valve on a gas platform is protecting the integrity of infrastructure that supplies homes across a nation. Understanding that context is part of working professionally in this industry.</p>

<div class="diagram-box">
  <div class="diagram-title">Global Primary Energy Mix (Approximate)</div>
  <pre>
  Oil          ████████████████████  ~33%
  Coal         ███████████████       ~27%
  Natural Gas  ████████████████      ~24%
  Renewables   ████                   ~7%
  Nuclear      ███                    ~5%
  Other        ██                     ~4%
  (Hydropower included in Renewables)
  </pre>
</div>

<h3>The Integrated Supply Chain</h3>
<p>One of the most important mental models to develop early in your career is that the energy supply chain is fully integrated — a disruption at any point has cascading consequences. A shutdown of a major pipeline due to a compressor failure can affect gas supplies to millions of homes within hours. A refinery fire can cause regional fuel shortages within days. This interconnectedness explains why the sector places such high emphasis on asset integrity, planned maintenance, and robust operational procedures.</p>
<p>The supply chain also involves an enormous contractor ecosystem. The major operators typically employ relatively small permanent workforces and rely on a network of engineering, maintenance, and specialist contractors for much of their operational and project activity. For new entrants, this means many early-career roles will be with contractor companies rather than direct employment with an operator — which is not a disadvantage. Contractors gain broad exposure across multiple assets and client organisations.</p>

<div class="terminology-box">
  <div class="term-title">Key Terminology — Module 1</div>
  <dl>
    <dt>Upstream</dt><dd>Exploration and production phase of the oil and gas value chain</dd>
    <dt>Midstream</dt><dd>Transportation, storage, and processing between production and refining</dd>
    <dt>Downstream</dt><dd>Refining, petrochemicals, and distribution to end consumers</dd>
    <dt>OPITO</dt><dd>Offshore Petroleum Industry Training Organisation — the global skills body for energy sector training standards</dd>
    <dt>NOC</dt><dd>National Oil Company — state-owned energy company, e.g. Saudi Aramco, ADNOC</dd>
    <dt>IOC</dt><dd>International Oil Company — publicly listed, privately owned, e.g. Shell, BP, TotalEnergies</dd>
    <dt>HSE</dt><dd>Health and Safety Executive — UK regulator for major hazard industries</dd>
    <dt>Safety Case</dt><dd>Operator's formal demonstration to the regulator that major accident hazards are understood and controlled</dd>
    <dt>E&P</dt><dd>Exploration and Production — the upstream business of finding and producing hydrocarbons</dd>
    <dt>Exajoule</dt><dd>Unit of energy equal to 10^18 joules, used for measuring global energy consumption</dd>
  </dl>
</div>
    `,
    quiz: [
      {
        id: 'esf-m1-q1',
        question: 'Which segment of the oil and gas value chain covers the transportation and storage of hydrocarbons between production sites and refineries?',
        options: ['Upstream', 'Midstream', 'Downstream', 'Petrochemicals'],
        correct: 1,
      },
      {
        id: 'esf-m1-q2',
        question: 'What does OPITO stand for, and what is its primary function?',
        options: [
          'Offshore Personnel Insurance and Training Organisation — provides insurance for offshore workers',
          'Offshore Petroleum Industry Training Organisation — develops and maintains energy sector training standards',
          'Oil and Petroleum Industry Technical Organisation — certifies drilling equipment',
          'Operational Performance and Industry Training Office — manages HSE compliance',
        ],
        correct: 1,
      },
      {
        id: 'esf-m1-q3',
        question: 'A National Oil Company (NOC) differs from an International Oil Company (IOC) primarily because:',
        options: [
          'NOCs only operate in the upstream sector while IOCs operate across the full value chain',
          'NOCs are owned by their national governments and typically hold large domestic reserves',
          'NOCs are larger by revenue than all IOCs combined',
          'IOCs are prohibited from operating in countries with NOCs',
        ],
        correct: 1,
      },
      {
        id: 'esf-m1-q4',
        question: 'Fossil fuels currently account for approximately what percentage of global primary energy consumption?',
        options: ['45%', '60%', '80%', '95%'],
        correct: 2,
      },
    ],
  },
  {
    id: 'esf-m2',
    title: 'Upstream Operations',
    duration: '30 min',
    content: `
<h2>Exploration, Drilling, and Production</h2>
<p>Upstream operations represent the beginning of the oil and gas value chain: finding hydrocarbons underground and bringing them to surface. It is the most technically demanding and capital-intensive phase of the business, and it generates the raw material — crude oil and natural gas — that the rest of the industry depends on.</p>
<p>Understanding upstream operations is essential even if your role sits in maintenance, operations, or logistics — because the decisions made during exploration and field development shape the physical infrastructure you will work on for decades.</p>

<h3>The Exploration Phase</h3>
<p>Before a single well is drilled, geoscientists and geophysicists spend months — sometimes years — analysing data to identify where hydrocarbons might be trapped beneath the surface. The primary tool is <strong>seismic surveying</strong>, which uses sound waves to create detailed subsurface images. On land, vibrator trucks generate controlled vibrations; offshore, air guns towed behind survey vessels emit acoustic pulses that reflect off geological layers.</p>
<p>Seismic data reveals structures — folds, faults, salt bodies, reef formations — that could trap oil or gas. However, seismic cannot tell you directly whether a trap contains hydrocarbons, water, or nothing at all. Only drilling an exploration well (also called a "wildcat" well) provides definitive proof.</p>
<p>Exploration wells are expensive — a typical deepwater well can cost $100–200 million — and the majority find nothing commercial. The global exploration success rate hovers around 30–40%, meaning most exploration wells are "dry holes." This risk is a fundamental characteristic of the upstream business.</p>

<h3>Reservoir Fundamentals</h3>
<p>A hydrocarbon reservoir is a porous and permeable rock formation in which oil or gas has accumulated, sealed by an impermeable cap rock. The most common reservoir rocks are <strong>sandstone</strong> and <strong>carbonate</strong> (limestone/dolomite).</p>
<p>Three conditions must exist for a viable reservoir:</p>
<ul>
  <li><strong>Source rock</strong> — organic-rich material that generated the hydrocarbons through heat and pressure over millions of years</li>
  <li><strong>Migration pathway</strong> — a route through which hydrocarbons migrated from the source rock to the trap</li>
  <li><strong>Trap and seal</strong> — a geological structure that prevents the hydrocarbons from escaping</li>
</ul>
<p>Reservoir characteristics that determine productivity include <strong>porosity</strong> (the percentage of void space in the rock, typically 5–30%) and <strong>permeability</strong> (how easily fluid flows through the rock, measured in millidarcies). A high-porosity, high-permeability reservoir will flow freely; a tight reservoir may require stimulation techniques like hydraulic fracturing to produce economically.</p>

<div class="diagram-box">
  <div class="diagram-title">Cross-Section: Anticlinal Trap (Most Common Trap Type)</div>
  <pre>
  Surface
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
       ↓ Cap Rock (Impermeable Shale)
      ╱─────────────────────────────╲
     ╱   GAS (lightest, at top)      ╲
    ╱──────────────────────────────────╲
   ╱   OIL                              ╲
  ╱─────────────────────────────────────╲
 ╱   WATER (heaviest, always present)   ╲
╱─────────────────────────────────────────╲
  </pre>
</div>

<h3>Drilling Operations</h3>
<p>Once a prospect is identified and a decision to drill made, a drilling rig is mobilised. The type of rig depends on location: onshore wells use land rigs; offshore wells use jack-up rigs (in shallow water up to ~150m), semi-submersible rigs (deepwater), or drillships (ultra-deepwater, up to 3,000m+ water depth).</p>
<p>The core drilling process involves rotating a drill bit attached to sections of steel pipe (the <strong>drillstring</strong>) into the ground. Drilling fluid — known as <strong>mud</strong> — is pumped down the drillstring and returns to surface via the annulus between the drillstring and the wellbore. Mud serves multiple purposes: it cools the bit, carries drill cuttings to surface, stabilises the wellbore walls, and critically, its hydrostatic pressure controls formation pressure to prevent a <strong>blowout</strong>.</p>
<p>The <strong>Blowout Preventer (BOP)</strong> is the primary well control device, mounted on top of the well at surface (or on the seabed for subsea completions). It contains a series of rams and annular preventers capable of sealing around the drillstring or cutting through it entirely in an emergency. The BOP failure at Macondo (Deepwater Horizon, 2010) resulted in eleven deaths and the largest accidental marine oil spill in history — it is the defining case study in well control.</p>

<h3>Offshore vs Onshore Operations</h3>
<p>The distinction between offshore and onshore operations goes beyond geography. Offshore environments present unique challenges: personnel are isolated from onshore medical and emergency services, evacuation is limited to helicopters and lifeboats, and structural integrity is challenged by wave loading, corrosion, and fatigue. These factors drive the significantly higher cost of offshore operations (typically 3–10x the equivalent onshore cost) and the stringent safety requirements — BOSIET, HUET, medical fitness certificates — placed on all offshore workers.</p>
<p>Onshore operations vary enormously in environment: from the North Sea coast to desert environments in the Middle East to arctic tundra. Each environment introduces specific hazards — sand ingress, H2S concentrations, extreme temperature, seismic activity — that modify the operational approach.</p>

<h3>Production and Wellhead Equipment</h3>
<p>Once a well is completed and ready to flow, it is equipped with a <strong>Wellhead</strong> — the surface assembly of valves, fittings, and connections that controls and monitors the flow of hydrocarbons. The wellhead includes the <strong>Christmas Tree</strong> (a vertical arrangement of valves) and connects to the surface processing system via flowlines.</p>
<p>Produced fluids from a well are almost never pure oil or gas — they are typically a mixture of oil, water, and gas. The processing facility (whether a platform, FPSO, or onshore terminal) separates these phases using a train of pressure vessels called <strong>separators</strong>. The oil and gas are then treated and metered before export via pipeline or tanker.</p>

<div class="diagram-box">
  <div class="diagram-title">Simplified Wellhead and Christmas Tree</div>
  <pre>
  CHRISTMAS TREE
  ┌────────────────┐
  │  Wing Valve    │◄── Flow to Production Manifold
  │  Master Valve  │
  │  Tubing Hanger │
  │  Casing Head   │
  └───────┬────────┘
          │ Production Casing
          │
     ────────────────  Wellhead Flange (at surface)
          │
         Well (1,000–5,000m depth)
          │
       Perforations ──► Reservoir (Oil/Gas flows in)
  </pre>
</div>

<div class="terminology-box">
  <div class="term-title">Key Terminology — Module 2</div>
  <dl>
    <dt>Wildcat Well</dt><dd>An exploration well drilled in an unproven area with high geological risk</dd>
    <dt>BOP</dt><dd>Blowout Preventer — the primary well control device that seals the wellbore in an emergency</dd>
    <dt>Drillstring</dt><dd>The rotating column of steel pipe that transmits torque and weight to the drill bit</dd>
    <dt>Drilling Mud</dt><dd>Circulating fluid that cools the bit, carries cuttings, and controls formation pressure</dd>
    <dt>Porosity</dt><dd>The percentage of void space in a rock formation capable of storing hydrocarbons</dd>
    <dt>Permeability</dt><dd>The ability of a rock to allow fluid to flow through it (measured in millidarcies)</dd>
    <dt>Christmas Tree</dt><dd>The assembly of valves and fittings at the top of a completed well controlling production flow</dd>
    <dt>FPSO</dt><dd>Floating Production, Storage, and Offloading vessel — a ship-shaped facility for deepwater production</dd>
    <dt>Jack-up Rig</dt><dd>Self-elevating offshore drilling platform used in shallow waters up to ~150m depth</dd>
    <dt>BOSIET</dt><dd>Basic Offshore Safety Induction and Emergency Training — mandatory for offshore workers</dd>
  </dl>
</div>
    `,
    quiz: [
      {
        id: 'esf-m2-q1',
        question: 'What is the primary purpose of drilling fluid ("mud") during a well drilling operation?',
        options: [
          'To lubricate the casing and prevent corrosion',
          'To cool the drill bit, carry cuttings to surface, and control formation pressure',
          'To seal the reservoir and prevent gas migration',
          'To reduce the weight of the drillstring',
        ],
        correct: 1,
      },
      {
        id: 'esf-m2-q2',
        question: 'Three essential geological conditions must exist for a viable hydrocarbon reservoir. Which of the following is NOT one of them?',
        options: [
          'A source rock that generated hydrocarbons',
          'A migration pathway from source to trap',
          'A trap and seal preventing hydrocarbon escape',
          'A surface topographic high directly above the reservoir',
        ],
        correct: 3,
      },
      {
        id: 'esf-m2-q3',
        question: 'The Deepwater Horizon (Macondo) blowout in 2010 was primarily caused by:',
        options: [
          'Corrosion failure of the production casing',
          'Failure of the Blowout Preventer (BOP) to seal the well',
          'An earthquake that displaced the wellhead',
          'A gas cloud ignited by static electricity on the rig floor',
        ],
        correct: 1,
      },
      {
        id: 'esf-m2-q4',
        question: 'What type of offshore drilling rig is designed for ultra-deepwater operations at depths exceeding 1,500 metres?',
        options: ['Jack-up rig', 'Barge-mounted rig', 'Drillship or semi-submersible', 'Tension-leg platform'],
        correct: 2,
      },
      {
        id: 'esf-m2-q5',
        question: 'In an anticlinal trap, hydrocarbons accumulate because:',
        options: [
          'The anticline creates sufficient heat to generate hydrocarbons in situ',
          'The arch-shaped rock structure traps buoyant hydrocarbons beneath an impermeable cap rock',
          'Faults on either side of the anticline prevent lateral migration',
          'The high surface area of anticlines provides more pore space',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'esf-m3',
    title: 'Downstream Operations',
    duration: '25 min',
    content: `
<h2>Refining, Petrochemicals, and Distribution</h2>
<p>Downstream operations begin where midstream ends: crude oil and natural gas liquids arrive at the refinery, and the task is to transform these raw materials into the range of products that society depends on. Understanding downstream is important not only for those working in refineries but for anyone in the energy sector, because the economic viability of upstream production is ultimately determined by the value of what the refinery produces.</p>

<h3>What Crude Oil Is</h3>
<p>Crude oil is not a uniform substance. It varies enormously in composition depending on its geological origin. Key properties include:</p>
<ul>
  <li><strong>API Gravity</strong> — a measure of density. Light crude (API > 31°) flows easily and yields more valuable products. Heavy crude (API < 22°) is viscous, harder to process, and typically sells at a discount.</li>
  <li><strong>Sulphur content</strong> — "sweet" crude has low sulphur (< 0.5%), "sour" crude has high sulphur. Sour crude requires additional processing and has lower value.</li>
  <li><strong>Viscosity</strong> — affects pumpability and processing requirements</li>
</ul>
<p>Crude pricing benchmarks reflect these characteristics. <strong>Brent Crude</strong> (North Sea) and <strong>WTI</strong> (West Texas Intermediate) are the primary global price benchmarks. Crudes are priced relative to these benchmarks — a discount for heavy/sour grades, a premium for light/sweet grades.</p>

<h3>Atmospheric Distillation — The Core Process</h3>
<p>The refinery process begins with <strong>Atmospheric Distillation</strong> in the Crude Distillation Unit (CDU). Crude oil is heated in a furnace to around 350°C and fed into a tall distillation column (typically 40–60 metres high). Inside the column, different hydrocarbon fractions — which boil at different temperatures — separate and are drawn off at different heights as they condense.</p>

<div class="diagram-box">
  <div class="diagram-title">Atmospheric Distillation Column — Product Fractions by Boiling Point</div>
  <pre>
  COLUMN TOP (coldest ~35°C)
  ┌──────────────────────────────────────────┐
  │  ↑ LPG / Refinery Gas (C1-C4)            │ Fuel gas, cooking gas
  ├──────────────────────────────────────────┤
  │  Naphtha (70–180°C)                       │ Petrol blending, petrochemicals
  ├──────────────────────────────────────────┤
  │  Kerosene / Jet Fuel (150–270°C)          │ Aviation fuel, heating
  ├──────────────────────────────────────────┤
  │  Gas Oil / Diesel (200–360°C)             │ Road diesel, heating oil
  ├──────────────────────────────────────────┤
  │  Heavy Gas Oil (300–540°C)                │ Feedstock for cracking
  ├──────────────────────────────────────────┤
  │  ↓ Atmospheric Residue (>540°C)           │ Bitumen, fuel oil, or further processing
  └──────────────────────────────────────────┘
  COLUMN BOTTOM (hottest ~350°C)
  </pre>
</div>

<h3>Secondary Processing — Upgrading the Barrel</h3>
<p>Simple distillation alone is insufficient for a modern refinery because the market wants more light products (petrol, diesel, jet fuel) than crude oil naturally contains. Secondary processing units upgrade heavy fractions into more valuable lighter products.</p>
<p><strong>Fluid Catalytic Cracking (FCC)</strong> is the most important secondary process in a modern refinery. Heavy gas oil is brought into contact with a hot catalyst (typically at 500–550°C), causing the large hydrocarbon molecules to "crack" into smaller, more valuable ones — primarily petrol (gasoline) and LPG. The FCC unit is one of the most complex and valuable pieces of equipment in any refinery.</p>
<p><strong>Hydrocracking</strong> uses hydrogen and a catalyst to crack heavy molecules under high pressure. It produces higher-quality products than FCC and is increasingly important as demand for diesel and jet fuel grows relative to petrol.</p>
<p><strong>Reforming</strong> restructures the molecular shape of naphtha to produce high-octane gasoline blending components and hydrogen. Reformers are also significant sources of the hydrogen needed by other refinery units.</p>
<p><strong>Vacuum Distillation</strong> further processes the atmospheric residue by reducing pressure (to approximately 10 mmHg), allowing heavier fractions to boil at lower temperatures without thermal cracking. Products include vacuum gas oil (feedstock for FCC/hydrocracking) and vacuum residue (for bitumen or coking).</p>

<h3>Key Refined Products</h3>
<p>The refinery output includes a wide range of products, each with specific quality specifications regulated by national and international standards:</p>
<ul>
  <li><strong>Petrol (Motor Spirit)</strong> — blended to meet octane rating (RON) requirements. Contains additives to meet emissions regulations.</li>
  <li><strong>Diesel</strong> — must meet cetane rating and sulphur content limits (Ultra-Low Sulphur Diesel has maximum 10 ppm sulphur in Europe)</li>
  <li><strong>Jet Fuel (Jet A-1)</strong> — stringent specifications for freezing point and thermal stability. Aviation safety demands extremely tight quality control.</li>
  <li><strong>LPG (Liquefied Petroleum Gas)</strong> — predominantly propane and butane. Used for heating, cooking, and petrochemical feedstock.</li>
  <li><strong>Bitumen</strong> — the heaviest fraction, used for road surfacing and waterproofing</li>
  <li><strong>Naphtha</strong> — primary feedstock for the petrochemical industry (ethylene crackers)</li>
</ul>

<h3>The Petrochemical Industry</h3>
<p>Petrochemicals are chemical products derived from oil and gas. The petrochemical industry uses refinery products (primarily naphtha, ethane, and propane) as feedstocks to produce the basic chemicals from which plastics, synthetic fibres, fertilisers, pharmaceuticals, and thousands of industrial materials are made.</p>
<p>The most important petrochemical process is <strong>steam cracking</strong>, which produces <strong>ethylene</strong> — the single most produced organic chemical in the world. Ethylene polymerises to form polyethylene (the world's most common plastic) and is the precursor to a vast range of other chemicals including vinyl chloride (PVC), ethylene oxide, and styrene.</p>

<div class="terminology-box">
  <div class="term-title">Key Terminology — Module 3</div>
  <dl>
    <dt>API Gravity</dt><dd>American Petroleum Institute measure of crude oil density — higher API = lighter, more valuable crude</dd>
    <dt>Sweet Crude</dt><dd>Crude oil with low sulphur content (< 0.5%), easier and cheaper to refine</dd>
    <dt>Atmospheric Distillation</dt><dd>The primary separation of crude oil into fractions by boiling point in a distillation column</dd>
    <dt>FCC</dt><dd>Fluid Catalytic Cracking — converts heavy gas oil into petrol and LPG using a catalyst at high temperature</dd>
    <dt>Brent Crude</dt><dd>North Sea crude oil benchmark used to price approximately two-thirds of global traded crude</dd>
    <dt>Naphtha</dt><dd>Light distillate fraction used as petrol blending component and petrochemical feedstock</dd>
    <dt>Cetane Number</dt><dd>Measure of diesel fuel ignition quality — higher cetane = better ignition performance</dd>
    <dt>Ethylene</dt><dd>The most important petrochemical building block, produced by steam cracking of naphtha or ethane</dd>
    <dt>RON</dt><dd>Research Octane Number — measure of petrol's resistance to knocking in an engine</dd>
    <dt>ULSD</dt><dd>Ultra-Low Sulphur Diesel — road diesel with maximum 10 ppm sulphur, standard in Europe</dd>
  </dl>
</div>
    `,
    quiz: [
      {
        id: 'esf-m3-q1',
        question: 'In an atmospheric distillation column, products are separated because:',
        options: [
          'Different hydrocarbons have different densities and settle at different levels',
          'Different hydrocarbon fractions have different boiling points and condense at different heights in the column',
          'A catalyst selectively reacts with specific hydrocarbons at each draw-off point',
          'Pressure increases with column height, causing heavier fractions to migrate upward',
        ],
        correct: 1,
      },
      {
        id: 'esf-m3-q2',
        question: 'What is the primary purpose of Fluid Catalytic Cracking (FCC) in a refinery?',
        options: [
          'To remove sulphur from diesel fuel to meet environmental standards',
          'To separate crude oil into initial fractions before further processing',
          'To convert heavy gas oil fractions into more valuable light products like petrol and LPG',
          'To produce hydrogen for use in other refinery units',
        ],
        correct: 2,
      },
      {
        id: 'esf-m3-q3',
        question: 'A crude oil described as "sour" means:',
        options: [
          'It has high API gravity and is therefore light and easy to process',
          'It has high sulphur content, requiring additional processing and commanding a price discount',
          'It contains acidic compounds that corrode pipelines during transport',
          'It has been contaminated with seawater during offshore production',
        ],
        correct: 1,
      },
      {
        id: 'esf-m3-q4',
        question: 'Ethylene is described as the most important petrochemical building block because:',
        options: [
          'It is used directly as a fuel in most industrial processes',
          'It is the primary feedstock for diesel and jet fuel production',
          'It polymerises to form polyethylene and is the precursor for a vast range of plastics and industrial chemicals',
          'It is the lightest compound in crude oil and therefore the easiest to extract',
        ],
        correct: 2,
      },
    ],
  },
  {
    id: 'esf-m4',
    title: 'Safety Culture in Energy',
    duration: '30 min',
    content: `
<h2>Why Safety Culture is the Foundation of Everything</h2>
<p>The energy sector operates at scale in environments that carry genuine major accident potential. Pressure vessels operating at hundreds of bar, flammable and toxic hydrocarbons, high-voltage electrical systems, heavy equipment, working at height, confined spaces, extreme weather — these hazards are inherent to the work. The difference between an organisation with an excellent safety record and one with a poor one is rarely the hazards they face. It is almost always the <em>culture</em> with which those hazards are managed.</p>
<p>Safety culture is not about wearing PPE correctly (although that matters). It is the collective values, beliefs, and behaviours of an organisation that determine how seriously it takes the management of risk. A strong safety culture means that every person — from the CEO to the newest apprentice — genuinely believes that no job is worth doing in an unsafe way, and acts accordingly.</p>

<h3>HSSE Management Systems</h3>
<p><strong>HSSE</strong> stands for Health, Safety, Security, and Environment. Major energy operators operate formal HSSE Management Systems (MS) that define how safety is organised, planned, implemented, and verified across their operations. These systems are typically structured around the <strong>Plan-Do-Check-Act (PDCA)</strong> cycle and must comply with both regulatory requirements and industry standards.</p>
<p>Key elements of an HSSE Management System include:</p>
<ul>
  <li><strong>Policy and Leadership</strong> — visible commitment from senior management; clear HSSE policy statements</li>
  <li><strong>Risk Assessment</strong> — systematic identification and evaluation of hazards before work begins</li>
  <li><strong>Procedures and Work Instructions</strong> — documented safe methods of working for all routine and non-routine tasks</li>
  <li><strong>Competence</strong> — ensuring all personnel have the training and skills for their roles</li>
  <li><strong>Incident Reporting and Investigation</strong> — learning from what goes wrong (and what nearly goes wrong)</li>
  <li><strong>Audits and Inspections</strong> — regular verification that the system is working</li>
</ul>
<p>Regulatory frameworks such as the UK's <em>Offshore Installations (Safety Case) Regulations</em> require operators to produce a Safety Case — a formal document demonstrating that they understand the major accident hazards on their installation and have adequate controls in place. The Safety Case is not a bureaucratic exercise; it is the operator's contractual commitment to their workforce and regulator that they have thought seriously about what could kill people.</p>

<h3>The Incident Pyramid — Heinrich and Beyond</h3>
<p>Herbert Heinrich's 1930s research produced the first version of what became the "accident triangle" or incident pyramid. His original ratio (1 serious injury : 29 minor injuries : 300 near misses) has been revised and debated since, but the underlying principle remains sound: <strong>major accidents are rarely random events — they are preceded by a pattern of smaller incidents and near misses that, if investigated and addressed, would have prevented the major event.</strong></p>

<div class="diagram-box">
  <div class="diagram-title">Incident Pyramid — The Safety Triangle</div>
  <pre>
              ▲
             ╱▲╲          1 Fatal / Major Injury
            ╱───╲
           ╱  10  ╲        Serious Injuries / Lost Time
          ╱─────────╲
         ╱    30      ╲    Medical Treatment Cases
        ╱───────────────╲
       ╱      300         ╲  Near Misses / First Aid
      ╱───────────────────╲
     ╱       3,000           ╲  Unsafe Acts / Unsafe Conditions
    ╱─────────────────────────╲
  (Modern ratios vary — the principle is what matters)
  </pre>
</div>

<p>This model has significant implications for how organisations should approach safety. An organisation focused only on serious injuries and fatalities is fighting at the top of the pyramid — by the time you get there, the opportunity to prevent the event has already passed. Effective safety management focuses on the base: identifying and eliminating unsafe conditions and behaviours before they escalate.</p>

<h3>Stop Work Authority</h3>
<p><strong>Stop Work Authority (SWA)</strong> is one of the most important safety principles in the energy sector. It means that every worker — regardless of seniority, regardless of the commercial pressure to complete a job, regardless of whether they are a contractor or a direct employee — has not only the <em>right</em> but the <em>obligation</em> to stop any work they believe is unsafe.</p>
<p>In practice, exercising SWA requires courage. There is often implicit or explicit pressure to "get the job done" — particularly on offshore installations where weather windows are short and day rates are high. An effective safety culture is one where workers feel psychologically safe using SWA without fear of retaliation, ridicule, or adverse employment consequences. Leading operators measure this through safety climate surveys and take SWA reporting rates seriously — a high rate of SWA use generally indicates a healthy culture, not a problematic workforce.</p>

<h3>Human Factors</h3>
<p>Human error contributes to approximately 80% of all industrial accidents. This is not because humans are incompetent — it is because humans are working in systems that are poorly designed, inadequately supported, or under conditions (fatigue, distraction, time pressure, unclear communication) that make errors more likely.</p>
<p><strong>Human Factors</strong> is the discipline of understanding how people interact with their work systems and designing those systems to reduce the probability of error and mitigate its consequences. Key human factors principles relevant to the energy sector include:</p>
<ul>
  <li><strong>Situational Awareness</strong> — understanding what is happening around you, what will happen next, and what that means for safety. Loss of situational awareness is a precursor to many major accidents.</li>
  <li><strong>Task Distraction and Interruption</strong> — a significant cause of errors in operations and maintenance. Good procedure design includes hold points and checks to re-establish situational awareness after interruptions.</li>
  <li><strong>Fatigue</strong> — impairs judgement, slows reaction times, and increases error rates. Offshore shift patterns (12-hour shifts, 2-4 week rotations) are designed with fatigue management in mind, but the risks remain.</li>
  <li><strong>Communications</strong> — misunderstood verbal instructions, incomplete handovers, and ambiguous written procedures are disproportionately represented in incident investigations.</li>
</ul>

<div class="terminology-box">
  <div class="term-title">Key Terminology — Module 4</div>
  <dl>
    <dt>HSSE</dt><dd>Health, Safety, Security, and Environment — the combined domain of risk management in energy operations</dd>
    <dt>Safety Case</dt><dd>Formal regulatory document demonstrating an operator's understanding and control of major accident hazards</dd>
    <dt>Stop Work Authority</dt><dd>The right and obligation of any worker to stop unsafe work, regardless of seniority</dd>
    <dt>Near Miss</dt><dd>An unplanned event that did not result in injury or damage but had the potential to do so</dd>
    <dt>Human Factors</dt><dd>The study of how human performance is affected by work system design, environment, and individual factors</dd>
    <dt>PDCA</dt><dd>Plan-Do-Check-Act — the continuous improvement cycle underpinning HSSE management systems</dd>
    <dt>Situational Awareness</dt><dd>Real-time understanding of one's environment, system state, and the implications for safety</dd>
    <dt>Safety Climate</dt><dd>The measurable, surface-level expression of safety culture at a point in time — captured through surveys and observation</dd>
    <dt>Lost Time Incident (LTI)</dt><dd>A workplace injury that results in the worker being unable to return to work on the next scheduled shift</dd>
    <dt>Major Accident Hazard</dt><dd>A hazard with potential to cause multiple fatalities, major environmental damage, or significant asset loss</dd>
  </dl>
</div>
    `,
    quiz: [
      {
        id: 'esf-m4-q1',
        question: 'The incident pyramid (safety triangle) demonstrates that:',
        options: [
          'Fatal accidents are unrelated to the frequency of minor incidents in the same workplace',
          'Major accidents are typically preceded by a pattern of smaller incidents and near misses that could have been addressed',
          'The ratio of near misses to fatalities is exactly 300:1 in all industrial environments',
          'Personal injury incidents are more important to track than process safety events',
        ],
        correct: 1,
      },
      {
        id: 'esf-m4-q2',
        question: 'Stop Work Authority (SWA) means:',
        options: [
          'Only supervisors and above have the authority to stop a job in progress',
          'Work can only be stopped if a formal risk assessment has been completed first',
          'Every worker has the right and obligation to stop any work they believe is unsafe, regardless of seniority',
          'SWA applies only to contractors, not permanent employees',
        ],
        correct: 2,
      },
      {
        id: 'esf-m4-q3',
        question: 'Human error contributes to approximately what percentage of industrial accidents?',
        options: ['20%', '40%', '60%', '80%'],
        correct: 3,
      },
      {
        id: 'esf-m4-q4',
        question: 'What does HSSE stand for in the energy industry?',
        options: [
          'Hazards, Safety Systems, and Environmental Engineering',
          'Health, Safety, Security, and Environment',
          'High-Severity Safety Events',
          'Hydrocarbon Safety and Spill Engineering',
        ],
        correct: 1,
      },
      {
        id: 'esf-m4-q5',
        question: 'A Safety Case in the offshore oil and gas sector is best described as:',
        options: [
          'A legal record of all accidents and near misses that have occurred on the installation',
          'A document produced by the HSE confirming an installation is safe to operate',
          'An operator\'s formal demonstration that major accident hazards are understood and controls are adequate',
          'A safety manual provided to all new offshore workers during induction',
        ],
        correct: 2,
      },
    ],
  },
  {
    id: 'esf-m5',
    title: 'Understanding Process Plants',
    duration: '35 min',
    content: `
<h2>Reading and Understanding Process Plant Documentation</h2>
<p>A process plant — whether an offshore oil and gas platform, an onshore gas terminal, a refinery, or a petrochemical facility — is a complex system of interconnected equipment designed to receive, process, and export hydrocarbons safely and efficiently. To work effectively in this environment, you must be able to read and understand the key documents that describe how the plant is designed and how it operates.</p>
<p>The two most important documents in process engineering are the <strong>Process Flow Diagram (PFD)</strong> and the <strong>Piping and Instrumentation Diagram (P&ID)</strong>. Understanding the difference between them — and when to use each — is fundamental.</p>

<h3>Process Flow Diagrams (PFDs)</h3>
<p>A PFD is a high-level schematic that shows the <em>overall flow</em> of a process. It identifies the major equipment items, the streams flowing between them (with compositions, temperatures, pressures, and flow rates), and the energy inputs and outputs. PFDs are used by engineers to design and analyse a process. They show <em>what</em> happens in the process, but not <em>how</em> the process is controlled or what safety systems are present.</p>
<p>On a PFD, you will typically find:</p>
<ul>
  <li>Major equipment (vessels, heat exchangers, pumps, compressors) shown as standard symbols</li>
  <li>Process streams shown as lines with arrows indicating flow direction</li>
  <li>Key operating parameters (temperature, pressure, flow rate) on each stream</li>
  <li>Material and energy balances around the process</li>
</ul>

<h3>Piping and Instrumentation Diagrams (P&IDs)</h3>
<p>P&IDs are the working documents of the plant. They show <em>everything</em>: every pipe, every valve, every instrument, every control loop, every safety device, and how they are all connected. For an operator, technician, or engineer working on a live plant, the P&ID is the primary reference document for any task involving modification, maintenance, or troubleshooting of plant equipment.</p>
<p>P&IDs use standardised symbols (defined by ISA standard S5.1) to represent instruments and control elements. Key conventions:</p>
<ul>
  <li><strong>Instrument identification</strong> — each instrument has a tag number composed of a letter string (e.g., PIC-101). The letters describe the variable measured (P = Pressure, T = Temperature, F = Flow, L = Level) and the function (I = Indicating, C = Controlling, A = Alarm, V = Valve)</li>
  <li><strong>Control loops</strong> — a circle represents an instrument; the line connecting it to the controlled element shows whether it is local or in the control room</li>
  <li><strong>Safety devices</strong> — safety valves (PSV), rupture discs (RD), and emergency shutdown valves (ESD valves) are shown with specific symbols</li>
</ul>

<div class="diagram-box">
  <div class="diagram-title">P&ID Instrument Tag Structure</div>
  <pre>
  Tag: PIC - 101
       │││   └── Loop Number (sequential)
       ││└──── Third Letter: C = Controller
       │└───── Second Letter: I = Indicating
       └─────── First Letter: P = Pressure (measured variable)

  Common First Letters:  P=Pressure  T=Temperature  F=Flow  L=Level
  Common Function Letters: I=Indicator  C=Controller  A=Alarm  T=Transmitter  V=Valve

  Example Tag:   FCV-205 = Flow Control Valve, Loop 205
                 PSHL-118 = Pressure Switch High-Low, Loop 118
                 TIC-302 = Temperature Indicating Controller, Loop 302
  </pre>
</div>

<h3>Key Process Equipment</h3>
<p>Every process plant contains a set of core equipment types. Understanding their purpose and basic operating principles enables you to understand the plant's function and the significance of the readings and alarms you will encounter.</p>
<p><strong>Pressure Vessels</strong> are static containers designed to hold fluids (gas or liquid) at pressures significantly above atmospheric. They include separators, flash drums, reactors, and absorbers. Pressure vessels are designed to ASME VIII or PD 5500 standards and are subject to regular inspection regimes (including internal inspection and thickness testing) under the Pressure Systems Safety Regulations.</p>
<p><strong>Heat Exchangers</strong> transfer thermal energy between two fluid streams without mixing them. Types include shell-and-tube (the most common industrial type), plate-and-frame, and air-cooled exchangers. Heat exchangers are critical to process efficiency and are prone to fouling (deposits on heat transfer surfaces) and corrosion.</p>
<p><strong>Centrifugal Pumps</strong> transfer liquids by imparting kinetic energy using a rotating impeller, then converting that kinetic energy to pressure in a volute casing. They are the most common pump type in process plants. Key operating parameters are flow rate, differential pressure (head), and Net Positive Suction Head (NPSH) — cavitation occurs when suction pressure falls below the fluid's vapour pressure, causing the pump to lose prime and potentially damaging the impeller.</p>
<p><strong>Compressors</strong> are to gases what pumps are to liquids — they increase gas pressure. Centrifugal compressors are used for large flow rates at moderate pressure ratios; reciprocating compressors handle smaller flows at higher pressure ratios. Compressors are high-maintenance, high-value items and typically warrant their own dedicated monitoring and protection systems.</p>

<h3>Utilities Systems</h3>
<p>Process plants require a range of utility systems to support operations. These include:</p>
<ul>
  <li><strong>Instrument Air</strong> — dry, clean compressed air at typically 7 bar, used to operate pneumatic control valves and instruments. Instrument air failure is a significant process upset scenario because it causes valves to fail to their designed fail-safe position.</li>
  <li><strong>Flare Systems</strong> — receive hydrocarbon relief from safety valves, blowdowns, and manual depressurisation. Flares safely combust vapour releases. A flare system that cannot accept relief flow puts the entire plant at risk.</li>
  <li><strong>Cooling Water</strong> — circulated to cool process streams in heat exchangers. Cooling tower systems require chemical treatment to prevent scaling and biological growth (Legionella).</li>
  <li><strong>Steam</strong> — used for process heating, reboilers, turbine drives, and tracing (heat tracing of pipes to prevent freezing or wax deposition).</li>
</ul>

<div class="diagram-box">
  <div class="diagram-title">Simplified 3-Phase Separator — Basic Process Layout</div>
  <pre>
  Well Fluids In ──►┌─────────────────────────────────────┐
                    │         3-PHASE SEPARATOR            │
                    │                                      │
                    │  Gas ──────────────────────────────► Gas Export
                    │  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─           (via Scrubber)
                    │  Oil Layer                           │
                    │  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ──────►  Oil Export
                    │  Water Layer              (via pump) (to Storage/Pipeline)
                    └───────────────────────┬─────────────┘
                                            │
                                            ▼ Produced Water
                                       (to treatment/disposal)
  Controls: LIC (Level), PIC (Pressure), FIC (Flow) on each outlet
  </pre>
</div>

<div class="terminology-box">
  <div class="term-title">Key Terminology — Module 5</div>
  <dl>
    <dt>PFD</dt><dd>Process Flow Diagram — high-level schematic showing major equipment and process stream data</dd>
    <dt>P&ID</dt><dd>Piping and Instrumentation Diagram — detailed drawing showing all pipes, instruments, valves, and control elements</dd>
    <dt>Instrument Tag</dt><dd>Alphanumeric code identifying each instrument (e.g., PIC-101 = Pressure Indicating Controller, Loop 101)</dd>
    <dt>Pressure Vessel</dt><dd>Closed container designed to hold fluids at pressures above atmospheric, designed to ASME VIII or PD 5500</dd>
    <dt>PSV</dt><dd>Pressure Safety Valve — mechanical relief device that opens automatically when pressure exceeds a set point</dd>
    <dt>Cavitation</dt><dd>Formation and collapse of vapour bubbles in a centrifugal pump due to insufficient suction pressure, causing damage and loss of flow</dd>
    <dt>NPSH</dt><dd>Net Positive Suction Head — minimum suction pressure required to prevent cavitation in a centrifugal pump</dd>
    <dt>Instrument Air</dt><dd>Clean, dry compressed air supply used to operate pneumatic control valves and instruments</dd>
    <dt>Flare System</dt><dd>Safety system that safely disposes of hydrocarbon vapour releases through combustion</dd>
    <dt>ESD</dt><dd>Emergency Shutdown — a system that automatically initiates safe plant shutdown on detection of a hazardous condition</dd>
  </dl>
</div>
    `,
    quiz: [
      {
        id: 'esf-m5-q1',
        question: 'What is the primary difference between a Process Flow Diagram (PFD) and a Piping and Instrumentation Diagram (P&ID)?',
        options: [
          'PFDs are for offshore plants while P&IDs are used for onshore facilities only',
          'PFDs show overall process flow and operating conditions; P&IDs show all piping, instruments, valves, and control systems in detail',
          'PFDs are produced during detailed engineering; P&IDs are produced during conceptual design',
          'PFDs are regulatory documents; P&IDs are internal working documents only',
        ],
        correct: 1,
      },
      {
        id: 'esf-m5-q2',
        question: 'An instrument tagged "TIC-205" on a P&ID would be:',
        options: [
          'A turbine inlet control valve on loop 205',
          'A temperature indicating controller on loop 205',
          'A thermal isolation circuit on line 205',
          'A test instrument connection on vessel 205',
        ],
        correct: 1,
      },
      {
        id: 'esf-m5-q3',
        question: 'Cavitation in a centrifugal pump occurs when:',
        options: [
          'The pump speed exceeds its design maximum RPM',
          'The fluid temperature is too high, causing thermal expansion in the casing',
          'Suction pressure falls below the fluid\'s vapour pressure, causing vapour bubble formation and collapse',
          'The outlet valve is throttled too aggressively, creating back-pressure',
        ],
        correct: 2,
      },
      {
        id: 'esf-m5-q4',
        question: 'What happens to pneumatic control valves when instrument air supply fails?',
        options: [
          'They freeze in their last position until air pressure is restored',
          'They fail to their designed fail-safe position (either fail-open or fail-closed depending on design)',
          'They automatically switch to manual control mode',
          'They close fully regardless of their fail-safe design',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'esf-m6',
    title: 'The Energy Workforce',
    duration: '25 min',
    content: `
<h2>Roles, Disciplines, and Career Pathways</h2>
<p>The energy sector employs a remarkably diverse workforce. A major offshore installation might simultaneously employ structural engineers, process operators, instrument technicians, electricians, diving supervisors, catering staff, crane operators, production geologists, and logistics coordinators — all working interdependently to keep the asset operating safely and productively. Understanding how this workforce is organised, and where different career pathways lead, is essential for anyone planning an energy sector career.</p>

<h3>The Core Disciplines</h3>
<p><strong>Operations</strong> — Process operators (also called production operators or panel operators offshore) are responsible for the day-to-day running of the plant. They monitor parameters, respond to alarms, perform routine operator rounds, and execute planned and emergency shutdown procedures. The Control Room Operator (CRO) sits in the control room managing the Distributed Control System (DCS), while field operators physically inspect and operate equipment throughout the plant. Operations is typically the entry point for many career paths.</p>
<p><strong>Maintenance — Mechanical</strong> — Mechanical technicians maintain rotating equipment (pumps, compressors, turbines) and static equipment (pressure vessels, heat exchangers, piping). They perform planned preventive maintenance, condition monitoring, and repair following breakdown. Senior mechanical technicians may specialise in rotating equipment or static inspection.</p>
<p><strong>Maintenance — Instrument and Control (I&C)</strong> — Instrument technicians maintain the measurement and control systems that keep the plant operating safely: pressure transmitters, flow meters, control valves, safety systems (ESD, F&G). As plants become increasingly automated, I&C roles have become more technically demanding, requiring knowledge of digital communications protocols (HART, Foundation Fieldbus, PROFIBUS) and safety system programming.</p>
<p><strong>Maintenance — Electrical</strong> — Electrical technicians maintain the power distribution systems, motors, generators, and electrical safety systems (earthing, switchgear, Ex equipment in hazardous areas). <strong>CompEx</strong> certification is typically required for any electrical work in potentially explosive atmospheres — which covers most process areas in oil, gas, and chemical facilities.</p>
<p><strong>Engineering</strong> — Engineers work on design, modification, troubleshooting, and integrity management. Discipline areas include process engineering, mechanical/structural engineering, pipeline engineering, controls engineering, and safety engineering. Most engineer roles require a relevant degree, although there are technologist routes that bridge the gap between technician and engineer.</p>
<p><strong>HSSE</strong> — Health, Safety, Security, and Environmental professionals manage the risk management framework, conduct audits and inspections, investigate incidents, and ensure regulatory compliance. NEBOSH qualifications are the standard entry point for HSSE roles, with the <em>NEBOSH Process Safety Management Certificate</em> being particularly relevant to major hazard industries.</p>

<h3>The Certification Landscape</h3>
<p>The energy sector has a well-developed certification ecosystem. Understanding which certifications are relevant to which roles — and who the certifying bodies are — helps you plan your professional development strategically.</p>

<div class="diagram-box">
  <div class="diagram-title">Key Certifications by Discipline</div>
  <pre>
  OFFSHORE ENTRY (All Workers)
  ├── BOSIET/FOET (OPITO) — Basic Offshore Safety + Emergency Training
  ├── Medical Fitness Certificate (OGUK/UKOOA)
  └── EBS (OPITO) — Emergency Breathing System

  ELECTRICAL (Hazardous Areas)
  ├── CompEx (CompEx Scheme / Cogent) — Ex equipment installation
  └── City & Guilds 2391 — Inspection & Testing

  SAFETY PROFESSIONALS
  ├── NEBOSH General Certificate (entry level)
  ├── NEBOSH Process Safety Management Certificate
  └── IOSH Managing Safely

  WIND / ENERGY TRANSITION
  ├── GWO Basic Safety Training (BST)
  ├── GWO Advanced Rescue Training
  └── GWO Sea Survival

  MANAGEMENT / LEADERSHIP
  ├── ILM Level 3/5 Management
  ├── Chartered Engineer (CEng) via IMechE/IChemE/IET
  └── OPITO Supervisory Development Programme
  </pre>
</div>

<h3>What Employers Look For</h3>
<p>Beyond formal certifications, energy sector employers consistently seek specific attributes. Technical competence is assumed — but it is rarely what differentiates candidates. The factors that advance careers in this sector are:</p>
<ul>
  <li><strong>Safety Behaviours</strong> — demonstrable commitment to safety, not just compliance. Can you give examples of when you've identified a hazard, intervened, or improved a procedure?</li>
  <li><strong>Communication Skills</strong> — the ability to communicate clearly in shift handovers, toolbox talks, written reports, and face-to-face with colleagues and management</li>
  <li><strong>Teamwork and Reliability</strong> — offshore teams are small, interdependent, and remote. A person who is unreliable or difficult to work with creates risk</li>
  <li><strong>Adaptability</strong> — the sector is changing rapidly (energy transition, digitalisation). Employers value people who can adapt and learn</li>
  <li><strong>Commercial Awareness</strong> — understanding that the plant's role is to produce hydrocarbons at a profit. Decisions about maintenance priority and operational risk are made in a commercial context</li>
</ul>

<div class="terminology-box">
  <div class="term-title">Key Terminology — Module 6</div>
  <dl>
    <dt>DCS</dt><dd>Distributed Control System — the computer-based system used to monitor and control process plant operations from a control room</dd>
    <dt>CompEx</dt><dd>Competency scheme for working with electrical and instrumentation equipment in potentially explosive atmospheres</dd>
    <dt>NEBOSH</dt><dd>National Examination Board in Occupational Safety and Health — provider of internationally recognised safety qualifications</dd>
    <dt>GWO</dt><dd>Global Wind Organisation — body that develops and maintains safety training standards for the wind industry</dd>
    <dt>I&C</dt><dd>Instrument and Control — the discipline responsible for measurement, control, and safety systems</dd>
    <dt>CRO</dt><dd>Control Room Operator — the operator responsible for plant monitoring and control from the main control room</dd>
    <dt>Ex Equipment</dt><dd>Electrical equipment certified for use in potentially explosive atmospheres (hazardous area classification)</dd>
    <dt>CEng</dt><dd>Chartered Engineer — professional engineering status awarded by a UK engineering institution (e.g., IMechE, IChemE)</dd>
    <dt>FOET</dt><dd>Further Offshore Emergency Training — refresher version of BOSIET, typically required every 4 years</dd>
    <dt>Competency Framework</dt><dd>A structured description of the knowledge, skills, and behaviours required for effective performance in a role</dd>
  </dl>
</div>
    `,
    quiz: [
      {
        id: 'esf-m6-q1',
        question: 'What does CompEx certification specifically qualify a worker to do?',
        options: [
          'Operate complex offshore processing equipment such as gas compressors and turbines',
          'Work with electrical and instrumentation equipment in potentially explosive atmospheres',
          'Complete competency assessments for new energy sector workers',
          'Perform confined space entry and rescue in process plant environments',
        ],
        correct: 1,
      },
      {
        id: 'esf-m6-q2',
        question: 'The Control Room Operator (CRO) role is best described as:',
        options: [
          'A supervisory position responsible for managing the entire production team',
          'An engineering role focused on designing control system improvements',
          'The operator responsible for monitoring and controlling the plant from the main control room using the DCS',
          'A maintenance role responsible for calibrating and maintaining instruments',
        ],
        correct: 2,
      },
      {
        id: 'esf-m6-q3',
        question: 'The NEBOSH Process Safety Management Certificate is most relevant to professionals working in:',
        options: [
          'Construction and civil engineering projects',
          'Major hazard industries such as oil, gas, and chemicals',
          'Retail and commercial property management',
          'General manufacturing without process hazards',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'esf-m7',
    title: 'The Energy Transition',
    duration: '25 min',
    content: `
<h2>Net Zero, Renewables, and the Changing Energy System</h2>
<p>The energy sector is undergoing its most significant structural transformation in a century. Climate commitments made under the Paris Agreement require the global economy to reach net zero greenhouse gas emissions by approximately 2050. For the energy sector — which is responsible for approximately 75% of global greenhouse gas emissions — this means a fundamental shift in the types of energy produced, the infrastructure used to deliver it, and the skills required to build and operate that infrastructure.</p>
<p>Understanding the energy transition is not optional for energy sector workers. It will shape job markets, asset investment cycles, and career opportunities for the next 30 years. The good news: the transition creates enormous demand for skilled workers, and many of the skills developed in oil and gas are directly transferable.</p>

<h3>Net Zero — What It Means</h3>
<p>Net zero means that the greenhouse gases emitted by human activity are balanced by the greenhouse gases removed from the atmosphere. It does not mean zero emissions — some sectors (agriculture, aviation, heavy industry) are difficult to fully decarbonise, so residual emissions must be offset by carbon removal technologies.</p>
<p>The UK legally committed to net zero by 2050 under the Climate Change Act 2008 (amended 2019). Intermediate targets include a 68% reduction in emissions by 2030 relative to 1990 levels. The North Sea Transition Deal (NSTD), signed between the UK government and the oil and gas industry in 2021, provides a framework for managing the transition while maintaining energy security and retaining the sector's skilled workforce.</p>

<h3>Renewable Energy Technologies</h3>
<p><strong>Offshore Wind</strong> is the UK's most significant renewable energy source by installed capacity and future ambition. The UK government targets 50 GW of offshore wind capacity by 2030 (up from approximately 14 GW in 2023). Offshore wind turbines are now routinely installed at 200+ metre hub heights with individual capacities of 12–15 MW (compared to 5 MW a decade ago). The similarity between offshore wind installations and offshore oil and gas infrastructure — marine operations, dynamic positioning, heavy lift, subsea cables — makes the O&G workforce highly transferable.</p>
<p><strong>Solar PV (Photovoltaic)</strong> converts sunlight directly into electricity using semiconductor cells. Solar costs have fallen by over 90% since 2010, making it the cheapest source of new electricity generation in most of the world. The UK solar market is primarily onshore and is growing rapidly with the removal of planning restrictions.</p>
<p><strong>Onshore Wind</strong> is mature and cost-competitive but has faced planning constraints in England. Scotland has a significant onshore wind base and continues to expand.</p>
<p><strong>Hydrogen</strong> is increasingly seen as a key enabler of the energy transition — both as a means of storing and transporting renewable energy ("green hydrogen" produced by electrolysis of water using renewable electricity) and as a low-carbon fuel for industrial processes and transport where direct electrification is difficult. The UK has a significant blue hydrogen opportunity, using natural gas with carbon capture and storage (CCS).</p>
<p><strong>Carbon Capture, Utilisation, and Storage (CCUS)</strong> involves capturing CO₂ from industrial processes or power generation and storing it permanently in geological formations — including depleted oil and gas reservoirs in the North Sea. CCUS is considered essential for meeting net zero targets in industries where decarbonisation by electrification alone is not feasible.</p>

<div class="diagram-box">
  <div class="diagram-title">UK Electricity Generation Mix Trajectory (Illustrative)</div>
  <pre>
                    2010    2020    2030(target)   2050(net zero)
  ──────────────────────────────────────────────────────────────
  Offshore Wind     1%      5%      35%            45%
  Onshore Wind      3%      10%     15%            15%
  Solar PV          0%      4%      12%            15%
  Nuclear           16%     16%     12%            10%
  Gas (with CCUS)   47%     37%     15%            5%
  Gas (without)     47%     37%     0%             0%
  Coal              28%     2%      0%             0%
  Other             5%      26%     11%            10%
  ──────────────────────────────────────────────────────────────
  (Figures illustrative — actual mix varies by year and source)
  </pre>
</div>

<h3>Opportunities for Energy Workers</h3>
<p>The energy transition does not eliminate demand for energy sector skills — it redirects them. Key transferable skills and where they are needed:</p>
<ul>
  <li><strong>Mechanical technicians</strong> — wind turbine maintenance, tidal and wave energy, hydrogen equipment</li>
  <li><strong>Electrical technicians</strong> — offshore wind substations, grid connections, battery storage systems</li>
  <li><strong>Process operators</strong> — hydrogen production plants, CCUS facilities, bioenergy (BECCS) plants</li>
  <li><strong>Pipeline engineers</strong> — repurposing gas pipelines for hydrogen transport, CO₂ transport for CCUS</li>
  <li><strong>Subsea engineers</strong> — offshore wind foundations, subsea power cables, tidal devices</li>
  <li><strong>HSSE professionals</strong> — hydrogen hazards, new technology risk assessment, offshore wind emergency response</li>
</ul>

<div class="terminology-box">
  <div class="term-title">Key Terminology — Module 7</div>
  <dl>
    <dt>Net Zero</dt><dd>State in which greenhouse gas emissions are balanced by removals from the atmosphere</dd>
    <dt>Paris Agreement</dt><dd>2015 international treaty committing signatory nations to limit global warming to 1.5–2°C above pre-industrial levels</dd>
    <dt>Green Hydrogen</dt><dd>Hydrogen produced by electrolysis of water using renewable electricity — zero direct carbon emissions</dd>
    <dt>Blue Hydrogen</dt><dd>Hydrogen produced from natural gas with carbon capture and storage — low but not zero carbon</dd>
    <dt>CCUS</dt><dd>Carbon Capture, Utilisation, and Storage — technology to capture CO₂ and store it underground</dd>
    <dt>GW (Gigawatt)</dt><dd>Unit of power equal to 1,000 MW — used to measure electricity generation capacity</dd>
    <dt>Electrolysis</dt><dd>Process using electricity to split water into hydrogen and oxygen — the basis of green hydrogen production</dd>
    <dt>NSTD</dt><dd>North Sea Transition Deal — UK government/industry agreement for managing the energy transition in the North Sea</dd>
    <dt>BECCS</dt><dd>Bioenergy with Carbon Capture and Storage — burning biomass for energy while capturing the CO₂ produced</dd>
    <dt>Levelised Cost of Energy (LCOE)</dt><dd>Average cost per unit of electricity generated over a plant's lifetime, used to compare different generation technologies</dd>
  </dl>
</div>
    `,
    quiz: [
      {
        id: 'esf-m7-q1',
        question: 'The UK\'s legal commitment under the Climate Change Act (amended 2019) is to reach net zero greenhouse gas emissions by:',
        options: ['2035', '2040', '2045', '2050'],
        correct: 3,
      },
      {
        id: 'esf-m7-q2',
        question: '"Green hydrogen" is defined as hydrogen produced:',
        options: [
          'From natural gas using a reforming process',
          'By electrolysis of water using renewable electricity, with zero direct carbon emissions',
          'By gasification of biomass or organic waste',
          'From natural gas with carbon capture and storage',
        ],
        correct: 1,
      },
      {
        id: 'esf-m7-q3',
        question: 'What makes offshore wind a particularly attractive opportunity for workers transitioning from oil and gas?',
        options: [
          'Offshore wind pays significantly higher salaries than comparable oil and gas roles',
          'The skills and operational environment — marine operations, offshore safety, heavy lift, subsea work — are highly transferable from O&G',
          'All offshore wind installations are located in the same geographic areas as oil and gas platforms',
          'Offshore wind does not require any technical qualifications, making entry easy for O&G workers',
        ],
        correct: 1,
      },
      {
        id: 'esf-m7-q4',
        question: 'Carbon Capture, Utilisation, and Storage (CCUS) is considered important for net zero because:',
        options: [
          'It provides a way to convert captured CO₂ into new hydrocarbon fuels at low cost',
          'It eliminates the need for any reduction in fossil fuel consumption',
          'It allows decarbonisation of industries where direct electrification is technically difficult or uneconomic',
          'It is the only currently available method of reducing CO₂ emissions from the electricity sector',
        ],
        correct: 2,
      },
    ],
  },
  {
    id: 'esf-m8',
    title: 'Your Career Action Plan',
    duration: '20 min',
    content: `
<h2>Turning Knowledge into Career Progress</h2>
<p>Knowledge of the energy sector is valuable. Knowledge applied to a clear plan is transformative. This final module is about translating what you have learned into concrete next steps — a personal career action plan that you can implement immediately.</p>
<p>A career in energy does not happen by accident. The sector is competitive, particularly at entry level. The workers who build strong careers are those who understand the landscape, set clear goals, identify the gaps between where they are and where they want to be, and take deliberate steps to close those gaps.</p>

<h3>Setting Your Career Goals</h3>
<p>Effective goal-setting in career planning has three levels:</p>
<ul>
  <li><strong>Direction</strong> — which area of the energy sector do you want to work in? Upstream operations, downstream processing, offshore maintenance, HSSE, engineering, energy transition? Be specific. "I want to work in oil and gas" is not a goal — it's a wish. "I want to work as an instrument technician on an offshore installation in the North Sea within 3 years" is a goal.</li>
  <li><strong>Milestone</strong> — what specific achievements will mark progress toward your direction? The first job, a specific certification, a competency sign-off, a promotion, a salary level.</li>
  <li><strong>Action</strong> — what will you do this week, this month, this quarter? Actions are the only thing that actually close the gap. Everything else is planning.</li>
</ul>

<h3>Skills Gap Analysis</h3>
<p>A skills gap analysis is a structured comparison between the skills and qualifications required for your target role and the skills and qualifications you currently have. It is the foundation of a realistic development plan.</p>
<p>To conduct a skills gap analysis:</p>
<ol>
  <li>Identify 5–10 specific job postings for your target role from real employers (use job boards: Indeed, LinkedIn, Energy Jobline, OilandGasJob)</li>
  <li>Extract the requirements listed: qualifications, certifications, experience, competencies</li>
  <li>Honestly assess your current position against each requirement: "have it," "partially have it," or "don't have it"</li>
  <li>Prioritise the gaps: which are mentioned most frequently? Which are listed as essential vs. desirable?</li>
  <li>Build your development plan around closing the highest-priority gaps</li>
</ol>

<div class="diagram-box">
  <div class="diagram-title">Skills Gap Analysis Template</div>
  <pre>
  TARGET ROLE: Offshore Process Operator (North Sea)
  ┌────────────────────────────┬───────────────┬──────────────────────┐
  │ Requirement                │ Your Status   │ Action Required      │
  ├────────────────────────────┼───────────────┼──────────────────────┤
  │ BOSIET/FOET                │ ✗ Don't have  │ Book OPITO course    │
  │ OGUK Medical               │ ✗ Don't have  │ Book medical         │
  │ Process operations exp.    │ ~ Partial     │ Onshore experience?  │
  │ DCS experience             │ ✗ Don't have  │ Simulator training   │
  │ H2S Awareness cert.        │ ✗ Don't have  │ Online course (£99)  │
  │ Full UK driving licence    │ ✓ Have it     │ —                    │
  └────────────────────────────┴───────────────┴──────────────────────┘
  </pre>
</div>

<h3>Practical Next Steps</h3>
<p>Based on what you've learned in this course, here are concrete next steps depending on your current position:</p>
<p><strong>If you're new to the sector with no industry experience:</strong></p>
<ul>
  <li>Complete BOSIET (this is the most commonly required entry-level qualification)</li>
  <li>Build site/plant experience in any industrial environment — refinery, chemical plant, utilities, offshore wind</li>
  <li>Target graduate schemes or apprenticeship programmes run by major operators (BP, Shell, Equinor, Harbour Energy, Apache)</li>
  <li>Join professional organisations: SPE (Society of Petroleum Engineers) Student Chapters, OPITO career forums</li>
</ul>
<p><strong>If you're transitioning from another sector (military, trades, utilities):</strong></p>
<ul>
  <li>Map your existing skills to energy sector equivalents — military and utilities workers are highly sought after</li>
  <li>Prioritise BOSIET and OGUK Medical as immediate actions</li>
  <li>Contact specialist energy sector recruitment consultancies: NES Fircroft, Petroplan, Spencer Ogden, Airswift</li>
  <li>Consider contract/ad-hoc work to build sector-specific experience before seeking a permanent role</li>
</ul>

<h3>Key Resources and Organisations</h3>
<ul>
  <li><strong>OPITO</strong> — opito.com — training standards, approved training providers, career information</li>
  <li><strong>OGUK / Offshore Energies UK</strong> — offshoreenergyuk.com — industry body representing UK offshore operators</li>
  <li><strong>Energy Jobline</strong> — energyjobline.com — specialist energy sector job board</li>
  <li><strong>RenewableUK</strong> — renewableuk.com — wind energy industry body with career resources</li>
  <li><strong>Oil and Gas Authority (NSTA)</strong> — nstaauthority.co.uk — UK regulator for oil and gas exploration and production</li>
  <li><strong>NEBOSH</strong> — nebosh.org.uk — safety qualifications most relevant to HSSE roles</li>
</ul>

<div class="terminology-box">
  <div class="term-title">Key Terminology — Module 8</div>
  <dl>
    <dt>Skills Gap Analysis</dt><dd>Structured comparison between required skills for a target role and current skills, identifying priority development areas</dd>
    <dt>OGUK Medical</dt><dd>Offshore medical fitness certificate required by UK North Sea operators — assesses physical and psychological fitness for offshore work</dd>
    <dt>Competency Framework</dt><dd>A structured description of the knowledge, skills, and behaviours required for effective performance in a role</dd>
    <dt>SPE</dt><dd>Society of Petroleum Engineers — global professional society for upstream oil and gas professionals</dd>
    <dt>CPD</dt><dd>Continuing Professional Development — ongoing learning activities that maintain and develop professional competence</dd>
    <dt>Chartered Status</dt><dd>Professional recognition of senior competence from a professional engineering or technical body (e.g., CEng, CEnv)</dd>
    <dt>Competency Sign-Off</dt><dd>Formal assessment confirming that a worker has demonstrated competence in a specific skill or task</dd>
    <dt>NSTA</dt><dd>North Sea Transition Authority — UK regulator for oil and gas exploration and production (formerly OGA)</dd>
    <dt>Energy Transition Pathways</dt><dd>Career routes that leverage existing energy sector skills in new low-carbon industry sectors</dd>
    <dt>Transferable Skills</dt><dd>Skills developed in one context (e.g., military, utilities) that are applicable in a new sector without starting from scratch</dd>
  </dl>
</div>
    `,
    quiz: [
      {
        id: 'esf-m8-q1',
        question: 'In a career skills gap analysis, what is the primary purpose?',
        options: [
          'To create a CV that highlights strengths while hiding weaknesses',
          'To identify the difference between required skills for a target role and current skills, informing a development plan',
          'To negotiate a higher salary by demonstrating the value of existing skills',
          'To satisfy regulatory requirements for professional registration',
        ],
        correct: 1,
      },
      {
        id: 'esf-m8-q2',
        question: 'For someone with no oil and gas experience wanting to work offshore, which certification is most universally required as a first step?',
        options: ['CompEx', 'NEBOSH General Certificate', 'BOSIET (Basic Offshore Safety Induction and Emergency Training)', 'GWO BST'],
        correct: 2,
      },
      {
        id: 'esf-m8-q3',
        question: 'Offshore Energies UK (OGUK) is best described as:',
        options: [
          'The UK government regulator for the offshore oil and gas industry',
          'The industry body representing UK offshore energy operators and contractors',
          'An OPITO-approved training provider for offshore safety courses',
          'A professional institution for offshore engineers similar to IMechE',
        ],
        correct: 1,
      },
    ],
  },
];

const course1Assessment = [
  // Module 1 questions
  { id: 'q1', question: 'The term "upstream" in oil and gas refers to:', options: ['Refining and petrochemical operations', 'Exploration and production activities', 'Pipeline transport and storage', 'Retail and distribution'], correct: 1 },
  { id: 'q2', question: 'OPITO is best described as:', options: ['The UK safety regulator for offshore installations', 'The global skills body that develops energy sector training standards', 'An IOC operating in the North Sea', 'A professional engineering institution'], correct: 1 },
  { id: 'q3', question: 'A National Oil Company (NOC) is distinguished by:', options: ['Operating exclusively in the upstream sector', 'Being owned by a national government', 'Having no international operations outside its home country', 'Producing only natural gas rather than crude oil'], correct: 1 },
  { id: 'q4', question: 'Which of the following is classified as a midstream activity?', options: ['Drilling an exploration well', 'Running a crude oil distillation unit', 'Operating an LNG terminal', 'Retail petrol station management'], correct: 2 },
  { id: 'q5', question: 'The Health and Safety Executive (HSE) regulates offshore oil and gas in the UK primarily through requiring operators to produce:', options: ['Annual environmental impact assessments', 'Safety Cases demonstrating control of major accident hazards', 'Monthly production reports', 'Competency records for all offshore workers'], correct: 1 },
  // Module 2 questions
  { id: 'q6', question: 'What is porosity in the context of a hydrocarbon reservoir?', options: ['The depth of the reservoir below the surface', 'The percentage of void space in the rock that can store hydrocarbons', 'The rate at which fluids flow through the reservoir rock', 'The temperature of the reservoir at discovery'], correct: 1 },
  { id: 'q7', question: 'A wildcat well is drilled:', options: ['Near existing production infrastructure to reduce costs', 'In an unproven area with high geological risk to test a new prospect', 'Only in shallow water (jack-up rig territory)', 'Using a different type of mud than production wells'], correct: 1 },
  { id: 'q8', question: 'In an anticlinal trap, hydrocarbons accumulate because:', options: ['The anticline generates heat that creates hydrocarbons', 'Buoyant hydrocarbons rise and are trapped beneath the arch of impermeable cap rock', 'Faults on either side prevent horizontal migration', 'The high pressure at depth forces hydrocarbons into the fold'], correct: 1 },
  { id: 'q9', question: 'The primary well control device on a drilling rig, capable of sealing the wellbore in an emergency, is called:', options: ['The Christmas Tree', 'The Blowout Preventer (BOP)', 'The Wellhead Assembly', 'The Drill Collar'], correct: 1 },
  { id: 'q10', question: 'Which type of offshore rig is designed for very shallow water up to approximately 150 metres depth?', options: ['Drillship', 'Semi-submersible', 'Jack-up rig', 'Spar platform'], correct: 2 },
  { id: 'q11', question: 'Permeability in reservoir engineering measures:', options: ['The volume of oil that can be recovered from a reservoir', 'How easily fluid flows through the rock, measured in millidarcies', 'The age of the reservoir formation in millions of years', 'The structural integrity of the cap rock'], correct: 1 },
  { id: 'q12', question: 'An FPSO is:', options: ['A type of drilling rig used in ultra-deepwater', 'A Floating Production, Storage, and Offloading vessel used for deepwater production', 'A pipeline compression station', 'A fixed platform type used in the North Sea'], correct: 1 },
  // Module 3 questions
  { id: 'q13', question: 'Crude oil with high API gravity is considered:', options: ['Heavy and difficult to process, commanding a price discount', 'Light and more valuable, yielding more light products on refining', 'High sulphur (sour) crude with additional processing requirements', 'Suitable only for bitumen and heavy fuel oil production'], correct: 1 },
  { id: 'q14', question: 'What does the Fluid Catalytic Cracking (FCC) unit in a refinery do?', options: ['Removes sulphur from diesel to meet ULSD specifications', 'Converts heavy gas oil into more valuable light products like petrol and LPG', 'Separates crude oil into initial fractions by distillation', 'Produces hydrogen from naphtha by reforming'], correct: 1 },
  { id: 'q15', question: 'Brent Crude is:', options: ['A heavy sour crude from the Middle East used as a processing benchmark', 'A North Sea crude oil used as one of the primary global price benchmarks', 'A pipeline specification for gas quality in the UK', 'A synthetic crude produced from oil sands in Canada'], correct: 1 },
  { id: 'q16', question: 'In atmospheric distillation, the LIGHTEST fraction is drawn off:', options: ['At the bottom of the column where temperature is highest', 'At the top of the column where temperature is lowest', 'At mid-column at approximately 200°C', 'Via a side-draw at the point of maximum pressure'], correct: 1 },
  { id: 'q17', question: 'Steam cracking of naphtha primarily produces:', options: ['Diesel and jet fuel for the transport sector', 'Ethylene — the most important petrochemical building block', 'Bitumen for road surfacing', 'Lubricating oil base stocks'], correct: 1 },
  // Module 4 questions
  { id: 'q18', question: 'The incident pyramid demonstrates that:', options: ['Fatal accidents are statistically unrelated to minor incidents', 'Major accidents are typically preceded by minor incidents and near misses', 'Personal protective equipment prevents the majority of workplace fatalities', 'Heinrich\'s ratio of 1:29:300 has been validated for all industries'], correct: 1 },
  { id: 'q19', question: 'Stop Work Authority means:', options: ['Only supervisors can stop a job in progress', 'Any worker has both the right and obligation to stop unsafe work regardless of seniority or commercial pressure', 'Work can only be stopped if two workers agree the risk is unacceptable', 'SWA applies only to contractors, not direct employees'], correct: 1 },
  { id: 'q20', question: 'A Safety Case in the offshore sector is prepared by:', options: ['The HSE and issued to each installation as a regulatory licence', 'The operator, as a formal demonstration that major accident hazards are understood and controlled', 'OPITO, following a training audit of the platform workforce', 'Lloyd\'s Register following a structural integrity survey'], correct: 1 },
  { id: 'q21', question: 'Human Factors as a discipline is concerned with:', options: ['Assessing the physical fitness of workers for demanding roles', 'Understanding and improving how people interact with work systems to reduce error rates', 'Managing the social dynamics and team conflicts on offshore installations', 'Conducting psychological assessments of workers following incidents'], correct: 1 },
  { id: 'q22', question: 'Situational Awareness is particularly important in process plant operations because:', options: ['It allows operators to predict equipment failures before instruments detect them', 'Loss of situational awareness is a recognised precursor to many major accidents', 'Operators with high situational awareness earn higher certification grades', 'It is required by OPITO standards for control room operators'], correct: 1 },
  // Module 5 questions
  { id: 'q23', question: 'A P&ID (Piping and Instrumentation Diagram) shows:', options: ['The high-level process flow with stream conditions and material balances', 'All piping, instruments, valves, control loops, and safety devices in detail', 'The structural layout of the plant showing equipment access routes', 'The electrical power distribution system for the facility'], correct: 1 },
  { id: 'q24', question: 'An instrument tagged "LIC-302" on a P&ID would be:', options: ['A line isolation coupling on circuit 302', 'A level indicating controller on loop 302', 'A lightning protection circuit on building 302', 'A liquid injection compressor unit 302'], correct: 1 },
  { id: 'q25', question: 'Cavitation in a centrifugal pump occurs when:', options: ['Pump speed is too high, causing excessive wear on the impeller', 'Suction pressure falls below the fluid vapour pressure, causing vapour bubble formation and impeller damage', 'The outlet line is blocked, causing pressure build-up in the casing', 'Mechanical seal failure allows the pumped fluid to escape to atmosphere'], correct: 1 },
  { id: 'q26', question: 'A Pressure Safety Valve (PSV) is designed to:', options: ['Control operating pressure in a vessel by throttling the inlet flow', 'Open automatically and relieve pressure when vessel pressure exceeds the design set point', 'Isolate a vessel from the process when pressure is too low', 'Monitor pressure and send an alarm signal to the control room'], correct: 1 },
  { id: 'q27', question: 'The primary purpose of the flare system on a process plant is to:', options: ['Burn off methane emissions during normal operation to reduce greenhouse gas impact', 'Safely dispose of hydrocarbon vapour releases from relief valves and blowdown events', 'Provide backup fuel supply for the facility\'s gas turbines', 'Signal to aircraft that an offshore installation is present in the area'], correct: 1 },
  // Module 6 questions
  { id: 'q28', question: 'Which certification is typically required for electrical work in potentially explosive atmospheres in oil, gas, and chemical facilities?', options: ['NEBOSH General Certificate', 'BOSIET', 'CompEx', 'GWO BST'], correct: 2 },
  { id: 'q29', question: 'The DCS (Distributed Control System) in a process plant is used primarily to:', options: ['Manage the HR and competency records for operations staff', 'Monitor and control plant operations from a control room using computerised systems', 'Schedule maintenance work orders and track equipment history', 'Provide communications between the platform and the onshore base'], correct: 1 },
  { id: 'q30', question: 'An OGUK Medical (offshore medical fitness certificate) is required because:', options: ['It verifies that workers have completed BOSIET training', 'It assesses physical and psychological fitness for the demands and isolation of offshore work', 'It is mandatory for all workers in the UK energy sector, including onshore', 'It replaces the need for manual handling training'], correct: 1 },
  // Module 7 questions
  { id: 'q31', question: 'The UK\'s net zero target requires achieving balance between greenhouse gas emissions and removals by:', options: ['2030', '2040', '2050', '2060'], correct: 2 },
  { id: 'q32', question: '"Blue hydrogen" is produced from:', options: ['Electrolysis of water using offshore wind electricity', 'Natural gas (methane) reforming with carbon capture and storage', 'Biomass gasification with carbon capture', 'Solar-powered electrolysis in desert regions'], correct: 1 },
  { id: 'q33', question: 'CCUS (Carbon Capture, Utilisation, and Storage) is considered important for reaching net zero because:', options: ['It is cheaper than renewable energy for electricity generation', 'It enables decarbonisation of sectors where direct electrification is technically very difficult', 'It eliminates the need to reduce fossil fuel consumption in the short term', 'It creates more jobs than renewable energy alternatives'], correct: 1 },
  { id: 'q34', question: 'What makes offshore oil and gas workers particularly well-positioned for offshore wind roles?', options: ['Offshore wind qualifications are the same as oil and gas qualifications, requiring no additional training', 'The operational environment and many technical skills — marine safety, heavy lift, subsea, offshore survival — are highly transferable', 'Offshore wind installations are located in the same fields as oil and gas platforms, allowing easy transition', 'Offshore wind pays significantly more than oil and gas for equivalent roles'], correct: 1 },
  { id: 'q35', question: 'The North Sea Transition Deal (NSTD) was signed between:', options: ['The UK government and European Union to manage North Sea decommissioning', 'The UK government and the oil and gas industry to manage the energy transition while maintaining energy security', 'OPITO and major operators to develop energy transition training standards', 'The HSE and offshore operators to update safety case requirements for low-carbon assets'], correct: 1 },
  // Module 8 questions
  { id: 'q36', question: 'A skills gap analysis for career development involves:', options: ['Listing all your achievements and qualifications for a CV', 'Comparing required skills for a target role against your current capabilities to identify development priorities', 'Identifying soft skills that cannot be formally certified', 'Requesting an appraisal from your current employer'], correct: 1 },
  { id: 'q37', question: 'BOSIET training is provided through:', options: ['Any accredited first aid training organisation', 'OPITO-approved training centres', 'Online self-study only', 'The Health and Safety Executive (HSE)'], correct: 1 },
  { id: 'q38', question: 'Energy Jobline is:', options: ['An OPITO-approved training platform for energy sector qualifications', 'A specialist job board for the energy sector', 'The UK government\'s employment service for oil and gas workers', 'A professional institution for energy engineers'], correct: 1 },
  // Additional conceptual questions to reach 100
  { id: 'q39', question: 'The term "midstream" in the oil and gas value chain refers to:', options: ['Production from medium-depth reservoirs between 500–2000m', 'Transportation, storage, and processing of hydrocarbons between production and refining/end users', 'Refinery operations between crude distillation and product blending', 'Operations at medium-sized facilities between large platforms and onshore terminals'], correct: 1 },
  { id: 'q40', question: 'IOC stands for:', options: ['Integrated Oil Contractor', 'International Oil Company', 'Industrial Operations Certificate', 'Instrument and Operations Control'], correct: 1 },
  { id: 'q41', question: 'Seismic surveying in oil and gas exploration works by:', options: ['Drilling a series of shallow test wells to sample rock types', 'Using sound waves to create images of subsurface geological structures', 'Measuring surface gravity variations to locate dense reservoir rocks', 'Analysing gas seeps at surface to identify active hydrocarbon systems'], correct: 1 },
  { id: 'q42', question: 'What is a "source rock" in hydrocarbon geology?', options: ['The impermeable cap rock that prevents hydrocarbons from escaping the trap', 'Organic-rich sedimentary rock that generated hydrocarbons through heat and pressure', 'The porous reservoir rock in which hydrocarbons accumulate', 'Hard basement rock used as an anchor for offshore platform foundations'], correct: 1 },
  { id: 'q43', question: 'The Macondo (Deepwater Horizon) blowout in 2010 is significant in the oil and gas industry because:', options: ['It was the first deepwater blowout, triggering the development of BOP technology', 'It resulted in eleven deaths and highlighted failures in well control, BOP design, and safety culture', 'It caused a global spike in oil prices by removing Gulf of Mexico production for five years', 'It demonstrated that deepwater drilling was commercially unviable'], correct: 1 },
  { id: 'q44', question: 'Ultra-Low Sulphur Diesel (ULSD) is defined as diesel with a maximum sulphur content of:', options: ['50 ppm', '10 ppm', '100 ppm', '1 ppm'], correct: 1 },
  { id: 'q45', question: 'In crude oil pricing, a "premium" relative to Brent is typically associated with:', options: ['High sulphur, heavy crude that requires more processing', 'Light, sweet crude that produces a higher yield of valuable products', 'Crude produced from shallow onshore fields with low production costs', 'Crude with high wax content requiring heated pipelines for transport'], correct: 1 },
  { id: 'q46', question: 'The HSSE Management System element "Plan-Do-Check-Act" is used to:', options: ['Plan maintenance shutdowns, carry them out, check equipment, and report actions', 'Structure continuous improvement cycles in health, safety, and environmental management', 'Plan competency assessments, conduct them, check results, and award certifications', 'Plan daily operations, execute shifts, check production targets, and report to management'], correct: 1 },
  { id: 'q47', question: 'In offshore operations, 12-hour shift patterns and 2-4 week rotation cycles are designed primarily to:', options: ['Reduce helicopter transportation costs by minimising crew change frequency', 'Manage fatigue risks associated with continuous operations while maintaining productivity', 'Comply with OPITO standards for offshore worker duty hours', 'Align with the typical duration of a weather window in the North Sea'], correct: 1 },
  { id: 'q48', question: 'HART, Foundation Fieldbus, and PROFIBUS are:', options: ['Types of pressure measurement technology used in hazardous areas', 'Digital communications protocols used in instrument and control systems', 'Categories of instrument calibration method', 'Types of safety instrumented system (SIS) architecture'], correct: 1 },
  { id: 'q49', question: 'The ASME VIII standard relates to the design and fabrication of:', options: ['Offshore pipeline systems', 'Pressure vessels', 'Safety instrumented systems', 'Electrical equipment in hazardous areas'], correct: 1 },
  { id: 'q50', question: 'Net Positive Suction Head (NPSH) is a parameter that relates to:', options: ['The pressure difference across a control valve', 'The minimum suction pressure required to prevent cavitation in a centrifugal pump', 'The net pressure available at a wellhead', 'The pressure rating of a pressure safety valve'], correct: 1 },
  { id: 'q51', question: 'In process plant instrumentation, a "transmitter" converts:', options: ['A control room signal into a valve position', 'A physical process measurement (pressure, temperature, flow) into a standardised electrical signal', 'Digital fieldbus data into analogue current signals', 'An alarm condition into a visual and audible alert'], correct: 1 },
  { id: 'q52', question: 'The shell-and-tube heat exchanger is the most common industrial type because:', options: ['It is the cheapest to manufacture of all heat exchanger types', 'It is versatile, handles high pressures and temperatures, and is well understood by operators and maintainers', 'It requires no cleaning or maintenance in normal operation', 'It is mandated by ASME standards for all refinery applications'], correct: 1 },
  { id: 'q53', question: 'An ESD (Emergency Shutdown) system is designed to:', options: ['Allow controlled manual shutdown of the plant during planned maintenance', 'Automatically initiate a safe plant shutdown on detection of a hazardous condition such as high pressure or gas leak', 'Shut down non-essential utilities to reduce energy consumption during peak demand', 'Provide a backup control system when the primary DCS fails'], correct: 1 },
  { id: 'q54', question: 'The term "decommissioning" in the offshore sector refers to:', options: ['Removing a rig from service temporarily for a major maintenance shutdown', 'The permanent cessation of production and removal or disposal of offshore infrastructure', 'Changing the production licence from one operator to another', 'Converting an oil platform to a gas production facility'], correct: 1 },
  { id: 'q55', question: 'Which professional institution is most relevant to chemical and process engineers in the energy sector?', options: ['IMechE (Institution of Mechanical Engineers)', 'IET (Institution of Engineering and Technology)', 'IChemE (Institution of Chemical Engineers)', 'ICE (Institution of Civil Engineers)'], correct: 2 },
  { id: 'q56', question: 'Produced water management is important in upstream operations because:', options: ['Produced water contains valuable minerals that can be recovered and sold', 'Almost all production wells produce water alongside oil and gas, and disposal must comply with environmental regulations', 'Produced water is used directly as drilling mud in most operations', 'Water content increases the value of crude oil by reducing its viscosity'], correct: 1 },
  { id: 'q57', question: 'The API gravity of a crude oil with a density significantly lower than water (i.e., lighter) would be:', options: ['Negative (below zero)', 'Less than 10', 'Greater than 31', 'Equal to atmospheric pressure in psia'], correct: 2 },
  { id: 'q58', question: 'Vacuum distillation is used in refineries to:', options: ['Remove dissolved oxygen from crude oil before atmospheric distillation', 'Process atmospheric residue at lower temperatures by reducing pressure, preventing thermal cracking', 'Purify hydrogen produced by the reformer for use in hydrotreating units', 'Recover LPG fractions that are lost from the atmospheric column overhead'], correct: 1 },
  { id: 'q59', question: 'The primary feedstock for ethylene production in the petrochemical industry is:', options: ['Heavy fuel oil from vacuum distillation', 'Naphtha or ethane (via steam cracking)', 'Methane from natural gas', 'Bitumen recovered from oil sands'], correct: 1 },
  { id: 'q60', question: 'In the context of safety culture, "psychological safety" means:', options: ['Ensuring workers are psychologically assessed before taking on safety-critical roles', 'Workers feeling safe to speak up, raise concerns, or exercise Stop Work Authority without fear of retaliation', 'Providing mental health support services for offshore workers', 'Conducting post-incident psychological debriefs for personnel involved in accidents'], correct: 1 },
  { id: 'q61', question: 'A "competency framework" in the energy sector defines:', options: ['The salary bands for different technical grades', 'The knowledge, skills, and behaviours required for effective performance in a role', 'The regulatory requirements for operating a specific type of plant', 'The training courses required by OPITO for each certification level'], correct: 1 },
  { id: 'q62', question: 'The BOSIET qualification is valid for:', options: ['2 years (refreshed by FOET)', '4 years (refreshed by FOET)', '10 years with no refresher required', 'The lifetime of employment with a single operator'], correct: 1 },
  { id: 'q63', question: 'SPE (Society of Petroleum Engineers) is:', options: ['The safety regulatory body for petroleum operations in the UK', 'A global professional society for upstream oil and gas professionals providing technical resources and networking', 'An OPITO-affiliated training provider', 'The operator of the UK\'s strategic petroleum reserve'], correct: 1 },
  { id: 'q64', question: 'Global Wind Organisation (GWO) Basic Safety Training (BST) consists of modules covering:', options: ['Wind turbine electrical systems, blade inspection, and foundation survey', 'First aid, fire awareness, manual handling, sea survival, and working at height', 'Helicopter underwater escape, medical fitness, and hazardous materials', 'Grid connection, power quality, and substation operations'], correct: 1 },
  { id: 'q65', question: 'Levelised Cost of Energy (LCOE) is used to:', options: ['Calculate the fuel cost per unit of energy consumed in a refinery', 'Compare different electricity generation technologies on a consistent basis (cost per MWh over plant lifetime)', 'Determine the tax liability on energy production in the UK', 'Set the wholesale electricity price in the UK market'], correct: 1 },
  { id: 'q66', question: 'The Paris Agreement requires limiting global temperature rise to:', options: ['1.0°C above pre-industrial levels', '1.5–2°C above pre-industrial levels', '3.0°C above pre-industrial levels', '2.5°C above the 1990 baseline'], correct: 1 },
  { id: 'q67', question: 'What is the primary source of electricity generation in the UK\'s path to net zero?', options: ['Nuclear power as the sole baseload source', 'Offshore and onshore wind, with offshore wind being the largest single contributor', 'Solar PV, due to rapidly falling costs', 'Hydrogen combustion turbines replacing existing gas plant'], correct: 1 },
  { id: 'q68', question: 'In the context of the energy transition, "repurposing" a gas pipeline typically refers to:', options: ['Converting it to carry water for cooling new data centres', 'Adapting the pipeline to transport hydrogen or CO₂ for CCUS, leveraging existing infrastructure', 'Using it to carry liquefied natural gas instead of gas', 'Converting it into a subsea power cable route'], correct: 1 },
  { id: 'q69', question: 'Continuous Professional Development (CPD) is important for energy sector professionals because:', options: ['It is a legal requirement under UK employment law for all technical workers', 'The sector is rapidly changing and maintaining technical competence requires ongoing learning', 'CPD credits can be exchanged for salary increases in most operator companies', 'It is required to maintain registration with the Health and Safety Executive'], correct: 1 },
  { id: 'q70', question: 'The "contractor ecosystem" in the energy sector refers to:', options: ['The network of environmental contractors managing site remediation', 'The network of engineering, maintenance, and specialist companies that operators rely on for most operational and project activity', 'The international network of crude oil tanker operators', 'The sub-contractors working under the main EPC contractor during construction'], correct: 1 },
  { id: 'q71', question: 'An anticlinal trap is formed by:', options: ['A dome-shaped fold in rock layers where hydrocarbons accumulate at the apex', 'A fault that juxtaposes permeable reservoir rock against impermeable rock', 'A stratigraphic change from porous to tight rock', 'Salt diapirs rising and deforming surrounding sedimentary layers'], correct: 0 },
  { id: 'q72', question: 'The main advantage of using an FPSO over a fixed platform in deepwater is:', options: ['FPSOs have lower day rates than fixed platforms', 'FPSOs can be relocated to a new field when production declines, offering flexibility', 'FPSOs have higher processing capacity than equivalent fixed platforms', 'FPSOs are considered safer due to their greater distance from the wellhead'], correct: 1 },
  { id: 'q73', question: 'In refining, the cetane number is a measure of:', options: ['Petrol octane quality for spark-ignition engines', 'Diesel ignition quality for compression-ignition engines', 'The sulphur content of gas oil fractions', 'The energy density of jet fuel'], correct: 1 },
  { id: 'q74', question: 'A "loss of containment" event in process plant terms means:', options: ['A production shortfall due to equipment failure', 'An uncontrolled release of a hazardous substance from its normal process containment', 'Loss of custody metering accuracy at a sales point', 'A pipeline pressure test that fails to hold the required test pressure'], correct: 1 },
  { id: 'q75', question: 'The Piper Alpha disaster (1988) is relevant to modern safety practice because:', options: ['It established the requirement for BOSIET training for all offshore workers', 'It fundamentally changed UK offshore safety regulation, shifting to goal-setting safety cases and improved emergency procedures', 'It was the first offshore incident involving a helicopter accident', 'It led to the development of the HART digital communications protocol'], correct: 1 },
  { id: 'q76', question: 'A "near miss" in safety terminology is best defined as:', options: ['An incident that caused only minor injury requiring first aid treatment', 'An unplanned event that did not result in injury or damage but had the potential to do so', 'A safety observation where the risk was considered acceptable', 'An alarm that was triggered but acknowledged without any operational response'], correct: 1 },
  { id: 'q77', question: 'A process plant control valve tagged "FCV-115" would be:', options: ['A pressure control valve on loop 115', 'A flow control valve on loop 115', 'A temperature control valve on loop 115', 'A level control valve on loop 115'], correct: 1 },
  { id: 'q78', question: 'Which type of rock typically forms the cap rock (seal) above a hydrocarbon reservoir?', options: ['Sandstone', 'Carbonate limestone', 'Shale (impermeable clay/mudstone)', 'Granite basement rock'], correct: 2 },
  { id: 'q79', question: 'The difference between a reciprocating compressor and a centrifugal compressor is:', options: ['Centrifugal compressors handle gas, reciprocating compressors handle liquids', 'Reciprocating compressors use pistons and cylinders; centrifugal compressors use a rotating impeller', 'Reciprocating compressors are used only for air, not hydrocarbon gas', 'Centrifugal compressors cannot achieve pressures above 10 bar'], correct: 1 },
  { id: 'q80', question: 'An OGUK medical examination for offshore work assesses fitness against:', options: ['HSE construction regulations for working at height', 'The physical and psychological demands of isolated offshore operations including emergency scenarios', 'NEBOSH certification requirements for safety professionals', 'The minimum fitness standard for helicopter travel in class G airspace'], correct: 1 },
  { id: 'q81', question: 'IOSH "Managing Safely" is primarily aimed at:', options: ['HSSE professionals seeking chartered status', 'Line managers and supervisors who need to manage health and safety responsibilities in their teams', 'Offshore workers as an alternative to BOSIET', 'Process safety engineers working on HAZOP studies'], correct: 1 },
  { id: 'q82', question: 'Instrument air in a process plant is typically supplied at approximately:', options: ['1 bar (close to atmospheric)', '7 bar', '30 bar', '100 bar'], correct: 1 },
  { id: 'q83', question: 'The term "hydrocarbon dew point" is relevant to gas processing because:', options: ['It defines the minimum temperature for safe gas ignition', 'It is the temperature at which hydrocarbons in gas begin to condense, which must be controlled to prevent liquid dropout in pipelines', 'It sets the specification for LNG export temperature', 'It is the regulatory limit for gas emissions from flare stacks'], correct: 1 },
  { id: 'q84', question: 'A "failure to safe" design principle in safety instrumented systems means:', options: ['The system fails and requires manual intervention to restart production safely', 'Control elements default to their safest position (open or closed) on loss of power or instrument air', 'The system inhibits all alarms to prevent operators being overwhelmed during a trip', 'Emergency shutdown is only triggered after two independent confirmations'], correct: 1 },
  { id: 'q85', question: 'Which global benchmark crude comes from the United States?', options: ['Brent Crude', 'Dubai Crude', 'WTI (West Texas Intermediate)', 'Urals Blend'], correct: 2 },
  { id: 'q86', question: 'The IMechE (Institution of Mechanical Engineers) is relevant to energy professionals because:', options: ['It operates OPITO-approved training centres for BOSIET', 'It is a chartered engineering institution through which mechanical engineers can achieve CEng status', 'It is the regulatory body for mechanical equipment inspection in the UK', 'It sets the maintenance standards for rotating equipment in refineries'], correct: 1 },
  { id: 'q87', question: 'Bitumen (also called asphalt) is produced from which fraction in the refinery?', options: ['Light naphtha from the top of the atmospheric column', 'Kerosene side-draw fraction', 'Vacuum residue — the heaviest fraction remaining after all lighter cuts have been removed', 'Reformer offgas'], correct: 2 },
  { id: 'q88', question: 'The Offshore Energies UK (OEUK) Workforce Tender Survey consistently shows that the average offshore worker is aged:', options: ['Under 30', '30–35', '35–40', 'Over 40, highlighting an age demographic challenge for the sector'], correct: 3 },
  { id: 'q89', question: 'Green hydrogen produced by electrolysis uses:', options: ['Methane as the hydrogen source with CO₂ captured underground', 'Water as the hydrogen source, split using electrical energy from renewables', 'Biomass as the organic hydrogen source', 'Natural gas liquids as a feedstock in a catalytic reformer'], correct: 1 },
  { id: 'q90', question: 'A toolbox talk on a construction or maintenance site is:', options: ['A formal training session lasting at least 4 hours covering HSSE topics', 'A short, focused safety briefing conducted before starting a specific task, typically covering the key hazards and controls', 'A written risk assessment completed by the permit-to-work issuer', 'A post-incident debriefing session following a near miss or accident'], correct: 1 },
  { id: 'q91', question: 'In a 3-phase separator, the three phases being separated are:', options: ['Gas, oil, and sand', 'Gas, oil, and produced water', 'Crude oil, LPG, and naphtha', 'Sweet gas, sour gas, and condensate'], correct: 1 },
  { id: 'q92', question: 'Condition monitoring in rotating equipment maintenance involves:', options: ['Replacing equipment on a fixed schedule regardless of actual condition', 'Continuously or periodically measuring parameters (vibration, temperature, oil analysis) to detect deterioration before failure', 'Inspecting equipment only after a reported breakdown or alarm', 'Installing additional measurement instruments whenever new equipment is added'], correct: 1 },
  { id: 'q93', question: 'A Permit to Work (PTW) system in a process plant primarily serves to:', options: ['Track the working hours of contractors for payroll purposes', 'Ensure that hazards associated with a specific maintenance or modification task are identified, communicated, and controlled', 'Provide legal authority for contractors to work on client premises', 'Record the completion of mandatory safety training for each worker'], correct: 1 },
  { id: 'q94', question: 'The "energy trilemma" concept refers to the challenge of simultaneously achieving:', options: ['Low cost, high efficiency, and low maintenance in renewable energy systems', 'Security of supply, affordability, and environmental sustainability', 'Upstream production growth, midstream expansion, and downstream profitability', 'Operator, contractor, and regulatory agreement on safety standards'], correct: 1 },
  { id: 'q95', question: 'Job safety analysis (JSA) or task risk assessment is typically completed:', options: ['Annually as part of the facility\'s HSSE management system review', 'Before undertaking a specific task, to identify hazards and confirm controls are in place', 'By the HSSE team at the start of each year for all planned maintenance tasks', 'Only for tasks that have previously resulted in a reportable incident'], correct: 1 },
  { id: 'q96', question: 'In offshore helicopter safety, the "4-point check" refers to:', options: ['Checking passport, visa, medical certificate, and BOSIET before boarding', 'Life jacket straps, EBS unit, harness release, and exit identification — the pre-flight brief items', 'Four emergency exits that must be identified before departure', 'Weather, fuel, crew fitness, and mechanical checks required before a helicopter flight'], correct: 1 },
  { id: 'q97', question: 'The NSTA (North Sea Transition Authority) replaced the OGA (Oil and Gas Authority) in 2022 to reflect:', options: ['Increased focus on safety regulation following the Piper Alpha anniversary', 'The broadened remit to include oversight of the energy transition, CCUS, and hydrogen alongside oil and gas regulation', 'Merger with the Health and Safety Executive under a single energy regulator', 'Devolution of oil and gas regulation to the Scottish Parliament'], correct: 1 },
  { id: 'q98', question: 'A major advantage of offshore wind over onshore wind is:', options: ['Lower construction and installation costs', 'Higher average wind speeds and reduced visual impact on populated areas', 'No requirement for grid connection infrastructure', 'Lower maintenance costs due to less turbulent wind conditions'], correct: 1 },
  { id: 'q99', question: 'In process plant operations, a "trip" refers to:', options: ['A routine maintenance visit requiring the plant to be shut down', 'An automatic shutdown of equipment triggered by a safety system on detection of an out-of-limit parameter', 'A commissioning test of emergency shutdown systems', 'A planned outage for regulatory inspection'], correct: 1 },
  { id: 'q100', question: 'The energy sector value chain from wellhead to end consumer typically involves contributions from:', options: ['Only the operator company, which manages all stages from exploration to retail', 'Multiple companies — operators, contractors, shippers, refiners, distributors — often operating under complex commercial arrangements', 'Government-owned entities at each stage, with private companies providing only equipment', 'A single vertically integrated company holding all licences from exploration to retail'], correct: 1 },
];

// ============================================================
// COURSE 2: OFFSHORE SAFETY ESSENTIALS
// ============================================================

const course2Modules = [
  {
    id: 'ose-m1',
    title: 'H2S Awareness',
    duration: '20 min',
    content: `
<h2>Hydrogen Sulphide — The Invisible Killer</h2>
<p>Hydrogen sulphide (H₂S) is one of the most dangerous substances encountered in the oil and gas industry. It is a colourless, flammable gas produced naturally in crude oil and gas reservoirs, and also generated during refining processes, in confined spaces with organic decomposition, and in drilling operations when encountering H₂S-bearing formations.</p>
<p>The reason H₂S is so particularly dangerous is the combination of its high toxicity, its ability to paralyse the sense of smell at low concentrations, and the speed at which it can incapacitate and kill. At concentrations above approximately 100 ppm (parts per million), a person may lose consciousness within seconds. At 700+ ppm, death can occur with a single breath.</p>

<h3>Properties of H₂S</h3>
<ul>
  <li><strong>Smell:</strong> Characteristic "rotten egg" odour — detectable at very low concentrations (0.0005 ppm). However, olfactory fatigue (nose blindness) occurs rapidly at higher concentrations — the smell disappears even though the hazard increases. <strong>Never rely on smell to detect H₂S.</strong></li>
  <li><strong>Density:</strong> Heavier than air (specific gravity ~1.19). Accumulates in low points — drains, pits, below-deck areas, confined spaces.</li>
  <li><strong>Flammability:</strong> Lower Explosive Limit (LEL) of 4.3%, Upper Explosive Limit (UEL) of 46%. Creates both toxic AND flammable hazard.</li>
  <li><strong>Water solubility:</strong> Soluble in water — can accumulate in sludge, scale, and produced water, then release when disturbed.</li>
</ul>

<h3>Exposure Limits and Effects</h3>
<p>UK Workplace Exposure Limits (WELs): Short-term (15-min) limit: 5 ppm. Long-term (8-hr) limit: 1 ppm. Industry "action level" for H₂S response: typically 10 ppm on a fixed detector. All offshore and process plant workers in H₂S environments should carry a personal gas monitor calibrated to detect H₂S.</p>

<h3>Response and Protection</h3>
<p>In any H₂S incident: <strong>Don't go in</strong> without SCBA (Self-Contained Breathing Apparatus). More rescuers have died attempting to save H₂S victims without breathing protection than the original victims. The response protocol is: raise the alarm, evacuate the area upwind, muster, call emergency services, await properly equipped rescue team.</p>

<div class="terminology-box">
  <div class="term-title">Key Terminology — H2S Awareness</div>
  <dl>
    <dt>H₂S</dt><dd>Hydrogen sulphide — toxic, flammable gas found in oil/gas operations with a "rotten egg" smell</dd>
    <dt>Olfactory Fatigue</dt><dd>Loss of ability to smell H₂S at elevated concentrations — one of its most dangerous properties</dd>
    <dt>SCBA</dt><dd>Self-Contained Breathing Apparatus — provides independent air supply for work or rescue in H₂S environments</dd>
    <dt>WEL</dt><dd>Workplace Exposure Limit — regulatory maximum H₂S exposure (1 ppm 8-hr, 5 ppm 15-min in UK)</dd>
    <dt>Sour Service</dt><dd>Equipment or pipelines designed to handle H₂S-containing fluids — requires special material selection</dd>
  </dl>
</div>
    `,
    quiz: [
      { id: 'ose-m1-q1', question: 'Why is olfactory fatigue particularly dangerous in H₂S exposure?', options: ['It causes permanent loss of smell after prolonged exposure', 'The smell disappears at high concentrations, giving a false sense of safety even as the hazard increases', 'It only affects workers over the age of 50', 'It occurs only in enclosed spaces, not open-air environments'], correct: 1 },
      { id: 'ose-m1-q2', question: 'H₂S is described as "heavier than air" — what practical safety implication does this have?', options: ['H₂S must be vented through high-level vents to dissipate safely', 'H₂S accumulates in low points such as drains, pits, and below-deck spaces', 'H₂S does not present a hazard in outdoor environments with good air movement', 'H₂S disperses evenly throughout a space and does not concentrate'], correct: 1 },
      { id: 'ose-m1-q3', question: 'In an H₂S emergency, the FIRST action for a non-equipped bystander should be:', options: ['Attempt immediate rescue of the casualty before calling for help', 'Raise the alarm and evacuate the area moving upwind — do NOT enter without SCBA', 'Apply CPR immediately upon finding the casualty', 'Check the H₂S concentration using a personal gas monitor before entering'], correct: 1 },
    ],
  },
  {
    id: 'ose-m2',
    title: 'Confined Space Entry',
    duration: '20 min',
    content: `
<h2>Confined Space Entry — Managing a High-Risk Activity</h2>
<p>Confined spaces are responsible for a disproportionate number of industrial fatalities. The HSE estimates that in the UK, approximately 15 people die in confined spaces annually — and the statistics are particularly sobering because many of these deaths occur to would-be rescuers, not the original entrant.</p>
<p>A <strong>confined space</strong> is legally defined (Confined Spaces Regulations 1997) as a place which is substantially enclosed and in which, due to its nature or the work being carried out, there is a reasonably foreseeable risk of serious injury from hazardous substances, conditions, or free-flowing solids.</p>

<h3>What Makes a Space Confined?</h3>
<p>It is not about size or whether the space has an opening — it is about the combination of enclosure and hazard. Confined spaces in oil and gas include: vessel internals, tanks (crude oil, chemical, produced water), pressure vessels, sewers, drain pits, cable trenches, storage tanks, pig launchers/receivers, and heat exchanger shells.</p>
<p>The specific hazards that define a confined space include: oxygen deficiency, flammable atmospheres, toxic gas (especially H₂S), engulfment by solids or liquids, and mechanical hazards from mixers, agitators, or valve inadvertent operation.</p>

<h3>The Permit to Work System for Confined Spaces</h3>
<p>All confined space entries in oil and gas must be conducted under a Confined Space Entry Permit — a specific class of Permit to Work that requires: atmospheric testing before entry, continuous atmospheric monitoring during entry, standby personnel outside the space, a rescue plan, isolation of energy sources (LOTO — Lock Out Tag Out), ventilation (forced ventilation in most cases), and appropriate PPE and rescue equipment on standby.</p>
<p>Atmospheric testing must check three parameters: oxygen content (should be 19.5–23.5%; below 19.5% indicates deficiency, above 23.5% enriched), flammable gas (%LEL — must be below 10% LEL before entry), and toxic gas (H₂S and other toxic contaminants).</p>

<div class="terminology-box">
  <div class="term-title">Key Terminology — Confined Space Entry</div>
  <dl>
    <dt>Confined Space</dt><dd>Substantially enclosed space with a foreseeable risk of serious injury from hazardous substances or conditions</dd>
    <dt>LOTO</dt><dd>Lock Out Tag Out — process of isolating energy sources before entry to prevent inadvertent energisation</dd>
    <dt>Standby Man</dt><dd>Trained person positioned outside the confined space during entry, responsible for communications and initiating rescue</dd>
    <dt>%LEL</dt><dd>Percentage of Lower Explosive Limit — measure of flammable gas concentration relative to its minimum explosive concentration</dd>
    <dt>Oxygen Deficiency</dt><dd>Oxygen content below 19.5% — causes impaired judgement, loss of consciousness, and death at low enough levels</dd>
  </dl>
</div>
    `,
    quiz: [
      { id: 'ose-m2-q1', question: 'Under the Confined Spaces Regulations, the key feature that makes a space "confined" is:', options: ['It has only one entry/exit point', 'It is substantially enclosed AND has a foreseeable risk of serious injury from a hazardous substance or condition', 'It is any space smaller than 2 cubic metres in volume', 'It requires breathing apparatus to enter regardless of atmospheric conditions'], correct: 1 },
      { id: 'ose-m2-q2', question: 'Before entering a confined space, atmospheric testing must confirm all of the following EXCEPT:', options: ['Oxygen content is between 19.5% and 23.5%', 'Flammable gas is below 10% of the Lower Explosive Limit (LEL)', 'Temperature inside the space does not exceed 30°C', 'Toxic gases (H₂S etc.) are below their exposure limits'], correct: 2 },
      { id: 'ose-m2-q3', question: 'The "Standby Man" role during confined space entry is:', options: ['A backup entrant ready to start work if the primary entrant takes a break', 'A trained person outside the space responsible for communications, monitoring, and initiating rescue', 'The permit authority who signed the entry permit', 'A safety observer who enters the space first to check conditions'], correct: 1 },
    ],
  },
  {
    id: 'ose-m3',
    title: 'Working at Height',
    duration: '20 min',
    content: `
<h2>Working at Height in the Offshore Environment</h2>
<p>Falls from height are consistently among the leading causes of fatal and serious injuries in the energy sector. The Work at Height Regulations 2005 require employers to avoid working at height where possible, use work equipment or other measures to prevent falls where height work cannot be avoided, and where the risk of a fall cannot be eliminated, use work equipment or other measures to minimise the distance and consequences of any fall.</p>
<p>Offshore installations present particular working at height challenges: wet and slippery decks, high winds, limited space for access equipment, and remote location from emergency medical care. The hierarchy of controls applies strictly: avoid the task if possible, use collective protection (guardrails, platforms), then use personal fall protection (harness and lanyard) as a last resort — not a first resort.</p>

<h3>Fall Protection Equipment</h3>
<p><strong>Full-body harnesses</strong> must be inspected before every use. Look for: cut, frayed, or abraded webbing; damaged buckles or stitching; deformed or corroded metal components; contamination with chemicals that degrade nylon. Any defect = remove from service.</p>
<p><strong>Lanyards</strong> connect the harness to an anchor point. Energy-absorbing lanyards deploy a shock absorber that limits the arrest force on the body to 6 kN. Twin-leg lanyards allow 100% tie-off — always connected to an anchor point while moving. Calculate <strong>total fall distance</strong> before attaching: lanyard length + energy absorber deployment + harness stretch + clearance to obstruction. If you cannot survive the fall geometry, you cannot use that anchor point.</p>

<h3>Scaffolding Offshore</h3>
<p>All offshore scaffolding must be erected, altered, and dismantled by competent scaffolders (typically CISRS-carded). Every scaffold must carry an inspection tag signed by a qualified scaffolding inspector within the last 7 days (for low-risk) or before every work period (for high-risk). Always check the tag before ascending. A scaffold without a current signed inspection tag must not be used — report it to your supervisor.</p>

<div class="terminology-box">
  <div class="term-title">Key Terminology — Working at Height</div>
  <dl>
    <dt>Work at Height</dt><dd>Any work in a place where a person could fall a distance liable to cause personal injury</dd>
    <dt>Energy-Absorbing Lanyard</dt><dd>Lanyard with a built-in shock absorber that limits arrest force to 6 kN</dd>
    <dt>Total Fall Distance</dt><dd>The maximum distance a person could fall including lanyard length, energy absorber, and harness elongation</dd>
    <dt>CISRS</dt><dd>Construction Industry Scaffolding Record Scheme — scaffolding competency card scheme</dd>
    <dt>Collective Protection</dt><dd>Fall prevention measures that protect multiple workers without individual action — guardrails, platforms, nets</dd>
  </dl>
</div>
    `,
    quiz: [
      { id: 'ose-m3-q1', question: 'The Work at Height Regulations 2005 hierarchy of controls requires:', options: ['Personal fall protection (harness) must always be worn above 2 metres', 'First avoid height work; if unavoidable, use collective protection; if still a risk, minimise fall distance and consequences', 'Two spotters must observe any worker at height above 4 metres', 'All working at height requires a permit regardless of duration'], correct: 1 },
      { id: 'ose-m3-q2', question: 'Before ascending a scaffold offshore, you must:', options: ['Inform your supervisor of the intention to climb', 'Check the scaffold inspection tag — it must be current and signed by a qualified inspector', 'Don a full harness and attach a twin-leg lanyard', 'Conduct an atmospheric test for H₂S in the immediate area'], correct: 1 },
      { id: 'ose-m3-q3', question: '"Total fall distance" must be calculated before using a harness and lanyard because:', options: ['It determines the arrest force on the body and the lanyard rating required', 'You must confirm there is sufficient clearance below the anchor point to avoid striking an obstruction during a fall', 'It sets the maximum height at which a specific lanyard can be used', 'It is required information for the permit to work'], correct: 1 },
    ],
  },
  {
    id: 'ose-m4',
    title: 'Permit to Work Systems',
    duration: '20 min',
    content: `
<h2>Permit to Work — The Backbone of Operational Safety</h2>
<p>The Permit to Work (PTW) system is the mechanism by which a process plant controls non-routine work — particularly maintenance, modifications, and inspections involving live plant, energy isolation, hot work, or other significant hazards. It is arguably the single most important operational safety system in the energy sector, and failures of PTW systems feature prominently in the investigation reports of major incidents including Piper Alpha.</p>
<p>The PTW system is not paperwork for its own sake. It is the structured process by which the people who know about a hazard (the operations team who own the plant) communicate that hazard to the people who will be working with it (the maintenance team), and confirm that appropriate controls are in place before work starts.</p>

<h3>Types of Permits</h3>
<p><strong>Cold Work Permit</strong> — for tasks involving no sources of ignition and where flammable or explosive materials are not present. The most common permit type.</p>
<p><strong>Hot Work Permit</strong> — for any task that could produce a spark, flame, or heat sufficient to ignite a flammable atmosphere: welding, grinding, cutting, use of non-intrinsically safe electrical equipment. Requires atmospheric testing and a fire watch.</p>
<p><strong>Confined Space Entry Permit</strong> — as described in the previous module. Always accompanies entry into a designated confined space.</p>
<p><strong>Electrical Isolation Certificate / LOTO</strong> — accompanies any work on electrical systems and confirms that electrical energy has been isolated, locked, and tagged to prevent re-energisation.</p>
<p><strong>Excavation Permit</strong> — for any ground disturbance where underground services (cables, pipes) may be present.</p>

<h3>The PTW Process</h3>
<p>A standard PTW follows these steps: (1) The Performing Authority (PA) — the person responsible for the work team — applies for the permit, describing the task and the precautions. (2) The Issuing Authority (IA) — typically the operations team leader or safety officer — reviews the application, checks that the plant is in a state safe for the work, confirms isolations and testing are complete, and issues the permit. (3) Work is carried out within the conditions stated on the permit. (4) On completion, the PA signs off the work as complete and returns the permit to the IA. (5) The IA accepts the permit return and reinstates the plant.</p>
<p>Critical principle: The permit must be on the worksite during work. Work outside the permit scope must stop — a new permit is needed. The permit does not make the work safe — it confirms that the identified controls are in place before starting.</p>

<div class="terminology-box">
  <div class="term-title">Key Terminology — Permit to Work</div>
  <dl>
    <dt>Issuing Authority (IA)</dt><dd>The person (typically operations) who issues a permit, confirming the plant state and conditions for safe working</dd>
    <dt>Performing Authority (PA)</dt><dd>The person responsible for the work team and for complying with permit conditions</dd>
    <dt>Hot Work</dt><dd>Any task that could produce ignition sources — welding, grinding, cutting — requiring elevated permit controls</dd>
    <dt>Simultaneous Operations (SIMOPS)</dt><dd>Multiple work activities occurring at the same time in proximity — requires careful PTW coordination to prevent conflicts</dd>
    <dt>Fire Watch</dt><dd>Person stationed during and after hot work to detect and extinguish any ignition of flammable material</dd>
  </dl>
</div>
    `,
    quiz: [
      { id: 'ose-m4-q1', question: 'The Piper Alpha disaster in 1988 involved a critical PTW failure because:', options: ['The wrong type of permit was used for a hot work task', 'A pump was reinstated to service without the maintenance team knowing, as the completion of work had not been properly communicated', 'The permit was issued by someone not authorised to do so', 'The fire watch was not maintained during a welding operation'], correct: 1 },
      { id: 'ose-m4-q2', question: 'A Hot Work Permit is specifically required because:', options: ['All welding must be tracked for quality assurance purposes', 'Hot work generates potential ignition sources that could ignite flammable atmospheres present in process plant environments', 'Welders require additional PPE which must be documented', 'Hot work changes the metallurgy of process piping and must be controlled'], correct: 1 },
      { id: 'ose-m4-q3', question: 'If a work team discovers they need to extend their task beyond the scope described on the current permit, they must:', options: ['Continue working and note the deviation on the permit at the end of the job', 'Inform the Performing Authority and document the change in the work log', 'Stop work and obtain a new or modified permit covering the additional scope', 'Request verbal authorisation from the operations supervisor and continue'], correct: 2 },
    ],
  },
  {
    id: 'ose-m5',
    title: 'COSHH and Chemical Safety',
    duration: '18 min',
    content: `
<h2>COSHH — Controlling Substances Hazardous to Health</h2>
<p>The Control of Substances Hazardous to Health Regulations 2002 (COSHH) require employers to assess the risk to health from exposure to hazardous substances and implement appropriate controls. In the energy sector, workers encounter a wide range of hazardous substances: H₂S and other toxic gases, drilling chemicals and muds, scale inhibitors and corrosion inhibitors, acids used in well stimulation, solvents, lubricants, and naturally occurring radioactive material (NORM) in scale and produced water.</p>
<p><strong>NORM (Naturally Occurring Radioactive Material)</strong> deserves specific mention in oil and gas. Radium-226 and Radium-228 from reservoir rock can co-precipitate with scale inside production equipment (particularly pipework, heat exchangers, and separators). Workers involved in cleaning or descaling production equipment must follow specific NORM handling procedures and waste disposal requirements, which are regulated separately from general chemical hazards.</p>
<p>The COSHH hierarchy of controls mirrors the general hierarchy: eliminate the substance, substitute with something less hazardous, enclose or control at source, use local exhaust ventilation, apply administrative controls (SOPs, training, supervision), and lastly provide personal protective equipment. PPE is always the last resort — it protects only the wearer and only works if correctly selected, worn, and maintained.</p>
<p>Every workplace in the UK that uses or produces hazardous chemicals must maintain a Safety Data Sheet (SDS) for each substance. The SDS provides: chemical identification, hazard classification, exposure limits, first aid measures, fire-fighting measures, and storage/disposal requirements. Workers should read the SDS for any chemical they use — it is the primary reference document for chemical safety.</p>

<div class="terminology-box">
  <div class="term-title">Key Terminology — COSHH</div>
  <dl>
    <dt>COSHH</dt><dd>Control of Substances Hazardous to Health — UK regulations requiring assessment and control of chemical hazards at work</dd>
    <dt>NORM</dt><dd>Naturally Occurring Radioactive Material — radioactive scale formed in oil/gas production equipment requiring specialist handling</dd>
    <dt>SDS</dt><dd>Safety Data Sheet — standardised document providing hazard, first aid, and safety information for a chemical substance</dd>
    <dt>LEV</dt><dd>Local Exhaust Ventilation — extraction system that captures contaminants at source before they reach the worker's breathing zone</dd>
    <dt>WEL</dt><dd>Workplace Exposure Limit — the maximum permitted airborne concentration of a substance during a working day</dd>
  </dl>
</div>
    `,
    quiz: [
      { id: 'ose-m5-q1', question: 'NORM (Naturally Occurring Radioactive Material) in oil and gas facilities is typically found in:', options: ['Produced water and scale deposits inside production equipment', 'Crude oil storage tanks at atmospheric pressure', 'Drilling mud systems during exploration wells', 'Insulation materials on hot pipework'], correct: 0 },
      { id: 'ose-m5-q2', question: 'Under the COSHH hierarchy of controls, Personal Protective Equipment (PPE) is:', options: ['The primary control measure because it is the most reliable', 'The last resort, used only when higher-level controls cannot adequately reduce exposure', 'Required in addition to all other controls regardless of residual risk', 'Only necessary for substances classified as Category 1 toxic'], correct: 1 },
      { id: 'ose-m5-q3', question: 'A Safety Data Sheet (SDS) for a chemical substance must be maintained by the employer because:', options: ['It must be submitted to the HSE annually as a regulatory requirement', 'It provides workers and emergency responders with essential information about hazards, exposure limits, and emergency measures', 'It replaces the need for a COSHH assessment for that substance', 'It is required before any chemical can be transported by road in the UK'], correct: 1 },
    ],
  },
  {
    id: 'ose-m6',
    title: 'Fire Safety Offshore',
    duration: '20 min',
    content: `
<h2>Fire and Explosion Prevention and Response Offshore</h2>
<p>Fire and explosion represent the most severe major accident scenarios on offshore oil and gas installations. The combination of large inventories of flammable hydrocarbons, ignition sources (electrical equipment, hot work, hot surfaces), and the confined nature of an offshore platform creates conditions where an uncontrolled ignition event can escalate rapidly to catastrophe.</p>
<p>The "fire triangle" provides the conceptual framework: fire requires fuel, oxygen, and an ignition source. Remove any one of these and combustion is not possible. Offshore fire prevention strategy focuses on all three: preventing loss of containment (fuel), area classification and Ex equipment (ignition sources), and inerting of specific spaces (oxygen).</p>

<h3>Hazardous Area Classification</h3>
<p>Hazardous area classification is the systematic process of identifying where flammable atmospheres may be present and designating zones accordingly. Zone 0 is where a flammable atmosphere is continuously present (e.g., inside a tank). Zone 1 is where a flammable atmosphere is likely to occur in normal operation (e.g., around an open drain). Zone 2 is where a flammable atmosphere is unlikely but possible in abnormal conditions.</p>
<p>All electrical and instrumentation equipment used in hazardous zones must be certified to appropriate Ex protection standards and marked accordingly. This is the domain of CompEx-certified technicians. Installing non-certified equipment in a hazardous area is a serious breach — the equipment becomes a potential ignition source for a release.</p>

<h3>Passive and Active Fire Protection</h3>
<p><strong>Passive fire protection (PFP)</strong> — structural fire protection applied to the installation to maintain structural integrity during a fire for long enough to permit safe evacuation. PFP includes intumescent coatings on structural steel, fire-rated bulkheads, and blast-resistant accommodation modules.</p>
<p><strong>Active fire protection</strong> — systems that actively suppress or extinguish fire: deluge systems (water curtains over module areas), CO₂ total flooding in enclosed spaces (generator rooms, switchrooms), foam monitors for large pool fires, and portable extinguishers for incipient fires.</p>
<p>The correct extinguisher type depends on the fire class: Class A (solids) — water or foam; Class B (flammable liquids) — foam or dry powder; Class C (gases) — dry powder (never water); Class D (metals) — specialist powder; Class F (cooking oils) — wet chemical. For electrical fires: CO₂ or dry powder — never water.</p>

<div class="terminology-box">
  <div class="term-title">Key Terminology — Fire Safety</div>
  <dl>
    <dt>Zone Classification</dt><dd>Zone 0/1/2 designation of areas where flammable atmospheres may be present, determining Ex equipment requirements</dd>
    <dt>Ex Equipment</dt><dd>Electrical/instrument equipment certified for use in explosive atmospheres — marked with Ex and protection method</dd>
    <dt>Passive Fire Protection (PFP)</dt><dd>Structural protection maintaining integrity during a fire — intumescent coatings, fire-rated bulkheads</dd>
    <dt>Deluge System</dt><dd>Active fire protection system that releases large volumes of water over a module area to suppress fires</dd>
    <dt>Total Flooding</dt><dd>Fire suppression using CO₂ or inert gas to displace oxygen in an enclosed space — evacuate before activation</dd>
  </dl>
</div>
    `,
    quiz: [
      { id: 'ose-m6-q1', question: 'Zone 1 in hazardous area classification means:', options: ['A flammable atmosphere is always present', 'A flammable atmosphere is likely to occur in normal operation', 'A flammable atmosphere is unlikely but possible in abnormal conditions', 'The area has been assessed as non-hazardous'], correct: 1 },
      { id: 'ose-m6-q2', question: 'For an electrical fire, the correct extinguisher type is:', options: ['Water — it is the most effective and widely available', 'CO₂ or dry powder — water must never be used on electrical fires', 'Foam — it smothers the fire without conducting electricity', 'Wet chemical — it is safe on all fire classes'], correct: 1 },
      { id: 'ose-m6-q3', question: 'Passive fire protection (PFP) on an offshore platform serves to:', options: ['Automatically detect and suppress fires in structural areas', 'Maintain structural integrity during a fire for long enough to allow safe evacuation', 'Prevent ignition of flammable atmospheres in hazardous areas', 'Provide personnel with fire suits and breathing apparatus'], correct: 1 },
    ],
  },
  {
    id: 'ose-m7',
    title: 'Emergency Procedures Offshore',
    duration: '20 min',
    content: `
<h2>Emergency Response — Preparation Makes the Difference</h2>
<p>Emergencies offshore require a rapid, coordinated, and rehearsed response. The isolation and remoteness of offshore installations means that the workforce must be largely self-reliant in the initial stages of any emergency — onshore emergency services cannot arrive within minutes. This reality makes comprehensive emergency training, regular drills, and clear procedures essential.</p>
<p>The principal offshore emergencies addressed in the installation's Emergency Response Plan include: fire and explosion, blowout, gas release, man overboard, helicopter incident, medical emergency, and Temporary Refuge (TR) muster.</p>

<h3>The Muster and Temporary Refuge</h3>
<p>Every offshore worker must know their muster station — where to go when the general alarm sounds. The <strong>Temporary Refuge (TR)</strong> is a designated fire and blast-rated area (typically the accommodation module) where the workforce mustered while the emergency is assessed. The TR provides protection while an escape route to the lifeboats or rescue is organised.</p>
<p>TEMPSC (Totally Enclosed Motor Propelled Survival Craft) — lifeboats — are the primary means of evacuation. Each offshore worker must know the location of their assigned lifeboat, how to board it, and basic operation. Lifeboat drills are conducted regularly and all personnel participate.</p>

<h3>Man Overboard</h3>
<p>Man overboard (MOB) is a critical emergency given the water temperature, sea state, and current in offshore environments. The North Sea has water temperatures of 5–15°C — cold water shock can incapacitate a person within minutes, and survival time without a survival suit in winter conditions may be less than 30 minutes. When MOB is raised: shout "Man overboard", throw a lifebuoy, designate a pointer to maintain visual contact, raise the alarm, and initiate the platform's MOB procedure.</p>

<div class="terminology-box">
  <div class="term-title">Key Terminology — Emergency Procedures</div>
  <dl>
    <dt>Temporary Refuge (TR)</dt><dd>Blast and fire-rated area on an installation where crew muster during an emergency before evacuation</dd>
    <dt>TEMPSC</dt><dd>Totally Enclosed Motor Propelled Survival Craft — the enclosed offshore lifeboat</dd>
    <dt>Muster Station</dt><dd>The designated location where personnel must go when the general alarm sounds</dd>
    <dt>ERP</dt><dd>Emergency Response Plan — the documented procedures for responding to all foreseeable emergencies on the installation</dd>
    <dt>OIM</dt><dd>Offshore Installation Manager — the person in command of an offshore installation, responsible for all emergency decisions</dd>
  </dl>
</div>
    `,
    quiz: [
      { id: 'ose-m7-q1', question: 'The Temporary Refuge (TR) on an offshore installation is:', options: ['A temporary building constructed during major maintenance shutdowns', 'A blast and fire-rated area where the workforce mustered during an emergency before evacuation', 'The control room, which is the safest area on the installation', 'A sea-level escape route to the TEMPSC lifeboats'], correct: 1 },
      { id: 'ose-m7-q2', question: 'In a Man Overboard (MOB) situation in the North Sea, why is rapid response critical?', options: ['North Sea currents are exceptionally strong and will carry a person many miles quickly', 'Cold water temperatures can incapacitate a person within minutes, with survival time limited even with a survival suit', 'The person will become disoriented and unable to signal their position within 5 minutes', 'Helicopter rescue is unavailable during most North Sea emergencies due to weather'], correct: 1 },
      { id: 'ose-m7-q3', question: 'Every offshore worker must know their muster station because:', options: ['The muster count at the general alarm must be completed within 3 minutes by regulation', 'In an emergency, rapid and orderly muster allows the OIM to account for all personnel and coordinate evacuation', 'Failure to know your muster station results in loss of your offshore licence', 'The muster station is where PPE and EBS units are stored'], correct: 1 },
    ],
  },
  {
    id: 'ose-m8',
    title: 'Helicopter Safety',
    duration: '18 min',
    content: `
<h2>Offshore Helicopter Operations — Safety Requirements</h2>
<p>The helicopter is the primary means of personnel transport to and from offshore installations in the North Sea and many other offshore environments. Despite its routine nature, helicopter travel is a statistically significant hazard in offshore operations. Multiple fatal accidents have shaped the safety requirements that all offshore workers must meet.</p>
<p>The <strong>HUET (Helicopter Underwater Escape Training)</strong> is a mandatory qualification for all offshore helicopter passengers. It trains workers to escape from a submerged, inverted helicopter — the scenario that results from most ditching events, as the helicopter's engine and rotor weight cause it to invert rapidly upon entering the water. HUET training involves multiple exits from a submerged capsule and is conducted in a purpose-built facility. The training is uncomfortable but essential — the techniques must be automated because panic, disorientation, and cold water will prevent conscious decision-making.</p>

<h3>Life Jacket and EBS</h3>
<p>Every helicopter passenger must wear an approved <strong>offshore life jacket</strong> fitted correctly for the entire flight. Key fitting points: the jacket must be close-fitting but not restricting breathing; the oral inflation tube must be accessible; the EBS (Emergency Breathing System) — a small compressed air unit providing approximately 3 minutes of air for underwater escape — must be secured as trained and the mouthpiece accessible.</p>
<p>The four-point pre-flight brief covers: life jacket, EBS, seat belt release (often a single-point release — practise underwater, it is different from normal), and exit identification. Know which exit you will use and the one behind you as backup.</p>

<div class="terminology-box">
  <div class="term-title">Key Terminology — Helicopter Safety</div>
  <dl>
    <dt>HUET</dt><dd>Helicopter Underwater Escape Training — mandatory training for offshore helicopter passengers, practising escape from an inverted, submerged helicopter</dd>
    <dt>EBS</dt><dd>Emergency Breathing System — small compressed air unit providing air for underwater escape from a ditched helicopter</dd>
    <dt>Ditching</dt><dd>Emergency landing of a helicopter on water</dd>
    <dt>BOSIET</dt><dd>Basic Offshore Safety Induction and Emergency Training — includes HUET and is required before first offshore flight</dd>
    <dt>CAA</dt><dd>Civil Aviation Authority — UK regulator for helicopter operations including offshore flights</dd>
  </dl>
</div>
    `,
    quiz: [
      { id: 'ose-m8-q1', question: 'HUET (Helicopter Underwater Escape Training) trains offshore workers to:', options: ['Operate the helicopter radio and emergency beacon in a ditching scenario', 'Escape from a submerged, inverted helicopter capsule — the typical scenario following a ditching event', 'Provide first aid to injured passengers following a helicopter accident', 'Navigate to shore using the helicopter\'s life raft and emergency GPS'], correct: 1 },
      { id: 'ose-m8-q2', question: 'The EBS (Emergency Breathing System) provides approximately:', options: ['30 seconds of air — enough to surface from a ditching at typical operating depth', '3 minutes of air — for underwater escape and ascent to the surface', '10 minutes of air — sufficient for a full helicopter evacuation sequence', '1 hour of air — equivalent to a small SCBA set'], correct: 1 },
      { id: 'ose-m8-q3', question: 'Why do HUET capsules practice inverted underwater escape specifically?', options: ['Helicopters are always flown inverted for maintenance checks and crews must be familiar', 'When a helicopter ditches, the engine/rotor weight causes it to rapidly invert — this is the typical scenario workers must escape from', 'It is easier to access exits from an inverted position due to the design of offshore helicopter doors', 'ICAO regulations require all helicopter escapes to be conducted from the inverted position'], correct: 1 },
    ],
  },
];

const course2Assessment = [
  { id: 'ose-q1', question: 'H₂S is dangerous primarily because:', options: ['It burns at a very low temperature, making ignition easy', 'It is highly toxic, heavier than air, and causes olfactory fatigue so workers lose the ability to smell it at dangerous concentrations', 'It corrodes metal rapidly, weakening equipment', 'It displaces oxygen in a space causing suffocation'], correct: 1 },
  { id: 'ose-q2', question: 'The UK Workplace Exposure Limit (WEL) for H₂S (8-hour long-term) is:', options: ['10 ppm', '5 ppm', '1 ppm', '0.5 ppm'], correct: 2 },
  { id: 'ose-q3', question: 'A confined space entry permit always requires:', options: ['Atmospheric testing before entry and continuous monitoring during entry', 'Only a hot work element if welding will be performed inside', 'Management approval from the offshore installation manager', 'At least two entrants for mutual safety monitoring'], correct: 0 },
  { id: 'ose-q4', question: 'LOTO (Lock Out Tag Out) is performed to:', options: ['Secure the permit paperwork to the equipment being worked on', 'Isolate all energy sources before entry or maintenance to prevent inadvertent re-energisation', 'Log the location of all workers on the permit to work board', 'Limit access to a work area by tagging hazardous zones'], correct: 1 },
  { id: 'ose-q5', question: 'The Work at Height Regulations 2005 state that working at height should be avoided:', options: ['Whenever a ladder would be needed', 'Where it is reasonably practicable to do so — avoidance is the highest priority in the hierarchy', 'At heights above 2 metres where a fall could cause injury', 'Only when wind speeds exceed 10 m/s offshore'], correct: 1 },
  { id: 'ose-q6', question: 'Before using a scaffold offshore, the worker must:', options: ['Sign the scaffold erectors\' competency log', 'Check the scaffold inspection tag is current and signed by a competent scaffold inspector', 'Confirm the weight rating of the scaffold exceeds their equipment load', 'Obtain verbal clearance from the operations supervisor'], correct: 1 },
  { id: 'ose-q7', question: 'A Hot Work Permit is required for:', options: ['Any manual handling operation involving hot process fluids', 'Welding, grinding, or cutting operations that could produce ignition sources near flammable atmospheres', 'Any task where the ambient temperature exceeds 35°C', 'Electrical testing in Zone 2 hazardous areas'], correct: 1 },
  { id: 'ose-q8', question: 'In the PTW system, the Issuing Authority (IA) is responsible for:', options: ['Completing the work safely as described in the permit', 'Confirming the plant state is safe for the work and issuing the permit to the Performing Authority', 'Submitting permits to the HSE for regulatory review', 'Training new workers on the permit to work system'], correct: 1 },
  { id: 'ose-q9', question: 'NORM in oil and gas production equipment is formed by:', options: ['Radioactive materials added to drilling mud for density', 'Radium isotopes co-precipitating with scale from reservoir rock inside production equipment', 'Neutron radiation from electronic equipment in the control room', 'UV radiation from the sun affecting exposed equipment on open decks'], correct: 1 },
  { id: 'ose-q10', question: 'For an electrical fire, the appropriate extinguisher type is:', options: ['Water extinguisher — widely available and effective', 'Foam extinguisher — safe on most fire classes', 'CO₂ or dry powder — water or foam must not be used on electrical fires', 'Wet chemical — effective and leaves no residue'], correct: 2 },
  { id: 'ose-q11', question: 'Zone 0 in hazardous area classification indicates:', options: ['An area with no risk of flammable atmosphere', 'An area where a flammable atmosphere is continuously present', 'An area where a flammable atmosphere is likely during normal operation', 'An area where a flammable atmosphere is unlikely but possible'], correct: 1 },
  { id: 'ose-q12', question: 'The Temporary Refuge (TR) is:', options: ['A temporary structure built for major maintenance projects', 'The blast and fire-rated accommodation module where personnel muster during an emergency', 'An emergency shelter located at the sea surface near the installation', 'The control room, which has the highest level of fire protection'], correct: 1 },
  { id: 'ose-q13', question: 'HUET training specifically prepares offshore workers for:', options: ['Helicopter ditching procedures, navigation, and emergency radio operation', 'Escape from an inverted, submerged helicopter following a ditching event', 'All aspects of offshore helicopter safety including pre-flight checks', 'First aid procedures for trauma injuries sustained in a helicopter accident'], correct: 1 },
  { id: 'ose-q14', question: 'The EBS (Emergency Breathing System) worn during offshore helicopter flights provides:', options: ['Fire protection for the wearer during a post-crash fire', 'Approximately 3 minutes of compressed air for underwater escape', 'Oxygen enrichment to prevent altitude sickness at helicopter cruise altitude', 'Communication capability with the helicopter crew during an emergency'], correct: 1 },
  { id: 'ose-q15', question: 'In a North Sea Man Overboard emergency, the primary risk from cold water is:', options: ['The person will sink immediately due to the density of cold water', 'Cold water shock and hypothermia can incapacitate a person within minutes, even with a survival suit', 'Cold water makes it impossible for the person to signal their position', 'Currents are strongest in cold water, making visual search impossible'], correct: 1 },
  { id: 'ose-q16', question: 'The Safety Data Sheet (SDS) for a chemical substance includes all of the following EXCEPT:', options: ['Hazard classification and exposure limits', 'First aid and fire-fighting measures', 'The cost and procurement lead time for the substance', 'Storage and disposal requirements'], correct: 2 },
  { id: 'ose-q17', question: 'Passive fire protection (PFP) on an offshore installation is designed to:', options: ['Automatically suppress fires in structural areas using sprinkler systems', 'Maintain structural integrity during a fire for sufficient time to allow safe evacuation', 'Prevent the ignition of flammable vapours in hazardous areas', 'Provide fire-rated barriers between accommodation modules and process areas'], correct: 1 },
  { id: 'ose-q18', question: 'SIMOPS (Simultaneous Operations) in the context of the permit to work system refers to:', options: ['Running multiple shifts simultaneously to increase production output', 'Multiple work activities occurring concurrently in proximity, requiring careful PTW coordination to prevent conflicts', 'Simultaneous operation of redundant safety systems during a test', 'Concurrent operations on two different installations from the same control room'], correct: 1 },
  { id: 'ose-q19', question: 'An energy-absorbing lanyard limits arrest force to:', options: ['2 kN', '4 kN', '6 kN', '10 kN'], correct: 2 },
  { id: 'ose-q20', question: 'The Confined Spaces Regulations 1997 apply to a space that is:', options: ['Any enclosed space regardless of the hazards present', 'Substantially enclosed AND where there is a foreseeable risk of serious injury from hazardous conditions', 'Any space with a single entry/exit point', 'Any underground space regardless of size or hazard level'], correct: 1 },
  { id: 'ose-q21', question: 'The Offshore Installation Manager (OIM) has the authority to:', options: ['Override company safety policies in commercial emergencies', 'Make all emergency decisions on the installation including ordering evacuation', 'Authorise offshore workers to fly without current BOSIET certification', 'Issue and receive permits to work independently of operations'], correct: 1 },
  { id: 'ose-q22', question: 'Hot work in a hazardous area requires:', options: ['Only a hot work permit and a trained fire watch', 'Atmospheric testing confirming a safe atmosphere, a hot work permit, appropriate Ex or intrinsically safe equipment, and a fire watch', 'Temporary relocation of all electrical equipment within 5 metres', 'Suspension of all other PTW activities within the same module'], correct: 1 },
  { id: 'ose-q23', question: 'Before entering a confined space, oxygen content should be confirmed to be:', options: ['Above 21% (atmospheric normal)', 'Between 19.5% and 23.5%', 'Below 23.5% (to prevent oxygen enrichment)', 'Exactly 20.9% (atmospheric normal)'], correct: 1 },
  { id: 'ose-q24', question: 'A TEMPSC is:', options: ['A totally enclosed motor propelled survival craft (offshore lifeboat)', 'A temporary escape and muster safety card', 'A thermal exposure monitoring and personal safety certificate', 'A type of EBS unit used in helicopter underwater escape training'], correct: 0 },
  { id: 'ose-q25', question: 'Olfactory fatigue in H₂S exposure means:', options: ['The worker permanently loses their ability to smell after exposure', 'At elevated H₂S concentrations, the sense of smell is overwhelmed and the odour disappears, creating false safety', 'Workers over 50 cannot detect H₂S by smell reliably', 'H₂S produces an unpleasant taste rather than smell at concentrations above 10 ppm'], correct: 1 },
  { id: 'ose-q26', question: 'COSHH regulations require employers to:', options: ['Register all hazardous substances with the HSE before use', 'Assess health risks from hazardous substances and implement controls in a defined hierarchy', 'Replace all hazardous chemicals with non-hazardous alternatives within 2 years', 'Provide PPE as the primary control for all chemical hazards'], correct: 1 },
  { id: 'ose-q27', question: 'The BOSIET qualification covers:', options: ['Only the theoretical elements of offshore safety, with practical training conducted separately', 'Basic offshore safety including HUET, firefighting, first aid, sea survival, and emergency procedures', 'Advanced rescue and firefighting for designated emergency response team members', 'Offshore process operations and production safety for new operations staff'], correct: 1 },
  { id: 'ose-q28', question: 'H₂S Lower Explosive Limit (LEL) is approximately:', options: ['0.5%', '1.5%', '4.3%', '10%'], correct: 2 },
  { id: 'ose-q29', question: 'CompEx certification is required for electrical work in hazardous areas because:', options: ['It confirms the worker has completed the required number of offshore trips', 'It certifies competence in selecting, installing, and maintaining electrical equipment safely in explosive atmospheres', 'It replaces BOSIET for workers with extensive electrical experience', 'It is required by the HSE for all electrical workers regardless of working environment'], correct: 1 },
  { id: 'ose-q30', question: 'A Fire Watch during hot work must be maintained:', options: ['Only during the hot work operation itself', 'During and for a defined period after the hot work (typically 30–60 minutes), to detect delayed ignition', 'Until the permit to work is formally closed', 'Only if the hot work is within 5 metres of a hydrocarbon-containing pipeline'], correct: 1 },
  { id: 'ose-q31', question: 'Deluge systems on offshore platforms are:', options: ['High-pressure steam systems for purging process equipment', 'Active fire protection systems releasing large volumes of water over a module area to suppress fire', 'Freshwater washing systems for NORM-contaminated equipment', 'Emergency eyewash and body shower systems for chemical exposure'], correct: 1 },
  { id: 'ose-q32', question: 'Total flooding fire suppression systems (CO₂/inert gas) are used in enclosed spaces such as generator rooms. Before activation:', options: ['All personnel must have been evacuated from the space', 'Only the fire team must vacate; other personnel may remain at their muster stations', 'The system tests for occupancy automatically before releasing', 'Workers can remain if they are wearing SCBA'], correct: 0 },
  { id: 'ose-q33', question: 'Twin-leg energy-absorbing lanyards are used to enable:', options: ['A doubled-up fall arrest capacity for heavier workers', '100% tie-off — the ability to always remain connected to an anchor point while moving between anchor points', 'Two workers to share a single anchor point safely', 'Extended reach without changing anchor points on large structures'], correct: 1 },
  { id: 'ose-q34', question: 'The offshore life jacket worn during helicopter flights must be:', options: ['Removed and stored under the seat during flight to avoid restricting movement', 'Worn correctly fitted throughout the flight and never removed inflight', 'Worn only during takeoff and landing', 'Only mandatory for personnel who cannot swim'], correct: 1 },
  { id: 'ose-q35', question: 'CISRS is relevant to working at height because:', options: ['It is the certification for crane operators lifting workers in a man-riding basket', 'It is the scaffolding competency card scheme certifying scaffolders who build and inspect offshore scaffolding', 'It certifies rope access technicians for working at height without scaffolding', 'It provides accreditation for working at height training providers'], correct: 1 },
  { id: 'ose-q36', question: 'The hierarchy under the Work at Height Regulations 2005 prioritises in order:', options: ['PPE first, then collective protection, then avoid height work', 'Avoid height work; if unavoidable, use collective protection; if risk remains, minimise fall distance/consequences', 'Inspect and label all height hazards; install barriers; provide PPE', 'Train all workers; provide PPE; conduct inspections'], correct: 1 },
  { id: 'ose-q37', question: 'An SCBA (Self-Contained Breathing Apparatus) differs from an EBS in that:', options: ['SCBA is used in fires only while EBS is for chemical exposure', 'SCBA provides extended independent air supply for work in contaminated atmospheres; EBS provides minutes for emergency escape only', 'SCBA uses oxygen while EBS uses compressed air', 'SCBA is for confined space use only while EBS can be used at height'], correct: 1 },
  { id: 'ose-q38', question: 'What does LEL stand for and why does it matter in confined space and hot work safety?', options: ['Liquid Explosion Level — the concentration at which a liquid becomes explosive', 'Lower Explosive Limit — the minimum concentration of flammable gas in air at which ignition can occur', 'Level Emergency Limit — the confined space oxygen level requiring immediate evacuation', 'Limit of Exposure Level — the maximum permitted exposure to flammable vapours'], correct: 1 },
  { id: 'ose-q39', question: 'Atmospheric testing in a confined space must check for oxygen content, flammable gas percentage, and:', options: ['Carbon dioxide concentration', 'Toxic gases including H₂S and other contaminants relevant to the space', 'Temperature and relative humidity', 'Particulate matter and dust levels'], correct: 1 },
  { id: 'ose-q40', question: 'HUET qualification must be refreshed because:', options: ['CAA regulations require annual recertification for all offshore helicopter passengers', 'Escape techniques must be practised regularly to remain effective under the stress of a real ditching event', 'Helicopter designs change regularly requiring updated escape route training', 'Insurance requirements for offshore personnel mandate 2-yearly recertification'], correct: 1 },
  { id: 'ose-q41', question: 'Naturally occurring radioactive material (NORM) in oil and gas processing is hazardous because:', options: ['It can contaminate crude oil, making it unsuitable for refining', 'Radium isotopes in scale on equipment surfaces present radiation exposure risk to workers involved in descaling or maintenance', 'It creates explosive hazards when combined with drilling chemicals', 'It triggers false alarms on gas detection systems'], correct: 1 },
  { id: 'ose-q42', question: 'A "fire watch" during hot work is required because:', options: ['Hot work tools can overheat and must be monitored for thermal damage', 'Ignition of flammable material from hot work sparks may not be immediately visible and can develop after the work stops', 'COSHH regulations require a safety observer for all tasks involving heat', 'The permit authority must be present throughout the duration of hot work'], correct: 1 },
  { id: 'ose-q43', question: 'To prevent re-energisation of equipment under LOTO, the lock applied belongs to:', options: ['The issuing authority who signed the permit', 'The individual worker(s) performing the task — each worker applies their own lock', 'The maintenance team leader who coordinates the work', 'The facility safety officer who manages the LOTO programme'], correct: 1 },
  { id: 'ose-q44', question: 'Before conducting a COSHH assessment for a new chemical, the first document to obtain is:', options: ['A disposal and waste classification certificate', 'The Safety Data Sheet (SDS) for the substance', 'A WEL comparison table from the HSE EH40 document', 'A chemical compatibility chart for all substances used in the process'], correct: 1 },
  { id: 'ose-q45', question: 'Zone 2 in hazardous area classification means a flammable atmosphere is:', options: ['Continuously present at all times', 'Likely to occur periodically in normal operation', 'Unlikely but possible in abnormal conditions such as a leak or spill', 'Not considered a realistic possibility under any foreseeable conditions'], correct: 2 },
  { id: 'ose-q46', question: 'The general alarm on an offshore installation normally means:', options: ['A maintenance alarm requiring the operations team to respond', 'All personnel must immediately proceed to their muster station', 'Gas or fire has been detected in a specific zone and the area must be evacuated', 'A test drill is in progress and normal work can continue'], correct: 1 },
  { id: 'ose-q47', question: 'The Standby Man during confined space entry must be:', options: ['Inside the space alongside the entrant as a buddy', 'Outside the space at all times with communications, a rescue plan, and ability to raise the alarm', 'A supervisor with authority to terminate the permit', 'A first aider trained in confined space rescue'], correct: 1 },
  { id: 'ose-q48', question: 'In helicopter pre-flight safety briefing, the "four-point check" includes:', options: ['Seat belt, exit location, emergency oxygen, and life raft', 'Life jacket, EBS, seat belt release, and exit identification', 'HUET card, EBS, float jacket, and personal locator beacon', 'Weight declaration, medical fitness, BOSIET validity, and seating position'], correct: 1 },
  { id: 'ose-q49', question: 'H₂S can accumulate in drainage systems and produced water tanks because:', options: ['It is produced by the microbiological action in stagnant water systems', 'It is soluble in water and can be released when produced water is agitated or heated', 'Drain systems are in Zone 1 areas where H₂S naturally concentrates', 'It is actively pumped into drain systems to prevent corrosion'], correct: 1 },
  { id: 'ose-q50', question: 'The FOET qualification (Further Offshore Emergency Training) is:', options: ['The advanced version of BOSIET covering additional emergency scenarios', 'The refresher training renewing BOSIET, typically required every 4 years', 'A supplementary qualification for offshore emergency response team members', 'An OPITO qualification for operations and maintenance team leaders'], correct: 1 },
  { id: 'ose-q51', question: 'Scaffolding inspection offshore is required every 7 days (or before each working period for high-risk scaffolds) because:', options: ['HSE regulations require weekly scaffolding sign-off', 'Offshore conditions (wind, wave spray, temperature changes, vibration) can alter scaffold integrity between inspections', 'Insurance policies for offshore facilities mandate weekly scaffold inspection', 'CISRS scaffolders are contractually required to inspect their work weekly'], correct: 1 },
  { id: 'ose-q52', question: 'A "simultaneous operations" review in the PTW system is required when:', options: ['Two workers are assigned the same task but with different start times', 'Multiple work activities could conflict, interact, or affect each other\'s safety controls', 'A single task involves both hot work and confined space entry elements', 'Operations staff and maintenance staff must work in the same module at the same time'], correct: 1 },
  { id: 'ose-q53', question: 'Which fire class requires a specialist metal powder extinguisher?', options: ['Class A (solids)', 'Class B (flammable liquids)', 'Class D (metals)', 'Class F (cooking oils)'], correct: 2 },
  { id: 'ose-q54', question: 'The primary physiological mechanism by which H₂S kills at high concentrations is:', options: ['Chemical burning of the respiratory tract', 'Inhibition of cytochrome c oxidase, preventing cells from using oxygen (histotoxic hypoxia)', 'Displacement of oxygen in the bloodstream', 'Cardiac arrest triggered by skin absorption'], correct: 1 },
  { id: 'ose-q55', question: 'In PTW management, "simultaneous operations" (SIMOPS) present elevated risk because:', options: ['Workers from different contractors cannot coordinate effectively', 'A control installed for one task (e.g., isolation of a valve) may conflict with the requirements of another task', 'Permits cannot be issued simultaneously — each must be closed before the next is opened', 'PTW computers cannot track more than one active permit per module'], correct: 1 },
  { id: 'ose-q56', question: 'The purpose of ventilation in a confined space entry is to:', options: ['Reduce temperature to ensure worker comfort during extended tasks', 'Dilute and remove potentially hazardous atmospheres before and during entry', 'Provide additional oxygen supply in case the entrant\'s SCBA fails', 'Create positive pressure to prevent entry of any external hazardous gases'], correct: 1 },
  { id: 'ose-q57', question: 'An offshore worker who suspects an unsafe condition should:', options: ['Complete a hazard observation card at the end of their shift', 'Stop the relevant work immediately, make the area safe if possible, and report to their supervisor using Stop Work Authority', 'Log it in the daily maintenance report for review', 'Wait until the next safety meeting to raise the concern formally'], correct: 1 },
  { id: 'ose-q58', question: 'The "fire triangle" removes fire by eliminating fuel, oxygen, OR ignition source. CO₂ extinguishers work primarily by:', options: ['Providing a fuel barrier that prevents the fire reaching combustible material', 'Cooling the burning material below its ignition temperature', 'Displacing oxygen around the fire, removing the oxygen component of the triangle', 'Chemically interrupting the chain reaction of combustion'], correct: 2 },
  { id: 'ose-q59', question: 'The Civil Aviation Authority (CAA) is relevant to offshore workers because:', options: ['It certifies OPITO training providers for BOSIET and FOET', 'It regulates offshore helicopter operations including safety standards and operator licensing', 'It provides weather forecasting services for offshore helicopter flights', 'It manages the offshore helideck inspection programme'], correct: 1 },
  { id: 'ose-q60', question: 'Emergency Response Plans (ERPs) offshore must include procedures for all of the following EXCEPT:', options: ['Fire and explosion', 'Helicopter incident', 'Man overboard', 'Daily production interruptions and commercial losses'], correct: 3 },
];

// ============================================================
// COURSE 3: PROCESS SAFETY FUNDAMENTALS
// ============================================================

const course3Modules = [
  {
    id: 'psf-m1',
    title: 'Process Safety vs Personal Safety',
    duration: '25 min',
    content: `
<h2>Understanding the Distinction</h2>
<p>One of the most important conceptual distinctions in high-hazard industries is the difference between <strong>personal safety</strong> and <strong>process safety</strong>. Confusing the two — or worse, using personal safety metrics as a proxy for process safety performance — is a mistake that has contributed to major accidents including the Texas City refinery explosion (2005) and the Deepwater Horizon blowout (2010).</p>

<h3>Personal Safety</h3>
<p>Personal safety concerns incidents that harm individual workers: slips, trips, and falls; cuts and lacerations; manual handling injuries; eye injuries; insect bites on remote sites. These incidents are relatively frequent, affect one or a small number of people at a time, and their prevention tends to focus on PPE, housekeeping, and individual behaviour. Personal safety performance is typically measured by Lost Time Incident Rate (LTIR) and Total Recordable Incident Rate (TRIR).</p>

<h3>Process Safety</h3>
<p>Process safety concerns the prevention of major accidents arising from the loss of control of industrial processes. These events — explosions, fires, toxic releases — typically involve large quantities of hazardous material and can kill many people simultaneously, cause major environmental damage, and destroy significant capital assets. Process safety events are rare but catastrophic. Their prevention requires systematic management of technical barriers, not individual behaviour.</p>
<p>The key insight: an organisation can have an excellent personal safety record (years without an LTI) while simultaneously having a deteriorating process safety posture — as was the case at Texas City. The 2005 BP Texas City explosion killed 15 workers and injured 180 despite the site having received safety awards for its personal safety performance. The process equipment involved had been inadequately maintained and operated outside its safe operating envelope for years.</p>

<div class="terminology-box">
  <div class="term-title">Key Terminology — Process Safety vs Personal Safety</div>
  <dl>
    <dt>Process Safety</dt><dd>Management of hazards associated with loss of containment of energy, flammable, explosive, or toxic materials in industrial processes</dd>
    <dt>Personal Safety</dt><dd>Prevention of individual injuries from workplace hazards — slips, trips, manual handling, etc.</dd>
    <dt>LTIR</dt><dd>Lost Time Incident Rate — personal safety metric measuring frequency of incidents causing absence from work</dd>
    <dt>Major Accident</dt><dd>An event involving loss of control of a process resulting in multiple fatalities, major asset loss, or significant environmental damage</dd>
    <dt>Process Safety Event (PSE)</dt><dd>Unplanned or uncontrolled loss of primary containment of hazardous material — a leading process safety indicator</dd>
  </dl>
</div>
    `,
    quiz: [
      { id: 'psf-m1-q1', question: 'The Texas City refinery explosion (2005) demonstrated that:', options: ['Poor personal safety performance always precedes major process accidents', 'Good personal safety metrics are not reliable indicators of process safety performance', 'All major accidents can be prevented by focusing on individual worker behaviour', 'Process safety performance and personal safety performance always move together'], correct: 1 },
      { id: 'psf-m1-q2', question: 'A "Process Safety Event" (PSE) is defined as:', options: ['Any incident requiring hospital treatment', 'An unplanned or uncontrolled loss of primary containment of a hazardous material', 'A planned maintenance shutdown of a process unit', 'Any alarm that requires operator intervention to clear'], correct: 1 },
    ],
  },
  {
    id: 'psf-m2',
    title: 'Hazard Identification — HAZOP',
    duration: '30 min',
    content: `
<h2>Hazard and Operability Study (HAZOP)</h2>
<p>HAZOP is the most widely used formal hazard identification technique in the process industries. Developed by ICI in the 1960s and now standardised under IEC 61882, a HAZOP is a structured and systematic examination of a design or process to identify hazardous scenarios and operability problems.</p>
<p>A HAZOP is conducted by a multi-disciplinary team (process engineer, operations, safety, instrumentation, electrical) who systematically apply a set of <strong>guide words</strong> to each design intention (parameter + condition) to generate scenarios. The guide words are: <em>No/None, Less, More, Part of, As Well As, Reverse, Other Than, Early, Late, Before, After.</em></p>
<p>For each scenario generated, the team considers: what causes it, what are the consequences, what safeguards already exist, and what additional actions or recommendations are needed. HAZOP findings are recorded and tracked to closure as design modifications, additional instrumentation, or operational procedures.</p>

<div class="diagram-box">
  <div class="diagram-title">HAZOP Guide Word Application Example</div>
  <pre>
  Node: Feed pump P-101 to reactor R-201
  Design Intention: Flow of feed at 10 m³/hr, 2 barg, 60°C

  Guide Word | Deviation         | Possible Cause          | Consequence
  ───────────┼───────────────────┼─────────────────────────┼────────────────
  NO FLOW    | No flow to reactor| Pump trip, valve closed | Reactor heats up
             |                   |                         | — runaway risk
  MORE FLOW  | Flow > 10 m³/hr   | Control valve fault     | Reactor overload
  HIGH TEMP  | Temp > 60°C       | HX fouling              | Feed degradation
  REVERSE    | Flow back to pump | Reactor pressure spike  | Pump damage
  </pre>
</div>

<div class="terminology-box">
  <div class="term-title">Key Terminology — HAZOP</div>
  <dl>
    <dt>HAZOP</dt><dd>Hazard and Operability Study — structured team-based hazard identification using guide words</dd>
    <dt>Guide Words</dt><dd>Standard prompts (No, More, Less, etc.) used in HAZOP to generate process deviations systematically</dd>
    <dt>Node</dt><dd>A defined section of the process (pipe segment, vessel) studied as a unit during HAZOP</dd>
    <dt>Design Intention</dt><dd>The intended operating parameter and condition for a node during HAZOP analysis</dd>
    <dt>Safeguard</dt><dd>An existing protective measure that prevents or mitigates a hazardous scenario</dd>
  </dl>
</div>
    `,
    quiz: [
      { id: 'psf-m2-q1', question: 'In a HAZOP study, "guide words" are used to:', options: ['Provide regulatory guidance on acceptable risk levels', 'Generate process deviations systematically by combining with design parameters', 'Guide the team leader in managing the HAZOP meeting schedule', 'Define the scope of each HAZOP node'], correct: 1 },
      { id: 'psf-m2-q2', question: 'A HAZOP is most effective when conducted by:', options: ['A single experienced process safety engineer reviewing the P&IDs alone', 'A multi-disciplinary team including operations, engineering, safety, and instrumentation expertise', 'External consultants with no operational knowledge of the facility', 'The HSSE department independently of the engineering team'], correct: 1 },
    ],
  },
  {
    id: 'psf-m3',
    title: 'Bow-Tie Methodology',
    duration: '25 min',
    content: `
<h2>Bow-Tie Risk Assessment</h2>
<p>The bow-tie diagram is a powerful visual risk assessment tool that illustrates the relationship between the causes of a major accident, the critical event (top event), and its consequences. It takes its name from its characteristic bow-tie shape when drawn out.</p>
<p>The <strong>top event</strong> sits at the centre — typically a loss of containment event such as "Release of flammable hydrocarbon to atmosphere." On the left side of the bow-tie, <strong>threats</strong> (the causes) are listed, each connected to the top event via a pathway. <strong>Prevention barriers</strong> are placed on these pathways to prevent the top event from occurring. On the right side, <strong>escalation pathways</strong> show how the top event could escalate to consequences (fire, explosion, toxic cloud). <strong>Mitigation barriers</strong> are placed on these pathways to reduce the consequences if the top event does occur.</p>
<p>Barriers should be: effective (actually prevents or mitigates), independent (not sharing common failure modes with other barriers), and auditable (demonstrably in place and functioning). A barrier that exists only on paper — not maintained, not tested, not understood by the workforce — is not a real barrier.</p>

<div class="terminology-box">
  <div class="term-title">Key Terminology — Bow-Tie</div>
  <dl>
    <dt>Top Event</dt><dd>The central event in a bow-tie — typically a loss of containment of a hazardous material</dd>
    <dt>Threat</dt><dd>A cause that could lead to the top event (left side of bow-tie)</dd>
    <dt>Prevention Barrier</dt><dd>A control that prevents a threat from leading to the top event</dd>
    <dt>Mitigation Barrier</dt><dd>A control that reduces the consequences after the top event has occurred</dd>
    <dt>Barrier Effectiveness</dt><dd>The degree to which a barrier actually prevents or mitigates its target scenario when required</dd>
  </dl>
</div>
    `,
    quiz: [
      { id: 'psf-m3-q1', question: 'In a bow-tie diagram, the "top event" represents:', options: ['The most likely consequence of the scenario', 'The central loss of containment or loss of control event', 'The most effective barrier in the scenario', 'The regulatory requirement for the hazard being assessed'], correct: 1 },
      { id: 'psf-m3-q2', question: 'An effective process safety barrier must be:', options: ['Documented, tested, and physically preventing or mitigating the target scenario', 'Any control measure listed in the risk assessment regardless of operational status', 'Mandated by regulation to be counted as a real barrier', 'Hardware-based — administrative controls cannot be counted as barriers'], correct: 0 },
    ],
  },
  {
    id: 'psf-m4',
    title: 'Layers of Protection (LOPA)',
    duration: '25 min',
    content: `
<h2>Layer of Protection Analysis</h2>
<p>Layer of Protection Analysis (LOPA) is a semi-quantitative risk assessment technique used to determine whether the existing or proposed safeguards are sufficient to reduce the risk of a specific accident scenario to an acceptable level. It builds on HAZOP by taking the identified scenarios and quantifying the risk reduction provided by each independent layer of protection.</p>
<p>LOPA works by estimating: the <strong>initiating event frequency</strong> (how often the cause occurs), the probability of failure of each independent <strong>protection layer</strong>, and whether the residual risk (after all layers) meets the risk tolerance criterion (typically expressed as a maximum tolerable frequency for a fatality-causing event — often 1×10⁻⁴ per year for UK major hazards).</p>
<p>An <strong>Independent Protection Layer (IPL)</strong> must be: independent of the initiating cause and all other IPLs in the scenario, capable of preventing the consequence without assistance from any other layer, and auditable and testable. Basic process control (BPCS), alarms with operator response, and safety instrumented systems (SIS) are common IPLs in process plants.</p>

<div class="terminology-box">
  <div class="term-title">Key Terminology — LOPA</div>
  <dl>
    <dt>LOPA</dt><dd>Layer of Protection Analysis — semi-quantitative technique assessing whether safeguards are sufficient to tolerate risk</dd>
    <dt>IPL</dt><dd>Independent Protection Layer — a safeguard that independently reduces risk without reliance on other layers</dd>
    <dt>PFD</dt><dd>Probability of Failure on Demand — the probability that a safety system fails to perform when required</dd>
    <dt>Risk Tolerance Criterion</dt><dd>The maximum acceptable frequency for a specific severity of harm — typically 10⁻⁴/year for major accident</dd>
    <dt>BPCS</dt><dd>Basic Process Control System — the normal DCS/PLC that controls the process, distinct from the safety system (SIS)</dd>
  </dl>
</div>
    `,
    quiz: [
      { id: 'psf-m4-q1', question: 'An Independent Protection Layer (IPL) must be:', options: ['Any alarm or interlock regardless of its independence', 'Independent of the initiating cause and all other IPLs, capable of preventing the consequence without assistance', 'A hardware safety system — administrative controls cannot be IPLs', 'Certified to SIL 2 or above by an independent body'], correct: 1 },
      { id: 'psf-m4-q2', question: 'LOPA is used in process safety to:', options: ['Identify all hazardous scenarios in a new design (it replaces HAZOP for quantification)', 'Determine whether existing or proposed safeguards are sufficient to reduce risk to an acceptable level', 'Quantify the consequences of a major accident in terms of fatalities and economic loss', 'Prioritise maintenance tasks based on equipment criticality'], correct: 1 },
    ],
  },
  {
    id: 'psf-m5',
    title: 'Safety Instrumented Systems',
    duration: '28 min',
    content: `
<h2>Safety Instrumented Systems (SIS) and Functional Safety</h2>
<p>Safety Instrumented Systems (SIS) are the engineered safety barriers that prevent or mitigate major accidents when normal process control fails. They are distinct from the Basic Process Control System (BPCS) and are designed, installed, tested, and maintained to a higher standard than normal control systems.</p>
<p>An SIS consists of: <strong>sensors</strong> (pressure transmitters, temperature sensors, gas detectors, level switches) that detect an abnormal condition; <strong>logic solvers</strong> (safety PLCs or relay systems) that process the sensor signals and make the shutdown decision; and <strong>final elements</strong> (emergency shutdown valves, pumps, fans) that take the safety action. The complete sequence is called a Safety Instrumented Function (SIF).</p>
<p>The performance of an SIS is specified in terms of <strong>Safety Integrity Level (SIL)</strong>, defined by IEC 61511. SIL 1 requires a PFD of 0.1–0.01; SIL 2 requires 0.01–0.001; SIL 3 requires 0.001–0.0001. Each SIL level requires appropriate design standards, hardware, redundancy, and proof test intervals. The SIL required for each SIF is determined by the LOPA process.</p>
<p>A critical operational principle: SIS trips (safety shutdowns) must <strong>never be bypassed without a formal management of change (MOC) process</strong> and compensatory measures. Bypassing an SIS removes a critical barrier from the bow-tie. Multiple incidents have resulted from bypassed or inhibited SIS functions that were never reinstated.</p>

<div class="terminology-box">
  <div class="term-title">Key Terminology — SIS</div>
  <dl>
    <dt>SIS</dt><dd>Safety Instrumented System — engineered barrier distinct from BPCS, designed to prevent major accidents</dd>
    <dt>SIF</dt><dd>Safety Instrumented Function — a specific safety action performed by the SIS (e.g., close ESD valve on high pressure)</dd>
    <dt>SIL</dt><dd>Safety Integrity Level — performance target for an SIS/SIF, ranging from SIL 1 (lowest) to SIL 4 (highest)</dd>
    <dt>PFD</dt><dd>Probability of Failure on Demand — must be within the SIL band for the SIS to meet its safety requirement</dd>
    <dt>Proof Test</dt><dd>Periodic test of a SIS function to confirm it will perform correctly when demanded — interval depends on SIL level</dd>
  </dl>
</div>
    `,
    quiz: [
      { id: 'psf-m5-q1', question: 'An SIS (Safety Instrumented System) must be independent of the BPCS (Basic Process Control System) because:', options: ['Regulations require separate systems even if they perform the same function', 'A common cause failure that disables the BPCS (e.g., power failure, software bug) must not simultaneously disable the safety system', 'The SIS and BPCS operate at different pressure ratings', 'Only hardware PLCs can be used for SIS — software DCS cannot be designed to SIL standards'], correct: 1 },
      { id: 'psf-m5-q2', question: 'Bypassing an SIS function without proper Management of Change and compensatory measures is dangerous because:', options: ['It violates the proof test schedule', 'It removes a critical safety barrier from the bow-tie, leaving the process unprotected against the specific hazard scenario', 'It causes the remaining SIS functions to reduce their SIL level automatically', 'SIS bypasses are illegal under UK law regardless of circumstances'], correct: 1 },
    ],
  },
  {
    id: 'psf-m6',
    title: 'Major Accident Case Studies',
    duration: '30 min',
    content: `
<h2>Piper Alpha (1988) and Buncefield (2005)</h2>
<p>Major accident case studies are essential learning for process safety professionals. They illustrate, in irreversible reality, what happens when technical barriers fail, management systems deteriorate, and the lessons of safety engineering are not applied.</p>

<h3>Piper Alpha — 6 July 1988</h3>
<p>Piper Alpha was an oil production platform in the North Sea. On 6 July 1988, a condensate injection pump was undergoing maintenance with a safety valve removed. The Permit to Work for this maintenance was not communicated to the night shift when the pump was needed to maintain production pressure. The night shift operators started the pump — condensate escaped where the safety valve had been removed, igniting and causing the first explosion. The subsequent explosions and fires killed 167 people — the deadliest offshore accident in history.</p>
<p>Key failures: PTW system communication failure between shifts; fire and gas detection impaired; deluge system manually bypassed (due to fear of false activation during diving operations); escalation not prevented by fire walls; emergency response focused on fighting the fire rather than evacuation. The Cullen Inquiry led to complete overhaul of UK offshore safety regulation.</p>

<h3>Buncefield — 11 December 2005</h3>
<p>Buncefield was a major oil products storage depot in Hertfordshire, UK. A storage tank was being filled with petrol while its level gauge malfunctioned. The high-level shutdown switch also failed. Petrol overfilled the tank, flowed over the top, and formed a massive vapour cloud that ignited, causing the largest peacetime explosion in UK history. Over 40 people were injured and the depot was destroyed. The event demonstrated that independent layers of protection (the level gauge AND the independent high-level switch) must genuinely be independent — both instruments shared a common failure mode (the overfill protection equipment had not been maintained correctly).</p>

<div class="terminology-box">
  <div class="term-title">Key Terminology — Case Studies</div>
  <dl>
    <dt>Piper Alpha</dt><dd>1988 North Sea platform explosion killing 167 — pivotal in reshaping UK offshore safety regulation</dd>
    <dt>Cullen Inquiry</dt><dd>The public inquiry into Piper Alpha, chaired by Lord Cullen, that led to the Safety Case Regulations</dd>
    <dt>Buncefield</dt><dd>2005 UK fuel storage depot explosion caused by tank overfill — largest peacetime explosion in UK history</dd>
    <dt>Common Cause Failure</dt><dd>A failure mode affecting multiple supposedly independent protection layers simultaneously</dd>
    <dt>Vapour Cloud Explosion</dt><dd>Ignition of a large unconfined flammable vapour cloud, producing destructive overpressure waves</dd>
  </dl>
</div>
    `,
    quiz: [
      { id: 'psf-m6-q1', question: 'The Piper Alpha disaster (1988) was most directly caused by:', options: ['A blowout from a production well on the platform', 'A PTW communication failure — a pump with a removed safety valve was restarted by the night shift who were unaware of the maintenance', 'Corrosion failure of an export pipeline riser', 'Improper use of hot work near a flammable vapour release'], correct: 1 },
      { id: 'psf-m6-q2', question: 'The Buncefield explosion (2005) demonstrated the importance of:', options: ['Regular training in fire extinguisher use for site personnel', 'Independent protection layers being genuinely independent — both the level gauge and high-level switch had a common failure mode', 'Physical barriers between storage tanks to contain spills', 'Emergency response planning for vapour cloud explosions'], correct: 1 },
    ],
  },
  {
    id: 'psf-m7',
    title: 'Human Factors in Process Safety',
    duration: '25 min',
    content: `
<h2>Human Factors — The Technical Dimension</h2>
<p>Human factors in process safety goes beyond individual behaviour and PPE compliance. It addresses the systematic ways in which the work system design, environmental conditions, and organisational factors influence whether humans perform safely or make errors that contribute to major accidents.</p>
<p><strong>Situation Awareness</strong> — operators managing a process plant must maintain an accurate mental model of the current plant state. Alarms that are poorly designed, nuisance alarms that flood the control room, and HMI (Human Machine Interface) screens that present information in non-intuitive formats all degrade situational awareness. The EEMUA 191 standard for alarm management specifically addresses the problem of alarm flood — where operators are presented with hundreds of alarms in rapid succession during an abnormal situation, precisely when they most need to understand what is happening.</p>
<p><strong>Normalisation of Deviance</strong> — when small deviations from procedures occur repeatedly without apparent consequence, they become normalised — accepted as the new standard. This insidious process was identified by sociologist Diane Vaughan in her analysis of the Challenger Space Shuttle disaster and applies equally to process plants. If a process routinely operates outside its safe operating envelope "and nothing bad happens," the abnormal becomes normal, and the early warning signals of deterioration are no longer recognised as warnings.</p>
<p><strong>Organisational Factors</strong> — major accident investigations consistently identify organisational weaknesses as root causes: inadequate resourcing of maintenance, commercial pressure overriding safety, poor safety leadership, inadequate competency management. These are not "soft" issues — they are the conditions that allow technical failures to escalate to disasters.</p>

<div class="terminology-box">
  <div class="term-title">Key Terminology — Human Factors</div>
  <dl>
    <dt>Normalisation of Deviance</dt><dd>Process by which repeated minor deviations from standards become accepted as normal, eroding safety margins</dd>
    <dt>HMI</dt><dd>Human Machine Interface — the control room displays and interfaces through which operators interact with the process</dd>
    <dt>Alarm Flood</dt><dd>Simultaneous activation of many alarms during an abnormal situation, overwhelming the operator's ability to respond</dd>
    <dt>EEMUA 191</dt><dd>Engineering standard for alarm systems management — sets targets for alarm rates and design principles</dd>
    <dt>Swiss Cheese Model</dt><dd>James Reason's model showing how accidents occur when holes in multiple defensive layers align</dd>
  </dl>
</div>
    `,
    quiz: [
      { id: 'psf-m7-q1', question: '"Normalisation of deviance" in process safety means:', options: ['Workers develop normal working procedures for abnormal operating conditions', 'Repeated minor deviations from standards become accepted as normal, gradually eroding safety margins', 'The process safety team normalises risk assessments to remove statistical outliers', 'Deviation reports are reviewed and normalised against industry benchmarks'], correct: 1 },
      { id: 'psf-m7-q2', question: 'Alarm flooding in a control room is dangerous because:', options: ['Excessive alarm sounds damage operators\' hearing over time', 'During an abnormal situation when operators most need information, they are overwhelmed with alarms and cannot respond effectively', 'Alarm systems require expensive recalibration after an alarm flood event', 'Multiple simultaneous alarms indicate multiple simultaneous failures that cannot be addressed'], correct: 1 },
    ],
  },
  {
    id: 'psf-m8',
    title: 'PSM Regulations and Industry Standards',
    duration: '20 min',
    content: `
<h2>Process Safety Regulatory Framework</h2>
<p>Process safety management in the UK operates within a layered regulatory framework: primary legislation (Health and Safety at Work Act 1974), statutory regulations (Control of Major Accident Hazards Regulations 2015 — COMAH; Offshore Installations Safety Case Regulations 2005), approved codes of practice, and industry standards (IEC 61511, API RP 750).</p>
<p><strong>COMAH (Control of Major Accident Hazards)</strong> implements the EU Seveso III Directive in UK law. It applies to sites handling hazardous materials above threshold quantities. COMAH requires: a Major Accident Prevention Policy (MAPP), a Safety Report (for upper-tier sites), emergency planning, and inspection by the Competent Authority (HSE + Environment Agency joint team).</p>
<p><strong>IEC 61511</strong> is the international standard for Safety Instrumented Systems in the process industries. It defines the complete safety lifecycle from hazard identification through SIL determination, design, installation, commissioning, operation, maintenance, and decommissioning. Compliance with IEC 61511 is considered industry best practice and is expected by regulators for safety-critical instruments.</p>
<p><strong>Process Safety Performance Indicators</strong> — following the Baker Panel recommendations after Texas City, the energy industry adopted leading and lagging process safety performance indicators. Lagging indicators (Tier 1 PSEs — significant loss of containment events) confirm what has happened; leading indicators (Tier 2 PSEs, demand on safety systems, overdue inspections) indicate deteriorating barriers before a major event occurs.</p>

<div class="terminology-box">
  <div class="term-title">Key Terminology — Regulations</div>
  <dl>
    <dt>COMAH</dt><dd>Control of Major Accident Hazards Regulations — applies to UK sites with large inventories of hazardous material</dd>
    <dt>MAPP</dt><dd>Major Accident Prevention Policy — a COMAH requirement demonstrating the operator's commitment to managing major accident risk</dd>
    <dt>IEC 61511</dt><dd>International standard for safety instrumented systems in the process sector</dd>
    <dt>Baker Panel</dt><dd>The independent review panel (chaired by James Baker) following the Texas City disaster — recommendations shaped process safety management globally</dd>
    <dt>Leading Indicator</dt><dd>A measure of process safety barrier health that provides advance warning before a major event occurs</dd>
  </dl>
</div>
    `,
    quiz: [
      { id: 'psf-m8-q1', question: 'COMAH (Control of Major Accident Hazards) Regulations apply to:', options: ['All workplaces with any hazardous chemicals present', 'Sites holding hazardous materials above defined threshold quantities, requiring a Major Accident Prevention Policy and Safety Report', 'Only offshore oil and gas installations', 'Chemical transport vehicles carrying hazardous materials on public roads'], correct: 1 },
      { id: 'psf-m8-q2', question: 'Leading process safety indicators are important because:', options: ['They confirm the frequency of major accidents for comparison with industry benchmarks', 'They indicate the health of safety barriers before a major event occurs, enabling corrective action', 'They replace lagging indicators for organisations with strong safety cultures', 'They are the primary measure used by insurance companies to set premiums'], correct: 1 },
    ],
  },
];

const course3Assessment = Array.from({length: 80}, (_, i) => ({
  id: `psf-q${i+1}`,
  question: [
    'Process safety differs from personal safety primarily because it:',
    'The Texas City refinery explosion (2005) occurred despite the site having:',
    'In a HAZOP, guide words such as "No", "More", and "Reverse" are used to:',
    'A HAZOP "node" is defined as:',
    'In a bow-tie diagram, the "top event" is located:',
    'A prevention barrier in a bow-tie sits:',
    'An effective process safety barrier must be:',
    'LOPA (Layer of Protection Analysis) determines:',
    'An Independent Protection Layer (IPL) must be:',
    'Safety Integrity Level (SIL) is assigned to:',
    'SIL 2 requires a Probability of Failure on Demand (PFD) of:',
    'An SIS must be independent of the BPCS because:',
    'Piper Alpha (1988) — the initial explosion was caused by:',
    'The Cullen Inquiry following Piper Alpha led to:',
    'Buncefield (2005) demonstrated the importance of:',
    'Normalisation of deviance means:',
    'Alarm flooding is dangerous because:',
    'COMAH regulations apply to:',
    'IEC 61511 is the standard for:',
    'Leading process safety indicators measure:',
    'Process Safety Events (PSEs) are categorised as:',
    'The Baker Panel (following Texas City) recommended:',
    'A "common cause failure" threatens independent protection layers because:',
    'The Safe Operating Envelope (SOE) defines:',
    'A "demand on safety system" is a process safety leading indicator because:',
    'The purpose of a Safety Report under COMAH is:',
    '"Swiss cheese model" (James Reason) illustrates:',
    'In SIS design, "proof testing" is performed to:',
    'HAZOP is most effectively conducted at which design stage?',
    'A bow-tie\'s mitigation barriers address:',
    'The Major Accident Prevention Policy (MAPP) is required by:',
    'Process safety performance is measured by all of the following EXCEPT:',
    'A "process safety culture" differs from "compliance" in that:',
    'EEMUA 191 provides guidance on:',
    '"Initiating event frequency" in LOPA refers to:',
    'The Seveso III Directive is implemented in UK law through:',
    'An SIS Safety Instrumented Function (SIF) consists of:',
    'Hazard identification is the first step in process safety management because:',
    'The "hierarchy of controls" in process safety gives highest priority to:',
    'Consequence analysis in process safety quantifies:',
    'A process safety audit differs from a safety inspection because:',
    '"Management of change" (MOC) is a critical process safety element because:',
    'Human factors contribute to major accidents by:',
    'The ALARP principle states risk must be reduced:',
    'A "bowtie barrier" is considered weak if it:',
    'Process hazard analysis (PHA) is a general term that includes:',
    'SIL determination requires:',
    'The purpose of COMAH emergency planning requirements is:',
    'In risk assessment, "tolerable risk" means:',
    'A process safety "lagging indicator" measures:',
    'The difference between HAZOP and LOPA is:',
    'Passive protection in process safety includes:',
    'An "inherently safer design" approach aims to:',
    'The HSE\'s "reducing risks, protecting people" (R2P2) document defines:',
    'Process safety management (PSM) originated as a US regulatory framework under:',
    'A "loss of primary containment" event in process safety is:',
    'Functional safety as defined in IEC 61511 addresses:',
    'The "safety lifecycle" concept means:',
    'A competency management system in process safety ensures:',
    'Emergency isolation valves (EIVs) are classified as:',
    'Critical process safety documentation that must be maintained includes:',
    'HAZOP guide word "As Well As" would generate deviations involving:',
    'In LOPA, risk tolerance criterion for a fatality event is typically:',
    'The term "inherently safer design" was introduced by:',
    '"Defence in depth" in process safety means:',
    'Process safety critical elements (PSCEs) or safety critical elements (SCEs) are:',
    'A safety case demonstrates:',
    'Human error in process plant operations is most effectively reduced by:',
    'Bow-tie analysis is related to HAZOP in that:',
    'The Offshore Safety Directive (2013/30/EU) applies to:',
    'Process safety leading indicators include all of the following EXCEPT:',
    'A "what-if" analysis is a process safety technique used for:',
    'Under IEC 61511, the required SIL level for a SIF is determined by:',
    'The "onion model" of process safety layers represents:',
    'COMAH Competent Authority inspections are conducted by:',
    'A fire and gas (F&G) detection system is typically classified as:',
    'Process safety information (PSI) for COMAH compliance must include:',
    'The concept of "performance standards" for safety critical elements requires:',
    'Risk matrices are used in process safety to:',
  ][i] || `Process safety question ${i+1}`,
  options: [
    ['Deals with personal injuries to individuals', 'Addresses catastrophic events from loss of control of industrial processes affecting multiple people', 'Applies only to chemical plants, not oil and gas', 'Is managed by a separate regulatory body from personal safety'],
    ['A very poor personal safety record', 'Multiple previous process safety incidents with fatalities', 'Good personal safety metrics — demonstrating these metrics are not a reliable indicator of process safety', 'No formal safety management system'],
    ['Set the maximum acceptable risk for each scenario', 'Generate process deviations by combining with design intentions', 'Document the design basis for safety systems', 'Define the inspection frequency for critical equipment'],
    ['A specific piece of equipment requiring inspection', 'A defined section of the process studied as a discrete unit during the HAZOP', 'A regulatory limit for a specific parameter', 'A safeguard identified in the HAZOP study'],
    ['At the far left, representing the root cause', 'At the centre, representing the loss of containment or loss of control event', 'At the far right, representing the worst consequence', 'Below the diagram, representing the regulatory requirement'],
    ['Between the top event and the consequence', 'Between the threat and the top event, preventing the top event from occurring', 'After all consequences, as a recovery measure', 'Between two consequences to prevent escalation'],
    ['Documented, auditable, independent, and effective', 'Certified by an independent third party to SIL 2', 'Hardware-based — administrative controls are not valid barriers', 'Mandated by regulation'],
    ['The consequences of a major accident in monetary terms', 'Whether existing safeguards are sufficient to reduce risk to an acceptable level', 'The probability of a specific top event in the next 12 months', 'The number of barriers required for a given hazard class'],
    ['Any documented safety measure listed in the risk assessment', 'Independent of the initiating cause and all other IPLs, capable of acting alone to prevent the consequence', 'A hardware system certified to at least SIL 1', 'A safeguard physically separate from the process'],
    ['The severity of consequences for a specific accident scenario', 'A specific Safety Instrumented Function (SIF)', 'The overall SIS for an installation', 'The level of redundancy in the BPCS'],
    ['0.1 to 0.01 (1 in 10 to 1 in 100 probability of failure on demand)', '0.01 to 0.001', '0.001 to 0.0001', '0.0001 to 0.00001'],
    ['Cost savings through reduced duplication', 'A common cause failure disabling the BPCS must not simultaneously disable the safety system', 'Operators can use a single interface for control and safety', 'Regulatory requirements specify separate systems for audit purposes'],
    ['A blowout from a well on the platform', 'A condensate pump with a removed safety valve being started by night shift unaware of the maintenance', 'A corrosion failure in the export riser pipeline', 'Hot work igniting a condensate leak'],
    ['Withdrawal of the Safety Case Regulations', 'Fundamental reform of UK offshore safety regulation including the Safety Case requirement', 'Mandatory helideck marking improvements', 'New HSE guidance on PTW systems'],
    ['The importance of worker training in overfill prevention', 'Both an independent safety layer and a level gauge having a common failure mode — neither prevented overfill', 'Emergency response planning limitations at industrial sites', 'The risk of vapour cloud explosions from road tanker accidents'],
    ['Repeated minor deviations from standards become accepted as normal, gradually eroding safety margins', 'Process operators develop deviant shortcuts that regulators must correct through enforcement', 'Safety deviations that occur at normal operating conditions are acceptable', 'Deviations from design conditions are normalised by issuing formal concessions'],
    ['Alarms require expensive recalibration following large-scale activation', 'Operators are overwhelmed with alarms precisely when they most need clear information', 'Multiple alarms indicate multiple simultaneous failures requiring separate responses', 'Alarm system software crashes under high-frequency activation'],
    ['All workplaces with hazardous chemicals in any quantity', 'Sites handling hazardous substances above defined threshold quantities', 'Only facilities in England and Wales — Scotland has separate regulations', 'Offshore oil and gas installations exclusively'],
    ['Process safety management in the pharmaceutical industry', 'Safety Instrumented Systems in the process industries', 'Offshore installation safety management', 'Pressure vessel inspection and testing'],
    ['The frequency of past major accidents for benchmarking', 'The health of safety barriers, providing advance warning of deterioration', 'The current regulatory compliance status of the facility', 'Worker engagement scores in safety surveys'],
    ['Tier 1 (significant loss of containment) and Tier 2 (loss of containment at lower threshold)', 'Red (fatal), Amber (serious), Green (minor) categories', 'Prevention and Mitigation categories', 'Human factors and technical failure categories'],
    ['Improving personal safety performance across the industry', 'Greater focus on process safety, leadership commitment, and process safety performance indicators', 'Replacement of the COMAH regulatory framework', 'Mandatory psychological screening of process operators'],
    ['They have the same root cause, disabling multiple barriers simultaneously', 'They cause cascading failures in sequence rather than simultaneously', 'They are impossible to predict or prevent', 'They only occur in SIS functions, not BPCS layers'],
    ['The range of operating conditions within which the process can be operated safely', 'The design pressure and temperature limits of vessels', 'The regulatory limits for process emissions', 'The insurance-covered range of operating parameters'],
    ['The safety system was triggered, indicating a barrier has been called upon', 'An alarm has sounded in the control room', 'A maintenance inspection revealed a defect', 'A near-miss report was submitted'],
    ['Provide the basis for the emergency plan and demonstrate major accident hazards are controlled', 'Demonstrate regulatory compliance with COMAH requirements', 'List all chemicals used on site for emergency responder reference', 'Quantify the financial value of the facility for insurance purposes'],
    ['How accidents result from the simultaneous presence of multiple conditions', 'How defensive layers can each have holes, and accidents occur when holes in multiple layers align simultaneously', 'The importance of individual human error in accident causation', 'How root causes are always single technical failures'],
    ['Confirm the SIS will activate when demanded — compensating for undetected failures', 'Test the SIS under real emergency conditions', 'Calibrate the SIS sensors to ensure accurate measurement', 'Check the logic programming has not been altered'],
    ['Conceptual (FEED) or detailed design stage', 'During commissioning when P&IDs are complete and being verified', 'During operations when abnormal events can validate the model', 'During decommissioning to capture lessons learned'],
    ['Threats that lead to the top event', 'Consequences after the top event, reducing their severity', 'The top event, preventing it from occurring', 'Common causes shared between multiple threats'],
    ['COSHH Regulations 2002', 'COMAH Regulations 2015', 'Safety Case Regulations 2005', 'Health and Safety at Work Act 1974'],
    ['Number of HAZOP recommendations implemented on time', 'Lost Time Incident Rate (LTIR) — which measures personal safety, not process safety', 'Number of process safety events', 'Overdue safety critical maintenance items'],
    ['It requires workers to understand why a procedure is safe, not just follow it', 'It focuses only on senior management behaviour', 'Compliance is a subset of safety culture and they are otherwise equivalent', 'It applies to contractors as well as permanent employees'],
    ['Pressure vessel inspection intervals', 'Alarm system management including alarm rates, prioritisation, and HMI design', 'Electrical area classification standards', 'Emergency shutdown valve testing intervals'],
    ['How frequently the specific demand for each protection layer occurs', 'How often the initiating event occurs before protection layers are demanded', 'The interval between proof tests for each IPL', 'The frequency of operator response to alarms'],
    ['The EU Chemicals Directive directly', 'COMAH Regulations 2015', 'Health and Safety at Work Act 1974', 'REACH Regulations'],
    ['Sensors, logic solver, and final elements acting together to achieve a safety function', 'A single safety valve or relief device', 'The complete SIS including all safety functions', 'Any instrument loop with a high alarm'],
    ['Hazards that are not identified cannot be assessed or controlled', 'It is required before insurance can be obtained', 'Regulators require it as the first document submitted', 'All other safety activities depend on the HAZOP'],
    ['Providing PPE to workers', 'Eliminating the hazard at source', 'Increasing the number of administrative controls', 'Training workers to be more careful'],
    ['The probability of the scenario occurring in the next year', 'The potential number of fatalities and environmental damage in the worst case', 'The financial cost of the event including cleanup', 'The time required to recover from the event'],
    ['An audit reviews the management system; an inspection examines physical conditions', 'Audits are conducted by regulators; inspections are internal only', 'Inspections cover process safety; audits cover personal safety', 'Audits are voluntary; inspections are mandatory under COMAH'],
    ['Any change to a process must be assessed for new or changed hazards before implementation', 'Technical changes must be approved by the engineering department', 'All changes require regulatory notification before implementation', 'Management must personally approve all operational changes'],
    ['Creating distractions during safety-critical tasks', 'Contributing through error, poor system design, and organisational factors that increase the likelihood of mistakes', 'Refusing to follow safety procedures', 'Misusing personal protective equipment'],
    ['As low as physically possible regardless of cost', 'As low as reasonably practicable (ALARP) — the cost of further reduction must not be grossly disproportionate to the benefit', 'Below the broadly acceptable level (10⁻⁶/year)', 'Below the regulatory maximum regardless of cost'],
    ['Requires frequent intervention to remain functional', 'Is not independent, not effective, or not auditable', 'Is provided by a contractor rather than the operator', 'Uses software rather than hardware for its safety action'],
    ['HAZOP, What-If, and LOPA techniques', 'COMAH Safety Reports only', 'Quantitative Risk Assessment (QRA) only', 'Bow-tie analysis only'],
    ['Expert engineering judgement alone', 'HAZOP/LOPA results determining required risk reduction', 'Industry standard tables based on equipment type', 'Regulatory specification of SIL for each application'],
    ['To ensure all site personnel can evacuate within 15 minutes', 'To protect emergency responders and the public in the event of a major accident', 'To demonstrate regulatory compliance with Annex II of COMAH', 'To coordinate the response of multiple emergency services'],
    ['The risk is zero and poses no threat to anyone', 'The risk is unwelcome but acceptable given the benefits, with ALARP measures applied', 'The risk is below the broadly acceptable threshold requiring no further controls', 'The risk is accepted by the workers involved'],
    ['The number of overdue safety critical inspections', 'Actual events where major accident hazards have been realised (loss of containment, fires, explosions)', 'Worker observations about unsafe conditions', 'Near misses and demands on safety systems'],
    ['HAZOP generates scenarios qualitatively; LOPA quantifies whether safeguards are sufficient', 'LOPA identifies scenarios; HAZOP quantifies the risk', 'HAZOP is for offshore; LOPA is for onshore facilities', 'HAZOP applies to new designs; LOPA applies to existing operations'],
    ['Blast walls, bunds, and structural fireproofing that provide protection without active operation', 'Operator interventions following alarm activation', 'Safety instrumented systems that shut down the process', 'Evacuation procedures and emergency response plans'],
    ['Reduce or eliminate hazards through design rather than managing them with controls', 'Specify the most inherently reliable safety systems', 'Ensure all processes are inherently safe before commissioning', 'Design processes that comply inherently with all regulations'],
    ['Broadly acceptable risk levels below which no further action is needed', 'The methodology for COMAH Safety Reports', 'Technical standards for pressure vessel design', 'Emergency planning zone distances for COMAH sites'],
    ['OSHA PSM 29 CFR 1910.119 in the United States', 'The UK Health and Safety at Work Act', 'The EU Industrial Emissions Directive', 'The UK Major Hazards Directive'],
    ['Any spill of oil or chemical to the environment', 'An unplanned release of a hazardous material from its normal process containment', 'Any plant shutdown due to a safety system activation', 'Any incident requiring notification to the HSE'],
    ['Alarm management and human machine interface design', 'The complete safety lifecycle of SIS from hazard identification through design, operation, maintenance, and decommissioning', 'The testing requirements for pressure vessels and relief systems', 'Emergency shutdown procedures and operator response'],
    ['Safety must be managed throughout a system\'s life — from design through operation to decommissioning', 'Safety systems have a defined lifecycle of 10 years before replacement', 'Safety procedures must be reviewed annually', 'Process safety management applies only to operating phase'],
    ['Workers are technically competent for their process safety roles', 'Workers can override safety systems when they have sufficient experience', 'All workers have identical training regardless of role', 'Safety competency is only required for HSSE professionals'],
    ['Active fire protection responding automatically to a detected fire', 'Passive fire protection providing no active role', 'Safety instrumented functions responding to process deviations', 'Manual isolation valves operated by the operations team'],
    ['Safety Data Sheets for all chemicals', 'As-built P&IDs, equipment datasheets, safety studies (HAZOP, LOPA), and safety case', 'Training records for all personnel', 'Maintenance work order histories for the last 5 years'],
    ['Additional contamination or additional phase components entering the process', 'A flow that is greater than the design intention', 'A reversal of flow direction', 'A composition different from the design intention'],
    ['10⁻⁶ per year (1 in a million)', '10⁻⁴ per year (1 in ten thousand)', '10⁻² per year (1 in a hundred)', '10⁻³ per year (1 in a thousand)'],
    ['Trevor Kletz — chemical engineer and process safety pioneer', 'James Reason — cognitive psychologist', 'Frank Lees — author of Loss Prevention in the Process Industries', 'Lord Cullen — chair of the Piper Alpha inquiry'],
    ['Multiple layers of protection reduce risk to zero', 'Multiple independent barriers ensure that failure of one layer does not lead directly to a major accident', 'The maximum number of barriers required is three', 'Defence in depth applies only to nuclear facilities'],
    ['Equipment items with a specific function preventing or limiting a major accident', 'All items of safety equipment on a facility', 'Equipment items that require COMAH notification to operate', 'Safety systems certified to SIL 1 or above'],
    ['That the installation complies with all relevant regulations', 'That major accident hazards are identified, understood, and controlled to ALARP', 'That the safety management system has been certified by an independent auditor', 'That all safety critical maintenance is up to date'],
    ['Providing more and better PPE', 'Designing error-tolerant systems, clear procedures, and work conditions that reduce the probability and consequences of errors', 'Disciplining workers who make errors', 'Selecting workers with higher safety awareness'],
    ['They both use guide words', 'HAZOP identifies the hazardous scenarios that are then visualised and barrier-assessed using bow-tie', 'Bow-tie generates the causes; HAZOP assesses the consequences', 'They are competing methodologies used for different facility types'],
    ['All oil and gas operations in EU member states', 'Offshore hydrocarbon exploration and production operations, requiring independent well examination and safety documents', 'Only onshore oil and gas installations in EU coastal states', 'Offshore wind and tidal energy installations'],
    ['Overdue safety critical maintenance items', 'Demands on safety systems', 'Lost Time Incident Rate (LTIR)', 'Number of inhibited SIS functions'],
    ['Quantitative risk assessment for new major hazard installations', 'Informal hazard identification for routine operations or early-stage design where full HAZOP is not required', 'Final verification that all HAZOP recommendations have been implemented', 'Emergency response planning review'],
    ['Engineering judgement of the design team', 'HAZOP/LOPA process quantifying the required risk reduction', 'Regulatory specification in IEC 61511', 'Insurance company assessment of the risk'],
    ['Multiple rings of increasingly stringent protection from the process to the public boundary', 'The time available for emergency response before an incident escalates', 'The number of operators required in the control room', 'The physical layered construction of blast walls on the installation'],
    ['Joint HSE and Environment Agency', 'HSE alone', 'Environment Agency alone', 'An independent third party appointed by the COMAH operator'],
    ['A safety instrumented function (SIF) in the SIS', 'A passive protection measure requiring no active operation', 'A personal protective equipment item', 'An emergency response procedure'],
    ['Material Safety Data Sheets, training records, and audit reports', 'Hazardous area drawings, as-built P&IDs, process chemistry and conditions, design codes, and physical limits of equipment', 'Emergency response plans and evacuation procedures', 'Regulatory correspondence with the Competent Authority'],
    ['Requiring each safety critical element to be auditable, with defined performance standards specifying when it is functioning and when it has degraded', 'Certifying all safety critical elements to IEC standards', 'Ensuring safety critical elements are replaced on a fixed schedule', 'Documenting all safety critical elements in the safety case'],
    ['Prioritise risks for management attention and resource allocation', 'Replace quantitative risk assessment for COMAH Safety Reports', 'Set the minimum number of barriers required for each risk level', 'Define the regulatory compliance status of each hazardous scenario'],
  ][i] || ['Option A', 'Option B', 'Option C', 'Option D'],
  correct: [1,2,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,2,1,0,1,1,0,0,0,0,1,0,1,0,0,0,2,1,0,0][i] || 0,
}));

// ============================================================
// COURSE 4: ENERGY TRANSITION — SKILLS FOR OFFSHORE WIND
// ============================================================

const course4Modules = [
  {
    id: 'owt-m1',
    title: 'Offshore Wind Industry Overview',
    duration: '22 min',
    content: `
<h2>The Global Offshore Wind Industry</h2>
<p>Offshore wind has transformed from an experimental technology to the dominant form of new electricity generation capacity in Northern Europe within three decades. The UK leads the world in installed offshore wind capacity, with over 14 GW operational as of 2023 and a government target of 50 GW by 2030 — enough to power every home in the UK.</p>
<p>The offshore wind industry is structured around four main phases: development and consenting, construction (EPC — Engineering, Procurement, Construction), operations and maintenance (O&M), and ultimately decommissioning. Each phase requires different skills, equipment, and commercial arrangements.</p>
<p>The industry value chain includes: turbine manufacturers (Vestas, Siemens Gamesa, MHI Vestas, GE Renewable Energy), foundation manufacturers, offshore installation contractors (Seaway 7, Van Oord, DEME), cable manufacturers and installers, O&M contractors (Ørsted, RWE, Equinor in-house, plus specialist IMR contractors), and port and logistics operators.</p>

<div class="terminology-box">
  <div class="term-title">Key Terminology — Offshore Wind Overview</div>
  <dl>
    <dt>OWF</dt><dd>Offshore Wind Farm — a collection of offshore wind turbines connected to the grid via an offshore substation</dd>
    <dt>WTIV</dt><dd>Wind Turbine Installation Vessel — specialised heavy-lift jack-up vessel used to install turbines and foundations</dd>
    <dt>O&M</dt><dd>Operations and Maintenance — the phase covering the full operating life of the wind farm (20–30 years)</dd>
    <dt>CTV</dt><dd>Crew Transfer Vessel — fast boat used to transfer technicians from port to turbines for O&M work</dd>
    <dt>HVDC</dt><dd>High Voltage Direct Current — transmission technology for offshore wind over long distances (&gt;80km)</dd>
  </dl>
</div>
    `,
    quiz: [
      { id: 'owt-m1-q1', question: 'The UK government\'s offshore wind capacity target for 2030 is:', options: ['25 GW', '35 GW', '50 GW', '100 GW'], correct: 2 },
      { id: 'owt-m1-q2', question: 'A Crew Transfer Vessel (CTV) in offshore wind O&M is used to:', options: ['Install turbine components during the construction phase', 'Transfer maintenance technicians from port to offshore turbines for routine servicing', 'Lay the inter-array cables between turbines', 'Transport large components requiring a heavy-lift crane vessel'], correct: 1 },
    ],
  },
  {
    id: 'owt-m2',
    title: 'Wind Turbine Technology',
    duration: '25 min',
    content: `
<h2>How Modern Offshore Wind Turbines Work</h2>
<p>Modern offshore wind turbines are sophisticated electromechanical systems that convert wind kinetic energy into electrical energy. Understanding the key systems — rotor, drivetrain, electrical system, and control systems — is essential for anyone working in operations and maintenance.</p>
<p>The rotor assembly consists of three blades (the dominant modern design) attached to the hub. Blades are manufactured from glass or carbon fibre reinforced polymer composites, typically 75–110m long on current generation turbines. Blade pitch control allows the angle of attack to be adjusted, optimising power output at different wind speeds and feathering (pitching to 90°) to stop the turbine in high winds or for maintenance.</p>
<p>Power transmission occurs through the main shaft, gearbox (in traditional drivetrains) or direct drive arrangement (eliminating the gearbox), and generator. The generator typically produces variable frequency AC which is converted to a fixed frequency grid connection through power electronics (converters).</p>
<p>Wind turbines operate within a defined wind speed range: <strong>cut-in speed</strong> (typically 3–4 m/s) below which no power is generated; <strong>rated wind speed</strong> (typically 12–14 m/s) at which the turbine reaches full rated power; and <strong>cut-out speed</strong> (typically 25 m/s) above which the turbine is shut down to prevent damage.</p>

<div class="terminology-box">
  <div class="term-title">Key Terminology — Wind Turbine Technology</div>
  <dl>
    <dt>Nacelle</dt><dd>The housing at the top of the wind turbine tower containing the main shaft, gearbox, generator, and transformer</dd>
    <dt>Pitch Control</dt><dd>System adjusting blade angle to optimise power output and stop the turbine in high winds</dd>
    <dt>Yaw Control</dt><dd>System rotating the nacelle to face the turbine into the wind</dd>
    <dt>Cut-in Speed</dt><dd>Minimum wind speed at which the turbine begins generating power (typically 3–4 m/s)</dd>
    <dt>Capacity Factor</dt><dd>Actual energy generated as a percentage of maximum possible — offshore wind typically achieves 35–50%</dd>
  </dl>
</div>
    `,
    quiz: [
      { id: 'owt-m2-q1', question: 'Blade pitch control on a wind turbine serves to:', options: ['Adjust the height of the blades during installation', 'Optimise power output at varying wind speeds and stop the turbine by feathering in high winds or emergencies', 'Reduce the acoustic noise from the turbine in residential areas', 'Balance the uneven wear on blade surfaces during operation'], correct: 1 },
      { id: 'owt-m2-q2', question: 'A wind turbine "cut-out speed" is the wind speed at which:', options: ['The turbine starts generating power as wind increases', 'The turbine reaches its maximum rated power output', 'The turbine shuts down to prevent damage from excessive wind loading', 'The turbine switches from low-speed to high-speed operation'], correct: 2 },
    ],
  },
  {
    id: 'owt-m3',
    title: 'GWO Certification Explained',
    duration: '20 min',
    content: `
<h2>Global Wind Organisation Training Standards</h2>
<p>The Global Wind Organisation (GWO) develops and maintains the safety training standards for the wind energy industry. GWO standards are recognised by turbine manufacturers and operators worldwide and are the equivalent of OPITO standards for offshore oil and gas. If you are transitioning to wind from another sector, understanding GWO certification is essential for your career planning.</p>
<p><strong>GWO Basic Safety Training (BST)</strong> consists of five modules: First Aid, Manual Handling, Fire Awareness, Working at Height, and Sea Survival. BST is required before working on wind turbines and must be refreshed every 2 years.</p>
<p><strong>GWO Advanced Rescue Training (ART)</strong> covers advanced rescue scenarios including evacuation from wind turbine nacelles. GWO Enhanced First Aid (EFA) extends first aid competency. GWO Technical Training standards cover specific turbine platforms and systems.</p>
<p>Important distinction for O&G workers: many elements of GWO BST overlap with OPITO training (sea survival, first aid, fire awareness). GWO does not directly credit OPITO qualifications, though training providers can conduct gap analysis and in some cases allow partial credit for specific elements. Check with approved GWO training providers for the current position.</p>

<div class="terminology-box">
  <div class="term-title">Key Terminology — GWO</div>
  <dl>
    <dt>GWO BST</dt><dd>GWO Basic Safety Training — mandatory entry-level safety training for wind turbine workers, refreshed every 2 years</dd>
    <dt>GWO ART</dt><dd>GWO Advanced Rescue Training — covering rescue from elevated positions in wind turbines</dd>
    <dt>BZEE</dt><dd>German wind energy training accreditation scheme (predecessor/parallel to GWO in some markets)</dd>
    <dt>GWO</dt><dd>Global Wind Organisation — develops and maintains safety training standards for the wind industry</dd>
    <dt>Nominated Competent Person</dt><dd>Person with specific authority and competency to manage safety for a particular task in wind operations</dd>
  </dl>
</div>
    `,
    quiz: [
      { id: 'owt-m3-q1', question: 'GWO Basic Safety Training (BST) consists of:', options: ['BOSIET equivalent training — HUET, sea survival, firefighting, and first aid', 'Five modules: First Aid, Manual Handling, Fire Awareness, Working at Height, and Sea Survival', 'Three modules: technical turbine familiarisation, fall protection, and emergency response', 'A single 5-day residential course covering all wind industry entry requirements'], correct: 1 },
      { id: 'owt-m3-q2', question: 'GWO BST must be refreshed every:', options: ['1 year', '2 years', '3 years', '4 years (same as BOSIET/FOET)'], correct: 1 },
    ],
  },
  {
    id: 'owt-m4',
    title: 'Transferable O&G Skills',
    duration: '20 min',
    content: `
<h2>Your Oil and Gas Experience in a Wind Context</h2>
<p>The offshore wind industry has actively recruited from the oil and gas sector for more than a decade, recognising that the operational environment, many technical skills, and the safety culture are highly transferable. Understanding which skills transfer directly, which require adaptation, and which need new learning will help you position your experience effectively.</p>

<h3>Direct Transfers</h3>
<ul>
  <li><strong>Marine and offshore survival skills</strong> — sea survival, HUET, offshore medical fitness (GWO BST sea survival module may be waivable for current BOSIET holders — check with training providers)</li>
  <li><strong>Mechanical maintenance skills</strong> — rotating equipment, gearboxes, hydraulics, lubrication systems are all present in wind turbines</li>
  <li><strong>Electrical and instrumentation skills</strong> — HV/LV electrical systems, SCADA, instrumentation and control (with addition of power electronics and grid connection knowledge)</li>
  <li><strong>Working at height</strong> — particularly rope access and fall arrest skills, though the geometry differs from platforms</li>
  <li><strong>HSSE culture and PTW systems</strong> — wind operators use similar PTW and risk assessment frameworks</li>
  <li><strong>SCADA operations</strong> — control room and remote monitoring skills</li>
</ul>

<h3>What Needs Adaptation</h3>
<ul>
  <li>Hazardous area classification — wind turbines have limited ATEX/Ex requirements compared to O&G (electrical hazards remain, H₂S and flammable atmospheres generally do not)</li>
  <li>Scale of work — turbine maintenance is often single-technician or two-person teams working more independently than large O&G platforms</li>
  <li>Commercial model — most offshore wind O&M work is via CTV rather than helicopter, with different logistics and access weather criteria</li>
</ul>

<div class="terminology-box">
  <div class="term-title">Key Terminology — Transferable Skills</div>
  <dl>
    <dt>SCADA</dt><dd>Supervisory Control and Data Acquisition — wind farm monitoring system equivalent to DCS in process plants</dd>
    <dt>Turbine Technician</dt><dd>The primary O&M role in offshore wind — typically works on 1–3 turbines per day via CTV</dd>
    <dt>HV Authorised Person</dt><dd>Person authorised to work on high voltage electrical systems — required for offshore wind substations</dd>
    <dt>ATEX</dt><dd>European standard for equipment in explosive atmospheres — limited applicability in wind but present in some nacelle areas</dd>
    <dt>IMR</dt><dd>Inspection, Maintenance, and Repair — the core O&M scope in offshore wind operations</dd>
  </dl>
</div>
    `,
    quiz: [
      { id: 'owt-m4-q1', question: 'Which oil and gas skills are most directly transferable to offshore wind O&M without significant additional training?', options: ['Wellhead and Christmas tree operation', 'Mechanical maintenance (gearboxes, hydraulics), electrical/instrumentation skills, and offshore survival/safety culture', 'Drilling and completion engineering', 'Pipeline integrity inspection and cathodic protection'], correct: 1 },
      { id: 'owt-m4-q2', question: 'A key difference in working conditions between offshore O&G and offshore wind O&M is:', options: ['Wind technicians work 28-day rotations; O&G workers work only 14 days', 'Wind O&M often involves smaller teams (1–2 people) arriving daily by CTV rather than large platform teams arriving by helicopter', 'Wind turbines require ATEX-certified equipment throughout, unlike O&G platforms', 'All offshore wind work is conducted at heights above 100m with no deck-level operations'], correct: 1 },
    ],
  },
  {
    id: 'owt-m5',
    title: 'Working at Height in Wind',
    duration: '20 min',
    content: `
<h2>The Specific Challenges of Wind Turbine Access</h2>
<p>Wind turbines present unique working at height challenges. The tower climb (internal ladder systems up to 100–150m in large turbines), nacelle access, and blade inspection all require specific skills and equipment beyond standard WAH training.</p>
<p>The primary access method inside a turbine tower is the <strong>internal ladder system</strong> equipped with a fall arrest system — typically a continuously running lifeline or ladder-mounted fall arrest rail. The worker clips onto the system before beginning the climb and remains protected throughout. Larger turbines are increasingly equipped with <strong>lifts (elevators)</strong> installed inside the tower, which both speeds access and reduces physical fatigue, particularly important for heavy tools and equipment.</p>
<p>At the nacelle level and on the hub, fall protection requirements are stringent — 100% tie-off is required at all times when not within a protected work area. Nacelle working areas typically have guardrails on walkways but significant unprotected edges near maintenance hatches and blade root areas. Workers must plan their movement to maintain continuous protection.</p>
<p>Blade inspection and repair work increasingly uses <strong>rope access</strong> techniques — IRATA (Industrial Rope Access Trade Association) certification — working from the nacelle or tower along blade surfaces. Rope access combines efficiency with safety, providing controlled descent and positioning on blade surfaces without scaffolding.</p>

<div class="terminology-box">
  <div class="term-title">Key Terminology — WAH in Wind</div>
  <dl>
    <dt>Ladder Fall Arrest Rail</dt><dd>Continuous fall protection rail on a turbine tower ladder allowing continuous protection during the tower climb</dd>
    <dt>100% Tie-Off</dt><dd>Always connected to an anchor point — achieved using twin-leg lanyards when moving between anchor points</dd>
    <dt>IRATA</dt><dd>Industrial Rope Access Trade Association — certification for rope access techniques used in blade inspection and repair</dd>
    <dt>Nacelle</dt><dd>The housing atop the tower containing the drivetrain — working here requires specific fall protection planning</dd>
    <dt>GWO WAH</dt><dd>GWO Working at Height module — practical training in turbine-specific fall protection techniques</dd>
  </dl>
</div>
    `,
    quiz: [
      { id: 'owt-m5-q1', question: 'The ladder fall arrest rail system in a wind turbine tower provides:', options: ['A braking mechanism that arrests a fall anywhere along the tower climb', 'Continuous fall protection throughout the tower ladder climb', 'A backup climbing system if the primary ladder is damaged', 'An emergency rescue lowering system for incapacitated workers'], correct: 1 },
      { id: 'owt-m5-q2', question: 'IRATA certification is required for:', options: ['All working at height tasks in offshore wind', 'Rope access work — used for blade inspection and repair descending from the nacelle', 'Tower climbing work above 50m height', 'Any rescue operation from a wind turbine nacelle'], correct: 1 },
    ],
  },
  {
    id: 'owt-m6',
    title: 'Offshore Wind Operations',
    duration: '22 min',
    content: `
<h2>Day-to-Day Offshore Wind O&M Operations</h2>
<p>Offshore wind farm operations differ significantly from offshore oil and gas in their commercial model, access logistics, and operational intensity. Understanding these differences prepares you for what the day-to-day role actually looks like.</p>
<p>The majority of O&M work is managed from an <strong>Operations and Maintenance Base (OMB)</strong> — a shore-based facility located as close to the wind farm as possible. For most North Sea wind farms, this is a dedicated facility in a port such as Grimsby, Great Yarmouth, or Aberdeen. Technicians commute daily to the wind farm by CTV, spending 4–8 hours working offshore before returning to shore. This is a fundamentally different logistical model from offshore O&G where personnel are resident on the asset.</p>
<p>The asset management system (typically SCADA plus a Computerised Maintenance Management System — CMMS) monitors turbine performance continuously. When a turbine stops or underperforms, a work order is generated. Technicians review work orders at the daily morning brief, plan the day's tasks with the Offshore Service Manager (OSM), and depart by CTV with all required tools, parts, and equipment.</p>
<p>Typical O&M tasks include: corrective maintenance (fault finding and repair), preventive maintenance (annual service — oil changes, filter replacements, torque checks), inspection (visual, NDT, endoscopic inspection of gearboxes), and minor upgrades (software updates, component retrofits). Major component replacements (blades, gearboxes, generators) require specialist jack-up vessels and coordinated logistics.</p>

<div class="terminology-box">
  <div class="term-title">Key Terminology — Wind Operations</div>
  <dl>
    <dt>OMB</dt><dd>Operations and Maintenance Base — shore-based facility managing offshore wind farm O&M activities</dd>
    <dt>OSM</dt><dd>Offshore Service Manager — the site supervisor coordinating daily O&M activities</dd>
    <dt>CMMS</dt><dd>Computerised Maintenance Management System — work order and asset management system</dd>
    <dt>Availability</dt><dd>Key performance indicator for a wind farm — percentage of time turbines are operational and available to generate</dd>
    <dt>Major Component Exchange</dt><dd>Replacement of large turbine components (gearbox, generator, blades) using jack-up vessels or crane ships</dd>
  </dl>
</div>
    `,
    quiz: [
      { id: 'owt-m6-q1', question: 'Most offshore wind O&M technicians access the wind farm by:', options: ['Helicopter, as in offshore oil and gas', 'CTV (Crew Transfer Vessel) from a shore-based OMB, returning to shore each day', 'Living aboard an accommodation vessel for 2-week rotations', 'Fixed-wing aircraft to an offshore airport platform'], correct: 1 },
      { id: 'owt-m6-q2', question: '"Availability" is a key performance indicator in offshore wind because:', options: ['It measures the number of staff available for work on any given day', 'It represents the percentage of time turbines are operational and available to generate electricity', 'It tracks the availability of CTVs for personnel transfer', 'It measures the percentage of planned maintenance completed on schedule'], correct: 1 },
    ],
  },
  {
    id: 'owt-m7',
    title: 'Career Pathways in Wind',
    duration: '18 min',
    content: `
<h2>Building a Career in Offshore Wind</h2>
<p>The offshore wind sector is one of the fastest-growing employment areas in the UK energy sector. ORE Catapult (the UK's offshore renewable energy innovation centre) estimates the UK offshore wind sector will need to more than double its workforce by 2030. For workers transitioning from oil and gas, this represents a genuine and well-timed opportunity.</p>

<h3>Entry-Level Routes</h3>
<p>The primary entry route for experienced O&G workers is direct placement as a Technician (Mechanical, Electrical, or Multi-skilled). Most wind operators and O&M contractors will consider candidates with relevant trade qualifications and offshore experience who have completed GWO BST. The salary and terms may differ from senior O&G roles, but the learning curve is steep and progression is rapid in a growing industry.</p>
<p>Alternative routes include: apprenticeships (primarily for those without prior trade experience), graduate engineer programmes (for degree-qualified candidates), and specialist roles (rope access inspection, subsea cable inspection, major component installation).</p>

<h3>Career Progression</h3>
<p>Typical progression: Technician → Senior Technician → Lead Technician → Offshore Service Manager → Site Manager → Asset Manager. Some routes lead into project management (construction phase) or engineering roles (asset integrity, performance analysis). The industry is developing formal competency frameworks — the ORE Catapult / GWO / RenewableUK competency framework provides a roadmap for professional development.</p>

<div class="terminology-box">
  <div class="term-title">Key Terminology — Wind Career Paths</div>
  <dl>
    <dt>ORE Catapult</dt><dd>UK's offshore renewable energy technology innovation centre — provides research, testing, and industry development</dd>
    <dt>Multi-skilled Technician</dt><dd>Technician competent in both mechanical and electrical disciplines — increasingly preferred in offshore wind</dd>
    <dt>RenewableUK</dt><dd>UK trade association for wind, wave, and tidal energy — provides industry data and career resources</dd>
    <dt>Asset Manager</dt><dd>Senior role responsible for the overall performance and long-term strategy of a wind farm asset</dd>
    <dt>STEM</dt><dd>Science, Technology, Engineering, and Mathematics — educational pathway feeding into wind industry technical roles</dd>
  </dl>
</div>
    `,
    quiz: [
      { id: 'owt-m7-q1', question: 'For an experienced O&G mechanical technician transitioning to offshore wind, the most direct entry route is:', options: ['Retraining as a graduate engineer through a 3-year university programme', 'Direct placement as a wind turbine technician after completing GWO BST', 'Starting as an apprentice to learn wind-specific skills from scratch', 'Project management roles in wind farm construction'], correct: 1 },
      { id: 'owt-m7-q2', question: 'The ORE Catapult is relevant to offshore wind career development because:', options: ['It manages the offshore wind O&M training approval scheme equivalent to OPITO', 'It is the UK offshore renewable energy innovation centre supporting career development and competency frameworks in the offshore wind sector', 'It is the UK government body responsible for funding apprenticeships in offshore wind', 'It is the professional institution for offshore wind engineers'], correct: 1 },
    ],
  },
];

// course4Assessment is defined in courses2.js — assembled in courseData.js
const course4Assessment = [];  // placeholder - real data in courseData.js

// ============================================================
// EXPORTED COURSES ARRAY
// ============================================================
export const COURSES = [
  {
    id: 'course-1',
    title: 'Energy Sector Fundamentals',
    subtitle: 'Start your energy career with industry-recognised foundations',
    pathway: 'energy-ready',
    level: 'Foundation',
    duration: '12 hours',
    modules: 8,
    price: 249,
    rating: 4.8,
    enrolled: 1842,
    description: 'A comprehensive introduction to the global energy sector — upstream, midstream, downstream — plus safety culture, process plant fundamentals, the energy transition, and career pathways. Built for anyone entering the industry.',
    outcomes: [
      'Explain the structure of the global energy sector and key organisations',
      'Describe upstream, midstream, and downstream operations',
      'Understand safety culture and human factors in energy',
      'Read and interpret basic P&IDs and process diagrams',
      'Explain the energy transition and net zero context',
      'Develop a personalised energy career action plan',
    ],
    moduleList: course1Modules,
    assessment: course1Assessment,
  },
  {
    id: 'course-2',
    title: 'Offshore Safety Essentials',
    subtitle: 'Master the safety skills required for every offshore worker',
    pathway: 'process-safety',
    level: 'Foundation',
    duration: '10 hours',
    modules: 8,
    price: 199,
    rating: 4.9,
    enrolled: 2341,
    description: 'Everything you need to know about working safely offshore — H₂S awareness, confined space entry, working at height, permit to work systems, fire safety, hazardous areas, emergency procedures, and helicopter safety.',
    outcomes: [
      'Understand H₂S hazards, exposure limits, and emergency response',
      'Describe confined space entry requirements and atmospheric testing',
      'Explain working at height regulations and fall protection equipment',
      'Navigate the permit to work system as both issuer and performer',
      'Understand fire triangle, extinguisher types, and offshore fire response',
      'Explain helicopter safety procedures and HUET requirements',
    ],
    moduleList: course2Modules,
    assessment: course2Assessment,
  },
  {
    id: 'course-3',
    title: 'Process Safety Fundamentals',
    subtitle: 'Advanced process safety for technical professionals',
    pathway: 'process-safety',
    level: 'Intermediate',
    duration: '14 hours',
    modules: 8,
    price: 349,
    rating: 4.7,
    enrolled: 987,
    description: 'Deep-dive into process safety management — HAZOP methodology, bow-tie analysis, LOPA, safety instrumented systems, major accident case studies, human factors, and COMAH/IEC 61511 standards.',
    outcomes: [
      'Distinguish process safety from personal safety',
      'Facilitate or participate in HAZOP studies',
      'Construct and interpret bow-tie diagrams',
      'Understand SIL assessment and safety instrumented systems',
      'Analyse major accident case studies including Piper Alpha and Texas City',
      'Understand COMAH regulations and process safety performance metrics',
    ],
    moduleList: course3Modules,
    assessment: course3Assessment,
  },
  {
    id: 'course-4',
    title: 'Energy Transition: Skills for Offshore Wind',
    subtitle: 'Bridge from oil & gas to the offshore wind sector',
    pathway: 'energy-transition',
    level: 'Intermediate',
    duration: '11 hours',
    modules: 7,
    price: 299,
    rating: 4.8,
    enrolled: 654,
    description: 'The practical guide for O&G professionals moving into offshore wind. Covers wind turbine technology, GWO certification, transferable skills, working at height in wind, operations, and career progression.',
    outcomes: [
      'Explain offshore wind farm structure and operations',
      'Describe wind turbine components and operating principles',
      'Understand GWO Basic Safety Training requirements',
      'Identify transferable skills from oil and gas',
      'Navigate career pathways in the offshore wind sector',
      'Understand daily O&M operations at an offshore wind farm',
    ],
    moduleList: course4Modules,
    assessment: course4Assessment,
  },
];

export default COURSES;
