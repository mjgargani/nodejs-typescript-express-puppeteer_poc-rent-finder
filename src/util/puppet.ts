import * as puppeteer from 'puppeteer';
import removeAccents from "remove-accents";

import keywords from '../crawler/keywords.json';

type PuppetProps = {
  browser?: puppeteer.Browser,
  page?: puppeteer.Page,
  search?: {
    site: string,
    qs: string,
    results: string
  },
}

export class Puppet {
  private search: PuppetProps['search'];
  private browser: PuppetProps['browser'];
  private page: PuppetProps['page'];

  constructor({ search }: Partial<PuppetProps>) {
    this.search = search;
  }

  async init() {
    this.browser = await puppeteer.launch({
      headless: false
    });
    this.page = await this.browser.newPage();
  }

  async finder(criteria: string[]) {
    const url: string[] = [
      this.search?.site!, 
      this.search?.qs!,
      [keywords.include.join("+"), criteria.join("+")].join("+"),
    ];
    
    await this.page?.goto(url.join(""), { waitUntil: "networkidle0" });

    const results: [string, string][] | undefined = await this.page?.$$eval("h2 > a", 
      (elements: HTMLAnchorElement[]) => elements.map(
        (element): [string, string] => [element.innerText.toLowerCase(), element.href]));

    const filtered = results?.filter(el => !el[1].includes("ad_domain"));

    return filtered;
  }

  async end() {
    await this.page?.close();
    await this.browser?.close();
  }
}