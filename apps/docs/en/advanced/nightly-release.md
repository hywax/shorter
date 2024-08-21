# Nightly Channel

::: warning
“Nightly” channel supports only Docker containers. If you use LXC containers, you can only receive the update in stable versions.
:::

The nightly release channel allows you to use Shorter built directly from the latest commits in the repository.

Once the commit is merged into the `main` branch of [Shorter](https://github.com/hywax/shorter) and passes all tests, we run an automatic release of the docker image using GitHub Actions.

You can use these “nightly” releases to beta test new features and changes.

The build and publishing method and quality of these nightly releases are the same as stable releases. The only difference is that you should check the GitHub repository frequently for updates. There is a small chance that regressions are not caught by the review process and automated tests. That's why we use this channel to double-check everything before each release.

To start using the “night” channel, modify the docker image tag

```
services:
  web:
    image: ghcr.io/hywax/shorter-web:latest // [!code --]
    image: ghcr.io/hywax/shorter-web:nightly // [!code ++]
```
