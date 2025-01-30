import '../../../../../require.js';
import '../../../../../exports.js';
define(de[1229], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Ped = t),
				(e.$Qed = i),
				(e.$Red = w);
			function t(E) {
				let C = 0;
				for (let d = E.length - 1; d >= 0 && E[d] === ""; d--) C++;
				return C;
			}
			function i(E, C, d, m) {
				d = d.replace(/\r?\n/g, m);
				const r = E.getValueInRange({
						startLineNumber: C.startLineNumber,
						startColumn: C.startColumn,
						endLineNumber: C.endLineNumberInclusive,
						endColumn: C.endColumn,
					}),
					u = t(r.split(m));
				if (
					((d = d.replace(/(\r?\n)+$/, m.repeat(u + 1))),
					E.uri.scheme.startsWith("vscode-notebook-cell"))
				) {
					const p = E.getValue().split(m).length ?? 0;
					C.endLineNumberInclusive === p &&
						d.endsWith(m) &&
						(d = d.slice(0, -m.length));
				}
				const a = r.split(m);
				let h = d.split(m);
				t(h) === t(a) + 1 && (h = h.slice(0, -1));
				let n = 0;
				for (let p = 0; p < Math.min(a.length, h.length); p++) {
					const o = a[a.length - p - 1],
						f = h[h.length - p - 1];
					if (o !== f) break;
					n++;
				}
				return { isNoOp: n === a.length && n === h.length };
			}
			function w(E, C, d, m, r) {
				const u = E.getValue().split(m),
					a = [d],
					h = d.split(m),
					c = u.slice(C.startLineNumber - 1, C.endLineNumberInclusive);
				let n = 0;
				for (; n < Math.min(h.length, c.length) && c[n] === h[n]; n++);
				if (c[n] !== "" && h[n] === "") {
					const p = h.filter((o, f) => n !== f).join(m);
					a.push(p);
				}
				const g = (p) => {
					let o =
						u
							.slice(0, C.startLineNumber - 1)
							.map((f) => f + m)
							.join("") +
						p +
						m +
						u.slice(C.endLineNumberInclusive).join(m);
					return (
						E.uri.scheme === "vscode-notebook-cell" &&
							(o =
								(r?.prevCellValues ?? []).map((f) => f + m).join("") +
								o +
								(r?.afterCellValues ?? []).map((f) => m + f).join("")),
						o
					);
				};
				return a.map(g);
			}
		}),
		