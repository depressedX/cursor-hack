import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/network.js';
define(de[3063], he([1, 0, 15, 23]), function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*network*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Ufd = w);
			function w(E, C, d) {
				if (E.length)
					(0, t.$Ph)(
						E.map((m) => async () => {
							(m.scheme === i.Schemas.file ||
								m.scheme === i.Schemas.vscodeUserData) &&
								C.showItemInFolder(m.with({ scheme: i.Schemas.file }).fsPath);
						}),
					);
				else if (d.getWorkspace().folders.length) {
					const m = d.getWorkspace().folders[0].uri;
					m.scheme === i.Schemas.file && C.showItemInFolder(m.fsPath);
				}
			}
		}),
		