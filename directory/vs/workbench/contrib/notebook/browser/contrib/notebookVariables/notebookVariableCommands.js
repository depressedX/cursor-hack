import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/cancellation.js';
import '../../../../../../base/common/uri.js';
import '../../../../../../nls.js';
import '../../../../../../platform/actions/common/actions.js';
import '../../../../../../platform/clipboard/common/clipboardService.js';
import '../../../common/notebookKernelService.js';
import '../../../common/notebookService.js';
define(
			de[3118],
			he([1, 0, 33, 9, 4, 11, 121, 243, 161]),
			function (ce /*require*/,
 e /*exports*/,
 t /*cancellation*/,
 i /*uri*/,
 w /*nls*/,
 E /*actions*/,
 C /*clipboardService*/,
 d /*notebookKernelService*/,
 m /*notebookService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mRc = e.$lRc = void 0),
					(e.$lRc =
						"workbench.debug.viewlet.action.copyWorkspaceVariableValue"),
					(e.$mRc = (0, w.localize)(7794, null)),
					(0, E.$4X)(
						class extends E.$3X {
							constructor() {
								super({ id: e.$lRc, title: e.$mRc, f1: !1 });
							}
							run(r, u) {
								const a = r.get(C.$Vxb);
								u.value && a.writeText(u.value);
							}
						},
					),
					(0, E.$4X)(
						class extends E.$3X {
							constructor() {
								super({
									id: "_executeNotebookVariableProvider",
									title: (0, w.localize)(7795, null),
									f1: !1,
								});
							}
							async run(r, u) {
								if (!u) return [];
								const a = i.URI.revive(u),
									h = r.get(d.$f6),
									n = r.get(m.$MIb).getNotebookTextModel(a);
								if (!n) return [];
								const g = h.getMatchingKernel(n).selected;
								return g && g.hasVariableProvider
									? await g
											.provideVariables(
												n.uri,
												void 0,
												"named",
												0,
												t.CancellationToken.None,
											)
											.map((o) => o)
											.toPromise()
									: [];
							}
						},
					);
			},
		)
