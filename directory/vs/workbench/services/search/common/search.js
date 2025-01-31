import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/glob.js';
import '../../../../base/common/objects.js';
import '../../../../base/common/extpath.js';
import '../../../../base/common/strings.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/path.js';
import '../../../../base/common/errors.js';
import './searchExtTypes.js';
import '../../../../base/common/async.js';
define(
			de[186],
			he([1, 0, 24, 215, 82, 249, 37, 5, 54, 29, 1862, 15]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*glob*/,
 w /*objects*/,
 E /*extpath*/,
 C /*strings*/,
 d /*instantiation*/,
 m /*path*/,
 r /*errors*/,
 u /*searchExtTypes*/,
 a /*async*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$M7 =
						e.$I7 =
						e.$G7 =
						e.$z7 =
						e.SearchErrorCode =
						e.SearchSortOrder =
						e.ViewMode =
						e.$w7 =
						e.$v7 =
						e.$u7 =
						e.$t7 =
						e.SearchCompletionExitCode =
						e.QueryType =
						e.SearchProviderType =
						e.$p7 =
						e.$o7 =
						e.$n7 =
						e.$m7 =
						e.$l7 =
						e.$k7 =
						e.$j7 =
						e.TextSearchCompleteMessageType =
							void 0),
					(e.$q7 = o),
					(e.$r7 = f),
					(e.$s7 = b),
					(e.$x7 = P),
					(e.$y7 = k),
					(e.$A7 = M),
					(e.$B7 = N),
					(e.$C7 = A),
					(e.$D7 = R),
					(e.$E7 = O),
					(e.$F7 = B),
					(e.$H7 = z),
					(e.$J7 = H),
					(e.$K7 = q),
					(e.$L7 = G),
					(i = mt(i)),
					(w = mt(w)),
					(E = mt(E)),
					(m = mt(m)),
					Object.defineProperty(e, "TextSearchCompleteMessageType", {
						enumerable: !0,
						get: function () {
							return u.TextSearchCompleteMessageType;
						},
					}),
					(e.$j7 = "workbench.view.search"),
					(e.$k7 = "workbench.panel.search"),
					(e.$l7 = "workbench.view.search"),
					(e.$m7 = "search-result"),
					(e.$n7 = "search.exclude"),
					(e.$o7 = 2e4);
				const h = "\u27EA ",
					c = " characters skipped \u27EB",
					n = (h.length + c.length + 5) * 2;
				e.$p7 = (0, d.$Mi)("searchService");
				var g;
				(function (K) {
					(K[(K.file = 0)] = "file"),
						(K[(K.text = 1)] = "text"),
						(K[(K.aiText = 2)] = "aiText");
				})(g || (e.SearchProviderType = g = {}));
				var p;
				(function (K) {
					(K[(K.File = 1)] = "File"),
						(K[(K.Text = 2)] = "Text"),
						(K[(K.aiText = 3)] = "aiText");
				})(p || (e.QueryType = p = {}));
				function o(K) {
					return !!K.rangeLocations && !!K.previewText;
				}
				function f(K) {
					return !!K.resource;
				}
				function b(K) {
					return !!K.message;
				}
				var s;
				(function (K) {
					(K[(K.Normal = 0)] = "Normal"),
						(K[(K.NewSearchStarted = 1)] = "NewSearchStarted");
				})(s || (e.SearchCompletionExitCode = s = {}));
				class l {
					constructor(J) {
						(this.resource = J), (this.results = []);
					}
				}
				e.$t7 = l;
				class y {
					constructor(J, W, X, Y) {
						(this.rangeLocations = []), (this.webviewIndex = Y);
						const ie = Array.isArray(W) ? W : [W];
						if (X && X.matchLines === 1 && $(ie)) {
							J = (0, C.$eg)(J, X.matchLines);
							let ne = "",
								ee = 0,
								_ = 0;
							const te = Math.floor(X.charsPerLine / 5);
							for (const Q of ie) {
								const Z = Math.max(Q.startColumn - te, 0),
									se = Q.startColumn + X.charsPerLine;
								if (Z > _ + te + n) {
									const re = h + (Z - _) + c;
									(ne += re + J.slice(Z, se)), (ee += Z - (_ + re.length));
								} else ne += J.slice(_, se);
								(_ = se),
									this.rangeLocations.push({
										source: Q,
										preview: new S(0, Q.startColumn - ee, Q.endColumn - ee),
									});
							}
							this.previewText = ne;
						} else {
							const ne = Array.isArray(W)
									? W[0].startLineNumber
									: W.startLineNumber,
								ee = (0, t.$5b)(W, (_) => ({
									preview: new v(
										_.startLineNumber - ne,
										_.startColumn,
										_.endLineNumber - ne,
										_.endColumn,
									),
									source: _,
								}));
							(this.rangeLocations = Array.isArray(ee) ? ee : [ee]),
								(this.previewText = J);
						}
					}
				}
				e.$u7 = y;
				function $(K) {
					const J = K[0].startLineNumber;
					for (const W of K)
						if (W.startLineNumber !== J || W.endLineNumber !== J) return !1;
					return !0;
				}
				class v {
					constructor(J, W, X, Y) {
						(this.startLineNumber = J),
							(this.startColumn = W),
							(this.endLineNumber = X),
							(this.endColumn = Y);
					}
				}
				e.$v7 = v;
				class S extends v {
					constructor(J, W, X) {
						super(J, W, J, X);
					}
				}
				e.$w7 = S;
				var I;
				(function (K) {
					(K.List = "list"), (K.Tree = "tree");
				})(I || (e.ViewMode = I = {}));
				var T;
				(function (K) {
					(K.Default = "default"),
						(K.FileNames = "fileNames"),
						(K.Type = "type"),
						(K.Modified = "modified"),
						(K.CountDescending = "countDescending"),
						(K.CountAscending = "countAscending");
				})(T || (e.SearchSortOrder = T = {}));
				function P(K, J = !0) {
					const W = K && K.files && K.files.exclude,
						X = J && K && K.search && K.search.exclude;
					if (!W && !X) return;
					if (!W || !X) return W || X || void 0;
					let Y = Object.create(null);
					return (Y = w.$yo(Y, w.$vo(W))), (Y = w.$yo(Y, w.$vo(X), !0)), Y;
				}
				function k(K, J) {
					return K.excludePattern && i.$Ik(K.excludePattern, J)
						? !1
						: K.includePattern || K.usingSearchPaths
							? K.includePattern && i.$Ik(K.includePattern, J)
								? !0
								: K.usingSearchPaths
									? !!K.folderQueries &&
										K.folderQueries.some((W) => {
											const X = W.folder.fsPath;
											if (E.$Lg(J, X)) {
												const Y = m.$qc(X, J);
												return (
													!W.includePattern || !!i.$Ik(W.includePattern, Y)
												);
											} else return !1;
										})
									: !1
							: !0;
				}
				var L;
				(function (K) {
					(K[(K.unknownEncoding = 1)] = "unknownEncoding"),
						(K[(K.regexParseError = 2)] = "regexParseError"),
						(K[(K.globParseError = 3)] = "globParseError"),
						(K[(K.invalidLiteral = 4)] = "invalidLiteral"),
						(K[(K.rgProcessError = 5)] = "rgProcessError"),
						(K[(K.other = 6)] = "other"),
						(K[(K.canceled = 7)] = "canceled");
				})(L || (e.SearchErrorCode = L = {}));
				class D extends Error {
					constructor(J, W) {
						super(J), (this.code = W);
					}
				}
				e.$z7 = D;
				function M(K) {
					const J = K.message;
					if ((0, r.$8)(K)) return new D(J, L.canceled);
					try {
						const W = JSON.parse(J);
						return new D(W.message, W.code);
					} catch {
						return new D(J, L.other);
					}
				}
				function N(K) {
					const J = { message: K.message, code: K.code };
					return new Error(JSON.stringify(J));
				}
				function A(K) {
					return K.type === "error" ? !0 : K.type === "success";
				}
				function R(K) {
					return K.type === "success";
				}
				function O(K) {
					return !!K.path;
				}
				function B(K, J, W = !0) {
					const X = K.searchPath ? K.searchPath : K.relativePath;
					return W ? (0, C.$bg)(X, J) : i.$Ik(J, X);
				}
				class U {
					constructor(J) {
						(this.path = J), (this.results = []);
					}
					addMatch(J) {
						this.results.push(J);
					}
					serialize() {
						return {
							path: this.path,
							results: this.results,
							numMatches: this.results.length,
						};
					}
				}
				e.$G7 = U;
				function z(K, J) {
					const W = { ...(K || {}), ...(J || {}) };
					return Object.keys(W).filter((X) => {
						const Y = W[X];
						return typeof Y == "boolean" && Y;
					});
				}
				class F {
					constructor(J, W) {
						(this.c = null),
							(this.a =
								W.excludePattern?.map((Y) => ({
									...(J.excludePattern || {}),
									...(Y.pattern || {}),
								})) ?? []),
							this.a.length === 0 && (this.a = [J.excludePattern || {}]),
							(this.b = this.a.map((Y) => i.$Jk(Y)));
						let X = J.includePattern;
						W.includePattern &&
							(X
								? (X = { ...X, ...W.includePattern })
								: (X = W.includePattern)),
							X && (this.c = i.$Jk(X));
					}
					d(J, W, X) {
						let Y = null;
						for (const ie of this.b) {
							const ne = ie(J, W, X);
							if (typeof ne == "string") {
								Y = ne;
								break;
							}
						}
						return Y;
					}
					matchesExcludesSync(J, W, X) {
						return !!(this.b && this.d(J, W, X));
					}
					includedInQuerySync(J, W, X) {
						return !(
							(this.b && this.d(J, W, X)) ||
							(this.c && !this.c(J, W, X))
						);
					}
					includedInQuery(J, W, X) {
						const Y = () => (this.c ? !!this.c(J, W, X) : !0);
						return Promise.all(
							this.b.map((ie) => {
								const ne = ie(J, W, X);
								return (0, a.$yh)(ne) ? ne.then((ee) => (ee ? !1 : Y())) : Y();
							}),
						).then((ie) => ie.some((ne) => !!ne));
					}
					hasSiblingExcludeClauses() {
						return this.a.reduce((J, W) => x(W) || J, !1);
					}
				}
				e.$I7 = F;
				function x(K) {
					for (const J in K) if (typeof K[J] != "boolean") return !0;
					return !1;
				}
				function H(K) {
					if (!K) return;
					let J;
					return (W) => (
						J ||
							(J = (K() || Promise.resolve([])).then((X) => (X ? V(X) : {}))),
						J.then((X) => !!X[W])
					);
				}
				function q(K) {
					if (!K) return;
					let J;
					return (W) => {
						if (!J) {
							const X = K();
							J = X ? V(X) : {};
						}
						return !!J[W];
					};
				}
				function V(K) {
					const J = {};
					for (const W of K) J[W] = !0;
					return J;
				}
				function G(K) {
					return K.flatMap((J) =>
						J.patterns.map((W) =>
							J.baseUri ? { baseUri: J.baseUri, pattern: W } : W,
						),
					);
				}
				e.$M7 = { matchLines: 100, charsPerLine: 1e4 };
			},
		)
