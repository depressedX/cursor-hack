import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../nls.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../base/common/network.js';
import '../../../../../../editor/common/services/languageFeatures.js';
import '../../../../../../platform/configuration/common/configuration.js';
import '../../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../../platform/log/common/log.js';
import '../../../../../common/contributions.js';
import '../navigation/arrow.js';
import '../../controller/coreActions.js';
import '../../controller/editActions.js';
import '../../notebookBrowser.js';
import '../../../common/notebookCommon.js';
import '../../../common/notebookKernelService.js';
import '../../../../../services/editor/common/editorService.js';
import '../../../../../services/statusbar/browser/statusbar.js';
import '../../../../../services/editor/common/editorGroupsService.js';
import '../../../../../../base/common/event.js';
define(
			de[4088],
			he([
				1, 0, 4, 3, 23, 69, 10, 5, 34, 55, 1956, 238, 1957, 108, 70, 243, 18,
				166, 66, 6,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*lifecycle*/,
 w /*network*/,
 E /*languageFeatures*/,
 C /*configuration*/,
 d /*instantiation*/,
 m /*log*/,
 r /*contributions*/,
 u /*arrow*/,
 a /*coreActions*/,
 h /*editActions*/,
 c /*notebookBrowser*/,
 n /*notebookCommon*/,
 g /*notebookKernelService*/,
 p /*editorService*/,
 o /*statusbar*/,
 f /*editorGroupsService*/,
 b /*event*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0Fc = e.$9Fc = e.$8Fc = e.$7Fc = void 0),
					(t = mt(t));
				let s = class {
					constructor(I, T, P, k, L) {
						const D = new i.$Zc();
						this.dispose = D.dispose.bind(D);
						const M = () => {
							D.clear(), P.selectKernelForNotebook(T, I);
						};
						D.add(
							I.onDidChangeContent((N) => {
								for (const A of N.rawEvents)
									switch (A.kind) {
										case n.NotebookCellsChangeType.ChangeCellContent:
										case n.NotebookCellsChangeType.ModelChange:
										case n.NotebookCellsChangeType.Move:
										case n.NotebookCellsChangeType.ChangeCellLanguage:
											L.trace(
												"IMPLICIT kernel selection because of change event",
												A.kind,
											),
												M();
											break;
									}
							}),
						),
							D.add(
								k.hoverProvider.register(
									{ scheme: w.Schemas.vscodeNotebookCell, pattern: I.uri.path },
									{
										provideHover() {
											L.trace("IMPLICIT kernel selection because of hover"),
												M();
										},
									},
								),
							);
					}
				};
				s = Ne([j(2, g.$f6), j(3, E.$k3), j(4, m.$ik)], s);
				let l = class extends i.$1c {
					constructor(I, T, P, k) {
						super(),
							(this.c = I),
							(this.f = T),
							(this.g = P),
							(this.h = k),
							(this.a = this.D(new i.$Zc())),
							(this.b = this.D(new i.$Zc())),
							this.D(this.c.onDidActiveEditorChange(() => this.j()));
					}
					j() {
						this.a.clear();
						const I = (0, c.$eJb)(this.c.activeEditorPane);
						if (!I) {
							this.b.clear();
							return;
						}
						const T = () => {
							if (I.notebookOptions.getDisplayOptions().globalToolbar) {
								this.b.clear();
								return;
							}
							const P = I.textModel;
							P ? this.m(P) : this.b.clear();
						};
						this.a.add(this.g.onDidAddKernel(T)),
							this.a.add(this.g.onDidChangeSelectedNotebooks(T)),
							this.a.add(this.g.onDidChangeNotebookAffinity(T)),
							this.a.add(I.onDidChangeModel(T)),
							this.a.add(I.notebookOptions.onDidChangeOptions(T)),
							T();
					}
					m(I) {
						this.b.clear();
						const {
								selected: T,
								suggestions: P,
								all: k,
							} = this.g.getMatchingKernel(I),
							L =
								((P.length === 1 ? P[0] : void 0) ?? k.length === 1)
									? k[0]
									: void 0;
						let D = !1;
						if (k.length !== 0)
							if (T || L) {
								let M = T;
								M ||
									((M = L),
									(D = !0),
									this.b.add(this.h.createInstance(s, I, M)));
								const N = M.description ?? M.detail ?? M.label;
								this.b.add(
									this.f.addEntry(
										{
											name: t.localize(7740, null),
											text: `$(notebook-kernel-select) ${M.label}`,
											ariaLabel: M.label,
											tooltip: D ? t.localize(7741, null, N) : N,
											command: a.$o5b,
										},
										a.$o5b,
										o.StatusbarAlignment.RIGHT,
										10,
									),
								),
									this.b.add(M.onDidChange(() => this.m(I)));
							} else
								this.b.add(
									this.f.addEntry(
										{
											name: t.localize(7742, null),
											text: t.localize(7743, null),
											ariaLabel: t.localize(7744, null),
											command: a.$o5b,
											kind: "prominent",
										},
										a.$o5b,
										o.StatusbarAlignment.RIGHT,
										10,
									),
								);
					}
				};
				(e.$7Fc = l),
					(e.$7Fc = l =
						Ne([j(0, p.$IY), j(1, o.$d6b), j(2, g.$f6), j(3, d.$Li)], l));
				let y = class extends i.$1c {
					constructor(I, T) {
						super(),
							(this.c = I),
							(this.f = T),
							(this.a = this.D(new i.$Zc())),
							(this.b = this.D(new i.$2c())),
							this.D(this.c.onDidActiveEditorChange(() => this.g()));
					}
					g() {
						this.a.clear();
						const I = (0, c.$eJb)(this.c.activeEditorPane);
						I
							? (this.a.add(I.onDidChangeSelection(() => this.h(I))),
								this.a.add(I.onDidChangeActiveCell(() => this.h(I))),
								this.h(I))
							: this.b.clear();
					}
					h(I) {
						if (!I.hasModel()) {
							this.b.clear();
							return;
						}
						const T = this.j(I);
						if (!T) {
							this.b.clear();
							return;
						}
						const P = {
							name: t.localize(7745, null),
							text: T,
							ariaLabel: T,
							command: u.$ZFc,
						};
						this.b.value
							? this.b.value.update(P)
							: (this.b.value = this.f.addEntry(
									P,
									"notebook.activeCellStatus",
									o.StatusbarAlignment.RIGHT,
									100,
								));
					}
					j(I) {
						if (!I.hasModel()) return;
						const T = I.getActiveCell();
						if (!T) return;
						const P = I.getCellIndex(T) + 1,
							k = I.getSelections().reduce((D, M) => D + (M.end - M.start), 0),
							L = I.getLength();
						return k > 1
							? t.localize(7746, null, P, k)
							: t.localize(7747, null, P, L);
					}
				};
				(e.$8Fc = y), (e.$8Fc = y = Ne([j(0, p.$IY), j(1, o.$d6b)], y));
				let $ = class extends i.$1c {
					static {
						this.ID = "selectNotebookIndentation";
					}
					constructor(I, T, P) {
						super(),
							(this.c = I),
							(this.f = T),
							(this.g = P),
							(this.a = this.D(new i.$Zc())),
							(this.b = this.D(new i.$2c())),
							this.D(this.c.onDidActiveEditorChange(() => this.h())),
							this.D(
								this.g.onDidChangeConfiguration((k) => {
									(k.affectsConfiguration("editor") ||
										k.affectsConfiguration("notebook")) &&
										this.h();
								}),
							);
					}
					h() {
						this.a.clear();
						const I = (0, c.$eJb)(this.c.activeEditorPane);
						I
							? (this.j(I),
								this.a.add(
									I.onDidChangeSelection(() => {
										this.b.clear(), this.j(I);
									}),
								))
							: this.b.clear();
					}
					j(I) {
						if (!I.hasModel()) {
							this.b.clear();
							return;
						}
						const T = I.getActiveCell()?.textModel?.getOptions();
						if (!T) {
							this.b.clear();
							return;
						}
						const P =
								I.notebookOptions.getDisplayOptions()
									.editorOptionsCustomizations,
							k = P?.["editor.indentSize"] ?? T?.indentSize,
							L = P?.["editor.insertSpaces"] ?? T?.insertSpaces,
							D = P?.["editor.tabSize"] ?? T?.tabSize,
							M = typeof k == "number" ? k : D,
							A = L ? `Spaces: ${M}` : `Tab Size: ${M}`;
						if (!A) {
							this.b.clear();
							return;
						}
						const R = {
							name: t.localize(7748, null),
							text: A,
							ariaLabel: A,
							tooltip: t.localize(7749, null),
							command: h.$DFc,
						};
						this.b.value
							? this.b.value.update(R)
							: (this.b.value = this.f.addEntry(
									R,
									"notebook.status.indentation",
									o.StatusbarAlignment.RIGHT,
									100.4,
								));
					}
				};
				(e.$9Fc = $),
					(e.$9Fc = $ = Ne([j(0, p.$IY), j(1, o.$d6b), j(2, C.$gj)], $));
				let v = class extends i.$1c {
					static {
						this.ID = "notebook.contrib.editorStatus";
					}
					constructor(I) {
						super(), (this.a = I);
						for (const T of I.parts) this.b(T);
						this.D(I.onDidCreateAuxiliaryEditorPart((T) => this.b(T)));
					}
					b(I) {
						const T = new i.$Zc();
						b.Event.once(I.onWillDispose)(() => T.dispose());
						const P = this.a.getScopedInstantiationService(I);
						T.add(P.createInstance(l)),
							T.add(P.createInstance(y)),
							T.add(P.createInstance($));
					}
				};
				(e.$0Fc = v),
					(e.$0Fc = v = Ne([j(0, f.$EY)], v)),
					(0, r.$s6)(v.ID, v, r.WorkbenchPhase.AfterRestored);
			},
		),
		