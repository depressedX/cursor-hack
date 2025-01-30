import '../../../../../require.js';
import '../../../../../exports.js';
import './hoverActions.js';
import '../../../browser/editorExtensions.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import './hoverTypes.js';
import './markdownHoverParticipant.js';
import './markerHoverParticipant.js';
import './contentHoverController2.js';
import './marginHoverController.js';
import '../../../../platform/accessibility/browser/accessibleViewRegistry.js';
import './hoverAccessibleViews.js';
import '../../../../css!vs/editor/contrib/hover/browser/hover.js';
define(
			de[4115],
			he([1, 0, 3609, 46, 51, 35, 368, 820, 4114, 448, 603, 412, 3608, 905]),
			function (ce /*require*/,
 e /*exports*/,
 t /*hoverActions*/,
 i /*editorExtensions*/,
 w /*colorRegistry*/,
 E /*themeService*/,
 C /*hoverTypes*/,
 d /*markdownHoverParticipant*/,
 m /*markerHoverParticipant*/,
 r /*contentHoverController2*/,
 u /*marginHoverController*/,
 a /*accessibleViewRegistry*/,
 h /*hoverAccessibleViews*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, i.$qtb)(
						r.$whc.ID,
						r.$whc,
						i.EditorContributionInstantiation.BeforeFirstInteraction,
					),
					(0, i.$qtb)(
						u.$2Ob.ID,
						u.$2Ob,
						i.EditorContributionInstantiation.BeforeFirstInteraction,
					),
					(0, i.$ntb)(t.$0hc),
					(0, i.$ntb)(t.$$hc),
					(0, i.$ntb)(t.$_hc),
					(0, i.$ntb)(t.$aic),
					(0, i.$ntb)(t.$bic),
					(0, i.$ntb)(t.$cic),
					(0, i.$ntb)(t.$dic),
					(0, i.$ntb)(t.$eic),
					(0, i.$ntb)(t.$fic),
					(0, i.$ntb)(t.$gic),
					(0, i.$ntb)(t.$hic),
					(0, i.$ntb)(t.$iic),
					C.$5Bb.register(d.$hhc),
					C.$5Bb.register(m.$ric),
					(0, E.$oP)((c, n) => {
						const g = c.getColor(w.$HQ);
						g &&
							(n.addRule(
								`.monaco-editor .monaco-hover .hover-row:not(:first-child):not(:empty) { border-top: 1px solid ${g.transparent(0.5)}; }`,
							),
							n.addRule(
								`.monaco-editor .monaco-hover hr { border-top: 1px solid ${g.transparent(0.5)}; }`,
							),
							n.addRule(
								`.monaco-editor .monaco-hover hr { border-bottom: 0px solid ${g.transparent(0.5)}; }`,
							));
					}),
					a.$Whc.register(new h.$sic()),
					a.$Whc.register(new h.$tic()),
					a.$Whc.register(new h.$wic());
			},
		),
		