define(
			de[1883],
			he([1, 0, 1683, 125, 5, 21, 32, 35, 233, 1016, 712, 66, 18, 17]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				var n;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iSc = void 0);
				let g = class extends r.$zVb {
					static {
						n = this;
					}
					static {
						this.ID = "multiDiffEditor";
					}
					get viewModel() {
						return this.c;
					}
					constructor(f, b, s, l, y, $, v, S) {
						super(n.ID, f, "multiDiffEditor", s, b, y, S, l, $, v),
							(this.a = void 0);
					}
					Y(f) {
						(this.a = this.D(
							this.m.createInstance(t.$IGc, f, this.m.createInstance(p)),
						)),
							this.D(
								this.a.onDidChangeActiveControl(() => {
									this.S.fire();
								}),
							);
					}
					async setInput(f, b, s, l) {
						await super.setInput(f, b, s, l),
							(this.c = await f.getViewModel()),
							this.a.setViewModel(this.c);
						const y = this.jb(f, s);
						y && this.a.setViewState(y), this.r(b);
					}
					setOptions(f) {
						this.r(f);
					}
					r(f) {
						const b = f?.viewState;
						!b ||
							!b.revealData ||
							this.a?.reveal(b.revealData.resource, {
								range: b.revealData.range
									? c.$iL.lift(b.revealData.range)
									: void 0,
								highlight: !0,
							});
					}
					async clearInput() {
						await super.clearInput(), this.a.setViewModel(void 0);
					}
					layout(f) {
						this.a.layout(f);
					}
					getControl() {
						return this.a.getActiveControl();
					}
					focus() {
						super.focus(), this.a?.getActiveControl()?.focus();
					}
					hasFocus() {
						return (
							this.a?.getActiveControl()?.hasTextFocus() || super.hasFocus()
						);
					}
					mb(f) {
						return this.a.getViewState();
					}
					nb(f) {
						return f instanceof u.$Lnc;
					}
					pb(f) {
						return f.resource;
					}
					tryGetCodeEditor(f) {
						return this.a.tryGetCodeEditor(f);
					}
					findDocumentDiffItem(f) {
						const b = this.a.findDocumentDiffItem(f);
						return b ? b.multiDiffEditorItem : void 0;
					}
				};
				(e.$iSc = g),
					(e.$iSc =
						g =
						n =
							Ne(
								[
									j(1, w.$Li),
									j(2, C.$km),
									j(3, d.$iP),
									j(4, E.$lq),
									j(5, h.$IY),
									j(6, a.$EY),
									j(7, i.$XO),
								],
								g,
							));
				let p = class {
					constructor(f) {
						this.a = f;
					}
					createResourceLabel(f) {
						const b = this.a.createInstance(m.$vPb, f, {});
						return {
							setUri(s, l = {}) {
								s
									? b.element.setFile(s, { strikethrough: l.strikethrough })
									: b.element.clear();
							},
							dispose() {
								b.dispose();
							},
						};
					}
				};
				p = Ne([j(0, w.$Li)], p);
			},
		),
		