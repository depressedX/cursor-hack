import '../../../require.js';
import '../../../exports.js';
import './auth_pb.js';
import '../../../external/bufbuild/protobuf.js';
define(de[1469], he([1, 0, 1468, 86]), function (ce /*require*/,
 e /*exports*/,
 t /*auth_pb*/,
 i /*protobuf*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$I0 = void 0),
				(e.$I0 = {
					typeName: "aiserver.v1.AuthService",
					methods: {
						getEmail: {
							name: "GetEmail",
							I: t.$A0,
							O: t.$B0,
							kind: i.MethodKind.Unary,
						},
						emailValid: {
							name: "EmailValid",
							I: t.$C0,
							O: t.$D0,
							kind: i.MethodKind.Unary,
						},
						downloadUpdate: {
							name: "DownloadUpdate",
							I: t.$E0,
							O: t.$F0,
							kind: i.MethodKind.Unary,
						},
						markPrivacy: {
							name: "MarkPrivacy",
							I: t.$y0,
							O: t.$z0,
							kind: i.MethodKind.Unary,
						},
						switchCmdKFraction: {
							name: "SwitchCmdKFraction",
							I: t.$G0,
							O: t.$H0,
							kind: i.MethodKind.Unary,
						},
						getCustomerId: {
							name: "GetCustomerId",
							I: t.$w0,
							O: t.$x0,
							kind: i.MethodKind.Unary,
						},
						getSessionToken: {
							name: "GetSessionToken",
							I: t.$s0,
							O: t.$t0,
							kind: i.MethodKind.Unary,
						},
						checkSessionToken: {
							name: "CheckSessionToken",
							I: t.$u0,
							O: t.$v0,
							kind: i.MethodKind.Unary,
						},
					},
				});
		})
