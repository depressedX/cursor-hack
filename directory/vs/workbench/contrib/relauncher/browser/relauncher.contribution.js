import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../common/contributions.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/window/common/window.js';
import '../../../services/host/browser/host.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../nls.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../services/extensions/common/extensions.js';
import '../../../../base/common/async.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/platform.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../services/environment/common/environmentService.js';
import '../../../../platform/product/common/productService.js';
import '../../../../base/common/constants.js';
define(
			de[3434],
			he([
				1, 0, 3, 55, 30, 253, 87, 10, 4, 25, 53, 15, 19, 12, 52, 57, 78, 62, 58,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*contributions*/,
 w /*platform*/,
 E /*window*/,
 C /*host*/,
 d /*configuration*/,
 m /*nls*/,
 r /*workspace*/,
 u /*extensions*/,
 a /*async*/,
 h /*resources*/,
 c /*platform*/,
 n /*lifecycle*/,
 g /*dialogs*/,
 p /*environmentService*/,
 o /*productService*/,
 f /*constants*/) {
				"use strict";
				var b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$XWc = e.$WWc = void 0);
				let s = class extends t.$1c {
					static {
						b = this;
					}
					static {
						this.a = [
							E.TitleBarSetting.TITLE_BAR_STYLE,
							"window.nativeTabs",
							"window.nativeFullScreen",
							"window.clickThroughInactive",
							"window.experimentalControlOverlay",
							"update.mode",
							"editor.accessibilitySupport",
							"security.workspace.trust.enabled",
							f.$LW,
							"workbench.enableExperiments",
							"_extensionsGallery.enablePPE",
							"security.restrictUNCAccess",
							"accessibility.verbosity.debug",
						];
					}
					constructor(S, I, T, P) {
						super(),
							(this.w = S),
							(this.y = I),
							(this.z = T),
							(this.C = P),
							(this.b = new l("string")),
							(this.c = new l("boolean")),
							(this.f = new l("boolean")),
							(this.g = new l("boolean")),
							(this.h = new l("boolean")),
							(this.j = new l("string")),
							(this.n = new l("boolean")),
							(this.q = new l("string")),
							(this.r = new l("boolean")),
							(this.s = new l("boolean")),
							(this.t = new l("boolean")),
							(this.u = new l("boolean")),
							this.F(void 0),
							this.D(this.y.onDidChangeConfiguration((k) => this.F(k)));
					}
					F(S) {
						if (S && !b.a.some((k) => S.affectsConfiguration(k))) return;
						let I = !1;
						function T(k) {
							I = I || k;
						}
						const P = this.y.getValue();
						c.$p &&
							(T(
								(P.window.titleBarStyle === E.TitlebarStyle.NATIVE ||
									P.window.titleBarStyle === E.TitlebarStyle.CUSTOM) &&
									this.b.handleChange(P.window?.titleBarStyle),
							),
							T(c.$m && this.c.handleChange(P.window?.nativeTabs)),
							T(c.$m && this.f.handleChange(P.window?.nativeFullScreen)),
							T(c.$m && this.g.handleChange(P.window?.clickThroughInactive)),
							T(
								c.$n &&
									this.h.handleChange(P.window?.experimentalControlOverlay),
							),
							T(this.j.handleChange(P.update?.mode)),
							c.$n &&
								typeof P.editor?.accessibilitySupport == "string" &&
								P.editor.accessibilitySupport !== this.m &&
								((this.m = P.editor.accessibilitySupport),
								this.m === "on" && (I = !0)),
							T(this.n.handleChange(P?.security?.workspace?.trust?.enabled)),
							T(this.t.handleChange(P?.security?.restrictUNCAccess)),
							T(this.u.handleChange(P?.accessibility?.verbosity?.debug))),
							T(this.r.handleChange(P.workbench?.enableExperiments)),
							T(this.q.handleChange(P.workbench?.activityBar?.orientation)),
							T(
								this.z.quality !== "stable" &&
									this.s.handleChange(P._extensionsGallery?.enablePPE),
							),
							I &&
								S &&
								S.source !== d.ConfigurationTarget.DEFAULT &&
								this.G(
									c.$p
										? (0, m.localize)(8718, null)
										: (0, m.localize)(8719, null),
									c.$p
										? (0, m.localize)(8720, null, this.z.nameLong)
										: (0, m.localize)(8721, null, this.z.nameLong),
									c.$p
										? (0, m.localize)(8722, null)
										: (0, m.localize)(8723, null),
									() => this.w.restart(),
								);
					}
					async G(S, I, T, P) {
						if (this.w.hasFocus) {
							const { confirmed: k } = await this.C.confirm({
								message: S,
								detail: I,
								primaryButton: T,
							});
							k && P();
						}
					}
				};
				(e.$WWc = s),
					(e.$WWc =
						s =
						b =
							Ne([j(0, C.$asb), j(1, d.$gj), j(2, o.$Bk), j(3, g.$GO)], s));
				class l {
					static create(S) {
						return new l(S);
					}
					constructor(S) {
						(this.a = S), (this.b = void 0);
					}
					handleChange(S) {
						return typeof S === this.a && S !== this.b
							? ((this.b = S), !0)
							: !1;
					}
				}
				let y = class extends t.$1c {
					constructor(S, I, T, P) {
						super(),
							(this.f = S),
							(this.b = this.D(
								new a.$Yh(async () => {
									P.extensionTestsLocationURI ||
										(P.remoteAuthority
											? T.reload()
											: c.$p &&
												(await I.stopExtensionHosts(
													(0, m.localize)(8724, null),
												)) &&
												I.startExtensionHosts());
								}, 10),
							)),
							this.f.getCompleteWorkspace().then((k) => {
								(this.a = k.folders.length > 0 ? k.folders[0].uri : void 0),
									this.g(),
									this.D(
										this.f.onDidChangeWorkbenchState(() =>
											setTimeout(() => this.g()),
										),
									);
							}),
							this.D(
								(0, t.$Yc)(() => {
									this.c?.dispose();
								}),
							);
					}
					g() {
						if (this.f.getWorkbenchState() === r.WorkbenchState.WORKSPACE) {
							const S = this.f.getWorkspace();
							(this.a = S.folders.length > 0 ? S.folders[0].uri : void 0),
								this.c ||
									(this.c = this.f.onDidChangeWorkspaceFolders(() => this.h()));
						} else (0, t.$Vc)(this.c), (this.c = void 0);
					}
					h() {
						const S = this.f.getWorkspace(),
							I = S.folders.length > 0 ? S.folders[0].uri : void 0;
						(0, h.$gh)(this.a, I) || ((this.a = I), this.b.schedule());
					}
				};
				(e.$XWc = y),
					(e.$XWc = y =
						Ne([j(0, r.$Vi), j(1, u.$q2), j(2, C.$asb), j(3, p.$r8)], y));
				const $ = w.$Io.as(i.Extensions.Workbench);
				$.registerWorkbenchContribution(s, n.LifecyclePhase.Restored),
					$.registerWorkbenchContribution(y, n.LifecyclePhase.Restored);
			},
		),
		