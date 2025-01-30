import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/solid.js';
import '../ComposerMessageCodeblock.js';
import '../../../../../../platform/tracing/common/tracing.js';
import '../../../../ui/browser/badge/badge.js';
import '../../../../controlCommon/browser/solid.js';
import '../../../../../../css!vs/workbench/contrib/composer/browser/components/toolCalls/ComposerParallelApplyToolCallBlock.js';
define(
			de[4291],
			he([1, 0, 2, 2, 2, 2, 13, 1378, 216, 564, 36, 2420]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*solid*/,
 d /*ComposerMessageCodeblock*/,
 m /*tracing*/,
 r /*badge*/,
 u /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerParallelApplyToolCallBlock = n);
				const a = (0, t.template)('<div class="files-to-edit-container">'),
					h = (0, t.template)(
						'<div class="composer-parallel-apply-block"><div class="plan-text-content">',
					);
				function c() {
					var g =
							typeof SuppressedError == "function"
								? SuppressedError
								: function (b, s) {
										var l = Error();
										return (
											(l.name = "SuppressedError"),
											(l.error = b),
											(l.suppressed = s),
											l
										);
									},
						p = {},
						o = [];
					function f(b, s) {
						if (s != null) {
							if (Object(s) !== s)
								throw new TypeError(
									"using declarations can only be used with objects, functions, null, or undefined.",
								);
							if (b)
								var l =
									s[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
							if (
								l === void 0 &&
								((l = s[Symbol.dispose || Symbol.for("Symbol.dispose")]), b)
							)
								var y = l;
							if (typeof l != "function")
								throw new TypeError("Object is not disposable.");
							y &&
								(l = function () {
									try {
										y.call(s);
									} catch ($) {
										return Promise.reject($);
									}
								}),
								o.push({ v: s, d: l, a: b });
						} else b && o.push({ d: s, a: b });
						return s;
					}
					return {
						e: p,
						u: f.bind(null, !1),
						a: f.bind(null, !0),
						d: function () {
							var b,
								s = this.e,
								l = 0;
							function y() {
								for (; (b = o.pop()); )
									try {
										if (!b.a && l === 1)
											return (l = 0), o.push(b), Promise.resolve().then(y);
										if (b.d) {
											var v = b.d.call(b.v);
											if (b.a) return (l |= 2), Promise.resolve(v).then(y, $);
										} else l |= 1;
									} catch (S) {
										return $(S);
									}
								if (l === 1)
									return s !== p ? Promise.reject(s) : Promise.resolve();
								if (s !== p) throw s;
							}
							function $(v) {
								return (s = s !== p ? new g(v, s) : v), y();
							}
							return y();
						},
					};
				}
				function n(g) {
					try {
						var p = c();
						const o = p.u((0, m.span)("ComposerParallelApplyToolCallBlock")),
							f = (0, u.$odc)(),
							b = (0, C.createMemo)(() => ({
								planText: g.planText,
								filesToEdit: g.filesToEdit,
							}));
						return (() => {
							const s = h(),
								l = s.firstChild;
							return (
								(0, i.insert)(
									s,
									(0, E.createComponent)(r.$nac, {
										text: "Parallel Edit",
										type: "subtle",
										size: "small",
										class: "parallel-edit-badge",
									}),
									l,
								),
								(0, i.insert)(
									l,
									() =>
										b()?.planText ||
										(g.isLoading ? "Generating plan" : "No plan available"),
								),
								(0, i.insert)(
									s,
									(0, E.createComponent)(C.Show, {
										get when() {
											return (b()?.filesToEdit?.length ?? 0) > 0;
										},
										get children() {
											const y = a();
											return (
												(0, i.insert)(
													y,
													(0, E.createComponent)(C.Index, {
														get each() {
															return b()?.filesToEdit;
														},
														children: ($) => {
															const v = (0, C.createMemo)(() =>
																f.composerDataService.getCodeBlockStatus(
																	g.composerDataHandle,
																	$().uri,
																	$().version,
																),
															);
															return (0, E.createComponent)(C.Show, {
																get when() {
																	return v();
																},
																get children() {
																	return (0, E.createComponent)(
																		d.ComposerMessageCodeblock,
																		{
																			get composerDataHandle() {
																				return g.composerDataHandle;
																			},
																			get codeBlock() {
																				return $();
																			},
																			style: { margin: "0px" },
																			maxCollapsedHeight: 120,
																			maxExpandedHeight: 380,
																			get forceStatus() {
																				return (0, w.memo)(
																					() => v() === "none",
																				)()
																					? g.isLoading
																						? "generating"
																						: "cancelled"
																					: v();
																			},
																		},
																	);
																},
															});
														},
													}),
												),
												y
											);
										},
									}),
									null,
								),
								s
							);
						})();
					} catch (o) {
						p.e = o;
					} finally {
						p.d();
					}
				}
			},
		),
		