define(de[814], he([1, 0, 109, 5]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$57 = e.$47 = void 0),
				(e.$37 = w);
			function w(C, d) {
				return `${typeof C == "string" ? C : t.$Gn.toKey(C)}|${d}`;
			}
			e.$47 = "timeline";
			const E = "timeline";
			e.$57 = (0, i.$Mi)(E);
		}),
		define(
			de[1003],
			he([1, 0, 17, 33, 945, 9, 48, 24, 29, 3, 31, 28, 67, 42]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$77 = e.$67 = e.TypeHierarchyDirection = void 0);
				var n;
				(function (f) {
					(f.Subtypes = "subtypes"), (f.Supertypes = "supertypes");
				})(n || (e.TypeHierarchyDirection = n = {})),
					(e.$67 = new w.$N1());
				class g {
					static async create(b, s, l) {
						const [y] = e.$67.ordered(b);
						if (!y) return;
						const $ = await y.prepareTypeHierarchy(b, s, l);
						if ($)
							return new g(
								$.roots.reduce((v, S) => v + S._sessionId, ""),
								y,
								$.roots,
								new r.$4c($),
							);
					}
					constructor(b, s, l, y) {
						(this.id = b),
							(this.provider = s),
							(this.roots = l),
							(this.ref = y),
							(this.root = l[0]);
					}
					dispose() {
						this.ref.release();
					}
					fork(b) {
						const s = this;
						return new (class extends g {
							constructor() {
								super(s.id, s.provider, [b], s.ref.acquire());
							}
						})();
					}
					async provideSupertypes(b, s) {
						try {
							const l = await this.provider.provideSupertypes(b, s);
							if ((0, d.$Pb)(l)) return l;
						} catch (l) {
							(0, m.$5)(l);
						}
						return [];
					}
					async provideSubtypes(b, s) {
						try {
							const l = await this.provider.provideSubtypes(b, s);
							if ((0, d.$Pb)(l)) return l;
						} catch (l) {
							(0, m.$5)(l);
						}
						return [];
					}
				}
				e.$77 = g;
				const p = new Map();
				u.$fk.registerCommand(
					"_executePrepareTypeHierarchy",
					async (f, ...b) => {
						const [s, l] = b;
						(0, a.$vg)(E.URI.isUri(s)), (0, a.$vg)(C.$hL.isIPosition(l));
						let $ = f.get(h.$QO).getModel(s),
							v;
						if (!$) {
							const I = await f.get(c.$MO).createModelReference(s);
							($ = I.object.textEditorModel), (v = I);
						}
						try {
							const S = await g.create($, l, i.CancellationToken.None);
							return S
								? (p.set(S.id, S),
									p.forEach((I, T, P) => {
										P.size > 10 && (I.dispose(), p.delete(T));
									}),
									[S.root])
								: [];
						} finally {
							v?.dispose();
						}
					},
				);
				function o(f) {
					const b = f;
					return (
						typeof f == "object" &&
						typeof b.name == "string" &&
						typeof b.kind == "number" &&
						E.URI.isUri(b.uri) &&
						t.$iL.isIRange(b.range) &&
						t.$iL.isIRange(b.selectionRange)
					);
				}
				u.$fk.registerCommand("_executeProvideSupertypes", async (f, ...b) => {
					const [s] = b;
					(0, a.$vg)(o(s));
					const l = p.get(s._sessionId);
					if (l) return l.provideSupertypes(s, i.CancellationToken.None);
				}),
					u.$fk.registerCommand("_executeProvideSubtypes", async (f, ...b) => {
						const [s] = b;
						(0, a.$vg)(o(s));
						const l = p.get(s._sessionId);
						if (l) return l.provideSubtypes(s, i.CancellationToken.None);
					});
			},
		),
		define(
			de[3187],
			he([1, 0, 1003, 33, 132, 325, 74, 37, 17, 4, 26]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$QYc =
						e.$PYc =
						e.$OYc =
						e.$NYc =
						e.$MYc =
						e.$LYc =
						e.Type =
							void 0);
				class a {
					constructor(s, l, y) {
						(this.item = s), (this.model = l), (this.parent = y);
					}
					static compare(s, l) {
						let y = (0, d.$Ff)(s.item.uri.toString(), l.item.uri.toString());
						return (
							y === 0 &&
								(y = m.$iL.compareRangesUsingStarts(
									s.item.range,
									l.item.range,
								)),
							y
						);
					}
				}
				e.Type = a;
				class h {
					constructor(s) {
						this.getDirection = s;
					}
					hasChildren() {
						return !0;
					}
					async getChildren(s) {
						if (s instanceof t.$77)
							return s.roots.map(($) => new a($, s, void 0));
						const { model: l, item: y } = s;
						return this.getDirection() === t.TypeHierarchyDirection.Supertypes
							? (await l.provideSupertypes(y, i.CancellationToken.None)).map(
									($) => new a($, l, s),
								)
							: (await l.provideSubtypes(y, i.CancellationToken.None)).map(
									($) => new a($, l, s),
								);
					}
				}
				e.$LYc = h;
				class c {
					compare(s, l) {
						return a.compare(s, l);
					}
				}
				e.$MYc = c;
				class n {
					constructor(s) {
						this.getDirection = s;
					}
					getId(s) {
						let l =
							this.getDirection() +
							JSON.stringify(s.item.uri) +
							JSON.stringify(s.item.range);
						return s.parent && (l += this.getId(s.parent)), l;
					}
				}
				e.$NYc = n;
				class g {
					constructor(s, l) {
						(this.icon = s), (this.label = l);
					}
				}
				class p {
					constructor() {
						this.templateId = p.id;
					}
					static {
						this.id = "TypeRenderer";
					}
					renderTemplate(s) {
						s.classList.add("typehierarchy-element");
						const l = document.createElement("div");
						s.appendChild(l);
						const y = new E.$Xob(s, { supportHighlights: !0 });
						return new g(l, y);
					}
					renderElement(s, l, y) {
						const { element: $, filterData: v } = s,
							S = $.item.tags?.includes(C.SymbolTag.Deprecated);
						y.icon.classList.add(
							"inline",
							...u.ThemeIcon.asClassNameArray(
								C.SymbolKinds.toIcon($.item.kind),
							),
						),
							y.label.setLabel($.item.name, $.item.detail, {
								labelEscapeNewLines: !0,
								matches: (0, w.$3k)(v),
								strikethrough: S,
							});
					}
					disposeTemplate(s) {
						s.label.dispose();
					}
				}
				e.$OYc = p;
				class o {
					getHeight(s) {
						return 22;
					}
					getTemplateId(s) {
						return p.id;
					}
				}
				e.$PYc = o;
				class f {
					constructor(s) {
						this.getDirection = s;
					}
					getWidgetAriaLabel() {
						return (0, r.localize)(11045, null);
					}
					getAriaLabel(s) {
						return this.getDirection() === t.TypeHierarchyDirection.Supertypes
							? (0, r.localize)(11046, null, s.item.name)
							: (0, r.localize)(11047, null, s.item.name);
					}
				}
				e.$QYc = f;
			},
		),
		define(
			de[1004],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 13, 7, 15]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$q$b = p);
				const c = (0, t.template)("<div><div>"),
					n = (0, t.template)("<div>");
				function g(o, f) {
					return Math.round(o.left) >= Math.round(f.left);
				}
				function p(o) {
					const [f, b] = (0, u.createSignal)([]);
					let s, l;
					const y = [],
						$ = new h.$Gh(),
						S = (0, a.$Ogb)()?.ResizeObserver,
						I = () => {
							if (!s) return;
							const T = s.getBoundingClientRect();
							$.queue(async () => {
								const P = [];
								let k = !1;
								for (let L = 0; L < y.length; L++) {
									const D = y[L];
									if (D) {
										const M = D.getBoundingClientRect(),
											N = g(M, T),
											A = (k || N) && M.width > 0;
										P.push(A), A && (k = !0);
									} else P.push(!1);
								}
								b(P);
							});
						};
					return (
						(0, u.createEffect)(() => {
							if (!s) return;
							const T = new S(() => {
								I();
							});
							T.observe(s),
								I(),
								(0, u.onCleanup)(() => {
									T.disconnect();
								});
						}),
						(0, u.createEffect)(() => {
							if (!l) return;
							const T = new S(() => {
								I();
							});
							T.observe(l),
								(0, u.onCleanup)(() => {
									T.disconnect();
								});
						}),
						(0, u.createEffect)(
							(0, u.on)(
								() => o.forceRerender,
								() => {
									I();
								},
							),
						),
						(() => {
							const T = c(),
								P = T.firstChild,
								k = s;
							typeof k == "function" ? (0, r.use)(k, T) : (s = T);
							const L = l;
							return (
								typeof L == "function" ? (0, r.use)(L, P) : (l = P),
								(0, d.spread)(
									P,
									(0, m.mergeProps)(
										{
											get style() {
												return {
													display: "flex",
													"justify-content": "flex-end",
													"justify-self": "flex-end",
													"flex-shrink": 0,
													position: "relative",
													...o.style,
												};
											},
										},
										o,
										{
											get class() {
												return o.class;
											},
										},
									),
									!1,
									!0,
								),
								(0, E.insert)(
									P,
									(0, C.createComponent)(u.For, {
										get each() {
											return o.children;
										},
										children: (D, M) =>
											(() => {
												const N = n();
												return (
													(0, r.use)((A) => {
														A && (y[M()] = A);
													}, N),
													N.style.setProperty("flex-shrink", "0"),
													N.style.setProperty("height", "100%"),
													(0, E.insert)(N, D),
													(0, w.effect)(
														(A) => {
															const R = f()[M()] ? 1 : 0,
																O = f()[M()] ? "auto" : "none",
																B =
																	f()[M()] && o.forceGap
																		? `${o.forceGap}px`
																		: void 0,
																U = o.noTransition
																	? "none"
																	: "opacity 0.1s ease-in-out";
															return (
																R !== A._v$ &&
																	((A._v$ = R) != null
																		? N.style.setProperty("opacity", R)
																		: N.style.removeProperty("opacity")),
																O !== A._v$2 &&
																	((A._v$2 = O) != null
																		? N.style.setProperty("pointer-events", O)
																		: N.style.removeProperty("pointer-events")),
																B !== A._v$3 &&
																	((A._v$3 = B) != null
																		? N.style.setProperty("margin-left", B)
																		: N.style.removeProperty("margin-left")),
																U !== A._v$4 &&
																	((A._v$4 = U) != null
																		? N.style.setProperty("transition", U)
																		: N.style.removeProperty("transition")),
																A
															);
														},
														{
															_v$: void 0,
															_v$2: void 0,
															_v$3: void 0,
															_v$4: void 0,
														},
													),
													N
												);
											})(),
									}),
								),
								(0, w.effect)((D) =>
									(0, i.style)(
										T,
										{
											overflow: "hidden",
											display: "flex",
											"justify-content": "flex-end",
											"align-items": "center",
											position: "relative",
											...o.outerContainerStyle,
										},
										D,
									),
								),
								T
							);
						})()
					);
				}
			},
		),
		define(
			de[815],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$fzc = u);
				const r = (0, t.template)("<div><div>");
				function u(a) {
					const h = () => a.onClose();
					return (0, i.createComponent)(m.Show, {
						get when() {
							return a.isOpen;
						},
						get children() {
							const c = r(),
								n = c.firstChild;
							return (
								c.addEventListener("click", h),
								n.addEventListener("click", (g) => g.stopPropagation()),
								(0, d.insert)(n, () => a.children),
								(0, C.effect)(
									(g) => {
										const p = {
												position: "fixed",
												top: 0,
												left: 0,
												width: "100%",
												height: "100%",
												"background-color": "rgba(0, 0, 0, 0.5)",
												display: "flex",
												"flex-direction": "column",
												"justify-content": "center",
												"align-items": "center",
												"z-index": 2549,
												...a.parentStyle,
											},
											o = a.class,
											f = {
												"background-color": "var(--vscode-editor-background)",
												padding: "12px",
												"border-radius": "4px",
												"box-shadow": "0 4px 20px rgba(0, 0, 0, 0.15)",
												width: "400px",
												display: "flex",
												"flex-direction": "column",
												gap: "12px",
												...a.style,
											};
										return (
											(g._v$ = (0, E.style)(c, p, g._v$)),
											o !== g._v$2 && (0, w.className)(n, (g._v$2 = o)),
											(g._v$3 = (0, E.style)(n, f, g._v$3)),
											g
										);
									},
									{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
								),
								c
							);
						},
					});
				}
			},
		),
		define(
			de[3188],
			he([1, 0, 7, 159, 6, 3, 56, 38, 31, 39, 45, 169, 5, 4, 2506]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$dAc = e.$aAc = void 0),
					(e.$bAc = g),
					(e.$cAc = p),
					(t = mt(t)),
					(e.$aAc = "aichat.insertselectionintochat");
				var n;
				(function (f) {
					let b;
					(function (l) {
						(l[(l.Hidden = 0)] = "Hidden"), (l[(l.Showing = 1)] = "Showing");
					})((b = f.Type || (f.Type = {}))),
						(f.Hidden = { type: b.Hidden });
					class s {
						constructor(y, $) {
							(this.editorPosition = y),
								(this.widgetPosition = $),
								(this.type = b.Showing);
						}
					}
					f.Showing = s;
				})(n || (n = {}));
				function g(f) {
					const b = p(f) - 80;
					let l = f.getOption(d.EditorOption.fontInfo).spaceWidth;
					return Math.floor(b / l);
				}
				function p(f) {
					let b = f.getLayoutInfo(),
						s = b.width - 50,
						l = b.decorationsWidth + b.verticalScrollbarWidth;
					return s - l;
				}
				let o = class extends E.$1c {
					static {
						this.a = [C.ContentWidgetPositionPreference.ABOVE];
					}
					constructor(b, s, l, y, $) {
						super(),
							(this.q = b),
							(this.r = s),
							(this.s = l),
							(this.t = y),
							(this.u = $),
							(this.g = this.D(new w.$re())),
							(this.onClick = this.g.event),
							(this.h = n.Hidden),
							(this.isWordWrap = !1),
							(this.b = t.$("div.aiEditorBoxCursorHoverWidget")),
							(this.f = t.$fhb(this.b, t.$("div.aiEditorBoxButtonContainer"))),
							(this.c = this.z(
								this.f,
								a.COMPOSER_EDIT_ACTION_ID,
								"Create composer",
							)),
							this.D(
								s.onDidUpdateKeybindings(() => {
									this.w();
								}),
							),
							this.D(i.$Qhb.ignoreTarget(this.b)),
							this.q.addContentWidget(this),
							(this.n = this.D(this.t.createScoped(this))),
							this.n.onChangeEffect({
								deps: [() => this.t.nonPersistentStorage.multiEditState],
								onChange: () => {
									this.hideButtons();
								},
								runNowToo: !0,
							}),
							this.n.onChangeEffect({
								deps: [
									() => this.t.nonPersistentStorage.shouldShowInsertChatWidget,
									() => this.t.nonPersistentStorage.promptBars,
								],
								onChange: () => {
									this._update();
								},
								runNowToo: !0,
							}),
							this.n.onChangeEffect({
								deps: [
									() => this.t.nonPersistentStorage.cppState,
									() => this.t.nonPersistentStorage.cppState?.suggestion,
								],
								onChange: () => {
									this.update();
								},
								runNowToo: !0,
							}),
							this.n.onChangeEffect({
								deps: [
									() =>
										this.t.applicationUserPersistentStorage.composerState
											.isComposerEnabled2,
								],
								onChange: () => {
									this._update();
								},
								runNowToo: !0,
							}),
							this.D(
								this.q.onDidChangeModelContent((v) => {
									const S = this.q.getModel();
									(this.C.type !== n.Type.Showing ||
										!S ||
										this.C.editorPosition.lineNumber >= S.getLineCount()) &&
										this.hide();
								}),
							),
							this.D(
								t.$_fb(this.c, (v) => {
									if (this.C.type !== n.Type.Showing) return;
									v.stopPropagation();
									const S = this.q.getModel();
									if (!S) return;
									const I = this.q.getSelection();
									!I ||
										I.isEmpty() ||
										l.executeCommand(
											a.COMPOSER_EDIT_FROM_SELECTION_ACTION_ID,
											S,
											I,
										);
								}),
							),
							this.D(
								t.$0fb(this.b, "mouseenter", (v) => {
									(v.buttons & 1) === 1 && this.hide();
								}),
							),
							this.D(this.q.onDidBlurEditorText(() => this.hide()));
					}
					w() {
						for (; this.f.firstChild; ) this.f.removeChild(this.f.firstChild);
						(this.c = this.z(
							this.f,
							a.COMPOSER_EDIT_ACTION_ID,
							"Create composer",
						)),
							this._update();
					}
					z(b, s, l) {
						const y = t.$fhb(b, t.$("button.aiEditorBoxHoverButton")),
							$ = t.$fhb(y, t.$("span"));
						$.textContent = l;
						const v = t.$fhb(y, t.$("span.aiEditorBoxCommandHelpText")),
							I = this.r.lookupKeybinding(s)?.getLabel() || "";
						return (v.textContent = I), y;
					}
					_update() {}
					hideButtons() {}
					dispose() {
						super.dispose(), this.q.removeContentWidget(this);
					}
					getId() {
						return "AIEditorBoxHoverWidget";
					}
					getDomNode() {
						return this.b;
					}
					getPosition() {
						return this.h.type === n.Type.Showing
							? this.h.widgetPosition
							: null;
					}
					updateShowingElements() {
						const b = this.q.getModel();
						if (!b) return;
						const s = this.t.nonPersistentStorage.cppState?.suggestion;
						s === void 0 || s?.uri.toString() !== b.uri.toString()
							? (this.f.style.display = "flex")
							: s.suggestionIsCurrentlyHidden
								? (this.f.style.display = "none")
								: (this.f.style.display = "none");
					}
					update() {
						const b = this.q.getOptions(),
							s = this.q.getModel();
						if (!s) return this.hide();
						let l = Number.MAX_VALUE;
						const y = this.q.getSelection();
						if (
							(y === null || y.isEmpty()) &&
							this.t.nonPersistentStorage.cppState?.suggestion?.uri.toString() !==
								s.uri.toString()
						)
							return this.hide();
						if (!this.q.hasTextFocus() && !this.q.hasWidgetFocus())
							return this.hide();
						this.updateShowingElements();
						const $ = this.q.getPosition();
						if (!$) return this.hide();
						const { lineNumber: v } = s.validatePosition($),
							S = y === null ? v : y.endLineNumber;
						let I = Math.max(
								1,
								Math.min(
									s.getLineCount(),
									$.lineNumber < 4 ? S + 3 : $.lineNumber - 2,
								),
							),
							T = $.column;
						const P = 25,
							k =
								y === null
									? $.lineNumber - 1
									: Math.max(
											$.lineNumber - 2,
											Math.floor(y.endLineNumber + y.startLineNumber) / 2 - 1,
										),
							L = this.isWordWrap ? 3 : 2,
							D = Math.max(1, $.lineNumber - L),
							M = Math.min(s.getLineCount() - 1, $.lineNumber + L);
						let N = C.ContentWidgetPositionPreference.BELOW;
						const A = g(this.q) - 10,
							R = (O, B, U, z) => {
								if (U !== O || s.getLineLength(Math.max(1, U)) >= A) return;
								const F = Math.abs(B - 5) + Math.abs(O - k) * P;
								F < l && ((l = F), (I = U), (T = B), (N = z));
							};
						for (let O = D; O <= M; O++) {
							let B = 0,
								U = 0;
							for (let z = O - 2; z <= O; z++) {
								const F = s.getLineLength(Math.max(1, z));
								F > B && ((B = F), (U = z));
							}
							R(O, B, U, C.ContentWidgetPositionPreference.ABOVE),
								(B = 0),
								(U = 0);
							for (let z = O; z <= O + 2; z++) {
								const F = s.getLineLength(Math.min(s.getLineCount(), z));
								F > B && ((B = F), (U = z));
							}
							R(O, B, U, C.ContentWidgetPositionPreference.BELOW),
								(B = 0),
								(U = 0);
							for (let z = O - 1; z <= O + 1; z++) {
								const F = s.getLineLength(
									Math.max(1, Math.min(s.getLineCount(), z)),
								);
								F > B && ((B = F), (U = z));
							}
							R(O, B, U, C.ContentWidgetPositionPreference.EXACT);
						}
						(this.C = new n.Showing($, {
							position: { lineNumber: I, column: T + 2 },
							preference: [N],
						})),
							this.q.layoutContentWidget(this);
					}
					hide() {
						this.C !== n.Hidden &&
							((this.C = n.Hidden), this.q.layoutContentWidget(this));
					}
					get C() {
						return this.h;
					}
					set C(b) {
						(this.h = b), this.F();
					}
					F() {
						if (this.C.type === n.Type.Showing && this.j) {
							this.G = (0, c.localize)(11048, null, this.j);
							return;
						}
						this.m
							? (this.G = (0, c.localize)(11049, null, this.m))
							: (this.G = (0, c.localize)(11050, null));
					}
					set G(b) {
						this.b.title = b;
					}
				};
				(e.$dAc = o),
					(e.$dAc = o =
						Ne([j(1, r.$uZ), j(2, m.$ek), j(3, u.$0zb), j(4, h.$Li)], o));
			},
		),
		define(
			de[3189],
			he([1, 0, 46, 149, 3, 38, 71, 69, 8, 5, 90, 45, 10, 3188]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				var n;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$eAc = void 0);
				let g = class extends w.$1c {
					static {
						n = this;
					}
					static {
						this.ID = "editor.contrib.aiEditorHoverController";
					}
					static get(o) {
						return o.getContribution(n.ID);
					}
					constructor(o, f, b, s, l, y, $) {
						super(),
							(this.h = s),
							(this.j = y),
							(this.m = $),
							(this.f = !1),
							(this.g = !1),
							(this.a = o),
							(this.c = C.EditorContextKeys.hasActivelyGeneratingDiff.bindTo(
								o.contextKeyService,
							)),
							this.D(this.a.onDidChangeModel(() => this.r())),
							this.D(this.a.onDidChangeModelLanguage(() => this.r())),
							this.D(this.a.onDidBlurEditorText(() => this.r())),
							this.D(this.a.onDidBlurEditorWidget(() => this.r())),
							this.D(this.a.onDidChangeCursorPosition(() => this.r())),
							this.D(
								this.a.onMouseDown(() => {
									(this.g = !0), this.r();
								}),
							),
							this.D(
								this.a.onMouseUp(() => {
									(this.g = !1), this.r();
								}),
							),
							(this.b = new i.$Y(() => {
								const S = this.D(s.createInstance(c.$dAc, this.a));
								return this.D(S.onClick((I) => {})), S;
							})),
							this.D(
								b.onDidChangeContext((S) => {
									S.affectsSome(
										new Set([
											C.EditorContextKeys.hasActivelyGeneratingDiff.key,
										]),
									) &&
										this.c.get() &&
										this.b.value.hide();
								}),
							),
							(this.reactiveStorageRoot = this.D(this.j.createScoped(this))),
							this.reactiveStorageRoot.onChangeEffect({
								deps: [
									() =>
										this.j.applicationUserPersistentStorage.hideChatEditTooltip,
								],
								onChange: () => {
									this.r();
								},
							});
						const v = () => {
							const S = this.a.getOptions(),
								I = S.get(E.EditorOption.wordWrapOverride2),
								T =
									I === "inherit" ? S.get(E.EditorOption.wordWrapOverride1) : I,
								k =
									(T === "inherit" ? S.get(E.EditorOption.wordWrap) : T) !==
									"off";
							this.b.value.isWordWrap = k;
						};
						if (
							(v(),
							this.D(
								this.a.onDidChangeConfiguration((S) => {
									v();
								}),
							),
							this.r(),
							!o.shouldShowHover)
						) {
							this.f = !0;
							return;
						}
					}
					n() {
						if (!this.a.hasModel()) return;
						const o = this.a.getModel(),
							f = this.a.getSelection();
						if (f.isEmpty()) {
							const { lineNumber: b, column: s } = f.getPosition(),
								l = o.getLineContent(b);
							if (l.length === 0) return;
							if (s === 1) {
								if (/\s/.test(l[0])) return;
							} else if (s === o.getLineMaxColumn(b)) {
								if (/\s/.test(l[l.length - 1])) return;
							} else if (/\s/.test(l[s - 2]) && /\s/.test(l[s - 1])) return;
						}
						return f;
					}
					q(o) {
						return o.startLineNumber !== o.endLineNumber;
					}
					r() {
						if (!this.a.shouldShowHover || this.f) return;
						const o = this.a.getModel();
						if (o?.uri.scheme !== "aiEditorBox-anysphere") {
							this.b.value.hide();
							return;
						}
						if (o && !this.a.getOption(E.EditorOption.readOnly)) {
							const f = this.n();
							!this.g && f ? this.b.value.update() : this.b.value.hide();
						}
					}
				};
				(e.$eAc = g),
					(e.$eAc =
						g =
						n =
							Ne(
								[
									j(1, u.$aM),
									j(2, m.$6j),
									j(3, r.$Li),
									j(4, d.$k3),
									j(5, a.$0zb),
									j(6, h.$gj),
								],
								g,
							)),
					(0, t.$qtb)(g.ID, g, t.EditorContributionInstantiation.Eventually);
			},
		),
		