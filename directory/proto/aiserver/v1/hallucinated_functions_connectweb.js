import '../../../require.js';
import '../../../exports.js';
import './hallucinated_functions_pb.js';
import '../../../external/bufbuild/protobuf.js';
define(de[1487], he([1, 0, 2176, 86]), function (ce /*require*/,
 e /*exports*/,
 t /*hallucinated_functions_pb*/,
 i /*protobuf*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$H_ = void 0),
				(e.$H_ = {
					typeName: "aiserver.v1.HallucinatedFunctionsService",
					methods: {
						v0ChainRun: {
							name: "V0ChainRun",
							I: t.$o_,
							O: t.$p_,
							kind: i.MethodKind.ServerStreaming,
						},
						opus2ChainPlan: {
							name: "Opus2ChainPlan",
							I: t.$r_,
							O: t.$z_,
							kind: i.MethodKind.ServerStreaming,
						},
						opus2ChainApplyPlan: {
							name: "Opus2ChainApplyPlan",
							I: t.$d_,
							O: t.$e_,
							kind: i.MethodKind.ServerStreaming,
						},
						opus2ChainReflect: {
							name: "Opus2ChainReflect",
							I: t.$i_,
							O: t.$j_,
							kind: i.MethodKind.ServerStreaming,
						},
						sortUsefulTypesNaive: {
							name: "SortUsefulTypesNaive",
							I: t.$f_,
							O: t.$h_,
							kind: i.MethodKind.Unary,
						},
					},
				});
		}),
		