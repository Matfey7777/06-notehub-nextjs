import axios from "axios";
import type { Note, NoteTag } from "@/types/note";

const request = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
  },
});

// Параметры запроса
interface FetchNotesParams {
  page: number;
  perPage: number;
  search?: string;
}

// Ответ сервера
interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

// Получение заметок
export async function fetchNotes(
  params: FetchNotesParams,
): Promise<FetchNotesResponse> {
  const { data } = await request.get<FetchNotesResponse>("/notes", {
    params,
  });

  return data;
}

interface CreateNotePayload {
  title: string;
  content: string;
  tag: NoteTag;
}

export async function createNote(noteData: CreateNotePayload): Promise<Note> {
  const { data } = await request.post<Note>("/notes", noteData);

  return data;
}

export async function deleteNote(id: string): Promise<Note> {
  const { data } = await request.delete<Note>(`/notes/${id}`);

  return data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const res = await request.get<Note>(`/notes/${id}`);
  return res.data;
}
