"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import { BiSolidLockAlt, BiSolidUserCircle } from "react-icons/bi";
import { useFormik } from "formik";
import { register_validate } from "@/lib/utils/validations";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const RegisterPage = () => {
  const [err, setErr] = useState(false);
  const router = useRouter();

  const { status } = useSession();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate: register_validate,
    onSubmit,
  });

  async function onSubmit(values) {
    //name, email, password
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST", //create
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values), //name,email,password
      });

      res.status === 201 &&
        (router.push("/login"), alert("registered successfully"));
    } catch (err) {
      setErr(true);
    }
  }
  return (
    <>
      {status !== "loading" && status === "authenticated"
        ? redirect("/")
        : status === "unauthenticated" && (
            <div className="wrapper">
              <Link href="/" className="close">
                <AiOutlineClose />
              </Link>
              <div className="form-box form">
                <h2 style={{ fontWeight: "500" }}>Register</h2>
                <form onSubmit={formik.handleSubmit}>
                  <div className="input-box">
                    <span className="icon">
                      <BiSolidUserCircle />
                    </span>
                    <input
                      type="text"
                      required
                      name="name"
                      onChange={formik.handleChange}
                      value={formik.values.name ? formik.values.name : "name"}
                      {...formik.getFieldProps("name")}
                    />
                    <label>Username</label>
                    {formik.touched.name && formik.errors.name && (
                      <span className="err">{formik.errors.name}</span>
                    )}
                  </div>

                  <div className="input-box">
                    <span className="icon">
                      <HiMail />
                    </span>
                    <input
                      type="email"
                      required
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      {...formik.getFieldProps("email")}
                    />
                    <label>Email</label>
                    {formik.touched.email && formik.errors.email && (
                      <span className="err">{formik.errors.email}</span>
                    )}
                  </div>

                  <div className="input-box">
                    <span className="icon">
                      <BiSolidLockAlt />
                    </span>
                    <input
                      type="password"
                      required
                      name="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      {...formik.getFieldProps("password")}
                    />
                    <label>Password</label>
                    {formik.touched.password && formik.errors.password && (
                      <span className="err"> {formik.errors.password}</span>
                    )}
                  </div>

                  <button type="submit" className="btn">
                    Register
                  </button>

                  <div className="redirect">
                    <p>
                      Already have an Account?
                      <Link href="/login" className="link">
                        Login
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          )}
    </>
  );
};

export default RegisterPage;
