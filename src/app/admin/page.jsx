"use client";
import React, { useState } from "react";
import styles from "./admin.module.css";
import UserTable from "@/components/tables/UserTable";
import BookingTable from "@/components/tables/AppointTable";
import { signOut, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

const Admin = () => {
  const router = useRouter();
  const { data, status } = useSession();
  status !== "loading" && !data?.user.isAdmin && router.push("/");
  const [showUser, setShowUser] = useState(true);
  return (
    <>
      {status !== "loading" && data?.user.isAdmin && (
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <h1 className={styles.title}>Tech Tune</h1>
            <div className={styles.links}>
              <button
                className={`${styles.link} ${showUser && styles.clicked}`}
                onClick={() => setShowUser(true)}
              >
                users
              </button>
              <button
                className={`${styles.link} ${!showUser && styles.clicked}`}
                onClick={() => setShowUser(false)}
              >
                bookings
              </button>
              <button
                className={styles.link}
                id={styles.logout}
                onClick={() => {
                  signOut().then(redirect("/"));
                }}
              >
                Logout
              </button>
            </div>
          </div>
          <div className={styles.table}>
            {showUser ? <UserTable /> : <BookingTable />}
          </div>
        </div>
      )}
    </>
  );
};

export default Admin;
