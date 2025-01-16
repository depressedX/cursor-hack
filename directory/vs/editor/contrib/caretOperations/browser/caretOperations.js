define(de[2801], he([1, 0, 46, 71, 2580, 4]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (E = mt(E));
			class C extends t.$itb {
				constructor(u, a) {
					super(a), (this.d = u);
				}
				run(u, a) {
					if (!a.hasModel()) return;
					const h = [],
						c = a.getSelections();
					for (const n of c) h.push(new w.$fzb(n, this.d));
					a.pushUndoStop(), a.executeCommands(this.id, h), a.pushUndoStop();
				}
			}
			class d extends C {
				constructor() {
					super(!0, {
						id: "editor.action.moveCarretLeftAction",
						label: E.localize(871, null),
						alias: "Move Selected Text Left",
						precondition: i.EditorContextKeys.writable,
					});
				}
			}
			class m extends C {
				constructor() {
					super(!1, {
						id: "editor.action.moveCarretRightAction",
						label: E.localize(872, null),
						alias: "Move Selected Text Right",
						precondition: i.EditorContextKeys.writable,
					});
				}
			}
			(0, t.$ntb)(d), (0, t.$ntb)(m);
		}),
		define(
			de[2802],
			he([1, 0, 27, 46, 655, 1192, 17, 71, 4, 43]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (m = mt(m));
				class u extends i.$itb {
					constructor() {
						super({
							id: "editor.action.transposeLetters",
							label: m.localize(873, null),
							alias: "Transpose Letters",
							precondition: d.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: d.EditorContextKeys.textInputFocus,
								primary: 0,
								mac: { primary: t.KeyMod.WinCtrl | t.KeyCode.KeyT },
								weight: r.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(h, c) {
						if (!c.hasModel()) return;
						const n = c.getModel(),
							g = [],
							p = c.getSelections();
						for (const o of p) {
							if (!o.isEmpty()) continue;
							const f = o.startLineNumber,
								b = o.startColumn,
								s = n.getLineMaxColumn(f);
							if (f === 1 && (b === 1 || (b === 2 && s === 2))) continue;
							const l =
									b === s
										? o.getPosition()
										: E.$Dtb.rightPosition(
												n,
												o.getPosition().lineNumber,
												o.getPosition().column,
											),
								y = E.$Dtb.leftPosition(n, l),
								$ = E.$Dtb.leftPosition(n, y),
								v = n.getValueInRange(C.$iL.fromPositions($, y)),
								S = n.getValueInRange(C.$iL.fromPositions(y, l)),
								I = C.$iL.fromPositions($, l);
							g.push(new w.$wtb(I, S + v));
						}
						g.length > 0 &&
							(c.pushUndoStop(),
							c.executeCommands(this.id, g),
							c.pushUndoStop());
					}
				}
				(0, i.$ntb)(u);
			},
		),
		define(
			de[2803],
			he([1, 0, 27, 46, 38, 17, 71, 152, 1548, 1549, 4, 11, 43]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (u = mt(u));
				class c extends i.$itb {
					constructor(b, s) {
						super(s), (this.d = b);
					}
					run(b, s) {
						const l = b.get(d.$aN);
						if (!s.hasModel()) return;
						const y = s.getModel(),
							$ = [],
							v = y.getOptions(),
							S = s.getOption(w.EditorOption.comments),
							I = s
								.getSelections()
								.map((P, k) => ({
									selection: P,
									index: k,
									ignoreFirstLine: !1,
								}));
						I.sort((P, k) =>
							E.$iL.compareRangesUsingStarts(P.selection, k.selection),
						);
						let T = I[0];
						for (let P = 1; P < I.length; P++) {
							const k = I[P];
							T.selection.endLineNumber === k.selection.startLineNumber &&
								(T.index < k.index
									? (k.ignoreFirstLine = !0)
									: ((T.ignoreFirstLine = !0), (T = k)));
						}
						for (const P of I)
							$.push(
								new r.$Chc(
									l,
									P.selection,
									v.indentSize,
									this.d,
									S.insertSpace,
									S.ignoreEmptyLines,
									P.ignoreFirstLine,
								),
							);
						s.pushUndoStop(), s.executeCommands(this.id, $), s.pushUndoStop();
					}
				}
				class n extends c {
					constructor() {
						super(r.Type.Toggle, {
							id: "editor.action.commentLine",
							label: u.localize(961, null),
							alias: "Toggle Line Comment",
							precondition: C.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: C.EditorContextKeys.editorTextFocus,
								primary: t.KeyMod.CtrlCmd | t.KeyCode.Slash,
								weight: h.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: a.$XX.MenubarEditMenu,
								group: "5_insert",
								title: u.localize(962, null),
								order: 1,
							},
						});
					}
				}
				class g extends c {
					constructor() {
						super(r.Type.ForceAdd, {
							id: "editor.action.addCommentLine",
							label: u.localize(963, null),
							alias: "Add Line Comment",
							precondition: C.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: C.EditorContextKeys.editorTextFocus,
								primary: (0, t.$os)(t.$ps, t.KeyMod.CtrlCmd | t.KeyCode.KeyC),
								mac: {
									primary: (0, t.$os)(t.$qs, t.KeyMod.CtrlCmd | t.KeyCode.KeyC),
								},
								weight: h.KeybindingWeight.EditorContrib,
							},
						});
					}
				}
				class p extends c {
					constructor() {
						super(r.Type.ForceRemove, {
							id: "editor.action.removeCommentLine",
							label: u.localize(964, null),
							alias: "Remove Line Comment",
							precondition: C.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: C.EditorContextKeys.editorTextFocus,
								primary: (0, t.$os)(t.$ps, t.KeyMod.CtrlCmd | t.KeyCode.KeyU),
								mac: {
									primary: (0, t.$os)(t.$qs, t.KeyMod.CtrlCmd | t.KeyCode.KeyU),
								},
								weight: h.KeybindingWeight.EditorContrib,
							},
						});
					}
				}
				class o extends i.$itb {
					constructor() {
						super({
							id: "editor.action.blockComment",
							label: u.localize(965, null),
							alias: "Toggle Block Comment",
							precondition: C.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: C.EditorContextKeys.editorTextFocus,
								primary: t.KeyMod.Shift | t.KeyMod.Alt | t.KeyCode.KeyA,
								linux: {
									primary: t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.KeyA,
								},
								weight: h.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: a.$XX.MenubarEditMenu,
								group: "5_insert",
								title: u.localize(966, null),
								order: 2,
							},
						});
					}
					run(b, s) {
						const l = b.get(d.$aN);
						if (!s.hasModel()) return;
						const y = s.getOption(w.EditorOption.comments),
							$ = [],
							v = s.getSelections();
						for (const S of v) $.push(new m.$Bhc(S, y.insertSpace, l));
						s.pushUndoStop(), s.executeCommands(this.id, $), s.pushUndoStop();
					}
				}
				(0, i.$ntb)(n), (0, i.$ntb)(g), (0, i.$ntb)(p), (0, i.$ntb)(o);
			},
		),
		define(
			de[2804],
			he([1, 0, 27, 3, 46, 71, 4, 43]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Fhc = e.$Ehc = e.$Dhc = void 0),
					(C = mt(C));
				class m {
					constructor(n) {
						this.selections = n;
					}
					equals(n) {
						const g = this.selections.length,
							p = n.selections.length;
						if (g !== p) return !1;
						for (let o = 0; o < g; o++)
							if (!this.selections[o].equalsSelection(n.selections[o]))
								return !1;
						return !0;
					}
				}
				class r {
					constructor(n, g, p) {
						(this.cursorState = n), (this.scrollTop = g), (this.scrollLeft = p);
					}
				}
				class u extends i.$1c {
					static {
						this.ID = "editor.contrib.cursorUndoRedoController";
					}
					static get(n) {
						return n.getContribution(u.ID);
					}
					constructor(n) {
						super(),
							(this.a = n),
							(this.b = !1),
							(this.c = []),
							(this.f = []),
							this.D(
								n.onDidChangeModel((g) => {
									(this.c = []), (this.f = []);
								}),
							),
							this.D(
								n.onDidChangeModelContent((g) => {
									(this.c = []), (this.f = []);
								}),
							),
							this.D(
								n.onDidChangeCursorSelection((g) => {
									if (
										this.b ||
										!g.oldSelections ||
										g.oldModelVersionId !== g.modelVersionId
									)
										return;
									const p = new m(g.oldSelections);
									(this.c.length > 0 &&
										this.c[this.c.length - 1].cursorState.equals(p)) ||
										(this.c.push(new r(p, n.getScrollTop(), n.getScrollLeft())),
										(this.f = []),
										this.c.length > 50 && this.c.shift());
								}),
							);
					}
					cursorUndo() {
						!this.a.hasModel() ||
							this.c.length === 0 ||
							(this.f.push(
								new r(
									new m(this.a.getSelections()),
									this.a.getScrollTop(),
									this.a.getScrollLeft(),
								),
							),
							this.g(this.c.pop()));
					}
					cursorRedo() {
						!this.a.hasModel() ||
							this.f.length === 0 ||
							(this.c.push(
								new r(
									new m(this.a.getSelections()),
									this.a.getScrollTop(),
									this.a.getScrollLeft(),
								),
							),
							this.g(this.f.pop()));
					}
					g(n) {
						(this.b = !0),
							this.a.setSelections(n.cursorState.selections),
							this.a.setScrollPosition({
								scrollTop: n.scrollTop,
								scrollLeft: n.scrollLeft,
							}),
							(this.b = !1);
					}
				}
				e.$Dhc = u;
				class a extends w.$itb {
					constructor() {
						super({
							id: "cursorUndo",
							label: C.localize(977, null),
							alias: "Cursor Undo",
							precondition: void 0,
							kbOpts: {
								kbExpr: E.EditorContextKeys.textInputFocus,
								primary: t.KeyMod.CtrlCmd | t.KeyCode.KeyU,
								weight: d.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(n, g, p) {
						u.get(g)?.cursorUndo();
					}
				}
				e.$Ehc = a;
				class h extends w.$itb {
					constructor() {
						super({
							id: "cursorRedo",
							label: C.localize(978, null),
							alias: "Cursor Redo",
							precondition: void 0,
						});
					}
					run(n, g, p) {
						u.get(g)?.cursorRedo();
					}
				}
				(e.$Fhc = h),
					(0, w.$qtb)(u.ID, u, w.EditorContributionInstantiation.Eager),
					(0, w.$ntb)(a),
					(0, w.$ntb)(h);
			},
		),
		define(
			de[2805],
			he([1, 0, 24, 77, 1641, 370, 69, 204, 3, 6]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let u = class extends m.$1c {
					constructor(h, c, n) {
						super(),
							(this.b = h),
							(this.c = c),
							(this.f = n),
							(this.a = (0, i.observableValue)(this, void 0));
						const g = (0, i.observableSignalFromEvent)(
								"documentSymbolProvider.onDidChange",
								this.c.documentSymbolProvider.onDidChange,
							),
							p = (0, i.observableSignalFromEvent)(
								"_textModel.onDidChangeContent",
								r.Event.debounce(
									(o) => this.b.onDidChangeContent(o),
									() => {},
									100,
								),
							);
						this.D(
							(0, i.autorunWithStore)(async (o, f) => {
								g.read(o), p.read(o);
								const b = f.add(new E.$Iwb()),
									s = await this.f.getOrCreate(this.b, b.token);
								f.isDisposed || this.a.set(s, void 0);
							}),
						);
					}
					getBreadcrumbItems(h, c) {
						const n = this.a.read(c);
						if (!n) return [];
						const g = n
							.asListOfDocumentSymbols()
							.filter(
								(p) =>
									h.contains(p.range.startLineNumber) &&
									!h.contains(p.range.endLineNumber),
							);
						return (
							g.sort(
								(0, t.$bc)(
									(0, t.$0b)(
										(p) => p.range.endLineNumber - p.range.startLineNumber,
										t.$_b,
									),
								),
							),
							g.map((p) => ({
								name: p.name,
								kind: p.kind,
								startLineNumber: p.range.startLineNumber,
							}))
						);
					}
				};
				(u = Ne([j(1, C.$k3), j(2, d.$9Db)], u)),
					w.$Yyb.setBreadcrumbsSourceFactory((a, h) => h.createInstance(u, a));
			},
		),
		define(
			de[2806],
			he([1, 0, 27, 46, 8, 43, 33, 273, 5, 20, 4]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Lzb = void 0);
				const a = (0, m.$Mi)("IEditorCancelService"),
					h = new w.$5j(
						"cancellableOperation",
						!1,
						(0, u.localize)(1003, null),
					);
				(0, r.$lK)(
					a,
					class {
						constructor() {
							this.a = new WeakMap();
						}
						add(n, g) {
							let p = this.a.get(n);
							p ||
								((p = n.invokeWithinContext((f) => {
									const b = h.bindTo(f.get(w.$6j)),
										s = new d.$$c();
									return { key: b, tokens: s };
								})),
								this.a.set(n, p));
							let o;
							return (
								p.key.set(!0),
								(o = p.tokens.push(g)),
								() => {
									o && (o(), p.key.set(!p.tokens.isEmpty()), (o = void 0));
								}
							);
						}
						cancel(n) {
							const g = this.a.get(n);
							if (!g) return;
							const p = g.tokens.pop();
							p && (p.cancel(), g.key.set(!g.tokens.isEmpty()));
						}
					},
					r.InstantiationType.Delayed,
				);
				class c extends C.$Ce {
					constructor(g, p) {
						super(p),
							(this.editor = g),
							(this.a = g.invokeWithinContext((o) => o.get(a).add(g, this)));
					}
					dispose() {
						this.a(), super.dispose();
					}
				}
				(e.$Lzb = c),
					(0, i.$mtb)(
						new (class extends i.$htb {
							constructor() {
								super({
									id: "editor.cancelOperation",
									kbOpts: {
										weight: E.KeybindingWeight.EditorContrib,
										primary: t.KeyCode.Escape,
									},
									precondition: h,
								});
							}
							runEditorCommand(n, g) {
								n.get(a).cancel(g);
							}
						})(),
					);
			},
		),
		define(
			de[439],
			he([1, 0, 37, 17, 33, 3, 2806]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ozb = e.$Nzb = e.$Mzb = e.CodeEditorStateFlag = void 0),
					(t = mt(t));
				var d;
				(function (a) {
					(a[(a.Value = 1)] = "Value"),
						(a[(a.Selection = 2)] = "Selection"),
						(a[(a.Position = 4)] = "Position"),
						(a[(a.Scroll = 8)] = "Scroll");
				})(d || (e.CodeEditorStateFlag = d = {}));
				class m {
					constructor(h, c) {
						if (((this.a = c), this.a & d.Value)) {
							const n = h.getModel();
							this.d = n
								? t.$kf("{0}#{1}", n.uri.toString(), n.getVersionId())
								: null;
						} else this.d = null;
						this.a & d.Position ? (this.b = h.getPosition()) : (this.b = null),
							this.a & d.Selection
								? (this.c = h.getSelection())
								: (this.c = null),
							this.a & d.Scroll
								? ((this.f = h.getScrollLeft()), (this.g = h.getScrollTop()))
								: ((this.f = -1), (this.g = -1));
					}
					h(h) {
						if (!(h instanceof m)) return !1;
						const c = h;
						return !(
							this.d !== c.d ||
							this.f !== c.f ||
							this.g !== c.g ||
							(!this.b && c.b) ||
							(this.b && !c.b) ||
							(this.b && c.b && !this.b.equals(c.b)) ||
							(!this.c && c.c) ||
							(this.c && !c.c) ||
							(this.c && c.c && !this.c.equalsRange(c.c))
						);
					}
					validate(h) {
						return this.h(new m(h, this.a));
					}
				}
				e.$Mzb = m;
				class r extends C.$Lzb {
					constructor(h, c, n, g) {
						super(h, g),
							(this.b = new E.$Zc()),
							c & d.Position &&
								this.b.add(
									h.onDidChangeCursorPosition((p) => {
										(!n || !i.$iL.containsPosition(n, p.position)) &&
											this.cancel();
									}),
								),
							c & d.Selection &&
								this.b.add(
									h.onDidChangeCursorSelection((p) => {
										(!n || !i.$iL.containsRange(n, p.selection)) &&
											this.cancel();
									}),
								),
							c & d.Scroll &&
								this.b.add(h.onDidScrollChange((p) => this.cancel())),
							c & d.Value &&
								(this.b.add(h.onDidChangeModel((p) => this.cancel())),
								this.b.add(h.onDidChangeModelContent((p) => this.cancel())));
					}
					dispose() {
						this.b.dispose(), super.dispose();
					}
				}
				e.$Nzb = r;
				class u extends w.$Ce {
					constructor(h, c) {
						super(c), (this.a = h.onDidChangeContent(() => this.cancel()));
					}
					dispose() {
						this.a.dispose(), super.dispose();
					}
				}
				e.$Ozb = u;
			},
		),
		define(
			de[393],
			he([
				1, 0, 24, 33, 29, 3, 9, 199, 17, 104, 74, 69, 67, 439, 4, 31, 40, 84,
				32, 291, 318,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ApplyCodeActionReason =
						e.$TAb =
						e.$SAb =
						e.$RAb =
						e.$QAb =
						e.$PAb =
						e.$OAb =
						e.$NAb =
						e.$MAb =
						e.$LAb =
							void 0),
					(e.$UAb = $),
					(e.$VAb = P),
					(u = mt(u)),
					(n = mt(n)),
					(e.$LAb = "editor.action.codeAction"),
					(e.$MAb = "editor.action.quickFix"),
					(e.$NAb = "editor.action.autoFix"),
					(e.$OAb = "editor.action.refactor"),
					(e.$PAb = "editor.action.refactor.preview"),
					(e.$QAb = "editor.action.sourceAction"),
					(e.$RAb = "editor.action.organizeImports"),
					(e.$SAb = "editor.action.fixAll"),
					(e.$TAb = "editor.action.aiRefactor");
				class l extends E.$1c {
					static c(D, M) {
						return D.isPreferred && !M.isPreferred
							? -1
							: !D.isPreferred && M.isPreferred
								? 1
								: 0;
					}
					static f({ action: D }, { action: M }) {
						return D.isAI && !M.isAI
							? 1
							: !D.isAI && M.isAI
								? -1
								: (0, t.$Pb)(D.diagnostics)
									? (0, t.$Pb)(M.diagnostics)
										? l.c(D, M)
										: -1
									: (0, t.$Pb)(M.diagnostics)
										? 1
										: l.c(D, M);
					}
					constructor(D, M, N) {
						super(),
							(this.documentation = M),
							this.D(N),
							(this.allActions = [...D].sort(l.f)),
							(this.validActions = this.allActions.filter(
								({ action: A }) => !A.disabled,
							));
					}
					get hasAutoFix() {
						return this.validActions.some(
							({ action: D }) =>
								!!D.kind &&
								b.$GAb.QuickFix.contains(new s.$1L(D.kind)) &&
								!!D.isPreferred,
						);
					}
					get hasAIFix() {
						return this.validActions.some(({ action: D }) => !!D.isAI);
					}
					get allAIFixes() {
						return this.validActions.every(({ action: D }) => !!D.isAI);
					}
				}
				const y = { actions: [], documentation: void 0 };
				async function $(L, D, M, N, A, R, O, B) {
					const U = N.filter || {},
						z = { ...U, excludes: [...(U.excludes || []), b.$GAb.Notebook] },
						F = { only: U.include?.value, trigger: N.type },
						x = new c.$Ozb(D, R),
						H = N.type === u.CodeActionTriggerType.Auto,
						q = v(L, D, H ? z : U),
						V = new E.$Zc(),
						G = q.map(async (J) => {
							try {
								A.report(J);
								const W = await J.provideCodeActions(D, M, F, x.token);
								if ((W && V.add(W), x.token.isCancellationRequested)) return y;
								const X = (W?.actions || []).filter(
										(ie) => ie && (0, b.$IAb)(U, ie),
									),
									Y = I(J, X, U.include);
								return {
									actions: X.map((ie) => new b.$KAb(ie, J)),
									documentation: Y,
								};
							} catch (W) {
								if ((0, w.$8)(W)) throw W;
								return (0, w.$5)(W), y;
							}
						}),
						K = L.onDidChange(() => {
							const J = L.all(D);
							(0, t.$yb)(J, q) || x.cancel();
						});
					try {
						const J = await Promise.all(G),
							W = J.map((Y) => Y.actions).flat(),
							X = [
								...(0, t.$Lb)(J.map((Y) => Y.documentation).filter((Y) => !!Y)),
								...S(L, D, N, W),
							];
						return new l(W, X, V);
					} finally {
						K.dispose(), x.dispose();
					}
				}
				function v(L, D, M) {
					return L.all(D).filter((N) =>
						N.providedCodeActionKinds
							? N.providedCodeActionKinds.some((A) =>
									(0, b.$HAb)(M, new s.$1L(A)),
								)
							: !0,
					);
				}
				function* S(L, D, M, N) {
					if (D && N.length)
						for (const A of L.all(D))
							A._getAdditionalMenuItems &&
								(yield* A._getAdditionalMenuItems?.(
									{ trigger: M.type, only: M.filter?.include?.value },
									N.map((R) => R.action),
								));
				}
				function I(L, D, M) {
					if (!L.documentation) return;
					const N = L.documentation.map((A) => ({
						kind: new s.$1L(A.kind),
						command: A.command,
					}));
					if (M) {
						let A;
						for (const R of N)
							R.kind.contains(M) &&
								(A ? A.kind.contains(R.kind) && (A = R) : (A = R));
						if (A) return A?.command;
					}
					for (const A of D)
						if (A.kind) {
							for (const R of N)
								if (R.kind.contains(new s.$1L(A.kind))) return R.command;
						}
				}
				var T;
				(function (L) {
					(L.OnSave = "onSave"),
						(L.FromProblemsView = "fromProblemsView"),
						(L.FromCodeActions = "fromCodeActions"),
						(L.FromAILightbulb = "fromAILightbulb");
				})(T || (e.ApplyCodeActionReason = T = {}));
				async function P(L, D, M, N, A = i.CancellationToken.None) {
					const R = L.get(d.$rzb),
						O = L.get(g.$ek),
						B = L.get(f.$km),
						U = L.get(p.$4N);
					if (
						(B.publicLog2("codeAction.applyCodeAction", {
							codeActionTitle: D.action.title,
							codeActionKind: D.action.kind,
							codeActionIsPreferred: !!D.action.isPreferred,
							reason: M,
						}),
						await D.resolve(A),
						!A.isCancellationRequested &&
							!(
								D.action.edit?.edits.length &&
								!(
									await R.apply(D.action.edit, {
										editor: N?.editor,
										label: D.action.title,
										quotableLabel: D.action.title,
										code: "undoredo.codeAction",
										respectAutoSaveConfig: M !== T.OnSave,
										showPreview: N?.preview,
									})
								).isApplied
							) &&
							D.action.command)
					)
						try {
							await O.executeCommand(
								D.action.command.id,
								...(D.action.command.arguments || []),
							);
						} catch (z) {
							const F = k(z);
							U.error(typeof F == "string" ? F : n.localize(897, null));
						}
				}
				function k(L) {
					return typeof L == "string"
						? L
						: L instanceof Error && typeof L.message == "string"
							? L.message
							: void 0;
				}
				g.$fk.registerCommand(
					"_executeCodeActionProvider",
					async function (L, D, M, N, A) {
						if (!(D instanceof C.URI)) throw (0, w.$$)();
						const { codeActionProvider: R } = L.get(a.$k3),
							O = L.get(h.$QO).getModel(D);
						if (!O) throw (0, w.$$)();
						const B = r.$kL.isISelection(M)
							? r.$kL.liftSelection(M)
							: m.$iL.isIRange(M)
								? O.validateRange(M)
								: void 0;
						if (!B) throw (0, w.$$)();
						const U = typeof N == "string" ? new s.$1L(N) : void 0,
							z = await $(
								R,
								O,
								B,
								{
									type: u.CodeActionTriggerType.Invoke,
									triggerAction: b.CodeActionTriggerSource.Default,
									filter: { includeSourceActions: !0, include: U },
								},
								o.$0N.None,
								i.CancellationToken.None,
							),
							F = [],
							x = Math.min(z.validActions.length, typeof A == "number" ? A : 0);
						for (let H = 0; H < x; H++)
							F.push(z.validActions[H].resolve(i.CancellationToken.None));
						try {
							return await Promise.all(F), z.validActions.map((H) => H.action);
						} finally {
							setTimeout(() => z.dispose(), 100);
						}
					},
				);
			},
		),
		define(
			de[2807],
			he([1, 0, 318, 149, 393, 291, 39]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				var d;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$WAb = void 0);
				let m = class {
					static {
						d = this;
					}
					static {
						this.a = [w.$OAb, w.$LAb, w.$QAb, w.$RAb, w.$SAb];
					}
					constructor(u) {
						this.b = u;
					}
					getResolver() {
						const u = new i.$Y(() =>
							this.b
								.getKeybindings()
								.filter((a) => d.a.indexOf(a.command) >= 0)
								.filter((a) => a.resolvedKeybinding)
								.map((a) => {
									let h = a.commandArgs;
									return (
										a.command === w.$RAb
											? (h = { kind: E.$GAb.SourceOrganizeImports.value })
											: a.command === w.$SAb &&
												(h = { kind: E.$GAb.SourceFixAll.value }),
										{
											resolvedKeybinding: a.resolvedKeybinding,
											...E.$JAb.fromUser(h, {
												kind: t.$1L.None,
												apply: E.CodeActionAutoApply.Never,
											}),
										}
									);
								}),
						);
						return (a) => {
							if (a.kind) return this.c(a, u.value)?.resolvedKeybinding;
						};
					}
					c(u, a) {
						if (!u.kind) return;
						const h = new t.$1L(u.kind);
						return a
							.filter((c) => c.kind.contains(h))
							.filter((c) => (c.preferred ? u.isPreferred : !0))
							.reduceRight(
								(c, n) => (c ? (c.kind.contains(n.kind) ? n : c) : n),
								void 0,
							);
					}
				};
				(e.$WAb = m), (e.$WAb = m = d = Ne([j(0, C.$uZ)], m));
			},
		),
		define(
			de[1642],
			he([1, 0, 15, 29, 6, 3, 19, 38, 48, 104, 74, 8, 84, 291, 393, 318, 162]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ABb = e.CodeActionsState = e.$zBb = e.$yBb = void 0),
					(e.$yBb = new a.$5j("supportedCodeAction", "")),
					(e.$zBb = "_typescript.applyFixAllCodeAction");
				class o extends E.$1c {
					constructor(y, $, v, S = 250) {
						super(),
							(this.f = y),
							(this.g = $),
							(this.h = v),
							(this.j = S),
							(this.c = this.D(new t.$Wh())),
							this.D(this.g.onMarkerChanged((I) => this.m(I))),
							this.D(this.f.onDidChangeCursorPosition(() => this.n()));
					}
					trigger(y) {
						const $ = this.q(y);
						this.h($ ? { trigger: y, selection: $ } : void 0);
					}
					m(y) {
						const $ = this.f.getModel();
						$ && y.some((v) => (0, C.$gh)(v, $.uri)) && this.n();
					}
					n() {
						this.c.cancelAndSet(() => {
							this.trigger({
								type: u.CodeActionTriggerType.Auto,
								triggerAction: c.CodeActionTriggerSource.Default,
							});
						}, this.j);
					}
					q(y) {
						if (!this.f.hasModel()) return;
						const $ = this.f.getSelection();
						if (y.type === u.CodeActionTriggerType.Invoke) return $;
						const v = this.f.getOption(d.EditorOption.lightbulb).enabled;
						if (v !== d.ShowLightbulbIconMode.Off) {
							{
								if (v === d.ShowLightbulbIconMode.On) return $;
								if (v === d.ShowLightbulbIconMode.OnCode) {
									if (!$.isEmpty()) return $;
									const I = this.f.getModel(),
										{ lineNumber: T, column: P } = $.getPosition(),
										k = I.getLineContent(T);
									if (k.length === 0) return;
									if (P === 1) {
										if (/\s/.test(k[0])) return;
									} else if (P === I.getLineMaxColumn(T)) {
										if (/\s/.test(k[k.length - 1])) return;
									} else if (/\s/.test(k[P - 2]) && /\s/.test(k[P - 1])) return;
								}
							}
							return $;
						}
					}
				}
				var f;
				(function (l) {
					let y;
					(function (v) {
						(v[(v.Empty = 0)] = "Empty"), (v[(v.Triggered = 1)] = "Triggered");
					})((y = l.Type || (l.Type = {}))),
						(l.Empty = { type: y.Empty });
					class $ {
						constructor(S, I, T) {
							(this.trigger = S),
								(this.position = I),
								(this.c = T),
								(this.type = y.Triggered),
								(this.actions = T.catch((P) => {
									if ((0, i.$8)(P)) return b;
									throw P;
								}));
						}
						cancel() {
							this.c.cancel();
						}
					}
					l.Triggered = $;
				})(f || (e.CodeActionsState = f = {}));
				const b = Object.freeze({
					allActions: [],
					validActions: [],
					dispose: () => {},
					documentation: [],
					hasAutoFix: !1,
					hasAIFix: !1,
					allAIFixes: !1,
				});
				class s extends E.$1c {
					constructor(y, $, v, S, I, T, P, k, L) {
						super(),
							(this.m = y),
							(this.n = $),
							(this.q = v),
							(this.r = I),
							(this.s = T),
							(this.t = P),
							(this.u = k),
							(this.w = L),
							(this.c = this.D(new E.$2c())),
							(this.f = f.Empty),
							(this.h = this.D(new w.$re())),
							(this.onDidChangeState = this.h.event),
							(this.j = !1),
							(this.g = e.$yBb.bindTo(S)),
							this.D(this.m.onDidChangeModel(() => this.z())),
							this.D(this.m.onDidChangeModelLanguage(() => this.z())),
							this.D(this.n.onDidChange(() => this.z())),
							this.D(
								this.m.onDidChangeConfiguration((D) => {
									D.hasChanged(d.EditorOption.lightbulb) && this.z();
								}),
							),
							this.z();
					}
					dispose() {
						this.j || ((this.j = !0), super.dispose(), this.C(f.Empty, !0));
					}
					y() {
						const y = this.m?.getModel();
						return this.t
							? this.t.getValue(
									"editor.codeActionWidget.includeNearbyQuickFixes",
									{ resource: y?.uri },
								)
							: !1;
					}
					z() {
						if (this.j) return;
						(this.c.value = void 0), this.C(f.Empty);
						const y = this.m.getModel();
						if (
							y &&
							this.n.has(y) &&
							!this.m.getOption(d.EditorOption.readOnly)
						) {
							const $ = this.n
								.all(y)
								.flatMap((v) => v.providedCodeActionKinds ?? []);
							this.g.set($.join(" ")),
								(this.c.value = new o(
									this.m,
									this.q,
									(v) => {
										if (!v) {
											this.C(f.Empty);
											return;
										}
										const S = v.selection.getStartPosition(),
											I = (0, t.$zh)(async (k) => {
												if (
													this.y() &&
													v.trigger.type === u.CodeActionTriggerType.Invoke &&
													(v.trigger.triggerAction ===
														c.CodeActionTriggerSource.QuickFix ||
														v.trigger.filter?.include?.contains(
															c.$GAb.QuickFix,
														))
												) {
													const L = await (0, n.$UAb)(
															this.n,
															y,
															v.selection,
															v.trigger,
															h.$0N.None,
															k,
															this.s,
														),
														D = [...L.allActions];
													if (k.isCancellationRequested) return b;
													const M = L.validActions?.some((A) =>
															A.action.kind
																? c.$GAb.QuickFix.contains(
																		new g.$1L(A.action.kind),
																	)
																: !1,
														),
														N = this.q.read({ resource: y.uri });
													if (M) {
														for (const A of L.validActions)
															A.action.command?.arguments?.some(
																(R) =>
																	typeof R == "string" && R.includes(e.$zBb),
															) &&
																(A.action.diagnostics = [
																	...N.filter((R) => R.relatedInformation),
																]);
														return {
															validActions: L.validActions,
															allActions: D,
															documentation: L.documentation,
															hasAutoFix: L.hasAutoFix,
															hasAIFix: L.hasAIFix,
															allAIFixes: L.allAIFixes,
															dispose: () => {
																L.dispose();
															},
														};
													} else if (!M && N.length > 0) {
														const A = v.selection.getPosition();
														let R = A,
															O = Number.MAX_VALUE;
														const B = [...L.validActions];
														for (const z of N) {
															const F = z.endColumn,
																x = z.endLineNumber,
																H = z.startLineNumber;
															if (x === A.lineNumber || H === A.lineNumber) {
																R = new m.$hL(x, F);
																const q = {
																		type: v.trigger.type,
																		triggerAction: v.trigger.triggerAction,
																		filter: {
																			include: v.trigger.filter?.include
																				? v.trigger.filter?.include
																				: c.$GAb.QuickFix,
																		},
																		autoApply: v.trigger.autoApply,
																		context: {
																			notAvailableMessage:
																				v.trigger.context
																					?.notAvailableMessage || "",
																			position: R,
																		},
																	},
																	V = new r.$kL(
																		R.lineNumber,
																		R.column,
																		R.lineNumber,
																		R.column,
																	),
																	G = await (0, n.$UAb)(
																		this.n,
																		y,
																		V,
																		q,
																		h.$0N.None,
																		k,
																	);
																if (G.validActions.length !== 0) {
																	for (const K of G.validActions)
																		K.action.command?.arguments?.some(
																			(J) =>
																				typeof J == "string" &&
																				J.includes(e.$zBb),
																		) &&
																			(K.action.diagnostics = [
																				...N.filter(
																					(J) => J.relatedInformation,
																				),
																			]);
																	L.allActions.length === 0 &&
																		D.push(...G.allActions),
																		Math.abs(A.column - F) < O
																			? B.unshift(...G.validActions)
																			: B.push(...G.validActions);
																}
																O = Math.abs(A.column - F);
															}
														}
														const U = B.filter(
															(z, F, x) =>
																x.findIndex(
																	(H) => H.action.title === z.action.title,
																) === F,
														);
														return (
															U.sort((z, F) =>
																z.action.isPreferred && !F.action.isPreferred
																	? -1
																	: (!z.action.isPreferred &&
																				F.action.isPreferred) ||
																			(z.action.isAI && !F.action.isAI)
																		? 1
																		: !z.action.isAI && F.action.isAI
																			? -1
																			: 0,
															),
															{
																validActions: U,
																allActions: D,
																documentation: L.documentation,
																hasAutoFix: L.hasAutoFix,
																hasAIFix: L.hasAIFix,
																allAIFixes: L.allAIFixes,
																dispose: () => {
																	L.dispose();
																},
															}
														);
													}
												}
												if (v.trigger.type === u.CodeActionTriggerType.Invoke) {
													const L = new p.$le(),
														D = await (0, n.$UAb)(
															this.n,
															y,
															v.selection,
															v.trigger,
															h.$0N.None,
															k,
															void 0,
															this.u?.applicationUserPersistentStorage
																.turnOnCopilotChat !== !0,
														);
													return (
														this.w &&
															this.w.publicLog2("codeAction.invokedDurations", {
																codeActions: D.validActions.length,
																duration: L.elapsed(),
															}),
														D
													);
												}
												return (0, n.$UAb)(
													this.n,
													y,
													v.selection,
													v.trigger,
													h.$0N.None,
													k,
													void 0,
													this.u?.applicationUserPersistentStorage
														.turnOnCopilotChat !== !0,
												);
											});
										v.trigger.type === u.CodeActionTriggerType.Invoke &&
											this.r?.showWhile(I, 250);
										const T = new f.Triggered(v.trigger, S, I);
										let P = !1;
										this.f.type === f.Type.Triggered &&
											(P =
												this.f.trigger.type ===
													u.CodeActionTriggerType.Invoke &&
												T.type === f.Type.Triggered &&
												T.trigger.type === u.CodeActionTriggerType.Auto &&
												this.f.position !== T.position),
											P
												? setTimeout(() => {
														this.C(T);
													}, 500)
												: this.C(T);
									},
									void 0,
								)),
								this.c.value.trigger({
									type: u.CodeActionTriggerType.Auto,
									triggerAction: c.CodeActionTriggerSource.Default,
								});
						} else this.g.reset();
					}
					trigger(y) {
						this.c.value?.trigger(y);
					}
					C(y, $) {
						y !== this.f &&
							(this.f.type === f.Type.Triggered && this.f.cancel(),
							(this.f = y),
							!$ && !this.j && this.h.fire(y));
					}
				}
				e.$ABb = s;
			},
		),
		