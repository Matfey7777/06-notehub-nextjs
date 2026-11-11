"use client";

interface NoteErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function NoteError({ error, reset }: NoteErrorProps) {
  return (
    <main className="error-container">
      <h2>Something went wrong!</h2>
      <p>We couldn't load this note.</p>

      <button onClick={() => reset()}>Try again</button>
    </main>
  );
}
