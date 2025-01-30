import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/browser.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/color.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../browser/parts/editor/editor.js';
import '../../../common/theme.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../services/environment/common/environmentService.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../base/common/performance.js';
import '../../../../base/common/types.js';
import './splash.js';
import '../../../../base/browser/window.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/window/common/window.js';
define(
			de[3435],
			he([
				1, 0, 139, 7, 97, 6, 3, 51, 35, 548, 123, 96, 78, 66, 10, 240, 28, 1756,
				75, 52, 253,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*browser*/,
				i /*dom*/,
				w /*color*/,
				E /*event*/,
				C /*lifecycle*/,
				d /*colorRegistry*/,
				m /*themeService*/,
				r /*editor*/,
				u /*theme*/,
				a /*layoutService*/,
				h /*environmentService*/,
				c /*editorGroupsService*/,
				n /*configuration*/,
				g /*performance*/,
				p /*types*/,
				o /*splash*/,
				f /*window*/,
				b /*lifecycle*/,
				s /*window*/,
) {
				"use strict";
				var l;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$A6c = void 0),
					(i = mt(i)),
					(u = mt(u)),
					(g = mt(g));
				let y = class {
					static {
						l = this;
					}
					static {
						this.ID = "workbench.contrib.partsSplash";
					}
					static {
						this.a = "monaco-parts-splash";
					}
					constructor(v, S, I, T, P, k, L) {
						(this.d = v),
							(this.f = S),
							(this.g = I),
							(this.h = T),
							(this.i = P),
							(this.b = new C.$Zc()),
							E.Event.once(S.onDidLayoutMainContainer)(
								() => {
									this.l(), g.mark("code/didRemovePartsSplash");
								},
								void 0,
								this.b,
							);
						const D = this.b.add(new C.$2c()),
							M = () => {
								D.value = i.$egb(f.$Bfb, () => this.j(), 2500);
							};
						L.when(b.LifecyclePhase.Restored).then(() => {
							E.Event.any(
								E.Event.filter(t.$Nfb, (N) => N === f.$Bfb.vscodeWindowId),
								k.mainPart.onDidLayout,
								v.onDidColorThemeChange,
							)(M, void 0, this.b),
								M();
						}),
							T.onDidChangeConfiguration(
								(N) => {
									N.affectsConfiguration(s.TitleBarSetting.TITLE_BAR_STYLE) &&
										((this.c = !0), this.j());
								},
								this,
								this.b,
							);
					}
					dispose() {
						this.b.dispose();
					}
					j() {
						const v = this.d.getColorTheme();
						this.i.saveWindowSplash({
							zoomLevel: this.h.getValue("window.zoomLevel"),
							baseTheme: (0, m.$mP)(v.type),
							colorInfo: {
								foreground: v.getColor(d.$IP)?.toString(),
								background: w.$UL.Format.CSS.formatHex(
									v.getColor(d.$8P) || u.$LEb(v),
								),
								editorBackground: v.getColor(d.$8P)?.toString(),
								titleBarBackground: v.getColor(u.$LGb)?.toString(),
								activityBarBackground: v.getColor(u.$7Fb)?.toString(),
								sideBarBackground: v.getColor(u.$wGb)?.toString(),
								statusBarBackground: v.getColor(u.$KFb)?.toString(),
								statusBarNoFolderBackground: v.getColor(u.$LFb)?.toString(),
								windowBorder:
									v.getColor(u.$$Gb)?.toString() ??
									v.getColor(u.$_Gb)?.toString(),
							},
							layoutInfo: this.k()
								? {
										sideBarSide:
											this.f.getSideBarPosition() === a.Position.RIGHT
												? "right"
												: "left",
										editorPartMinWidth: r.$DEb.width,
										titleBarHeight: this.f.isVisible(
											a.Parts.TITLEBAR_PART,
											f.$Bfb,
										)
											? i.$zgb(
													(0, p.$wg)(
														this.f.getContainer(f.$Bfb, a.Parts.TITLEBAR_PART),
													),
												)
											: 0,
										activityBarWidth:
											this.f.activityBarDirection === "vertical" &&
											this.f.isVisible(a.Parts.ACTIVITYBAR_PART)
												? i.$vgb(
														(0, p.$wg)(
															this.f.getContainer(
																f.$Bfb,
																a.Parts.ACTIVITYBAR_PART,
															),
														),
													)
												: 0,
										sideBarWidth: this.f.isVisible(a.Parts.SIDEBAR_PART)
											? i.$vgb(
													(0, p.$wg)(
														this.f.getContainer(f.$Bfb, a.Parts.SIDEBAR_PART),
													),
												)
											: 0,
										statusBarHeight: this.f.isVisible(
											a.Parts.STATUSBAR_PART,
											f.$Bfb,
										)
											? i.$zgb(
													(0, p.$wg)(
														this.f.getContainer(f.$Bfb, a.Parts.STATUSBAR_PART),
													),
												)
											: 0,
										windowBorder: this.f.hasMainWindowBorder(),
										windowBorderRadius: this.f.getMainWindowBorderRadius(),
									}
								: void 0,
						});
					}
					k() {
						return (
							!(0, t.$Mfb)(f.$Bfb) && !this.g.isExtensionDevelopment && !this.c
						);
					}
					l() {
						const v = f.$Bfb.document.getElementById(l.a);
						v && (v.style.display = "none"),
							f.$Bfb.document.head
								.getElementsByClassName("initialShellColors")[0]
								?.remove();
					}
				};
				(e.$A6c = y),
					(e.$A6c =
						y =
						l =
							Ne(
								[
									j(0, m.$iP),
									j(1, a.$mEb),
									j(2, h.$r8),
									j(3, n.$gj),
									j(4, o.$z6c),
									j(5, c.$EY),
									j(6, b.$n6),
								],
								y,
							));
			},
		),
		