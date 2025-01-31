import '../../../require.js';
import '../../../exports.js';
import './review_pb.js';
import '../../../external/bufbuild/protobuf.js';
define(de[1117], he([1, 0, 736, 86]), function (ce /*require*/,
 e /*exports*/,
 t /*review_pb*/,
 i /*protobuf*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$8ab = void 0),
				(e.$8ab = {
					typeName: "aiserver.v1.ReviewService",
					methods: {
						streamReview: {
							name: "StreamReview",
							I: t.$Vab,
							O: t.$Yab,
							kind: i.MethodKind.ServerStreaming,
						},
						streamReviewChat: {
							name: "StreamReviewChat",
							I: t.$Zab,
							O: t.$1ab,
							kind: i.MethodKind.ServerStreaming,
						},
						streamSlowReview: {
							name: "StreamSlowReview",
							I: t.$Vab,
							O: t.$Yab,
							kind: i.MethodKind.ServerStreaming,
						},
						bugConfig: {
							name: "BugConfig",
							I: t.$Nab,
							O: t.$Oab,
							kind: i.MethodKind.Unary,
						},
						streamBugBotLinter: {
							name: "StreamBugBotLinter",
							I: t.$Sab,
							O: t.$Tab,
							kind: i.MethodKind.ServerStreaming,
						},
						streamBugFinding: {
							name: "StreamBugFinding",
							I: t.$4ab,
							O: t.$2ab,
							kind: i.MethodKind.ServerStreaming,
						},
					},
				});
		})
