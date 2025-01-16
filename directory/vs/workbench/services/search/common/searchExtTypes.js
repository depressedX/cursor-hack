define(de[1862], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.TextSearchCompleteMessageType =
					e.ExcludeSettingOptions =
					e.$i7 =
					e.$h7 =
					e.$g7 =
					e.$f7 =
						void 0);
			class t {
				constructor(r, u) {
					(this.line = r), (this.character = u);
				}
				isBefore(r) {
					return !1;
				}
				isBeforeOrEqual(r) {
					return !1;
				}
				isAfter(r) {
					return !1;
				}
				isAfterOrEqual(r) {
					return !1;
				}
				isEqual(r) {
					return !1;
				}
				compareTo(r) {
					return 0;
				}
				translate(r, u) {
					return new t(0, 0);
				}
				with(r) {
					return new t(0, 0);
				}
			}
			e.$f7 = t;
			class i {
				constructor(r, u, a, h) {
					(this.isEmpty = !1),
						(this.isSingleLine = !1),
						(this.start = new t(r, u)),
						(this.end = new t(a, h));
				}
				contains(r) {
					return !1;
				}
				isEqual(r) {
					return !1;
				}
				intersection(r) {}
				union(r) {
					return new i(0, 0, 0, 0);
				}
				with(r) {
					return new i(0, 0, 0, 0);
				}
			}
			e.$g7 = i;
			class w {
				constructor(r, u, a) {
					(this.uri = r), (this.ranges = u), (this.previewText = a);
				}
			}
			e.$h7 = w;
			class E {
				constructor(r, u, a) {
					(this.uri = r), (this.text = u), (this.lineNumber = a);
				}
			}
			e.$i7 = E;
			var C;
			(function (m) {
				(m[(m.None = 1)] = "None"),
					(m[(m.FilesExclude = 2)] = "FilesExclude"),
					(m[(m.SearchAndFilesExclude = 3)] = "SearchAndFilesExclude");
			})(C || (e.ExcludeSettingOptions = C = {}));
			var d;
			(function (m) {
				(m[(m.Information = 1)] = "Information"),
					(m[(m.Warning = 2)] = "Warning");
			})(d || (e.TextSearchCompleteMessageType = d = {}));
		});
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[1863],
		he([1, 0, 4, 7, 488, 111, 673, 1862, 23, 497, 9]),
		function (ce, e, t, i, w, E, C, d, m, r, u) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$UOc = void 0),
				(t = mt(t)),
				(i = mt(i)),
				(E = xi(E));
			const a = (h, c, n, g, p, o, f) => {
				const b = i.$("div.providerMessage"),
					s = (0, w.$Zpb)(h.text);
				i.$fhb(
					b,
					i.$(
						"." +
							C.SeverityIcon.className(
								h.type === d.TextSearchCompleteMessageType.Information
									? E.default.Info
									: E.default.Warning,
							)
								.split(" ")
								.join("."),
					),
				);
				for (const l of s.nodes)
					if (typeof l == "string") i.$fhb(b, document.createTextNode(l));
					else {
						const y = c.createInstance(r.Link, b, l, {
							opener: async ($) => {
								if (!h.trusted) return;
								const v = u.URI.parse($, !0);
								v.scheme === m.Schemas.command && h.trusted
									? (await p.executeCommand(v.path))?.triggerSearch && f()
									: v.scheme === m.Schemas.https
										? g.open(v)
										: v.scheme === m.Schemas.command && !h.trusted
											? n.error(t.localize(9295, null, $))
											: n.error(t.localize(9296, null, $));
							},
						});
						o.add(y);
					}
				return b;
			};
			e.$UOc = a;
		},
	),
		define(
			de[186],
			he([1, 0, 24, 215, 82, 249, 37, 5, 54, 29, 1862, 15]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
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
		),
		define(
			de[3594],
			he([1, 0, 33, 3, 9, 10, 32, 101, 186, 88, 197, 377, 8]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$poc = void 0),
					(a = mt(a));
				let c = class {
					constructor(o, f, b, s, l) {
						(this.c = f),
							(this.d = b),
							(this.e = l),
							(this.b = new Map()),
							(this.a = o.getProxy(r.$mbb.ExtHostSearch)),
							this.a.$enableExtensionHostSearch();
					}
					dispose() {
						this.b.forEach((o) => o.dispose()), this.b.clear();
					}
					$registerTextSearchProvider(o, f) {
						this.b.set(
							o,
							new g(this.c, m.SearchProviderType.text, f, o, this.a),
						);
					}
					$registerAITextSearchProvider(o, f) {
						a.$ooc.hasAIResultProvider.bindTo(this.e).set(!0),
							this.b.set(
								o,
								new g(this.c, m.SearchProviderType.aiText, f, o, this.a),
							);
					}
					$registerFileSearchProvider(o, f) {
						this.b.set(
							o,
							new g(this.c, m.SearchProviderType.file, f, o, this.a),
						);
					}
					$unregisterProvider(o) {
						(0, i.$Vc)(this.b.get(o)), this.b.delete(o);
					}
					$handleFileMatch(o, f, b) {
						const s = this.b.get(o);
						if (!s) throw new Error("Got result for unknown provider");
						s.handleFindMatch(f, b);
					}
					$handleTextMatch(o, f, b) {
						const s = this.b.get(o);
						if (!s) throw new Error("Got result for unknown provider");
						s.handleFindMatch(f, b);
					}
					$handleTelemetry(o, f) {
						this.d.publicLog(o, f);
					}
				};
				(e.$poc = c),
					(e.$poc = c =
						Ne(
							[
								(0, d.$tmc)(r.$lbb.MainThreadSearch),
								j(1, m.$p7),
								j(2, C.$km),
								j(3, E.$gj),
								j(4, h.$6j),
							],
							c,
						));
				class n {
					static {
						this.a = 0;
					}
					constructor(o, f = ++n.a, b = new Map()) {
						(this.progress = o), (this.id = f), (this.matches = b);
					}
					addMatch(o) {
						const f = this.matches.get(o.resource.toString());
						f
							? f.results && o.results && f.results.push(...o.results)
							: this.matches.set(o.resource.toString(), o),
							this.progress?.(o);
					}
				}
				class g {
					constructor(o, f, b, s, l) {
						(this.c = b),
							(this.d = s),
							(this.e = l),
							(this.a = new i.$Zc()),
							(this.b = new Map()),
							this.a.add(o.registerSearchResultProvider(this.c, f, this));
					}
					dispose() {
						this.a.dispose();
					}
					fileSearch(o, f = t.CancellationToken.None) {
						return this.doSearch(o, void 0, f);
					}
					textSearch(o, f, b = t.CancellationToken.None) {
						return this.doSearch(o, f, b);
					}
					doSearch(o, f, b = t.CancellationToken.None) {
						if (!o.folderQueries.length) throw new Error("Empty folderQueries");
						const s = new n(f);
						this.b.set(s.id, s);
						const l = this.f(o, s.id, b);
						return Promise.resolve(l).then(
							(y) => (
								this.b.delete(s.id),
								{
									results: Array.from(s.matches.values()),
									stats: y.stats,
									limitHit: y.limitHit,
									messages: y.messages,
								}
							),
							(y) => (this.b.delete(s.id), Promise.reject(y)),
						);
					}
					clearCache(o) {
						return Promise.resolve(this.e.$clearCache(o));
					}
					handleFindMatch(o, f) {
						const b = this.b.get(o);
						b &&
							f.forEach((s) => {
								s.results
									? b.addMatch((0, u.$ji)(s))
									: b.addMatch({ resource: w.URI.revive(s) });
							});
					}
					f(o, f, b) {
						switch (o.type) {
							case m.QueryType.File:
								return this.e.$provideFileSearchResults(this.d, f, o, b);
							case m.QueryType.Text:
								return this.e.$provideTextSearchResults(this.d, f, o, b);
							default:
								return this.e.$provideAITextSearchResults(this.d, f, o, b);
						}
					}
				}
			},
		),
		define(
			de[1035],
			he([1, 0, 2, 13, 193, 7, 186, 21]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Yuc = e.$Vuc = void 0),
					(e.$Wuc = c),
					(e.$Xuc = n),
					(e.$Zuc = o);
				const m = "workbench.view.explorer",
					r = "workbench.view.scm",
					u = "workbench.view.extensions";
				class a {
					constructor(b) {
						this.elements = b;
					}
				}
				e.$Vuc = a;
				const h = "sidebar2.sidebarData.memoized.v1";
				function c(f, b, s, l) {
					const y = f.get(h, d.StorageScope.APPLICATION),
						$ = {};
					if (y)
						try {
							const T = JSON.parse(y);
							T &&
								("pinnedViewContainerIDs" in T &&
									($.pinnedViewContainerIDs = T.pinnedViewContainerIDs),
								"viewContainerOrders" in T &&
									($.viewContainerOrders = T.viewContainerOrders));
						} catch (T) {
							console.error(T);
						}
					const v = {
							viewContainers: new a(b),
							dimensionOfEntireSidebar: new E.$pgb(0, 0),
							activeViewContainerID: s,
							pinnedViewContainerIDs: [m, C.$j7, r, u],
							viewContainerOrders: {},
							heightOfTitle: 35,
							activeComposite: void 0,
							showComposite: !0,
							theme: l,
							...$,
						},
						[S, I] = (0, w.createStore)(v);
					return [S, I];
				}
				function n(f, b) {
					const s = {
						pinnedViewContainerIDs: b.pinnedViewContainerIDs,
						viewContainerOrders: b.viewContainerOrders,
					};
					try {
						f.store(
							h,
							JSON.stringify(s),
							d.StorageScope.APPLICATION,
							d.StorageTarget.MACHINE,
						);
					} catch (l) {
						console.error(l);
					}
				}
				const g = (0, i.createContext)(),
					p = (f) =>
						(0, t.createComponent)(g.Provider, {
							value: f,
							get children() {
								return f.children;
							},
						});
				e.$Yuc = p;
				function o() {
					const f = (0, i.useContext)(g);
					if (!f) throw new Error("No SidebarContext found");
					return f;
				}
			},
		),
		define(
			de[3595],
			he([1, 0, 2, 2, 2, 2, 2, 13, 7, 1035, 128, 105, 707, 436, 106, 84]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$1uc = f);
				const p = (0, t.template)("<div>"),
					o = (0, t.template)('<div class="sidebar2-compositeComponent">');
				function f(b) {
					const s = (0, r.$Zuc)();
					let l;
					const [y, $] = (0, d.createSignal)(void 0);
					let v;
					(0, d.createEffect)(() => {
						l !== void 0 &&
							((v = new c.$bpb(l, n.$nyb)),
							v.hide(),
							(0, d.onCleanup)(() => {
								v?.dispose();
							}));
					});
					const S = new Map(),
						I = new Map();
					return (
						(0, d.onCleanup)(() => {
							for (const T of S.values())
								T.composite.dispose(), T.progress?.dispose();
						}),
						(0, d.createEffect)(() => {
							if (!s.sidebarData.showComposite) {
								v?.stop().hide();
								return;
							}
							if (!s.sidebarData.activeViewContainerID) return;
							let T = S.get(s.sidebarData.activeViewContainerID);
							if (!T) {
								const D = s.compositeRegistry.getComposite(
									s.sidebarData.activeViewContainerID,
								);
								if (!D) {
									console.error(
										`no composite descriptor found for ${s.sidebarData.activeViewContainerID}`,
									);
									return;
								}
								const M = new (class extends h.$LMb {
										constructor() {
											super(s.sidebarData.activeViewContainerID, !0);
										}
									})(),
									N = v ? new h.$KMb(v, M) : void 0,
									A = s.instantiationService.createChild(
										N ? new u.$Ki([g.$bO, N]) : new u.$Ki(),
									),
									R = D.instantiate(A);
								(T = { composite: R, progress: N, progressScope: M }),
									S.set(R.getId(), T);
							}
							const P = T.composite;
							s.setSidebarData("activeComposite", {
								composite: P,
								progress: T.progress,
							}),
								S.forEach((D, M) => {
									M === s.sidebarData.activeViewContainerID
										? D.progressScope.PUBLIC_BE_CAREFUL_onScopeOpened(M)
										: D.progressScope.PUBLIC_BE_CAREFUL_onScopeClosed(M);
								});
							let k = I.get(P.getId());
							k ||
								((k = (0, m.$)(".composite")),
								k.classList.add(...b.compositeCSSClass.split(" ")),
								(k.style.height = "100%"),
								(k.style.width = "100%"),
								(k.id = P.getId()),
								P.create(k),
								P.updateStyles(),
								I.set(P.getId(), k));
							function L(D) {
								const M = D?.getMenuIds(),
									N = D?.getActions().slice(0) || [],
									A = D?.getSecondaryActions().slice(0) || [];
								(b.toolbar.context =
									s?.sidebarData.activeComposite?.composite.getActionsContext() ??
									null),
									b.toolbar.setActions((0, a.$fib)(N), (0, a.$fib)(A), M);
							}
							(b.toolbar.actionRunner = P.getActionRunner()), L(P), $(k);
						}),
						(0, d.createEffect)(() => {
							const T = s.sidebarData.activeComposite?.composite;
							T &&
								(T.setVisible(!0),
								(0, d.onCleanup)(() => {
									T.setVisible(!1);
								}));
						}),
						(0, d.createEffect)(() => {
							const T = s.sidebarData.activeComposite?.composite;
							T &&
								T.layout(
									new m.$pgb(
										s.sidebarData.dimensionOfEntireSidebar.width,
										s.sidebarData.dimensionOfEntireSidebar.height -
											s.sidebarData.heightOfTitle -
											b.sideBarMenuHeight,
									),
								);
						}),
						(() => {
							const T = o(),
								P = l;
							return (
								typeof P == "function" ? (0, C.use)(P, T) : (l = T),
								T.style.setProperty("position", "absolute"),
								(0, E.insert)(
									T,
									(0, i.createComponent)(d.Show, {
										get when() {
											return b.show;
										},
										get children() {
											const k = p();
											return (
												(0, E.insert)(k, y),
												(0, w.effect)(
													(L) => {
														const D = `${s.sidebarData.dimensionOfEntireSidebar.width}px`,
															M = `${s.sidebarData.dimensionOfEntireSidebar.height - s.sidebarData.heightOfTitle}px`;
														return (
															D !== L._v$ &&
																((L._v$ = D) != null
																	? k.style.setProperty("width", D)
																	: k.style.removeProperty("width")),
															M !== L._v$2 &&
																((L._v$2 = M) != null
																	? k.style.setProperty("height", M)
																	: k.style.removeProperty("height")),
															L
														);
													},
													{ _v$: void 0, _v$2: void 0 },
												),
												k
											);
										},
									}),
								),
								T
							);
						})()
					);
				}
			},
		),
		