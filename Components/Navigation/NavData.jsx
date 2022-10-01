import {
  BiHome,
  BiCategory,
  BiFile,
  BiTable,
  BiMessageRoundedError,
} from "react-icons/bi";
export const NavData = [
  {
    icon: <BiHome />,
    title: "HOME",
    path: "/Home/Home",
  },
  {
    icon: <BiTable />,
    title: "DASHBOARD",
    path: "/Table",
  },
  {
    icon: <BiFile />,
    title: "FORM",
    path: "/Form",
  },

  {
    icon: <BiCategory />,
    title: "CATEGORY",
    pis: "category",
    submenu: [
      {
        title: "WEB DESIGN",
        id: "category",
        path: "/web-design?from=category",
      },
      {
        title: "WEB DEVELOPMENT",
        id: "category",
        path: "/web-dev?from=category",
      },
      {
        title: "SEO",
        id: "category",
        path: "/seo?from=category",
      },
    ],
    // path: "",
  },
  {
    icon: <BiMessageRoundedError />,
    title: "ABOUT",
    path: "/About",
  },
];
