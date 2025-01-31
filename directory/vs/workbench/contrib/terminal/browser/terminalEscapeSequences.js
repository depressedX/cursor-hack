import '../../../../../require.js';
import '../../../../../exports.js';
define(de[3143], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ITermOscPt = e.VSCodeOscProperty = e.VSCodeOscPt = void 0),
				(e.$bXc = C),
				(e.$cXc = d);
			var t;
			(function (r) {
				(r[(r.FinalTerm = 133)] = "FinalTerm"),
					(r[(r.VSCode = 633)] = "VSCode"),
					(r[(r.ITerm = 1337)] = "ITerm");
			})(t || (t = {}));
			var i;
			(function (r) {
				(r.PromptStart = "A"),
					(r.CommandStart = "B"),
					(r.CommandExecuted = "C"),
					(r.CommandFinished = "D"),
					(r.CommandLine = "E"),
					(r.ContinuationStart = "F"),
					(r.ContinuationEnd = "G"),
					(r.RightPromptStart = "H"),
					(r.RightPromptEnd = "I"),
					(r.Property = "P");
			})(i || (e.VSCodeOscPt = i = {}));
			var w;
			(function (r) {
				(r.Task = "Task"), (r.Cwd = "Cwd");
			})(w || (e.VSCodeOscProperty = w = {}));
			var E;
			(function (r) {
				r.SetMark = "SetMark";
			})(E || (e.ITermOscPt = E = {}));
			function C(r, u) {
				return m(t.VSCode, r, u);
			}
			function d(r, u) {
				return m(t.ITerm, r, u);
			}
			function m(r, u, a) {
				let h = `\x1B]${r};${u}`;
				return a && (h += `;${a}`), (h += "\x07"), h;
			}
		})
