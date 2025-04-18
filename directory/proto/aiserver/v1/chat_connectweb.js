import '../../../require.js';
import '../../../exports.js';
import './chat_pb.js';
import '../../../external/bufbuild/protobuf.js';
define(de[1112], he([1, 0, 126, 86]), function (ce /*require*/,
 e /*exports*/,
 t /*chat_pb*/,
 i /*protobuf*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$cbb = void 0),
				(e.$cbb = {
					typeName: "aiserver.v1.ChatService",
					methods: {
						streamUnifiedChat: {
							name: "StreamUnifiedChat",
							I: t.$AA,
							O: t.$FA,
							kind: i.MethodKind.ServerStreaming,
						},
						streamUnifiedChatWithTools: {
							name: "StreamUnifiedChatWithTools",
							I: t.$hA,
							O: t.$iA,
							kind: i.MethodKind.BiDiStreaming,
						},
						streamParallelApply: {
							name: "StreamParallelApply",
							I: t.$fA,
							O: t.$gA,
							kind: i.MethodKind.ServerStreaming,
						},
					},
				});
		})
