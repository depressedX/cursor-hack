import '../../../require.js';
import '../../../exports.js';
import '../../nls.js';
import '../common/editor.js';
import '../../platform/registry/common/platform.js';
import '../../base/common/lifecycle.js';
import '../../base/common/async.js';
import '../services/editor/common/editorService.js';
import '../../platform/uriIdentity/common/uriIdentity.js';
import '../services/workingCopy/common/workingCopyService.js';
import '../../base/common/network.js';
import '../../base/common/iterator.js';
import '../../base/common/event.js';
define(
			de[192],
			he([1, 0, 4, 44, 30, 3, 15, 18, 68, 227, 23, 103, 6]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wVb = e.$vVb = void 0),
					(e.$xVb = g),
					(e.$yVb = p);
				class c {
					static {
						this.a = new Set();
					}
					static didInstantiateEditorPane(f) {
						return c.a.has(f);
					}
					static {
						this.b = new h.$re();
					}
					static {
						this.onWillInstantiateEditorPane = c.b.event;
					}
					static create(f, b, s) {
						return new c(f, b, s);
					}
					constructor(f, b, s) {
						(this.c = f), (this.typeId = b), (this.name = s);
					}
					instantiate(f, b) {
						c.b.fire({ typeId: this.typeId });
						const s = f.createInstance(this.c, b);
						return c.a.add(this.typeId), s;
					}
					describes(f) {
						return f.getId() === this.typeId;
					}
				}
				e.$vVb = c;
				class n {
					constructor() {
						this.a = new Map();
					}
					registerEditorPane(f, b) {
						return (
							this.a.set(f, b),
							(0, E.$Yc)(() => {
								this.a.delete(f);
							})
						);
					}
					getEditorPane(f) {
						const b = this.b(f);
						if (b.length !== 0)
							return b.length === 1 ? b[0] : f.prefersEditorPane(b);
					}
					b(f, b) {
						const s = [];
						for (const l of this.a.keys()) {
							const y = this.a.get(l) || [];
							for (const $ of y) {
								const v = $.ctor;
								if (!b && f.constructor === v) {
									s.push(l);
									break;
								} else if (b && f instanceof v) {
									s.push(l);
									break;
								}
							}
						}
						return !b && s.length === 0 ? this.b(f, !0) : s;
					}
					getEditorPaneByType(f) {
						return a.Iterable.find(this.a.keys(), (b) => b.typeId === f);
					}
					getEditorPanes() {
						return Array.from(this.a.keys());
					}
					getEditors() {
						const f = [];
						for (const b of this.a.keys()) {
							const s = this.a.get(b);
							s && f.push(...s.map((l) => l.ctor));
						}
						return f;
					}
				}
				(e.$wVb = n), w.$Io.add(i.$a1.EditorPane, new n());
				function g(o, f) {
					const b = o.get(d.$IY),
						s = o.get(m.$Vl),
						l = o.get(r.$gY);
					return new Promise((y) => {
						let $ = [...f];
						const v = b.onDidCloseEditor(async (S) => {
							if (S.context === i.EditorCloseContext.MOVE) return;
							let I = i.$A1.getOriginalUri(S.editor, {
									supportSideBySide: i.SideBySideEditor.PRIMARY,
								}),
								T = i.$A1.getOriginalUri(S.editor, {
									supportSideBySide: i.SideBySideEditor.SECONDARY,
								});
							if (S.context === i.EditorCloseContext.REPLACE) {
								const P = i.$A1.getOriginalUri(b.activeEditor, {
										supportSideBySide: i.SideBySideEditor.PRIMARY,
									}),
									k = i.$A1.getOriginalUri(b.activeEditor, {
										supportSideBySide: i.SideBySideEditor.SECONDARY,
									});
								s.extUri.isEqual(I, P) && (I = void 0),
									s.extUri.isEqual(T, k) && (T = void 0);
							}
							if (
								(($ = $.filter(
									(P) =>
										!(
											s.extUri.isEqual(P, I) ||
											s.extUri.isEqual(P, T) ||
											(S.context !== i.EditorCloseContext.REPLACE &&
												((I?.scheme === u.Schemas.untitled &&
													s.extUri.isEqual(P, I.with({ scheme: P.scheme }))) ||
													(T?.scheme === u.Schemas.untitled &&
														s.extUri.isEqual(P, T.with({ scheme: P.scheme })))))
										),
								)),
								$.length === 0)
							) {
								const P = f.filter((k) => l.isDirty(k));
								return (
									P.length > 0 &&
										(await C.Promises.settled(
											P.map(
												async (k) =>
													await new Promise((L) => {
														if (!l.isDirty(k)) return L();
														const D = l.onDidChangeDirty((M) => {
															if (
																!M.isDirty() &&
																s.extUri.isEqual(k, M.resource)
															)
																return D.dispose(), L();
														});
													}),
											),
										)),
									v.dispose(),
									y()
								);
							}
						});
					});
				}
				function p(o, f, b, s) {
					let l = o.getAriaLabel();
					return (
						b && !b.isPinned(o) && (l = (0, t.localize)(3006, null, l)),
						b?.isSticky(f ?? o) && (l = (0, t.localize)(3007, null, l)),
						b && typeof s == "number" && s > 1 && (l = `${l}, ${b.ariaLabel}`),
						l
					);
				}
			},
		),
		