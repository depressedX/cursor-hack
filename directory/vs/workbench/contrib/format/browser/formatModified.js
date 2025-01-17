import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/cancellation.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/editorContextKeys.js';
import '../../../../editor/common/model.js';
import '../../../../editor/common/services/editorWorker.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../editor/contrib/format/browser/format.js';
import '../../../../nls.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/progress/common/progress.js';
import '../../scm/browser/dirtydiffDecorator.js';
import '../../scm/common/quickDiff.js';
define(
			de[1885],
			he([1, 0, 24, 33, 46, 17, 71, 64, 200, 42, 674, 4, 8, 5, 84, 1884, 803]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$RXc = o),
					(a = mt(a)),
					(0, w.$ntb)(
						class extends w.$itb {
							constructor() {
								super({
									id: "editor.action.formatChanges",
									label: a.localize(7067, null),
									alias: "Format Modified Lines",
									precondition: h.$Kj.and(
										C.EditorContextKeys.writable,
										C.EditorContextKeys.hasDocumentSelectionFormattingProvider,
									),
								});
							}
							async run(b, s) {
								const l = b.get(c.$Li);
								if (!s.hasModel()) return;
								const y = await l.invokeFunction(o, s.getModel());
								if ((0, t.$Pb)(y))
									return l.invokeFunction(
										u.$Lhc,
										s,
										y,
										u.FormattingMode.Explicit,
										n.$0N.None,
										i.CancellationToken.None,
										!0,
									);
							}
						},
					);
				async function o(f, b) {
					const s = f.get(p.$8mc),
						l = f.get(m.$Cxb),
						y = f.get(r.$MO),
						$ = await (0, g.$enc)(s, b.uri, b.getLanguageId(), (0, d.$TN)(b));
					if (!$) return null;
					const v = [],
						S = await y.createModelReference($);
					try {
						if (!l.canComputeDirtyDiff($, b.uri)) return;
						const I = await l.computeDirtyDiff($, b.uri, !1);
						if (!(0, t.$Pb)(I)) return;
						for (const T of I)
							v.push(
								b.validateRange(
									new E.$iL(
										T.modifiedStartLineNumber,
										1,
										T.modifiedEndLineNumber || T.modifiedStartLineNumber,
										Number.MAX_SAFE_INTEGER,
									),
								),
							);
					} finally {
						S.dispose();
					}
					return v;
				}
			},
		),
		