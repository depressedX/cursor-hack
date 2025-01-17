import '../../../require.js';
import '../../../exports.js';
import './code.js';
import './protocol-connect/code-string.js';
define(de[213], he([1, 0, 202, 1387]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ConnectError = void 0);
			class w extends Error {
				constructor(d, m = t.Code.Unknown, r, u, a) {
					super(E(d, m)),
						(this.name = "ConnectError"),
						Object.setPrototypeOf(this, new.target.prototype),
						(this.rawMessage = d),
						(this.code = m),
						(this.metadata = new Headers(r ?? {})),
						(this.details = u ?? []),
						(this.cause = a);
				}
				static from(d, m = t.Code.Unknown) {
					return d instanceof w
						? d
						: d instanceof Error
							? d.name == "AbortError"
								? new w(d.message, t.Code.Canceled)
								: new w(d.message, m, void 0, void 0, d)
							: new w(String(d), m, void 0, void 0, d);
				}
				static [Symbol.hasInstance](d) {
					return d instanceof Error
						? Object.getPrototypeOf(d) === w.prototype
							? !0
							: d.name === "ConnectError" &&
								"code" in d &&
								typeof d.code == "number" &&
								"metadata" in d &&
								"details" in d &&
								Array.isArray(d.details) &&
								"rawMessage" in d &&
								typeof d.rawMessage == "string" &&
								"cause" in d
						: !1;
				}
				findDetails(d) {
					const m =
							"typeName" in d
								? { findMessage: (u) => (u === d.typeName ? d : void 0) }
								: d,
						r = [];
					for (const u of this.details) {
						if ("getType" in u) {
							m.findMessage(u.getType().typeName) && r.push(u);
							continue;
						}
						const a = m.findMessage(u.type);
						if (a)
							try {
								r.push(a.fromBinary(u.value));
							} catch {}
					}
					return r;
				}
			}
			e.ConnectError = w;
			function E(C, d) {
				return C.length
					? `[${(0, i.codeToString)(d)}] ${C}`
					: `[${(0, i.codeToString)(d)}]`;
			}
		}),
		