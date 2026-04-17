export interface Formation {
  id: string;
  title: string;
  category: 'hommes' | 'femmes' | 'esthetique' | 'mixte';
  type: 'jour' | 'nuit';
  description: string;
  duration: string;
  price: string;
  images: string[];
  benefits: string[];
  curriculum: string[];
}

export const FORMATIONS_DATA: Formation[] = [
  {
    id: 'mixte-jour',
    title: 'Coiffure Mixte (Hommes & Femmes)',
    category: 'mixte',
    type: 'jour',
    description: "La formation ultime pour devenir un coiffeur polyvalent. Maîtrisez à la fois la coiffure masculine et féminine dans ce pack premium exclusif. Une opportunité unique pour doubler vos opportunités professionnelles.",
    duration: '10 ou 12 mois',
    price: '400 DH - 500 DH / mois',
    images: [
      'https://i.postimg.cc/bvWf48vF/IMG-20260410-WA0095.jpg',
      'https://i.postimg.cc/vZxMQc6x/IMG-20260410-WA0088.jpg',
      'https://i.postimg.cc/MKFq2yXj/IMG-20260410-WA0097.jpg'
    ],
    benefits: [
      'Polyvalence totale (Hommes & Femmes)',
      'Double diplôme interne',
      'Maîtrise de toutes les techniques',
      'Accès prioritaire aux stages'
    ],
    curriculum: [
      'Toutes les techniques hommes',
      'Toutes les techniques femmes',
      'Gestion de salon polyvalent',
      'Conseil en image mixte'
    ]
  },
  {
    id: 'hommes-jour',
    title: 'Coiffure Hommes (Jour)',
    category: 'hommes',
    type: 'jour',
    description: "Une formation intensive de 10 à 12 mois pour maîtriser toutes les facettes de la coiffure masculine moderne. De la coupe classique au dégradé américain, en passant par l'entretien de la barbe.",
    duration: '10 ou 12 mois',
    price: '350 DH - 400 DH / mois',
    images: [
      'https://i.postimg.cc/bvWf48vF/IMG-20260410-WA0095.jpg',
      'https://i.postimg.cc/BvkfRsvC/IMG-20260410-WA0096.jpg',
      'https://i.postimg.cc/0NF1hxNJ/IMG-20260410-WA0114.jpg'
    ],
    benefits: [
      'Maîtrise des outils professionnels',
      'Techniques de rasage traditionnel',
      'Colorimétrie masculine',
      'Gestion d’un salon de coiffure'
    ],
    curriculum: [
      'Hygiène et sécurité',
      'Techniques de coupe aux ciseaux',
      'Utilisation de la tondeuse',
      'Soins capillaires et barbe'
    ]
  },
  {
    id: 'femmes-jour',
    title: 'Coiffure Femmes (Jour)',
    category: 'femmes',
    type: 'jour',
    description: "Devenez une experte en coiffure féminine. Cette formation couvre tout, des coupes de base aux coiffures de mariée les plus complexes, incluant la coloration et les traitements chimiques.",
    duration: '10 ou 12 mois',
    price: '400 DH - 500 DH / mois',
    images: [
      'https://i.postimg.cc/K83FZRgg/IMG-20260410-WA0030.jpg',
      'https://i.postimg.cc/vZxMQc6x/IMG-20260410-WA0088.jpg',
      'https://i.postimg.cc/MKFq2yXj/IMG-20260410-WA0097.jpg'
    ],
    benefits: [
      'Visagisme et conseil client',
      'Techniques de coloration avancées',
      'Chignons et coiffures de fête',
      'Traitements capillaires profonds'
    ],
    curriculum: [
      'Analyse du cheveu',
      'Coupes classiques et modernes',
      'Brushing et mise en forme',
      'Coloration et mèches'
    ]
  },
  {
    id: 'esthetique-jour',
    title: 'Esthétique & Soins (Jour)',
    category: 'esthetique',
    type: 'jour',
    description: "Plongez dans l'univers de la beauté globale. Apprenez les soins du visage, du corps, la manucure, la pédicure et le maquillage professionnel.",
    duration: '10 ou 12 mois',
    price: '400 DH - 500 DH / mois',
    images: [
      'https://i.postimg.cc/yYbs4FWJ/IMG-20260410-WA0098.jpg',
      'https://i.postimg.cc/KvHxSn4c/IMG-20260410-WA0099.jpg',
      'https://i.postimg.cc/ncPpbvMZ/IMG-20260410-WA0100.jpg'
    ],
    benefits: [
      'Soins du visage personnalisés',
      'Maquillage jour, soir et mariée',
      'Épilation professionnelle',
      'Manucure et onglerie'
    ],
    curriculum: [
      'Biologie de la peau',
      'Techniques de massage facial',
      'Utilisation des appareils esthétiques',
      'Conseil en image'
    ]
  },
  {
    id: 'hommes-nuit',
    title: 'Coiffure Hommes (Nuit)',
    category: 'hommes',
    type: 'nuit',
    description: "Un programme accéléré de 6 mois conçu pour les personnes actives souhaitant se reconvertir ou se perfectionner en soirée.",
    duration: '6 mois',
    price: '800 DH / mois',
    images: [
      'https://i.postimg.cc/g0nPMrGm/IMG-20260410-WA0119.jpg',
      'https://i.postimg.cc/cJrND6dt/IMG-20260410-WA0120.jpg'
    ],
    benefits: [
      'Horaires flexibles (19h-21h30)',
      'Apprentissage intensif',
      'Focus sur les techniques de coupe',
      'Accompagnement personnalisé'
    ],
    curriculum: [
      'Bases de la coupe homme',
      'Techniques de dégradé',
      'Taille de barbe',
      'Finitions et coiffage'
    ]
  },
  {
    id: 'femmes-nuit',
    title: 'Coiffure Femmes (Nuit)',
    category: 'femmes',
    type: 'nuit',
    description: "Un programme intensif de 6 mois en soirée pour maîtriser la coiffure féminine, idéal pour les passionnées travaillant en journée.",
    duration: '6 mois',
    price: '800 DH / mois',
    images: [
      'https://i.postimg.cc/vZxMQc6x/IMG-20260410-WA0088.jpg',
      'https://i.postimg.cc/MKFq2yXj/IMG-20260410-WA0097.jpg'
    ],
    benefits: [
      'Horaires flexibles (19h-21h30)',
      'Techniques de coloration rapides',
      'Focus sur les brushings et coupes',
      'Accompagnement intensif'
    ],
    curriculum: [
      'Chignons de base',
      'Coupes tendance',
      'Coloration fondamentale',
      'Mise en plis rapide'
    ]
  },
  {
    id: 'esthetique-nuit',
    title: 'Esthétique & Soins (Nuit)',
    category: 'esthetique',
    type: 'nuit',
    description: "Apprenez les fondamentaux de l'esthétique en 6 mois intensifs lors de nos sessions nocturnes.",
    duration: '6 mois',
    price: '800 DH / mois',
    images: [
      'https://i.postimg.cc/ncPpbvMZ/IMG-20260410-WA0100.jpg',
      'https://i.postimg.cc/KvHxSn4c/IMG-20260410-WA0099.jpg'
    ],
    benefits: [
      'Pratique sur modèles réels',
      'Utilisation d’appareils modernes',
      'Techniques de soins visage',
      'Maquillage professionnel'
    ],
    curriculum: [
      'Soins de base visage',
      'Maquillage flash',
      'Épilation à la cire',
      'Manucure express'
    ]
  }
];
