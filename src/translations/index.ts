export type Language = 'fr' | 'ar';

export interface Translations {
  nav: {
    home: string;
    formations: string;
    diurne: string;
    nocturne: string;
    graduates: string;
    gallery: string;
    about: string;
    contact: string;
    inscription: string;
  };
  hero: {
    welcome: string;
    title: string;
    formations: string;
    inscription: string;
  };
  home: {
    accreditations: {
      text: string;
    };
    intro: {
      tag: string;
      title: string;
      desc1: string;
      desc2: string;
    };
    destiny: string;
    stats: {
      graduates: string;
      experience: string;
      diplomas: string;
      experts: string;
    };
    formations: {
      title: string;
      tag: string;
      cta: string;
      hommes: string;
      hommesDesc: string;
      femmes: string;
      femmesDesc: string;
      esthetique: string;
      esthetiqueDesc: string;
    };
    modal: {
      details: string;
    };
    cta: {
      t: string;
      d: string;
      btn: string;
    };
  };
  about: {
    tag: string;
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
    p3: string;
    values: {
      v1: { t: string; d: string };
      v2: { t: string; d: string };
      v3: { t: string; d: string };
      v4: { t: string; d: string };
    };
  };
  contact: {
    tag: string;
    title: string;
    addr: string;
    phone: string;
    email: string;
    hours: string;
    helpTitle: string;
    helpDesc: string;
    formTitle: string;
    formName: string;
    formEmail: string;
    formMsg: string;
    formSend: string;
    mapBtn: string;
  };
  programs: {
    diurne: {
      tag: string;
      title: string;
      desc: string;
      back: string;
      mixte: string;
      hommes: string;
      femmes: string;
      esthetique: string;
      details: string;
      premium: string;
    };
    nocturne: {
      tag: string;
      title: string;
      desc: string;
      mixte: string;
      hommes: string;
      femmes: string;
      esthetique: string;
      details: string;
    };
  };
  gallery: {
    tag: string;
    title: string;
    desc: string;
    all: string;
    femmes: string;
    hommes: string;
  };
  graduates: {
    tag: string;
    title: string;
    desc: string;
  };
  formationsPage: {
    tag: string;
    title: string;
    desc: string;
    diurne: {
      title: string;
      desc: string;
    };
    nocturne: {
      title: string;
      desc: string;
    };
    cta: string;
  };
  inscription: {
    tag: string;
    title: string;
    back: string;
    docs: {
      title: string;
      list: string[];
      note: string;
    };
    process: {
      title: string;
      steps: { title: string; desc: string }[];
    };
    form: {
      title: string;
      pre: string;
      name: string;
      phone: string;
      select: string;
      send: string;
    };
    modal: {
      tag: string;
      title: string;
      desc: string;
      diurne: string;
      nocturne: string;
      diurneDesc: string;
      nocturneDesc: string;
    };
  };
  footer: {
    desc: string;
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      home: 'Accueil',
      formations: 'Formations',
      diurne: 'Période Diurne',
      nocturne: 'Période Nocturne',
      graduates: 'Diplômés',
      gallery: 'Galerie',
      about: 'À Propos',
      contact: 'Contact',
      inscription: 'Inscription',
    },
    hero: {
      welcome: "Bienvenue à",
      title: "L'Institut Factory",
      formations: 'Formations',
      inscription: "S'inscrire",
    },
    home: {
      accreditations: {
        text: "Votre avenir professionnel commence par un diplôme reconnu. L'Institut Factory est un établissement de formation professionnelle agréé, dont les programmes sont validés par les autorités compétentes, garantissant une insertion rapide et crédible dans le monde de la coiffure d'excellence.",
      },
      intro: {
        tag: "L'Excellence à Ouled Teima",
        title: "VOTRE AVENIR DANS LA HAUTE COIFFURE COMMENCE ICI",
        desc1: "L'Institut Factory n'est pas seulement une école, c'est un tremplin vers une carrière d'exception. Situé au cœur d'Ouled Teima, notre centre de formation professionnelle vous offre un environnement d'apprentissage moderne, alliant théorie rigoureuse et pratique intensive.",
        desc2: "Accrédité par l'État Marocain, notre diplôme est un gage de qualité et de sérieux, ouvrant les portes des plus grands salons et permettant l'entrepreneuriat avec assurance.",
      },
      destiny: "CHOISISSEZ VOTRE DESTIN",
      stats: {
        graduates: 'ÉTUDIANTS FORMÉS',
        experience: "ANNÉES D'EXPÉRIENCE",
        diplomas: 'SPÉCIALITÉS CLÉS',
        experts: 'TAUX DE RÉUSSITE',
      },
      formations: {
        title: 'CHOISISSEZ VOTRE DESTIN',
        tag: 'Nos Programmes',
        cta: 'Choisir ma période',
        hommes: 'Coiffure Hommes',
        hommesDesc: "Maîtrisez l’art de la coupe masculine, du barbier traditionnel aux styles les plus contemporains.",
        femmes: 'Coiffure Femmes',
        femmesDesc: "Devenez un expert en visagisme, colorimétrie et coiffure événementielle de haute volée.",
        esthetique: 'Esthétique & Soins',
        esthetiqueDesc: "Apprenez les techniques de pointe en soins du visage, maquillage professionnel et bien-être.",
      },
      modal: {
        details: "Détails de la formation",
      },
      cta: {
        t: "PRÊT À REJOINDRE L'ÉLITE ?",
        d: "Les inscriptions sont ouvertes pour la session prochaine. Ne laissez pas passer votre chance de devenir un professionnel reconnu.",
        btn: "S'inscrire Maintenant",
      }
    },
    about: {
      tag: 'Notre Histoire',
      title: "L'INSTITUT FACTORY",
      subtitle: "PLUS QU'UNE ÉCOLE, UNE ACADÉMIE DE TALENTS.",
      p1: "Fondé avec la vision de professionnaliser le secteur de la beauté à Ouled Teima, l'Institut Factory s'est imposé comme la référence régionale en matière de formation aux métiers de la coiffure et de l'esthétique.",
      p2: "Notre mission est simple : transformer votre passion en une expertise reconnue. Grâce à un corps professoral d'élite et des infrastructures de pointe, nous offrons à nos étudiants les outils nécessaires pour briller dans un marché compétitif.",
      p3: "Accrédité par l'État Marocain, notre diplôme est un gage de qualité et de sérieux, ouvrant les portes des plus grands salons et permettant l'entrepreneuriat avec assurance.",
      values: {
        v1: { t: 'Excellence', d: 'Nous visons la perfection dans chaque geste technique.' },
        v2: { t: 'Innovation', d: 'Nous formons aux dernières tendances et technologies du secteur.' },
        v3: { t: 'Passion', d: 'L’amour du métier est au cœur de notre pédagogie.' },
        v4: { t: 'Rigueur', d: 'Une discipline professionnelle pour garantir votre succès.' },
      }
    },
    contact: {
      tag: 'Contactez-nous',
      title: 'RESTEZ EN CONTACT',
      addr: 'Adresse',
      phone: 'Téléphone',
      email: 'Email',
      hours: 'Horaires',
      helpTitle: "Besoin d'aide ?",
      helpDesc: "Nos conseillers sont à votre écoute pour répondre à toutes vos questions concernant les formations et l'inscription.",
      formTitle: 'Envoyez-nous un message',
      formName: 'Nom',
      formEmail: 'Email',
      formMsg: 'Votre message...',
      formSend: 'Envoyer sur WhatsApp',
      mapBtn: 'Ouvrir dans Google Maps',
    },
    programs: {
      diurne: {
        tag: 'Programmes Intensifs',
        title: 'PÉRIODE DIURNE',
        desc: 'Formations complètes de 10 à 12 mois pour une immersion totale dans le monde de la beauté.',
        back: 'Retour',
        mixte: 'Coiffure Mixte',
        hommes: 'Coiffure Hommes',
        femmes: 'Coiffure Femmes',
        esthetique: 'Esthétique & Soins',
        details: 'Voir les détails',
        premium: 'Pack Premium',
      },
      nocturne: {
        tag: 'Programmes Accélérés',
        title: 'PÉRIODE NOCTURNE',
        desc: 'Formations concentrées pour apprendre les fondamentaux en un temps record.',
        mixte: 'Coiffure Mixte',
        hommes: 'Coiffure Hommes',
        femmes: 'Coiffure Femmes',
        esthetique: 'Esthétique & Soins',
        details: 'Voir les détails',
      }
    },
    gallery: {
      tag: 'Immersion',
      title: 'NOTRE UNIVERS',
      desc: "Explorez nos locaux modernes, nos salles de cours équipées et l'ambiance créative qui règne au sein de l'institut.",
      all: 'Tout',
      femmes: 'Esthétique & Femmes',
      hommes: 'Coiffure Hommes',
    },
    graduates: {
      tag: 'Succès & Fierté',
      title: 'NOS DIPLÔMÉS',
      desc: "Découvrez les visages de ceux qui ont fait confiance à l'Institut Factory pour lancer leur carrière. Chaque photo représente une réussite, un talent et un avenir prometteur.",
    },
    formationsPage: {
      tag: 'Nos Programmes',
      title: 'VOTRE FORMATION',
      desc: 'Choisissez le programme qui correspond à votre emploi du temps et à vos ambitions professionnelles.',
      diurne: {
        title: 'PÉRIODE DIURNE',
        desc: 'Formations complètes de 10 à 12 mois pour une immersion totale.',
      },
      nocturne: {
        title: 'PÉRIODE NOCTURNE',
        desc: 'Programmes accélérés de 6 mois pour les personnes actives.',
      },
      cta: 'Découvrir les FILIÈRES',
    },
    inscription: {
      tag: 'Rejoignez-nous',
      title: "DOSSIER D'INSCRIPTION",
      back: 'Retour',
      docs: {
        title: 'Documents Requis',
        list: [
          '2 Certificats de scolarité originaux',
          '1 Copie de la carte d’identité nationale (CIN)',
          'Extrait d’acte de naissance',
          '4 Photos d’identité récentes',
          'Frais d’assurance et de tablier (300 DH)'
        ],
        note: "Note : Les certificats de scolarité doivent être originaux. Pour les mineurs, la présence d'un tuteur légal est requise lors de l'inscription.",
      },
      process: {
        title: 'LE PROCESSUS SIMPLE',
        steps: [
          { title: 'Dossier', desc: 'Préparez les documents requis listés ci-contre.' },
          { title: 'Visite', desc: 'Venez nous rencontrer pour une visite de l’institut.' },
          { title: 'Entretien', desc: 'Un court échange pour définir vos objectifs.' },
          { title: 'Validation', desc: 'Finalisez votre inscription et commencez votre futur.' }
        ]
      },
      form: {
        title: 'Choisissez votre formation',
        pre: 'Pré-inscription Rapide',
        name: 'Nom Complet',
        phone: 'Téléphone',
        select: 'Choisir une formation',
        send: 'Envoyer sur WhatsApp',
      },
      modal: {
        tag: 'Sélection',
        title: 'VOTRE PÉRIODE',
        desc: 'Choisissez votre créneau',
        diurne: 'Diurne',
        nocturne: 'Nocturne',
        diurneDesc: '10-12 mois (Jour)',
        nocturneDesc: '6 mois (Soir)',
      }
    },
    footer: {
      desc: "L'excellence dans la formation professionnelle. Devenez un expert de la coiffure et de l'esthétique avec l'Institut Factory.",
      copyright: '© 2024 Institut Factory. Tous droits réservés.',
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      formations: 'التكوينات',
      diurne: 'الفترة النهارية',
      nocturne: 'الفترة المسائية',
      graduates: 'الخريجون',
      gallery: 'المعرض',
      about: 'عن المعهد',
      contact: 'اتصل بنا',
      inscription: 'تسجيل',
    },
    hero: {
      welcome: 'مرحبا بكم في',
      title: 'معهد فاكتوري',
      formations: 'التكوينات',
      inscription: 'تسجيل',
    },
    home: {
      accreditations: {
        text: "مستقبلك المهني يبدأ بدبلوم معترف به. معهد Factory هو مؤسسة للتكوين المهني معتمدة، برامجها مصادق عليها من طرف السلطات المختصة، مما يضمن اندماجاً سريعاً وموثوقاً في عالم الحلاقة المتميزة.",
      },
      intro: {
        tag: 'لماذا معهدنا؟',
        title: 'مستقبلك في عالم الحلاقة الراقية يبدأ من هنا',
        desc1: 'نحن فخورون بكوننا المعهد الرائد في منطقة أولاد تايمة، حيث نقدم تكويناً احترافياً عالي المستوى يلبي احتياجات سوق الشغل.',
        desc2: 'بفضل خبرة تمتد لأكثر من 15 سنة، معهدنا معتمد من طرف الدولة المغربية، مما يضمن لكم جودة تعليمية وشهادة معترف بها وطنيًا ودوليًا.',
      },
      destiny: 'اختر مستقبلك',
      stats: {
        graduates: 'طلاب مكونون',
        experience: 'سنوات خبرة',
        diplomas: 'تخصصات رئيسية',
        experts: 'نسبة النجاح',
      },
      formations: {
        title: 'اختر مسارك المهني',
        tag: 'برامجنا',
        cta: 'اختر الفترة',
        hommes: 'حلاقة الرجال',
        hommesDesc: 'أتقن فن الحلاقة الرجالية، من الحلاقة التقليدية إلى أحدث الصيحات المعاصرة.',
        femmes: 'حلاقة النساء',
        femmesDesc: 'كن خبيراً في تصفيف الشعر، تلوينه وتصفيفات المناسبات الراقية.',
        esthetique: 'التجميل والعناية',
        esthetiqueDesc: 'تعلم أحدث التقنيات في العناية بالبشرة، المكياج الاحترافي والرفاهية.',
      },
      modal: {
        details: 'تفاصيل البرنامج',
      },
      cta: {
        t: 'جاهز للانضمام للنخبة؟',
        d: 'التسجيل مفتوح للموسم القادم. لا تفوت فرصتك لتصبح محترفاً معترفاً به.',
        btn: 'سجل الآن',
      }
    },
    about: {
      tag: 'قصتنا',
      title: 'معهد فاكتوري',
      subtitle: 'أكثر من مجرد مدرسة، أكاديمية للمواهب.',
      p1: 'تأسس معهد فاكتوري برؤية تهدف إلى إضفاء المهنية على قطاع التجميل في أولاد تايمة، وفرض نفسه كمرجع إقليمي في مجال التكوين في مهن الحلاقة والتجميل.',
      p2: 'مهمتنا بسيطة: تحويل شغفك إلى خبرة معترف بها. بفضل طاقم تدريسي متميز وبنيات تحتية متطورة، نوفر لطلابنا الأدوات اللازمة للتألق في سوق تنافسي.',
      p3: 'دبلومنا المعتمد من طرف الدولة المغربية هو ضمان للجودة والجدية، يفتح الأبواب لأكبر الصالونات ويسمح بريادة الأعمال بكل ثقة.',
      values: {
        v1: { t: 'التميز', d: 'نسعى للكمال في كل حركة تقنية.' },
        v2: { t: 'الابتكار', d: 'ندرب على أحدث الصيحات والتكنولوجيا في القطاع.' },
        v3: { t: 'الشغف', d: 'حب المهنة هو جوهر بيداغوجيتنا.' },
        v4: { t: 'الانضباط', d: 'انضباط مهني لضمان نجاحكم.' },
      }
    },
    contact: {
      tag: 'اتصل بنا',
      title: 'ابق على تواصل',
      addr: 'العنوان',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      hours: 'الأوقات',
      helpTitle: 'هل تحتاج للمساعدة؟',
      helpDesc: 'مستشارونا في خدمتكم للإجابة على جميع تساؤلاتكم بخصوص التكوين والتسجيل.',
      formTitle: 'أرسل لنا رسالة',
      formName: 'الاسم',
      formEmail: 'البريد الإلكتروني',
      formMsg: 'رسالتك...',
      formSend: 'إرسال عبر واتساب',
      mapBtn: 'فتح في خرائط جوجل',
    },
    programs: {
      diurne: {
        tag: 'برامج مكثفة',
        title: 'فترة نهارية',
        desc: 'تكوينات كاملة من 10 إلى 12 شهراً لانغماس كلي في عالم الجمال.',
        back: 'رجوع',
        mixte: 'حلاقة مختلطة',
        hommes: 'حلاقة الرجال',
        femmes: 'حلاقة النساء',
        esthetique: 'التجميل والعناية',
        details: 'رؤية التفاصيل',
        premium: 'عرض ممتاز',
      },
      nocturne: {
        tag: 'برامج سريعة',
        title: 'فترة مسائية',
        desc: 'تكوينات مركزة لتعلم الأساسيات في وقت قياسي.',
        mixte: 'حلاقة مختلطة',
        hommes: 'حلاقة الرجال',
        femmes: 'حلاقة النساء',
        esthetique: 'التجميل والعناية',
        details: 'رؤية التفاصيل',
      }
    },
    gallery: {
      tag: 'انغماس',
      title: 'عالمنا',
      desc: 'استكشف مرافقنا الحديثة، وقاعاتنا المجهزة، والجو الإبداعي داخل المعهد.',
      all: 'الكل',
      femmes: 'التجميل والنساء',
      hommes: 'حلاقة الرجال',
    },
    graduates: {
      tag: 'نجاح وفخر',
      title: 'خريجونا',
      desc: 'اكتشف وجوه من وضعوا ثقتهم في معهد Factory لإطلاق مسيرتهم المهنية. كل صورة تمثل نجاحاً، موهبة ومستقبلاً واعداً.',
    },
    formationsPage: {
      tag: 'برامجنا',
      title: 'تكوينكم',
      desc: 'اختر البرنامج الذي يناسب جدولك الزمني وطموحاتك المهنية.',
      diurne: {
        title: 'الفترة النهارية',
        desc: 'تكوينات كاملة من 10 إلى 12 شهراً لانغماس كلي.',
      },
      nocturne: {
        title: 'الفترة المسائية',
        desc: 'برامج سريعة من 6 أشهر للأشخاص النشيطين.',
      },
      cta: 'اكتشف التخصصات',
    },
    inscription: {
      tag: 'انضم إلينا',
      title: 'ملف التسجيل',
      back: 'رجوع',
      docs: {
        title: 'الوثائق المطلوبة',
        list: [
          'شهادتان مدرسيتان أصليتان',
          'نسخة من بطاقة التعريف الوطنية',
          'عقد الازدياد',
          '4 صور شمسية حديثة',
          'واجبات التأمين والمئزر (300 درهم)'
        ],
        note: 'ملاحظة: يجب أن تكون الشواهد المدرسية أصلية. بالنسبة للقاصرين، حضور ولي الأمر ضروري عند التسجيل.',
      },
      process: {
        title: 'خطوات بسيطة',
        steps: [
          { title: 'الملف', desc: 'قم بإعداد الوثائق المطلوبة المذكورة جانباً.' },
          { title: 'الزيارة', desc: 'تفضل بزيارتنا للتعرف على المعهد.' },
          { title: 'المقابلة', desc: 'مقابلة قصيرة لتحديد أهدافك.' },
          { title: 'التأكيد', desc: 'أتمم تسجيلك وابدأ مستقبلك.' }
        ]
      },
      form: {
        title: 'اختر تخصصك',
        pre: 'تسجيل قبلي سريع',
        name: 'الاسم الكامل',
        phone: 'الهاتف',
        select: 'اختر تخصصاً',
        send: 'إرسال عبر واتساب',
      },
      modal: {
        tag: 'اختيار',
        title: 'فترة التكوين',
        desc: 'اختر وقتك المفضل',
        diurne: 'نهارية',
        nocturne: 'مسائية',
        diurneDesc: '10-12 شهراً (نهارا)',
        nocturneDesc: '6 أشهر (مساء)',
      }
    },
    footer: {
      desc: 'التميز في التكوين المهني. كن خبيراً في الحلاقة والتجميل مع معهد Factory.',
      copyright: '© 2024 معهد Factory. جميع الحقوق محفوظة.',
    }
  },
};
