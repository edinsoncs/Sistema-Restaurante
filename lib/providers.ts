import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export type DataProvider = "supabase" | "firebase";

export function getSupabaseClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return null;
  }

  return createClient(url, anonKey);
}

export function getFirebaseApp(): FirebaseApp | null {
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
  const messagingSenderId = process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID;
  const appId = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;

  if (!apiKey || !authDomain || !projectId || !storageBucket || !messagingSenderId || !appId) {
    return null;
  }

  return getApps()[0] ?? initializeApp({ apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId });
}

export function isProviderConfigured(provider: DataProvider) {
  return provider === "supabase" ? Boolean(getSupabaseClient()) : Boolean(getFirebaseApp());
}
