import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/strings.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/types.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/platform.js';
import '../../../services/untitled/common/untitledTextEditorInput.js';
import '../../../common/editor.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/common/model.js';
import '../../../../editor/contrib/linesOperations/browser/linesOperations.js';
import '../../../../editor/contrib/indentation/browser/indentation.js';
import './binaryEditor.js';
import './binaryDiffEditor.js';
import '../../../services/editor/common/editorService.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../editor/common/languages/language.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/core/selection.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
import '../../../services/textfile/common/textfiles.js';
import '../../../services/textfile/common/encoding.js';
import '../../../../editor/common/config/editorOptions.js';
import '../../../../editor/common/services/textResourceConfiguration.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../base/common/objects.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../base/common/network.js';
import '../../../services/preferences/common/preferences.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../editor/common/services/getIconClasses.js';
import '../../../../base/common/async.js';
import '../../../../base/common/event.js';
import '../../../services/statusbar/browser/statusbar.js';
import '../../../../platform/markers/common/markers.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../common/editor/sideBySideEditorInput.js';
import '../../../services/languageDetection/common/languageDetectionWorkerService.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../base/common/keyCodes.js';
import '../../../../editor/browser/config/tabFocus.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../../css!vs/workbench/browser/parts/editor/media/editorstatus.js';
define(
			de[3861],
			he([
				1, 0, 4, 7, 37, 19, 28, 9, 50, 12, 628, 44, 3, 64, 1645, 1644, 1336,
				1915, 18, 22, 5, 61, 17, 104, 31, 119, 85, 842, 38, 125, 10, 82, 56, 23,
				131, 63, 252, 15, 6, 166, 90, 32, 313, 474, 8, 11, 43, 27, 653, 66,
				2342,
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
				H,
				q,
				V,
				G,
				K,
				J,
				W,
				X,
			) {
				"use strict";
				var Y;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vuc = e.$uuc = e.$tuc = e.$suc = e.$ruc = void 0);
				class ie {
					constructor(Ce, Le) {
						(this.c = Ce), (this.d = Le);
					}
					getEncoding() {
						return this.c.getEncoding();
					}
					async setEncoding(Ce, Le) {
						await B.Promises.settled(
							[this.c, this.d].map((Fe) => Fe.setEncoding(Ce, Le)),
						);
					}
				}
				class ne {
					constructor(Ce, Le) {
						(this.c = Ce), (this.d = Le);
					}
					setLanguageId(Ce, Le) {
						[this.c, this.d].forEach((Fe) => Fe.setLanguageId(Ce, Le));
					}
				}
				function ee(be) {
					if (be instanceof u.$T1b) return be;
					if (be instanceof H.$iY) {
						const Le = ee(be.primary),
							Fe = ee(be.secondary);
						return Le && Fe ? new ie(Le, Fe) : Le;
					}
					const Ce = be;
					return (0, C.$Ag)(Ce.setEncoding, Ce.getEncoding) ? Ce : null;
				}
				function _(be) {
					if (be instanceof u.$T1b) return be;
					if (be instanceof H.$iY) {
						const Le = _(be.primary),
							Fe = _(be.secondary);
						return Le && Fe ? new ne(Le, Fe) : Le;
					}
					const Ce = be;
					return typeof Ce.setLanguageId == "function" ? Ce : null;
				}
				class te {
					constructor() {
						(this.indentation = !1),
							(this.selectionStatus = !1),
							(this.languageId = !1),
							(this.languageStatus = !1),
							(this.encoding = !1),
							(this.EOL = !1),
							(this.tabFocusMode = !1),
							(this.columnSelectionMode = !1),
							(this.metadata = !1);
					}
					combine(Ce) {
						(this.indentation = this.indentation || Ce.indentation),
							(this.selectionStatus =
								this.selectionStatus || Ce.selectionStatus),
							(this.languageId = this.languageId || Ce.languageId),
							(this.languageStatus = this.languageStatus || Ce.languageStatus),
							(this.encoding = this.encoding || Ce.encoding),
							(this.EOL = this.EOL || Ce.EOL),
							(this.tabFocusMode = this.tabFocusMode || Ce.tabFocusMode),
							(this.columnSelectionMode =
								this.columnSelectionMode || Ce.columnSelectionMode),
							(this.metadata = this.metadata || Ce.metadata);
					}
					hasChanges() {
						return (
							this.indentation ||
							this.selectionStatus ||
							this.languageId ||
							this.languageStatus ||
							this.encoding ||
							this.EOL ||
							this.tabFocusMode ||
							this.columnSelectionMode ||
							this.metadata
						);
					}
				}
				class Q {
					get selectionStatus() {
						return this.c;
					}
					get languageId() {
						return this.d;
					}
					get encoding() {
						return this.f;
					}
					get EOL() {
						return this.g;
					}
					get indentation() {
						return this.h;
					}
					get tabFocusMode() {
						return this.i;
					}
					get columnSelectionMode() {
						return this.j;
					}
					get metadata() {
						return this.l;
					}
					update(Ce) {
						const Le = new te();
						switch (Ce.type) {
							case "selectionStatus":
								this.c !== Ce.selectionStatus &&
									((this.c = Ce.selectionStatus), (Le.selectionStatus = !0));
								break;
							case "indentation":
								this.h !== Ce.indentation &&
									((this.h = Ce.indentation), (Le.indentation = !0));
								break;
							case "languageId":
								this.d !== Ce.languageId &&
									((this.d = Ce.languageId), (Le.languageId = !0));
								break;
							case "encoding":
								this.f !== Ce.encoding &&
									((this.f = Ce.encoding), (Le.encoding = !0));
								break;
							case "EOL":
								this.g !== Ce.EOL && ((this.g = Ce.EOL), (Le.EOL = !0));
								break;
							case "tabFocusMode":
								this.i !== Ce.tabFocusMode &&
									((this.i = Ce.tabFocusMode), (Le.tabFocusMode = !0));
								break;
							case "columnSelectionMode":
								this.j !== Ce.columnSelectionMode &&
									((this.j = Ce.columnSelectionMode),
									(Le.columnSelectionMode = !0));
								break;
							case "metadata":
								this.l !== Ce.metadata &&
									((this.l = Ce.metadata), (Le.metadata = !0));
								break;
						}
						return Le;
					}
				}
				let Z = class extends h.$1c {
					constructor(Ce) {
						super(),
							(this.f = Ce),
							(this.c = this.D(new U.$re())),
							(this.onDidChange = this.c.event),
							this.g();
						const Le = Ce.getValue("editor.tabFocusMode") === !0;
						W.$rsb.setTabFocusMode(Le);
					}
					g() {
						this.D(W.$rsb.onDidChangeTabFocus((Ce) => this.c.fire(Ce))),
							this.D(
								this.f.onDidChangeConfiguration((Ce) => {
									if (Ce.affectsConfiguration("editor.tabFocusMode")) {
										const Le = this.f.getValue("editor.tabFocusMode") === !0;
										W.$rsb.setTabFocusMode(Le), this.c.fire(Le);
									}
								}),
							);
					}
				};
				Z = Ne([j(0, L.$gj)], Z);
				const se = (0, t.localize)(3483, null),
					re = (0, t.localize)(3484, null),
					le = (0, t.localize)(3485, null),
					oe = (0, t.localize)(3486, null),
					ae = (0, t.localize)(3487, null),
					pe = (0, t.localize)(3488, null);
				let $e = class extends h.$1c {
					constructor(Ce, Le, Fe, Oe, xe, He, Ke, Je) {
						super(),
							(this.C = Ce),
							(this.F = Le),
							(this.G = Fe),
							(this.H = Oe),
							(this.I = xe),
							(this.J = He),
							(this.L = Ke),
							(this.M = Je),
							(this.c = this.D(new h.$2c())),
							(this.f = this.D(new h.$2c())),
							(this.g = this.D(new h.$2c())),
							(this.h = this.D(new h.$2c())),
							(this.j = this.D(new h.$2c())),
							(this.m = this.D(new h.$2c())),
							(this.n = this.D(new h.$2c())),
							(this.q = this.D(new h.$2c())),
							(this.s = this.D(this.L.createInstance(ue))),
							(this.t = this.D(this.L.createInstance(Z))),
							(this.u = new Q()),
							(this.w = void 0),
							(this.y = this.D(new h.$Zc())),
							(this.z = this.D(new h.$2c())),
							this.O(),
							this.N();
					}
					N() {
						this.D(this.F.onDidActiveEditorChange(() => this.db())),
							this.D(
								this.I.untitled.onDidChangeEncoding((Ce) =>
									this.lb(Ce.resource),
								),
							),
							this.D(
								this.I.files.onDidChangeEncoding((Ce) => this.lb(Ce.resource)),
							),
							this.D(
								U.Event.runAndSubscribe(this.t.onDidChange, (Ce) => {
									Ce !== void 0
										? this.mb(Ce)
										: this.mb(this.M.getValue("editor.tabFocusMode"));
								}),
							);
					}
					O() {
						this.D(
							v.$fk.registerCommand({
								id: `changeEditorIndentation${this.C}`,
								handler: () => this.P(),
							}),
						);
					}
					async P() {
						const Ce = (0, M.$btb)(this.F.activeTextEditorControl);
						if (!Ce)
							return this.G.pick([{ label: (0, t.localize)(3489, null) }]);
						if (this.F.activeEditor?.isReadonly())
							return this.G.pick([{ label: (0, t.localize)(3490, null) }]);
						const Le = [
							(0, C.$wg)(Ce.getAction(g.$Eic.ID)),
							(0, C.$wg)(Ce.getAction(g.$Dic.ID)),
							(0, C.$wg)(Ce.getAction(g.$Fic.ID)),
							(0, C.$wg)(Ce.getAction(g.$Gic.ID)),
							(0, C.$wg)(Ce.getAction(g.$Aic.ID)),
							(0, C.$wg)(Ce.getAction(g.$Bic.ID)),
							(0, C.$wg)(Ce.getAction(n.$Zic.ID)),
						].map((Oe) => ({
							id: Oe.id,
							label: Oe.label,
							detail:
								r.Language.isDefaultVariant() || Oe.label === Oe.alias
									? void 0
									: Oe.alias,
							run: () => {
								Ce.focus(), Oe.run();
							},
						}));
						return (
							Le.splice(3, 0, {
								type: "separator",
								label: (0, t.localize)(3491, null),
							}),
							Le.unshift({
								type: "separator",
								label: (0, t.localize)(3492, null),
							}),
							(
								await this.G.pick(Le, {
									placeHolder: (0, t.localize)(3493, null),
									matchOnDetail: !0,
								})
							)?.run()
						);
					}
					Q(Ce) {
						if (Ce) {
							if (!this.c.value) {
								const Le = (0, t.localize)(3494, null);
								this.c.value = this.J.addEntry(
									{
										name: (0, t.localize)(3495, null),
										text: Le,
										ariaLabel: Le,
										tooltip: (0, t.localize)(3496, null),
										command: "editor.action.toggleTabFocusMode",
										kind: "prominent",
									},
									"status.editor.tabFocusMode",
									z.StatusbarAlignment.RIGHT,
									100.7,
								);
							}
						} else this.c.clear();
					}
					R(Ce) {
						if (Ce) {
							if (!this.f.value) {
								const Le = (0, t.localize)(3497, null);
								this.f.value = this.J.addEntry(
									{
										name: (0, t.localize)(3498, null),
										text: Le,
										ariaLabel: Le,
										tooltip: (0, t.localize)(3499, null),
										command: "editor.action.toggleColumnSelection",
										kind: "prominent",
									},
									"status.editor.columnSelectionMode",
									z.StatusbarAlignment.RIGHT,
									100.8,
								);
							}
						} else this.f.clear();
					}
					S(Ce) {
						if (!Ce) {
							this.h.clear();
							return;
						}
						if (
							(0, M.$btb)(this.F.activeTextEditorControl)?.getModel()?.uri
								?.scheme === N.Schemas.vscodeNotebookCell
						) {
							this.h.clear();
							return;
						}
						const Fe = {
							name: (0, t.localize)(3500, null),
							text: Ce,
							ariaLabel: Ce,
							tooltip: (0, t.localize)(3501, null),
							command: "workbench.action.gotoLine",
						};
						this.$(
							this.h,
							Fe,
							"status.editor.selection",
							z.StatusbarAlignment.RIGHT,
							100.5,
						);
					}
					U(Ce) {
						if (!Ce) {
							this.g.clear();
							return;
						}
						if (
							(0, M.$btb)(this.F.activeTextEditorControl)?.getModel()?.uri
								?.scheme === N.Schemas.vscodeNotebookCell
						) {
							this.g.clear();
							return;
						}
						const Fe = {
							name: (0, t.localize)(3502, null),
							text: Ce,
							ariaLabel: Ce,
							tooltip: (0, t.localize)(3503, null),
							command: `changeEditorIndentation${this.C}`,
						};
						this.$(
							this.g,
							Fe,
							"status.editor.indentation",
							z.StatusbarAlignment.RIGHT,
							100.4,
						);
					}
					W(Ce) {
						if (!Ce) {
							this.j.clear();
							return;
						}
						const Le = {
							name: (0, t.localize)(3504, null),
							text: Ce,
							ariaLabel: Ce,
							tooltip: (0, t.localize)(3505, null),
							command: "workbench.action.editor.changeEncoding",
						};
						this.$(
							this.j,
							Le,
							"status.editor.encoding",
							z.StatusbarAlignment.RIGHT,
							100.3,
						);
					}
					X(Ce) {
						if (!Ce) {
							this.m.clear();
							return;
						}
						const Le = {
							name: (0, t.localize)(3506, null),
							text: Ce,
							ariaLabel: Ce,
							tooltip: (0, t.localize)(3507, null),
							command: "workbench.action.editor.changeEOL",
						};
						this.$(
							this.m,
							Le,
							"status.editor.eol",
							z.StatusbarAlignment.RIGHT,
							100.2,
						);
					}
					Y(Ce) {
						if (!Ce) {
							this.n.clear();
							return;
						}
						const Le = {
							name: (0, t.localize)(3508, null),
							text: Ce,
							ariaLabel: Ce,
							tooltip: (0, t.localize)(3509, null),
							command: "workbench.action.editor.changeLanguageMode",
						};
						this.$(
							this.n,
							Le,
							"status.editor.mode",
							z.StatusbarAlignment.RIGHT,
							100.1,
						);
					}
					Z(Ce) {
						if (!Ce) {
							this.q.clear();
							return;
						}
						const Le = {
							name: (0, t.localize)(3510, null),
							text: Ce,
							ariaLabel: Ce,
							tooltip: (0, t.localize)(3511, null),
						};
						this.$(
							this.q,
							Le,
							"status.editor.info",
							z.StatusbarAlignment.RIGHT,
							100,
						);
					}
					$(Ce, Le, Fe, Oe, xe) {
						Ce.value
							? Ce.value.update(Le)
							: (Ce.value = this.J.addEntry(Le, Fe, Oe, xe));
					}
					ab(Ce) {
						const Le = this.u.update(Ce);
						Le.hasChanges() &&
							(this.w
								? this.w.combine(Le)
								: ((this.w = Le),
									(this.z.value = (0, i.$ggb)(
										(0, i.getWindowById)(this.C, !0).window,
										() => {
											this.z.clear();
											const Fe = this.w;
											(this.w = void 0), Fe && this.bb();
										},
									))));
					}
					bb() {
						this.Q(!!this.u.tabFocusMode),
							this.R(!!this.u.columnSelectionMode),
							this.U(this.u.indentation),
							this.S(this.u.selectionStatus),
							this.W(this.u.encoding),
							this.X(
								this.u.EOL
									? this.u.EOL ===
										`\r
`
										? pe
										: ae
									: void 0,
							),
							this.Y(this.u.languageId),
							this.Z(this.u.metadata);
					}
					cb(Ce) {
						if (!(!Ce || !Ce.selections)) {
							if (Ce.selections.length === 1)
								return Ce.charactersSelected
									? (0, w.$kf)(
											se,
											Ce.selections[0].positionLineNumber,
											Ce.selections[0].positionColumn,
											Ce.charactersSelected,
										)
									: (0, w.$kf)(
											re,
											Ce.selections[0].positionLineNumber,
											Ce.selections[0].positionColumn,
										);
							if (Ce.charactersSelected)
								return (0, w.$kf)(
									le,
									Ce.selections.length,
									Ce.charactersSelected,
								);
							if (Ce.selections.length > 0)
								return (0, w.$kf)(oe, Ce.selections.length);
						}
					}
					db() {
						const Ce = this.F.activeEditor,
							Le = this.F.activeEditorPane,
							Fe = Le ? ((0, M.$btb)(Le.getControl()) ?? void 0) : void 0;
						if (
							(this.hb(Fe),
							this.ib(Fe),
							this.eb(Fe, Ce),
							this.jb(Fe),
							this.kb(Le, Fe),
							this.fb(Fe),
							this.gb(Le),
							this.s.update(Fe),
							this.y.clear(),
							Le &&
								this.y.add(
									Le.onDidChangeControl(() => {
										this.db();
									}),
								),
							Fe)
						)
							this.y.add(
								Fe.onDidChangeConfiguration((Oe) => {
									Oe.hasChanged(P.EditorOption.columnSelection) && this.hb(Fe);
								}),
							),
								this.y.add(
									U.Event.defer(Fe.onDidChangeCursorPosition)(() => {
										this.ib(Fe), this.s.update(Fe);
									}),
								),
								this.y.add(
									Fe.onDidChangeModelLanguage(() => {
										this.eb(Fe, Ce);
									}),
								),
								this.y.add(
									U.Event.accumulate(Fe.onDidChangeModelContent)((Oe) => {
										this.jb(Fe), this.s.update(Fe);
										const xe = Fe.getSelections();
										if (xe) {
											for (const He of Oe)
												for (const Ke of He.changes)
													if (
														xe.some((Je) => y.$iL.areIntersecting(Je, Ke.range))
													) {
														this.ib(Fe);
														break;
													}
										}
									}),
								),
								this.y.add(
									Fe.onDidChangeModelOptions(() => {
										this.fb(Fe);
									}),
								);
						else if (Le instanceof p.$puc || Le instanceof o.$quc) {
							const Oe = [];
							if (Le instanceof o.$quc) {
								const xe = Le.getPrimaryEditorPane();
								xe instanceof p.$puc && Oe.push(xe);
								const He = Le.getSecondaryEditorPane();
								He instanceof p.$puc && Oe.push(He);
							} else Oe.push(Le);
							for (const xe of Oe)
								this.y.add(
									xe.onDidChangeMetadata(() => {
										this.gb(Le);
									}),
								),
									this.y.add(
										xe.onDidOpenInPlace(() => {
											this.db();
										}),
									);
						}
					}
					eb(Ce, Le) {
						const Fe = { type: "languageId", languageId: void 0 };
						if (Ce && Le && _(Le)) {
							const Oe = Ce.getModel();
							if (Oe) {
								const xe = Oe.getLanguageId();
								Fe.languageId = this.H.getLanguageName(xe) ?? void 0;
							}
						}
						this.ab(Fe);
					}
					fb(Ce) {
						const Le = { type: "indentation", indentation: void 0 };
						if (Ce) {
							const Fe = Ce.getModel();
							if (Fe) {
								const Oe = Fe.getOptions();
								Le.indentation = Oe.insertSpaces
									? Oe.tabSize === Oe.indentSize
										? (0, t.localize)(3512, null, Oe.indentSize)
										: (0, t.localize)(3513, null, Oe.indentSize, Oe.tabSize)
									: (0, t.localize)(3514, null, Oe.tabSize);
							}
						}
						this.ab(Le);
					}
					gb(Ce) {
						const Le = { type: "metadata", metadata: void 0 };
						(Ce instanceof p.$puc || Ce instanceof o.$quc) &&
							(Le.metadata = Ce.getMetadata()),
							this.ab(Le);
					}
					hb(Ce) {
						const Le = { type: "columnSelectionMode", columnSelectionMode: !1 };
						Ce?.getOption(P.EditorOption.columnSelection) &&
							(Le.columnSelectionMode = !0),
							this.ab(Le);
					}
					ib(Ce) {
						const Le = Object.create(null);
						if (Ce) {
							(Le.selections = Ce.getSelections() || []),
								(Le.charactersSelected = 0);
							const Fe = Ce.getModel();
							if (Fe)
								for (const Oe of Le.selections)
									typeof Le.charactersSelected != "number" &&
										(Le.charactersSelected = 0),
										(Le.charactersSelected += Fe.getCharacterCountInRange(Oe));
							if (Le.selections.length === 1) {
								const Oe = Ce.getPosition(),
									xe = new $.$kL(
										Le.selections[0].selectionStartLineNumber,
										Le.selections[0].selectionStartColumn,
										Le.selections[0].positionLineNumber,
										Oe
											? Ce.getStatusbarColumn(Oe)
											: Le.selections[0].positionColumn,
									);
								Le.selections[0] = xe;
							}
						}
						this.ab({ type: "selectionStatus", selectionStatus: this.cb(Le) });
					}
					jb(Ce) {
						const Le = { type: "EOL", EOL: void 0 };
						if (Ce && !Ce.getOption(P.EditorOption.readOnly)) {
							const Fe = Ce.getModel();
							Fe && (Le.EOL = Fe.getEOL());
						}
						this.ab(Le);
					}
					kb(Ce, Le) {
						if (Ce && !this.nb(Ce)) return;
						const Fe = { type: "encoding", encoding: void 0 };
						if (Ce && Le?.hasModel()) {
							const Oe = Ce.input ? ee(Ce.input) : null;
							if (Oe) {
								const xe = Oe.getEncoding(),
									He = typeof xe == "string" ? T.$4Y[xe] : void 0;
								He ? (Fe.encoding = He.labelShort) : (Fe.encoding = xe);
							}
						}
						this.ab(Fe);
					}
					lb(Ce) {
						const Le = this.F.activeEditorPane;
						if (Le) {
							const Fe = a.$A1.getCanonicalUri(Le.input, {
								supportSideBySide: a.SideBySideEditor.PRIMARY,
							});
							if (Fe && (0, E.$gh)(Fe, Ce)) {
								const Oe = (0, M.$btb)(Le.getControl()) ?? void 0;
								return this.kb(Le, Oe);
							}
						}
					}
					mb(Ce) {
						const Le = { type: "tabFocusMode", tabFocusMode: Ce };
						this.ab(Le);
					}
					nb(Ce) {
						const Le = this.F.activeEditorPane;
						return !!Le && Le === Ce;
					}
				};
				$e = Ne(
					[
						j(1, f.$IY),
						j(2, R.$DJ),
						j(3, l.$nM),
						j(4, I.$kZ),
						j(5, z.$d6b),
						j(6, s.$Li),
						j(7, L.$gj),
					],
					$e,
				);
				let ye = class extends h.$1c {
					static {
						this.ID = "workbench.contrib.editorStatus";
					}
					constructor(Ce) {
						super(), (this.c = Ce);
						for (const Le of Ce.parts) this.f(Le);
						this.D(Ce.onDidCreateAuxiliaryEditorPart((Le) => this.f(Le)));
					}
					f(Ce) {
						const Le = new h.$Zc();
						U.Event.once(Ce.onWillDispose)(() => Le.dispose());
						const Fe = this.c.getScopedInstantiationService(Ce);
						Le.add(Fe.createInstance($e, Ce.windowId));
					}
				};
				(e.$ruc = ye), (e.$ruc = ye = Ne([j(0, X.$EY)], ye));
				let ue = class extends h.$1c {
					constructor(Ce, Le, Fe) {
						super(),
							(this.j = Ce),
							(this.m = Le),
							(this.n = Fe),
							(this.f = void 0),
							(this.g = []),
							(this.h = null),
							(this.c = this.D(new h.$2c())),
							this.D(Le.onMarkerChanged((Oe) => this.w(Oe))),
							this.D(
								U.Event.filter(Fe.onDidChangeConfiguration, (Oe) =>
									Oe.affectsConfiguration("problems.showCurrentInStatus"),
								)(() => this.q()),
							);
					}
					update(Ce) {
						(this.f = Ce), this.y(), this.q();
					}
					q() {
						const Ce = this.h;
						if (((this.h = this.u()), this.s(Ce, this.h)))
							if (this.h) {
								const Le = (0, w.$zf)(this.h.message)[0],
									Fe = `${this.t(this.h)} ${Le}`;
								this.c.value ||
									(this.c.value = this.j.addEntry(
										{
											name: (0, t.localize)(3515, null),
											text: "",
											ariaLabel: "",
										},
										"statusbar.currentProblem",
										z.StatusbarAlignment.LEFT,
									)),
									this.c.value.update({
										name: (0, t.localize)(3516, null),
										text: Fe,
										ariaLabel: Fe,
									});
							} else this.c.clear();
					}
					s(Ce, Le) {
						return !Le || !Ce
							? !0
							: F.IMarkerData.makeKey(Ce) !== F.IMarkerData.makeKey(Le);
					}
					t(Ce) {
						switch (Ce.severity) {
							case F.MarkerSeverity.Error:
								return "$(error)";
							case F.MarkerSeverity.Warning:
								return "$(warning)";
							case F.MarkerSeverity.Info:
								return "$(info)";
						}
						return "";
					}
					u() {
						if (
							!this.n.getValue("problems.showCurrentInStatus") ||
							!this.f ||
							!this.f.getModel()
						)
							return null;
						const Le = this.f.getPosition();
						return (
							(Le && this.g.find((Fe) => y.$iL.containsPosition(Fe, Le))) ||
							null
						);
					}
					w(Ce) {
						if (!this.f) return;
						const Le = this.f.getModel();
						Le &&
							((Le && !Ce.some((Fe) => (0, E.$gh)(Le.uri, Fe))) || this.y());
					}
					y() {
						if (!this.f) return;
						const Ce = this.f.getModel();
						Ce &&
							(Ce
								? ((this.g = this.m.read({
										resource: Ce.uri,
										severities:
											F.MarkerSeverity.Error |
											F.MarkerSeverity.Warning |
											F.MarkerSeverity.Info,
									})),
									this.g.sort(this.z))
								: (this.g = []),
							this.q());
					}
					z(Ce, Le) {
						let Fe = (0, w.$Ff)(Ce.resource.toString(), Le.resource.toString());
						return (
							Fe === 0 &&
								(Fe = F.MarkerSeverity.compare(Ce.severity, Le.severity)),
							Fe === 0 && (Fe = y.$iL.compareRangesUsingStarts(Ce, Le)),
							Fe
						);
					}
				};
				ue = Ne([j(0, z.$d6b), j(1, F.$aM), j(2, L.$gj)], ue);
				let fe = class extends m.$rj {
					static {
						Y = this;
					}
					static {
						this.ID = "workbench.action.showLanguageExtensions";
					}
					constructor(Ce, Le, Fe) {
						super(Y.ID, (0, t.localize)(3517, null, Ce)),
							(this.c = Ce),
							(this.f = Le),
							(this.enabled = Fe.isEnabled());
					}
					async run() {
						await this.f.executeCommand(
							"workbench.extensions.action.showExtensionsForLanguage",
							this.c,
						);
					}
				};
				(e.$suc = fe), (e.$suc = fe = Y = Ne([j(1, v.$ek), j(2, S.$Ep)], fe));
				class me extends G.$3X {
					static {
						this.ID = "workbench.action.editor.changeLanguageMode";
					}
					constructor() {
						super({
							id: me.ID,
							title: (0, t.localize2)(3542, "Change Language Mode"),
							f1: !0,
							keybinding: {
								weight: K.KeybindingWeight.WorkbenchContrib,
								primary: (0, J.$os)(J.$ps, J.KeyCode.KeyM),
								mac: { primary: (0, J.$os)(J.$qs, J.KeyCode.KeyM) },
							},
							precondition: V.$Kj.not("notebookEditorFocused"),
							metadata: {
								description: (0, t.localize)(3518, null),
								args: [
									{
										name: (0, t.localize)(3519, null),
										constraint: (Ce) => typeof Ce == "string",
									},
								],
							},
						});
					}
					async run(Ce, Le) {
						const Fe = Ce.get(R.$DJ),
							Oe = Ce.get(f.$IY),
							xe = Ce.get(l.$nM),
							He = Ce.get(q.$RO),
							Ke = Ce.get(I.$kZ),
							Je = Ce.get(A.$7Z),
							Te = Ce.get(s.$Li),
							Ee = Ce.get(L.$gj),
							Ie = Ce.get(x.$km),
							Be = (0, M.$btb)(Oe.activeTextEditorControl);
						if (!Be) {
							await Fe.pick([{ label: (0, t.localize)(3520, null) }]);
							return;
						}
						const Se = Be.getModel(),
							ke = a.$A1.getOriginalUri(Oe.activeEditor, {
								supportSideBySide: a.SideBySideEditor.PRIMARY,
							});
						let Ue, qe;
						Se &&
							((qe = Se.getLanguageId()),
							(Ue = xe.getLanguageName(qe) ?? void 0));
						let Ae = !!ke;
						ke?.scheme === N.Schemas.untitled &&
							!Ke.untitled.get(ke)?.hasAssociatedFilePath &&
							(Ae = !1);
						const De = xe
							.getSortedRegisteredLanguageNames()
							.map(({ languageName: ft, languageId: bt }) => {
								const nt = xe.getExtensions(bt).join(" ");
								let lt;
								return (
									Ue === ft
										? (lt = (0, t.localize)(3521, null, bt))
										: (lt = (0, t.localize)(3522, null, bt)),
									{
										label: ft,
										meta: nt,
										iconClasses: (0, O.$CDb)(bt),
										description: lt,
									}
								);
							});
						De.unshift({
							type: "separator",
							label: (0, t.localize)(3523, null),
						});
						let Re, je, Ve;
						if (Ae && ke) {
							const ft = (0, E.$lh)(ke) || (0, E.$kh)(ke);
							(Ve = Te.createInstance(fe, ft)),
								Ve.enabled && De.unshift(Ve),
								(je = { label: (0, t.localize)(3524, null, Ue) }),
								De.unshift(je),
								(Re = { label: (0, t.localize)(3525, null, ft) }),
								De.unshift(Re);
						}
						const Ze = { label: (0, t.localize)(3526, null) };
						De.unshift(Ze);
						const et =
							typeof Le == "string"
								? { label: Le }
								: await Fe.pick(De, {
										placeHolder: (0, t.localize)(3527, null),
										matchOnDescription: !0,
									});
						if (!et) return;
						if (et === Ve) {
							Ve.run();
							return;
						}
						if (et === Re) {
							ke && this.c(ke, xe, Fe, Ee);
							return;
						}
						if (et === je) {
							Je.openUserSettings({
								jsonEditor: !0,
								revealSetting: { key: `[${qe ?? null}]`, edit: !0 },
							});
							return;
						}
						const rt = Oe.activeEditor;
						if (rt) {
							const ft = _(rt);
							if (ft) {
								let bt, nt;
								if (et === Ze) {
									if (Se) {
										const lt = a.$A1.getOriginalUri(rt, {
											supportSideBySide: a.SideBySideEditor.PRIMARY,
										});
										if (lt) {
											let ct =
												xe.guessLanguageIdByFilepathOrFirstLine(
													lt,
													Se.getLineContent(1),
												) ?? void 0;
											(!ct || ct === "unknown") &&
												((nt = await He.detectLanguage(lt)), (ct = nt)),
												ct && (bt = xe.createById(ct));
										}
									}
								} else {
									const lt = xe.getLanguageIdByLanguageName(et.label);
									(bt = xe.createById(lt)),
										ke &&
											He.detectLanguage(ke).then((ct) => {
												const gt =
													xe.getLanguageIdByLanguageName(et.label) || "unknown";
												if (ct === qe && qe !== gt) {
													const ht = Ee.getValue(
														"workbench.editor.preferHistoryBasedLanguageDetection",
													)
														? "history"
														: "classic";
													Ie.publicLog2(q.$TO, {
														currentLanguageId: Ue ?? "unknown",
														nextLanguageId: et.label,
														lineCount: Se?.getLineCount() ?? -1,
														modelPreference: ht,
													});
												}
											});
								}
								if (
									typeof bt < "u" &&
									(ft.setLanguageId(bt.languageId, me.ID),
									ke?.scheme === N.Schemas.untitled)
								) {
									const lt = Ee.getValue(
										"workbench.editor.preferHistoryBasedLanguageDetection",
									)
										? "history"
										: "classic";
									Ie.publicLog2("setUntitledDocumentLanguage", {
										to: bt.languageId,
										from: qe ?? "none",
										modelPreference: lt,
									});
								}
							}
							Be.focus();
						}
					}
					c(Ce, Le, Fe, Oe) {
						const xe = (0, E.$lh)(Ce),
							He = (0, E.$kh)(Ce),
							Ke = Le.guessLanguageIdByFilepathOrFirstLine(d.URI.file(He)),
							Te = Le.getSortedRegisteredLanguageNames().map(
								({ languageName: Ee, languageId: Ie }) => ({
									id: Ie,
									label: Ee,
									iconClasses: (0, O.$CDb)(Ie),
									description: Ie === Ke ? (0, t.localize)(3528, null) : void 0,
								}),
							);
						setTimeout(async () => {
							const Ee = await Fe.pick(Te, {
								placeHolder: (0, t.localize)(3529, null, xe || He),
							});
							if (Ee) {
								const Ie = Oe.inspect(b.$Ll);
								let Be;
								xe && He[0] !== "." ? (Be = `*${xe}`) : (Be = He);
								let Se = L.ConfigurationTarget.USER;
								Ie.workspaceValue &&
									Ie.workspaceValue[Be] &&
									(Se = L.ConfigurationTarget.WORKSPACE);
								const ke =
									(0, D.$vo)(
										Se === L.ConfigurationTarget.WORKSPACE
											? Ie.workspaceValue
											: Ie.userValue,
									) || Object.create(null);
								(ke[Be] = Ee.id), Oe.updateValue(b.$Ll, ke, Se);
							}
						}, 50);
					}
				}
				e.$tuc = me;
				class ve extends G.$3X {
					constructor() {
						super({
							id: "workbench.action.editor.changeEOL",
							title: (0, t.localize2)(3543, "Change End of Line Sequence"),
							f1: !0,
						});
					}
					async run(Ce) {
						const Le = Ce.get(f.$IY),
							Fe = Ce.get(R.$DJ),
							Oe = (0, M.$btb)(Le.activeTextEditorControl);
						if (!Oe) {
							await Fe.pick([{ label: (0, t.localize)(3530, null) }]);
							return;
						}
						if (Le.activeEditor?.isReadonly()) {
							await Fe.pick([{ label: (0, t.localize)(3531, null) }]);
							return;
						}
						let xe = Oe.getModel();
						const He = [
								{ label: ae, eol: c.EndOfLineSequence.LF },
								{ label: pe, eol: c.EndOfLineSequence.CRLF },
							],
							Ke =
								xe?.getEOL() ===
								`
`
									? 0
									: 1,
							Je = await Fe.pick(He, {
								placeHolder: (0, t.localize)(3532, null),
								activeItem: He[Ke],
							});
						if (Je) {
							const Te = (0, M.$btb)(Le.activeTextEditorControl);
							Te?.hasModel() &&
								!Le.activeEditor?.isReadonly() &&
								((xe = Te.getModel()),
								xe.pushStackElement(),
								xe.pushEOL(Je.eol),
								xe.pushStackElement());
						}
						Oe.focus();
					}
				}
				e.$uuc = ve;
				class ge extends G.$3X {
					constructor() {
						super({
							id: "workbench.action.editor.changeEncoding",
							title: (0, t.localize2)(3544, "Change File Encoding"),
							f1: !0,
						});
					}
					async run(Ce) {
						const Le = Ce.get(f.$IY),
							Fe = Ce.get(R.$DJ),
							Oe = Ce.get(b.$ll),
							xe = Ce.get(I.$kZ),
							He = Ce.get(k.$XO),
							Ke = (0, M.$btb)(Le.activeTextEditorControl);
						if (!Ke) {
							await Fe.pick([{ label: (0, t.localize)(3533, null) }]);
							return;
						}
						const Je = Le.activeEditorPane;
						if (!Je) {
							await Fe.pick([{ label: (0, t.localize)(3534, null) }]);
							return;
						}
						const Te = ee(Je.input);
						if (!Te) {
							await Fe.pick([{ label: (0, t.localize)(3535, null) }]);
							return;
						}
						const Ee = { label: (0, t.localize)(3536, null) },
							Ie = { label: (0, t.localize)(3537, null) };
						if (!r.Language.isDefaultVariant()) {
							const Ze = "Save with Encoding";
							Ze !== Ee.label && (Ee.detail = Ze);
							const et = "Reopen with Encoding";
							et !== Ie.label && (Ie.detail = et);
						}
						let Be;
						if (
							(Te instanceof u.$T1b
								? (Be = Ee)
								: Je.input.isReadonly()
									? (Be = Ie)
									: (Be = await Fe.pick([Ie, Ee], {
											placeHolder: (0, t.localize)(3538, null),
											matchOnDetail: !0,
										})),
							!Be)
						)
							return;
						await (0, B.$Nh)(50);
						const Se = a.$A1.getOriginalUri(Je.input, {
							supportSideBySide: a.SideBySideEditor.PRIMARY,
						});
						if (
							!Se ||
							(!Oe.hasProvider(Se) && Se.scheme !== N.Schemas.untitled)
						)
							return;
						let ke;
						Oe.hasProvider(Se) &&
							(ke = (
								await xe.readStream(Se, {
									autoGuessEncoding: !0,
									candidateGuessEncodings: He.getValue(
										Se,
										"files.candidateGuessEncodings",
									),
								})
							).encoding);
						const Ue = Be === Ie,
							qe = He.getValue(Se, "files.encoding");
						let Ae, Me;
						const De = Object.keys(T.$4Y)
								.sort((Ze, et) =>
									Ze === qe
										? -1
										: et === qe
											? 1
											: T.$4Y[Ze].order - T.$4Y[et].order,
								)
								.filter((Ze) =>
									Ze === ke && ke !== qe ? !1 : !Ue || !T.$4Y[Ze].encodeOnly,
								)
								.map(
									(Ze, et) => (
										Ze === Te.getEncoding()
											? (Ae = et)
											: T.$4Y[Ze].alias === Te.getEncoding() && (Me = et),
										{ id: Ze, label: T.$4Y[Ze].labelLong, description: Ze }
									),
								),
							Re = De.slice();
						ke &&
							qe !== ke &&
							T.$4Y[ke] &&
							(De.unshift({ type: "separator" }),
							De.unshift({
								id: ke,
								label: T.$4Y[ke].labelLong,
								description: (0, t.localize)(3539, null),
							}));
						const je = await Fe.pick(De, {
							placeHolder: Ue
								? (0, t.localize)(3540, null)
								: (0, t.localize)(3541, null),
							activeItem:
								Re[
									typeof Ae == "number" ? Ae : typeof Me == "number" ? Me : -1
								],
						});
						if (!je || !Le.activeEditorPane) return;
						const Ve = ee(Le.activeEditorPane.input);
						typeof je.id < "u" &&
							Ve &&
							(await Ve.setEncoding(
								je.id,
								Ue ? I.EncodingMode.Decode : I.EncodingMode.Encode,
							)),
							Ke.focus();
					}
				}
				e.$vuc = ge;
			},
		),
		