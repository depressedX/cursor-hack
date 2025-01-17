import '../../../../../../require.js';
import '../../../../../../exports.js';
import './vs_code_editor_walkthrough.js';
import '../../../../../nls.js';
import '../../../../services/editor/common/editorService.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../walkThroughInput.js';
import '../../../../../base/common/network.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/action/common/actionCommonCategories.js';
import '../../common/walkThroughContentProvider.js';
define(
		de[3283],
		he([1, 0, 3282, 4, 18, 5, 1277, 23, 11, 99, 1276]),
		function (ce, e, t, i, w, E, C, d, m, r, u) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$yYc = e.$xYc = void 0),
				(t = xi(t)),
				u.$lYc.registerProvider(
					"vs/workbench/contrib/welcomeWalkthrough/browser/editor/vs_code_editor_walkthrough",
					t.default,
				);
			const a = "workbench.editors.walkThroughInput",
				h = {
					typeId: a,
					name: (0, i.localize)(11657, null),
					resource: d.$7g
						.asBrowserUri(
							"vs/workbench/contrib/welcomeWalkthrough/browser/editor/vs_code_editor_walkthrough.md",
						)
						.with({
							scheme: d.Schemas.walkThrough,
							query: JSON.stringify({
								moduleId:
									"vs/workbench/contrib/welcomeWalkthrough/browser/editor/vs_code_editor_walkthrough",
							}),
						}),
					telemetryFrom: "walkThrough",
				};
			class c extends m.$3X {
				static {
					this.ID = "workbench.action.showInteractivePlayground";
				}
				static {
					this.LABEL = (0, i.localize2)(11658, "Interactive Editor Playground");
				}
				constructor() {
					super({
						id: c.ID,
						title: c.LABEL,
						category: r.$ck.Help,
						f1: !0,
						metadata: {
							description: (0, i.localize2)(
								11659,
								"Opens an interactive playground for learning about the editor.",
							),
						},
					});
				}
				run(p) {
					const o = p.get(w.$IY),
						b = p.get(E.$Li).createInstance(C.$oYc, h);
					return o.openEditor(b, { pinned: !0 }).then(() => {});
				}
			}
			e.$xYc = c;
			class n {
				static {
					this.ID = a;
				}
				canSerialize(p) {
					return !0;
				}
				serialize(p) {
					return "";
				}
				deserialize(p) {
					return p.createInstance(C.$oYc, h);
				}
			}
			e.$yYc = n;
		},
	);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	