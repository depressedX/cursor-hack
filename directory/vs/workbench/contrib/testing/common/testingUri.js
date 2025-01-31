import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/assert.js';
import '../../../../base/common/uri.js';
define(de[813], he([1, 0, 229, 9]), function (ce /*require*/,
 e /*exports*/,
 t /*assert*/,
 i /*uri*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$3Kc = e.$2Kc = e.TestUriType = e.$1Kc = void 0),
				(e.$1Kc = "vscode-test-data");
			var w;
			(function (m) {
				(m[(m.TaskOutput = 0)] = "TaskOutput"),
					(m[(m.TestOutput = 1)] = "TestOutput"),
					(m[(m.ResultMessage = 2)] = "ResultMessage"),
					(m[(m.ResultActualOutput = 3)] = "ResultActualOutput"),
					(m[(m.ResultExpectedOutput = 4)] = "ResultExpectedOutput");
			})(w || (e.TestUriType = w = {}));
			var E;
			(function (m) {
				(m.Results = "results"),
					(m.AllOutput = "output"),
					(m.Messages = "message"),
					(m.Text = "TestFailureMessage"),
					(m.ActualOutput = "ActualOutput"),
					(m.ExpectedOutput = "ExpectedOutput");
			})(E || (E = {}));
			const C = (m) => {
				const r = m.authority,
					[u, ...a] = m.path.slice(1).split("/");
				if (a[0] === E.Messages) {
					const h = Number(a[1]),
						c = m.query,
						n = Number(a[2]),
						g = a[3];
					if (r === E.Results)
						switch (g) {
							case E.Text:
								return {
									resultId: u,
									taskIndex: h,
									testExtId: c,
									messageIndex: n,
									type: w.ResultMessage,
								};
							case E.ActualOutput:
								return {
									resultId: u,
									taskIndex: h,
									testExtId: c,
									messageIndex: n,
									type: w.ResultActualOutput,
								};
							case E.ExpectedOutput:
								return {
									resultId: u,
									taskIndex: h,
									testExtId: c,
									messageIndex: n,
									type: w.ResultExpectedOutput,
								};
							case E.Messages:
						}
				}
				if (a[0] === E.AllOutput) {
					const h = m.query,
						c = Number(a[1]);
					return h
						? { resultId: u, taskIndex: c, testExtId: h, type: w.TestOutput }
						: { resultId: u, taskIndex: c, type: w.TaskOutput };
				}
			};
			e.$2Kc = C;
			const d = (m) => {
				const r = { scheme: e.$1Kc, authority: E.Results };
				if (m.type === w.TaskOutput)
					return i.URI.from({
						...r,
						path: ["", m.resultId, E.AllOutput, m.taskIndex].join("/"),
					});
				const u = (a, ...h) =>
					i.URI.from({
						...r,
						query: m.testExtId,
						path: ["", a, E.Messages, ...h].join("/"),
					});
				switch (m.type) {
					case w.ResultActualOutput:
						return u(m.resultId, m.taskIndex, m.messageIndex, E.ActualOutput);
					case w.ResultExpectedOutput:
						return u(m.resultId, m.taskIndex, m.messageIndex, E.ExpectedOutput);
					case w.ResultMessage:
						return u(m.resultId, m.taskIndex, m.messageIndex, E.Text);
					case w.TestOutput:
						return i.URI.from({
							...r,
							query: m.testExtId,
							path: ["", m.resultId, E.AllOutput, m.taskIndex].join("/"),
						});
					default:
						(0, t.$kd)(m, "Invalid test uri");
				}
			};
			e.$3Kc = d;
		})
