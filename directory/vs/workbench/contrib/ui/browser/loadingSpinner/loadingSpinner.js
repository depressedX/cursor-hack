import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../css!vs/workbench/contrib/ui/browser/loadingSpinner/loadingSpinner.js';
define(de[295], he([1, 0, 2, 2, 2, 2519]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Z8b = e.$Y8b = void 0);
			const E = (0, t.template)("<div>"),
				C = (m) =>
					(() => {
						const r = E();
						return (
							(0, i.spread)(
								r,
								(0, w.mergeProps)(
									{
										get class() {
											return (
												"cursorLoadingBackground" +
												(m.onInputBackground
													? " cursorLoadingInputBackground"
													: "") +
												(m.class ? ` ${m.class}` : "")
											);
										},
									},
									() => m.extras,
								),
								!1,
								!1,
							),
							r
						);
					})();
			e.$Y8b = C;
			const d = (m) =>
				(() => {
					const r = E();
					return (
						(0, i.spread)(
							r,
							(0, w.mergeProps)(
								{
									get class() {
										return (
											"cursorLoadingBackground cursorLoadingBackgroundSubtle" +
											(m.onInputBackground
												? " cursorLoadingInputBackground cursorLoadingInputBackgroundSubtle"
												: "") +
											(m.onPrimaryButton
												? " cursorLoadingBackgroundLight cursorLoadingBackgroundSubtleLight"
												: "") +
											(m.small ? " cursorLoadingBackgroundSmall" : "") +
											(m.class ? ` ${m.class}` : "")
										);
									},
								},
								() => m.extras,
							),
							!1,
							!1,
						),
						r
					);
				})();
			e.$Z8b = d;
		}),
		