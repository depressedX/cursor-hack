define(
			de[542],
			he([1, 0, 433, 3, 77, 407, 319, 38, 48, 104]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Vwb = void 0),
					(e.$Uwb = u),
					(e.$Wwb = h),
					(e.$Xwb = c);
				function u(n) {
					return a.get(n);
				}
				class a extends i.$1c {
					static {
						this.a = new Map();
					}
					static get(g) {
						let p = a.a.get(g);
						if (!p) {
							(p = new a(g)), a.a.set(g, p);
							const o = g.onDidDispose(() => {
								const f = a.a.get(g);
								f && (a.a.delete(g), f.dispose(), o.dispose());
							});
						}
						return p;
					}
					f() {
						this.b++, this.b === 1 && (this.c = new E.$$d(() => {}));
					}
					g() {
						if ((this.b--, this.b === 0)) {
							const g = this.c;
							(this.c = void 0), g.finish();
						}
					}
					constructor(g) {
						super(),
							(this.editor = g),
							(this.b = 0),
							(this.c = void 0),
							(this.j = (0, w.observableValue)(this, this.editor.getModel())),
							(this.model = this.j),
							(this.isReadonly = (0, w.observableFromEvent)(
								this,
								this.editor.onDidChangeConfiguration,
								() => this.editor.getOption(d.EditorOption.readOnly),
							)),
							(this.m = (0, w.observableValueOpts)(
								{ owner: this, lazy: !0 },
								this.editor.getModel()?.getVersionId() ?? null,
							)),
							(this.versionId = this.m),
							(this.n = (0, w.observableValueOpts)(
								{
									owner: this,
									equalsFn: (0, t.$dd)((0, t.$ad)(r.$kL.selectionsEqual)),
									lazy: !0,
								},
								this.editor.getSelections() ?? null,
							)),
							(this.selections = this.n),
							(this.positions = (0, w.derivedOpts)(
								{ owner: this, equalsFn: (0, t.$dd)((0, t.$ad)(m.$hL.equals)) },
								(p) =>
									this.selections.read(p)?.map((o) => o.getStartPosition()) ??
									null,
							)),
							(this.isFocused = (0, w.observableFromEvent)(
								this,
								(p) => {
									const o = this.editor.onDidFocusEditorWidget(p),
										f = this.editor.onDidBlurEditorWidget(p);
									return {
										dispose() {
											o.dispose(), f.dispose();
										},
									};
								},
								() => this.editor.hasWidgetFocus(),
							)),
							(this.value = (0, C.$Ud)(
								this,
								(p) => (
									this.versionId.read(p), this.model.read(p)?.getValue() ?? ""
								),
								(p, o) => {
									const f = this.model.get();
									f !== null && p !== f.getValue() && f.setValue(p);
								},
							)),
							(this.valueIsEmpty = (0, w.derived)(
								this,
								(p) => (
									this.versionId.read(p),
									this.editor.getModel()?.getValueLength() === 0
								),
							)),
							(this.cursorSelection = (0, w.derivedOpts)(
								{ owner: this, equalsFn: (0, t.$dd)(r.$kL.selectionsEqual) },
								(p) => this.selections.read(p)?.[0] ?? null,
							)),
							(this.cursorPosition = (0, w.derivedOpts)(
								{ owner: this, equalsFn: m.$hL.equals },
								(p) => this.selections.read(p)?.[0]?.getPosition() ?? null,
							)),
							(this.onDidType = (0, w.observableSignal)(this)),
							(this.scrollTop = (0, w.observableFromEvent)(
								this.editor.onDidScrollChange,
								() => this.editor.getScrollTop(),
							)),
							(this.scrollLeft = (0, w.observableFromEvent)(
								this.editor.onDidScrollChange,
								() => this.editor.getScrollLeft(),
							)),
							(this.layoutInfo = (0, w.observableFromEvent)(
								this.editor.onDidLayoutChange,
								() => this.editor.getLayoutInfo(),
							)),
							(this.layoutInfoContentLeft = this.layoutInfo.map(
								(p) => p.contentLeft,
							)),
							(this.layoutInfoDecorationsLeft = this.layoutInfo.map(
								(p) => p.decorationsLeft,
							)),
							(this.contentWidth = (0, w.observableFromEvent)(
								this.editor.onDidContentSizeChange,
								() => this.editor.getContentWidth(),
							)),
							(this.q = 0),
							this.D(this.editor.onBeginUpdate(() => this.f())),
							this.D(this.editor.onEndUpdate(() => this.g())),
							this.D(
								this.editor.onDidChangeModel(() => {
									this.f();
									try {
										this.j.set(this.editor.getModel(), this.c), this.h();
									} finally {
										this.g();
									}
								}),
							),
							this.D(
								this.editor.onDidType((p) => {
									this.f();
									try {
										this.h(), this.onDidType.trigger(this.c, p);
									} finally {
										this.g();
									}
								}),
							),
							this.D(
								this.editor.onDidChangeModelContent((p) => {
									this.f();
									try {
										this.m.set(
											this.editor.getModel()?.getVersionId() ?? null,
											this.c,
											p,
										),
											this.h();
									} finally {
										this.g();
									}
								}),
							),
							this.D(
								this.editor.onDidChangeCursorSelection((p) => {
									this.f();
									try {
										this.n.set(this.editor.getSelections(), this.c, p),
											this.h();
									} finally {
										this.g();
									}
								}),
							);
					}
					forceUpdate(g) {
						this.f();
						try {
							return this.h(), g ? g(this.c) : void 0;
						} finally {
							this.g();
						}
					}
					h() {
						this.f();
						try {
							this.j.set(this.editor.getModel(), this.c),
								this.m.set(
									this.editor.getModel()?.getVersionId() ?? null,
									this.c,
									void 0,
								),
								this.n.set(this.editor.getSelections(), this.c, void 0);
						} finally {
							this.g();
						}
					}
					getOption(g) {
						return (0, w.observableFromEvent)(
							this,
							(p) =>
								this.editor.onDidChangeConfiguration((o) => {
									o.hasChanged(g) && p(void 0);
								}),
							() => this.editor.getOption(g),
						);
					}
					setDecorations(g) {
						const p = new i.$Zc(),
							o = this.editor.createDecorationsCollection();
						return (
							p.add(
								(0, w.autorunOpts)(
									{
										owner: this,
										debugName: () => `Apply decorations from ${g.debugName}`,
									},
									(f) => {
										const b = g.read(f);
										o.set(b);
									},
								),
							),
							p.add({
								dispose: () => {
									o.clear();
								},
							}),
							p
						);
					}
					createOverlayWidget(g) {
						const p = "observableOverlayWidget" + this.q++,
							o = {
								getDomNode: () => g.domNode,
								getPosition: () => g.position.get(),
								getId: () => p,
								allowEditorOverflow: g.allowEditorOverflow,
								getMinContentWidthInPx: () => g.minContentWidthInPx.get(),
							};
						this.editor.addOverlayWidget(o);
						const f = (0, w.autorun)((b) => {
							g.position.read(b),
								g.minContentWidthInPx.read(b),
								this.editor.layoutOverlayWidget(o);
						});
						return (0, i.$Yc)(() => {
							f.dispose(), this.editor.removeOverlayWidget(o);
						});
					}
				}
				e.$Vwb = a;
				function h(n, g) {
					return (0, w.autorunWithStoreHandleChanges)(
						{
							createEmptyChangeSummary: () => ({ deltas: [], didChange: !1 }),
							handleChange: (p, o) => {
								if (p.didChange(n)) {
									const f = p.change;
									f !== void 0 && o.deltas.push(f), (o.didChange = !0);
								}
								return !0;
							},
						},
						(p, o) => {
							const f = n.read(p);
							o.didChange && g(f, o.deltas);
						},
					);
				}
				function c(n, g) {
					const p = new i.$Zc(),
						o = h(n, (f, b) => {
							p.clear(), g(f, b, p);
						});
					return {
						dispose() {
							o.dispose(), p.dispose();
						},
					};
				}
			},
		),
		