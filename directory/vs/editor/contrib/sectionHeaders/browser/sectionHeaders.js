define(
			de[2921],
			he([1, 0, 15, 3, 46, 38, 171, 152, 64, 122, 200]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$fkc = void 0);
				let a = class extends i.$1c {
					static {
						this.ID = "editor.sectionHeaderDetector";
					}
					constructor(n, g, p) {
						super(),
							(this.h = n),
							(this.j = g),
							(this.m = p),
							(this.b = this.h.createDecorationsCollection()),
							(this.a = this.n(n.getOption(E.EditorOption.minimap))),
							(this.f = null),
							(this.g = {}),
							this.D(
								n.onDidChangeModel((o) => {
									(this.g = {}),
										(this.a = this.n(n.getOption(E.EditorOption.minimap))),
										this.s(),
										this.c.schedule(0);
								}),
							),
							this.D(
								n.onDidChangeModelLanguage((o) => {
									(this.g = {}),
										(this.a = this.n(n.getOption(E.EditorOption.minimap))),
										this.s(),
										this.c.schedule(0);
								}),
							),
							this.D(
								g.onDidChange((o) => {
									const f = this.h.getModel()?.getLanguageId();
									f &&
										o.affects(f) &&
										((this.g = {}),
										(this.a = this.n(n.getOption(E.EditorOption.minimap))),
										this.s(),
										this.c.schedule(0));
								}),
							),
							this.D(
								n.onDidChangeConfiguration((o) => {
									(this.a && !o.hasChanged(E.EditorOption.minimap)) ||
										((this.a = this.n(n.getOption(E.EditorOption.minimap))),
										this.r([]),
										this.s(),
										this.c.schedule(0));
								}),
							),
							this.D(
								this.h.onDidChangeModelContent((o) => {
									this.c.schedule();
								}),
							),
							this.D(
								n.onDidChangeModelTokens((o) => {
									this.c.isScheduled() || this.c.schedule(1e3);
								}),
							),
							(this.c = this.D(
								new t.$Yh(() => {
									this.q();
								}, 250),
							)),
							this.c.schedule(0);
					}
					n(n) {
						if (!n || !this.h.hasModel()) return;
						const g = this.h.getModel().getLanguageId();
						if (!g) return;
						const p = this.j.getLanguageConfiguration(g).comments,
							o = this.j.getLanguageConfiguration(g).foldingRules;
						if (!(!p && !o?.markers))
							return {
								foldingRules: o,
								findMarkSectionHeaders: n.showMarkSectionHeaders,
								findRegionSectionHeaders: n.showRegionSectionHeaders,
							};
					}
					q() {
						if (
							!this.h.hasModel() ||
							(!this.a?.findMarkSectionHeaders &&
								!this.a?.findRegionSectionHeaders)
						)
							return;
						const n = this.h.getModel();
						if (n.isDisposed() || n.isTooLargeForSyncing()) return;
						const g = n.getVersionId();
						this.m.findSectionHeaders(n.uri, this.a).then((p) => {
							n.isDisposed() || n.getVersionId() !== g || this.r(p);
						});
					}
					r(n) {
						const g = this.h.getModel();
						g &&
							(n = n.filter((f) => {
								if (!f.shouldBeInComments) return !0;
								const b = g.validateRange(f.range),
									s = g.tokenization.getLineTokens(b.startLineNumber),
									l = s.findTokenIndexAtOffset(b.startColumn - 1),
									y = s.getStandardTokenType(l);
								return (
									s.getLanguageId(l) === g.getLanguageId() &&
									y === C.StandardTokenType.Comment
								);
							}));
						const p = Object.values(this.g).map((f) => f.decorationId),
							o = n.map((f) => h(f));
						this.h.changeDecorations((f) => {
							const b = f.deltaDecorations(p, o);
							this.g = {};
							for (let s = 0, l = b.length; s < l; s++) {
								const y = { sectionHeader: n[s], decorationId: b[s] };
								this.g[y.decorationId] = y;
							}
						});
					}
					s() {
						this.c.cancel(), this.f && (this.f.cancel(), (this.f = null));
					}
					dispose() {
						super.dispose(), this.s(), this.b.clear();
					}
				};
				(e.$fkc = a), (e.$fkc = a = Ne([j(1, d.$aN), j(2, u.$Cxb)], a));
				function h(c) {
					return {
						range: c.range,
						options: r.$eY.createDynamic({
							description: "section-header",
							stickiness: m.TrackedRangeStickiness.GrowsOnlyWhenTypingAfter,
							collapseOnReplaceEdit: !0,
							minimap: {
								color: void 0,
								position: m.MinimapPosition.Inline,
								sectionHeaderStyle: c.hasSeparatorLine
									? m.MinimapSectionHeaderStyle.Underlined
									: m.MinimapSectionHeaderStyle.Normal,
								sectionHeaderText: c.text,
							},
						}),
					};
				}
				(0, w.$qtb)(
					a.ID,
					a,
					w.EditorContributionInstantiation.AfterFirstRender,
				);
			},
		),
		