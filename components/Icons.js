"use client";

import React from "react";
import * as Icons from "react-icons/fa"; 
import { SiHtml5, SiCss3, SiGithub, SiNextdotjs, SiDjango, SiSqlite, SiLinux, SiMysql, SiPostgresql } from "react-icons/si"; 
import styles from "./Icons.module.css";

export default function TechIcons() {
  const icons = [
    { icon: Icons.FaPython, name: "Python", color: "#3776AB" },
    { icon: SiDjango, name: "Django", color: "#000000" },
    { icon: SiPostgresql, name: "SQL", color: "#000000" },
    { icon: SiGithub, name: "GitHub", color: "#000000" },
    { icon: Icons.FaReact, name: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#000000" },

    { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
    { icon: SiCss3, name: "CSS3", color: "#1572B6" },
    { icon: Icons.FaNetworkWired, name: "Network", color: "#000000" },
    
    { icon: SiLinux, name: "Linux", color: "#000000" },


  ];

  return (
    <div className={styles.container}>
      {icons.map(({ icon: Icon, name, color }) => (
        <div key={name} className={styles.list}>
          <div>
            <Icon size={32} color={color} />
            
          </div>
          {/* <span className="">{name}</span> */}
        </div>
      ))}
    </div>
  );
}
