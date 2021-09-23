Требования к тестовому заданию:

Реализовать интерфейс матрицы простых серых карточек с фиксированным соотношением сторон 16:9.

Количество рядов генерируется рандомно на сервере при каждом заходе и передаётся на клиент. Количество колонок должно настраиваться в интерфейсе, сохраняться в cookies и при следующем входе использоваться для рендера колонок на сервере.

При клике на карточку она активируется: увеличивается на 20% по x и y осям. При этом желательно избежать искажений текста, т.е. без трансформаций на тексте или контейнере с текстом.

При активации карточки, предыдущая активная карточка должна быть деактивирована. При этом компонент с итерированием списка карточек не должен быть перерисован, а только карточки, изменившие состояние.

Требования: использовать TypeScript в strict режиме, React как шаблонизатор и MobX 6 как хранилище. Для серверного рендеринга можно использовать nextjs или самописный сервер и бандлер.

Желательно писать код с учётом его интеграции в большое приложение (как feature) и использовать знакомые промышленные паттерны из ООП и/или ФП.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
