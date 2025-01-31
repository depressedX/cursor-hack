import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/buffer.js';
import '../../../../base/common/codicons.js';
import '../../../../nls.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../base/common/hash.js';
define(
			de[685],
			he([1, 0, 76, 14, 4, 8, 5, 79, 136]),
			function (ce /*require*/,
 e /*exports*/,
 t /*buffer*/,
 i /*codicons*/,
 w /*nls*/,
 E /*contextkey*/,
 C /*instantiation*/,
 d /*iconRegistry*/,
 m /*hash*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$O1c =
						e.$L1c =
						e.$K1c =
						e.$J1c =
						e.$I1c =
						e.$H1c =
						e.$G1c =
						e.$F1c =
						e.$E1c =
						e.$D1c =
						e.$C1c =
						e.$B1c =
						e.FileType =
						e.ChangeType =
						e.$A1c =
						e.$z1c =
						e.$y1c =
							void 0),
					(e.$M1c = a),
					(e.$N1c = h),
					(e.$y1c = (0, w.localize2)(5992, "Cloud Changes")),
					(e.$z1c = (0, C.$Mi)("IEditSessionsStorageService")),
					(e.$A1c = (0, C.$Mi)("IEditSessionsLogService"));
				var r;
				(function (c) {
					(c[(c.Addition = 1)] = "Addition"),
						(c[(c.Deletion = 2)] = "Deletion");
				})(r || (e.ChangeType = r = {}));
				var u;
				(function (c) {
					c[(c.File = 1)] = "File";
				})(u || (e.FileType = u = {})),
					(e.$B1c = 3),
					(e.$C1c = "editSessionsSignedIn"),
					(e.$D1c = new E.$5j(e.$C1c, !1)),
					(e.$E1c = "editSessionsPending"),
					(e.$F1c = new E.$5j(e.$E1c, !1)),
					(e.$G1c = "workbench.view.editSessions"),
					(e.$H1c = "workbench.views.editSessions.data"),
					(e.$I1c = (0, w.localize2)(5993, "Cloud Changes")),
					(e.$J1c = (0, d.$$O)(
						"edit-sessions-view-icon",
						i.$ak.cloudDownload,
						(0, w.localize)(5991, null),
					)),
					(e.$K1c = new E.$5j("editSessionsShowView", !1)),
					(e.$L1c = "vscode-edit-sessions");
				function a(c, n) {
					switch (c) {
						case 1:
							return t.$Te.fromString(n);
						case 2:
							return (0, t.$af)(n);
						default:
							throw new Error(
								"Upgrade to a newer version to decode this content.",
							);
					}
				}
				function h(c) {
					const n = new m.$Gj();
					return n.update(c), n.digest();
				}
				e.$O1c = "editSessions";
			},
		)
