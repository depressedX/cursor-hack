import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../../proto/aiserver/v1/context_pb.js';
import '../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../base/common/uuid.js';
define(de[471], he([1, 0, 5, 228, 83, 47]), function (ce /*require*/,
 e /*exports*/,
 t /*instantiation*/,
 i /*context_pb*/,
 w /*utils_pb*/,
 E /*uuid*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$D7b = e.$C7b = e.$B7b = void 0),
				(e.$B7b = (0, t.$Mi)("aiContextSessionService"));
			const C = () => ({
				case: "terminal-cmd-k",
				defaultIntents: [
					{
						uuid: (0, E.$9g)(),
						type: i.ContextIntent_Type.AUTOMATIC,
						intent: { case: "terminalCmdKDefaults", value: {} },
					},
					{
						uuid: (0, E.$9g)(),
						type: i.ContextIntent_Type.AUTOMATIC,
						intent: { case: "recentLocations", value: {} },
					},
				],
			});
			e.$C7b = C;
			const d = () => ({
				case: "cmd-k",
				defaultIntents: [
					{
						uuid: (0, E.$9g)(),
						type: i.ContextIntent_Type.AUTOMATIC,
						intent: { case: "cmdKCurrentFile", value: {} },
					},
					{
						uuid: (0, E.$9g)(),
						type: i.ContextIntent_Type.AUTOMATIC,
						intent: { case: "cmdKQueryEtc", value: {} },
					},
					{
						uuid: (0, E.$9g)(),
						type: i.ContextIntent_Type.AUTOMATIC,
						intent: {
							case: "lints",
							value: {
								scope: { case: "cmdkScope", value: {} },
								filterToSeverities: [w.LintSeverity.ERROR],
							},
						},
					},
					{
						uuid: (0, E.$9g)(),
						type: i.ContextIntent_Type.AUTOMATIC,
						intent: { case: "recentLocations", value: {} },
					},
					{
						uuid: (0, E.$9g)(),
						type: i.ContextIntent_Type.AUTOMATIC,
						intent: { case: "visibleTabs", value: {} },
					},
					{
						uuid: (0, E.$9g)(),
						type: i.ContextIntent_Type.AUTOMATIC,
						intent: { case: "diffHistory", value: {} },
					},
					{
						uuid: (0, E.$9g)(),
						type: i.ContextIntent_Type.AUTOMATIC,
						intent: { case: "pastCmdkMessagesInDiffSessions", value: {} },
					},
					{
						uuid: (0, E.$9g)(),
						type: i.ContextIntent_Type.AUTOMATIC,
						intent: { case: "chatHistory", value: {} },
					},
					{
						uuid: (0, E.$9g)(),
						type: i.ContextIntent_Type.AUTOMATIC,
						intent: {
							case: "terminalHistory",
							value: { useActiveInstanceAsFallback: !0 },
						},
					},
				],
			});
			e.$D7b = d;
		}),
		