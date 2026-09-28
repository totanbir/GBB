export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Hospitality' | 'Custom Millwork' | 'Commercial';
  location: string;
  year: string;
  image: string;
  clientType: string;
  summary: string;
  challenge: string;
  solution: string;
  craftDetails: string[];
  scope: string;
  duration: string;
  testimonialQuote?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  description: string;
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  project: string;
  year: string;
}

export const COMPANY_INFO = {
  name: 'Global Business Brand',
  fullName: 'Kova Architectural Woodwork & Interiors',
  tagline: 'Precision millwork, bespoke joinery, and architectural interior fabrication.',
  foundedYear: '2014',
  address: 'DAG NO.2697, MADANI AVENU (100 FEET ROAD) SAEED NAGAR, VATARA, DHAKA-1212',
  phone: '+88 01794-186278',
  email: 'ferdous@itrade-gbb.com',
  workingHours: 'Saturday – Thursday, 10:00 AM – 6:00 PM EST',
  ceo: {
    name: 'Ferdous Haque',
    title: 'Founder & CEO',
    credentials: 'Manpower Recuitment Expert',
    photo: '/src/assets/images/ceoimg.png',
    message:
      'Our mission is to connect talented professionals with trusted employers and create meaningful career opportunities across the world. We believe successful recruitment is built on trust, professionalism, transparency, and integrity. We are committed to providing reliable recruitment solutions that meet the needs of both employers and candidates. Our team works diligently to identify the right talent, support candidates throughout their recruitment journey, and build strong, long-term relationships with our international partners. \n As the global workforce continues to evolve, we remain focused on delivering quality service, embracing innovation, and creating opportunities that make a positive difference in people’s careers.\nThank you for trusting Global Business Brand. We look forward to building a stronger global workforce together',
    signature: 'Ferdous Haque',
  },
  mission:
    'To connect talented people with the right global opportunities while providing trusted, ethical, and professional recruitment solutions to employers worldwide.',
  vision:
    'To become a trusted global recruitment leader, connecting people and businesses through opportunities that create lasting success',
  stats: [
    { value: '140+', label: 'Delivered Projects', context: 'Across NY, CT & Hudson Valley' },
    { value: '100%', label: 'FSC-Certified Timber', context: 'Sustainably sourced hardwoods' },
    { value: '12 Yrs', label: 'Master Craftsmanship', context: 'Dedicated studio workshop' },
    { value: '4', label: 'AIA & Craft Recognitions', context: 'Design & fabrication excellence' },
  ],
};

export const SERVICES: Service[] = [
  {
    id: 'millwork',
    number: '01',
    title: 'Architectural Millwork & Wall Systems',
    shortDesc: 'Integrated timber slat paneling, acoustic baffles, and structural wall clad installations.',
    description: 'We fabricate continuous architectural timber surfaces designed to integrate flush with surrounding drywall, concealed pivot doors, and hidden ambient LED channels.',
    deliverables: ['Custom acoustic wood slat assemblies', 'Concealed pivot doors & flush jambs', 'Curved architectural wall paneling', 'Integrated brass & steel reveal details'],
  },
  {
    id: 'cabinetry',
    number: '02',
    title: 'Bespoke Residential Cabinetry',
    shortDesc: 'Hand-tailored kitchen, wardrobe, and pantry millwork engineered to millimeter tolerances.',
    description: 'Every cabinet box is built from solid hardwood and premium Baltic birch plywood, hand-fitted with concealed German hardware and finished in non-toxic matte hand-rubbed oils.',
    deliverables: ['Full-height walk-in wardrobe systems', 'Custom rift-sawn oak kitchen packages', 'Integrated appliance cladding', 'Bookmatched veneer grain sequencing'],
  },
  {
    id: 'hospitality',
    number: '03',
    title: 'Commercial & Hospitality Fit-Outs',
    shortDesc: 'High-durability feature bars, dining banquettes, host stations, and boutique retail showcases.',
    description: 'Designed for rigorous public use without sacrificing artisanal refinement. We collaborate directly with interior architects, hospitality operators, and general contractors.',
    deliverables: ['Curved fluted bar fronts & zinc/brass tops', 'Custom leather banquette seating bases', 'Heavy-traffic retail shelving & pedestals', 'Compliance-certified commercial millwork'],
  },
  {
    id: 'prototyping',
    number: '04',
    title: 'Material Engineering & Prototyping',
    shortDesc: 'Physical wood finish sample development, structural joinery mock-ups, and 3D CAD modeling.',
    description: 'Before cutting valuable hardwood stock, our technical draftsmen produce detailed shop submittals and full-scale 1:1 joinery mock-ups to confirm ergonomics and textures.',
    deliverables: ['Custom stain & hand-patinated metal samples', 'Full architectural shop drawing sets (Revit/CAD)', '1:1 connection & corner mockups', 'Sustainably harvested timber provenance certificates'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'tribeca-loft',
    title: 'The Tribeca Loft Residence',
    category: 'Residential',
    location: 'Tribeca, New York',
    year: '2025',
    image: '/src/assets/images/project_residential_loft_1790154596200.jpg',
    clientType: 'Private Homeowner & Studio DB Architects',
    summary: 'Comprehensive millwork envelope including continuous American Black Walnut acoustic cladding, floating credenzas, and concealed pocket door systems across 3,200 sq ft.',
    challenge: 'Aligning continuous horizontal walnut grain across a 42-foot span with 14 concealed access doors while accommodating heritage cast-iron column tolerances.',
    solution: 'Engineered a secondary uncoupled subframe with micro-adjustable mounting clips and hand-sequenced veneers from two single Pennsylvania walnut logs.',
    craftDetails: [
      'American Black Walnut (Veneer & Solid)',
      'Ultra-matte 5% Sheen Polyurethane Finish',
      'Concealed Sugatsune 3-way Adjustable Hinges',
      'Integrated Warm Dimming 2700K LED Channels',
    ],
    scope: 'Living Room Cladding, Floating Credenza, Primary Suite Millwork',
    duration: '16 Weeks Fabrication & Installation',
    testimonialQuote: {
      quote: 'Kova’s precision transformed what could have been a challenging historical loft into a masterpiece of continuous timber geometry. The seam alignment is immaculate.',
      author: 'Evelyn St. Claire',
      role: 'Principal Architect, St. Claire Design Studio',
    },
  },
  {
    id: 'kessel-bar',
    title: 'Kessel Social House & Bar',
    category: 'Hospitality',
    location: 'Williamsburg, Brooklyn',
    year: '2024',
    image: '/src/assets/images/project_hospitality_bar_1790154606940.jpg',
    clientType: 'Kessel Hospitality Group',
    summary: 'A 28-foot curved white oak bar featuring hand-milled fluted staves, patinated brass kick rails, integrated spill wells, and matching backbar bottle displays.',
    challenge: 'Ensuring structural stability for a radiused bar top subjected to heavy nightly hospitality traffic and cocktail acid exposure without visible fasteners.',
    solution: 'Fabricated internal structural steel frames clad in rift-cut white oak treated with marine-grade ceramic catalyzed finish resistant to citrus and spirits.',
    craftDetails: [
      'Rift-sawn White Oak (Quartered)',
      'Acid-resistant Catalyzed Conversion Varnish',
      'Aged Brushed Brass Footrail & Inlays',
      'Custom Stainless Steel Ergonomic Speed Rails',
    ],
    scope: 'Main Feature Bar, Backbar Architecture, Host Podium & 8 Banquettes',
    duration: '10 Weeks Rapid Turnaround',
    testimonialQuote: {
      quote: 'Sixteen months into operation and the bar still looks like it was installed yesterday. Their knowledge of hospitality durability is peerless.',
      author: 'Marcus Vance',
      role: 'Founding Partner, Kessel Hospitality Group',
    },
  },
  {
    id: 'west-village-kitchen',
    title: 'West Village Minimalist Kitchen',
    category: 'Custom Millwork',
    location: 'West Village, Manhattan',
    year: '2025',
    image: '/src/assets/images/project_bespoke_kitchen_1790154617619.jpg',
    clientType: 'Private Residence & Studio V Architect',
    summary: 'A warm minimalist culinary interior featuring bespoke quarter-sawn white oak cabinetry with integrated recessed J-pull profiles and bookmatched Calacatta Viola marble integration.',
    challenge: 'Maximizing ergonomic vertical storage within a compact historic townhouse layout without creating visually bulky cabinetry.',
    solution: 'Designed ceiling-height flush cabinets with concealed Blum servo-drive motorized push-open systems and interior solid maple dovetail drawers.',
    craftDetails: [
      'Quarter-sawn White Oak & Solid Hard Rock Maple',
      'Organic Natural Hardwax Oil Finish',
      'Full Blum Movento Undermount Runners',
      'Integrated Sub-Zero / Miele Appliance Cladding',
    ],
    scope: 'Custom Kitchen Suite, Island Cladding, Hidden Butler Pantry',
    duration: '12 Weeks Fabrication',
    testimonialQuote: {
      quote: 'The touch and feel of the timber reveals the hand of true artisans. Every drawer closes like a luxury vault.',
      author: 'Sophia Chen',
      role: 'Homeowner, West Village',
    },
  },
  {
    id: 'hudson-study',
    title: 'The Hudson Valley Library & Study',
    category: 'Residential',
    location: 'Rhinebeck, NY',
    year: '2024',
    image: '/src/assets/images/project_library_study_1790154628895.jpg',
    clientType: 'Private Residence',
    summary: 'Two-story private home library crafted from dark-stained native ash, featuring integrated reading banquettes, secret bookcase doorway, and rolling brass ladder.',
    challenge: 'Designing a 14-foot vertical library wall capable of holding 2,400 hardbound art books without shelf deflection over time.',
    solution: 'Constructed steel-reinforced solid ash shelf cores wrapped in select native ash timber with mortise-and-tenon interlocking joinery.',
    craftDetails: [
      'Locally Sourced Dark Stained Ash',
      'Hand-applied Satin Lacquer Finish',
      'Custom Track & Solid Brass Rolling Ladder',
      'Hidden Pivot Bookcase Access to Wine Cellar',
    ],
    scope: 'Two-Story Library, Reading Nook, Integrated Study Desk',
    duration: '14 Weeks Crafting',
    testimonialQuote: {
      quote: 'Kova built our family heirloom. The secret doorway works seamlessly and the ladder moves with a quiet, satisfying glide.',
      author: 'David & Claire Sterling',
      role: 'Private Residence Commission',
    },
  },
  {
    id: 'studio-workshop',
    title: 'The Brooklyn Workshop & Fabrication Hub',
    category: 'Commercial',
    location: 'Red Hook, Brooklyn',
    year: '2023',
    image: '/src/assets/images/hero_craft_workshop_1790154582906.jpg',
    clientType: 'Kova Studio Flagship Facility',
    summary: 'Our 6,500 sq ft state-of-the-art timber fabrication studio combining heavy CNC 5-axis milling with traditional hand-joinery workbenches and dust-free finishing booths.',
    challenge: 'Creating an open-concept workshop where clients and architects can safely inspect full-scale mockups in natural light alongside active production.',
    solution: 'Partitioned acoustic glass galleries overlooking the timber staging racks, featuring an expansive live-edge conference table and material library.',
    craftDetails: [
      'Reclaimed Douglas Fir Structural Beams',
      'Industrial Dust Extraction (HEPA certified)',
      'Dedicated Climate-Controlled Curing Room',
      'Curated 200+ Hardwood & Veneer Specimen Library',
    ],
    scope: 'Studio Headquarters, Client Design Suite, Production Floor',
    duration: 'Completed Fall 2023',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'In our 18 years designing high-end Manhattan residences, we have rarely collaborated with a millwork studio that delivers shop drawings with such meticulous engineering and zero on-site excuses.',
    author: 'Julian Mercer, AIA',
    role: 'Partner',
    organization: 'Mercer & Hayes Architecture',
    project: 'SoHo Penthouse & Greenwich Estate',
    year: '2025',
  },
  {
    id: 'test-2',
    quote: 'Kova met our aggressive 8-week restaurant opening deadline without sacrificing a millimeter of precision. The fluted timber bar became the signature photo of our brand.',
    author: 'Elena Rostova',
    role: 'Design Director',
    organization: 'Apex Hospitality Partners',
    project: 'Kessel Social House',
    year: '2024',
  },
  {
    id: 'test-3',
    quote: 'Their deep respect for wood grain, sustainable forestry, and joinery mechanics makes them our absolute first choice for bespoke architectural interiors.',
    author: 'Arthur Vance',
    role: 'Senior Project Manager',
    organization: 'Nordic Craft Development',
    project: 'Hudson Valley Estate',
    year: '2024',
  },
];

export const WORK_PROCESS = [
  {
    step: '01',
    title: 'Sourcing',
    description: 'Attracting qualified talent and matching them with the right employers through our powerful recruitment network.',
  },
  {
    step: '02',
    title: 'Medical',
    description: 'Professional medical examinations carried out at approved healthcare centers.',
  },
  {
    step: '03',
    title: 'Police Clearance',
    description: 'Facilitating official security clearance through the relevant authorities.',
  },
  {
    step: '04',
    title: 'Biometric',
    description: 'Ensuring proper completion of fingerprinting and biometric identification procedures.',
  },
  {
    step: '05',
    title: 'Stamping',
    description: 'We review your floor plans, material wishes, and site dimensions to define exact tolerances, budget guidelines, and aesthetic scope.',
  },
  {
    step: '06',
    title: 'Training',
    description: 'Our draftsmen generate full shop submittals and finish samples (stains, sheen levels, edge reveals) for client and architect sign-off.',
  },
  {
    step: '07',
    title: 'Manpower',
    description: 'Each piece is cut, joined, bookmatched, and hand-finished in our Brooklyn workshop with dry pre-assembly checks before shipping.',
  },
  {
    step: '08',
    title: 'Ticketing/Flight',
    description: 'Our own in-house master carpenters execute installation on site, ensuring seamless integration with existing stone, metal, and plaster.',
  },
  
];
