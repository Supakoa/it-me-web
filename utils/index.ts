export function isEmpty(value?: unknown): boolean {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string') return value === '' || value.length === 0;
  if (typeof value === 'object') return Object.entries(value).length === 0;
  if (value instanceof Array) return value.length === 0;
  return false;
}
