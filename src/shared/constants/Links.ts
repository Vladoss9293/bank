interface ISuppurtLink {
  uid: number;
  name: string;
  link: string;
}

export const supportLink: ISuppurtLink[] = [
  {
    uid: 1,
    name: "Terms",
    link: "/site-policy/CBank-terms/",
  },
  {
    uid: 2,
    name: "Privacy",
    link: "/site-policy/privacy/",
  },
  {
    uid: 3,
    name: "Security",
    link: "/site-policy/security/",
  },
  {
    uid: 4,
    name: "Status",
    link: "/status/",
  },
  {
    uid: 5,
    name: "Docs",
    link: "/docs/",
  },
  {
    uid: 6,
    name: "Contact",
    link: "/contact/",
  },
  {
    uid: 7,
    name: "Manage cookies",
    link: "/manage-cookies/",
  },
  {
    uid: 8,
    name: "Do not share my personal information",
    link: "/privacy-settings/",
  },
];
