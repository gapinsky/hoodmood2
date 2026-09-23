export const data = {
  badge: "opinie",
  title: "Opinie kursantów i rodziców",
  description:
    "Zobacz, co o zajęciach tanecznych i akrobatycznych w Hoodmood mówią kursanci i rodzice z Koszalina, Polanowa i Białego Boru.",
};

export type Testimonial = {
  id: string;
  author: string;
  text: string;
  relativeDate: string;
  avatarThumb: string | null;
};

export const testimonials: Testimonial[] = [
  {
    id: "hoodmood-001",
    author: "Konrad Pralkowski",
    relativeDate: "2 lata temu",
    text: "Jedna z najlepszych szkół tańca w Koszalinie, kadra pełna wyrozumiałości i podejścia do dzieci. Akrobatyka na świetnym poziomie, nie wspominając już o hip-hopie. Nic tylko z czystym sumieniem polecić 👍👍",
    avatarThumb: null,
  },
  {
    id: "hoodmood-002",
    author: "Karolina Michalska",
    relativeDate: "2 lata temu",
    text: "Najlepsza szkoła tańca w Koszalinie. Super trenerzy.",
    avatarThumb: null,
  },
  {
    id: "hoodmood-003",
    author: "Henryk Tomkowski",
    relativeDate: "2 lata temu",
    text: "Córka bardzo zadowolona z hip hop i akrobatyki polecam bardzo dobra szkoła",
    avatarThumb: null,
  },
  {
    id: "hoodmood-004",
    author: "Monika Najmrocka",
    relativeDate: "2 lata temu",
    text: "Każdy znajdzie zajęcia dla siebie! Świetne miejsce! Polecam!",
    avatarThumb: null,
  },
  {
    id: "hoodmood-005",
    author: "Joanna Dzwonek",
    relativeDate: "10 miesięcy temu",
    text: "Świetna szkoła tańca z fantastycznym podejściem do dzieci oraz profesjonalnymi instruktorami. Zdecydowanie polecam!",
    avatarThumb: null,
  },
  {
    id: "hoodmood-006",
    author: "Wioletta Jabłońska",
    relativeDate: "2 lata temu",
    text: "Świetne miejsce, przesympatyczni instruktorzy z wielką pasją do tańca. Sama chodzę na zajęcia hip hop formacja 30+ i serdecznie polecam. Jestem mega zadowolona i z utęsknieniem czekam na kolejne zajęcia.",
    avatarThumb: null,
  },
  {
    id: "hoodmood-007",
    author: "Filip",
    relativeDate: "10 miesięcy temu",
    text: "Gorąco polecam tę szkołę tańca! Profesjonalna kadra na najwyższym poziomie – instruktorzy mają ogromną wiedzę, doświadczenie i świetne podejście do uczniów. Każdy znajdzie tutaj coś dla siebie, niezależnie od poziomu zaawansowania.",
    avatarThumb: null,
  },
  {
    id: "hoodmood-008",
    author: "Dorota Dzikowska",
    relativeDate: "10 miesięcy temu",
    text: "Studio, gdzie profesjonalizm młodej, ale doświadczonej kadry łączy się z rodzinną, domową atmosferą. To sprzyja bardzo poszerzaniu tanecznych horyzontów, w każdym wieku 😊 przed 30, ale po 30 i 40 też 😊 Takiego studia tańca szukałam kilka lat!",
    avatarThumb: null,
  },
  {
    id: "hoodmood-009",
    author: "justa horkow",
    relativeDate: "10 miesięcy temu",
    text: "Świetne miejsce stworzone przez tancerzy z pasją, którzy potrafią przekazać swoją wiedzę nawet najbardziej opornym jednostkom;) Super atmosfera na zajęciach i ciągły rozwój pozwala mi cieszyć się tańcem nawet pomimo tego, że zaczęłam swoją przygodę po 30. Baaardzo polecam!",
    avatarThumb: null,
  },
  {
    id: "hoodmood-010",
    author: "Kesja Jarzęcka",
    relativeDate: "10 miesięcy temu",
    text: "Moja córka była bardzo nieśmiała, ale od kiedy chodzi do Szkoły Tańca Hood Mood, widzę, jak naprawdę się rozwija. Dzięki ciepłej atmosferze na zajęciach, a także występom na pokazach i zawodach, zyskała pewność siebie i radość z tańca. Trenerzy są profesjonalni i potrafią wydobyć z dziecka to, co najlepsze. Polecam tę szkołę każdemu rodzicowi, który chce, aby jego dziecko rozkwitło!",
    avatarThumb: null,
  },
];
