define(
			de[3129],
			he([1, 0, 3, 19, 933, 6, 68]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gQc = void 0);
				function d(r) {
					return (u, a) => {
						if (u.rootUri && !a.rootUri) return -1;
						if (!u.rootUri && a.rootUri) return 1;
						if (!u.rootUri && !a.rootUri) return 0;
						const h = (0, i.$hh)(r, u.rootUri),
							c = (0, i.$hh)(r, a.rootUri);
						return h && c
							? u.rootUri.fsPath.length - a.rootUri.fsPath.length
							: h
								? -1
								: c
									? 1
									: 0;
					};
				}
				let m = class extends t.$1c {
					constructor(u) {
						super(),
							(this.g = u),
							(this.c = new Set()),
							(this.f = this.D(new E.$re())),
							(this.onDidChangeQuickDiffProviders = this.f.event);
					}
					addQuickDiffProvider(u) {
						return (
							this.c.add(u),
							this.f.fire(),
							{
								dispose: () => {
									this.c.delete(u), this.f.fire();
								},
							}
						);
					}
					h(u) {
						return (
							!!u.originalResource &&
							typeof u.label == "string" &&
							typeof u.isSCM == "boolean"
						);
					}
					async getQuickDiffs(u, a = "", h = !1) {
						const c = Array.from(this.c)
							.filter(
								(g) =>
									!g.rootUri || this.g.extUri.isEqualOrParent(u, g.rootUri),
							)
							.sort(d(u));
						return (
							await Promise.all(
								c.map(async (g) => ({
									originalResource:
										(g.selector
											? (0, w.$3L)(g.selector, u, a, h, void 0, void 0)
											: 10) > 0
											? ((await g.getOriginalResource(u)) ?? void 0)
											: void 0,
									label: g.label,
									isSCM: g.isSCM,
								})),
							)
						).filter(this.h);
					}
				};
				(e.$gQc = m), (e.$gQc = m = Ne([j(0, C.$Vl)], m));
			},
		),
		