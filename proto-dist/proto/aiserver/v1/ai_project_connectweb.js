/* import '../../../require.js'; */
/* import '../../../exports.js'; */
/* import './ai_project_pb.js'; */
/* import '../../../external/bufbuild/protobuf.js'; */
define(
	de[2173],
	he([1, 0, 1111, 86]),
	function (
		ce /*require*/,
		e /*exports*/,
		t /*ai_project_pb*/,
		i /*protobuf*/,
	) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.$P9 = void 0),
			(e.$P9 = {
				typeName: "aiserver.v1.AiProjectService",
				methods: {
					aiProjectAgentInit: {
						name: "AiProjectAgentInit",
						I: t.$n9,
						O: t.$r9,
						kind: i.MethodKind.ServerStreaming,
					},
					aiProjectClarification: {
						name: "AiProjectClarification",
						I: t.$q9,
						O: t.$r9,
						kind: i.MethodKind.ServerStreaming,
					},
					aiProjectPlan: {
						name: "AiProjectPlan",
						I: t.$s9,
						O: t.$t9,
						kind: i.MethodKind.ServerStreaming,
					},
					aiProjectPlanFeedback: {
						name: "AiProjectPlanFeedback",
						I: t.$u9,
						O: t.$v9,
						kind: i.MethodKind.ServerStreaming,
					},
					aiProjectBreakdown: {
						name: "AiProjectBreakdown",
						I: t.$w9,
						O: t.$x9,
						kind: i.MethodKind.ServerStreaming,
					},
					aiProjectBreakdownFeedback: {
						name: "AiProjectBreakdownFeedback",
						I: t.$z9,
						O: t.$A9,
						kind: i.MethodKind.ServerStreaming,
					},
					aiProjectStep: {
						name: "AiProjectStep",
						I: t.$B9,
						O: t.$J9,
						kind: i.MethodKind.ServerStreaming,
					},
					aiProjectStepFeedback: {
						name: "AiProjectStepFeedback",
						I: t.$K9,
						O: t.$N9,
						kind: i.MethodKind.ServerStreaming,
					},
				},
			});
	},
);
