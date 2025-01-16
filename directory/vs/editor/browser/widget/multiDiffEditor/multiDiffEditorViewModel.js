define(
			de[1681],
			he([1, 0, 3, 77, 457, 1680, 954, 370, 67, 5]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Gnc = e.$Fnc = void 0);
				class u extends t.$1c {
					async waitForDiffs() {
						for (const c of this.items.get())
							await c.diffEditorViewModel.waitForDiff();
					}
					collapseAll() {
						(0, i.transaction)((c) => {
							for (const n of this.items.get()) n.collapsed.set(!0, c);
						});
					}
					expandAll() {
						(0, i.transaction)((c) => {
							for (const n of this.items.get()) n.collapsed.set(!1, c);
						});
					}
					get contextKeys() {
						return this.model.contextKeys;
					}
					constructor(c, n) {
						super(),
							(this.model = c),
							(this.b = n),
							(this.a = (0, w.$Nd)(this.model, this.model.documents)),
							(this.items = (0, w.$Ld)(this, this.a, (g, p) =>
								p.add(this.b.createInstance(a, g, this)),
							).recomputeInitiallyAndOnChange(this.B)),
							(this.focusedDiffItem = (0, i.derived)(this, (g) =>
								this.items.read(g).find((p) => p.isFocused.read(g)),
							)),
							(this.activeDiffItem = (0, w.$Kd)(
								this,
								(g, p) => this.focusedDiffItem.read(g) ?? p,
							));
					}
				}
				e.$Fnc = u;
				let a = class extends t.$1c {
					get diffEditorViewModel() {
						return this.diffEditorViewModelRef.object;
					}
					get originalUri() {
						return this.documentDiffItem.original?.uri;
					}
					get modifiedUri() {
						return this.documentDiffItem.modified?.uri;
					}
					setIsFocused(c, n) {
						this.a.set(c, n);
					}
					get documentDiffItem() {
						return this.b.object;
					}
					constructor(c, n, g, p) {
						super(),
							(this.c = n),
							(this.f = g),
							(this.g = p),
							(this.collapsed = (0, i.observableValue)(this, !1)),
							(this.lastTemplateData = (0, i.observableValue)(this, {
								contentHeight: 500,
								selections: void 0,
							})),
							(this.isActive = (0, i.derived)(
								this,
								(y) => this.c.activeDiffItem.read(y) === this,
							)),
							(this.a = (0, i.observableValue)(this, (0, w.$wd)(!1))),
							(this.isFocused = (0, i.derived)(this, (y) =>
								this.a.read(y).read(y),
							)),
							(this.isAlive = (0, i.observableValue)(this, !0)),
							this.D(
								(0, t.$Yc)(() => {
									this.isAlive.set(!1, void 0);
								}),
							),
							(this.b = this.D(c.createNewRef(this)));
						function o(y) {
							return { ...y, hideUnchangedRegions: { enabled: !0 } };
						}
						const f = this.f.createInstance(
							E.$6xb,
							o(this.documentDiffItem.options || {}),
						);
						this.documentDiffItem.onOptionsDidChange &&
							this.D(
								this.documentDiffItem.onOptionsDidChange(() => {
									f.updateOptions(o(this.documentDiffItem.options || {}));
								}),
							);
						const b = new t.$Zc(),
							s =
								this.documentDiffItem.original ??
								b.add(this.g.createModel("", null)),
							l =
								this.documentDiffItem.modified ??
								b.add(this.g.createModel("", null));
						b.add(this.b.createNewRef(this)),
							(this.diffEditorViewModelRef = this.D(
								d.$Lwb.createWithDisposable(
									this.f.createInstance(
										C.$7xb,
										{ original: s, modified: l },
										f,
									),
									b,
									this,
								),
							));
					}
					getKey() {
						return JSON.stringify([
							this.originalUri?.toString(),
							this.modifiedUri?.toString(),
						]);
					}
				};
				(e.$Gnc = a), (e.$Gnc = a = Ne([j(2, r.$Li), j(3, m.$QO)], a));
			},
		),
		