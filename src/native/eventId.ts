let sequence = 0;
/** Local transaction identifiers, not authentication credentials. */
export function createEventId(): string {
  return `${Date.now().toString(36)}-${++sequence}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`;
}
