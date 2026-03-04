# Skill: 3d-animation-gsap

3D-трансформы и анимация через CSS `transform-style: preserve-3d`, `perspective` и GSAP.

## Когда использовать

- Нужны «объёмные» карточки, перевороты, параллакс-слои, 3D-кубы/карусели **без** полноценного WebGL.
- Запросы: «3D-эффект», «переворот карточки», «perspective», «rotateX/Y/Z», «объёмная анимация» в контексте CSS/GSAP.

## Задача агента

- Использовать CSS: `perspective`, `transform-style: preserve-3d`, `backface-visibility`, `rotateX/Y/Z`, `translateZ`.
- Анимировать 3D-трансформы через **GSAP** (в т.ч. `rotationX`, `rotationY`, `rotationZ`, `z`, `transformPerspective`).
- Соблюдать 12 принципов анимации (см. skill **gsap-greensock**) где применимо.
- Учитывать производительность: анимировать только `transform` и `opacity`, избегать тяжёлых теней/размытий в анимации.

## Типовые приёмы

1. **Карточка с переворотом** — два лица (front/back), `rotateY(180deg)`, `backface-visibility: hidden`.
2. **Каратель 3D** — несколько слайдов в контейнере с `perspective`, анимация `translateZ` и `rotateY` по индексу.
3. **Параллакс слоёв** — несколько слоёв с разным `translateZ`, движение при скролле или движении мыши (GSAP + ScrollTrigger/MouseMove).
4. **Объёмный hover** — лёгкий `rotateX`/`rotateY` по позиции мыши (tilting effect).

## Интеграция

- Со **scroll-experience** — скролл управляет степенью 3D-трансформа (например, вращение по прогрессу).
- С **gsap-greensock** — общие принципы таймлайнов и плавности.

## Результат

- Понятная разметка и стили с 3D-контекстом.
- Плавные анимации через GSAP без лишних зависимостей; при необходимости — отключение при `prefers-reduced-motion: reduce`.
