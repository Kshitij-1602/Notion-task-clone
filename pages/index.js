import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import TaskBoard from "../components/TaskBoard/TaskBoard";
import { MdOutlineDone } from "react-icons/md";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Airtribe notion clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <h1>
            <MdOutlineDone />
            Task List
          </h1>
          <div className={styles.homepageParagraph}>
            Use this template to track your personal tasks.{" "}
          </div>
          <div className={styles.homepageParagraph}>
            Click an existing task to add additional context or subtasks.
          </div>
        </div>

        <TaskBoard />
        <h3 style={{ marginTop: "-50px", color: "blue" }}>
          Made by Kshitij Mohanka
        </h3>
      </main>
    </div>
  );
}
