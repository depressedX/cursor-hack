import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/errorMessage.js';
import '../../../../base/common/network.js';
import '../../../../base/common/path.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/ternarySearchTree.js';
import '../../../../base/common/uri.js';
import './search.js';
import './searchExtTypes.js';
define(
			Pe[308],
			Ne([1, 0, 9, 23, 73, 16, 18, 24, 90, 2, 41, 83]),
			function (we, t, e, r, S, N, P, I, l, n, p, y) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Did = t.$Cid = t.$Bid = void 0),
					(P = tt(P)),
					(I = tt(I));
				class d {
					constructor(T, a, u) {
						(this.f = T),
							(this.g = a),
							(this.h = u),
							(this.b = null),
							(this.c = !1),
							(this.d = 0);
					}
					get j() {
						return this.f.query;
					}
					search(T, a) {
						const u = this.j.folderQueries || [],
							s = new r.$Ce(a);
						return new Promise((f, o) => {
							this.b = new g(T);
							let w = !1;
							const m = (E, R) => {
								if (!w && !this.c) {
									const C = this.l(E);
									E instanceof y.$h7 &&
										typeof this.j.maxResults == "number" &&
										this.d + C > this.j.maxResults &&
										((this.c = !0),
										(w = !0),
										s.cancel(),
										(E = this.m(E, this.j.maxResults - this.d)));
									const O = this.l(E);
									this.d += O;
									const A = E instanceof y.$h7;
									(O > 0 || !A) && this.b.add(E, R);
								}
							};
							this.n(u, m, s.token).then(
								(E) => {
									s.dispose(),
										this.b.flush(),
										f({
											limitHit: this.c || E?.limitHit,
											messages: this.k(E),
											stats: { type: this.h },
										});
								},
								(E) => {
									s.dispose();
									const R = (0, S.$xj)(E);
									o(new Error(R));
								},
							);
						});
					}
					k(T) {
						return T?.message
							? Array.isArray(T.message)
								? T.message
								: [T.message]
							: [];
					}
					l(T) {
						return T instanceof y.$h7
							? Array.isArray(T.ranges)
								? T.ranges.length
								: 1
							: 0;
					}
					m(T, a) {
						return new y.$h7(T.uri, T.ranges.slice(0, a), T.previewText);
					}
					async n(T, a, u) {
						const s = l.$Si.forUris();
						T.forEach((R, C) => {
							const O = new p.$I7(this.j, R);
							s.set(R.folder, {
								queryTester: O,
								folder: R.folder,
								folderIdx: C,
							});
						});
						const f = [],
							o = {
								report: (R) => {
									if (R.uri === void 0)
										throw Error(
											"Text search result URI is undefined. Please check provider implementation.",
										);
									const C = s.findSubstr(R.uri),
										O =
											C.folder.scheme === N.Schemas.file
												? (0, p.$J7)(() => this.g.readdir(I.$mh(R.uri)))
												: void 0,
										A = I.$ph(C.folder, R.uri);
									if (A) {
										const J = C.queryTester.includedInQuery(A, P.$sc(A), O);
										(0, e.$yh)(J)
											? f.push(
													J.then((L) => {
														L && a(R, C.folderIdx);
													}),
												)
											: J && a(R, C.folderIdx);
									}
								},
							},
							m = {
								folderOptions: T.map((R) => this.o(R)),
								maxFileSize: this.j.maxFileSize,
								maxResults: this.j.maxResults ?? p.$o7,
								previewOptions: this.j.previewOptions ?? p.$M7,
								surroundingContext: this.j.surroundingContext ?? 0,
							};
						"usePCRE2" in this.j && (m.usePCRE2 = this.j.usePCRE2);
						let E;
						return (
							this.f.query.type === p.QueryType.aiText
								? (E = await this.f.provider.provideAITextSearchResults(
										this.f.query.contentPattern,
										m,
										o,
										u,
									))
								: (E = await this.f.provider.provideTextSearchResults(
										k(this.f.query.contentPattern),
										m,
										o,
										u,
									)),
							f.length && (await Promise.all(f)),
							E
						);
					}
					o(T) {
						const a = (0, p.$H7)(this.j.includePattern, T.includePattern);
						let u = T.excludePattern?.map((o) => ({
							folder: o.folder,
							patterns: (0, p.$H7)(this.j.excludePattern, o.pattern),
						}));
						(!u || u.length === 0) &&
							(u = [
								{
									folder: void 0,
									patterns: (0, p.$H7)(this.j.excludePattern, void 0),
								},
							]);
						const s = (0, p.$L7)(u);
						return {
							folder: n.URI.from(T.folder),
							excludes: s,
							includes: a,
							useIgnoreFiles: {
								local: !T.disregardIgnoreFiles,
								parent: !T.disregardParentIgnoreFiles,
								global: !T.disregardGlobalIgnoreFiles,
							},
							followSymlinks: !T.ignoreSymlinks,
							encoding:
								(T.fileEncoding && this.g.toCanonicalName(T.fileEncoding)) ??
								"",
						};
					}
				}
				t.$Bid = d;
				function k($) {
					return {
						isCaseSensitive: $.isCaseSensitive || !1,
						isRegExp: $.isRegExp || !1,
						isWordMatch: $.isWordMatch || !1,
						isMultiline: $.isMultiline || !1,
						pattern: $.pattern,
					};
				}
				class g {
					constructor(T) {
						(this.g = T),
							(this.c = -1),
							(this.f = null),
							(this.b = new h(512, (a) => this.j(a)));
					}
					add(T, a) {
						this.f &&
							(this.c !== a || !I.$gh(this.d, T.uri)) &&
							(this.h(), (this.f = null)),
							this.f ||
								((this.c = a), (this.f = { resource: T.uri, results: [] })),
							this.f.results.push(c(T));
					}
					h() {
						const T = this.f && this.f.results ? this.f.results.length : 0;
						this.b.addItem(this.f, T);
					}
					flush() {
						this.h(), this.b.flush();
					}
					j(T) {
						this.g(T);
					}
				}
				t.$Cid = g;
				function c($) {
					return $ instanceof y.$h7
						? {
								previewText: $.previewText,
								rangeLocations: $.ranges.map((T) => ({
									preview: {
										startLineNumber: T.previewRange.start.line,
										startColumn: T.previewRange.start.character,
										endLineNumber: T.previewRange.end.line,
										endColumn: T.previewRange.end.character,
									},
									source: {
										startLineNumber: T.sourceRange.start.line,
										startColumn: T.sourceRange.start.character,
										endLineNumber: T.sourceRange.end.line,
										endColumn: T.sourceRange.end.character,
									},
								})),
							}
						: { text: $.text, lineNumber: $.lineNumber };
				}
				class h {
					static {
						this.b = 4e3;
					}
					static {
						this.c = 50;
					}
					constructor(T, a) {
						(this.j = T),
							(this.k = a),
							(this.d = 0),
							(this.f = []),
							(this.g = 0);
					}
					addItem(T, a) {
						T && this.l(T, a);
					}
					addItems(T, a) {
						T && this.m(T, a);
					}
					l(T, a) {
						this.f.push(T), (this.g += a), this.n();
					}
					m(T, a) {
						(this.f = this.f.concat(T)), (this.g += a), this.n();
					}
					n() {
						this.d < h.c
							? this.flush()
							: this.g >= this.j
								? this.flush()
								: this.h ||
									(this.h = setTimeout(() => {
										this.flush();
									}, h.b));
					}
					flush() {
						this.g &&
							((this.d += this.g),
							this.k(this.f),
							(this.f = []),
							(this.g = 0),
							this.h && (clearTimeout(this.h), (this.h = 0)));
					}
				}
				t.$Did = h;
			},
		),
		