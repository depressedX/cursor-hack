import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../amdX.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/decorators.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/strings.js';
import '../../../../../nls.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/contextview/browser/contextView.js';
import '../../../../../platform/keybinding/common/keybinding.js';
import '../../../../../platform/theme/common/themeService.js';
import '../../../terminal/browser/terminal.js';
import '../../../terminal/browser/terminalContextMenu.js';
import '../../../terminal/common/terminal.js';
import '../../../terminal/common/terminalStrings.js';
import '../common/terminalStickyScrollConfiguration.js';
import './terminalStickyScrollColorRegistry.js';
import '../../../../../css!vs/workbench/contrib/terminalContrib/stickyScroll/browser/media/stickyScroll.js';
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
		