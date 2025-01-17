import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/browser/editorExtensions.js';
define(de[394], he([1, 0, 27, 3, 46]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$_Xb = void 0);
			class E extends i.$1c {
				static {
					this.ID = "editor.contrib.menuPreventer";
				}
				constructor(d) {
					super(),
						(this.a = d),
						(this.b = !1),
						(this.c = !1),
						this.D(
							this.a.onMouseDown((m) => {
								this.b && (this.c = !0);
							}),
						),
						this.D(
							this.a.onKeyDown((m) => {
								m.equals(t.KeyMod.Alt) &&
									(this.b || (this.c = !1), (this.b = !0));
							}),
						),
						this.D(
							this.a.onKeyUp((m) => {
								m.equals(t.KeyMod.Alt) &&
									(this.c && m.preventDefault(), (this.b = !1), (this.c = !1));
							}),
						);
				}
			}
			(e.$_Xb = E),
				(0, w.$qtb)(
					E.ID,
					E,
					w.EditorContributionInstantiation.BeforeFirstInteraction,
				);
		}),
		