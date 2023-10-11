# nodejs-typescript-express-puppeteer_rent-finder

![thumbnail](./thumbnail.webp)

## Descrição / Description

Prova de conceito para uma API de raspagem de dados para consulta de imóveis online (`Express` + `Puppeteer`).

Proof of concept for a data scraping API for online real estate querying (`Express` + `Puppeteer`).

## Como rodar / How to run

> ⚠️ Necessita de um [navegador web](https://www.google.com/intl/pt-BR/chrome/) (Aqui foi utilizado o `Chrome`, mas com ajustes, é possível usar qualquer navegador moderno) e do [NodeJS](https://nodejs.org/pt-br/). O projeto foi testado utilizando a versão `v18.17.1`.

> ⚠️ You need a [web browser](https://www.google.com/intl/pt-BR/chrome/) (`Chrome` was used here, but with adjustments, it is possible to use any modern browser) and from [NodeJS](https://nodejs.org/pt-br/). The project was tested using version `v18.17.1`.

> Para testar o consumo da API, recomenda-se o uso de algum `REST Client` como o [Insomnia](https://insomnia.rest/download).

> To test the consumption of the API, it is recommended to use a `REST Client` such as [Insomnia](https://insomnia.rest/download).

```bash
npm i # Install the packages / Instale os pacotes
```

```bash
npm run dev # Run the `dev` script / Rode o script `dev`
```

A API deve rodar sob a porta `5000`, esse valor pode ser mudado através da variável de ambiente `PORT`.

The API must run on port `5000`, this value can be changed through the `PORT` environment variable.

## Endpoints

- `GET`, `/` : Status code `200` _(API status test)_;
- `GET`, `/search`:
> Body example (`JSON`):

```json
{
	"criteria": ["apartamento", "Itapetininga"]
}
```
> Response example (`JSON`):

Status code `200 - OK`;

```json
[
	{
		"title": "Apartamentos para alugar em Itapetininga, SP - Imóveis Global",
		"url": "https://imoveisglobal.com.br/Apartamentos_para_alugar_em_Itapetininga/index.html",
		"results": {
			"5ac1fecf3a510783fb4546e1a495a950": {
				"url": "https://imoveisglobal.com.br/Apartamento_em_Itapetininga/Imovel_para_alugar_Apartamento_para_alugar_52m2_em_Itapetininga_AD1995988.html",
				"coordinates": [
					-43,
					481
				],
				"innerText": [
					"Apartamento para alugar, 52m2",
					" Itapetininga - SP",
					"R$1.250",
					"52 m2",
					"Proximidades do Imóvel:"
				]
			},
			"4e39aaccf266e7312eff1832c1ddb634": {
				"url": "https://imoveisglobal.com.br/Apartamento_em_Itapetininga/Imovel_para_alugar_Apartamento_com_1_quarto_para_alugar_30m2_em_Itapetininga_AD1747164.html",
				"coordinates": [
					-43,
					932
				],
				"innerText": [
					"Apartamento com 1 quarto para alugar, 30m2",
					" Itapetininga - SP",
					"R$700",
					"30 m2 1 Quarto 1 Banheiro",
					"Proximidades do Imóvel:"
				]
			},
			"325ffaf5406ffa4c9d466170cad9e83a": {
				"url": "https://imoveisglobal.com.br/Apartamento_em_Itapetininga/Imovel_para_alugar_Apartamento_com_2_quartos_para_alugar_71m2_em_Itapetininga_AD1167684.html",
				"coordinates": [
					-43,
					1415
				],
				"innerText": [
					"Apartamento com 2 quartos para alugar, 71m2",
					" Itapetininga - SP",
					"R$1.200",
					"71 m2 2 Quartos 2 Banheiros 1 Vaga",
					"Proximidades do Imóvel:"
				]
			},
			"a05ca7f67a3f785a2a856c1c5ab393af": {
				"url": "https://imoveisglobal.com.br/Apartamento_em_Itapetininga/Imovel_para_alugar_Apartamento_com_2_quartos_para_alugar_44m2_em_Itapetininga_AD3446779.html",
				"coordinates": [
					-43,
					1898
				],
				"innerText": [
					"Apartamento com 2 quartos para alugar, 44m2",
					" Itapetininga - SP",
					"R$1.000",
					"44 m2 2 Quartos 1 Banheiro 2 Vagas",
					"Proximidades do Imóvel:"
				]
			},
			"c24e158266c1c4fd139cd311481c6f1f": {
				"url": "https://imoveisglobal.com.br/Apartamento_em_Itapetininga/Imovel_para_alugar_Apartamento_com_2_quartos_para_alugar_44m2_em_Itapetininga_AD3331875.html",
				"coordinates": [
					-43,
					2381
				],
				"innerText": [
					"Apartamento com 2 quartos para alugar, 44m2",
					" Itapetininga - SP",
					"R$750",
					"44 m2 2 Quartos 1 Banheiro 1 Vaga",
					"Proximidades do Imóvel:"
				]
			},
			"ef6fa4bb0da312b040fe1526a70bb57a": {
				"url": "https://imoveisglobal.com.br/Apartamento_em_Itapetininga/Imovel_para_alugar_Apartamento_para_alugar_40m2_em_Itapetininga_AD3609143.html",
				"coordinates": [
					-43,
					2863
				],
				"innerText": [
					"Apartamento para alugar, 40m2",
					" Itapetininga - SP",
					"R$1.100",
					"40 m2 1 Banheiro 1 Vaga",
					"Proximidades do Imóvel:"
				]
			},
			"9d82e8b52d16e8d7461c0824df01f558": {
				"url": "https://imoveisglobal.com.br/Apartamento_em_Itapetininga/Imovel_para_alugar_Apartamento_com_2_quartos_para_alugar_50m2_em_Itapetininga_AD3581464.html",
				"coordinates": [
					-43,
					3314
				],
				"innerText": [
					"Apartamento com 2 quartos para alugar, 50m2",
					" Itapetininga - SP",
					"R$1.300",
					"50 m2 2 Quartos 1 Banheiro 1 Vaga",
					"Proximidades do Imóvel:"
				]
			},
			"6507a913ecbe403e86934958ea3eaf00": {
				"url": "https://imoveisglobal.com.br/Apartamento_em_Itapetininga/Imovel_para_alugar_Apartamento_com_3_quartos_para_alugar_152m2_em_Itapetininga_AD524354.html",
				"coordinates": [
					-43,
					3797
				],
				"innerText": [
					"Apartamento com 3 quartos para alugar, 152m2",
					" Itapetininga - SP",
					"R$2.400",
					"152 m2 3 Quartos 2 Banheiros 1 Vaga",
					"Proximidades do Imóvel:"
				]
			},
			"21aac00a3ed9767fd42e6abd26eda403": {
				"url": "https://imoveisglobal.com.br/Apartamento_em_Itapetininga/Imovel_para_alugar_Apartamento_com_2_quartos_para_alugar_48m2_em_Itapetininga_AD1965684.html",
				"coordinates": [
					-43,
					4280
				],
				"innerText": [
					"Apartamento com 2 quartos para alugar, 48m2",
					" Itapetininga - SP",
					"R$850",
					"48 m2 2 Quartos 1 Banheiro 1 Vaga",
					"Proximidades do Imóvel:"
				]
			},
			"0d1f83f4f66bc739183c4a83849f99e6": {
				"url": "https://imoveisglobal.com.br/Apartamento_em_Itapetininga/Imovel_para_alugar_Apartamento_com_2_quartos_para_alugar_65m2_em_Itapetininga_AD3342074.html",
				"coordinates": [
					-43,
					4763
				],
				"innerText": [
					"Apartamento com 2 quartos para alugar, 65m2",
					" Itapetininga - SP",
					"R$850",
					"65 m2 2 Quartos 2 Banheiros",
					"Proximidades do Imóvel:"
				]
			},
			"2fa57503d147ce8d1da66ab654caef24": {
				"url": "https://imoveisglobal.com.br/Apartamento_em_Itapetininga/Imovel_para_alugar_Apartamento_com_2_quartos_para_alugar_81m2_em_Itapetininga_AD3476713.html",
				"coordinates": [
					-43,
					5245
				],
				"innerText": [
					"Apartamento com 2 quartos para alugar, 81m2",
					" Itapetininga - SP",
					"R$900",
					"81 m2 2 Quartos 1 Banheiro 1 Vaga",
					"Proximidades do Imóvel:"
				]
			},
			"bda1491ad0221825bf79b2a0d7898091": {
				"url": "https://imoveisglobal.com.br/Apartamento_em_Itapetininga/Imovel_para_alugar_Apartamento_com_3_quartos_para_alugar_122m2_em_Itapetininga_AD3496313.html",
				"coordinates": [
					-43,
					5728
				],
				"innerText": [
					"Apartamento com 3 quartos para alugar, 122m2",
					" Itapetininga - SP",
					"R$1.800",
					"122 m2 3 Quartos 3 Banheiros 2 Vagas",
					"Proximidades do Imóvel:"
				]
			},
			"ee3b6234d6e27ded6c3c4c75edaf5a6b": {
				"url": "https://imoveisglobal.com.br/Apartamento_em_Itapetininga/Imovel_para_alugar_Apartamento_com_2_quartos_para_alugar_42m2_em_Itapetininga_AD1640092.html",
				"coordinates": [
					-43,
					6211
				],
				"innerText": [
					"Apartamento com 2 quartos para alugar, 42m2",
					" Itapetininga - SP",
					"R$600",
					"42 m2 2 Quartos 1 Banheiro 1 Vaga",
					"Proximidades do Imóvel:"
				]
			},
			"137eb7cce053b09865ffd2d51b44a56e": {
				"url": "https://imoveisglobal.com.br/Apartamento_em_Itapetininga/Imovel_para_alugar_Apartamento_com_3_quartos_para_alugar_87m2_em_Itapetininga_AD2010300.html",
				"coordinates": [
					-43,
					6694
				],
				"innerText": [
					"Apartamento com 3 quartos para alugar, 87m2",
					" Itapetininga - SP",
					"R$1.600",
					"87 m2 3 Quartos 2 Banheiros 2 Vagas",
					"Proximidades do Imóvel:"
				]
			},
			"c5e154fbde99a18ccee8be83fd5527c6": {
				"url": "https://imoveisglobal.com.br/Apartamento_em_Itapetininga/Imovel_para_alugar_Apartamento_com_1_quarto_para_alugar_40m2_em_Itapetininga_AD3602108.html",
				"coordinates": [
					-43,
					7177
				],
				"innerText": [
					"Apartamento com 1 quarto para alugar, 40m2",
					" Itapetininga - SP",
					"R$1.500",
					"40 m2 1 Quarto 1 Banheiro 1 Vaga",
					"Proximidades do Imóvel:"
				]
			},
			"24a42b1f3f63bfe147a36f8aad1bcaa0": {
				"url": "https://imoveisglobal.com.br/Apartamento_em_Itapetininga/Imovel_para_alugar_Apartamento_com_2_quartos_para_alugar_68m2_em_Itapetininga_AD3600074.html",
				"coordinates": [
					-43,
					7659
				],
				"innerText": [
					"Apartamento com 2 quartos para alugar, 68m2",
					" Itapetininga - SP",
					"R$2.000",
					"68 m2 2 Quartos 2 Banheiros 1 Vaga",
					"Proximidades do Imóvel:"
				]
			},
			"478f9b0d0cafcc64ab2a6636be6c0f89": {
				"url": "https://imoveisglobal.com.br/Apartamento_em_Itapetininga/Imovel_para_alugar_Apartamento_com_2_quartos_para_alugar_62m2_em_Itapetininga_AD3443454.html",
				"coordinates": [
					-43,
					8142
				],
				"innerText": [
					"Apartamento com 2 quartos para alugar, 62m2",
					" Itapetininga - SP",
					"R$1.100",
					"62 m2 2 Quartos 1 Banheiro 1 Vaga",
					"Proximidades do Imóvel:"
				]
			},
			"5c5c84892c5d7d5192b72e99f50607cd": {
				"url": "https://imoveisglobal.com.br/Apartamento_em_Itapetininga/Imovel_para_alugar_Apartamento_com_1_quarto_para_alugar_47m2_em_Itapetininga_AD2283477.html",
				"coordinates": [
					-43,
					8625
				],
				"innerText": [
					"Apartamento com 1 quarto para alugar, 47m2",
					" Itapetininga - SP",
					"R$900",
					"47 m2 1 Quarto 1 Banheiro 1 Vaga",
					"Proximidades do Imóvel:"
				]
			},
			"1a6387c842a81c5620cb32d2e3d042c4": {
				"url": "https://imoveisglobal.com.br/Apartamento_em_Itapetininga/Imovel_para_alugar_Apartamento_com_3_quartos_para_alugar_80m2_em_Itapetininga_AD289530.html",
				"coordinates": [
					-43,
					9108
				],
				"innerText": [
					"Apartamento com 3 quartos para alugar, 80m2",
					" Itapetininga - SP",
					"R$1.300",
					"80 m2 3 Quartos 1 Banheiro 1 Vaga",
					"Proximidades do Imóvel:"
				]
			},
			"6b50ceafdc5583fc76e5c5b5560fd027": {
				"url": "https://imoveisglobal.com.br/Apartamento_em_Itapetininga/Imovel_para_alugar_Apartamento_com_2_quartos_para_alugar_em_Itapetininga_AD3307591.html",
				"coordinates": [
					-43,
					9591
				],
				"innerText": [
					"Apartamento com 2 quartos para alugar",
					" Itapetininga - SP",
					"R$900",
					"2 Quartos 1 Banheiro 1 Vaga",
					"Proximidades do Imóvel:"
				]
			},
			"e18f0876d47e80a1e53f959b5da3669a": {
				"url": "https://imoveisglobal.com.br/Apartamento_em_Itapetininga/Imovel_para_alugar_Apartamento_com_2_quartos_para_alugar_42m2_em_Itapetininga_AD3326342.html",
				"coordinates": [
					-43,
					10073
				],
				"innerText": [
					"Apartamento com 2 quartos para alugar, 42m2",
					" Itapetininga - SP",
					"R$850",
					"42 m2 2 Quartos 1 Banheiro",
					"Proximidades do Imóvel:"
				]
			},
			"73489abc690a0fd5429e9f704806d57c": {
				"url": "https://imoveisglobal.com.br/Apartamento_em_Itapetininga/Imovel_para_alugar_Apartamento_com_2_quartos_para_alugar_56m2_em_Itapetininga_AD3548596.html",
				"coordinates": [
					-43,
					10556
				],
				"innerText": [
					"Apartamento com 2 quartos para alugar, 56m2",
					" Itapetininga - SP",
					"R$850",
					"56 m2 2 Quartos 1 Banheiro 1 Vaga",
					"Proximidades do Imóvel:"
				]
			},
			"f28a258a2cbdc2ff5d102b86dba14a7d": {
				"url": "https://imoveisglobal.com.br/Apartamento_em_Itapetininga/Imovel_para_alugar_Apartamento_para_alugar_em_Itapetininga_AD3498828.html",
				"coordinates": [
					-43,
					11039
				],
				"innerText": [
					"Apartamento para alugar",
					" Itapetininga - SP",
					"R$150",
					"1 Vaga",
					"Proximidades do Imóvel:"
				]
			},
			"48a6da1d3f4d42ba92bc8184a4e52532": {
				"url": "https://imoveisglobal.com.br/Apartamento_em_Itapetininga/Imovel_para_alugar_Apartamento_com_3_quartos_para_alugar_em_Itapetininga_AD2771050.html",
				"coordinates": [
					-43,
					11490
				],
				"innerText": [
					"Apartamento com 3 quartos para alugar",
					" Itapetininga - SP",
					"R$1.500",
					"3 Quartos 2 Banheiros 1 Vaga",
					"Proximidades do Imóvel:"
				]
			},
			"699438a00b5e93a22bf4095e53353a38": {
				"url": "https://imoveisglobal.com.br/Apartamento_em_Itapetininga/Imovel_para_alugar_Apartamento_com_2_quartos_para_alugar_115m2_em_Itapetininga_AD3137502.html",
				"coordinates": [
					-43,
					11973
				],
				"innerText": [
					"Apartamento com 2 quartos para alugar, 115m2",
					" Itapetininga - SP",
					"R$1.350",
					"115 m2 2 Quartos 1 Banheiro",
					"Proximidades do Imóvel:"
				]
			},
			"cb92a1c4e564d4e4af59ae48f88832b1": {
				"url": "https://imoveisglobal.com.br/Apartamento_em_Itapetininga/Imovel_para_alugar_Apartamento_com_2_quartos_para_alugar_60m2_em_Itapetininga_AD1730459.html",
				"coordinates": [
					-43,
					12455
				],
				"innerText": [
					"Apartamento com 2 quartos para alugar, 60m2",
					" Itapetininga - SP",
					"R$1.300",
					"60 m2 2 Quartos 1 Banheiro",
					"Proximidades do Imóvel:"
				]
			},
			"59ebf1d659823d5b2db3e08694c52506": {
				"url": "https://imoveisglobal.com.br/Apartamento_em_Itapetininga/Imovel_para_alugar_Apartamento_com_2_quartos_para_alugar_62m2_em_Itapetininga_AD3536213.html",
				"coordinates": [
					-43,
					12938
				],
				"innerText": [
					"Apartamento com 2 quartos para alugar, 62m2",
					" Itapetininga - SP",
					"R$1.300",
					"62 m2 2 Quartos 1 Banheiro 1 Vaga",
					"Proximidades do Imóvel:"
				]
			},
			"e47123a991d3faf724f53f7badf9f24f": {
				"url": "https://imoveisglobal.com.br/Apartamento_em_Itapetininga/Imovel_para_alugar_Apartamento_com_2_quartos_para_alugar_61m2_em_Itapetininga_AD3531958.html",
				"coordinates": [
					-43,
					13421
				],
				"innerText": [
					"Apartamento com 2 quartos para alugar, 61m2",
					" Itapetininga - SP",
					"R$1.700",
					"61 m2 2 Quartos 1 Banheiro 1 Vaga",
					"Proximidades do Imóvel:"
				]
			},
			"bd919f44aa810670ca586f53fb74b70b": {
				"url": "https://imoveisglobal.com.br/Apartamento_em_Itapetininga/Imovel_para_alugar_Apartamento_com_1_quarto_para_alugar_30m2_em_Itapetininga_AD713986.html",
				"coordinates": [
					-43,
					13904
				],
				"innerText": [
					"Apartamento com 1 quarto para alugar, 30m2",
					" Itapetininga - SP",
					"R$700",
					"30 m2 1 Quarto 1 Banheiro",
					"Proximidades do Imóvel:"
				]
			},
			"ddcfba77b7c90c6e4a67486ffb05fc50": {
				"url": "https://imoveisglobal.com.br/Apartamento_em_Itapetininga/Imovel_para_alugar_Apartamento_com_2_quartos_para_alugar_44m2_em_Itapetininga_AD3563846.html",
				"coordinates": [
					-43,
					14387
				],
				"innerText": [
					"Apartamento com 2 quartos para alugar, 44m2",
					" Itapetininga - SP",
					"R$700",
					"44 m2 2 Quartos 1 Banheiro 2 Vagas",
					"Proximidades do Imóvel:"
				]
			}
		}
	},
	{
		"title": "Apartamentos para alugar - Itapetininga, SP | OLX",
		"url": "https://www.olx.com.br/imoveis/aluguel/apartamentos/estado-sp/regiao-de-sorocaba/regiao-de-itapetininga/itapetininga",
		"results": {
			"aa55fd6d82bdce405c1072d7ad1b3aa3": {
				"url": "https://sp.olx.com.br/regiao-de-sorocaba/imoveis/fiador-1227816026",
				"coordinates": [
					131,
					310
				],
				"innerText": [
					"Fiador",
					"R$ 350",
					"2",
					"1",
					"1"
				]
			},
			"fc3ce29e4cbee5e7185f3b528b4dd1bc": {
				"url": "https://sp.olx.com.br/regiao-de-sorocaba/imoveis/fiador-1227816026",
				"coordinates": [
					0,
					0
				],
				"innerText": [
					"Fiador",
					"R$ 350",
					"2",
					"1",
					"1"
				]
			}
		}
	},
	{
		"title": "(Cod: 13850) - Imobiliária em Itapetininga | Franciosi Imóveis",
		"url": "https://www.franciosi.com.br/alugar/apartamento/itapetininga/centro/apartamento-alugar-centro-em-itapetininga/13850",
		"results": {}
	},
	{
		"title": "Imobiliária em Itapetininga | Franciosi Imóveis",
		"url": "https://www.franciosi.com.br/",
		"results": {}
	},
	{
		"title": "Casas e apartamentos para alugar em Itapetininga, Itapetininga ...",
		"url": "https://www.quintoandar.com.br/alugar/imovel/itapetininga-itapetininga-sp-brasil",
		"results": {}
	},
	{
		"title": "Apartamentos para Alugar em Itapetininga - SP - MGF Imóveis",
		"url": "https://www.mgfimoveis.com.br/aluguel/apartamento/sp-itapetininga",
		"results": {}
	},
	{
		"title": "Apartamentos para alugar em Itapetininga - Mitula Imóveis",
		"url": "https://imoveis.mitula.com.br/imoveis/aluguel-apartamentos-itapetininga",
		"results": {
			"15afc2e0fe809a432e4ca238a4704f06": {
				"url": "Não há links próximos",
				"coordinates": [
					320,
					883
				],
				"innerText": [
					"R$ 1.800",
					"Itapetininga, São Paulo",
					"2 quartos"
				]
			},
			"91d41be9aa1bbc9687b0c0b84ba52227": {
				"url": "Não há links próximos",
				"coordinates": [
					320,
					1303
				],
				"innerText": [
					"R$ 800",
					"São Paulo, São Paulo",
					"2 casas de banho",
					"156 m²"
				]
			},
			"2f8df58d6724ca909e61b36f9b68de96": {
				"url": "Não há links próximos",
				"coordinates": [
					320,
					1707
				],
				"innerText": [
					"R$ 800",
					"São Paulo, São Paulo",
					"1 quarto",
					"1 casa de banho",
					"35 m²"
				]
			},
			"6fcbb5439ae919f6ca221df90b6661a3": {
				"url": "Não há links próximos",
				"coordinates": [
					320,
					2198
				],
				"innerText": [
					"R$ 2.800",
					"Itapetininga, São Paulo",
					"3 quartos",
					"1 casa de banho",
					"Parque de estacionamento"
				]
			},
			"2bcd740ace2a7f7cac12ce8043eb7039": {
				"url": "Não há links próximos",
				"coordinates": [
					320,
					2649
				],
				"innerText": [
					"R$ 20.000",
					"Itapetininga, São Paulo"
				]
			},
			"896c20f6f11206683d6a16bb8d1436a6": {
				"url": "Não há links próximos",
				"coordinates": [
					320,
					3035
				],
				"innerText": [
					"R$ 8.000",
					"Itapetininga, São Paulo",
					"623 m²"
				]
			},
			"33c051d0bffca0c1a4b8373619151c01": {
				"url": "Não há links próximos",
				"coordinates": [
					320,
					3950
				],
				"innerText": [
					"R$ 6.500",
					"Itapetininga, São Paulo",
					"3 quartos",
					"5 casas de banho",
					"540 m²",
					"Parque de estacionamento",
					"Piscina"
				]
			},
			"6d52263fa67be2d8731d5d9e6a1029d5": {
				"url": "Não há links próximos",
				"coordinates": [
					320,
					4402
				],
				"innerText": [
					"R$ 1.800",
					"São Paulo, São Paulo",
					"2 quartos",
					"1 casa de banho",
					"40 m²"
				]
			},
			"7f59c6bab602af723d1c0744d73e4272": {
				"url": "Não há links próximos",
				"coordinates": [
					320,
					4822
				],
				"innerText": [
					"R$ 2.000",
					"Guarulhos, São Paulo",
					"2 quartos",
					"1 casa de banho",
					"53 m²",
					"Parque de estacionamento",
					"Ginásio",
					"Piscina",
					"Grelhador"
				]
			},
			"4ec5032e1f1ffdb22e44a6a73e69ff21": {
				"url": "Não há links próximos",
				"coordinates": [
					320,
					5293
				],
				"innerText": [
					"R$ 5.500",
					"São Paulo, São Paulo",
					"2 quartos",
					"2 casas de banho",
					"75 m²"
				]
			},
			"43c2bd7b1967d10906359c5adce335ea": {
				"url": "Não há links próximos",
				"coordinates": [
					320,
					5714
				],
				"innerText": [
					"R$ 1.830",
					"Osasco, São Paulo",
					"2 quartos",
					"1 casa de banho",
					"58 m²",
					"Ginásio"
				]
			},
			"1d35e44cee3d3c07de9e18bd6999eb14": {
				"url": "Não há links próximos",
				"coordinates": [
					320,
					6166
				],
				"innerText": [
					"R$ 2.200",
					"São Paulo, São Paulo",
					"1 quarto",
					"1 casa de banho",
					"25 m²"
				]
			},
			"e1fec33eb0da15dd9d01108ea04cc880": {
				"url": "Não há links próximos",
				"coordinates": [
					320,
					6586
				],
				"innerText": [
					"R$ 2.820",
					"São Paulo, São Paulo",
					"2 quartos",
					"2 casas de banho",
					"65 m²"
				]
			},
			"1a1c446a6c723891d0a300625eb3d6bd": {
				"url": "Não há links próximos",
				"coordinates": [
					320,
					7007
				],
				"innerText": [
					"R$ 2.130",
					"São Paulo, São Paulo",
					"3 quartos",
					"2 casas de banho",
					"90 m²",
					"Parque de estacionamento",
					"Ginásio",
					"Piscina",
					"Campo de ténis"
				]
			},
			"096617719a93a295dc3be7b440b924d0": {
				"url": "Não há links próximos",
				"coordinates": [
					320,
					7478
				],
				"innerText": [
					"R$ 5.800",
					"São Paulo, São Paulo",
					"4 quartos",
					"2 casas de banho",
					"105 m²",
					"Parque de estacionamento",
					"Varanda"
				]
			},
			"6d11c3ed8c370ad3e4ca0e66485200cb": {
				"url": "Não há links próximos",
				"coordinates": [
					320,
					7930
				],
				"innerText": [
					"R$ 2.090",
					"São Paulo, São Paulo",
					"2 quartos",
					"2 casas de banho",
					"55 m²",
					"Parque de estacionamento"
				]
			},
			"0aa256c6654eaa30ecbf338e38f83598": {
				"url": "Não há links próximos",
				"coordinates": [
					320,
					8381
				],
				"innerText": [
					"R$ 2.910",
					"São Paulo, São Paulo",
					"1 quarto",
					"1 casa de banho",
					"39 m²"
				]
			},
			"5e73a1ed3280fb3539cdcd455575146b": {
				"url": "Não há links próximos",
				"coordinates": [
					320,
					8802
				],
				"innerText": [
					"R$ 1.800",
					"São Paulo, São Paulo",
					"2 quartos",
					"1 casa de banho",
					"52 m²"
				]
			},
			"c3fa31026fb9034dcddde32b195836dd": {
				"url": "Não há links próximos",
				"coordinates": [
					320,
					9223
				],
				"innerText": [
					"R$ 3.360",
					"São Paulo, São Paulo",
					"1 quarto",
					"1 casa de banho",
					"65 m²"
				]
			},
			"e559de16a86f37a07a62bc724037096e": {
				"url": "Não há links próximos",
				"coordinates": [
					320,
					9644
				],
				"innerText": [
					"R$ 1.650",
					"São Paulo, São Paulo",
					"2 quartos",
					"1 casa de banho",
					"59 m²"
				]
			},
			"df001822089180bf36faca6b8c484d57": {
				"url": "Não há links próximos",
				"coordinates": [
					320,
					10064
				],
				"innerText": [
					"R$ 3.300",
					"Osasco, São Paulo",
					"2 quartos",
					"1 casa de banho",
					"67 m²"
				]
			},
			"2162b7cb3e16de84102f6d7531d8c3bb": {
				"url": "Não há links próximos",
				"coordinates": [
					320,
					10485
				],
				"innerText": [
					"R$ 13.130",
					"São Paulo, São Paulo",
					"3 quartos",
					"4 casas de banho",
					"160 m²"
				]
			},
			"0ec7dd8bea999dd2a33b99d3d8aff237": {
				"url": "Não há links próximos",
				"coordinates": [
					320,
					10906
				],
				"innerText": [
					"R$ 4.710",
					"São Paulo, São Paulo",
					"3 quartos",
					"2 casas de banho",
					"166 m²"
				]
			},
			"2bd600d24efc644ce3eb40e8e654b024": {
				"url": "Não há links próximos",
				"coordinates": [
					320,
					11327
				],
				"innerText": [
					"R$ 2.400",
					"São Paulo, São Paulo",
					"1 quarto",
					"1 casa de banho",
					"38 m²",
					"Parque de estacionamento",
					"Alarme",
					"Ginásio",
					"Piscina",
					"Grelhador",
					"Campo de ténis"
				]
			},
			"05231351b3ff8057abf1ec3babe99cef": {
				"url": "Não há links próximos",
				"coordinates": [
					320,
					11798
				],
				"innerText": [
					"R$ 1.400",
					"São Paulo, São Paulo",
					"1 quarto",
					"1 casa de banho",
					"36 m²"
				]
			},
			"a72fb2b6f024c6b4ff4180f49754dd8c": {
				"url": "Não há links próximos",
				"coordinates": [
					320,
					12218
				],
				"innerText": [
					"R$ 13.500",
					"São Paulo, São Paulo",
					"3 quartos",
					"3 casas de banho",
					"163 m²",
					"Varanda"
				]
			},
			"3b6b5363762d359d708f7c524e3ce405": {
				"url": "Não há links próximos",
				"coordinates": [
					320,
					12670
				],
				"innerText": [
					"R$ 1.500",
					"São Paulo, São Paulo",
					"1 quarto",
					"1 casa de banho",
					"29 m²"
				]
			},
			"4956dcace946af5ca0a5949ec947e2cc": {
				"url": "Não há links próximos",
				"coordinates": [
					320,
					13091
				],
				"innerText": [
					"R$ 1.480",
					"São Paulo, São Paulo",
					"2 quartos",
					"1 casa de banho",
					"48 m²"
				]
			}
		}
	},
	{
		"title": "Imóveis para alugar em Itapetininga, SP - Viva Real",
		"url": "https://www.vivareal.com.br/aluguel/sp/itapetininga/",
		"results": {}
	},
	{
		"title": "Imóveis para Alugar em Itapetininga - SP - MGF Imóveis",
		"url": "https://www.mgfimoveis.com.br/aluguel/imoveis/sp-itapetininga",
		"results": {}
	},
	{
		"title": "Imóveis para alugar em Itapetininga, SP - ZAP Imóveis",
		"url": "https://www.zapimoveis.com.br/aluguel/imoveis/sp+itapetininga/",
		"results": {
			"0f1a57d4f9feb5e6815c37c72e15e585": {
				"url": "Não há links próximos",
				"coordinates": [
					41,
					865
				],
				"innerText": [
					"Total R$ 8.000",
					"",
					"Aluguel de R$ 8.000",
					"",
					"Mensagem"
				]
			},
			"ab32ca220119dd0c90b2e372d9c1c1b6": {
				"url": "Não há links próximos",
				"coordinates": [
					41,
					889
				],
				"innerText": [
					"Total R$ 8.000",
					"",
					"Aluguel de R$ 8.000",
					"",
					"Mensagem"
				]
			},
			"cd76f5acc1bb6f5987e1c359c6b3d977": {
				"url": "Não há links próximos",
				"coordinates": [
					41,
					1511
				],
				"innerText": [
					"Total R$ 3.500",
					"",
					"Aluguel de R$ 3.500",
					"",
					"Mensagem"
				]
			},
			"b304c2dc50c2bb9b81a66778d81789fc": {
				"url": "Não há links próximos",
				"coordinates": [
					41,
					1535
				],
				"innerText": [
					"Total R$ 3.500",
					"",
					"Aluguel de R$ 3.500",
					"",
					"Mensagem"
				]
			},
			"276bc6b3dfabe092c0be690d9c2d6c50": {
				"url": "Não há links próximos",
				"coordinates": [
					41,
					2157
				],
				"innerText": [
					"Total R$ 6.500",
					"",
					"Aluguel de R$ 6.500",
					"",
					"Mensagem"
				]
			},
			"043154d33765f8cdfba36c1de49f611f": {
				"url": "Não há links próximos",
				"coordinates": [
					41,
					2181
				],
				"innerText": [
					"Total R$ 6.500",
					"",
					"Aluguel de R$ 6.500",
					"",
					"Mensagem"
				]
			}
		}
	}
]
```
