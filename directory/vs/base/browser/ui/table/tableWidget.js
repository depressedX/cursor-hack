define(
			de[1167],
			he([1, 0, 7, 317, 95, 278, 279, 6, 3, 195, 2256]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ipb = void 0);
				class u {
					static {
						this.TemplateId = "row";
					}
					constructor(g, p, o) {
						(this.f = g),
							(this.g = o),
							(this.templateId = u.TemplateId),
							(this.e = new Set());
						const f = new Map(p.map((b) => [b.templateId, b]));
						this.d = [];
						for (const b of g) {
							const s = f.get(b.templateId);
							if (!s)
								throw new Error(
									`Table cell renderer for template id ${b.templateId} not found.`,
								);
							this.d.push(s);
						}
					}
					renderTemplate(g) {
						const p = (0, t.$fhb)(g, (0, t.$)(".monaco-table-tr")),
							o = [],
							f = [];
						for (let s = 0; s < this.f.length; s++) {
							const l = this.d[s],
								y = (0, t.$fhb)(
									p,
									(0, t.$)(".monaco-table-td", { "data-col-index": s }),
								);
							(y.style.width = `${this.g(s)}px`),
								o.push(y),
								f.push(l.renderTemplate(y));
						}
						const b = { container: g, cellContainers: o, cellTemplateData: f };
						return this.e.add(b), b;
					}
					renderElement(g, p, o, f) {
						for (let b = 0; b < this.f.length; b++) {
							const l = this.f[b].project(g);
							this.d[b].renderElement(l, p, o.cellTemplateData[b], f);
						}
					}
					disposeElement(g, p, o, f) {
						for (let b = 0; b < this.f.length; b++) {
							const s = this.d[b];
							if (s.disposeElement) {
								const y = this.f[b].project(g);
								s.disposeElement(y, p, o.cellTemplateData[b], f);
							}
						}
					}
					disposeTemplate(g) {
						for (let p = 0; p < this.f.length; p++)
							this.d[p].disposeTemplate(g.cellTemplateData[p]);
						(0, t.$9fb)(g.container), this.e.delete(g);
					}
					layoutColumn(g, p) {
						for (const { cellContainers: o } of this.e)
							o[g].style.width = `${p}px`;
					}
				}
				function a(n) {
					return {
						getHeight(g) {
							return n.getHeight(g);
						},
						getTemplateId() {
							return u.TemplateId;
						},
					};
				}
				class h extends m.$1c {
					get minimumSize() {
						return this.column.minimumWidth ?? 120;
					}
					get maximumSize() {
						return this.column.maximumWidth ?? Number.POSITIVE_INFINITY;
					}
					get onDidChange() {
						return this.column.onDidChangeWidthConstraints ?? d.Event.None;
					}
					constructor(g, p) {
						super(),
							(this.column = g),
							(this.g = p),
							(this.f = new d.$re()),
							(this.onDidLayout = this.f.event),
							(this.element = (0, t.$)(
								".monaco-table-th",
								{ "data-col-index": p },
								g.label,
							)),
							g.tooltip &&
								this.D(
									(0, i.$1ib)().setupManagedHover(
										(0, w.$cib)("mouse"),
										this.element,
										g.tooltip,
									),
								);
					}
					layout(g) {
						this.f.fire([this.g, g]);
					}
				}
				class c {
					static {
						this.d = 0;
					}
					get onDidChangeFocus() {
						return this.g.onDidChangeFocus;
					}
					get onDidChangeSelection() {
						return this.g.onDidChangeSelection;
					}
					get onDidScroll() {
						return this.g.onDidScroll;
					}
					get onMouseClick() {
						return this.g.onMouseClick;
					}
					get onMouseDblClick() {
						return this.g.onMouseDblClick;
					}
					get onMouseMiddleClick() {
						return this.g.onMouseMiddleClick;
					}
					get onPointer() {
						return this.g.onPointer;
					}
					get onMouseUp() {
						return this.g.onMouseUp;
					}
					get onMouseDown() {
						return this.g.onMouseDown;
					}
					get onMouseOver() {
						return this.g.onMouseOver;
					}
					get onMouseMove() {
						return this.g.onMouseMove;
					}
					get onMouseOut() {
						return this.g.onMouseOut;
					}
					get onTouchStart() {
						return this.g.onTouchStart;
					}
					get onTap() {
						return this.g.onTap;
					}
					get onContextMenu() {
						return this.g.onContextMenu;
					}
					get onDidFocus() {
						return this.g.onDidFocus;
					}
					get onDidBlur() {
						return this.g.onDidBlur;
					}
					get scrollTop() {
						return this.g.scrollTop;
					}
					set scrollTop(g) {
						this.g.scrollTop = g;
					}
					get scrollLeft() {
						return this.g.scrollLeft;
					}
					set scrollLeft(g) {
						this.g.scrollLeft = g;
					}
					get scrollHeight() {
						return this.g.scrollHeight;
					}
					get renderHeight() {
						return this.g.renderHeight;
					}
					get onDidDispose() {
						return this.g.onDidDispose;
					}
					constructor(g, p, o, f, b, s) {
						(this.p = o),
							(this.q = f),
							(this.domId = `table_id_${++c.d}`),
							(this.k = new m.$Zc()),
							(this.m = 0),
							(this.o = 0),
							(this.domNode = (0, t.$fhb)(
								p,
								(0, t.$)(`.monaco-table.${this.domId}`),
							));
						const l = f.map((v, S) => this.k.add(new h(v, S))),
							y = {
								size: l.reduce((v, S) => v + S.column.weight, 0),
								views: l.map((v) => ({ size: v.column.weight, view: v })),
							};
						(this.f = this.k.add(
							new C.$vob(this.domNode, {
								orientation: C.Orientation.HORIZONTAL,
								scrollbarVisibility: r.ScrollbarVisibility.Hidden,
								getSashOrthogonalSize: () => this.o,
								descriptor: y,
							}),
						)),
							(this.f.el.style.height = `${o.headerRowHeight}px`),
							(this.f.el.style.lineHeight = `${o.headerRowHeight}px`);
						const $ = new u(f, b, (v) => this.f.getViewSize(v));
						(this.g = this.k.add(new E.List(g, this.domNode, a(o), [$], s))),
							d.Event.any(...l.map((v) => v.onDidLayout))(
								([v, S]) => $.layoutColumn(v, S),
								null,
								this.k,
							),
							this.f.onDidSashReset(
								(v) => {
									const S = f.reduce((T, P) => T + P.weight, 0),
										I = (f[v].weight / S) * this.m;
									this.f.resizeView(v, I);
								},
								null,
								this.k,
							),
							(this.j = (0, t.$Rgb)(this.domNode)),
							this.style(E.$Qib);
					}
					getColumnLabels() {
						return this.q.map((g) => g.label);
					}
					resizeColumn(g, p) {
						const o = Math.round((p / 100) * this.m);
						this.f.resizeView(g, o);
					}
					updateOptions(g) {
						this.g.updateOptions(g);
					}
					splice(g, p, o = []) {
						this.g.splice(g, p, o);
					}
					rerender() {
						this.g.rerender();
					}
					row(g) {
						return this.g.element(g);
					}
					indexOf(g) {
						return this.g.indexOf(g);
					}
					get length() {
						return this.g.length;
					}
					getHTMLElement() {
						return this.domNode;
					}
					layout(g, p) {
						(g = g ?? (0, t.$ygb)(this.domNode)),
							(p = p ?? (0, t.$wgb)(this.domNode)),
							(this.m = p),
							(this.o = g),
							this.f.layout(p);
						const o = g - this.p.headerRowHeight;
						(this.g.getHTMLElement().style.height = `${o}px`),
							this.g.layout(o, p);
					}
					triggerTypeNavigation() {
						this.g.triggerTypeNavigation();
					}
					style(g) {
						const p = [];
						p.push(`.monaco-table.${this.domId} > .monaco-split-view2 .monaco-sash.vertical::before {
			top: ${this.p.headerRowHeight + 1}px;
			height: calc(100% - ${this.p.headerRowHeight}px);
		}`),
							(this.j.textContent = p.join(`
`)),
							this.g.style(g);
					}
					domFocus() {
						this.g.domFocus();
					}
					setAnchor(g) {
						this.g.setAnchor(g);
					}
					getAnchor() {
						return this.g.getAnchor();
					}
					getSelectedElements() {
						return this.g.getSelectedElements();
					}
					setSelection(g, p) {
						this.g.setSelection(g, p);
					}
					getSelection() {
						return this.g.getSelection();
					}
					setFocus(g, p) {
						this.g.setFocus(g, p);
					}
					focusNext(g = 1, p = !1, o) {
						this.g.focusNext(g, p, o);
					}
					focusPrevious(g = 1, p = !1, o) {
						this.g.focusPrevious(g, p, o);
					}
					focusNextPage(g) {
						return this.g.focusNextPage(g);
					}
					focusPreviousPage(g) {
						return this.g.focusPreviousPage(g);
					}
					focusFirst(g) {
						this.g.focusFirst(g);
					}
					focusLast(g) {
						this.g.focusLast(g);
					}
					getFocus() {
						return this.g.getFocus();
					}
					getFocusedElements() {
						return this.g.getFocusedElements();
					}
					getRelativeTop(g) {
						return this.g.getRelativeTop(g);
					}
					reveal(g, p) {
						this.g.reveal(g, p);
					}
					dispose() {
						this.k.dispose();
					}
				}
				e.$ipb = c;
			},
		),
		