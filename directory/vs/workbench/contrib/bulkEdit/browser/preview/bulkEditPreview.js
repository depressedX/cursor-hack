import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../base/common/uri.js';
import '../../../../../editor/common/languages/language.js';
import '../../../../../editor/common/services/model.js';
import '../../../../../editor/common/model/textModel.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/arrays.js';
import '../../../../../editor/common/core/range.js';
import '../../../../../editor/common/core/editOperation.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/files/common/files.js';
import '../../../../../base/common/event.js';
import '../conflicts.js';
import '../../../../../base/common/map.js';
import '../../../../../nls.js';
import '../../../../../base/common/resources.js';
import '../../../../../editor/browser/services/bulkEditService.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/uuid.js';
import '../../../../../editor/contrib/snippet/browser/snippetParser.js';
import '../../../../../base/common/symbols.js';
define(
			de[1843],
			he([
				1, 0, 42, 9, 61, 67, 122, 3, 24, 17, 188, 5, 22, 6, 3485, 59, 4, 19,
				199, 14, 47, 389, 649,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*resolverService*/,
				i /*uri*/,
				w /*language*/,
				E /*model*/,
				C /*textModel*/,
				d /*lifecycle*/,
				m /*arrays*/,
				r /*range*/,
				u /*editOperation*/,
				a /*instantiation*/,
				h /*files*/,
				c /*event*/,
				n /*conflicts*/,
				g /*map*/,
				p /*nls*/,
				o /*resources*/,
				f /*bulkEditService*/,
				b /*codicons*/,
				s /*uuid*/,
				l /*snippetParser*/,
				y /*symbols*/,
) {
				"use strict";
				var $, v;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$fNc =
						e.$eNc =
						e.$dNc =
						e.$cNc =
						e.BulkFileOperationType =
						e.$bNc =
						e.$aNc =
							void 0);
				class S {
					constructor() {
						(this.c = new WeakMap()),
							(this.d = 0),
							(this.f = new c.$re()),
							(this.onDidChange = this.f.event);
					}
					dispose() {
						this.f.dispose();
					}
					get checkedCount() {
						return this.d;
					}
					isChecked(N) {
						return this.c.get(N) ?? !1;
					}
					updateChecked(N, A) {
						const R = this.c.get(N);
						R !== A &&
							(R === void 0
								? A && (this.d += 1)
								: A
									? (this.d += 1)
									: (this.d -= 1),
							this.c.set(N, A),
							this.f.fire(N));
					}
				}
				e.$aNc = S;
				class I {
					constructor(N, A) {
						(this.parent = N), (this.textEdit = A);
					}
				}
				e.$bNc = I;
				var T;
				(function (M) {
					(M[(M.TextEdit = 1)] = "TextEdit"),
						(M[(M.Create = 2)] = "Create"),
						(M[(M.Delete = 4)] = "Delete"),
						(M[(M.Rename = 8)] = "Rename");
				})(T || (e.BulkFileOperationType = T = {}));
				class P {
					constructor(N, A) {
						(this.uri = N),
							(this.parent = A),
							(this.type = 0),
							(this.textEdits = []),
							(this.originalEdits = new Map());
					}
					addEdit(N, A, R) {
						(this.type |= A),
							this.originalEdits.set(N, R),
							R instanceof f.$tzb
								? this.textEdits.push(new I(this, R))
								: A === T.Rename && (this.newUri = R.newResource);
					}
					needsConfirmation() {
						for (const [, N] of this.originalEdits)
							if (!this.parent.checked.isChecked(N)) return !0;
						return !1;
					}
				}
				e.$cNc = P;
				class k {
					static {
						this.c = Object.freeze({
							label: (0, p.localize)(4503, null),
							icon: b.$ak.symbolFile,
							needsConfirmation: !1,
						});
					}
					static keyOf(N) {
						return N?.label || "<default>";
					}
					constructor(N = k.c) {
						(this.metadata = N), (this.operationByResource = new Map());
					}
					get fileOperations() {
						return this.operationByResource.values();
					}
				}
				e.$dNc = k;
				let L = ($ = class {
					static async create(N, A) {
						return await N.get(a.$Li).createInstance($, A)._init();
					}
					constructor(N, A, R) {
						(this.c = N),
							(this.d = A),
							(this.checked = new S()),
							(this.fileOperations = []),
							(this.categories = []),
							(this.conflicts = R.createInstance(n.$_Mc, N));
					}
					dispose() {
						this.checked.dispose(), this.conflicts.dispose();
					}
					async _init() {
						const N = new Map(),
							A = new Map(),
							R = new g.$Gc();
						for (let O = 0; O < this.c.length; O++) {
							const B = this.c[O];
							let U, z;
							if (
								(this.checked.updateChecked(B, !B.metadata?.needsConfirmation),
								B instanceof f.$tzb)
							)
								(z = T.TextEdit), (U = B.resource);
							else if (B instanceof f.$uzb)
								if (B.newResource && B.oldResource) {
									if (
										((z = T.Rename),
										(U = B.oldResource),
										B.options?.overwrite === void 0 &&
											B.options?.ignoreIfExists &&
											(await this.d.exists(U)))
									)
										continue;
									R.set(B.newResource, U);
								} else if (B.oldResource) {
									if (
										((z = T.Delete),
										(U = B.oldResource),
										B.options?.ignoreIfNotExists && !(await this.d.exists(U)))
									)
										continue;
								} else if (B.newResource) {
									if (
										((z = T.Create),
										(U = B.newResource),
										B.options?.overwrite === void 0 &&
											B.options?.ignoreIfExists &&
											(await this.d.exists(U)))
									)
										continue;
								} else continue;
							else continue;
							const F = (q, V) => {
								let G = o.$dh.getComparisonKey(q, !0),
									K = V.get(G);
								!K &&
									R.has(q) &&
									((q = R.get(q)),
									(G = o.$dh.getComparisonKey(q, !0)),
									(K = V.get(G))),
									K || ((K = new P(q, this)), V.set(G, K)),
									K.addEdit(O, z, B);
							};
							F(U, N);
							const x = k.keyOf(B.metadata);
							let H = A.get(x);
							H || ((H = new k(B.metadata)), A.set(x, H)),
								F(U, H.operationByResource);
						}
						N.forEach((O) => this.fileOperations.push(O)),
							A.forEach((O) => this.categories.push(O));
						for (const O of this.fileOperations)
							if (O.type !== T.TextEdit) {
								let B = !0;
								for (const U of O.originalEdits.values())
									U instanceof f.$uzb && (B = B && this.checked.isChecked(U));
								if (!B)
									for (const U of O.originalEdits.values())
										this.checked.updateChecked(U, B);
							}
						return (
							this.categories.sort((O, B) =>
								O.metadata.needsConfirmation === B.metadata.needsConfirmation
									? O.metadata.label.localeCompare(B.metadata.label)
									: O.metadata.needsConfirmation
										? -1
										: 1,
							),
							this
						);
					}
					getWorkspaceEdit() {
						const N = [];
						let A = !0;
						for (let R = 0; R < this.c.length; R++) {
							const O = this.c[R];
							if (this.checked.isChecked(O)) {
								N[R] = O;
								continue;
							}
							A = !1;
						}
						return A ? this.c : ((0, m.$Mb)(N), N);
					}
					getFileEdits(N) {
						for (const A of this.fileOperations)
							if (A.uri.toString() === N.toString()) {
								const R = [];
								let O = !1;
								for (const B of A.originalEdits.values())
									B instanceof f.$tzb
										? this.checked.isChecked(B) &&
											R.push(
												u.$jL.replaceMove(
													r.$iL.lift(B.textEdit.range),
													B.textEdit.insertAsSnippet
														? l.$Izb.asInsertText(B.textEdit.text)
														: B.textEdit.text,
												),
											)
										: this.checked.isChecked(B) || (O = !0);
								return O
									? []
									: R.sort((B, U) =>
											r.$iL.compareRangesUsingStarts(B.range, U.range),
										);
							}
						return [];
					}
					getUriOfEdit(N) {
						for (const A of this.fileOperations)
							for (const R of A.originalEdits.values())
								if (R === N) return A.uri;
						throw new Error("invalid edit");
					}
				});
				(e.$eNc = L), (e.$eNc = L = $ = Ne([j(1, h.$ll), j(2, a.$Li)], L));
				let D = class {
					static {
						v = this;
					}
					static {
						this.c = "vscode-bulkeditpreview-editor";
					}
					static {
						this.emptyPreview = i.URI.from({
							scheme: this.c,
							fragment: "empty",
						});
					}
					static fromPreviewUri(N) {
						return i.URI.parse(N.query);
					}
					constructor(N, A, R, O) {
						(this.j = N),
							(this.k = A),
							(this.l = R),
							(this.m = O),
							(this.d = new d.$Zc()),
							(this.g = new Map()),
							(this.h = (0, s.$9g)()),
							this.d.add(this.m.registerTextModelContentProvider(v.c, this)),
							(this.f = this.n());
					}
					dispose() {
						this.d.dispose();
					}
					asPreviewUri(N) {
						return i.URI.from({
							scheme: v.c,
							authority: this.h,
							path: N.path,
							query: N.toString(),
						});
					}
					async n() {
						for (const N of this.j.fileOperations) await this.o(N.uri);
						this.d.add(
							c.Event.debounce(
								this.j.checked.onDidChange,
								(N, A) => A,
								y.$me,
							)((N) => {
								const A = this.j.getUriOfEdit(N);
								this.o(A);
							}),
						);
					}
					async o(N) {
						const A = await this.p(N),
							R = this.g.get(A.id);
						R && A.applyEdits(R);
						const O = this.j.getFileEdits(N),
							B = A.applyEdits(O, !0);
						this.g.set(A.id, B);
					}
					async p(N) {
						const A = this.asPreviewUri(N);
						let R = this.l.getModel(A);
						if (!R) {
							try {
								const O = await this.m.createModelReference(N),
									B = O.object.textEditorModel;
								(R = this.l.createModel(
									(0, C.$9X)(B.createSnapshot()),
									this.k.createById(B.getLanguageId()),
									A,
								)),
									O.dispose();
							} catch {
								R = this.l.createModel(
									"",
									this.k.createByFilepathOrFirstLine(A),
									A,
								);
							}
							queueMicrotask(async () => {
								this.d.add(await this.m.createModelReference(R.uri));
							});
						}
						return R;
					}
					async provideTextContent(N) {
						return N.toString() === v.emptyPreview.toString()
							? this.l.createModel("", null, N)
							: (await this.f, this.l.getModel(N));
					}
				};
				(e.$fNc = D),
					(e.$fNc = D = v = Ne([j(1, w.$nM), j(2, E.$QO), j(3, t.$MO)], D));
			},
		)
