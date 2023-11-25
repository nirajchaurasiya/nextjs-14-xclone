import styles from "./css/page.module.css";
import Link from "next/link";

export default function page() {
  return (
    <main className={styles.main}>
      <Link href="/contact">Goto Contact</Link>
    </main>
  );
}
