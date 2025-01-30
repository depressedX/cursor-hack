import '../../../require.js';
import '../../../exports.js';
import './debugger_pb.js';
import '../../../external/bufbuild/protobuf.js';
define(de[2175], he([1, 0, 2174, 86]), function (ce /*require*/,
 e /*exports*/,
 t /*debugger_pb*/,
 i /*protobuf*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$5$ = void 0),
				(e.$5$ = {
					typeName: "aiserver.v1.DebuggerService",
					methods: {
						gitFilter: {
							name: "GitFilter",
							I: t.$1$,
							O: t.$2$,
							kind: i.MethodKind.ServerStreaming,
						},
						fileFilter: {
							name: "FileFilter",
							I: t.$Y$,
							O: t.$Z$,
							kind: i.MethodKind.ServerStreaming,
						},
						bugAnalysis: {
							name: "BugAnalysis",
							I: t.$3$,
							O: t.$4$,
							kind: i.MethodKind.ServerStreaming,
						},
					},
				});
		}),
		