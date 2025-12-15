export interface VALLUE {
    id: string;
    category: string;
    name: string;
    productionTime: string;
    description: string;
    image_url: string[];
    price: number, // текущая цена
}

const VALLUES_DATA_TEMP: VALLUE[] = [
    {
        id: '001',
        category: 'for_documents',
        name: 'Обложка для удостоверения',
        productionTime: 'одна неделя',
        description: 'Идеальное сочетание элегантности и практичности. Обложка изготовлена из натуральной зерненой кожи высшего качества, приятной на ощупь и долговечной. Внутри — несколько прозрачных файлов-карманов для хранения самых важных документов: паспорта, водительских прав, страхового полиса, банковских карт.\n' +
            '\n' +
            'Стильный минималистичный дизайн в классических оттенках (черный, коричневый, бордовый) подчеркнет ваш статус и станет достойным аксессуаром для деловых встреч, путешествий и повседневного использования. Надежная застежка на магнитную кнопку обеспечивает сохранность содержимого.\n' +
            '\n' +
            'Это не просто обложка — это выражение вашего вкуса и заботы о порядке в мелочах.',
        image_url: ['https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/1.1.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/1.2.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/1.3.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/1.4.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/1.5.jpg?raw=true'],
        price: 4300, // текущая цена
    },
    {
        id: '002',
        category: 'for_documents',
        name: 'Портмоне - "Въеби все разом"',
        productionTime: 'одна неделя',
        description: 'Сдержанное и функциональное решение для хранения самого необходимого. Изготовлено из прочной натуральной кожи, которая с годами приобретает благородный след времени. Компактный формат содержит всё: отделение для купюр, несколько слотов для карт, прозрачное окошко для удостоверения.\n' +
            '\n' +
            'Идеальный баланс тонкости и вместительности. Помещается во внутренний карман пиджака или в узкие джинсы, не создавая лишнего объема. Классические цвета, аккуратная строчка и надёжная застёжка — для тех, кто ценит качество в деталях и практичность в каждой мелочи.',
        image_url: ['https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/2.1.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/2.2.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/2.3.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/2.4.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/2.5.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/2.6.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/2.7.jpg?raw=true'],
        price: 3000, // текущая цена
    },
    {
        id: '003',
        category: 'for_documents',
        name: 'Женская сумка',
        productionTime: 'три дня',
        description: 'Лёгкая и стильная спутница для повседневных выходов и городских прогулок. Выполнена из мягкой матовой кожи с деликатным тиснением. Удобная регулируемая цепочка-ремник позволяет носить её на плече или через тело.\n' +
            '\n' +
            'Внутри — просторное основное отделение на магнитной кнопке, карман на молнии для мелочей и два открытых кармашка для телефона и ключей. Изысканная фурнитура золотистого или серебристого оттенка добавляет лёгкий акцент шика.\n' +
            '\n' +
            'Идеальный баланс вместительности и утончённого силуэта. Подчеркнёт ваш образ, сохраняя всё необходимое под рукой.',
        image_url: ['https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/3.1.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/3.2.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/3.3.jpg?raw=true'],
        price: 4100, // текущая цена
    },    {
        id: '004',
        category: 'for_documents',
        name: 'Портмоне',
        productionTime: '5 дней',
        description: 'Портмоне премиум-класса — это безупречное сочетание стиля, функциональности и долговечности. Изготовленное из натуральной кожи высшего качества, оно отличается благородной фактурой, приятной на ощупь и устойчивостью к износу. Практичный дизайн включает несколько отделений для банковских карт, прозрачные кармашки для документов, а также секции для купюр и мелочи. Удобная застёжка надёжно защищает содержимое. Идеальный выбор для делового человека, ценящего порядок и элегантность в деталях. Портмоне станет стильным аксессуаром на каждый день, подчеркивающим ваш безупречный вкус и статус.',
        image_url: ['https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/4.1.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/4.2.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/4.3.jpg?raw=true'],
        price: 3800, // текущая цена
    },    {
        id: '005',
        category: 'for_documents',
        name: 'Ремень',
        productionTime: '2 дня',
        description: 'Представляем мужской ремень премиум-класса, созданный для тех, кто ценит безупречный стиль и надёжность. Изготовлен из натуральной бычьей кожи высшего качества, отличающейся долговечностью и благородным блеском. Классическая пряжка из литой стали с матовым покрытием обеспечивает надёжную фиксацию и изысканный внешний вид. Универсальный дизайн в тёмно-коричневом цвете делает этот ремень идеальным дополнением как к строгому деловому костюму, так и к повседневным брюкам или джинсам. Точная строчка по краям подчеркивает аккуратность и качество исполнения. Идеальная длина регулируется благодаря удобной системе отверстий. Этот ремень станет верным аксессуаром на долгие годы, подчеркивая солидность и уверенный вкус своего владельца.',
        image_url: ['https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/5.1.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/5.2.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/5.3.jpg?raw=true'],
        price: 4100, // текущая цена
    },    {
        id: '006',
        category: 'for_documents',
        name: 'Женская сумочка',
        productionTime: '5 дней',
        description: 'Изящная женская сумочка сочетает в себе утончённую эстетику и безупречную функциональность. Модель выполнена из мягкой, но прочной натуральной кожи с деликатным тиснением, что придаёт аксессуару благородную текстуру и устойчивость к повседневным нагрузкам. Лаконичный дизайн дополнен изысканной фурнитурой золотистого оттенка и удобным плечевым ремнём, регулируемым по длине.\n' +
            '\n' +
            'Внутреннее пространство продумано до мелочей: имеется основное отделение на надёжной молнии, карманы для телефона, ключей и документов, а также специальный кармашек для мелких вещей. Сумочка легко трансформируется из повседневной в нарядную, идеально дополняя как деловой образ, так и вечерний наряд. Это не просто аксессуар, а гармония элегантности и практичности, созданная для современной женщины.',
        image_url: ['https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/6.1.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/6.2.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/6.3.jpg?raw=true'],
        price: 3500, // текущая цена
    },    {
        id: '007',
        category: 'for_documents',
        name: 'Сумка-бананка',
        productionTime: '5 дней',
        description: 'Сумка-бананка — это стильный и практичный аксессуар, который уже стал современной классикой. Её узнаваемый выгнутый силуэт и минималистичный дизайн делают её идеальным выбором для активной городской жизни. Модель выполнена из лёгкого и прочного водоотталкивающего материала, который сохраняет форму и легко чистится.\n' +
            '\n' +
            'Сумка оснащена удобным регулируемым ремнём, позволяющим носить её через плечо или на груди для максимального комфорта и безопасности. Объёмное основное отделение закрывается надёжной молнией, внутри есть карман для мелких предметов. Бананка прекрасно сочетается с кэжуал-луками, спортивным стилем и уличной модой. Это не просто сумка, а символ свободы, динамики и современного отношения к жизни.',
        image_url: ['https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/7.1.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/7.2.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/7.3.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/7.4.jpg?raw=true'],
        price: 4600, // текущая цена
    },    {
        id: '008',
        category: 'for_documents',
        name: 'Сумка-бананка 2.1',
        productionTime: '5 дней',
        description: 'Сумка-бананка** — твой идеальный спутник для динамичной городской жизни. Узнаваемый изогнутый силуэт, лаконичный дизайн и ультралёгкие материалы создают неповторимый образ свободы и стиля. Сшита из прочного нейлона с водоотталкивающей пропиткой — не боится внезапного дождя и ежедневной эксплуатации.\n' +
            '\n' +
            'Удобный регулируемый ремень позволяет носить сумку через плечо или на груди, освобождая руки. Вместительное основное отделение с надёжной молнией и внутренний карман-сетка для мелочей обеспечат идеальный порядок внутри. Идеально дополняет casual- и sport-chic образы, подчёркивая твой современный и практичный подход к моде. Выбери свой цвет — и вперёд, навстречу новым впечатлениям!',
        image_url: ['https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/8.1.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/8.2.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/8.3.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/8.4.jpg?raw=true'],
        price: 3700, // текущая цена
    },    {
        id: '009',
        category: 'for_documents',
        name: 'Ремень муской',
        productionTime: '3 дня',
        description: 'Мужской ремень классического кроя** — аксессуар, в котором безупречный стиль встречается с высочайшим качеством. Изготовлен из плотной натуральной кожи бычка с гладкой финишной отделкой, устойчивой к истиранию и деформации. Литая пряжка из матового цинкового сплава обеспечивает надёжную фиксацию и добавляет лаконичный акцент.\n' +
            '\n' +
            'Универсальная ширина 3,5 см и тёмно-коричневый цвет делают ремень идеальным дополнением к деловому костюму, брюкам чинос или джинсам. Точная контурная строчка подчёркивает чёткие линии и долговечность. Регулируется по длине с помощью аккуратных перфорированных отверстий. Это не просто ремень — это инвестиция в образ солидного и уверенного в себе мужчины. Практичность, элегантность и долговечность в каждой детали.',
        image_url: ['https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/9.1.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/9.2.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/9.3.jpg?raw=true'],
        price: 4500, // текущая цена
    },    {
        id: '010',
        category: 'for_documents',
        name: 'Мужской ремень',
        productionTime: '4 дня',
        description: '**Мужской ремень из натуральной кожи** — эталон сдержанной элегантности. Плотная кожа бычка, матовая литая пряжка, аккуратная строчка. Идеальная ширина 3,5 см сочетается с костюмом, джинсами, брюками. Тёмно-коричневый цвет универсален. Надёжность, комфорт, стиль — для уверенного мужского образа на каждый день.',
        image_url: ['https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/10.1.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/10.2.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/10.3.jpg?raw=true'],
        price: 2700, // текущая цена
    },    {
        id: '011',
        category: 'for_documents',
        name: 'Браслет',
        productionTime: '2 дня',
        description: '**Мужской браслет из чёрного силикона** — стильный и функциональный аксессуар для активной жизни. Лёгкий, гибкий, устойчивый к влаге и износу. Универсальный минималистичный дизайн сочетается с повседневной и спортивной одеждой. Незаметен в носке, но подчёркивает собранность и современный подход к деталям. Идеальный выбор для тех, кто ценит практичность и лаконичный стиль.',
        image_url: ['https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/11.1.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/11.2.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/11.3.jpg?raw=true'],
        price: 3400, // текущая цена
    },    {
        id: '012',
        category: 'for_documents',
        name: 'Женская сумочка',
        productionTime: '7 дней',
        description: '**Женская сумочка из мягкой нубуковой кожи** — элегантность в каждой детали. Удобный размер, регулируемый ремешок, изысканная фурнитура под золото. Внутри — продуманная организация: отделения для телефона, документов, мелочей. Идеально дополняет образ от делового до повседневного. Стильный акцент, который говорит о вашем безупречном вкусе.',
        image_url: ['https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/12.1.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/12.2.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/12.3.jpg?raw=true'],
        price: 3000, // текущая цена
    },    {
        id: '013',
        category: 'for_documents',
        name: 'Женская сумочка',
        productionTime: '4 дня',
        description: '**Женская сумочка-кроссбод** из плотной текстурированной кожи — идеальный баланс стиля и практичности. Удобный длинный ремень позволяет носить её через плечо или на груди. Вместительное основное отделение с внутренними карманами обеспечивает порядок. Лаконичный дизайн с контрастной строчкой подходит для любого повседневного образа. Элегантная, лёгкая, функциональная — ваша идеальная спутница на каждый день.',
        image_url: ['https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/13.1.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/13.2.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/13.3.jpg?raw=true'],
        price: 4100, // текущая цена
    },    {
        id: '014',
        category: 'for_documents',
        name: 'Женская сумочка',
        productionTime: '4 дня',
        description: '**Классическая женская сумочка-конверт** из гладкой лакированной кожи. Минималистичный дизайн с изящной металлической застёжкой. Компактный, но достаточно вместительный для телефона, ключей, карт и косметики. Утончённый аксессуар, который идеально дополнит как деловой костюм, так и вечернее платье. Элегантность в лаконичной форме — для уверенной и стильной женщины.',
        image_url: ['https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/14.1.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/14.2.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/14.3.jpg?raw=true'],
        price: 4000, // текущая цена
    },    {
        id: '015',
        category: 'for_documents',
        name: 'Мужской ремень',
        productionTime: '3 дня',
        description: '**Мужской кожаный ремень** для безупречного стиля. Изготовлен из прочной натуральной кожи с матовой отделкой. Классическая пряжка из литого металла обеспечивает надежную фиксацию. Универсальная ширина 3,5 см подходит к джинсам, брюкам и костюмам. Сдержанный дизайн и аккуратная строчка подчеркивают качество. Практичный аксессуар, который завершит ваш образ с достоинством.',
        image_url: ['https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/15.1.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/15.2.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/15.3.jpg?raw=true'],
        price: 5500, // текущая цена
    },
    {
        id: '016',
        category: 'for_documents',
        name: 'Мужской кожаный кошелек',
        productionTime: '4 дня',
        description: 'Компактный мужской кошелек из натуральной кожи с минималистичным дизайном. Вмещает несколько банковских карт, отделение для купюр и прозрачное окошко для удостоверения. Идеально подходит для тех, кто предпочитает носить аксессуары во внутреннем кармане пиджака или в переднем кармане джинсов. Классические цвета (черный, темно-коричневый) и качественная фурнитура делают его практичным и стильным выбором на каждый день.',
        image_url: ['https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/16.1.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/16.2.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/16.3.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/16.4.jpg?raw=true'],
        price: 2700,
    },
    {
        id: '017',
        category: 'for_documents',
        name: 'Обложка для удостоверения',
        productionTime: '3 дня',
        description: 'Элегантная обложка для паспорта из натуральной кожи с тиснением. Внутри — два прозрачных кармашка для самого документа и визиток, а также отделение для дополнительных бумаг. Надежная застежка на магнитную кнопку гарантирует сохранность содержимого. Стильный аксессуар, который защитит ваш паспорт от повреждений и придаст солидности во время путешествий или деловых поездок.',
        image_url: ['https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/17.1.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/17.2.jpg?raw=true'],
        price: 2500,
    },
    {
        id: '018',
        category: 'for_documents',
        name: 'кожаный ремень',
        productionTime: '5 дней',
        description: 'Универсальное портмоне из мягкой натуральной кожи с удобной монетницей на молнии. Включает несколько отделений для карт, прозрачные кармашки для документов, два отделения для купюр и съемное кольцо для ключей. Практичный дизайн для тех, кто ценит порядок и хочет иметь все необходимое в одном аксессуаре. Идеально подходит для повседневного использования.',
        image_url: ['https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/18.1.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/18.2.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/18.3.jpg?raw=true'],
        price: 3000,
    },
    {
        id: '019',
        category: 'for_documents',
        name: 'Сумка бананка',
        productionTime: '6 дней',
        description: 'Вечерний клатч из роскошной атласной ткани с кожаными вставками. Изящная металлическая застежка и внутренняя организация с кармашком для телефона и мелочей. Компактный, но достаточно вместительный для essentials: ключей, карт, помады и зеркальца. Элегантный акцент для особых случаев, который подчеркнет ваш стиль и завершит образ.',
        image_url: ['https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/19.1.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/19.2.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/19.3.jpg?raw=true'],
        price: 4000,
    },
    {
        id: '020',
        category: 'for_documents',
        name: 'Кожаный ремень',
        productionTime: '7 дней',
        description: 'Стильная сумка-мессенджер из прочной вощеной кожи с регулируемым ремнем. Вместительное основное отделение с внутренними карманами для ноутбука (до 13"), документов и аксессуаров. Дополнительные внешние карманы для быстрого доступа к телефону или билетам. Идеальный выбор для деловых поездок, учебы или городских прогулок. Сочетает в себе функциональность и мужской стиль.',
        image_url: ['https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/20.1.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/20.2.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/20.3.jpg?raw=true'],
        price: 4500,
    },
    {
        id: '021',
        category: 'for_documents',
        name: 'Клатч',
        productionTime: '2 дня',
        description: 'Минималистичная ключница из натуральной кожи с металлическим карабином. Вмещает до 5 ключей, имеет небольшой кармашек для чипа от домофона или мелочи. Компактный размер позволяет носить ее в кармане или пристегнуть к сумке. Практичное решение для тех, кто устал от громоздких связок и хочет поддерживать порядок.',
        image_url: ['https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/21.1.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/21.2.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/21.3.jpg?raw=true'],
        price: 2000,
    },
    {
        id: '022',
        category: 'for_documents',
        name: 'Кожаный ремень',
        productionTime: 'одна неделя',
        description: 'Вместительный органайзер для путешественников из водостойкой ткани с кожаными элементами. Включает отделения для паспорта, билетов, визиток, банковских карт, ручки и даже планшета. Несколько прозрачных кармашков для медицинской страховки и других важных бумаг. Надежная застежка на молнию. Поможет сохранить все документы в порядке во время командировок или отпуска.',
        image_url: ['https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/22.1.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/22.2.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/22.3jpg.jpg?raw=true'],
        price: 5000,
    },
    {
        id: '023',
        category: 'for_documents',
        name: 'Кардхолдер',
        productionTime: '3 дня',
        description: 'Ультратонкий кардхолдер из мягкой замши с тиснением. Вмещает до 6 карт, имеет отделение для нескольких купюр. Компактный размер идеален для небольших сумок или вечерних выходов. Нежный пастельный цвет (пудровый, мятный) и изящная строчка делают его стильным аксессуаром для современной женщины.',
        image_url: ['https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/23.1.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/23.2.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/23.3.jpg?raw=true'],
        price: 3000,
    },
    {
        id: '024',
        category: 'for_documents',
        name: 'Портмоне',
        productionTime: '1 день',
        description: 'Стильный кожаный брелок с гравировкой (возможность нанесения инициалов). Изготовлен из плотной натуральной кожи, дополнен металлическим кольцом для ключей и карабином для крепления к сумке или рюкзаку. Небольшой, но заметный акцент, который добавит индивидуальности вашим ключам или станет приятным подарком.',
        image_url: ['https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/23.3.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/24.2.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/24.3.jpg?raw=true'],
        price: 2000,
    },
    {
        id: '025',
        category: 'for_documents',
        name: 'Ключница',
        productionTime: '3 дня',
        description: 'Жесткий чехол для солнцезащитных или оптических очков, обтянутый мягкой нубуковой кожей. Надежно защищает линзы от царапин и повреждений. Внутренняя микрофибра для бережной очистки. Компактный размер, удобная застежка на магнитную кнопку. Доступен в нескольких классических цветах. Практичный аксессуар для бережного хранения ваших очков.',
        image_url: ['https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/25.1.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/25.2.jpg?raw=true', 'https://github.com/Graznov/pk/blob/dev/public/Temp/Vallue/25.3.jpg?raw=true'],
        price: 3500,
    }
]



export default VALLUES_DATA_TEMP