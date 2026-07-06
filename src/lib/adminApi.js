import { supabase } from "./supabase";

export const LOCALES = ["ca", "es", "en"];

export const LOCALE_LABELS = { ca: "Català", es: "Español", en: "English" };

// Auditoría best-effort: nunca bloquea ni rompe la operación principal.
export async function logAction(action, table, recordId, oldValues, newValues) {
  if (!supabase) return;
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    await supabase.from("admin_logs").insert({
      admin_id: user?.id ?? null,
      action,
      table_name: table,
      record_id: recordId != null ? String(recordId) : null,
      old_values: oldValues ?? null,
      new_values: newValues ?? null,
    });
  } catch {
    // silencioso a propósito
  }
}

// ¿La sesión actual pertenece a un admin? (la barrera real es RLS)
export async function checkIsAdmin() {
  if (!supabase) return { session: null, isAdmin: false };
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) return { session: null, isAdmin: false };
  const { data } = await supabase
    .from("admin_users")
    .select("id, role")
    .eq("id", session.user.id)
    .maybeSingle();
  return { session, isAdmin: Boolean(data) };
}
