import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { NavData } from "./NavData";
// import MenuItems from './';
const Toolbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const router = useRouter();
  return (
    <div>
      <AnimatePresence>
        <div className="w-3/4 m-auto">
          {NavData.map((val, i) => {
            if (val.submenu) {
              return (
                <div key={i} className="cursor-pointer">
                  <div onClick={() => setShowSubMenu(!showSubMenu)}>
                    {val.title}
                  </div>
                  {showSubMenu ? (
                    <div>
                      {val.submenu.map((val, i) => {
                        return (
                          <div>
                            <Link href={val.path}>
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="cursor-pointer my-3 ml-8"
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
                      className={`cursor-pointer ${
                        router.pathname === val.path
                          ? "text-blue-500"
                          : " hover:text-blue-500"
                      }`}
                    >
                      {val.title}
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
