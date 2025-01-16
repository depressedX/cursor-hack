define(de[1403], he([1, 0, 339, 406]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.FieldMask = void 0);
			class w extends t.Message {
				constructor(C) {
					super(), (this.paths = []), i.proto3.util.initPartial(C, this);
				}
				toJson(C) {
					function d(m) {
						let r = !1;
						const u = [];
						for (let a = 0; a < m.length; a++) {
							let h = m.charAt(a);
							switch (h) {
								case "_":
									r = !0;
									break;
								case "0":
								case "1":
								case "2":
								case "3":
								case "4":
								case "5":
								case "6":
								case "7":
								case "8":
								case "9":
									u.push(h), (r = !1);
									break;
								default:
									r && ((r = !1), (h = h.toUpperCase())), u.push(h);
									break;
							}
						}
						return u.join("");
					}
					return this.paths
						.map((m) => {
							if (m.match(/_[0-9]?_/g) || m.match(/[A-Z]/g))
								throw new Error(
									'cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' +
										m +
										'" is irreversible',
								);
							return d(m);
						})
						.join(",");
				}
				fromJson(C, d) {
					if (typeof C != "string")
						throw new Error(
							"cannot decode google.protobuf.FieldMask from JSON: " +
								i.proto3.json.debug(C),
						);
					if (C === "") return this;
					function m(r) {
						if (r.includes("_"))
							throw new Error(
								"cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase",
							);
						const u = r.replace(/[A-Z]/g, (a) => "_" + a.toLowerCase());
						return u[0] === "_" ? u.substring(1) : u;
					}
					return (this.paths = C.split(",").map(m)), this;
				}
				static {
					this.runtime = i.proto3;
				}
				static {
					this.typeName = "google.protobuf.FieldMask";
				}
				static {
					this.fields = i.proto3.util.newFieldList(() => [
						{ no: 1, name: "paths", kind: "scalar", T: 9, repeated: !0 },
					]);
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
			e.FieldMask = w;
		}),
		