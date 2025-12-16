import type { Question } from "../models/models";

export const normalQuestions: Question[] = [
  {
    text: "Kto z tego pokoju jako pierwszy wkurzyłby cię, gdybyście mieszkali razem, i czym.",
    penalty: 1,
  },
  {
    text: "Jakie jest twoje najbardziej wstydliwe wspomnienie z imprezy?",
    penalty: 1,
  },
  {
    text: "Czy kiedykolwiek zakochałeś/zakochałaś się w kimś zajętym? Opowiedz krótko.",
    penalty: 1,
  },
  {
    text: "Czy kiedykolwiek flirtowałeś/flirtowałaś z kimś tylko po to, żeby coś od tej osoby dostać?",
    penalty: 1,
  },
  {
    text: "Czy kiedykolwiek specjalnie ignorowałeś/ignorowałaś wiadomości od kogoś, kto był w tobie zakochany?",
    penalty: 1,
  },
  {
    text: "Czy kiedykolwiek podrywałeś/podrywałaś kogoś dużo starszego od siebie? Jak to wyszło?",
    penalty: 1,
  },
  {
    text: "Czy kiedykolwiek stalkowałeś/stalkowałaś kogoś w social mediach tak długo, że sam(a) się sobą przeraziłeś/przeraziłaś?",
    penalty: 1,
  },
  {
    text: "Czy zdarzyło ci się zasnąć w dziwnym miejscu po alkoholu? Gdzie?",
    penalty: 1,
  },
  {
    text: "Kiedy ostatnio zrobiłeś/zrobiłaś coś naprawdę „brudnego” względem samego/samej siebie (totalne lenistwo, nieogar, zaniedbanie) i jak bardzo?",
    penalty: 1,
  },
  {
    text: "Jaka jest najbardziej obrzydliwa rzecz, którą zjadłeś/zjadłaś po imprezie albo w nocy?",
    penalty: 1,
  },
  {
    text: "Jaki był najbardziej krępujący komplement, jaki ktoś ci kiedykolwiek powiedział?",
    penalty: 1,
  },
  {
    text: "Czy kiedykolwiek bawiło cię grzebanie w dramach innych osób?",
    penalty: 1,
  },
  {
    text: "Jaką najbardziej obrzydliwą rzecz tolerujesz u osoby, która ci się podoba (jakiś nawyk lub zachowanie)?",
    penalty: 1,
  },
  {
    text: "Pokaz wszystkim 6 ostatnich zdjec z twojej galeri.",
    penalty: 1,
  },
  {
    text: "Powiedz jaki masz bodycount.",
    penalty: 1,
  },
  {
    text: "Pokaż wszystkim swoje brudne skarpety.",
    penalty: 1,
  },
  {
    text: "Ile razy udawałeś/aś orgazm.",
    penalty: 1,
  },
  {
    text: "Jaka jest najgorsza randka, na jakiej kiedykolwiek byłeś/byłaś?",
    penalty: 1,
  },
  {
    text: "Czy kiedykolwiek śpiewałeś/śpiewałaś pod prysznicem tak głośno, że ktoś cię usłyszał?",
    penalty: 1,
  },
  {
    text: "Jaki jest twój najbardziej żenujący nick z czasów nastoletnich?",
    penalty: 1,
  },
  {
    text: "Opowiedz o sytuacji, w której głośno puściłeś/puściłaś bąka w złym momencie.",
    penalty: 1,
  },
  {
    text: "Jaka piosenka z twojej playlisty najbardziej cię kompromituje?",
    penalty: 1,
  },
  {
    text: "Czy kiedykolwiek udawałeś/udawałaś, że znasz film lub książkę, której tak naprawdę nie znałeś/nie znałaś?",
    penalty: 1,
  },

  {
    text: "Jaka jest twoja najgorsza fryzura z przeszłości?",
    penalty: 1,
  },
  {
    text: "Jaki jest twój najbardziej wstydliwy zakup online?",
    penalty: 1,
  },
  {
    text: "Czy kiedykolwiek przyłapano cię na tańczeniu samotnie w pokoju?",
    penalty: 1,
  },
  {
    text: "Jaka jest najgłupsza rzecz, w jaką uwierzyłeś/uwierzyłaś jako dziecko?",
    penalty: 1,
  },
  {
    text: "Opowiedz o najbardziej żenującym prezencie, jaki kiedykolwiek dostałeś/dostałaś.",
    penalty: 1,
  },
  {
    text: "Czy kiedykolwiek płakałeś/płakałaś przy filmie lub serialu? Przy jakim?",
    penalty: 1,
  },
  {
    text: "Jaki jest twój najgorszy nawyk, którego się wstydzisz?",
    penalty: 1,
  },
];

export const hardQuestions: Question[] = [
  {
    text: "Kto przy tym stole najbardziej cię pociąga i dlaczego?",
    penalty: 2,
  },
  {
    text: "Jaki jest najbardziej żenujący tekst, jaki kiedykolwiek komuś napisałeś/napisałaś?",
    penalty: 2,
  },
  {
    text: "Jaka była najbardziej „brudna” myśl, jaką miałeś/miałaś o kimś z tego pokoju?",
    penalty: 2,
  },
  {
    text: "Jaka jest najbardziej krępująca rzecz, jaką oglądałeś/oglądałaś w internecie?",
    penalty: 2,
  },
  {
    text: "Czy udawałeś/udawałaś kiedyś, że kogoś lubisz, a tak naprawdę nie mogłeś/mogłaś go znieść? Kogo?",
    penalty: 2,
  },
  {
    text: "Jaka była najbardziej żenująca sytuacja związana z twoim ciałem (zapach, odgłos, wpadka)?",
    penalty: 2,
  },
  {
    text: "Jaka jest najdziwniejsza rzecz, która kiedykolwiek cię podjarała?",
    penalty: 2,
  },
  {
    text: "Czy kiedykolwiek wysłałeś/wysłałaś komuś wiadomość, której desperacko żałowałeś/żałowałaś? Opisz ją w skrócie.",
    penalty: 2,
  },
  {
    text: "Jaka jest najbardziej wstydliwa rzecz w historii twojej przeglądarki?",
    penalty: 2,
  },
  {
    text: "Opowiedz o sytuacji, gdy byłeś/byłaś totalnie skompromitowany(a) przy osobie, która ci się podobała.",
    penalty: 2,
  },
  {
    text: "Jaka jest najgorsza rzecz, jaką zrobiłeś/zrobiłaś po alkoholu i pamiętasz to do dziś?",
    penalty: 2,
  },
  {
    text: "Czy był moment, kiedy czułeś/czułaś się naprawdę „obrzydliwie” z powodu swojego zachowania? Co to było?",
    penalty: 2,
  },
  {
    text: "Jaka była najbardziej „niewłaściwa” osoba, która ci się podobała (np. szef, znajomy znajomego)?",
    penalty: 2,
  },
  {
    text: "Jaka jest najbardziej chamska rzecz, jaką napisałeś/napisałaś o kimś w wiadomościach prywatnych?",
    penalty: 2,
  },
  {
    text: "Czy kiedykolwiek chciałeś/chciałaś być z kimś tylko dla wyglądu lub kasy?",
    penalty: 2,
  },
  {
    text: "Opisz swój najbardziej katastrofalny pocałunek.",
    penalty: 2,
  },
  {
    text: "Jaka jest najbardziej żenująca rzecz, jaką ktoś usłyszał, gdy myślałeś/myślałaś, że jesteś sam(a)?",
    penalty: 2,
  },
  {
    text: "Jaka jest najdziwniejsza rzecz, którą powiedziałeś/powiedziałaś w trakcie kłótni lub bardzo intymnej sytuacji?",
    penalty: 2,
  },
  {
    text: "Czy jest tu ktoś, z kim absolutnie nigdy nie chciałbyś/chciałabyś wylądować sam(a) w pokoju – i dlaczego?",
    penalty: 2,
  },
  {
    text: "Jaką jedną rzecz na swoim ciele wstydzisz się najbardziej?",
    penalty: 2,
  },
  {
    text: "Jaka jest twoja najbardziej żenująca historia z jedzenia, przejedzenia lub tego, co było „po jedzeniu”?",
    penalty: 2,
  },
  {
    text: "Czy kiedykolwiek okłamałeś/okłamałaś kogoś na temat liczby swoich partnerów lub randek?",
    penalty: 2,
  },
  {
    text: "Jakie było twoje najbardziej „brudne” kłamstwo wobec osoby, którą lubisz?",
    penalty: 2,
  },
  {
    text: "Czy kiedykolwiek prowokowałeś/prowokowałaś kogoś tylko po to, żeby sprawdzić, czy cię pożąda?",
    penalty: 2,
  },
  {
    text: "Co najgorszego zrobiłeś/zrobiłaś swojemu ciału (głodówki, przepicie, zero snu itd.)?",
    penalty: 2,
  },
  {
    text: "Czy kiedykolwiek wymiotowałeś/wymiotowałaś w takim miejscu, że do dziś jest ci wstyd? Gdzie to było?",
    penalty: 2,
  },
  {
    text: "Czy jest ktoś, komu do dziś nie przyznałeś/przyznałaś się do czegoś ważnego, co zrobiłeś/zrobiłaś? Co to było (ogólnie)?",
    penalty: 2,
  },
  {
    text: "Jaki był twój najbardziej zazdrosny moment w życiu i co wtedy zrobiłeś/zrobiłaś?",
    penalty: 2,
  },
  {
    text: "Czy kiedykolwiek chciałeś/chciałaś, żeby ktoś cię pragnął tylko po to, żeby móc go odrzucić?",
    penalty: 2,
  },
  {
    text: "Jaki był twój najbardziej wstydliwy moment w łazience, pod prysznicem lub w toalecie?",
    penalty: 2,
  },
  {
    text: "Czy kiedykolwiek zghostowałeś/zghostowałaś kogoś? Kogo i dlaczego?",
    penalty: 2,
  },
  {
    text: "Opowiedz o swoim najbardziej obrzydliwym doświadczeniu seksualnym.",
    penalty: 2,
  },
  {
    text: "Pokaż wszystkim ostatnią wiadomość erotyczną, którą wysłałeś/aś.",
    penalty: 1,
  },
  {
    text: "Przyznaj się, ile razy masturbowałeś/aś się w tym tygodniu.",
    penalty: 2,
  },
  {
    text: "Opowiedz o najgorszym zapachu, jaki czułeś/aś podczas seksu.",
    penalty: 3,
  },
  {
    text: "Przyznaj się do najdziwniejszego miejsca, gdzie uprawiałeś/aś seks.",
    penalty: 2,
  },
  {
    text: "Opowiedz o najbardziej krępującym momencie podczas masturbacji.",
    penalty: 2,
  },
  {
    text: "Opowiedz o najbardziej krępującym seksie w miejscach publicznych.",
    penalty: 2,
  },
  {
    text: "Jaki jest najdziewniejszy przedmiot, którym się masturbowałeś/aś.",
    penalty: 2,
  },
  {
    text: "Opowiedz o swoim najbardziej obrzydliwym pocałunku.",
    penalty: 2,
  },
  {
    text: "Opowiedz o najdziwniejszym śnie erotycznym.",
    penalty: 2,
  },
  {
    text: "Opisz swój najbardziej krępujący orgazm.",
    penalty: 2,
  },
  {
    text: "Czy używałe/łas zabawek erotycznych w miejscach publicznych.",
    penalty: 2,
  },
  {
    text: "Czy uprawiałeś/łas kiedyś seks z nieznajomym.",
    penalty: 2,
  },
  {
    text: "Opowiedz o najbardziej obrzydliwym pocałunku z językiem.",
    penalty: 2,
  },
  {
    text: "Opisz zapach swojego potu po seksie.",
    penalty: 2,
  },
  {
    text: "Opowiedz o najbardziej zboczonym żarcie seksualnym.",
    penalty: 2,
  },
  {
    text: "Pocałuj w usta osobę z najgorszym oddechem.",
    penalty: 2,
  },
  {
    text: "Jaka jest najgorsza rzecz, jaką powiedziałeś/powiedziałaś podczas seksu?",
    penalty: 2,
  },
  {
    text: "Czy kiedykolwiek miałeś/miałaś crusha na przyjacielu swojej byłej/byłego?",
    penalty: 2,
  },
  {
    text: "Opowiedz o sytuacji, w której ktoś cię odrzucił w najbardziej brutalny sposób.",
    penalty: 2,
  },
  {
    text: "Jaka kategoria porno jest twoją tajemną winą (guilty pleasure)?",
    penalty: 2,
  },
  {
    text: "Czy kiedykolwiek miałeś/miałaś 'przyjaciela z korzyściami', który tak naprawdę się w tobie zakochał?",
    penalty: 2,
  },
  {
    text: "Opisz swój najbardziej żenujący dźwięk podczas seksu.",
    penalty: 2,
  },
  {
    text: "Czy kiedykolwiek spałeś/spałaś z kimś tylko dlatego, że byłeś/byłaś pijany/a?",
    penalty: 2,
  },
  {
    text: "Jaka jest najgorsza rada miłosna, jaką kiedykolwiek dałeś/dałaś komuś?",
    penalty: 2,
  },
  {
    text: "Jaka jest najdziwniejsza pozycja seksualna, jaką wypróbowałeś/wypróbowałaś?",
    penalty: 2,
  },
  {
    text: "Czy kiedykolwiek miałeś/miałaś wet dream o kimś, kogo znasz osobiście?",
    penalty: 2,
  },
  {
    text: "Opowiedz o najbardziej żenującym momencie, gdy rodzice lub rodzina weszli w złym momencie.",
    penalty: 2,
  },
  {
    text: "Jaki jest twój najbardziej wstydliwy fetysz lub turn-on?",
    penalty: 2,
  },
  {
    text: "Czy kiedykolwiek porównywałeś/porównywałaś partnera do swojego exa w głowie podczas seksu?",
    penalty: 2,
  },
  {
    text: "Opisz sytuację, w której ktoś odkrył twoją historię porno.",
    penalty: 2,
  },
  {
    text: "Czy kiedykolwiek udawałeś/udawałaś zainteresowanie czyimiś hobby tylko po to, żeby się podobać?",
    penalty: 2,
  },
  {
    text: "Jaka jest najgorsza kłamstwo, jakie powiedziałeś/powiedziałaś, żeby uniknąć seksu?",
    penalty: 2,
  },
  {
    text: "Opowiedz o najbardziej awkward porannej erekcji lub mokrej sytuacji w złym momencie.",
    penalty: 2,
  },
  {
    text: "Czy kiedykolwiek sprawdzałeś/sprawdzałaś telefon partnera bez wiedzy?",
    penalty: 2,
  },
  {
    text: "Jaki był twój najbardziej desperacki moment podrywu?",
    penalty: 2,
  },
  {
    text: "Opisz najgorszy 'walk of shame' po nocy z kimś.",
    penalty: 2,
  },
];

export const hardcoreQuestions: Question[] = [
  {
    text: "Z kim z obecnych nikomu byś się nie pochwalił(a), że coś między wami było, ale mógłbyś/mogłabyś to rozważyć?",
    penalty: 3,
  },
  {
    text: "Czy kiedykolwiek kogoś zdradziłeś/zdradziłaś (emocjonalnie lub fizycznie)?",
    penalty: 3,
  },
  {
    text: "Czy ktoś tutaj był bohaterem twojej fantazji? Powiedz kto.",
    penalty: 3,
  },
  {
    text: "Co jest najbardziej toksyczną rzeczą, jaką zrobiłeś/zrobiłaś w związku?",
    penalty: 3,
  },
  {
    text: "Czy kiedykolwiek żałowałeś/żałowałaś, że z kimś spałeś/spałaś lub poszedłeś/poszłaś na coś intymnego?",
    penalty: 3,
  },
  {
    text: "Czy kiedykolwiek zrobiłeś/zrobiłaś komuś zdjęcie bez jego wiedzy, bo ci się podobał(a)?",
    penalty: 3,
  },
  {
    text: "Jaką najbardziej wstydliwą rzecz musiałbyś/musiałabyś przyznać swojej mamie/tacie, gdyby musieli wszystko o tobie wiedzieć?",
    penalty: 3,
  },
  {
    text: "Czy kiedykolwiek ktoś przyłapał cię na robieniu czegoś bardzo prywatnego? Co to było?",
    penalty: 3,
  },
  {
    text: "Czy kiedykolwiek całowałeś/całowałaś się z kimś, kto był w związku – i o tym wiedziałeś/wiedziałaś?",
    penalty: 3,
  },
  {
    text: "Za jaką swoją fantazję najbardziej wstydził(a)byś się przyznać wprost? Powiedz chociaż jej temat.",
    penalty: 3,
  },
  {
    text: "Czy kiedykolwiek flirtowałeś/flirtowałaś równocześnie z dwiema osobami z tej samej paczki znajomych?",
    penalty: 3,
  },
  {
    text: "Czy kiedykolwiek z kimś spałeś/spałaś lub wszedłeś/weszłaś w coś intymnego tylko po to, żeby poczuć się lepiej ze sobą?",
    penalty: 3,
  },
  {
    text: "Czy kiedykolwiek specjalnie kogoś upiłeś/upiłaś, żeby ci coś powiedział/powiedziała?",
    penalty: 3,
  },
  {
    text: "Czy zdarzyło ci się wykorzystać czyjeś uczucia dla własnej korzyści? Opowiedz sytuację.",
    penalty: 3,
  },
  {
    text: "Jaka była twoja najbardziej nieczysta myśl w sytuacji, w której totalnie nie wypadało tak myśleć (bez szczegółów)?",
    penalty: 3,
  },
  {
    text: "Czy kiedykolwiek chciałeś/chciałaś rozbić czyjś związek, bo jedna z osób ci się podobała?",
    penalty: 3,
  },
  {
    text: "Czy masz jakąś fantazję związaną z imprezą lub domówką, którą do tej pory zachowywałeś/zachowywałaś tylko dla siebie?",
    penalty: 3,
  },
  {
    text: "Opisz swoją ulubioną fantazję seksualną z udziałem kogoś z grupy.",
    penalty: 3,
  },
  {
    text: "Opisz smak ostatniego partnera seksualnego.",
    penalty: 3,
  },
  {
    text: "Pokaż wszystkim swoje nagie zdjęcie z telefonu (jeśli masz).",
    penalty: 3,
  },
  {
    text: "Przyznaj się, ile razy zdradziłeś/aś partnera.",
    penalty: 3,
  },
  {
    text: "Opisz swój najbardziej obrzydliwy fetysz.",
    penalty: 3,
  },
  {
    text: "Opowiedz o najgorszym doświadczeniu z seksem oralnym.",
    penalty: 3,
  },
  {
    text: "Opisz zapach swojej intymnej strefy po całym dniu.",
    penalty: 3,
  },
  {
    text: "Pokaż grupie swoje owłosienie łonowe.",
    penalty: 3,
  },
  {
    text: "Opisz smak własnego ciała po masturbacji.",
    penalty: 3,
  },
  {
    text: "Pokaż grupie swoje nagie selfie.",
    penalty: 3,
  },
  {
    text: "Opowiedz o najbardziej obrzydliwym akcie seksualnym, jaki zrobiłeś/aś.",
    penalty: 3,
  },
  {
    text: "Pokaż grupie swoje brudne majtki.",
    penalty: 3,
  },
  {
    text: "Opowiedz o najgorszym zapachu podczas seksu analnego.",
    penalty: 3,
  },
  {
    text: "Pokaż grupie swoje wideo erotyczne (jeśli masz).",
    penalty: 3,
  },
  {
    text: "Opisz swój fetysz na stopy lub inne obrzydliwe rzeczy.",
    penalty: 3,
  },
  {
    text: "Przyznaj się do seksu z krewnym (nawet w fantazji).",
    penalty: 3,
  },
  {
    text: "Opowiedz o najbardziej krępującym incydencie z sikaniem podczas seksu.",
    penalty: 3,
  },
  {
    text: "Przyznaj się do oglądania zwierzecej pornografii.",
    penalty: 3,
  },
  {
    text: "Opowiedz o najbardziej obrzydliwym pocałunku z wymiotami.",
    penalty: 3,
  },
  {
    text: "Przyznaj się do fantazji o nekrofilii (fikcyjnej).",
    penalty: 3,
  },
  {
    text: "Opowiedz o najkrępującym incydencie z kałem podczas seksu.",
    penalty: 3,
  },
  {
    text: "Pokaż grupie swoje ostatnie nagranie masturbacji.",
    penalty: 3,
  },
  {
    text: "Przyznaj się do oglądania pornografii z tabu tematami.",
    penalty: 3,
  },
  {
    text: "Opisz swój najbardziej obrzydliwy nawyk higieniczny.",
    penalty: 3,
  },
  {
    text: "Przyznaj się do fantazji o gwałcie (fikcyjnej).",
    penalty: 3,
  },
  {
    text: "Czy kiedykolwiek manipulowałeś/manipulowałaś czyimiś uczuciami, żeby dostać to, czego chcesz?",
    penalty: 3,
  },
  {
    text: "Jaka jest najgorsza rzecz, jaką zrobiłeś/zrobiłaś byłemu/byłej po rozstaniu?",
    penalty: 3,
  },
  {
    text: "Czy kiedykolwiek miałeś/miałaś threesome lub inną grupową przygodę? Opowiedz ogólnie.",
    penalty: 3,
  },
  {
    text: "Opisz swoją najbardziej zakazaną fantazję seksualną.",
    penalty: 3,
  },
  {
    text: "Czy kiedykolwiek celowo sprawiłeś/sprawiłaś, że ktoś poczuł się źle ze swoim ciałem?",
    penalty: 3,
  },
  {
    text: "Jaka jest twoja najciemniejsza tajemnica związana z pieniędzmi lub seksem?",
    penalty: 3,
  },
  {
    text: "Czy kiedykolwiek miałeś/miałaś romans z kimś znacznie starszym lub w pozycji władzy?",
    penalty: 3,
  },
  {
    text: "Czy kiedykolwiek nagrywałeś/nagrywałaś seks bez wiedzy drugiej osoby?",
    penalty: 3,
  },
  {
    text: "Jaka jest najgorsza rzecz, jaką zrobiłeś/zrobiłaś, żeby się zemścić na partnerze?",
    penalty: 3,
  },
  {
    text: "Opisz swoją najbardziej ekstremalną fantazję BDSM lub dominacji/poddania.",
    penalty: 3,
  },
  {
    text: "Czy kiedykolwiek płaciłeś/płaciłaś za seks lub usługi erotyczne?",
    penalty: 3,
  },
  {
    text: "Jaka jest twoja najgłębsza niepewność związana z seksem lub ciałem, której nikt nie zna?",
    penalty: 3,
  },
  {
    text: "Czy kiedykolwiek miałeś/miałaś kontakt seksualny z kimś z tej samej płci, nawet eksperymentalny?",
    penalty: 3,
  },
  {
    text: "Opowiedz o sytuacji, w której wykorzystałeś/wykorzystałaś czyjąś słabość emocjonalną dla seksu.",
    penalty: 3,
  },
  {
    text: "Czy kiedykolwiek miałeś/miałaś obsesję na punkcie kogoś, która poszła za daleko?",
    penalty: 3,
  },
  {
    text: "Jaka jest najbardziej toksyczna relacja, w jakiej byłeś/byłaś i dlaczego w niej zostałeś/zostałaś?",
    penalty: 3,
  },
];
