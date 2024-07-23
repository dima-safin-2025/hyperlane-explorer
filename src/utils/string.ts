// TODO add unit tests
import { strip0x } from '@hyperlane-xyz/utils';

// Only allows letters and numbers
const alphanumericRgex = /[^a-zA-Z0-9]/gi;
export function sanitizeString(str: string) {
  if (!str) return '';
  return str.replaceAll(alphanumericRgex, '').toLowerCase();
}

export function tryUtf8DecodeBytes(value: string, fatal = true) {
  if (!value) return undefined;
  try {
    const decoder = new TextDecoder('utf-8', { fatal });
    return decoder.decode(Buffer.from(strip0x(value), 'hex'));
  } catch (error) {
    return undefined;
  }
}
