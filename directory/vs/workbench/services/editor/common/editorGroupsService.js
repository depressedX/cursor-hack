import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../common/editor.js';
define(de[66], he([1, 0, 5, 44]), function (ce /*require*/,
 e /*exports*/,
 t /*instantiation*/,
 i /*editor*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.OpenEditorContext =
					e.GroupsOrder =
					e.MergeGroupMode =
					e.GroupsArrangement =
					e.GroupLocation =
					e.GroupOrientation =
					e.GroupDirection =
					e.$EY =
						void 0),
				(e.$FY = r),
				(e.$GY = h),
				(e.$HY = c),
				(e.$EY = (0, t.$Mi)("editorGroupsService"));
			var w;
			(function (n) {
				(n[(n.UP = 0)] = "UP"),
					(n[(n.DOWN = 1)] = "DOWN"),
					(n[(n.LEFT = 2)] = "LEFT"),
					(n[(n.RIGHT = 3)] = "RIGHT");
			})(w || (e.GroupDirection = w = {}));
			var E;
			(function (n) {
				(n[(n.HORIZONTAL = 0)] = "HORIZONTAL"),
					(n[(n.VERTICAL = 1)] = "VERTICAL");
			})(E || (e.GroupOrientation = E = {}));
			var C;
			(function (n) {
				(n[(n.FIRST = 0)] = "FIRST"),
					(n[(n.LAST = 1)] = "LAST"),
					(n[(n.NEXT = 2)] = "NEXT"),
					(n[(n.PREVIOUS = 3)] = "PREVIOUS");
			})(C || (e.GroupLocation = C = {}));
			var d;
			(function (n) {
				(n[(n.MAXIMIZE = 0)] = "MAXIMIZE"),
					(n[(n.EXPAND = 1)] = "EXPAND"),
					(n[(n.EVEN = 2)] = "EVEN");
			})(d || (e.GroupsArrangement = d = {}));
			var m;
			(function (n) {
				(n[(n.COPY_EDITORS = 0)] = "COPY_EDITORS"),
					(n[(n.MOVE_EDITORS = 1)] = "MOVE_EDITORS");
			})(m || (e.MergeGroupMode = m = {}));
			function r(n) {
				const g = n;
				return (0, i.$r1)(g?.editor) && (0, i.$r1)(g?.replacement);
			}
			var u;
			(function (n) {
				(n[(n.CREATION_TIME = 0)] = "CREATION_TIME"),
					(n[(n.MOST_RECENTLY_ACTIVE = 1)] = "MOST_RECENTLY_ACTIVE"),
					(n[(n.GRID_APPEARANCE = 2)] = "GRID_APPEARANCE");
			})(u || (e.GroupsOrder = u = {}));
			var a;
			(function (n) {
				(n[(n.NEW_EDITOR = 1)] = "NEW_EDITOR"),
					(n[(n.MOVE_EDITOR = 2)] = "MOVE_EDITOR"),
					(n[(n.COPY_EDITOR = 3)] = "COPY_EDITOR");
			})(a || (e.OpenEditorContext = a = {}));
			function h(n) {
				const g = n;
				return !!g && typeof g.id == "number" && Array.isArray(g.editors);
			}
			function c(n) {
				return n.getValue("workbench.editor.openSideBySideDirection") === "down"
					? w.DOWN
					: w.RIGHT;
			}
		}),
		