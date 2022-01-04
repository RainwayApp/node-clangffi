import { LineEndings } from "./types";

export class StringBuilder {
  private buffer: string[] = [];
  public constructor(private endings: LineEndings) {}

  public append(str: string): void;
  public append(buf: Buffer): void;
  public append(bufOrStr: string | Buffer): void {
    if (this.buffer.length == 0) {
      this.buffer.push(bufOrStr.toString());
    } else {
      this.buffer[this.buffer.length - 1] =
        this.buffer[this.buffer.length - 1] + bufOrStr.toString();
    }
  }

  public appendLine(str: string): void;
  public appendLine(buf: Buffer): void;
  public appendLine(bufOrStr: string | Buffer): void {
    this.buffer.push(bufOrStr.toString());
  }

  public toString(): string {
    const ending = this.endings == LineEndings.CRLF ? "\r\n" : "\n";
    const res = this.buffer.join(ending);
    this.buffer = [];
    return res;
  }

  public toJSON(): string {
    return JSON.stringify(this.toString());
  }
}
