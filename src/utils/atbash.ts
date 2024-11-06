export class AtbashCipher {
  private static readonly ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  private static readonly REVERSED_ALPHABET = 'zyxwvutsrqponmlkjihgfedcba';

  static encode(plaintext: string): string {
    const encoded = plaintext.toLowerCase()
      .split('')
      .map(char => {
        if (char.match(/[a-z]/)) {
          const index = this.ALPHABET.indexOf(char);
          return this.REVERSED_ALPHABET[index];
        }
        if (char.match(/[0-9]/)) {
          return char;
        }
        return '';
      })
      .join('');

    return this.groupByFive(encoded);
  }

  static decode(cipher: string): string {
    return cipher.toLowerCase()
      .split('')
      .map(char => {
        if (char.match(/[a-z]/)) {
          const index = this.REVERSED_ALPHABET.indexOf(char);
          return this.ALPHABET[index];
        }
        if (char.match(/[0-9]/)) {
          return char;
        }
        return '';
      })
      .join('');
  }

  private static groupByFive(text: string): string {
    return text.match(/.{1,5}/g)?.join(' ') || '';
  }
}