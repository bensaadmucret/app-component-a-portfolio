import { describe, it, expect } from 'vitest';
import { AtbashCipher } from './atbash';

describe('AtbashCipher', () => {
  describe('encode', () => {
    it('should encode a simple message', () => {
      expect(AtbashCipher.encode('test')).toBe('gvhg');
    });

    it('should encode with numbers', () => {
      expect(AtbashCipher.encode('test123')).toBe('gvhg1 23');
    });

    it('should handle spaces and group by five', () => {
      expect(AtbashCipher.encode('The quick brown fox')).toBe('gsvjf rxpyi ldmul ckvk');
    });

    it('should handle empty string', () => {
      expect(AtbashCipher.encode('')).toBe('');
    });
  });

  describe('decode', () => {
    it('should decode a simple message', () => {
      expect(AtbashCipher.decode('gvhg')).toBe('test');
    });

    it('should decode with numbers', () => {
      expect(AtbashCipher.decode('gvhg123')).toBe('test123');
    });

    it('should handle spaces', () => {
      expect(AtbashCipher.decode('gsvjf rxpyi ldmul ckvk')).toBe('thequickbrownfox');
    });

    it('should handle empty string', () => {
      expect(AtbashCipher.decode('')).toBe('');
    });
  });
});