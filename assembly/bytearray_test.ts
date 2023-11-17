import {ByteArray} from "./bytearray";

export function testByteArray_setByteAt(): bool {
	const ptr = heap.alloc(16)
	const ba = new ByteArray(ptr, 16)
	ba.setByteAt(0, 0x2)
	ba.setByteAt(1, 0x3)
	ba.setByteAt(2, 0x4)
	ba.setByteAt(3, 0x5)
	let result: u32 = load<u32>(ptr)
	heap.free(ptr)
	return result == 0x05_04_03_02
}


export function testByteArray_getByteAt_0(): bool {
	const ptr = heap.alloc(16)
	const ba = new ByteArray(ptr, 16)
	store<u32>(ptr, 0x01)
	let result = ba.getByteAt(0) == 0x1;
	heap.free(ptr)
	return result
}

export function testByteArray_getByteAt_1(): bool {
	const ptr = heap.alloc(16)
	const ba = new ByteArray(ptr, 16)
	store<u32>(ptr, 0xAB_00)
	let result = ba.getByteAt(1) == 0xAB;
	heap.free(ptr)
	return result
}

export function testByteArray_getByteAt_2(): bool {
	const ptr = heap.alloc(16)
	const ba = new ByteArray(ptr, 16)
	store<u32>(ptr, 0xCD_00_00)
	let result = ba.getByteAt(2) == 0xCD;
	heap.free(ptr)
	return result
}

export function testByteArray_getByteAt_3(): bool {
	const ptr = heap.alloc(16)
	const ba = new ByteArray(ptr, 16)
	store<u32>(ptr, 0xEF_00_00_00)
	let result = ba.getByteAt(3) == 0xEF;
	heap.free(ptr)
	return result
}

