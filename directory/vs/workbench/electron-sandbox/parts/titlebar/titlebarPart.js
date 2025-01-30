import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/browser/browser.js';
import '../../../../base/browser/dom.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/storage/common/storage.js';
import '../../../services/environment/electron-sandbox/environmentService.js';
import '../../../services/host/browser/host.js';
import '../../../../base/common/platform.js';
import '../../../../platform/actions/common/actions.js';
import '../../../browser/parts/titlebar/titlebarPart.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../../platform/native/common/native.js';
import '../../../../platform/window/common/window.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/themables.js';
import './menubarControl.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../base/browser/window.js';
define(
			de[4053],
			he([
				1, 0, 6, 139, 7, 8, 10, 21, 151, 87, 12, 11, 4014, 49, 35, 96, 110, 253,
				5, 14, 26, 3538, 66, 18, 39, 75,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*event*/,
				i /*browser*/,
				w /*dom*/,
				E /*contextkey*/,
				C /*configuration*/,
				d /*storage*/,
				m /*environmentService*/,
				r /*host*/,
				u /*platform*/,
				a /*actions*/,
				h /*titlebarPart*/,
				c /*contextView*/,
				n /*themeService*/,
				g /*layoutService*/,
				p /*native*/,
				o /*window*/,
				f /*instantiation*/,
				b /*codicons*/,
				s /*themables*/,
				l /*menubarControl*/,
				y /*editorGroupsService*/,
				$ /*editorService*/,
				v /*keybinding*/,
				S /*window*/,
) {
				"use strict";
				var I;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xdd = e.$wdd = e.$vdd = e.$udd = void 0);
				let T = class extends h.$utc {
					get minimumHeight() {
						return u.$m
							? (this.cc ? o.$AY : this.hc) /
									(this.preventZoom
										? (0, i.$Jfb)((0, w.getWindow)(this.element))
										: 1)
							: super.minimumHeight;
					}
					get maximumHeight() {
						return this.minimumHeight;
					}
					get hc() {
						return this.gc ? 28 : 22;
					}
					constructor(M, N, A, R, O, B, U, z, F, x, H, q, V, G, K, J, W) {
						super(M, N, A, R, O, B, U, z, F, x, H, q, G, K, J, W),
							(this.mc = V),
							(this.gc = (0, u.$M)(B.os.release));
					}
					Tb(M) {
						(u.$l || u.$n) &&
							this.ac === "toggle" &&
							M &&
							this.cb &&
							((0, w.hide)(this.cb),
							setTimeout(() => (0, w.show)(this.cb), 50)),
							super.Tb(M);
					}
					Qb(M) {
						super.Qb(M),
							M.affectsConfiguration("window.doubleClickIconToClose") &&
								this.ib &&
								this.pc();
					}
					pc() {
						this.Db.getValue("window.doubleClickIconToClose") && this.ib
							? (this.ib.style["-webkit-app-region"] = "no-drag")
							: this.ib && (this.ib.style["-webkit-app-region"] = "drag");
					}
					Rb() {
						super.Rb(),
							!this.kb &&
								this.hb &&
								this.D(this.hb.onFocusStateChange((M) => this.rc(M)));
					}
					rc(M) {
						(u.$l || u.$n) &&
							this.ac !== "compact" &&
							this.cb &&
							(M ? (0, w.hide)(this.cb) : (0, w.show)(this.cb));
					}
					Q(M) {
						const N = super.Q(M),
							A = (0, w.getWindow)(M),
							R = (0, w.getWindowId)(A);
						if (
							((u.$m || (0, o.$yY)(this.Db)) &&
								this.D(this.Fb.createInstance(l.$tdd)),
							this.ib &&
								(this.pc(),
								this.D(
									(0, w.$0fb)(this.ib, w.$$gb.DBLCLICK, () => {
										this.mc.closeWindow({ targetWindowId: R });
									}),
								)),
							u.$n && !(0, o.$yY)(this.Db) && !(0, i.$Wfb)() && this.bb)
						) {
							const O = (0, w.$fhb)(
								this.bb,
								(0, w.$)(
									"div.window-icon.window-minimize" +
										s.ThemeIcon.asCSSSelector(b.$ak.chromeMinimize),
								),
							);
							this.D(
								(0, w.$0fb)(O, w.$$gb.CLICK, () => {
									this.mc.minimizeWindow({ targetWindowId: R });
								}),
							),
								(this.ic = (0, w.$fhb)(
									this.bb,
									(0, w.$)("div.window-icon.window-max-restore"),
								)),
								this.D(
									(0, w.$0fb)(this.ic, w.$$gb.CLICK, async () =>
										(await this.mc.isMaximized({ targetWindowId: R }))
											? this.mc.unmaximizeWindow({ targetWindowId: R })
											: this.mc.maximizeWindow({ targetWindowId: R }),
									),
								);
							const B = (0, w.$fhb)(
								this.bb,
								(0, w.$)(
									"div.window-icon.window-close" +
										s.ThemeIcon.asCSSSelector(b.$ak.chromeClose),
								),
							);
							this.D(
								(0, w.$0fb)(B, w.$$gb.CLICK, () => {
									this.mc.closeWindow({ targetWindowId: R });
								}),
							),
								(this.jc = (0, w.$fhb)(this.c, (0, w.$)("div.resizer"))),
								this.D(
									t.Event.runAndSubscribe(
										this.M.onDidChangeWindowMaximized,
										({ windowId: U, maximized: z }) => {
											U === R && this.tc(z);
										},
										{ windowId: R, maximized: this.M.isWindowMaximized(A) },
									),
								);
						}
						return (
							u.$l &&
								!(0, o.$yY)(this.Db) &&
								this.D(
									this.mc.onDidTriggerWindowSystemContextMenu(
										({ windowId: O, x: B, y: U }) => {
											if (R !== O) return;
											const z = (0, i.$Jfb)((0, w.getWindow)(this.element));
											this.$b(
												new MouseEvent("mouseup", {
													clientX: B / z,
													clientY: U / z,
												}),
												a.$XX.TitleBarContext,
											);
										},
									),
								),
							N
						);
					}
					tc(M) {
						this.ic &&
							(M
								? (this.ic.classList.remove(
										...s.ThemeIcon.asClassNameArray(b.$ak.chromeMaximize),
									),
									this.ic.classList.add(
										...s.ThemeIcon.asClassNameArray(b.$ak.chromeRestore),
									))
								: (this.ic.classList.remove(
										...s.ThemeIcon.asClassNameArray(b.$ak.chromeRestore),
									),
									this.ic.classList.add(
										...s.ThemeIcon.asClassNameArray(b.$ak.chromeMaximize),
									))),
							this.jc && (M ? (0, w.hide)(this.jc) : (0, w.show)(this.jc));
					}
					updateStyles() {
						super.updateStyles(),
							(0, o.$BY)(this.Db) &&
								(!this.kc ||
									this.kc.bgColor !== this.element.style.backgroundColor ||
									this.kc.fgColor !== this.element.style.color) &&
								this.mc.updateWindowControls({
									targetWindowId: (0, w.getWindowId)(
										(0, w.getWindow)(this.element),
									),
									backgroundColor: this.element.style.backgroundColor,
									foregroundColor: this.element.style.color,
								});
					}
					layout(M, N) {
						if (
							(super.layout(M, N),
							(0, o.$BY)(this.Db) || (u.$m && u.$p && !(0, o.$yY)(this.Db)))
						) {
							const A =
								N > 0 || this.gc
									? Math.round(N * (0, i.$Jfb)((0, w.getWindow)(this.element)))
									: this.hc;
							A !== this.lc &&
								((this.lc = A),
								this.mc.updateWindowControls({
									targetWindowId: (0, w.getWindowId)(
										(0, w.getWindow)(this.element),
									),
									height: A,
								}));
						}
					}
				};
				(e.$udd = T),
					(e.$udd = T =
						Ne(
							[
								j(3, c.$Xxb),
								j(4, C.$gj),
								j(5, m.$ucd),
								j(6, f.$Li),
								j(7, n.$iP),
								j(8, d.$lq),
								j(9, g.$mEb),
								j(10, E.$6j),
								j(11, r.$asb),
								j(12, p.$y7c),
								j(13, y.$EY),
								j(14, $.$IY),
								j(15, a.$YX),
								j(16, v.$uZ),
							],
							T,
						));
				let P = class extends T {
					constructor(M, N, A, R, O, B, U, z, F, x, H, q, V, G) {
						super(
							g.Parts.TITLEBAR_PART,
							S.$Bfb,
							"main",
							M,
							N,
							A,
							R,
							O,
							B,
							U,
							z,
							F,
							x,
							H,
							q,
							V,
							G,
						);
					}
				};
				(e.$vdd = P),
					(e.$vdd = P =
						Ne(
							[
								j(0, c.$Xxb),
								j(1, C.$gj),
								j(2, m.$ucd),
								j(3, f.$Li),
								j(4, n.$iP),
								j(5, d.$lq),
								j(6, g.$mEb),
								j(7, E.$6j),
								j(8, r.$asb),
								j(9, p.$y7c),
								j(10, y.$EY),
								j(11, $.$IY),
								j(12, a.$YX),
								j(13, v.$uZ),
							],
							P,
						));
				let k = class extends T {
					static {
						I = this;
					}
					static {
						this.uc = 1;
					}
					get height() {
						return this.minimumHeight;
					}
					constructor(M, N, A, R, O, B, U, z, F, x, H, q, V, G, K, J, W) {
						const X = I.uc++;
						super(
							`workbench.parts.auxiliaryTitle.${X}`,
							(0, w.getWindow)(M),
							N,
							R,
							O,
							B,
							U,
							z,
							F,
							x,
							H,
							q,
							V,
							G,
							K,
							J,
							W,
						),
							(this.container = M),
							(this.vc = A);
					}
					get preventZoom() {
						return (
							(0, i.$Jfb)((0, w.getWindow)(this.element)) < 1 ||
							!this.vc.hasZoomableElements
						);
					}
				};
				(e.$wdd = k),
					(e.$wdd =
						k =
						I =
							Ne(
								[
									j(3, c.$Xxb),
									j(4, C.$gj),
									j(5, m.$ucd),
									j(6, f.$Li),
									j(7, n.$iP),
									j(8, d.$lq),
									j(9, g.$mEb),
									j(10, E.$6j),
									j(11, r.$asb),
									j(12, p.$y7c),
									j(13, y.$EY),
									j(14, $.$IY),
									j(15, a.$YX),
									j(16, v.$uZ),
								],
								k,
							));
				class L extends h.$ttc {
					b() {
						return this.a.createInstance(P);
					}
					r(M, N) {
						return this.a.createInstance(k, M, N, this.mainPart);
					}
				}
				e.$xdd = L;
			},
		),
		