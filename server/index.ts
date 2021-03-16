import { createServer } from "http";
import { parse } from "url";
import next from "next";
import path from "path";
import fs from "fs/promises";

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;

const app = next({ dev });

const handle = app.getRequestHandler();

const readStorybookStatic = (filename) => {
  const resolvedBase = path.resolve("./storybook-static");
  const fileLoc = path.join(resolvedBase, filename);
  return fs.readFile(fileLoc);
};

app.prepare().then(() => {
  createServer(async (req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    if (pathname.startsWith("/storybook")) {
      if (dev) {
        res.statusCode = 400;
        return res.end(
          "Forbidden: Please run `npm run storybook` in development"
        );
      }
      if (pathname === "/storybook") {
        res.statusCode = 302;
        res.setHeader("Location", "/storybook/index.html");
        return res.end();
      }

      const filename = pathname.split("/storybook")[1];
      const file = await readStorybookStatic(filename);
      res.statusCode = 200;
      res.write(file);
      return res.end();
    }
    // Forward to next handler
    handle(req, res, parsedUrl);
  }).listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
