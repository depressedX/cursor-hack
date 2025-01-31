import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
define(de[1795], he([1, 0, 4]), function (ce /*require*/,
 e /*exports*/,
 t /*nls*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$OQc = void 0),
				(t = mt(t));
			const i = t.localize(12164, null),
				w = t.localize(12165, null),
				E = t.localize(12166, null),
				C = t.localize(12167, null);
			e.$OQc = {
				definitions: {
					inputs: {
						type: "array",
						description: t.localize(12168, null),
						items: {
							oneOf: [
								{
									type: "object",
									required: ["id", "type", "description"],
									additionalProperties: !1,
									properties: {
										id: { type: "string", description: i },
										type: {
											type: "string",
											description: w,
											enum: ["promptString"],
											enumDescriptions: [t.localize(12169, null)],
										},
										description: { type: "string", description: E },
										default: { type: "string", description: C },
										password: {
											type: "boolean",
											description: t.localize(12170, null),
										},
									},
								},
								{
									type: "object",
									required: ["id", "type", "description", "options"],
									additionalProperties: !1,
									properties: {
										id: { type: "string", description: i },
										type: {
											type: "string",
											description: w,
											enum: ["pickString"],
											enumDescriptions: [t.localize(12171, null)],
										},
										description: { type: "string", description: E },
										default: { type: "string", description: C },
										options: {
											type: "array",
											description: t.localize(12172, null),
											items: {
												oneOf: [
													{ type: "string" },
													{
														type: "object",
														required: ["value"],
														additionalProperties: !1,
														properties: {
															label: {
																type: "string",
																description: t.localize(12173, null),
															},
															value: {
																type: "string",
																description: t.localize(12174, null),
															},
														},
													},
												],
											},
										},
									},
								},
								{
									type: "object",
									required: ["id", "type", "command"],
									additionalProperties: !1,
									properties: {
										id: { type: "string", description: i },
										type: {
											type: "string",
											description: w,
											enum: ["command"],
											enumDescriptions: [t.localize(12175, null)],
										},
										command: {
											type: "string",
											description: t.localize(12176, null),
										},
										args: {
											oneOf: [
												{
													type: "object",
													description: t.localize(12177, null),
												},
												{ type: "array", description: t.localize(12178, null) },
												{
													type: "string",
													description: t.localize(12179, null),
												},
											],
										},
									},
								},
							],
						},
					},
				},
			};
		})
