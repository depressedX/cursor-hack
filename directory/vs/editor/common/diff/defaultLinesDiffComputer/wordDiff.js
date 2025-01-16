define(de[2555], he([1, 0, 587]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$rxb = E);
			function i(C) {
				let d = [],
					m = "";
				for (let r = 0; r < C.length; r++)
					(m += C[r]),
						C[r] ===
							`
` && (d.push(m), (m = ""));
				return m !== "" && d.push(m), d;
			}
			function w(C) {
				const d = [];
				let m = "individual",
					r = "";
				for (let u = 0; u < C.length; u++) {
					const a = C[u];
					if (a.match(/[\p{L}\p{N}_]/u))
						if (m === "word" || m === "whitespace") {
							(r += a), (m = "word");
							continue;
						} else r !== "" && d.push(r), (r = a), (m = "word");
					else if (
						a === "\r" ||
						a ===
							`
`
					)
						if (
							m === "newline" &&
							r === "\r" &&
							a ===
								`
`
						) {
							r += a;
							continue;
						} else r !== "" && d.push(r), (r = a), (m = "newline");
					else if (a === " " || a === "	")
						if (m === "whitespace") {
							r += a;
							continue;
						} else r !== "" && d.push(r), (r = a), (m = "whitespace");
					else
						(r !== "" || m === "whitespace") && d.push(r),
							(r = a),
							(m = "individual");
				}
				return r !== "" && d.push(r), d;
			}
			function E(C, d, m) {
				let r = w(C),
					u = w(d);
				if (
					(u.length * r.length > 1e7 && ((r = i(C)), (u = i(d))),
					u.length === 0 && r.length === 0)
				)
					return { identical: !0, quitEarly: !1, changes: [] };
				if (u.length === 0)
					return {
						identical: !1,
						quitEarly: !1,
						changes: [[r.join(""), !1, !0]],
					};
				if (r.length === 0)
					return {
						identical: !1,
						quitEarly: !1,
						changes: [[u.join(""), !0, !1]],
					};
				const h = t.$qxb.getDefault().computeDiff(r, u, m),
					c = h.changes.length > 0 ? !1 : C === d;
				function n(g) {
					let p = [],
						o = 1;
					for (const f of g)
						f.original.startLineNumber > o &&
							p.push([
								r.slice(o - 1, f.original.startLineNumber - 1).join(""),
								!1,
								!1,
							]),
							(o = f.original.endLineNumberExclusive),
							f.modified.startLineNumber !==
								f.modified.endLineNumberExclusive &&
								p.push([
									u
										.slice(
											f.modified.startLineNumber - 1,
											f.modified.endLineNumberExclusive - 1,
										)
										.join(""),
									!0,
									!1,
								]),
							f.original.startLineNumber !==
								f.original.endLineNumberExclusive &&
								p.push([
									r
										.slice(
											f.original.startLineNumber - 1,
											f.original.endLineNumberExclusive - 1,
										)
										.join(""),
									!1,
									!0,
								]);
					return o <= r.length && p.push([r.slice(o - 1).join(""), !1, !1]), p;
				}
				return { identical: c, quitEarly: h.hitTimeout, changes: n(h.changes) };
			}
		}),
		