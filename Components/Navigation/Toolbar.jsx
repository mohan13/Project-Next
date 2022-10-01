import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { NavData } from "./NavData";
const Toolbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const router = useRouter();
  return (
    <div className='mx-4'>
      <AnimatePresence>
        <a class="flex gap-2 cursor-pointer title-font font-medium items-center text-gray-900 my-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="hover:text-blue-600 text-xl">Tailblocks</span>
        </a>
        <div className="">
          {NavData.map((val, i) => {
            if (val.submenu) {
              console.log(router);
              return (
                <div key={i}>
                  <div
                    className={`cursor-pointer flex items-center gap-4 ${
                      router.query.from === val.pis
                        ? "text-blue-500"
                        : " hover:text-blue-500"
                    }`}
                    onClick={() => setShowSubMenu(!showSubMenu)}
                  >
                    {val.icon}
                    <div className="hidden md:flex">{val.title}</div>
                  </div>

                  {showSubMenu ? (
                    <div>
                      {val.submenu.map((val, i) => {
                        console.log(val.path, router.pathname);
                        return (
                          <div>
                            <Link href={val.path}>
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className={`cursor-pointer my-3 ml-8 ${
                                  router.asPath === val.path
                                    ? "text-blue-500"
                                    : " hover:text-blue-500"
                                }`}
                              >
                                {val.title}
                              </motion.div>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            } else {
              return (
                <div key={i} className="cursor-pointer my-3">
                  <Link href={val.path} passHref>
                    <div
                      className={`cursor-pointer flex items-center gap-4 ${
                        router.pathname === val.path
                          ? "text-blue-500"
                          : " hover:text-blue-500"
                      }`}
                    >
                      <div>{val.icon}</div>
                      <div className="hidden md:flex">{val.title}</div>
                    </div>
                  </Link>
                </div>
              );
            }
          })}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Toolbar;
