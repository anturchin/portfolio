const questions = [
  {
    question: "Какое блюдо является национальным блюдом Италии?",
    answer: "Пицца",
  },
  {
    question: "В какой стране готовят блюдо под названием суши?",
    answer: "Япония",
  },
  {
    question: "Какое блюдо является традиционным для испанской кухни?",
    answer: "Паэлья",
  },
  {
    question: "Какое место считается столицей гастрономии Франции?",
    answer: "Лион",
  },
  { question: "Какой город называют 'городом влюбленных'?", answer: "Париж" },
  { question: "В какой стране находится Мачу-Пикчу?", answer: "Перу" },
  { question: "Какой вид транспорта популярен в Венеции?", answer: "Гондола" },
  {
    question:
      "Как называется традиционное корейское блюдо из квашеной капусты?",
    answer: "Кимчи",
  },
  {
    question: "В какой стране производится известное вино Шампанское?",
    answer: "Франция",
  },
  {
    question: "Какое блюдо является традиционным для российской кухни?",
    answer: "Борщ",
  },
  {
    question:
      "Как называется национальное блюдо Японии, представляющее собой поджаренный рис с овощами и мясом?",
    answer: "Ёсинабэ",
  },
  {
    question:
      "Какое блюдо является основным итальянским десертом, представляющим собой слоеное тесто с различными начинками?",
    answer: "Тирамису",
  },
  {
    question:
      "Как называется национальное блюдо Турции, состоящее из слоеных тестовых листов, начиненных орехами и медом?",
    answer: "Пахлава",
  },
  {
    question: "В каком городе находится знаменитая Эйфелева башня?",
    answer: "Париж",
  },
  {
    question: "Какое озеро считается самым глубоким в мире?",
    answer: "Байкал",
  },
  { question: "Какая страна является родиной сыра 'фета'?", answer: "Греция" },
  {
    question:
      "Какой город славится своими каналами и является 'городом водных дорог'?",
    answer: "Венеция",
  },
  {
    question: "Какое место считается столицей красного вина?",
    answer: "Бордо",
  },
  {
    question:
      "Какая страна известна своими бананами, кофе и амазонскими джунглями?",
    answer: "Бразилия",
  },
  {
    question:
      "Как называется традиционное корейское блюдо из лапши, приготовленной на пару?",
    answer: "Чапчэ",
  },
  {
    question: "В какой стране производится известное вино Мерло?",
    answer: "Франция",
  },
  {
    question: "Какое животное является национальным символом Австралии?",
    answer: "Кенгуру",
  },
  {
    question: "Какое море считается самым соленым в мире?",
    answer: "Красное",
  },
  {
    question: "Как называется самая большая в мире песчаная пустыня?",
    answer: "Сахара",
  },
  {
    question: "Какой остров является самым большим в мире?",
    answer: "Гренландия",
  },
  { question: "Какая река является самой длинной в мире?", answer: "Амазонка" },
  { question: "В какой стране расположены Пирамиды Гизы?", answer: "Египет" },
  {
    question: "Кто является национальным животным Шотландии?",
    answer: "Единорог",
  },
  { question: "Какой вкус у ликера 'Куантро'?", answer: "Апельсин" },
  {
    question: "Как называется маленький пластмассовый кусочек на конце шнурка?",
    answer: "Аглет",
  },
  {
    question: "В какой стране находится город Прага?",
    answer: "Чехия",
  },
  {
    question: "Какая самая маленькая планета в нашей солнечной системе?",
    answer: "Меркурий",
  },
  {
    question: "Самая холодная планета солнечной системы?",
    answer: "Уран",
  },
  {
    question: "Какая самая близкая планета к солнцу?",
    answer: "Меркурий",
  },
  {
    question: "Каким был первый полнометражный анимационный фильм?",
    answer: "Белоснежка",
  },
  {
    question: "Какие животные воспитывали Маугли в книге 'Книга Джунглей'?",
    answer: "Волки",
  },
  {
    question: "Самый кассовый фильм Джеймса Кэмерона?",
    answer: "Аватар",
  },
  {
    question: "Национальный вид спорта Канады?",
    answer: "Лакросс",
  },
  {
    question: "В какой стране были проведены первые Олимпийские игры?",
    answer: "Греция",
  },
  {
    question:
      "Какая единственная страна принимала участие во всех чемпионатах мира по футболу?",
    answer: "Бразилия",
  },
  {
    question: "Что изображено на олимпийском флаге?",
    answer: "Кольца",
  },
  {
    question: "Как звали первого человека побывавшего в космосе?",
    answer: "Юрий",
  },
  {
    question: "Какая страна является самой маленькой в мире?",
    answer: "Ватикан",
  },
  {
    question: "Символом какого ресторана является клоун?",
    answer: "Макдональдс",
  },
  {
    question: "Какое стихийное бедствие измеряется по шкале Рихтера?",
    answer: "Землятресение",
  },
  {
    question: "Из кого вещества состоят ногти?",
    answer: "Кератин",
  },
  {
    question: "Как называются животные, которые питаются только растениями?",
    answer: "Травоядные",
  },
  {
    question: "Что за животное косатка?",
    answer: "Кит",
  },
  {
    question: "Сталица Австралии?",
    answer: "Канберра",
  },
  {
    question: "Самая высокая гора Европы?",
    answer: "Эльбрус",
  },
];

export default questions;
