define(de[1559], he([1, 0, 344]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Rpb = i),
				(e.$Spb = w);
			function i() {
				return t.env && !!t.env.VSCODE_DEV;
			}
			function w(d) {
				if (i()) {
					const m = E();
					return (
						m.add(d),
						{
							dispose() {
								m.delete(d);
							},
						}
					);
				} else return { dispose() {} };
			}
			function E() {
				C || (C = new Set());
				const d = globalThis;
				return (
					d.$hotReload_applyNewExports ||
						(d.$hotReload_applyNewExports = (m) => {
							const r = { config: { mode: void 0 }, ...m },
								u = [];
							for (const a of C) {
								const h = a(r);
								h && u.push(h);
							}
							if (u.length > 0)
								return (a) => {
									let h = !1;
									for (const c of u) c(a) && (h = !0);
									return h;
								};
						}),
					C
				);
			}
			let C;
			i() &&
				w(({ oldExports: d, newSrc: m, config: r }) => {
					if (r.mode === "patch-prototype")
						return (u) => {
							for (const a in u) {
								const h = u[a];
								if (
									(console.log(
										`[hot-reload] Patching prototype methods of '${a}'`,
										{ exportedItem: h },
									),
									typeof h == "function" && h.prototype)
								) {
									const c = d[a];
									if (c) {
										for (const n of Object.getOwnPropertyNames(h.prototype)) {
											const g = Object.getOwnPropertyDescriptor(h.prototype, n),
												p = Object.getOwnPropertyDescriptor(c.prototype, n);
											g?.value?.toString() !== p?.value?.toString() &&
												console.log(
													`[hot-reload] Patching prototype method '${a}.${n}'`,
												),
												Object.defineProperty(c.prototype, n, g);
										}
										u[a] = c;
									}
								}
							}
							return !0;
						};
				});
		}),
		