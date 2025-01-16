define(de[1113], he([1, 0, 644, 86]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$J0 = void 0),
				(e.$J0 = {
					typeName: "aiserver.v1.CmdKService",
					methods: {
						streamCmdK: {
							name: "StreamCmdK",
							I: t.$yC,
							O: t.$EC,
							kind: i.MethodKind.ServerStreaming,
						},
						streamHypermode: {
							name: "StreamHypermode",
							I: t.$xC,
							O: t.$EC,
							kind: i.MethodKind.ServerStreaming,
						},
						rerankCmdKContext: {
							name: "RerankCmdKContext",
							I: t.$pC,
							O: t.$qC,
							kind: i.MethodKind.Unary,
						},
						streamTerminalCmdK: {
							name: "StreamTerminalCmdK",
							I: t.$CC,
							O: t.$FC,
							kind: i.MethodKind.ServerStreaming,
						},
						rerankTerminalCmdKContext: {
							name: "RerankTerminalCmdKContext",
							I: t.$rC,
							O: t.$sC,
							kind: i.MethodKind.Unary,
						},
						getRelevantChunks: {
							name: "GetRelevantChunks",
							I: t.$QC,
							O: t.$RC,
							kind: i.MethodKind.ServerStreaming,
						},
					},
				});
		}),
		