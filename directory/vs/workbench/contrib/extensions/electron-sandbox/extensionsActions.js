import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/files/common/files.js';
import '../../../../base/common/uri.js';
import '../../../services/environment/electron-sandbox/environmentService.js';
import '../../../../platform/native/common/native.js';
import '../../../../base/common/network.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
import '../../../../platform/action/common/actionCommonCategories.js';
define(
			de[3285],
			he([1, 0, 4, 22, 9, 151, 110, 23, 11, 119, 99]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*files*/,
 w /*uri*/,
 E /*environmentService*/,
 C /*native*/,
 d /*network*/,
 m /*actions*/,
 r /*extensionManagement*/,
 u /*actionCommonCategories*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9fd = e.$8fd = void 0);
				class a extends m.$3X {
					constructor() {
						super({
							id: "workbench.extensions.action.openExtensionsFolder",
							title: (0, t.localize2)(6615, "Open Extensions Folder"),
							category: r.$Mp,
							f1: !0,
						});
					}
					async run(n) {
						const g = n.get(C.$y7c),
							p = n.get(i.$ll),
							o = n.get(E.$ucd),
							f = w.URI.file(o.extensionsPath),
							b = await p.resolve(f);
						let s;
						if (
							(b.children && b.children.length > 0
								? (s = b.children[0].resource)
								: (s = f),
							s.scheme === d.Schemas.file)
						)
							return g.showItemInFolder(s.fsPath);
					}
				}
				e.$8fd = a;
				class h extends m.$3X {
					constructor() {
						super({
							id: "_workbench.extensions.action.cleanUpExtensionsFolder",
							title: (0, t.localize2)(6616, "Cleanup Extensions Folder"),
							category: u.$ck.Developer,
							f1: !0,
						});
					}
					async run(n) {
						return n.get(r.$Hp).cleanUp();
					}
				}
				e.$9fd = h;
			},
		),
		