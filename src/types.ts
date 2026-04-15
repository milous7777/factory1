export interface Formation {
  id: string;
  title: string;
  category: 'hommes' | 'femmes' | 'esthetique';
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
  }
];
