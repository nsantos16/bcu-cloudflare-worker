# BCU Exchange Cloudflare worker ๐ธ

### Example
```
curl --location --request POST 'https://bcu-exchange.nico-santos.workers.dev/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "date": "31/08/21"
}'
```

### ๐ฉ ๐ป Developing

[`src/index.ts`](./src/index.ts) calls the request handler in [`src/handler.ts`](./src/handler.ts), and will return the [request method](https://developer.mozilla.org/en-US/docs/Web/API/Request/method) for the given request.

### ๐งช Testing

This template comes with jest tests which simply test that the request handler can handle each request method. `npm test` will run your tests.

### โ๏ธ Formatting

This template uses [`prettier`](https://prettier.io/) to format the project. To invoke, run `npm run format`.

### ๐ Previewing and Publishing

For information on how to preview and publish your worker, please see the [Wrangler docs](https://developers.cloudflare.com/workers/tooling/wrangler/commands/#publish).

## ๐คข Issues

If you run into issues with this specific project, please feel free to file an issue [here](https://github.com/cloudflare/workers-typescript-template/issues). If the problem is with Wrangler, please file an issue [here](https://github.com/cloudflare/wrangler/issues).

## โ ๏ธ Caveats

The `service-worker-mock` used by the tests is not a perfect representation of the Cloudflare Workers runtime. It is a general approximation. We recommend that you test end to end with `wrangler dev` in addition to a [staging environment](https://developers.cloudflare.com/workers/tooling/wrangler/configuration/environments/) to test things before deploying.
