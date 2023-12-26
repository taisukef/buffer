import { Buffer as B } from "../Buffer.js";
import { test } from "https://code4fukui.github.io/tape-es/tape.js";

test('toUint8Array', function (t) {
  const b = B.from("abc");
  t.equal(b.toUint8Array(), new TextEncoder().encode("abc"));
});

