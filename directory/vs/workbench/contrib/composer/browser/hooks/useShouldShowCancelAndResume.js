import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../../proto/aiserver/v1/composer_pb.js';
import './useComposerDataHandle.js';
import '../../../controlCommon/browser/solid.js';
define(
			de[4157],
			he([1, 0, 13, 167, 177, 36]),
			function (ce /*require*/,
 e /*exports*/,
 t /*solid*/,
 i /*composer_pb*/,
 w /*useComposerDataHandle*/,
 E /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.useShouldShowCancelAndResume = C);
				function C(d) {
					const m = (0, E.$odc)(),
						{ composerDataService: r } = m,
						{ currentComposer: u } = (0, w.useComposerDataHandle)(d);
					return (0, t.createMemo)(() => {
						const a = u();
						if (!a || a.status !== "generating") return !1;
						const h = r.getComposerCapability(
							a.composerId,
							i.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_FORMER,
						);
						return h ? h.shouldShowCancelAndResume() : !1;
					});
				}
			},
		)
