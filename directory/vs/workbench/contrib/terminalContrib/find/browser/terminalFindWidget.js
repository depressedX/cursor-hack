define(
			de[3170],
			he([1, 0, 7, 1722, 49, 8, 107, 237, 35, 10, 39, 6, 121, 3155, 72, 1263]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$TVc = void 0),
					(t = mt(t));
				const p = 419;
				let o = class extends i.$QVc {
					constructor(b, s, l, y, $, v, S, I, T) {
						super(
							{
								showCommonFindToggles: !0,
								checkImeCompletionState: !0,
								showResultCount: !0,
								initialWidth: p,
								enableSash: !0,
								appendCaseSensitiveActionId:
									g.TerminalFindCommandId.ToggleFindCaseSensitive,
								appendRegexActionId: g.TerminalFindCommandId.ToggleFindRegex,
								appendWholeWordsActionId:
									g.TerminalFindCommandId.ToggleFindWholeWord,
								previousMatchActionId: g.TerminalFindCommandId.FindPrevious,
								nextMatchActionId: g.TerminalFindCommandId.FindNext,
								closeWidgetActionId: g.TerminalFindCommandId.FindHide,
								type: "Terminal",
								matchesLimit: C.XtermTerminalConstants.SearchHighlightLimit,
							},
							s,
							y,
							S,
							l,
						),
							(this.ib = b),
							(this.jb = y),
							(this.lb = I),
							(this.mb = T),
							this.D(
								this.state.onFindReplaceStateChange(() => {
									this.show();
								}),
							),
							(this.eb = d.TerminalContextKeys.findInputFocus.bindTo(this.jb)),
							(this.fb = d.TerminalContextKeys.findFocus.bindTo(this.jb)),
							(this.gb = d.TerminalContextKeys.findVisible.bindTo(this.jb));
						const P = this.getDomNode().firstChild;
						P &&
							(this.D(
								t.$0fb(P, "mousedown", (L) => {
									L.stopPropagation();
								}),
							),
							this.D(
								t.$0fb(P, "contextmenu", (L) => {
									L.stopPropagation();
								}),
							));
						const k = this.getFindInputDomNode();
						this.D(
							t.$0fb(k, "contextmenu", (L) => {
								(0, c.$SVc)(t.getWindow(k), L, v, $), L.stopPropagation();
							}),
						),
							this.D(
								this.lb.onDidColorThemeChange(() => {
									this.isVisible() && this.find(!0, !0);
								}),
							),
							this.D(
								this.mb.onDidChangeConfiguration((L) => {
									L.affectsConfiguration("workbench.colorCustomizations") &&
										this.isVisible() &&
										this.find(!0, !0);
								}),
							),
							this.updateResultCount();
					}
					find(b, s) {
						const l = this.ib.xterm;
						l &&
							(b
								? this.ub(l, this.U, {
										regex: this.Z(),
										wholeWord: this.$(),
										caseSensitive: this.ab(),
										incremental: s,
									})
								: this.tb(l, this.U, {
										regex: this.Z(),
										wholeWord: this.$(),
										caseSensitive: this.ab(),
									}));
					}
					reveal() {
						const s =
								(this.ib.hasSelection() &&
								!this.ib.selection.includes(`
`)
									? this.ib.selection
									: void 0) ?? this.U,
							l = this.ib.xterm;
						l &&
							s &&
							s !== "" &&
							this.ub(l, s, {
								incremental: !0,
								regex: this.Z(),
								wholeWord: this.$(),
								caseSensitive: this.ab(),
							}).then((y) => {
								this.bb(y),
									this.D(
										a.Event.once(l.onDidChangeSelection)(() =>
											l.clearActiveSearchDecoration(),
										),
									);
							}),
							this.bb(!1),
							super.reveal(s),
							this.gb.set(!0);
					}
					show() {
						const b =
							this.ib.hasSelection() &&
							!this.ib.selection.includes(`
`)
								? this.ib.selection
								: void 0;
						super.show(b), this.gb.set(!0);
					}
					hide() {
						super.hide(),
							this.gb.reset(),
							this.ib.focus(!0),
							this.ib.xterm?.clearSearchDecorations();
					}
					async S() {
						return this.ib.xterm?.findResult;
					}
					N() {
						const b = this.ib.xterm;
						return (
							b &&
								this.ub(b, this.U, {
									regex: this.Z(),
									wholeWord: this.$(),
									caseSensitive: this.ab(),
									incremental: !0,
								}).then((s) => {
									this.bb(s);
								}),
							!1
						);
					}
					O() {
						"overrideCopyOnSelection" in this.ib &&
							(this.hb = this.ib.overrideCopyOnSelection(!1)),
							this.fb.set(!0);
					}
					P() {
						this.hb?.dispose(),
							this.ib.xterm?.clearActiveSearchDecoration(),
							this.fb.reset();
					}
					Q() {
						this.eb.set(!0);
					}
					R() {
						this.eb.reset();
					}
					findFirst() {
						const b = this.ib;
						b.hasSelection() && b.clearSelection();
						const s = b.xterm;
						s &&
							this.ub(s, this.U, {
								regex: this.Z(),
								wholeWord: this.$(),
								caseSensitive: this.ab(),
							});
					}
					async tb(b, s, l) {
						return b
							.findNext(s, l)
							.then(
								(y) => (
									this.D(
										a.Event.once(b.onDidChangeSelection)(() =>
											b.clearActiveSearchDecoration(),
										),
									),
									y
								),
							);
					}
					async ub(b, s, l) {
						return b
							.findPrevious(s, l)
							.then(
								(y) => (
									this.D(
										a.Event.once(b.onDidChangeSelection)(() =>
											b.clearActiveSearchDecoration(),
										),
									),
									y
								),
							);
					}
				};
				(e.$TVc = o),
					(e.$TVc = o =
						Ne(
							[
								j(1, w.$Wxb),
								j(2, u.$uZ),
								j(3, E.$6j),
								j(4, w.$Xxb),
								j(5, h.$Vxb),
								j(6, n.$Uyb),
								j(7, m.$iP),
								j(8, r.$gj),
							],
							o,
						));
			},
		),
		