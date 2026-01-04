import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/dist/client/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Homepage</h1>
          <p>This is a public (un-protected) page</p>
          <Link href="/protected">Go to protected page</Link>
    </div>
      </main>
    </div>
  );
}
