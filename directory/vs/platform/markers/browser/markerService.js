import '../../../../require.js';
import '../../../../exports.js';
import '../../../../proto/aiserver/v1/utils_pb.js';
import '../common/markers.js';
define(de[770], he([1, 0, 83, 90]), function (ce /*require*/,
 e /*exports*/,
 t /*utils_pb*/,
 i /*markers*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$O7b = w),
				(e.$P7b = E),
				(e.$Q7b = C);
			function w(d) {
				let m;
				switch (d) {
					case i.MarkerSeverity.Error:
						m = t.Diagnostic_DiagnosticSeverity.ERROR;
						break;
					case i.MarkerSeverity.Warning:
						m = t.Diagnostic_DiagnosticSeverity.WARNING;
						break;
					case i.MarkerSeverity.Info:
						m = t.Diagnostic_DiagnosticSeverity.INFORMATION;
						break;
					case i.MarkerSeverity.Hint:
						m = t.Diagnostic_DiagnosticSeverity.HINT;
						break;
					case i.MarkerSeverity.AI:
						m = t.Diagnostic_DiagnosticSeverity.WARNING;
						break;
				}
				return m;
			}
			function E(d) {
				return {
					severity: w(d.severity),
					relatedInformation: d.relatedInformation ?? [],
					message: d.message,
					range: {
						startPosition: { line: d.startLineNumber, column: d.startColumn },
						endPosition: { line: d.endLineNumber, column: d.endColumn },
					},
				};
			}
			function C(d, m, r) {
				let u;
				switch (r.severity) {
					case t.Diagnostic_DiagnosticSeverity.ERROR:
						u = i.MarkerSeverity.Error;
						break;
					case t.Diagnostic_DiagnosticSeverity.WARNING:
						u = i.MarkerSeverity.Warning;
						break;
					case t.Diagnostic_DiagnosticSeverity.INFORMATION:
						u = i.MarkerSeverity.Info;
						break;
					case t.Diagnostic_DiagnosticSeverity.HINT:
						u = i.MarkerSeverity.Hint;
						break;
					default:
						u = i.MarkerSeverity.Info;
						break;
				}
				return {
					severity: u,
					message: r.message,
					startLineNumber: r.range?.startPosition?.line ?? 1,
					startColumn: r.range?.startPosition?.column ?? 1,
					endLineNumber: r.range?.endPosition?.line ?? 1,
					endColumn: r.range?.endPosition?.column ?? 1,
					resource: m,
					owner: d,
				};
			}
		})
