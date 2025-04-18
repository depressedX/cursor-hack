import '../../../require.js';
import '../../../exports.js';
import './telemetry_pb.js';
import '../../../external/bufbuild/protobuf.js';
define(de[2170], he([1, 0, 1479, 86]), function (ce /*require*/,
 e /*exports*/,
 t /*telemetry_pb*/,
 i /*protobuf*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$7_ = void 0),
				(e.$7_ = {
					typeName: "aiserver.v1.MetricsService",
					methods: {
						reportIncrement: {
							name: "ReportIncrement",
							I: t.$h0,
							O: t.$j0,
							kind: i.MethodKind.Unary,
						},
						reportDecrement: {
							name: "ReportDecrement",
							I: t.$h0,
							O: t.$j0,
							kind: i.MethodKind.Unary,
						},
						reportDistribution: {
							name: "ReportDistribution",
							I: t.$h0,
							O: t.$j0,
							kind: i.MethodKind.Unary,
						},
						reportGauge: {
							name: "ReportGauge",
							I: t.$h0,
							O: t.$j0,
							kind: i.MethodKind.Unary,
						},
					},
				});
		})
