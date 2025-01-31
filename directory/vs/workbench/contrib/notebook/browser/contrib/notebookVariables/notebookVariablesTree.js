import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/browser/dom.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../nls.js';
import '../../../../../../platform/hover/browser/hover.js';
import '../../../../../../platform/list/browser/listService.js';
import '../../../../debug/browser/baseDebugView.js';
define(
			de[3830],
			he([1, 0, 7, 3, 4, 72, 93, 629]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*lifecycle*/,
 w /*nls*/,
 E /*hover*/,
 C /*listService*/,
 d /*baseDebugView*/) {
				"use strict";
				var m;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kIc = e.$jIc = e.$iIc = e.$hIc = void 0),
					(t = mt(t));
				const r = t.$,
					u = 1024;
				class a extends C.$CMb {}
				e.$hIc = a;
				class h {
					getHeight(p) {
						return 22;
					}
					getTemplateId(p) {
						return c.ID;
					}
				}
				e.$iIc = h;
				let c = class {
					static {
						m = this;
					}
					static {
						this.ID = "variableElement";
					}
					get templateId() {
						return m.ID;
					}
					constructor(p) {
						this.a = p;
					}
					renderTemplate(p) {
						const o = t.$fhb(p, r(".expression")),
							f = t.$fhb(o, r("span.name")),
							b = t.$fhb(o, r("span.value"));
						return {
							expression: o,
							name: f,
							value: b,
							elementDisposables: new i.$Zc(),
						};
					}
					renderElement(p, o, f) {
						const b =
							p.element.value.trim() !== ""
								? `${p.element.name}:`
								: p.element.name;
						(f.name.textContent = b),
							(f.name.title = p.element.type ?? ""),
							(0, d.$dIc)(
								f.elementDisposables,
								p.element,
								f.value,
								{ colorize: !0, maxValueLength: u },
								this.a,
							);
					}
					disposeElement(p, o, f, b) {
						f.elementDisposables.clear();
					}
					disposeTemplate(p) {
						p.elementDisposables.dispose();
					}
				};
				(e.$jIc = c), (e.$jIc = c = m = Ne([j(0, E.$Uyb)], c));
				class n {
					getWidgetAriaLabel() {
						return (0, w.localize)(7798, null);
					}
					getAriaLabel(p) {
						return (0, w.localize)(7799, null, p.name, p.value);
					}
				}
				e.$kIc = n;
			},
		)
