import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/lexical/lexical-solid/LexicalComposerContext.js';
import '../../../../../../../external/lexical/lexical/lexical.js';
import '../../../../../../../external/solid/solid.js';
import '../../../../../../base/common/buffer.js';
import '../../../../../../base/common/network.js';
import '../../../../../../base/common/resources.js';
import '../../../../../../base/common/uuid.js';
import '../../../../controlCommon/browser/solid.js';
define(
			de[4178],
			he([1, 0, 181, 158, 13, 76, 23, 19, 47, 36]),
			function (ce /*require*/,
 e /*exports*/,
 t /*LexicalComposerContext*/,
 i /*lexical*/,
 w /*solid*/,
 E /*buffer*/,
 C /*network*/,
 d /*resources*/,
 m /*uuid*/,
 r /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Aac = u),
					(e.$Bac = a);
				function u(h) {
					const [c] = (0, t.useLexicalComposerContext)(),
						n = (0, r.$odc)();
					return (
						(0, w.createEffect)(() => {
							if (h.addImage) {
								const g = c.registerCommand(
									i.PASTE_COMMAND,
									(p) => {
										if (p.clipboardData && p.clipboardData.items) {
											const o = p.clipboardData.items;
											for (let f = 0; f < o.length; f++)
												if (o[f].type.indexOf("image") !== -1) {
													const b = o[f].getAsFile();
													return b
														? ((async () => {
																const s = await b.arrayBuffer(),
																	l = new Uint8Array(s),
																	y = E.$Te.wrap(l),
																	$ = (0, d.$nh)(
																		n.environmentService.workspaceStorageHome,
																		"images",
																		`${Math.random()}-${b.name}`,
																	);
																await n.fileService.writeFile($, y);
																const v = new Image();
																(v.src = C.$7g.uriToBrowserUri($).toString()),
																	await new Promise(
																		(S) =>
																			(v.onload = () => {
																				const I = v.naturalWidth,
																					T = v.naturalHeight;
																				console.log({ width: I, height: T }),
																					h.addImage?.((0, m.$9g)(), {
																						path: $.fsPath,
																						dimension: { width: I, height: T },
																						loadedAt: Date.now(),
																					}),
																					S();
																			}),
																	),
																	v.remove();
															})(),
															!0)
														: !1;
												}
										}
										return !1;
									},
									i.COMMAND_PRIORITY_CRITICAL,
								);
								(0, w.onCleanup)(() => {
									g();
								});
							}
						}),
						null
					);
				}
				function a(h) {
					const [c] = (0, t.useLexicalComposerContext)();
					return (
						(0, w.createEffect)(() => {
							if (h.addImage) {
								const n = c.registerCommand(
										i.DROP_COMMAND,
										(p) => {
											const o = Array.from(p.dataTransfer?.files || [])[0];
											if (!o || !o?.type.startsWith("image")) return !1;
											p.preventDefault(),
												p.stopPropagation(),
												p.stopImmediatePropagation();
											const f = new Image();
											return (
												(f.src = URL.createObjectURL(o)),
												(f.onload = () => {
													const b = f.naturalWidth,
														s = f.naturalHeight;
													h.addImage?.((0, m.$9g)(), {
														path: o.path,
														dimension: { width: b, height: s },
														loadedAt: Date.now(),
													}),
														f.remove();
												}),
												!0
											);
										},
										i.COMMAND_PRIORITY_LOW,
									),
									g = c.registerCommand(
										i.DRAGOVER_COMMAND,
										(p) => (
											p.dataTransfer && (p.dataTransfer.dropEffect = "copy"), !0
										),
										i.COMMAND_PRIORITY_CRITICAL,
									);
								(0, w.onCleanup)(() => {
									n(), g();
								});
							}
						}),
						null
					);
				}
			},
		),
		