import { CourseCard } from "../CourseCard/CourseCard";
import "./CoursesPage.css";

export function CoursesPage() {
  const courses = [
    {
      id: 1,
      name: "Базовый курс: что такое Таро",
      description:
        "Описание курса 1 Описание курса 1 Описание курса 1 Описание курса 1 Описание курса 1 Описание курса 1 Описание курса 1 Описание курса 1",
      href: "/course/basic",
    },
    {
      id: 2,
      name: "Какой-то курс 2",
      description:
        "Описание курса 2 Описание курса 2 Описание курса 2 Описание курса 2 Описание курса 2 Описание курса 2 Описание курса 2 Описание курса 2 Описание курса 2",
      href: "/course/new",
    },
    {
      id: 3,
      name: "Какой-то курс 3",
      description:
        "Описание курса 3 Описание курса 3 Описание курса 3 Описание курса 3 Описание курса 3 Описание курса 3 Описание курса 3 Описание курса 3 Описание курса 3",
      href: "/course/new2",
    },
  ];
  return (
    <div className="courses-page">
      {courses.map((e, id) => (
        <CourseCard
          name={e.name}
          description={e.description}
          href={e.href}
          id={id}
        />
      ))}
    </div>
  );
}
