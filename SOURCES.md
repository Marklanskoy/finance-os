# Источники и происхождение выпуска

Дата: 12 октября 2026 года.

FINANCE OS 4.0 построен поверх пользовательского FINANCE OS 3.0. Текущий GitHub репозиторий был прочитан через подключение; права: pull=true, push=false. Контроль исходного index.html: Git blob 238309552b5c866b2565a6412cfa0d66604f6329, 199534 байта. Использованы исходники пользовательского архива 3.0, собранный index которого совпадает с этой версией. Никакие личные доходы, расходы, JSON пользователя или ключи не загружались в исходники.

Технические первичные источники:

1. OpenAI Structured Outputs / Responses API: https://developers.openai.com/api/docs/guides/structured-outputs
2. Формат REST-запроса: https://developers.openai.com/api/reference/resources/responses/methods/create
3. Безопасность ключа: https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety
4. Контроль данных: https://developers.openai.com/api/docs/guides/your-data
5. FastAPI на Render: https://render.com/docs/deploy-fastapi
6. Render persistent disks: https://render.com/docs/disks
7. Render secrets: https://render.com/docs/configure-environment-variables
8. Render blueprint: https://render.com/docs/blueprint-spec

Используется прямой HTTP-адаптер к OpenAI Responses с `text.format.json_schema`, не модель в браузере и не вымышленный вызов API. Итоги финансовых операций проверяются программно; текст модели не является доказательством их правильности. Live provider test не выполнялся.

В выпуске нет сторонних шрифтов, фото, аналитических трекеров, рекламных скриптов или сохранённых реальных API-ключей. Иконки и стиль продолжены из пользовательского приложения. Скриншоты — рендер текущего UI в явно модельном Chromium-стенде с вымышленными финансовыми данными.
