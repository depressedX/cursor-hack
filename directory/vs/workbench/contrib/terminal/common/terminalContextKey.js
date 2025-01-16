define(de[237], he([1, 0, 4, 8, 117, 145]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.TerminalContextKeys = e.TerminalContextKeyStrings = void 0);
			var C;
			(function (m) {
				(m.IsOpen = "terminalIsOpen"),
					(m.Count = "terminalCount"),
					(m.GroupCount = "terminalGroupCount"),
					(m.TabsNarrow = "isTerminalTabsNarrow"),
					(m.HasFixedWidth = "terminalHasFixedWidth"),
					(m.ProcessSupported = "terminalProcessSupported"),
					(m.Focus = "terminalFocus"),
					(m.FocusInAny = "terminalFocusInAny"),
					(m.AccessibleBufferFocus = "terminalAccessibleBufferFocus"),
					(m.AccessibleBufferOnLastLine = "terminalAccessibleBufferOnLastLine"),
					(m.EditorFocus = "terminalEditorFocus"),
					(m.TabsFocus = "terminalTabsFocus"),
					(m.WebExtensionContributedProfile =
						"terminalWebExtensionContributedProfile"),
					(m.TerminalHasBeenCreated = "terminalHasBeenCreated"),
					(m.TerminalEditorActive = "terminalEditorActive"),
					(m.TabsMouse = "terminalTabsMouse"),
					(m.AltBufferActive = "terminalAltBufferActive"),
					(m.SuggestWidgetVisible = "terminalSuggestWidgetVisible"),
					(m.A11yTreeFocus = "terminalA11yTreeFocus"),
					(m.ViewShowing = "terminalViewShowing"),
					(m.TextSelected = "terminalTextSelected"),
					(m.TextSelectedInFocused = "terminalTextSelectedInFocused"),
					(m.FindVisible = "terminalFindVisible"),
					(m.FindInputFocused = "terminalFindInputFocused"),
					(m.FindFocused = "terminalFindFocused"),
					(m.TabsSingularSelection = "terminalTabsSingularSelection"),
					(m.SplitTerminal = "terminalSplitTerminal"),
					(m.ShellType = "terminalShellType"),
					(m.InTerminalRunCommandPicker = "inTerminalRunCommandPicker"),
					(m.TerminalShellIntegrationEnabled =
						"terminalShellIntegrationEnabled");
			})(C || (e.TerminalContextKeyStrings = C = {}));
			var d;
			(function (m) {
				(m.isOpen = new i.$5j(C.IsOpen, !1, !0)),
					(m.focus = new i.$5j(C.Focus, !1, (0, t.localize)(10384, null))),
					(m.focusInAny = new i.$5j(
						C.FocusInAny,
						!1,
						(0, t.localize)(10385, null),
					)),
					(m.editorFocus = new i.$5j(
						C.EditorFocus,
						!1,
						(0, t.localize)(10386, null),
					)),
					(m.count = new i.$5j(C.Count, 0, (0, t.localize)(10387, null))),
					(m.groupCount = new i.$5j(C.GroupCount, 0, !0)),
					(m.tabsNarrow = new i.$5j(C.TabsNarrow, !1, !0)),
					(m.terminalHasFixedWidth = new i.$5j(C.HasFixedWidth, !1, !0)),
					(m.tabsFocus = new i.$5j(
						C.TabsFocus,
						!1,
						(0, t.localize)(10388, null),
					)),
					(m.webExtensionContributedProfile = new i.$5j(
						C.WebExtensionContributedProfile,
						!1,
						!0,
					)),
					(m.terminalHasBeenCreated = new i.$5j(
						C.TerminalHasBeenCreated,
						!1,
						!0,
					)),
					(m.terminalEditorActive = new i.$5j(C.TerminalEditorActive, !1, !0)),
					(m.tabsMouse = new i.$5j(C.TabsMouse, !1, !0)),
					(m.shellType = new i.$5j(C.ShellType, void 0, {
						type: "string",
						description: (0, t.localize)(10389, null),
					})),
					(m.altBufferActive = new i.$5j(
						C.AltBufferActive,
						!1,
						(0, t.localize)(10390, null),
					)),
					(m.suggestWidgetVisible = new i.$5j(
						C.SuggestWidgetVisible,
						!1,
						(0, t.localize)(10391, null),
					)),
					(m.notFocus = m.focus.toNegated()),
					(m.viewShowing = new i.$5j(
						C.ViewShowing,
						!1,
						(0, t.localize)(10392, null),
					)),
					(m.textSelected = new i.$5j(
						C.TextSelected,
						!1,
						(0, t.localize)(10393, null),
					)),
					(m.textSelectedInFocused = new i.$5j(
						C.TextSelectedInFocused,
						!1,
						(0, t.localize)(10394, null),
					)),
					(m.notTextSelected = m.textSelected.toNegated()),
					(m.findVisible = new i.$5j(C.FindVisible, !1, !0)),
					(m.notFindVisible = m.findVisible.toNegated()),
					(m.findInputFocus = new i.$5j(C.FindInputFocused, !1, !0)),
					(m.findFocus = new i.$5j(C.FindFocused, !1, !0)),
					(m.notFindFocus = m.findInputFocus.toNegated()),
					(m.processSupported = new i.$5j(
						C.ProcessSupported,
						!1,
						(0, t.localize)(10395, null),
					)),
					(m.tabsSingularSelection = new i.$5j(
						C.TabsSingularSelection,
						!1,
						(0, t.localize)(10396, null),
					)),
					(m.splitTerminal = new i.$5j(
						C.SplitTerminal,
						!1,
						(0, t.localize)(10397, null),
					)),
					(m.inTerminalRunCommandPicker = new i.$5j(
						C.InTerminalRunCommandPicker,
						!1,
						(0, t.localize)(10398, null),
					)),
					(m.terminalShellIntegrationEnabled = new i.$5j(
						C.TerminalShellIntegrationEnabled,
						!1,
						(0, t.localize)(10399, null),
					)),
					(m.shouldShowViewInlineActions = i.$Kj.and(
						i.$Kj.equals("view", E.$geb),
						i.$Kj.notEquals(
							`config.${w.TerminalSettingId.TabsHideCondition}`,
							"never",
						),
						i.$Kj.or(
							i.$Kj.not(`config.${w.TerminalSettingId.TabsEnabled}`),
							i.$Kj.and(
								i.$Kj.equals(
									`config.${w.TerminalSettingId.TabsShowActions}`,
									"singleTerminal",
								),
								i.$Kj.equals(C.GroupCount, 1),
							),
							i.$Kj.and(
								i.$Kj.equals(
									`config.${w.TerminalSettingId.TabsShowActions}`,
									"singleTerminalOrNarrow",
								),
								i.$Kj.or(
									i.$Kj.equals(C.GroupCount, 1),
									i.$Kj.has(C.TabsNarrow),
								),
							),
							i.$Kj.and(
								i.$Kj.equals(
									`config.${w.TerminalSettingId.TabsShowActions}`,
									"singleGroup",
								),
								i.$Kj.equals(C.GroupCount, 1),
							),
							i.$Kj.equals(
								`config.${w.TerminalSettingId.TabsShowActions}`,
								"always",
							),
						),
					));
			})(d || (e.TerminalContextKeys = d = {}));
		}),
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
		define(
			de[3171],
			he([1, 0, 3, 37, 9, 10, 23, 62, 117, 513, 562, 145]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nWc = void 0);
				var h;
				(function (n) {
					n[(n.MaxLineLength = 2e3)] = "MaxLineLength";
				})(h || (h = {}));
				let c = class extends t.$1c {
					static {
						this.id = "word";
					}
					constructor(g, p, o) {
						super(),
							(this.xterm = g),
							(this.b = p),
							(this.c = o),
							(this.maxLinkLength = 100),
							this.g(),
							this.D(
								this.b.onDidChangeConfiguration((f) => {
									f.affectsConfiguration(m.TerminalSettingId.WordSeparators) &&
										this.g();
								}),
							);
					}
					detect(g, p, o) {
						const f = [],
							b = (0, u.$_Vc)(this.xterm.buffer.active, p, o, this.xterm.cols);
						if (b === "" || b.length > h.MaxLineLength) return [];
						const s = this.f(b);
						for (const l of s) {
							if (l.text === "") continue;
							l.text.length > 0 &&
								l.text.charAt(l.text.length - 1) === ":" &&
								((l.text = l.text.slice(0, -1)), l.endIndex--);
							const y = (0, u.$0Vc)(
								g,
								this.xterm.cols,
								{
									startColumn: l.startIndex + 1,
									startLineNumber: 1,
									endColumn: l.endIndex + 1,
									endLineNumber: 1,
								},
								p,
							);
							if ((0, C.$Vg)(l.text, this.c.urlProtocol)) {
								const $ = w.URI.parse(l.text);
								$ &&
									f.push({
										text: l.text,
										uri: $,
										bufferRange: y,
										type: r.TerminalBuiltinLinkType.Url,
									});
								continue;
							}
							f.push({
								text: l.text,
								bufferRange: y,
								type: r.TerminalBuiltinLinkType.Search,
								contextLine: b,
							});
						}
						return f;
					}
					f(g) {
						const p = [],
							o = g.split(this.a);
						let f = 0;
						for (let b = 0; b < o.length; b++)
							p.push({ text: o[b], startIndex: f, endIndex: f + o[b].length }),
								(f += o[b].length + 1);
						return p;
					}
					g() {
						const g = this.b.getValue(a.$ieb).wordSeparators;
						let p = "";
						for (let o = 57520; o <= 57535; o++) p += String.fromCharCode(o);
						this.a = new RegExp(`[${(0, i.$of)(g)}${p}]`, "g");
					}
				};
				(e.$nWc = c), (e.$nWc = c = Ne([j(1, E.$gj), j(2, d.$Bk)], c));
			},
		),
		define(
			de[3172],
			he([
				1, 0, 536, 7, 138, 6, 3, 37, 4, 11, 10, 8, 49, 39, 35, 107, 616, 145,
				469, 808, 1767, 1144,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1Vc = void 0);
				var l;
				(function (I) {
					(I[(I.Off = 0)] = "Off"), (I[(I.On = 1)] = "On");
				})(l || (l = {}));
				var y;
				(function (I) {
					I.Visible = "visible";
				})(y || (y = {}));
				var $;
				(function (I) {
					I[(I.StickyScrollPercentageCap = 0.4)] = "StickyScrollPercentageCap";
				})($ || ($ = {}));
				let v = class extends C.$1c {
					constructor(T, P, k, L, D, M, N, A, R, O, B, U) {
						super(),
							(this.s = T),
							(this.t = P),
							(this.u = k),
							(this.w = L),
							(this.y = A),
							(this.z = R),
							(this.C = B),
							(this.F = U),
							(this.m = this.D(new C.$2c())),
							(this.n = l.Off),
							(this.q = !1),
							(this.r = 5),
							(this.j = this.D(
								O.createMenu(r.$XX.TerminalStickyScrollContext, N),
							)),
							this.D(
								E.Event.runAndSubscribe(
									this.t.raw.buffer.onBufferChange,
									(z) => {
										this.G(
											(z ?? this.t.raw.buffer.active).type === "normal"
												? l.On
												: l.Off,
										);
									},
								),
							),
							this.D(
								E.Event.runAndSubscribe(M.onDidChangeConfiguration, (z) => {
									(!z ||
										z.affectsConfiguration(
											b.TerminalStickyScrollSettingId.MaxLineCount,
										)) &&
										(this.r = M.getValue(
											b.TerminalStickyScrollSettingId.MaxLineCount,
										));
								}),
							),
							this.D(this.s.onDidChangeTarget(() => this.P())),
							D.then((z) => {
								this.B.isDisposed ||
									((this.a = this.D(
										new z({
											rows: 1,
											cols: this.t.raw.cols,
											allowProposedApi: !0,
											...this.Q(),
										}),
									)),
									this.R(),
									this.D(
										M.onDidChangeConfiguration((F) => {
											F.affectsConfiguration(o.$ieb) && this.P();
										}),
									),
									this.D(
										this.F.onDidColorThemeChange(() => {
											this.P();
										}),
									),
									this.D(
										this.t.raw.onResize(() => {
											this.P(), this.L();
										}),
									),
									this.D(
										this.s.onDidChangeVisibility((F) => {
											F && this.L();
										}),
									),
									this.W().then((F) => {
										this.B.isDisposed ||
											((this.b = this.D(new F())),
											this.t.raw.loadAddon(this.b),
											this.L());
									}));
							});
					}
					lockHide() {
						this.f?.classList.add("lock-hide");
					}
					unlockHide() {
						this.f?.classList.remove("lock-hide");
					}
					G(T) {
						if (this.n !== T)
							switch (T) {
								case l.Off: {
									this.J(!1), this.I();
									break;
								}
								case l.On: {
									this.L(), this.H();
									break;
								}
							}
					}
					H() {
						this.m.value ||
							(this.m.value = (0, C.$Xc)(
								E.Event.any(
									this.t.raw.onScroll,
									this.t.raw.onLineFeed,
									this.t.raw.onCursorMove,
								)(() => this.L()),
								(0, i.$$fb)(
									this.t.raw.element.querySelector(".xterm-viewport"),
									"scroll",
									() => this.L(),
								),
							));
					}
					I() {
						this.m.clear();
					}
					J(T) {
						T && this.O(), this.f?.classList.toggle(y.Visible, T);
					}
					L() {
						this.q ||
							((this.q = !0),
							queueMicrotask(() => {
								this.M(), (this.q = !1);
							}));
					}
					M() {
						const T = this.w.getCommandForLine(
							this.t.raw.buffer.active.viewportY,
						);
						if (((this.g = void 0), !T)) {
							this.J(!1);
							return;
						}
						if (!("marker" in T)) {
							const k = this.w.currentCommand;
							if (k?.commandStartMarker && k.commandExecutedMarker) {
								this.N(k, k.commandStartMarker);
								return;
							}
							this.J(!1);
							return;
						}
						const P = T.marker;
						if (!P || P.line === -1) {
							this.J(!1);
							return;
						}
						this.N(T, P);
					}
					N(T, P) {
						const k = this.t.raw;
						if (!k.element?.parentElement || !this.a || !this.b) return;
						if (T.promptStartMarker?.line === -1) {
							this.J(!1);
							return;
						}
						const L = k.buffer.active,
							D = T.getPromptRowCount(),
							M = T.getCommandRowCount(),
							N = P.line - (D - 1),
							A = !("getOutput" in T),
							R =
								!A && T.endMarker
									? Math.max(L.viewportY - T.endMarker.line + 1, 0)
									: 0,
							O = Math.min(
								this.r,
								Math.floor(k.rows * $.StickyScrollPercentageCap),
							),
							B = Math.min(D + M - 1, O) - R;
						if (L.viewportY <= N) {
							this.J(!1);
							return;
						}
						if (A && L.viewportY === L.baseY && L.cursorY === k.rows - 1) {
							const z = L.getLine(L.baseY + k.rows - 1);
							if (
								(L.cursorX === 1 && S(z, ":")) ||
								(L.cursorX === 5 && S(z, "(END)"))
							) {
								this.J(!1);
								return;
							}
						}
						const U = this.b.serialize({
							range: { start: N + R, end: N + R + Math.max(B - 1, 0) },
						});
						if (A && (0, d.$9f)(U).length === 0) {
							this.J(!1);
							return;
						}
						if (
							(((U && this.h !== U) ||
								this.a.cols !== k.cols ||
								this.a.rows !== B) &&
								(this.a.resize(this.a.cols, B),
								this.a.write("\x1B[0m\x1B[H\x1B[2J"),
								this.a.write(U),
								(this.h = U)),
							U)
						) {
							if (((this.g = T), this.J(!0), this.f)) {
								const z = k.element.getBoundingClientRect();
								if (z.height > 0) {
									const F = z.height / k.rows,
										x = B * F;
									let H = 0;
									!A &&
										T.endMarker &&
										T.endMarker.line !== -1 &&
										L.viewportY + B > T.endMarker.line &&
										(H = (L.viewportY + B - T.endMarker.line) * F),
										(this.f.style.bottom = `${z.height - x + 1 + H}px`);
								}
							}
						} else this.J(!1);
					}
					O() {
						if (this.f || !this.a || !this.t?.raw.element?.parentElement)
							return;
						const T = this.a,
							P = (0, i.$)(".hover-overlay");
						(this.f = (0, i.$)(".terminal-sticky-scroll", void 0, P)),
							this.t.raw.element.parentElement.append(this.f),
							this.D((0, C.$Yc)(() => this.f?.remove()));
						let k = (0, m.localize)(10573, null);
						const L = this.z.lookupKeybinding(
							o.TerminalCommandId.ScrollToPreviousCommand,
						);
						if (L) {
							const N = L.getLabel();
							N &&
								(k +=
									`
` + (0, m.localize)(10574, null, f.$hUc.scrollToPreviousCommand.value, N));
						}
						const D = this.z.lookupKeybinding(
							o.TerminalCommandId.ScrollToNextCommand,
						);
						if (D) {
							const N = D.getLabel();
							N &&
								(k +=
									`
` + (0, m.localize)(10575, null, f.$hUc.scrollToNextCommand.value, N));
						}
						P.title = k;
						const M = this.t.raw._core.viewport?.scrollBarWidth;
						M !== void 0 && (this.f.style.right = `${M}px`),
							this.a.open(this.f),
							this.D(
								(0, i.$$fb)(P, "click", () => {
									this.t &&
										this.g &&
										(this.t.markTracker.revealCommand(this.g), this.s.focus());
								}),
							),
							this.D(
								(0, i.$$fb)(P, "wheel", (N) =>
									this.t?.raw.element?.dispatchEvent(new WheelEvent(N.type, N)),
								),
							),
							this.D(
								(0, i.$0fb)(P, "mousedown", (N) => {
									N.stopImmediatePropagation(), N.preventDefault();
								}),
							),
							this.D(
								(0, i.$0fb)(P, "contextmenu", (N) => {
									N.stopImmediatePropagation(),
										N.preventDefault(),
										(0, p.$zUc)((0, i.getWindow)(P), N, this.s, this.j, this.y);
								}),
							),
							this.D(
								(0, i.$$fb)(
									P,
									"mouseover",
									() => (T.options.theme = this.U(!0)),
								),
							),
							this.D(
								(0, i.$$fb)(
									P,
									"mouseleave",
									() => (T.options.theme = this.U(!1)),
								),
							);
					}
					P() {
						this.a &&
							(this.a.resize(this.t.raw.cols, this.a.rows),
							(this.a.options = this.Q()),
							this.R());
					}
					Q() {
						const T = this.t.raw.options;
						return {
							cursorInactiveStyle: "none",
							scrollback: 0,
							logLevel: "off",
							theme: this.U(!1),
							documentOverride: T.documentOverride,
							fontFamily: T.fontFamily,
							fontWeight: T.fontWeight,
							fontWeightBold: T.fontWeightBold,
							fontSize: T.fontSize,
							letterSpacing: T.letterSpacing,
							lineHeight: T.lineHeight,
							drawBoldTextInBrightColors: T.drawBoldTextInBrightColors,
							minimumContrastRatio: T.minimumContrastRatio,
							tabStopWidth: T.tabStopWidth,
							customGlyphs: T.customGlyphs,
						};
					}
					async R() {
						if (this.S() && !this.c) {
							const T = await this.X();
							if (this.B.isDisposed) return;
							(this.c = this.D(new T())), this.a?.loadAddon(this.c);
						} else !this.S() && this.c && (this.c.dispose(), (this.c = void 0));
					}
					S() {
						return (
							this.C.config.gpuAcceleration === "auto" ||
							this.C.config.gpuAcceleration === "on"
						);
					}
					U(T) {
						const P = this.F.getColorTheme();
						return {
							...this.t.getXtermTheme(),
							background: T
								? (P.getColor(s.$ZVc)?.toString() ??
									this.u.getBackgroundColor(P)?.toString())
								: (P.getColor(s.$YVc)?.toString() ??
									this.u.getBackgroundColor(P)?.toString()),
							selectionBackground: void 0,
							selectionInactiveBackground: void 0,
						};
					}
					async W() {
						return (
							await (0, t.$Tq)(
								"@xterm/addon-serialize",
								"lib/addon-serialize.js",
							)
						).SerializeAddon;
					}
					async X() {
						return (
							await (0, t.$Tq)("@xterm/addon-webgl", "lib/addon-webgl.js")
						).WebglAddon;
					}
				};
				(e.$1Vc = v),
					Ne([(0, w.$gi)(0)], v.prototype, "P", null),
					Ne([(0, w.$gi)(0)], v.prototype, "R", null),
					Ne([w.$ei], v.prototype, "W", null),
					Ne([w.$ei], v.prototype, "X", null),
					(e.$1Vc = v =
						Ne(
							[
								j(5, u.$gj),
								j(6, a.$6j),
								j(7, h.$Xxb),
								j(8, c.$uZ),
								j(9, r.$YX),
								j(10, g.$jIb),
								j(11, n.$iP),
							],
							v,
						));
				function S(I, T) {
					if (!I) return !1;
					for (let P = 0; P < T.length; P++)
						if (I.getCell(P)?.getChars() !== T[P]) return !1;
					return !0;
				}
			},
		),
		