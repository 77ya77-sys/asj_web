---
name: ru-landing-pages-global
description: Aggregates and applies all relevant skills for designing and building high-quality, conversion-focused landing pages and small websites for the Russian market. Use whenever the user asks to design or implement a landing page or marketing site in Russian or for Russian regions, ensuring consistent UX, copy, and technical conventions.
---

# RU Landing Pages & Sites (Global)

## Instructions

- **Scope**: This is a **personal global skill** for all projects on this machine. Apply it whenever the task mentions лендинг, посадочная страница, маркетинговый сайт, промо-сайт, корпоративный сайт, or similar for Russian-speaking audiences.

- **Primary goal**: Combine multiple specialist skills into a single workflow optimized for **RU market** (язык, юридические страницы, мессенджеры, локальные сервисы) and for **high‑quality visual design**.

### 1. Always pull in and follow these skills

When this skill is active, assume the following skills are available and should be applied together where relevant:

- `discovery-interview` — собрать и уточнить требования перед началом работ.
- `designing-beautiful-websites` — общая UX-структура, дизайн‑система, responsive.
- `landing-page-design` — структура секций, above‑the‑fold, social proof, CTA.
- `landing-page-guide-v2` — современный, отличающийся от типовых, high-converting лендинг.
- `landing-page-copywriter` — тексты на русском (headline, subheadline, CTA, секции).
- `frontend-ui-ux-engineer` — визуальная полировка, состояния, hover, micro‑UX.
- `awwwards-landing-page` — анимированные, премиальные лендинги (когда уместно).
- `frontend-builder` / `fullstack-developer` — выбор стека (React/Next, статика) и реализация.
- `scroll-experience`, `gsap-greensock`, `css-native`, `tailwindcss-*` — только если явно нужны анимации или Tailwind.

Если какие‑то из этих skills отсутствуют в установке, продолжать работу, но явно отмечать пользователю, каких skills не хватает и для чего они нужны.

### 2. Учитывать особенности РФ/ru‑audience

При проектировании и разработке лендингов и сайтов для РФ всегда:

- **Язык и форматирование**
  - Основной язык интерфейса — русский.
  - Телефонные номера в формате `+7 (XXX) XXX-XX-XX`.
  - Денежные значения с символом ₽ и привычным форматом разделителей.

- **Юридические и обязательные страницы**
  - Следить, чтобы были предусмотрены страницы/секции: `privacy.html` (политика конфиденциальности), условия обработки персональных данных, реквизиты ИП/ООО.
  - Не заполнять юридический текст, если по ТЗ он предоставляется клиентом, но оставлять заглушки и якоря.

- **Коммуникационные каналы**
  - Предпочтительные CTA: телефон (`tel:`), WhatsApp/Telegram, формы заявки.
  - Для мессенджеров использовать официальные deeplink‑форматы (wa.me, t.me) с UTM‑метками, если это важно по ТЗ.

- **Локальные сервисы**
  - При запросе трекинга/аналитики отдавать приоритет: **Yandex.Metrica**, **Yandex.Webmaster**, **VK Pixel**; Google Analytics только при явном запросе.

### 3. Общие визуальные и технические стандарты

- **Layout**
  - Использовать базовый layout‑контейнер с `max-width: 1440px`, `margin: 0 auto`, внутренние горизонтальные отступы `padding: 0 20px` (или токены, эквивалентные 20px).
  - Строго избегать прямых ссылок на `index.html` — ссылаться только на директории (`/`, `/page/` и т.п.).

- **Performance**
  - Держать HTML/CSS/JS в разумных пределах (ориентироваться на performance‑бюджет из `ROADMAP.md`, если он есть в проекте).
  - Использовать современные форматы изображений (WebP/AVIF), lazy‑loading и адаптивные размеры.

### 4. Workflow при активации этого скилла

1. Сначала применить `discovery-interview`, чтобы уточнить:
   - регион/города в РФ,
   - целевую аудиторию,
   - основной конверсивный action (звонок, заявка, мессенджер),
   - стек (чистый HTML/CSS, React/Next, другой).
2. Затем применить `landing-page-design` + `landing-page-guide-v2` для структуры секций.
3. Использовать `landing-page-copywriter` для текстов на русском с учётом региональных особенностей.
4. На уровне UI и верстки опираться на `designing-beautiful-websites` + `frontend-ui-ux-engineer`.
5. Если требуется вау‑эффект — подключать `awwwards-landing-page`, `scroll-experience`, `gsap-greensock` (по ТЗ, не по умолчанию).
6. Всегда проверять, что:
   - ссылки не ведут на `/index.html`,
   - базовый контейнер 1440px реализован,
   - юридические и контактные блоки для РФ предусмотрены.

## Examples

- **Пример 1**: Пользователь просит сверстать лендинг для сервиса в Москве.
  - Применить этот skill → подтянуть `discovery-interview`, `landing-page-design`, `landing-page-copywriter`, `frontend-ui-ux-engineer`, учесть RU‑формат телефонов и юридических блоков.

- **Пример 2**: Пользователь просит редизайн существующего лендинга для российского бренда.
  - Применить этот skill → использовать `designing-beautiful-websites`, `landing-page-guide-v2`, `frontend-ui-ux-engineer`, проверить performance‑бюджет и соответствие RU‑требованиям.

