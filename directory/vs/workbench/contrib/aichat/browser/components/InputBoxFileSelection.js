import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/uri.js';
import '../codeSelections.js';
import './InputBoxCodeSelection.js';
import '../../../controlCommon/browser/solid.js';
define(
			de[4141],
			he([1, 0, 2, 13, 9, 354, 1363, 36]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*solid*/,
 w /*uri*/,
 E /*codeSelections*/,
 C /*InputBoxCodeSelection*/,
 d /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Ebc = m);
				function m(r) {
					const u = (0, d.$odc)(),
						[a, h] = (0, i.createSignal)();
					return (
						(0, i.createEffect)(() => {
							(async () => {
								const c = r.selection;
								for (let n = 0; n < 3; n++) {
									let g;
									if (
										(c.uri.scheme === "vscode-terminal"
											? (g = await (0, E.$7fc)(
													u.terminalService,
													w.URI.from(c.uri),
												))
											: (g = await (0, E.$2fc)(
													u.textModelService,
													u.dataScrubbingService,
													c,
												)),
										g?.text.startsWith("```plaintext") && n !== 2)
									) {
										await new Promise((p) => setTimeout(p, 1e3));
										continue;
									}
									h(g);
									break;
								}
							})();
						}),
						(0, t.createComponent)(i.Show, {
							get when() {
								return a();
							},
							children: (c) =>
								(0, t.createComponent)(C.$xbc, {
									get selection() {
										return c();
									},
									get style() {
										return r.style;
									},
								}),
						})
					);
				}
			},
		),
		