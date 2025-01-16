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
		