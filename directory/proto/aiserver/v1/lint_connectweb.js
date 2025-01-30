import '../../../require.js';
import '../../../exports.js';
import './lint_pb.js';
import '../../../external/bufbuild/protobuf.js';
define(de[2171], he([1, 0, 1110, 86]), function (ce /*require*/,
 e /*exports*/,
 t /*lint_pb*/,
 i /*protobuf*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$8_ = void 0),
				(e.$8_ = {
					typeName: "aiserver.v1.LinterService",
					methods: {
						lintFile: {
							name: "LintFile",
							I: t.$8C,
							O: t.$$C,
							kind: i.MethodKind.Unary,
						},
						lintChunk: {
							name: "LintChunk",
							I: t.$4C,
							O: t.$5C,
							kind: i.MethodKind.Unary,
						},
						lintFimChunk: {
							name: "LintFimChunk",
							I: t.$6C,
							O: t.$7C,
							kind: i.MethodKind.Unary,
						},
						lintExplanation: {
							name: "LintExplanation",
							I: t.$ZC,
							O: t.$1C,
							kind: i.MethodKind.ServerStreaming,
						},
						lintExplanation2: {
							name: "LintExplanation2",
							I: t.$ZC,
							O: t.$2C,
							kind: i.MethodKind.Unary,
						},
					},
				});
		}),
		