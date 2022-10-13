import {
  BiHome,
  BiCategory,
  BiFile,
  BiTable,
  BiMessageRoundedError,
} from "react-icons/bi";
export const NavData = [
  {
    icon: <BiHome className="w-full h-full" />,
    title: "HOME",
    path: "/Home/Home",
  },
  {
    icon: <BiTable className="w-full h-full" />,
    title: "DASHBOARD",
    path: "/Table",
  },
  {
    icon: <BiFile className="w-full h-full" />,
    title: "FORM",
    path: "/Form",
  },

  {
    icon: <BiCategory className="w-full h-full" />,
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
    icon: <BiMessageRoundedError className="w-full h-full" />,
    title: "ABOUT",
    path: "/About",
  },
];
