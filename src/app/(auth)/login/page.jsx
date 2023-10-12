"use client";
import Link from "next/link";
import { AiFillGoogleCircle, AiOutlineClose } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import { BiSolidLockAlt } from "react-icons/bi";
import { signIn, useSession } from "next-auth/react";
import { useFormik } from "formik";
import { redirect, useRouter } from "next/navigation";
import { login_Validate } from "@/lib/utils/validations";

const LoginPage = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: login_Validate,
    onSubmit,
  });
  const { status } = useSession();

  async function onSubmit(values) {
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });
    res.ok && (redirect(res.url), alert("login successful"));
  }
  return (
    <>
      {status !== "loading" && status === "authenticated" ? (
        <>{redirect("/")}</>
      ) : (
        status === "unauthenticated" && (
          <div className="wrapper">
            <Link href="/" className="close">
              <AiOutlineClose />
            </Link>
            <div className="form-box form">
              <h2 style={{ fontWeight: "500" }}>Login</h2>
              <form onSubmit={formik.handleSubmit}>
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

                <div className="remember-forgot">
                  <Link href="#" className="link">
                    Forgot Password
                  </Link>
                </div>

                <button type="submit" className="btn">
                  Login
                </button>

                <div className="redirect">
                  <p>
                    Dont have an Account?
                    <Link href="/register" className="link">
                      Register
                    </Link>
                  </p>
                </div>
                <div className="prov" onClick={() => signIn("google")}>
                  Sign in with Google
                  <span className="social">
                    <AiFillGoogleCircle />
                  </span>
                </div>
              </form>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default LoginPage;
