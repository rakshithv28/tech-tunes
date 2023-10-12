import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>About us</h1>
          <p className={styles.desc}>
            In this fast-paced world, the folks want a great platform to ensure
            smooth car repairing and denting services. We at MMC garage respect
            the needs of the customers and want to accomplish car repairing
            requirements effectively.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/a1.jpg"
            alt=""
            fill
            priority
            className={styles.img}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            Welcome to MMC Garage <br />
            <span className={styles.clr}>
              Car Repair and Maintenance Services
            </span>
          </h1>
          <div className={styles.card}>
            In this fast-paced world, the folks want a great platform to ensure
            smooth car repairing and denting services. We at MMC garage respect
            the needs of the customers and want to accomplish car repairing
            requirements effectively.
          </div>
          <p className={styles.desc}>
            Investing in a brand new car is easy but maintaining the car and its
            overall aesthetic is a tough task. We at <b>Tech Tunes Garage </b>{" "}
            understand the requirements of the customers, and thus, provide
            convenient car denting, servicing, battery replacement, and other
            key services such as detailing and denting and painting services. We
            offer major services like car painting & denting, battery
            replacement and much more.
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.imgContainer2}>
            <Image src="/a2.jpg" alt="" fill className={styles.img} />
          </div>
          <div className={styles.textContainer2}>
            <div>
              <h3 className={styles.title} id={styles.title}>
                Our Mission
              </h3>
              <p className={styles.desc}>
                Our mission is to keep the convenience of the customers at its
                fore and provide excellent car repairing and maintenance
                services to the clients.
              </p>
            </div>
            <div>
              <h3 id={styles.title} className={styles.title}>
                Our History
              </h3>
              <p className={styles.desc}>
                We aim to provide leading car servicing and repairing services
                to our customers and want to fulfill our key accountabilities
                regarding car servicing and repairing requirements of the
                customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
