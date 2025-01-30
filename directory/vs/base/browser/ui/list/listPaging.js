import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/arrays.js';
import '../../../common/cancellation.js';
import '../../../common/event.js';
import '../../../common/lifecycle.js';
import './listWidget.js';
import '../../dom.js';
import '../../../../css!vs/base/browser/ui/list/list.js';
define(
			de[1578],
			he([1, 0, 24, 33, 6, 3, 278, 7, 1512]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*cancellation*/,
 w /*event*/,
 E /*lifecycle*/,
 C /*listWidget*/,
 d /*dom*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$8ob = void 0);
				class m {
					get templateId() {
						return this.a.templateId;
					}
					constructor(c, n) {
						(this.a = c), (this.b = n);
					}
					renderTemplate(c) {
						return { data: this.a.renderTemplate(c), disposable: E.$1c.None };
					}
					renderElement(c, n, g, p) {
						if ((g.disposable?.dispose(), !g.data)) return;
						const o = this.b();
						if (o.isResolved(c))
							return this.a.renderElement(o.get(c), c, g.data, p);
						const f = new i.$Ce(),
							b = o.resolve(c, f.token);
						(g.disposable = { dispose: () => f.cancel() }),
							this.a.renderPlaceholder(c, g.data),
							b.then((s) => this.a.renderElement(s, c, g.data, p));
					}
					disposeTemplate(c) {
						c.disposable && (c.disposable.dispose(), (c.disposable = void 0)),
							c.data && (this.a.disposeTemplate(c.data), (c.data = void 0));
					}
				}
				class r {
					constructor(c, n) {
						(this.a = c), (this.b = n);
					}
					getWidgetAriaLabel() {
						return this.b.getWidgetAriaLabel();
					}
					getAriaLabel(c) {
						const n = this.a();
						return n.isResolved(c) ? this.b.getAriaLabel(n.get(c)) : null;
					}
				}
				function u(h, c) {
					return {
						...c,
						accessibilityProvider:
							c.accessibilityProvider && new r(h, c.accessibilityProvider),
					};
				}
				class a {
					constructor(c, n, g, p, o = {}) {
						const f = () => this.model,
							b = p.map((s) => new m(s, f));
						this.a = new C.List(c, n, g, b, u(f, o));
					}
					updateOptions(c) {
						this.a.updateOptions(c);
					}
					getHTMLElement() {
						return this.a.getHTMLElement();
					}
					isDOMFocused() {
						return (0, d.$Kgb)(this.getHTMLElement());
					}
					domFocus() {
						this.a.domFocus();
					}
					get onDidFocus() {
						return this.a.onDidFocus;
					}
					get onDidBlur() {
						return this.a.onDidBlur;
					}
					get widget() {
						return this.a;
					}
					get onDidDispose() {
						return this.a.onDidDispose;
					}
					get onMouseClick() {
						return w.Event.map(
							this.a.onMouseClick,
							({ element: c, index: n, browserEvent: g }) => ({
								element: c === void 0 ? void 0 : this.b.get(c),
								index: n,
								browserEvent: g,
							}),
						);
					}
					get onMouseDblClick() {
						return w.Event.map(
							this.a.onMouseDblClick,
							({ element: c, index: n, browserEvent: g }) => ({
								element: c === void 0 ? void 0 : this.b.get(c),
								index: n,
								browserEvent: g,
							}),
						);
					}
					get onTap() {
						return w.Event.map(
							this.a.onTap,
							({ element: c, index: n, browserEvent: g }) => ({
								element: c === void 0 ? void 0 : this.b.get(c),
								index: n,
								browserEvent: g,
							}),
						);
					}
					get onPointer() {
						return w.Event.map(
							this.a.onPointer,
							({ element: c, index: n, browserEvent: g }) => ({
								element: c === void 0 ? void 0 : this.b.get(c),
								index: n,
								browserEvent: g,
							}),
						);
					}
					get onDidChangeFocus() {
						return w.Event.map(
							this.a.onDidChangeFocus,
							({ elements: c, indexes: n, browserEvent: g }) => ({
								elements: c.map((p) => this.b.get(p)),
								indexes: n,
								browserEvent: g,
							}),
						);
					}
					get onDidChangeSelection() {
						return w.Event.map(
							this.a.onDidChangeSelection,
							({ elements: c, indexes: n, browserEvent: g }) => ({
								elements: c.map((p) => this.b.get(p)),
								indexes: n,
								browserEvent: g,
							}),
						);
					}
					get onContextMenu() {
						return w.Event.map(
							this.a.onContextMenu,
							({ element: c, index: n, anchor: g, browserEvent: p }) =>
								typeof c > "u"
									? { element: c, index: n, anchor: g, browserEvent: p }
									: {
											element: this.b.get(c),
											index: n,
											anchor: g,
											browserEvent: p,
										},
						);
					}
					get model() {
						return this.b;
					}
					set model(c) {
						(this.b = c), this.a.splice(0, this.a.length, (0, t.$Vb)(c.length));
					}
					get length() {
						return this.a.length;
					}
					get scrollTop() {
						return this.a.scrollTop;
					}
					set scrollTop(c) {
						this.a.scrollTop = c;
					}
					get scrollLeft() {
						return this.a.scrollLeft;
					}
					set scrollLeft(c) {
						this.a.scrollLeft = c;
					}
					setAnchor(c) {
						this.a.setAnchor(c);
					}
					getAnchor() {
						return this.a.getAnchor();
					}
					setFocus(c) {
						this.a.setFocus(c);
					}
					focusNext(c, n) {
						this.a.focusNext(c, n);
					}
					focusPrevious(c, n) {
						this.a.focusPrevious(c, n);
					}
					focusNextPage() {
						return this.a.focusNextPage();
					}
					focusPreviousPage() {
						return this.a.focusPreviousPage();
					}
					focusLast() {
						this.a.focusLast();
					}
					focusFirst() {
						this.a.focusFirst();
					}
					getFocus() {
						return this.a.getFocus();
					}
					setSelection(c, n) {
						this.a.setSelection(c, n);
					}
					getSelection() {
						return this.a.getSelection();
					}
					getSelectedElements() {
						return this.getSelection().map((c) => this.model.get(c));
					}
					layout(c, n) {
						this.a.layout(c, n);
					}
					triggerTypeNavigation() {
						this.a.triggerTypeNavigation();
					}
					reveal(c, n) {
						this.a.reveal(c, n);
					}
					style(c) {
						this.a.style(c);
					}
					dispose() {
						this.a.dispose();
					}
				}
				e.$8ob = a;
			},
		),
		