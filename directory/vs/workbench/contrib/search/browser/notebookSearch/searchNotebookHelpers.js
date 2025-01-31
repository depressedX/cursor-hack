import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../services/search/common/search.js';
import '../../../../../editor/common/core/range.js';
import '../../common/searchNotebookHelpers.js';
define(de[1865], he([1, 0, 186, 17, 1864]), function (ce /*require*/,
 e /*exports*/,
 t /*search*/,
 i /*range*/,
 w /*searchNotebookHelpers*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$vNc = E),
				(e.$wNc = C),
				(e.$xNc = d),
				(e.$yNc = m),
				(e.$zNc = r);
			function E(u) {
				return d(u) ? u.cell.id : `${w.$T7}${u.index}`;
			}
			function C(u) {
				return (
					"cellResults" in u &&
					u.cellResults instanceof Array &&
					u.cellResults.every(d)
				);
			}
			function d(u) {
				return "cell" in u;
			}
			function m(u, a) {
				return (0, w.$U7)(u, a.textBuffer);
			}
			function r(u) {
				return u
					.map((a) =>
						a.searchPreviewInfo
							? new t.$u7(
									a.searchPreviewInfo.line,
									new i.$iL(
										0,
										a.searchPreviewInfo.range.start,
										0,
										a.searchPreviewInfo.range.end,
									),
									void 0,
									a.index,
								)
							: void 0,
					)
					.filter((a) => !!a);
			}
		})
