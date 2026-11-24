/**
 * Phase 1 Supabase environment configuration placeholder.
 * No database queries, auth, or admin operations are executed in Phase 1.
 */
export const SUPABASE_PUBLIC_CONFIG = {
  url:
    import.meta.env.VITE_SUPABASE_URL ||
    'https://fqygikmgahbcxpjturnc.supabase.co',
  publishableKey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || '',
} as const;
