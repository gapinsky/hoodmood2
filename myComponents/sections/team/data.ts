export const data = {
  badge: "kadra trenerska",
  title: "Poznaj ekipę hoodmood!",
  description:
    "Za zajęciami stoją ludzie, którzy naprawdę żyją tańcem – i ogarniają pracę z dzieciakami, młodzieżą i dorosłymi. Łączy ich jedno: zajawka, którą czuć od pierwszych zajęć.",
};

export type Trainer = {
  id: string;
  name: string;
  role: string;
  styles: string[];
  shortBio: string;
  description: string;
  img: string;
  hoverImg: string;
  localizations: string[];
};
