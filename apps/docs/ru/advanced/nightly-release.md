# Ночной канал

::: warning Внимание
"Ночной" канал поддерживает только Docker контейнеры. Если вы используете LXC контейнеры, то получать обновление можно только в стабильных версиях.
:::

Канал ночных релизов позволяет использовать Shorter, собранный непосредственно из последних коммитов в репозитории.

После того как коммит сливается в `main` ветку [Shorter](https://github.com/hywax/shorter) и проходит все тесты, мы запускаем автоматический релиз docker image, используя GitHub Actions.

Вы можете использовать эти "ночные" выпуски для бета-тестирования новых функций и изменений.

Метод сборки и публикации, а также качество этих "ночных" релизов такие же, как и стабильных. Единственное отличие заключается в том, что вы должны часто проверять репозиторий GitHub на наличие обновлений. Существует небольшая вероятность того, что регрессии не будут отловлены в процессе рецензирования и автоматическими тестами. Поэтому мы используем этот канал, чтобы перепроверять все перед каждым релизом.

Чтобы начать использовать "ночной" канал, изменить тег docker образа

```
services:
  web:
    image: ghcr.io/hywax/shorter-web:latest // [!code --]
    image: ghcr.io/hywax/shorter-web:nightly // [!code ++]
```
