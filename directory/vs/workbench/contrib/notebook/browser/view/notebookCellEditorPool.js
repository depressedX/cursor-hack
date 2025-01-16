define(
			de[3502],
			he([1, 0, 7, 15, 3, 206, 71, 42, 10, 8, 5, 128, 108, 836]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$23b = void 0),
					(t = mt(t));
				let n = class extends w.$1c {
					constructor(p, o, f, b, s) {
						super(),
							(this.notebookEditor = p),
							(this.m = o),
							(this.n = f),
							(this.q = b),
							(this.r = s),
							(this.b = this.D(new w.$2c())),
							(this.h = !1),
							(this.j = !1),
							(this.a = this.notebookEditor
								.getDomNode()
								.appendChild(t.$(".cell-editor-part-cache"))),
							(this.a.style.position = "absolute"),
							(this.a.style.top = "-50000px"),
							(this.a.style.width = "1px"),
							(this.a.style.height = "1px");
					}
					s(p) {
						this.c = this.D(this.m(this.a));
						const o = t.$ghb(this.a, t.$(".cell-editor-container")),
							f = this.D(this.r.createChild(new a.$Ki([r.$6j, this.c])));
						C.EditorContextKeys.inCompositeEditor.bindTo(this.c).set(!0);
						const b = new c.$J3b(
							this.notebookEditor.getBaseCellEditorOptions(p.language),
							this.notebookEditor.notebookOptions,
							this.q,
						);
						(this.f = this.D(
							f.createInstance(
								E.$rwb,
								o,
								{
									...b.getDefaultValue(),
									dimension: { width: 0, height: 0 },
									scrollbar: {
										vertical: "hidden",
										horizontal: "auto",
										handleMouseWheel: !1,
										useShadows: !1,
									},
								},
								{
									contributions:
										this.notebookEditor.creationOptions.cellEditorContributions,
								},
							),
						)),
							(this.h = !0);
					}
					preserveFocusedEditor(p) {
						this.h || this.s(p),
							this.b.clear(),
							this.g?.cancel(),
							(this.g = (0, i.$zh)(async (o) => {
								const f = await this.n.createModelReference(p.uri);
								if (this.j || o.isCancellationRequested) {
									f.dispose();
									return;
								}
								const b = new w.$Zc();
								b.add(f),
									this.f.setModel(f.object.textEditorModel),
									this.f.setSelections(p.getSelections()),
									this.f.focus();
								const s = () => {
									const l = this.f.getSelections();
									l && p.setSelections(l),
										this.notebookEditor.revealInView(p),
										this.f.setModel(null),
										f.dispose();
								};
								b.add(
									this.f.onDidChangeModelContent((l) => {
										s();
									}),
								),
									b.add(
										this.f.onDidChangeCursorSelection((l) => {
											(l.source === "keyboard" || l.source === "mouse") && s();
										}),
									),
									b.add(
										this.notebookEditor.onDidChangeActiveEditor(() => {
											const l = this.notebookEditor.getActiveCell();
											(l !== p || l.focusMode !== h.CellFocusMode.Editor) &&
												(this.b.clear(), this.f.setModel(null), f.dispose());
										}),
									),
									(this.b.value = b);
							}));
					}
					dispose() {
						(this.j = !0), this.g?.cancel(), super.dispose();
					}
				};
				(e.$23b = n),
					(e.$23b = n = Ne([j(2, d.$MO), j(3, m.$gj), j(4, u.$Li)], n));
			},
		),
		