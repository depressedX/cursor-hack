import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../ui/browser/ModalComponent.js';
import '../../../../ui/browser/simpleButton/simpleButton.js';
define(
			de[4229],
			he([1, 0, 2, 2, 2, 2, 815, 147]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$BDc = r);
				const m = (0, t.template)(
					"<div><h3>Enable <!> API Key</h3><div>Are you sure you want to enable your own <!> API key? Several of Cursor's features require custom models (Tab, Apply from Chat, Composer), which cannot be billed to an API key.</div><div>",
				);
				function r(u) {
					return (0, i.createComponent)(C.$fzc, {
						get isOpen() {
							return !!u.apiName && u.isOpen;
						},
						get onClose() {
							return u.onClose;
						},
						get children() {
							const a = m(),
								h = a.firstChild,
								c = h.firstChild,
								n = c.nextSibling,
								g = n.nextSibling,
								p = h.nextSibling,
								o = p.firstChild,
								f = o.nextSibling,
								b = f.nextSibling,
								s = p.nextSibling;
							return (
								a.style.setProperty("display", "flex"),
								a.style.setProperty("flex-direction", "column"),
								a.style.setProperty("gap", "8px"),
								h.style.setProperty("margin", "0"),
								(0, w.insert)(h, () => u.apiName, n),
								(0, w.insert)(p, () => u.apiName, f),
								s.style.setProperty("display", "flex"),
								s.style.setProperty("justify-content", "flex-end"),
								s.style.setProperty("gap", "8px"),
								(0, w.insert)(
									s,
									(0, i.createComponent)(d.$rdc, {
										type: "secondary",
										get onClick() {
											return u.onClose;
										},
										children: "Cancel",
									}),
									null,
								),
								(0, w.insert)(
									s,
									(0, i.createComponent)(d.$rdc, {
										get onClick() {
											return u.onConfirm;
										},
										get children() {
											return [
												"Enable ",
												(0, E.memo)(() => u.apiName),
												" API Key",
											];
										},
									}),
									null,
								),
								a
							);
						},
					});
				}
			},
		),
		