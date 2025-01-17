import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/browser/ui/hover/hoverWidget.js';
import '../../../../../platform/keybinding/common/keybinding.js';
import '../../../../../css!vs/workbench/contrib/chat/browser/contrib/media/editorHoverWrapper.js';
define(de[3011], he([1, 0, 7, 160, 39, 2392]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$TIc = void 0),
				(t = mt(t));
			const E = t.$,
				C = t.h;
			let d = class {
				constructor(r, u, a) {
					this.a = a;
					const h = C(".chat-editor-hover-wrapper@root", [
						C(".chat-editor-hover-wrapper-content@content"),
					]);
					if (
						((this.domNode = h.root),
						h.content.appendChild(r),
						u && u.length > 0)
					) {
						const c = E(".hover-row.status-bar"),
							n = E(".actions");
						u.forEach((g) => {
							const p = this.a.lookupKeybinding(g.commandId),
								o = p ? p.getLabel() : null;
							i.$0hb.render(
								n,
								{
									label: g.label,
									commandId: g.commandId,
									run: (f) => {
										g.run(f);
									},
									iconClass: g.iconClass,
								},
								o,
							);
						}),
							c.appendChild(n),
							this.domNode.appendChild(c);
					}
				}
			};
			(e.$TIc = d), (e.$TIc = d = Ne([j(2, w.$uZ)], d));
		}),
		