import { Buffer as B } from "../Buffer.js";
import { test } from "https://code4fukui.github.io/tape-es/tape.js";

test('new buffer from array', function (t) {
  t.equal(
    new B([1, 2, 3]).toString(),
    '\u0001\u0002\u0003'
  )
  t.end()
})

test('new buffer from array w/ negatives', function (t) {
  t.equal(
    new B([-1, -2, -3]).toString('hex'),
    'fffefd'
  )
  t.end()
})

test('new buffer from array with mixed signed input', function (t) {
  t.equal(
    new B([-255, 255, -128, 128, 512, -512, 511, -511]).toString('hex'),
    '01ff80800000ff01'
  )
  t.end()
})

test('new buffer from string', function (t) {
  t.equal(
    new B('hey', 'utf8').toString(),
    'hey'
  )
  t.end()
})

test('new buffer from buffer', function (t) {
  const b1 = new B('asdf')
  const b2 = new B(b1)
  t.equal(b1.toString('hex'), b2.toString('hex'))
  t.end()
})

test('new buffer from ArrayBuffer', function (t) {
  if (typeof ArrayBuffer !== 'undefined') {
    const arraybuffer = new Uint8Array([0, 1, 2, 3]).buffer
    const b = new B(arraybuffer)
    t.equal(b.length, 4)
    t.equal(b[0], 0)
    t.equal(b[1], 1)
    t.equal(b[2], 2)
    t.equal(b[3], 3)
    t.equal(b[4], undefined)
  }
  t.end()
})

test('new buffer from ArrayBuffer, shares memory', function (t) {
  const u = new Uint8Array([0, 1, 2, 3])
  const arraybuffer = u.buffer
  const b = new B(arraybuffer)
  t.equal(b.length, 4)
  t.equal(b[0], 0)
  t.equal(b[1], 1)
  t.equal(b[2], 2)
  t.equal(b[3], 3)
  t.equal(b[4], undefined)

  // changing the Uint8Array (and thus the ArrayBuffer), changes the Buffer
  u[0] = 10
  t.equal(b[0], 10)
  u[1] = 11
  t.equal(b[1], 11)
  u[2] = 12
  t.equal(b[2], 12)
  u[3] = 13
  t.equal(b[3], 13)
  t.end()
})

test('new buffer from Uint8Array', function (t) {
  if (typeof Uint8Array !== 'undefined') {
    const b1 = new Uint8Array([0, 1, 2, 3])
    const b2 = new B(b1)
    t.equal(b1.length, b2.length)
    t.equal(b1[0], 0)
    t.equal(b1[1], 1)
    t.equal(b1[2], 2)
    t.equal(b1[3], 3)
    t.equal(b1[4], undefined)
  }
  t.end()
})

test('new buffer from Uint16Array', function (t) {
  if (typeof Uint16Array !== 'undefined') {
    const b1 = new Uint16Array([0, 1, 2, 3])
    const b2 = new B(b1)
    t.equal(b1.length, b2.length)
    t.equal(b1[0], 0)
    t.equal(b1[1], 1)
    t.equal(b1[2], 2)
    t.equal(b1[3], 3)
    t.equal(b1[4], undefined)
  }
  t.end()
})

test('new buffer from Uint32Array', function (t) {
  if (typeof Uint32Array !== 'undefined') {
    const b1 = new Uint32Array([0, 1, 2, 3])
    const b2 = new B(b1)
    t.equal(b1.length, b2.length)
    t.equal(b1[0], 0)
    t.equal(b1[1], 1)
    t.equal(b1[2], 2)
    t.equal(b1[3], 3)
    t.equal(b1[4], undefined)
  }
  t.end()
})

test('new buffer from Int16Array', function (t) {
  if (typeof Int16Array !== 'undefined') {
    const b1 = new Int16Array([0, 1, 2, 3])
    const b2 = new B(b1)
    t.equal(b1.length, b2.length)
    t.equal(b1[0], 0)
    t.equal(b1[1], 1)
    t.equal(b1[2], 2)
    t.equal(b1[3], 3)
    t.equal(b1[4], undefined)
  }
  t.end()
})

test('new buffer from Int32Array', function (t) {
  if (typeof Int32Array !== 'undefined') {
    const b1 = new Int32Array([0, 1, 2, 3])
    const b2 = new B(b1)
    t.equal(b1.length, b2.length)
    t.equal(b1[0], 0)
    t.equal(b1[1], 1)
    t.equal(b1[2], 2)
    t.equal(b1[3], 3)
    t.equal(b1[4], undefined)
  }
  t.end()
})

test('new buffer from Float32Array', function (t) {
  if (typeof Float32Array !== 'undefined') {
    const b1 = new Float32Array([0, 1, 2, 3])
    const b2 = new B(b1)
    t.equal(b1.length, b2.length)
    t.equal(b1[0], 0)
    t.equal(b1[1], 1)
    t.equal(b1[2], 2)
    t.equal(b1[3], 3)
    t.equal(b1[4], undefined)
  }
  t.end()
})

test('new buffer from Float64Array', function (t) {
  if (typeof Float64Array !== 'undefined') {
    const b1 = new Float64Array([0, 1, 2, 3])
    const b2 = new B(b1)
    t.equal(b1.length, b2.length)
    t.equal(b1[0], 0)
    t.equal(b1[1], 1)
    t.equal(b1[2], 2)
    t.equal(b1[3], 3)
    t.equal(b1[4], undefined)
  }
  t.end()
})

test('new buffer from buffer.toJSON() output', function (t) {
  if (typeof JSON === 'undefined') {
    // ie6, ie7 lack support
    t.end()
    return
  }
  const buf = new B('test')
  const json = JSON.stringify(buf)
  const obj = JSON.parse(json)
  const copy = new B(obj)
  t.ok(buf.equals(copy))
  t.end()
})
