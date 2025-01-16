define(de[18], he([1, 0, 5, 66]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$LY = e.$KY = e.$JY = e.$IY = void 0),
				(e.$MY = w),
				(e.$IY = (0, t.$Mi)("editorService")),
				(e.$JY = -1),
				(e.$KY = -2),
				(e.$LY = -3);
			function w(E) {
				const C = E;
				return typeof E == "number" || (0, i.$GY)(C);
			}
		}),
		define(
			de[1799],
			he([1, 0, 255, 5, 17, 7, 35, 18, 97, 66, 45, 309, 67, 61, 9, 11, 92, 8]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				var f;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zlc = void 0),
					(e.$Alc = y),
					(E = mt(E));
				const b = 10;
				function s() {
					let $ = "abcdefghijklmnopqrstuvwxyz",
						v = "";
					for (let S = 0; S < 10; S++)
						v += $.charAt(Math.floor(Math.random() * $.length));
					return v;
				}
				let l = class extends t.$9Mb {
					static {
						f = this;
					}
					static {
						this.TitleMenu = new g.$XX("cpp-diff-peek-view/title");
					}
					constructor(v, S, I, T, P, k, L, D, M, N, A, R, O) {
						super(
							v,
							{
								showFrame: !0,
								showArrow: !1,
								isResizeable: !0,
								isAccessible: !0,
							},
							L,
						),
							(this.r = S),
							(this.X = I),
							(this.Y = T),
							(this.Z = D),
							(this.ab = M),
							(this.bb = N),
							(this.cb = A),
							(this.db = R),
							(this.eb = O),
							(this.a = v),
							(this.b = P),
							(this.c = k),
							this.create(),
							this.fb(this.b.getColorTheme()),
							this.o.add(this.b.onDidColorThemeChange(this.fb, this)),
							this.o.add(this.ab.onDidChangeActiveGroup(() => this.dispose())),
							this.o.add(this.a.onDidDispose(() => this.dispose())),
							this.o.add(this.a.onDidChangeModel(() => this.dispose())),
							this.o.add(
								this.Z.onChangeEffectManuallyDisposed({
									deps: [
										() =>
											this.Z.nonPersistentStorage.cppState?.peekViewSuggestion,
									],
									onChange: ({ prevDeps: B, deps: U }) => {
										const z = B?.[0],
											F = U?.[0];
										!z && !F && this.dispose();
									},
								}),
							),
							this.o.add(
								this.Z.onChangeEffectManuallyDisposed({
									deps: [
										() => this.Z.nonPersistentStorage.cppState?.suggestion,
									],
									onChange: ({ prevDeps: B, deps: U }) => {
										U?.[0] && this.dispose();
									},
								}),
							),
							this.gb();
					}
					dispose() {
						this.o.dispose(), super.dispose();
					}
					fb(v) {
						const S = v.getColor(t.$aNb) || m.$UL.transparent;
						this.style({
							arrowColor: S,
							frameColor: S,
							headerBackgroundColor: v.getColor(t.$0Mb) || m.$UL.transparent,
							primaryHeadingColor: v.getColor(t.$$Mb),
							secondaryHeadingColor: v.getColor(t.$_Mb),
						});
					}
					gb() {
						this.x || super.show(w.$iL.fromPositions(this.r), b), (this.x = !0);
					}
					P(v) {
						const S = E.$(".cpp-peek-view-title", {});
						v.appendChild(S),
							(v.style.zIndex = "1000"),
							(v.style.position = "relative"),
							(v.style.padding = "0 8px");
						const I = E.$fhb(S, E.$("div.cpp-peek-view-title-text"));
						(I.textContent = "Cursor Tab Preview"),
							(this.d = S),
							super.P(v),
							this.o.add(
								this.K.actionRunner.onWillRun(() => this.editor.focus()),
							);
						const T = this.db.createMenu(f.TitleMenu, this.eb),
							P = () => {
								const k = [];
								(0, p.$Kyb)(T, void 0, k);
								const L = this.K.getAction(this.K.viewItems.length - 1);
								this.K.clear(),
									this.K.push(k, { label: !1, icon: !0 }),
									L && this.K.push([L], { label: !1, icon: !0 });
							};
						this.o.add(T), this.o.add(T.onDidChange(P)), P();
					}
					T(v) {
						this.m = v;
						const S = this.a.getModel();
						if (!S) return;
						const I = this.cb.createById(S.getLanguageId()),
							T = this.bb.createModel(
								this.X.original,
								I,
								n.URI.parse(`cpp-diff-peek-view-widget-anysphere://${s()}`),
							),
							P = this.cb.createById(T.getLanguageId()),
							k = this.bb.createModel(
								this.X.new,
								P,
								n.URI.parse(`cpp-diff-peek-view-widget-anysphere://${s()}`),
							),
							L = this.editor.getLayoutInfo(),
							D = this.M.createInstance(
								a.$3yb,
								v,
								{
									stickyScroll: { enabled: !1 },
									readOnly: !0,
									renderSideBySide: !1,
									dimension: { width: this.t(L), height: v.clientHeight },
								},
								{
									originalEditor: { isSimpleWidget: !0, contributions: [] },
									modifiedEditor: { isSimpleWidget: !0, contributions: [] },
								},
							);
						D.setModel({ original: T, modified: k }),
							D.waitForDiff().then(() => {
								D.revealFirstDiff();
							});
						const M = new ResizeObserver(() => {
							const N = this.editor.getLayoutInfo();
							D.layout({ width: this.t(N), height: v.clientHeight });
						});
						M.observe(v),
							this.o.add({
								dispose: () => {
									M.disconnect();
								},
							}),
							(this.diffEditor = D);
					}
				};
				(e.$zlc = l),
					(e.$zlc =
						l =
						f =
							Ne(
								[
									j(4, C.$iP),
									j(5, d.$IY),
									j(6, i.$Li),
									j(7, u.$0zb),
									j(8, r.$EY),
									j(9, h.$QO),
									j(10, c.$nM),
									j(11, g.$YX),
									j(12, o.$6j),
								],
								l,
							));
				function y($, v, S, I, T) {
					return T.createInstance(l, $, v, S, I);
				}
			},
		),
		define(
			de[824],
			he([1, 0, 6, 3, 19, 56, 281, 38, 248, 64, 122, 1676, 11, 8, 5, 39, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$w4b = e.$v4b = e.$u4b = void 0);
				let f = class extends i.$1c {
					static {
						o = this;
					}
					constructor(y) {
						super(),
							(this.g = y),
							(this.a = this.D(new t.$re())),
							(this.onHighlightRemoved = this.a.event),
							(this.b = null),
							(this.c = null),
							(this.f = this.D(new i.$Zc()));
					}
					removeHighlightRange() {
						if (this.c && this.b) {
							const y = this.b;
							this.c.changeDecorations(($) => {
								$.removeDecoration(y);
							}),
								this.a.fire();
						}
						this.b = null;
					}
					highlightRange(y, $) {
						($ = $ ?? this.j(y)),
							(0, E.$0sb)($)
								? this.h($, y)
								: (0, E.$atb)($) &&
									(0, E.$0sb)($.activeCodeEditor) &&
									this.h($.activeCodeEditor, y);
					}
					h(y, $) {
						this.removeHighlightRange(),
							y.changeDecorations((v) => {
								this.b = v.addDecoration($.range, this.r($.isWholeLine));
							}),
							this.m(y);
					}
					j(y) {
						const $ = this.g.activeEditor?.resource;
						if (
							$ &&
							(0, w.$gh)($, y.resource) &&
							(0, E.$0sb)(this.g.activeTextEditorControl)
						)
							return this.g.activeTextEditorControl;
					}
					m(y) {
						this.c !== y &&
							(this.f.clear(),
							(this.c = y),
							this.f.add(
								this.c.onDidChangeCursorPosition(($) => {
									($.reason === m.CursorChangeReason.NotSet ||
										$.reason === m.CursorChangeReason.Explicit ||
										$.reason === m.CursorChangeReason.Undo ||
										$.reason === m.CursorChangeReason.Redo) &&
										this.removeHighlightRange();
								}),
							),
							this.f.add(
								this.c.onDidChangeModel(() => {
									this.removeHighlightRange();
								}),
							),
							this.f.add(
								this.c.onDidDispose(() => {
									this.removeHighlightRange(), (this.c = null);
								}),
							));
					}
					static {
						this.n = u.$eY.register({
							description: "codeeditor-range-highlight-whole",
							stickiness: r.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							className: "rangeHighlight",
							isWholeLine: !0,
						});
					}
					static {
						this.q = u.$eY.register({
							description: "codeeditor-range-highlight",
							stickiness: r.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							className: "rangeHighlight",
						});
					}
					r(y = !0) {
						return y ? o.n : o.q;
					}
					dispose() {
						super.dispose(),
							this.c?.getModel() &&
								(this.removeHighlightRange(), (this.c = null));
					}
				};
				(e.$u4b = f), (e.$u4b = f = o = Ne([j(0, p.$IY)], f));
				let b = class extends a.$r4b {
					constructor(y, $, v, S) {
						super(
							v && S.lookupKeybinding(v)
								? `${$} (${S.lookupKeybinding(v).getLabel()})`
								: $,
						),
							(this.g = y);
					}
					getId() {
						return "editor.overlayWidget.floatingClickWidget";
					}
					getPosition() {
						return {
							preference: E.OverlayWidgetPositionPreference.BOTTOM_RIGHT_CORNER,
						};
					}
					render() {
						super.render(), this.g.addOverlayWidget(this);
					}
					dispose() {
						this.g.removeOverlayWidget(this), super.dispose();
					}
				};
				(e.$v4b = b), (e.$v4b = b = Ne([j(3, g.$uZ)], b));
				let s = class extends a.$s4b {
					static {
						this.ID = "editor.contrib.floatingClickMenu";
					}
					constructor(y, $, v, S) {
						super(h.$XX.EditorContent, v, S),
							(this.m = y),
							(this.n = $),
							this.f();
					}
					g(y) {
						return this.n.createInstance(b, this.m, y.label, y.id);
					}
					j() {
						return (
							!(this.m instanceof C.$wDb) &&
							this.m?.hasModel() &&
							!this.m.getOption(d.EditorOption.inDiffEditor)
						);
					}
					h() {
						return this.m.getModel()?.uri;
					}
				};
				(e.$w4b = s),
					(e.$w4b = s = Ne([j(1, n.$Li), j(2, h.$YX), j(3, c.$6j)], s));
			},
		),
		define(
			de[1015],
			he([1, 0, 4, 63, 392, 66, 44, 18, 67, 61, 252, 322, 14, 26, 2341]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				var n, g, p;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$uVb = e.$tVb = e.$sVb = e.$rVb = void 0);
				let o = class extends w.$GLb {
					constructor(y, $, v, S, I) {
						super(y, {
							canAcceptInBackground: !0,
							noResultsPick: {
								label: (0, t.localize)(3478, null),
								groupId: -1,
							},
						}),
							(this.b = $),
							(this.h = v),
							(this.j = S),
							(this.m = I),
							(this.a = new (class {
								constructor() {
									(this.scorerCache = Object.create(null)),
										(this.isQuickNavigating = void 0);
								}
								reset(T) {
									T || (this.scorerCache = Object.create(null)),
										(this.isQuickNavigating = T);
								}
							})());
					}
					provide(y, $) {
						return this.a.reset(!!y.quickNavigate), super.provide(y, $);
					}
					g(y) {
						const $ = (0, a.$hs)(y),
							v = this.q().filter((I) => {
								if (!$.normalized) return !0;
								const T = (0, a.$fs)(I, $, !0, i.$CJ, this.a.scorerCache);
								return T.score
									? ((I.highlights = {
											label: T.labelMatch,
											description: T.descriptionMatch,
										}),
										!0)
									: !1;
							});
						if ($.normalized) {
							const I = this.b
								.getGroups(E.GroupsOrder.GRID_APPEARANCE)
								.map((T) => T.id);
							v.sort((T, P) =>
								T.groupId !== P.groupId
									? I.indexOf(T.groupId) - I.indexOf(P.groupId)
									: (0, a.$gs)(T, P, $, !0, i.$CJ, this.a.scorerCache),
							);
						}
						const S = [];
						if (this.b.count > 1) {
							let I;
							for (const T of v) {
								if (typeof I != "number" || I !== T.groupId) {
									const P = this.b.getGroup(T.groupId);
									P && S.push({ type: "separator", label: P.label }),
										(I = T.groupId);
								}
								S.push(T);
							}
						} else S.push(...v);
						return S;
					}
					q() {
						const y = this.r(),
							$ = new Map();
						for (const { groupId: v } of y)
							if (!$.has(v)) {
								const S = this.b.getGroup(v);
								S && $.set(v, S.ariaLabel);
							}
						return this.r().map(({ editor: v, groupId: S }) => {
							const I = C.$A1.getOriginalUri(v, {
									supportSideBySide: C.SideBySideEditor.PRIMARY,
								}),
								T = v.isDirty() && !v.isSaving(),
								P = v.getDescription(),
								k = P ? `${v.getName()} ${P}` : v.getName();
							return {
								groupId: S,
								resource: I,
								label: v.getName(),
								ariaLabel:
									$.size > 1
										? T
											? (0, t.localize)(3479, null, k, $.get(S))
											: (0, t.localize)(3480, null, k, $.get(S))
										: T
											? (0, t.localize)(3481, null, k)
											: k,
								description: P,
								iconClasses: (0, u.$BDb)(
									this.j,
									this.m,
									I,
									void 0,
									v.getIcon(),
								).concat(v.getLabelExtraClasses()),
								italic: !this.b.getGroup(S)?.isPinned(v),
								buttons: [
									{
										iconClass: T
											? "dirty-editor " +
												c.ThemeIcon.asClassName(h.$ak.closeDirty)
											: c.ThemeIcon.asClassName(h.$ak.close),
										tooltip: (0, t.localize)(3482, null),
										alwaysVisible: T,
									},
								],
								trigger: async () => {
									const L = this.b.getGroup(S);
									return L &&
										(await L.closeEditor(v, { preserveFocus: !0 }),
										!L.contains(v))
										? w.TriggerAction.REMOVE_ITEM
										: w.TriggerAction.NO_ACTION;
								},
								accept: (L, D) =>
									this.b
										.getGroup(S)
										?.openEditor(v, { preserveFocus: D.inBackground }),
							};
						});
					}
				};
				(e.$rVb = o),
					(e.$rVb = o =
						Ne([j(1, E.$EY), j(2, d.$IY), j(3, m.$QO), j(4, r.$nM)], o));
				let f = class extends o {
					static {
						n = this;
					}
					static {
						this.PREFIX = "edt active ";
					}
					constructor(y, $, v, S) {
						super(n.PREFIX, y, $, v, S);
					}
					r() {
						const y = this.b.activeGroup;
						return y
							.getEditors(C.EditorsOrder.MOST_RECENTLY_ACTIVE)
							.map(($) => ({ editor: $, groupId: y.id }));
					}
				};
				(e.$sVb = f),
					(e.$sVb =
						f =
						n =
							Ne([j(0, E.$EY), j(1, d.$IY), j(2, m.$QO), j(3, r.$nM)], f));
				let b = class extends o {
					static {
						g = this;
					}
					static {
						this.PREFIX = "edt ";
					}
					constructor(y, $, v, S) {
						super(g.PREFIX, y, $, v, S);
					}
					r() {
						const y = [];
						for (const $ of this.b.getGroups(E.GroupsOrder.GRID_APPEARANCE))
							for (const v of $.getEditors(C.EditorsOrder.SEQUENTIAL))
								y.push({ editor: v, groupId: $.id });
						return y;
					}
				};
				(e.$tVb = b),
					(e.$tVb =
						b =
						g =
							Ne([j(0, E.$EY), j(1, d.$IY), j(2, m.$QO), j(3, r.$nM)], b));
				let s = class extends o {
					static {
						p = this;
					}
					static {
						this.PREFIX = "edt mru ";
					}
					constructor(y, $, v, S) {
						super(p.PREFIX, y, $, v, S);
					}
					r() {
						const y = [];
						for (const $ of this.h.getEditors(
							C.EditorsOrder.MOST_RECENTLY_ACTIVE,
						))
							y.push($);
						return y;
					}
				};
				(e.$uVb = s),
					(e.$uVb =
						s =
						p =
							Ne([j(0, E.$EY), j(1, d.$IY), j(2, m.$QO), j(3, r.$nM)], s));
			},
		),
		define(
			de[1016],
			he([1, 0, 6, 44, 217, 21, 5, 32, 35, 125, 66, 18, 3]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zVb = void 0);
				let c = class extends w.$JEb {
					constructor(g, p, o, f, b, s, l, y, $, v) {
						super(g, p, f, y, s),
							(this.m = b),
							(this.s = l),
							(this.u = $),
							(this.cb = v),
							(this.g = this.D(new h.$2c())),
							(this.b = this.ab(v, l, o, 100));
					}
					Z(g) {
						(this.g.value = this.group.onWillCloseEditor((p) => this.eb(p))),
							super.Z(g);
					}
					eb(g) {
						const p = g.editor;
						p === this.input && this.gb(p);
					}
					clearInput() {
						this.gb(this.input), super.clearInput();
					}
					I() {
						this.gb(this.input), super.I();
					}
					gb(g) {
						if (!g || !this.nb(g)) return;
						const p = this.pb(g);
						p &&
							(this.ob() ||
								(this.j || (this.j = new Map()),
								this.j.has(g) ||
									this.j.set(
										g,
										t.Event.once(g.onWillDispose)(() => {
											this.lb(p, this.group), this.j?.delete(g);
										}),
									)),
							(g.isDisposed() && !this.ob()) ||
							(!this.hb(g) && !this.group.contains(g))
								? this.lb(p, this.group)
								: g.isDisposed() || this.ib(p));
					}
					hb(g, p) {
						return p?.newInGroup
							? this.s.getValue(
									i.$A1.getOriginalUri(g, {
										supportSideBySide: i.SideBySideEditor.PRIMARY,
									}),
									"workbench.editor.restoreViewState",
								) !== !1
							: !0;
					}
					getViewState() {
						const g = this.input;
						if (!g || !this.nb(g)) return;
						const p = this.pb(g);
						if (p) return this.mb(p);
					}
					ib(g) {
						const p = this.mb(g);
						p && this.b.saveEditorState(this.group, g, p);
					}
					jb(g, p) {
						if (!g || !this.nb(g) || !this.hb(g, p)) return;
						const o = this.pb(g);
						if (o) return this.b.loadEditorState(this.group, o);
					}
					kb(g, p, o) {
						return this.b.moveEditorState(g, p, o);
					}
					lb(g, p) {
						this.b.clearEditorState(g, p);
					}
					dispose() {
						if ((super.dispose(), this.j)) {
							for (const [, g] of this.j) g.dispose();
							this.j = void 0;
						}
					}
					ob() {
						return !1;
					}
				};
				(e.$zVb = c),
					(e.$zVb = c =
						Ne(
							[
								j(3, d.$km),
								j(4, C.$Li),
								j(5, E.$lq),
								j(6, r.$XO),
								j(7, m.$iP),
								j(8, a.$IY),
								j(9, u.$EY),
							],
							c,
						));
			},
		),
		define(
			de[473],
			he([1, 0, 4, 8, 39, 63, 3, 56, 66, 18]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$k9b = e.$i9b = e.$h9b = e.$g9b = e.$f9b = e.$e9b = void 0),
					(e.$j9b = u),
					(e.$e9b = "inQuickOpen"),
					(e.$f9b = new i.$5j(e.$e9b, !1, (0, t.localize)(3754, null))),
					(e.$g9b = i.$Kj.has(e.$e9b)),
					(e.$h9b = "inFilesPicker"),
					(e.$i9b = i.$Kj.and(e.$g9b, i.$Kj.has(e.$h9b)));
				function u(h, c) {
					return (n) => {
						const g = n.get(w.$uZ),
							p = n.get(E.$DJ),
							f = { keybindings: g.lookupKeybindings(h) };
						p.navigate(!!c, f);
					};
				}
				let a = class extends C.$1c {
					constructor(c, n) {
						super(),
							(this.c = c),
							(this.f = n),
							(this.a = void 0),
							(this.b = new Set());
					}
					set() {
						if (this.a) return;
						const c = this.c.activeEditorPane;
						c &&
							(this.a = {
								group: c.group,
								editor: c.input,
								state: (0, d.$ctb)(c.getControl())?.saveViewState() ?? void 0,
							});
					}
					async openTransientEditor(c, n) {
						c.options = { ...c.options, transient: !0 };
						const g = await this.c.openEditor(c, n);
						return (
							g?.input &&
								g.input !== this.a?.editor &&
								g.group.isTransient(g.input) &&
								this.b.add(g.input),
							g
						);
					}
					async restore() {
						if (this.a) {
							for (const c of this.b)
								if (!c.isDirty())
									for (const n of this.f.groups)
										n.isTransient(c) &&
											(await n.closeEditor(c, { preserveFocus: !0 }));
							await this.a.group.openEditor(this.a.editor, {
								viewState: this.a.state,
								preserveFocus: !0,
							}),
								this.reset();
						}
					}
					reset() {
						(this.a = void 0), this.b.clear();
					}
					dispose() {
						super.dispose(), this.reset();
					}
				};
				(e.$k9b = a), (e.$k9b = a = Ne([j(0, r.$IY), j(1, m.$EY)], a));
			},
		),
		define(
			de[3256],
			he([1, 0, 4, 11, 27, 43, 63, 39, 31, 473, 14]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				const a = {
					primary: w.KeyMod.CtrlCmd | w.KeyCode.KeyP,
					secondary: [w.KeyMod.CtrlCmd | w.KeyCode.KeyE],
					mac: {
						primary: w.KeyMod.CtrlCmd | w.KeyCode.KeyP,
						secondary: void 0,
					},
				};
				E.$TX.registerCommandAndKeybindingRule({
					id: "workbench.action.closeQuickOpen",
					weight: E.KeybindingWeight.WorkbenchContrib,
					when: r.$g9b,
					primary: w.KeyCode.Escape,
					secondary: [w.KeyMod.Shift | w.KeyCode.Escape],
					handler: (b) => b.get(C.$DJ).cancel(),
				}),
					E.$TX.registerCommandAndKeybindingRule({
						id: "workbench.action.acceptSelectedQuickOpenItem",
						weight: E.KeybindingWeight.WorkbenchContrib,
						when: r.$g9b,
						primary: 0,
						handler: (b) => b.get(C.$DJ).accept(),
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: "workbench.action.alternativeAcceptSelectedQuickOpenItem",
						weight: E.KeybindingWeight.WorkbenchContrib,
						when: r.$g9b,
						primary: 0,
						handler: (b) => b.get(C.$DJ).accept({ ctrlCmd: !0, alt: !1 }),
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: "workbench.action.focusQuickOpen",
						weight: E.KeybindingWeight.WorkbenchContrib,
						when: r.$g9b,
						primary: 0,
						handler: (b) => {
							b.get(C.$DJ).focus();
						},
					});
				const h = "workbench.action.quickOpenNavigateNextInFilePicker";
				E.$TX.registerCommandAndKeybindingRule({
					id: h,
					weight: E.KeybindingWeight.WorkbenchContrib + 50,
					handler: (0, r.$j9b)(h, !0),
					when: r.$i9b,
					primary: a.primary,
					secondary: a.secondary,
					mac: a.mac,
				});
				const c = "workbench.action.quickOpenNavigatePreviousInFilePicker";
				E.$TX.registerCommandAndKeybindingRule({
					id: c,
					weight: E.KeybindingWeight.WorkbenchContrib + 50,
					handler: (0, r.$j9b)(c, !1),
					when: r.$i9b,
					primary: a.primary | w.KeyMod.Shift,
					secondary: [a.secondary[0] | w.KeyMod.Shift],
					mac: { primary: a.mac.primary | w.KeyMod.Shift, secondary: void 0 },
				}),
					E.$TX.registerCommandAndKeybindingRule({
						id: "workbench.action.quickPickManyToggle",
						weight: E.KeybindingWeight.WorkbenchContrib,
						when: r.$g9b,
						primary: 0,
						handler: (b) => {
							b.get(C.$DJ).toggle();
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: "workbench.action.quickInputBack",
						weight: E.KeybindingWeight.WorkbenchContrib + 50,
						when: r.$g9b,
						primary: 0,
						win: { primary: w.KeyMod.Alt | w.KeyCode.LeftArrow },
						mac: { primary: w.KeyMod.WinCtrl | w.KeyCode.Minus },
						linux: {
							primary: w.KeyMod.CtrlCmd | w.KeyMod.Alt | w.KeyCode.Minus,
						},
						handler: (b) => {
							b.get(C.$DJ).back();
						},
					}),
					(0, i.$4X)(
						class extends i.$3X {
							constructor() {
								super({
									id: "workbench.action.quickOpen",
									title: (0, t.localize2)(2940, "Go to File..."),
									metadata: {
										description: "Quick access",
										args: [{ name: "prefix", schema: { type: "string" } }],
									},
									keybinding: {
										weight: E.KeybindingWeight.WorkbenchContrib,
										primary: a.primary,
										secondary: a.secondary,
										mac: a.mac,
									},
									f1: !0,
								});
							}
							run(s, l) {
								s.get(C.$DJ).quickAccess.show(
									typeof l == "string" ? l : void 0,
									{ preserveValue: typeof l == "string" },
								);
							}
						},
					),
					(0, i.$4X)(
						class extends i.$3X {
							constructor() {
								super({
									id: "workbench.action.quickOpenWithModes",
									title: (0, t.localize)(2939, null),
									icon: u.$ak.search,
									menu: { id: i.$XX.CommandCenterCenter, order: 100 },
								});
							}
							run(s) {
								const l = s.get(C.$DJ),
									y = { includeHelp: !0, from: "commandCenter" };
								l.quickAccess.show(void 0, {
									preserveValue: !0,
									providerOptions: y,
								});
							}
						},
					),
					m.$fk.registerCommand(
						"workbench.action.quickOpenPreviousEditor",
						async (b) => {
							b.get(C.$DJ).quickAccess.show("", {
								itemActivation: C.ItemActivation.SECOND,
							});
						},
					);
				class n extends i.$3X {
					constructor(s, l, y, $, v) {
						super({ id: s, title: l, f1: !0, keybinding: v }),
							(this.a = s),
							(this.b = y),
							(this.c = $);
					}
					async run(s) {
						const l = s.get(d.$uZ),
							y = s.get(C.$DJ),
							$ = l.lookupKeybindings(this.a),
							v = this.c ? { keybindings: $ } : void 0;
						y.navigate(this.b, v);
					}
				}
				class g extends n {
					constructor() {
						super(
							"workbench.action.quickOpenNavigateNext",
							(0, t.localize2)(2941, "Navigate Next in Quick Open"),
							!0,
							!0,
						);
					}
				}
				class p extends n {
					constructor() {
						super(
							"workbench.action.quickOpenNavigatePrevious",
							(0, t.localize2)(2942, "Navigate Previous in Quick Open"),
							!1,
							!0,
						);
					}
				}
				class o extends n {
					constructor() {
						super(
							"workbench.action.quickOpenSelectNext",
							(0, t.localize2)(2943, "Select Next in Quick Open"),
							!0,
							!1,
							{
								weight: E.KeybindingWeight.WorkbenchContrib + 50,
								when: r.$g9b,
								primary: 0,
								mac: { primary: w.KeyMod.WinCtrl | w.KeyCode.KeyN },
							},
						);
					}
				}
				class f extends n {
					constructor() {
						super(
							"workbench.action.quickOpenSelectPrevious",
							(0, t.localize2)(2944, "Select Previous in Quick Open"),
							!1,
							!1,
							{
								weight: E.KeybindingWeight.WorkbenchContrib + 50,
								when: r.$g9b,
								primary: 0,
								mac: { primary: w.KeyMod.WinCtrl | w.KeyCode.KeyP },
							},
						);
					}
				}
				(0, i.$4X)(o), (0, i.$4X)(f), (0, i.$4X)(g), (0, i.$4X)(p);
			},
		),
		define(
			de[313],
			he([1, 0, 6, 4, 30, 44, 223, 18]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				var m;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kY = e.$jY = e.$iY = void 0);
				let r = class extends C.$LO {
					static {
						m = this;
					}
					static {
						this.ID = "workbench.editorinputs.sidebysideEditorInput";
					}
					get typeId() {
						return m.ID;
					}
					get capabilities() {
						let c = this.primary.capabilities;
						return (
							(c &= ~E.EditorInputCapabilities.CanSplitInGroup),
							this.secondary.hasCapability(
								E.EditorInputCapabilities.RequiresTrust,
							) && (c |= E.EditorInputCapabilities.RequiresTrust),
							this.secondary.hasCapability(
								E.EditorInputCapabilities.Singleton,
							) && (c |= E.EditorInputCapabilities.Singleton),
							(c |= E.EditorInputCapabilities.MultipleEditors),
							c
						);
					}
					get resource() {
						if (this.a) return this.primary.resource;
					}
					constructor(c, n, g, p, o) {
						super(),
							(this.c = c),
							(this.h = n),
							(this.secondary = g),
							(this.primary = p),
							(this.m = o),
							(this.a = this.primary.matches(this.secondary)),
							this.n();
					}
					n() {
						this.D(
							t.Event.once(
								t.Event.any(
									this.primary.onWillDispose,
									this.secondary.onWillDispose,
								),
							)(() => {
								this.isDisposed() || this.dispose();
							}),
						),
							this.D(this.primary.onDidChangeDirty(() => this.b.fire())),
							this.D(this.primary.onDidChangeCapabilities(() => this.g.fire())),
							this.D(
								this.secondary.onDidChangeCapabilities(() => this.g.fire()),
							),
							this.D(this.primary.onDidChangeLabel(() => this.f.fire())),
							this.D(this.secondary.onDidChangeLabel(() => this.f.fire()));
					}
					getName() {
						const c = this.getPreferredName();
						return (
							c ||
							(this.a
								? this.primary.getName()
								: (0, i.localize)(
										4079,
										null,
										this.secondary.getName(),
										this.primary.getName(),
									))
						);
					}
					getPreferredName() {
						return this.c;
					}
					getDescription(c) {
						const n = this.getPreferredDescription();
						return (
							n ||
							(this.a
								? this.primary.getDescription(c)
								: super.getDescription(c))
						);
					}
					getPreferredDescription() {
						return this.h;
					}
					getTitle(c) {
						let n;
						this.a
							? (n = this.primary.getTitle(c) ?? this.getName())
							: (n = super.getTitle(c));
						const g = this.q();
						return g && (n = `${g} (${n})`), n;
					}
					q() {
						if (this.c && this.h) return `${this.c} ${this.h}`;
						if (this.c || this.h) return this.c ?? this.h;
					}
					getLabelExtraClasses() {
						return this.a
							? this.primary.getLabelExtraClasses()
							: super.getLabelExtraClasses();
					}
					getAriaLabel() {
						return this.a ? this.primary.getAriaLabel() : super.getAriaLabel();
					}
					getTelemetryDescriptor() {
						return {
							...this.primary.getTelemetryDescriptor(),
							...super.getTelemetryDescriptor(),
						};
					}
					isDirty() {
						return this.primary.isDirty();
					}
					isSaving() {
						return this.primary.isSaving();
					}
					async save(c, n) {
						const g = await this.primary.save(c, n);
						return this.r(g);
					}
					async saveAs(c, n) {
						const g = await this.primary.saveAs(c, n);
						return this.r(g);
					}
					r(c) {
						if (!c || !this.a) return c;
						if (this.primary.matches(c)) return this;
						if (c instanceof C.$LO) return new m(this.c, this.h, c, c, this.m);
						if (
							!(0, E.$j1)(c) &&
							!(0, E.$k1)(c) &&
							!(0, E.$m1)(c) &&
							!(0, E.$o1)(c) &&
							!(0, E.$l1)(c)
						)
							return {
								primary: c,
								secondary: c,
								label: this.c,
								description: this.h,
							};
					}
					revert(c, n) {
						return this.primary.revert(c, n);
					}
					async rename(c, n) {
						if (!this.a) return;
						const g = await this.primary.rename(c, n);
						if (g) {
							if ((0, E.$r1)(g.editor))
								return {
									editor: new m(this.c, this.h, g.editor, g.editor, this.m),
									options: {
										...g.options,
										viewState: (0, E.$h1)(this, c, this.m),
									},
								};
							if ((0, E.$i1)(g.editor))
								return {
									editor: {
										label: this.c,
										description: this.h,
										primary: g.editor,
										secondary: g.editor,
										options: {
											...g.options,
											viewState: (0, E.$h1)(this, c, this.m),
										},
									},
								};
						}
					}
					isReadonly() {
						return this.primary.isReadonly();
					}
					toUntyped(c) {
						const n = this.primary.toUntyped(c),
							g = this.secondary.toUntyped(c);
						if (
							n &&
							g &&
							!(0, E.$j1)(n) &&
							!(0, E.$j1)(g) &&
							!(0, E.$k1)(n) &&
							!(0, E.$k1)(g) &&
							!(0, E.$m1)(n) &&
							!(0, E.$m1)(g) &&
							!(0, E.$o1)(n) &&
							!(0, E.$o1)(g) &&
							!(0, E.$l1)(n) &&
							!(0, E.$l1)(g)
						) {
							const p = {
								label: this.c,
								description: this.h,
								primary: n,
								secondary: g,
							};
							return (
								typeof c?.preserveViewState == "number" &&
									(p.options = {
										viewState: (0, E.$h1)(this, c.preserveViewState, this.m),
									}),
								p
							);
						}
					}
					matches(c) {
						return this === c
							? !0
							: (0, E.$t1)(c) || (0, E.$j1)(c)
								? !1
								: c instanceof m
									? this.primary.matches(c.primary) &&
										this.secondary.matches(c.secondary)
									: (0, E.$m1)(c)
										? this.primary.matches(c.primary) &&
											this.secondary.matches(c.secondary)
										: !1;
					}
				};
				(e.$iY = r), (e.$iY = r = m = Ne([j(4, d.$IY)], r));
				class u {
					canSerialize(c) {
						const n = c;
						if (n.primary && n.secondary) {
							const [g, p] = this.a(n.secondary.typeId, n.primary.typeId);
							return !!(
								g?.canSerialize(n.secondary) && p?.canSerialize(n.primary)
							);
						}
						return !1;
					}
					serialize(c) {
						const n = c;
						if (n.primary && n.secondary) {
							const [g, p] = this.a(n.secondary.typeId, n.primary.typeId);
							if (p && g) {
								const o = p.serialize(n.primary),
									f = g.serialize(n.secondary);
								if (o && f) {
									const b = {
										name: n.getPreferredName(),
										description: n.getPreferredDescription(),
										primarySerialized: o,
										secondarySerialized: f,
										primaryTypeId: n.primary.typeId,
										secondaryTypeId: n.secondary.typeId,
									};
									return JSON.stringify(b);
								}
							}
						}
					}
					deserialize(c, n) {
						const g = JSON.parse(n),
							[p, o] = this.a(g.secondaryTypeId, g.primaryTypeId);
						if (o && p) {
							const f = o.deserialize(c, g.primarySerialized),
								b = p.deserialize(c, g.secondarySerialized);
							if (f instanceof C.$LO && b instanceof C.$LO)
								return this.b(c, g.name, g.description, b, f);
						}
					}
					a(c, n) {
						const g = w.$Io.as(E.$a1.EditorFactory);
						return [g.getEditorSerializer(c), g.getEditorSerializer(n)];
					}
				}
				e.$jY = u;
				class a extends u {
					b(c, n, g, p, o) {
						return c.createInstance(r, n, g, p, o);
					}
				}
				e.$kY = a;
			},
		),
		define(
			de[3257],
			he([1, 0, 44, 313, 3, 21, 30, 6, 66, 24, 59, 82]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				var h;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xdc = void 0);
				let c = class extends w.$1c {
					static {
						h = this;
					}
					static {
						this.a = "editors.mru";
					}
					get count() {
						return this.c.size;
					}
					get editors() {
						return [...this.c.values()];
					}
					hasEditor(g) {
						return this.f.get(g.resource)?.has(this.h(g)) ?? !1;
					}
					hasEditors(g) {
						return this.f.has(g);
					}
					h(g, p) {
						return typeof g != "string"
							? this.h(g.typeId, g.editorId)
							: p
								? `${g}/${p}`
								: g;
					}
					constructor(g, p, o) {
						super(),
							(this.n = p),
							(this.q = o),
							(this.b = new Map()),
							(this.c = new u.$Ic()),
							(this.f = new u.$Gc()),
							(this.g = this.D(new d.$re())),
							(this.onDidMostRecentlyActiveEditorsChange = this.g.event),
							(this.j = g ?? p),
							(this.m = !!g),
							this.r(),
							this.L();
					}
					r() {
						this.D(this.j.onDidAddGroup((g) => this.s(g))),
							this.D(this.n.onDidChangeEditorPartOptions((g) => this.u(g))),
							this.D(this.q.onWillSaveState(() => this.I()));
					}
					s(g) {
						const p = g.getEditors(t.EditorsOrder.MOST_RECENTLY_ACTIVE);
						for (let o = p.length - 1; o >= 0; o--) this.w(g, p[o], !1, !0);
						this.j.activeGroup === g &&
							g.activeEditor &&
							this.w(g, g.activeEditor, !0, !1),
							this.t(g);
					}
					t(g) {
						const p = new w.$Zc();
						p.add(
							g.onDidModelChange((o) => {
								switch (o.kind) {
									case t.GroupModelChangeKind.GROUP_ACTIVE: {
										this.j.activeGroup === g &&
											g.activeEditor &&
											this.w(g, g.activeEditor, !0, !1);
										break;
									}
									case t.GroupModelChangeKind.EDITOR_OPEN: {
										o.editor &&
											(this.w(g, o.editor, !1, !0),
											this.G({ groupId: g.id, editor: o.editor }, g.id));
										break;
									}
								}
							}),
						),
							p.add(
								g.onDidCloseEditor((o) => {
									this.z(g, o.editor);
								}),
							),
							p.add(
								g.onDidActiveEditorChange((o) => {
									o.editor && this.w(g, o.editor, this.j.activeGroup === g, !1);
								}),
							),
							d.Event.once(g.onWillDispose)(() => (0, w.$Vc)(p));
					}
					u(g) {
						if (!(0, a.$zo)(g.newPartOptions.limit, g.oldPartOptions.limit)) {
							const p = this.j.activeGroup;
							let o;
							p.activeEditor && (o = { editor: p.activeEditor, groupId: p.id }),
								this.G(o);
						}
					}
					w(g, p, o, f) {
						const b = this.F(g, p),
							s = this.c.first;
						o || !s
							? this.c.set(b, b, s ? u.Touch.AsOld : void 0)
							: (this.c.set(b, b, u.Touch.AsOld),
								this.c.set(s, s, u.Touch.AsOld)),
							f && this.y(p, !0),
							this.g.fire();
					}
					y(g, p) {
						let o, f, b;
						if (
							(g instanceof i.$iY
								? ((o = g.primary.resource),
									(f = g.primary.typeId),
									(b = g.primary.editorId))
								: ((o = g.resource), (f = g.typeId), (b = g.editorId)),
							!o)
						)
							return;
						const s = this.h(f, b);
						if (p) {
							let l = this.f.get(o);
							l || ((l = new Map()), this.f.set(o, l)),
								l.set(s, (l.get(s) ?? 0) + 1);
						} else {
							const l = this.f.get(o);
							if (l) {
								const y = l.get(s) ?? 0;
								y > 1
									? l.set(s, y - 1)
									: (l.delete(s), l.size === 0 && this.f.delete(o));
							}
						}
					}
					z(g, p) {
						this.y(p, !1);
						const o = this.C(g, p);
						if (o) {
							this.c.delete(o);
							const f = this.b.get(g.id);
							f && f.delete(o.editor) && f.size === 0 && this.b.delete(g.id),
								this.g.fire();
						}
					}
					C(g, p) {
						const o = this.b.get(g.id);
						if (o) return o.get(p);
					}
					F(g, p) {
						let o = this.b.get(g.id);
						o || ((o = new Map()), this.b.set(g.id, o));
						let f = o.get(p);
						return f || ((f = { groupId: g.id, editor: p }), o.set(p, f)), f;
					}
					async G(g, p) {
						if (
							!this.n.partOptions.limit?.enabled ||
							typeof this.n.partOptions.limit.value != "number" ||
							this.n.partOptions.limit.value <= 0
						)
							return;
						const o = this.n.partOptions.limit.value;
						if (this.n.partOptions.limit?.perEditorGroup)
							if (typeof p == "number") {
								const f = this.j.getGroup(p);
								f &&
									(await this.H(
										o,
										f
											.getEditors(t.EditorsOrder.MOST_RECENTLY_ACTIVE)
											.map((b) => ({ editor: b, groupId: p })),
										g,
									));
							} else for (const f of this.j.groups) await this.G(g, f.id);
						else await this.H(o, [...this.c.values()], g);
					}
					async H(g, p, o) {
						let f;
						if (
							(this.n.partOptions.limit?.excludeDirty
								? (f = p.filter(
										({ editor: y }) =>
											!(
												(y.isDirty() && !y.isSaving()) ||
												y.hasCapability(t.EditorInputCapabilities.Scratchpad)
											),
									))
								: (f = p),
							g >= f.length)
						)
							return;
						const b = f
							.reverse()
							.filter(
								({ editor: y, groupId: $ }) =>
									!(
										(y.isDirty() && !y.isSaving()) ||
										y.hasCapability(t.EditorInputCapabilities.Scratchpad) ||
										(o && y === o.editor && $ === o.groupId) ||
										this.j.getGroup($)?.isSticky(y)
									),
							);
						let s = f.length - g;
						const l = new Map();
						for (const { groupId: y, editor: $ } of b) {
							let v = l.get(y);
							if ((v || ((v = []), l.set(y, v)), v.push($), s--, s === 0))
								break;
						}
						for (const [y, $] of l) {
							const v = this.j.getGroup(y);
							v && (await v.closeEditors($, { preserveFocus: !0 }));
						}
					}
					I() {
						this.m ||
							(this.c.isEmpty()
								? this.q.remove(h.a, E.StorageScope.WORKSPACE)
								: this.q.store(
										h.a,
										JSON.stringify(this.J()),
										E.StorageScope.WORKSPACE,
										E.StorageTarget.MACHINE,
									));
					}
					J() {
						const g = C.$Io.as(t.$a1.EditorFactory),
							p = [...this.c.values()],
							o = new Map();
						return {
							entries: (0, r.$Lb)(
								p.map(({ editor: f, groupId: b }) => {
									const s = this.j.getGroup(b);
									if (!s) return;
									let l = o.get(s);
									l ||
										((l = s
											.getEditors(t.EditorsOrder.SEQUENTIAL)
											.filter(($) =>
												g.getEditorSerializer($)?.canSerialize($),
											)),
										o.set(s, l));
									const y = l.indexOf(f);
									if (y !== -1) return { groupId: b, index: y };
								}),
							),
						};
					}
					async L() {
						(this.j === this.n.mainPart || this.j === this.n) &&
							(await this.n.whenReady);
						let g = !1;
						if (!this.m) {
							const p = this.q.get(h.a, E.StorageScope.WORKSPACE);
							p && ((g = !0), this.M(JSON.parse(p)));
						}
						if (!g) {
							const p = this.j.getGroups(m.GroupsOrder.MOST_RECENTLY_ACTIVE);
							for (let o = p.length - 1; o >= 0; o--) {
								const f = p[o],
									b = f.getEditors(t.EditorsOrder.MOST_RECENTLY_ACTIVE);
								for (let s = b.length - 1; s >= 0; s--) this.w(f, b[s], !0, !0);
							}
						}
						for (const p of this.j.groups) this.t(p);
					}
					M(g) {
						const p = [];
						for (const { groupId: o, index: f } of g.entries) {
							const b = this.j.getGroup(o);
							if (!b) continue;
							const s = b.getEditorByIndex(f);
							if (!s) continue;
							const l = this.F(b, s);
							p.push([l, l]), this.y(s, !0);
						}
						this.c.fromJSON(p);
					}
				};
				(e.$xdc = c), (e.$xdc = c = h = Ne([j(1, m.$EY), j(2, E.$lq)], c));
			},
		),
		define(
			de[825],
			he([
				1, 0, 4, 7, 30, 44, 313, 32, 5, 35, 66, 279, 6, 21, 28, 10, 548, 3, 123,
				1016, 125, 18, 19, 9, 2346,
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
			) {
				"use strict";
				var v;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$AVb = void 0);
				function S(P) {
					const k = P;
					return (
						typeof k?.primary == "object" && typeof k.secondary == "object"
					);
				}
				let I = class extends b.$zVb {
					static {
						v = this;
					}
					static {
						this.ID = E.$c1;
					}
					static {
						this.SIDE_BY_SIDE_LAYOUT_SETTING =
							"workbench.editor.splitInGroupLayout";
					}
					static {
						this.a = "sideBySideEditorViewState";
					}
					get c() {
						return this.zb ? this.zb.minimumWidth : 0;
					}
					get f() {
						return this.zb ? this.zb.maximumWidth : Number.POSITIVE_INFINITY;
					}
					get r() {
						return this.zb ? this.zb.minimumHeight : 0;
					}
					get qb() {
						return this.zb ? this.zb.maximumHeight : Number.POSITIVE_INFINITY;
					}
					get rb() {
						return this.Ab ? this.Ab.minimumWidth : 0;
					}
					get sb() {
						return this.Ab ? this.Ab.maximumWidth : Number.POSITIVE_INFINITY;
					}
					get tb() {
						return this.Ab ? this.Ab.minimumHeight : 0;
					}
					get ub() {
						return this.Ab ? this.Ab.maximumHeight : Number.POSITIVE_INFINITY;
					}
					set minimumWidth(k) {}
					set maximumWidth(k) {}
					set minimumHeight(k) {}
					set maximumHeight(k) {}
					get minimumWidth() {
						return this.c + this.rb;
					}
					get maximumWidth() {
						return this.f + this.sb;
					}
					get minimumHeight() {
						return this.r + this.tb;
					}
					get maximumHeight() {
						return this.qb + this.ub;
					}
					constructor(k, L, D, M, N, A, R, O, B) {
						super(v.ID, k, v.a, L, D, N, R, M, O, B),
							(this.Jb = A),
							(this.wb = this.D(new h.$re())),
							(this.xb = this.D(new h.$Ae())),
							(this.onDidChangeSizeConstraints = h.Event.any(
								this.wb.event,
								this.xb.event,
							)),
							(this.yb = this.D(new h.$re())),
							(this.onDidChangeSelection = this.yb.event),
							(this.zb = void 0),
							(this.Ab = void 0),
							(this.Eb = this.D(new o.$Zc())),
							(this.Fb = this.D(new o.$Zc())),
							(this.Gb =
								this.Jb.getValue(v.SIDE_BY_SIDE_LAYOUT_SETTING) === "vertical"
									? a.Orientation.VERTICAL
									: a.Orientation.HORIZONTAL),
							(this.Hb = new i.$pgb(0, 0)),
							(this.Ib = void 0),
							this.Kb();
					}
					Kb() {
						this.D(this.Jb.onDidChangeConfiguration((k) => this.Lb(k)));
					}
					Lb(k) {
						k.affectsConfiguration(v.SIDE_BY_SIDE_LAYOUT_SETTING) &&
							((this.Gb =
								this.Jb.getValue(v.SIDE_BY_SIDE_LAYOUT_SETTING) === "vertical"
									? a.Orientation.VERTICAL
									: a.Orientation.HORIZONTAL),
							this.Db && this.Mb());
					}
					Mb() {
						const k = (0, n.$wg)(this.getContainer()),
							L = this.Nb();
						this.Db && (this.Db.el.remove(), this.Eb.clear()),
							this.Pb(k, L),
							this.layout(this.Hb);
					}
					Nb() {
						let k;
						if (this.Db) {
							const L = this.Db.getViewSize(0),
								D = this.Db.getViewSize(1);
							if (Math.abs(L - D) > 1) {
								const M =
									this.Db.orientation === a.Orientation.HORIZONTAL
										? this.Hb.width
										: this.Hb.height;
								k = L / M;
							}
						}
						return k;
					}
					Y(k) {
						k.classList.add("side-by-side-editor"),
							(this.Cb = (0, i.$)(
								".side-by-side-editor-container.editor-instance",
							)),
							(this.Bb = (0, i.$)(
								".side-by-side-editor-container.editor-instance",
							)),
							this.Pb(k);
					}
					Pb(k, L) {
						(this.Db = this.Eb.add(new a.$vob(k, { orientation: this.Gb }))),
							this.Eb.add(
								this.Db.onDidSashReset(() => this.Db?.distributeViewSizes()),
							),
							this.Gb === a.Orientation.HORIZONTAL
								? (this.Db.orthogonalEndSash = this.vb?.bottom)
								: ((this.Db.orthogonalStartSash = this.vb?.left),
									(this.Db.orthogonalEndSash = this.vb?.right));
						let D = a.Sizing.Distribute,
							M = a.Sizing.Distribute;
						if (L) {
							const R =
								this.Db.orientation === a.Orientation.HORIZONTAL
									? this.Hb.width
									: this.Hb.height;
							(D = Math.round(R * L)),
								(M = R - D),
								this.Db.layout(
									this.Gb === a.Orientation.HORIZONTAL
										? this.Hb.width
										: this.Hb.height,
								);
						}
						const N = (0, n.$wg)(this.Cb);
						this.Db.addView(
							{
								element: N,
								layout: (R) => this.Wb(this.Ab, R),
								minimumSize:
									this.Gb === a.Orientation.HORIZONTAL
										? p.$DEb.width
										: p.$DEb.height,
								maximumSize: Number.POSITIVE_INFINITY,
								onDidChange: h.Event.None,
							},
							D,
						);
						const A = (0, n.$wg)(this.Bb);
						this.Db.addView(
							{
								element: A,
								layout: (R) => this.Wb(this.zb, R),
								minimumSize:
									this.Gb === a.Orientation.HORIZONTAL
										? p.$DEb.width
										: p.$DEb.height,
								maximumSize: Number.POSITIVE_INFINITY,
								onDidChange: h.Event.None,
							},
							M,
						),
							this.updateStyles();
					}
					getTitle() {
						return this.input
							? this.input.getName()
							: (0, t.localize)(3548, null);
					}
					async setInput(k, L, D, M) {
						const N = this.input;
						await super.setInput(k, L, D, M),
							(!N || !k.matches(N)) && (N && this.$b(), this.Rb(k));
						const { primary: A, secondary: R, viewState: O } = this.Qb(k, L, D);
						if (
							((this.Ib = O?.focus), typeof O?.ratio == "number" && this.Db)
						) {
							const B =
								this.Db.orientation === a.Orientation.HORIZONTAL
									? this.Hb.width
									: this.Hb.height;
							this.Db.resizeView(0, Math.round(B * O.ratio));
						} else this.Db?.distributeViewSizes();
						await Promise.all([
							this.Ab?.setInput(k.secondary, R, D, M),
							this.zb?.setInput(k.primary, A, D, M),
						]),
							typeof L?.target == "number" && (this.Ib = L.target);
					}
					Qb(k, L, D) {
						const M = S(L?.viewState) ? L?.viewState : this.jb(k, D);
						let N = Object.create(null),
							A;
						return (
							L?.target === E.SideBySideEditor.SECONDARY
								? (A = { ...L })
								: (N = { ...L }),
							(N.viewState = M?.primary),
							M?.secondary &&
								(A
									? (A.viewState = M?.secondary)
									: (A = { viewState: M.secondary })),
							{ primary: N, secondary: A, viewState: M }
						);
					}
					Rb(k) {
						(this.Ab = this.Sb(k.secondary, (0, n.$wg)(this.Cb))),
							(this.zb = this.Sb(k.primary, (0, n.$wg)(this.Bb))),
							this.layout(this.Hb),
							(this.xb.input = h.Event.any(
								h.Event.map(this.Ab.onDidChangeSizeConstraints, () => {}),
								h.Event.map(this.zb.onDidChangeSizeConstraints, () => {}),
							)),
							this.wb.fire(void 0),
							this.Fb.add(
								this.zb.onDidFocus(() => this.Tb(E.SideBySideEditor.PRIMARY)),
							),
							this.Fb.add(
								this.Ab.onDidFocus(() => this.Tb(E.SideBySideEditor.SECONDARY)),
							);
					}
					Sb(k, L) {
						const D = w.$Io.as(E.$a1.EditorPane).getEditorPane(k);
						if (!D)
							throw new Error("No editor pane descriptor for editor found");
						const M = D.instantiate(this.m, this.group);
						return (
							M.create(L),
							M.setVisible(this.isVisible()),
							(0, E.$f1)(M) &&
								this.Fb.add(M.onDidChangeSelection((N) => this.yb.fire(N))),
							this.Fb.add(M),
							M
						);
					}
					Tb(k) {
						(this.Ib = k), this.S.fire();
					}
					getSelection() {
						const k = this.Vb();
						if ((0, E.$f1)(k)) {
							const L = k.getSelection();
							if (L)
								return new T(
									L,
									k === this.zb
										? E.SideBySideEditor.PRIMARY
										: E.SideBySideEditor.SECONDARY,
								);
						}
					}
					setOptions(k) {
						super.setOptions(k),
							typeof k?.target == "number" && (this.Ib = k.target),
							this.Vb()?.setOptions(k);
					}
					Z(k) {
						this.zb?.setVisible(k), this.Ab?.setVisible(k), super.Z(k);
					}
					clearInput() {
						super.clearInput(),
							this.zb?.clearInput(),
							this.Ab?.clearInput(),
							this.$b();
					}
					focus() {
						super.focus(), this.Vb()?.focus();
					}
					Vb() {
						return this.Ib === E.SideBySideEditor.SECONDARY ? this.Ab : this.zb;
					}
					layout(k) {
						(this.Hb = k),
							(0, n.$wg)(this.Db).layout(
								this.Gb === a.Orientation.HORIZONTAL ? k.width : k.height,
							);
					}
					setBoundarySashes(k) {
						(this.vb = k), this.Db && (this.Db.orthogonalEndSash = k.bottom);
					}
					Wb(k, L) {
						k?.layout(
							this.Gb === a.Orientation.HORIZONTAL
								? new i.$pgb(L, this.Hb.height)
								: new i.$pgb(this.Hb.width, L),
						);
					}
					getControl() {
						return this.Vb()?.getControl();
					}
					getPrimaryEditorPane() {
						return this.zb;
					}
					getSecondaryEditorPane() {
						return this.Ab;
					}
					nb(k) {
						return k instanceof C.$iY;
					}
					mb(k) {
						if (!this.input || !(0, y.$gh)(k, this.pb(this.input))) return;
						const L = this.zb?.getViewState(),
							D = this.Ab?.getViewState();
						if (!(!L || !D))
							return {
								primary: L,
								secondary: D,
								focus: this.Ib,
								ratio: this.Nb(),
							};
					}
					pb(k) {
						let L, D;
						if (
							(k instanceof C.$iY &&
								((L = k.primary.resource), (D = k.secondary.resource)),
							!(!D || !L))
						)
							return $.URI.from({
								scheme: "sideBySide",
								path: `${(0, i.$Ehb)(D.toString())}${(0, i.$Ehb)(L.toString())}`,
							});
					}
					updateStyles() {
						super.updateStyles(),
							this.Bb &&
								(this.Gb === a.Orientation.HORIZONTAL
									? ((this.Bb.style.borderLeftWidth = "1px"),
										(this.Bb.style.borderLeftStyle = "solid"),
										(this.Bb.style.borderLeftColor = this.w(f.$pFb) ?? ""),
										(this.Bb.style.borderTopWidth = "0"))
									: ((this.Bb.style.borderTopWidth = "1px"),
										(this.Bb.style.borderTopStyle = "solid"),
										(this.Bb.style.borderTopColor = this.w(f.$oFb) ?? ""),
										(this.Bb.style.borderLeftWidth = "0")));
					}
					dispose() {
						this.$b(), super.dispose();
					}
					$b() {
						this.Fb.clear(),
							(this.Ab = void 0),
							(this.zb = void 0),
							(this.Ib = void 0),
							this.Cb && (0, i.$9fb)(this.Cb),
							this.Bb && (0, i.$9fb)(this.Bb);
					}
				};
				(e.$AVb = I),
					(e.$AVb =
						I =
						v =
							Ne(
								[
									j(1, d.$km),
									j(2, m.$Li),
									j(3, r.$iP),
									j(4, c.$lq),
									j(5, g.$gj),
									j(6, s.$XO),
									j(7, l.$IY),
									j(8, u.$EY),
								],
								I,
							));
				class T {
					constructor(k, L) {
						(this.a = k), (this.b = L);
					}
					compare(k) {
						return !(k instanceof T) || this.b !== k.b
							? E.EditorPaneSelectionCompareResult.DIFFERENT
							: this.a.compare(k.a);
					}
					restore(k) {
						const L = { ...k, target: this.b };
						return this.a.restore(L);
					}
				}
			},
		),
		define(
			de[1287],
			he([1, 0, 6, 44, 223, 313, 5, 10, 3, 30, 24]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				var a;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qY = void 0),
					(e.$lY = c),
					(e.$mY = n),
					(e.$nY = g),
					(e.$oY = p),
					(e.$pY = o);
				const h = {
					LEFT: "left",
					RIGHT: "right",
					FIRST: "first",
					LAST: "last",
				};
				function c(b) {
					const s = b;
					return !!(
						s &&
						typeof s == "object" &&
						Array.isArray(s.editors) &&
						Array.isArray(s.mru)
					);
				}
				function n(b) {
					const s = b;
					return s.editor && s.editorIndex !== void 0;
				}
				function g(b) {
					const s = b;
					return (
						s.kind === i.GroupModelChangeKind.EDITOR_OPEN &&
						s.editorIndex !== void 0
					);
				}
				function p(b) {
					const s = b;
					return (
						s.kind === i.GroupModelChangeKind.EDITOR_MOVE &&
						s.editorIndex !== void 0 &&
						s.oldEditorIndex !== void 0
					);
				}
				function o(b) {
					const s = b;
					return (
						s.kind === i.GroupModelChangeKind.EDITOR_CLOSE &&
						s.editorIndex !== void 0 &&
						s.context !== void 0 &&
						s.sticky !== void 0
					);
				}
				let f = class extends m.$1c {
					static {
						a = this;
					}
					static {
						this.a = 0;
					}
					get id() {
						return this.c;
					}
					get n() {
						return this.m[0] ?? null;
					}
					constructor(s, l, y) {
						super(),
							(this.w = l),
							(this.y = y),
							(this.b = this.D(new t.$re({ leakWarningThreshold: 500 }))),
							(this.onDidModelChange = this.b.event),
							(this.f = []),
							(this.g = []),
							(this.h = new Set()),
							(this.j = !1),
							(this.m = []),
							(this.q = null),
							(this.r = -1),
							(this.s = new Set()),
							c(s) ? (this.c = this.W(s)) : (this.c = a.a++),
							this.C(),
							this.z();
					}
					z() {
						this.D(this.y.onDidChangeConfiguration((s) => this.C(s)));
					}
					C(s) {
						(s &&
							!s.affectsConfiguration("workbench.editor.openPositioning") &&
							!s.affectsConfiguration(
								"workbench.editor.focusRecentEditorAfterClose",
							)) ||
							((this.t = this.y.getValue("workbench.editor.openPositioning")),
							(this.u = this.y.getValue(
								"workbench.editor.focusRecentEditorAfterClose",
							)));
					}
					get count() {
						return this.f.length;
					}
					get stickyCount() {
						return this.r + 1;
					}
					getEditors(s, l) {
						const y =
							s === i.EditorsOrder.MOST_RECENTLY_ACTIVE
								? this.g.slice(0)
								: this.f.slice(0);
						return l?.excludeSticky
							? s === i.EditorsOrder.MOST_RECENTLY_ACTIVE
								? y.filter(($) => !this.isSticky($))
								: y.slice(this.r + 1)
							: y;
					}
					getEditorByIndex(s) {
						return this.f[s];
					}
					get activeEditor() {
						return this.n;
					}
					isActive(s) {
						return this.U(this.n, s);
					}
					get previewEditor() {
						return this.q;
					}
					openEditor(s, l) {
						const y =
								l?.sticky ||
								(typeof l?.index == "number" && this.isSticky(l.index)),
							$ = l?.pinned || l?.sticky,
							v = !!l?.transient,
							S =
								l?.active ||
								!this.activeEditor ||
								(!$ && this.q === this.activeEditor),
							I = this.findEditor(s, l);
						if (I) {
							const [T, P] = I;
							return (
								this.R(T, P, v === !1 ? !1 : this.isTransient(T)),
								$ && this.N(T, P),
								this.setSelection(
									S ? T : this.activeEditor,
									l?.inactiveSelection ?? [],
								),
								l && typeof l.index == "number" && this.moveEditor(T, l.index),
								y && this.P(T, this.indexOf(T)),
								{ editor: T, isNew: !1 }
							);
						} else {
							const T = s,
								P = this.indexOf(this.n);
							let k;
							if (
								(l && typeof l.index == "number"
									? (k = l.index)
									: this.t === h.FIRST
										? ((k = 0), !y && this.isSticky(k) && (k = this.r + 1))
										: this.t === h.LAST
											? (k = this.f.length)
											: (this.t === h.LEFT
													? P === 0 || !this.f.length
														? (k = 0)
														: (k = P)
													: (k = P + 1),
												!y && this.isSticky(k) && (k = this.r + 1)),
								y && (this.r++, this.isSticky(k) || (k = this.r)),
								($ || !this.q) && this.S(k, !1, T),
								v && this.R(T, k, !0),
								!$)
							) {
								if (this.q) {
									const D = this.indexOf(this.q);
									k > D && k--, this.G(this.q, T, k, !S);
								}
								this.q = T;
							}
							this.F(T);
							const L = {
								kind: i.GroupModelChangeKind.EDITOR_OPEN,
								editor: T,
								editorIndex: k,
							};
							return (
								this.b.fire(L),
								this.setSelection(
									S ? T : this.activeEditor,
									l?.inactiveSelection ?? [],
								),
								{ editor: T, isNew: !0 }
							);
						}
					}
					F(s) {
						const l = new m.$Zc();
						this.h.add(l),
							l.add(
								t.Event.once(s.onWillDispose)(() => {
									const y = this.f.indexOf(s);
									if (y >= 0) {
										const $ = {
											kind: i.GroupModelChangeKind.EDITOR_WILL_DISPOSE,
											editor: s,
											editorIndex: y,
										};
										this.b.fire($);
									}
								}),
							),
							l.add(
								s.onDidChangeDirty(() => {
									const y = {
										kind: i.GroupModelChangeKind.EDITOR_DIRTY,
										editor: s,
										editorIndex: this.f.indexOf(s),
									};
									this.b.fire(y);
								}),
							),
							l.add(
								s.onDidChangeLabel(() => {
									const y = {
										kind: i.GroupModelChangeKind.EDITOR_LABEL,
										editor: s,
										editorIndex: this.f.indexOf(s),
									};
									this.b.fire(y);
								}),
							),
							l.add(
								s.onDidChangeCapabilities(() => {
									const y = {
										kind: i.GroupModelChangeKind.EDITOR_CAPABILITIES,
										editor: s,
										editorIndex: this.f.indexOf(s),
									};
									this.b.fire(y);
								}),
							),
							l.add(
								this.onDidModelChange((y) => {
									y.kind === i.GroupModelChangeKind.EDITOR_CLOSE &&
										y.editor?.matches(s) &&
										((0, m.$Vc)(l), this.h.delete(l));
								}),
							);
					}
					G(s, l, y, $ = !0) {
						const v = this.H(s, i.EditorCloseContext.REPLACE, $);
						if ((this.S(y, !1, l), v)) {
							const S = { kind: i.GroupModelChangeKind.EDITOR_CLOSE, ...v };
							this.b.fire(S);
						}
					}
					closeEditor(s, l = i.EditorCloseContext.UNKNOWN, y = !0) {
						const $ = this.H(s, l, y);
						if ($) {
							const v = { kind: i.GroupModelChangeKind.EDITOR_CLOSE, ...$ };
							return this.b.fire(v), $;
						}
					}
					H(s, l, y) {
						const $ = this.indexOf(s);
						if ($ === -1) return;
						const v = this.f[$],
							S = this.isSticky($),
							I = this.n === v;
						if (y && I)
							if (this.g.length > 1) {
								let T;
								this.u
									? (T = this.g[1])
									: $ === this.f.length - 1
										? (T = this.f[$ - 1])
										: (T = this.f[$ + 1]);
								const P = this.m.filter((k) => k !== v && k !== T);
								this.M(T, this.f.indexOf(T), P);
							} else this.M(null, void 0, []);
						else if (!I && this.L(v)) {
							const T = this.m.filter(
								(P) => P !== v && P !== this.activeEditor,
							);
							this.M(this.activeEditor, this.indexOf(this.activeEditor), T);
						}
						return (
							this.q === v && (this.q = null),
							this.s.delete(v),
							this.S($, !0),
							{ editor: v, sticky: S, editorIndex: $, context: l }
						);
					}
					moveEditor(s, l) {
						l >= this.f.length ? (l = this.f.length - 1) : l < 0 && (l = 0);
						const y = this.indexOf(s);
						if (y < 0 || l === y) return;
						const $ = this.f[y],
							v = this.r;
						this.isSticky(y) && l > this.r
							? this.r--
							: !this.isSticky(y) && l <= this.r && this.r++,
							this.f.splice(y, 1),
							this.f.splice(l, 0, $);
						const S = {
							kind: i.GroupModelChangeKind.EDITOR_MOVE,
							editor: $,
							oldEditorIndex: y,
							editorIndex: l,
						};
						if ((this.b.fire(S), v !== this.r)) {
							const I = {
								kind: i.GroupModelChangeKind.EDITOR_STICKY,
								editor: $,
								editorIndex: l,
							};
							this.b.fire(I);
						}
						return $;
					}
					setActive(s) {
						let l;
						return s ? (l = this.J(s)) : this.I(), l;
					}
					I() {
						this.b.fire({ kind: i.GroupModelChangeKind.GROUP_ACTIVE });
					}
					J(s) {
						const l = this.findEditor(s);
						if (!l) return;
						const [y, $] = l;
						return this.M(y, $, []), y;
					}
					get selectedEditors() {
						return this.f.filter((s) => this.L(s));
					}
					isSelected(s) {
						let l;
						return (
							typeof s == "number"
								? (l = this.f[s])
								: (l = this.findEditor(s)?.[0]),
							!!l && this.L(l)
						);
					}
					L(s) {
						return this.m.includes(s);
					}
					setSelection(s, l) {
						const y = this.findEditor(s);
						if (!y) return;
						const [$, v] = y,
							S = new Set();
						for (const I of l) {
							const T = this.findEditor(I);
							if (!T) return;
							const [P] = T;
							P !== $ && S.add(P);
						}
						this.M($, v, Array.from(S));
					}
					M(s, l, y) {
						const $ = this.activeEditor,
							v = this.m;
						let S;
						s ? (S = [s, ...y]) : (S = []), (this.m = S);
						const I = s && typeof l == "number" && $ !== s;
						if (I) {
							const T = this.indexOf(s, this.g);
							this.g.splice(T, 1), this.g.unshift(s);
							const P = {
								kind: i.GroupModelChangeKind.EDITOR_ACTIVE,
								editor: s,
								editorIndex: l,
							};
							this.b.fire(P);
						}
						if (I || v.length !== S.length || v.some((T) => !S.includes(T))) {
							const T = { kind: i.GroupModelChangeKind.EDITORS_SELECTION };
							this.b.fire(T);
						}
					}
					setIndex(s) {
						this.b.fire({ kind: i.GroupModelChangeKind.GROUP_INDEX });
					}
					setLabel(s) {
						this.b.fire({ kind: i.GroupModelChangeKind.GROUP_LABEL });
					}
					pin(s) {
						const l = this.findEditor(s);
						if (!l) return;
						const [y, $] = l;
						return this.N(y, $), y;
					}
					N(s, l) {
						if (this.isPinned(s)) return;
						this.setTransient(s, !1), (this.q = null);
						const y = {
							kind: i.GroupModelChangeKind.EDITOR_PIN,
							editor: s,
							editorIndex: l,
						};
						this.b.fire(y);
					}
					unpin(s) {
						const l = this.findEditor(s);
						if (!l) return;
						const [y, $] = l;
						return this.O(y, $), y;
					}
					O(s, l) {
						if (!this.isPinned(s)) return;
						const y = this.q;
						this.q = s;
						const $ = {
							kind: i.GroupModelChangeKind.EDITOR_PIN,
							editor: s,
							editorIndex: l,
						};
						this.b.fire($),
							y && this.closeEditor(y, i.EditorCloseContext.UNPIN);
					}
					isPinned(s) {
						let l;
						return (
							typeof s == "number" ? (l = this.f[s]) : (l = s),
							!this.U(this.q, l)
						);
					}
					stick(s) {
						const l = this.findEditor(s);
						if (!l) return;
						const [y, $] = l;
						return this.P(y, $), y;
					}
					P(s, l) {
						if (this.isSticky(l)) return;
						this.pin(s);
						const y = this.r + 1;
						this.moveEditor(s, y), this.r++;
						const $ = {
							kind: i.GroupModelChangeKind.EDITOR_STICKY,
							editor: s,
							editorIndex: y,
						};
						this.b.fire($);
					}
					unstick(s) {
						const l = this.findEditor(s);
						if (!l) return;
						const [y, $] = l;
						return this.Q(y, $), y;
					}
					Q(s, l) {
						if (!this.isSticky(l)) return;
						const y = this.r;
						this.moveEditor(s, y), this.r--;
						const $ = {
							kind: i.GroupModelChangeKind.EDITOR_STICKY,
							editor: s,
							editorIndex: y,
						};
						this.b.fire($);
					}
					isSticky(s) {
						if (this.r < 0) return !1;
						let l;
						return (
							typeof s == "number" ? (l = s) : (l = this.indexOf(s)),
							l < 0 ? !1 : l <= this.r
						);
					}
					setTransient(s, l) {
						if (!l && this.s.size === 0) return;
						const y = this.findEditor(s);
						if (!y) return;
						const [$, v] = y;
						return this.R($, v, l), $;
					}
					R(s, l, y) {
						if (y) {
							if (this.s.has(s)) return;
							this.s.add(s);
						} else {
							if (!this.s.has(s)) return;
							this.s.delete(s);
						}
						const $ = {
							kind: i.GroupModelChangeKind.EDITOR_TRANSIENT,
							editor: s,
							editorIndex: l,
						};
						this.b.fire($);
					}
					isTransient(s) {
						if (this.s.size === 0) return !1;
						let l;
						return (
							typeof s == "number"
								? (l = this.f[s])
								: (l = this.findEditor(s)?.[0]),
							!!l && this.s.has(l)
						);
					}
					S(s, l, y) {
						const $ = this.f[s];
						if (
							(l && this.isSticky(s) && this.r--,
							y ? this.f.splice(s, l ? 1 : 0, y) : this.f.splice(s, l ? 1 : 0),
							!l && y)
						)
							this.g.length === 0 ? this.g.push(y) : this.g.splice(1, 0, y);
						else {
							const v = this.indexOf($, this.g);
							l && !y ? this.g.splice(v, 1) : l && y && this.g.splice(v, 1, y);
						}
					}
					indexOf(s, l = this.f, y) {
						let $ = -1;
						if (!s) return $;
						for (let v = 0; v < l.length; v++) {
							const S = l[v];
							if (this.U(S, s, y))
								if (
									y?.supportSideBySide &&
									S instanceof E.$iY &&
									!(s instanceof E.$iY)
								)
									$ = v;
								else {
									$ = v;
									break;
								}
						}
						return $;
					}
					findEditor(s, l) {
						const y = this.indexOf(s, this.f, l);
						if (y !== -1) return [this.f[y], y];
					}
					isFirst(s, l = this.f) {
						return this.U(l[0], s);
					}
					isLast(s, l = this.f) {
						return this.U(l[l.length - 1], s);
					}
					contains(s, l) {
						return this.indexOf(s, this.f, l) !== -1;
					}
					U(s, l, y) {
						if (!s || !l) return !1;
						if (
							y?.supportSideBySide &&
							s instanceof E.$iY &&
							!(l instanceof E.$iY)
						)
							switch (y.supportSideBySide) {
								case i.SideBySideEditor.ANY:
									if (this.U(s.primary, l, y) || this.U(s.secondary, l, y))
										return !0;
									break;
								case i.SideBySideEditor.BOTH:
									if (this.U(s.primary, l, y) && this.U(s.secondary, l, y))
										return !0;
									break;
							}
						const $ = s === l;
						return y?.strictEquals ? $ : $ || s.matches(l);
					}
					get isLocked() {
						return this.j;
					}
					lock(s) {
						this.isLocked !== s &&
							((this.j = s),
							this.b.fire({ kind: i.GroupModelChangeKind.GROUP_LOCKED }));
					}
					clone() {
						const s = this.w.createInstance(a, void 0);
						(s.f = this.f.slice(0)),
							(s.g = this.g.slice(0)),
							(s.q = this.q),
							(s.m = this.m.slice(0)),
							(s.r = this.r);
						for (const l of s.f) s.F(l);
						return s;
					}
					serialize() {
						const s = r.$Io.as(i.$a1.EditorFactory),
							l = [],
							y = [];
						let $,
							v = this.r;
						for (let I = 0; I < this.f.length; I++) {
							const T = this.f[I];
							let P = !1;
							const k = s.getEditorSerializer(T);
							if (k) {
								const L = k.canSerialize(T) ? k.serialize(T) : void 0;
								typeof L == "string"
									? ((P = !0),
										y.push({ id: T.typeId, value: L }),
										l.push(T),
										this.q === T && ($ = l.length - 1))
									: (P = !1);
							}
							!P && this.isSticky(I) && v--;
						}
						const S = this.g
							.map((I) => this.indexOf(I, l))
							.filter((I) => I >= 0);
						return {
							id: this.id,
							locked: this.j ? !0 : void 0,
							editors: y,
							mru: S,
							preview: $,
							sticky: v >= 0 ? v : void 0,
						};
					}
					W(s) {
						const l = r.$Io.as(i.$a1.EditorFactory);
						return (
							typeof s.id == "number"
								? ((this.c = s.id), (a.a = Math.max(s.id + 1, a.a)))
								: (this.c = a.a++),
							s.locked && (this.j = !0),
							(this.f = (0, u.$Lb)(
								s.editors.map((y, $) => {
									let v;
									const S = l.getEditorSerializer(y.id);
									if (S) {
										const I = S.deserialize(this.w, y.value);
										I instanceof w.$LO && ((v = I), this.F(v));
									}
									return (
										!v &&
											typeof s.sticky == "number" &&
											$ <= s.sticky &&
											s.sticky--,
										v
									);
								}),
							)),
							(this.g = (0, u.$Lb)(s.mru.map((y) => this.f[y]))),
							(this.m = this.g.length > 0 ? [this.g[0]] : []),
							typeof s.preview == "number" && (this.q = this.f[s.preview]),
							typeof s.sticky == "number" && (this.r = s.sticky),
							this.c
						);
					}
					dispose() {
						(0, m.$Vc)(Array.from(this.h)),
							this.h.clear(),
							this.s.clear(),
							super.dispose();
					}
				};
				(e.$qY = f), (e.$qY = f = a = Ne([j(1, C.$Li), j(2, d.$gj)], f));
			},
		),
		define(
			de[3258],
			he([1, 0, 15, 3, 77, 457, 28, 56, 248, 350, 184, 5, 90, 112, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$z2c = void 0);
				let g = class extends i.$1c {
					constructor(l, y, $) {
						super(),
							(this.f = l),
							(this.g = y),
							(this.h = $),
							(this.a = [
								this.g.createInstance(
									o,
									u.$Twb.errorAtPosition,
									u.$Twb.errorOnLine,
									h.MarkerSeverity.Error,
								),
								this.g.createInstance(
									o,
									u.$Twb.warningAtPosition,
									u.$Twb.warningOnLine,
									h.MarkerSeverity.Warning,
								),
								this.g.createInstance(f),
								this.g.createInstance(b),
							]),
							(this.b = (0, w.derived)(this, (v) =>
								this.a
									.flatMap((S) => [S.lineSignal, S.positionSignal])
									.filter(C.$tg)
									.some((S) =>
										(0, E.$Nd)(this, this.h.getEnabledState(S, !1)).read(v),
									),
							)),
							(this.c = (0, w.observableFromEvent)(
								this,
								this.f.onDidActiveEditorChange,
								(v) => {
									const S = this.f.activeTextEditorControl,
										I = (0, d.$$sb)(S)
											? S.getOriginalEditor()
											: (0, d.$0sb)(S)
												? S
												: void 0;
									return I && I.hasModel()
										? { editor: I, model: I.getModel() }
										: void 0;
								},
							)),
							this.D(
								(0, w.autorunWithStore)((v, S) => {
									if (!this.b.read(v)) return;
									const I = this.c.read(v);
									I && this.j(I.editor, I.model, S);
								}),
							);
					}
					j(l, y, $) {
						let v = -1;
						const S = new Set(),
							I = $.add(new i.$Zc()),
							T = this.a.map((k) => ({
								source: k.createSource(l, y),
								property: k,
							})),
							P = (0, E.$Fd)(l.onDidChangeModelContent, 100, $);
						$.add(
							l.onDidChangeCursorPosition((k) => {
								if (
									(I.clear(),
									k &&
										k.reason !== m.CursorChangeReason.Explicit &&
										k.reason !== m.CursorChangeReason.NotSet)
								) {
									S.clear();
									return;
								}
								const L = (N, A, R) => {
										const O = R === "line" ? N.lineSignal : N.positionSignal;
										if (
											!(
												!O ||
												!this.h.getEnabledState(O, !1).value ||
												!A.isPresent(D, R, void 0)
											)
										) {
											for (const B of ["sound", "announcement"])
												if (this.h.getEnabledState(O, !1, B).value) {
													const U =
														this.h.getDelayMs(O, B, R) + (P.get() ? 1e3 : 0);
													I.add(
														(0, t.$Oh)(() => {
															A.isPresent(D, R, void 0) &&
																((R !== "line" || !S.has(N)) &&
																	this.h.playSignal(O, { modality: B }),
																S.add(N));
														}, U),
													);
												}
										}
									},
									D = k.position,
									M = D.lineNumber;
								if (M !== v) {
									S.clear(), (v = M);
									for (const N of T) L(N.property, N.source, "line");
								}
								for (const N of T) L(N.property, N.source, "positional");
								for (const N of T) {
									if (
										![N.property.lineSignal, N.property.positionSignal].some(
											(O) => O && this.h.getEnabledState(O, !1).value,
										)
									)
										return;
									let A, R;
									I.add(
										(0, w.autorun)((O) => {
											const B = N.source.isPresentAtPosition(k.position, O),
												U = N.source.isPresentOnLine(k.position.lineNumber, O);
											A !== void 0 &&
												A !== void 0 &&
												(!A && B && L(N.property, N.source, "positional"),
												!R && U && L(N.property, N.source, "line")),
												(A = B),
												(R = U);
										}),
									);
								}
							}),
						);
					}
				};
				(e.$z2c = g),
					(e.$z2c = g = Ne([j(0, n.$IY), j(1, a.$Li), j(2, u.$Owb)], g));
				class p {
					static {
						this.notPresent = new p({
							isPresentAtPosition: () => !1,
							isPresentOnLine: () => !1,
						});
					}
					constructor(l) {
						(this.isPresentOnLine = l.isPresentOnLine),
							(this.isPresentAtPosition = l.isPresentAtPosition ?? (() => !1));
					}
					isPresent(l, y, $) {
						return y === "line"
							? this.isPresentOnLine(l.lineNumber, $)
							: this.isPresentAtPosition(l, $);
					}
				}
				let o = class {
					constructor(l, y, $, v) {
						(this.positionSignal = l),
							(this.lineSignal = y),
							(this.a = $),
							(this.b = v),
							(this.debounceWhileTyping = !0);
					}
					createSource(l, y) {
						const $ = (0, E.$Bd)("onMarkerChanged", this.b.onMarkerChanged);
						return new p({
							isPresentAtPosition: (v, S) => (
								$.read(S),
								this.b
									.read({ resource: y.uri })
									.some(
										(T) =>
											T.severity === this.a &&
											T.startLineNumber <= v.lineNumber &&
											v.lineNumber <= T.endLineNumber &&
											T.startColumn <= v.column &&
											v.column <= T.endColumn,
									)
							),
							isPresentOnLine: (v, S) => (
								$.read(S),
								this.b
									.read({ resource: y.uri })
									.some(
										(T) =>
											T.severity === this.a &&
											T.startLineNumber <= v &&
											v <= T.endLineNumber,
									)
							),
						});
					}
				};
				o = Ne([j(3, h.$aM)], o);
				class f {
					constructor() {
						this.lineSignal = u.$Twb.foldedArea;
					}
					createSource(l, y) {
						const $ = r.$ZNb.get(l);
						if (!$) return p.notPresent;
						const v = (0, w.observableFromPromise)(
							$.getFoldingModel() ?? Promise.resolve(void 0),
						);
						return new p({
							isPresentOnLine(S, I) {
								const P = v.read(I).value?.getRegionAtLine(S);
								return P ? P.isCollapsed && P.startLineNumber === S : !1;
							},
						});
					}
				}
				let b = class {
					constructor(l) {
						(this.a = l), (this.lineSignal = u.$Twb.break);
					}
					createSource(l, y) {
						const $ = (0, E.$Bd)(
								"onDidChangeBreakpoints",
								this.a.getModel().onDidChangeBreakpoints,
							),
							v = this.a;
						return new p({
							isPresentOnLine(S, I) {
								return (
									$.read(I),
									v.getModel().getBreakpoints({ uri: y.uri, lineNumber: S })
										.length > 0
								);
							},
						});
					}
				};
				b = Ne([j(0, c.$75)], b);
			},
		),
		define(
			de[3259],
			he([1, 0, 18, 9, 3, 5, 20, 25]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vIb = e.$uIb = void 0),
					(e.$uIb = (0, E.$Mi)("currentFileService"));
				let m = class extends w.$1c {
					constructor(u, a) {
						super(), (this.a = u), (this.b = a);
					}
					getCurrentFile() {
						const u = this.a.activeEditorPane;
						if (!u) return null;
						const a = u.input?.resource;
						return !a || !(a instanceof i.URI)
							? null
							: { relativePath: this.b.asRelativePath(a) };
					}
				};
				(e.$vIb = m),
					(e.$vIb = m = Ne([j(0, t.$IY), j(1, d.$Vi)], m)),
					(0, C.$lK)(e.$uIb, m, C.InstantiationType.Delayed);
			},
		),
		define(
			de[3260],
			he([
				1, 0, 255, 5, 978, 93, 3006, 4, 98, 17, 279, 7, 6, 18, 281, 42, 3, 64,
				35, 21, 97, 264, 11, 8, 92, 2389,
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
			) {
				"use strict";
				var S;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$JYc = void 0),
					(t = mt(t)),
					(C = mt(C));
				var I;
				(function (L) {
					(L.Loading = "loading"), (L.Message = "message"), (L.Data = "data");
				})(I || (I = {}));
				class T {
					static store(D, M) {
						M.store(
							"callHierarchyPeekLayout",
							JSON.stringify(D),
							b.StorageScope.PROFILE,
							b.StorageTarget.MACHINE,
						);
					}
					static retrieve(D) {
						const M = D.get(
								"callHierarchyPeekLayout",
								b.StorageScope.PROFILE,
								"{}",
							),
							N = { ratio: 0.7, height: 17 };
						try {
							return { ...N, ...JSON.parse(M) };
						} catch {
							return N;
						}
					}
					constructor(D, M) {
						(this.ratio = D), (this.height = M);
					}
				}
				class P extends E.$FMb {}
				let k = class extends t.$9Mb {
					static {
						S = this;
					}
					static {
						this.TitleMenu = new y.$XX("callhierarchy/title");
					}
					constructor(D, M, N, A, R, O, B, U, z, F, x) {
						super(
							D,
							{
								showFrame: !0,
								showArrow: !0,
								isResizeable: !0,
								isAccessible: !0,
							},
							x,
						),
							(this.Z = M),
							(this.ab = N),
							(this.bb = R),
							(this.cb = O),
							(this.db = B),
							(this.eb = U),
							(this.fb = z),
							(this.gb = F),
							(this.hb = x),
							(this.i = new Map()),
							(this.Y = new p.$Zc()),
							this.create(),
							this.bb.addExclusiveWidget(D, this),
							this.ib(A.getColorTheme()),
							this.o.add(A.onDidColorThemeChange(this.ib, this)),
							this.o.add(this.Y);
					}
					dispose() {
						T.store(this.X, this.eb),
							this.c.dispose(),
							this.d.dispose(),
							this.m.dispose(),
							super.dispose();
					}
					get direction() {
						return this.ab;
					}
					ib(D) {
						const M = D.getColor(t.$aNb) || s.$UL.transparent;
						this.style({
							arrowColor: M,
							frameColor: M,
							headerBackgroundColor: D.getColor(t.$0Mb) || s.$UL.transparent,
							primaryHeadingColor: D.getColor(t.$$Mb),
							secondaryHeadingColor: D.getColor(t.$_Mb),
						});
					}
					P(D) {
						super.P(D, !0);
						const M = this.fb.createMenu(S.TitleMenu, this.gb),
							N = () => {
								const A = [];
								(0, v.$Kyb)(M, void 0, A),
									this.K.clear(),
									this.K.push(A, { label: !1, icon: !0 });
							};
						this.o.add(M), this.o.add(M.onDidChange(N)), N();
					}
					T(D) {
						(this.X = T.retrieve(this.eb)),
							(this.r = new a.$pgb(0, 0)),
							(this.a = D),
							D.classList.add("call-hierarchy");
						const M = document.createElement("div");
						M.classList.add("message"),
							D.appendChild(M),
							(this.b = M),
							(this.b.tabIndex = 0);
						const N = document.createElement("div");
						N.classList.add("results"),
							D.appendChild(N),
							(this.c = new u.$vob(N, {
								orientation: u.Orientation.HORIZONTAL,
							}));
						const A = document.createElement("div");
						A.classList.add("editor"), N.appendChild(A);
						const R = {
							scrollBeyondLastLine: !1,
							scrollbar: {
								verticalScrollbarSize: 14,
								horizontal: "auto",
								useShadows: !0,
								verticalHasArrows: !1,
								horizontalHasArrows: !1,
								alwaysConsumeMouseWheel: !1,
							},
							overviewRulerLanes: 2,
							fixedOverflowWidgets: !0,
							minimap: { enabled: !1 },
						};
						this.m = this.hb.createInstance(n.$wDb, A, R, {}, this.editor);
						const O = document.createElement("div");
						O.classList.add("tree"), N.appendChild(O);
						const B = {
							sorter: new C.$EYc(),
							accessibilityProvider: new C.$IYc(() => this.ab),
							identityProvider: new C.$FYc(() => this.ab),
							expandOnlyOnTwistieClick: !0,
							overrideStyles: { listBackground: t.$bNb },
						};
						(this.d = this.hb.createInstance(
							P,
							"CallHierarchyPeek",
							O,
							new C.$HYc(),
							[this.hb.createInstance(C.$GYc)],
							this.hb.createInstance(C.$DYc, () => this.ab),
							B,
						)),
							this.c.addView(
								{
									onDidChange: h.Event.None,
									element: A,
									minimumSize: 200,
									maximumSize: Number.MAX_VALUE,
									layout: (U) => {
										this.r.height &&
											this.m.layout({ height: this.r.height, width: U });
									},
								},
								u.Sizing.Distribute,
							),
							this.c.addView(
								{
									onDidChange: h.Event.None,
									element: O,
									minimumSize: 100,
									maximumSize: Number.MAX_VALUE,
									layout: (U) => {
										this.r.height && this.d.layout(this.r.height, U);
									},
								},
								u.Sizing.Distribute,
							),
							this.o.add(
								this.c.onDidSashChange(() => {
									this.r.width &&
										(this.X.ratio = this.c.getViewSize(0) / this.r.width);
								}),
							),
							this.o.add(this.d.onDidChangeFocus(this.lb, this)),
							this.o.add(
								this.m.onMouseDown((U) => {
									const { event: z, target: F } = U;
									if (z.detail !== 2) return;
									const [x] = this.d.getFocus();
									x &&
										(this.dispose(),
										this.cb.openEditor({
											resource: x.item.uri,
											options: { selection: F.range },
										}));
								}),
							),
							this.o.add(
								this.d.onMouseDblClick((U) => {
									U.target !== l.TreeMouseEventTarget.Twistie &&
										U.element &&
										(this.dispose(),
										this.cb.openEditor({
											resource: U.element.item.uri,
											options: {
												selection: U.element.item.selectionRange,
												pinned: !0,
											},
										}));
								}),
							),
							this.o.add(
								this.d.onDidChangeSelection((U) => {
									const [z] = U.elements;
									z &&
										(0, a.$8gb)(U.browserEvent) &&
										(this.dispose(),
										this.cb.openEditor({
											resource: z.item.uri,
											options: { selection: z.item.selectionRange, pinned: !0 },
										}));
								}),
							);
					}
					async lb() {
						const [D] = this.d.getFocus();
						if (!D) return;
						this.Y.clear();
						const M = {
							description: "call-hierarchy-decoration",
							stickiness: o.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							className: "call-decoration",
							overviewRuler: {
								color: (0, f.$jP)(t.$kNb),
								position: o.OverviewRulerLane.Center,
							},
						};
						let N;
						this.ab === w.CallHierarchyDirection.CallsFrom
							? (N = D.parent ? D.parent.item.uri : D.model.root.uri)
							: (N = D.item.uri);
						const A = await this.db.createModelReference(N);
						this.m.setModel(A.object.textEditorModel);
						const R = [];
						let O,
							B = D.locations;
						B || (B = [{ uri: D.item.uri, range: D.item.selectionRange }]);
						for (const z of B)
							z.uri.toString() === N.toString() &&
								(R.push({ range: z.range, options: M }),
								(O = O ? r.$iL.plusRange(z.range, O) : z.range));
						if (O) {
							this.m.revealRangeInCenter(O, m.ScrollType.Immediate);
							const z = this.m.createDecorationsCollection(R);
							this.Y.add((0, p.$Yc)(() => z.clear()));
						}
						this.Y.add(A);
						const U =
							this.ab === w.CallHierarchyDirection.CallsFrom
								? (0, d.localize)(4532, null, D.model.root.name)
								: (0, d.localize)(4533, null, D.model.root.name);
						this.setTitle(U);
					}
					showLoading() {
						(this.a.dataset.state = I.Loading),
							this.setTitle((0, d.localize)(4534, null)),
							this.mb();
					}
					showMessage(D) {
						(this.a.dataset.state = I.Message),
							this.setTitle(""),
							this.setMetaTitle(""),
							(this.b.innerText = D),
							this.mb(),
							this.b.focus();
					}
					async showModel(D) {
						this.mb();
						const M = this.i.get(this.ab);
						await this.d.setInput(D, M);
						const N = this.d.getNode(D).children[0];
						await this.d.expand(N.element),
							N.children.length === 0
								? this.showMessage(
										this.ab === w.CallHierarchyDirection.CallsFrom
											? (0, d.localize)(4535, null, D.root.name)
											: (0, d.localize)(4536, null, D.root.name),
									)
								: ((this.a.dataset.state = I.Data),
									(!M || this.d.getFocus().length === 0) &&
										this.d.setFocus([N.children[0].element]),
									this.d.domFocus(),
									this.lb());
					}
					getModel() {
						return this.d.getInput();
					}
					getFocused() {
						return this.d.getFocus()[0];
					}
					async updateDirection(D) {
						const M = this.d.getInput();
						M &&
							D !== this.ab &&
							(this.i.set(this.ab, this.d.getViewState()),
							(this.ab = D),
							await this.showModel(M));
					}
					mb() {
						this.x ||
							(this.editor.revealLineInCenterIfOutsideViewport(
								this.Z.lineNumber,
								m.ScrollType.Smooth,
							),
							super.show(r.$iL.fromPositions(this.Z), this.X.height));
					}
					D(D) {
						this.r && this.W(this.r.height, D);
					}
					W(D, M) {
						(this.r.height !== D || this.r.width !== M) &&
							(super.W(D, M),
							(this.r = new a.$pgb(M, D)),
							(this.X.height = this.n ? this.n.heightInLines : this.X.height),
							this.c.layout(M),
							this.c.resizeView(0, M * this.X.ratio));
					}
				};
				(e.$JYc = k),
					(e.$JYc =
						k =
						S =
							Ne(
								[
									j(3, f.$iP),
									j(4, t.$7Mb),
									j(5, c.$IY),
									j(6, g.$MO),
									j(7, b.$lq),
									j(8, y.$YX),
									j(9, $.$6j),
									j(10, i.$Li),
								],
								k,
							));
			},
		),
		define(
			de[3261],
			he([
				1, 0, 4, 978, 33, 5, 3260, 6, 46, 8, 3, 43, 27, 71, 255, 21, 65, 17, 11,
				14, 79, 29,
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
			) {
				"use strict";
				var y;
				Object.defineProperty(e, "__esModule", { value: !0 });
				const $ = new r.$5j(
						"editorHasCallHierarchyProvider",
						!1,
						(0, t.localize)(4520, null),
					),
					v = new r.$5j(
						"callHierarchyVisible",
						!1,
						(0, t.localize)(4521, null),
					),
					S = new r.$5j("callHierarchyDirection", void 0, {
						type: "string",
						description: (0, t.localize)(4522, null),
					});
				function I(P) {
					return P === i.CallHierarchyDirection.CallsFrom ||
						P === i.CallHierarchyDirection.CallsTo
						? P
						: i.CallHierarchyDirection.CallsTo;
				}
				let T = class {
					static {
						y = this;
					}
					static {
						this.Id = "callHierarchy";
					}
					static get(k) {
						return k.getContribution(y.Id);
					}
					static {
						this.a = "callHierarchy/defaultDirection";
					}
					constructor(k, L, D, M, N) {
						(this.h = k),
							(this.i = L),
							(this.j = D),
							(this.k = M),
							(this.l = N),
							(this.e = new u.$Zc()),
							(this.f = new u.$Zc()),
							(this.c = v.bindTo(this.i)),
							(this.b = $.bindTo(this.i)),
							(this.d = S.bindTo(this.i)),
							this.e.add(
								d.Event.any(
									k.onDidChangeModel,
									k.onDidChangeModelLanguage,
									i.$O1.onDidChange,
								)(() => {
									this.b.set(k.hasModel() && i.$O1.has(k.getModel()));
								}),
							),
							this.e.add(this.f);
					}
					dispose() {
						this.b.reset(), this.c.reset(), this.e.dispose();
					}
					async startCallHierarchyFromEditor() {
						if ((this.f.clear(), !this.h.hasModel())) return;
						const k = this.h.getModel(),
							L = this.h.getPosition();
						if (!i.$O1.has(k)) return;
						const D = new w.$Ce(),
							M = i.$P1.create(k, L, D.token),
							N = I(
								this.j.get(
									y.a,
									g.StorageScope.PROFILE,
									i.CallHierarchyDirection.CallsTo,
								),
							);
						this.m(L, N, M, D);
					}
					async startCallHierarchyFromCallHierarchy() {
						if (!this.g) return;
						const k = this.g.getModel(),
							L = this.g.getFocused();
						if (!L || !k) return;
						const D = await this.k.openCodeEditor(
							{ resource: L.item.uri },
							this.h,
						);
						if (!D) return;
						const M = k.fork(L.item);
						this.f.clear(),
							y
								.get(D)
								?.m(
									o.$iL.lift(M.root.selectionRange).getStartPosition(),
									this.g.direction,
									Promise.resolve(M),
									new w.$Ce(),
								);
					}
					m(k, L, D, M) {
						this.c.set(!0),
							this.d.set(L),
							d.Event.any(
								this.h.onDidChangeModel,
								this.h.onDidChangeModelLanguage,
							)(this.endCallHierarchy, this, this.f),
							(this.g = this.l.createInstance(C.$JYc, this.h, k, L)),
							this.g.showLoading(),
							this.f.add(
								this.g.onDidClose(() => {
									this.endCallHierarchy(),
										this.j.store(
											y.a,
											this.g.direction,
											g.StorageScope.PROFILE,
											g.StorageTarget.USER,
										);
								}),
							),
							this.f.add({
								dispose() {
									M.dispose(!0);
								},
							}),
							this.f.add(this.g),
							D.then((N) => {
								M.token.isCancellationRequested ||
									(N
										? (this.f.add(N), this.g.showModel(N))
										: this.g.showMessage((0, t.localize)(4523, null)));
							}).catch((N) => {
								if ((0, l.$8)(N)) {
									this.endCallHierarchy();
									return;
								}
								this.g.showMessage((0, t.localize)(4524, null));
							});
					}
					showOutgoingCalls() {
						this.g?.updateDirection(i.CallHierarchyDirection.CallsFrom),
							this.d.set(i.CallHierarchyDirection.CallsFrom);
					}
					showIncomingCalls() {
						this.g?.updateDirection(i.CallHierarchyDirection.CallsTo),
							this.d.set(i.CallHierarchyDirection.CallsTo);
					}
					endCallHierarchy() {
						this.f.clear(), this.c.set(!1), this.h.focus();
					}
				};
				(T = y = Ne([j(1, r.$6j), j(2, g.$lq), j(3, p.$dtb), j(4, E.$Li)], T)),
					(0, m.$qtb)(T.Id, T, m.EditorContributionInstantiation.Eager),
					(0, f.$4X)(
						class extends m.$ktb {
							constructor() {
								super({
									id: "editor.showCallHierarchy",
									title: (0, t.localize2)(4528, "Peek Call Hierarchy"),
									menu: {
										id: f.$XX.EditorContextPeek,
										group: "navigation",
										order: 1e3,
										when: r.$Kj.and(
											$,
											n.PeekContext.notInPeekEditor,
											c.EditorContextKeys.isInEmbeddedEditor.toNegated(),
										),
									},
									keybinding: {
										when: c.EditorContextKeys.editorTextFocus,
										weight: a.KeybindingWeight.WorkbenchContrib,
										primary: h.KeyMod.Shift + h.KeyMod.Alt + h.KeyCode.KeyH,
									},
									precondition: r.$Kj.and($, n.PeekContext.notInPeekEditor),
									f1: !0,
								});
							}
							async runEditorCommand(k, L) {
								return T.get(L)?.startCallHierarchyFromEditor();
							}
						},
					),
					(0, f.$4X)(
						class extends m.$ktb {
							constructor() {
								super({
									id: "editor.showIncomingCalls",
									title: (0, t.localize2)(4529, "Show Incoming Calls"),
									icon: (0, s.$$O)(
										"callhierarchy-incoming",
										b.$ak.callIncoming,
										(0, t.localize)(4525, null),
									),
									precondition: r.$Kj.and(
										v,
										S.isEqualTo(i.CallHierarchyDirection.CallsFrom),
									),
									keybinding: {
										weight: a.KeybindingWeight.WorkbenchContrib,
										primary: h.KeyMod.Shift + h.KeyMod.Alt + h.KeyCode.KeyH,
									},
									menu: {
										id: C.$JYc.TitleMenu,
										when: S.isEqualTo(i.CallHierarchyDirection.CallsFrom),
										order: 1,
									},
								});
							}
							runEditorCommand(P, k) {
								return T.get(k)?.showIncomingCalls();
							}
						},
					),
					(0, f.$4X)(
						class extends m.$ktb {
							constructor() {
								super({
									id: "editor.showOutgoingCalls",
									title: (0, t.localize2)(4530, "Show Outgoing Calls"),
									icon: (0, s.$$O)(
										"callhierarchy-outgoing",
										b.$ak.callOutgoing,
										(0, t.localize)(4526, null),
									),
									precondition: r.$Kj.and(
										v,
										S.isEqualTo(i.CallHierarchyDirection.CallsTo),
									),
									keybinding: {
										weight: a.KeybindingWeight.WorkbenchContrib,
										primary: h.KeyMod.Shift + h.KeyMod.Alt + h.KeyCode.KeyH,
									},
									menu: {
										id: C.$JYc.TitleMenu,
										when: S.isEqualTo(i.CallHierarchyDirection.CallsTo),
										order: 1,
									},
								});
							}
							runEditorCommand(P, k) {
								return T.get(k)?.showOutgoingCalls();
							}
						},
					),
					(0, f.$4X)(
						class extends m.$ktb {
							constructor() {
								super({
									id: "editor.refocusCallHierarchy",
									title: (0, t.localize2)(4531, "Refocus Call Hierarchy"),
									precondition: v,
									keybinding: {
										weight: a.KeybindingWeight.WorkbenchContrib,
										primary: h.KeyMod.Shift + h.KeyCode.Enter,
									},
								});
							}
							async runEditorCommand(P, k) {
								return T.get(k)?.startCallHierarchyFromCallHierarchy();
							}
						},
					),
					(0, f.$4X)(
						class extends m.$ktb {
							constructor() {
								super({
									id: "editor.closeCallHierarchy",
									title: (0, t.localize)(4527, null),
									icon: b.$ak.close,
									precondition: v,
									keybinding: {
										weight: a.KeybindingWeight.WorkbenchContrib + 10,
										primary: h.KeyCode.Escape,
										when: r.$Kj.not("config.editor.stablePeek"),
									},
									menu: { id: C.$JYc.TitleMenu, order: 1e3 },
								});
							}
							runEditorCommand(P, k) {
								return T.get(k)?.endCallHierarchy();
							}
						},
					);
			},
		),
		