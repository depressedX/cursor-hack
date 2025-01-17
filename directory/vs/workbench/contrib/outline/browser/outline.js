import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/contextkey/common/contextkey.js';
define(de[802], he([1, 0, 8]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$F4b =
					e.$E4b =
					e.$D4b =
					e.$C4b =
					e.IOutlinePane =
					e.OutlineSortOrder =
						void 0);
			var i;
			(function (E) {
				(E[(E.ByPosition = 0)] = "ByPosition"),
					(E[(E.ByName = 1)] = "ByName"),
					(E[(E.ByKind = 2)] = "ByKind");
			})(i || (e.OutlineSortOrder = i = {}));
			var w;
			(function (E) {
				E.Id = "outline";
			})(w || (e.IOutlinePane = w = {})),
				(e.$C4b = new t.$5j("outlineFollowsCursor", !1)),
				(e.$D4b = new t.$5j("outlineFiltersOnType", !1)),
				(e.$E4b = new t.$5j("outlineSortMode", i.ByPosition)),
				(e.$F4b = new t.$5j("outlineAllCollapsed", !1));
		}),
		