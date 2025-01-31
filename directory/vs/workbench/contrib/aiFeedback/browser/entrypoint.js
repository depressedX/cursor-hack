import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../controlCommon/browser/solid.js';
import './components/feedbackPane.js';
import '../../../../base/common/constants.js';
import '../../../../base/common/uuid.js';
define(
			de[4311],
			he([1, 0, 2, 36, 4310, 58, 47]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*solid*/,
 w /*feedbackPane*/,
 E /*constants*/,
 C /*uuid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$YZc = d);
				function d(m, r, u, a, h) {
					const c = (0, C.$9g)(),
						n = (g, p, o, f, b) => {
							const s = {
								bugId: c,
								bug: p,
								priority: g,
								protoURL: "",
								contactEmail: o,
								includeConsoleLogs: f,
								screenshots: b,
							};
							u.executeCommand(
								"cursor.publicLogCapture",
								"submitted.feedbackpane",
							),
								u
									.executeCommand(E.$qX, s)
									.then(() => {
										h?.();
									})
									.catch((l) => {
										console.error(l);
									});
						};
					return (0, i.$ndc)(
						() =>
							(0, t.createComponent)(w.$XZc, {
								closePane: () => {
									a.activeEditorPane?.focus(), h?.();
								},
								onSubmit: (...g) => {
									a.activeEditorPane?.focus(), n(...g);
								},
							}),
						m,
						r,
					);
				}
			},
		)
