# Steps to reproduce

```
pnpm build
cd out
python3 -m http.server 3000
```

Visit http://localhost:3000 and navigate the pages. It works with Pages Router but not App Router.

> [!NOTE]
> At this time, the build fails with an error message because it is not supported:

```
Error: Page "/blog-app/[slug]" is missing "generateStaticParams()" so it cannot be used with "output: export" config.
```