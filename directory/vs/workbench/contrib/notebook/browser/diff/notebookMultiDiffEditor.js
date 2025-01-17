import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../platform/storage/common/storage.js';
import '../../../../../platform/telemetry/common/telemetry.js';
import '../../../../../platform/theme/common/themeService.js';
import '../../../../../base/common/cancellation.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../common/services/notebookWorkerService.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../editor/common/config/fontInfo.js';
import '../../../../../base/browser/pixelRatio.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../browser/parts/editor/editorPane.js';
import '../../common/notebookCommon.js';
import '../../../../../editor/browser/config/fontMeasurements.js';
import '../notebookOptions.js';
import '../../common/notebookService.js';
import './notebookMultiDiffEditorInput.js';
import '../../../../../editor/browser/widget/multiDiffEditor/multiDiffEditorWidget.js';
import '../../../../browser/labels.js';
import '../../../../services/notebook/common/notebookDocumentService.js';
import '../../../../../nls.js';
import '../../../../../base/common/network.js';
import '../../../../../editor/common/services/getIconClasses.js';
import './notebookDiffViewModel.js';
import './eventDispatcher.js';
import './notebookDiffEditorBrowser.js';
import '../../../../../base/common/observable.js';
define(
			de[1320],
			he([
				1, 0, 21, 32, 35, 33, 5, 8, 992, 10, 463, 345, 3, 217, 70, 600, 835,
				161, 1319, 1683, 233, 834, 4, 23, 252, 1847, 1254, 556, 77,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
			) {
				"use strict";
				var k;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$JGc = void 0);
				let L = class extends c.$JEb {
					static {
						k = this;
					}
					static {
						this.ID = n.$Q6;
					}
					get textModel() {
						return this.j?.modified.notebook;
					}
					get notebookOptions() {
						return this.s;
					}
					constructor(N, A, R, O, B, U, z, F, x) {
						super(k.ID, N, z, R, F),
							(this.db = A),
							(this.eb = O),
							(this.fb = B),
							(this.gb = U),
							(this.hb = x),
							(this.g = this.D(new h.$Zc())),
							(this.u = this.eb.createKey(T.$EEc.key, !1)),
							(this.$ = this.eb.createKey(T.$FEc.key, !1)),
							(this.cb = this.eb.createKey(T.$GEc.key, !0)),
							(this.s = A.createInstance(p.$XIb, this.window, !1, void 0)),
							this.D(this.s);
					}
					get ib() {
						return this.b || (this.b = this.jb()), this.b;
					}
					layout(N, A) {
						this.a.layout(N);
					}
					jb() {
						const N = this.gb.getValue("editor");
						return g.$osb.readFontInfo(
							this.window,
							u.$OK.createFromRawSettings(
								N,
								a.$sjb.getInstance(this.window).value,
							),
						);
					}
					Y(N) {
						(this.a = this.D(
							this.db.createInstance(b.$IGc, N, this.db.createInstance(D)),
						)),
							this.D(
								this.a.onDidChangeActiveControl(() => {
									this.S.fire();
								}),
							);
					}
					async setInput(N, A, R, O) {
						super.setInput(N, A, R, O);
						const B = await N.resolve();
						this.j !== B && (this.lb(), (this.j = B));
						const U = this.g.add(new I.$MEc());
						(this.m = this.g.add(
							new S.$XEc(B, this.fb, this.db, this.gb, U, this.hb, void 0, !0),
						)),
							await this.m.computeDiff(this.g.add(new E.$Ce()).token),
							this.$.set(this.m.hasUnchangedCells),
							this.$.set(this.m.hasUnchangedCells);
						const z = this.g.add(f.$3Ec.createInput(this.m, this.db));
						this.r = this.g.add(await z.getViewModel());
						const F = new WeakSet();
						this.g.add(
							(0, P.autorun)((x) => {
								if (!this.r || !this.m) return;
								const H = this.r.items.read(x),
									q = this.m.value;
								H.length === q.length &&
									(0, P.transaction)((V) => {
										H.forEach((G) => {
											if (F.has(G)) return;
											F.add(G);
											const K = q.find(
												(J) =>
													J.modifiedUri?.toString() ===
														G.modifiedUri?.toString() &&
													J.originalUri?.toString() ===
														G.originalUri?.toString(),
											);
											K && K.type === "unchanged" && G.collapsed.set(!0, V);
										});
									});
							}),
						),
							this.a.setViewModel(this.r);
					}
					lb() {
						(this.m = void 0), this.g.clear();
					}
					_generateFontFamily() {
						return (
							this.ib.fontFamily ??
							'"SF Mono", Monaco, Menlo, Consolas, "Ubuntu Mono", "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace'
						);
					}
					setOptions(N) {
						super.setOptions(N);
					}
					getControl() {
						return this.a.getActiveControl();
					}
					focus() {
						super.focus(), this.a?.getActiveControl()?.focus();
					}
					hasFocus() {
						return (
							this.a?.getActiveControl()?.hasTextFocus() || super.hasFocus()
						);
					}
					clearInput() {
						super.clearInput(),
							this.a.setViewModel(void 0),
							this.g.clear(),
							(this.m = void 0),
							(this.r = void 0);
					}
					expandAll() {
						this.r && (this.r.expandAll(), this.u.set(!1));
					}
					collapseAll() {
						this.r && (this.r.collapseAll(), this.u.set(!0));
					}
					hideUnchanged() {
						this.m && ((this.m.includeUnchanged = !1), this.cb.set(!0));
					}
					showUnchanged() {
						this.m && ((this.m.includeUnchanged = !0), this.cb.set(!1));
					}
					getDiffElementViewModel(N) {
						if (
							N.scheme === $.Schemas.vscodeNotebookCellOutput ||
							N.scheme === $.Schemas.vscodeNotebookCellOutputDiff ||
							N.scheme === $.Schemas.vscodeNotebookCellMetadata ||
							N.scheme === $.Schemas.vscodeNotebookCellMetadataDiff
						) {
							const A = n.CellUri.parseCellPropertyUri(N, N.scheme);
							A && (N = n.CellUri.generate(A.notebook, A.handle));
						}
						return this.m?.items.find((A) => {
							switch (A.type) {
								case "delete":
									return A.original?.uri.toString() === N.toString();
								case "insert":
									return A.modified?.uri.toString() === N.toString();
								case "modified":
								case "unchanged":
									return (
										A.modified?.uri.toString() === N.toString() ||
										A.original?.uri.toString() === N.toString()
									);
								default:
									return;
							}
						});
					}
				};
				(e.$JGc = L),
					(e.$JGc =
						L =
						k =
							Ne(
								[
									j(1, C.$Li),
									j(2, w.$iP),
									j(3, d.$6j),
									j(4, m.$A4b),
									j(5, r.$gj),
									j(6, i.$km),
									j(7, t.$lq),
									j(8, o.$MIb),
								],
								L,
							));
				let D = class {
					constructor(N, A, R) {
						(this.a = N), (this.b = A), (this.e = R);
					}
					createResourceLabel(N) {
						const A = this.a.createInstance(s.$vPb, N, {}),
							R = this;
						return {
							setUri(O, B = {}) {
								if (!O) A.element.clear();
								else {
									let U = "",
										z = "",
										F;
									if (O.scheme === $.Schemas.vscodeNotebookCell) {
										const x =
												O.scheme === $.Schemas.vscodeNotebookCell
													? R.b.getNotebook(O)
													: void 0,
											H = $.Schemas.vscodeNotebookCell
												? R.b.getNotebook(O)?.getCellIndex(O)
												: void 0;
										if (x && H !== void 0) {
											U = (0, y.localize)(8009, null, `${H + 1}`);
											const q = x ? R.e.getNotebookTextModel(x?.uri) : void 0,
												V = q && H !== void 0 ? q.cells[H].language : void 0;
											F = V ? (0, v.$CDb)(V) : void 0;
										}
									} else
										O.scheme === $.Schemas.vscodeNotebookCellMetadata ||
										O.scheme === $.Schemas.vscodeNotebookCellMetadataDiff
											? (z = (0, y.localize)(8010, null))
											: (O.scheme === $.Schemas.vscodeNotebookCellOutput ||
													O.scheme ===
														$.Schemas.vscodeNotebookCellOutputDiff) &&
												(z = (0, y.localize)(8011, null));
									A.element.setResource(
										{ name: U, description: z },
										{
											strikethrough: B.strikethrough,
											forceLabel: !0,
											hideIcon: !F,
											extraClasses: F,
										},
									);
								}
							},
							dispose() {
								A.dispose();
							},
						};
					}
				};
				D = Ne([j(0, C.$Li), j(1, l.$I6), j(2, o.$MIb)], D);
			},
		),
		