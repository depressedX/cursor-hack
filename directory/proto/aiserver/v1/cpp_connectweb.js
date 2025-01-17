import '../../../require.js';
import '../../../exports.js';
import './cpp_pb.js';
import '../../../external/bufbuild/protobuf.js';
define(de[1108], he([1, 0, 367, 86]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$K0 = void 0),
				(e.$K0 = {
					typeName: "aiserver.v1.CppService",
					methods: {
						markCppForEval: {
							name: "MarkCppForEval",
							I: t.$Jv,
							O: t.$Mv,
							kind: i.MethodKind.Unary,
						},
						streamHoldCpp: {
							name: "StreamHoldCpp",
							I: t.$Fv,
							O: t.$Gv,
							kind: i.MethodKind.ServerStreaming,
						},
						availableModels: {
							name: "AvailableModels",
							I: t.$Dv,
							O: t.$Ev,
							kind: i.MethodKind.Unary,
						},
						recordCppFate: {
							name: "RecordCppFate",
							I: t.$Bv,
							O: t.$Cv,
							kind: i.MethodKind.Unary,
						},
					},
				});
		}),
		