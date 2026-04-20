// ============================================================
// Machinery Exchange — all site content
// ============================================================

export const business = {
  name: 'Machinery Exchange',
  shortName: 'ME',
  tagline: 'Earthmoving Equipment Specialists — Since 1954.',
  established: 1954,
  logo: '/logo.png',
  phone: '+263 24 2447180',
  whatsapp: '+263242447180',
  email: 'info@machinery-exchange.com',
  address: '5 Martin Drive, Harare, Zimbabwe',
  city: 'Harare',
  country: 'Zimbabwe',
  coords: { lat: -17.8466, lng: 31.0432 },
  mapsEmbed:
    'https://www.google.com/maps?q=5+Martin+Drive,+Harare,+Zimbabwe&output=embed',
  hours: {
    weekdays: '07:30 – 17:00',
    saturday: '08:00 – 13:00',
    sunday: 'Closed',
  },
  rating: 4.5,
  reviewCount: 59,
  googleBusinessUrl: 'https://www.google.com/maps',
};

// ============================================================
// HERO
// ============================================================
export const hero = {
  eyebrow: '// EST. 1954 · HARARE',
  headline: 'Built for the ground beneath',
  headlineAccent: 'Zimbabwe.',
  sub: 'Seventy years supplying, renting, rebuilding and servicing the heavy iron that moves this country — from the deep pits of the Great Dyke to the tar of every trunk road between Beitbridge and Chirundu.',
  stats: [
    { value: '70+', label: 'Years in service' },
    { value: '2,400+', label: 'Units placed' },
    { value: '12', label: 'OEM brands' },
    { value: '24/7', label: 'Breakdown support' },
  ],
  image:
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1800&q=80',
  imageAlt: 'Yellow tracked excavator at a construction site',
  ctaPrimary: { label: 'Browse Equipment', to: '/equipment' },
  ctaSecondary: { label: 'Request a Quote', to: '/contact' },
};

// ============================================================
// BRANDS CARRIED (OEM partners)
// ============================================================
export const brands = [
  'SHANTUI',
  'HITACHI',
  'WIRTGEN',
  'ROKBAK',
  'BOBCAT',
  'CUMMINS',
  'WEICHAI',
  'SINO PARTS',
  'ITR',
  'OEM',
];

// ============================================================
// EQUIPMENT CATEGORIES (8)
// ============================================================
export const equipmentCategories = [
  {
    slug: 'excavators',
    name: 'Excavators',
    icon: 'Excavator',
    count: 18,
    description:
      'Tracked and wheeled excavators from 2-ton mini units to 50-ton heavy diggers. Shantui and Hitachi frames built for hard rock and deep trench work.',
    image:
      'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'loaders',
    name: 'Wheel Loaders',
    icon: 'Tractor',
    count: 12,
    description:
      'Front-end loaders from 3m³ yard machines to 6m³ quarry workhorses. High-lift arms, bolt-on wear packages, and cabs tuned for long African shifts.',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'drills',
    name: 'Drill Rigs',
    icon: 'Wrench',
    count: 6,
    description:
      'Surface and underground drill rigs for blasthole, exploration, and ground engineering. Parts and service support across the Great Dyke belt.',
    image:
      'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'dump-trucks',
    name: 'Dump Trucks',
    icon: 'Truck',
    count: 14,
    description:
      'Articulated dump trucks (ADTs) and rigid haulers — 25-ton to 45-ton payloads. Rokbak and Shantui chassis with OEM-warrantied drivelines.',
    image:
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'crushers',
    name: 'Crushers',
    icon: 'HardHat',
    count: 8,
    description:
      'Jaw, cone and impact crushers for quarry and aggregate production. Mobile tracked plants and static lines with onsite commissioning.',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'generators',
    name: 'Generators',
    icon: 'Lightning',
    count: 20,
    description:
      'Cummins-powered gensets from 15 kVA standby units to 1,250 kVA prime-power plants. Containerised, silenced and load-bank tested.',
    image:
      'https://images.unsplash.com/photo-1487875961445-47a00398c267?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'compressors',
    name: 'Compressors',
    icon: 'Fan',
    count: 10,
    description:
      'Portable and stationary air compressors for drilling, sandblasting and workshop duty. Service-exchange airends and full rebuild capability.',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'spare-parts',
    name: 'Spare Parts',
    icon: 'Gear',
    count: 4200,
    description:
      'Genuine OEM, ITR undercarriage, Sino filters, Weichai drivelines. Same-day parts counter in Harare, countrywide courier, 4,200+ line items in stock.',
    image:
      'https://images.unsplash.com/photo-1609205069941-b25e84583cc6?auto=format&fit=crop&w=1200&q=80',
  },
];

// ============================================================
// FEATURED EQUIPMENT (12 units)
// ============================================================
export const featuredEquipment = [
  {
    slug: 'shantui-sd22',
    brand: 'Shantui',
    model: 'SD22 Dozer',
    category: 'Bulldozers',
    categorySlug: 'loaders',
    keySpec: '162 kW · 23.4 tonnes',
    tagline: 'Workhorse crawler dozer for road builders and mine strippers.',
    specs: [
      { label: 'Engine Power', value: '162 kW (217 hp)' },
      { label: 'Operating Weight', value: '23,400 kg' },
      { label: 'Blade Capacity', value: '6.4 m³' },
      { label: 'Track Gauge', value: '2,000 mm' },
    ],
    image:
      'https://images.unsplash.com/photo-1534171472267-19d28c9e5daa?auto=format&fit=crop&w=1200&q=80',
    condition: 'New · In Stock',
    status: 'available',
  },
  {
    slug: 'hitachi-zx470',
    brand: 'Hitachi',
    model: 'ZX470LC-5G',
    category: 'Excavators',
    categorySlug: 'excavators',
    keySpec: '345 kW · 47 tonnes',
    tagline: 'Long-reach heavy excavator for open-cast mining and bulk earthworks.',
    specs: [
      { label: 'Engine Power', value: '257 kW (345 hp)' },
      { label: 'Operating Weight', value: '47,000 kg' },
      { label: 'Bucket Capacity', value: '2.5 m³' },
      { label: 'Max Dig Depth', value: '7.3 m' },
    ],
    image:
      'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=1200&q=80',
    condition: 'New · Arriving Q2',
    status: 'incoming',
  },
  {
    slug: 'rokbak-rA40',
    brand: 'Rokbak',
    model: 'RA40 ADT',
    category: 'Dump Trucks',
    categorySlug: 'dump-trucks',
    keySpec: '37-tonne payload',
    tagline: 'Articulated hauler engineered for haul roads the rain forgot.',
    specs: [
      { label: 'Payload', value: '38,000 kg' },
      { label: 'Engine', value: 'Scania DC13' },
      { label: 'Engine Power', value: '331 kW (444 hp)' },
      { label: 'Body Capacity', value: '23.3 m³' },
    ],
    image:
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    condition: 'New · In Stock',
    status: 'available',
  },
  {
    slug: 'shantui-sl50',
    brand: 'Shantui',
    model: 'SL50W Loader',
    category: 'Wheel Loaders',
    categorySlug: 'loaders',
    keySpec: '162 kW · 5-tonne bucket',
    tagline: 'Five-ton wheel loader — quarry-proven, fleet-economic.',
    specs: [
      { label: 'Engine Power', value: '162 kW (217 hp)' },
      { label: 'Rated Load', value: '5,000 kg' },
      { label: 'Bucket Capacity', value: '3.0 m³' },
      { label: 'Breakout Force', value: '170 kN' },
    ],
    image:
      'https://images.unsplash.com/photo-1590496794008-383c8070b257?auto=format&fit=crop&w=1200&q=80',
    condition: 'New · In Stock',
    status: 'available',
  },
  {
    slug: 'wirtgen-w200',
    brand: 'Wirtgen',
    model: 'W 200 Cold Milling Machine',
    category: 'Road Building',
    categorySlug: 'crushers',
    keySpec: '2,000 mm cutting width',
    tagline: 'Cold planer for precision road rehabilitation and highway resurfacing.',
    specs: [
      { label: 'Cutting Width', value: '2,000 mm' },
      { label: 'Cutting Depth', value: '0 – 330 mm' },
      { label: 'Engine Power', value: '429 kW (575 hp)' },
      { label: 'Operating Weight', value: '31,000 kg' },
    ],
    image:
      'https://images.unsplash.com/photo-1597801037584-66f15fdee47f?auto=format&fit=crop&w=1200&q=80',
    condition: 'Rental · Available',
    status: 'rental',
  },
  {
    slug: 'bobcat-s770',
    brand: 'Bobcat',
    model: 'S770 Skidsteer',
    category: 'Skidsteers',
    categorySlug: 'loaders',
    keySpec: '68 kW · 1,590 kg rated',
    tagline: 'Compact vertical-lift skidsteer for sites that need a scalpel, not a bulldozer.',
    specs: [
      { label: 'Engine Power', value: '68 kW (92 hp)' },
      { label: 'Rated Load', value: '1,590 kg' },
      { label: 'Tipping Load', value: '4,540 kg' },
      { label: 'Lift Height', value: '3,175 mm' },
    ],
    image:
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80',
    condition: 'New · In Stock',
    status: 'available',
  },
  {
    slug: 'cummins-c550d5',
    brand: 'Cummins',
    model: 'C550 D5 Genset',
    category: 'Power Generation',
    categorySlug: 'generators',
    keySpec: '550 kVA · Prime',
    tagline: 'Containerised prime-power genset — plant load or mine camp ready.',
    specs: [
      { label: 'Prime Rating', value: '550 kVA / 440 kW' },
      { label: 'Standby Rating', value: '600 kVA / 480 kW' },
      { label: 'Engine', value: 'Cummins QSX15-G8' },
      { label: 'Fuel Tank', value: '1,200 L base tank' },
    ],
    image:
      'https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?auto=format&fit=crop&w=1200&q=80',
    condition: 'New · In Stock',
    status: 'available',
  },
  {
    slug: 'hitachi-zx130',
    brand: 'Hitachi',
    model: 'ZX130-5G',
    category: 'Excavators',
    categorySlug: 'excavators',
    keySpec: '72 kW · 13 tonnes',
    tagline: 'Mid-size tracked excavator for utilities, farms and small contractors.',
    specs: [
      { label: 'Engine Power', value: '72 kW (96 hp)' },
      { label: 'Operating Weight', value: '13,000 kg' },
      { label: 'Bucket Capacity', value: '0.5 m³' },
      { label: 'Max Dig Depth', value: '5.5 m' },
    ],
    image:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=80',
    condition: 'Used · Rebuilt',
    status: 'used',
  },
  {
    slug: 'shantui-sg21',
    brand: 'Shantui',
    model: 'SG21-3 Motor Grader',
    category: 'Graders',
    categorySlug: 'loaders',
    keySpec: '157 kW · 14-ft moldboard',
    tagline: 'All-wheel-drive grader for haul road maintenance and final grade work.',
    specs: [
      { label: 'Engine Power', value: '157 kW (211 hp)' },
      { label: 'Operating Weight', value: '17,500 kg' },
      { label: 'Moldboard Length', value: '4,267 mm' },
      { label: 'Blade Pull', value: '88 kN' },
    ],
    image:
      'https://images.unsplash.com/photo-1625466996705-5c344e8f0ce0?auto=format&fit=crop&w=1200&q=80',
    condition: 'New · In Stock',
    status: 'available',
  },
  {
    slug: 'atlas-xas97',
    brand: 'Atlas',
    model: 'XAS 97 Compressor',
    category: 'Compressors',
    categorySlug: 'compressors',
    keySpec: '7 bar · 5.3 m³/min',
    tagline: 'Towable diesel compressor for drills, breakers and sandblast work.',
    specs: [
      { label: 'Working Pressure', value: '7 bar / 102 psi' },
      { label: 'Free Air Delivery', value: '5.3 m³/min (187 cfm)' },
      { label: 'Engine', value: 'Kubota V2403' },
      { label: 'Fuel Tank', value: '120 L' },
    ],
    image:
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    condition: 'Rental · Available',
    status: 'rental',
  },
  {
    slug: 'sandvik-dr410',
    brand: 'Sandvik',
    model: 'DR410i Drill Rig',
    category: 'Drill Rigs',
    categorySlug: 'drills',
    keySpec: '152 – 229 mm holes',
    tagline: 'Down-the-hole surface drill for production blasthole work.',
    specs: [
      { label: 'Hole Diameter', value: '152 – 229 mm' },
      { label: 'Hole Depth', value: 'up to 53 m' },
      { label: 'Engine Power', value: '597 kW (800 hp)' },
      { label: 'Compressor', value: '34 bar / 18.9 m³/min' },
    ],
    image:
      'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?auto=format&fit=crop&w=1200&q=80',
    condition: 'Service Exchange',
    status: 'service',
  },
  {
    slug: 'shantui-sc50',
    brand: 'Shantui',
    model: 'SC50D Forklift',
    category: 'Forklifts',
    categorySlug: 'loaders',
    keySpec: '5-tonne diesel',
    tagline: 'Heavy-duty diesel forklift for yards, warehouses and workshop floors.',
    specs: [
      { label: 'Lift Capacity', value: '5,000 kg' },
      { label: 'Lift Height', value: '3,000 mm (std)' },
      { label: 'Engine', value: 'Xinchai C490 diesel' },
      { label: 'Operating Weight', value: '7,450 kg' },
    ],
    image:
      'https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=1200&q=80',
    condition: 'New · In Stock',
    status: 'available',
  },
];

// ============================================================
// SERVICES (5)
// ============================================================
export const services = [
  {
    slug: 'sales',
    name: 'Equipment Sales',
    icon: 'Handshake',
    tagline: 'New and certified-used heavy iron, backed by OEM warranty.',
    description:
      'Full-line distributor for Shantui, Hitachi, Wirtgen, Rokbak, Bobcat and Cummins in Zimbabwe. Every machine supplied comes with factory warranty, pre-delivery inspection, operator familiarisation and a twelve-month spare parts support plan.',
    bullets: [
      'New & certified pre-owned inventory',
      'OEM factory warranty on all new units',
      'Pre-delivery inspection & commissioning',
      'Operator training and handover',
    ],
    image:
      'https://images.unsplash.com/photo-1567302464248-00ea1f1c2c02?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'rental',
    name: 'Rental & Hire',
    icon: 'CalendarBlank',
    tagline: 'Hourly, daily, monthly — fleet you can deploy tomorrow.',
    description:
      'A 180-unit rental fleet ready for short-term projects, fleet augmentation and rent-to-buy. We deliver on lowbed countrywide, offer operator-included packages, and carry a maintained spares float so every rental unit stays on the clock.',
    bullets: [
      'Short & long-term rental contracts',
      'Wet-hire (with operator) available',
      'Nationwide lowbed delivery',
      'Rent-to-buy conversion options',
    ],
    image:
      'https://images.unsplash.com/photo-1581091215367-59ab6b8dee68?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'parts',
    name: 'Genuine Parts',
    icon: 'Gear',
    tagline: 'Over 4,200 line items. Same-day counter. Countrywide courier.',
    description:
      'The parts desk is the heart of our workshop. We stock genuine OEM replacements, ITR undercarriage, Sino filters and Weichai drivelines — with a dedicated courier partnership to move critical spares from Harare to any mine site within 24 hours.',
    bullets: [
      'Genuine OEM & aftermarket options',
      '4,200+ line items stocked in Harare',
      'Same-day counter pickup',
      '24-hour courier to every province',
    ],
    image:
      'https://images.unsplash.com/photo-1609205069941-b25e84583cc6?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'service',
    name: 'Service & Repair',
    icon: 'Wrench',
    tagline: 'Heavy engineering workshop — undercarriage, frames, dump boxes.',
    description:
      'Our Martin Drive workshop handles full component rebuild, frame repair, bucket fabrication, dump-box lining and undercarriage rehabilitation on a 200-ton track press. Field service vehicles reach Hwange, Beitbridge and the Zambezi Valley.',
    bullets: [
      '200-ton track press undercarriage rehab',
      'Engine, pump & transmission rebuilds',
      'Bucket, frame & dump-box fabrication',
      'Field service & breakdown response',
    ],
    image:
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'training',
    name: 'Technical Training',
    icon: 'GraduationCap',
    tagline: 'Operator & technician programmes, accredited by OEMs.',
    description:
      'We run operator certification courses for excavators, dozers, graders and wheel loaders, plus technician short courses on hydraulic diagnostics, undercarriage maintenance and electronic engine controls. Training is delivered on-site or at our Harare yard.',
    bullets: [
      'OEM-accredited operator certification',
      'Hydraulic diagnostics short courses',
      'Undercarriage wear inspection training',
      'On-site or Harare-yard delivery',
    ],
    image:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80',
  },
];

// ============================================================
// INDUSTRIES (4)
// ============================================================
export const industries = [
  {
    slug: 'mining',
    name: 'Mining',
    tagline: 'Gold, platinum, chrome, lithium — the Great Dyke and beyond.',
    description:
      'We supply and service equipment for large-scale and small-scale operations across the Dyke — from exploration drilling to the haul roads between pit and plant. Fast parts, service-exchange components and on-call breakdown support keep production on plan.',
    image:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=80',
    stats: [{ v: '42', l: 'Active mine clients' }, { v: '8', l: 'Provinces served' }],
  },
  {
    slug: 'construction',
    name: 'Construction',
    tagline: 'Road rehab, civils, bulk earthworks, urban build.',
    description:
      'From the Plumtree–Mutare corridor upgrades to housing subdivisions in Harare, Zimbabwean contractors rely on our excavators, loaders, graders and rollers. We offer fleet mix-and-match and rent-to-buy packages that scale with your project book.',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80',
    stats: [{ v: '120+', l: 'Contractor accounts' }, { v: '< 24 hr', l: 'Lowbed dispatch' }],
  },
  {
    slug: 'agriculture',
    name: 'Agriculture',
    tagline: 'Land clearing, dam building, irrigation trenching.',
    description:
      'Commercial farmers and agribusinesses across Mashonaland, Midlands and Manicaland turn to us for smaller excavators, wheel loaders and forklifts. We match machine size to seasonal workload — and keep a parts float tuned for harvest-season reliability.',
    image:
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1400&q=80',
    stats: [{ v: '65', l: 'Farm estates served' }, { v: '3', l: 'Service regions' }],
  },
  {
    slug: 'quarrying',
    name: 'Quarrying',
    tagline: 'Aggregate, dimension stone, ballast production.',
    description:
      'Complete quarry solutions — from primary jaw crushers and secondary cones to loaders, dump trucks and dust suppression. We commission, service and upgrade crushing lines for granite, dolerite and limestone producers countrywide.',
    image:
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=80',
    stats: [{ v: '18', l: 'Quarry installations' }, { v: '1,400 tph', l: 'Largest plant built' }],
  },
];

// ============================================================
// STATS STRIP
// ============================================================
export const stats = [
  { value: '70', suffix: '+', label: 'Years trading in Zimbabwe' },
  { value: '2,400', suffix: '+', label: 'Units sold and placed' },
  { value: '4,200', suffix: '+', label: 'Parts line items in stock' },
  { value: '12', suffix: '', label: 'OEM brands represented' },
];

// ============================================================
// REVIEWS (invented B2B voices)
// ============================================================
export const reviews = [
  {
    name: 'Tendai Mupfumi',
    role: 'Operations Manager · Gwanda Chrome Mines',
    rating: 5,
    body: 'When our primary crusher dropped a drive in December, Machinery Exchange had the replacement gearbox on our pad in 36 hours. That alone paid for three years of parts premiums. They understand what downtime costs a mine.',
    avatar: 'https://i.pravatar.cc/96?img=12',
  },
  {
    name: 'Linda Chikafu',
    role: 'Fleet Director · Bitumen World Contractors',
    rating: 5,
    body: 'Our whole rehabilitation fleet — Shantui dozers, Wirtgen cold planer, Rokbak ADTs — came through here, with commissioning, operator training, and a parts plan that actually matches our schedule of rates. Procurement nightmare, solved.',
    avatar: 'https://i.pravatar.cc/96?img=34',
  },
  {
    name: 'Gary van Rensburg',
    role: 'Plant Superintendent · Mutare Granite Quarries',
    rating: 5,
    body: 'I have bought excavators from three countries. The one I will call first every time is Martin Drive. The workshop is properly organised, the parts counter is always stocked, and the service reports are written by people who actually went to the machine.',
    avatar: 'https://i.pravatar.cc/96?img=51',
  },
];

// ============================================================
// TIMELINE (About page)
// ============================================================
export const timeline = [
  {
    year: '1954',
    title: 'The doors open.',
    body: 'Machinery Exchange is founded on Martin Drive — three mechanics, one workshop bay, and a commitment to keep Zimbabwe digging.',
  },
  {
    year: '1978',
    title: 'First OEM dealership.',
    body: 'Signed as the first authorised dealer for imported earthmoving equipment in the country. Parts counter opens beside the workshop.',
  },
  {
    year: '2007',
    title: 'Expansion into mining.',
    body: 'Secured dealerships for Shantui and Hitachi; scaled the workshop to handle heavy mining fleets across the Great Dyke.',
  },
  {
    year: '2014',
    title: '200-ton track press installed.',
    body: 'Became the only undercarriage rehabilitation facility in Zimbabwe with a calibrated 200-ton press — saving operators weeks of downtime.',
  },
  {
    year: '2021',
    title: 'Rental fleet crosses 180 units.',
    body: 'Rental division grows to a 180-unit fleet, with lowbed logistics running Beitbridge to Chirundu on a weekly rotation.',
  },
  {
    year: 'Today',
    title: 'Seventy years in. Still building.',
    body: 'Twelve OEM brands, 4,200+ stocked line items, a field service division covering eight provinces. And we are not done.',
  },
];

// ============================================================
// VALUES (About page)
// ============================================================
export const values = [
  {
    icon: 'ShieldCheck',
    title: 'Safety first, always.',
    body: 'Every delivery, every workshop job, every site visit is run to an ISO-grade safety procedure. No shortcuts — because heavy iron does not forgive them.',
  },
  {
    icon: 'Wrench',
    title: 'We service what we sell.',
    body: 'If it leaves our gate, it comes back to our workshop. That promise has kept us accountable for seven decades.',
  },
  {
    icon: 'Clock',
    title: 'Uptime is the only metric.',
    body: 'Machines make money when they run. Everything we do — parts float, field service, rebuild turnaround — is optimised for one thing: your uptime.',
  },
  {
    icon: 'Handshake',
    title: 'Local partnership, OEM backing.',
    body: 'We are family-owned in Harare, but our supply chain reaches back to Shantui, Hitachi, Wirtgen and Cummins factories. Local service, factory pedigree.',
  },
];

// ============================================================
// FAQS (Contact page)
// ============================================================
export const faqs = [
  {
    q: 'Do you sell new or used equipment?',
    a: 'Both. We are the factory-authorised dealer for Shantui, Hitachi, Wirtgen, Rokbak, Bobcat and Cummins (new) — and we also offer certified pre-owned units that have been fully inspected and rebuilt by our workshop.',
  },
  {
    q: 'What is your rental rate structure?',
    a: 'Hourly, daily, weekly and monthly rates — with volume discounts for fleet or long-term contracts. Wet hire (with operator) is available on all units. Contact us for a rate card.',
  },
  {
    q: 'Can you deliver to a remote mine site?',
    a: 'Yes. Our lowbed logistics partners cover every province. Standard dispatch is within 24 hours of contract signing. Cross-border into Zambia and Mozambique is available on request.',
  },
  {
    q: 'What spare parts do you stock?',
    a: 'Over 4,200 line items — genuine OEM, ITR undercarriage, Sino filters, Weichai drivelines. If we do not have it on the shelf, our supply chain airfreights from Shanghai within 7-10 days.',
  },
  {
    q: 'Do you take trade-ins?',
    a: 'Yes — we take running earthmoving equipment and generators in trade against new purchases. Our workshop rebuilds and re-certifies trade-ins for our pre-owned inventory.',
  },
  {
    q: 'How do I arrange a site inspection?',
    a: 'Call +263 24 2447180 or WhatsApp us. For service and breakdown visits, a technician is usually on the road within 24 hours; for pre-sales demonstrations we can have a machine on your site in 48-72 hours.',
  },
];

// ============================================================
// NOT FOUND
// ============================================================
export const notFound = {
  code: '404',
  heading: 'This machine is not in the yard.',
  body: 'The page you are looking for has been retired, rebuilt or rerouted. Head back to the main workshop.',
};
