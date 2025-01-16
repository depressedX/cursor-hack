define(de[2731], he([1, 0, 76, 29, 4, 22]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$rr = C);
			async function C(u, a, h, c, n, g) {
				let p;
				try {
					await d(u, a, h, c, n, g);
				} catch (o) {
					p = o;
				} finally {
					p && n.errorTransformer && (p = n.errorTransformer(p)),
						typeof p < "u" && h.error(p),
						h.end();
				}
			}
			async function d(u, a, h, c, n, g) {
				m(g);
				const p = await u.open(a, { create: !1 });
				try {
					m(g);
					let o = 0,
						f = 0,
						b = n && typeof n.length == "number" ? n.length : void 0,
						s = t.$Te.alloc(
							Math.min(n.bufferSize, typeof b == "number" ? b : n.bufferSize),
						),
						l = n && typeof n.position == "number" ? n.position : 0,
						y = 0;
					do
						(f = await u.read(p, l, s.buffer, y, s.byteLength - y)),
							(l += f),
							(y += f),
							(o += f),
							typeof b == "number" && (b -= f),
							y === s.byteLength &&
								(await h.write(c(s)),
								(s = t.$Te.alloc(
									Math.min(
										n.bufferSize,
										typeof b == "number" ? b : n.bufferSize,
									),
								)),
								(y = 0));
					while (f > 0 && (typeof b != "number" || b > 0) && m(g) && r(o, n));
					if (y > 0) {
						let $ = y;
						typeof b == "number" && ($ = Math.min(y, b)),
							h.write(c(s.slice(0, $)));
					}
				} catch (o) {
					throw (0, E.$zl)(o);
				} finally {
					await u.close(p);
				}
			}
			function m(u) {
				if (u.isCancellationRequested) throw (0, i.$0)();
				return !0;
			}
			function r(u, a) {
				if (typeof a?.limits?.size == "number" && u > a.limits.size)
					throw (0, E.$yl)(
						(0, w.localize)(1910, null),
						E.FileSystemProviderErrorCode.FileTooLarge,
					);
				return !0;
			}
		}),
		define(
			de[938],
			he([1, 0, 215, 3, 54, 12, 9, 22]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xr = e.$wr = e.$vr = void 0),
					(e.$tr = m),
					(e.$ur = r),
					(e.$yr = c),
					(e.$zr = n),
					(e.$Ar = g),
					(e.$Br = p),
					(e.$Cr = f),
					(e.$Dr = b);
				function m(s) {
					return typeof s.correlationId == "number";
				}
				function r(s) {
					return s.recursive === !0;
				}
				class u extends i.$1c {
					static {
						this.a = 5;
					}
					constructor(l, y, $, v) {
						super(),
							(this.h = l),
							(this.j = y),
							(this.m = $),
							(this.n = v),
							(this.c = this.D(new i.$2c())),
							(this.f = void 0),
							(this.g = 0);
					}
					r() {
						const l = new i.$Zc();
						(this.c.value = l),
							(this.b = this.q(l)),
							this.b.setVerboseLogging(this.m),
							l.add(this.b.onDidChangeFile((y) => this.h(y))),
							l.add(this.b.onDidLogMessage((y) => this.j(y))),
							l.add(this.b.onDidError((y) => this.s(y.error, y.request)));
					}
					s(l, y) {
						this.t(l, y)
							? this.g < u.a && this.f
								? (this.w(`restarting watcher after unexpected error: ${l}`),
									this.u(this.f))
								: this.w(
										`gave up attempting to restart watcher after unexpected error: ${l}`,
									)
							: this.w(l);
					}
					t(l, y) {
						return !(
							!this.n.restartOnError ||
							y ||
							l.indexOf("No space left on device") !== -1 ||
							l.indexOf("EMFILE") !== -1
						);
					}
					u(l) {
						this.g++, this.r(), this.watch(l);
					}
					async watch(l) {
						(this.f = l), await this.b?.watch(l);
					}
					async setVerboseLogging(l) {
						(this.m = l), await this.b?.setVerboseLogging(l);
					}
					w(l) {
						this.j({
							type: "error",
							message: `[File Watcher (${this.n.type})] ${l}`,
						});
					}
					y(l) {
						this.j({
							type: "trace",
							message: `[File Watcher (${this.n.type})] ${l}`,
						});
					}
					dispose() {
						return (this.b = void 0), super.dispose();
					}
				}
				e.$vr = u;
				class a extends u {
					constructor(l, y, $) {
						super(l, y, $, { type: "node.js", restartOnError: !1 });
					}
				}
				e.$wr = a;
				class h extends u {
					constructor(l, y, $) {
						super(l, y, $, { type: "universal", restartOnError: !0 });
					}
				}
				e.$xr = h;
				function c(s) {
					return s.map((l) => ({
						type: l.type,
						resource: C.URI.revive(l.resource),
						cId: l.cId,
					}));
				}
				function n(s) {
					const l = new o();
					for (const y of s) l.processEvent(y);
					return l.coalesce();
				}
				function g(s, l) {
					return typeof l == "string" && !l.startsWith(t.$Fk) && !(0, w.$nc)(l)
						? { base: s, pattern: l }
						: l;
				}
				function p(s, l) {
					const y = [];
					for (const $ of l) y.push((0, t.$Jk)(g(s, $)));
					return y;
				}
				class o {
					constructor() {
						(this.a = new Set()), (this.b = new Map());
					}
					c(l) {
						return E.$n ? l.resource.fsPath : l.resource.fsPath.toLowerCase();
					}
					processEvent(l) {
						const y = this.b.get(this.c(l));
						let $ = !1;
						if (y) {
							const v = y.type,
								S = l.type;
							y.resource.fsPath !== l.resource.fsPath &&
							(l.type === d.FileChangeType.DELETED ||
								l.type === d.FileChangeType.ADDED)
								? ($ = !0)
								: v === d.FileChangeType.ADDED && S === d.FileChangeType.DELETED
									? (this.b.delete(this.c(l)), this.a.delete(y))
									: v === d.FileChangeType.DELETED &&
											S === d.FileChangeType.ADDED
										? (y.type = d.FileChangeType.UPDATED)
										: (v === d.FileChangeType.ADDED &&
												S === d.FileChangeType.UPDATED) ||
											(y.type = S);
						} else $ = !0;
						$ && (this.a.add(l), this.b.set(this.c(l), l));
					}
					coalesce() {
						const l = [],
							y = [];
						return Array.from(this.a)
							.filter(($) =>
								$.type !== d.FileChangeType.DELETED ? (l.push($), !1) : !0,
							)
							.sort(
								($, v) => $.resource.fsPath.length - v.resource.fsPath.length,
							)
							.filter(($) =>
								y.some((v) => (0, d.$Fl)($.resource.fsPath, v, !E.$n))
									? !1
									: (y.push($.resource.fsPath), !0),
							)
							.concat(l);
					}
				}
				function f(s, l) {
					if (typeof l == "number")
						switch (s.type) {
							case d.FileChangeType.ADDED:
								return (l & d.FileChangeFilter.ADDED) === 0;
							case d.FileChangeType.DELETED:
								return (l & d.FileChangeFilter.DELETED) === 0;
							case d.FileChangeType.UPDATED:
								return (l & d.FileChangeFilter.UPDATED) === 0;
						}
					return !1;
				}
				function b(s) {
					if (typeof s == "number") {
						const l = [];
						return (
							s & d.FileChangeFilter.ADDED && l.push("Added"),
							s & d.FileChangeFilter.DELETED && l.push("Deleted"),
							s & d.FileChangeFilter.UPDATED && l.push("Updated"),
							l.length === 0 ? "<all>" : `[${l.join(", ")}]`
						);
					}
					return "<none>";
				}
			},
		),
		define(
			de[1614],
			he([1, 0, 76, 163, 29, 6, 3, 408, 47, 22, 938]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ueb = e.$Teb = void 0),
					(e.$Teb = "localFilesystem");
				class a extends C.$1c {
					constructor(c, n) {
						super(),
							(this.a = c),
							(this.b = n),
							(this.onDidChangeCapabilities = E.Event.None),
							(this.f = this.D(new E.$re())),
							(this.onDidChangeFile = this.f.event),
							(this.g = this.D(new E.$re())),
							(this.onDidWatchError = this.g.event),
							(this.h = (0, m.$9g)()),
							this.j();
					}
					get capabilities() {
						return (
							this.c ||
								((this.c =
									r.FileSystemProviderCapabilities.FileReadWrite |
									r.FileSystemProviderCapabilities.FileOpenReadWriteClose |
									r.FileSystemProviderCapabilities.FileReadStream |
									r.FileSystemProviderCapabilities.FileFolderCopy |
									r.FileSystemProviderCapabilities.FileWriteUnlock |
									r.FileSystemProviderCapabilities.FileAtomicRead |
									r.FileSystemProviderCapabilities.FileAtomicWrite |
									r.FileSystemProviderCapabilities.FileAtomicDelete |
									r.FileSystemProviderCapabilities.FileClone),
								this.b.pathCaseSensitive &&
									(this.c |=
										r.FileSystemProviderCapabilities.PathCaseSensitive),
								this.b.trash &&
									(this.c |= r.FileSystemProviderCapabilities.Trash)),
							this.c
						);
					}
					stat(c) {
						return this.a.call("stat", [c]);
					}
					readdir(c) {
						return this.a.call("readdir", [c]);
					}
					async readFile(c, n) {
						const { buffer: g } = await this.a.call("readFile", [c, n]);
						return g;
					}
					readFileStream(c, n, g) {
						const p = (0, d.$He)(
								(f) => t.$Te.concat(f.map((b) => t.$Te.wrap(b))).buffer,
							),
							o = new C.$Zc();
						return (
							o.add(
								this.a.listen("readFileStream", [c, n])((f) => {
									if (f instanceof t.$Te) p.write(f.buffer);
									else {
										if (f === "end") p.end();
										else {
											let b;
											if (f instanceof Error) b = f;
											else {
												const s = f;
												b = (0, r.$yl)(
													s.message ?? (0, i.$xj)(s),
													s.code ?? r.FileSystemProviderErrorCode.Unknown,
												);
											}
											p.error(b), p.end();
										}
										o.dispose();
									}
								}),
							),
							o.add(
								g.onCancellationRequested(() => {
									p.error((0, w.$0)()), p.end(), o.dispose();
								}),
							),
							p
						);
					}
					writeFile(c, n, g) {
						return this.a.call("writeFile", [c, t.$Te.wrap(n), g]);
					}
					open(c, n) {
						return this.a.call("open", [c, n]);
					}
					close(c) {
						return this.a.call("close", [c]);
					}
					async read(c, n, g, p, o) {
						const [f, b] = await this.a.call("read", [c, n, o]);
						return g.set(f.buffer.slice(0, b), p), b;
					}
					write(c, n, g, p, o) {
						return this.a.call("write", [c, n, t.$Te.wrap(g), p, o]);
					}
					mkdir(c) {
						return this.a.call("mkdir", [c]);
					}
					delete(c, n) {
						return this.a.call("delete", [c, n]);
					}
					rename(c, n, g) {
						return this.a.call("rename", [c, n, g]);
					}
					copy(c, n, g) {
						return this.a.call("copy", [c, n, g]);
					}
					cloneFile(c, n) {
						return this.a.call("cloneFile", [c, n]);
					}
					j() {
						this.D(
							this.a.listen("fileChange", [this.h])((c) => {
								if (Array.isArray(c)) {
									const n = c;
									this.f.fire((0, u.$yr)(n));
								} else {
									const n = c;
									this.g.fire(n);
								}
							}),
						);
					}
					watch(c, n) {
						const g = (0, m.$9g)();
						return (
							this.a.call("watch", [this.h, g, c, n]),
							(0, C.$Yc)(() => this.a.call("unwatch", [this.h, g]))
						);
					}
				}
				e.$Ueb = a;
			},
		),
		define(
			de[72],
			he([1, 0, 5, 3, 10, 7, 27]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Wyb = e.$Vyb = e.$Uyb = void 0),
					(e.$Uyb = (0, t.$Mi)("hoverService"));
				let d = class extends i.$1c {
					get delay() {
						return this.y() ? 0 : this.m;
					}
					constructor(r, u, a = {}, h, c) {
						super(),
							(this.placement = r),
							(this.q = u),
							(this.t = a),
							(this.u = h),
							(this.w = c),
							(this.c = 0),
							(this.f = 200),
							(this.n = this.D(new i.$Zc())),
							(this.m = this.u.getValue("workbench.hover.delay")),
							this.D(
								this.u.onDidChangeConfiguration((n) => {
									n.affectsConfiguration("workbench.hover.delay") &&
										(this.m = this.u.getValue("workbench.hover.delay"));
								}),
							);
					}
					showHover(r, u) {
						const a = typeof this.t == "function" ? this.t(r, u) : this.t;
						this.n.clear();
						const h = (0, E.$Ygb)(r.target)
							? [r.target]
							: r.target.targetElements;
						for (const n of h)
							this.n.add(
								(0, E.$$fb)(n, "keydown", (g) => {
									g.equals(C.KeyCode.Escape) && this.w.hideHover();
								}),
							);
						const c = (0, E.$Ygb)(r.content) ? void 0 : r.content.toString();
						return this.w.showHover(
							{
								...r,
								...a,
								persistence: { hideOnKeyDown: !0, ...a.persistence },
								id: c,
								appearance: {
									...r.appearance,
									compact: !0,
									skipFadeInAnimation: this.y(),
									...a.appearance,
								},
							},
							u,
						);
					}
					y() {
						return this.q && Date.now() - this.c < this.f;
					}
					setInstantHoverTimeLimit(r) {
						if (!this.q) throw new Error("Instant hover is not enabled");
						this.f = r;
					}
					onDidHideHover() {
						this.n.clear(), this.q && (this.c = Date.now());
					}
				};
				(e.$Vyb = d),
					(e.$Vyb = d = Ne([j(3, w.$gj), j(4, e.$Uyb)], d)),
					(e.$Wyb = {
						showHover: function () {
							throw new Error("Native hover function not implemented.");
						},
						delay: 0,
						showNativeHover: !0,
					});
			},
		),
		