/* import '../../../require.js'; */
/* import '../../../exports.js'; */
/* import './shadow_workspace_pb.js'; */
/* import '../../../external/bufbuild/protobuf.js'; */
define(
	de[1478],
	he([1, 0, 454, 86]),
	function (
		ce /*require*/,
		e /*exports*/,
		t /*shadow_workspace_pb*/,
		i /*protobuf*/,
	) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.$Bx = void 0),
			(e.$Bx = {
				typeName: "aiserver.v1.ShadowWorkspaceService",
				methods: {
					getLintsForChange: {
						name: "GetLintsForChange",
						I: t.$tx,
						O: t.$xx,
						kind: i.MethodKind.Unary,
					},
					shadowHealthCheck: {
						name: "ShadowHealthCheck",
						I: t.$rx,
						O: t.$sx,
						kind: i.MethodKind.Unary,
					},
				},
			});
	},
);
