import assert from "assert";
import {
	testByteArray_setByteAt,
	testByteArray_getByteAt_0,
	testByteArray_getByteAt_1,
	testByteArray_getByteAt_2,
	testByteArray_getByteAt_3,
} from "../build/debug.js";

assert.strictEqual(testByteArray_setByteAt(), true, "setByteAt incorrect implementation");
assert.strictEqual(testByteArray_getByteAt_0(), true, "invalid byte at index 0");
assert.strictEqual(testByteArray_getByteAt_1(), true, "invalid byte at index 1");
assert.strictEqual(testByteArray_getByteAt_2(), true, "invalid byte at index 2");
assert.strictEqual(testByteArray_getByteAt_3(), true, "invalid byte at index 3");

console.log("ok");
