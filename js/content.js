/* retrofit.leipzig — bilingual site content (RU / DE)
   Wszystko structured per-language so main.js can just do SITE_CONTENT[lang] */

const SITE_CONTENT = {
  ru: {
    meta: {
      title: "retrofit.leipzig — OEM-дооснащение, автозвук и кодирование в Лейпциге",
      description: "Дооснащение автомобилей BMW, VAG, Mercedes-Benz и Ford: мультимедиа, камеры, свет, комфорт-опции, автозвук и DSP, кодирование скрытых функций. Работаю в Лейпциге."
    },
    nav: {
      services: "Услуги",
      sound: "Автозвук",
      electronics: "Электроника",
      selector: "Подбор авто",
      expertise: "База знаний",
      faq: "Вопросы",
      contacts: "Контакты",
      cta: "Telegram"
    },
    langSwitch: { ru: "RU", de: "DE" },
    hero: {
      eyebrow: "OEM+ Retrofit · Автозвук · Кодирование · Лейпциг",
      title: "Дооснащаю автомобиль так,\nкак будто это сделали на заводе.\nТолько лучше.",
      subtitle: "Retrofit мультимедиа, камер и комфорт-опций, премиальный автозвук и кодирование скрытых функций для BMW, Volkswagen / Audi / Škoda / SEAT, Mercedes-Benz и Ford. Разбираюсь в деталях платформы конкретного автомобиля, а не работаю по одному шаблону для всех.",
      ctaPrimary: "Написать в Telegram",
      ctaSecondary: "Позвонить",
      ctaThird: "Смотреть услуги",
      badges: ["7 направлений работ", "BMW · VAG · Mercedes-Benz · Ford", "Материалы Comformat", "Индивидуальный подход, без конвейера"],
      pillars: [
        { title: "Дооснащение", note: "мультимедиа, камеры, свет, комфорт" },
        { title: "Автозвук", note: "от динамиков до DSP" },
        { title: "Электроника", note: "кодирование и диагностика" },
        { title: "High-End", note: "индивидуальные проекты под ключ" }
      ]
    },
    stats: [
      { n: "7", l: "направлений работ — от CarPlay до премиального звука" },
      { n: "4", l: "экосистемы в работе: BMW, VAG, Mercedes-Benz, Ford" },
      { n: "3", l: "слоя в правильной шумоизоляции: вибро → поглощение → блок" },
      { n: "100%", l: "без конвейера — каждый проект под конкретный автомобиль" }
    ],
    sectionEyebrows: {
      services: "Что я делаю",
      servicesTitle: "Семь направлений — один подход к деталям",
      servicesLead: "Каждое направление можно заказать отдельно или собрать в комплексный проект. Ниже — полный список того, чем занимаюсь на практике, без «воды».",
      selector: "Подбор по автомобилю",
      selectorTitle: "Чем можно дооснастить именно ваш автомобиль",
      selectorLead: "Выберите марку, модель и год выпуска — покажу, какие retrofit-опции реально доступны для вашей платформы. Это предварительная подборка: точный список функций и совместимость оборудования уточняются на диагностике.",
      expertise: "База знаний",
      expertiseTitle: "Матчасть, а не маркетинг",
      expertiseLead: "Коротко о том, как устроены вещи внутри — чтобы вы понимали, за что платите и почему одно решение лучше другого.",
      materials: "Материалы",
      materialsTitle: "Шумоизоляция на материалах Comformat",
      packages: "Готовые сценарии",
      packagesTitle: "Если сложно решить, с чего начать",
      packagesLead: "Три типовых сценария апгрейда. Это ориентир, а не жёсткий пакет — состав всегда адаптируется под автомобиль и бюджет.",
      faq: "Вопросы и ответы",
      faqTitle: "То, что обычно спрашивают до заказа",
      contacts: "Контакты",
      contactsTitle: "Обсудим ваш проект",
      contactsLead: "Работаю в Лейпциге и области. Точное место и время встречи, диагностики или монтажа согласовываем индивидуально после первого сообщения — под конкретный автомобиль и задачу."
    },
    services: [
      {
        id: "retrofit",
        title: "Дооснащение автомобилей (OEM Retrofit)",
        tagline: "Технологии, которых не было с завода — но выглядят так, будто были",
        groups: [
          {
            title: "Мультимедиа и современные технологии",
            items: [
              "Установка Apple CarPlay / Android Auto",
              "Беспроводной CarPlay",
              "Замена штатных экранов на более современные",
              "Установка Android-мониторов OEM-стиля",
              "Замена головных устройств",
              "Обновление навигации",
              "Установка USB-модулей",
              "Добавление Bluetooth Audio",
              "Улучшение качества штатной мультимедиа системы"
            ]
          },
          {
            title: "Камеры и парковка",
            items: [
              "Установка камеры заднего вида",
              "Установка передней камеры",
              "Интеграция камер в штатный экран",
              "Установка парковочных датчиков (PDC)",
              "Замена блоков парковки",
              "Кодирование парковочных систем",
              "Установка кругового обзора 360°"
            ]
          },
          {
            title: "Комфортные функции",
            items: [
              "Автоматическое складывание зеркал",
              "Электроскладывание зеркал",
              "Подогрев зеркал",
              "Автозатемнение зеркала",
              "Установка бесключевого доступа",
              "Comfort Access",
              "Доводчики дверей",
              "Подогрев сидений",
              "Вентиляция сидений",
              "Электрорегулировка сидений",
              "Память сидений"
            ]
          },
          {
            title: "Свет",
            items: [
              "LED модернизация",
              "Замена штатных ламп на LED",
              "Установка Ambient Light",
              "Расширение заводской подсветки",
              "Кодирование световых функций",
              "Установка дополнительных световых элементов"
            ]
          }
        ]
      },
      {
        id: "sound",
        title: "Автозвук",
        tagline: "От первой замены динамиков до полноценной DSP-настройки сцены",
        groups: [
          {
            title: "Базовое улучшение звука",
            items: [
              "Замена штатных динамиков",
              "Установка компонентной акустики",
              "Установка коаксиальных динамиков",
              "Замена пищалок",
              "Улучшение баса"
            ]
          },
          {
            title: "Шумоизоляция",
            items: [
              "Шумоизоляция дверей",
              "Виброизоляция металла",
              "Герметизация дверей под динамик",
              "Шумоизоляция багажника",
              "Шумоизоляция арок",
              "Шумоизоляция пола",
              "Антискрип салона"
            ]
          },
          {
            title: "Усиление звука",
            items: [
              "Установка усилителей",
              "Установка сабвуферов",
              "Компактные сабвуферы под сиденье",
              "Сабвуферы в багажник",
              "Моноблоки",
              "Многоканальные усилители"
            ]
          },
          {
            title: "DSP-настройка",
            items: [
              "Установка DSP процессоров",
              "Настройка временных задержек",
              "Эквализация",
              "Настройка сцены",
              "Настройка под водителя",
              "Измерение через микрофон"
            ]
          }
        ]
      },
      {
        id: "highend",
        title: "Премиальный автозвук (High-End)",
        tagline: "Индивидуальные проекты без компромиссов",
        groups: [
          {
            title: "Полная переделка аудиосистемы",
            items: [
              "Изготовление подиумов под динамики",
              "3D-моделирование деталей",
              "Печать элементов на 3D-принтере",
              "Перетяжка акустических элементов",
              "Скрытая установка компонентов",
              "OEM+ стиль (как будто завод сделал)"
            ]
          }
        ]
      },
      {
        id: "electronics",
        title: "Электроника и кодирование",
        tagline: "BMW / VAG / Mercedes-Benz / Ford — скрытый потенциал вашего авто",
        groups: [
          {
            title: "Кодирование и диагностика",
            items: [
              "Кодирование функций",
              "Активация скрытых функций",
              "Регистрация новых блоков",
              "Диагностика ошибок",
              "Проверка автомобиля перед покупкой"
            ]
          },
          {
            title: "Примеры кодирования",
            items: [
              "Отключение Start/Stop",
              "Изменение поведения света",
              "Активация функций",
              "Изменение настроек мультимедиа",
              "Кодирование после установки оборудования"
            ]
          }
        ]
      },
      {
        id: "diagnostics",
        title: "Диагностика и консультации",
        tagline: "Прежде чем что-то ставить — нужно понять, что реально возможно",
        groups: [
          {
            title: "Диагностика и планирование",
            items: [
              "Компьютерная диагностика",
              "Поиск неисправностей электроники",
              "Проверка совместимости оборудования",
              "Подбор комплектов retrofit",
              "Проверка VIN-кода",
              "Планирование дооснащения"
            ]
          }
        ]
      },
      {
        id: "oem-tuning",
        title: "Внешний и внутренний OEM+ тюнинг",
        tagline: "Оригинальные детали и правильная сборка — без «колхоза»",
        groups: [
          {
            title: "Экстерьер и интерьер",
            items: [
              "Установка оригинальных деталей",
              "Замена салонных элементов",
              "Модернизация приборных панелей",
              "Спортивные рули",
              "Лепестки переключения передач",
              "Новые кнопки и панели",
              "Ambient Light",
              "Карбоновые элементы",
              "Улучшение интерьера"
            ]
          }
        ]
      }
    ],
    packages: [
      {
        id: "comfort",
        title: "Comfort Upgrade",
        note: "Максимум удобства за один визит",
        items: ["CarPlay / Android Auto", "Камера заднего вида", "USB-модуль", "Ambient Light"]
      },
      {
        id: "sound",
        title: "Sound Upgrade",
        note: "Заметный шаг вперёд по звуку",
        items: ["Шумоизоляция дверей", "Новые динамики", "Усилитель", "DSP-настройка"]
      },
      {
        id: "full",
        title: "Full OEM+ Upgrade",
        note: "Комплексный проект «под ключ»",
        items: ["Мультимедиа", "Парковка", "Свет", "Комфорт", "Автозвук", "Кодирование"]
      }
    ],
    carSelector: {
      brandLabel: "Марка",
      modelLabel: "Модель",
      yearLabel: "Год выпуска",
      brandPlaceholder: "Выберите марку",
      modelPlaceholder: "Сначала марку",
      yearPlaceholder: "Сначала модель",
      resultTitle: "Рекомендации для",
      resultNote: "Это ориентировочный список — реальная совместимость зависит от точной комплектации, установленного блока и года производства конкретного автомобиля.",
      resultCta: "Уточнить по VIN в Telegram",
      emptyState: "Выберите марку, модель и год — здесь появится подборка retrofit-опций.",
      vinNote: "Работаю над полноценным VIN-декодером с проверкой заводской комплектации. Пока — присылайте VIN в Telegram, проверю вручную по доступным базам.",
      vinCta: "Отправить VIN в Telegram"
    },
    carDB: [
      {
        brand: "BMW",
        models: [
          {
            name: "1 серия (F20/F21)",
            years: "2011–2019",
            recs: ["Retrofit CarPlay через штатный CIC/NBT", "USB-модуль и Bluetooth Audio", "Кодирование Ambient Light при наличии проводки", "Парковочные датчики и кодирование PDC"]
          },
          {
            name: "3 серия (F30/F31/F34)",
            years: "2012–2019",
            recs: ["CarPlay / Android Auto на NBT EVO", "Камера заднего вида с интеграцией в экран", "Ambient Light и подсветка порогов", "Comfort Access и доводчики дверей", "Кодирование после установки оборудования"]
          },
          {
            name: "3/4 серия (G20/G22)",
            years: "2019–н.в.",
            recs: ["Беспроводной CarPlay / Android Auto", "Активация скрытых функций мультимедиа", "360° камера при наличии подготовки", "DSP-настройка штатной или установленной акустики"]
          },
          {
            name: "5 серия (F10/F11)",
            years: "2010–2017",
            recs: ["Замена головного устройства на актуальное", "Retrofit камеры и парковочных датчиков", "Полная шумоизоляция и апгрейд акустики", "Вентиляция и память сидений при наличии проводки"]
          },
          {
            name: "X5 (F15)",
            years: "2013–2018",
            recs: ["Обновление навигации", "360° круговой обзор", "High-End аудиосистема с подиумами", "Кодирование световых функций"]
          }
        ]
      },
      {
        brand: "Volkswagen",
        models: [
          {
            name: "Golf 7",
            years: "2012–2020",
            recs: ["Активация App-Connect (CarPlay / Android Auto)", "Камера заднего вида в штатный экран", "Ambient Light", "Шумоизоляция дверей и усилитель"]
          },
          {
            name: "Golf 8",
            years: "2020–н.в.",
            recs: ["Беспроводной CarPlay на MIB3", "Кодирование доп. функций мультимедиа", "DSP-процессор под штатную акустику", "Ambient Light расширенного цвета"]
          },
          {
            name: "Tiguan",
            years: "2016–н.в.",
            recs: ["Retrofit камеры и парковочных датчиков", "USB-модуль и Bluetooth Audio", "Электроскладывание и автозатемнение зеркал", "Шумоизоляция арок и пола"]
          },
          {
            name: "Passat B8",
            years: "2014–2023",
            recs: ["Обновление навигации MIB2", "Ambient Light", "Компонентная акустика + DSP", "Кодирование комфортных функций"]
          }
        ]
      },
      {
        brand: "Audi",
        models: [
          {
            name: "A3/A4 (B8)",
            years: "2008–2015",
            recs: ["Retrofit CarPlay через MMI", "Камера заднего вида", "Шумоизоляция и замена динамиков", "Кодирование после установки оборудования"]
          },
          {
            name: "A4/A6 (B9/C8)",
            years: "2015–н.в.",
            recs: ["Активация Wireless CarPlay / Android Auto", "360° камера", "DSP-настройка Bang & Olufsen / штатной акустики", "Ambient Light расширенной палитры"]
          },
          {
            name: "Q5",
            years: "2017–н.в.",
            recs: ["Retrofit камер и датчиков парковки", "Обновление навигации", "Sound Upgrade: динамики + сабвуфер + DSP", "Кодирование световых сценариев"]
          }
        ]
      },
      {
        brand: "Škoda",
        models: [
          {
            name: "Octavia III",
            years: "2013–2020",
            recs: ["Активация SmartLink+ (CarPlay / Android Auto)", "Камера заднего вида", "Шумоизоляция дверей и багажника", "USB-модуль"]
          },
          {
            name: "Octavia IV",
            years: "2020–н.в.",
            recs: ["Беспроводной CarPlay", "Ambient Light", "DSP-настройка акустики", "Кодирование комфортных функций"]
          }
        ]
      },
      {
        brand: "Mercedes-Benz",
        models: [
          {
            name: "C-Class (W205)",
            years: "2014–2021",
            recs: ["Активация Wireless CarPlay / Android Auto (NTG5.5)", "Камера заднего вида в COMAND/NTG", "Ambient Light 64 цвета", "Шумоизоляция и High-End акустика"]
          },
          {
            name: "E-Class (W213)",
            years: "2016–2023",
            recs: ["Кодирование доп. функций MBUX/NTG6", "360° камера", "DSP-настройка Burmester-подобной сцены", "Расширение заводской подсветки"]
          },
          {
            name: "GLC (X253)",
            years: "2015–2022",
            recs: ["Retrofit камеры и парковочных датчиков", "Обновление навигации", "Sound Upgrade под конкретную акустику", "Кодирование световых и комфортных функций"]
          }
        ]
      },
      {
        brand: "Ford",
        models: [
          {
            name: "Focus III",
            years: "2011–2018",
            recs: ["Апгрейд SYNC2 → SYNC3 с CarPlay/Android Auto", "Камера заднего вида", "Шумоизоляция дверей", "Замена штатных динамиков"]
          },
          {
            name: "Focus / Kuga (SYNC3)",
            years: "2016–н.в.",
            recs: ["Активация CarPlay / Android Auto", "USB-модуль и Bluetooth Audio", "DSP-настройка акустики", "Парковочные датчики и камера"]
          }
        ]
      }
    ],
    articles: [
      {
        title: "Почему шумоизоляция — это не один слой",
        body: "Хорошая шумоизоляция — это всегда система из трёх задач, а не один универсальный материал на всё. Сначала вибродемпфирование — жёсткий битумно-каучуковый слой, который гасит резонанс металла двери, пола и арок. Затем шумопоглощение — пористый материал, который забирает на себя высокие и средние частоты внутри полости. И только потом шумоблокировка — плотный слой, который не пропускает звук снаружи. Если поставить только один слой «для галочки», результат будет заметен на слух, но не решит задачу полностью — а через сезон-два материал может отойти от металла."
      },
      {
        title: "CarPlay без проводов: что нужно знать перед покупкой",
        body: "Беспроводной CarPlay — это не всегда «просто адаптер из интернета». Многое зависит от поколения головного устройства: одни платформы поддерживают активацию штатными средствами через кодирование, другим действительно нужен отдельный модуль-адаптер, а на части систем беспроводной режим ограничен по стабильности соединения из-за железа модуля Wi-Fi/Bluetooth. Перед установкой я проверяю точную версию блока мультимедиа и его совместимость — чтобы не продавать решение, которое будет отваливаться на светофоре."
      },
      {
        title: "Кодирование и retrofit — в чём разница",
        body: "Кодирование — это активация функции, которая уже физически заложена в автомобиль: провода, разъёмы и блок управления есть, не хватает только программной активации. Retrofit — это установка недостающего оборудования: датчика, камеры, антенны, блока, — и уже после этого кодирование системы под новое железо. Иногда достаточно только кодирования, иногда без физического монтажа не обойтись. Отличить одно от другого — часть диагностики перед тем, как называть цену."
      },
      {
        title: "Как подбирают сабвуфер под багажник, а не наоборот",
        body: "Частая ошибка — выбор сабвуфера «по мощности на бумаге» без учёта объёма и формы багажника конкретной модели. Один и тот же корпус в разных автомобилях звучит по-разному из-за объёма воздуха вокруг. Поэтому подбор идёт от задачи и типа кузова: компактный сабвуфер под сиденье для повседневной машины без потери багажника, либо оформленный корпус в багажник — для тех, кому важен именно акустический результат, а не компромисс."
      }
    ],
    materials: {
      title: "Материалы Comformat",
      lead: "Для шумо- и виброизоляции использую материалы украинского производителя Comformat — с понятной структурой продуктовой линейки под каждую из трёх задач шумоизоляции.",
      layers: [
        { title: "Виброизоляция", desc: "Битумно-каучуковый слой на фольге — гасит резонанс и дребезг металла дверей, пола, арок и багажника." },
        { title: "Шумопоглощение", desc: "Пористый материал с открытой структурой — забирает на себя средние и высокие частоты внутри полостей кузова." },
        { title: "Шумоизоляция (блок)", desc: "Плотный многослойный материал — не пропускает внешний шум и дорожный гул в салон." }
      ],
      note: "Материал подбирается под задачу: где-то достаточно вибро-слоя, где-то нужна полная трёхслойная схема — это определяется на диагностике, а не «на глаз по прайсу»."
    },
    faq: [
      {
        q: "У вас есть студия или шоурум, куда можно приехать?",
        a: "Собственной студии пока нет. Работаю в Лейпциге и области, место и формат встречи — диагностика, монтаж или консультация — согласовываем индивидуально в переписке под конкретный автомобиль."
      },
      {
        q: "Кодирование не аннулирует гарантию дилера?",
        a: "Зависит от конкретной функции, марки и региональных правил дилера. Перед заказом обсуждаем, что именно меняется, и какие риски это несёт именно для вашего случая — без общих обещаний «всё ок»."
      },
      {
        q: "Сколько занимает дооснащение по времени?",
        a: "От часа для простого кодирования до нескольких дней для комплексного проекта (например, полная переделка аудиосистемы с подиумами). Точный срок называю после диагностики и согласования объёма работ."
      },
      {
        q: "Можно ли просто проверить, что реально доступно для моей машины?",
        a: "Да, это отдельная услуга — диагностика и консультация. Присылаете VIN и описание задачи в Telegram, я смотрю совместимость оборудования и говорю, что реально, а что нет для конкретной комплектации."
      },
      {
        q: "Работаете только с BMW, VAG, Mercedes-Benz и Ford?",
        a: "Это основные экосистемы, с которыми работаю системно и глубоко знаю платформы. По другим маркам — обсуждаем отдельно, в зависимости от задачи и доступности документации по блокам."
      },
      {
        q: "Как проходит оплата и есть ли гарантия на работу?",
        a: "Условия оплаты и гарантия на монтаж обсуждаются индивидуально под объём работ до начала проекта — прозрачно и до того, как что-то снято или установлено."
      }
    ],
    contacts: {
      phoneLabel: "Телефон",
      telegramLabel: "Telegram",
      instagramLabel: "Instagram",
      city: "Лейпциг и область",
      cityLabel: "Регион работы",
      ctaTelegram: "Написать в Telegram",
      ctaCall: "Позвонить",
      ctaInstagram: "Профиль в Instagram",
      note: "Отвечаю обычно в течение дня. Быстрее всего — через Telegram."
    },
    footer: {
      tagline: "OEM-дооснащение, автозвук и кодирование. Лейпциг.",
      rights: "Все права защищены.",
      madeWith: "Работаю по договорённости — без шаблонов и конвейера."
    },
    mobileBar: { call: "Позвонить", telegram: "Telegram" },
    ui: { menuOpen: "Меню", close: "Закрыть", scrollTop: "Наверх" }
  },

  de: {
    meta: {
      title: "retrofit.leipzig — OEM-Nachrüstung, Car-HiFi und Codierung in Leipzig",
      description: "Nachrüstung für BMW, VAG, Mercedes-Benz und Ford: Multimedia, Kameras, Licht, Komfortfunktionen, Car-HiFi und DSP, Codierung versteckter Funktionen. Tätig in Leipzig."
    },
    nav: {
      services: "Leistungen",
      sound: "Car-HiFi",
      electronics: "Elektronik",
      selector: "Fahrzeug wählen",
      expertise: "Wissen",
      faq: "Fragen",
      contacts: "Kontakt",
      cta: "Telegram"
    },
    langSwitch: { ru: "RU", de: "DE" },
    hero: {
      eyebrow: "OEM+ Retrofit · Car-HiFi · Codierung · Leipzig",
      title: "Ich rüste Fahrzeuge so nach,\nals käme es ab Werk.\nNur besser.",
      subtitle: "Retrofit von Multimedia, Kameras und Komfortfunktionen, Premium Car-HiFi und Codierung versteckter Funktionen für BMW, Volkswagen / Audi / Škoda / SEAT, Mercedes-Benz und Ford. Ich kenne die Plattform Ihres Fahrzeugs im Detail — statt nach Schema F zu arbeiten.",
      ctaPrimary: "In Telegram schreiben",
      ctaSecondary: "Anrufen",
      ctaThird: "Leistungen ansehen",
      badges: ["7 Leistungsbereiche", "BMW · VAG · Mercedes-Benz · Ford", "Materialien von Comformat", "Individuell, kein Fließband"],
      pillars: [
        { title: "Nachrüstung", note: "Multimedia, Kameras, Licht, Komfort" },
        { title: "Car-HiFi", note: "vom Lautsprecher bis zum DSP" },
        { title: "Elektronik", note: "Codierung und Diagnose" },
        { title: "High-End", note: "individuelle Projekte als Gesamtlösung" }
      ]
    },
    stats: [
      { n: "7", l: "Leistungsbereiche — von CarPlay bis Premium-Sound" },
      { n: "4", l: "Marken-Ökosysteme: BMW, VAG, Mercedes-Benz, Ford" },
      { n: "3", l: "Schichten bei korrekter Dämmung: Vibro → Absorption → Blocking" },
      { n: "100%", l: "kein Fließband — jedes Projekt individuell aufs Fahrzeug abgestimmt" }
    ],
    sectionEyebrows: {
      services: "Was ich mache",
      servicesTitle: "Sieben Leistungsbereiche — ein Anspruch an Details",
      servicesLead: "Jeder Bereich ist einzeln buchbar oder als Gesamtprojekt kombinierbar. Hier die vollständige Liste dessen, was ich in der Praxis tatsächlich anbiete.",
      selector: "Fahrzeugauswahl",
      selectorTitle: "Womit sich genau Ihr Fahrzeug nachrüsten lässt",
      selectorLead: "Marke, Modell und Baujahr wählen — ich zeige, welche Retrofit-Optionen für Ihre Plattform realistisch verfügbar sind. Dies ist eine Vorab-Einschätzung: die genaue Funktionsliste und Kompatibilität der Hardware werden bei der Diagnose geklärt.",
      expertise: "Wissen",
      expertiseTitle: "Fachwissen statt Marketing",
      expertiseLead: "Kurz erklärt, wie die Dinge unter der Verkleidung funktionieren — damit klar ist, wofür Sie bezahlen und warum eine Lösung besser ist als eine andere.",
      materials: "Materialien",
      materialsTitle: "Dämmung mit Materialien von Comformat",
      packages: "Fertige Szenarien",
      packagesTitle: "Falls die Entscheidung schwerfällt, wo man anfängt",
      packagesLead: "Drei typische Upgrade-Szenarien. Das ist eine Orientierung, kein starres Paket — der genaue Umfang wird immer an Fahrzeug und Budget angepasst.",
      faq: "Fragen & Antworten",
      faqTitle: "Was vor der Beauftragung meist gefragt wird",
      contacts: "Kontakt",
      contactsTitle: "Lassen Sie uns Ihr Projekt besprechen",
      contactsLead: "Ich arbeite in Leipzig und Umgebung. Ort und Zeit für Treffen, Diagnose oder Einbau werden nach der ersten Nachricht individuell für Ihr Fahrzeug und Ihr Vorhaben abgestimmt."
    },
    services: [
      {
        id: "retrofit",
        title: "Fahrzeug-Nachrüstung (OEM Retrofit)",
        tagline: "Technik, die es ab Werk nicht gab — wirkt aber, als wäre sie es",
        groups: [
          {
            title: "Multimedia & moderne Technik",
            items: [
              "Einbau Apple CarPlay / Android Auto",
              "Kabelloses CarPlay",
              "Austausch des Originalbildschirms gegen ein moderneres Display",
              "Einbau von Android-Monitoren im OEM-Stil",
              "Austausch des Kopfgeräts (Headunit)",
              "Navigations-Update",
              "Einbau von USB-Modulen",
              "Nachrüstung von Bluetooth-Audio",
              "Klangoptimierung des Serien-Multimediasystems"
            ]
          },
          {
            title: "Kameras & Einparkhilfe",
            items: [
              "Einbau Rückfahrkamera",
              "Einbau Frontkamera",
              "Integration der Kameras ins Originaldisplay",
              "Einbau Einparksensoren (PDC)",
              "Austausch der PDC-Steuergeräte",
              "Codierung der Einparkhilfe",
              "Einbau 360°-Kamerasystem"
            ]
          },
          {
            title: "Komfortfunktionen",
            items: [
              "Automatisches Spiegelklappen",
              "Elektrisches Spiegelklappen",
              "Spiegelheizung",
              "Automatisch abblendender Spiegel",
              "Einbau Keyless-Zugang",
              "Comfort Access",
              "Türzuziehhilfen (Soft-Close)",
              "Sitzheizung",
              "Sitzbelüftung",
              "Elektrische Sitzverstellung",
              "Sitzspeicher (Memory-Funktion)"
            ]
          },
          {
            title: "Licht",
            items: [
              "LED-Umrüstung",
              "Austausch der Serienlampen gegen LED",
              "Einbau Ambientebeleuchtung",
              "Erweiterung der Werksbeleuchtung",
              "Codierung der Lichtfunktionen",
              "Einbau zusätzlicher Lichtelemente"
            ]
          }
        ]
      },
      {
        id: "sound",
        title: "Car-HiFi",
        tagline: "Vom ersten Lautsprechertausch bis zur vollständigen DSP-Einmessung",
        groups: [
          {
            title: "Grundlegende Klangverbesserung",
            items: [
              "Austausch der Seriellautsprecher",
              "Einbau von Komponentenlautsprechern",
              "Einbau von Koaxiallautsprechern",
              "Austausch der Hochtöner",
              "Bassoptimierung"
            ]
          },
          {
            title: "Dämmung",
            items: [
              "Türdämmung",
              "Vibrationsdämmung des Blechs",
              "Abdichtung der Türen für Lautsprecher",
              "Kofferraumdämmung",
              "Dämmung der Radkästen",
              "Bodendämmung",
              "Anti-Knarz-Behandlung im Innenraum"
            ]
          },
          {
            title: "Verstärkung",
            items: [
              "Einbau von Verstärkern",
              "Einbau von Subwoofern",
              "Kompakte Subwoofer unter dem Sitz",
              "Subwoofer im Kofferraum",
              "Mono-Endstufen",
              "Mehrkanal-Verstärker"
            ]
          },
          {
            title: "DSP-Einmessung",
            items: [
              "Einbau von DSP-Prozessoren",
              "Laufzeitkorrektur (Time Alignment)",
              "Equalizing",
              "Klangbühnen-Optimierung",
              "Einmessung auf den Fahrerplatz",
              "Messung per Mikrofon"
            ]
          }
        ]
      },
      {
        id: "highend",
        title: "Premium Car-HiFi (High-End)",
        tagline: "Individuelle Projekte ohne Kompromisse",
        groups: [
          {
            title: "Kompletter Umbau der Audioanlage",
            items: [
              "Anfertigung von Lautsprecher-Podesten",
              "3D-Modellierung der Bauteile",
              "3D-Druck der Bauteile",
              "Neubezug der Akustikelemente",
              "Unsichtbarer Einbau der Komponenten",
              "OEM+-Stil (wirkt wie ab Werk)"
            ]
          }
        ]
      },
      {
        id: "electronics",
        title: "Elektronik & Codierung",
        tagline: "BMW / VAG / Mercedes-Benz / Ford — das versteckte Potenzial Ihres Fahrzeugs",
        groups: [
          {
            title: "Codierung und Diagnose",
            items: [
              "Codierung von Funktionen",
              "Freischaltung versteckter Funktionen",
              "Anlernen neuer Steuergeräte",
              "Fehlerdiagnose",
              "Gebrauchtwagen-Check vor dem Kauf"
            ]
          },
          {
            title: "Beispiele für Codierung",
            items: [
              "Deaktivierung von Start/Stopp",
              "Anpassung des Lichtverhaltens",
              "Freischaltung von Funktionen",
              "Anpassung der Multimedia-Einstellungen",
              "Codierung nach Hardware-Einbau"
            ]
          }
        ]
      },
      {
        id: "diagnostics",
        title: "Diagnose & Beratung",
        tagline: "Bevor etwas eingebaut wird, muss klar sein, was wirklich möglich ist",
        groups: [
          {
            title: "Diagnose und Planung",
            items: [
              "Computerdiagnose",
              "Fehlersuche an der Elektronik",
              "Kompatibilitätsprüfung der Komponenten",
              "Auswahl passender Retrofit-Sets",
              "VIN-Abfrage",
              "Nachrüst-Planung"
            ]
          }
        ]
      },
      {
        id: "oem-tuning",
        title: "OEM+ Tuning innen & außen",
        tagline: "Originalteile und saubere Montage — kein Bastelwerk",
        groups: [
          {
            title: "Exterieur und Interieur",
            items: [
              "Einbau von Originalteilen",
              "Austausch von Innenraumelementen",
              "Modernisierung der Instrumententafel",
              "Sportlenkräder",
              "Schaltwippen",
              "Neue Tasten und Blenden",
              "Ambientebeleuchtung",
              "Carbon-Elemente",
              "Interieur-Aufwertung"
            ]
          }
        ]
      }
    ],
    packages: [
      {
        id: "comfort",
        title: "Comfort Upgrade",
        note: "Maximaler Komfort an einem Termin",
        items: ["CarPlay / Android Auto", "Rückfahrkamera", "USB-Modul", "Ambientebeleuchtung"]
      },
      {
        id: "sound",
        title: "Sound Upgrade",
        note: "Ein deutlicher Klangschritt nach vorn",
        items: ["Türdämmung", "Neue Lautsprecher", "Verstärker", "DSP-Einmessung"]
      },
      {
        id: "full",
        title: "Full OEM+ Upgrade",
        note: "Gesamtprojekt als Rundum-Lösung",
        items: ["Multimedia", "Einparkhilfe", "Licht", "Komfort", "Car-HiFi", "Codierung"]
      }
    ],
    carSelector: {
      brandLabel: "Marke",
      modelLabel: "Modell",
      yearLabel: "Baujahr",
      brandPlaceholder: "Marke wählen",
      modelPlaceholder: "Zuerst Marke wählen",
      yearPlaceholder: "Zuerst Modell wählen",
      resultTitle: "Empfehlungen für",
      resultNote: "Dies ist eine vorläufige Liste — die tatsächliche Kompatibilität hängt von der genauen Ausstattung, dem verbauten Steuergerät und dem Baujahr Ihres Fahrzeugs ab.",
      resultCta: "Per VIN in Telegram klären",
      emptyState: "Wählen Sie Marke, Modell und Baujahr — hier erscheinen passende Retrofit-Optionen.",
      vinNote: "Ich arbeite an einem vollständigen VIN-Decoder mit Prüfung der Werksausstattung. Bis dahin: VIN einfach in Telegram schicken, ich prüfe die Kompatibilität manuell anhand verfügbarer Datenbanken.",
      vinCta: "VIN in Telegram senden"
    },
    carDB: [
      {
        brand: "BMW",
        models: [
          {
            name: "1er (F20/F21)",
            years: "2011–2019",
            recs: ["CarPlay-Retrofit über CIC/NBT", "USB-Modul und Bluetooth-Audio", "Ambientebeleuchtung bei vorhandener Verkabelung", "Einparksensoren mit Codierung"]
          },
          {
            name: "3er (F30/F31/F34)",
            years: "2012–2019",
            recs: ["CarPlay / Android Auto auf NBT EVO", "Rückfahrkamera mit Display-Integration", "Ambientebeleuchtung und Einstiegsleisten-Licht", "Comfort Access und Türzuziehhilfen", "Codierung nach Hardware-Einbau"]
          },
          {
            name: "3er/4er (G20/G22)",
            years: "2019–heute",
            recs: ["Kabelloses CarPlay / Android Auto", "Freischaltung versteckter Multimedia-Funktionen", "360°-Kamera bei vorhandener Vorbereitung", "DSP-Einmessung der Serien- oder Zusatzanlage"]
          },
          {
            name: "5er (F10/F11)",
            years: "2010–2017",
            recs: ["Austausch gegen aktuelles Kopfgerät", "Retrofit von Kamera und Einparksensoren", "Komplette Dämmung und Sound-Upgrade", "Sitzbelüftung und Sitzspeicher bei vorhandener Verkabelung"]
          },
          {
            name: "X5 (F15)",
            years: "2013–2018",
            recs: ["Navigations-Update", "360°-Rundumsicht", "High-End-Audioanlage mit Podesten", "Codierung der Lichtfunktionen"]
          }
        ]
      },
      {
        brand: "Volkswagen",
        models: [
          {
            name: "Golf 7",
            years: "2012–2020",
            recs: ["Aktivierung App-Connect (CarPlay / Android Auto)", "Rückfahrkamera im Originaldisplay", "Ambientebeleuchtung", "Türdämmung und Verstärker"]
          },
          {
            name: "Golf 8",
            years: "2020–heute",
            recs: ["Kabelloses CarPlay auf MIB3", "Codierung zusätzlicher Multimedia-Funktionen", "DSP-Prozessor für die Serienanlage", "Ambientebeleuchtung mit erweiterter Farbpalette"]
          },
          {
            name: "Tiguan",
            years: "2016–heute",
            recs: ["Retrofit von Kamera und Einparksensoren", "USB-Modul und Bluetooth-Audio", "Elektrisches Spiegelklappen und Abblend-Automatik", "Dämmung der Radkästen und des Bodens"]
          },
          {
            name: "Passat B8",
            years: "2014–2023",
            recs: ["Navigations-Update MIB2", "Ambientebeleuchtung", "Komponentenlautsprecher + DSP", "Codierung von Komfortfunktionen"]
          }
        ]
      },
      {
        brand: "Audi",
        models: [
          {
            name: "A3/A4 (B8)",
            years: "2008–2015",
            recs: ["CarPlay-Retrofit über MMI", "Rückfahrkamera", "Dämmung und Lautsprechertausch", "Codierung nach Hardware-Einbau"]
          },
          {
            name: "A4/A6 (B9/C8)",
            years: "2015–heute",
            recs: ["Aktivierung Wireless CarPlay / Android Auto", "360°-Kamera", "DSP-Einmessung Bang & Olufsen / Serienanlage", "Ambientebeleuchtung mit erweiterter Farbpalette"]
          },
          {
            name: "Q5",
            years: "2017–heute",
            recs: ["Retrofit von Kameras und Einparksensoren", "Navigations-Update", "Sound Upgrade: Lautsprecher + Subwoofer + DSP", "Codierung der Lichtszenarien"]
          }
        ]
      },
      {
        brand: "Škoda",
        models: [
          {
            name: "Octavia III",
            years: "2013–2020",
            recs: ["Aktivierung SmartLink+ (CarPlay / Android Auto)", "Rückfahrkamera", "Tür- und Kofferraumdämmung", "USB-Modul"]
          },
          {
            name: "Octavia IV",
            years: "2020–heute",
            recs: ["Kabelloses CarPlay", "Ambientebeleuchtung", "DSP-Einmessung der Anlage", "Codierung von Komfortfunktionen"]
          }
        ]
      },
      {
        brand: "Mercedes-Benz",
        models: [
          {
            name: "C-Klasse (W205)",
            years: "2014–2021",
            recs: ["Aktivierung Wireless CarPlay / Android Auto (NTG5.5)", "Rückfahrkamera in COMAND/NTG", "Ambientebeleuchtung 64 Farben", "Dämmung und High-End-Anlage"]
          },
          {
            name: "E-Klasse (W213)",
            years: "2016–2023",
            recs: ["Codierung zusätzlicher MBUX/NTG6-Funktionen", "360°-Kamera", "DSP-Einmessung einer Burmester-ähnlichen Klangbühne", "Erweiterung der Werksbeleuchtung"]
          },
          {
            name: "GLC (X253)",
            years: "2015–2022",
            recs: ["Retrofit von Kamera und Einparksensoren", "Navigations-Update", "Sound Upgrade für die vorhandene Anlage", "Codierung von Licht- und Komfortfunktionen"]
          }
        ]
      },
      {
        brand: "Ford",
        models: [
          {
            name: "Focus III",
            years: "2011–2018",
            recs: ["Upgrade SYNC2 → SYNC3 mit CarPlay/Android Auto", "Rückfahrkamera", "Türdämmung", "Austausch der Seriellautsprecher"]
          },
          {
            name: "Focus / Kuga (SYNC3)",
            years: "2016–heute",
            recs: ["Aktivierung CarPlay / Android Auto", "USB-Modul und Bluetooth-Audio", "DSP-Einmessung der Anlage", "Einparksensoren und Kamera"]
          }
        ]
      }
    ],
    articles: [
      {
        title: "Warum Dämmung nie nur eine Schicht ist",
        body: "Gute Dämmung ist immer ein System aus drei Aufgaben, nicht ein universelles Material für alles. Zuerst die Vibrationsdämmung — eine feste Bitumen-Kautschuk-Schicht, die die Resonanz von Tür-, Boden- und Radkastenblech reduziert. Danach die Schallabsorption — ein poröses Material, das mittlere und hohe Frequenzen im Hohlraum aufnimmt. Erst dann die Schallblockierung — eine dichte Schicht, die Außengeräusche fernhält. Wird nur eine Schicht „pro forma“ verbaut, ist der Effekt hörbar, löst die Aufgabe aber nicht vollständig — und nach ein bis zwei Jahren kann sich das Material vom Blech lösen."
      },
      {
        title: "Kabelloses CarPlay: was man vor dem Kauf wissen sollte",
        body: "Kabelloses CarPlay ist nicht immer „nur ein Adapter aus dem Internet“. Vieles hängt von der Generation des Kopfgeräts ab: Manche Plattformen lassen sich per Codierung mit Bordmitteln aktivieren, andere benötigen tatsächlich ein separates Adaptermodul, und bei manchen Systemen ist der kabellose Betrieb wegen der Wi-Fi/Bluetooth-Hardware in der Stabilität eingeschränkt. Vor dem Einbau prüfe ich die genaue Version des Multimedia-Steuergeräts und dessen Kompatibilität — damit keine Lösung verkauft wird, die an der Ampel aussteigt."
      },
      {
        title: "Codierung und Retrofit — der Unterschied",
        body: "Codierung ist die Aktivierung einer Funktion, die bereits physisch im Fahrzeug angelegt ist: Kabel, Stecker und Steuergerät sind vorhanden, es fehlt nur die softwareseitige Freischaltung. Retrofit ist der Einbau fehlender Hardware — Sensor, Kamera, Antenne, Steuergerät — und erst danach die Codierung des Systems auf die neue Hardware. Manchmal reicht reine Codierung, manchmal ist der physische Einbau unumgänglich. Beides zu unterscheiden, ist Teil der Diagnose, bevor ein Preis genannt wird."
      },
      {
        title: "Wie man den Subwoofer zum Kofferraum passend wählt — nicht umgekehrt",
        body: "Ein häufiger Fehler ist die Wahl des Subwoofers „nach Leistung auf dem Papier“, ohne Volumen und Form des Kofferraums des jeweiligen Modells zu berücksichtigen. Dasselbe Gehäuse klingt in unterschiedlichen Fahrzeugen unterschiedlich, weil das umgebende Luftvolumen variiert. Deshalb richtet sich die Auswahl nach Aufgabe und Karosserie: ein kompakter Subwoofer unter dem Sitz für den Alltag ohne Kofferraumverlust, oder ein maßgefertigtes Gehäuse im Kofferraum für alle, denen das akustische Ergebnis wichtiger ist als der Kompromiss."
      }
    ],
    materials: {
      title: "Materialien von Comformat",
      lead: "Für Schall- und Vibrationsdämmung verwende ich Materialien des ukrainischen Herstellers Comformat — mit einer klaren Produktlinie für jede der drei Dämmaufgaben.",
      layers: [
        { title: "Vibrationsdämmung", desc: "Bitumen-Kautschuk-Schicht auf Folie — reduziert Resonanz und Klappern von Tür-, Boden-, Radkasten- und Kofferraumblech." },
        { title: "Schallabsorption", desc: "Poröses, offenporiges Material — nimmt mittlere und hohe Frequenzen in den Karosserie-Hohlräumen auf." },
        { title: "Schallblockierung", desc: "Dichtes, mehrschichtiges Material — hält Außengeräusche und Fahrgeräusche vom Innenraum fern." }
      ],
      note: "Das Material wird nach Aufgabe gewählt: manchmal genügt eine Vibro-Schicht, manchmal ist das volle Drei-Schichten-Schema nötig — das klärt sich bei der Diagnose, nicht „nach Preisliste über den Daumen“."
    },
    faq: [
      {
        q: "Haben Sie ein Studio oder einen Showroom, den man besuchen kann?",
        a: "Ein eigenes Studio gibt es aktuell nicht. Ich arbeite in Leipzig und Umgebung — Ort und Format des Termins (Diagnose, Einbau oder Beratung) stimmen wir individuell per Nachricht für Ihr Fahrzeug ab."
      },
      {
        q: "Erlischt durch Codierung die Herstellergarantie?",
        a: "Das hängt von der jeweiligen Funktion, der Marke und den regionalen Händlerregelungen ab. Vor der Beauftragung besprechen wir genau, was verändert wird und welches Risiko das in Ihrem Fall bedeutet — ohne pauschale Versprechen."
      },
      {
        q: "Wie lange dauert eine Nachrüstung?",
        a: "Von einer Stunde für eine einfache Codierung bis zu mehreren Tagen für ein Gesamtprojekt (z. B. kompletter Umbau der Audioanlage mit Podesten). Die genaue Dauer nenne ich nach der Diagnose und Abstimmung des Arbeitsumfangs."
      },
      {
        q: "Kann ich vorab prüfen lassen, was für mein Auto möglich ist?",
        a: "Ja, das ist eine eigene Leistung: Diagnose und Beratung. VIN und Beschreibung des Vorhabens per Telegram senden — ich prüfe die Hardware-Kompatibilität und sage, was für Ihre Ausstattung realistisch ist."
      },
      {
        q: "Arbeiten Sie nur mit BMW, VAG, Mercedes-Benz und Ford?",
        a: "Das sind die Ökosysteme, mit denen ich systematisch arbeite und deren Plattformen ich genau kenne. Bei anderen Marken besprechen wir es einzeln, je nach Aufgabe und verfügbarer Dokumentation der Steuergeräte."
      },
      {
        q: "Wie läuft die Bezahlung ab, gibt es Garantie auf die Arbeit?",
        a: "Zahlungskonditionen und Garantie auf den Einbau werden individuell vor Projektbeginn passend zum Arbeitsumfang festgelegt — transparent, bevor etwas aus- oder eingebaut wird."
      }
    ],
    contacts: {
      phoneLabel: "Telefon",
      telegramLabel: "Telegram",
      instagramLabel: "Instagram",
      city: "Leipzig und Umgebung",
      cityLabel: "Einsatzgebiet",
      ctaTelegram: "In Telegram schreiben",
      ctaCall: "Anrufen",
      ctaInstagram: "Instagram-Profil",
      note: "Ich antworte meist innerhalb eines Tages. Am schnellsten geht es über Telegram."
    },
    footer: {
      tagline: "OEM-Nachrüstung, Car-HiFi und Codierung. Leipzig.",
      rights: "Alle Rechte vorbehalten.",
      madeWith: "Nach Vereinbarung — ohne Schema F und ohne Fließband."
    },
    mobileBar: { call: "Anrufen", telegram: "Telegram" },
    ui: { menuOpen: "Menü", close: "Schließen", scrollTop: "Nach oben" }
  }
};

window.SITE_CONTENT = SITE_CONTENT;
