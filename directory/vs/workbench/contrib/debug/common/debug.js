import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/uri.js';
import '../../../../nls.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
define(de[112], he([1, 0, 9, 4, 8, 5]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.IDebugVisualization =
					e.IDebugVisualizationTreeItem =
					e.DebugTreeItemCollapsibleState =
					e.DebugVisualizationType =
					e.BreakpointWidgetContext =
					e.$75 =
					e.DebuggerString =
					e.DebugConfigurationProviderTriggerKind =
					e.DataBreakpointSetType =
					e.$55 =
					e.MemoryRangeType =
					e.State =
					e.$35 =
					e.$25 =
					e.$15 =
					e.$Z5 =
					e.$Y5 =
					e.$X5 =
					e.$W5 =
					e.$V5 =
					e.$U5 =
					e.$T5 =
					e.$S5 =
					e.$R5 =
					e.$Q5 =
					e.$P5 =
					e.$O5 =
					e.$N5 =
					e.$M5 =
					e.$L5 =
					e.$K5 =
					e.$J5 =
					e.$I5 =
					e.$H5 =
					e.$G5 =
					e.$F5 =
					e.$E5 =
					e.$D5 =
					e.$C5 =
					e.$B5 =
					e.$A5 =
					e.$z5 =
					e.$y5 =
					e.$x5 =
					e.$w5 =
					e.$v5 =
					e.$u5 =
					e.$t5 =
					e.$s5 =
					e.$r5 =
					e.$q5 =
					e.$p5 =
					e.$o5 =
					e.$n5 =
					e.$m5 =
					e.$l5 =
					e.$k5 =
					e.$j5 =
					e.$i5 =
					e.$h5 =
					e.$g5 =
					e.$f5 =
					e.$e5 =
					e.$d5 =
					e.$c5 =
					e.$b5 =
					e.$a5 =
					e.$_4 =
					e.$$4 =
					e.$04 =
					e.$94 =
					e.$84 =
					e.$74 =
					e.$64 =
					e.$54 =
					e.$44 =
					e.$34 =
					e.$24 =
					e.$14 =
					e.$Z4 =
					e.$Y4 =
					e.$X4 =
					e.$W4 =
					e.$V4 =
					e.$U4 =
					e.$T4 =
					e.$S4 =
					e.$R4 =
					e.$Q4 =
						void 0),
				(e.$45 = m),
				(e.$65 = u),
				(i = mt(i)),
				(e.$Q4 = "workbench.view.debug"),
				(e.$R4 = "workbench.debug.variablesView"),
				(e.$S4 = "workbench.debug.watchExpressionsView"),
				(e.$T4 = "workbench.debug.callStackView"),
				(e.$U4 = "workbench.debug.loadedScriptsView"),
				(e.$V4 = "workbench.debug.breakPointsView"),
				(e.$W4 = "workbench.debug.disassemblyView"),
				(e.$X4 = "workbench.panel.repl"),
				(e.$Y4 = "workbench.panel.repl.view"),
				(e.$Z4 = new w.$5j("debugType", void 0, {
					type: "string",
					description: i.localize(5769, null),
				})),
				(e.$14 = new w.$5j("debugConfigurationType", void 0, {
					type: "string",
					description: i.localize(5770, null),
				})),
				(e.$24 = new w.$5j("debugState", "inactive", {
					type: "string",
					description: i.localize(5771, null),
				})),
				(e.$34 = new w.$5j("debugRecordingState", !1, {
					type: "string",
					description: i.localize(5772, null),
				})),
				(e.$44 = "debugUx"),
				(e.$54 = new w.$5j(e.$44, "default", {
					type: "string",
					description: i.localize(5773, null),
				})),
				(e.$64 = new w.$5j("hasDebugged", !1, {
					type: "boolean",
					description: i.localize(5774, null),
				})),
				(e.$74 = new w.$5j("inDebugMode", !1, {
					type: "boolean",
					description: i.localize(5775, null),
				})),
				(e.$84 = new w.$5j("inDebugRepl", !1, {
					type: "boolean",
					description: i.localize(5776, null),
				})),
				(e.$94 = new w.$5j("breakpointWidgetVisible", !1, {
					type: "boolean",
					description: i.localize(5777, null),
				})),
				(e.$04 = new w.$5j("inBreakpointWidget", !1, {
					type: "boolean",
					description: i.localize(5778, null),
				})),
				(e.$$4 = new w.$5j("breakpointsFocused", !0, {
					type: "boolean",
					description: i.localize(5779, null),
				})),
				(e.$_4 = new w.$5j("watchExpressionsFocused", !0, {
					type: "boolean",
					description: i.localize(5780, null),
				})),
				(e.$a5 = new w.$5j("watchExpressionsExist", !1, {
					type: "boolean",
					description: i.localize(5781, null),
				})),
				(e.$b5 = new w.$5j("variablesFocused", !0, {
					type: "boolean",
					description: i.localize(5782, null),
				})),
				(e.$c5 = new w.$5j("expressionSelected", !1, {
					type: "boolean",
					description: i.localize(5783, null),
				})),
				(e.$d5 = new w.$5j("breakpointInputFocused", !1, {
					type: "boolean",
					description: i.localize(5784, null),
				})),
				(e.$e5 = new w.$5j("callStackItemType", void 0, {
					type: "string",
					description: i.localize(5785, null),
				})),
				(e.$f5 = new w.$5j("callStackSessionIsAttach", !1, {
					type: "boolean",
					description: i.localize(5786, null),
				})),
				(e.$g5 = new w.$5j("callStackItemStopped", !1, {
					type: "boolean",
					description: i.localize(5787, null),
				})),
				(e.$h5 = new w.$5j("callStackSessionHasOneThread", !1, {
					type: "boolean",
					description: i.localize(5788, null),
				})),
				(e.$i5 = new w.$5j("watchItemType", void 0, {
					type: "string",
					description: i.localize(5789, null),
				})),
				(e.$j5 = new w.$5j("canViewMemory", void 0, {
					type: "boolean",
					description: i.localize(5790, null),
				})),
				(e.$k5 = new w.$5j("breakpointItemType", void 0, {
					type: "string",
					description: i.localize(5791, null),
				})),
				(e.$l5 = new w.$5j("breakpointItemBytes", void 0, {
					type: "boolean",
					description: i.localize(5792, null),
				})),
				(e.$m5 = new w.$5j("breakpointHasModes", !1, {
					type: "boolean",
					description: i.localize(5793, null),
				})),
				(e.$n5 = new w.$5j("breakpointSupportsCondition", !1, {
					type: "boolean",
					description: i.localize(5794, null),
				})),
				(e.$o5 = new w.$5j("loadedScriptsSupported", !1, {
					type: "boolean",
					description: i.localize(5795, null),
				})),
				(e.$p5 = new w.$5j("loadedScriptsItemType", void 0, {
					type: "string",
					description: i.localize(5796, null),
				})),
				(e.$q5 = new w.$5j("focusedSessionIsAttach", !1, {
					type: "boolean",
					description: i.localize(5797, null),
				})),
				(e.$r5 = new w.$5j("focusedSessionIsNoDebug", !1, {
					type: "boolean",
					description: i.localize(5798, null),
				})),
				(e.$s5 = new w.$5j("stepBackSupported", !1, {
					type: "boolean",
					description: i.localize(5799, null),
				})),
				(e.$t5 = new w.$5j("restartFrameSupported", !1, {
					type: "boolean",
					description: i.localize(5800, null),
				})),
				(e.$u5 = new w.$5j("stackFrameSupportsRestart", !1, {
					type: "boolean",
					description: i.localize(5801, null),
				})),
				(e.$v5 = new w.$5j("jumpToCursorSupported", !1, {
					type: "boolean",
					description: i.localize(5802, null),
				})),
				(e.$w5 = new w.$5j("stepIntoTargetsSupported", !1, {
					type: "boolean",
					description: i.localize(5803, null),
				})),
				(e.$x5 = new w.$5j("breakpointsExist", !1, {
					type: "boolean",
					description: i.localize(5804, null),
				})),
				(e.$y5 = new w.$5j("debuggersAvailable", !1, {
					type: "boolean",
					description: i.localize(5805, null),
				})),
				(e.$z5 = new w.$5j("debugExtensionAvailable", !0, {
					type: "boolean",
					description: i.localize(5806, null),
				})),
				(e.$A5 = new w.$5j("debugProtocolVariableMenuContext", void 0, {
					type: "string",
					description: i.localize(5807, null),
				})),
				(e.$B5 = new w.$5j("debugSetVariableSupported", !1, {
					type: "boolean",
					description: i.localize(5808, null),
				})),
				(e.$C5 = new w.$5j("debugSetDataBreakpointAddressSupported", !1, {
					type: "boolean",
					description: i.localize(5809, null),
				})),
				(e.$D5 = new w.$5j("debugSetExpressionSupported", !1, {
					type: "boolean",
					description: i.localize(5810, null),
				})),
				(e.$E5 = new w.$5j("breakWhenValueChangesSupported", !1, {
					type: "boolean",
					description: i.localize(5811, null),
				})),
				(e.$F5 = new w.$5j("breakWhenValueIsAccessedSupported", !1, {
					type: "boolean",
					description: i.localize(5812, null),
				})),
				(e.$G5 = new w.$5j("breakWhenValueIsReadSupported", !1, {
					type: "boolean",
					description: i.localize(5813, null),
				})),
				(e.$H5 = new w.$5j("terminateDebuggeeSupported", !1, {
					type: "boolean",
					description: i.localize(5814, null),
				})),
				(e.$I5 = new w.$5j("suspendDebuggeeSupported", !1, {
					type: "boolean",
					description: i.localize(5815, null),
				})),
				(e.$J5 = new w.$5j("variableEvaluateNamePresent", !1, {
					type: "boolean",
					description: i.localize(5816, null),
				})),
				(e.$K5 = new w.$5j("variableIsReadonly", !1, {
					type: "boolean",
					description: i.localize(5817, null),
				})),
				(e.$L5 = new w.$5j("variableValue", !1, {
					type: "string",
					description: i.localize(5818, null),
				})),
				(e.$M5 = new w.$5j("variableType", !1, {
					type: "string",
					description: i.localize(5819, null),
				})),
				(e.$N5 = new w.$5j("variableInterfaces", !1, {
					type: "array",
					description: i.localize(5820, null),
				})),
				(e.$O5 = new w.$5j("variableName", !1, {
					type: "string",
					description: i.localize(5821, null),
				})),
				(e.$P5 = new w.$5j("variableLanguage", !1, {
					type: "string",
					description: i.localize(5822, null),
				})),
				(e.$Q5 = new w.$5j("variableExtensionId", !1, {
					type: "string",
					description: i.localize(5823, null),
				})),
				(e.$R5 = new w.$5j("exceptionWidgetVisible", !1, {
					type: "boolean",
					description: i.localize(5824, null),
				})),
				(e.$S5 = new w.$5j("multiSessionRepl", !1, {
					type: "boolean",
					description: i.localize(5825, null),
				})),
				(e.$T5 = new w.$5j("multiSessionDebug", !1, {
					type: "boolean",
					description: i.localize(5826, null),
				})),
				(e.$U5 = new w.$5j("disassembleRequestSupported", !1, {
					type: "boolean",
					description: i.localize(5827, null),
				})),
				(e.$V5 = new w.$5j("disassemblyViewFocus", !1, {
					type: "boolean",
					description: i.localize(5828, null),
				})),
				(e.$W5 = new w.$5j("languageSupportsDisassembleRequest", !1, {
					type: "boolean",
					description: i.localize(5829, null),
				})),
				(e.$X5 = new w.$5j("focusedStackFrameHasInstructionReference", !1, {
					type: "boolean",
					description: i.localize(5830, null),
				}));
			const C = (b) => i.localize(5831, null, b);
			(e.$Y5 = C),
				(e.$Z5 = "editor.contrib.debug"),
				(e.$15 = "editor.contrib.breakpoint"),
				(e.$25 = "debug"),
				(e.$35 = {
					enum: ["neverOpen", "openOnSessionStart", "openOnFirstSessionStart"],
					default: "openOnFirstSessionStart",
					description: i.localize(5832, null),
				});
			var d;
			(function (b) {
				(b[(b.Inactive = 0)] = "Inactive"),
					(b[(b.Initializing = 1)] = "Initializing"),
					(b[(b.Stopped = 2)] = "Stopped"),
					(b[(b.Running = 3)] = "Running");
			})(d || (e.State = d = {}));
			function m(b) {
				switch (b) {
					case d.Initializing:
						return "initializing";
					case d.Stopped:
						return "stopped";
					case d.Running:
						return "running";
					default:
						return "inactive";
				}
			}
			var r;
			(function (b) {
				(b[(b.Valid = 0)] = "Valid"),
					(b[(b.Unreadable = 1)] = "Unreadable"),
					(b[(b.Error = 2)] = "Error");
			})(r || (e.MemoryRangeType = r = {})),
				(e.$55 = "vscode-debug-memory");
			function u(b) {
				const s = b.presentationHint ?? b.source.presentationHint;
				return s === "deemphasize" || s === "subtle";
			}
			var a;
			(function (b) {
				(b[(b.Variable = 0)] = "Variable"), (b[(b.Address = 1)] = "Address");
			})(a || (e.DataBreakpointSetType = a = {}));
			var h;
			(function (b) {
				(b[(b.Initial = 1)] = "Initial"), (b[(b.Dynamic = 2)] = "Dynamic");
			})(h || (e.DebugConfigurationProviderTriggerKind = h = {}));
			var c;
			(function (b) {
				b.UnverifiedBreakpoints = "unverifiedBreakpoints";
			})(c || (e.DebuggerString = c = {})),
				(e.$75 = (0, E.$Mi)("debugService"));
			var n;
			(function (b) {
				(b[(b.CONDITION = 0)] = "CONDITION"),
					(b[(b.HIT_COUNT = 1)] = "HIT_COUNT"),
					(b[(b.LOG_MESSAGE = 2)] = "LOG_MESSAGE"),
					(b[(b.TRIGGER_POINT = 3)] = "TRIGGER_POINT");
			})(n || (e.BreakpointWidgetContext = n = {}));
			var g;
			(function (b) {
				(b[(b.Command = 0)] = "Command"), (b[(b.Tree = 1)] = "Tree");
			})(g || (e.DebugVisualizationType = g = {}));
			var p;
			(function (b) {
				(b[(b.None = 0)] = "None"),
					(b[(b.Collapsed = 1)] = "Collapsed"),
					(b[(b.Expanded = 2)] = "Expanded");
			})(p || (e.DebugTreeItemCollapsibleState = p = {}));
			var o;
			(function (b) {
				(b.deserialize = (s) => s), (b.serialize = (s) => s);
			})(o || (e.IDebugVisualizationTreeItem = o = {}));
			var f;
			(function (b) {
				(b.deserialize = (s) => ({
					id: s.id,
					name: s.name,
					iconPath: s.iconPath && {
						light: t.URI.revive(s.iconPath.light),
						dark: t.URI.revive(s.iconPath.dark),
					},
					iconClass: s.iconClass,
					visualization: s.visualization,
				})),
					(b.serialize = (s) => s);
			})(f || (e.IDebugVisualization = f = {}));
		}),
		