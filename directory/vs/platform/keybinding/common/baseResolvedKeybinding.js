import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/errors.js';
import '../../../base/common/keybindingLabels.js';
import '../../../base/common/keybindings.js';
define(de[1187], he([1, 0, 29, 592, 343]), function (ce /*require*/,
 e /*exports*/,
 t /*errors*/,
 i /*keybindingLabels*/,
 w /*keybindings*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$eEc = void 0);
			class E extends w.$xs {
				constructor(d, m) {
					if ((super(), m.length === 0)) throw (0, t.$$)("chords");
					(this.c = d), (this.d = m);
				}
				getLabel() {
					const d = i.$2ob.toLabel(this.c, this.d, (m) => this.f(m));
					return d
						? d
								.replace(/Enter/g, "\u23CE")
								.replace(/Backspace/g, "\u232B")
								.replace(/Space/g, "\u2423")
								.replace(/Escape/g, "Esc")
						: null;
				}
				getAriaLabel() {
					return i.$3ob.toLabel(this.c, this.d, (d) => this.g(d));
				}
				isProperPrefixOf(d) {
					if (!(d instanceof E) || d.d.length <= this.d.length) return !1;
					for (let m = 0; m < this.d.length; m++)
						if (!this.d[m].equals(d.d[m])) return !1;
					return !0;
				}
				replacePrefixAndGetUserSettingsLabel(d, m) {
					if (
						!(d instanceof E) ||
						!(m instanceof E) ||
						!d.isProperPrefixOf(this)
					)
						return null;
					const r = [...m.d, ...this.d.slice(d.d.length)];
					return this.getUserSettingsLabel(r);
				}
				getElectronAccelerator() {
					return this.d.length > 1 || this.d[0].isDuplicateModifierCase()
						? null
						: i.$4ob.toLabel(this.c, this.d, (d) => this.h(d));
				}
				getUserSettingsLabel(d) {
					return i.$5ob.toLabel(this.c, d ?? this.d, (m) => this.l(m));
				}
				isWYSIWYG() {
					return this.d.every((d) => this.m(d));
				}
				hasMultipleChords() {
					return this.d.length > 1;
				}
				getChords() {
					return this.d.map((d) => this.e(d));
				}
				e(d) {
					return new w.$ws(
						d.ctrlKey,
						d.shiftKey,
						d.altKey,
						d.metaKey,
						this.f(d),
						this.g(d),
					);
				}
				getDispatchChords() {
					return this.d.map((d) => this.n(d));
				}
				getSingleModifierDispatchChords() {
					return this.d.map((d) => this.o(d));
				}
			}
			e.$eEc = E;
		}),
		