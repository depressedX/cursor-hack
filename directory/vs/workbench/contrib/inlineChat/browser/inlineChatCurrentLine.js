define(
			de[4084],
			he([1, 0, 3, 248, 4, 8, 153, 427, 257, 46, 188, 17, 48, 1061, 71]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pJc = e.$oJc = e.$nJc = void 0),
					(e.$nJc = new E.$5j(
						"inlineChatExpansion",
						!1,
						(0, w.localize)(7101, null),
					));
				let g = class {
					static {
						this.Id = "editor.inlineChatExpansion";
					}
					constructor(f, b, s) {
						(this.a = new t.$Zc()),
							(this.b = this.a.add(new t.$2c())),
							(this.c = e.$nJc.bindTo(b));
						const l = () => {
							f.hasModel() && s.getAgents().length > 0 ? this.f(f) : this.g();
						};
						this.a.add(s.onDidChangeAgents(l)),
							this.a.add(f.onDidChangeModel(l)),
							l();
					}
					dispose() {
						this.c.reset(), this.a.dispose();
					}
					f(f) {
						const b = new t.$Zc();
						this.b.value = b;
						const s = f.getModel(),
							l = [];
						b.add(
							f.onDidChangeCursorPosition((y) => {
								let $ = !1;
								if (y.reason === i.CursorChangeReason.NotSet) {
									const v = f.getPosition(),
										S = s.getOffsetAt(v),
										I = s.getLineLength(v.lineNumber);
									s.getLineFirstNonWhitespaceColumn(v.lineNumber) !== 0 &&
										v.column > I &&
										l.includes(S) &&
										($ = !0);
								}
								(l.length = 0), this.c.set($);
							}),
						),
							b.add(
								f.onDidChangeModelContent((y) => {
									l.length = 0;
									for (const $ of y.changes) {
										const v = $.rangeOffset + $.text.length;
										l.push(v);
									}
									queueMicrotask(() => {
										l.length > 0 && this.c.set(!1);
									});
								}),
							);
					}
					g() {
						this.b.clear();
					}
				};
				(e.$oJc = g), (e.$oJc = g = Ne([j(1, E.$6j), j(2, C.$c3)], g));
				class p extends r.$ktb {
					constructor() {
						super({
							id: "inlineChat.startWithCurrentLine",
							category: c.$8Ic.category,
							title: (0, w.localize2)(
								7102,
								"Start in Editor with Current Line",
							),
							f1: !0,
							precondition: E.$Kj.and(
								m.$WKb.negate(),
								m.$VKb,
								n.EditorContextKeys.writable,
							),
						});
					}
					async runEditorCommand(f, b) {
						const s = d.$Z1b.get(b);
						if (!s || !b.hasModel()) return;
						const l = b.getModel(),
							y = b.getSelection().positionLineNumber,
							$ = l.getLineContent(y),
							v = l.getLineFirstNonWhitespaceColumn(y),
							S = l.getLineMaxColumn(y);
						let I = [];
						l.pushEditOperations(
							null,
							[u.$jL.replace(new a.$iL(y, v, y, S), "")],
							(k) => ((I = k), null),
						);
						let T;
						const P = s.onDidEnterState((k) => (T = k));
						try {
							await s.run({
								autoSend: !0,
								message: $.trim(),
								position: new h.$hL(y, v),
							});
						} finally {
							P.dispose();
						}
						T === d.State.CANCEL && l.pushEditOperations(null, I, () => null);
					}
				}
				e.$pJc = p;
			},
		),
		