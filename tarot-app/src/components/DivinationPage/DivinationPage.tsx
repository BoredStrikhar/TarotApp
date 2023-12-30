import { Divination } from "../Divination/Divination";
import "./DivinationPage.css";

export function DivinationPage() {
  const divinations = [
    {
      id: 1,
      name: "Карта Дня",
      description:
        "Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно ",
      href: "/gadanie/karta-dnya",
    },
    {
      id: 2,
      name: "Прошлое-Настоящее-Будущее",
      description:
        "Ну Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно ",
      href: "/gadanie/proshloe-nastoyaschee-buduschee",
    },
    {
      id: 3,
      name: "Расклад на Любовь",
      description:
        "Пиздец Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно ",
      href: "/gadanie/love",
    },
  ];
  return (
    <div className="divination-page">
      {divinations.map((e, id) => (
        <Divination
          name={e.name}
          description={e.description}
          href={e.href}
          id={id}
        />
      ))}
    </div>
  );
}
