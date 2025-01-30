import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/async.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/fuzzyScorer.js';
import '../../../../base/common/marshalling.js';
import '../../../../base/common/path.js';
import '../../../../base/common/stopwatch.js';
import '../../../../base/common/uri.js';
import '../../../../platform/files/common/files.js';
import '../common/search.js';
import './fileSearch.js';
import './textSearchAdapter.js';
define(
			Pe[620],
			Ne([1, 0, 20, 9, 12, 4, 270, 50, 18, 57, 2, 32, 41, 615, 619]),
			function (we, t, e, r, S, N, P, I, l, n, p, y, d, k, g) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Rjd = void 0),
					(e = tt(e));
				class c {
					static {
						this.a = 512;
					}
					constructor(s = "searchProcess", f) {
						(this.d = s), (this.f = f), (this.b = Object.create(null));
					}
					fileSearch(s) {
						let f;
						const o = T(s),
							w = new N.$re({
								onDidAddFirstListener: () => {
									(f = (0, r.$zh)(async (m) => {
										const E = await this.f?.();
										return this.doFileSearchWithEngine(
											k.$Hjd,
											o,
											(R) => w.fire(R),
											m,
											c.a,
											E,
										);
									})),
										f.then(
											(m) => w.fire(m),
											(m) =>
												w.fire({
													type: "error",
													error: { message: m.message, stack: m.stack },
												}),
										);
								},
								onDidRemoveLastListener: () => {
									f.cancel();
								},
							});
						return w.event;
					}
					textSearch(s) {
						let f;
						const o = T(s),
							w = new N.$re({
								onDidAddFirstListener: () => {
									(f = (0, r.$zh)((m) => this.g(o, (E) => w.fire(E), m))),
										f.then(
											(m) => w.fire(m),
											(m) =>
												w.fire({
													type: "error",
													error: { message: m.message, stack: m.stack },
												}),
										);
								},
								onDidRemoveLastListener: () => {
									f.cancel();
								},
							});
						return w.event;
					}
					async g(s, f, o) {
						s.maxFileSize = this.h().maxFileSize;
						const w = await this.f?.();
						return new g.$Qjd(s, w).search(o, f, f);
					}
					h() {
						return { maxFileSize: 16 * y.$Tl.GB };
					}
					doFileSearch(s, f, o, w) {
						return this.doFileSearchWithEngine(k.$Hjd, s, o, w, c.a, f);
					}
					doFileSearchWithEngine(s, f, o, w, m = c.a, E) {
						let R = 0;
						const C = (A) => {
							Array.isArray(A)
								? ((R += A.length), o(A.map((J) => this.j(J))))
								: A.relativePath
									? (R++, o(this.j(A)))
									: o(A);
						};
						if (f.sortByScore) {
							let A = this.n(f, C, w);
							if (!A) {
								const J = f.maxResults
										? Object.assign({}, f, { maxResults: null })
										: f,
									L = new s(J, E);
								A = this.k(L, f, o, C, w);
							}
							return new Promise((J, L) => {
								A.then(([b, F]) => {
									const D = F.map((M) => this.j(M));
									this.q(D, o, m), J(b);
								}, L);
							});
						}
						const O = new s(f, E);
						return this.s(O, C, m, w).then((A) => ({
							limitHit: A.limitHit,
							type: "success",
							stats: {
								detailStats: A.stats,
								type: this.d,
								fromCache: !1,
								resultCount: R,
								sortingTime: void 0,
							},
							messages: [],
						}));
					}
					j(s) {
						return {
							path: s.base
								? (0, l.$oc)(s.base, s.relativePath)
								: s.relativePath,
						};
					}
					k(s, f, o, w, m) {
						const E = new N.$re();
						let R = (0, r.$zh)((O) => {
								let A = [];
								const J = (L) => {
									Array.isArray(L) ? (A = L) : (w(L), E.fire(L));
								};
								return this.s(s, J, -1, O).then((L) => [L, A]);
							}),
							C;
						if (f.cacheKey) {
							C = this.l(f.cacheKey);
							const O = { promise: R, event: E.event, resolved: !1 };
							(C.resultsToSearchCache[f.filePattern || ""] = O),
								R.then(
									() => {
										O.resolved = !0;
									},
									(A) => {
										delete C.resultsToSearchCache[f.filePattern || ""];
									},
								),
								(R = this.t(R));
						}
						return R.then(([O, A]) => {
							const J = C ? C.scorerCache : Object.create(null),
								L =
									(typeof f.maxResults != "number" || f.maxResults > 0) &&
									n.$le.create(!1);
							return this.o(f, A, J, m).then((b) => {
								const F = L ? L.elapsed() : -1;
								return [
									{
										type: "success",
										stats: {
											detailStats: O.stats,
											sortingTime: F,
											fromCache: !1,
											type: this.d,
											resultCount: b.length,
										},
										messages: O.messages,
										limitHit:
											O.limitHit ||
											(typeof f.maxResults == "number" &&
												A.length > f.maxResults),
									},
									b,
								];
							});
						});
					}
					l(s) {
						const f = this.b[s];
						return f || (this.b[s] = new h());
					}
					n(s, f, o) {
						const w = s.cacheKey && this.b[s.cacheKey];
						if (!w) return;
						const m = this.r(w, s.filePattern || "", f, o);
						if (m)
							return m.then(([E, R, C]) => {
								const O = n.$le.create(!1);
								return this.o(s, R, w.scorerCache, o).then((A) => {
									const J = O.elapsed(),
										L = {
											fromCache: !0,
											detailStats: C,
											type: this.d,
											resultCount: R.length,
											sortingTime: J,
										};
									return [
										{
											type: "success",
											limitHit:
												E.limitHit ||
												(typeof s.maxResults == "number" &&
													R.length > s.maxResults),
											stats: L,
											messages: [],
										},
										A,
									];
								});
							});
					}
					o(s, f, o, w) {
						const m = (0, P.$hs)(s.filePattern || ""),
							E = (C, O) => (0, P.$gs)(C, O, m, !0, $, o),
							R = typeof s.maxResults == "number" ? s.maxResults : d.$o7;
						return e.$Kb(f, E, R, 1e4, w);
					}
					q(s, f, o) {
						if (o && o > 0)
							for (let w = 0; w < s.length; w += o) f(s.slice(w, w + o));
						else f(s);
					}
					r(s, f, o, w) {
						const m = n.$le.create(!1),
							E = f.indexOf(l.sep) >= 0;
						let R;
						for (const J in s.resultsToSearchCache)
							if (f.startsWith(J)) {
								if (E && J.indexOf(l.sep) < 0 && J !== "") continue;
								const L = s.resultsToSearchCache[J];
								R = {
									promise: this.t(L.promise),
									event: L.event,
									resolved: L.resolved,
								};
								break;
							}
						if (!R) return null;
						const C = m.elapsed(),
							O = n.$le.create(!1),
							A = R.event(o);
						return (
							w &&
								w.onCancellationRequested(() => {
									A.dispose();
								}),
							R.promise.then(([J, L]) => {
								if (w && w.isCancellationRequested) throw (0, S.$0)();
								const b = [],
									F = (0, P.$hs)(f).normalizedLowercase;
								for (const D of L) (0, d.$F7)(D, F) && b.push(D);
								return [
									J,
									b,
									{
										cacheWasResolved: R.resolved,
										cacheLookupTime: C,
										cacheFilterTime: O.elapsed(),
										cacheEntryCount: L.length,
									},
								];
							})
						);
					}
					s(s, f, o, w) {
						return new Promise((m, E) => {
							let R = [];
							w?.onCancellationRequested(() => s.cancel()),
								s.search(
									(C) => {
										C &&
											(o
												? (R.push(C),
													o > 0 && R.length >= o && (f(R), (R = [])))
												: f(C));
									},
									(C) => {
										f(C);
									},
									(C, O) => {
										R.length && f(R),
											C
												? (f({
														message: "Search finished. Error: " + C.message,
													}),
													E(C))
												: (f({
														message:
															"Search finished. Stats: " +
															JSON.stringify(O.stats),
													}),
													m(O));
									},
								);
						});
					}
					clearCache(s) {
						return delete this.b[s], Promise.resolve(void 0);
					}
					t(s) {
						return new (class {
							get [Symbol.toStringTag]() {
								return this.toString();
							}
							cancel() {}
							then(f, o) {
								return s.then(f, o);
							}
							catch(f) {
								return this.then(void 0, f);
							}
							finally(f) {
								return s.finally(f);
							}
						})();
					}
				}
				t.$Rjd = c;
				class h {
					constructor() {
						(this.resultsToSearchCache = Object.create(null)),
							(this.scorerCache = Object.create(null));
					}
				}
				const $ = new (class {
					getItemLabel(u) {
						return (0, l.$sc)(u.relativePath);
					}
					getItemDescription(u) {
						return (0, l.$rc)(u.relativePath);
					}
					getItemPath(u) {
						return u.relativePath;
					}
				})();
				function T(u) {
					return {
						...u,
						folderQueries: u.folderQueries && u.folderQueries.map(a),
						extraFileResources:
							u.extraFileResources &&
							u.extraFileResources.map((s) => p.URI.revive(s)),
					};
				}
				function a(u) {
					return (0, I.$ji)(u);
				}
			},
		),
		