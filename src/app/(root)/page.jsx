import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Services from "@/components/serviceCard/Services";
import Button from "@/components/ui/button/Button";
import About from "@/components/about/About";
import Appointment from "@/components/appointment/Appointment";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/utils/auth";

export default async function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Best Car Repair & Maintenance <br />
            <span className={styles.subtitle}>
              One-Click away Services Are Here!
            </span>
          </h1>
          <p className={styles.desc}>
            Get better savings plus trusted car repair mechanics.
          </p>
          <Button text="Book an Appointment" url="booking" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/content-image-2.png"
            alt=""
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className={styles.img}
            priority
          />
        </div>
      </div>
      <Services />
      <About />
      <Appointment />
    </div>
  );
}
