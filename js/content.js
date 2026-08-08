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
      title: "Профессиональное дооснащение автомобилей\nв Лейпциге и регионе",
      subtitle: "Штатные мультимедийные опции, акустика, электроника и аккуратный монтаж без повреждения салона. Лично гарантирую безопасную и чистую установку.",
      ctaPrimary: "Написать в Telegram",
      ctaSecondary: "Услуги",
      badges: [
        "Лично выполняю монтаж и контроль качества",
        "Сохраняю штатную электрику и чистую сборку салона",
        "Скрытая прокладка кабелей и подключение plug & play"
      ],
      pillars: [
        { title: "Retrofit", note: "мультимедиа, камеры, опции" },
        { title: "Автозвук", note: "акустика, сабвуферы, DSP" },
        { title: "Опции", note: "штатные функции и дооснащение" },
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
        title: "Дооснащение и штатные опции",
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
            title: "Штатные функции",
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
        a: "Напишите мне в Telegram и укажите модель, год и желаемые опции. Я дам ориентир по стоимости и объясню, что лучше сделать в вашем случае."
      }
    ],
    contacts: {
      phoneLabel: "Телефон",
      telegramLabel: "Telegram",
      instagramLabel: "Instagram",
      city: "Лейпциг и регион",
      cityLabel: "Где я работаю",
      ctaTelegram: "Написать мне в Telegram",
      ctaCall: "Позвонить",
      ctaInstagram: "Instagram",
      note: "Обычно отвечаю в течение дня. Самый быстрый способ связаться со мной: Telegram."
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
      title: "Professionelle Fahrzeug-Nachrüstung\nin Leipzig und Umgebung",
      subtitle: "OEM-Multimedia, Car-HiFi, Elektronik und sorgfältige Montage ohne Schäden am Innenraum. Ich garantiere persönlich eine saubere und sichere Installation.",
      ctaPrimary: "In Telegram schreiben",
      ctaSecondary: "Leistungen",
      badges: [
        "Ich führe Einbau und Qualitätskontrolle selbst durch",
        "Ich erhalte die OEM-Elektrik und montiere sauber",
        "Verdeckte Kabelverlegung und Plug-and-Play-Anbindung"
      ],
      pillars: [
        { title: "Retrofit", note: "Multimedia, Kameras, Optionen" },
        { title: "Car-HiFi", note: "Lautsprecher, Subwoofer, DSP" },
        { title: "Optionen", note: "OEM-Funktionen und Nachrüstung" },
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
        title: "Nachrüstung und Optionen",
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
            title: "OEM-Funktionen",
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
        a: "Schreiben Sie mir in Telegram mit Modell, Baujahr und gewünschter Ausstattung. Ich gebe Ihnen einen realistischen Preisrahmen und eine klare Empfehlung."
      }
    ],
    contacts: {
      phoneLabel: "Telefon",
      telegramLabel: "Telegram",
      instagramLabel: "Instagram",
      city: "Leipzig und Umgebung",
      cityLabel: "Einsatzgebiet",
      ctaTelegram: "Mir in Telegram schreiben",
      ctaCall: "Anrufen",
      ctaInstagram: "Instagram",
      note: "Ich antworte in der Regel am selben Tag. Am schnellsten erreichen Sie mich über Telegram."
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
