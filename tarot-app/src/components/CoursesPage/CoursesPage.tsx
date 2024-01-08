import { CourseCard } from "../CourseCard/CourseCard";
import "./CoursesPage.css";

export function CoursesPage() {
  const courses = [
    {
      id: 1,
      name: "Базовый курс: что такое Таро",
      description:
        "Гаррик ты волшебник Гаррик ты волшебник Гаррик ты волшебник Гаррик ты волшебник Гаррик ты волшебник Гаррик ты волшебник Гаррик ты волшебник Гаррик ты волшебник",
      href: "/course/basic",
    },
    {
      id: 2,
      name: "Какой-то курс 2",
      description:
        "Ну Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно ",
      href: "/course/new",
    },
    {
      id: 3,
      name: "Какой-то курс 3",
      description:
        "Пиздец Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно Просто ахуенно ",
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
