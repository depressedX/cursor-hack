define(
			de[2846],
			he([1, 0, 6, 3, 77, 542, 1663, 38, 48, 4, 5, 39]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_xb = void 0);
				let h = class extends i.$1c {
					get onDidContentSizeChange() {
						return this.a.event;
					}
					constructor(n, g, p, o, f, b, s) {
						super(),
							(this.b = n),
							(this.c = g),
							(this.f = p),
							(this.g = o),
							(this.h = f),
							(this.j = b),
							(this.m = s),
							(this.original = this.D(
								this.n(this.f.editorOptions.get(), this.g.originalEditor || {}),
							)),
							(this.modified = this.D(
								this.q(this.f.editorOptions.get(), this.g.modifiedEditor || {}),
							)),
							(this.a = this.D(new t.$re())),
							(this.modifiedScrollTop = (0, w.observableFromEvent)(
								this,
								this.modified.onDidScrollChange,
								() => this.modified.getScrollTop(),
							)),
							(this.modifiedScrollHeight = (0, w.observableFromEvent)(
								this,
								this.modified.onDidScrollChange,
								() => this.modified.getScrollHeight(),
							)),
							(this.modifiedObs = (0, E.$Uwb)(this.modified)),
							(this.originalObs = (0, E.$Uwb)(this.original)),
							(this.modifiedModel = this.modifiedObs.model),
							(this.modifiedSelections = (0, w.observableFromEvent)(
								this,
								this.modified.onDidChangeCursorSelection,
								() => this.modified.getSelections() ?? [],
							)),
							(this.modifiedCursor = (0, w.derivedOpts)(
								{ owner: this, equalsFn: m.$hL.equals },
								(l) =>
									this.modifiedSelections.read(l)[0]?.getPosition() ??
									new m.$hL(1, 1),
							)),
							(this.originalCursor = (0, w.observableFromEvent)(
								this,
								this.original.onDidChangeCursorPosition,
								() => this.original.getPosition() ?? new m.$hL(1, 1),
							)),
							(this.isOriginalFocused = (0, E.$Uwb)(this.original).isFocused),
							(this.isModifiedFocused = (0, E.$Uwb)(this.modified).isFocused),
							(this.isFocused = (0, w.derived)(
								this,
								(l) =>
									this.isOriginalFocused.read(l) ||
									this.isModifiedFocused.read(l),
							)),
							(this.g = null),
							this.D(
								(0, w.autorunHandleChanges)(
									{
										createEmptyChangeSummary: () => ({}),
										handleChange: (l, y) => (
											l.didChange(p.editorOptions) &&
												Object.assign(y, l.change.changedOptions),
											!0
										),
									},
									(l, y) => {
										p.editorOptions.read(l),
											this.f.renderSideBySide.read(l),
											this.modified.updateOptions(this.t(l, y)),
											this.original.updateOptions(this.s(l, y));
									},
								),
							);
					}
					n(n, g) {
						const p = this.s(void 0, n),
							o = this.r(this.j, this.b, p, g);
						return o.setContextValue("isInDiffLeftEditor", !0), o;
					}
					q(n, g) {
						const p = this.t(void 0, n),
							o = this.r(this.j, this.c, p, g);
						return o.setContextValue("isInDiffRightEditor", !0), o;
					}
					r(n, g, p, o) {
						const f = this.h(n, g, p, o);
						return (
							this.D(
								f.onDidContentSizeChange((b) => {
									const s =
											this.original.getContentWidth() +
											this.modified.getContentWidth() +
											C.$$xb.ENTIRE_DIFF_OVERVIEW_WIDTH,
										l = Math.max(
											this.modified.getContentHeight(),
											this.original.getContentHeight(),
										);
									this.a.fire({
										contentHeight: l,
										contentWidth: s,
										contentHeightChanged: b.contentHeightChanged,
										contentWidthChanged: b.contentWidthChanged,
									});
								}),
							),
							f
						);
					}
					s(n, g) {
						const p = this.u(g);
						return (
							this.f.renderSideBySide.get()
								? ((p.unicodeHighlight =
										this.f.editorOptions.get().unicodeHighlight || {}),
									(p.wordWrapOverride1 = this.f.diffWordWrap.get()))
								: ((p.wordWrapOverride1 = "off"),
									(p.wordWrapOverride2 = "off"),
									(p.stickyScroll = { enabled: !1 }),
									(p.unicodeHighlight = {
										nonBasicASCII: !1,
										ambiguousCharacters: !1,
										invisibleCharacters: !1,
									})),
							(p.glyphMargin = this.f.renderSideBySide.get()),
							g.originalAriaLabel && (p.ariaLabel = g.originalAriaLabel),
							(p.ariaLabel = this.w(p.ariaLabel)),
							(p.readOnly = !this.f.originalEditable.get()),
							(p.dropIntoEditor = { enabled: !p.readOnly }),
							(p.extraEditorClassName = "original-in-monaco-diff-editor"),
							p
						);
					}
					t(n, g) {
						const p = this.u(g);
						return (
							g.modifiedAriaLabel && (p.ariaLabel = g.modifiedAriaLabel),
							(p.ariaLabel = this.w(p.ariaLabel)),
							(p.wordWrapOverride1 = this.f.diffWordWrap.get()),
							(p.revealHorizontalRightPadding =
								d.EditorOptions.revealHorizontalRightPadding.defaultValue +
								C.$$xb.ENTIRE_DIFF_OVERVIEW_WIDTH),
							(p.scrollbar.verticalHasArrows = !1),
							(p.extraEditorClassName = "modified-in-monaco-diff-editor"),
							p
						);
					}
					u(n) {
						const g = { ...n, dimension: { height: 0, width: 0 } };
						return (
							(g.inDiffEditor = !0),
							(g.automaticLayout = !1),
							(g.scrollbar = { ...(g.scrollbar || {}) }),
							(g.folding = !1),
							(g.codeLens = this.f.diffCodeLens.get()),
							(g.fixedOverflowWidgets = !0),
							(g.minimap = { ...(g.minimap || {}) }),
							(g.minimap.enabled = !1),
							this.f.hideUnchangedRegions.get()
								? (g.stickyScroll = { enabled: !1 })
								: (g.stickyScroll = this.f.editorOptions.get().stickyScroll),
							g
						);
					}
					w(n) {
						n || (n = "");
						const g = (0, r.localize)(
							217,
							null,
							this.m
								.lookupKeybinding("editor.action.accessibilityHelp")
								?.getAriaLabel(),
						);
						return this.f.accessibilityVerbose.get()
							? n + g
							: n
								? n.replaceAll(g, "")
								: "";
					}
				};
				(e.$_xb = h), (e.$_xb = h = Ne([j(5, u.$Li), j(6, a.$uZ)], h));
			},
		),
		