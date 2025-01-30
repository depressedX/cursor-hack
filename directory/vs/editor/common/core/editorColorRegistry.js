import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../../../base/common/color.js';
import '../../../platform/theme/common/colorRegistry.js';
import '../../../platform/theme/common/themeService.js';
define(de[307], he([1, 0, 4, 97, 51, 35]), function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*color*/,
 w /*colorRegistry*/,
 E /*themeService*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$tU =
					e.$sU =
					e.$rU =
					e.$qU =
					e.$pU =
					e.$oU =
					e.$nU =
					e.$mU =
					e.$lU =
					e.$kU =
					e.$jU =
					e.$iU =
					e.$hU =
					e.$gU =
					e.$fU =
					e.$eU =
					e.$dU =
					e.$cU =
					e.$bU =
					e.$aU =
					e.$_T =
					e.$$T =
					e.$0T =
					e.$9T =
					e.$8T =
					e.$7T =
					e.$6T =
					e.$5T =
					e.$4T =
					e.$3T =
					e.$2T =
					e.$1T =
					e.$ZT =
					e.$YT =
					e.$XT =
					e.$WT =
					e.$VT =
					e.$UT =
					e.$TT =
					e.$ST =
					e.$RT =
					e.$QT =
					e.$PT =
					e.$OT =
					e.$NT =
					e.$MT =
					e.$LT =
					e.$KT =
					e.$JT =
					e.$IT =
					e.$HT =
					e.$GT =
					e.$FT =
					e.$ET =
					e.$DT =
					e.$CT =
					e.$BT =
					e.$AT =
					e.$zT =
					e.$yT =
					e.$xT =
					e.$wT =
					e.$vT =
					e.$uT =
					e.$tT =
					e.$sT =
					e.$rT =
						void 0),
				(t = mt(t)),
				(e.$rT = (0, w.$wP)(
					"editor.lineHighlightBackground",
					null,
					t.localize(670, null),
				)),
				(e.$sT = (0, w.$wP)(
					"editor.lineHighlightBorder",
					{
						dark: "#282828",
						light: "#eeeeee",
						hcDark: "#f38518",
						hcLight: w.$OP,
					},
					t.localize(671, null),
				)),
				(e.$tT = (0, w.$wP)(
					"editor.rangeHighlightBackground",
					{
						dark: "#ffffff0b",
						light: "#fdff0033",
						hcDark: null,
						hcLight: null,
					},
					t.localize(672, null),
					!0,
				)),
				(e.$uT = (0, w.$wP)(
					"editor.rangeHighlightBorder",
					{ dark: null, light: null, hcDark: w.$PP, hcLight: w.$PP },
					t.localize(673, null),
				)),
				(e.$vT = (0, w.$wP)(
					"editor.symbolHighlightBackground",
					{ dark: w.$yQ, light: w.$yQ, hcDark: null, hcLight: null },
					t.localize(674, null),
					!0,
				)),
				(e.$wT = (0, w.$wP)(
					"editor.symbolHighlightBorder",
					{ dark: null, light: null, hcDark: w.$PP, hcLight: w.$PP },
					t.localize(675, null),
				)),
				(e.$xT = (0, w.$wP)(
					"editorCursor.foreground",
					{
						dark: "#AEAFAD",
						light: i.$UL.black,
						hcDark: i.$UL.white,
						hcLight: "#0F4A85",
					},
					t.localize(676, null),
				)),
				(e.$yT = (0, w.$wP)(
					"editorCursor.background",
					null,
					t.localize(677, null),
				)),
				(e.$zT = (0, w.$wP)(
					"editorMultiCursor.primary.foreground",
					e.$xT,
					t.localize(678, null),
				)),
				(e.$AT = (0, w.$wP)(
					"editorMultiCursor.primary.background",
					e.$yT,
					t.localize(679, null),
				)),
				(e.$BT = (0, w.$wP)(
					"editorMultiCursor.secondary.foreground",
					e.$xT,
					t.localize(680, null),
				)),
				(e.$CT = (0, w.$wP)(
					"editorMultiCursor.secondary.background",
					e.$yT,
					t.localize(681, null),
				)),
				(e.$DT = (0, w.$wP)(
					"editorWhitespace.foreground",
					{
						dark: "#e3e4e229",
						light: "#33333333",
						hcDark: "#e3e4e229",
						hcLight: "#CCCCCC",
					},
					t.localize(682, null),
				)),
				(e.$ET = (0, w.$wP)(
					"editorLineNumber.foreground",
					{
						dark: "#858585",
						light: "#237893",
						hcDark: i.$UL.white,
						hcLight: "#292929",
					},
					t.localize(683, null),
				)),
				(e.$FT = (0, w.$wP)(
					"editorIndentGuide.background",
					e.$DT,
					t.localize(684, null),
					!1,
					t.localize(685, null),
				)),
				(e.$GT = (0, w.$wP)(
					"editorIndentGuide.activeBackground",
					e.$DT,
					t.localize(686, null),
					!1,
					t.localize(687, null),
				)),
				(e.$HT = (0, w.$wP)(
					"editorIndentGuide.background1",
					e.$FT,
					t.localize(688, null),
				)),
				(e.$IT = (0, w.$wP)(
					"editorIndentGuide.background2",
					"#00000000",
					t.localize(689, null),
				)),
				(e.$JT = (0, w.$wP)(
					"editorIndentGuide.background3",
					"#00000000",
					t.localize(690, null),
				)),
				(e.$KT = (0, w.$wP)(
					"editorIndentGuide.background4",
					"#00000000",
					t.localize(691, null),
				)),
				(e.$LT = (0, w.$wP)(
					"editorIndentGuide.background5",
					"#00000000",
					t.localize(692, null),
				)),
				(e.$MT = (0, w.$wP)(
					"editorIndentGuide.background6",
					"#00000000",
					t.localize(693, null),
				)),
				(e.$NT = (0, w.$wP)(
					"editorIndentGuide.activeBackground1",
					e.$GT,
					t.localize(694, null),
				)),
				(e.$OT = (0, w.$wP)(
					"editorIndentGuide.activeBackground2",
					"#00000000",
					t.localize(695, null),
				)),
				(e.$PT = (0, w.$wP)(
					"editorIndentGuide.activeBackground3",
					"#00000000",
					t.localize(696, null),
				)),
				(e.$QT = (0, w.$wP)(
					"editorIndentGuide.activeBackground4",
					"#00000000",
					t.localize(697, null),
				)),
				(e.$RT = (0, w.$wP)(
					"editorIndentGuide.activeBackground5",
					"#00000000",
					t.localize(698, null),
				)),
				(e.$ST = (0, w.$wP)(
					"editorIndentGuide.activeBackground6",
					"#00000000",
					t.localize(699, null),
				));
			const C = (0, w.$wP)(
				"editorActiveLineNumber.foreground",
				{ dark: "#c6c6c6", light: "#0B216F", hcDark: w.$PP, hcLight: w.$PP },
				t.localize(700, null),
				!1,
				t.localize(701, null),
			);
			(e.$TT = (0, w.$wP)(
				"editorLineNumber.activeForeground",
				C,
				t.localize(702, null),
			)),
				(e.$UT = (0, w.$wP)(
					"editorLineNumber.dimmedForeground",
					null,
					t.localize(703, null),
				)),
				(e.$VT = (0, w.$wP)(
					"editorRuler.foreground",
					{
						dark: "#5A5A5A",
						light: i.$UL.lightgrey,
						hcDark: i.$UL.white,
						hcLight: "#292929",
					},
					t.localize(704, null),
				)),
				(e.$WT = (0, w.$wP)(
					"editorCodeLens.foreground",
					{
						dark: "#999999",
						light: "#919191",
						hcDark: "#999999",
						hcLight: "#292929",
					},
					t.localize(705, null),
				)),
				(e.$XT = (0, w.$wP)(
					"editorBracketMatch.background",
					{
						dark: "#0064001a",
						light: "#0064001a",
						hcDark: "#0064001a",
						hcLight: "#0000",
					},
					t.localize(706, null),
				)),
				(e.$YT = (0, w.$wP)(
					"editorBracketMatch.border",
					{ dark: "#888", light: "#B9B9B9", hcDark: w.$OP, hcLight: w.$OP },
					t.localize(707, null),
				)),
				(e.$ZT = (0, w.$wP)(
					"editorOverviewRuler.border",
					{
						dark: "#7f7f7f4d",
						light: "#7f7f7f4d",
						hcDark: "#7f7f7f4d",
						hcLight: "#666666",
					},
					t.localize(708, null),
				)),
				(e.$1T = (0, w.$wP)(
					"editorOverviewRuler.background",
					null,
					t.localize(709, null),
				)),
				(e.$2T = (0, w.$wP)(
					"editorGutter.background",
					w.$8P,
					t.localize(710, null),
				)),
				(e.$3T = (0, w.$wP)(
					"editorUnnecessaryCode.border",
					{
						dark: null,
						light: null,
						hcDark: i.$UL.fromHex("#fff").transparent(0.8),
						hcLight: w.$OP,
					},
					t.localize(711, null),
				)),
				(e.$4T = (0, w.$wP)(
					"editorUnnecessaryCode.opacity",
					{
						dark: i.$UL.fromHex("#000a"),
						light: i.$UL.fromHex("#0007"),
						hcDark: null,
						hcLight: null,
					},
					t.localize(712, null),
				)),
				(e.$5T = (0, w.$wP)(
					"editorGhostText.border",
					{
						dark: null,
						light: null,
						hcDark: i.$UL.fromHex("#fff").transparent(0.8),
						hcLight: i.$UL.fromHex("#292929").transparent(0.8),
					},
					t.localize(713, null),
				)),
				(e.$6T = (0, w.$wP)(
					"editorGhostText.foreground",
					{
						dark: i.$UL.fromHex("#ffffff56"),
						light: i.$UL.fromHex("#0007"),
						hcDark: null,
						hcLight: null,
					},
					t.localize(714, null),
				)),
				(e.$7T = (0, w.$wP)(
					"editorGhostText.background",
					null,
					t.localize(715, null),
				));
			const d = new i.$UL(new i.$RL(0, 122, 204, 0.6));
			(e.$8T = (0, w.$wP)(
				"editorOverviewRuler.rangeHighlightForeground",
				d,
				t.localize(716, null),
				!0,
			)),
				(e.$9T = (0, w.$wP)(
					"editorOverviewRuler.errorForeground",
					{
						dark: new i.$UL(new i.$RL(255, 18, 18, 0.7)),
						light: new i.$UL(new i.$RL(255, 18, 18, 0.7)),
						hcDark: new i.$UL(new i.$RL(255, 50, 50, 1)),
						hcLight: "#B5200D",
					},
					t.localize(717, null),
				)),
				(e.$0T = (0, w.$wP)(
					"editorOverviewRuler.warningForeground",
					{ dark: w.$jQ, light: w.$jQ, hcDark: w.$kQ, hcLight: w.$kQ },
					t.localize(718, null),
				)),
				(e.$$T = (0, w.$wP)(
					"editorOverviewRuler.infoForeground",
					{ dark: w.$mQ, light: w.$mQ, hcDark: w.$nQ, hcLight: w.$nQ },
					t.localize(719, null),
				)),
				(e.$_T = (0, w.$wP)(
					"editorBracketHighlight.foreground1",
					{
						dark: "#FFD700",
						light: "#0431FAFF",
						hcDark: "#FFD700",
						hcLight: "#0431FAFF",
					},
					t.localize(720, null),
				)),
				(e.$aU = (0, w.$wP)(
					"editorBracketHighlight.foreground2",
					{
						dark: "#DA70D6",
						light: "#319331FF",
						hcDark: "#DA70D6",
						hcLight: "#319331FF",
					},
					t.localize(721, null),
				)),
				(e.$bU = (0, w.$wP)(
					"editorBracketHighlight.foreground3",
					{
						dark: "#179FFF",
						light: "#7B3814FF",
						hcDark: "#87CEFA",
						hcLight: "#7B3814FF",
					},
					t.localize(722, null),
				)),
				(e.$cU = (0, w.$wP)(
					"editorBracketHighlight.foreground4",
					"#00000000",
					t.localize(723, null),
				)),
				(e.$dU = (0, w.$wP)(
					"editorBracketHighlight.foreground5",
					"#00000000",
					t.localize(724, null),
				)),
				(e.$eU = (0, w.$wP)(
					"editorBracketHighlight.foreground6",
					"#00000000",
					t.localize(725, null),
				)),
				(e.$fU = (0, w.$wP)(
					"editorBracketHighlight.unexpectedBracket.foreground",
					{
						dark: new i.$UL(new i.$RL(255, 18, 18, 0.8)),
						light: new i.$UL(new i.$RL(255, 18, 18, 0.8)),
						hcDark: "new Color(new RGBA(255, 50, 50, 1))",
						hcLight: "#B5200D",
					},
					t.localize(726, null),
				)),
				(e.$gU = (0, w.$wP)(
					"editorBracketPairGuide.background1",
					"#00000000",
					t.localize(727, null),
				)),
				(e.$hU = (0, w.$wP)(
					"editorBracketPairGuide.background2",
					"#00000000",
					t.localize(728, null),
				)),
				(e.$iU = (0, w.$wP)(
					"editorBracketPairGuide.background3",
					"#00000000",
					t.localize(729, null),
				)),
				(e.$jU = (0, w.$wP)(
					"editorBracketPairGuide.background4",
					"#00000000",
					t.localize(730, null),
				)),
				(e.$kU = (0, w.$wP)(
					"editorBracketPairGuide.background5",
					"#00000000",
					t.localize(731, null),
				)),
				(e.$lU = (0, w.$wP)(
					"editorBracketPairGuide.background6",
					"#00000000",
					t.localize(732, null),
				)),
				(e.$mU = (0, w.$wP)(
					"editorBracketPairGuide.activeBackground1",
					"#00000000",
					t.localize(733, null),
				)),
				(e.$nU = (0, w.$wP)(
					"editorBracketPairGuide.activeBackground2",
					"#00000000",
					t.localize(734, null),
				)),
				(e.$oU = (0, w.$wP)(
					"editorBracketPairGuide.activeBackground3",
					"#00000000",
					t.localize(735, null),
				)),
				(e.$pU = (0, w.$wP)(
					"editorBracketPairGuide.activeBackground4",
					"#00000000",
					t.localize(736, null),
				)),
				(e.$qU = (0, w.$wP)(
					"editorBracketPairGuide.activeBackground5",
					"#00000000",
					t.localize(737, null),
				)),
				(e.$rU = (0, w.$wP)(
					"editorBracketPairGuide.activeBackground6",
					"#00000000",
					t.localize(738, null),
				)),
				(e.$sU = (0, w.$wP)(
					"editorUnicodeHighlight.border",
					w.$jQ,
					t.localize(739, null),
				)),
				(e.$tU = (0, w.$wP)(
					"editorUnicodeHighlight.background",
					w.$iQ,
					t.localize(740, null),
				)),
				(0, E.$oP)((m, r) => {
					const u = m.getColor(w.$8P),
						a = m.getColor(e.$rT),
						h = a && !a.isTransparent() ? a : u;
					h &&
						r.addRule(
							`.monaco-editor .inputarea.ime-input { background-color: ${h}; }`,
						);
				});
		}),
		