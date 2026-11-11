"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { fetchNoteById } from "@/lib/api";
import css from "./NoteDetails.module.css";

export default function NoteDetailsClient() {
  const { id } = useParams<{ id: string }>();

  const {
    data: note,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  if (isLoading) {
    return <p className={css.status}>Loading note...</p>;
  }

  if (isError || !note) {
    return <p className={css.status}>Note not found.</p>;
  }

  return (
    <main className={css.container}>
      <Link href="/notes" className={css.backLink}>
        ← Back to notes
      </Link>

      <article>
        <h1 className={css.title}>{note.title}</h1>

        <p className={css.content}>{note.content}</p>

        <span className={css.tag}>{note.tag}</span>
      </article>
    </main>
  );
}
