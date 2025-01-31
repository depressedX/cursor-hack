import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/contributions.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/layout/browser/layoutService.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './globalElementsComponent.js';
import '../../../../platform/ipc/common/mainProcessService.js';
import './globalElementsActions.js';
define(
			de[4333],
			he([1, 0, 30, 55, 52, 25, 96, 21, 31, 45, 180, 5, 4332, 371, 3940]),
			function (ce /*require*/,
 e /*exports*/,
 t /*platform*/,
 i /*contributions*/,
 w /*lifecycle*/,
 E /*workspace*/,
 C /*layoutService*/,
 d /*storage*/,
 m /*commands*/,
 r /*reactiveStorageService*/,
 u /*layoutService*/,
 a /*instantiation*/,
 h /*globalElementsComponent*/,
 c /*mainProcessService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Nfd = void 0);
				let n = class {
					constructor(p, o, f, b, s, l, y, $) {
						(this.a = p),
							(this.b = o),
							(this.c = f),
							(this.d = b),
							(this.e = s),
							(this.f = l),
							(this.g = y),
							(this.h = $);
						let v = this.f.mainContainer;
						v &&
							(0, h.$Mfd)({
								container: v,
								instantiationService: this.g,
								mainProcessService: this.h,
							});
					}
				};
				(e.$Nfd = n),
					(e.$Nfd = n =
						Ne(
							[
								j(0, E.$Vi),
								j(1, C.$mEb),
								j(2, d.$lq),
								j(3, m.$ek),
								j(4, r.$0zb),
								j(5, u.$jEb),
								j(6, a.$Li),
								j(7, c.$V8c),
							],
							n,
						)),
					t.$Io
						.as(i.Extensions.Workbench)
						.registerWorkbenchContribution(n, w.LifecyclePhase.Restored);
			},
		)
