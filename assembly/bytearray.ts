export class ByteArray {
	p: usize;
	l: i32;

	constructor(p: usize, l: i32) {
		this.p = p;
		this.l = l;
	}

	getLength() : i32 {
		return l
	}

	setByteAt(offset: i32, val: u32): void  {
		let wordOffset: usize = offset >> 2;
		let memOffset: usize = this.p + wordOffset;
		let bitOffset: u8 = <u8>(offset & 3) * 8;
		let	value: u32 = load<u32>(memOffset);
		let mask: u32 = 0xFF;
		mask <<= bitOffset;
		mask ^= 0xFF_FF_FF_FF;

		// Clear byte at offset
		value &= mask;

		val <<= bitOffset;
		value |= val;
		store<u32>(memOffset, value)
	}
	
	getByteAt(offset: i32): u8 {
		let memOffset = this.p + (offset >> 2);
		let byteOffset = (offset & 3) * 8;
		let	value = load<u32>(memOffset);
		return <u8>((value >> byteOffset) & 0xFF);
	}
}

