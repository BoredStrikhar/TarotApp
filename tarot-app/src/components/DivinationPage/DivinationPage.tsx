import { Divination } from "../Divination/Divination";
import "./DivinationPage.css";

export function DivinationPage() {
  const divinations = [
    {
      id: 1,
      name: "Карта Дня",
      description:
        "Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание ",
      href: "/gadanie/karta-dnya",
      types: ["none"],
    },
    {
      id: 2,
      name: "Прошлое-Настоящее-Будущее",
      description:
        "Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание ",
      href: "/gadanie/proshloe-nastoyaschee-buduschee",
      types: ["Общее", "На любовь", "На карьеру", "На здоровье"],
    },
    {
      id: 3,
      name: "Расклад на Любовь",
      description:
        "Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание ",
      href: "/gadanie/love",
      types: ["none"],
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
          types={e.types}
        />
      ))}
    </div>
  );
}
