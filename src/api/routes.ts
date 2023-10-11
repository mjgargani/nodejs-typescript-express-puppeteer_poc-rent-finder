import express from "express";
import cors from "cors";

import { Puppet } from "../util/puppet";
import engineList from "../crawler/search.json";

type SearchBody = {
  criteria: string[]
}

const app = express()

app.use(cors());
app.use(express.json())

app.get('/', (_req, res) => res.end().status(200));

app.get('/search', async (req, res) => {
  const { criteria } = req.body as SearchBody;
  const crawler = new Puppet({ engine: engineList[0] });
  
  await crawler.init();
  const results = await crawler.finder(criteria);
  await crawler.end();

  res.json(results).status(200);
})

export default app;