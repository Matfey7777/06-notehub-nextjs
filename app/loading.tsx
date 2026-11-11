import css from "./loading.module.css";

export default function Loading() {
  return (
    <main className={css.container}>
      <div className={css.spinner} />
      <p className={css.text}>Loading...</p>
    </main>
  );
}
