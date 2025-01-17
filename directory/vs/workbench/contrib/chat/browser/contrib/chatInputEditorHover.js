import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../editor/common/core/range.js';
import '../../../../../editor/contrib/hover/browser/hoverTypes.js';
import '../../../../../platform/commands/common/commands.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../chat.js';
import '../chatAgentHover.js';
import './editorHoverWrapper.js';
import '../../common/chatParserTypes.js';
import '../../../../../nls.js';
define(
			de[4074],
			he([1, 0, 3, 17, 368, 31, 5, 208, 1353, 3011, 329, 4]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$VIc = e.$UIc = void 0),
					(a = mt(a));
				let h = class {
					constructor(g, p, o, f) {
						(this.a = g),
							(this.b = p),
							(this.c = o),
							(this.d = f),
							(this.hoverOrdinal = 1);
					}
					computeSync(g, p) {
						if (!this.a.hasModel()) return [];
						const o = this.c.getWidgetByInputUri(this.a.getModel().uri);
						if (!o) return [];
						const { agentPart: f } = (0, u.$Z2)(o.parsedInput);
						return f
							? i.$iL.containsPosition(
									f.editorRange,
									g.range.getStartPosition(),
								)
								? [new c(this, i.$iL.lift(f.editorRange), f.agent)]
								: []
							: [];
					}
					renderHoverParts(g, p) {
						if (!p.length) return new w.$4Bb([]);
						const o = new t.$Zc(),
							f = o.add(this.b.createInstance(m.$2Tb));
						o.add(f.onDidChangeContents(() => g.onContentsChanged()));
						const b = p[0],
							s = b.agent;
						f.setAgent(s.id);
						const l = (0, m.$3Tb)(() => s, this.d).actions,
							$ = this.b.createInstance(r.$TIc, f.domNode, l).domNode;
						g.fragment.appendChild($);
						const v = {
							hoverPart: b,
							hoverElement: $,
							dispose() {
								o.dispose();
							},
						};
						return new w.$4Bb([v]);
					}
					getAccessibleContent(g) {
						return a.localize(4736, null);
					}
				};
				(e.$UIc = h),
					(e.$UIc = h = Ne([j(1, C.$Li), j(2, d.$GYb), j(3, E.$ek)], h));
				class c {
					constructor(g, p, o) {
						(this.owner = g), (this.range = p), (this.agent = o);
					}
					isValidForHoverAnchor(g) {
						return (
							g.type === w.HoverAnchorType.Range &&
							this.range.startColumn <= g.range.startColumn &&
							this.range.endColumn >= g.range.endColumn
						);
					}
				}
				(e.$VIc = c), w.$5Bb.register(h);
			},
		),
		