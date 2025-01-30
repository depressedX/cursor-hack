import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/userDataSync/common/userDataSync.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../nls.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../platform/action/common/actionCommonCategories.js';
define(
			de[522],
			he([1, 0, 5, 150, 8, 4, 14, 79, 99]),
			function (ce /*require*/,
 e /*exports*/,
 t /*instantiation*/,
 i /*userDataSync*/,
 w /*contextkey*/,
 E /*nls*/,
 C /*codicons*/,
 d /*iconRegistry*/,
 m /*actionCommonCategories*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2xc =
						e.$1xc =
						e.$Zxc =
						e.$Yxc =
						e.$Xxc =
						e.$Wxc =
						e.$Vxc =
						e.$Uxc =
						e.$Txc =
						e.$Sxc =
						e.$Rxc =
						e.$Qxc =
						e.$Pxc =
						e.AccountStatus =
						e.$Nxc =
							void 0),
					(e.$Oxc = r),
					(e.$Nxc = (0, t.$Mi)("IUserDataSyncWorkbenchService"));
				function r(a) {
					switch (a) {
						case i.SyncResource.Settings:
							return (0, E.localize)(12990, null);
						case i.SyncResource.Keybindings:
							return (0, E.localize)(12991, null);
						case i.SyncResource.Snippets:
							return (0, E.localize)(12992, null);
						case i.SyncResource.Tasks:
							return (0, E.localize)(12993, null);
						case i.SyncResource.Extensions:
							return (0, E.localize)(12994, null);
						case i.SyncResource.GlobalState:
							return (0, E.localize)(12995, null);
						case i.SyncResource.Profiles:
							return (0, E.localize)(12996, null);
						case i.SyncResource.WorkspaceState:
							return (0, E.localize)(12997, null);
					}
				}
				var u;
				(function (a) {
					(a.Unavailable = "unavailable"), (a.Available = "available");
				})(u || (e.AccountStatus = u = {})),
					(e.$Pxc = (0, E.localize2)(12999, "Settings Sync")),
					(e.$Qxc = (0, d.$$O)(
						"settings-sync-view-icon",
						C.$ak.sync,
						(0, E.localize)(12998, null),
					)),
					(e.$Rxc = new w.$5j("syncStatus", i.SyncStatus.Uninitialized)),
					(e.$Sxc = new w.$5j("syncEnabled", !1)),
					(e.$Txc = new w.$5j("userDataSyncAccountStatus", u.Unavailable)),
					(e.$Uxc = new w.$5j("enableSyncActivityViews", !1)),
					(e.$Vxc = new w.$5j("enableSyncConflictsView", !1)),
					(e.$Wxc = new w.$5j("hasConflicts", !1)),
					(e.$Xxc = "workbench.userDataSync.actions.configure"),
					(e.$Yxc = "workbench.userDataSync.actions.showLog"),
					(e.$Zxc = "workbench.view.sync"),
					(e.$1xc = "workbench.views.sync.conflicts"),
					(e.$2xc = {
						id: "workbench.userDataSync.actions.downloadSyncActivity",
						title: (0, E.localize2)(13e3, "Download Settings Sync Activity"),
						category: m.$ck.Developer,
						f1: !0,
						precondition: w.$Kj.and(
							e.$Txc.isEqualTo(u.Available),
							e.$Rxc.notEqualsTo(i.SyncStatus.Uninitialized),
						),
					});
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	