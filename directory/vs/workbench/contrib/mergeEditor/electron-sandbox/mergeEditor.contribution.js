define(de[3871], he([1, 0, 11, 3870]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(0, t.$4X)(i.$Kgd),
				(0, t.$4X)(i.$Lgd);
		}),
		define(
			de[1918],
			he([
				1, 0, 4, 11, 81, 102, 30, 192, 55, 44, 1883, 712, 3691, 800, 20, 1801,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, i.$4X)(h.$jSc),
					(0, i.$4X)(h.$kSc),
					(0, i.$4X)(h.$lSc),
					C.$Io
						.as(w.$No.Configuration)
						.registerConfiguration({
							properties: {
								"multiDiffEditor.experimental.enabled": {
									type: "boolean",
									default: !0,
									description: "Enable experimental multi diff editor.",
								},
							},
						}),
					(0, n.$lK)(c.$Inc, c.$Knc, n.InstantiationType.Delayed),
					(0, m.$s6)(a.$Mnc.ID, a.$Mnc, m.WorkbenchPhase.BlockStartup),
					C.$Io
						.as(r.$a1.EditorPane)
						.registerEditorPane(
							d.$vVb.create(u.$iSc, u.$iSc.ID, (0, t.localize)(7697, null)),
							[new E.$Ji(a.$Lnc)],
						),
					C.$Io
						.as(r.$a1.EditorFactory)
						.registerEditorSerializer(a.$Lnc.ID, a.$Nnc),
					(0, i.$4X)(g.$XPc),
					(0, m.$s6)(g.$WPc.ID, g.$WPc, m.WorkbenchPhase.BlockStartup);
			},
		),
		define(
			de[1919],
			he([
				1, 0, 4, 32, 21, 125, 5, 8, 1917, 297, 35, 10, 66, 18, 248, 146, 39, 49,
				60, 478, 41, 7, 15, 22, 100, 128, 192, 72, 2474,
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
				I,
				T,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$aUc = void 0),
					(t = mt(t));
				let P = class extends g.$TMb {
					get scrollLock() {
						return !!this.f.get();
					}
					set scrollLock(D) {
						this.f.set(D);
					}
					constructor(D, M, N, A, R, O, B, U, z, F, x) {
						super(D, M, N, A, R, O, B, U, z, F, x),
							(this.c = null),
							(this.f = r.$n8.bindTo(this.Bb));
						const H = this.D(B.createChild(new S.$Ki([d.$6j, this.xb])));
						(this.a = this.D(H.createInstance(k))),
							this.D(
								this.a.onTitleAreaUpdate(() => {
									this.Sb(this.a.getTitle()), this.bc();
								}),
							),
							this.D(
								this.onDidChangeBodyVisibility(() =>
									this.j(this.isBodyVisible()),
								),
							);
					}
					showChannel(D, M) {
						this.b !== D.id && this.m(D), M || this.focus();
					}
					focus() {
						super.focus(), this.c?.then(() => this.a.focus());
					}
					W(D) {
						super.W(D), this.a.create(D), D.classList.add("output-view");
						const M = this.a.getControl();
						M.setAriaOptions({ role: "document", activeDescendant: void 0 }),
							this.D(
								M.onDidChangeModelContent(() => {
									this.scrollLock || this.a.revealLastLine();
								}),
							),
							this.D(
								M.onDidChangeCursorPosition((N) => {
									if (
										N.reason !== n.CursorChangeReason.Explicit ||
										!this.Ab.getValue("output.smartScroll.enabled")
									)
										return;
									const A = M.getModel();
									if (A) {
										const R = N.position.lineNumber,
											O = A.getLineCount();
										this.scrollLock = O !== R;
									}
								}),
							);
					}
					X(D, M) {
						super.X(D, M), this.a.layout(new l.$pgb(M, D));
					}
					j(D) {
						this.a.setVisible(D), D || this.n();
					}
					m(D) {
						this.b = D.id;
						const M = this.r(D);
						(!this.a.input || !M.matches(this.a.input)) &&
							(this.c?.cancel(),
							(this.c = (0, y.$zh)((N) =>
								this.a
									.setInput(
										this.r(D),
										{ preserveFocus: !0 },
										Object.create(null),
										N,
									)
									.then(() => this.a),
							)));
					}
					n() {
						(this.b = void 0), this.a.clearInput(), (this.c = null);
					}
					r(D) {
						return this.Db.createInstance(
							b.$S1b,
							D.uri,
							t.localize(8320, null, D.label),
							t.localize(8321, null, D.label),
							void 0,
							void 0,
						);
					}
				};
				(e.$aUc = P),
					(e.$aUc = P =
						Ne(
							[
								j(1, p.$uZ),
								j(2, o.$Xxb),
								j(3, a.$gj),
								j(4, d.$6j),
								j(5, f.$K1),
								j(6, C.$Li),
								j(7, s.$7rb),
								j(8, u.$iP),
								j(9, i.$km),
								j(10, T.$Uyb),
							],
							P,
						));
				let k = class extends m.$kuc {
					constructor(D, M, N, A, R, O, B, U, z) {
						super(r.$h8, B.activeGroup, D, M, N, R, O, B, U, z),
							(this.$ = A),
							(this.c = this.D(M.createInstance(v.$BQb)));
					}
					getId() {
						return r.$h8;
					}
					getTitle() {
						return t.localize(8322, null);
					}
					Hb(D) {
						const M = super.Hb(D);
						(M.wordWrap = "on"),
							(M.lineNumbers = "off"),
							(M.glyphMargin = !1),
							(M.lineDecorationsWidth = 20),
							(M.rulers = []),
							(M.folding = !1),
							(M.scrollBeyondLastLine = !1),
							(M.renderLineHighlight = "none"),
							(M.minimap = { enabled: !1 }),
							(M.renderValidationDecorations = "editable"),
							(M.padding = void 0),
							(M.readOnly = !0),
							(M.domReadOnly = !0),
							(M.unicodeHighlight = {
								nonBasicASCII: !1,
								invisibleCharacters: !1,
								ambiguousCharacters: !1,
							});
						const N = this.$.getValue("[Log]");
						return (
							N &&
								(N["editor.minimap.enabled"] && (M.minimap = { enabled: !0 }),
								"editor.wordWrap" in N && (M.wordWrap = N["editor.wordWrap"])),
							M
						);
					}
					Yb() {
						return this.input
							? this.input.getAriaLabel()
							: t.localize(8323, null);
					}
					Cb() {
						return this.input
							? (0, I.$yVb)(this.input, void 0, void 0, this.cb.count)
							: this.Yb();
					}
					async setInput(D, M, N, A) {
						const R = !(M && M.preserveFocus);
						(this.input && D.matches(this.input)) ||
							(this.input && this.input.dispose(),
							await super.setInput(D, M, N, A),
							this.c.set(D.resource),
							R && this.focus(),
							this.revealLastLine());
					}
					clearInput() {
						this.input && this.input.dispose(),
							super.clearInput(),
							this.c.reset();
					}
					Y(D) {
						D.setAttribute("role", "document"), super.Y(D);
						const M = this.scopedContextKeyService;
						M && r.$i8.bindTo(M).set(!0);
					}
				};
				k = Ne(
					[
						j(0, i.$km),
						j(1, C.$Li),
						j(2, w.$lq),
						j(3, a.$gj),
						j(4, E.$XO),
						j(5, u.$iP),
						j(6, h.$EY),
						j(7, c.$IY),
						j(8, $.$ll),
					],
					k,
				);
			},
		),
		define(
			de[3872],
			he([
				1, 0, 3, 4, 11, 102, 20, 30, 192, 55, 44, 66, 3407, 1025, 566, 1831,
				623, 18,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					d.$Io
						.as(u.$a1.EditorPane)
						.registerEditorPane(
							m.$vVb.create(c.$pnc, c.$pnc.ID, (0, i.localize)(11379, null)),
							[new E.$Ji(n.$W4b)],
						);
				let f = class extends t.$1c {
					static {
						this.ID = "workbench.contrib.webviewPanel";
					}
					constructor(s, l) {
						super(),
							(this.a = l),
							this.D(
								s.onWillOpenEditor((y) => {
									const $ = l.getGroup(y.groupId);
									$ && this.b(y.editor, $);
								}),
							);
					}
					b(s, l) {
						if (
							!(s instanceof n.$W4b) ||
							s.typeId !== n.$W4b.typeId ||
							l.contains(s)
						)
							return;
						let y;
						const $ = this.a.groups;
						for (const v of $)
							if (v.contains(s)) {
								y = v;
								break;
							}
						y && y.closeEditor(s);
					}
				};
				(f = Ne([j(0, o.$IY), j(1, a.$EY)], f)),
					(0, r.$s6)(f.ID, f, r.WorkbenchPhase.BlockStartup),
					d.$Io
						.as(u.$a1.EditorFactory)
						.registerEditorSerializer(g.$Toc.ID, g.$Toc),
					(0, C.$lK)(p.$qnc, p.$snc, C.InstantiationType.Delayed),
					(0, w.$4X)(h.$uSc),
					(0, w.$4X)(h.$vSc),
					(0, w.$4X)(h.$wSc),
					(0, w.$4X)(h.$xSc),
					(0, w.$4X)(h.$ySc);
			},
		),
		define(
			de[3873],
			he([1, 0, 4, 1277, 1811, 3317, 1276, 3283, 30, 44, 102, 11, 55, 192, 43]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					m.$Io
						.as(r.$a1.EditorPane)
						.registerEditorPane(
							c.$vVb.create(w.$rYc, w.$rYc.ID, (0, t.localize)(11660, null)),
							[new u.$Ji(i.$oYc)],
						),
					(0, a.$4X)(d.$xYc),
					m.$Io
						.as(r.$a1.EditorFactory)
						.registerEditorSerializer(d.$yYc.ID, d.$yYc),
					(0, h.$s6)(C.$nYc.ID, C.$nYc, { editorTypeId: w.$rYc.ID }),
					n.$TX.registerCommandAndKeybindingRule(E.$sYc),
					n.$TX.registerCommandAndKeybindingRule(E.$tYc),
					n.$TX.registerCommandAndKeybindingRule(E.$uYc),
					n.$TX.registerCommandAndKeybindingRule(E.$vYc),
					a.$ZX.appendMenuItem(a.$XX.MenubarHelpMenu, {
						group: "1_welcome",
						command: {
							id: "workbench.action.showInteractivePlayground",
							title: (0, t.localize)(11661, null),
						},
						order: 3,
					});
			},
		),
		