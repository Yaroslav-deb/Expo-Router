import * as SQLite from "expo-sqlite";

export const db = SQLite.openDatabaseSync("app.db");

const TEAM_DATA = [
  { name: 'Олена Петрівна', role: 'Дизайнер', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { name: 'Іван Козак', role: 'Розробник', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { name: 'Марія Коваль', role: 'Менеджер', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { name: 'Петро Сидоренко', role: 'Аналітик', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { name: 'Анна Лисенко', role: 'HR', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { name: 'Максим Чумак', role: 'Тестувальник', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { name: 'Дмитро Ткач', role: 'DevOps', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { name: 'Юлія Шевченко', role: 'Копірайтер', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { name: 'Андрій Бойко', role: 'SEO Спеціаліст', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { name: 'Вікторія Мороз', role: 'Маркетолог', image: 'https://reactnative.dev/img/tiny_logo.png' },
];

export function initDatabase() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS team (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      role TEXT NOT NULL,
      image TEXT NOT NULL
    );
  `);

  const result = db.getAllSync<{count: number}>('SELECT COUNT(*) as count FROM team');
  if (result[0].count === 0) {
    insertManyExamples(TEAM_DATA);
  }
}

export function insertManyExamples(data: any[]) {
  const statement = db.prepareSync(
    `INSERT INTO team (name, role, image) VALUES (?, ?, ?)`
  );
  try {
    for (const item of data) {
      statement.executeSync([item.name, item.role, item.image]);
    }
  } finally {
    statement.finalizeSync();
  }
}