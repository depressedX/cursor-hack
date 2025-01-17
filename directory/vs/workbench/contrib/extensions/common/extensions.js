import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/extensionManagement/common/extensionManagementUtil.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/actions/common/actions.js';
define(
			de[141],
			he([1, 0, 5, 3, 154, 8, 11]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5Qb =
						e.$4Qb =
						e.$3Qb =
						e.$2Qb =
						e.$1Qb =
						e.$ZQb =
						e.$YQb =
						e.$XQb =
						e.$WQb =
						e.$VQb =
						e.$UQb =
						e.$TQb =
						e.$SQb =
						e.$RQb =
						e.$QQb =
						e.$PQb =
						e.$OQb =
						e.$NQb =
						e.ExtensionEditorTab =
						e.$MQb =
						e.ExtensionRuntimeActionType =
						e.ExtensionState =
						e.$LQb =
							void 0),
					(e.$LQb = "workbench.view.extensions");
				var d;
				(function (a) {
					(a[(a.Installing = 0)] = "Installing"),
						(a[(a.Installed = 1)] = "Installed"),
						(a[(a.Uninstalling = 2)] = "Uninstalling"),
						(a[(a.Uninstalled = 3)] = "Uninstalled");
				})(d || (e.ExtensionState = d = {}));
				var m;
				(function (a) {
					(a.ReloadWindow = "reloadWindow"),
						(a.RestartExtensions = "restartExtensions"),
						(a.DownloadUpdate = "downloadUpdate"),
						(a.ApplyUpdate = "applyUpdate"),
						(a.QuitAndInstall = "quitAndInstall");
				})(m || (e.ExtensionRuntimeActionType = m = {})),
					(e.$MQb = (0, t.$Mi)("extensionsWorkbenchService"));
				var r;
				(function (a) {
					(a.Readme = "readme"),
						(a.Features = "features"),
						(a.Changelog = "changelog"),
						(a.Dependencies = "dependencies"),
						(a.ExtensionPack = "extensionPack");
				})(r || (e.ExtensionEditorTab = r = {})),
					(e.$NQb = "extensions"),
					(e.$OQb = "extensions.autoUpdate"),
					(e.$PQb = "extensions.autoCheckUpdates"),
					(e.$QQb = "extensions.closeExtensionDetailsOnViewChange"),
					(e.$RQb = "extensions.autoRestart");
				let u = class extends i.$1c {
					constructor(h, c) {
						super(), (this.a = h), this.D(c.onChange(this.b, this));
					}
					set extension(h) {
						this.a.forEach((c) => (c.extension = h));
					}
					b(h) {
						for (const c of this.a)
							h && c.extension
								? (0, w.$7p)(c.extension.identifier, h.identifier) &&
									(c.extension.server &&
									h.server &&
									c.extension.server !== h.server
										? c.updateWhenCounterExtensionChanges && c.update()
										: (c.extension = h))
								: c.update();
					}
				};
				(e.$SQb = u),
					(e.$SQb = u = Ne([j(1, e.$MQb)], u)),
					(e.$TQb = "workbench.views.extensions.workspaceRecommendations"),
					(e.$UQb = "workbench.views.extensions.searchOutdated"),
					(e.$VQb = "workbench.extensions.action.toggleIgnoreExtension"),
					(e.$WQb = "workbench.extensions.action.installVSIX"),
					(e.$XQb = "workbench.extensions.command.installFromVSIX"),
					(e.$YQb =
						"workbench.extensions.action.listWorkspaceUnsupportedExtensions"),
					(e.$ZQb = new E.$5j("hasOutdatedExtensions", !1)),
					(e.$1Qb = new E.$5j("hasGallery", !1)),
					(e.$2Qb = "_theme_"),
					(e.$3Qb = "0_install"),
					(e.$4Qb = "0_update"),
					(e.$5Qb = new C.$XX("extensionsSearchActionsMenu"));
			},
		),
		