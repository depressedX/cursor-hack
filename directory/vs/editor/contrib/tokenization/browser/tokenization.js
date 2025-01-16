define(de[2813], he([1, 0, 162, 46, 4]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (w = mt(w));
			class E extends i.$itb {
				constructor() {
					super({
						id: "editor.action.forceRetokenize",
						label: w.localize(1552, null),
						alias: "Developer: Force Retokenize",
						precondition: void 0,
					});
				}
				run(d, m) {
					if (!m.hasModel()) return;
					const r = m.getModel();
					r.tokenization.resetTokenization();
					const u = new t.$le();
					r.tokenization.forceTokenization(r.getLineCount()),
						u.stop(),
						console.log(`tokenization took ${u.elapsed()}`);
				}
			}
			(0, i.$ntb)(E);
		}),
		define(
			de[1647],
			he([1, 0, 3, 19, 46, 65, 38, 4, 57]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Jkc = void 0),
					(d = mt(d));
				const r = "ignoreUnusualLineTerminators";
				function u(c, n, g) {
					c.setModelProperty(n.uri, r, g);
				}
				function a(c, n) {
					return c.getModelProperty(n.uri, r);
				}
				let h = class extends t.$1c {
					static {
						this.ID = "editor.contrib.unusualLineTerminatorsDetector";
					}
					constructor(n, g, p) {
						super(),
							(this.c = n),
							(this.f = g),
							(this.g = p),
							(this.b = !1),
							(this.a = this.c.getOption(
								C.EditorOption.unusualLineTerminators,
							)),
							this.D(
								this.c.onDidChangeConfiguration((o) => {
									o.hasChanged(C.EditorOption.unusualLineTerminators) &&
										((this.a = this.c.getOption(
											C.EditorOption.unusualLineTerminators,
										)),
										this.h());
								}),
							),
							this.D(
								this.c.onDidChangeModel(() => {
									this.h();
								}),
							),
							this.D(
								this.c.onDidChangeModelContent((o) => {
									o.isUndoing || this.h();
								}),
							),
							this.h();
					}
					async h() {
						if (this.a === "off" || !this.c.hasModel()) return;
						const n = this.c.getModel();
						if (
							!n.mightContainUnusualLineTerminators() ||
							a(this.g, n) === !0 ||
							this.c.getOption(C.EditorOption.readOnly)
						)
							return;
						if (this.a === "auto") {
							n.removeUnusualLineTerminators(this.c.getSelections());
							return;
						}
						if (this.b) return;
						let p;
						try {
							(this.b = !0),
								(p = await this.f.confirm({
									title: d.localize(1577, null),
									message: d.localize(1578, null),
									detail: d.localize(1579, null, (0, i.$kh)(n.uri)),
									primaryButton: d.localize(1580, null),
									cancelButton: d.localize(1581, null),
								}));
						} finally {
							this.b = !1;
						}
						if (!p.confirmed) {
							u(this.g, n, !0);
							return;
						}
						n.removeUnusualLineTerminators(this.c.getSelections());
					}
				};
				(e.$Jkc = h),
					(e.$Jkc = h = Ne([j(1, m.$GO), j(2, E.$dtb)], h)),
					(0, w.$qtb)(
						h.ID,
						h,
						w.EditorContributionInstantiation.AfterFirstRender,
					);
			},
		),
		define(
			de[1648],
			he([
				1, 0, 27, 46, 655, 38, 346, 248, 944, 747, 48, 17, 104, 98, 71, 152, 4,
				91, 8, 179, 43,
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
					(e.$alc =
						e.$_kc =
						e.$$kc =
						e.$0kc =
						e.$9kc =
						e.$8kc =
						e.$7kc =
						e.$6kc =
						e.$5kc =
						e.$4kc =
						e.$3kc =
						e.$2kc =
						e.$1kc =
						e.$Zkc =
						e.$Ykc =
						e.$Xkc =
						e.$Wkc =
						e.$Vkc =
						e.$Ukc =
						e.$Tkc =
						e.$Skc =
						e.$Rkc =
						e.$Qkc =
						e.$Pkc =
						e.$Okc =
						e.$Nkc =
						e.$Mkc =
						e.$Lkc =
						e.$Kkc =
							void 0),
					(p = mt(p));
				class l extends i.$htb {
					constructor(ie) {
						super(ie),
							(this.d = ie.inSelectionMode),
							(this.e = ie.wordNavigationType);
					}
					runEditorCommand(ie, ne, ee) {
						if (!ne.hasModel()) return;
						const _ = (0, r.$QL)(
								ne.getOption(E.EditorOption.wordSeparators),
								ne.getOption(E.EditorOption.wordSegmenterLocales),
							),
							te = ne.getModel(),
							Q = ne.getSelections(),
							Z = Q.length > 1,
							se = Q.map((re) => {
								const le = new u.$hL(re.positionLineNumber, re.positionColumn),
									oe = this.j(_, te, le, this.e, Z);
								return this.h(re, oe, this.d);
							});
						if (
							(te.pushStackElement(),
							ne._getViewModel().setCursorStates(
								"moveWordCommand",
								d.CursorChangeReason.Explicit,
								se.map((re) => C.$ysb.fromModelSelection(re)),
							),
							se.length === 1)
						) {
							const re = new u.$hL(
								se[0].positionLineNumber,
								se[0].positionColumn,
							);
							ne.revealPosition(re, c.ScrollType.Smooth);
						}
					}
					h(ie, ne, ee) {
						return ee
							? new h.$kL(
									ie.selectionStartLineNumber,
									ie.selectionStartColumn,
									ne.lineNumber,
									ne.column,
								)
							: new h.$kL(ne.lineNumber, ne.column, ne.lineNumber, ne.column);
					}
				}
				e.$Kkc = l;
				class y extends l {
					j(ie, ne, ee, _, te) {
						return m.$Ftb.moveWordLeft(ie, ne, ee, _, te);
					}
				}
				e.$Lkc = y;
				class $ extends l {
					j(ie, ne, ee, _, te) {
						return m.$Ftb.moveWordRight(ie, ne, ee, _);
					}
				}
				e.$Mkc = $;
				class v extends y {
					constructor() {
						super({
							inSelectionMode: !1,
							wordNavigationType: m.WordNavigationType.WordStart,
							id: "cursorWordStartLeft",
							precondition: void 0,
						});
					}
				}
				e.$Nkc = v;
				class S extends y {
					constructor() {
						super({
							inSelectionMode: !1,
							wordNavigationType: m.WordNavigationType.WordEnd,
							id: "cursorWordEndLeft",
							precondition: void 0,
						});
					}
				}
				e.$Okc = S;
				class I extends y {
					constructor() {
						super({
							inSelectionMode: !1,
							wordNavigationType: m.WordNavigationType.WordStartFast,
							id: "cursorWordLeft",
							precondition: void 0,
							kbOpts: {
								kbExpr: f.$Kj.and(
									n.EditorContextKeys.textInputFocus,
									f.$Kj.and(o.$YK, b.$6Lb)?.negate(),
								),
								primary: t.KeyMod.CtrlCmd | t.KeyCode.LeftArrow,
								mac: { primary: t.KeyMod.Alt | t.KeyCode.LeftArrow },
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
				}
				e.$Pkc = I;
				class T extends y {
					constructor() {
						super({
							inSelectionMode: !0,
							wordNavigationType: m.WordNavigationType.WordStart,
							id: "cursorWordStartLeftSelect",
							precondition: void 0,
						});
					}
				}
				e.$Qkc = T;
				class P extends y {
					constructor() {
						super({
							inSelectionMode: !0,
							wordNavigationType: m.WordNavigationType.WordEnd,
							id: "cursorWordEndLeftSelect",
							precondition: void 0,
						});
					}
				}
				e.$Rkc = P;
				class k extends y {
					constructor() {
						super({
							inSelectionMode: !0,
							wordNavigationType: m.WordNavigationType.WordStartFast,
							id: "cursorWordLeftSelect",
							precondition: void 0,
							kbOpts: {
								kbExpr: f.$Kj.and(
									n.EditorContextKeys.textInputFocus,
									f.$Kj.and(o.$YK, b.$6Lb)?.negate(),
								),
								primary:
									t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.LeftArrow,
								mac: {
									primary: t.KeyMod.Alt | t.KeyMod.Shift | t.KeyCode.LeftArrow,
								},
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
				}
				e.$Skc = k;
				class L extends y {
					constructor() {
						super({
							inSelectionMode: !1,
							wordNavigationType: m.WordNavigationType.WordAccessibility,
							id: "cursorWordAccessibilityLeft",
							precondition: void 0,
						});
					}
					j(ie, ne, ee, _, te) {
						return super.j(
							(0, r.$QL)(
								E.EditorOptions.wordSeparators.defaultValue,
								ie.intlSegmenterLocales,
							),
							ne,
							ee,
							_,
							te,
						);
					}
				}
				e.$Tkc = L;
				class D extends y {
					constructor() {
						super({
							inSelectionMode: !0,
							wordNavigationType: m.WordNavigationType.WordAccessibility,
							id: "cursorWordAccessibilityLeftSelect",
							precondition: void 0,
						});
					}
					j(ie, ne, ee, _, te) {
						return super.j(
							(0, r.$QL)(
								E.EditorOptions.wordSeparators.defaultValue,
								ie.intlSegmenterLocales,
							),
							ne,
							ee,
							_,
							te,
						);
					}
				}
				e.$Ukc = D;
				class M extends $ {
					constructor() {
						super({
							inSelectionMode: !1,
							wordNavigationType: m.WordNavigationType.WordStart,
							id: "cursorWordStartRight",
							precondition: void 0,
						});
					}
				}
				e.$Vkc = M;
				class N extends $ {
					constructor() {
						super({
							inSelectionMode: !1,
							wordNavigationType: m.WordNavigationType.WordEnd,
							id: "cursorWordEndRight",
							precondition: void 0,
							kbOpts: {
								kbExpr: f.$Kj.and(
									n.EditorContextKeys.textInputFocus,
									f.$Kj.and(o.$YK, b.$6Lb)?.negate(),
								),
								primary: t.KeyMod.CtrlCmd | t.KeyCode.RightArrow,
								mac: { primary: t.KeyMod.Alt | t.KeyCode.RightArrow },
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
				}
				e.$Wkc = N;
				class A extends $ {
					constructor() {
						super({
							inSelectionMode: !1,
							wordNavigationType: m.WordNavigationType.WordEnd,
							id: "cursorWordRight",
							precondition: void 0,
						});
					}
				}
				e.$Xkc = A;
				class R extends $ {
					constructor() {
						super({
							inSelectionMode: !0,
							wordNavigationType: m.WordNavigationType.WordStart,
							id: "cursorWordStartRightSelect",
							precondition: void 0,
						});
					}
				}
				e.$Ykc = R;
				class O extends $ {
					constructor() {
						super({
							inSelectionMode: !0,
							wordNavigationType: m.WordNavigationType.WordEnd,
							id: "cursorWordEndRightSelect",
							precondition: void 0,
							kbOpts: {
								kbExpr: f.$Kj.and(
									n.EditorContextKeys.textInputFocus,
									f.$Kj.and(o.$YK, b.$6Lb)?.negate(),
								),
								primary:
									t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.RightArrow,
								mac: {
									primary: t.KeyMod.Alt | t.KeyMod.Shift | t.KeyCode.RightArrow,
								},
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
				}
				e.$Zkc = O;
				class B extends $ {
					constructor() {
						super({
							inSelectionMode: !0,
							wordNavigationType: m.WordNavigationType.WordEnd,
							id: "cursorWordRightSelect",
							precondition: void 0,
						});
					}
				}
				e.$1kc = B;
				class U extends $ {
					constructor() {
						super({
							inSelectionMode: !1,
							wordNavigationType: m.WordNavigationType.WordAccessibility,
							id: "cursorWordAccessibilityRight",
							precondition: void 0,
						});
					}
					j(ie, ne, ee, _, te) {
						return super.j(
							(0, r.$QL)(
								E.EditorOptions.wordSeparators.defaultValue,
								ie.intlSegmenterLocales,
							),
							ne,
							ee,
							_,
							te,
						);
					}
				}
				e.$2kc = U;
				class z extends $ {
					constructor() {
						super({
							inSelectionMode: !0,
							wordNavigationType: m.WordNavigationType.WordAccessibility,
							id: "cursorWordAccessibilityRightSelect",
							precondition: void 0,
						});
					}
					j(ie, ne, ee, _, te) {
						return super.j(
							(0, r.$QL)(
								E.EditorOptions.wordSeparators.defaultValue,
								ie.intlSegmenterLocales,
							),
							ne,
							ee,
							_,
							te,
						);
					}
				}
				e.$3kc = z;
				class F extends i.$htb {
					constructor(ie) {
						super(ie),
							(this.d = ie.whitespaceHeuristics),
							(this.e = ie.wordNavigationType);
					}
					runEditorCommand(ie, ne, ee) {
						const _ = ie.get(g.$aN);
						if (!ne.hasModel()) return;
						const te = (0, r.$QL)(
								ne.getOption(E.EditorOption.wordSeparators),
								ne.getOption(E.EditorOption.wordSegmenterLocales),
							),
							Q = ne.getModel(),
							Z = ne.getSelections(),
							se = ne.getOption(E.EditorOption.autoClosingBrackets),
							re = ne.getOption(E.EditorOption.autoClosingQuotes),
							le = _.getLanguageConfiguration(
								Q.getLanguageId(),
							).getAutoClosingPairs(),
							oe = ne._getViewModel(),
							ae = Z.map((pe) => {
								const $e = this.h(
									{
										wordSeparators: te,
										model: Q,
										selection: pe,
										whitespaceHeuristics: this.d,
										autoClosingDelete: ne.getOption(
											E.EditorOption.autoClosingDelete,
										),
										autoClosingBrackets: se,
										autoClosingQuotes: re,
										autoClosingPairs: le,
										autoClosedCharacters: oe.getCursorAutoClosedCharacters(),
									},
									this.e,
								);
								return new w.$wtb($e, "");
							});
						ne.pushUndoStop(),
							ne.executeCommands(this.id, ae),
							ne.pushUndoStop();
					}
				}
				e.$4kc = F;
				class x extends F {
					h(ie, ne) {
						const ee = m.$Ftb.deleteWordLeft(ie, ne);
						return ee || new a.$iL(1, 1, 1, 1);
					}
				}
				e.$5kc = x;
				class H extends F {
					h(ie, ne) {
						const ee = m.$Ftb.deleteWordRight(ie, ne);
						if (ee) return ee;
						const _ = ie.model.getLineCount(),
							te = ie.model.getLineMaxColumn(_);
						return new a.$iL(_, te, _, te);
					}
				}
				e.$6kc = H;
				class q extends x {
					constructor() {
						super({
							whitespaceHeuristics: !1,
							wordNavigationType: m.WordNavigationType.WordStart,
							id: "deleteWordStartLeft",
							precondition: n.EditorContextKeys.writable,
						});
					}
				}
				e.$7kc = q;
				class V extends x {
					constructor() {
						super({
							whitespaceHeuristics: !1,
							wordNavigationType: m.WordNavigationType.WordEnd,
							id: "deleteWordEndLeft",
							precondition: n.EditorContextKeys.writable,
						});
					}
				}
				e.$8kc = V;
				class G extends x {
					constructor() {
						super({
							whitespaceHeuristics: !0,
							wordNavigationType: m.WordNavigationType.WordStart,
							id: "deleteWordLeft",
							precondition: n.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: n.EditorContextKeys.textInputFocus,
								primary: t.KeyMod.CtrlCmd | t.KeyCode.Backspace,
								mac: { primary: t.KeyMod.Alt | t.KeyCode.Backspace },
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
				}
				e.$9kc = G;
				class K extends H {
					constructor() {
						super({
							whitespaceHeuristics: !1,
							wordNavigationType: m.WordNavigationType.WordStart,
							id: "deleteWordStartRight",
							precondition: n.EditorContextKeys.writable,
						});
					}
				}
				e.$0kc = K;
				class J extends H {
					constructor() {
						super({
							whitespaceHeuristics: !1,
							wordNavigationType: m.WordNavigationType.WordEnd,
							id: "deleteWordEndRight",
							precondition: n.EditorContextKeys.writable,
						});
					}
				}
				e.$$kc = J;
				class W extends H {
					constructor() {
						super({
							whitespaceHeuristics: !0,
							wordNavigationType: m.WordNavigationType.WordEnd,
							id: "deleteWordRight",
							precondition: n.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: n.EditorContextKeys.textInputFocus,
								primary: t.KeyMod.CtrlCmd | t.KeyCode.Delete,
								mac: { primary: t.KeyMod.Alt | t.KeyCode.Delete },
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
				}
				e.$_kc = W;
				class X extends i.$itb {
					constructor() {
						super({
							id: "deleteInsideWord",
							precondition: n.EditorContextKeys.writable,
							label: p.localize(1594, null),
							alias: "Delete Word",
						});
					}
					run(ie, ne, ee) {
						if (!ne.hasModel()) return;
						const _ = (0, r.$QL)(
								ne.getOption(E.EditorOption.wordSeparators),
								ne.getOption(E.EditorOption.wordSegmenterLocales),
							),
							te = ne.getModel(),
							Z = ne.getSelections().map((se) => {
								const re = m.$Ftb.deleteInsideWord(_, te, se);
								return new w.$wtb(re, "");
							});
						ne.pushUndoStop(),
							ne.executeCommands(this.id, Z),
							ne.pushUndoStop();
					}
				}
				(e.$alc = X),
					(0, i.$mtb)(new v()),
					(0, i.$mtb)(new S()),
					(0, i.$mtb)(new I()),
					(0, i.$mtb)(new T()),
					(0, i.$mtb)(new P()),
					(0, i.$mtb)(new k()),
					(0, i.$mtb)(new M()),
					(0, i.$mtb)(new N()),
					(0, i.$mtb)(new A()),
					(0, i.$mtb)(new R()),
					(0, i.$mtb)(new O()),
					(0, i.$mtb)(new B()),
					(0, i.$mtb)(new L()),
					(0, i.$mtb)(new D()),
					(0, i.$mtb)(new U()),
					(0, i.$mtb)(new z()),
					(0, i.$mtb)(new q()),
					(0, i.$mtb)(new V()),
					(0, i.$mtb)(new G()),
					(0, i.$mtb)(new K()),
					(0, i.$mtb)(new J()),
					(0, i.$mtb)(new W()),
					(0, i.$ntb)(X);
			},
		),
		define(
			de[2814],
			he([1, 0, 27, 46, 944, 17, 71, 1648, 31, 43]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ilc =
						e.$hlc =
						e.$glc =
						e.$flc =
						e.$elc =
						e.$dlc =
						e.$clc =
						e.$blc =
							void 0);
				class u extends d.$4kc {
					constructor() {
						super({
							whitespaceHeuristics: !0,
							wordNavigationType: w.WordNavigationType.WordStart,
							id: "deleteWordPartLeft",
							precondition: C.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: C.EditorContextKeys.textInputFocus,
								primary: 0,
								mac: {
									primary:
										t.KeyMod.WinCtrl | t.KeyMod.Alt | t.KeyCode.Backspace,
								},
								weight: r.KeybindingWeight.EditorContrib,
							},
						});
					}
					h(b, s) {
						const l = w.$Gtb.deleteWordPartLeft(b);
						return l || new E.$iL(1, 1, 1, 1);
					}
				}
				e.$blc = u;
				class a extends d.$4kc {
					constructor() {
						super({
							whitespaceHeuristics: !0,
							wordNavigationType: w.WordNavigationType.WordEnd,
							id: "deleteWordPartRight",
							precondition: C.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: C.EditorContextKeys.textInputFocus,
								primary: 0,
								mac: {
									primary: t.KeyMod.WinCtrl | t.KeyMod.Alt | t.KeyCode.Delete,
								},
								weight: r.KeybindingWeight.EditorContrib,
							},
						});
					}
					h(b, s) {
						const l = w.$Gtb.deleteWordPartRight(b);
						if (l) return l;
						const y = b.model.getLineCount(),
							$ = b.model.getLineMaxColumn(y);
						return new E.$iL(y, $, y, $);
					}
				}
				e.$clc = a;
				class h extends d.$Kkc {
					j(b, s, l, y, $) {
						return w.$Gtb.moveWordPartLeft(b, s, l, $);
					}
				}
				e.$dlc = h;
				class c extends h {
					constructor() {
						super({
							inSelectionMode: !1,
							wordNavigationType: w.WordNavigationType.WordStart,
							id: "cursorWordPartLeft",
							precondition: void 0,
							kbOpts: {
								kbExpr: C.EditorContextKeys.textInputFocus,
								primary: 0,
								mac: {
									primary:
										t.KeyMod.WinCtrl | t.KeyMod.Alt | t.KeyCode.LeftArrow,
								},
								weight: r.KeybindingWeight.EditorContrib,
							},
						});
					}
				}
				(e.$elc = c),
					m.$fk.registerCommandAlias(
						"cursorWordPartStartLeft",
						"cursorWordPartLeft",
					);
				class n extends h {
					constructor() {
						super({
							inSelectionMode: !0,
							wordNavigationType: w.WordNavigationType.WordStart,
							id: "cursorWordPartLeftSelect",
							precondition: void 0,
							kbOpts: {
								kbExpr: C.EditorContextKeys.textInputFocus,
								primary: 0,
								mac: {
									primary:
										t.KeyMod.WinCtrl |
										t.KeyMod.Alt |
										t.KeyMod.Shift |
										t.KeyCode.LeftArrow,
								},
								weight: r.KeybindingWeight.EditorContrib,
							},
						});
					}
				}
				(e.$flc = n),
					m.$fk.registerCommandAlias(
						"cursorWordPartStartLeftSelect",
						"cursorWordPartLeftSelect",
					);
				class g extends d.$Kkc {
					j(b, s, l, y, $) {
						return w.$Gtb.moveWordPartRight(b, s, l);
					}
				}
				e.$glc = g;
				class p extends g {
					constructor() {
						super({
							inSelectionMode: !1,
							wordNavigationType: w.WordNavigationType.WordEnd,
							id: "cursorWordPartRight",
							precondition: void 0,
							kbOpts: {
								kbExpr: C.EditorContextKeys.textInputFocus,
								primary: 0,
								mac: {
									primary:
										t.KeyMod.WinCtrl | t.KeyMod.Alt | t.KeyCode.RightArrow,
								},
								weight: r.KeybindingWeight.EditorContrib,
							},
						});
					}
				}
				e.$hlc = p;
				class o extends g {
					constructor() {
						super({
							inSelectionMode: !0,
							wordNavigationType: w.WordNavigationType.WordEnd,
							id: "cursorWordPartRightSelect",
							precondition: void 0,
							kbOpts: {
								kbExpr: C.EditorContextKeys.textInputFocus,
								primary: 0,
								mac: {
									primary:
										t.KeyMod.WinCtrl |
										t.KeyMod.Alt |
										t.KeyMod.Shift |
										t.KeyCode.RightArrow,
								},
								weight: r.KeybindingWeight.EditorContrib,
							},
						});
					}
				}
				(e.$ilc = o),
					(0, i.$mtb)(new u()),
					(0, i.$mtb)(new a()),
					(0, i.$mtb)(new c()),
					(0, i.$mtb)(new n()),
					(0, i.$mtb)(new p()),
					(0, i.$mtb)(new o());
			},
		),
		define(
			de[184],
			he([1, 0, 744, 433, 3, 23, 77, 457, 4, 91, 10, 5, 326, 32]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Twb = e.$Swb = e.$Rwb = e.$Qwb = e.$Pwb = e.$Owb = void 0),
					(e.$Owb = (0, a.$Mi)("accessibilitySignalService")),
					(e.$Pwb = Symbol("AcknowledgeDocCommentsToken"));
				let n = class extends w.$1c {
					constructor(l, y, $) {
						super(),
							(this.f = l),
							(this.g = y),
							(this.h = $),
							(this.a = new Map()),
							(this.b = (0, C.observableFromEvent)(
								this,
								this.g.onDidChangeScreenReaderOptimized,
								() => this.g.isScreenReaderOptimized(),
							)),
							(this.c = new Set()),
							(this.n = new Set()),
							(this.q = new t.$gf((v) =>
								(0, h.$Mwb)(
									v.settingsKey,
									{ sound: "off", announcement: "off" },
									this.f,
								),
							)),
							(this.r = new t.$gf({ getCacheKey: i.$fd }, (v) =>
								(0, C.derived)((S) => {
									const I = this.q.get(v.signal).read(S);
									return !!(
										((v.modality === "sound" || v.modality === void 0) &&
											g(I.sound, () => this.b.read(S), v.userGesture)) ||
										((v.modality === "announcement" || v.modality === void 0) &&
											g(I.announcement, () => this.b.read(S), v.userGesture))
									);
								}).recomputeInitiallyAndOnChange(this.B),
							));
					}
					getEnabledState(l, y, $) {
						return new d.$Md(
							this.r.get({ signal: l, userGesture: y, modality: $ }),
						);
					}
					async playSignal(l, y = {}) {
						const $ = y.modality === "announcement" || y.modality === void 0,
							v = l.announcementMessage;
						$ &&
							this.isAnnouncementEnabled(l, y.userGesture) &&
							v &&
							this.g.status(v),
							(y.modality === "sound" || y.modality === void 0) &&
								this.isSoundEnabled(l, y.userGesture) &&
								(this.j(l, y.source),
								await this.playSound(
									l.sound.getSound(),
									y.allowManyInParallel,
								));
					}
					async playSignals(l) {
						for (const S of l)
							this.j(
								"signal" in S ? S.signal : S,
								"source" in S ? S.source : void 0,
							);
						const y = l.map((S) => ("signal" in S ? S.signal : S)),
							$ = y
								.filter((S) => this.isAnnouncementEnabled(S))
								.map((S) => S.announcementMessage);
						$.length && this.g.status($.join(", "));
						const v = new Set(
							y
								.filter((S) => this.isSoundEnabled(S))
								.map((S) => S.sound.getSound()),
						);
						await Promise.all(Array.from(v).map((S) => this.playSound(S, !0)));
					}
					j(l, y) {
						const $ = this.g.isScreenReaderOptimized(),
							v =
								l.name +
								(y ? `::${y}` : "") +
								($ ? "{screenReaderOptimized}" : "");
						this.c.has(v) ||
							this.m() === 0 ||
							(this.c.add(v),
							this.h.publicLog2("signal.played", {
								signal: l.name,
								source: y ?? "",
								isScreenReaderOptimized: $,
							}));
					}
					m() {
						const l = this.f.getValue("accessibility.signalOptions.volume");
						return typeof l != "number" ? 50 : Math.max(Math.min(l, 100), 0);
					}
					async playSound(l, y = !1) {
						if (!y && this.n.has(l)) return;
						this.n.add(l);
						const $ = E.$7g
							.asBrowserUri(
								`vs/platform/accessibilitySignal/browser/media/${l.fileName}`,
							)
							.toString(!0);
						try {
							const v = this.a.get($);
							if (v)
								(v.volume = this.m() / 100),
									(v.currentTime = 0),
									await v.play();
							else {
								const S = await p($, this.m() / 100);
								this.a.set($, S);
							}
						} catch (v) {
							v.message.includes(
								"play() can only be initiated by a user gesture",
							) || console.error("Error while playing sound", v);
						} finally {
							this.n.delete(l);
						}
					}
					playSignalLoop(l, y) {
						let $ = !0;
						const v = () => {
							$ &&
								this.playSignal(l, { allowManyInParallel: !0 }).finally(() => {
									setTimeout(() => {
										$ && v();
									}, y);
								});
						};
						return v(), (0, w.$Yc)(() => ($ = !1));
					}
					isAnnouncementEnabled(l, y) {
						return l.announcementMessage
							? this.r
									.get({
										signal: l,
										userGesture: !!y,
										modality: "announcement",
									})
									.get()
							: !1;
					}
					isSoundEnabled(l, y) {
						return this.r
							.get({ signal: l, userGesture: !!y, modality: "sound" })
							.get();
					}
					onSoundEnabledChanged(l) {
						return this.getEnabledState(l, !1).onDidChange;
					}
					getDelayMs(l, y, $) {
						if (
							!this.f.getValue(
								"accessibility.signalOptions.debouncePositionChanges",
							)
						)
							return 0;
						let v;
						return (
							l.name === b.errorAtPosition.name && $ === "positional"
								? (v = this.f.getValue(
										"accessibility.signalOptions.experimental.delays.errorAtPosition",
									))
								: l.name === b.warningAtPosition.name && $ === "positional"
									? (v = this.f.getValue(
											"accessibility.signalOptions.experimental.delays.warningAtPosition",
										))
									: (v = this.f.getValue(
											"accessibility.signalOptions.experimental.delays.general",
										)),
							y === "sound" ? v.sound : v.announcement
						);
					}
				};
				(e.$Qwb = n),
					(e.$Qwb = n = Ne([j(0, u.$gj), j(1, r.$XK), j(2, c.$km)], n));
				function g(s, l, y) {
					return (
						s === "on" ||
						s === "always" ||
						(s === "auto" && l()) ||
						(s === "userGesture" && y)
					);
				}
				function p(s, l) {
					return new Promise((y, $) => {
						const v = new Audio(s);
						(v.volume = l),
							v.addEventListener("ended", () => {
								y(v);
							}),
							v.addEventListener("error", (S) => {
								$(S.error);
							}),
							v.play().catch((S) => {
								$(S);
							});
					});
				}
				class o {
					static a(l) {
						return new o(l.fileName);
					}
					static {
						this.error = o.a({ fileName: "error.mp3" });
					}
					static {
						this.warning = o.a({ fileName: "warning.mp3" });
					}
					static {
						this.success = o.a({ fileName: "success.mp3" });
					}
					static {
						this.foldedArea = o.a({ fileName: "foldedAreas.mp3" });
					}
					static {
						this.break = o.a({ fileName: "break.mp3" });
					}
					static {
						this.quickFixes = o.a({ fileName: "quickFixes.mp3" });
					}
					static {
						this.taskCompleted = o.a({ fileName: "taskCompleted.mp3" });
					}
					static {
						this.taskFailed = o.a({ fileName: "taskFailed.mp3" });
					}
					static {
						this.terminalBell = o.a({ fileName: "terminalBell.mp3" });
					}
					static {
						this.diffLineInserted = o.a({ fileName: "diffLineInserted.mp3" });
					}
					static {
						this.diffLineDeleted = o.a({ fileName: "diffLineDeleted.mp3" });
					}
					static {
						this.diffLineModified = o.a({ fileName: "diffLineModified.mp3" });
					}
					static {
						this.chatRequestSent = o.a({ fileName: "chatRequestSent.mp3" });
					}
					static {
						this.chatResponseReceived1 = o.a({
							fileName: "chatResponseReceived1.mp3",
						});
					}
					static {
						this.chatResponseReceived2 = o.a({
							fileName: "chatResponseReceived2.mp3",
						});
					}
					static {
						this.chatResponseReceived3 = o.a({
							fileName: "chatResponseReceived3.mp3",
						});
					}
					static {
						this.chatResponseReceived4 = o.a({
							fileName: "chatResponseReceived4.mp3",
						});
					}
					static {
						this.clear = o.a({ fileName: "clear.mp3" });
					}
					static {
						this.save = o.a({ fileName: "save.mp3" });
					}
					static {
						this.format = o.a({ fileName: "format.mp3" });
					}
					static {
						this.voiceRecordingStarted = o.a({
							fileName: "voiceRecordingStarted.mp3",
						});
					}
					static {
						this.voiceRecordingStopped = o.a({
							fileName: "voiceRecordingStopped.mp3",
						});
					}
					static {
						this.progress = o.a({ fileName: "progress.mp3" });
					}
					constructor(l) {
						this.fileName = l;
					}
				}
				e.$Rwb = o;
				class f {
					constructor(l) {
						this.randomOneOf = l;
					}
					getSound(l = !1) {
						if (l || this.randomOneOf.length === 1) return this.randomOneOf[0];
						{
							const y = Math.floor(Math.random() * this.randomOneOf.length);
							return this.randomOneOf[y];
						}
					}
				}
				e.$Swb = f;
				class b {
					constructor(l, y, $, v, S, I) {
						(this.sound = l),
							(this.name = y),
							(this.legacySoundSettingsKey = $),
							(this.settingsKey = v),
							(this.legacyAnnouncementSettingsKey = S),
							(this.announcementMessage = I);
					}
					static {
						this.a = new Set();
					}
					static b(l) {
						const y = new f(
								"randomOneOf" in l.sound ? l.sound.randomOneOf : [l.sound],
							),
							$ = new b(
								y,
								l.name,
								l.legacySoundSettingsKey,
								l.settingsKey,
								l.legacyAnnouncementSettingsKey,
								l.announcementMessage,
							);
						return b.a.add($), $;
					}
					static get allAccessibilitySignals() {
						return [...this.a];
					}
					static {
						this.errorAtPosition = b.b({
							name: (0, m.localize)(1595, null),
							sound: o.error,
							announcementMessage: (0, m.localize)(1596, null),
							settingsKey: "accessibility.signals.positionHasError",
							delaySettingsKey:
								"accessibility.signalOptions.delays.errorAtPosition",
						});
					}
					static {
						this.warningAtPosition = b.b({
							name: (0, m.localize)(1597, null),
							sound: o.warning,
							announcementMessage: (0, m.localize)(1598, null),
							settingsKey: "accessibility.signals.positionHasWarning",
							delaySettingsKey:
								"accessibility.signalOptions.delays.warningAtPosition",
						});
					}
					static {
						this.errorOnLine = b.b({
							name: (0, m.localize)(1599, null),
							sound: o.error,
							legacySoundSettingsKey: "audioCues.lineHasError",
							legacyAnnouncementSettingsKey: "accessibility.alert.error",
							announcementMessage: (0, m.localize)(1600, null),
							settingsKey: "accessibility.signals.lineHasError",
						});
					}
					static {
						this.warningOnLine = b.b({
							name: (0, m.localize)(1601, null),
							sound: o.warning,
							legacySoundSettingsKey: "audioCues.lineHasWarning",
							legacyAnnouncementSettingsKey: "accessibility.alert.warning",
							announcementMessage: (0, m.localize)(1602, null),
							settingsKey: "accessibility.signals.lineHasWarning",
						});
					}
					static {
						this.foldedArea = b.b({
							name: (0, m.localize)(1603, null),
							sound: o.foldedArea,
							legacySoundSettingsKey: "audioCues.lineHasFoldedArea",
							legacyAnnouncementSettingsKey: "accessibility.alert.foldedArea",
							announcementMessage: (0, m.localize)(1604, null),
							settingsKey: "accessibility.signals.lineHasFoldedArea",
						});
					}
					static {
						this.break = b.b({
							name: (0, m.localize)(1605, null),
							sound: o.break,
							legacySoundSettingsKey: "audioCues.lineHasBreakpoint",
							legacyAnnouncementSettingsKey: "accessibility.alert.breakpoint",
							announcementMessage: (0, m.localize)(1606, null),
							settingsKey: "accessibility.signals.lineHasBreakpoint",
						});
					}
					static {
						this.inlineSuggestion = b.b({
							name: (0, m.localize)(1607, null),
							sound: o.quickFixes,
							legacySoundSettingsKey: "audioCues.lineHasInlineSuggestion",
							settingsKey: "accessibility.signals.lineHasInlineSuggestion",
						});
					}
					static {
						this.terminalQuickFix = b.b({
							name: (0, m.localize)(1608, null),
							sound: o.quickFixes,
							legacySoundSettingsKey: "audioCues.terminalQuickFix",
							legacyAnnouncementSettingsKey:
								"accessibility.alert.terminalQuickFix",
							announcementMessage: (0, m.localize)(1609, null),
							settingsKey: "accessibility.signals.terminalQuickFix",
						});
					}
					static {
						this.onDebugBreak = b.b({
							name: (0, m.localize)(1610, null),
							sound: o.break,
							legacySoundSettingsKey: "audioCues.onDebugBreak",
							legacyAnnouncementSettingsKey: "accessibility.alert.onDebugBreak",
							announcementMessage: (0, m.localize)(1611, null),
							settingsKey: "accessibility.signals.onDebugBreak",
						});
					}
					static {
						this.noInlayHints = b.b({
							name: (0, m.localize)(1612, null),
							sound: o.error,
							legacySoundSettingsKey: "audioCues.noInlayHints",
							legacyAnnouncementSettingsKey: "accessibility.alert.noInlayHints",
							announcementMessage: (0, m.localize)(1613, null),
							settingsKey: "accessibility.signals.noInlayHints",
						});
					}
					static {
						this.taskCompleted = b.b({
							name: (0, m.localize)(1614, null),
							sound: o.taskCompleted,
							legacySoundSettingsKey: "audioCues.taskCompleted",
							legacyAnnouncementSettingsKey:
								"accessibility.alert.taskCompleted",
							announcementMessage: (0, m.localize)(1615, null),
							settingsKey: "accessibility.signals.taskCompleted",
						});
					}
					static {
						this.taskFailed = b.b({
							name: (0, m.localize)(1616, null),
							sound: o.taskFailed,
							legacySoundSettingsKey: "audioCues.taskFailed",
							legacyAnnouncementSettingsKey: "accessibility.alert.taskFailed",
							announcementMessage: (0, m.localize)(1617, null),
							settingsKey: "accessibility.signals.taskFailed",
						});
					}
					static {
						this.terminalCommandFailed = b.b({
							name: (0, m.localize)(1618, null),
							sound: o.error,
							legacySoundSettingsKey: "audioCues.terminalCommandFailed",
							legacyAnnouncementSettingsKey:
								"accessibility.alert.terminalCommandFailed",
							announcementMessage: (0, m.localize)(1619, null),
							settingsKey: "accessibility.signals.terminalCommandFailed",
						});
					}
					static {
						this.terminalCommandSucceeded = b.b({
							name: (0, m.localize)(1620, null),
							sound: o.success,
							announcementMessage: (0, m.localize)(1621, null),
							settingsKey: "accessibility.signals.terminalCommandSucceeded",
						});
					}
					static {
						this.terminalBell = b.b({
							name: (0, m.localize)(1622, null),
							sound: o.terminalBell,
							legacySoundSettingsKey: "audioCues.terminalBell",
							legacyAnnouncementSettingsKey: "accessibility.alert.terminalBell",
							announcementMessage: (0, m.localize)(1623, null),
							settingsKey: "accessibility.signals.terminalBell",
						});
					}
					static {
						this.notebookCellCompleted = b.b({
							name: (0, m.localize)(1624, null),
							sound: o.taskCompleted,
							legacySoundSettingsKey: "audioCues.notebookCellCompleted",
							legacyAnnouncementSettingsKey:
								"accessibility.alert.notebookCellCompleted",
							announcementMessage: (0, m.localize)(1625, null),
							settingsKey: "accessibility.signals.notebookCellCompleted",
						});
					}
					static {
						this.notebookCellFailed = b.b({
							name: (0, m.localize)(1626, null),
							sound: o.taskFailed,
							legacySoundSettingsKey: "audioCues.notebookCellFailed",
							legacyAnnouncementSettingsKey:
								"accessibility.alert.notebookCellFailed",
							announcementMessage: (0, m.localize)(1627, null),
							settingsKey: "accessibility.signals.notebookCellFailed",
						});
					}
					static {
						this.diffLineInserted = b.b({
							name: (0, m.localize)(1628, null),
							sound: o.diffLineInserted,
							legacySoundSettingsKey: "audioCues.diffLineInserted",
							settingsKey: "accessibility.signals.diffLineInserted",
						});
					}
					static {
						this.diffLineDeleted = b.b({
							name: (0, m.localize)(1629, null),
							sound: o.diffLineDeleted,
							legacySoundSettingsKey: "audioCues.diffLineDeleted",
							settingsKey: "accessibility.signals.diffLineDeleted",
						});
					}
					static {
						this.diffLineModified = b.b({
							name: (0, m.localize)(1630, null),
							sound: o.diffLineModified,
							legacySoundSettingsKey: "audioCues.diffLineModified",
							settingsKey: "accessibility.signals.diffLineModified",
						});
					}
					static {
						this.chatRequestSent = b.b({
							name: (0, m.localize)(1631, null),
							sound: o.chatRequestSent,
							legacySoundSettingsKey: "audioCues.chatRequestSent",
							legacyAnnouncementSettingsKey:
								"accessibility.alert.chatRequestSent",
							announcementMessage: (0, m.localize)(1632, null),
							settingsKey: "accessibility.signals.chatRequestSent",
						});
					}
					static {
						this.chatResponseReceived = b.b({
							name: (0, m.localize)(1633, null),
							legacySoundSettingsKey: "audioCues.chatResponseReceived",
							sound: {
								randomOneOf: [
									o.chatResponseReceived1,
									o.chatResponseReceived2,
									o.chatResponseReceived3,
									o.chatResponseReceived4,
								],
							},
							settingsKey: "accessibility.signals.chatResponseReceived",
						});
					}
					static {
						this.progress = b.b({
							name: (0, m.localize)(1634, null),
							sound: o.progress,
							legacySoundSettingsKey: "audioCues.chatResponsePending",
							legacyAnnouncementSettingsKey: "accessibility.alert.progress",
							announcementMessage: (0, m.localize)(1635, null),
							settingsKey: "accessibility.signals.progress",
						});
					}
					static {
						this.clear = b.b({
							name: (0, m.localize)(1636, null),
							sound: o.clear,
							legacySoundSettingsKey: "audioCues.clear",
							legacyAnnouncementSettingsKey: "accessibility.alert.clear",
							announcementMessage: (0, m.localize)(1637, null),
							settingsKey: "accessibility.signals.clear",
						});
					}
					static {
						this.save = b.b({
							name: (0, m.localize)(1638, null),
							sound: o.save,
							legacySoundSettingsKey: "audioCues.save",
							legacyAnnouncementSettingsKey: "accessibility.alert.save",
							announcementMessage: (0, m.localize)(1639, null),
							settingsKey: "accessibility.signals.save",
						});
					}
					static {
						this.format = b.b({
							name: (0, m.localize)(1640, null),
							sound: o.format,
							legacySoundSettingsKey: "audioCues.format",
							legacyAnnouncementSettingsKey: "accessibility.alert.format",
							announcementMessage: (0, m.localize)(1641, null),
							settingsKey: "accessibility.signals.format",
						});
					}
					static {
						this.voiceRecordingStarted = b.b({
							name: (0, m.localize)(1642, null),
							sound: o.voiceRecordingStarted,
							legacySoundSettingsKey: "audioCues.voiceRecordingStarted",
							settingsKey: "accessibility.signals.voiceRecordingStarted",
						});
					}
					static {
						this.voiceRecordingStopped = b.b({
							name: (0, m.localize)(1643, null),
							sound: o.voiceRecordingStopped,
							legacySoundSettingsKey: "audioCues.voiceRecordingStopped",
							settingsKey: "accessibility.signals.voiceRecordingStopped",
						});
					}
				}
				e.$Twb = b;
			},
		),
		define(
			de[674],
			he([
				1, 0, 24, 33, 29, 103, 273, 28, 9, 439, 56, 48, 17, 104, 98, 200, 42,
				1552, 31, 109, 5, 69, 34, 184,
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
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Khc = e.FormattingMode = e.FormattingKind = void 0),
					(e.$Jhc = v),
					(e.$Lhc = P),
					(e.$Mhc = k),
					(e.$Nhc = L),
					(e.$Ohc = D),
					(e.$Phc = M),
					(e.$Qhc = N),
					(e.$Rhc = A),
					(e.$Shc = R);
				function v(O, B, U) {
					const z = [],
						F = new b.$Hn(),
						x = O.ordered(U);
					for (const q of x) z.push(q), q.extensionId && F.add(q.extensionId);
					const H = B.ordered(U);
					for (const q of H) {
						if (q.extensionId) {
							if (F.has(q.extensionId)) continue;
							F.add(q.extensionId);
						}
						z.push({
							displayName: q.displayName,
							extensionId: q.extensionId,
							provideDocumentFormattingEdits(V, G, K) {
								return q.provideDocumentRangeFormattingEdits(
									V,
									V.getFullModelRange(),
									G,
									K,
								);
							},
						});
					}
					return z;
				}
				var S;
				(function (O) {
					(O[(O.File = 1)] = "File"), (O[(O.Selection = 2)] = "Selection");
				})(S || (e.FormattingKind = S = {}));
				var I;
				(function (O) {
					(O[(O.Explicit = 1)] = "Explicit"), (O[(O.Silent = 2)] = "Silent");
				})(I || (e.FormattingMode = I = {}));
				class T {
					static {
						this.c = new C.$$c();
					}
					static setFormatterSelector(B) {
						return { dispose: T.c.unshift(B) };
					}
					static async select(B, U, z, F) {
						if (B.length === 0) return;
						const x = E.Iterable.first(T.c);
						if (x) return await x(B, U, z, F);
					}
				}
				e.$Khc = T;
				async function P(O, B, U, z, F, x, H) {
					const q = O.get(s.$Li),
						{ documentRangeFormattingEditProvider: V } = O.get(l.$k3),
						G = (0, u.$0sb)(B) ? B.getModel() : B,
						K = V.ordered(G),
						J = await T.select(K, G, z, S.Selection);
					J && (F.report(J), await q.invokeFunction(k, J, B, U, x, H));
				}
				async function k(O, B, U, z, F, x) {
					const H = O.get(g.$Cxb),
						q = O.get(y.$ik),
						V = O.get($.$Owb);
					let G, K;
					(0, u.$0sb)(U)
						? ((G = U.getModel()),
							(K = new r.$Nzb(
								U,
								r.CodeEditorStateFlag.Value | r.CodeEditorStateFlag.Position,
								void 0,
								F,
							)))
						: ((G = U), (K = new r.$Ozb(U, F)));
					const J = [];
					let W = 0;
					for (const ee of (0, t.$6b)(z).sort(h.$iL.compareRangesUsingStarts))
						W > 0 && h.$iL.areIntersectingOrTouching(J[W - 1], ee)
							? (J[W - 1] = h.$iL.fromPositions(
									J[W - 1].getStartPosition(),
									ee.getEndPosition(),
								))
							: (W = J.push(ee));
					const X = async (ee) => {
							q.trace(
								"[format][provideDocumentRangeFormattingEdits] (request)",
								B.extensionId?.value,
								ee,
							);
							const _ =
								(await B.provideDocumentRangeFormattingEdits(
									G,
									ee,
									G.getFormattingOptions(),
									K.token,
								)) || [];
							return (
								q.trace(
									"[format][provideDocumentRangeFormattingEdits] (response)",
									B.extensionId?.value,
									_,
								),
								_
							);
						},
						Y = (ee, _) => {
							if (!ee.length || !_.length) return !1;
							const te = ee.reduce(
								(Q, Z) => h.$iL.plusRange(Q, Z.range),
								ee[0].range,
							);
							if (!_.some((Q) => h.$iL.intersectRanges(te, Q.range))) return !1;
							for (const Q of ee)
								for (const Z of _)
									if (h.$iL.intersectRanges(Q.range, Z.range)) return !0;
							return !1;
						},
						ie = [],
						ne = [];
					try {
						if (typeof B.provideDocumentRangesFormattingEdits == "function") {
							q.trace(
								"[format][provideDocumentRangeFormattingEdits] (request)",
								B.extensionId?.value,
								J,
							);
							const ee =
								(await B.provideDocumentRangesFormattingEdits(
									G,
									J,
									G.getFormattingOptions(),
									K.token,
								)) || [];
							q.trace(
								"[format][provideDocumentRangeFormattingEdits] (response)",
								B.extensionId?.value,
								ee,
							),
								ne.push(ee);
						} else {
							for (const ee of J) {
								if (K.token.isCancellationRequested) return !0;
								ne.push(await X(ee));
							}
							for (let ee = 0; ee < J.length; ++ee)
								for (let _ = ee + 1; _ < J.length; ++_) {
									if (K.token.isCancellationRequested) return !0;
									if (Y(ne[ee], ne[_])) {
										const te = h.$iL.plusRange(J[ee], J[_]),
											Q = await X(te);
										J.splice(_, 1),
											J.splice(ee, 1),
											J.push(te),
											ne.splice(_, 1),
											ne.splice(ee, 1),
											ne.push(Q),
											(ee = 0),
											(_ = 0);
									}
								}
						}
						for (const ee of ne) {
							if (K.token.isCancellationRequested) return !0;
							const _ = await H.computeMoreMinimalEdits(G.uri, ee);
							_ && ie.push(..._);
						}
					} finally {
						K.dispose();
					}
					if (ie.length === 0) return !1;
					if ((0, u.$0sb)(U))
						o.$Ihc.execute(U, ie, !0),
							U.revealPositionInCenterIfOutsideViewport(
								U.getPosition(),
								n.ScrollType.Immediate,
							);
					else {
						const [{ range: ee }] = ie,
							_ = new c.$kL(
								ee.startLineNumber,
								ee.startColumn,
								ee.endLineNumber,
								ee.endColumn,
							);
						G.pushEditOperations(
							[_],
							ie.map((te) => ({
								text: te.text,
								range: h.$iL.lift(te.range),
								forceMoveMarkers: !0,
							})),
							(te) => {
								for (const { range: Q } of te)
									if (h.$iL.areIntersectingOrTouching(Q, _))
										return [
											new c.$kL(
												Q.startLineNumber,
												Q.startColumn,
												Q.endLineNumber,
												Q.endColumn,
											),
										];
								return null;
							},
						);
					}
					return V.playSignal($.$Twb.format, { userGesture: x }), !0;
				}
				async function L(O, B, U, z, F, x) {
					const H = O.get(s.$Li),
						q = O.get(l.$k3),
						V = (0, u.$0sb)(B) ? B.getModel() : B,
						G = v(
							q.documentFormattingEditProvider,
							q.documentRangeFormattingEditProvider,
							V,
						),
						K = await T.select(G, V, U, S.File);
					K && (z.report(K), await H.invokeFunction(D, K, B, U, F, x));
				}
				async function D(O, B, U, z, F, x) {
					const H = O.get(g.$Cxb),
						q = O.get($.$Owb);
					let V, G;
					(0, u.$0sb)(U)
						? ((V = U.getModel()),
							(G = new r.$Nzb(
								U,
								r.CodeEditorStateFlag.Value | r.CodeEditorStateFlag.Position,
								void 0,
								F,
							)))
						: ((V = U), (G = new r.$Ozb(U, F)));
					let K;
					try {
						const J = await B.provideDocumentFormattingEdits(
							V,
							V.getFormattingOptions(),
							G.token,
						);
						if (
							((K = await H.computeMoreMinimalEdits(V.uri, J)),
							G.token.isCancellationRequested)
						)
							return !0;
					} finally {
						G.dispose();
					}
					if (!K || K.length === 0) return !1;
					if ((0, u.$0sb)(U))
						o.$Ihc.execute(U, K, z !== I.Silent),
							z !== I.Silent &&
								U.revealPositionInCenterIfOutsideViewport(
									U.getPosition(),
									n.ScrollType.Immediate,
								);
					else {
						const [{ range: J }] = K,
							W = new c.$kL(
								J.startLineNumber,
								J.startColumn,
								J.endLineNumber,
								J.endColumn,
							);
						V.pushEditOperations(
							[W],
							K.map((X) => ({
								text: X.text,
								range: h.$iL.lift(X.range),
								forceMoveMarkers: !0,
							})),
							(X) => {
								for (const { range: Y } of X)
									if (h.$iL.areIntersectingOrTouching(Y, W))
										return [
											new c.$kL(
												Y.startLineNumber,
												Y.startColumn,
												Y.endLineNumber,
												Y.endColumn,
											),
										];
								return null;
							},
						);
					}
					return q.playSignal($.$Twb.format, { userGesture: x }), !0;
				}
				async function M(O, B, U, z, F, x) {
					const H = B.documentRangeFormattingEditProvider.ordered(U);
					for (const q of H) {
						const V = await Promise.resolve(
							q.provideDocumentRangeFormattingEdits(U, z, F, x),
						).catch(w.$5);
						if ((0, t.$Pb)(V)) return await O.computeMoreMinimalEdits(U.uri, V);
					}
				}
				async function N(O, B, U, z, F) {
					const x = v(
						B.documentFormattingEditProvider,
						B.documentRangeFormattingEditProvider,
						U,
					);
					for (const H of x) {
						const q = await Promise.resolve(
							H.provideDocumentFormattingEdits(U, z, F),
						).catch(w.$5);
						if ((0, t.$Pb)(q)) return await O.computeMoreMinimalEdits(U.uri, q);
					}
				}
				async function A(O, B, U, z, F) {
					const x = (0, u.$0sb)(U) ? U.getModel() : U,
						H = v(
							B.documentFormattingEditProvider,
							B.documentRangeFormattingEditProvider,
							x,
						),
						q = await T.select(H, x, z, S.File);
					if (q) {
						const V = await Promise.resolve(
							q.provideDocumentFormattingEdits(x, x.getOptions(), F),
						).catch(w.$5);
						return await O.computeMoreMinimalEdits(x.uri, V);
					}
				}
				function R(O, B, U, z, F, x, H) {
					const q = B.onTypeFormattingEditProvider.ordered(U);
					return q.length === 0 ||
						q[0].autoFormatTriggerCharacters.indexOf(F) < 0
						? Promise.resolve(void 0)
						: Promise.resolve(q[0].provideOnTypeFormattingEdits(U, z, F, x, H))
								.catch(w.$5)
								.then((V) => O.computeMoreMinimalEdits(U.uri, V));
				}
				f.$fk.registerCommand(
					"_executeFormatRangeProvider",
					async function (O, ...B) {
						const [U, z, F] = B;
						(0, d.$vg)(m.URI.isUri(U)), (0, d.$vg)(h.$iL.isIRange(z));
						const x = O.get(p.$MO),
							H = O.get(g.$Cxb),
							q = O.get(l.$k3),
							V = await x.createModelReference(U);
						try {
							return M(
								H,
								q,
								V.object.textEditorModel,
								h.$iL.lift(z),
								F,
								i.CancellationToken.None,
							);
						} finally {
							V.dispose();
						}
					},
				),
					f.$fk.registerCommand(
						"_executeFormatDocumentProvider",
						async function (O, ...B) {
							const [U, z] = B;
							(0, d.$vg)(m.URI.isUri(U));
							const F = O.get(p.$MO),
								x = O.get(g.$Cxb),
								H = O.get(l.$k3),
								q = await F.createModelReference(U);
							try {
								return N(
									x,
									H,
									q.object.textEditorModel,
									z,
									i.CancellationToken.None,
								);
							} finally {
								q.dispose();
							}
						},
					),
					f.$fk.registerCommand(
						"_executeFormatOnTypeProvider",
						async function (O, ...B) {
							const [U, z, F, x] = B;
							(0, d.$vg)(m.URI.isUri(U)),
								(0, d.$vg)(a.$hL.isIPosition(z)),
								(0, d.$vg)(typeof F == "string");
							const H = O.get(p.$MO),
								q = O.get(g.$Cxb),
								V = O.get(l.$k3),
								G = await H.createModelReference(U);
							try {
								return R(
									q,
									V,
									G.object.textEditorModel,
									a.$hL.lift(z),
									F,
									x,
									i.CancellationToken.None,
								);
							} finally {
								G.dispose();
							}
						},
					);
			},
		),
		define(
			de[1649],
			he([
				1, 0, 24, 33, 29, 27, 3, 46, 65, 38, 654, 17, 71, 200, 69, 674, 1552, 4,
				184, 31, 8, 5, 43, 84,
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
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Thc = void 0),
					(o = mt(o));
				let v = class {
					static {
						this.ID = "editor.contrib.autoFormat";
					}
					constructor(k, L, D, M) {
						(this.c = k),
							(this.d = L),
							(this.f = D),
							(this.g = M),
							(this.a = new C.$Zc()),
							(this.b = new C.$Zc()),
							this.a.add(
								L.onTypeFormattingEditProvider.onDidChange(this.h, this),
							),
							this.a.add(k.onDidChangeModel(() => this.h())),
							this.a.add(k.onDidChangeModelLanguage(() => this.h())),
							this.a.add(
								k.onDidChangeConfiguration((N) => {
									N.hasChanged(r.EditorOption.formatOnType) && this.h();
								}),
							),
							this.h();
					}
					dispose() {
						this.a.dispose(), this.b.dispose();
					}
					h() {
						if (
							(this.b.clear(),
							!this.c.getOption(r.EditorOption.formatOnType) ||
								!this.c.hasModel())
						)
							return;
						const k = this.c.getModel(),
							[L] = this.d.onTypeFormattingEditProvider.ordered(k);
						if (!L || !L.autoFormatTriggerCharacters) return;
						const D = new u.$OL();
						for (const M of L.autoFormatTriggerCharacters)
							D.add(M.charCodeAt(0));
						this.b.add(
							this.c.onDidType((M) => {
								const N = M.charCodeAt(M.length - 1);
								D.has(N) && this.j(String.fromCharCode(N));
							}),
						);
					}
					j(k) {
						if (
							!this.c.hasModel() ||
							this.c.getSelections().length > 1 ||
							!this.c.getSelection().isEmpty()
						)
							return;
						const L = this.c.getModel(),
							D = this.c.getPosition(),
							M = new i.$Ce(),
							N = this.c.onDidChangeModelContent((A) => {
								if (A.isFlush) {
									M.cancel(), N.dispose();
									return;
								}
								for (let R = 0, O = A.changes.length; R < O; R++)
									if (A.changes[R].range.endLineNumber <= D.lineNumber) {
										M.cancel(), N.dispose();
										return;
									}
							});
						(0, g.$Shc)(
							this.f,
							this.d,
							L,
							D,
							k,
							L.getFormattingOptions(),
							M.token,
						)
							.then((A) => {
								M.token.isCancellationRequested ||
									((0, t.$Pb)(A) &&
										(this.g.playSignal(f.$Twb.format, { userGesture: !1 }),
										p.$Ihc.execute(this.c, A, !0)));
							})
							.finally(() => {
								N.dispose();
							});
					}
				};
				(e.$Thc = v),
					(e.$Thc = v = Ne([j(1, n.$k3), j(2, c.$Cxb), j(3, f.$Owb)], v));
				let S = class {
					static {
						this.ID = "editor.contrib.formatOnPaste";
					}
					constructor(k, L, D) {
						(this.c = k),
							(this.d = L),
							(this.f = D),
							(this.a = new C.$Zc()),
							(this.b = new C.$Zc()),
							this.a.add(k.onDidChangeConfiguration(() => this.g())),
							this.a.add(k.onDidChangeModel(() => this.g())),
							this.a.add(k.onDidChangeModelLanguage(() => this.g())),
							this.a.add(
								L.documentRangeFormattingEditProvider.onDidChange(this.g, this),
							);
					}
					dispose() {
						this.a.dispose(), this.b.dispose();
					}
					g() {
						this.b.clear(),
							this.c.getOption(r.EditorOption.formatOnPaste) &&
								this.c.hasModel() &&
								this.d.documentRangeFormattingEditProvider.has(
									this.c.getModel(),
								) &&
								this.b.add(this.c.onDidPaste(({ range: k }) => this.h(k)));
					}
					h(k) {
						this.c.hasModel() &&
							(this.c.getSelections().length > 1 ||
								this.f
									.invokeFunction(
										g.$Lhc,
										this.c,
										k,
										g.FormattingMode.Silent,
										$.$0N.None,
										i.CancellationToken.None,
										!1,
									)
									.catch(w.$4));
					}
				};
				S = Ne([j(1, n.$k3), j(2, l.$Li)], S);
				class I extends d.$itb {
					constructor() {
						super({
							id: "editor.action.formatDocument",
							label: o.localize(1078, null),
							alias: "Format Document",
							precondition: s.$Kj.and(
								h.EditorContextKeys.notInCompositeEditor,
								h.EditorContextKeys.writable,
								h.EditorContextKeys.hasDocumentFormattingProvider,
							),
							kbOpts: {
								kbExpr: h.EditorContextKeys.editorTextFocus,
								primary: E.KeyMod.Shift | E.KeyMod.Alt | E.KeyCode.KeyF,
								linux: {
									primary: E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyI,
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
							contextMenuOpts: { group: "1_modification", order: 1.3 },
						});
					}
					async run(k, L) {
						if (L.hasModel()) {
							const D = k.get(l.$Li);
							await k
								.get($.$bO)
								.showWhile(
									D.invokeFunction(
										g.$Nhc,
										L,
										g.FormattingMode.Explicit,
										$.$0N.None,
										i.CancellationToken.None,
										!0,
									),
									250,
								);
						}
					}
				}
				class T extends d.$itb {
					constructor() {
						super({
							id: "editor.action.formatSelection",
							label: o.localize(1079, null),
							alias: "Format Selection",
							precondition: s.$Kj.and(
								h.EditorContextKeys.writable,
								h.EditorContextKeys.hasDocumentSelectionFormattingProvider,
							),
							kbOpts: {
								kbExpr: h.EditorContextKeys.editorTextFocus,
								primary: (0, E.$os)(E.$ps, E.KeyMod.CtrlCmd | E.KeyCode.KeyF),
								mac: {
									primary: (0, E.$os)(E.$qs, E.KeyMod.CtrlCmd | E.KeyCode.KeyF),
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
							contextMenuOpts: {
								when: h.EditorContextKeys.hasNonEmptySelection,
								group: "1_modification",
								order: 1.31,
							},
						});
					}
					async run(k, L) {
						if (!L.hasModel()) return;
						const D = k.get(l.$Li),
							M = L.getModel(),
							N = L.getSelections().map((R) =>
								R.isEmpty()
									? new a.$iL(
											R.startLineNumber,
											1,
											R.startLineNumber,
											M.getLineMaxColumn(R.startLineNumber),
										)
									: R,
							);
						await k
							.get($.$bO)
							.showWhile(
								D.invokeFunction(
									g.$Lhc,
									L,
									N,
									g.FormattingMode.Explicit,
									$.$0N.None,
									i.CancellationToken.None,
									!0,
								),
								250,
							);
					}
				}
				(0, d.$qtb)(
					v.ID,
					v,
					d.EditorContributionInstantiation.BeforeFirstInteraction,
				),
					(0, d.$qtb)(
						S.ID,
						S,
						d.EditorContributionInstantiation.BeforeFirstInteraction,
					),
					(0, d.$ntb)(I),
					(0, d.$ntb)(T),
					b.$fk.registerCommand("editor.action.format", async (P) => {
						const k = P.get(m.$dtb).getFocusedCodeEditor();
						if (!k || !k.hasModel()) return;
						const L = P.get(b.$ek);
						k.getSelection().isEmpty()
							? await L.executeCommand("editor.action.formatDocument")
							: await L.executeCommand("editor.action.formatSelection");
					});
			},
		),
		