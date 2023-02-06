import { UpdatePricesRequestParams } from "./interface";

export const updatePricedDatesHeaders = {
  'authority': 'www.google.com',
  'accept': '*/*',
  'accept-language': 'en-US,en;q=0.9',
  'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
  'cookie': 'SID=SgidBjicSB4zKG2WmkxnBCLyRh_OYQS-899FgE0ICvaFR8hFBhbliaCgVMycOdCtNCMilw.; __Secure-1PSID=SgidBjicSB4zKG2WmkxnBCLyRh_OYQS-899FgE0ICvaFR8hFYdHckner1Qr0fVo7LK5vdw.; __Secure-3PSID=SgidBjicSB4zKG2WmkxnBCLyRh_OYQS-899FgE0ICvaFR8hFc9b1OuDdZkclcgvlA6dCIA.; HSID=A3Wcj4_hn_4BDVhwO; APISID=qI2MLuV22tIzAGF8/A2Ty_n-Xlj9wpMm65; SSID=A6JwsNFelFzywpDV1; SAPISID=lam2sdGAwlV677pH/ATYbI03pRvmn9K0Xp; __Secure-1PAPISID=lam2sdGAwlV677pH/ATYbI03pRvmn9K0Xp; __Secure-3PAPISID=lam2sdGAwlV677pH/ATYbI03pRvmn9K0Xp; SEARCH_SAMESITE=CgQIrpcB; OTZ=6860329_68_64_73560_68_416340; AEC=ARSKqsIdKEa0KIJmjmvvyGSdvT4Q2Q6qja5SKklEwPBZaB1mDix1x5igdA; NID=511=sHqbuA5BSN3kKMuTimQmmY5h3cWdsN-EfR6kPrYEtTaaIH7W8fDEdUkaji5FSWsQi461YNRyrAl07wwnW9AFW9osaxFcccYJfxaBHeFbD98hTMSTKN_YLq316qNR4kkCF4o7SC9NaFJle0gamK3ZBBI17nr9LuD6NBMuMXY02dOBQJXXL7l1g_EXi2xUWehnvzsxSyFuQWUYM5-COLQLKT62fUm0Nw5w2W7KC56YJL0Sj1dANxE7TnL3ksMWd_8ImMvos_ZPpGN4hYjfzbBrVXR10GPOTcdqy1-uFNEuxEjyd7r4b9N19z2uu2u56blb; 1P_JAR=2023-02-04-16; __gsas=ID=7be39ced9c9d1f51:T=1675527281:S=ALNI_MYtZHwJBIi5EW45bwYpayYhrDWLeQ; DV=g4h1hk4Ii29UIEjdGkXHrXq97i3UYdgu3TJpNEbfFgAAAJBbb6P7S5CgOAAAACTWtiY5pKI3NgAAAOrXM7IaFq81EQAAAA; SIDCC=AFvIBn8Fqrjki_PyjKvKpWWEJpFZ6rS99-oQIwR0PohlWSsYuTeMBzWh0ApB0tk6ojm21qLjKg; __Secure-1PSIDCC=AFvIBn8rfLR2dtdGfryZS4-yPlybj882bY45uu6yJt5CWekRYVQyqXivWtYe8GG7XaUDBTy_Vw; __Secure-3PSIDCC=AFvIBn9N2__Xff7oNJBcKlv9_RyzGKuqHRPq7MlFvY1Axb0Sc6KiNU5oot7fQcLuWZxn5SYleA',
  'origin': 'https://www.google.com',
  'referer': 'https://www.google.com/travel/flights/search?tfs=CBwQAhopag0IAhIJL20vMDI4bXByEgoyMDIzLTAyLTIwcgwIAxIIL20vMDRqcGwaKWoMCAMSCC9tLzA0anBsEgoyMDIzLTAyLTI0cg0IAhIJL20vMDI4bXBycAGCAQsI____________AUABSAGYAQE&hl=pt-BR',
  'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
  'sec-ch-ua-arch': '"arm"',
  'sec-ch-ua-bitness': '"64"',
  'sec-ch-ua-full-version': '"109.0.5414.119"',
  'sec-ch-ua-full-version-list': '"Not_A Brand";v="99.0.0.0", "Google Chrome";v="109.0.5414.119", "Chromium";v="109.0.5414.119"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-model': '',
  'sec-ch-ua-platform': '"macOS"',
  'sec-ch-ua-platform-version': '"13.0.0"',
  'sec-ch-ua-wow64': '?0',
  'sec-fetch-dest': 'empty',
  'sec-fetch-mode': 'cors',
  'sec-fetch-site': 'same-origin',
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
  'x-client-data': 'CLG1yQEIkbbJAQijtskBCMG2yQEIqZ3KAQj35coBCJahywEI0eHMAQjv8swBCJr+zAEI8oDNAQjqgs0BCPuHzQEIhIzNAQiMjM0BCNmMzQEI3I3NAQjVjs0BCPaOzQEI0uGsAgjx9K0C',
  'x-goog-batchexecute-bgr': '[";SFa4VhvQAAYhzqLhAc5f-fCRAC60yUomACkAIwj8RueehWq1_QOGvjgW7KYNaLzJ1Mc8YQqHPjQIKNWvYIQv0OVbWR8AAAApTwAAAAF1AQeEBHbP7-cvr0yYDqgldW3MtsSJy2i7o32zk0ov6_HSaJn1i3G9j2g3ipmdG0ucYFrfkoJ_dpEg_EVgQ35CALAiaLOo2cYHmUFZA_1Ppco16ZN1cKVu3__-nG4rSKpPUrz2lu4eLCeb70ipJIVp5RaC7Mju6ivJBo74TAvBfjlWTic4xmc4-GTb_JfHGpVKDSARKOLo2rak5IFJwZdRAmgnN8cwFlLSqRrLuTKg4c8eILmX8KxZe-WdUnKsTo1rKx7odQ9PvZdzN1xRmUC--jVEAXA_RXP-gAkTmi4HsRgViPpRcshet9xATCqb8UQzRdTuvuWWSW3BKT3lvqV4ImCuT-oOpX0eJnwwMvCk9HRzwz-nmZEZfIUSL3Og2fZ0ybcvxQLmkc5R3lgwqJHsf1voaX05c-9vEUfoyHCFcX5mhW8OrgeFAn3sw6RfpTRi25xvFYlbyRl5xC85OPvWnr3sY6GwjHQBQubWl16ZuvW4JzLWHnPfHxkL4DmUT8wVmL-vAQ8SYrlMeM52WN6hb7c87MkkHi5wN1NlDZV4SJzH7iB8XhEYSoEKcJlvTW3nIjhxIjI8a6b2zBKn6NcgINja8PuZFd06rNXBtpl2s2SVwnOW3sPKx1COBEldg5AvBbzlRPTJoXJROshMY18E0LzgW55e1GQ8QCoaBksc4T9mLs6v9Kw9XVStzhHMtoZgusiMBLd8bX-I9n4e-2epJ7jL3yhOjzRkojC7QvfnzXh5R5mC3tIexLaPi9Irnhj91Fvelws0y0DtRlzKIXIM23fxBMzFLIKAeoUWCe3aMUHOJTQ-lc9fnFzDIromXEaFUpCFAWef_a_42tdv_t1wPRAiDeqR9czqTpx09LzJaT6gqLAxFncuP99sgWjZXOML2Q2uL3HXwC2lD4KnHef6nhlh9gEiWob5zVvGnniNepkgGvePcnrqBb1HkRB1PVNFrf_19f9LK_SLC2w6eKuH7tztp8s4PImmZd1xOluJjeLrH2vKdWspT16Bie5y8fWTd0d6aY9H4-1B45I7VqenPejZf4V-XEbj9sU4uIUqiPsshZEZODyYriSr-3eFPI2GOAa_A6ITG37b1SaGjsu4zmGsBY-n2WuaUHJlg3Z8cbdNxcqwF1R3Y1iKgUDKD5ZaJzNFtfR2KgBKVs4ajQTvwsK0UmX3z8i-o8f5JkARDxRP_UnVGKdH530ubrdXwqIMzizDPDTeKYa33A6mR7JWWXRGaGp-fdRRKTXVxNHWLRDKM9s4Y66M-NPHNhr_zpKa20gP4IwaBGI6Fcd4xAJUXuYdW9D2JJVzvVPj87XBCfqmLHc2Pute4wG5vDL5TSILhGsDBYEZSUPIohfYoMTYVlwcBtT4r19XfKE9c7Ar_KBnee0MB54E8IUk5U3EHtrsZf6mkzL1op-n4YUAWB6Rpe4wxgi1JDummxwi2xTdk9Qz2IUtsZa8gySc2bGanCIETP2Q_3g-o4QaOVzcBcN9pSNmZoWS-BIQ-ZUNif2UvbPoHHXoCvCA9ERTlA",null,null,6,null,null,null,0,"4"]',
  'x-goog-ext-259736195-jspb': '["pt-BR","BR","BRL",1,null,[180],null,[[45775681,48630933,47907128,48553482,48480738,48593234]],7,[]]',
  'x-same-domain': '1'
};

export const updatePricedDatesParams: UpdatePricesRequestParams = {
  'f.sid': '-4747079879293250193',
  'bl': 'boq_travel-frontend-ui_20230301.02_p1',
  'hl': 'pt-BR',
  'soc-app': 162,
  'soc-platform': 1,
  'soc-device': 1,
  '_reqid': 311355,
  'rt': 'c'
};