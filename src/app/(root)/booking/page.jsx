"use client";
import React, { useState } from "react";
import styles from "./form.module.css";
import style from "@/components/ui/button/button.module.css";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

const BookingPage = () => {
  const [err, setErr] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      date: Date.now(),
      brand: "",
      model: "",
      name: "",
      city: "",
      email: "",
      contact: "",
      address: "",
    },
    onSubmit,
    onReset,
  });

  function onReset(values) {
    (values.date = ""),
      (values.brand = ""),
      (values.model = ""),
      (values.name = ""),
      (values.city = ""),
      (values.email = ""),
      (values.contact = ""),
      (values.address = "");
    router.push("/");
  }

  async function onSubmit(values) {
    try {
      const res = await fetch("/api/appointments/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        alert("booking Successful");
        router.push("/");
      }
    } catch (err) {
      setErr(true);
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Book Car Service with Approved Garages</h1>
      <form
        className={styles.form}
        onSubmit={formik.handleSubmit}
        onReset={formik.handleReset}
      >
        <input
          name="date"
          type="date"
          placeholder="Enter time of Appointment"
          className={styles.input}
          required
          onChange={formik.handleChange}
          value={formik.values.date}
          {...formik.getFieldProps("date")}
        />
        <div className={styles.row}>
          <input
            type="text"
            placeholder="Car brand"
            className={styles.input}
            name="brand"
            required
            onChange={formik.handleChange}
            value={formik.values.brand}
            {...formik.getFieldProps("brand")}
          />
          <input
            type="text"
            placeholder="Car model"
            className={styles.input}
            name="model"
            required
            onChange={formik.handleChange}
            value={formik.values.model}
            {...formik.getFieldProps("model")}
          />
        </div>
        <div className={styles.row}>
          <input
            type="text"
            placeholder="Name"
            className={styles.input}
            name="name"
            required
            onChange={formik.handleChange}
            value={formik.values.name}
            {...formik.getFieldProps("name")}
          />
          <input
            type="text"
            placeholder="Enter city"
            className={styles.input}
            name="city"
            required
            onChange={formik.handleChange}
            value={formik.values.city}
            {...formik.getFieldProps("city")}
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          name="email"
          required
          onChange={formik.handleChange}
          value={formik.values.email}
          {...formik.getFieldProps("email")}
        />
        <input
          type="number"
          placeholder="Contact"
          className={styles.input}
          name="contact"
          required
          onChange={formik.handleChange}
          value={formik.values.contact}
          {...formik.getFieldProps("contact")}
        />
        <textarea
          type="text"
          placeholder="your Address"
          className={styles.textarea}
          name="address"
          required
          onChange={formik.handleChange}
          value={formik.values.address}
          {...formik.getFieldProps("address")}
        />
        <div className={styles.btnRow}>
          <button type="reset" className={style.btn}>
            Cancel
          </button>
          <button type="submit" className={style.btn}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingPage;
