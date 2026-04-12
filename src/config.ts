export const config: Config = {
  title: "Bruisaの主页～",
  author: "Bluerosion",
  avatar: "http://q.qlogo.cn/headimg_dl?dst_uin=3524309131&spec=5&img_type=webp",
  description: "愿你前行的道路，群星闪耀。愿你走过的旅途，百花绽放。",
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
