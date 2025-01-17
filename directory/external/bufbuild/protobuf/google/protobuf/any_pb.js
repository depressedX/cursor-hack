import '../../../../../require.js';
import '../../../../../exports.js';
import '../../message.js';
import '../../proto3.js';
define(de[875], he([1, 0, 339, 406]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.Any = void 0);
			class w extends t.Message {
				constructor(C) {
					super(),
						(this.typeUrl = ""),
						(this.value = new Uint8Array(0)),
						i.proto3.util.initPartial(C, this);
				}
				toJson(C) {
					if (this.typeUrl === "") return {};
					const d = this.typeUrlToName(this.typeUrl),
						m = C?.typeRegistry?.findMessage(d);
					if (!m)
						throw new Error(
							`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`,
						);
					let u = m.fromBinary(this.value).toJson(C);
					return (
						(d.startsWith("google.protobuf.") ||
							u === null ||
							Array.isArray(u) ||
							typeof u != "object") &&
							(u = { value: u }),
						(u["@type"] = this.typeUrl),
						u
					);
				}
				fromJson(C, d) {
					if (C === null || Array.isArray(C) || typeof C != "object")
						throw new Error(
							`cannot decode message google.protobuf.Any from JSON: expected object but got ${C === null ? "null" : Array.isArray(C) ? "array" : typeof C}`,
						);
					if (Object.keys(C).length == 0) return this;
					const m = C["@type"];
					if (typeof m != "string" || m == "")
						throw new Error(
							'cannot decode message google.protobuf.Any from JSON: "@type" is empty',
						);
					const r = this.typeUrlToName(m),
						u = d?.typeRegistry?.findMessage(r);
					if (!u)
						throw new Error(
							`cannot decode message google.protobuf.Any from JSON: ${m} is not in the type registry`,
						);
					let a;
					if (
						r.startsWith("google.protobuf.") &&
						Object.prototype.hasOwnProperty.call(C, "value")
					)
						a = u.fromJson(C.value, d);
					else {
						const h = Object.assign({}, C);
						delete h["@type"], (a = u.fromJson(h, d));
					}
					return this.packFrom(a), this;
				}
				packFrom(C) {
					(this.value = C.toBinary()),
						(this.typeUrl = this.typeNameToUrl(C.getType().typeName));
				}
				unpackTo(C) {
					return this.is(C.getType()) ? (C.fromBinary(this.value), !0) : !1;
				}
				unpack(C) {
					if (this.typeUrl === "") return;
					const d = C.findMessage(this.typeUrlToName(this.typeUrl));
					if (d) return d.fromBinary(this.value);
				}
				is(C) {
					if (this.typeUrl === "") return !1;
					const d = this.typeUrlToName(this.typeUrl);
					let m = "";
					return typeof C == "string" ? (m = C) : (m = C.typeName), d === m;
				}
				typeNameToUrl(C) {
					return `type.googleapis.com/${C}`;
				}
				typeUrlToName(C) {
					if (!C.length) throw new Error(`invalid type url: ${C}`);
					const d = C.lastIndexOf("/"),
						m = d >= 0 ? C.substring(d + 1) : C;
					if (!m.length) throw new Error(`invalid type url: ${C}`);
					return m;
				}
				static {
					this.runtime = i.proto3;
				}
				static {
					this.typeName = "google.protobuf.Any";
				}
				static {
					this.fields = i.proto3.util.newFieldList(() => [
						{ no: 1, name: "type_url", kind: "scalar", T: 9 },
						{ no: 2, name: "value", kind: "scalar", T: 12 },
					]);
				}
				static pack(C) {
					const d = new w();
					return d.packFrom(C), d;
				}
				static fromBinary(C, d) {
					return new w().fromBinary(C, d);
				}
				static fromJson(C, d) {
					return new w().fromJson(C, d);
				}
				static fromJsonString(C, d) {
					return new w().fromJsonString(C, d);
				}
				static equals(C, d) {
					return i.proto3.util.equals(w, C, d);
				}
			}
			e.Any = w;
		}),
		