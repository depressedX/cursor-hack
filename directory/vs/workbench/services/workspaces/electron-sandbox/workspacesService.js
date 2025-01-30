import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/workspaces/common/workspaces.js';
import '../../../../platform/ipc/common/mainProcessService.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../base/parts/ipc/common/ipc.js';
import '../../../../platform/native/common/native.js';
define(
			de[4419],
			he([1, 0, 256, 371, 20, 305, 110]),
			function (ce /*require*/,
 e /*exports*/,
 t /*workspaces*/,
 i /*mainProcessService*/,
 w /*extensions*/,
 E /*ipc*/,
 C /*native*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qdd = void 0);
				let d = class {
					constructor(r, u) {
						return E.ProxyChannel.toService(r.getChannel("workspaces"), {
							context: u.windowId,
						});
					}
				};
				(e.$qdd = d),
					(e.$qdd = d = Ne([j(0, i.$V8c), j(1, C.$y7c)], d)),
					(0, w.$lK)(t.$cRb, d, w.InstantiationType.Delayed);
			},
		),
		