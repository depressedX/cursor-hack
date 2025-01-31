import '../../../../../require.js';
import '../../../../../exports.js';
define(de[351], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.toolFormerSchema =
					e.usesCodebaseSchema =
					e.rememberThisSchema =
					e.diffHistorySchema =
					e.contextPlannerSchema =
					e.autoContextSchema =
					e.editTrailSchema =
					e.contextPickingSchema =
					e.diffReviewSchema =
					e.toolCallSchema =
					e.megaPlannerSchema =
					e.loopOnCommandSchema =
					e.loopOnLintsSchema =
						void 0),
				(e.loopOnLintsSchema = {
					maxIterations: {
						label: "Max Iterations",
						type: "number",
						defaultValue: 1,
						description: "Maximum tries to fix the lint",
						validate: (t) => t > 0,
						order: 1,
					},
					shadowWorkspace: {
						label: "Shadow Workspace",
						type: "boolean",
						defaultValue: !1,
						description: "Whether to use a shadow workspace to get lint errors",
						order: 2,
					},
					customInstructions: {
						label: "Custom Instructions",
						type: "string",
						defaultValue: "",
						description: "How to fix the lint",
						order: 3,
					},
				}),
				(e.loopOnCommandSchema = {
					command: {
						label: "Command",
						type: "string",
						defaultValue: "",
						description: "The command to execute",
						order: 1,
					},
					customInstructions: {
						label: "Custom Instructions",
						type: "string",
						defaultValue: "",
						description: "Custom instructions for the AI",
						order: 2,
					},
					maxIterations: {
						label: "Max Iterations",
						type: "number",
						defaultValue: 5,
						description: "Maximum number of iterations",
						order: 3,
					},
				}),
				(e.megaPlannerSchema = {
					customInstructions: {
						label: "Custom Instructions",
						type: "string",
						defaultValue: "",
						description: "Custom instructions for the AI",
						order: 2,
					},
					model: {
						label: "Model",
						type: "model",
						defaultValue: "claude-3.5-sonnet",
						description: "The model to use",
						order: 1,
					},
				}),
				(e.toolCallSchema = {
					customInstructions: {
						label: "Custom Instructions",
						type: "string",
						defaultValue: "",
						description: "Custom instructions for the AI",
						order: 1,
					},
					maxIterations: {
						label: "Max Iterations",
						type: "number",
						defaultValue: 3,
						description:
							"Maximum number of iterations before asking for continuation",
						order: 2,
					},
					pickerModel: {
						label: "Picker Model",
						type: "model",
						defaultValue: "claude-3.5-sonnet",
						description: "The model to use for the picker",
						order: 3,
					},
				}),
				(e.diffReviewSchema = {
					customInstructions: {
						label: "Custom Instructions",
						type: "string",
						defaultValue: "",
						description: "Custom instructions for the AI",
						order: 1,
					},
				}),
				(e.contextPickingSchema = {
					customInstructions: {
						label: "Custom Instructions",
						type: "string",
						defaultValue: "",
						description: "Custom instructions for the AI",
						order: 1,
					},
				}),
				(e.editTrailSchema = {
					customInstructions: {
						label: "Custom Instructions",
						type: "string",
						defaultValue: "",
						description: "Custom instructions for the AI",
						order: 1,
					},
				}),
				(e.autoContextSchema = {
					customInstructions: {
						label: "Custom Instructions",
						type: "string",
						defaultValue: "",
						description: "Custom instructions for the AI",
						order: 1,
					},
				}),
				(e.contextPlannerSchema = {
					customInstructions: {
						label: "Custom Instructions",
						type: "string",
						defaultValue: "",
						description: "Custom instructions for the AI",
						order: 1,
					},
					model: {
						label: "Model",
						type: "model",
						defaultValue: "claude-3-5-sonnet-200k",
						description: "The model to use",
						order: 2,
					},
				}),
				(e.diffHistorySchema = {
					customInstructions: {
						label: "Custom Instructions",
						type: "string",
						defaultValue: "",
						description: "Custom instructions for the AI",
						order: 1,
					},
				}),
				(e.rememberThisSchema = {
					customInstructions: {
						label: "Custom Instructions",
						type: "string",
						defaultValue: "",
						description: "Custom instructions for the AI",
						order: 1,
					},
				}),
				(e.usesCodebaseSchema = {
					customInstructions: {
						label: "Custom Instructions",
						type: "string",
						defaultValue: "",
						description: "Custom instructions for the AI",
						order: 1,
					},
				}),
				(e.toolFormerSchema = {
					customInstructions: {
						label: "Custom Instructions",
						type: "string",
						defaultValue: "",
						description: "Custom instructions for the AI",
						order: 1,
					},
					bubbleDataMap: {
						label: "Bubble Data Map",
						type: "string",
						defaultValue: "{}",
						description: "Map of bubble IDs to their associated data",
						order: 2,
					},
				});
		})
