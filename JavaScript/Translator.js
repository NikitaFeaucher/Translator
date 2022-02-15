const Clause = [];//Граматическая основа предложения
const ToBe = ["am", "is", "are", "'m", "'re", "'s"];//Формы вспомогательных глаголов.
function GetInterestingFact()//Функция можем получить интересные файты об английском языке
{
    //"Интересный факт: I пишется всегда с большой буквы в любой части предложения
    //Современный английский язык это результат смешения двух языков: французского и староанглийского.
    //Английский язык использует латинский алфавит.
    //В английском языке когда-то было на 3 буквы больше, чем сейчас(29).
    //Cute Aggression - неистовое умиление.
    /*Английским язык - самый популярным в мире. Им владеют приблизительно 1,5 миллиарда человек.(примерно 20%
    населения)*/
    //Самое длинное английское слово – “pneumonoultramicroscopicsilicovolcanoconiosis”. Переводится оно как 
    //«пневмокониоз». Это болезнь дыхательных путей, вызванная вдыханием вулканической пыли.
    //Среди живых языков самым близкородственным английскому является фризский.
    //“Palindrome” (палиндром) это когда слово или фраза читаются задом наперед точно так же, как и в обычном 
    //направлении. Пример слова-палиндрома: “madam”.(госпожа)
    //Слово «set» имеет более 44 различных значения.
    //«God be with ye»(бог с тобой)- полная версия слова «goodbye»(до свидания)
    //Town(город) — древнейшее слово в английские языке.
    //Только с этим словами: month(месяц), orange(оранжевый), silver(серебрянный), purple(фиолетовый) английские
    //поэты не могут найти рифму.
    //«The sixth sick sheik’s sixth sheep’s sick»(Шестая овца, шестого больного шейха - больна.) — самая 
    //сложная английский скороговорка.(попробуйте произнести)
    //Шесть раз повторяется буква «І» в слове «indivisibility»(неделимость).
    //Три раза подряд повторяется согласная "s" в английском слове «Goddessship»(богиня)
    //TITTLE называется в английские языке точка над буквой «i».
    //«Амперсенд» называется английский символ «&».
    //Более 80% страниц в интернете написано на английском языке.
    //По-английски незаконно говорить в штате Иллинойс
    //Вам приснится небо Лондона, если повторить сто раз выражение «London is the capital of Great Britain».
    //(Лондон это столица Великобритании)
    //Без гласных букв является английское слово «Rhythm».(ритм)
    //За один год возможно выучить английский язык.
    //Слово «OK» было первым словом, сказанным на Луне.
}
function EnTTS(Text) {
    const Message = new SpeechSynthesisUtterance();//Создаем озвутчик предложения-(ий).
    Message.lang = "en-US";//Указываем язык озвучки
    Message.text = Text;//Определяем сообщение которое нужно озвучить.
    window.speechSynthesis.speak(Message)//Озвучиваем сообщение
}
function RuTTS(Text) {
    TTS = new Audio(`https://translate.google.com.vn/translate_tts?ie=UTF-8&q=${Text}&tl=ru&client=tw-ob`);
    TTS.autoplay = true;
}
function CreateArray(Row, Column)
{
    let MyArray = new Array(Row);
    for (var i=0; i <= MyArray.length-1; i++) {
         MyArray[i] = new Array(Column);
    }
    return MyArray;
}
function EnglishToRussian(Text, EnglishTextArray)
{
    let RussianTextArray = EnglishTextArray;
    console.clear();
    for (let sentence = 0; sentence < EnglishTextArray.length; sentence++)//Предложение
    {
         for (let word = 0; word < EnglishTextArray[sentence].length; word++)//Слово
         {
              //Переводим каждое слово каждого предложения
              for (let index = 0; index < Pronoun.length; index++)//Проверка на местоимение, index это номер ячейки нужного
              //перевода
              {
                  if (EnglishTextArray[sentence][word] == Pronoun[index][0])//Если это местоимение
                  {
                      if ((EnglishTextArray[sentence][word] == "i" || EnglishTextArray[sentence][word] == "you" ||
                      EnglishTextArray[sentence][word] == "he" || EnglishTextArray[sentence][word] == "she" ||
                      EnglishTextArray[sentence][word] == "it" || EnglishTextArray[sentence][word] == "we" ||
                      EnglishTextArray[sentence][word] == "they")//to be сочетается только с этими формами
                      && ToBe.includes(EnglishTextArray[sentence][word+1]) && EnglishTextArray[sentence].length == 2)
                      //Если используется to be
                      {
                          if (EnglishTextArray[sentence][word] == "i")
                          {
                              //Если форма глагола to be неправильно используется то исправляем её
                              if (EnglishTextArray[sentence][word+1] != "am" && EnglishTextArray[sentence][word+1] != "'m")
                              {
                                  EnglishTextArray[sentence][word+1] = "am";
                                  console.log("Найдена и заменена неправильная форма вспомогательного глагола to be(в сочетании"+
                                  "с I) на am.");
                              }
                              RussianTextArray[sentence][word] = "Я";
                              RussianTextArray[sentence][word+1] = "являюсь";
                              console.log("Найдено и переведено местоимение I в сочетании с вспомогательным глаголом am.");
                          }
                          else if (EnglishTextArray[sentence][word] == "he" || EnglishTextArray[sentence][word] == "she" ||
                          EnglishTextArray[sentence][word] == "it")
                          {
                               if (EnglishTextArray[sentence][word+1] != "is" && EnglishTextArray[sentence][word] != "'s")
                               {
                                   EnglishTextArray[sentence][word+1] = "is";
                                   console.log(`Найдена и заменена неправильная форма вспомогательного глагола to be(в сочетании 
                                   с ${Pronoun[index][0]}) - is.`);
                               }
                               RussianTextArray[sentence][word] = Pronoun[index][1];
                               RussianTextArray[sentence][word+1] = "является";
                               console.log(`Найдено и переведено местоимение ${Pronoun[index][0]} в сочетании с вспомогательным`+
                               `глаголом is.`);
                          }
                          else if (EnglishTextArray[sentence][word] == "you" || EnglishTextArray[sentence][word] == "we" ||
                          EnglishTextArray[sentence][word] == "they")
                          {
                               if (EnglishTextArray[sentence][word+1] != "are" && EnglishTextArray[sentence][word] != "'re")
                               {
                                   EnglishTextArray[sentence][word+1] = "are";
                                   console.log(`Найдена и заменена неправильная форма вспомогательного глагола to be(в сочетании
                                   с ${Pronoun[index][0]}) на are.`);
                               }
                               if (EnglishTextArray[sentence][word] == "you")
                               {
                                   RussianTextArray[sentence][word+1] = "являетесь";
                               }
                               if (EnglishTextArray[sentence][word] == "we")
                               {
                                   RussianTextArray[sentence][word+1] = "являемся";
                               }
                               if (EnglishTextArray[sentence][word] == "they")
                               {
                                   RussianTextArray[sentence][word+1] = "являются";
                               }
                               RussianTextArray[sentence][word] = Pronoun[index][1];
                               console.log(`Найдено и переведено местоимение ${Pronoun[index][0]} в сочетании с вспомогательным`+
                               `глаголом are.`);
                          }
                      }
                      else
                      {
                          RussianTextArray[sentence][word] = Pronoun[index][1];
                          console.log(`Найдено и заменено местоимение(Pronoun) - ${Pronoun[index][0]}(используещееся без формы `+
                          `вспомогательного глагола to be) на местоимение в русском языке - ${Pronoun[index][1]}.`);
                      }
                      break;
                  }
             }
             for (let index = 0; index < Numeral.length; index++)//Проверка на имя существительное
             {
                  if (EnglishTextArray[sentence][word] == Numeral[index][0])
                  {
                      RussianTextArray[sentence][word] = Numeral[index][1];
                      console.log(`Найдено и заменено числительное(Numeral) - ${Numeral[index][0]} на числительное в `+
                      `русском языке - ${Numeral[index][1]}.`);
                      break;
                  }
                  if (EnglishTextArray[sentence][word] == Numeral[index][0] && EnglishTextArray[sentence][word+1] == "thousand")
                  {
                      RussianTextArray[sentence][word] = Numeral[index][1];
                      console.log(`Найдено и заменено числительное(Numeral) - ${Numeral[index][0]} thousand на числительное в `+
                      `русском языке - ${Numeral[index][1]} тысяча.`);
                      break;
                  }
                  if (EnglishTextArray[sentence][word] == Numeral[index][0] && EnglishTextArray[sentence][word+1] == "hundred")
                  {
                      RussianTextArray[sentence][word] = Numeral[index][1];
                      console.log(`Найдено и заменено числительное(Numeral) - ${Numeral[index][0]} hundred на числительное в `+
                      `русском языке - ${Numeral[index][1]} сотня.`);
                      break;
                  }
             }
             for (let index = 0; index < Conjunction.length; index++)//Проверка на имя существительное
             {
                  if (EnglishTextArray[sentence][word] == Conjunction[index][0])
                  {
                      RussianTextArray[sentence][word] = Conjunction[index][1];
                      console.log(`Найден и заменен союз(Conjunction) - ${Conjunction[index][0]} на союз в `+
                      `русском языке - ${Conjunction[index][1]}.`);
                      break;
                  }
             }
             for (let index = 0; index < Particle.length; index++)//Проверка на имя существительное
             {
                  if (EnglishTextArray[sentence][word] == Particle[index][0])
                  {
                      RussianTextArray[sentence][word] = Particle[index][1];
                      console.log(`Найдена и заменена частица(Particle) - ${Particle[index][0]} на частицу в `+
                      `русском языке - ${Particle[index][1]}.`);
                      break;
                  }
             }
             for (let index = 0; index < Pretext.length; index++)//Проверка на имя существительное
             {
                  if (EnglishTextArray[sentence][word] == Pretext[index][0])
                  {
                      RussianTextArray[sentence][word] = Pretext[index][1];
                      console.log(`Найден и заменен предлог(Pretext) - ${Pretext[index][0]} на предлог в `+
                      `русском языке - ${Pretext[index][1]}.`);
                      break;
                  }
             }
             for (let index = 0; index < Noun.length; index++)//Проверка на имя существительное
             {
                  if (EnglishTextArray[sentence][word] == Noun[index][0])
                  {
                      RussianTextArray[sentence][word] = Noun[index][1];
                      console.log(`Найдено и заменено существительное(Noun) - ${Noun[index][0]} на существительное в `+
                      `русском языке - ${Noun[index][1]}.`);
                      break;
                  }
             }
             //Massive.splice(0, 1)//Удаляет первый символ
             //Massive.splice(1, 1); // начиная с позиции 1, удалить 1 элемент
             //Удалить 3 первых(начиная с позиции 0) элемента и заменить их другими
             //Massive.splice(0, 3, "Давай", "танцевать");
             //Метод splice также может вставлять элементы без удаления, для этого достаточно установить 
             //deleteCount в 0 -> arr.splice(2, 0, "сложный", "язык"); Начиная с 2 ячейки вставить слова
             for (let index = 0; index < Verb.length; index++)//Проверка на глагол
             {
                  if (EnglishTextArray[sentence][word] == ToBe[index] && EnglishTextArray[sentence][word+1] == Verb[index][0])
                  {   
                      RussianTextArray[sentence].splice(word+1, 1);
                      RussianTextArray[sentence][word] = Verb[index][0];
                      console.log(`Найден и заменен вспомогательный глагол(to be) - ${ToBe[index]} и сам глагол - `+
                      `${Verb[index][0]} на глагол - ${Verb[index][1]} в русском языке.`);
                      break;
                  }
             }     
             for (let index = 0; index < Noun.length; index++)//Проверка на существительное
             {
                  if (EnglishTextArray[sentence][word] == ToBe[index] && EnglishTextArray[sentence][word+1] == Noun[index][0])
                  {   
                      RussianTextArray[sentence][word] = Pronoun[index][0];
                      console.log(`Найден и заменен вспомогательный глагол(to be) - ${ToBe[index]} и существительное - `+
                      `${Noun[index][0]} на существительное - ${Noun[index][1]} в русском языке.`);
                      break;
                  }
             }
             for (let index = 0; index < Name.length; index++)//Проверка на имя
             {
                  if (EnglishTextArray[sentence][word] == Name[index][0])
                  {
                      if (ToBe.includes(EnglishTextArray[sentence][word-1]))
                      {
                          RussianTextArray[sentence].splice(word-1, 1);
                          RussianTextArray[sentence][word-1] = Name[index][1];
                          console.log(`Найден и заменен вспомогательный глагол(to be) - ${ToBe[index]} и имя - `+
                          `${Name[index][0]} на имя - ${Name[index][1]} в русском языке. (I am ${Name[index][0]}. - Я
                          ${Name[index][1]}.) аналогично (My name is ${Name[index][0]}. - Меня зовут ${Name[index][1]}.)`);
                          break;
                      }
                      //Если найдено имя и оно не используется с формой глагола to be - быть. 
                      else
                      {
                          RussianTextArray[sentence][word] = Name[index][1];
                          console.log(`Найдено и заменено обозначение имени(Name) - ${Name[index][0]} в английском языке на`+
                          ` правописание имени в русском языке - ${Name[index][1]}.`);
                          break;
                      }
                  }
             }
         }
    }
    //Собираем в предложение разбитые на ячейки слова.
    if (EnglishTextArray.length > 1)
    {
        for (let i = 0; i < EnglishTextArray.length; i++)
        {
             RussianTextArray[i] = RussianTextArray[i].join(' ');
        }
        RussianTextArray = RussianTextArray.join('.');
    }
    else
    {
        for (let i = 0; i < EnglishTextArray.length; i++) RussianTextArray = RussianTextArray[i].join(' ');
    }
    return RussianTextArray;
}
function RussianToEnglish(RussianTextArray)
{
    let EnglishTextArray = RussianTextArray;
    console.clear();
    for (let value = 0; value < RussianTextArray.length; value++)
    {
         for (let index = 0; index < Pronoun.length; index++)//Проверка на местоимения
         {
              if (RussianTextArray[value] == Pronoun[index][1])
              {   
                  EnglishTextArray[value] = Pronoun[index][0];
                  console.log(`Найдено и заменено местоимение - ${Pronoun[index][1]} на местоимение(Pronoun)`+
                  ` - ${Pronoun[index][0]} в английском языке.`);
                  break;
              }
         }
         //Проверка на глагол
         for (let index = 0; index < Verb.length; index++)//Проверка на местоимения
         {
              if (RussianTextArray[value] == Pronoun[index][1])
              {   
                  EnglishTextArray[value] = Pronoun[index][0];
                  console.log(`Найден вспомогательный глагол(to be) - ${ToBe[index]} и сам глагол - ${Verb[index][1]}`+
                  ` - ${Pronoun[index][0]} в английском языке.`);
                  break;
              }
         }
    }
    return EnglishTextArray;
}
function GetTranslatorVocabulary()
{
         const Vocabulary = Adjective.length + Adverb.length + Name.length + Noun.length + Numeral.length + Surname.length +
         Verb.length + Conjunction.length + Particle.length + Pretext.length + Pronoun.length;
         console.log(`Переводчик имеет словарный запас - ${Vocabulary} слов(части речи, имена и фамилии). Количество фраз - `+
         `${Phrase.length}.`);
}
function TranslateText()
{
    let Text = document.getElementById("EnglishText").value;/*Получаем английский текст.*/
    let TranslatedText = "";
    if (document.getElementById('TranslationImage').alt == "Англ.-русский переводчик")
    {
        //Текст доржен содержать английские буквы;
        if (Text.match(/[a-z]/i) == null && Text.replace(/\s+/g, '').length == 0) 
        {
            //Минимум 1 символ(буква) должен быть в строке.
            TranslatedText = "Этот текст недопустим для перевода.";
        }
        else
        {
            document.getElementById('TranslationImage').alt = "Русск.-английский переводчик";
            document.getElementById('TranslationImage').src = "Files/RussianToEnglish.png";
            //Избавляемся от знаков пунктуации
            //Избавляемся от двойных пробелов
            //Разделяем текст на слова написанные строчным буквами
            //Чтобы изменить все символы в строке, необходимо использовать конструкцию /word/g
            //Если спользовать /word/gi - то в слове word не будут иметь значения регистры.
            //| добавляет еще одно слово которое нужно заменить. /[&$]/g Символы пунктуации
            //\w - любая цифра, буква или знак подчеркивания.
            //\s - пробел
            //,#$%^&*;:{}=-_`~()"
            //Если больше двух пробелов срезаем до 1 пробела
            Text = Text.replace(/[,|#%^&/*_}={`~()"\\:;]/g, "").replace(/\s+/g, ' ').replace(/[!?]/g, ".");
            let SentencesCnt = 0;//Количество предложений
            if (Text.replace(/[^.]/g, "").length > 1) 
            {
                Text = Text.split('.').map((Cell) => Cell.toLowerCase());
                SentencesCnt = Text.length;
            }
            else 
            {
                Text = Text.toLowerCase();
                SentencesCnt = 1;//1 предложение нужно перевести
            }
            EnTTS(Text);//Озвучиваем текст
            //Фразы переводятся здесь
            for (let index = 0; index < Phrase.length; index++)//Проверка на фразы
            {
                  if (Text.includes(Phrase[index][0]))
                  {
                      Text = Text.replace(Phrase[index][0], Phrase[index][1]);//Переводим фразу
                      console.log(`Английскому выражение - ${Phrase[index][0]} переводится как ${Phrase[index][1]}.`);
                      break;
                  }
            }
            let EnglishTextArray = [];
            if (SentencesCnt != 1)
            {
                EnglishTextArray = new Array(SentencesCnt);
            }
            else EnglishTextArray = new Array(1);
            for (let i = 0; i < SentencesCnt; i++)//SentencesCnt - количество предложений
            {
                 if (SentencesCnt != 1)//Много предложений
                 {
                     let Sentence = Text[i].trim().split(' ');
                     EnglishTextArray[i] = Sentence;
                 }
                 else 
                 {
                     let Sentence = Text.trim().replace(/[.]/g, "").split(' ');
                     EnglishTextArray[i] = Sentence;
                 }
            }
            const RussianTextArray = EnglishToRussian(Text, EnglishTextArray);
            TranslatedText = RussianTextArray;
        }
        //Изменяем содержимое текстового поля
        document.getElementById("EnglishText").value = TranslatedText;
        //RuTTS(TranslatedText);//Озвучиваем текст
        return;
    }
    else {
         if (Text == null && Text.length < 3) TranslatedText = "Cannot translate empty text!";
         else
         {
            document.getElementById('TranslationImage').alt = "Англ.-русский переводчик";
            document.getElementById('TranslationImage').src = "Files/EnglishToRussian.png";
            const RussianTextArray = Text.split(' ');
            const EnglishTextArray = RussianToEnglish(RussianTextArray);
            TranslatedText = EnglishTextArray.toString();
         }
         //Изменяем содержимое текстового поля
         document.getElementById("EnglishText").value = TranslatedText;
    }
}