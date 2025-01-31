import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/hover/hoverWidget.js';
import '../../../../base/common/codiconsLibrary.js';
import '../../../../base/common/lazy.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../services/userDataProfile/browser/iconSelectBox.js';
define(
			de[3752],
			he([1, 0, 7, 160, 1506, 149, 3, 72, 5, 106, 79, 1896]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*hoverWidget*/,
 w /*codiconsLibrary*/,
 E /*lazy*/,
 C /*lifecycle*/,
 d /*hover*/,
 m /*instantiation*/,
 r /*defaultStyles*/,
 u /*iconRegistry*/,
 a /*iconSelectBox*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$jVc = void 0);
				const h = new E.$Y(() => {
					const n = (0, u.$_O)().getIcons(),
						g = new Set();
					return n.filter((o) =>
						o.id === w.$0j.blank.id ||
						!("fontCharacter" in o.defaults) ||
						g.has(o.defaults.fontCharacter)
							? !1
							: (g.add(o.defaults.fontCharacter), !0),
					);
				});
				let c = class extends C.$1c {
					constructor(g, p) {
						super(),
							(this.b = p),
							(this.a = g.createInstance(a.$iVc, {
								icons: h.value,
								inputBoxStyles: r.$wyb,
								showIconInfo: !0,
							}));
					}
					async pickIcons() {
						const g = new t.$pgb(486, 260);
						return new Promise((p) => {
							this.D(
								this.a.onDidSelect((f) => {
									p(f), this.a.dispose();
								}),
							),
								this.a.clearInput();
							const o = this.b.showHover(
								{
									content: this.a.domNode,
									target: (0, t.$Ngb)().body,
									position: { hoverPosition: i.HoverPosition.BELOW },
									persistence: { sticky: !0 },
									appearance: { showPointer: !0 },
								},
								!0,
							);
							o && this.D(o), this.a.layout(g), this.a.focus();
						});
					}
				};
				(e.$jVc = c), (e.$jVc = c = Ne([j(0, m.$Li), j(1, d.$Uyb)], c));
			},
		)
