import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/network.js';
import '../../../../base/common/lifecycle.js';
import './replace.js';
import '../../../services/editor/common/editorService.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/languages/language.js';
import './searchModel.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../editor/common/editorCommon.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../editor/common/model/textModel.js';
import '../../../services/textfile/common/textfiles.js';
import '../../../../editor/browser/services/bulkEditService.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/core/editOperation.js';
import '../../../../platform/label/common/label.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/async.js';
import '../../../common/editor.js';
import '../../notebook/common/notebookCommon.js';
import '../../notebook/common/notebookEditorModelResolverService.js';
define(
			de[4163],
			he([
				1, 0, 4, 23, 3, 804, 18, 67, 61, 405, 42, 98, 5, 122, 85, 199, 17, 188,
				73, 19, 15, 44, 70, 509,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*network*/,
				w /*lifecycle*/,
				E /*replace*/,
				C /*editorService*/,
				d /*model*/,
				m /*language*/,
				r /*searchModel*/,
				u /*resolverService*/,
				a /*editorCommon*/,
				h /*instantiation*/,
				c /*textModel*/,
				n /*textfiles*/,
				g /*bulkEditService*/,
				p /*range*/,
				o /*editOperation*/,
				f /*label*/,
				b /*resources*/,
				s /*async*/,
				l /*editor*/,
				y /*notebookCommon*/,
				$ /*notebookEditorModelResolverService*/,
) {
				"use strict";
				var v;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ZNc = e.$YNc = void 0),
					(t = mt(t)),
					(i = mt(i));
				const S = "replacePreview",
					I = (D) =>
						D.with({
							scheme: i.Schemas.internal,
							fragment: S,
							query: JSON.stringify({ scheme: D.scheme }),
						}),
					T = (D) =>
						D.with({
							scheme: JSON.parse(D.query).scheme,
							fragment: "",
							query: "",
						});
				let P = class {
					static {
						this.ID = "workbench.contrib.replacePreviewContentProvider";
					}
					constructor(M, N) {
						(this.c = M),
							(this.d = N),
							this.d.registerTextModelContentProvider(i.Schemas.internal, this);
					}
					provideTextContent(M) {
						return M.fragment === S
							? this.c.createInstance(k).resolve(M)
							: null;
					}
				};
				(e.$YNc = P), (e.$YNc = P = Ne([j(0, h.$Li), j(1, u.$MO)], P));
				let k = class extends w.$1c {
					constructor(M, N, A, R, O) {
						super(),
							(this.c = M),
							(this.f = N),
							(this.g = A),
							(this.h = R),
							(this.j = O);
					}
					async resolve(M) {
						const N = T(M),
							A = this.j.searchModel.searchResult
								.matches()
								.filter((z) => z.resource.toString() === N.toString())[0],
							O = this.D(await this.g.createModelReference(N)).object
								.textEditorModel,
							B = O.getLanguageId(),
							U = this.c.createModel(
								(0, c.$9X)(O.createSnapshot()),
								this.f.createById(B),
								M,
							);
						return (
							this.D(
								A.onChange(({ forceUpdateModel: z }) => this.m(O, U, A, z)),
							),
							this.D(
								this.j.searchModel.onReplaceTermChanged(() => this.m(O, U, A)),
							),
							this.D(A.onDispose(() => U.dispose())),
							this.D(U.onWillDispose(() => this.dispose())),
							this.D(O.onWillDispose(() => this.dispose())),
							U
						);
					}
					m(M, N, A, R = !1) {
						!M.isDisposed() &&
							!N.isDisposed() &&
							this.h.updateReplacePreview(A, R);
					}
				};
				k = Ne(
					[j(0, d.$QO), j(1, m.$nM), j(2, u.$MO), j(3, E.$XNc), j(4, r.$TNc)],
					k,
				);
				let L = class {
					static {
						v = this;
					}
					static {
						this.c = l.$p1.registerSource(
							"searchReplace.source",
							t.localize(9151, null),
						);
					}
					constructor(M, N, A, R, O, B) {
						(this.d = M),
							(this.f = N),
							(this.g = A),
							(this.h = R),
							(this.i = O),
							(this.j = B);
					}
					async replace(M, N = void 0, A = null) {
						const R = this.l(M, A);
						await this.h.apply(R, { progress: N });
						const O = R.map(async (B) => {
							if (B.resource.scheme === i.Schemas.vscodeNotebookCell) {
								const U = y.CellUri.parse(B.resource)?.notebook;
								if (U) {
									let z;
									try {
										(z = await this.j.resolve(U)),
											await z.object.save({ source: v.c });
									} finally {
										z?.dispose();
									}
								}
								return;
							} else return this.d.files.get(B.resource)?.save({ source: v.c });
						});
						return s.Promises.settled(O);
					}
					async openReplacePreview(M, N, A, R) {
						const O = M instanceof r.$FNc ? M.parent() : M,
							B = await this.f.openEditor({
								original: { resource: O.resource },
								modified: { resource: I(O.resource) },
								label: t.localize(9152, null, O.name(), O.name()),
								description: this.i.getUriLabel((0, b.$mh)(O.resource), {
									relative: !0,
								}),
								options: { preserveFocus: N, pinned: R, revealIfVisible: !0 },
							}),
							U = B?.input,
							z = O.onDispose(() => {
								U?.dispose(), z.dispose();
							});
						if ((await this.updateReplacePreview(O), B)) {
							const F = B.getControl();
							M instanceof r.$FNc &&
								F &&
								F.revealLineInCenter(
									M.range().startLineNumber,
									a.ScrollType.Immediate,
								);
						}
					}
					async updateReplacePreview(M, N = !1) {
						const A = I(M.resource),
							[R, O] = await Promise.all([
								this.g.createModelReference(M.resource),
								this.g.createModelReference(A),
							]),
							B = R.object.textEditorModel,
							U = O.object.textEditorModel;
						try {
							B && U && (N ? U.setValue(B.getValue()) : U.undo(), this.k(M, U));
						} finally {
							R.dispose(), O.dispose();
						}
					}
					k(M, N) {
						const A = this.l(M, N.uri),
							R = [];
						for (const O of A)
							R.push(
								o.$jL.replaceMove(
									p.$iL.lift(O.textEdit.range),
									O.textEdit.text,
								),
							);
						N.pushEditOperations(
							[],
							R.sort((O, B) =>
								p.$iL.compareRangesUsingStarts(O.range, B.range),
							),
							() => [],
						);
					}
					l(M, N = null) {
						const A = [];
						if (M instanceof r.$FNc)
							if (M instanceof r.$HNc) {
								if (!M.isReadonly()) {
									const R = M;
									A.push(this.m(R, R.replaceString, R.cell?.uri));
								}
							} else {
								const R = M;
								A.push(this.m(R, R.replaceString, N));
							}
						return (
							M instanceof r.$INc && (M = [M]),
							M instanceof Array &&
								M.forEach((R) => {
									const O = R;
									O.count() > 0 &&
										A.push(...O.matches().flatMap((B) => this.l(B, N)));
								}),
							A
						);
					}
					m(M, N, A = null) {
						const R = M.parent();
						return new g.$tzb(
							A ?? R.resource,
							{ range: M.range(), text: N },
							void 0,
							void 0,
						);
					}
				};
				(e.$ZNc = L),
					(e.$ZNc =
						L =
						v =
							Ne(
								[
									j(0, n.$kZ),
									j(1, C.$IY),
									j(2, u.$MO),
									j(3, g.$rzb),
									j(4, f.$3N),
									j(5, $.$OIb),
								],
								L,
							));
			},
		),
		