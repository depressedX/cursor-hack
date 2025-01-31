import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/common/core/editOperation.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../editor/common/services/editorWorker.js';
import '../../../../platform/undoRedo/common/undoRedo.js';
import '../../../../editor/common/model/editStack.js';
import '../../../../base/common/map.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/browser/services/bulkEditService.js';
import '../../../../editor/contrib/snippet/browser/snippetController2.js';
import '../../../../editor/contrib/snippet/browser/snippetParser.js';
define(
			de[3005],
			he([1, 0, 3, 188, 17, 42, 200, 155, 780, 59, 67, 199, 254, 389]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*editOperation*/,
 w /*range*/,
 E /*resolverService*/,
 C /*editorWorker*/,
 d /*undoRedo*/,
 m /*editStack*/,
 r /*map*/,
 u /*model*/,
 a /*bulkEditService*/,
 h /*snippetController2*/,
 c /*snippetParser*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0Mc = void 0);
				class n {
					constructor(f) {
						(this.g = f),
							(this.model = this.g.object.textEditorModel),
							(this.d = []);
					}
					dispose() {
						this.g.dispose();
					}
					isNoOp() {
						return !(
							this.d.length > 0 ||
							(this.f !== void 0 &&
								this.f !== this.model.getEndOfLineSequence())
						);
					}
					addEdit(f) {
						this.c = f.versionId;
						const { textEdit: b } = f;
						if (
							(typeof b.eol == "number" && (this.f = b.eol),
							(!b.range && !b.text) || (w.$iL.isEmpty(b.range) && !b.text))
						)
							return;
						let s;
						b.range
							? (s = w.$iL.lift(b.range))
							: (s = this.model.getFullModelRange()),
							this.d.push({
								...i.$jL.replaceMove(s, b.text),
								insertAsSnippet: b.insertAsSnippet,
							});
					}
					validate() {
						return typeof this.c > "u" || this.model.getVersionId() === this.c
							? { canApply: !0 }
							: { canApply: !1, reason: this.model.uri };
					}
					getBeforeCursorState() {
						return null;
					}
					apply() {
						this.d.length > 0 &&
							((this.d = this.d
								.map(this.h, this)
								.sort((f, b) =>
									w.$iL.compareRangesUsingStarts(f.range, b.range),
								)),
							this.model.pushEditOperations(null, this.d, () => null)),
							this.f !== void 0 && this.model.pushEOL(this.f);
					}
					h(f) {
						if (!f.insertAsSnippet || !f.text) return f;
						const b = c.$Izb.asInsertText(f.text);
						return { ...f, insertAsSnippet: !1, text: b };
					}
				}
				class g extends n {
					constructor(f, b) {
						super(f), (this.j = b);
					}
					getBeforeCursorState() {
						return this.k() ? this.j.getSelections() : null;
					}
					apply() {
						if (!this.k()) {
							super.apply();
							return;
						}
						if (this.d.length > 0) {
							const f = h.$aDb.get(this.j);
							if (f && this.d.some((b) => b.insertAsSnippet)) {
								const b = [];
								for (const s of this.d)
									s.range &&
										s.text !== null &&
										b.push({
											range: w.$iL.lift(s.range),
											template: s.insertAsSnippet
												? s.text
												: c.$Izb.escape(s.text),
										});
								f.apply(b, { undoStopBefore: !1, undoStopAfter: !1 });
							} else
								(this.d = this.d
									.map(this.h, this)
									.sort((b, s) =>
										w.$iL.compareRangesUsingStarts(b.range, s.range),
									)),
									this.j.executeEdits("", this.d);
						}
						this.f !== void 0 &&
							this.j.hasModel() &&
							this.j.getModel().pushEOL(this.f);
					}
					k() {
						return (
							this.j?.getModel()?.uri.toString() === this.model.uri.toString()
						);
					}
				}
				let p = class {
					constructor(f, b, s, l, y, $, v, S, I, T, P, k) {
						(this.d = f),
							(this.f = b),
							(this.g = s),
							(this.h = l),
							(this.j = y),
							(this.k = $),
							(this.l = v),
							(this.m = I),
							(this.n = T),
							(this.o = P),
							(this.p = k),
							(this.c = new r.$Gc());
						for (const L of S) {
							let D = this.c.get(L.resource);
							D || ((D = []), this.c.set(L.resource, D)), D.push(L);
						}
					}
					q() {
						for (const f of this.c.values())
							for (const b of f)
								if (typeof b.versionId == "number") {
									const s = this.n.getModel(b.resource);
									if (s && s.getVersionId() !== b.versionId)
										throw new Error(
											`${s.uri.toString()} has changed in the meantime`,
										);
								}
					}
					async r() {
						const f = [],
							b = [];
						for (const [s, l] of this.c) {
							const y = this.o.createModelReference(s).then(async ($) => {
								let v,
									S = !1;
								if (
									(this.g?.getModel()?.uri.toString() ===
									$.object.textEditorModel.uri.toString()
										? ((v = new g($, this.g)), (S = !0))
										: (v = new n($)),
									f.push(v),
									!S)
								) {
									l.forEach(v.addEdit, v);
									return;
								}
								const I = async (k, L) => {
									const D = l.slice(k, L),
										M = await this.m.computeMoreMinimalEdits(
											$.object.textEditorModel.uri,
											D.map((N) => N.textEdit),
											!1,
										);
									M
										? M.forEach((N) =>
												v.addEdit(
													new a.$tzb(
														$.object.textEditorModel.uri,
														N,
														void 0,
														void 0,
													),
												),
											)
										: D.forEach(v.addEdit, v);
								};
								let T = 0,
									P = 0;
								for (; P < l.length; P++)
									(l[P].textEdit.insertAsSnippet || l[P].metadata) &&
										(await I(T, P), v.addEdit(l[P]), (T = P + 1));
								await I(T, P);
							});
							b.push(y);
						}
						return await Promise.all(b), f;
					}
					s(f) {
						for (const b of f) {
							const s = b.validate();
							if (!s.canApply) return s;
						}
						return { canApply: !0 };
					}
					async apply() {
						this.q();
						const f = await this.r();
						try {
							if (this.l.isCancellationRequested) return [];
							const b = [],
								s = this.s(f);
							if (!s.canApply)
								throw new Error(
									`${s.reason.toString()} has changed in the meantime`,
								);
							if (f.length === 1) {
								const l = f[0];
								if (!l.isNoOp()) {
									const y = new m.$wU(
										this.d,
										this.f,
										l.model,
										l.getBeforeCursorState(),
									);
									this.p.pushElement(y, this.h, this.j),
										l.apply(),
										y.close(),
										b.push(l.model.uri);
								}
								this.k.report(void 0);
							} else {
								const l = new m.$xU(
									this.d,
									this.f,
									f.map(
										(y) =>
											new m.$wU(
												this.d,
												this.f,
												y.model,
												y.getBeforeCursorState(),
											),
									),
								);
								this.p.pushElement(l, this.h, this.j);
								for (const y of f)
									y.apply(), this.k.report(void 0), b.push(y.model.uri);
								l.close();
							}
							return b;
						} finally {
							(0, t.$Vc)(f);
						}
					}
				};
				(e.$0Mc = p),
					(e.$0Mc = p =
						Ne([j(8, C.$Cxb), j(9, u.$QO), j(10, E.$MO), j(11, d.$GN)], p));
			},
		)
