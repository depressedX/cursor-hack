define(
			de[4012],
			he([1, 0, 7, 5, 35, 1879, 1935, 4011, 3, 4009, 4010, 2344]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$otc = void 0);
				let a = class extends w.$pP {
					get g() {
						return this.c?.control;
					}
					constructor(c, n, g, p, o, f, b) {
						super(b),
							(this.j = c),
							(this.m = n),
							(this.r = g),
							(this.s = p),
							(this.t = o),
							(this.u = f),
							(this.b = this.D(new m.$Zc())),
							(this.f = this.D(new m.$Zc())),
							(this.a = this.y()),
							(this.c = this.z());
					}
					y() {
						let c;
						switch (this.r.partOptions.showTabs) {
							case "none":
								c = u.$ntc;
								break;
							case "single":
								c = d.$ltc;
								break;
							case "multiple":
							default:
								c = this.r.partOptions.pinnedTabsOnSeparateRow
									? r.$mtc
									: C.$ktc;
								break;
						}
						const n = this.u.createInstance(
							c,
							this.j,
							this.m,
							this.r,
							this.s,
							this.t,
						);
						return this.b.add(n);
					}
					z() {
						if (this.r.partOptions.showTabs === "single") return;
						const c = document.createElement("div");
						c.classList.add("breadcrumbs-below-tabs"), this.j.appendChild(c);
						const n = this.f.add(
							this.u.createInstance(E.$yrc, c, this.s, {
								showFileIcons: !0,
								showSymbolIcons: !0,
								showDecorationColors: !1,
								showPlaceholder: !0,
							}),
						);
						return (
							this.f.add(n.onDidEnablementChange(() => this.s.relayout())),
							this.f.add(n.onDidVisibilityChange(() => this.s.relayout())),
							n
						);
					}
					openEditor(c, n) {
						const g = this.a.openEditor(c, n);
						this.C(g);
					}
					openEditors(c) {
						const n = this.a.openEditors(c);
						this.C(n);
					}
					C(c) {
						c ? this.g?.update() : this.g?.revealLast();
					}
					beforeCloseEditor(c) {
						return this.a.beforeCloseEditor(c);
					}
					closeEditor(c) {
						this.a.closeEditor(c), this.F();
					}
					closeEditors(c) {
						this.a.closeEditors(c), this.F();
					}
					F() {
						this.s.activeEditor || this.g?.update();
					}
					moveEditor(c, n, g, p) {
						return this.a.moveEditor(c, n, g, p);
					}
					pinEditor(c) {
						return this.a.pinEditor(c);
					}
					stickEditor(c) {
						return this.a.stickEditor(c);
					}
					unstickEditor(c) {
						return this.a.unstickEditor(c);
					}
					setActive(c) {
						return this.a.setActive(c);
					}
					updateEditorSelections() {
						this.a.updateEditorSelections();
					}
					updateEditorLabel(c) {
						return this.a.updateEditorLabel(c);
					}
					updateEditorDirty(c) {
						return this.a.updateEditorDirty(c);
					}
					updateOptions(c, n) {
						c.showTabs !== n.showTabs ||
						(n.showTabs !== "single" &&
							c.pinnedTabsOnSeparateRow !== n.pinnedTabsOnSeparateRow)
							? (this.b.clear(),
								this.f.clear(),
								(0, t.$9fb)(this.j),
								(this.a = this.y()),
								(this.c = this.z()))
							: this.a.updateOptions(c, n);
					}
					layout(c) {
						const n = this.a.layout(c);
						let g;
						return (
							this.g?.isHidden() === !1 &&
								((g = new t.$pgb(c.container.width, E.$xrc.HEIGHT)),
								this.g.layout(g)),
							new t.$pgb(c.container.width, n.height + (g ? g.height : 0))
						);
					}
					getHeight() {
						const c = this.a.getHeight(),
							n = this.g?.isHidden() === !1 ? E.$xrc.HEIGHT : 0;
						return { total: c + n, offset: c };
					}
				};
				(e.$otc = a), (e.$otc = a = Ne([j(5, i.$Li), j(6, w.$iP)], a));
			},
		),
		