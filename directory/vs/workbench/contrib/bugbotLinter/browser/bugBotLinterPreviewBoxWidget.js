define(
			de[4269],
			he([1, 0, 7, 3, 56, 5, 850, 4268, 45, 13, 1522]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$DAc = void 0),
					(t = mt(t));
				var u;
				(function (h) {
					let c;
					(function (g) {
						(g[(g.Hidden = 0)] = "Hidden"), (g[(g.Showing = 1)] = "Showing");
					})((c = h.Type || (h.Type = {}))),
						(h.Hidden = { type: c.Hidden });
					class n {
						constructor(p, o) {
							(this.editorPosition = p),
								(this.widgetPosition = o),
								(this.type = c.Showing);
						}
					}
					h.Showing = n;
				})(u || (u = {}));
				let a = class extends i.$1c {
					constructor(c, n, g, p) {
						super(),
							(this.g = c),
							(this.h = n),
							(this.j = g),
							(this.m = p),
							(this.allowEditorOverflow = !0),
							(this.f = u.Hidden),
							(this.c = this.D(this.m.createScoped(this))),
							([this.previewBoxStore, this.n] = this.c.createStore({
								bug: void 0,
							})),
							(this.a = t.$("div.bugFinderPreviewBoxWidgetBaseContainer")),
							(this.b = t.$("div")),
							(this.b.tabIndex = -1),
							this.a.appendChild(this.b),
							this.g.addContentWidget(this),
							this.D({
								dispose: () => {
									this.a.remove();
								},
							}),
							this.D(
								this.j.onDidBugsChange((o) => {
									o === this.g.getModel()?.uri.fsPath && this.update();
								}),
							),
							(0, d.$CAc)(this.b, this.h, this.previewBoxStore, this.g);
					}
					update() {
						(0, r.untrack)(() => {
							const c = this.previewBoxStore.bug?.decorationId;
							try {
								const n = this.g.getModel();
								if (!n) {
									(this.f = u.Hidden),
										this.n({ bug: void 0 }),
										this.g.layoutContentWidget(this);
									return;
								}
								if (!this.g.hasWidgetFocus()) {
									(this.f = u.Hidden),
										this.n({ bug: void 0 }),
										this.g.layoutContentWidget(this);
									return;
								}
								const g = this.g.getPosition();
								if (!g) {
									(this.f = u.Hidden),
										this.n({ bug: void 0 }),
										this.g.layoutContentWidget(this);
									return;
								}
								let p;
								for (const f of this.j.activeBugs.get(n.uri.fsPath) ?? []) {
									const b = n.getDecorationRange(f.decorationId);
									if (b && b.containsPosition(g)) {
										p = f;
										break;
									}
								}
								if (!p) {
									(this.f = u.Hidden),
										this.n({ bug: void 0 }),
										this.g.layoutContentWidget(this);
									return;
								}
								(this.previewBoxStore.bug?.bug !== p.bug ||
									this.previewBoxStore.bug?.decorationId !== p.decorationId) &&
									this.n({ bug: { bug: p.bug, decorationId: p.decorationId } });
								const o = n.getDecorationRange(p.decorationId);
								if (!o) return;
								(this.f = new u.Showing(g, {
									position: { lineNumber: o.endLineNumber + 1, column: 1 },
									preference: [w.ContentWidgetPositionPreference.BELOW],
								})),
									this.g.layoutContentWidget(this);
							} finally {
								c &&
									c !== this.previewBoxStore.bug?.decorationId &&
									this.j.markUnviewed(this.g, { decorationId: c }),
									this.previewBoxStore.bug &&
										c !== this.previewBoxStore.bug.decorationId &&
										this.j.markViewed(this.g, {
											decorationId: this.previewBoxStore.bug.decorationId,
										});
							}
						});
					}
					dispose() {
						super.dispose(), this.g.removeContentWidget(this);
					}
					getId() {
						return "BugBotLinterPreviewBoxWidget";
					}
					getDomNode() {
						return this.a;
					}
					getPosition() {
						return this.f.type === u.Type.Showing
							? this.f.widgetPosition
							: null;
					}
				};
				(e.$DAc = a),
					(e.$DAc = a = Ne([j(1, E.$Li), j(2, C.$idc), j(3, m.$0zb)], a));
			},
		),
		