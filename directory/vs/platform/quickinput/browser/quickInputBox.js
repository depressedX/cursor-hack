import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/browser/dom.js';
import '../../../base/browser/ui/findinput/findInput.js';
import '../../../base/browser/ui/inputbox/inputBox.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/severity.js';
import '../../../css!vs/platform/quickinput/browser/media/quickInput.js';
define(
		de[2750],
		he([1, 0, 7, 932, 292, 3, 111, 1138]),
		function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*findInput*/,
 w /*inputBox*/,
 E /*lifecycle*/,
 C /*severity*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$rxc = void 0),
				(t = mt(t)),
				(C = xi(C));
			const d = t.$;
			class m extends E.$1c {
				constructor(u, a, h) {
					super(),
						(this.c = u),
						(this.onKeyDown = (n) =>
							t.$$fb(this.b.inputBox.inputElement, t.$$gb.KEY_DOWN, n)),
						(this.onMouseDown = (n) =>
							t.$$fb(this.b.inputBox.inputElement, t.$$gb.MOUSE_DOWN, n)),
						(this.onDidChange = (n) => this.b.onDidChange(n)),
						(this.a = t.$fhb(this.c, d(".quick-input-box"))),
						(this.b = this.D(
							new i.$Uob(this.a, void 0, {
								label: "",
								inputBoxStyles: a,
								toggleStyles: h,
							}),
						));
					const c = this.b.inputBox.inputElement;
					(c.role = "combobox"),
						(c.ariaHasPopup = "menu"),
						(c.ariaAutoComplete = "list"),
						(c.ariaExpanded = "true");
				}
				get value() {
					return this.b.getValue();
				}
				set value(u) {
					this.b.setValue(u);
				}
				select(u = null) {
					this.b.inputBox.select(u);
				}
				getSelection() {
					return this.b.inputBox.getSelection();
				}
				isSelectionAtEnd() {
					return this.b.inputBox.isSelectionAtEnd();
				}
				setPlaceholder(u) {
					this.b.inputBox.setPlaceHolder(u);
				}
				get placeholder() {
					return this.b.inputBox.inputElement.getAttribute("placeholder") || "";
				}
				set placeholder(u) {
					this.b.inputBox.setPlaceHolder(u);
				}
				get password() {
					return this.b.inputBox.inputElement.type === "password";
				}
				set password(u) {
					this.b.inputBox.inputElement.type = u ? "password" : "text";
				}
				set enabled(u) {
					this.b.inputBox.inputElement.toggleAttribute("readonly", !u);
				}
				set toggles(u) {
					this.b.setAdditionalToggles(u);
				}
				hasFocus() {
					return this.b.inputBox.hasFocus();
				}
				setAttribute(u, a) {
					this.b.inputBox.inputElement.setAttribute(u, a);
				}
				removeAttribute(u) {
					this.b.inputBox.inputElement.removeAttribute(u);
				}
				showDecoration(u) {
					u === C.default.Ignore
						? this.b.clearMessage()
						: this.b.showMessage({
								type:
									u === C.default.Info
										? w.MessageType.INFO
										: u === C.default.Warning
											? w.MessageType.WARNING
											: w.MessageType.ERROR,
								content: "",
							});
				}
				stylesForType(u) {
					return this.b.inputBox.stylesForType(
						u === C.default.Info
							? w.MessageType.INFO
							: u === C.default.Warning
								? w.MessageType.WARNING
								: w.MessageType.ERROR,
					);
				}
				setFocus() {
					this.b.focus();
				}
				layout() {
					this.b.inputBox.layout();
				}
			}
			e.$rxc = m;
		},
	)
