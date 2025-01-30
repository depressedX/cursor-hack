import '../../../../require.js';
import '../../../../exports.js';
define(de[116], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.TextEditorSelectionSource =
					e.TextEditorSelectionRevealType =
					e.EditorOpenSource =
					e.EditorResolution =
					e.EditorActivation =
						void 0),
				(e.$vO = t);
			function t(m) {
				const r = m;
				return (
					typeof r?.resolve == "function" && typeof r?.isResolved == "function"
				);
			}
			var i;
			(function (m) {
				(m[(m.ACTIVATE = 1)] = "ACTIVATE"),
					(m[(m.RESTORE = 2)] = "RESTORE"),
					(m[(m.PRESERVE = 3)] = "PRESERVE");
			})(i || (e.EditorActivation = i = {}));
			var w;
			(function (m) {
				(m[(m.PICK = 0)] = "PICK"),
					(m[(m.EXCLUSIVE_ONLY = 1)] = "EXCLUSIVE_ONLY");
			})(w || (e.EditorResolution = w = {}));
			var E;
			(function (m) {
				(m[(m.API = 0)] = "API"), (m[(m.USER = 1)] = "USER");
			})(E || (e.EditorOpenSource = E = {}));
			var C;
			(function (m) {
				(m[(m.Center = 0)] = "Center"),
					(m[(m.CenterIfOutsideViewport = 1)] = "CenterIfOutsideViewport"),
					(m[(m.NearTop = 2)] = "NearTop"),
					(m[(m.NearTopIfOutsideViewport = 3)] = "NearTopIfOutsideViewport");
			})(C || (e.TextEditorSelectionRevealType = C = {}));
			var d;
			(function (m) {
				(m.PROGRAMMATIC = "api"),
					(m.NAVIGATION = "code.navigation"),
					(m.JUMP = "code.jump");
			})(d || (e.TextEditorSelectionSource = d = {}));
		}),
		