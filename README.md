# Lurium — личный лендинг

Одностраничный сайт-портфолио на чистом **HTML / CSS / JS**. Без фреймворков,
без сборки. Открывается двойным кликом по `index.html` и без проблем
деплоится на GitHub Pages.

## Структура

```
index.html          ← разметка и meta-теги
assets/
  styles.css        ← все стили (акцентный цвет — переменная --accent)
  script.js         ← ВЕСЬ КОНТЕНТ И ПЕРЕВОДЫ в начале файла
  og-image.png      ← TODO: картинка для шаринга 1200×630
  cases/            ← TODO: превью кейсов (jpg/webp ~1280×800)
```

## Что и где править

| Хочу поменять | Файл | Где |
|---|---|---|
| Тексты, переводы RU/EN | `assets/script.js` | объект `I18N` |
| Слоган в hero (печатается) | `assets/script.js` | объект `TYPED` |
| Услуги + содержимое модалок | `assets/script.js` | массив `SERVICES` |
| Шаги «как работаю» | `assets/script.js` | массив `STEPS` |
| Кейсы (ссылки, превью, пустые слоты) | `assets/script.js` | массив `CASES` |
| Акцентный цвет | `assets/styles.css` | переменная `--accent` (`:root`) |
| Telegram | глобально | константа `TELEGRAM` в `script.js` + ссылки в `index.html` |
| title / description / og:image | `index.html` | блок `<head>` (помечено TODO) |

### Кейсы

В массиве `CASES`:
- заполненный слот — `{ filled:true, name, tag, url, poster }`
  (`poster` пустой → рисуется сетка-плейсхолдер; добавь путь к картинке);
- пустой слот «скоро» — `{ filled:false }` (ведёт в Telegram).

### Lottie (опционально)

Поддержка уже заложена: укажи путь к JSON в атрибуте `data-lottie`
(например у `.hero-lottie` в `index.html`) — `lottie-web` подгрузится с CDN
лениво только при появлении блока в зоне видимости.

## Деплой на GitHub Pages

1. Создай репозиторий и залей файлы (`index.html` должен лежать в корне).
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch.**
3. Branch: `main`, папка `/ (root)` → **Save.**
4. Через минуту сайт будет на `https://<username>.github.io/<repo>/`.

> Сайт полностью статический, поэтому Jekyll не мешает. Если вдруг что-то не
> отдаётся — положи в корень пустой файл `.nojekyll`.

## Особенности

- Mobile-first, адаптив до десктопа.
- Печатающийся текст, scroll-reveal, лёгкий parallax, микро-интеракции.
- Уважает `prefers-reduced-motion` — анимации отключаются.
- Переключатель RU/EN без перезагрузки, выбор запоминается в `localStorage`.
- Семантический HTML, meta + Open Graph, инлайн-favicon.
