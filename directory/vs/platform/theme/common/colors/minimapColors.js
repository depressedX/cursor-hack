import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/color.js';
import '../colorUtils.js';
import './editorColors.js';
import './miscColors.js';
define(
			de[1657],
			he([1, 0, 4, 97, 306, 605, 1203]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*color*/,
 w /*colorUtils*/,
 E /*editorColors*/,
 C /*miscColors*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$KR =
						e.$JR =
						e.$IR =
						e.$HR =
						e.$GR =
						e.$FR =
						e.$ER =
						e.$DR =
						e.$CR =
						e.$BR =
						e.$AR =
							void 0),
					(t = mt(t)),
					(e.$AR = (0, w.$wP)(
						"minimap.findMatchHighlight",
						{
							light: "#d18616",
							dark: "#d18616",
							hcDark: "#AB5A00",
							hcLight: "#0F4A85",
						},
						t.localize(2335, null),
						!0,
					)),
					(e.$BR = (0, w.$wP)(
						"minimap.selectionOccurrenceHighlight",
						{
							light: "#c9c9c9",
							dark: "#676767",
							hcDark: "#ffffff",
							hcLight: "#0F4A85",
						},
						t.localize(2336, null),
						!0,
					)),
					(e.$CR = (0, w.$wP)(
						"minimap.selectionHighlight",
						{
							light: "#ADD6FF",
							dark: "#264F78",
							hcDark: "#ffffff",
							hcLight: "#0F4A85",
						},
						t.localize(2337, null),
						!0,
					)),
					(e.$DR = (0, w.$wP)(
						"minimap.infoHighlight",
						{ dark: E.$mQ, light: E.$mQ, hcDark: E.$nQ, hcLight: E.$nQ },
						t.localize(2338, null),
					)),
					(e.$ER = (0, w.$wP)(
						"minimap.warningHighlight",
						{ dark: E.$jQ, light: E.$jQ, hcDark: E.$kQ, hcLight: E.$kQ },
						t.localize(2339, null),
					)),
					(e.$FR = (0, w.$wP)(
						"minimap.errorHighlight",
						{
							dark: new i.$UL(new i.$RL(255, 18, 18, 0.7)),
							light: new i.$UL(new i.$RL(255, 18, 18, 0.7)),
							hcDark: new i.$UL(new i.$RL(255, 50, 50, 1)),
							hcLight: "#B5200D",
						},
						t.localize(2340, null),
					)),
					(e.$GR = (0, w.$wP)(
						"minimap.background",
						null,
						t.localize(2341, null),
					)),
					(e.$HR = (0, w.$wP)(
						"minimap.foregroundOpacity",
						i.$UL.fromHex("#000f"),
						t.localize(2342, null),
					)),
					(e.$IR = (0, w.$wP)(
						"minimapSlider.background",
						(0, w.$BP)(C.$4P, 0.5),
						t.localize(2343, null),
					)),
					(e.$JR = (0, w.$wP)(
						"minimapSlider.hoverBackground",
						(0, w.$BP)(C.$5P, 0.5),
						t.localize(2344, null),
					)),
					(e.$KR = (0, w.$wP)(
						"minimapSlider.activeBackground",
						(0, w.$BP)(C.$6P, 0.5),
						t.localize(2345, null),
					));
			},
		)
