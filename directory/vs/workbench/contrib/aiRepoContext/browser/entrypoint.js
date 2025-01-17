import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import './components/customChoicePopup.js';
import './components/dangerousActionPopup.js';
import '../../controlCommon/browser/solid.js';
define(
			de[4336],
			he([1, 0, 2, 4335, 1966, 36]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$lZc = C),
					(e.$mZc = d);
				function C({
					container: m,
					instantiationService: r,
					onClose: u,
					dangerousActionType: a,
					dangerousActionParams: h,
				}) {
					return (0, E.$ndc)(
						() =>
							(0, t.createComponent)(w.$X8b, {
								dangerousActionType: a,
								dangerousActionParams: h,
							}),
						m,
						r,
						{ onClose: u },
					);
				}
				function d({
					container: m,
					instantiationService: r,
					onClose: u,
					...a
				}) {
					return (0, E.$ndc)(() => (0, t.createComponent)(i.$28b, a), m, r, {
						onClose: u,
					});
				}
			},
		),
		