import { Product, Testimonial, Promotion } from './types';

export const CATEGORIES = [
  { id: 'all', name: 'Todos los Productos' },
  { id: 'laptops', name: 'Portátiles y PCs' },
  { id: 'smartphones', name: 'Móviles y Tablets' },
  { id: 'wearables', name: 'Wearables' },
  { id: 'gaming', name: 'Gaming y Periféricos' }
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'JasbBook Pro 16',
    description: 'Rendimiento sin límites para creadores de contenido, ingenieros y profesionales que buscan potencia extrema.',
    price: 1899,
    promoPrice: 1699,
    category: 'laptops',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 142,
    specs: {
      'Procesador': 'Jasb Silicon J3 Max (12 núcleos)',
      'Memoria RAM': '32 GB Unified Memory',
      'Almacenamiento': '1 TB SSD NVMe PCIe 4.0',
      'Pantalla': '16" Liquid Retina XDR, 120Hz',
      'Batería': 'Hasta 20 horas de autonomía'
    },
    features: [
      'Teclado retroiluminado ultra silencioso',
      'Sistema de sonido con audio espacial de 6 altavoces',
      'Chasis de aluminio 100% reciclado de alta resistencia',
      'Carga súper rápida de 140W'
    ],
    isNew: true,
    isPromo: true,
    stock: 12
  },
  {
    id: 'prod-2',
    name: 'JasbPhone X Ultra',
    description: 'La revolución de la fotografía móvil en tus manos. Captura la noche con un sensor de grado profesional.',
    price: 1099,
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewsCount: 312,
    specs: {
      'Procesador': 'Octa-Core Octane G4 (4nm)',
      'Memoria RAM': '12 GB LPDDR5X',
      'Almacenamiento': '256 GB UFS 4.0',
      'Cámara': 'Triple sensor: 200MP + 50MP + 12MP',
      'Pantalla': '6.8" Dynamic AMOLED 2X, 1-120Hz'
    },
    features: [
      'Zoom óptico de 10x y zoom espacial de 100x',
      'Resistencia al agua y al polvo IP68',
      'Carga inalámbrica reversible de 15W',
      'Cristal protector Gorilla Glass Armor'
    ],
    isNew: true,
    stock: 25
  },
  {
    id: 'prod-3',
    name: 'JasbWatch GT 4 Active',
    description: 'Tu compañero de salud y rendimiento definitivo. Monitorización avanzada de biometría las 24 horas del día.',
    price: 249,
    promoPrice: 199,
    category: 'wearables',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviewsCount: 88,
    specs: {
      'Pantalla': '1.43" AMOLED HD Siempre Activa',
      'Sensores': 'Ritmo cardíaco, SpO2, ECG, temperatura corporal',
      'GPS': 'Dual-Band multi-sistema de alta precisión',
      'Resistencia': 'Sumergible hasta 50 metros (5 ATM)',
      'Batería': 'Hasta 14 días de uso continuo'
    },
    features: [
      'Más de 150 modos deportivos profesionales',
      'Llamadas Bluetooth integradas con cancelación de ruido',
      'Control de reproducción de música y pagos NFC',
      'Monitoreo avanzado del sueño y estrés'
    ],
    isPromo: true,
    stock: 40
  },
  {
    id: 'prod-4',
    name: 'Teclado Mecánico Jasb Board Pro',
    description: 'La máxima experiencia de escritura y gaming. Switches lubricados de fábrica y acústica premium amortiguada.',
    price: 159,
    category: 'gaming',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 195,
    specs: {
      'Layout': 'TKL (80%) compacto',
      'Switches': 'Jasb Linear Teal (fuerza de actuación 45g)',
      'Conectividad': 'Tri-mode: 2.4GHz, Bluetooth 5.1 y cable USB-C',
      'Keycaps': 'PBT Double-Shot de perfil Cherry',
      'Iluminación': 'RGB direccionable tecla por tecla'
    },
    features: [
      'Estructura de montaje "Gasket Mount" muy flexible',
      'Espuma amortiguadora de sonido de porón triple',
      'Batería recargable de 4000mAh integrada',
      'Hot-swappable (admite interruptores de 3 y 5 pines)'
    ],
    isNew: true,
    stock: 18
  },
  {
    id: 'prod-5',
    name: 'JasbBuds Neo Pro',
    description: 'Cancelación de ruido adaptativa e inteligente de hasta 48dB. Escucha el sonido puro de tu música favorita.',
    price: 129,
    promoPrice: 99,
    category: 'wearables',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    reviewsCount: 204,
    specs: {
      'Driver': 'Doble transductor dinámico de 11mm + 6mm',
      'Cancelación Ruido': 'Híbrida ANC adaptativa',
      'Autonomía': '9h (auriculares) + 28h (estuche de carga)',
      'Conectividad': 'Bluetooth 5.3 con conexión multipunto',
      'Latencia': 'Ultra baja de 40ms en modo gaming'
    },
    features: [
      'Audio de alta resolución inalámbrico certificado (LDAC)',
      '6 micrófonos con algoritmo IA para llamadas cristalinas',
      'Resistencia a salpicaduras IP54',
      'Carga rápida de 10 minutos para 2 horas de música'
    ],
    isPromo: true,
    stock: 55
  },
  {
    id: 'prod-6',
    name: 'Monitor UltraWide Jasb Horizon 34"',
    description: 'Sumérgete en tus juegos y maximiza tu productividad con una curvatura óptima de 1500R y color cinematográfico.',
    price: 499,
    category: 'gaming',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewsCount: 76,
    specs: {
      'Resolución': 'WQHD+ (3440 x 1440) 21:9',
      'Frecuencia': '165Hz de tasa de refresco',
      'Tipo de Panel': 'VA con color cuántico (Quantum Dot)',
      'Tiempo Respuesta': '1ms MPRT / 4ms GtG',
      'Puertos': '2x HDMI 2.1, 1x DisplayPort 1.4, Hub USB'
    },
    features: [
      'Soporte completo HDR400 con picos de 450 nits',
      'Tecnología AMD FreeSync Premium Pro integrada',
      'Base ergonómica con ajuste de altura, inclinación y giro',
      'Altavoces estéreo incorporados de 5W con tuning de audio'
    ],
    stock: 8
  },
  {
    id: 'prod-7',
    name: 'Altavoz Inteligente Jasb Aura Connect',
    description: 'Controla tu hogar inteligente con facilidad y disfruta de un sonido envolvente de 360 grados de alta fidelidad.',
    price: 89,
    category: 'wearables',
    image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    reviewsCount: 112,
    specs: {
      'Potencia': '30W RMS con subwoofer integrado',
      'Asistente': 'Compatible con Jasb Voice e integraciones principales',
      'Conectividad': 'Wi-Fi de doble banda y Bluetooth 5.0',
      'Micrófonos': 'Matriz de 4 micrófonos de campo lejano',
      'Dimensiones': '12cm diámetro x 15cm altura'
    },
    features: [
      'Indicador de hora LED discreto a través del tejido premium',
      'Botón físico de desactivación de micrófonos por privacidad',
      'Emparejamiento estéreo de dos altavoces para mayor escena',
      'Ajuste acústico adaptativo según la habitación'
    ],
    stock: 35
  },
  {
    id: 'prod-8',
    name: 'Ratón Gaming Jasb Precision X',
    description: 'Velocidad de respuesta inigualable. Su ligereza de tan solo 54g te dará el control absoluto en la arena competitiva.',
    price: 79,
    category: 'gaming',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviewsCount: 94,
    specs: {
      'Sensor': 'Jasb Focus Pro 26K DPI óptico',
      'Velocidad': '650 IPS con aceleración 50G',
      'Tasa de sondeo': 'Hasta 4000Hz nativo inalámbrico',
      'Peso': '54 gramos ultra ligero sin perforaciones',
      'Autonomía': 'Hasta 80 horas de uso continuo'
    },
    features: [
      'Switches ópticos de mouse de 3ª gen (vida útil 90M clics)',
      'Pies de ratón de PTFE de grado virgen 100% puro',
      'Software de personalización de macros integrado en memoria',
      'Cable Jasb Speedflex súper flexible incluido'
    ],
    isNew: true,
    stock: 22
  }
];

export const PROMOTIONS: Promotion[] = [
  {
    id: 'promo-1',
    title: 'Descuento Especial de Inauguración',
    subtitle: 'Bienvenido al ecosistema JASB Tech',
    description: 'Introduce este código en el carrito de compras y obtén un 10% adicional en toda la tienda. ¡Envío gratuito incluido!',
    code: 'JASBNEW10',
    discount: '10% OFF',
    image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=800&q=80',
    endsInDays: 5
  },
  {
    id: 'promo-2',
    title: 'Equípate para el Éxito',
    subtitle: 'Promoción especial en laptops seleccionadas',
    description: 'Adquiere tu portátil JasbBook y llévate de regalo los auriculares JasbBuds Neo Pro valorados en 129€. Oferta por tiempo limitado.',
    code: 'JASBWORK',
    discount: 'Regalo Incluido',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
    endsInDays: 3
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Carlos Mendoza',
    role: 'Desarrollador de Software',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: 'Compré la JasbBook Pro 16 hace dos meses y mi flujo de trabajo ha cambiado drásticamente. Compila proyectos enormes en segundos y la pantalla es un deleite visual. Además, el servicio postventa de jasb Tech fue de primer nivel.',
    date: 'Hace 2 semanas'
  },
  {
    id: 'test-2',
    name: 'Sofía Valenzuela',
    role: 'Diseñadora UX/UI',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: 'Me encanta la marca. Tengo el JasbPhone X Ultra y el JasbWatch GT 4. La integración entre dispositivos es impecable y la calidad de los materiales se siente verdaderamente premium. Un acierto total.',
    date: 'Hace 3 semanas'
  },
  {
    id: 'test-3',
    name: 'Alejandro Ruiz',
    role: 'Jugador Competitivo y Streamer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    rating: 4.8,
    text: 'El teclado Jasb Board Pro y el ratón Precision X son salvajemente precisos. El ratón es súper ligero y se siente muy premium en mano. La latencia inalámbrica es indetectable. Recomendado 100% para gaming.',
    date: 'Hace 1 mes'
  }
];

export const ABOUT_STATS = [
  { value: '15k+', label: 'Clientes Felices' },
  { value: '99.4%', label: 'Satisfacción' },
  { value: '2+ Años', label: 'Garantía Directa' },
  { value: '24h', label: 'Envío Gratis Nacional' }
];

export const ABOUT_VALUES = [
  {
    title: 'Innovación Constante',
    description: 'Desarrollamos e incorporamos las últimas tecnologías globales para asegurar que siempre estés un paso adelante.'
  },
  {
    title: 'Calidad Premium Directa',
    description: 'Eliminamos intermediarios innecesarios para ofrecerte dispositivos con la mayor calidad de ensamblaje a un precio competitivo.'
  },
  {
    title: 'Compromiso Ecológico',
    description: 'Nuestros productos utilizan materiales reciclables de primer nivel y empaques 100% biodegradables libres de plástico.'
  }
];
