define(de[3071], he([1, 0, 3, 4, 63]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$t2c = void 0);
			let E = class extends t.$1c {
				constructor(d, m) {
					super(), (this.a = d), (this.b = m);
				}
				async show() {
					const d = [];
					this.a.getColumnLabels().forEach((a, h) => {
						a && d.push({ label: a, index: h });
					});
					const m = await this.b.pick(d, {
						placeHolder: (0, i.localize)(7351, null),
					});
					if (!m) return;
					const r = await this.b.input({
							placeHolder: (0, i.localize)(7352, null),
							prompt: (0, i.localize)(7353, null, m.label),
							validateInput: (a) => this.c(a),
						}),
						u = r ? Number.parseInt(r) : void 0;
					u && this.a.resizeColumn(m.index, u);
				}
				async c(d) {
					const m = Number.parseInt(d);
					return d && !Number.isInteger(m)
						? (0, i.localize)(7354, null)
						: m < 0 || m > 100
							? (0, i.localize)(7355, null)
							: null;
				}
			};
			(e.$t2c = E), (e.$t2c = E = Ne([j(1, w.$DJ)], E));
		}),
		define(
			de[3072],
			he([1, 0, 3071, 1167, 5, 93, 11, 4]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$u2c = void 0);
				class m extends C.$3X {
					constructor() {
						super({
							id: "list.resizeColumn",
							title: {
								value: (0, d.localize)(7349, null),
								original: "Resize Column",
							},
							category: {
								value: (0, d.localize)(7350, null),
								original: "List",
							},
							precondition: E.$nMb,
							f1: !0,
						});
					}
					async run(u) {
						const a = u.get(E.$fMb),
							h = u.get(w.$Li),
							c = a.lastFocusedList;
						c instanceof i.$ipb && (await h.createInstance(t.$t2c, c).show());
					}
				}
				e.$u2c = m;
			},
		),
		define(
			de[1246],
			he([1, 0, 4, 14, 12, 8, 79]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$h2c = e.$g2c = e.$f2c = e.$e2c = void 0),
					(e.$d2c = m);
				let d;
				function m() {
					if (!d) {
						const r = {
							year: "numeric",
							month: "long",
							day: "numeric",
							hour: "numeric",
							minute: "numeric",
						};
						let u;
						try {
							u = new Intl.DateTimeFormat(w.$z, r);
						} catch {
							u = new Intl.DateTimeFormat(void 0, r);
						}
						d = { format: (a) => u.format(a) };
					}
					return d;
				}
				(e.$e2c = "localHistory:item"),
					(e.$f2c = E.$Kj.equals("timelineItem", e.$e2c)),
					(e.$g2c = (0, C.$$O)(
						"localHistory-icon",
						i.$ak.circleOutline,
						(0, t.localize)(7356, null),
					)),
					(e.$h2c = (0, C.$$O)(
						"localHistory-restore",
						i.$ak.check,
						(0, t.localize)(7357, null),
					));
			},
		),
		define(
			de[1737],
			he([1, 0, 6, 3, 9, 22, 19, 76]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$c2c = void 0);
				class m {
					static {
						this.SCHEMA = "vscode-local-history";
					}
					static toLocalHistoryFileSystem(u) {
						const a = {
							location: u.location.toString(!0),
							associatedResource: u.associatedResource.toString(!0),
						};
						return u.associatedResource.with({
							scheme: m.SCHEMA,
							query: JSON.stringify(a),
						});
					}
					static fromLocalHistoryFileSystem(u) {
						const a = JSON.parse(u.query);
						return {
							location: w.URI.parse(a.location),
							associatedResource: w.URI.parse(a.associatedResource),
						};
					}
					static {
						this.a = w.URI.from({ scheme: m.SCHEMA, path: "/empty" });
					}
					static {
						this.EMPTY = { location: m.a, associatedResource: m.a };
					}
					get capabilities() {
						return (
							E.FileSystemProviderCapabilities.FileReadWrite |
							E.FileSystemProviderCapabilities.Readonly
						);
					}
					constructor(u) {
						(this.b = u),
							(this.c = new Map()),
							(this.onDidChangeCapabilities = t.Event.None),
							(this.onDidChangeFile = t.Event.None);
					}
					async d(u) {
						const a = u.scheme;
						let h = this.c.get(a);
						if (!h) {
							const c = this.b.getProvider(a);
							c
								? (h = Promise.resolve(c))
								: (h = new Promise((n) => {
										const g = this.b.onDidChangeFileSystemProviderRegistrations(
											(p) => {
												p.added &&
													p.provider &&
													p.scheme === a &&
													(g.dispose(), n(p.provider));
											},
										);
									})),
								this.c.set(a, h);
						}
						return h;
					}
					async stat(u) {
						const a = m.fromLocalHistoryFileSystem(u).location;
						return (0, C.$gh)(m.a, a)
							? { type: E.FileType.File, ctime: 0, mtime: 0, size: 0 }
							: (await this.d(a)).stat(a);
					}
					async readFile(u) {
						const a = m.fromLocalHistoryFileSystem(u).location;
						if ((0, C.$gh)(m.a, a)) return d.$Te.fromString("").buffer;
						const h = await this.d(a);
						if ((0, E.$ol)(h)) return h.readFile(a);
						throw new Error("Unsupported");
					}
					async writeFile(u, a, h) {}
					async mkdir(u) {}
					async readdir(u) {
						return [];
					}
					async rename(u, a, h) {}
					async delete(u, a) {}
					watch(u, a) {
						return i.$1c.None;
					}
				}
				e.$c2c = m;
			},
		),
		