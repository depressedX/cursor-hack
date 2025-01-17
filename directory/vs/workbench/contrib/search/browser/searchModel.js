import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/comparers.js';
import '../../../../base/common/decorators.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lazy.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/map.js';
import '../../../../base/common/network.js';
import '../../../../base/common/strings.js';
import '../../../../base/common/ternarySearchTree.js';
import '../../../../base/common/uri.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/model.js';
import '../../../../editor/common/model/textModel.js';
import '../../../../editor/common/services/model.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/label/common/label.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../notebook/browser/contrib/find/findMatchDecorationModel.js';
import '../../notebook/browser/notebookEditorWidget.js';
import '../../notebook/browser/services/notebookEditorService.js';
import '../../notebook/common/notebookCommon.js';
import './replace.js';
import './notebookSearch/searchNotebookHelpers.js';
import '../common/notebookSearch.js';
import '../common/searchNotebookHelpers.js';
import '../../../services/search/common/replace.js';
import '../../../services/search/common/search.js';
import '../../../services/search/common/searchHelpers.js';
import '../common/cellSearchModel.js';
import '../../notebook/browser/contrib/find/findModel.js';
import '../../../../base/common/arrays.js';
define(
			de[405],
			he([
				1, 0, 15, 33, 535, 138, 29, 6, 149, 3, 59, 23, 37, 387, 9, 17, 64, 122,
				67, 10, 5, 73, 34, 84, 32, 51, 35, 68, 1844, 856, 293, 70, 804, 1865,
				1749, 1864, 3593, 186, 1866, 3133, 1030, 24,
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
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
			) {
				"use strict";
				var H, q, V;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$UNc =
						e.$TNc =
						e.$SNc =
						e.$RNc =
						e.SearchModelLocation =
						e.$QNc =
						e.$MNc =
						e.$LNc =
						e.$KNc =
						e.$JNc =
						e.$INc =
						e.$HNc =
						e.$GNc =
						e.$FNc =
							void 0),
					(e.$NNc = te),
					(e.$ONc = Q),
					(e.$PNc = Z),
					(e.$VNc = ye),
					(e.$WNc = ue),
					(C = mt(C));
				class G {
					static {
						this.c = 250;
					}
					constructor(ge, be, Ce, Le, Fe) {
						(this.l = ge),
							(this.n = be),
							(this.aiContributed = Fe),
							(this.g = be[Ce.startLineNumber]);
						const Oe =
							Ce.startLineNumber === Ce.endLineNumber
								? Ce.endColumn
								: this.g.length;
						(this.h = new B.$w7(1, Ce.startColumn + 1, Oe + 1)),
							(this.f = new g.$iL(
								Le.startLineNumber + 1,
								Le.startColumn + 1,
								Le.endLineNumber + 1,
								Le.endColumn + 1,
							)),
							(this.k = Ce),
							(this.d = this.l.id() + ">" + this.f + this.getMatchString());
					}
					id() {
						return this.d;
					}
					parent() {
						return this.l;
					}
					text() {
						return this.g;
					}
					range() {
						return this.f;
					}
					preview() {
						const ge = this.g.substring(0, this.h.startColumn - 1),
							be = (0, h.$7f)(ge, 26, "\u2026");
						let Ce = this.getMatchString(),
							Le = this.g.substring(this.h.endColumn - 1),
							Fe = G.c - be.length;
						return (
							(Ce = Ce.substr(0, Fe)),
							(Fe -= Ce.length),
							(Le = Le.substr(0, Fe)),
							{ before: be, fullBefore: ge, inside: Ce, after: Le }
						);
					}
					get replaceString() {
						const ge = this.parent().parent().searchModel;
						if (!ge.replacePattern)
							throw new Error(
								"searchModel.replacePattern must be set before accessing replaceString",
							);
						const be = this.fullMatchText();
						let Ce = ge.replacePattern.getReplaceString(be, ge.preserveCase);
						if (Ce !== null) return Ce;
						const Le = be.replace(
							/\r\n/g,
							`
`,
						);
						if (
							Le !== be &&
							((Ce = ge.replacePattern.getReplaceString(Le, ge.preserveCase)),
							Ce !== null)
						)
							return Ce;
						const Fe = this.fullMatchText(!0);
						if (
							((Ce = ge.replacePattern.getReplaceString(Fe, ge.preserveCase)),
							Ce !== null)
						)
							return Ce;
						const Oe = Fe.replace(
							/\r\n/g,
							`
`,
						);
						return Oe !== Fe &&
							((Ce = ge.replacePattern.getReplaceString(Oe, ge.preserveCase)),
							Ce !== null)
							? Ce
							: ge.replacePattern.pattern;
					}
					fullMatchText(ge = !1) {
						let be;
						return (
							ge
								? (be = this.n)
								: ((be = this.n.slice(
										this.k.startLineNumber,
										this.k.endLineNumber + 1,
									)),
									(be[be.length - 1] = be[be.length - 1].slice(
										0,
										this.k.endColumn,
									)),
									(be[0] = be[0].slice(this.k.startColumn))),
							be.join(`
`)
						);
					}
					rangeInPreview() {
						return {
							...this.k,
							startColumn: this.k.startColumn + 1,
							endColumn: this.k.endColumn + 1,
						};
					}
					fullPreviewLines() {
						return this.n.slice(
							this.k.startLineNumber,
							this.k.endLineNumber + 1,
						);
					}
					getMatchString() {
						return this.g.substring(
							this.h.startColumn - 1,
							this.h.endColumn - 1,
						);
					}
				}
				(e.$FNc = G), Ne([E.$ei], G.prototype, "preview", null);
				class K {
					constructor(ge, be, Ce) {
						(this.g = ge),
							(this.h = be),
							(this.k = Ce),
							(this.c = new Map()),
							(this.d = new Map()),
							(this.f = new Map());
					}
					hasCellViewModel() {
						return !(this.h instanceof z.$ENc);
					}
					get context() {
						return new Map(this.f);
					}
					matches() {
						return [...this.c.values(), ...this.d.values()];
					}
					get contentMatches() {
						return Array.from(this.c.values());
					}
					get webviewMatches() {
						return Array.from(this.d.values());
					}
					remove(ge) {
						Array.isArray(ge) || (ge = [ge]);
						for (const be of ge) this.c.delete(be.id()), this.d.delete(be.id());
					}
					clearAllMatches() {
						this.c.clear(), this.d.clear();
					}
					addContentMatches(ge) {
						ye(ge, this).forEach((Ce) => {
							this.c.set(Ce.id(), Ce);
						}),
							this.addContext(ge);
					}
					addContext(ge) {
						this.cell &&
							this.cell.resolveTextModel().then((be) => {
								(0, U.$DNc)(ge, be, this.parent.parent().query)
									.filter((Fe) => !(0, B.$q7)(Fe))
									.map((Fe) => ({ ...Fe, lineNumber: Fe.lineNumber + 1 }))
									.forEach((Fe) => {
										this.f.set(Fe.lineNumber, Fe.text);
									});
							});
					}
					addWebviewMatches(ge) {
						ye(ge, this).forEach((Ce) => {
							this.d.set(Ce.id(), Ce);
						});
					}
					setCellModel(ge) {
						this.h = ge;
					}
					get parent() {
						return this.g;
					}
					get id() {
						return this.h?.id ?? `${R.$T7}${this.cellIndex}`;
					}
					get cellIndex() {
						return this.k;
					}
					get cell() {
						return this.h;
					}
				}
				e.$GNc = K;
				class J extends G {
					constructor(ge, be, Ce, Le, Fe) {
						super(ge.parent, be, Ce, Le, !1),
							(this.q = ge),
							(this.d =
								this.l.id() +
								">" +
								this.q.cellIndex +
								(Fe ? "_" + Fe : "") +
								"_" +
								this.r() +
								this.f +
								this.getMatchString()),
							(this.o = Fe);
					}
					parent() {
						return this.q.parent;
					}
					get cellParent() {
						return this.q;
					}
					r() {
						return this.isWebviewMatch() ? "webview" : "content";
					}
					isWebviewMatch() {
						return this.o !== void 0;
					}
					isReadonly() {
						return !this.q.hasCellViewModel() || this.isWebviewMatch();
					}
					get cellIndex() {
						return this.q.cellIndex;
					}
					get webviewIndex() {
						return this.o;
					}
					get cell() {
						return this.q.cell;
					}
				}
				e.$HNc = J;
				let W = class extends r.$1c {
					static {
						H = this;
					}
					static {
						this.c = o.$eY.register({
							description: "search-current-find-match",
							stickiness: p.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							zIndex: 13,
							className: "currentFindMatch",
							overviewRuler: {
								color: (0, I.$jP)(S.$vR),
								position: p.OverviewRulerLane.Center,
							},
							minimap: {
								color: (0, I.$jP)(S.$AR),
								position: p.MinimapPosition.Inline,
							},
						});
					}
					static {
						this.f = o.$eY.register({
							description: "search-find-match",
							stickiness: p.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							className: "findMatch",
							overviewRuler: {
								color: (0, I.$jP)(S.$vR),
								position: p.OverviewRulerLane.Center,
							},
							minimap: {
								color: (0, I.$jP)(S.$AR),
								position: p.MinimapPosition.Inline,
							},
						});
					}
					static g(ge) {
						return ge ? H.c : H.f;
					}
					get context() {
						return new Map(this.H);
					}
					get cellContext() {
						const ge = new Map();
						return (
							this.w.forEach((be) => {
								ge.set(be.id, be.context);
							}),
							ge
						);
					}
					constructor(ge, be, Ce, Le, Fe, Oe, xe, He, Ke, Je, Te) {
						super(),
							(this.O = ge),
							(this.P = be),
							(this.Q = Ce),
							(this.R = Le),
							(this.S = Fe),
							(this.U = Oe),
							(this.W = xe),
							(this.X = He),
							(this.Y = Ke),
							(this.Z = Te),
							(this.h = this.D(new d.$re())),
							(this.onChange = this.h.event),
							(this.n = this.D(new d.$re())),
							(this.onDispose = this.n.event),
							(this.s = null),
							(this.t = null),
							(this.z = null),
							(this.G = []),
							(this.H = new Map()),
							(this.I = null),
							(this.J = null),
							(this.eb = Promise.resolve()),
							(this.q = this.S.resource),
							(this.u = new Map()),
							(this.y = new Set()),
							(this.F = new t.$Yh(this.bb.bind(this), 250)),
							(this.C = new m.$Y(() => Je.getUriBasenameLabel(this.resource))),
							(this.w = new Map()),
							(this.L = new t.$Yh(
								this.updateMatchesForEditorWidget.bind(this),
								250,
							));
					}
					getTextModel() {
						return this.s;
					}
					addWebviewMatchesToCell(ge, be) {
						const Ce = this.getCellMatch(ge);
						Ce !== void 0 && Ce.addWebviewMatches(be);
					}
					addContentMatchesToCell(ge, be) {
						const Ce = this.getCellMatch(ge);
						Ce !== void 0 && Ce.addContentMatches(be);
					}
					getCellMatch(ge) {
						return this.w.get(ge);
					}
					addCellMatch(ge) {
						const be = new K(
							this,
							(0, N.$xNc)(ge) ? ge.cell : void 0,
							ge.index,
						);
						this.w.set(be.id, be),
							this.addWebviewMatchesToCell(be.id, ge.webviewResults),
							this.addContentMatchesToCell(be.id, ge.contentResults);
					}
					get closestRoot() {
						return this.U;
					}
					hasReadonlyMatches() {
						return this.matches().some(
							(ge) => ge instanceof J && ge.isReadonly(),
						);
					}
					createMatches(ge) {
						const be = this.X.getModel(this.q);
						if (be && !ge) this.bindModel(be), this.bb();
						else {
							const Ce = this.Z.retrieveExistingWidgetFromURI(this.resource);
							Ce?.value && this.bindNotebookEditorWidget(Ce.value),
								this.S.results &&
									this.S.results.filter(B.$q7).forEach((Le) => {
										$e(Le, this, ge).forEach((Fe) => this.add(Fe));
									}),
								((0, N.$wNc)(this.S) || (0, R.$S7)(this.S)) &&
									(this.S.cellResults?.forEach((Le) => this.addCellMatch(Le)),
									this.jb(this.cellMatches()),
									this.h.fire({ forceUpdateModel: !0 })),
								this.addContext(this.S.results);
						}
					}
					bindModel(ge) {
						(this.s = ge),
							(this.t = this.s.onDidChangeContent(() => {
								this.F.schedule();
							})),
							this.s.onWillDispose(() => this.$()),
							this.updateHighlights();
					}
					$() {
						this.bb(), this.ab();
					}
					ab() {
						this.s &&
							(this.F.cancel(),
							this.s.changeDecorations((ge) => {
								this.G = ge.deltaDecorations(this.G, []);
							}),
							(this.s = null),
							this.t.dispose());
					}
					bb() {
						if (!this.s) return;
						this.u = new Map();
						const ge =
								this.O.isWordMatch && this.O.wordSeparators
									? this.O.wordSeparators
									: null,
							be = this.s.findMatches(
								this.O.pattern,
								this.s.getFullModelRange(),
								!!this.O.isRegExp,
								!!this.O.isCaseSensitive,
								ge,
								!1,
								this.Q ?? B.$o7,
							);
						this.db(be, !0, this.s, !1);
					}
					async cb(ge, be) {
						if (!this.s) return;
						const Ce = {
							startLineNumber: ge,
							startColumn: this.s.getLineMinColumn(ge),
							endLineNumber: ge,
							endColumn: this.s.getLineMaxColumn(ge),
						};
						Array.from(this.u.values())
							.filter((xe) => xe.range().startLineNumber === ge)
							.forEach((xe) => this.u.delete(xe.id()));
						const Fe =
								this.O.isWordMatch && this.O.wordSeparators
									? this.O.wordSeparators
									: null,
							Oe = this.s.findMatches(
								this.O.pattern,
								Ce,
								!!this.O.isRegExp,
								!!this.O.isCaseSensitive,
								Fe,
								!1,
								this.Q ?? B.$o7,
							);
						this.db(Oe, be, this.s, !1);
					}
					db(ge, be, Ce, Le) {
						const Fe = (0, U.$CNc)(ge, Ce, this.P);
						Fe.forEach((Oe) => {
							$e(Oe, this, Le).forEach((xe) => {
								this.y.has(xe.id()) ||
									(this.add(xe), this.isMatchSelected(xe) && (this.z = xe));
							});
						}),
							this.addContext(
								(0, U.$DNc)(Fe, Ce, this.parent().parent().query),
							),
							this.h.fire({ forceUpdateModel: be }),
							this.updateHighlights();
					}
					updateHighlights() {
						this.s &&
							this.s.changeDecorations((ge) => {
								const be = this.parent().showHighlights
									? this.matches().map((Ce) => ({
											range: Ce.range(),
											options: H.g(this.isMatchSelected(Ce)),
										}))
									: [];
								this.G = ge.deltaDecorations(this.G, be);
							});
					}
					id() {
						return this.resource.toString();
					}
					parent() {
						return this.R;
					}
					matches() {
						const ge = Array.from(this.w.values()).flatMap((be) =>
							be.matches(),
						);
						return [...this.u.values(), ...ge];
					}
					textMatches() {
						return Array.from(this.u.values());
					}
					cellMatches() {
						return Array.from(this.w.values());
					}
					remove(ge) {
						Array.isArray(ge) || (ge = [ge]);
						for (const be of ge) this.fb(be), this.y.add(be.id());
						this.h.fire({ didRemove: !0 });
					}
					async replace(ge) {
						return (this.eb = this.eb.finally(async () => {
							await this.Y.replace(ge),
								await this.cb(ge.range().startLineNumber, !1);
						}));
					}
					setSelectedMatch(ge) {
						if (ge) {
							if (!this.isMatchSelected(ge) && ge instanceof J) {
								this.z = ge;
								return;
							}
							if (!this.u.has(ge.id()) || this.isMatchSelected(ge)) return;
						}
						(this.z = ge), this.updateHighlights();
					}
					getSelectedMatch() {
						return this.z;
					}
					isMatchSelected(ge) {
						return !!this.z && this.z.id() === ge.id();
					}
					count() {
						return this.matches().length;
					}
					get resource() {
						return this.q;
					}
					name() {
						return this.C.value;
					}
					addContext(ge) {
						return ge
							? ge
									.filter((Ce) => !(0, B.$q7)(Ce))
									.forEach((Ce) => this.H.set(Ce.lineNumber, Ce.text))
							: void 0;
					}
					add(ge, be) {
						this.u.set(ge.id(), ge),
							be && this.h.fire({ forceUpdateModel: !0 });
					}
					fb(ge) {
						ge instanceof J
							? (ge.cellParent.remove(ge),
								ge.cellParent.matches().length === 0 &&
									this.w.delete(ge.cellParent.id))
							: this.u.delete(ge.id()),
							this.isMatchSelected(ge)
								? (this.setSelectedMatch(null),
									this.M?.clearCurrentFindMatchDecoration())
								: this.updateHighlights(),
							ge instanceof J && this.jb(this.cellMatches());
					}
					async resolveFileStat(ge) {
						this.r = await ge.stat(this.resource).catch(() => {});
					}
					get fileStat() {
						return this.r;
					}
					set fileStat(ge) {
						this.r = ge;
					}
					dispose() {
						this.setSelectedMatch(null),
							this.ab(),
							this.unbindNotebookEditorWidget(),
							this.n.fire(),
							super.dispose();
					}
					hasOnlyReadOnlyMatches() {
						return this.matches().every(
							(ge) => ge instanceof J && ge.isReadonly(),
						);
					}
					bindNotebookEditorWidget(ge) {
						this.I !== ge &&
							((this.I = ge),
							(this.J =
								this.I.textModel?.onDidChangeContent((be) => {
									be.rawEvents.some(
										(Ce) =>
											Ce.kind === D.NotebookCellsChangeType.ChangeCellContent ||
											Ce.kind === D.NotebookCellsChangeType.ModelChange,
									) && this.L.schedule();
								}) ?? null),
							this.gb());
					}
					unbindNotebookEditorWidget(ge) {
						(ge && this.I !== ge) ||
							(this.I && (this.L.cancel(), this.J?.dispose()),
							this.hb(),
							(this.I = null));
					}
					updateNotebookHighlights() {
						this.parent().showHighlights
							? (this.gb(), this.jb(Array.from(this.w.values())))
							: this.hb();
					}
					gb() {
						this.I &&
							(this.M?.stopWebviewFind(),
							this.M?.dispose(),
							(this.M = new P.$n2b(this.I, this.W)),
							this.z instanceof J && this.kb(this.z));
					}
					hb() {
						this.M &&
							(this.M?.stopWebviewFind(), this.M?.dispose(), (this.M = void 0));
					}
					ib(ge, be) {
						if (!this.I) return;
						const Ce = new Map(this.w);
						this.I.getId() !== this.N &&
							(this.w.clear(), (this.N = this.I.getId())),
							ge.forEach((Le) => {
								let Fe = this.w.get(Le.cell.id);
								if (this.I && !Fe) {
									const xe = this.I.getCellIndex(Le.cell),
										He = Ce.get(`${R.$T7}${xe}`);
									He &&
										(He.setCellModel(Le.cell), He.clearAllMatches(), (Fe = He));
								}
								Fe?.clearAllMatches();
								const Oe = Fe ?? new K(this, Le.cell, Le.index);
								Oe.addContentMatches((0, N.$yNc)(Le.contentMatches, Le.cell)),
									Oe.addWebviewMatches((0, N.$zNc)(Le.webviewMatches)),
									this.w.set(Oe.id, Oe);
							}),
							this.M?.setAllFindMatchesDecorations(ge),
							this.z instanceof J && this.kb(this.z),
							this.h.fire({ forceUpdateModel: be });
					}
					jb(ge) {
						if (!this.M) return;
						const be = (0, x.$Lb)(
							ge.map((Ce) => {
								const Le = (0, x.$Lb)(
									Ce.webviewMatches.map((Oe) => {
										if (Oe.webviewIndex) return { index: Oe.webviewIndex };
									}),
								);
								if (!Ce.cell) return;
								const Fe = Ce.contentMatches.map(
									(Oe) => new p.$MN(Oe.range(), [Oe.text()]),
								);
								return new F.$o2b(Ce.cell, Ce.cellIndex, Fe, Le);
							}),
						);
						try {
							this.M.setAllFindMatchesDecorations(be);
						} catch {}
					}
					async updateMatchesForEditorWidget() {
						if (!this.I) return;
						this.u = new Map();
						const ge =
								this.O.isWordMatch && this.O.wordSeparators
									? this.O.wordSeparators
									: null,
							be = await this.I.find(
								this.O.pattern,
								{
									regex: this.O.isRegExp,
									wholeWord: this.O.isWordMatch,
									caseSensitive: this.O.isCaseSensitive,
									wordSeparators: ge ?? void 0,
									includeMarkupInput:
										this.O.notebookInfo?.isInNotebookMarkdownInput,
									includeMarkupPreview:
										this.O.notebookInfo?.isInNotebookMarkdownPreview,
									includeCodeInput: this.O.notebookInfo?.isInNotebookCellInput,
									includeOutput: this.O.notebookInfo?.isInNotebookCellOutput,
								},
								i.CancellationToken.None,
								!1,
								!0,
								this.W,
							);
						this.ib(be, !0);
					}
					async showMatch(ge) {
						const be = await this.kb(ge);
						this.setSelectedMatch(ge), this.lb(ge, be);
					}
					async kb(ge) {
						return !this.M || !ge.cell
							? null
							: ge.webviewIndex === void 0
								? this.M.highlightCurrentFindMatchDecorationInCell(
										ge.cell,
										ge.range(),
									)
								: this.M.highlightCurrentFindMatchDecorationInWebview(
										ge.cell,
										ge.webviewIndex,
									);
					}
					lb(ge, be) {
						!this.I ||
							!ge.cell ||
							(ge.webviewIndex !== void 0
								? this.I.getCellIndex(ge.cell) !== void 0 &&
									this.I.revealCellOffsetInCenter(ge.cell, be ?? 0)
								: (ge.cell.updateEditState(
										ge.cell.getEditState(),
										"focusNotebookCell",
									),
									this.I.setCellEditorSelection(ge.cell, ge.range()),
									this.I.revealRangeInCenterIfOutsideViewportAsync(
										ge.cell,
										ge.range(),
									)));
					}
				};
				(e.$INc = W),
					(e.$INc =
						W =
						H =
							Ne([j(7, f.$QO), j(8, M.$XNc), j(9, l.$3N), j(10, L.$n5b)], W));
				let X = (q = class extends r.$1c {
					constructor(ge, be, Ce, Le, Fe, Oe, xe, He, Ke, Je, Te) {
						super(),
							(this.u = ge),
							(this.w = be),
							(this.y = Ce),
							(this.z = Le),
							(this.C = Fe),
							(this.F = Oe),
							(this.G = xe),
							(this.H = He),
							(this.I = Ke),
							(this.J = Te),
							(this.c = this.D(new d.$re())),
							(this.onChange = this.c.event),
							(this.f = this.D(new d.$re())),
							(this.onDispose = this.f.event),
							(this.s = !1),
							(this.g = new u.$Gc()),
							(this.h = new u.$Gc()),
							(this.n = c.$Si.forUris((Ee) =>
								this.J.extUri.ignorePathCasing(Ee),
							)),
							(this.q = new u.$Gc()),
							(this.r = new u.$Gc()),
							(this.t = new m.$Y(() =>
								this.resource ? Je.getUriBasenameLabel(this.resource) : "",
							));
					}
					get searchModel() {
						return this.F.searchModel;
					}
					get showHighlights() {
						return this.C.showHighlights;
					}
					get closestRoot() {
						return this.G;
					}
					set replacingAll(ge) {
						this.s = ge;
					}
					id() {
						return this.w;
					}
					get resource() {
						return this.u;
					}
					index() {
						return this.y;
					}
					name() {
						return this.t.value;
					}
					parent() {
						return this.C;
					}
					bindModel(ge) {
						const be = this.g.get(ge.uri);
						be
							? be.bindModel(ge)
							: this.getFolderMatch(ge.uri)
									?.getDownstreamFileMatch(ge.uri)
									?.bindModel(ge);
					}
					async bindNotebookEditorWidget(ge, be) {
						const Ce = this.g.get(be);
						if (Ce)
							Ce.bindNotebookEditorWidget(ge),
								await Ce.updateMatchesForEditorWidget();
						else {
							const Le = this.folderMatchesIterator();
							for (const Fe of Le) await Fe.bindNotebookEditorWidget(ge, be);
						}
					}
					unbindNotebookEditorWidget(ge, be) {
						const Ce = this.g.get(be);
						if (Ce) Ce.unbindNotebookEditorWidget(ge);
						else {
							const Le = this.folderMatchesIterator();
							for (const Fe of Le) Fe.unbindNotebookEditorWidget(ge, be);
						}
					}
					createIntermediateFolderMatch(ge, be, Ce, Le, Fe) {
						const Oe = this.D(
							this.I.createInstance(Y, ge, be, Ce, Le, this, this.F, Fe),
						);
						return (
							this.configureIntermediateMatch(Oe), this.doAddFolder(Oe), Oe
						);
					}
					configureIntermediateMatch(ge) {
						const be = ge.onChange((Ce) => this.onFolderChange(ge, Ce));
						this.D(ge.onDispose(() => be.dispose()));
					}
					clear(ge = !1) {
						const be = this.allDownstreamFileMatches();
						this.R(),
							this.c.fire({
								elements: be,
								removed: !0,
								added: !1,
								clearingAll: ge,
							});
					}
					remove(ge) {
						Array.isArray(ge) || (ge = [ge]);
						const be = fe(ge);
						this.Q(be);
					}
					async replace(ge) {
						return this.H.replace([ge]).then(() => {
							this.Q([ge], !0, !0, !0);
						});
					}
					replaceAll() {
						const ge = this.matches();
						return this.P(ge);
					}
					matches() {
						return [
							...this.fileMatchesIterator(),
							...this.folderMatchesIterator(),
						];
					}
					fileMatchesIterator() {
						return this.g.values();
					}
					folderMatchesIterator() {
						return this.h.values();
					}
					isEmpty() {
						return this.L() + this.M() === 0;
					}
					getDownstreamFileMatch(ge) {
						const be = this.g.get(ge);
						if (be) return be;
						const Le = this.getFolderMatch(ge)?.getDownstreamFileMatch(ge);
						return Le || null;
					}
					allDownstreamFileMatches() {
						let ge = [];
						const be = this.folderMatchesIterator();
						for (const Ce of be) ge = ge.concat(Ce.allDownstreamFileMatches());
						return [...this.fileMatchesIterator(), ...ge];
					}
					L() {
						return this.g.size;
					}
					M() {
						return this.h.size;
					}
					count() {
						return this.L() + this.M();
					}
					recursiveFileCount() {
						return this.allDownstreamFileMatches().length;
					}
					recursiveMatchCount() {
						return this.allDownstreamFileMatches().reduce(
							(ge, be) => ge + be.count(),
							0,
						);
					}
					get query() {
						return this.z;
					}
					addFileMatch(ge, be, Ce, Le) {
						const Fe = [],
							Oe = [];
						ge.forEach((He) => {
							const Ke = this.getDownstreamFileMatch(He.resource);
							if (Ke)
								He.results &&
									He.results.filter(B.$q7).forEach((Je) => {
										$e(Je, Ke, Le).forEach((Te) => Ke.add(Te));
									}),
									((0, N.$wNc)(He) || (0, R.$S7)(He)) &&
										He.cellResults?.forEach((Je) => {
											const Te = Ke.getCellMatch((0, N.$vNc)(Je));
											Te
												? (Te.addContentMatches(Je.contentResults),
													Te.addWebviewMatches(Je.webviewResults))
												: Ke.addCellMatch(Je);
										}),
									Oe.push(Ke),
									He.results &&
										He.results.length > 0 &&
										Ke.addContext(He.results);
							else if (this instanceof ie || this instanceof ne) {
								const Je = this.createAndConfigureFileMatch(He, Ce);
								Fe.push(Je);
							}
						});
						const xe = [...Fe, ...Oe];
						!be &&
							xe.length &&
							this.c.fire({ elements: xe, added: !!Fe.length });
					}
					doAddFile(ge) {
						this.g.set(ge.resource, ge),
							this.q.has(ge.resource) && this.q.delete(ge.resource);
					}
					hasOnlyReadOnlyMatches() {
						return Array.from(this.g.values()).every((ge) =>
							ge.hasOnlyReadOnlyMatches(),
						);
					}
					N(ge, be) {
						return (
							this.J.extUri.isEqualOrParent(be, ge) &&
							!this.J.extUri.isEqual(be, ge)
						);
					}
					O(ge) {
						let be = this;
						for (; be instanceof q; ) {
							if (be.id() === ge.id()) return !0;
							be = be.parent();
						}
						return !1;
					}
					getFolderMatch(ge) {
						return this.n.findSubstr(ge);
					}
					doAddFolder(ge) {
						if (this instanceof Y && !this.N(this.resource, ge.resource))
							throw Error(
								`${ge.resource} does not belong as a child of ${this.resource}`,
							);
						if (this.O(ge))
							throw Error(`${ge.resource} is a parent of ${this.resource}`);
						this.h.set(ge.resource, ge),
							this.n.set(ge.resource, ge),
							this.r.has(ge.resource) && this.r.delete(ge.resource);
					}
					async P(ge) {
						const be = fe(ge);
						await this.H.replace(be), this.Q(be, !0, !0, !0);
					}
					onFileChange(ge, be = !1) {
						let Ce = !1;
						this.g.has(ge.resource) || (this.doAddFile(ge), (Ce = !0)),
							ge.count() === 0 && (this.Q([ge], !1, !1), (Ce = !1), (be = !0)),
							this.s || this.c.fire({ elements: [ge], added: Ce, removed: be });
					}
					onFolderChange(ge, be) {
						this.h.has(ge.resource) || this.doAddFolder(ge),
							ge.isEmpty() && (this.h.delete(ge.resource), ge.dispose()),
							this.c.fire(be);
					}
					Q(ge, be = !0, Ce = !0, Le = !1) {
						const Fe = [];
						for (const Oe of ge)
							if (this.g.get(Oe.resource)) {
								if (Le && Oe.hasReadonlyMatches()) continue;
								this.g.delete(Oe.resource),
									be ? Oe.dispose() : this.q.set(Oe.resource, Oe),
									Fe.push(Oe);
							} else {
								const xe = this.getFolderMatch(Oe.resource);
								if (xe) xe.Q([Oe], be, Ce);
								else
									throw Error(
										`FileMatch ${Oe.resource} is not located within FolderMatch ${this.resource}`,
									);
							}
						Ce && this.c.fire({ elements: Fe, removed: !0 });
					}
					R() {
						[...this.g.values()].forEach((ge) => ge.dispose()),
							[...this.h.values()].forEach((ge) => ge.R()),
							[...this.q.values()].forEach((ge) => ge.dispose()),
							[...this.r.values()].forEach((ge) => ge.R()),
							this.g.clear(),
							this.h.clear(),
							this.q.clear(),
							this.r.clear();
					}
					dispose() {
						this.R(), this.f.fire(), super.dispose();
					}
				});
				(e.$JNc = X),
					(e.$JNc =
						X =
						q =
							Ne([j(7, M.$XNc), j(8, s.$Li), j(9, l.$3N), j(10, T.$Vl)], X));
				let Y = class extends X {
					constructor(ge, be, Ce, Le, Fe, Oe, xe, He, Ke, Je, Te) {
						super(ge, be, Ce, Le, Fe, Oe, xe, He, Ke, Je, Te),
							(this.S = new m.$Y(() =>
								this.J.extUri.removeTrailingPathSeparator(
									this.J.extUri.normalizePath(this.resource),
								),
							));
					}
					get resource() {
						return this.u;
					}
					get normalizedResource() {
						return this.S.value;
					}
				};
				(e.$KNc = Y),
					(e.$KNc = Y =
						Ne([j(7, M.$XNc), j(8, s.$Li), j(9, l.$3N), j(10, T.$Vl)], Y));
				let ie = class extends Y {
					constructor(ge, be, Ce, Le, Fe, Oe, xe, He, Ke, Je) {
						super(ge, be, Ce, Le, Fe, Fe, null, xe, He, Ke, Je), (this.U = Oe);
					}
					W(ge) {
						return this.J.extUri.normalizePath(this.J.extUri.dirname(ge));
					}
					X(ge, be) {
						return this.J.extUri.isEqual(ge, be);
					}
					Y(ge, be, Ce, Le, Fe, Oe, xe) {
						const He = this.I.createInstance(W, ge, be, Ce, Le, Fe, Oe, xe);
						He.createMatches(this.U), Le.doAddFile(He);
						const Ke = He.onChange(({ didRemove: Je }) =>
							Le.onFileChange(He, Je),
						);
						return this.D(He.onDispose(() => Ke.dispose())), He;
					}
					createAndConfigureFileMatch(ge, be) {
						if (!this.N(this.resource, ge.resource))
							throw Error(
								`${ge.resource} is not a descendant of ${this.resource}`,
							);
						const Ce = [];
						let Le = this.W(ge.resource);
						for (; !this.X(this.normalizedResource, Le); ) {
							Ce.unshift(Le);
							const xe = Le;
							if (
								((Le = this.J.extUri.removeTrailingPathSeparator(this.W(Le))),
								this.X(xe, Le))
							)
								throw Error(
									`${ge.resource} is not correctly configured as a child of ${this.normalizedResource}`,
								);
						}
						const Fe = this.closestRoot ?? this;
						let Oe = this;
						for (let xe = 0; xe < Ce.length; xe++) {
							let He = Oe.getFolderMatch(Ce[xe]);
							He ||
								(He = Oe.createIntermediateFolderMatch(
									Ce[xe],
									Ce[xe].toString(),
									-1,
									this.z,
									Fe,
								)),
								(Oe = He);
						}
						return this.Y(
							this.z.contentPattern,
							this.z.previewOptions,
							this.z.maxResults,
							Oe,
							ge,
							Fe,
							be,
						);
					}
				};
				(e.$LNc = ie),
					(e.$LNc = ie =
						Ne([j(6, M.$XNc), j(7, s.$Li), j(8, l.$3N), j(9, T.$Vl)], ie));
				let ne = class extends X {
					constructor(ge, be, Ce, Le, Fe, Oe, xe, He) {
						super(null, ge, be, Ce, Le, Le, null, Fe, Oe, xe, He);
					}
					createAndConfigureFileMatch(ge, be) {
						const Ce = this.D(
							this.I.createInstance(
								W,
								this.z.contentPattern,
								this.z.previewOptions,
								this.z.maxResults,
								this,
								ge,
								null,
								be,
							),
						);
						Ce.createMatches(!1), this.doAddFile(Ce);
						const Le = Ce.onChange(({ didRemove: Fe }) =>
							this.onFileChange(Ce, Fe),
						);
						return this.D(Ce.onDispose(() => Le.dispose())), Ce;
					}
				};
				(e.$MNc = ne),
					(e.$MNc = ne =
						Ne([j(4, M.$XNc), j(5, s.$Li), j(6, l.$3N), j(7, T.$Vl)], ne));
				let ee = -1,
					_ = -1;
				function te(ve, ge, be = B.SearchSortOrder.Default) {
					if (ve instanceof W && ge instanceof X) return 1;
					if (ge instanceof W && ve instanceof X) return -1;
					if (ve instanceof X && ge instanceof X) {
						if (((ee = ve.index()), (_ = ge.index()), ee !== -1 && _ !== -1))
							return ee - _;
						switch (be) {
							case B.SearchSortOrder.CountDescending:
								return ge.count() - ve.count();
							case B.SearchSortOrder.CountAscending:
								return ve.count() - ge.count();
							case B.SearchSortOrder.Type:
								return (0, w.$8r)(ve.name(), ge.name());
							case B.SearchSortOrder.FileNames:
								return (0, w.$3r)(ve.name(), ge.name());
							default:
								return !ve.resource || !ge.resource
									? 0
									: (0, w.$as)(ve.resource.fsPath, ge.resource.fsPath) ||
											(0, w.$3r)(ve.name(), ge.name());
						}
					}
					if (ve instanceof W && ge instanceof W)
						switch (be) {
							case B.SearchSortOrder.CountDescending:
								return ge.count() - ve.count();
							case B.SearchSortOrder.CountAscending:
								return ve.count() - ge.count();
							case B.SearchSortOrder.Type:
								return (0, w.$8r)(ve.name(), ge.name());
							case B.SearchSortOrder.FileNames:
								return (0, w.$3r)(ve.name(), ge.name());
							case B.SearchSortOrder.Modified: {
								const Ce = ve.fileStat,
									Le = ge.fileStat;
								if (Ce && Le) return Le.mtime - Ce.mtime;
							}
							default:
								return (
									(0, w.$as)(ve.resource.fsPath, ge.resource.fsPath) ||
									(0, w.$3r)(ve.name(), ge.name())
								);
						}
					return ve instanceof J && ge instanceof J
						? Q(ve, ge)
						: ve instanceof G && ge instanceof G
							? g.$iL.compareRangesUsingStarts(ve.range(), ge.range())
							: 0;
				}
				function Q(ve, ge) {
					return ve.cellIndex === ge.cellIndex
						? ve.webviewIndex !== void 0 && ge.webviewIndex !== void 0
							? ve.webviewIndex - ge.webviewIndex
							: ve.webviewIndex === void 0 && ge.webviewIndex === void 0
								? g.$iL.compareRangesUsingStarts(ve.range(), ge.range())
								: ve.webviewIndex !== void 0
									? 1
									: -1
						: ve.cellIndex < ge.cellIndex
							? -1
							: 1;
				}
				function Z(ve, ge, be = B.SearchSortOrder.Default) {
					const Ce = se(ve),
						Le = se(ge);
					let Fe = Ce.length - 1,
						Oe = Le.length - 1;
					for (; Fe >= 0 && Oe >= 0; ) {
						if (Ce[Fe].id() !== Le[Oe].id()) return te(Ce[Fe], Le[Oe], be);
						Fe--, Oe--;
					}
					const xe = Fe === 0,
						He = Oe === 0;
					return xe && !He ? 1 : !xe && He ? -1 : 0;
				}
				function se(ve) {
					const ge = [];
					let be = ve;
					for (; !(be instanceof re); ) ge.push(be), (be = be.parent());
					return ge;
				}
				let re = class extends r.$1c {
					constructor(ge, be, Ce, Le, Fe, Oe) {
						super(),
							(this.searchModel = ge),
							(this.G = be),
							(this.H = Ce),
							(this.I = Le),
							(this.J = Fe),
							(this.L = Oe),
							(this.c = this.D(new d.$ue({ merge: me }))),
							(this.onChange = this.c.event),
							(this.f = []),
							(this.g = []),
							(this.h = null),
							(this.n = c.$Si.forUris((xe) =>
								this.J.extUri.ignorePathCasing(xe),
							)),
							(this.q = c.$Si.forUris((xe) =>
								this.J.extUri.ignorePathCasing(xe),
							)),
							(this.r = !1),
							(this.s = null),
							(this.u = () => Promise.resolve()),
							(this.w = !1),
							(this.t = this.H.createInstance(pe)),
							this.I.getModels().forEach((xe) => this.N(xe)),
							this.D(this.I.onModelAdded((xe) => this.N(xe))),
							this.D(
								this.L.onDidAddNotebookEditor((xe) => {
									xe instanceof k.$24b && this.M(xe);
								}),
							),
							this.D(
								this.onChange((xe) => {
									xe.removed && (this.w = !this.isEmpty() || !this.isEmpty(!0));
								}),
							);
					}
					async batchReplace(ge) {
						try {
							this.c.pause(),
								await Promise.all(
									ge.map(async (be) => {
										const Ce = be.parent();
										((Ce instanceof X || Ce instanceof W) && ue(Ce, ge)) ||
											(be instanceof W
												? await be.parent().replace(be)
												: be instanceof G
													? await be.parent().replace(be)
													: be instanceof X && (await be.replaceAll()));
									}),
								);
						} finally {
							this.c.resume();
						}
					}
					batchRemove(ge) {
						const be = [];
						try {
							this.c.pause(),
								ge.forEach((Ce) => {
									ue(Ce, be) || (Ce.parent().remove(Ce), be.push(Ce));
								});
						} finally {
							this.c.resume();
						}
					}
					get isDirty() {
						return this.w;
					}
					get query() {
						return this.s;
					}
					set query(ge) {
						const be = this.folderMatches();
						(this.u = async () => {
							be.forEach((Ce) => Ce.clear()),
								be.forEach((Ce) => Ce.dispose()),
								(this.w = !1);
						}),
							(this.C = void 0),
							(this.F = void 0),
							this.t.removeHighlightRange(),
							(this.n = c.$Si.forUris((Ce) =>
								this.J.extUri.ignorePathCasing(Ce),
							)),
							(this.q = c.$Si.forUris((Ce) =>
								this.J.extUri.ignorePathCasing(Ce),
							)),
							ge &&
								((this.f = ((ge && ge.folderQueries) || [])
									.map((Ce) => Ce.folder)
									.map((Ce, Le) => this.Q(Ce, Ce.toString(), Le, ge, !1))),
								this.f.forEach((Ce) => this.n.set(Ce.resource, Ce)),
								(this.g = ((ge && ge.folderQueries) || [])
									.map((Ce) => Ce.folder)
									.map((Ce, Le) => this.Q(Ce, Ce.toString(), Le, ge, !0))),
								this.g.forEach((Ce) => this.q.set(Ce.resource, Ce)),
								(this.h = this.Q(
									null,
									"otherFiles",
									this.f.length + this.g.length + 1,
									ge,
									!1,
								)),
								(this.s = ge));
					}
					setCachedSearchComplete(ge, be) {
						be ? (this.F = ge) : (this.C = ge);
					}
					getCachedSearchComplete(ge) {
						return ge ? this.F : this.C;
					}
					M(ge) {
						this.y?.dispose(),
							(this.y = ge.onWillChangeModel((be) => {
								be && this.P(ge, be?.uri);
							})),
							this.z?.dispose(),
							(this.z = ge.onDidAttachViewModel(() => {
								ge.hasModel() && this.O(ge, ge.textModel.uri);
							}));
					}
					N(ge) {
						this.n.findSubstr(ge.uri)?.bindModel(ge);
					}
					async O(ge, be) {
						await this.n.findSubstr(be)?.bindNotebookEditorWidget(ge, be);
					}
					P(ge, be) {
						this.n.findSubstr(be)?.unbindNotebookEditorWidget(ge, be);
					}
					Q(ge, be, Ce, Le, Fe) {
						let Oe;
						ge
							? (Oe = this.D(
									this.H.createInstance(ie, ge, be, Ce, Le, this, Fe),
								))
							: (Oe = this.D(this.H.createInstance(ne, be, Ce, Le, this)));
						const xe = Oe.onChange((He) => this.c.fire(He));
						return this.D(Oe.onDispose(() => xe.dispose())), Oe;
					}
					add(ge, be, Ce, Le = !1) {
						const { byFolder: Fe, other: Oe } = this.W(ge, Ce);
						Fe.forEach((xe) => {
							if (!xe.length) return;
							(Ce
								? this.S(xe[0].resource)
								: this.R(xe[0].resource)
							)?.addFileMatch(xe, Le, be, Ce);
						}),
							Ce || this.h?.addFileMatch(Oe, Le, be, !1),
							this.u();
					}
					clear() {
						this.folderMatches().forEach((ge) => ge.clear(!0)),
							this.folderMatches(!0),
							this.X(),
							(this.f = []),
							(this.g = []),
							(this.h = null);
					}
					remove(ge, be = !1) {
						Array.isArray(ge) || (ge = [ge]),
							ge.forEach((Oe) => {
								Oe instanceof X && Oe.clear();
							});
						const Ce = ge.filter((Oe) => Oe instanceof W),
							{ byFolder: Le, other: Fe } = this.W(Ce, be);
						Le.forEach((Oe) => {
							Oe.length && this.R(Oe[0].resource).remove(Oe);
						}),
							Fe.length && this.R(Fe[0].resource).remove(Fe);
					}
					replace(ge) {
						return this.R(ge.resource).replace(ge);
					}
					replaceAll(ge) {
						return (
							(this.U = !0),
							this.G.replace(this.matches(), ge).then(
								() => {
									(this.U = !1), this.clear();
								},
								() => {
									this.U = !1;
								},
							)
						);
					}
					folderMatches(ge = !1) {
						return ge ? this.g : this.h ? [...this.f, this.h] : [...this.f];
					}
					matches(ge = !1) {
						const be = [];
						return (
							this.folderMatches(ge).forEach((Ce) => {
								be.push(Ce.allDownstreamFileMatches());
							}),
							[].concat(...be)
						);
					}
					isEmpty(ge = !1) {
						return this.folderMatches(ge).every((be) => be.isEmpty());
					}
					fileCount(ge = !1) {
						return this.folderMatches(ge).reduce(
							(be, Ce) => be + Ce.recursiveFileCount(),
							0,
						);
					}
					count(ge = !1) {
						return this.matches(ge).reduce((be, Ce) => be + Ce.count(), 0);
					}
					get showHighlights() {
						return this.r;
					}
					toggleHighlights(ge) {
						if (this.r === ge) return;
						this.r = ge;
						let be = null;
						this.matches().forEach((Ce) => {
							Ce.updateHighlights(),
								Ce.updateNotebookHighlights(),
								be || (be = Ce.getSelectedMatch());
						}),
							this.r && be
								? this.t.highlightRange(be.parent().resource, be.range())
								: this.t.removeHighlightRange();
					}
					get rangeHighlightDecorations() {
						return this.t;
					}
					R(ge) {
						const be = this.n.findSubstr(ge);
						return be || this.h;
					}
					S(ge) {
						return this.q.findSubstr(ge);
					}
					set U(ge) {
						this.folderMatches().forEach((be) => {
							be.replacingAll = ge;
						});
					}
					W(ge, be) {
						const Ce = new u.$Gc(),
							Le = [];
						return (
							(be ? this.g : this.f).forEach((Fe) => Ce.set(Fe.resource, [])),
							ge.forEach((Fe) => {
								const Oe = be ? this.S(Fe.resource) : this.R(Fe.resource);
								if (!Oe) return;
								const xe = Oe.resource;
								xe ? Ce.get(xe).push(Fe) : Le.push(Fe);
							}),
							{ byFolder: Ce, other: Le }
						);
					}
					X() {
						this.folderMatches().forEach((ge) => ge.dispose()),
							this.folderMatches(!0).forEach((ge) => ge.dispose()),
							(this.f = []),
							(this.g = []),
							(this.n = c.$Si.forUris((ge) =>
								this.J.extUri.ignorePathCasing(ge),
							)),
							(this.q = c.$Si.forUris((ge) =>
								this.J.extUri.ignorePathCasing(ge),
							)),
							this.t.removeHighlightRange();
					}
					async dispose() {
						this.y?.dispose(),
							this.z?.dispose(),
							this.t.dispose(),
							this.X(),
							super.dispose(),
							await this.u();
					}
				};
				(e.$QNc = re),
					(e.$QNc = re =
						Ne(
							[
								j(1, M.$XNc),
								j(2, s.$Li),
								j(3, f.$QO),
								j(4, T.$Vl),
								j(5, L.$n5b),
							],
							re,
						));
				var le;
				(function (ve) {
					(ve[(ve.PANEL = 0)] = "PANEL"),
						(ve[(ve.QUICK_ACCESS = 1)] = "QUICK_ACCESS");
				})(le || (e.SearchModelLocation = le = {}));
				let oe = class extends r.$1c {
					constructor(ge, be, Ce, Le, Fe, Oe, xe) {
						super(),
							(this.G = ge),
							(this.H = be),
							(this.I = Ce),
							(this.J = Le),
							(this.L = Fe),
							(this.M = Oe),
							(this.N = xe),
							(this.f = null),
							(this.g = !1),
							(this.h = null),
							(this.n = null),
							(this.q = !1),
							(this.r = Promise.resolve()),
							(this.s = []),
							(this.t = []),
							(this.u = this.D(new d.$re())),
							(this.onReplaceTermChanged = this.u.event),
							(this.w = this.D(new d.$ue({ merge: me }))),
							(this.onSearchResultChanged = this.w.event),
							(this.y = null),
							(this.z = null),
							(this.C = !1),
							(this.F = !1),
							(this.location = le.PANEL),
							(this.c = this.J.createInstance(re, this)),
							this.D(this.c.onChange((He) => this.w.fire(He)));
					}
					isReplaceActive() {
						return this.g;
					}
					set replaceActive(ge) {
						this.g = ge;
					}
					get replacePattern() {
						return this.n;
					}
					get replaceString() {
						return this.h || "";
					}
					set preserveCase(ge) {
						this.q = ge;
					}
					get preserveCase() {
						return this.q;
					}
					set replaceString(ge) {
						(this.h = ge),
							this.f && (this.n = new O.$BNc(ge, this.f.contentPattern)),
							this.u.fire();
					}
					get searchResult() {
						return this.c;
					}
					async addAIResults(ge) {
						this.searchResult.count(!0) ||
							(this.f &&
								(await this.aiSearch(
									{
										...this.f,
										contentPattern: this.f.contentPattern.pattern,
										type: B.QueryType.aiText,
									},
									ge,
									this.y?.token,
								)));
					}
					async O(ge, be, Ce, Le) {
						const Fe = this.G.aiTextSearch(ge, Ce, async (Oe) => {
							this.S(Oe, be, !1, !0), Le?.(Oe);
						});
						return this.N.withProgress(
							{
								location: $.ProgressLocation.Notification,
								type: "syncing",
								title: "Searching for AI results...",
							},
							async (Oe) => Fe,
						);
					}
					aiSearch(ge, be, Ce) {
						const Le = Date.now().toString(),
							Fe = (this.z = new i.$Ce(Ce)),
							Oe = Date.now();
						return this.O(ge, Le, this.z.token, async (He) => {
							this.S(He, Le, !1, !0), be?.(He);
						})
							.then(
								(He) => (this.Q(He, Date.now() - Oe, Le, !0), He),
								(He) => {
									throw (this.R(He, Date.now() - Oe, !0), He);
								},
							)
							.finally(() => Fe.dispose());
					}
					P(ge, be, Ce, Le, Fe, Oe) {
						const xe = async (Be) => {
								be.fire(), this.S(Be, Le, !1, !1), Fe?.(Be);
							},
							He = (Be) => {
								be.fire(), this.S(Be, Le, !0), Fe?.(Be);
							},
							Ke = (this.y = new i.$Ce(Oe)),
							Je = this.M.notebookSearch(ge, Ke.token, Le, xe),
							Te = this.G.textSearchSplitSyncAsync(
								Ce,
								this.y.token,
								xe,
								Je.openFilesToScan,
								Je.allScannedFiles,
							),
							Ee = Te.syncResults.results;
						return (
							Ee.forEach((Be) => {
								Be && He(Be);
							}),
							{
								asyncResults: (async () => {
									const Be = Date.now(),
										Se = await Te.asyncResults,
										ke = await Je.completeData;
									Ke.dispose();
									const Ue = Date.now() - Be,
										qe = {
											results: [...Se.results, ...ke.results],
											messages: [...Se.messages, ...ke.messages],
											limitHit: Se.limitHit || ke.limitHit,
											exit: Se.exit,
											stats: Se.stats,
										};
									return this.L.trace(`whole search time | ${Ue}ms`), qe;
								})(),
								syncResults: Ee,
							}
						);
					}
					search(ge, be, Ce) {
						this.cancelSearch(!0),
							(this.f = ge),
							this.U.searchOnType || this.searchResult.clear();
						const Le = Date.now().toString();
						this.c.query = this.f;
						const Fe = this.D(new d.$re());
						(this.n = new O.$BNc(this.replaceString, this.f.contentPattern)),
							(this.r = new Promise((Ee) =>
								setTimeout(Ee, this.U.searchOnType ? 150 : 0),
							));
						const Oe = this.P(ge, Fe, this.f, Le, be, Ce),
							xe = Oe.asyncResults,
							He = Oe.syncResults;
						be &&
							He.forEach((Ee) => {
								Ee && be(Ee);
							});
						const Ke = Date.now();
						let Je;
						const Te = new Promise(
							(Ee) => ((Je = d.Event.once(Fe.event)(Ee)), Je),
						);
						Promise.race([xe, Te]).finally(() => {
							Je?.dispose(),
								this.H.publicLog("searchResultsFirstRender", {
									duration: Date.now() - Ke,
								});
						});
						try {
							return {
								asyncResults: xe.then(
									(Ee) => (this.Q(Ee, Date.now() - Ke, Le, !1), Ee),
									(Ee) => {
										throw (this.R(Ee, Date.now() - Ke, !1), Ee);
									},
								),
								syncResults: He,
							};
						} finally {
							this.H.publicLog("searchResultsFinished", {
								duration: Date.now() - Ke,
							});
						}
					}
					Q(ge, be, Ce, Le) {
						if (!this.f)
							throw new Error(
								"onSearchCompleted must be called after a search is started",
							);
						Le
							? (this.c.add(this.t, Ce, !0), (this.t.length = 0))
							: (this.c.add(this.s, Ce, !1), (this.s.length = 0)),
							this.searchResult.setCachedSearchComplete(ge, Le);
						const Fe = Object.assign({}, this.f.contentPattern);
						delete Fe.pattern;
						const Oe = ge && ge.stats,
							xe = this.f.folderQueries.every(
								(Je) => Je.folder.scheme === a.Schemas.file,
							),
							He = this.f.folderQueries.every(
								(Je) => Je.folder.scheme !== a.Schemas.file,
							),
							Ke = xe ? a.Schemas.file : He ? "other" : "mixed";
						return (
							this.H.publicLog("searchResultsShown", {
								count: this.c.count(),
								fileCount: this.c.fileCount(),
								options: Fe,
								duration: be,
								type: Oe && Oe.type,
								scheme: Ke,
								searchOnTypeEnabled: this.U.searchOnType,
							}),
							ge
						);
					}
					R(ge, be, Ce) {
						C.$8(ge) &&
							(this.Q(
								(Ce ? this.F : this.C)
									? {
											exit: B.SearchCompletionExitCode.NewSearchStarted,
											results: [],
											messages: [],
										}
									: void 0,
								be,
								"",
								Ce,
							),
							Ce ? (this.F = !1) : (this.C = !1));
					}
					S(ge, be, Ce = !0, Le = !1) {
						const Fe = Le ? this.t : this.s;
						ge.resource &&
							(Fe.push(ge),
							Ce
								? Fe.length && (this.c.add(Fe, be, !1, !0), (Fe.length = 0))
								: this.r.then(() => {
										Fe.length && (this.c.add(Fe, be, Le, !0), (Fe.length = 0));
									}));
					}
					get U() {
						return this.I.getValue("search");
					}
					cancelSearch(ge = !1) {
						return this.y ? ((this.C = ge), this.y.cancel(), !0) : !1;
					}
					cancelAISearch(ge = !1) {
						return this.z ? ((this.F = ge), this.z.cancel(), !0) : !1;
					}
					dispose() {
						this.cancelSearch(),
							this.cancelAISearch(),
							this.searchResult.dispose(),
							super.dispose();
					}
				};
				(e.$RNc = oe),
					(e.$RNc = oe =
						Ne(
							[
								j(0, B.$p7),
								j(1, v.$km),
								j(2, b.$gj),
								j(3, s.$Li),
								j(4, y.$ik),
								j(5, A.$ANc),
								j(6, $.$8N),
							],
							oe,
						));
				let ae = class {
					constructor(ge) {
						(this.d = ge), (this.c = null);
					}
					get searchModel() {
						return this.c || (this.c = this.d.createInstance(oe)), this.c;
					}
					set searchModel(ge) {
						this.c?.dispose(), (this.c = ge);
					}
				};
				(e.$SNc = ae),
					(e.$SNc = ae = Ne([j(0, s.$Li)], ae)),
					(e.$TNc = (0, s.$Mi)("searchViewModelWorkbenchService"));
				let pe = class {
					static {
						V = this;
					}
					constructor(ge) {
						(this.g = ge),
							(this.c = null),
							(this.d = null),
							(this.f = new r.$Zc());
					}
					removeHighlightRange() {
						if (this.d && this.c) {
							const ge = this.c;
							this.d.changeDecorations((be) => {
								be.removeDecoration(ge);
							});
						}
						this.c = null;
					}
					highlightRange(ge, be, Ce = 0) {
						let Le;
						n.URI.isUri(ge) ? (Le = this.g.getModel(ge)) : (Le = ge),
							Le && this.h(Le, be);
					}
					h(ge, be) {
						this.removeHighlightRange(),
							ge.changeDecorations((Ce) => {
								this.c = Ce.addDecoration(be, V.n);
							}),
							this.k(ge);
					}
					k(ge) {
						this.d !== ge &&
							(this.l(),
							(this.d = ge),
							this.f.add(
								this.d.onDidChangeDecorations((be) => {
									this.l(), this.removeHighlightRange(), (this.d = null);
								}),
							),
							this.f.add(
								this.d.onWillDispose(() => {
									this.l(), this.removeHighlightRange(), (this.d = null);
								}),
							));
					}
					l() {
						this.f.clear();
					}
					dispose() {
						this.d && (this.removeHighlightRange(), (this.d = null)),
							this.f.dispose();
					}
					static {
						this.n = o.$eY.register({
							description: "search-range-highlight",
							stickiness: p.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							className: "rangeHighlight",
							isWholeLine: !0,
						});
					}
				};
				(e.$UNc = pe), (e.$UNc = pe = V = Ne([j(0, f.$QO)], pe));
				function $e(ve, ge, be) {
					const Ce = ve.previewText.split(`
`);
					return ve.rangeLocations.map((Le) => {
						const Fe = Le.preview;
						return new G(ge, Ce, Fe, Le.source, be);
					});
				}
				function ye(ve, ge) {
					const be = [];
					return (
						ve.forEach((Ce) => {
							const Le = Ce.previewText.split(`
`);
							Ce.rangeLocations.map((Fe) => {
								const Oe = Fe.preview,
									xe = new J(ge, Le, Oe, Fe.source, Ce.webviewIndex);
								be.push(xe);
							});
						}),
						be
					);
				}
				function ue(ve, ge) {
					do if (ge.includes(ve)) return !0;
					while (!(ve.parent() instanceof re) && (ve = ve.parent()));
					return !1;
				}
				function fe(ve) {
					const ge = [],
						be = [];
					return (
						ve.forEach((Ce) => {
							Ce instanceof W ? be.push(Ce) : ge.push(Ce);
						}),
						be.concat(ge.map((Ce) => Ce.allDownstreamFileMatches()).flat())
					);
				}
				function me(ve) {
					const ge = { elements: [], added: !1, removed: !1 };
					return (
						ve.forEach((be) => {
							be.added && (ge.added = !0),
								be.removed && (ge.removed = !0),
								(ge.elements = ge.elements.concat(be.elements));
						}),
						ge
					);
				}
			},
		),
		