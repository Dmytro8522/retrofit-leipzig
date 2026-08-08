/* retrofit.leipzig — bilingual site content (RU / DE) */

const SITE_CONTENT = {
  ru: {
    meta: {
      title: "retrofit.leipzig — retrofit, автозвук и ambient light в Лейпциге",
      description: "Частный мастер по дооснащению автомобилей в Лейпциге: мультимедиа, автозвук, ambient light, камеры, кодирование и аккуратный монтаж без повреждений салона."
    },
    nav: {
      services: "Услуги",
      sound: "Автозвук",
      electronics: "Электроника",
      expertise: "Обо мне",
      faq: "FAQ",
      contacts: "Контакты",
      cta: "Telegram"
    },
    langSwitch: { ru: "RU", de: "DE" },
    hero: {
      eyebrow: "Retrofit · Car Audio · Ambient Light · Leipzig",
      title: "Профессиональный Retrofit, Автозвук и Ambient Light\nв Лейпциге и регионе",
      subtitle: "Индивидуальное дооснащение авто, штатные мультимедийные опции, контурное освещение и качественный звук. Лично гарантирую аккуратный монтаж без повреждения салона.",
      ctaPrimary: "Узнать стоимость в Telegram / WhatsApp",
      ctaSecondary: "Услуги",
      badges: [
        "Лично выполняю монтаж и контроль качества",
        "Сохраняю штатную электрику и чистую сборку салона",
        "Скрытая прокладка кабелей и подключение plug & play"
      ],
      pillars: [
        { title: "Retrofit", note: "мультимедиа, камеры, опции" },
        { title: "Автозвук", note: "акустика, сабвуферы, DSP" },
        { title: "Ambient Light", note: "многоцветная подсветка салона" },
        { title: "Электроника", note: "диагностика и кодирование" }
      ]
    },
    sectionEyebrows: {
      services: "Услуги",
      servicesTitle: "Что я делаю лично",
      servicesLead: "Работаю как частный мастер: сам принимаю автомобиль, сам выполняю монтаж и сам отвечаю за результат.",
      expertise: "Обо мне",
      expertiseTitle: "Личный инженерный подход",
      expertiseLead: "Вы общаетесь напрямую со мной и заранее понимаете, что именно я буду делать с вашим автомобилем и почему.",
      faq: "FAQ",
      faqTitle: "Частые вопросы перед записью",
      contacts: "Контакты",
      contactsTitle: "Связь напрямую со мной",
      contactsLead: "Напишите мне модель, год и задачу. Я отвечу по срокам, совместимости и стоимости без лишних обещаний."
    },
    services: [
      {
        id: "retrofit",
        title: "Дооснащение и Ambient Light",
        tagline: "Аккуратный retrofit с сохранением заводской логики",
        groups: [
          {
            title: "Дооснащение салона",
            items: [
              "Установка модулей CarPlay / Android Auto",
              "Установка камер заднего и кругового обзора",
              "Активация штатных опций после монтажа",
              "Подключение оборудования plug & play без вмешательства в критичные цепи"
            ]
          },
          {
            title: "Ambient Light",
            items: [
              "Многоцветная контурная подсветка салона",
              "Скрытый монтаж без торчащих проводов",
              "Интеграция в штатное меню или управление через приложение",
              "Аккуратная разборка и сборка салона без скрипов"
            ]
          }
        ]
      },
      {
        id: "sound",
        title: "Автозвук",
        tagline: "Чистый звук, правильная разводка и настройка под ваш салон",
        groups: [
          {
            title: "Система",
            items: [
              "Подбор и замена штатной акустики",
              "Изготовление и установка скрытых сабвуферов",
              "Настройка процессорных усилителей (DSP)",
              "Шумоизоляция с сохранением заводской проводки"
            ]
          },
          {
            title: "Монтаж",
            items: [
              "Скрытая прокладка силовых и сигнальных кабелей",
              "Безопасная изоляция всех соединений",
              "Сборка салона без следов вмешательства",
              "Проверка системы на шумы, наводки и перегрев"
            ]
          }
        ]
      },
      {
        id: "electronics",
        title: "Электроника и диагностика",
        tagline: "Точный монтаж и корректная работа всех функций после установки",
        groups: [
          {
            title: "Электроника",
            items: [
              "Диагностика перед началом работ",
              "Кодирование и адаптация после установки оборудования",
              "Активация штатных функций по конфигурации автомобиля",
              "Контроль нагрузки на штатную электронику и аккумулятор"
            ]
          },
          {
            title: "Проверка результата",
            items: [
              "Тест всех новых функций на месте",
              "Проверка ошибок и стабильности работы блоков",
              "Финальная приемка с пояснением, как пользоваться системой",
              "Рекомендации по дальнейшим доработкам без лишних трат"
            ]
          }
        ]
      }
    ],
    articles: [
      {
        title: "Как я работаю с салоном",
        body: "Я лично разбираю и собираю салон специальным инструментом для клипс и декоративных панелей. Работаю аккуратно с пластиком и обшивками, чтобы после сборки не появлялись скрипы, люфты и следы демонтажа."
      },
      {
        title: "Как я подключаю оборудование",
        body: "Я сохраняю штатную электрику и по возможности использую схему plug & play: провод в провод, без хаотичных врезок. Все соединения изолирую, кабели укладываю скрыто и фиксирую так, чтобы они не терлись и не шумели в движении."
      },
      {
        title: "Почему ко мне обращаются напрямую",
        body: "Вы договариваетесь напрямую со мной, а не с менеджером. Я сразу объясняю, что реально сделать на вашем автомобиле, сколько это займет и какой будет результат по факту, без рекламных обещаний."
      }
    ],
    faq: [
      {
        q: "Это безопасно для штатной электроники и аккумулятора?",
        a: "Да. Перед монтажом я проверяю конфигурацию автомобиля, а при подключении сохраняю штатную логику цепей. После установки делаю диагностику и контроль ошибок, чтобы исключить лишнюю нагрузку на электронику и аккумулятор."
      },
      {
        q: "Сколько по времени занимают работы?",
        a: "Простые задачи обычно занимают от 2 до 4 часов. Комплексные проекты с автозвуком, подсветкой и кодированием могут занимать 1-2 дня. Точный срок я называю после уточнения задачи и автомобиля."
      },
      {
        q: "Есть ли личная гарантия на монтаж?",
        a: "Да. Я лично отвечаю за выполненный монтаж и корректную сборку салона. Если после установки по моей части возникает вопрос, я устраняю его в рабочем порядке."
      },
      {
        q: "Как узнать цену?",
        a: "Напишите мне в Telegram или WhatsApp и укажите модель, год и желаемые опции. Я дам ориентир по стоимости и объясню, что лучше сделать в вашем случае."
      }
    ],
    contacts: {
      phoneLabel: "Телефон",
      telegramLabel: "Telegram",
      whatsappLabel: "WhatsApp",
      instagramLabel: "Instagram",
      city: "Лейпциг и регион",
      cityLabel: "Где я работаю",
      ctaTelegram: "Написать мне в Telegram",
      ctaCall: "Позвонить",
      ctaInstagram: "Instagram",
      note: "Обычно отвечаю в течение дня. Самый быстрый способ связаться со мной: Telegram или WhatsApp."
    },
    footer: {
      tagline: "Частный мастер по retrofit, автозвуку и автомобильной электронике. Лейпциг.",
      rights: "Все права защищены.",
      madeWith: "Я лично веду проект от первой консультации до финальной проверки."
    },
    mobileBar: { call: "Позвонить", telegram: "Telegram" },
    ui: { menuOpen: "Меню", close: "Закрыть", scrollTop: "Наверх" }
  },

  de: {
    meta: {
      title: "retrofit.leipzig — Retrofit, Car-HiFi und Ambient Light in Leipzig",
      description: "Privater Spezialist für Fahrzeug-Nachrüstung in Leipzig: Multimedia, Car-HiFi, Ambient Light, Kameras und Codierung mit sauberer Montage ohne Innenraumschäden."
    },
    nav: {
      services: "Leistungen",
      sound: "Car-HiFi",
      electronics: "Elektronik",
      expertise: "Über mich",
      faq: "FAQ",
      contacts: "Kontakt",
      cta: "Telegram"
    },
    langSwitch: { ru: "RU", de: "DE" },
    hero: {
      eyebrow: "Retrofit · Car Audio · Ambient Light · Leipzig",
      title: "Professionelles Retrofit, Car-HiFi und Ambient Light\nin Leipzig und Umgebung",
      subtitle: "Individuelle Fahrzeug-Nachrüstung, OEM-Multimedia, Ambientebeleuchtung und sauberer Klang. Ich garantiere persönlich eine sorgfältige Montage ohne Schäden am Innenraum.",
      ctaPrimary: "Preis in Telegram / WhatsApp anfragen",
      ctaSecondary: "Leistungen",
      badges: [
        "Ich führe Einbau und Qualitätskontrolle selbst durch",
        "Ich erhalte die OEM-Elektrik und montiere sauber",
        "Verdeckte Kabelverlegung und Plug-and-Play-Anbindung"
      ],
      pillars: [
        { title: "Retrofit", note: "Multimedia, Kameras, Optionen" },
        { title: "Car-HiFi", note: "Lautsprecher, Subwoofer, DSP" },
        { title: "Ambient Light", note: "mehrfarbige Innenraumbeleuchtung" },
        { title: "Elektronik", note: "Diagnose und Codierung" }
      ]
    },
    sectionEyebrows: {
      services: "Leistungen",
      servicesTitle: "Was ich persönlich anbiete",
      servicesLead: "Ich arbeite als privater Spezialist: Ich nehme das Fahrzeug an, ich baue ein und ich trage die Verantwortung für das Ergebnis.",
      expertise: "Über mich",
      expertiseTitle: "Persönlicher technischer Ansatz",
      expertiseLead: "Sie sprechen direkt mit mir und wissen im Voraus, welche Arbeiten ich an Ihrem Fahrzeug ausführe und warum.",
      faq: "FAQ",
      faqTitle: "Häufige Fragen vor der Terminvereinbarung",
      contacts: "Kontakt",
      contactsTitle: "Direkter Kontakt zu mir",
      contactsLead: "Senden Sie mir Modell, Baujahr und Aufgabe. Ich nenne Ihnen realistische Zeiten, Kompatibilität und Preisrahmen."
    },
    services: [
      {
        id: "retrofit",
        title: "Nachrüstung und Ambient Light",
        tagline: "Saubere Nachrüstung mit OEM-Logik",
        groups: [
          {
            title: "Nachrüstung innen",
            items: [
              "Einbau von CarPlay- und Android-Auto-Modulen",
              "Einbau von Rückfahr- und 360-Grad-Kameras",
              "Freischaltung von OEM-Funktionen nach dem Einbau",
              "Plug-and-Play-Anbindung ohne kritische Eingriffe in die Bordelektrik"
            ]
          },
          {
            title: "Ambient Light",
            items: [
              "Mehrfarbige konturierte Innenraumbeleuchtung",
              "Verdeckter Einbau ohne sichtbare Kabel",
              "Integration ins OEM-Menü oder App-Steuerung",
              "Demontage und Montage ohne Klappern oder Beschädigungen"
            ]
          }
        ]
      },
      {
        id: "sound",
        title: "Car-HiFi",
        tagline: "Klarer Klang, saubere Verkabelung und präzise DSP-Abstimmung",
        groups: [
          {
            title: "System",
            items: [
              "Auswahl und Austausch der Serienlautsprecher",
              "Anfertigung und Einbau verdeckter Subwoofer",
              "Abstimmung von DSP-Verstärkern",
              "Dämmung unter Erhalt der OEM-Verkabelung"
            ]
          },
          {
            title: "Einbau",
            items: [
              "Verdeckte Verlegung von Strom- und Signalkabeln",
              "Saubere Isolierung aller Verbindungen",
              "Montage ohne sichtbare Eingriffsspuren",
              "Prüfung auf Störgeräusche, Überhitzung und Stabilität"
            ]
          }
        ]
      },
      {
        id: "electronics",
        title: "Elektronik und Diagnose",
        tagline: "Korrekte Funktion aller Systeme nach der Nachrüstung",
        groups: [
          {
            title: "Elektronik",
            items: [
              "Diagnose vor dem Einbau",
              "Codierung und Anpassung nach der Montage",
              "Freischaltung OEM-Funktionen passend zur Fahrzeugausstattung",
              "Kontrolle der Last auf Bordelektrik und Batterie"
            ]
          },
          {
            title: "Abnahme",
            items: [
              "Funktionstest aller nachgerüsteten Optionen",
              "Fehlerscan und Stabilitätsprüfung der Steuergeräte",
              "Übergabe mit kurzer Bedienerklärung",
              "Empfehlung für sinnvolle nächste Ausbaustufen"
            ]
          }
        ]
      }
    ],
    articles: [
      {
        title: "Wie ich mit dem Innenraum arbeite",
        body: "Ich demontiere und montiere den Innenraum selbst mit passendem Werkzeug für Clips und Verkleidungen. Ich arbeite vorsichtig mit Kunststoff und Bezügen, damit nach der Montage keine Knarzgeräusche, Spuren oder lockeren Teile entstehen."
      },
      {
        title: "Wie ich die Elektrik anschließe",
        body: "Ich erhalte die OEM-Elektrik und nutze nach Möglichkeit Plug-and-Play: Leitung zu Leitung, ohne chaotische Einschnitte. Ich isoliere Verbindungen sauber und verlege Kabel verdeckt, damit nichts scheuert oder im Betrieb stört."
      },
      {
        title: "Warum der direkte Kontakt wichtig ist",
        body: "Sie sprechen direkt mit mir statt mit einem Vermittler. Ich erkläre klar, was an Ihrem Fahrzeug sinnvoll und machbar ist, wie lange es dauert und welches Ergebnis Sie realistisch erwarten können."
      }
    ],
    faq: [
      {
        q: "Ist die Nachrüstung sicher für Bordelektrik und Batterie?",
        a: "Ja. Vor dem Einbau prüfe ich die Fahrzeugkonfiguration und halte mich an die OEM-Logik der elektrischen Kreise. Nach dem Einbau führe ich Diagnose und Fehlerscan durch, damit die Systeme stabil arbeiten."
      },
      {
        q: "Wie lange dauern die Arbeiten?",
        a: "Einfache Arbeiten dauern meist 2 bis 4 Stunden. Umfangreiche Projekte mit Audio, Ambient Light und Codierung dauern 1 bis 2 Tage. Den genauen Zeitrahmen nenne ich nach Klärung von Fahrzeug und Aufgabe."
      },
      {
        q: "Gibt es eine persönliche Garantie auf die Montage?",
        a: "Ja. Ich verantworte den Einbau persönlich. Wenn nach der Übergabe ein Punkt aus meinem Arbeitsbereich geklärt werden muss, behebe ich ihn in angemessener Zeit."
      },
      {
        q: "Wie erfahre ich den Preis?",
        a: "Schreiben Sie mir in Telegram oder WhatsApp mit Modell, Baujahr und gewünschter Ausstattung. Ich gebe Ihnen einen realistischen Preisrahmen und eine klare Empfehlung."
      }
    ],
    contacts: {
      phoneLabel: "Telefon",
      telegramLabel: "Telegram",
      whatsappLabel: "WhatsApp",
      instagramLabel: "Instagram",
      city: "Leipzig und Umgebung",
      cityLabel: "Einsatzgebiet",
      ctaTelegram: "Mir in Telegram schreiben",
      ctaCall: "Anrufen",
      ctaInstagram: "Instagram",
      note: "Ich antworte in der Regel am selben Tag. Am schnellsten erreichen Sie mich über Telegram oder WhatsApp."
    },
    footer: {
      tagline: "Privater Spezialist für Retrofit, Car-HiFi und Fahrzeugelektronik in Leipzig.",
      rights: "Alle Rechte vorbehalten.",
      madeWith: "Ich begleite jedes Projekt persönlich von der Anfrage bis zur Endkontrolle."
    },
    mobileBar: { call: "Anrufen", telegram: "Telegram" },
    ui: { menuOpen: "Menü", close: "Schließen", scrollTop: "Nach oben" }
  }
};

window.SITE_CONTENT = SITE_CONTENT;
