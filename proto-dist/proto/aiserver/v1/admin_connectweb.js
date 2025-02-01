/* import '../../../require.js'; */
/* import '../../../exports.js'; */
/* import './admin_pb.js'; */
/* import '../../../external/bufbuild/protobuf.js'; */
define(
	de[2166],
	he([1, 0, 2165, 86]),
	function (ce /*require*/, e /*exports*/, t /*admin_pb*/, i /*protobuf*/) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.$gab = void 0),
			(e.$gab = {
				typeName: "aiserver.v1.AdminService",
				methods: {
					deleteUser: {
						name: "DeleteUser",
						I: t.$aab,
						O: t.$bab,
						kind: i.MethodKind.Unary,
					},
					runTailscaleSSH: {
						name: "RunTailscaleSSH",
						I: t.$cab,
						O: t.$dab,
						kind: i.MethodKind.Unary,
					},
					addAuthIdsToTeam: {
						name: "AddAuthIdsToTeam",
						I: t.$eab,
						O: t.$fab,
						kind: i.MethodKind.Unary,
					},
				},
			});
	},
);
