# Конфигурация MCP-серверов

Полный список MCP-серверов для разработки сайтов, лендингов и Telegram-ботов. Часть уже подключена в Cursor (папка `mcps`), остальные — рекомендуются к подключению в настройках.

Подробные описания по каждому серверу — в этой же папке:
- [context7.md](context7.md) · [puppeteer.md](puppeteer.md) · [cursor-ide-browser.md](cursor-ide-browser.md) · [sequential-thinking.md](sequential-thinking.md)
- [figma-context.md](figma-context.md) · [firecrawl.md](firecrawl.md) · [fetch.md](fetch.md) · [lighthouse.md](lighthouse.md) · [github.md](github.md) · [telegram-bot.md](telegram-bot.md)

---

## Уже подключённые в проекте (доступны агенту)

| Сервер | Идентификатор | Назначение |
|--------|----------------|------------|
| **Context7** | `user-context7` | Актуальная документация и примеры кода для любых библиотек (React, Next.js, Tailwind, Telegram Bot API и т.д.). |
| **Puppeteer** | `user-puppeteer` | Автоматизация браузера: навигация, клики, ввод, скриншоты. E2E-тесты сайтов и лендингов. |
| **Cursor IDE Browser** | `cursor-ide-browser` | Браузер в IDE: снимки DOM, клики, формы, скролл, профилирование. Тестирование и отладка фронтенда. |
| **Sequential Thinking** | `user-sequential-thinking` | Пошаговое рассуждение для сложных задач (архитектура, рефакторинг, планирование). |

---

## Рекомендуемые для сайтов и лендингов

| Сервер | Назначение | Подключение |
|--------|------------|-------------|
| **Figma Context MCP** | Анализ макетов Figma, извлечение дизайн-токенов (цвета, типографика, отступы). | Cursor MCP settings, Figma API token. |
| **Firecrawl MCP** | Скачивание и парсинг страниц по URL. Анализ конкурентов, референсов, структуры сайтов. | Cursor MCP, API key firecrawl.dev. |
| **Fetch MCP** | Получение содержимого по URL (простой fetch). Когда не нужен полный парсинг Firecrawl. | Cursor MCP. |
| **Lighthouse MCP** | Аудит производительности и Core Web Vitals (LCP, FID/INP, CLS). Performance, Accessibility, SEO. | Cursor MCP или отдельный скрипт. |
| **GitHub MCP** | Анализ репозитория: файлы, коммиты, ветки, PR. Онбординг и доработки по коду. | Cursor MCP, GitHub token. |

---

## Рекомендуемые для Telegram-ботов

| Сервер | Назначение | Подключение |
|--------|------------|-------------|
| **Telegram Bot MCP** | Отправка/получение сообщений, управление ботом из Cursor. Тестирование сценариев. | `npx telegram-bot-mcp-server`, Bot Token от @BotFather. |
| **Context7** (уже есть) | Документация Telegram Bot API, grammY, node-telegram-bot-api и др. | Уже подключён. |

---

## Сводка по сценариям

| Сценарий | Основные MCP |
|----------|--------------|
| **Лендинг / маркетинговый сайт** | Context7, Puppeteer или Cursor IDE Browser, Figma (если есть макет), Lighthouse, Firecrawl (конкуренты). |
| **Веб-приложение (React/Next)** | Context7, Cursor IDE Browser, Puppeteer, GitHub. |
| **Telegram-бот** | Context7 (документация API и библиотек), Telegram Bot MCP (тесты и отладка). |
| **Дизайн по макету** | Figma Context MCP. |
| **Аудит и оптимизация** | Lighthouse MCP. |
| **Исследование конкурентов** | Firecrawl MCP, Fetch MCP. |

---

## Куда подключать

- **Cursor**: Settings → MCP → добавить сервер (command или URL + env).
- Конфигурация хранится в пользовательских настройках Cursor; в этом репозитории лежат только описание и рекомендации (эта папка `.cursor/mcp/`).
