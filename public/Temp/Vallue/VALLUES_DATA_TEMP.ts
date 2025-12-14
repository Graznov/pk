interface VALLUE {
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
        name: 'string',
        productionTime: 'string',
        description: 'string',
        image_url: [],
        price: 3800, // текущая цена
    },    {
        id: '005',
        category: 'for_documents',
        name: 'string',
        productionTime: 'string',
        description: 'string',
        image_url: [],
        price: 4100, // текущая цена
    },    {
        id: '006',
        category: 'for_documents',
        name: 'string',
        productionTime: 'string',
        description: 'string',
        image_url: [],
        price: 3500, // текущая цена
    },    {
        id: '007',
        category: 'for_documents',
        name: 'string',
        productionTime: 'string',
        description: 'string',
        image_url: [],
        price: 4600, // текущая цена
    },    {
        id: '008',
        category: 'for_documents',
        name: 'string',
        productionTime: 'string',
        description: 'string',
        image_url: [],
        price: 3700, // текущая цена
    },    {
        id: '009',
        category: 'for_documents',
        name: 'string',
        productionTime: 'string',
        description: 'string',
        image_url: [],
        price: 4500, // текущая цена
    },    {
        id: '010',
        category: 'for_documents',
        name: 'string',
        productionTime: 'string',
        description: 'string',
        image_url: [],
        price: 2700, // текущая цена
    },    {
        id: '011',
        category: 'for_documents',
        name: 'string',
        productionTime: 'string',
        description: 'string',
        image_url: [],
        price: 3400, // текущая цена
    },    {
        id: '012',
        category: 'for_documents',
        name: 'string',
        productionTime: 'string',
        description: 'string',
        image_url: [],
        price: 3000, // текущая цена
    },    {
        id: '013',
        category: 'for_documents',
        name: 'string',
        productionTime: 'string',
        description: 'string',
        image_url: [],
        price: 4100, // текущая цена
    },    {
        id: '014',
        category: 'for_documents',
        name: 'string',
        productionTime: 'string',
        description: 'string',
        image_url: [],
        price: 4000, // текущая цена
    },    {
        id: '015',
        category: 'for_documents',
        name: 'string',
        productionTime: 'string',
        description: 'string',
        image_url: [],
        price: 5500, // текущая цена
    },    {
        id: '016',
        category: 'for_documents',
        name: 'string',
        productionTime: 'string',
        description: 'string',
        image_url: [],
        price: 2700, // текущая цена
    },    {
        id: '017',
        category: 'for_documents',
        name: 'string',
        productionTime: 'string',
        description: 'string',
        image_url: [],
        price: 2500, // текущая цена
    },    {
        id: '018',
        category: 'for_documents',
        name: 'string',
        productionTime: 'string',
        description: 'string',
        image_url: [],
        price: 3000, // текущая цена
    },    {
        id: '019',
        category: 'for_documents',
        name: 'string',
        productionTime: 'string',
        description: 'string',
        image_url: [],
        price: 4000, // текущая цена
    },    {
        id: '020',
        category: 'for_documents',
        name: 'string',
        productionTime: 'string',
        description: 'string',
        image_url: [],
        price: 4500, // текущая цена
    },    {
        id: '021',
        category: 'for_documents',
        name: 'string',
        productionTime: 'string',
        description: 'string',
        image_url: [],
        price: 2000, // текущая цена
    },    {
        id: '022',
        category: 'for_documents',
        name: 'string',
        productionTime: 'string',
        description: 'string',
        image_url: [],
        price: 5000, // текущая цена
    },    {
        id: '023',
        category: 'for_documents',
        name: 'string',
        productionTime: 'string',
        description: 'string',
        image_url: [],
        price: 3000, // текущая цена
    },    {
        id: '024',
        category: 'for_documents',
        name: 'string',
        productionTime: 'string',
        description: 'string',
        image_url: [],
        price: 2000, // текущая цена
    },    {
        id: '025',
        category: 'for_documents',
        name: 'string',
        productionTime: 'string',
        description: 'string',
        image_url: [],
        price: 3500, // текущая цена
    },
]



export default VALLUES_DATA_TEMP