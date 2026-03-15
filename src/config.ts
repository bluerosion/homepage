export const config: Config = {
  title: "Bruisaの主页～",
  author: "Bluerosion",
  avatar: "https://i.lowr.ink/i/2026/03/13/69b3d5b725763.jpg",
  description: "愿你前行的道路  群星闪耀",
  links: [
    {
      name: "Blog",
      url: "https://blog.lowr.ink",
      icon: "fa7-solid:blog",
    },
    {
      name: "image",
      url: "https://i.lowr.ink",
      icon: "material-symbols:imagesmode",
    },
    {
      name: "Status",
      url: "https://status.lowr.ink",
      icon: "fa:align-left",
    },
    {
      name: "afdian",
      url: "https://ifdian.net/a/bluerosion",
      icon: "simple-icons:afdian",
    },    
  ],
  backDescription: "owo",
  socials: [
    {
      name: "Github",
      url: "https://github.com/bluerosion",
      icon: "mdi:github",
    },
    {
      name: "BiliBili",
      url: "https://space.bilibili.com/3493120029231478",
      icon: "mingcute:bilibili-line",
    },
    {
      name: "QQ",
      url: "https://qm.qq.com/q/6XB0Atx1VS",
      icon: "fa6-brands:qq",
    },
  ],
  lightBackgrounds: [
    "https://api.elaina.cat/random/pc",
  ],
  darkBackgrounds: [
    "https://api.elaina.cat/random/pc",
  ],
  HF_Host: "je4d9438y3.re.qweatherapi.com",
  HF_Key: "b7d0932ac6b74cc4af5f0e82693a493e",
  playlistIdWyy: "14195710891",
  tachies: [
    "https://i.lowr.ink/i/2026/03/14/69b575a5aa274.webp",
    "https://i.lowr.ink/i/2026/03/14/69b575a963c15.webp","https://i.lowr.ink/i/2026/03/14/69b575ac8c7c1.webp",
    "https://i.lowr.ink/i/2026/03/14/69b575af32652.webp",
    "https://i.lowr.ink/i/2026/03/14/69b575b2486d2.webp",
    "https://i.lowr.ink/i/2026/03/14/69b575b6070a5.webp",
    "https://i.lowr.ink/i/2026/03/14/69b575bf5a3ff.webp",
  ],
};
export interface Link {
  name: string;
  url: string;
  icon?: string;
  iconHtml?: string;
}

export interface Config {
  title: string;
  author: string;
  avatar: string;
  description: string;
  links: Link[];
  backDescription: string;
  socials: Link[];
  lightBackgrounds: string[];
  darkBackgrounds: string[];
  HF_Host: string;
  HF_Key: string;
  playlistIdWyy: string;
  tachies: string[];
}
