import {ByteArray} from "./bytearray";

export function fnv1a_32(arr: ByteArray): u32 {
	let prime: u32 = 0x01000193
	let h: u32 = 0x811c9dc5

	for (let i: i32 = 0; i < arr.getLength(); i++) {
		h ^= arr.getByteAt(i)		
		h *= prime
	}

	return h
}

