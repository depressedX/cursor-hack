import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../core/index.js';
import '../../../utils/index.js';
import '../../common/scope.js';
import '../ipc.js';
define(
			de[1460],
			he([1, 0, 144, 80, 2147, 890]),
			function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*index*/,
 w /*scope*/,
 E /*ipc*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.scopeToMainIntegration = void 0),
					(e.scopeToMainIntegration = (0, t.defineIntegration)(() => ({
						name: "ScopeToMain",
						setup() {
							const C = (0, E.getIPC)();
							(0, w.addScopeListener)((d, m) => {
								C.sendScope(JSON.stringify((0, i.normalize)(d, 20, 2e3))),
									m.clearBreadcrumbs(),
									m.clearAttachments();
							});
						},
					})));
			},
		),
		