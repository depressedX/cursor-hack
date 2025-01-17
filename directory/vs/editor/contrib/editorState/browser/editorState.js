import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/strings.js';
import '../../../common/core/range.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/lifecycle.js';
import './keybindingCancellation.js';
define(
			de[439],
			he([1, 0, 37, 17, 33, 3, 2806]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ozb = e.$Nzb = e.$Mzb = e.CodeEditorStateFlag = void 0),
					(t = mt(t));
				var d;
				(function (a) {
					(a[(a.Value = 1)] = "Value"),
						(a[(a.Selection = 2)] = "Selection"),
						(a[(a.Position = 4)] = "Position"),
						(a[(a.Scroll = 8)] = "Scroll");
				})(d || (e.CodeEditorStateFlag = d = {}));
				class m {
					constructor(h, c) {
						if (((this.a = c), this.a & d.Value)) {
							const n = h.getModel();
							this.d = n
								? t.$kf("{0}#{1}", n.uri.toString(), n.getVersionId())
								: null;
						} else this.d = null;
						this.a & d.Position ? (this.b = h.getPosition()) : (this.b = null),
							this.a & d.Selection
								? (this.c = h.getSelection())
								: (this.c = null),
							this.a & d.Scroll
								? ((this.f = h.getScrollLeft()), (this.g = h.getScrollTop()))
								: ((this.f = -1), (this.g = -1));
					}
					h(h) {
						if (!(h instanceof m)) return !1;
						const c = h;
						return !(
							this.d !== c.d ||
							this.f !== c.f ||
							this.g !== c.g ||
							(!this.b && c.b) ||
							(this.b && !c.b) ||
							(this.b && c.b && !this.b.equals(c.b)) ||
							(!this.c && c.c) ||
							(this.c && !c.c) ||
							(this.c && c.c && !this.c.equalsRange(c.c))
						);
					}
					validate(h) {
						return this.h(new m(h, this.a));
					}
				}
				e.$Mzb = m;
				class r extends C.$Lzb {
					constructor(h, c, n, g) {
						super(h, g),
							(this.b = new E.$Zc()),
							c & d.Position &&
								this.b.add(
									h.onDidChangeCursorPosition((p) => {
										(!n || !i.$iL.containsPosition(n, p.position)) &&
											this.cancel();
									}),
								),
							c & d.Selection &&
								this.b.add(
									h.onDidChangeCursorSelection((p) => {
										(!n || !i.$iL.containsRange(n, p.selection)) &&
											this.cancel();
									}),
								),
							c & d.Scroll &&
								this.b.add(h.onDidScrollChange((p) => this.cancel())),
							c & d.Value &&
								(this.b.add(h.onDidChangeModel((p) => this.cancel())),
								this.b.add(h.onDidChangeModelContent((p) => this.cancel())));
					}
					dispose() {
						this.b.dispose(), super.dispose();
					}
				}
				e.$Nzb = r;
				class u extends w.$Ce {
					constructor(h, c) {
						super(c), (this.a = h.onDidChangeContent(() => this.cancel()));
					}
					dispose() {
						this.a.dispose(), super.dispose();
					}
				}
				e.$Ozb = u;
			},
		),
		