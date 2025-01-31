import '../../../../require.js';
import '../../../../exports.js';
import '../model.js';
define(de[2765], he([1, 0, 64]), function (ce /*require*/,
 e /*exports*/,
 t /*model*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$pwb = void 0);
			const i = t.GlyphMarginLane.Right;
			class w {
				constructor(C) {
					(this.b = 0),
						(this.c = 1),
						(this.a = new Uint8Array(Math.ceil(((C + 1) * i) / 8)));
				}
				reset(C) {
					const d = Math.ceil(((C + 1) * i) / 8);
					this.a.length < d ? (this.a = new Uint8Array(d)) : this.a.fill(0),
						(this.c = 1);
				}
				get requiredLanes() {
					return this.c;
				}
				push(C, d, m) {
					m && (this.b |= 1 << (C - 1));
					for (let r = d.startLineNumber; r <= d.endLineNumber; r++) {
						const u = i * r + (C - 1);
						(this.a[u >>> 3] |= 1 << (u % 8)),
							(this.c = Math.max(this.c, this.d(r)));
					}
				}
				getLanesAtLine(C) {
					const d = [];
					let m = i * C;
					for (let r = 0; r < i; r++)
						(this.b & (1 << r) || this.a[m >>> 3] & (1 << (m % 8))) &&
							d.push(r + 1),
							m++;
					return d.length ? d : [t.GlyphMarginLane.Center];
				}
				d(C) {
					let d = i * C,
						m = 0;
					for (let r = 0; r < i; r++)
						(this.b & (1 << r) || this.a[d >>> 3] & (1 << (d % 8))) && m++, d++;
					return m;
				}
			}
			e.$pwb = w;
		})
