import '../../../require.js';
import '../../../exports.js';
import './interpreter_pb.js';
import '../../../external/bufbuild/protobuf.js';
define(de[1116], he([1, 0, 1115, 86]), function (ce /*require*/,
 e /*exports*/,
 t /*interpreter_pb*/,
 i /*protobuf*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$N_ = void 0),
				(e.$N_ = {
					typeName: "aiserver.v1.InterpreterService",
					methods: {
						streamInterpreter: {
							name: "StreamInterpreter",
							I: t.$K_,
							O: t.$M_,
							kind: i.MethodKind.ServerStreaming,
						},
						logInterpreterExplicitUserFeedback: {
							name: "LogInterpreterExplicitUserFeedback",
							I: t.$I_,
							O: t.$J_,
							kind: i.MethodKind.Unary,
						},
					},
				});
		})
