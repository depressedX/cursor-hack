import '../../../require.js';
import '../../../exports.js';
define(de[339], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.Message = void 0);
			class t {
				equals(w) {
					return this.getType().runtime.util.equals(this.getType(), this, w);
				}
				clone() {
					return this.getType().runtime.util.clone(this);
				}
				fromBinary(w, E) {
					const C = this.getType(),
						d = C.runtime.bin,
						m = d.makeReadOptions(E);
					return d.readMessage(this, m.readerFactory(w), w.byteLength, m), this;
				}
				fromJson(w, E) {
					const C = this.getType(),
						d = C.runtime.json,
						m = d.makeReadOptions(E);
					return d.readMessage(C, w, m, this), this;
				}
				fromJsonString(w, E) {
					let C;
					try {
						C = JSON.parse(w);
					} catch (d) {
						throw new Error(
							`cannot decode ${this.getType().typeName} from JSON: ${d instanceof Error ? d.message : String(d)}`,
						);
					}
					return this.fromJson(C, E);
				}
				toBinary(w) {
					const E = this.getType(),
						C = E.runtime.bin,
						d = C.makeWriteOptions(w),
						m = d.writerFactory();
					return C.writeMessage(this, m, d), m.finish();
				}
				toJson(w) {
					const E = this.getType(),
						C = E.runtime.json,
						d = C.makeWriteOptions(w);
					return C.writeMessage(this, d);
				}
				toJsonString(w) {
					const E = this.toJson(w);
					return JSON.stringify(E, null, w?.prettySpaces ?? 0);
				}
				toJSON() {
					return this.toJson({ emitDefaultValues: !0 });
				}
				getType() {
					return Object.getPrototypeOf(this).constructor;
				}
			}
			e.Message = t;
		}),
		