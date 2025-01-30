import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../composerCapabilities.js';
import '../../../../services/selectedContext/browser/components/ContextPills.js';
import './ComposerConstantSizeStatusIndicator.js';
define(
			de[4397],
			he([1, 0, 2, 2, 2, 13, 262, 573, 3205]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*solid*/,
 C /*composerCapabilities*/,
 d /*ContextPills*/,
 m /*ComposerConstantSizeStatusIndicator*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerCapabilitiesMessage = u);
				const r = (0, t.template)("<div>");
				function u(a) {
					const h = (0, E.createMemo)(() => a.status ?? []),
						c = (0, E.createMemo)(() =>
							h().some((n) => n.status === "generating"),
						);
					return (() => {
						const n = r();
						return (
							n.style.setProperty("display", "flex"),
							n.style.setProperty("align-items", "center"),
							n.style.setProperty("flex-wrap", "wrap"),
							n.style.setProperty("gap", "4px"),
							(0, i.insert)(
								n,
								(0, w.createComponent)(E.For, {
									get each() {
										return h();
									},
									children: (g) =>
										(0, w.createComponent)(d.$ibc, {
											type: "*",
											get extraString() {
												return C.capabilityTypeLabels[g.type];
											},
											get iconOverride() {
												return C.capabilityTypeIcons[g.type];
											},
											get rightElement() {
												return (0, w.createComponent)(
													m.ComposerConstantSizeStatusIndicator,
													{
														get status() {
															return g.status === "completed"
																? "accepted"
																: g.status;
														},
													},
												);
											},
										}),
								}),
							),
							n
						);
					})();
				}
			},
		),
		