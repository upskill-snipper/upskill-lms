// Continuation of course data - courses 4 and 5 assessments and remaining content

export const course4Assessment = [
  { id: 'owt-q1', question: 'The UK government\'s 2030 offshore wind capacity target is:', options: ['25 GW', '35 GW', '50 GW', '75 GW'], correct: 2 },
  { id: 'owt-q2', question: 'A Crew Transfer Vessel (CTV) is used in offshore wind for:', options: ['Installing turbine components during construction', 'Transporting technicians from shore to turbines for O&M work', 'Laying inter-array power cables', 'Emergency rescue operations'], correct: 1 },
  { id: 'owt-q3', question: 'Wind turbine blades are manufactured from:', options: ['Steel, for strength and durability in offshore conditions', 'Glass or carbon fibre reinforced polymer composites', 'Aluminium alloy for weight reduction', 'Titanium for corrosion resistance'], correct: 1 },
  { id: 'owt-q4', question: 'Blade pitch control allows the turbine to:', options: ['Rotate the nacelle to face into the wind', 'Adjust blade angle to optimise power output and stop the turbine in high winds', 'Vary the tower height for different wind conditions', 'Control blade rotational speed independently of the wind'], correct: 1 },
  { id: 'owt-q5', question: 'GWO BST consists of how many training modules?', options: ['3', '4', '5', '7'], correct: 2 },
  { id: 'owt-q6', question: 'GWO BST must be refreshed every:', options: ['1 year', '2 years', '3 years', '4 years'], correct: 1 },
  { id: 'owt-q7', question: 'Which of the following O&G skills is most directly transferable to offshore wind O&M without significant retraining?', options: ['Well control and blowout prevention', 'Rotating equipment maintenance, electrical skills, and offshore safety culture', 'Drilling and completions engineering', 'Pipeline pig tracking and inspection'], correct: 1 },
  { id: 'owt-q8', question: 'The Operations and Maintenance Base (OMB) in offshore wind is:', options: ['An accommodation platform adjacent to the wind farm', 'A shore-based facility from which technicians commute daily by CTV', 'An offshore substation used as a base of operations', 'A mobile maintenance vessel permanently stationed at the wind farm'], correct: 1 },
  { id: 'owt-q9', question: '"Availability" as a wind farm KPI measures:', options: ['The percentage of time staff are available for work', 'The percentage of time turbines are operational and able to generate', 'The percentage of planned maintenance completed on schedule', 'The percentage of maximum potential energy generated'], correct: 1 },
  { id: 'owt-q10', question: 'IRATA certification is required for:', options: ['All tower climbing work above 20 metres', 'Rope access techniques used in blade inspection and repair', 'Working at height in any wind industry environment', 'Rescue operations from wind turbine nacelles'], correct: 1 },
  { id: 'owt-q11', question: 'Wind turbine cut-out speed is typically around:', options: ['10 m/s', '15 m/s', '25 m/s', '35 m/s'], correct: 2 },
  { id: 'owt-q12', question: 'The nacelle of a wind turbine contains:', options: ['The foundation connections and cable entry systems', 'The main shaft, gearbox (if fitted), generator, and power electronics', 'The blade pitch control systems only', 'The offshore substation and export cable connections'], correct: 1 },
  { id: 'owt-q13', question: 'Major component exchange in offshore wind (replacing a gearbox or generator) requires:', options: ['A standard CTV with crane attachment', 'A specialist jack-up or crane vessel', 'A larger helicopter with underslung load capacity', 'An ROV for underwater component handling'], correct: 1 },
  { id: 'owt-q14', question: 'The ladder fall arrest rail system on a wind turbine tower provides:', options: ['A rest platform at regular intervals during the tower climb', 'Continuous fall protection throughout the entire tower ladder climb', 'Emergency rescue lowering capability', 'Speed control limiting the descent speed on the internal ladder'], correct: 1 },
  { id: 'owt-q15', question: 'SCADA in offshore wind is equivalent to what system in oil and gas?', options: ['The permit to work system', 'The DCS (Distributed Control System)', 'The CMMS (maintenance management system)', 'The safety instrumented system (SIS)'], correct: 1 },
  { id: 'owt-q16', question: 'A key difference for O&G workers transitioning to wind is that hazardous area requirements:', options: ['Are more stringent in wind due to high voltage electrical systems throughout', 'Are less extensive in wind — H₂S and most flammable atmosphere hazards do not apply to turbines', 'Are identical — both sectors use the same Ex equipment zone classifications', 'Are replaced by GWO-specific safety standards in the wind industry'], correct: 1 },
  { id: 'owt-q17', question: 'ORE Catapult is:', options: ['The offshore wind industry\'s equivalent of OPITO for training standards', 'The UK\'s offshore renewable energy technology innovation centre', 'The regulator for offshore wind installations in the UK', 'A training provider for GWO certifications'], correct: 1 },
  { id: 'owt-q18', question: 'RenewableUK is:', options: ['The UK government\'s renewable energy procurement agency', 'The UK trade association for wind, wave, and tidal energy', 'A GWO-approved training provider', 'The regulatory body for offshore wind licensing'], correct: 1 },
  { id: 'owt-q19', question: '100% tie-off during nacelle work in offshore wind means:', options: ['Two workers must always be present — each acts as the other\'s 100% tie-off', 'The worker is always connected to an anchor point — using twin-leg lanyards to maintain connection while moving', 'Only 100% rated fall arrest equipment must be used above nacelle height', 'All equipment must be tied off to prevent dropped objects'], correct: 1 },
  { id: 'owt-q20', question: 'The Offshore Service Manager (OSM) in an offshore wind farm O&M operation is:', options: ['The regulatory compliance officer for the wind farm', 'The site supervisor coordinating daily maintenance activities and technician deployment', 'The turbine manufacturer\'s representative on site', 'The lead engineer responsible for major component exchange projects'], correct: 1 },
  { id: 'owt-q21', question: 'A multi-skilled technician in offshore wind is valued because:', options: ['They can work unsupervised at any height above 100m', 'Competence in both mechanical and electrical disciplines allows more efficient single-technician fault-finding and repair', 'They hold all GWO advanced qualifications by definition', 'They can substitute for the OSM in their absence'], correct: 1 },
  { id: 'owt-q22', question: 'Yaw control on a wind turbine:', options: ['Adjusts the blade angle during high winds to prevent damage', 'Rotates the nacelle to keep the rotor facing into the wind as wind direction changes', 'Controls the speed at which the rotor spins', 'Manages the torque output of the generator'], correct: 1 },
  { id: 'owt-q23', question: 'HVDC (High Voltage Direct Current) transmission is used for offshore wind because:', options: ['DC is safer than AC for underwater cable systems', 'DC transmission has lower losses over long distances compared to AC, making remote offshore wind farms commercially viable', 'DC cables require less maintenance than AC cables in marine environments', 'HVDC is mandated by Ofgem for all offshore renewable connections'], correct: 1 },
  { id: 'owt-q24', question: 'The typical capacity factor for an offshore wind farm is:', options: ['10–20%', '20–30%', '35–50%', '60–75%'], correct: 2 },
  { id: 'owt-q25', question: 'Wind turbines use pitch control to "feather" at high wind speeds. Feathering means:', options: ['Reducing blade surface area by folding the blade tip', 'Pitching blades to approximately 90° to spill wind and prevent overloading', 'Applying aerodynamic brakes to the blade leading edge', 'Deploying blade tip speed reducers in storm conditions'], correct: 1 },
  { id: 'owt-q26', question: 'The GWO Working at Height module specifically prepares workers for:', options: ['Any working at height task in any industrial environment', 'Turbine-specific fall protection including tower ladder systems, nacelle access, and drop zone awareness', 'Rope access (IRATA) blade inspection and repair', 'Scaffold erection and inspection to CISRS standard'], correct: 1 },
  { id: 'owt-q27', question: 'When a wind turbine stops or underperforms, the typical response is:', options: ['A generator dispatch from the OMB to investigate immediately', 'A work order is generated in the CMMS and reviewed at the daily brief for technician deployment', 'The SCADA system automatically resets the fault and restarts the turbine', 'The turbine manufacturer\'s technical support line is called for remote diagnosis'], correct: 1 },
  { id: 'owt-q28', question: 'The North Sea Transition Deal (NSTD) supports workers transitioning from O&G to wind by:', options: ['Guaranteeing employment in offshore wind for all redundant O&G workers', 'Committing industry and government to supporting skills retraining and workforce transition', 'Funding free GWO BST training for all current BOSIET holders', 'Requiring offshore wind operators to give preference to O&G sector applicants'], correct: 1 },
  { id: 'owt-q29', question: 'A wind farm\'s inter-array cable system connects:', options: ['The offshore substation to the onshore grid connection', 'Individual turbines to the offshore substation collection point', 'The OMB to the offshore substation control systems', 'Turbine towers to the foundation structures'], correct: 1 },
  { id: 'owt-q30', question: 'Which company type is described as a "wind turbine installation vessel" (WTIV) operator?', options: ['A turbine manufacturer (e.g., Vestas, Siemens Gamesa)', 'An offshore installation contractor (e.g., Seaway 7, Van Oord, DEME)', 'A cable manufacturer', 'An O&M contractor providing technician services'], correct: 1 },
  { id: 'owt-q31', question: 'For a career as a turbine technician, the minimum required qualifications typically include:', options: ['A degree in renewable engineering and IRATA Level 3', 'GWO BST plus relevant trade qualification (electrical, mechanical) or equivalent offshore experience', 'BOSIET plus CompEx certification', 'GWO ART plus a manufacturer-specific turbine training certificate'], correct: 1 },
  { id: 'owt-q32', question: 'Preventive maintenance in offshore wind typically includes:', options: ['Daily blade inspections using rope access', 'Annual servicing — oil changes, filter replacements, torque checks, and software updates', 'Monthly gearbox oil analysis and vibration measurement', 'Bi-annual transformer replacement to prevent insulation failure'], correct: 1 },
  { id: 'owt-q33', question: 'How does the commercial O&M model for offshore wind differ from offshore O&G?', options: ['Wind O&M generates more revenue per worker than O&G maintenance', 'Wind technicians commute daily by CTV from shore rather than living on the asset for rotations', 'Wind O&M contracts are longer-term (20 years) while O&G contracts are shorter (5 years)', 'Wind O&M uses fixed-price contracts while O&G uses day-rate contracts exclusively'], correct: 1 },
  { id: 'owt-q34', question: 'Subsea foundation types used in offshore wind include:', options: ['Jacket foundations only — identical to oil and gas jacket platforms', 'Monopiles (most common for shallower water), jackets, gravity-based structures, and floating foundations for deep water', 'Only gravity-based concrete structures for heavy turbines', 'Tension-leg platforms anchored to the seabed'], correct: 1 },
  { id: 'owt-q35', question: 'What is the significance of the UK\'s ambition for 50 GW of offshore wind by 2030 for the energy workforce?', options: ['It creates significant demand for new skills, particularly benefiting O&G workers whose transferable skills are in short supply', 'It means O&G workers will be retrained and directly employed by offshore wind operators', 'The 50 GW target is primarily met by automation, reducing workforce demand', 'It represents no significant employment opportunity as wind turbines require minimal maintenance'], correct: 0 },
  { id: 'owt-q36', question: 'GWO Advanced Rescue Training (ART) covers:', options: ['Advanced first aid for offshore medical emergencies', 'Rescue from elevated positions in wind turbines including nacelle and tower scenarios', 'Sea survival rescue of man-overboard casualties', 'Rescue from confined spaces in wind turbine foundations'], correct: 1 },
  { id: 'owt-q37', question: 'The primary advantage of direct-drive wind turbines over geared drivetrains is:', options: ['Higher rated power output for a given rotor diameter', 'Elimination of the gearbox — reducing maintenance requirements and improving reliability', 'Lower manufacturing cost making the turbine more commercially attractive', 'Better performance in low wind speed conditions below cut-in speed'], correct: 1 },
  { id: 'owt-q38', question: 'In offshore wind development, the "consent" phase involves:', options: ['Securing investment and financial close for the project', 'Obtaining planning permission and environmental approval to build the wind farm', 'Completing the procurement of turbines and foundation contracts', 'Negotiating the Contracts for Difference (CfD) with government'], correct: 1 },
  { id: 'owt-q39', question: 'A Contracts for Difference (CfD) in UK offshore wind is:', options: ['A maintenance contract between the operator and an O&M contractor', 'A government support mechanism guaranteeing a minimum "strike price" per MWh, reducing investor risk', 'A legal agreement transferring wind farm ownership between developers', 'The commercial arrangement between turbine manufacturers and installers'], correct: 1 },
  { id: 'owt-q40', question: 'Access weather criteria for CTVs typically limit operations when:', options: ['Wind speeds exceed 10 m/s at the turbine hub height', 'Significant wave height exceeds approximately 1.5–2.0 metres', 'Visibility falls below 5 km for navigation purposes', 'Air temperature falls below 5°C in winter months'], correct: 1 },
  { id: 'owt-q41', question: 'Floating offshore wind foundations are being developed to enable wind farms:', options: ['In very shallow coastal areas where fixed foundations are impractical', 'In deeper water (60m+) where fixed foundations are not economically viable', 'In areas with very high wave loading where fixed foundations would fail', 'In environmentally sensitive areas where seabed disturbance must be minimised'], correct: 1 },
  { id: 'owt-q42', question: 'An "HV Authorised Person" qualification is required in offshore wind for:', options: ['All technicians working on turbines above 10m height', 'Work on high voltage electrical systems in offshore substations and HV cable systems', 'Operating the offshore substation control room', 'Helicopter and CTV crew members working around electrical infrastructure'], correct: 1 },
  { id: 'owt-q43', question: 'The CMMS (Computerised Maintenance Management System) in offshore wind manages:', options: ['The SCADA remote monitoring and turbine control systems', 'Work orders, maintenance history, spare parts inventory, and technician scheduling', 'The CTV booking and personnel transfer logistics system', 'Regulatory compliance documentation and certification tracking'], correct: 1 },
  { id: 'owt-q44', question: 'Endoscopic inspection of a wind turbine gearbox is used to:', options: ['Measure the precise alignment of gearbox shafts', 'Inspect internal gear teeth and bearings without full disassembly', 'Calibrate the oil temperature monitoring instruments', 'Identify the source of noise emissions from the gearbox housing'], correct: 1 },
  { id: 'owt-q45', question: 'The ORE Catapult National Renewable Energy Centre is located at:', options: ['Aberdeen, Scotland', 'Blyth, Northumberland', 'Liverpool, Merseyside', 'Great Yarmouth, Norfolk'], correct: 1 },
  { id: 'owt-q46', question: 'Current generation offshore wind turbines (installed 2020+) have individual rated capacities of approximately:', options: ['3–5 MW', '5–8 MW', '12–15 MW', '20–25 MW'], correct: 2 },
  { id: 'owt-q47', question: 'The inter-array cable voltage in a typical offshore wind farm is:', options: ['11 kV', '33 kV (most common) or 66 kV for newer large farms', '132 kV', '400 kV (same as onshore transmission)'], correct: 1 },
  { id: 'owt-q48', question: 'Why are Siemens Gamesa and Vestas important names for offshore wind workers to know?', options: ['They are the primary regulatory bodies for offshore wind safety standards', 'They are the two dominant turbine manufacturers globally — their turbines form the majority of installed capacity', 'They operate the largest offshore wind O&M fleets in the North Sea', 'They are the primary employers of offshore wind technicians in the UK'], correct: 1 },
  { id: 'owt-q49', question: 'Preventive maintenance on an offshore wind turbine is typically timed to coincide with:', options: ['Periods of maximum wind speed to maximise productivity', 'Periods of low wind or forecast calm weather to minimise lost generation', 'The annual SCADA software update cycle', 'The CTV maintenance schedule'], correct: 1 },
  { id: 'owt-q50', question: 'A key safety difference between working on an offshore wind turbine and working on an oil and gas platform is:', options: ['Wind turbines have more confined spaces requiring entry permits', 'Wind turbines have limited emergency evacuation options — the primary hazard is fall from height rather than fire/explosion', 'Wind turbines have more stringent PPE requirements due to higher UV exposure', 'Wind platforms have more complex PTW systems due to the variety of hazards'], correct: 1 },
  { id: 'owt-q51', question: 'Drop zone awareness is particularly important in offshore wind because:', options: ['Dropped objects from nacelle height can fall 80–150m, potentially hitting CTVs, other workers, or marine traffic below', 'Wind turbines have no netting or barriers to catch dropped tools', 'Dropped objects are the leading cause of fatality in offshore wind globally', 'IRATA certification requires specific dropped object awareness training'], correct: 0 },
  { id: 'owt-q52', question: 'The UK\'s Crown Estate is involved in offshore wind because:', options: ['It operates the UK\'s offshore transmission network', 'It owns the seabed around England, Wales, and Northern Ireland and leases areas to offshore wind developers', 'It certifies offshore wind installations for grid connection', 'It manages the UK\'s offshore wind support scheme (CfD)'], correct: 1 },
  { id: 'owt-q53', question: 'In offshore wind, a "scour protection" system around a monopile foundation is used to:', options: ['Protect the foundation from corrosion due to seawater exposure', 'Prevent seabed erosion (scour) around the foundation that could undermine its structural integrity', 'Absorb the dynamic wave loading on the monopile structure', 'Create an artificial reef habitat to offset environmental impact'], correct: 1 },
  { id: 'owt-q54', question: 'The wind industry term "AEP" (Annual Energy Production) represents:', options: ['The average number of employees per turbine', 'The estimated electricity generation from a wind farm over a full year at a given wind resource', 'The average efficiency percentage of the turbine fleet', 'The annual expenditure on preventive maintenance per turbine'], correct: 1 },
  { id: 'owt-q55', question: 'Transition support pathways for O&G workers include all of the following EXCEPT:', options: ['OPITO\'s Energy Skills Passport', 'GWO BST training', 'The North Sea Transition Deal workforce development commitments', 'Automatic conversion of BOSIET to GWO BST without additional training'], correct: 3 },
  { id: 'owt-q56', question: 'The main purpose of an offshore wind farm\'s offshore substation (OSS) is:', options: ['To house the operations and maintenance team during offshore visits', 'To step up voltage from inter-array level (33/66 kV) to export cable voltage (132/220 kV)', 'To provide emergency accommodation for CTVs in bad weather', 'To house the wind farm SCADA system and control room'], correct: 1 },
  { id: 'owt-q57', question: 'Wave height access limits for CTVs (approximately 1.5–2.0m significant wave height) are driven by:', options: ['Regulatory requirements for CTV operations in the North Sea', 'The physical limitation of safely transferring technicians between the CTV and the turbine boat landing', 'The structural loading limits of the CTV hull in offshore conditions', 'The comfort and fatigue management requirements for offshore workers'], correct: 1 },
  { id: 'owt-q58', question: 'For a career progressing beyond turbine technician in offshore wind, which skills are most valuable?', options: ['Advanced GWO rope access certification (IRATA Level 3)', 'Technical knowledge, leadership skills, and increasingly data analysis and digital skills for asset management', 'Turbine manufacturer-specific certifications only', 'Completion of a university degree in renewable engineering'], correct: 1 },
  { id: 'owt-q59', question: 'The term "farm controller" in offshore wind refers to:', options: ['The OSM who manages the O&M team on site', 'The system managing power output of the entire wind farm to meet grid requirements', 'The SCADA operator monitoring turbine performance in the control room', 'The asset management system tracking turbine availability'], correct: 1 },
  { id: 'owt-q60', question: 'In terms of career salary expectations, experienced offshore wind technicians in the UK can typically expect:', options: ['Significantly lower salaries than equivalent O&G roles due to the sector\'s lower revenue per asset', 'Comparable salaries to O&G offshore roles for experienced technicians, with growth as demand exceeds supply', 'Higher salaries than O&G due to the government subsidy supporting the industry', 'Lower day rates but higher bonuses compared to O&G contracting'], correct: 1 },
];

export const course5Modules = [
  {
    id: 'cml-m1',
    title: 'What is Competence Assurance',
    duration: '25 min',
    content: `
<h2>The Foundation of Competence Assurance</h2>
<p>Competence assurance is the systematic process by which organisations ensure that their workforce has — and maintains — the knowledge, skills, and behaviours required to perform their roles safely and effectively. It is not the same as training. Training is an input; competence is the output.</p>
<p>This distinction matters enormously in high-hazard industries. A worker who has attended a process safety training course has been trained. A worker who has demonstrated — through assessed performance in their actual role — that they can apply that knowledge correctly under realistic conditions is competent. The gap between the two is where accidents happen.</p>
<p>In the UK oil and gas sector, competence assurance has regulatory backing. The Offshore Installations (Safety Case) Regulations require operators to demonstrate that all persons on their installation are competent for their roles. The OPITO Approved Code of Practice on Competence Assurance and Development provides the industry framework. Similar requirements apply under COMAH onshore.</p>

<h3>Elements of a Competence Assurance System</h3>
<ul>
  <li><strong>Competency Framework</strong> — defining what competencies are required for each role</li>
  <li><strong>Assessment</strong> — measuring whether individuals meet those competencies</li>
  <li><strong>Development</strong> — training and experience to fill identified gaps</li>
  <li><strong>Verification</strong> — independent checking that the system is working</li>
  <li><strong>Records</strong> — maintaining evidence of competence for audit and regulatory purposes</li>
</ul>

<div class="terminology-box">
  <div class="term-title">Key Terminology — Competence Assurance</div>
  <dl>
    <dt>Competence</dt><dd>The ability to perform a task or role to a defined standard consistently and reliably under realistic conditions</dd>
    <dt>Competency Framework</dt><dd>A structured description of the knowledge, skills, and behaviours required for effective performance in a role</dd>
    <dt>CMS</dt><dd>Competency Management System — the organisational system for assessing, developing, and verifying workforce competence</dd>
    <dt>OPITO</dt><dd>Offshore Petroleum Industry Training Organisation — sets industry competence standards and approves CMS frameworks</dd>
    <dt>Verification</dt><dd>Independent checking that assessments are valid, reliable, and consistent with the framework standards</dd>
  </dl>
</div>
    `,
    quiz: [
      { id: 'cml-m1-q1', question: 'The fundamental difference between training and competence is:', options: ['Training is more expensive than competence assessment', 'Training is an input (what is provided); competence is the output (demonstrated ability to perform)', 'Competence applies only to safety roles; training applies to all roles', 'Training is mandatory; competence assessment is voluntary'], correct: 1 },
      { id: 'cml-m1-q2', question: 'Regulatory backing for competence assurance in UK offshore operations comes primarily from:', options: ['BOSIET certification requirements under OPITO standards', 'Safety Case Regulations requiring operators to demonstrate workforce competence for all roles on the installation', 'The Working Time Regulations limiting training hours', 'ISO 9001 quality management requirements'], correct: 1 },
    ],
  },
  {
    id: 'cml-m2',
    title: 'Designing a Competency Framework',
    duration: '28 min',
    content: `
<h2>Framework Design — Getting the Architecture Right</h2>
<p>A competency framework must be fit for purpose — specific enough to be meaningful, flexible enough to accommodate the range of roles and experience levels in a workforce. Poor framework design is the most common cause of competence management system failure.</p>
<p>The design process starts with job task analysis (JTA) or role profiling: a systematic decomposition of what each role actually does. This is not a job description — it is a task-level description of the activities performed, the conditions under which they are performed, and the performance standards expected. JTA is typically conducted through a combination of expert workshops (involving experienced performers, supervisors, and technical specialists) and observation of people actually doing the work.</p>

<h3>Framework Structure</h3>
<p>Most frameworks are structured hierarchically:</p>
<ul>
  <li><strong>Units</strong> — broad areas of competence (e.g., "Process Plant Operations")</li>
  <li><strong>Elements</strong> — specific activities within a unit (e.g., "Startup and Shutdown of Separation Equipment")</li>
  <li><strong>Performance criteria</strong> — observable, measurable outcomes that confirm competent performance (e.g., "Correctly isolates equipment in sequence with no deviations from procedure")</li>
  <li><strong>Range statements</strong> — the conditions under which competence must be demonstrated (e.g., "Including normal operation, planned maintenance, and emergency scenarios")</li>
  <li><strong>Knowledge and understanding requirements</strong> — the underpinning knowledge that enables competent performance</li>
</ul>
<p>Performance criteria must be <strong>observable</strong> (you can see the behaviour), <strong>measurable</strong> (you can judge whether it meets the standard), and <strong>achievable</strong> (realistic for the role). Vague criteria like "understands the importance of safety" are worthless — they cannot be assessed. "Identifies and reports all deviations from Safe Operating Envelope parameters observed during the shift, using the correct reporting form, within the required timeframe" is assessable.</p>

<div class="terminology-box">
  <div class="term-title">Key Terminology — Framework Design</div>
  <dl>
    <dt>Job Task Analysis (JTA)</dt><dd>Systematic decomposition of a role into specific tasks with performance standards — the foundation of framework design</dd>
    <dt>Performance Criterion</dt><dd>An observable, measurable outcome that confirms competent performance of a specific task</dd>
    <dt>Range Statement</dt><dd>The conditions (normal, abnormal, emergency) under which a competence must be demonstrated</dd>
    <dt>Unit of Competence</dt><dd>A broad area of work activity grouping related elements and performance criteria</dd>
    <dt>Underpinning Knowledge</dt><dd>The technical knowledge required to enable competent performance — tested separately from practical demonstration</dd>
  </dl>
</div>
    `,
    quiz: [
      { id: 'cml-m2-q1', question: 'Job Task Analysis (JTA) in framework design involves:', options: ['Reviewing job descriptions from similar organisations to benchmark roles', 'Systematically decomposing a role into specific tasks with performance standards through expert workshops and observation', 'Identifying the training courses required for each role', 'Mapping the qualifications held by the current workforce'], correct: 1 },
      { id: 'cml-m2-q2', question: 'An effective performance criterion for a competence framework must be:', options: ['Aspirational — setting high standards that challenge the workforce', 'Observable and measurable — describing a specific behaviour that can be seen and judged against a standard', 'Comprehensive — covering all possible scenarios the worker might encounter', 'Regulatory — directly referencing the relevant regulation or standard'], correct: 1 },
    ],
  },
  {
    id: 'cml-m3',
    title: 'Assessment Methodologies',
    duration: '25 min',
    content: `
<h2>How Competence is Assessed</h2>
<p>Assessment is the core activity of any competence management system. It is the mechanism by which an organisation gathers evidence that an individual can perform to the required standard. Good assessment is reliable, valid, fair, and practical. Poor assessment gives a false picture of competence — dangerously overstating capability, or unfairly penalising capable workers.</p>

<h3>Assessment Methods</h3>
<p><strong>Observation</strong> is the most valid assessment method for practical competencies. The assessor watches the worker perform the task in their normal working environment and judges performance against the performance criteria. Observation provides direct evidence of actual capability. Its limitation is practicality — some tasks occur infrequently (emergency scenarios, abnormal operations) and cannot be observed in real time.</p>
<p><strong>Simulation and Scenario Assessment</strong> addresses the practicality limitation by recreating scenarios in a controlled environment. Simulator-based assessment (increasingly common for control room operators) allows assessment against emergency response and abnormal operation criteria that cannot be assessed in the live plant.</p>
<p><strong>Oral Questioning</strong> tests underpinning knowledge — whether the worker understands why they do what they do, not just how. Good oral questioning is targeted, open-ended, and probes understanding rather than testing recall of procedure text.</p>
<p><strong>Portfolio/Workplace Evidence</strong> — structured collection of evidence from the worker's normal activity: completed work records, reports, log entries, training records. Portfolio assessment is efficient but requires careful quality control to ensure evidence is authentic and current.</p>
<p><strong>Written Tests</strong> assess knowledge quickly and at scale but cannot assess practical competence. They are appropriate for knowledge elements of a framework but insufficient alone for safety-critical competencies.</p>

<h3>The Assessor Role</h3>
<p>Assessors must themselves be competent — both in the technical area they are assessing and in assessment methodology. In OPITO-aligned systems, assessors are typically required to hold a relevant assessor qualification (e.g., A1 Assessor Award / Level 3 Certificate in Assessment) and to be verified by an Internal Verifier. The quality of the assessor determines the quality of the competence data — a weak assessor produces meaningless assessment outcomes.</p>

<div class="terminology-box">
  <div class="term-title">Key Terminology — Assessment</div>
  <dl>
    <dt>Observation Assessment</dt><dd>Direct observation of a worker performing a task in the workplace, judged against performance criteria</dd>
    <dt>Internal Verifier (IV)</dt><dd>Person responsible for quality assuring assessors and assessment processes within the organisation</dd>
    <dt>A1 Award</dt><dd>Assessor qualification (now Level 3 Certificate in Assessing Vocational Achievement) demonstrating assessment competence</dd>
    <dt>Portfolio of Evidence</dt><dd>Structured collection of work-based evidence supporting a competence claim</dd>
    <dt>Validity</dt><dd>The degree to which an assessment actually measures what it is intended to measure</dd>
  </dl>
</div>
    `,
    quiz: [
      { id: 'cml-m3-q1', question: 'Observation is considered the most valid assessment method for practical competencies because:', options: ['It is the least expensive method requiring no specialist equipment', 'It provides direct evidence of actual capability in the real working environment', 'It can be used for all competencies including emergency response', 'Regulators give greater weight to observation evidence than other methods'], correct: 1 },
      { id: 'cml-m3-q2', question: 'Simulation and scenario assessment addresses which limitation of observation assessment?', options: ['The cost and time required for observation in the workplace', 'The inability to assess infrequently occurring scenarios (emergency response, abnormal operations) in real time', 'The subjective nature of observer judgement', 'The requirement for assessors to hold specific qualifications'], correct: 1 },
    ],
  },
  {
    id: 'cml-m4',
    title: 'Regulatory Requirements',
    duration: '20 min',
    content: `
<h2>The Regulatory Landscape for Competence</h2>
<p>Competence management in high-hazard industries is not voluntary best practice — it is a regulatory requirement. Leaders and managers who understand the regulatory framework can ensure their organisation's competence management system meets its legal obligations and protects both the workforce and the organisation.</p>
<p>The <strong>Health and Safety at Work Act 1974</strong> (Section 2) places a general duty on employers to provide adequate information, instruction, training, and supervision. This underpins all competence requirements.</p>
<p>The <strong>Offshore Installations (Safety Case) Regulations 2005</strong> require the Safety Case to demonstrate that persons on the installation are competent. OPITO's Approved Code of Practice on Competence Assurance provides detailed guidance on meeting this requirement.</p>
<p>The <strong>COMAH Regulations 2015</strong> require operators to provide information, training, and equipment to persons working on the site. The Major Accident Prevention Policy (MAPP) must demonstrate that competence management is part of the safety management system.</p>
<p><strong>CDM Regulations 2015</strong> (Construction Design and Management) require Principal Designers and Principal Contractors to ensure all duty holders are competent for their roles — critically important for energy sector projects and turnarounds.</p>

<div class="terminology-box">
  <div class="term-title">Key Terminology — Regulatory Requirements</div>
  <dl>
    <dt>HSWA 1974</dt><dd>Health and Safety at Work Act 1974 — primary UK health and safety legislation placing general competence duties on employers</dd>
    <dt>Approved Code of Practice (ACoP)</dt><dd>Quasi-legal guidance providing practical advice on meeting regulatory requirements — following ACoP creates a strong presumption of compliance</dd>
    <dt>CDM 2015</dt><dd>Construction Design and Management Regulations — require demonstrated competence for all duty holders on construction projects</dd>
    <dt>OPITO ACoP</dt><dd>OPITO Approved Code of Practice on Competence Assurance — the industry standard for offshore competence management</dd>
    <dt>Due Diligence</dt><dd>The level of care and precaution an organisation must demonstrate it took to meet its legal duty</dd>
  </dl>
</div>
    `,
    quiz: [
      { id: 'cml-m4-q1', question: 'The Health and Safety at Work Act 1974 (Section 2) requires employers to:', options: ['Certify all workers through OPITO before they start work', 'Provide adequate information, instruction, training, and supervision', 'Maintain competency records for 10 years after an employee leaves', 'Use only OPITO-approved training providers for safety training'], correct: 1 },
      { id: 'cml-m4-q2', question: 'An Approved Code of Practice (ACoP) is significant for compliance because:', options: ['Following an ACoP is legally mandatory — it has the same status as a regulation', 'Following an ACoP creates a strong presumption of compliance — non-compliance requires demonstrating an equally effective alternative approach', 'ACoPs are optional guidance that courts cannot use as evidence in prosecutions', 'ACoPs apply only to the specific industry for which they were written'], correct: 1 },
    ],
  },
  {
    id: 'cml-m5',
    title: 'Digital Tools for Competence Management',
    duration: '22 min',
    content: `
<h2>Technology in Competence Management</h2>
<p>The management of workforce competence at scale — across large organisations with thousands of workers in multiple locations — is not practically achievable with paper-based systems. Digital competence management systems have evolved significantly over the past decade, offering capabilities that were previously impossible.</p>

<h3>What Digital CMS Enables</h3>
<p><strong>Real-time competence visibility</strong> — managers can see instantly who is competent for what, which assessments are due, and what gaps exist. Previously this required hours of spreadsheet work; with a good digital system it is available on demand.</p>
<p><strong>Automated gap reporting</strong> — the system identifies workers with outstanding assessments, expired training records, or competencies not yet achieved, and generates reports or alerts automatically.</p>
<p><strong>Audit trail</strong> — all assessment records, evidence, and verification activities are stored with timestamps, creating the audit trail that regulators expect to see. Paper records are easily lost, misfiled, or damaged; digital records are searchable and durable.</p>
<p><strong>Integration with HR and training systems</strong> — modern CMS platforms integrate with HR databases (for personnel records) and Learning Management Systems (LMS) — providing a complete picture of what training has been completed and what competencies have been demonstrated.</p>

<h3>Platforms and Approaches</h3>
<p>Options range from purpose-built offshore competence management platforms (e.g., OPITO-approved CMS platforms used by major operators) to general-purpose HR and talent management systems configured for competence use. The choice depends on: organisation size, regulatory requirements, integration needs, and budget. Small organisations may start with structured spreadsheets, but this becomes unsustainable above approximately 100 workers.</p>
<p>Digital assessment tools — including mobile-based observation checklists (assessors completing assessments on tablets in the field) and e-portfolio platforms — have significantly improved the practicality of workplace assessment.</p>

<div class="terminology-box">
  <div class="term-title">Key Terminology — Digital CMS</div>
  <dl>
    <dt>LMS</dt><dd>Learning Management System — platform managing training content delivery, completion tracking, and certifications</dd>
    <dt>Digital CMS</dt><dd>Software platform managing competency frameworks, assessments, evidence, and workforce competence records</dd>
    <dt>Gap Analysis Report</dt><dd>Automated report from the CMS showing workers with outstanding, expired, or unachieved competencies</dd>
    <dt>e-Portfolio</dt><dd>Digital collection of assessment evidence — accessible online, shareable with verifiers, and automatically timestamped</dd>
    <dt>API Integration</dt><dd>Technical connection between the CMS and HR/payroll/training systems for data sharing without manual re-entry</dd>
  </dl>
</div>
    `,
    quiz: [
      { id: 'cml-m5-q1', question: 'A key advantage of digital competence management systems over paper-based systems is:', options: ['Digital systems are mandated by OPITO for all operators with more than 100 workers', 'Real-time competence visibility and automated gap reporting — not possible at scale with paper', 'Digital evidence is given greater legal weight than paper records in prosecution cases', 'Digital systems eliminate the need for internal verification'], correct: 1 },
      { id: 'cml-m5-q2', question: 'Integration between a CMS and an LMS enables:', options: ['Workers to complete their competency assessments online without an assessor', 'A complete picture of training completion and competence demonstration without manual data re-entry', 'Automated assessment generation based on training completion', 'Replacement of the verification function by automated quality checks'], correct: 1 },
    ],
  },
  {
    id: 'cml-m6',
    title: 'Implementation and Continuous Improvement',
    duration: '25 min',
    content: `
<h2>Implementing and Sustaining a Competence Management System</h2>
<p>Designing a competency framework is the relatively straightforward part. Implementing it — getting organisational buy-in, training assessors, conducting the initial baseline assessment of the entire workforce, and sustaining the system over time — is where most competence management initiatives succeed or fail.</p>

<h3>Implementation Challenges</h3>
<p><strong>Management commitment</strong> is the single most important success factor. A competence management system that is seen as an HR compliance exercise, driven by bureaucratic pressure rather than genuine concern for competence, will be implemented badly and maintained poorly. Leaders must understand and communicate that the system exists to identify and address real competence gaps — gaps that, in a high-hazard industry, can kill people.</p>
<p><strong>Assessor capacity</strong> — the initial baseline assessment of a large workforce is a significant resource commitment. Each assessment takes time; assessors must be released from operational duties; and assessment quality must be maintained. Organisations that underestimate this typically end up with superficial assessments and inflated competence records.</p>
<p><strong>Cultural resistance</strong> — experienced workers sometimes resist formal assessment, perceiving it as a challenge to their competence or status. Effective implementation addresses this through communication, involvement of experienced workers in framework development, and treating assessment as a collaborative process rather than an inspection.</p>

<h3>Continuous Improvement</h3>
<p>A competence management system that is designed once and never reviewed will become progressively less fit for purpose as the work changes, regulations evolve, and new technologies are introduced. Continuous improvement requires: periodic framework review (typically every 1–3 years), regular audit of assessment quality and records, analysis of incident data for competence-related root causes, and benchmarking against industry standards and best practice.</p>
<p>The link between competence assurance and incident investigation is critical. When an incident occurs, one of the first questions should be: was the worker competent for the task? If the CMS says "yes" but the incident reveals a significant capability gap, this is a failure of the assessment process — not just the individual. Root cause analysis must look at the quality of competence management, not just individual actions.</p>

<div class="terminology-box">
  <div class="term-title">Key Terminology — Implementation</div>
  <dl>
    <dt>Baseline Assessment</dt><dd>Initial assessment of the entire workforce against the framework to establish the starting competence position</dd>
    <dt>Assessor Calibration</dt><dd>Process of aligning multiple assessors to consistent standards — ensuring one assessor's "competent" means the same as another's</dd>
    <dt>Competence Gap</dt><dd>The difference between required competence (from the framework) and demonstrated competence (from assessment)</dd>
    <dt>Management of Change (for CMS)</dt><dd>Process for updating the framework when work activities, technologies, or regulations change</dd>
    <dt>Competence Data Quality</dt><dd>The reliability and accuracy of competence records — garbage in, garbage out — poor data quality undermines all decisions based on the system</dd>
  </dl>
</div>
    `,
    quiz: [
      { id: 'cml-m6-q1', question: 'The most common reason competence management system implementations fail is:', options: ['Insufficient budget for digital software platforms', 'Lack of genuine management commitment — the system is treated as an HR compliance exercise rather than a safety tool', 'Resistance from trade unions to any formal assessment of workers', 'OPITO approval processes taking too long to complete'], correct: 1 },
      { id: 'cml-m6-q2', question: 'Competence data quality is critical because:', options: ['OPITO inspectors check data quality during annual audits', 'Decisions about who is competent to perform safety-critical tasks are based on the data — poor data means incorrect decisions', 'Insurance policies require certified data accuracy standards', 'Digital CMS platforms automatically validate data quality'], correct: 1 },
    ],
  },
];

export const course5Assessment = Array.from({length: 60}, (_, i) => ({
  id: `cml-q${i+1}`,
  question: [
    'Competence assurance ensures that workers can perform their roles to a defined standard:',
    'The key distinction between training and competence is:',
    'The OPITO Approved Code of Practice on Competence Assurance is relevant to offshore operators because:',
    'Job Task Analysis (JTA) in competency framework design involves:',
    'A performance criterion in a competency framework must be:',
    'The most valid assessment method for practical competencies is:',
    'Simulation assessment is valuable because:',
    'An Internal Verifier (IV) in a competence system is responsible for:',
    'The Health and Safety at Work Act 1974 (Section 2) requires employers to:',
    'Following an Approved Code of Practice (ACoP) gives an organisation:',
    'Digital competence management systems primarily improve on paper systems by:',
    'A competence gap is defined as:',
    'Assessor calibration is important because:',
    'The Safety Case Regulations require operators to demonstrate:',
    'Continuous improvement of a CMS requires:',
    'Portfolio evidence in competence assessment must be verified to ensure it is:',
    'Oral questioning in competence assessment is primarily used to test:',
    'A baseline assessment in CMS implementation establishes:',
    'Management commitment is the most critical CMS success factor because:',
    'Linking incident investigation to the CMS allows:',
    'COMAH regulations require competence management as part of:',
    'Range statements in a competency framework define:',
    'The assessor qualification (A1 Award/Level 3 Certificate) demonstrates:',
    'Digital CMS integration with HR systems avoids:',
    'Units, elements, and performance criteria represent:',
    'Competence records must be maintained primarily for:',
    'Underpinning knowledge in a competency framework supports:',
    'The CDM Regulations 2015 require competence to be demonstrated by:',
    'Assessor capacity must be planned during CMS implementation because:',
    'A good performance criterion differs from a vague one in that:',
    'Why is workplace observation the preferred assessment method for safety-critical tasks?',
    'Simulator-based assessment is increasingly used for control room operators because:',
    'The verification function in a CMS quality assures:',
    'A competence management system must be updated when:',
    'Leading operators link CMS data to what other planning activity?',
    'e-Portfolio tools improve competence evidence quality by:',
    'Regulatory audit of a CMS typically examines:',
    'A "competency gap report" generated by a digital CMS shows:',
    'Who is typically responsible for assessing an individual\'s competence?',
    'The OPITO standards for competence assessment were developed because:',
    'Competence in a safety-critical role requires demonstration under what conditions?',
    'A framework review should occur when:',
    'Poor assessor calibration leads to:',
    'Worker resistance to formal competence assessment is best addressed by:',
    'A competence assurance system adds most value in the energy sector by:',
    'What is the difference between a qualification and competence?',
    'The CMS audit trail provides evidence for:',
    'A well-designed competency framework reduces training costs by:',
    'The Offshore Safety Directive (2013/30/EU) references competence in relation to:',
    'A key performance indicator for a competence management system would be:',
    'Competence management for contractors differs from employee management in that:',
    'In a risk-based approach to competence, higher-risk roles require:',
    'The role of the Line Manager in a competence management system is:',
    'An "authorised" or "appointed" person in an energy facility context means:',
    'Competence assurance supports operational discipline by:',
    'Digital learning (e-learning) in a CMS is best used for:',
    'The concept of "revalidation" in competence management means:',
    'A robust competence system reduces an organisation\'s legal liability by:',
    'Cross-industry competence frameworks (e.g., between O&G and wind) are being developed to:',
  ][i] || `Competence management question ${i+1}`,
  options: [
    ['Only when specifically requested by a regulator', 'Consistently and reliably in their actual work environment, not just after attending training', 'As demonstrated once during initial employment', 'Whenever they feel confident to do so'],
    ['Training costs more than competence assessment', 'Training is what the organisation provides; competence is the demonstrated ability to perform — the gap between them is where accidents happen', 'Competence is required by law; training is voluntary', 'Training applies to new starters; competence to experienced workers'],
    ['It provides the industry standard for structuring competence assurance systems that meet Safety Case requirements', 'It mandates the specific software platforms that must be used', 'It replaces regulatory requirements with industry guidance', 'It applies only to OPITO-approved training providers'],
    ['Reviewing job descriptions from similar organisations', 'Systematically decomposing a role into tasks with observable performance standards through expert workshops', 'Identifying the qualifications held by current workers in each role', 'Mapping training courses to role requirements'],
    ['Observable, measurable, and achievable', 'Aspirational and challenging to motivate high performance', 'Referenced to the relevant regulation or standard', 'Comprehensive enough to cover all possible scenarios'],
    ['Written tests — they assess knowledge at scale efficiently', 'Observation — it provides direct evidence of actual capability in the real working environment', 'Oral questioning — it tests understanding beyond mere recall', 'Portfolio evidence — it covers the widest range of activities'],
    ['It allows assessment of emergency and abnormal scenarios that cannot be observed in normal operation', 'It is cheaper than workplace observation', 'Simulators provide a more realistic environment than the real plant', 'It eliminates the need for qualified assessors'],
    ['Performing assessments alongside the line assessor', 'Quality assuring assessors and assessment processes — ensuring consistent, valid, and reliable assessments', 'Developing the competency framework units and elements', 'Signing off on worker competency certificates'],
    ['Certify all workers through an approved body before starting work', 'Provide adequate information, instruction, training, and supervision for all employees', 'Maintain detailed competency records for a minimum of 10 years', 'Use OPITO-approved training providers for all safety training'],
    ['Mandatory compliance — the ACoP has the same legal force as the regulation itself', 'A strong presumption of legal compliance — non-compliance requires demonstrating an equally effective alternative', 'Protection from prosecution only for minor breaches of the regulation', 'Exemption from HSE inspections for facilities that follow the ACoP'],
    ['They are legally required in place of paper after 2020', 'Providing real-time visibility, automated gap reporting, and a durable audit trail impossible at scale with paper', 'Eliminating the need for assessors through automated competency testing', 'Reducing the complexity of the competency framework'],
    ['The difference between the qualification an employer requires and what the worker holds', 'The difference between required competence (from the framework) and demonstrated competence (from assessment)', 'A performance issue identified during an annual appraisal', 'Any training course not yet completed'],
    ['It ensures all assessors have the same qualifications', 'It aligns assessors to consistent standards — ensuring consistent and fair assessments across the workforce', 'It reduces the number of assessors needed by eliminating outliers', 'It satisfies the OPITO verification requirement'],
    ['All workers hold a minimum of BOSIET certification', 'All persons on the installation are competent for their roles', 'An annual training plan has been submitted to the HSE', 'The safety management system has been independently audited'],
    ['Annual replacement of the CMS platform with a newer version', 'Periodic framework review, audit of assessment quality, incident analysis for competence root causes, and benchmarking', 'Increasing the number of performance criteria in each unit', 'Annual retraining of all workers regardless of current competence'],
    ['Obtained from a recognised training provider', 'Authentic, current, and actually the work of the individual being assessed', 'Supported by a written statement from the worker\'s line manager', 'Electronic rather than paper-based'],
    ['Knowledge recall — whether workers have memorised the relevant procedures', 'Underpinning understanding — whether workers comprehend why they do what they do, not just the procedure steps', 'Overall performance against all elements of the competency framework', 'Communication skills relevant to the worker\'s role'],
    ['The development plan for closing all competence gaps', 'The starting competence position of the entire workforce against the framework', 'The budget required to implement the competency management system', 'Which assessors are qualified to assess each role'],
    ['Without it the system is treated as compliance paperwork rather than a genuine safety tool, leading to poor implementation', 'Without it the digital system cannot be procured', 'Without it the HSE will not approve the Safety Case', 'Without it workers will refuse to participate in assessment'],
    ['Identifying which training programmes are most effective', 'Establishing whether competence gaps in the system contributed to the incident — revealing assessment quality failures', 'Automatically generating incident reports linked to competency gaps', 'Avoiding regulatory liability by demonstrating the system was working'],
    ['The Safety Report', 'The Major Accident Prevention Policy (MAPP) and associated safety management system', 'The Emergency Response Plan', 'The Environmental Management System'],
    ['The qualification level required to hold the competence', 'The conditions — normal, abnormal, and emergency — under which competence must be demonstrated', 'The training courses that develop the competence', 'The frequency of assessment required for the competence'],
    ['The assessor has a relevant technical qualification in the discipline', 'The assessor is competent in both the technical area and in assessment methodology', 'The assessor has passed an OPITO-approved examination', 'The assessor has been employed in the role for more than 5 years'],
    ['Manual updating of worker records when HR changes occur', 'Data duplication, manual re-entry errors, and time lost keeping separate systems synchronised', 'The need to maintain separate competency records for contractors', 'Redundant assessment requirements across different systems'],
    ['The three levels of a digital competence management platform', 'The hierarchical structure of most competency frameworks — from broad work areas down to specific observable behaviours', 'The three stages of competence development (novice, practitioner, expert)', 'The three regulatory frameworks governing competence in the UK energy sector'],
    ['Providing training course completion certificates to workers on request', 'Regulatory audit and legal due diligence — demonstrating the organisation meets its competence obligations', 'Annual reporting to OPITO on the state of the competence management system', 'Internal appraisal and performance management only'],
    ['The qualifications needed to satisfy the regulatory minimum', 'Competent performance — knowing why procedures exist enables workers to apply judgement in novel situations', 'The behavioural competencies required for team working', 'The range of conditions in which the competence applies'],
    ['Construction site workers only — CDM applies to the built environment, not operations', 'All duty holders — Principal Designer, Principal Contractor, contractors, and workers — for their CDM roles', 'Senior management only — CDM requires board-level competence', 'Engineers and designers who specify safety systems in the design'],
    ['Insufficient assessors is the most common cause of superficial, invalid assessments', 'OPITO requires a minimum assessor-to-worker ratio before approving a CMS', 'Training assessors is the most expensive element of CMS implementation', 'Assessors must be employed before the framework can be designed'],
    ['It specifies the qualification the worker must hold rather than their behaviour', 'It describes a specific, observable behaviour that can be judged against a clear standard — unlike vague criteria that cannot be assessed', 'It covers every possible scenario the worker might encounter', 'It is simpler, requiring less time for assessors to evaluate'],
    ['Observation generates more assessment documentation than other methods', 'It provides direct evidence of actual performance capability in real working conditions rather than test-taking ability', 'Observation is cheaper than simulation or written tests', 'Observation is the only method accepted by OPITO for safety-critical competencies'],
    ['Control room assessment of normal operations is more straightforward than emergency response', 'It allows assessment of emergency responses that cannot be realistically observed in a live plant', 'Simulator evidence is given greater legal weight than observation evidence', 'Simulators are cheaper to operate than real plant assessment'],
    ['Assessment records for personal data protection compliance', 'The quality and consistency of assessments across the organisation — ensuring the CMS produces valid data', 'The technical accuracy of the competency framework', 'Training records maintained by the LMS'],
    ['Work processes change, new technologies are introduced, or regulatory requirements evolve', 'The assessment records have been maintained for 5 years and a new cycle begins', 'A new cohort of workers joins the organisation', 'A major incident occurs, triggering an automatic framework review'],
    ['Resource planning and personnel deployment — ensuring competent people are in the right roles', 'Quality assurance for training providers', 'Environmental reporting to regulators', 'Annual budget setting for the training function'],
    ['Providing standardised templates that ensure consistent evidence quality and timestamps', 'Reducing the time assessors spend reviewing evidence', 'Eliminating the need for internal verification of evidence', 'Automatically certifying competencies when evidence is uploaded'],
    ['Only the qualifications listed in the worker\'s personnel file', 'Framework design, assessment records, evidence quality, verifier activity, and gap closure rates', 'Only incidents and near misses linked to competence failures', 'The software platform version and data security controls'],
    ['All workers who have not completed their training plan for the year', 'Workers with outstanding, expired, or unachieved competencies requiring action', 'Workers who have exceeded the maximum time between assessments', 'Workers who have changed roles since their last assessment'],
    ['The worker\'s line manager, who observes performance daily', 'A trained assessor with both technical competence in the area and assessment methodology qualification', 'An external consultant independent of the organisation', 'The HSSE team as part of the safety management system audit'],
    ['The oil and gas industry had no formal training standards before OPITO was created', 'Inconsistent training quality across the industry created safety risks — OPITO standards provide a consistent floor', 'OPITO certification is legally mandatory under the Offshore Safety Directive', 'International operators required a common standard for North Sea operations'],
    ['In training environments only — real work performance is separate', 'Under both normal operating conditions AND abnormal/emergency scenarios within defined range statements', 'Only during the initial assessment — after that performance is assumed to be maintained', 'At a level exceeding the minimum standard, to allow for performance variation'],
    ['Every 5 years as a regulatory requirement', 'When work activities change, regulations are updated, technology changes, or incident data reveals framework gaps', 'When the digital CMS platform is upgraded', 'When more than 20% of the workforce turns over'],
    ['Inconsistent and unfair assessments — the same performance may be assessed as competent by one assessor and not by another', 'Higher overall competence pass rates as assessors become more generous', 'More frequent assessment of borderline workers', 'Increased administrative burden for the internal verifier'],
    ['Involving experienced workers in framework development and communicating the purpose clearly', 'Making assessment optional for workers with more than 5 years experience', 'Using external assessors so line managers do not have to assess their own team', 'Reducing the number of performance criteria to make assessment less burdensome'],
    ['Reducing insurance premiums by demonstrating regulatory compliance', 'Providing evidence that people assigned to safety-critical tasks have demonstrated the ability to perform them — preventing the conditions for major accidents', 'Improving employee satisfaction through structured development', 'Meeting ISO certification requirements'],
    ['A qualification confirms attendance and knowledge testing; competence is demonstrated ability to perform the task in practice', 'They are equivalent — a relevant qualification is sufficient evidence of competence', 'Qualifications are more rigorous than competence assessments', 'Qualifications are regulatory requirements; competence is an industry standard'],
    ['Regulatory inspection compliance', 'Due diligence — demonstrating the organisation took reasonable steps to ensure worker competence', 'Annual training reports to OPITO', 'Employee rights protection in performance management'],
    ['Targeting training to actual gaps rather than requiring all workers to attend all courses regardless of competence', 'Eliminating the need for practical assessment by ensuring workers complete the required training first', 'Providing evidence that satisfies all assessment requirements', 'Reducing the number of assessors needed'],
    ['All offshore installations operating under the Offshore Safety Directive must demonstrate independent well examination competence', 'Well operators must demonstrate that personnel involved in major hazard management have the required competences', 'Directive requires competency frameworks to be submitted to national regulators', 'All workers on UKCS installations must hold OPITO-certified competencies'],
    ['Percentage of training budget spent on competence activities', 'Percentage of workforce with current, valid competency assessments in safety-critical areas', 'Number of OPITO certifications held by the workforce', 'Frequency of competency-related findings in safety audits'],
    ['Contractors are not subject to competence requirements — only direct employees', 'Operator must verify contractor company CMS meets required standards AND individual contractor workers are competent', 'Contractors use their own framework which the operator accepts without verification', 'Contractors are competence-assessed annually by the operator during audit'],
    ['The same framework and assessment frequency as lower-risk roles', 'More rigorous framework elements, more frequent assessment, and potentially independent verification', 'Higher qualification requirements but the same assessment process', 'Simulator-only assessment rather than workplace observation'],
    ['Conducting all assessments for their team members', 'Supporting assessment, communicating the system purpose, ensuring team members have time for assessment activities, and acting on gaps', 'Owning the competency framework for their discipline', 'Signing off on all permits to work as demonstration of competence'],
    ['A worker who has obtained a relevant qualification', 'A worker who has been formally assessed and approved to perform a specific safety-critical task or hold a specific safety authority', 'Any worker with more than 5 years experience in the role', 'A worker who has completed all training in the CMS learning plan'],
    ['Ensuring workers follow procedures rather than developing shortcuts', 'Ensuring workers understand not just what to do but why — enabling consistent safe performance even in novel situations', 'Requiring regular procedure review and sign-off from competent workers', 'Linking performance management to competency assessment outcomes'],
    ['Underpinning knowledge and knowledge recall — preparation for practical assessment or qualification examinations', 'Practical skills assessment for safety-critical competencies', 'All elements of the competency framework across all disciplines', 'Verification of assessor quality and calibration'],
    ['The process of reassessing previously competent workers after a period of absence or role change', 'Annual recertification of all workers regardless of current performance', 'Reviewing the competency framework on a fixed cycle', 'Recalibrating assessors after changes to the framework'],
    ['Demonstrating that all workers hold formal qualifications', 'Demonstrating reasonable diligence in assessing, recording, and addressing competence — reducing exposure to prosecution and civil liability', 'Obtaining independent certification of the CMS by an approved body', 'Ensuring all competency gaps are closed within 90 days'],
    ['Replace sector-specific frameworks with universal standards', 'Enable recognition of competencies gained in one sector (e.g., O&G) as partial credit toward certification in another (e.g., wind)', 'Simplify regulatory requirements by reducing the number of frameworks', 'Allow OPITO to certify wind industry workers directly'],
  ][i] || ['A', 'B', 'C', 'D'],
  correct: [1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1][i] || 0,
}));
