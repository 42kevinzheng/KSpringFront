export type WordResponse = {
    chinese: string;
    pinyin: string;
    definition: string;
    sen1chi: string;
    sen1pin: string;
    sen1eng: string;
    sen2chi: string;
    sen2pin: string;
    sen2eng: string;
    _links: {
      self: {
        href: string;
      },
      word: {
        href: string;
      },
      user: {
        href: string;
      }
    };
   }


   export type Word = {
    chinese: string;
    pinyin: string;
    definition: string;
    sen1chi: string;
    sen1pin: string;
    sen1eng: string;
    sen2chi: string;
    sen2pin: string;
    sen2eng: string;
   }

   export type WordEntry = {
    word: Word;
    url: string;
   }