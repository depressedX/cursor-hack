import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/contributions.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../services/editor/common/editorService.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../services/themes/common/workbenchThemeService.js';
import '../../../services/environment/common/environmentService.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/telemetry/browser/errorTelemetry.js';
import '../../../../platform/telemetry/common/telemetryUtils.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../services/textfile/common/textfiles.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/event.js';
import '../../../../base/common/network.js';
import '../../../../editor/common/services/languagesAssociations.js';
import '../../../../base/common/hash.js';
import '../../../services/panecomposite/browser/panecomposite.js';
import '../../../common/views.js';
import '../../../services/userDataProfile/common/userDataProfile.js';
import '../../../../base/browser/window.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../base/common/types.js';
import '../../../services/layout/browser/layoutService.js';
import '../../extensions/common/extensions.js';
import '../../chat/common/chatService.js';
import '../../../../platform/userDataProfile/common/userDataProfile.js';
define(
		de[3775],
		he([
			1, 0, 30, 55, 52, 32, 25, 18, 39, 333, 78, 12, 3, 2795, 269, 10, 85, 19,
			6, 23, 671, 136, 142, 60, 133, 75, 81, 28, 96, 141, 218, 129,
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
			l,
			y,
			$,
			v,
			S,
			I,
			T,
			P,
			k,
			L,
			D,
		) {
			"use strict";
			var M;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$YAc = void 0),
				(c = xi(c));
			let N = class extends h.$1c {
				static {
					M = this;
				}
				static {
					this.a = [
						"package.json",
						"package-lock.json",
						"tsconfig.json",
						"jsconfig.json",
						"bower.json",
						".eslintrc.json",
						"tslint.json",
						"composer.json",
					];
				}
				static {
					this.b = [
						"settings.json",
						"extensions.json",
						"tasks.json",
						"launch.json",
					];
				}
				constructor(B, U, z, F, x, H, q, V, G, K) {
					super(), (this.c = B), (this.f = U), (this.g = V);
					const { filesToOpenOrCreate: J, filesToDiff: W, filesToMerge: X } = q,
						Y = G.getActivePaneComposite($.ViewContainerLocation.Sidebar);
					B.publicLog2("workspaceLoad", {
						windowSize: {
							innerHeight: S.$Bfb.innerHeight,
							innerWidth: S.$Bfb.innerWidth,
							outerHeight: S.$Bfb.outerHeight,
							outerWidth: S.$Bfb.outerWidth,
						},
						emptyWorkbench: U.getWorkbenchState() === C.WorkbenchState.EMPTY,
						"workbench.filesToOpenOrCreate": (J && J.length) || 0,
						"workbench.filesToDiff": (W && W.length) || 0,
						"workbench.filesToMerge": (X && X.length) || 0,
						customKeybindingsCount: x.customKeybindingsCount(),
						theme: H.getColorTheme().id,
						language: a.$z,
						pinnedViewlets: G.getPinnedPaneCompositeIds(
							$.ViewContainerLocation.Sidebar,
						),
						restoredViewlet: Y ? Y.getId() : void 0,
						restoredEditors: F.visibleEditors.length,
						startupKind: z.startupKind,
					}),
						this.D(new c.default(B)),
						this.D(K.files.onDidResolve((ie) => this.h(ie))),
						this.D(K.files.onDidSave((ie) => this.j(ie))),
						this.D(z.onDidShutdown(() => this.dispose()));
				}
				h(B) {
					const U = this.m(B.model.resource);
					U
						? this.c.publicLog2("settingsRead", { settingsType: U })
						: this.c.publicLog2("fileGet", this.n(B.model.resource, B.reason));
				}
				j(B) {
					const U = this.m(B.model.resource);
					U
						? this.c.publicLog2("settingsWritten", { settingsType: U })
						: this.c.publicLog2("filePUT", this.n(B.model.resource, B.reason));
				}
				m(B) {
					if ((0, o.$lh)(B) !== ".json") return "";
					if ((0, o.$gh)(B, this.g.currentProfile.settingsResource))
						return "global-settings";
					if ((0, o.$gh)(B, this.g.currentProfile.keybindingsResource))
						return "keybindings";
					if ((0, o.$hh)(B, this.g.currentProfile.snippetsHome))
						return "snippets";
					const U = this.f.getWorkspace().folders;
					for (const z of U)
						if ((0, o.$hh)(B, z.toResource(".vscode"))) {
							const F = (0, o.$kh)(B);
							if (M.b.indexOf(F) > -1) return `.vscode/${F}`;
						}
					return "";
				}
				n(B, U) {
					let z = (0, o.$lh)(B);
					const F = z.indexOf("?");
					z = F !== -1 ? z.substr(0, F) : z;
					const x = (0, o.$kh)(B),
						H = B.scheme === b.Schemas.file ? B.fsPath : B.path,
						q = {
							mimeType: new n.$Qp((0, s.$lYb)(B).join(", ")),
							ext: z,
							path: (0, l.$Aj)(H),
							reason: U,
							allowlistedjson: void 0,
						};
					return (
						z === ".json" && M.a.indexOf(x) > -1 && (q.allowlistedjson = x), q
					);
				}
			};
			(e.$YAc = N),
				(e.$YAc =
					N =
					M =
						Ne(
							[
								j(0, E.$km),
								j(1, C.$Vi),
								j(2, w.$n6),
								j(3, d.$IY),
								j(4, m.$uZ),
								j(5, r.$rRb),
								j(6, u.$r8),
								j(7, v.$P8),
								j(8, y.$6Sb),
								j(9, p.$kZ),
							],
							N,
						));
			let A = class extends h.$1c {
				constructor(B, U, z) {
					super(),
						(this.b = B),
						(this.c = U),
						(this.f = z),
						(this.a = t.$Io.as(I.$No.Configuration));
					const F = f.Event.debounce(
						B.onDidChangeConfiguration,
						(q, V) => {
							const G = q
								? new Set([...q.affectedKeys, ...V.affectedKeys])
								: V.affectedKeys;
							return { ...V, affectedKeys: G };
						},
						1e3,
						!0,
					);
					this.D(
						F((q) => {
							q.source !== g.ConfigurationTarget.DEFAULT &&
								z.publicLog2("updateConfiguration", {
									configurationSource: (0, g.$jj)(q.source),
									configurationKeys: Array.from(q.affectedKeys),
								});
						}),
					);
					const { user: x, workspace: H } = B.keys();
					for (const q of x) this.h(q, g.ConfigurationTarget.USER_LOCAL);
					for (const q of H) this.h(q, g.ConfigurationTarget.WORKSPACE);
				}
				g(B, U) {
					const z = this.b.inspect(B),
						F =
							U === g.ConfigurationTarget.USER_LOCAL
								? z.user?.value
								: z.workspace?.value;
					if ((0, T.$pg)(F) || (0, T.$rg)(F)) return F.toString();
					const x = this.a.getConfigurationProperties()[B];
					if ((0, T.$lg)(F)) return x?.enum?.includes(F) ? F : void 0;
					if (
						Array.isArray(F) &&
						F.every(
							(H) =>
								(0, T.$pg)(H) ||
								(0, T.$rg)(H) ||
								((0, T.$lg)(H) && x?.enum?.includes(H)),
						)
					)
						return JSON.stringify(F);
				}
				h(B, U) {
					const z = (0, g.$jj)(U);
					switch (B) {
						case P.LayoutSettings.ACTIVITY_BAR_LOCATION:
							this.f.publicLog2("workbench.activityBar.location", {
								settingValue: this.g(B, U),
								source: z,
							});
							return;
						case k.$OQb:
							this.f.publicLog2("extensions.autoUpdate", {
								settingValue: this.g(B, U),
								source: z,
							});
							return;
						case "files.autoSave":
							this.f.publicLog2("files.autoSave", {
								settingValue: this.g(B, U),
								source: z,
							});
							return;
						case "editor.stickyScroll.enabled":
							this.f.publicLog2("editor.stickyScroll.enabled", {
								settingValue: this.g(B, U),
								source: z,
							});
							return;
						case L.$K2:
							this.f.publicLog2("accessibility.voice.keywordActivation", {
								settingValue: this.g(B, U),
								source: z,
							});
							return;
						case "window.zoomLevel":
							this.f.publicLog2("window.zoomLevel", {
								settingValue: this.g(B, U),
								source: z,
							});
							return;
						case "window.zoomPerWindow":
							this.f.publicLog2("window.zoomPerWindow", {
								settingValue: this.g(B, U),
								source: z,
							});
							return;
						case "window.titleBarStyle":
							this.f.publicLog2("window.titleBarStyle", {
								settingValue: this.g(B, U),
								source: z,
							});
							return;
						case "window.customTitleBarVisibility":
							this.f.publicLog2("window.customTitleBarVisibility", {
								settingValue: this.g(B, U),
								source: z,
							});
							return;
						case "window.nativeTabs":
							this.f.publicLog2("window.nativeTabs", {
								settingValue: this.g(B, U),
								source: z,
							});
							return;
						case "extensions.verifySignature":
							this.f.publicLog2("extensions.verifySignature", {
								settingValue: this.g(B, U),
								source: z,
							});
							return;
						case "window.systemColorTheme":
							this.f.publicLog2("window.systemColorTheme", {
								settingValue: this.g(B, U),
								source: z,
							});
							return;
						case "window.newWindowProfile": {
							const F = this.g(B, U),
								x =
									F === null
										? "null"
										: F === this.c.defaultProfile.name
											? "default"
											: "custom";
							this.f.publicLog2("window.newWindowProfile", {
								settingValue: x,
								source: z,
							});
							return;
						}
						case k.$RQb:
							this.f.publicLog2("extensions.autoRestart", {
								settingValue: this.g(B, U),
								source: z,
							});
							return;
					}
				}
			};
			A = Ne([j(0, g.$gj), j(1, D.$Xl), j(2, E.$km)], A);
			const R = t.$Io.as(i.Extensions.Workbench);
			R.registerWorkbenchContribution(N, w.LifecyclePhase.Restored),
				R.registerWorkbenchContribution(A, w.LifecyclePhase.Eventually);
		},
	),
		