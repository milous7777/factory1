export interface Formation {
  id: string;
  category: 'hommes' | 'femmes' | 'esthetique' | 'mixte';
  type: 'jour' | 'nuit';
  images: string[];
  translations: {
    fr: {
      title: string;
      description: string;
      duration: string;
      price: string;
      benefits: string[];
      curriculum: string[];
    };
    ar: {
      title: string;
      description: string;
      duration: string;
      price: string;
      benefits: string[];
      curriculum: string[];
    };
  };
}

export const FORMATIONS_DATA: Formation[] = [
  {
    id: 'mixte-jour',
    category: 'mixte',
    type: 'jour',
    images: [
      'https://i.postimg.cc/bvWf48vF/IMG-20260410-WA0095.jpg',
      'https://i.postimg.cc/vZxMQc6x/IMG-20260410-WA0088.jpg',
      'https://i.postimg.cc/MKFq2yXj/IMG-20260410-WA0097.jpg'
    ],
    translations: {
      fr: {
        title: 'Coiffure Mixte (Pack Premium)',
        description: "La formation ultime pour devenir un coiffeur polyvalent. Maîtrisez à la fois la coiffure masculine et féminine dans ce pack premium exclusif.",
        duration: '10 ou 12 mois',
        price: '400 DH - 500 DH / mois',
        benefits: ['Polyvalence totale', 'Double diplôme interne', 'Toutes les techniques'],
        curriculum: ['Coupe hommes', 'Coupe femmes', 'Colorimétrie mixte', 'Gestion de salon'],
      },
      ar: {
        title: 'حلاقة مختلطة (عرض ممتاز)',
        description: 'التكوين الأمثل لتصبح حلاقاً شاملاً. أتقن حلاقة الرجال والنساء في هذا العرض الحصري والممتاز.',
        duration: '10 أو 12 شهراً',
        price: '400 - 500 درهم / الشهر',
        benefits: ['شامل (رجال ونساء)', 'دبلوم مزدوج', 'إتقان جميع التقنيات'],
        curriculum: ['حلاقة الرجال', 'حلاقة النساء', 'تلوين الشعر', 'تسيير الصالون'],
      }
    }
  },
  {
    id: 'hommes-jour',
    category: 'hommes',
    type: 'jour',
    images: [
      'https://i.postimg.cc/bvWf48vF/IMG-20260410-WA0095.jpg',
      'https://i.postimg.cc/BvkfRsvC/IMG-20260410-WA0096.jpg',
      'https://i.postimg.cc/0NF1hxNJ/IMG-20260410-WA0114.jpg'
    ],
    translations: {
      fr: {
        title: 'Coiffure Hommes (Jour)',
        description: "Une formation intensive pour maîtriser toutes les facettes de la coiffure masculine moderne. Du dégradé américain à l'entretien de la barbe.",
        duration: '10 ou 12 mois',
        price: '350 DH - 400 DH / mois',
        benefits: ['Barbier traditionnel', 'Coupes modernes', 'Techniques de rasage'],
        curriculum: ['Hygiène', 'Coupe ciseaux', 'Utilisation tondeuse', 'Soins barbe'],
      },
      ar: {
        title: 'حلاقة الرجال (نهاراً)',
        description: 'تكوين مكثف لإتقان جميع جوانب الحلاقة الرجالية الحديثة. من الحلاقة التقليدية إلى أحدث الصيحات.',
        duration: '10 أو 12 شهراً',
        price: '350 - 400 درهم / الشهر',
        benefits: ['حلاقة تقليدية', 'قصات حديثة', 'تقنيات الحلاقة'],
        curriculum: ['النظافة والسلامة', 'القص بالمقص', 'استعمال الآلة', 'العناية باللحية'],
      }
    }
  },
  {
    id: 'femmes-jour',
    category: 'femmes',
    type: 'jour',
    images: [
      'https://i.postimg.cc/K83FZRgg/IMG-20260410-WA0030.jpg',
      'https://i.postimg.cc/vZxMQc6x/IMG-20260410-WA0088.jpg',
      'https://i.postimg.cc/MKFq2yXj/IMG-20260410-WA0097.jpg'
    ],
    translations: {
      fr: {
        title: 'Coiffure Femmes (Jour)',
        description: "Devenez une experte en coiffure féminine. Des coupes de base aux coiffures de mariée les plus complexes.",
        duration: '10 ou 12 mois',
        price: '400 DH - 500 DH / mois',
        benefits: ['Visagisme', 'Coloration avancée', 'Coiffure mariée'],
        curriculum: ['Analyse cheveu', 'Coupes tendance', 'Brushing', 'Mèches'],
      },
      ar: {
        title: 'حلاقة النساء (نهاراً)',
        description: 'كوني خبيرة في حلاقة النساء. من القصات الأساسية إلى تسريحات العرائس الأكثر تعقيداً.',
        duration: '10 أو 12 شهراً',
        price: '400 - 500 درهم / الشهر',
        benefits: ['خبير تجميل', 'تلوين متطور', 'تسريحات العرائس'],
        curriculum: ['تحليل الشعر', 'قصات عصرية', 'بروشينغ', 'تخصيل الشعر'],
      }
    }
  },
  {
    id: 'esthetique-jour',
    category: 'esthetique',
    type: 'jour',
    images: [
      'https://i.postimg.cc/yYbs4FWJ/IMG-20260410-WA0098.jpg',
      'https://i.postimg.cc/KvHxSn4c/IMG-20260410-WA0099.jpg',
      'https://i.postimg.cc/ncPpbvMZ/IMG-20260410-WA0100.jpg'
    ],
    translations: {
      fr: {
        title: 'Esthétique & Soins (Jour)',
        description: "Plongez dans l'univers de la beauté globale. Soins du visage, du corps, manucure et maquillage professionnel.",
        duration: '10 ou 12 mois',
        price: '400 DH - 500 DH / mois',
        benefits: ['Maquillage pro', 'Soins visage', 'Manucure & Onglerie'],
        curriculum: ['Biologie peau', 'Massages', 'Appareils esthétiques', 'Épilation'],
      },
      ar: {
        title: 'التجميل والعناية (نهاراً)',
        description: 'اغمسي في عالم الجمال الشامل. العناية بالوجه، الجسد، المانيكير والمكياج الاحترافي.',
        duration: '10 أو 12 شهراً',
        price: '400 - 500 درهم / الشهر',
        benefits: ['مكياج احترافي', 'عناية بالوجه', 'تقليم الأظافر'],
        curriculum: ['بيولوجيا البشرة', 'التدليك', 'أجهزة التجميل', 'إزالة الشعر'],
      }
    }
  },
  {
    id: 'hommes-nuit',
    category: 'hommes',
    type: 'nuit',
    images: [
      'https://i.postimg.cc/g0nPMrGm/IMG-20260410-WA0119.jpg',
      'https://i.postimg.cc/cJrND6dt/IMG-20260410-WA0120.jpg'
    ],
    translations: {
      fr: {
        title: 'Coiffure Hommes (Nuit)',
        description: "Programme accéléré de 6 mois conçu pour les personnes actives souhaitant se perfectionner en soirée.",
        duration: '6 mois',
        price: '800 DH / mois',
        benefits: ['Horaires flexibles', 'Focus pratique', 'Apprentissage rapide'],
        curriculum: ['Bases coupe', 'Dégradé américain', 'Taille barbe', 'Finitions'],
      },
      ar: {
        title: 'حلاقة الرجال (ليلاً)',
        description: 'برنامج سريع من 6 أشهر مصمم للأشخاص النشيطين الراغبين في التعلم في الفترة المسائية.',
        duration: '6 أشهر',
        price: '800 درهم / الشهر',
        benefits: ['أوقات مرنة', 'تركيز تطبيقي', 'تعلم سريع'],
        curriculum: ['أساسيات القص', 'تدرج أمريكي', 'تحديد اللحية', 'اللمسات النهائية'],
      }
    }
  },
  {
    id: 'femmes-nuit',
    category: 'femmes',
    type: 'nuit',
    images: [
      'https://i.postimg.cc/vZxMQc6x/IMG-20260410-WA0088.jpg',
      'https://i.postimg.cc/MKFq2yXj/IMG-20260410-WA0097.jpg'
    ],
    translations: {
      fr: {
        title: 'Coiffure Femmes (Nuit)',
        description: "Programme intensif de 6 mois en soirée pour maîtriser les bases de la coiffure féminine.",
        duration: '6 mois',
        price: '800 DH / mois',
        benefits: ['Emploi du temps adapté', 'Brushings & Coupes', 'Coloration de base'],
        curriculum: ['Coupes essentielles', 'Brushing', 'Coloration', 'Mise en plis'],
      },
      ar: {
        title: 'حلاقة النساء (ليلاً)',
        description: 'برنامج مكثف من 6 أشهر في الفترة المسائية لإتقان أساسيات الحلاقة النسائية.',
        duration: '6 أشهر',
        price: '800 درهم / الشهر',
        benefits: ['جدول زمني مناسب', 'بروشينغ وقص', 'تلوين أساسي'],
        curriculum: ['قصات أساسية', 'بروشينغ', 'التلوين', 'تصفيف الشعر'],
      }
    }
  },
  {
    id: 'esthetique-nuit',
    category: 'esthetique',
    type: 'nuit',
    images: [
      'https://i.postimg.cc/ncPpbvMZ/IMG-20260410-WA0100.jpg',
      'https://i.postimg.cc/KvHxSn4c/IMG-20260410-WA0099.jpg'
    ],
    translations: {
      fr: {
        title: 'Esthétique & Soins (Nuit)',
        description: "Apprenez les fondamentaux de l'esthétique en 6 mois intensifs lors de nos sessions nocturnes.",
        duration: '6 mois',
        price: '800 DH / mois',
        benefits: ['Soins flash', 'Pratique intensive', 'Matériel moderne'],
        curriculum: ['Soins visage basic', 'Maquillage rapide', 'Épilation cire', 'Manucure express'],
      },
      ar: {
        title: 'التجميل والعناية (ليلاً)',
        description: 'تعلمي أساسيات التجميل في 6 أشهر مكثفة خلال دوراتنا المسائية.',
        duration: '6 أشهر',
        price: '800 درهم / الشهر',
        benefits: ['عناية سريعة', 'تطبيق مكثف', 'معدات حديثة'],
        curriculum: ['عناية أساسية بالوجه', 'مكياج سريع', 'إزالة الشعر', 'مانيكير سريع'],
      }
    }
  }
];
