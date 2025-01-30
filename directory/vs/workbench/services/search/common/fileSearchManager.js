import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/path.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/errorMessage.js';
import '../../../../base/common/glob.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/stopwatch.js';
import './search.js';
import '../../../../base/common/ternarySearchTree.js';
import '../../../../base/common/lifecycle.js';
import './searchExtConversionTypes.js';
define(
			Pe[610],
			Ne([1, 0, 18, 23, 73, 51, 24, 57, 41, 90, 3, 197]),
			function (we, t, e, r, S, N, P, I, l, n, p, y) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Aid = void 0),
					(e = tt(e)),
					(N = tt(N)),
					(P = tt(P));
				class d {
					constructor(h, $, T) {
						(this.l = h),
							(this.o = $),
							(this.p = T),
							(this.f = !1),
							(this.g = 0),
							(this.h = !1),
							(this.a = h.filePattern),
							(this.b = h.includePattern && N.$Jk(h.includePattern)),
							(this.c = h.maxResults || void 0),
							(this.d = h.exists),
							(this.j = new Set()),
							(this.k = h.excludePattern && N.$Jk(h.excludePattern));
					}
					cancel() {
						(this.h = !0),
							this.j.forEach((h) => h.cancel()),
							(this.j = new Set());
					}
					search(h) {
						const $ = this.l.folderQueries || [];
						return new Promise((T, a) => {
							const u = (s) => {
								this.g++, h(s);
							};
							if (this.h) return T({ limitHit: this.f });
							this.l.extraFileResources &&
								this.l.extraFileResources.forEach((s) => {
									const f = s.toString(),
										o = e.$sc(f);
									(this.k && this.k(f, o)) ||
										this.w(u, { base: s, basename: o });
								}),
								this.q($, u).then(
									(s) => {
										T({ limitHit: this.f, stats: s || void 0 });
									},
									(s) => {
										a(new Error((0, S.$xj)(s)));
									},
								);
						});
					}
					async q(h, $) {
						const T = new r.$Ce(),
							a = h.map((w) => this.r(w)),
							u =
								this.o instanceof y.$uid
									? this.p?.tokenSource.token
									: this.p?.obj,
							s = {
								folderOptions: a,
								maxResults: this.l.maxResults ?? l.$o7,
								session: u,
							},
							f = n.$Si.forUris();
						h.forEach((w) => {
							const m = new l.$I7(this.l, w),
								E = !m.hasSiblingExcludeClauses();
							f.set(w.folder, {
								queryTester: m,
								noSiblingsClauses: E,
								folder: w.folder,
								tree: this.s(),
							});
						});
						let o;
						try {
							this.j.add(T), (o = I.$le.create());
							const w = await this.o.provideFileSearchResults(
									this.l.filePattern || "",
									s,
									T.token,
								),
								m = o.elapsed(),
								E = I.$le.create();
							return (this.h && !this.f) ||
								(w &&
									w.forEach((R) => {
										const C = f.findSubstr(R),
											O = e.$lc.relative(C.folder.path, R.path);
										if (C.noSiblingsClauses) {
											const A = e.$sc(R.path);
											this.w($, {
												base: C.folder,
												relativePath: O,
												basename: A,
											});
											return;
										}
										this.u(C.tree, C.folder, O, $);
									}),
								this.h && !this.f)
								? null
								: (f.forEach((R) => {
										this.v(R.tree, R.queryTester, $);
									}),
									{ providerTime: m, postProcessTime: E.elapsed() });
						} finally {
							T.dispose(), this.j.delete(T);
						}
					}
					r(h) {
						const $ = (0, l.$H7)(this.l.includePattern, h.includePattern);
						let T = h.excludePattern?.map((u) => ({
							folder: u.folder,
							patterns: (0, l.$H7)(this.l.excludePattern, u.pattern),
						}));
						T?.length ||
							(T = [
								{
									folder: void 0,
									patterns: (0, l.$H7)(this.l.excludePattern, void 0),
								},
							]);
						const a = (0, l.$L7)(T);
						return {
							folder: h.folder,
							excludes: a,
							includes: $,
							useIgnoreFiles: {
								local: !h.disregardIgnoreFiles,
								parent: !h.disregardParentIgnoreFiles,
								global: !h.disregardGlobalIgnoreFiles,
							},
							followSymlinks: !h.ignoreSymlinks,
						};
					}
					s() {
						const h = { rootEntries: [], pathToEntries: Object.create(null) };
						return (h.pathToEntries["."] = h.rootEntries), h;
					}
					u({ pathToEntries: h }, $, T, a) {
						if (T === this.a) {
							const s = e.$sc(this.a);
							this.w(a, { base: $, relativePath: this.a, basename: s });
						}
						function u(s) {
							const f = e.$sc(s),
								o = e.$rc(s);
							let w = h[o];
							w || ((w = h[o] = []), u(o)),
								w.push({ base: $, relativePath: s, basename: f });
						}
						u(T);
					}
					v({ rootEntries: h, pathToEntries: $ }, T, a) {
						const u = this,
							s = this.a;
						function f(o) {
							const w = (0, l.$K7)(() => o.map((m) => m.basename));
							for (let m = 0, E = o.length; m < E; m++) {
								const R = o[m],
									{ relativePath: C, basename: O } = R;
								if (T.matchesExcludesSync(C, O, s !== O ? w : void 0)) continue;
								const A = $[C];
								if (A) f(A);
								else {
									if (C === s) continue;
									u.w(a, R);
								}
								if (u.f) break;
							}
						}
						f(h);
					}
					w(h, $) {
						(!this.b ||
							($.relativePath && this.b($.relativePath, $.basename))) &&
							((this.d || (this.c && this.g >= this.c)) &&
								((this.f = !0), this.cancel()),
							this.f || h($));
					}
				}
				class k extends p.$1c {
					constructor() {
						super(),
							(this.obj = new Object()),
							(this.tokenSource = new r.$Ce());
					}
					dispose() {
						this.tokenSource.cancel(), super.dispose();
					}
				}
				class g {
					constructor() {
						this.b = new Map();
					}
					static {
						this.a = 512;
					}
					fileSearch(h, $, T, a) {
						const u = this.c(h.cacheKey),
							s = new d(h, $, u);
						let f = 0;
						const o = (w) => {
							(f += w.length), T(w.map((m) => this.d(m)));
						};
						return this.f(s, g.a, o, a).then((w) => ({
							limitHit: w.limitHit,
							stats: w.stats
								? {
										fromCache: !1,
										type: "fileSearchProvider",
										resultCount: f,
										detailStats: w.stats,
									}
								: void 0,
							messages: [],
						}));
					}
					clearCache(h) {
						this.b.get(h)?.dispose(), this.b.delete(h);
					}
					c(h) {
						if (h)
							return this.b.has(h) || this.b.set(h, new k()), this.b.get(h);
					}
					d(h) {
						return h.relativePath
							? { resource: P.$nh(h.base, h.relativePath) }
							: { resource: h.base };
					}
					f(h, $, T, a) {
						const u = a.onCancellationRequested(() => {
								h.cancel();
							}),
							s = (o) => {
								o && (f.push(o), $ > 0 && f.length >= $ && (T(f), (f = [])));
							};
						let f = [];
						return h.search(s).then(
							(o) => (f.length && T(f), u.dispose(), o),
							(o) => (f.length && T(f), u.dispose(), Promise.reject(o)),
						);
					}
				}
				t.$Aid = g;
			},
		),
		