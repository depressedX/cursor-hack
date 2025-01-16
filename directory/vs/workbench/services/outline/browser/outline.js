define(de[475], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.OutlineConfigCollapseItemsValues =
					e.OutlineConfigKeys =
					e.OutlineTarget =
					e.$x4b =
						void 0),
				(e.$x4b = (0, t.$Mi)("IOutlineService"));
			var i;
			(function (C) {
				(C[(C.OutlinePane = 1)] = "OutlinePane"),
					(C[(C.Breadcrumbs = 2)] = "Breadcrumbs"),
					(C[(C.QuickPick = 4)] = "QuickPick");
			})(i || (e.OutlineTarget = i = {}));
			var w;
			(function (C) {
				(C.icons = "outline.icons"),
					(C.collapseItems = "outline.collapseItems"),
					(C.problemsEnabled = "outline.problems.enabled"),
					(C.problemsColors = "outline.problems.colors"),
					(C.problemsBadges = "outline.problems.badges");
			})(w || (e.OutlineConfigKeys = w = {}));
			var E;
			(function (C) {
				(C.Collapsed = "alwaysCollapse"), (C.Expanded = "alwaysExpand");
			})(E || (e.OutlineConfigCollapseItemsValues = E = {}));
		}),
		define(
			de[3517],
			he([1, 0, 33, 29, 6, 3, 23, 19, 10, 22, 25, 1223, 475]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$src = e.$rrc = e.$qrc = void 0);
				class c {
					constructor(o, f) {
						(this.uri = o), (this.kind = f);
					}
				}
				e.$qrc = c;
				class n {
					constructor(o, f) {
						(this.element = o), (this.outline = f);
					}
				}
				e.$rrc = n;
				let g = class {
					constructor(o, f, b, s, l) {
						(this.resource = o),
							(this.h = s),
							(this.j = l),
							(this.a = new E.$Zc()),
							(this.e = new E.$2c()),
							(this.f = new E.$Zc()),
							(this.g = new w.$re()),
							(this.onDidUpdate = this.g.event),
							(this.c = a.$prc.FilePath.bindTo(b)),
							(this.d = a.$prc.SymbolPath.bindTo(b)),
							this.a.add(this.c.onDidChange((y) => this.g.fire(this))),
							this.a.add(this.d.onDidChange((y) => this.g.fire(this))),
							this.h.onDidChangeWorkspaceFolders(this.l, this, this.a),
							(this.b = this.k(o)),
							f &&
								(this.m(f),
								this.a.add(l.onDidChange(() => this.m(f))),
								this.a.add(f.onDidChangeControl(() => this.m(f)))),
							this.g.fire(this);
					}
					dispose() {
						this.a.dispose(),
							this.c.dispose(),
							this.d.dispose(),
							this.e.dispose(),
							this.f.dispose(),
							this.g.dispose();
					}
					isRelative() {
						return !!this.b.folder;
					}
					getElements() {
						let o = [];
						if (
							(this.c.getValue() === "on"
								? (o = o.concat(this.b.path))
								: this.c.getValue() === "last" &&
									this.b.path.length > 0 &&
									(o = o.concat(this.b.path.slice(-1))),
							this.d.getValue() === "off" || !this.e.value)
						)
							return o;
						const f =
							this.e.value.config.breadcrumbsDataSource.getBreadcrumbElements();
						for (
							let b =
								this.d.getValue() === "last" && f.length > 0 ? f.length - 1 : 0;
							b < f.length;
							b++
						)
							o.push(new n(f[b], this.e.value));
						return (
							f.length === 0 &&
								!this.e.value.isEmpty &&
								o.push(new n(this.e.value, this.e.value)),
							o
						);
					}
					k(o) {
						if ((0, C.$Wg)(o, C.Schemas.untitled, C.Schemas.data))
							return { folder: void 0, path: [] };
						const f = {
							folder: this.h.getWorkspaceFolder(o) ?? void 0,
							path: [],
						};
						let b = o;
						for (
							;
							b && b.path !== "/" && !(f.folder && (0, d.$gh)(f.folder.uri, b));
						) {
							f.path.unshift(
								new c(
									b,
									f.path.length === 0 ? r.FileKind.FILE : r.FileKind.FOLDER,
								),
							);
							const s = b.path.length;
							if (((b = (0, d.$mh)(b)), b.path.length === s)) break;
						}
						return (
							f.folder &&
								this.h.getWorkbenchState() === u.WorkbenchState.WORKSPACE &&
								f.path.unshift(new c(f.folder.uri, r.FileKind.ROOT_FOLDER)),
							f
						);
					}
					l() {
						(this.b = this.k(this.resource)), this.g.fire(this);
					}
					m(o) {
						const f = new t.$Ce();
						this.e.clear(),
							this.f.clear(),
							this.f.add((0, E.$Yc)(() => f.dispose(!0))),
							this.j
								.createOutline(o, h.OutlineTarget.Breadcrumbs, f.token)
								.then((b) => {
									f.token.isCancellationRequested &&
										(b?.dispose(), (b = void 0)),
										(this.e.value = b),
										this.g.fire(this),
										b && this.f.add(b.onDidChange(() => this.g.fire(this)));
								})
								.catch((b) => {
									this.g.fire(this), (0, i.$4)(b);
								});
					}
				};
				(e.$src = g),
					(e.$src = g = Ne([j(2, m.$gj), j(3, u.$Vi), j(4, h.$x4b)], g));
			},
		),
		define(
			de[3518],
			he([
				1, 0, 7, 410, 132, 17, 74, 204, 4, 325, 10, 90, 35, 51, 125, 475, 26,
				75, 2401, 1205,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				var f;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ZYc =
						e.$YYc =
						e.$XYc =
						e.$WYc =
						e.$VYc =
						e.$UYc =
						e.$TYc =
						e.$SYc =
							void 0),
					(t = mt(t));
				class b {
					getKeyboardNavigationLabel(L) {
						return L instanceof d.$7Db ? L.label : L.symbol.name;
					}
				}
				e.$SYc = b;
				class s {
					constructor(L) {
						this.c = L;
					}
					getWidgetAriaLabel() {
						return this.c;
					}
					getAriaLabel(L) {
						return L instanceof d.$7Db
							? L.label
							: (0, C.$hM)(L.symbol.name, L.symbol.kind);
					}
				}
				e.$TYc = s;
				class l {
					getId(L) {
						return L.id;
					}
				}
				e.$UYc = l;
				class y {
					static {
						this.id = "DocumentSymbolGroupTemplate";
					}
					constructor(L, D) {
						(this.labelContainer = L), (this.label = D);
					}
					dispose() {
						this.label.dispose();
					}
				}
				class $ {
					static {
						this.id = "DocumentSymbolTemplate";
					}
					constructor(L, D, M, N) {
						(this.container = L),
							(this.iconLabel = D),
							(this.iconClass = M),
							(this.decoration = N);
					}
				}
				class v {
					getHeight(L) {
						return 22;
					}
					getTemplateId(L) {
						return L instanceof d.$7Db ? y.id : $.id;
					}
				}
				e.$VYc = v;
				class S {
					constructor() {
						this.templateId = y.id;
					}
					renderTemplate(L) {
						const D = t.$(".outline-element-label");
						return (
							L.classList.add("outline-element"),
							t.$fhb(L, D),
							new y(D, new i.$Wob(D))
						);
					}
					renderElement(L, D, M) {
						M.label.set(L.element.label, (0, w.$3k)(L.filterData));
					}
					disposeTemplate(L) {
						L.dispose();
					}
				}
				e.$WYc = S;
				let I = class {
					constructor(L, D, M, N) {
						(this.c = L), (this.d = M), (this.e = N), (this.templateId = $.id);
					}
					renderTemplate(L) {
						L.classList.add("outline-element");
						const D = new r.$Xob(L, { supportHighlights: !0 }),
							M = t.$(".outline-element-icon"),
							N = t.$(".outline-element-decoration");
						return L.prepend(M), L.appendChild(N), new $(L, D, M, N);
					}
					renderElement(L, D, M) {
						const { element: N } = L,
							A = ["nowrap"],
							R = {
								matches: (0, w.$3k)(L.filterData),
								labelEscapeNewLines: !0,
								extraClasses: A,
								title: (0, m.localize)(
									4886,
									null,
									N.symbol.name,
									C.$gM[N.symbol.kind],
								),
							};
						this.d.getValue(g.OutlineConfigKeys.icons) &&
							((M.iconClass.className = ""),
							M.iconClass.classList.add(
								"outline-element-icon",
								"inline",
								...p.ThemeIcon.asClassNameArray(
									C.SymbolKinds.toIcon(N.symbol.kind),
								),
							)),
							N.symbol.tags.indexOf(C.SymbolTag.Deprecated) >= 0 &&
								(A.push("deprecated"), (R.matches = [])),
							M.iconLabel.setLabel(N.symbol.name, N.symbol.detail, R),
							this.c && this.f(N, M);
					}
					f(L, D) {
						if (!L.marker) {
							t.hide(D.decoration),
								D.container.style.removeProperty("--outline-element-color");
							return;
						}
						const { count: M, topSev: N } = L.marker,
							A = this.e
								.getColorTheme()
								.getColor(N === a.MarkerSeverity.Error ? c.$TS : c.$US),
							R = A ? A.toString() : "inherit",
							O = this.d.getValue("problems.visibility"),
							B = this.d.getValue(g.OutlineConfigKeys.problemsColors);
						if (
							(!O || !B
								? D.container.style.removeProperty("--outline-element-color")
								: D.container.style.setProperty("--outline-element-color", R),
							O === void 0)
						)
							return;
						!this.d.getValue(g.OutlineConfigKeys.problemsBadges) || !O
							? t.hide(D.decoration)
							: M > 0
								? (t.show(D.decoration),
									D.decoration.classList.remove("bubble"),
									(D.decoration.innerText = M < 10 ? M.toString() : "+9"),
									(D.decoration.title =
										M === 1
											? (0, m.localize)(4887, null)
											: (0, m.localize)(4888, null, M)),
									D.decoration.style.setProperty("--outline-element-color", R))
								: (t.show(D.decoration),
									D.decoration.classList.add("bubble"),
									(D.decoration.innerText = "\uEA71"),
									(D.decoration.title = (0, m.localize)(4889, null)),
									D.decoration.style.setProperty("--outline-element-color", R));
					}
					disposeTemplate(L) {
						L.iconLabel.dispose();
					}
				};
				(e.$XYc = I), (e.$XYc = I = Ne([j(2, u.$gj), j(3, h.$iP)], I));
				let T = class {
					static {
						f = this;
					}
					static {
						this.kindToConfigName = Object.freeze({
							[C.SymbolKind.File]: "showFiles",
							[C.SymbolKind.Module]: "showModules",
							[C.SymbolKind.Namespace]: "showNamespaces",
							[C.SymbolKind.Package]: "showPackages",
							[C.SymbolKind.Class]: "showClasses",
							[C.SymbolKind.Method]: "showMethods",
							[C.SymbolKind.Property]: "showProperties",
							[C.SymbolKind.Field]: "showFields",
							[C.SymbolKind.Constructor]: "showConstructors",
							[C.SymbolKind.Enum]: "showEnums",
							[C.SymbolKind.Interface]: "showInterfaces",
							[C.SymbolKind.Function]: "showFunctions",
							[C.SymbolKind.Variable]: "showVariables",
							[C.SymbolKind.Constant]: "showConstants",
							[C.SymbolKind.String]: "showStrings",
							[C.SymbolKind.Number]: "showNumbers",
							[C.SymbolKind.Boolean]: "showBooleans",
							[C.SymbolKind.Array]: "showArrays",
							[C.SymbolKind.Object]: "showObjects",
							[C.SymbolKind.Key]: "showKeys",
							[C.SymbolKind.Null]: "showNull",
							[C.SymbolKind.EnumMember]: "showEnumMembers",
							[C.SymbolKind.Struct]: "showStructs",
							[C.SymbolKind.Event]: "showEvents",
							[C.SymbolKind.Operator]: "showOperators",
							[C.SymbolKind.TypeParameter]: "showTypeParameters",
						});
					}
					constructor(L, D) {
						(this.c = L), (this.d = D);
					}
					filter(L) {
						const D = d.$8Db.get(L);
						if (!(L instanceof d.$6Db)) return !0;
						const M = f.kindToConfigName[L.symbol.kind],
							N = `${this.c}.${M}`;
						return this.d.getValue(D?.uri, N);
					}
				};
				(e.$YYc = T), (e.$YYc = T = f = Ne([j(1, n.$XO)], T));
				class P {
					constructor() {
						this.c = new t.$fgb(
							o.$Bfb,
							() => new Intl.Collator(void 0, { numeric: !0 }),
						);
					}
					compareByPosition(L, D) {
						return L instanceof d.$7Db && D instanceof d.$7Db
							? L.order - D.order
							: L instanceof d.$6Db && D instanceof d.$6Db
								? E.$iL.compareRangesUsingStarts(
										L.symbol.range,
										D.symbol.range,
									) || this.c.value.compare(L.symbol.name, D.symbol.name)
								: 0;
					}
					compareByType(L, D) {
						return L instanceof d.$7Db && D instanceof d.$7Db
							? L.order - D.order
							: L instanceof d.$6Db && D instanceof d.$6Db
								? L.symbol.kind - D.symbol.kind ||
									this.c.value.compare(L.symbol.name, D.symbol.name)
								: 0;
					}
					compareByName(L, D) {
						return L instanceof d.$7Db && D instanceof d.$7Db
							? L.order - D.order
							: L instanceof d.$6Db && D instanceof d.$6Db
								? this.c.value.compare(L.symbol.name, D.symbol.name) ||
									E.$iL.compareRangesUsingStarts(L.symbol.range, D.symbol.range)
								: 0;
					}
				}
				e.$ZYc = P;
			},
		),
		define(
			de[3519],
			he([
				1, 0, 6, 3, 475, 55, 30, 52, 3518, 56, 204, 33, 15, 29, 125, 5, 98, 17,
				116, 65, 10, 4, 496, 90, 19, 69,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let I = class {
					constructor(L, D) {
						(this.b = L), (this.c = D), (this.a = []);
					}
					getBreadcrumbElements() {
						return this.a;
					}
					clear() {
						this.a = [];
					}
					update(L, D) {
						const M = this.d(L, D);
						this.a = M;
					}
					d(L, D) {
						let M = L.getItemEnclosingPosition(D);
						if (!M) return [];
						const N = [];
						for (; M; ) {
							N.push(M);
							const R = M.parent;
							if (
								R instanceof u.$8Db ||
								(R instanceof u.$7Db &&
									R.parent &&
									R.parent.children.size === 1)
							)
								break;
							M = R;
						}
						const A = [];
						for (let R = N.length - 1; R >= 0; R--) {
							const O = N[R];
							if (this.f(O)) break;
							A.push(O);
						}
						return A.length === 0 ? [] : A;
					}
					f(L) {
						if (!(L instanceof u.$6Db)) return !1;
						const D = `breadcrumbs.${m.$YYc.kindToConfigName[L.symbol.kind]}`;
						let M;
						return (
							this.b && this.b.getModel() && (M = this.b.getModel().uri),
							!this.c.getValue(M, D)
						);
					}
				};
				I = Ne([j(1, n.$XO)], I);
				let T = class {
					get activeElement() {
						const L = this.g.getPosition();
						if (!(!L || !this.c)) return this.c.getItemEnclosingPosition(L);
					}
					constructor(L, D, M, N, A, R, O, B, U, z) {
						(this.g = L),
							(this.h = N),
							(this.j = A),
							(this.k = R),
							(this.l = O),
							(this.m = B),
							(this.a = new i.$Zc()),
							(this.b = new t.$re()),
							(this.onDidChange = this.b.event),
							(this.d = new i.$Zc()),
							(this.outlineKind = "documentSymbols"),
							(this.f = new I(L, U));
						const F = new m.$VYc(),
							x = [new m.$WYc(), z.createInstance(m.$XYc, !0, D)],
							H = {
								getChildren: (J) =>
									J instanceof u.$6Db || J instanceof u.$7Db
										? J.children.values()
										: J === this && this.c
											? this.c.children.values()
											: [],
							},
							q = new m.$ZYc(),
							V = U.getValue(
								L.getModel()?.uri,
								w.OutlineConfigKeys.collapseItems,
							),
							G = {
								collapseByDefault:
									D === w.OutlineTarget.Breadcrumbs ||
									(D === w.OutlineTarget.OutlinePane &&
										V === w.OutlineConfigCollapseItemsValues.Collapsed),
								expandOnlyOnTwistieClick: !0,
								multipleSelectionSupport: !1,
								identityProvider: new m.$UYc(),
								keyboardNavigationLabelProvider: new m.$SYc(),
								accessibilityProvider: new m.$TYc((0, l.localize)(4885, null)),
								filter:
									D === w.OutlineTarget.OutlinePane
										? z.createInstance(m.$YYc, "outline")
										: D === w.OutlineTarget.Breadcrumbs
											? z.createInstance(m.$YYc, "breadcrumbs")
											: void 0,
							};
						(this.config = {
							breadcrumbsDataSource: this.f,
							delegate: F,
							renderers: x,
							treeDataSource: H,
							comparator: q,
							options: G,
							quickPickDataSource: {
								getQuickPickElements: () => {
									throw new Error("not implemented");
								},
							},
						}),
							this.a.add(N.documentSymbolProvider.onDidChange((J) => this.n())),
							this.a.add(this.g.onDidChangeModel((J) => this.n())),
							this.a.add(this.g.onDidChangeModelLanguage((J) => this.n()));
						const K = new h.$Wh();
						this.a.add(K),
							this.a.add(
								this.g.onDidChangeModelContent((J) => {
									const W = this.g.getModel();
									if (W) {
										const X = R.getDebounceValue(W);
										K.cancelAndSet(() => this.n(J), X);
									}
								}),
							),
							this.a.add(this.g.onDidDispose(() => this.d.clear())),
							this.n().finally(() => M.open());
					}
					dispose() {
						this.a.dispose(), this.d.dispose();
					}
					get isEmpty() {
						return !this.c || u.$5Db.empty(this.c);
					}
					get uri() {
						return this.c?.uri;
					}
					async reveal(L, D, M, N) {
						const A = u.$8Db.get(L);
						!A ||
							!(L instanceof u.$6Db) ||
							(await this.j.openCodeEditor(
								{
									resource: A.uri,
									options: {
										...D,
										selection: N
											? L.symbol.range
											: o.$iL.collapseToStart(L.symbol.selectionRange),
										selectionRevealType:
											f.TextEditorSelectionRevealType.NearTopIfOutsideViewport,
									},
								},
								this.g,
								M,
							));
					}
					preview(L) {
						if (!(L instanceof u.$6Db)) return i.$1c.None;
						const { symbol: D } = L;
						this.g.revealRangeInCenterIfOutsideViewport(
							D.range,
							p.ScrollType.Smooth,
						);
						const M = this.g.createDecorationsCollection([
							{
								range: D.range,
								options: {
									description: "document-symbols-outline-range-highlight",
									className: "rangeHighlight",
									isWholeLine: !0,
								},
							},
						]);
						return (0, i.$Yc)(() => M.clear());
					}
					captureViewState() {
						const L = this.g.saveViewState();
						return (0, i.$Yc)(() => {
							L && this.g.restoreViewState(L);
						});
					}
					async n(L) {
						if ((this.d.clear(), L || this.p(void 0), !this.g.hasModel()))
							return;
						const D = this.g.getModel();
						if (!this.h.documentSymbolProvider.has(D)) return;
						const M = new a.$Ce(),
							N = D.getVersionId(),
							A = new h.$Wh();
						this.d.add(A), this.d.add((0, i.$Yc)(() => M.dispose(!0)));
						try {
							const R = await this.k.getOrCreate(D, M.token);
							if (M.token.isCancellationRequested) return;
							if (u.$5Db.empty(R) || !this.g.hasModel()) {
								this.p(R);
								return;
							}
							if (L && this.c && D.getLineCount() >= 25) {
								const O = u.$5Db.size(R),
									B = D.getValueLength(),
									U = O / B,
									z = u.$5Db.size(this.c),
									F = B - L.changes.reduce((H, q) => H + q.rangeLength, 0),
									x = z / F;
								if (
									(U <= x * 0.5 || U >= x * 1.5) &&
									!(await (0, h.$Ah)(
										(0, h.$Nh)(2e3).then(() => !0),
										M.token,
										!1,
									))
								)
									return;
							}
							this.o(R),
								this.d.add(
									this.m.onDidChangeMarker((O) => {
										(0, v.$gh)(R.uri, O.uri) && (this.o(R), this.b.fire({}));
									}),
								),
								this.d.add(
									this.l.onDidChangeConfiguration((O) => {
										if (
											O.affectsConfiguration(
												w.OutlineConfigKeys.problemsEnabled,
											) ||
											O.affectsConfiguration("problems.visibility")
										) {
											const B = this.l.getValue("problems.visibility"),
												U = this.l.getValue(
													w.OutlineConfigKeys.problemsEnabled,
												);
											!B || !U ? R.updateMarker([]) : this.o(R),
												this.b.fire({});
										}
										O.affectsConfiguration("outline") && this.b.fire({}),
											O.affectsConfiguration("breadcrumbs") &&
												this.g.hasModel() &&
												(this.f.update(R, this.g.getPosition()),
												this.b.fire({}));
									}),
								),
								this.d.add(
									this.l.onDidChangeConfiguration((O) => {
										O.affectsConfiguration(w.OutlineConfigKeys.icons) &&
											this.b.fire({}),
											O.affectsConfiguration("outline") && this.b.fire({});
									}),
								),
								this.d.add(
									this.g.onDidChangeCursorPosition((O) => {
										A.cancelAndSet(() => {
											!D.isDisposed() &&
												N === D.getVersionId() &&
												this.g.hasModel() &&
												(this.f.update(R, this.g.getPosition()),
												this.b.fire({ affectOnlyActiveElement: !0 }));
										}, 150);
									}),
								),
								this.p(R);
						} catch (R) {
							this.p(void 0), (0, c.$4)(R);
						}
					}
					o(L) {
						const D = this.l.getValue("problems.visibility"),
							M = this.l.getValue(w.OutlineConfigKeys.problemsEnabled);
						if (!L || !D || !M) return;
						const N = [];
						for (const [A, R] of this.m.getLiveMarkers(L.uri))
							(R.severity === $.MarkerSeverity.Error ||
								R.severity === $.MarkerSeverity.Warning) &&
								N.push({ ...A, severity: R.severity });
						L.updateMarker(N);
					}
					p(L) {
						const D = this.g.getPosition();
						!D || !L
							? ((this.c = void 0), this.f.clear())
							: (this.c?.merge(L) || (this.c = L), this.f.update(L, D)),
							this.b.fire({});
					}
				};
				T = Ne(
					[
						j(3, S.$k3),
						j(4, b.$dtb),
						j(5, u.$9Db),
						j(6, s.$gj),
						j(7, y.$bub),
						j(8, n.$XO),
						j(9, g.$Li),
					],
					T,
				);
				let P = class {
					constructor(L) {
						const D = L.registerOutlineCreator(this);
						this.dispose = () => D.dispose();
					}
					matches(L) {
						const D = L.getControl();
						return (0, r.$0sb)(D) || (0, r.$$sb)(D);
					}
					async createOutline(L, D, M) {
						const N = L.getControl();
						let A;
						if (
							((0, r.$0sb)(N)
								? (A = N)
								: (0, r.$$sb)(N) && (A = N.getModifiedEditor()),
							!A)
						)
							return;
						const R = new h.$Lh(),
							O = A.invokeWithinContext((B) =>
								B.get(g.$Li).createInstance(T, A, D, R),
							);
						return await R.wait(), O;
					}
				};
				(P = Ne([j(0, w.$x4b)], P)),
					C.$Io
						.as(E.Extensions.Workbench)
						.registerWorkbenchContribution(P, d.LifecyclePhase.Eventually);
			},
		),
		define(
			de[3520],
			he([1, 0, 6, 3, 19, 10, 90, 70, 190, 475, 204, 1301]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$y4b = void 0);
				let h = class {
					constructor(n, g, p, o, f) {
						(this.h = n),
							(this.j = g),
							(this.k = p),
							(this.l = o),
							(this.m = f),
							(this.a = new i.$Zc()),
							(this.b = new t.$re()),
							(this.onDidChange = this.b.event),
							(this.d = []),
							(this.g = new a.$wOb(this.j)),
							this.recomputeState();
					}
					get activeElement() {
						return this.f;
					}
					get entries() {
						return this.d;
					}
					get isEmpty() {
						return this.d.length === 0;
					}
					get uri() {
						return this.c;
					}
					async computeFullSymbols(n) {
						const p = this.h
							?.getViewModel()
							?.viewCells.filter((o) => o.cellKind === d.CellKind.Code);
						if (p) {
							const o = [];
							for (const f of p.slice(0, 100))
								o.push(this.g.cacheSymbols(f, this.k, n));
							await Promise.allSettled(o);
						}
						this.recomputeState();
					}
					recomputeState() {
						if (
							(this.a.clear(),
							(this.f = void 0),
							(this.c = void 0),
							!this.h.hasModel())
						)
							return;
						this.c = this.h.textModel.uri;
						const n = this.h;
						if (n.getLength() === 0) return;
						const g = n.getViewModel().viewCells,
							p = [];
						for (const s of g) p.push(...this.g.getOutlineEntries(s, p.length));
						if (p.length > 0) {
							const s = [p[0]],
								l = [p[0]];
							for (let y = 1; y < p.length; y++) {
								const $ = p[y];
								for (;;) {
									const v = l.length;
									if (v === 0) {
										s.push($), l.push($);
										break;
									} else {
										const S = l[v - 1];
										if (S.level < $.level) {
											S.addChild($), l.push($);
											break;
										} else l.pop();
									}
								}
							}
							this.d = s;
						}
						const o = new i.$2c();
						this.a.add(o);
						const f = () => {
							if (n.isDisposed) return;
							const s = ($) => {
									for (const v of this.d)
										$ ? v.clearMarkers() : v.updateMarkers(this.l);
								},
								l = this.m.getValue("problems.visibility");
							if (l === void 0) return;
							const y = this.m.getValue(r.OutlineConfigKeys.problemsEnabled);
							l && y
								? ((o.value = this.l.onMarkerChanged(($) => {
										if (n.isDisposed) {
											console.error("notebook editor is disposed");
											return;
										}
										$.some((v) =>
											n.getCellsInRange().some((S) => (0, w.$gh)(S.uri, v)),
										) && (s(!1), this.b.fire({}));
									})),
									s(!1))
								: (o.clear(), s(!0));
						};
						f(),
							this.a.add(
								this.m.onDidChangeConfiguration((s) => {
									(s.affectsConfiguration("problems.visibility") ||
										s.affectsConfiguration(
											r.OutlineConfigKeys.problemsEnabled,
										)) &&
										(f(), this.b.fire({}));
								}),
							);
						const { changeEventTriggered: b } = this.recomputeActive();
						b || this.b.fire({});
					}
					recomputeActive() {
						let n;
						const g = this.h;
						if (g && g.hasModel() && g.getLength() > 0) {
							const p = g.cellAt(g.getFocus().start);
							if (p) {
								for (const o of this.d) if (((n = o.find(p, [])), n)) break;
							}
						}
						return n !== this.f
							? ((this.f = n),
								this.b.fire({ affectOnlyActiveElement: !0 }),
								{ changeEventTriggered: !0 })
							: { changeEventTriggered: !1 };
					}
					dispose() {
						(this.d.length = 0), (this.f = void 0), this.a.dispose();
					}
				};
				(e.$y4b = h),
					(e.$y4b = h =
						Ne([j(1, m.$d6), j(2, u.$9Db), j(3, C.$aM), j(4, E.$gj)], h));
			},
		),
		