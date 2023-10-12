import React from "react";
import styles from "./contact.module.css";
import Button from "@/components/ui/button/Button";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Contact Us</h1>
        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <div className={styles.sec}>
            <input
              type="number"
              placeholder="Contact"
              className={styles.input}
            />
            <input type="email" placeholder="Email" className={styles.input} />
          </div>
          <textarea
            className={styles.textarea}
            placeholder="write message here..."
          ></textarea>
          <Button text="Submit" />
        </form>
      </div>
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>Contact Info</h1>
        <div className={styles.card}>
          <h3 className={styles.subTitle}>Registered Office :-</h3>
          <p className={styles.desc}>
            #161,5th phase, Sachidananda Nagar, <br />
            Rajarajeshwari Nagar,
            <br />
            Bengaluru, Karnataka 560098.
          </p>
          <p className={styles.desc}>
            <b> Toll Free :</b> 099802 21122
          </p>
          <p className={styles.desc}>
            <b>Email id:</b> help@techtunes.in
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
