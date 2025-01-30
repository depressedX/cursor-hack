import '../../../require.js';
import '../../../exports.js';
import './aibranch_pb.js';
import '../../../external/bufbuild/protobuf.js';
define(de[1484], he([1, 0, 2172, 86]), function (ce /*require*/,
 e /*exports*/,
 t /*aibranch_pb*/,
 i /*protobuf*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$$9 = void 0),
				(e.$$9 = {
					typeName: "aiserver.v1.AiBranchService",
					methods: {
						opusChainGetPlan: {
							name: "OpusChainGetPlan",
							I: t.$69,
							O: t.$09,
							kind: i.MethodKind.ServerStreaming,
						},
						opusChainGetFileInstruction: {
							name: "OpusChainGetFileInstruction",
							I: t.$49,
							O: t.$59,
							kind: i.MethodKind.Unary,
						},
						opusChainReflect: {
							name: "OpusChainReflect",
							I: t.$X9,
							O: t.$Y9,
							kind: i.MethodKind.ServerStreaming,
						},
						opusChainGetFilePaths: {
							name: "OpusChainGetFilePaths",
							I: t.$U9,
							O: t.$V9,
							kind: i.MethodKind.Unary,
						},
						recordAcceptedPatch: {
							name: "RecordAcceptedPatch",
							I: t.$S9,
							O: t.$T9,
							kind: i.MethodKind.Unary,
						},
						reportModeSelection: {
							name: "ReportModeSelection",
							I: t.$Q9,
							O: t.$R9,
							kind: i.MethodKind.Unary,
						},
					},
				});
		}),
		