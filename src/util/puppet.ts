import * as puppeteer from 'puppeteer';
import { createHash } from 'crypto';

import keywords from '../crawler/keywords.json';

type PuppetProps = {
  browser: puppeteer.Browser | undefined,
  engine: {
    site: string,
    qs: string,
    results: string,
    ad: string
  } | undefined,
}

const delay = async (ms?: number) => new Promise(r => setTimeout(r, ms));
const md5 = (str: string) => createHash("md5").update(str).digest("hex");

export class Puppet {
  private engine: PuppetProps['engine'];
  private browser: PuppetProps['browser'];

  constructor({ engine }: Partial<PuppetProps>) {
    this.engine = engine;
  }

  async init() {
    this.browser = await puppeteer.launch({
      // headless: "new"
      headless: false,
      defaultViewport: {
        // isMobile: true,
        height: 800,
        width: 360
      }
    });
  }

  async search(criteria: string[]) {
    const url: string[] = [
      this.engine!.site, 
      this.engine!.qs,
      [keywords.include.join("+"), criteria.join("+")].join("+"),
    ];

    const page: puppeteer.Page = await this.browser!.newPage();
    page.on("dialog", (e)=> e.dismiss());

    try {
      await page.goto(url.join(""), { waitUntil: "domcontentloaded" });

      await delay(5000);
  
      const results: [string, string][] | undefined = await page.$$eval(this.engine!.results, 
        (elements) => (elements as HTMLAnchorElement[]).map(
          (element): [string, string] => [element.innerText, element.href]));
  
      const filtered: [string, string][] | undefined  = results?.filter(el => !el[1].includes(this.engine!.ad));
  
      await page.close();
      
      return filtered; 
    } catch (error) {
      console.error(error);
      await page.close();
      return []
    }
  }

  async clean(data: string[]){
    const processed: string[] = [];

    return processed;
  }

  async analyze(index: [string, string]) {
    const page: puppeteer.Page = await this.browser!.newPage();
    page.on("dialog", (e)=> e.dismiss());

    try {
      await page.goto(index[1], { waitUntil: "domcontentloaded" });

      await delay(5000);

      const results = await page.$$eval("div, span, p, h2, h3, h4, li", 
        elements => elements.filter(
          itens => /^R\$\s?[\d.,]+$/.test(itens.innerText
            .replace(/^(.*?)(?=\bR\$)/, "").trim()))
              .map(el => [
                [Math.trunc(el.getBoundingClientRect().x),Math.trunc(el.getBoundingClientRect().y)], 
                el.parentElement?.parentElement?.innerText?.trim(),
                Array.from(el.parentElement?.parentElement?.innerHTML?.match(/href="([^"]+)"/) || [,"Não há links próximos"])[1]
              ]));

      await page.close();
      
      const data = {
        title: index[0],
        url: index[1],
        results: {}
      }

      results.forEach(el => {
        const key = md5((el[0] as number[]).join(",") as string);

        if(!(data.results as any)[key]){
          (data.results as any)[key] = {}
        }
        if(!(data.results as any)[key].url){
          (data.results as any)[key].url = []
        }
        if(!(data.results as any)[key].coordinates){
          (data.results as any)[key].coordinates = []
        }
        
        (data.results as any)[key].coordinates = el[0];
        (data.results as any)[key].url = el[2];
        (data.results as any)[key].innerText = [...(el[1] as string)!.split("\n")];
      })
      
      return data;
    } catch (error) {
      console.error(error);
      await page.close();
      return {
        title: index[0],
        url: index[1],
        error: (error as Error).message
      }
    }
  }

  async finder(criteria: string[]) {
    const results = await this.search(criteria);
    // const results: [string, string][] = [
    //   ["Teste", "https://imoveisglobal.com.br/Casas_para_alugar_em_Itapetininga/index.html"]
    // ]
    if(!!results?.length){
      return Promise.all(results.map(el => this.analyze(el)));
    };
    return [];
  }

  async end() {
    await this.browser?.close();
  }
}