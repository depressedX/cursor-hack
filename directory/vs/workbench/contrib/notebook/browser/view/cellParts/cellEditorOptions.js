define(
			de[836],
			he([1, 0, 6, 4, 11, 10, 81, 8, 30, 100, 238, 176, 294, 70]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$J3b = void 0);
				class n extends h.$A1b {
					set tabSize(p) {
						this.b !== p && ((this.b = p), this.j.fire());
					}
					get tabSize() {
						return this.b;
					}
					set indentSize(p) {
						this.g !== p && ((this.g = p), this.j.fire());
					}
					get indentSize() {
						return this.g;
					}
					set insertSpaces(p) {
						this.h !== p && ((this.h = p), this.j.fire());
					}
					get insertSpaces() {
						return this.h;
					}
					constructor(p, o, f) {
						super(),
							(this.n = p),
							(this.notebookOptions = o),
							(this.configurationService = f),
							(this.a = "inherit"),
							(this.j = this.D(new t.$re())),
							(this.onDidChange = this.j.event),
							this.D(
								p.onDidChange(() => {
									this.q();
								}),
							),
							(this.m = this.r());
					}
					updateState(p, o) {
						o.cellLineNumberChanged && this.setLineNumbers(p.lineNumbers);
					}
					q() {
						(this.m = this.r()), this.j.fire();
					}
					r() {
						const p = this.n.value,
							o =
								this.notebookOptions.getDisplayOptions()
									.editorOptionsCustomizations,
							f = o?.["editor.indentSize"];
						f !== void 0 && (this.indentSize = f);
						const b = o?.["editor.insertSpaces"];
						b !== void 0 && (this.insertSpaces = b);
						const s = o?.["editor.tabSize"];
						s !== void 0 && (this.tabSize = s);
						let l = p.lineNumbers;
						switch (this.a) {
							case "inherit":
								this.configurationService.getValue("notebook.lineNumbers") ===
								"on"
									? p.lineNumbers === "off" && (l = "on")
									: (l = "off");
								break;
							case "on":
								p.lineNumbers === "off" && (l = "on");
								break;
							case "off":
								l = "off";
								break;
						}
						return p.lineNumbers !== l
							? { ...p, lineNumbers: l }
							: Object.assign({}, p);
					}
					getUpdatedValue(p, o) {
						const f = this.getValue(p, o);
						return delete f.hover, f;
					}
					getValue(p, o) {
						return {
							...this.m,
							padding: this.notebookOptions.computeEditorPadding(p, o),
						};
					}
					getDefaultValue() {
						return { ...this.m, padding: { top: 12, bottom: 12 } };
					}
					setLineNumbers(p) {
						(this.a = p), this.q();
					}
				}
				(e.$J3b = n),
					m.$Io
						.as(C.$No.Configuration)
						.registerConfiguration({
							id: "notebook",
							order: 100,
							type: "object",
							properties: {
								"notebook.lineNumbers": {
									type: "string",
									enum: ["off", "on"],
									default: "off",
									markdownDescription: (0, i.localize)(8184, null),
								},
							},
						}),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "notebook.toggleLineNumbers",
									title: (0, i.localize2)(8187, "Toggle Notebook Line Numbers"),
									precondition: a.$pJb,
									menu: [
										{
											id: w.$XX.NotebookToolbar,
											group: "notebookLayout",
											order: 2,
											when: d.$Kj.equals("config.notebook.globalToolbar", !0),
										},
									],
									category: u.$p5b,
									f1: !0,
									toggled: {
										condition: d.$Kj.notEquals(
											"config.notebook.lineNumbers",
											"off",
										),
										title: (0, i.localize)(8185, null),
									},
								});
							}
							async run(p) {
								const o = p.get(E.$gj);
								o.getValue("notebook.lineNumbers") === "on"
									? o.updateValue("notebook.lineNumbers", "off")
									: o.updateValue("notebook.lineNumbers", "on");
							}
						},
					),
					(0, w.$4X)(
						class extends u.$y5b {
							constructor() {
								super({
									id: "notebook.cell.toggleLineNumbers",
									title: (0, i.localize)(8186, null),
									precondition: r.$TPb.isEqualTo(c.$O6),
									menu: [
										{ id: w.$XX.NotebookCellTitle, group: "View", order: 1 },
									],
									toggled: d.$Kj.or(
										a.$HJb.isEqualTo("on"),
										d.$Kj.and(
											a.$HJb.isEqualTo("inherit"),
											d.$Kj.equals("config.notebook.lineNumbers", "on"),
										),
									),
								});
							}
							async runWithContext(p, o) {
								if (o.ui) this.a(p.get(E.$gj), o.cell);
								else {
									const f = p.get(E.$gj);
									o.selectedCells.forEach((b) => {
										this.a(f, b);
									});
								}
							}
							a(p, o) {
								const f = p.getValue("notebook.lineNumbers") === "on",
									b = o.lineNumbers;
								b === "on" || (b === "inherit" && f)
									? (o.lineNumbers = "off")
									: (o.lineNumbers = "on");
							}
						},
					);
			},
		),
		