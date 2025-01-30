import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/severity.js';
import '../../../nls.js';
import '../../instantiation/common/instantiation.js';
define(de[90], he([1, 0, 111, 4, 5]), function (ce /*require*/,
 e /*exports*/,
 t /*severity*/,
 i /*nls*/,
 w /*instantiation*/) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.$aM = e.IMarkerData = e.MarkerSeverity = e.MarkerTag = void 0),
			(t = xi(t));
		var E;
		(function (m) {
			(m[(m.Unnecessary = 1)] = "Unnecessary"),
				(m[(m.Deprecated = 2)] = "Deprecated");
		})(E || (e.MarkerTag = E = {}));
		var C;
		(function (m) {
			(m[(m.Hint = 1)] = "Hint"),
				(m[(m.Info = 2)] = "Info"),
				(m[(m.AI = 3)] = "AI"),
				(m[(m.Warning = 4)] = "Warning"),
				(m[(m.Error = 8)] = "Error");
		})(C || (e.MarkerSeverity = C = {})),
			(function (m) {
				function r(n, g) {
					return g - n;
				}
				m.compare = r;
				const u = Object.create(null);
				(u[m.Error] = (0, i.localize)(1977, null)),
					(u[m.Warning] = (0, i.localize)(1978, null)),
					(u[m.Info] = (0, i.localize)(1979, null)),
					(u[m.AI] = "AI Hint");
				function a(n) {
					return u[n] || "";
				}
				m.toString = a;
				function h(n) {
					switch (n) {
						case t.default.Error:
							return m.Error;
						case t.default.Warning:
							return m.Warning;
						case t.default.Info:
							return m.Info;
						case t.default.Ignore:
							return m.Hint;
						case t.default.AI:
							return m.AI;
					}
				}
				m.fromSeverity = h;
				function c(n) {
					switch (n) {
						case m.Error:
							return t.default.Error;
						case m.Warning:
							return t.default.Warning;
						case m.Info:
							return t.default.Info;
						case m.Hint:
							return t.default.Ignore;
						case m.AI:
							return t.default.AI;
					}
				}
				m.toSeverity = c;
			})(C || (e.MarkerSeverity = C = {}));
		var d;
		(function (m) {
			const r = "";
			function u(h) {
				return a(h, !0);
			}
			m.makeKey = u;
			function a(h, c) {
				const n = [r];
				return (
					h.source ? n.push(h.source.replace("\xA6", "\\\xA6")) : n.push(r),
					h.code
						? typeof h.code == "string"
							? n.push(h.code.replace("\xA6", "\\\xA6"))
							: n.push(h.code.value.replace("\xA6", "\\\xA6"))
						: n.push(r),
					h.severity !== void 0 && h.severity !== null
						? n.push(C.toString(h.severity))
						: n.push(r),
					h.message && c
						? n.push(h.message.replace("\xA6", "\\\xA6"))
						: n.push(r),
					h.startLineNumber !== void 0 && h.startLineNumber !== null
						? n.push(h.startLineNumber.toString())
						: n.push(r),
					h.startColumn !== void 0 && h.startColumn !== null
						? n.push(h.startColumn.toString())
						: n.push(r),
					h.endLineNumber !== void 0 && h.endLineNumber !== null
						? n.push(h.endLineNumber.toString())
						: n.push(r),
					h.endColumn !== void 0 && h.endColumn !== null
						? n.push(h.endColumn.toString())
						: n.push(r),
					n.push(r),
					n.join("\xA6")
				);
			}
			m.makeKeyOptionalMessage = a;
		})(d || (e.IMarkerData = d = {})),
			(e.$aM = (0, w.$Mi)("markerService"));
	}),
		