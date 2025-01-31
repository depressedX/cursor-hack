import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/constants.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../browser/parts/editor/editorPane.js';
import '../../../common/editor/editorInput.js';
import '../../../common/theme.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/network.js';
import './aiReader.js';
define(
			de[1710],
			he([1, 0, 7, 58, 3, 21, 32, 35, 217, 223, 123, 9, 23, 788]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*constants*/,
 w /*lifecycle*/,
 E /*storage*/,
 C /*telemetry*/,
 d /*themeService*/,
 m /*editorPane*/,
 r /*editorInput*/,
 u /*theme*/,
 a /*uri*/,
 h /*network*/,
 c /*aiReader*/) {
				"use strict";
				var n;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sZc = e.$rZc = e.$qZc = e.$pZc = void 0);
				const g = "workbench.editor.aireader";
				class p {
					canSerialize(l) {
						return l instanceof o;
					}
					serialize(l) {
						if (l instanceof o) return JSON.stringify({ state: "reader" });
					}
					deserialize(l, y) {
						try {
							return l.createInstance(o);
						} catch {
							return;
						}
					}
				}
				e.$pZc = p;
				class o extends r.$LO {
					static {
						this.ID = "workbench.editor.aireader.input";
					}
					get typeId() {
						return o.ID;
					}
					get resource() {
						return a.URI.from({
							scheme: h.Schemas.aiReader,
							path: "cursor/aireader",
						});
					}
					constructor() {
						super();
					}
					matches(l) {
						return super.matches(l) ? !0 : l instanceof o;
					}
					getName() {
						return "AI Reader";
					}
				}
				e.$qZc = o;
				let f = class extends m.$JEb {
					static {
						n = this;
					}
					static {
						this.ID = g;
					}
					constructor(l, y, $, v, S) {
						super(n.ID, l, y, $, v), (this.f = S);
					}
					Y(l) {
						l.classList.add("aireader-pane"),
							(this.c = (0, t.$fhb)(l, (0, t.$)(`.${i.$cX}`))),
							(this.c.tabIndex = 0),
							(this.c.style.outline = "none"),
							this.c.setAttribute("role", "document"),
							(this.c.style.width = "100%"),
							(this.c.style.height = "100%"),
							(this.c.style.backgroundColor =
								this.n.getColorTheme().getColor(u.$wGb)?.toString() ?? ""),
							this.j();
					}
					async setInput(l, y, $, v) {
						await super.setInput(l, y, $, v), this.j();
					}
					layout(l, y) {
						this.a = l;
					}
					dispose() {
						this.b?.dispose(), super.dispose();
					}
					j() {
						this.c !== void 0 && (this.b || (this.b = this.f.render(this.c)));
					}
				};
				(e.$rZc = f),
					(e.$rZc =
						f =
						n =
							Ne([j(1, C.$km), j(2, d.$iP), j(3, E.$lq), j(4, c.$Jcc)], f));
				class b extends w.$1c {
					static {
						this.ID = "editor.contrib.aireader";
					}
					constructor(l) {
						super(), (this.a = l);
					}
				}
				e.$sZc = b;
			},
		)
