import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/themables.js';
import '../../../common/model/textModel.js';
import '../../../../nls.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/iconRegistry.js';
define(
			de[608],
			he([1, 0, 14, 26, 122, 4, 51, 79]),
			function (ce /*require*/,
 e /*exports*/,
 t /*codicons*/,
 i /*themables*/,
 w /*textModel*/,
 E /*nls*/,
 C /*colorRegistry*/,
 d /*iconRegistry*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Uxb =
						e.$Txb =
						e.$Sxb =
						e.$Rxb =
						e.$Qxb =
						e.$Pxb =
						e.$Oxb =
						e.$Nxb =
						e.$Mxb =
						e.$Lxb =
						e.$Kxb =
						e.$Jxb =
						e.$Ixb =
						e.$Hxb =
						e.$Gxb =
							void 0),
					(e.$Gxb = (0, C.$wP)(
						"diffEditor.move.border",
						"#8b8b8b9c",
						(0, E.localize)(243, null),
					)),
					(e.$Hxb = (0, C.$wP)(
						"diffEditor.moveActive.border",
						"#FFA500",
						(0, E.localize)(244, null),
					)),
					(e.$Ixb = (0, C.$wP)(
						"diffEditor.unchangedRegionShadow",
						{
							dark: "#000000",
							light: "#737373BF",
							hcDark: "#000000",
							hcLight: "#737373BF",
						},
						(0, E.localize)(245, null),
					)),
					(e.$Jxb = (0, d.$$O)(
						"diff-insert",
						t.$ak.add,
						(0, E.localize)(246, null),
					)),
					(e.$Kxb = (0, d.$$O)(
						"diff-remove",
						t.$ak.remove,
						(0, E.localize)(247, null),
					)),
					(e.$Lxb = w.$eY.register({
						className: "line-insert",
						description: "line-insert",
						isWholeLine: !0,
						linesDecorationsClassName:
							"insert-sign " + i.ThemeIcon.asClassName(e.$Jxb),
						marginClassName: "gutter-insert",
					})),
					(e.$Mxb = w.$eY.register({
						className: "line-delete",
						description: "line-delete",
						isWholeLine: !0,
						linesDecorationsClassName:
							"delete-sign " + i.ThemeIcon.asClassName(e.$Kxb),
						marginClassName: "gutter-delete",
					})),
					(e.$Nxb = w.$eY.register({
						className: "line-insert",
						description: "line-insert",
						isWholeLine: !0,
						marginClassName: "gutter-insert",
					})),
					(e.$Oxb = w.$eY.register({
						className: "line-delete",
						description: "line-delete",
						isWholeLine: !0,
						marginClassName: "gutter-delete",
					})),
					(e.$Pxb = w.$eY.register({
						className: "char-insert",
						description: "char-insert",
						shouldFillLineOnLineBreak: !0,
					})),
					(e.$Qxb = w.$eY.register({
						className: "char-insert",
						description: "char-insert",
						isWholeLine: !0,
					})),
					(e.$Rxb = w.$eY.register({
						className: "char-insert diff-range-empty",
						description: "char-insert diff-range-empty",
					})),
					(e.$Sxb = w.$eY.register({
						className: "char-delete",
						description: "char-delete",
						shouldFillLineOnLineBreak: !0,
					})),
					(e.$Txb = w.$eY.register({
						className: "char-delete",
						description: "char-delete",
						isWholeLine: !0,
					})),
					(e.$Uxb = w.$eY.register({
						className: "char-delete diff-range-empty",
						description: "char-delete diff-range-empty",
					}));
			},
		)
