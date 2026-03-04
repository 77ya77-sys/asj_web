# Template-репозиторий для агентной разработки

Базовый шаблон проекта для работы с Cursor. Копируй этот репозиторий для каждого нового проекта.

## Что внутри

- **`.cursor/rules`** — правила workflow (интервью → project-spec → roadmap → код) и **обязательное чтение Rules перед каждым ответом** (папка Rules, выбор релевантных skills и MCP, применение глобальных правил Cursor).
- **`.cursor/skills`** — все skills в одном месте: workflow, 3D-анимация, Telegram-боты (telegram-bot-development), Google Таблицы (google-sheets), лендинги, дизайн, анимация, фронтенд, SEO, Cursor (всего 36 скиллов).
- **`.cursor/SKILLS.md`** — справочник всех skills с путями и назначением.
- **`.cursor/mcp`** — конфиг и описания MCP: подключённые (Context7, Puppeteer, Cursor IDE Browser, Sequential Thinking) и рекомендуемые для сайтов, лендингов и Telegram-ботов (Figma, Firecrawl, Fetch, Lighthouse, GitHub, Telegram Bot MCP); см. `mcp-config.md` и отдельные `*.md` по каждому серверу.
- **`roadmap.md`** — план разработки (заполняется после project-spec).
- Базовая структура: `index.html`, `styles.css`, `script.js`, папки `images`, `icons`, `assets`.

## Как начать новый проект

1. Скопировать этот репозиторий.
2. В Cursor запустить интервью (skill **project-interview**).
3. Создать **project-spec.md** (skill **generate-project-spec**).
4. Создать **roadmap.md** (skill **generate-roadmap**).
5. Разрабатывать по roadmap.

Код пишется только после появления `project-spec.md` и `roadmap.md`.
