import styles from "@/app/page.module.css";

export default function ProtectedPage() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.intro}>
                    <h1>Protected page</h1>
                    <p>This is a protected page, only admin can see it.</p>
                </div>
            </main>
        </div>
    );
}