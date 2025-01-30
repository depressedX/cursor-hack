import '../../../../../../../../require.js';
import '../../../../../../../../exports.js';
import '../../../../../../../../external/solid/web.js';
import '../../../../../../../../external/solid/web.js';
import '../../../../../../../../external/solid/web.js';
import '../../../../../../../../external/solid/solid.js';
import '../../../../../../../editor/common/services/getIconClasses.js';
import '../../../../../../../platform/files/common/files.js';
define(
			de[156],
			he([1, 0, 2, 2, 2, 13, 252, 22]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*solid*/,
 C /*getIconClasses*/,
 d /*files*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$k$b = r);
				const m = (0, t.template)("<div><div>");
				function r(u) {
					const a = (0, E.createMemo)(() =>
							u.workspaceContextService.resolveRelativePath(u.fileName),
						),
						[h, c] = (0, E.createSignal)([]);
					(0, E.createEffect)(() => {
						const g = () => {
							c(
								(0, C.$BDb)(
									u.modelService,
									u.languageService,
									a(),
									u.fileKind,
									u.fileKind === d.FileKind.FOLDER ? { id: "folder" } : void 0,
								),
							);
						};
						g();
						const p = setTimeout(() => {
							g();
						}, 3e3);
						(0, E.onCleanup)(() => clearTimeout(p));
					});
					const n = ["monaco-icon-label"];
					return (() => {
						const g = m(),
							p = g.firstChild;
						return (
							p.style.setProperty("height", "100%"),
							(0, w.effect)(
								(o) => {
									const f = ["show-file-icons"].join(" "),
										b =
											typeof u.height == "number"
												? `${u.height}px`
												: u.height
													? u.height
													: "18px",
										s = [...n, ...h(), "height-override-important"].join(" ");
									return (
										f !== o._v$ && (0, i.className)(g, (o._v$ = f)),
										b !== o._v$2 &&
											((o._v$2 = b) != null
												? g.style.setProperty("height", b)
												: g.style.removeProperty("height")),
										s !== o._v$3 && (0, i.className)(p, (o._v$3 = s)),
										o
									);
								},
								{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
							),
							g
						);
					})();
				}
			},
		),
		