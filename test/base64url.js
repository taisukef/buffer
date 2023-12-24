import { Buffer as B } from "../Buffer.js";
import { test } from "https://code4fukui.github.io/tape-es/tape.js";

test('simple', function (t) {
  const n = new Uint8Array([0, 1, 2, 3]);
  //const b64 = "BAnjUlDKJRB5GGE_kVbXlH7WB66cVS_mMGhbDpLwwb8VPYujtgxfrzBcPKlsQr0v2-ckYwy0gIfXUNUWzL451Hs";
  t.equal(B.from(n).toString("base64url"), "AAECAw");
  //t.equal(B.from(n).toString("base64"), null);
  t.equal(B.from("AAECAw", "base64url"), B.from(n));
  t.end()
});

/*
test('base64: ignore whitespace', function (t) {
  const text = '\n   YW9ldQ==  '
  const buf = new B(text, 'base64url')
  t.equal(buf.toString(), 'aoeu')
  t.end()
})

test('base64: strings without padding', function (t) {
  t.equal((new B('YW9ldQ', 'base64url').toString()), 'aoeu')
  t.end()
})

test('base64: newline in utf8 -- should not be an issue', function (t) {
  t.equal(
    new B('LS0tCnRpdGxlOiBUaHJlZSBkYXNoZXMgbWFya3MgdGhlIHNwb3QKdGFnczoK', 'base64url').toString('utf8'),
    '---\ntitle: Three dashes marks the spot\ntags:\n'
  )
  t.end()
})

test('base64: newline in base64 -- should get stripped', function (t) {
  t.equal(
    new B('LS0tCnRpdGxlOiBUaHJlZSBkYXNoZXMgbWFya3MgdGhlIHNwb3QKdGFnczoK\nICAtIHlhbWwKICAtIGZyb250LW1hdHRlcgogIC0gZGFzaGVzCmV4cGFuZWQt', 'base64url').toString('utf8'),
    '---\ntitle: Three dashes marks the spot\ntags:\n  - yaml\n  - front-matter\n  - dashes\nexpaned-'
  )
  t.end()
})

test('base64: tab characters in base64 - should get stripped', function (t) {
  t.equal(
    new B('LS0tCnRpdGxlOiBUaHJlZSBkYXNoZXMgbWFya3MgdGhlIHNwb3QKdGFnczoK\t\t\t\tICAtIHlhbWwKICAtIGZyb250LW1hdHRlcgogIC0gZGFzaGVzCmV4cGFuZWQt', 'base64url').toString('utf8'),
    '---\ntitle: Three dashes marks the spot\ntags:\n  - yaml\n  - front-matter\n  - dashes\nexpaned-'
  )
  t.end()
})

test('base64: invalid non-alphanumeric characters -- should be stripped', function (t) {
  t.equal(
    new B('!"#$%&\'()*,.:;<=>?@[\\]^`{|}~', 'base64url').toString('utf8'),
    ''
  )
  t.end()
})

test('base64: high byte', function (t) {
  const highByte = B.from([128])
  t.deepEqual(
    B.alloc(1, highByte.toString('base64url'), 'base64url'),
    highByte
  )
  t.end()
})
*/
