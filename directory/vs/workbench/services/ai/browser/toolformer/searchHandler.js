define(
			de[3974],
			he([1, 0, 124, 33, 59, 5, 25, 118, 361, 186]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$P8b = void 0);
				let u = class {
					constructor(h, c, n, g) {
						(this.e = h),
							(this.f = c),
							(this.g = n),
							(this.h = g),
							(this.d = new w.$Jc(10)),
							(this.c = this.h.createInstance(m.$M8));
					}
					async call(h, c, n, g) {
						if (!c || !c.query) throw new Error("Invalid search parameters");
						if (c.filenameSearch) {
							let R = await this.callFilenameSearch(c, n);
							this.d.set(h.toolformerId, R);
							return;
						}
						const y = this.g.getWorkspace().folders.map((R) => R.uri),
							$ = {
								maxResults: 1e3,
								previewOptions: { matchLines: 5, charsPerLine: 1e3 },
								surroundingContext: 5,
								expandPatterns: !0,
								includePattern: c.includePattern,
								excludePattern: [{ pattern: c.excludePattern }],
							},
							v = { pattern: c.query, isRegExp: !!c.regex },
							S = this.c.text(v, y, $),
							I = new i.$Ce();
						n.signal.addEventListener("abort", () => {
							I.cancel();
						}),
							setTimeout(() => {
								I.cancel();
							}, 5e3);
						const T = await this.f.textSearch(S, I.token);
						let P = new Map();
						T.results.slice(0, 1e3).forEach((R) => {
							if (!R.results) return;
							const O = R instanceof r.$t7;
							let B = 0;
							const U = new Map();
							R.results.forEach((H) => {
								let q, V;
								(0, r.$q7)(H)
									? ((B += H.rangeLocations.length),
										(q = H.rangeLocations[0].source.startLineNumber + 1),
										(V = H.previewText.slice(0, 1e3).replace(/\n$/, "")))
									: ((q = H.lineNumber), O && q++, (V = H.text.slice(0, 1e3))),
									U.set(q, new t.$az({ lineNumber: q, text: V }));
							});
							const z = Array.from(U.values()).sort(
									(H, q) => H.lineNumber - q.lineNumber,
								),
								F = this.g.asRelativePath(R.resource),
								x = new t.$_y({
									relativeWorkspacePath: F,
									numMatches: B,
									potentiallyRelevantLines: z,
									cropped: !1,
								});
							P.set(F, x);
						});
						let k = Array.from(P.values());
						const L = k.reduce((R, O) => R + O.numMatches, 0),
							D = k.length;
						let M = 0,
							N = 0;
						for (const R of k) {
							let O = 0;
							for (const B of R.potentiallyRelevantLines)
								if ((M++, O++, M >= 1e3)) break;
							if (
								(M >= 1e3 &&
									((R.potentiallyRelevantLines =
										R.potentiallyRelevantLines.slice(0, O)),
									(R.cropped = !0)),
								N++,
								N >= 1e3)
							)
								break;
						}
						N >= 1e3 && (k = k.slice(0, N));
						let A = new t.$bz({
							fileResults: k,
							numTotalMatches: L,
							numTotalMatchedFiles: D,
							numTotalMayBeIncomplete: T.limitHit ?? !1,
							filesOnly: !1,
						});
						this.d.set(h.toolformerId, A);
					}
					async callFilenameSearch(h, c) {
						const n = this.g.getWorkspace().folders.map((l) => l.uri),
							g = 1e3,
							p = 5e3,
							o = {
								includePattern: h.includePattern,
								excludePattern: [{ pattern: h.excludePattern }],
								filePattern: h.query,
								expandPatterns: !0,
								sortByScore: !0,
								maxResults: g,
							},
							f = this.c.file(n, o),
							b = new i.$Ce();
						c.signal.addEventListener("abort", () => {
							b.cancel();
						}),
							setTimeout(() => {
								b.cancel();
							}, p);
						const s = await this.f.fileSearch(f, b.token);
						return new t.$bz({
							fileResults: s.results.map(
								(l) =>
									new t.$_y({
										relativeWorkspacePath: this.g.asRelativePath(l.resource),
									}),
							),
							numTotalMatches: s.results.length,
							numTotalMatchedFiles: s.results.length,
							numTotalMayBeIncomplete: s.limitHit ?? !1,
							filesOnly: !0,
						});
					}
					async finish(h, c, n) {
						const g = this.d.get(h.toolformerId);
						if (!g) throw new Error("No search result found.");
						return g;
					}
				};
				(e.$P8b = u),
					(e.$P8b = u =
						Ne([j(0, d.$Nfc), j(1, r.$p7), j(2, C.$Vi), j(3, E.$Li)], u));
			},
		),
		