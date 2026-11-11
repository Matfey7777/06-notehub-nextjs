"use client";

interface NotesErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function NotesError({ error, reset }: NotesErrorProps) {
  return (
    <main className="error-container">
      <h2>Something went wrong!</h2>
      <p>We couldn't load your notes.</p>

      <button onClick={() => reset()}>Try again</button>
    </main>
  );
}
