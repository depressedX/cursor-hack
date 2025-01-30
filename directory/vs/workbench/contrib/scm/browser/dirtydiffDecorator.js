import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/async.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/event.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../editor/common/services/editorWorker.js';
import '../../../../platform/configuration/common/configuration.js';
import '../common/scm.js';
import '../../../../editor/common/model/textModel.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/contrib/peekView/browser/peekView.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../editor/common/editorContextKeys.js';
import '../../../../base/common/keyCodes.js';
import '../../../../editor/common/core/position.js';
import '../../../../base/common/numbers.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../editor/browser/widget/diffEditor/embeddedDiffEditorWidget.js';
import '../../../../editor/common/config/editorOptions.js';
import '../../../../base/common/actions.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../base/common/resources.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../editor/common/editorCommon.js';
import '../../../../editor/common/model.js';
import '../../../../base/common/arrays.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../base/browser/dom.js';
import '../../../services/textfile/common/textfiles.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/themables.js';
import '../../../../base/common/errors.js';
import '../../../common/contextkeys.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../base/common/color.js';
import '../../../../base/common/map.js';
import '../../../services/editor/common/editorService.js';
import '../../../../platform/accessibilitySignal/browser/accessibilitySignalService.js';
import '../../../../platform/accessibility/common/accessibility.js';
import '../common/quickDiff.js';
import './dirtyDiffSwitcher.js';
import '../../../../css!vs/workbench/contrib/scm/browser/media/dirtydiffDecorator.js';
define(
			de[1884],
			he([
				1, 0, 4, 15, 3, 6, 5, 42, 200, 10, 258, 122, 35, 51, 56, 46, 255, 8, 71,
				27, 48, 201, 43, 784, 38, 50, 39, 19, 11, 92, 98, 64, 24, 65, 7, 85, 79,
				14, 26, 29, 100, 84, 97, 59, 18, 184, 91, 803, 3128, 2486,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*async*/,
				w /*lifecycle*/,
				E /*event*/,
				C /*instantiation*/,
				d /*resolverService*/,
				m /*editorWorker*/,
				r /*configuration*/,
				u /*scm*/,
				a /*textModel*/,
				h /*themeService*/,
				c /*colorRegistry*/,
				n /*editorBrowser*/,
				g /*editorExtensions*/,
				p /*peekView*/,
				o /*contextkey*/,
				f /*editorContextKeys*/,
				b /*keyCodes*/,
				s /*position*/,
				l /*numbers*/,
				y /*keybindingsRegistry*/,
				$ /*embeddedDiffEditorWidget*/,
				v /*editorOptions*/,
				S /*actions*/,
				I /*keybinding*/,
				T /*resources*/,
				P /*actions*/,
				k /*menuEntryActionViewItem*/,
				L /*editorCommon*/,
				D /*model*/,
				M /*arrays*/,
				N /*codeEditorService*/,
				A /*dom*/,
				R /*textfiles*/,
				O /*iconRegistry*/,
				B /*codicons*/,
				U /*themables*/,
				z /*errors*/,
				F /*contextkeys*/,
				x /*progress*/,
				H /*color*/,
				q /*map*/,
				V /*editorService*/,
				G /*accessibilitySignalService*/,
				K /*accessibility*/,
				J /*quickDiff*/,
				W /*dirtyDiffSwitcher*/,
) {
				"use strict";
				var X, Y;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gnc =
						e.$fnc =
						e.$dnc =
						e.$cnc =
						e.$bnc =
						e.$anc =
						e.$_mc =
						e.$$mc =
							void 0),
					(e.$enc = Je),
					(t = mt(t)),
					(A = mt(A));
				class ie extends S.$sj {
					q(Se, ke) {
						return Se instanceof P.$2X ? Se.run(...ke) : super.q(Se, ke);
					}
				}
				e.$$mc = new o.$5j("dirtyDiffVisible", !1);
				function ne(Be) {
					const Se = Be.modifiedEndLineNumber - Be.modifiedStartLineNumber + 1,
						ke = Be.originalEndLineNumber - Be.originalStartLineNumber + 1;
					return Be.originalEndLineNumber === 0
						? Se
						: Be.modifiedEndLineNumber === 0
							? ke
							: Se + ke;
				}
				function ee(Be) {
					return Be.modifiedEndLineNumber === 0
						? Be.modifiedStartLineNumber === 0
							? 1
							: Be.modifiedStartLineNumber
						: Be.modifiedEndLineNumber;
				}
				function _(Be, Se) {
					return Be === 1 &&
						Se.modifiedStartLineNumber === 0 &&
						Se.modifiedEndLineNumber === 0
						? !0
						: Be >= Se.modifiedStartLineNumber &&
								Be <= (Se.modifiedEndLineNumber || Se.modifiedStartLineNumber);
				}
				let te = class extends S.$rj {
					constructor(Se, ke, Ue, qe, Ae) {
						const Me = qe.lookupKeybinding(ke.id),
							De = ke.label + (Me ? ` (${Me.getLabel()})` : "");
						super(ke.id, De, Ue), (this.g = Ae), (this.f = ke), (this.c = Se);
					}
					run() {
						return Promise.resolve(
							this.g.invokeFunction((Se) => this.f.run(Se, this.c, null)),
						);
					}
				};
				te = Ne([j(3, I.$uZ), j(4, C.$Li)], te);
				var Q;
				(function (Be) {
					(Be[(Be.Modify = 0)] = "Modify"),
						(Be[(Be.Add = 1)] = "Add"),
						(Be[(Be.Delete = 2)] = "Delete");
				})(Q || (Q = {}));
				function Z(Be) {
					return Be.originalEndLineNumber === 0
						? Q.Add
						: Be.modifiedEndLineNumber === 0
							? Q.Delete
							: Q.Modify;
				}
				function se(Be, Se) {
					switch (Se) {
						case Q.Modify:
							return Be.getColor(me);
						case Q.Add:
							return Be.getColor(ve);
						case Q.Delete:
							return Be.getColor(ge);
					}
				}
				function re(Be) {
					const Se = Be.get(N.$dtb).listDiffEditors();
					for (const ke of Se)
						if (ke.hasTextFocus() && ke instanceof $.$7mc)
							return ke.getParentEditor();
					return (0, p.$8Mb)(Be);
				}
				let le = class extends p.$9Mb {
					constructor(Se, ke, Ue, qe, Ae, Me) {
						super(
							Se,
							{
								isResizeable: !0,
								frameWidth: 1,
								keepEditorSelection: !0,
								className: "dirty-diff",
							},
							qe,
						),
							(this.eb = ke),
							(this.fb = Ue),
							(this.gb = Ae),
							(this.hb = Me),
							(this.Y = 0),
							(this.Z = ""),
							(this.bb = void 0),
							this.o.add(Ue.onDidColorThemeChange(this.sb, this)),
							this.sb(Ue.getColorTheme()),
							this.eb.original.length > 0 &&
								(Me = Me.createOverlay([
									["originalResourceScheme", this.eb.original[0].uri.scheme],
									[
										"originalResourceSchemes",
										this.eb.original.map((De) => De.uri.scheme),
									],
								])),
							this.create(),
							Se.hasModel()
								? (this.m = (0, T.$kh)(Se.getModel().uri))
								: (this.m = ""),
							this.setTitle(this.m);
					}
					get provider() {
						return this.Z;
					}
					get index() {
						return this.Y;
					}
					get visibleRange() {
						const Se = this.c.getModifiedEditor().getVisibleRanges();
						return Se.length >= 0 ? Se[0] : void 0;
					}
					showChange(Se, ke = !0) {
						const Ue = this.eb.changes[Se],
							qe = Ue.change;
						if (
							((this.Y = Se),
							this.hb.createKey(
								"originalResourceScheme",
								this.eb.changes[Se].uri.scheme,
							),
							this.lb(),
							(this.Z = Ue.label),
							(this.ab = qe),
							!this.eb.original)
						)
							return;
						E.Event.once(this.c.onDidUpdateDiff)(() =>
							setTimeout(() => this.rb(qe), 0),
						);
						const De = this.eb.getDiffEditorModel(Ue.uri.toString());
						if (!De) return;
						this.c.setModel(De), this.cb?.setSelection(Ue.label);
						const Re = new s.$hL(ee(qe), 1),
							je = this.editor.getOption(v.EditorOption.lineHeight),
							Ve = this.editor.getLayoutInfo().height,
							Ze = Math.floor(Ve / je),
							et = Math.min(ne(qe) + 8, Math.floor(Ze / 3));
						this.ib(Ue.label);
						const rt = Z(qe),
							ft = se(this.fb.getColorTheme(), rt);
						this.style({ frameColor: ft, arrowColor: ft });
						const bt = [];
						let nt = Se;
						for (const lt of this.eb.changes)
							lt.label === this.eb.changes[this.Y].label &&
								(bt.push(lt.change), Ue === lt && (nt = bt.length - 1));
						(this.K.context = [De.modified.uri, bt, nt]),
							ke &&
								(this.show(Re, et),
								this.editor.setPosition(Re),
								this.editor.focus());
					}
					ib(Se) {
						const ke = this.eb.mapChanges.get(Se),
							Ue = ke.indexOf(this.Y);
						let qe;
						this.kb()
							? ((qe =
									this.eb.changes.length > 1
										? t.localize(8969, null, Ue + 1, ke.length)
										: t.localize(8970, null, Ue + 1, ke.length)),
								(this.db.style.display = "inherit"))
							: ((qe =
									this.eb.changes.length > 1
										? t.localize(8967, null, Se, Ue + 1, ke.length)
										: t.localize(8968, null, Se, Ue + 1, ke.length)),
								(this.db.style.display = "none")),
							this.setTitle(this.m, qe);
					}
					jb(Se) {
						const ke = Se?.provider;
						if (ke === this.eb.changes[this.Y].label) return;
						let Ue = this.Y < this.eb.changes.length - 1 ? this.Y + 1 : 0;
						for (
							let Me = Ue;
							Me !== this.Y;
							Me < this.eb.changes.length - 1 ? Me++ : (Me = 0)
						)
							if (this.eb.changes[Me].label === ke) {
								Ue = Me;
								break;
							}
						let qe = this.Y > 0 ? this.Y - 1 : this.eb.changes.length - 1;
						for (
							let Me = qe;
							Me !== this.Y;
							Me >= 0 ? Me-- : (Me = this.eb.changes.length - 1)
						)
							if (this.eb.changes[Me].label === ke) {
								qe = Me;
								break;
							}
						const Ae =
							Math.abs(
								this.eb.changes[Ue].change.modifiedEndLineNumber -
									this.eb.changes[this.Y].change.modifiedEndLineNumber,
							) <
							Math.abs(
								this.eb.changes[qe].change.modifiedEndLineNumber -
									this.eb.changes[this.Y].change.modifiedEndLineNumber,
							)
								? Ue
								: qe;
						this.showChange(Ae, !1);
					}
					kb() {
						let Se = 0;
						if (this.eb.mapChanges.size > 1) {
							const ke = Array.from(this.eb.mapChanges.keys());
							for (let Ue = 0; Ue < ke.length && Se <= 1; Ue++)
								this.eb.mapChanges.get(ke[Ue]).length > 0 && Se++;
						}
						return Se >= 2;
					}
					lb() {
						if (!this.K) return;
						const Se = this.M.createInstance(
								te,
								this.editor,
								new oe(this.editor),
								U.ThemeIcon.asClassName(O.$cP),
							),
							ke = this.M.createInstance(
								te,
								this.editor,
								new ae(this.editor),
								U.ThemeIcon.asClassName(O.$dP),
							);
						this.o.add(Se), this.o.add(ke);
						const Ue = [];
						this.X && this.X.dispose(),
							(this.X = this.gb.createMenu(P.$XX.SCMChangeContext, this.hb)),
							(0, k.$Kyb)(this.X, { shouldForwardArgs: !0 }, Ue),
							this.K.clear(),
							this.K.push(Ue.reverse(), { label: !1, icon: !0 }),
							this.K.push([ke, Se], { label: !1, icon: !0 }),
							this.K.push(
								new S.$rj(
									"peekview.close",
									t.localize(8971, null),
									U.ThemeIcon.asClassName(B.$ak.close),
									!0,
									() => this.dispose(),
								),
								{ label: !1, icon: !0 },
							);
					}
					P(Se) {
						super.P(Se, !0),
							(this.db = A.$ghb(this.s, A.$(".dropdown"))),
							(this.cb = this.M.createInstance(
								W.$9mc,
								new W.$0mc((ke) => this.jb(ke)),
								this.eb.quickDiffs.map((ke) => ke.label),
								this.eb.changes[this.Y].label,
							)),
							this.cb.render(this.db),
							this.lb();
					}
					R() {
						const Se = new ie();
						return (
							Se.onDidRun((ke) => {
								!(ke.action instanceof te) && !ke.error && this.dispose();
							}),
							{ ...super.R(), actionRunner: Se }
						);
					}
					T(Se) {
						const ke = {
							scrollBeyondLastLine: !0,
							scrollbar: {
								verticalScrollbarSize: 14,
								horizontal: "auto",
								useShadows: !0,
								verticalHasArrows: !1,
								horizontalHasArrows: !1,
							},
							overviewRulerLanes: 2,
							fixedOverflowWidgets: !0,
							minimap: { enabled: !1 },
							renderSideBySide: !1,
							readOnly: !1,
							renderIndicators: !1,
							diffAlgorithm: "advanced",
							ignoreTrimWhitespace: !1,
							stickyScroll: { enabled: !1 },
						};
						(this.c = this.M.createInstance($.$7mc, Se, ke, {}, this.editor)),
							this.o.add(this.c);
					}
					D(Se) {
						typeof this.bb > "u" ||
							this.c.layout({ height: this.bb, width: Se });
					}
					W(Se, ke) {
						super.W(Se, ke),
							this.c.layout({ height: Se, width: ke }),
							typeof this.bb > "u" && this.ab && this.rb(this.ab),
							(this.bb = Se);
					}
					rb(Se) {
						let ke, Ue;
						Se.modifiedEndLineNumber === 0
							? ((ke = Se.modifiedStartLineNumber),
								(Ue = Se.modifiedStartLineNumber + 1))
							: Se.originalEndLineNumber > 0
								? ((ke = Se.modifiedStartLineNumber - 1),
									(Ue = Se.modifiedEndLineNumber + 1))
								: ((ke = Se.modifiedStartLineNumber),
									(Ue = Se.modifiedEndLineNumber)),
							this.c.revealLinesInCenter(ke, Ue, L.ScrollType.Immediate);
					}
					sb(Se) {
						const ke = Se.getColor(p.$aNb) || H.$UL.transparent;
						this.style({
							arrowColor: ke,
							frameColor: ke,
							headerBackgroundColor: Se.getColor(p.$0Mb) || H.$UL.transparent,
							primaryHeadingColor: Se.getColor(p.$$Mb),
							secondaryHeadingColor: Se.getColor(p.$_Mb),
						});
					}
					A(Se) {
						this.editor.revealLineInCenterIfOutsideViewport(
							Se.endLineNumber,
							L.ScrollType.Smooth,
						);
					}
					hasFocus() {
						return this.c.hasTextFocus();
					}
					dispose() {
						super.dispose(), this.X?.dispose();
					}
				};
				le = Ne([j(2, h.$iP), j(3, C.$Li), j(4, P.$YX), j(5, o.$6j)], le);
				class oe extends g.$itb {
					constructor(Se) {
						super({
							id: "editor.action.dirtydiff.previous",
							label: t.localize(8972, null),
							alias: "Show Previous Change",
							precondition: F.$WPb.toNegated(),
							kbOpts: {
								kbExpr: f.EditorContextKeys.editorTextFocus,
								primary: b.KeyMod.Shift | b.KeyMod.Alt | b.KeyCode.F3,
								weight: y.KeybindingWeight.EditorContrib,
							},
						}),
							(this.h = Se);
					}
					run(Se) {
						const ke = this.h ?? re(Se);
						if (!ke) return;
						const Ue = fe.get(ke);
						Ue && Ue.canNavigate() && Ue.previous();
					}
				}
				(e.$_mc = oe), (0, g.$ntb)(oe);
				class ae extends g.$itb {
					constructor(Se) {
						super({
							id: "editor.action.dirtydiff.next",
							label: t.localize(8973, null),
							alias: "Show Next Change",
							precondition: F.$WPb.toNegated(),
							kbOpts: {
								kbExpr: f.EditorContextKeys.editorTextFocus,
								primary: b.KeyMod.Alt | b.KeyCode.F3,
								weight: y.KeybindingWeight.EditorContrib,
							},
						}),
							(this.h = Se);
					}
					run(Se) {
						const ke = this.h ?? re(Se);
						if (!ke) return;
						const Ue = fe.get(ke);
						Ue && Ue.canNavigate() && Ue.next();
					}
				}
				(e.$anc = ae),
					(0, g.$ntb)(ae),
					P.$ZX.appendMenuItem(P.$XX.MenubarGoMenu, {
						group: "7_change_nav",
						command: {
							id: "editor.action.dirtydiff.next",
							title: t.localize(8974, null),
						},
						order: 1,
					}),
					P.$ZX.appendMenuItem(P.$XX.MenubarGoMenu, {
						group: "7_change_nav",
						command: {
							id: "editor.action.dirtydiff.previous",
							title: t.localize(8975, null),
						},
						order: 2,
					});
				class pe extends g.$itb {
					constructor() {
						super({
							id: "workbench.action.editor.previousChange",
							label: t.localize(8976, null),
							alias: "Go to Previous Change",
							precondition: F.$WPb.toNegated(),
							kbOpts: {
								kbExpr: f.EditorContextKeys.editorTextFocus,
								primary: b.KeyMod.Shift | b.KeyMod.Alt | b.KeyCode.F5,
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					async run(Se) {
						const ke = re(Se),
							Ue = Se.get(G.$Owb),
							qe = Se.get(K.$XK),
							Ae = Se.get(N.$dtb);
						if (!ke || !ke.hasModel()) return;
						const Me = fe.get(ke);
						if (!Me || !Me.modelRegistry) return;
						const De = ke.getPosition().lineNumber,
							Re = Me.modelRegistry.getModel(ke.getModel(), ke);
						if (!Re || Re.changes.length === 0) return;
						const je = Re.findPreviousClosestChange(De, !1),
							Ve = Re.changes[je];
						await ue(Ve.change, Ue), ye(Ve.change, ke, qe, Ae);
					}
				}
				(e.$bnc = pe), (0, g.$ntb)(pe);
				class $e extends g.$itb {
					constructor() {
						super({
							id: "workbench.action.editor.nextChange",
							label: t.localize(8977, null),
							alias: "Go to Next Change",
							precondition: F.$WPb.toNegated(),
							kbOpts: {
								kbExpr: f.EditorContextKeys.editorTextFocus,
								primary: b.KeyMod.Alt | b.KeyCode.F5,
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					async run(Se) {
						const ke = Se.get(G.$Owb),
							Ue = re(Se),
							qe = Se.get(K.$XK),
							Ae = Se.get(N.$dtb);
						if (!Ue || !Ue.hasModel()) return;
						const Me = fe.get(Ue);
						if (!Me || !Me.modelRegistry) return;
						const De = Ue.getPosition().lineNumber,
							Re = Me.modelRegistry.getModel(Ue.getModel(), Ue);
						if (!Re || Re.changes.length === 0) return;
						const je = Re.findNextClosestChange(De, !1),
							Ve = Re.changes[je].change;
						await ue(Ve, ke), ye(Ve, Ue, qe, Ae);
					}
				}
				e.$cnc = $e;
				function ye(Be, Se, ke, Ue) {
					const qe = new s.$hL(Be.modifiedStartLineNumber, 1);
					Se.setPosition(qe),
						Se.revealPositionInCenter(qe),
						ke.isScreenReaderOptimized() &&
							(Se.setSelection({
								startLineNumber: Be.modifiedStartLineNumber,
								startColumn: 0,
								endLineNumber: Be.modifiedStartLineNumber,
								endColumn: Number.MAX_VALUE,
							}),
							Ue.getActiveCodeEditor()?.writeScreenReaderContent(
								"diff-navigation",
							));
				}
				async function ue(Be, Se) {
					switch (Z(Be)) {
						case Q.Add:
							Se.playSignal(G.$Twb.diffLineInserted, {
								allowManyInParallel: !0,
								source: "dirtyDiffDecoration",
							});
							break;
						case Q.Delete:
							Se.playSignal(G.$Twb.diffLineDeleted, {
								allowManyInParallel: !0,
								source: "dirtyDiffDecoration",
							});
							break;
						case Q.Modify:
							Se.playSignal(G.$Twb.diffLineModified, {
								allowManyInParallel: !0,
								source: "dirtyDiffDecoration",
							});
							break;
					}
				}
				(0, g.$ntb)($e),
					y.$TX.registerCommandAndKeybindingRule({
						id: "closeDirtyDiff",
						weight: y.KeybindingWeight.EditorContrib + 50,
						primary: b.KeyCode.Escape,
						secondary: [b.KeyMod.Shift | b.KeyCode.Escape],
						when: o.$Kj.and(e.$$mc),
						handler: (Be) => {
							const Se = re(Be);
							if (!Se) return;
							const ke = fe.get(Se);
							ke && ke.close();
						},
					});
				let fe = class extends w.$1c {
					static {
						X = this;
					}
					static {
						this.ID = "editor.contrib.dirtydiff";
					}
					static get(Se) {
						return Se.getContribution(X.ID);
					}
					constructor(Se, ke, Ue, qe) {
						if (
							(super(),
							(this.s = Se),
							(this.t = Ue),
							(this.u = qe),
							(this.modelRegistry = null),
							(this.c = null),
							(this.f = null),
							(this.h = w.$1c.None),
							(this.j = null),
							(this.m = !1),
							(this.n = new w.$Zc()),
							(this.m = !ke.getContextKeyValue("isInDiffEditor")),
							(this.q = A.$Rgb(void 0, void 0, this.B)),
							this.m)
						) {
							(this.g = e.$$mc.bindTo(ke)),
								this.D(Se.onDidChangeModel(() => this.close()));
							const Ae = E.Event.filter(Ue.onDidChangeConfiguration, (Me) =>
								Me.affectsConfiguration("scm.diffDecorationsGutterAction"),
							);
							this.D(Ae(this.w, this)), this.w();
						}
					}
					w() {
						const Se = this.t.getValue("scm.diffDecorationsGutterAction");
						this.n.clear(),
							Se === "diff"
								? (this.n.add(this.s.onMouseDown((ke) => this.C(ke))),
									this.n.add(this.s.onMouseUp((ke) => this.F(ke))),
									(this.q.textContent = `
				.monaco-editor .dirty-diff-glyph {
					cursor: pointer;
				}

				.monaco-editor .margin-view-overlays .dirty-diff-glyph:hover::before {
					height: 100%;
					width: 6px;
					left: -6px;
				}

				.monaco-editor .margin-view-overlays .dirty-diff-deleted:hover::after {
					bottom: 0;
					border-top-width: 0;
					border-bottom-width: 0;
				}
			`))
								: (this.q.textContent = "");
					}
					canNavigate() {
						return (
							!this.f ||
							this.f?.index === -1 ||
							(!!this.c && this.c.changes.length > 1)
						);
					}
					refresh() {
						this.f?.showChange(this.f.index, !1);
					}
					next(Se) {
						if (!this.y() || !this.f || !this.c) return;
						let ke;
						if (
							this.s.hasModel() &&
							(typeof Se == "number" || !this.f.provider)
						)
							ke = this.c.findNextClosestChange(
								typeof Se == "number" ? Se : this.s.getPosition().lineNumber,
								!0,
								this.f.provider,
							);
						else {
							const Ue =
									this.c.mapChanges.get(this.f.provider) ??
									this.c.mapChanges.values().next().value,
								qe = Ue.findIndex((Ae) => Ae === this.f.index);
							ke = Ue[(0, l.rot)(qe + 1, Ue.length)];
						}
						this.f.showChange(ke);
					}
					previous(Se) {
						if (!this.y() || !this.f || !this.c) return;
						let ke;
						if (this.s.hasModel() && typeof Se == "number")
							ke = this.c.findPreviousClosestChange(
								typeof Se == "number" ? Se : this.s.getPosition().lineNumber,
								!0,
								this.f.provider,
							);
						else {
							const Ue =
									this.c.mapChanges.get(this.f.provider) ??
									this.c.mapChanges.values().next().value,
								qe = Ue.findIndex((Ae) => Ae === this.f.index);
							ke = Ue[(0, l.rot)(qe - 1, Ue.length)];
						}
						this.f.showChange(ke);
					}
					close() {
						this.h.dispose(), (this.h = w.$1c.None);
					}
					y() {
						if (!this.m) return !1;
						if (this.f)
							return !this.c || this.c.changes.length === 0
								? (this.close(), !1)
								: !0;
						if (!this.modelRegistry) return !1;
						const Se = this.s.getModel();
						if (!Se) return !1;
						const ke = this.modelRegistry.getModel(Se, this.s);
						if (!ke || ke.changes.length === 0) return !1;
						(this.c = ke),
							(this.f = this.u.createInstance(le, this.s, ke)),
							this.g.set(!0);
						const Ue = new w.$Zc();
						return (
							Ue.add(E.Event.once(this.f.onDidClose)(this.close, this)),
							E.Event.chain(ke.onDidChange, (Ae) =>
								Ae.filter((Me) => Me.diff.length > 0).map((Me) => Me.diff),
							)(this.z, this, Ue),
							Ue.add(this.f),
							Ue.add(
								(0, w.$Yc)(() => {
									(this.c = null),
										(this.f = null),
										this.g.set(!1),
										this.s.focus();
								}),
							),
							(this.h = Ue),
							!0
						);
					}
					z(Se) {
						if (!(!this.c || !this.f || this.f.hasFocus())) {
							for (const ke of Se)
								if (ke.start <= this.f.index) {
									this.next();
									return;
								}
							this.refresh();
						}
					}
					C(Se) {
						this.j = null;
						const ke = Se.target.range;
						if (
							!ke ||
							!Se.event.leftButton ||
							Se.target.type !== n.MouseTargetType.GUTTER_LINE_DECORATIONS ||
							!Se.target.element ||
							Se.target.element.className.indexOf("dirty-diff-glyph") < 0
						)
							return;
						const Ue = Se.target.detail,
							qe = Se.target.element.offsetLeft,
							Ae = Ue.offsetX - qe;
						Ae < -3 || Ae > 3 || (this.j = { lineNumber: ke.startLineNumber });
					}
					F(Se) {
						if (!this.j) return;
						const { lineNumber: ke } = this.j;
						this.j = null;
						const Ue = Se.target.range;
						if (
							!Ue ||
							Ue.startLineNumber !== ke ||
							Se.target.type !== n.MouseTargetType.GUTTER_LINE_DECORATIONS ||
							!this.modelRegistry
						)
							return;
						const qe = this.s.getModel();
						if (!qe) return;
						const Ae = this.modelRegistry.getModel(qe, this.s);
						if (!Ae) return;
						const Me = Ae.changes.findIndex((De) => _(ke, De.change));
						Me < 0 || (Me === this.f?.index ? this.close() : this.next(ke));
					}
					getChanges() {
						if (!this.modelRegistry) return [];
						if (!this.s.hasModel()) return [];
						const Se = this.modelRegistry.getModel(this.s.getModel(), this.s);
						return Se ? Se.changes.map((ke) => ke.change) : [];
					}
					dispose() {
						this.n.dispose(), super.dispose();
					}
				};
				(e.$dnc = fe),
					(e.$dnc = fe = X = Ne([j(1, o.$6j), j(2, r.$gj), j(3, C.$Li)], fe));
				const me = (0, c.$wP)(
						"editorGutter.modifiedBackground",
						{
							dark: "#1B81A8",
							light: "#2090D3",
							hcDark: "#1B81A8",
							hcLight: "#2090D3",
						},
						t.localize(8978, null),
					),
					ve = (0, c.$wP)(
						"editorGutter.addedBackground",
						{
							dark: "#487E02",
							light: "#48985D",
							hcDark: "#487E02",
							hcLight: "#48985D",
						},
						t.localize(8979, null),
					),
					ge = (0, c.$wP)(
						"editorGutter.deletedBackground",
						c.$gQ,
						t.localize(8980, null),
					),
					be = (0, c.$wP)(
						"minimapGutter.modifiedBackground",
						me,
						t.localize(8981, null),
					),
					Ce = (0, c.$wP)(
						"minimapGutter.addedBackground",
						ve,
						t.localize(8982, null),
					),
					Le = (0, c.$wP)(
						"minimapGutter.deletedBackground",
						ge,
						t.localize(8983, null),
					),
					Fe = (0, c.$wP)(
						"editorOverviewRuler.modifiedForeground",
						(0, c.$BP)(me, 0.6),
						t.localize(8984, null),
					),
					Oe = (0, c.$wP)(
						"editorOverviewRuler.addedForeground",
						(0, c.$BP)(ve, 0.6),
						t.localize(8985, null),
					),
					xe = (0, c.$wP)(
						"editorOverviewRuler.deletedForeground",
						(0, c.$BP)(ge, 0.6),
						t.localize(8986, null),
					);
				let He = (Y = class extends w.$1c {
					static createDecoration(Se, ke, Ue) {
						const qe = {
							description: "dirty-diff-decoration",
							isWholeLine: Ue.isWholeLine,
						};
						return (
							Ue.gutter &&
								((qe.linesDecorationsClassName = `dirty-diff-glyph ${Se}`),
								(qe.linesDecorationsTooltip = ke)),
							Ue.overview.active &&
								(qe.overviewRuler = {
									color: (0, h.$jP)(Ue.overview.color),
									position: D.OverviewRulerLane.Left,
								}),
							Ue.minimap.active &&
								(qe.minimap = {
									color: (0, h.$jP)(Ue.minimap.color),
									position: D.MinimapPosition.Gutter,
								}),
							a.$eY.createDynamic(qe)
						);
					}
					constructor(Se, ke, Ue, qe) {
						super(), (this.q = ke), (this.s = Ue), (this.t = qe), (this.n = Se);
						const Ae = qe.getValue("scm.diffDecorations"),
							Me = Ae === "all" || Ae === "gutter",
							De = Ae === "all" || Ae === "overview",
							Re = Ae === "all" || Ae === "minimap",
							je = t.localize(8987, null);
						(this.c = Y.createDecoration("dirty-diff-added", je, {
							gutter: Me,
							overview: { active: De, color: Oe },
							minimap: { active: Re, color: Ce },
							isWholeLine: !0,
						})),
							(this.f = Y.createDecoration("dirty-diff-added-pattern", je, {
								gutter: Me,
								overview: { active: De, color: Oe },
								minimap: { active: Re, color: Ce },
								isWholeLine: !0,
							}));
						const Ve = t.localize(8988, null);
						(this.g = Y.createDecoration("dirty-diff-modified", Ve, {
							gutter: Me,
							overview: { active: De, color: Fe },
							minimap: { active: Re, color: be },
							isWholeLine: !0,
						})),
							(this.h = Y.createDecoration("dirty-diff-modified-pattern", Ve, {
								gutter: Me,
								overview: { active: De, color: Fe },
								minimap: { active: Re, color: be },
								isWholeLine: !0,
							})),
							(this.j = Y.createDecoration(
								"dirty-diff-deleted",
								t.localize(8989, null),
								{
									gutter: Me,
									overview: { active: De, color: xe },
									minimap: { active: Re, color: Le },
									isWholeLine: !1,
								},
							)),
							this.D(
								qe.onDidChangeConfiguration((Ze) => {
									Ze.affectsConfiguration("scm.diffDecorationsGutterPattern") &&
										this.u();
								}),
							),
							this.D(Ue.onDidChange(this.u, this));
					}
					u() {
						if (!this.n) return;
						const Se = this.t.getValue("scm.diffDecorationsGutterPattern"),
							ke = this.s.changes.map((Ue) => {
								const qe = Ue.change,
									Ae = Z(qe),
									Me = qe.modifiedStartLineNumber,
									De = qe.modifiedEndLineNumber || Me;
								switch (Ae) {
									case Q.Add:
										return {
											range: {
												startLineNumber: Me,
												startColumn: 1,
												endLineNumber: De,
												endColumn: 1,
											},
											options: Se.added ? this.f : this.c,
										};
									case Q.Delete:
										return {
											range: {
												startLineNumber: Me,
												startColumn: Number.MAX_VALUE,
												endLineNumber: Me,
												endColumn: Number.MAX_VALUE,
											},
											options: this.j,
										};
									case Q.Modify:
										return {
											range: {
												startLineNumber: Me,
												startColumn: 1,
												endLineNumber: De,
												endColumn: 1,
											},
											options: Se.modified ? this.h : this.g,
										};
								}
							});
						this.m
							? this.m.set(ke)
							: (this.m = this.q.createDecorationsCollection(ke));
					}
					dispose() {
						super.dispose(),
							this.m && this.m?.clear(),
							(this.n = null),
							(this.m = void 0);
					}
				});
				He = Y = Ne([j(3, r.$gj)], He);
				function Ke(Be, Se) {
					let ke = Be.modifiedStartLineNumber - Se.modifiedStartLineNumber;
					return ke !== 0 ||
						((ke = Be.modifiedEndLineNumber - Se.modifiedEndLineNumber),
						ke !== 0) ||
						((ke = Be.originalStartLineNumber - Se.originalStartLineNumber),
						ke !== 0)
						? ke
						: Be.originalEndLineNumber - Se.originalEndLineNumber;
				}
				async function Je(Be, Se, ke, Ue) {
					const qe = await Be.getQuickDiffs(Se, ke, Ue);
					return qe.length > 0 ? qe[0].originalResource : null;
				}
				let Te = class extends w.$1c {
					get original() {
						return this.g;
					}
					get changes() {
						return this.u;
					}
					get mapChanges() {
						return this.w;
					}
					constructor(Se, ke, Ue, qe, Ae, Me, De) {
						super(),
							(this.y = ke),
							(this.z = Ue),
							(this.C = qe),
							(this.F = Ae),
							(this.G = Me),
							(this.H = De),
							(this.c = []),
							(this.f = new Map()),
							(this.g = []),
							(this.j = new i.$Kh(200)),
							(this.n = new Set()),
							(this.q = this.D(new w.$Zc())),
							(this.s = !1),
							(this.t = new E.$re()),
							(this.onDidChange = this.t.event),
							(this.u = []),
							(this.w = new Map()),
							(this.h = Se),
							this.D(Se.textEditorModel.onDidChangeContent(() => this.J())),
							this.D(
								E.Event.filter(
									Ae.onDidChangeConfiguration,
									(Re) =>
										Re.affectsConfiguration(
											"scm.diffDecorationsIgnoreTrimWhitespace",
										) ||
										Re.affectsConfiguration("diffEditor.ignoreTrimWhitespace"),
								)(this.J, this),
							),
							this.D(ke.onDidAddRepository(this.I, this));
						for (const Re of ke.repositories) this.I(Re);
						this.D(
							this.h.onDidChangeEncoding(() => {
								this.j.cancel(),
									(this.c = []),
									this.f.clear(),
									(this.g = []),
									(this.m = void 0),
									this.L([], new Map()),
									this.J();
							}),
						),
							this.D(this.z.onDidChangeQuickDiffProviders(() => this.J())),
							this.J();
					}
					get quickDiffs() {
						return this.c;
					}
					getDiffEditorModel(Se) {
						if (!this.f.has(Se)) return;
						const ke = this.f.get(Se);
						return {
							modified: this.h.textEditorModel,
							original: ke.textEditorModel,
						};
					}
					I(Se) {
						const ke = new w.$Zc();
						this.n.add(ke), ke.add((0, w.$Yc)(() => this.n.delete(ke)));
						const Ue = E.Event.any(
							Se.provider.onDidChange,
							Se.provider.onDidChangeResources,
						);
						ke.add(Ue(this.J, this));
						const qe = E.Event.filter(
							this.y.onDidRemoveRepository,
							(Ae) => Ae === Se,
						);
						ke.add(qe(() => (0, w.$Vc)(ke), null)), this.J();
					}
					J() {
						return this.j
							? this.j
									.trigger(() => this.M())
									.then(
										(Se) => {
											const ke = Array.from(this.f.values());
											!Se ||
												this.s ||
												this.h.isDisposed() ||
												ke.some((Ue) => Ue.isDisposed()) ||
												(ke.every(
													(Ue) => Ue.textEditorModel.getValueLength() === 0,
												) && (Se.changes = []),
												Se.changes || (Se.changes = []),
												this.L(Se.changes, Se.mapChanges));
										},
										(Se) => (0, z.$4)(Se),
									)
							: Promise.resolve(null);
					}
					L(Se, ke) {
						const Ue = (0, M.$Hb)(this.u, Se, (qe, Ae) =>
							Ke(qe.change, Ae.change),
						);
						(this.u = Se),
							(this.w = ke),
							this.t.fire({ changes: Se, diff: Ue });
					}
					M() {
						return this.H.withProgress(
							{ location: x.ProgressLocation.Scm, delay: 250 },
							async () => {
								const Se = await this.N();
								if (this.s || this.h.isDisposed() || Se.length === 0)
									return Promise.resolve({
										changes: [],
										mapChanges: new Map(),
									});
								const ke = Se.filter((Re) =>
									this.C.canComputeDirtyDiff(
										Re.originalResource,
										this.h.resource,
									),
								);
								if (ke.length === 0)
									return Promise.resolve({
										changes: [],
										mapChanges: new Map(),
									});
								const Ue = this.F.getValue(
										"scm.diffDecorationsIgnoreTrimWhitespace",
									),
									qe =
										Ue === "inherit"
											? this.F.getValue("diffEditor.ignoreTrimWhitespace")
											: Ue !== "false",
									Ae = [];
								for (const Re of ke) {
									const je = await this.C.computeDirtyDiff(
										Re.originalResource,
										this.h.resource,
										qe,
									);
									if (je)
										for (const Ve of je)
											Ve &&
												Ae.push({
													change: Ve,
													label: Re.label,
													uri: Re.originalResource,
												});
								}
								const Me = Ae.sort((Re, je) => Ke(Re.change, je.change)),
									De = new Map();
								for (let Re = 0; Re < Me.length; Re++) {
									const je = Me[Re].label;
									De.has(je) || De.set(je, []), De.get(je).push(Re);
								}
								return { changes: Me, mapChanges: De };
							},
						);
					}
					N() {
						return this.m
							? this.m
							: ((this.m = this.O().then(async (Se) =>
									this.s
										? []
										: Se.length === 0
											? ((this.c = []), this.f.clear(), (this.g = []), [])
											: (0, M.$yb)(
														this.c,
														Se,
														(ke, Ue) =>
															ke.originalResource.toString() ===
																Ue.originalResource.toString() &&
															ke.label === Ue.label,
													)
												? Se
												: (this.q.clear(),
													this.f.clear(),
													(this.g = []),
													(this.c = Se),
													(
														await Promise.all(
															Se.map(async (ke) => {
																try {
																	const Ue = await this.G.createModelReference(
																		ke.originalResource,
																	);
																	if (this.s) return Ue.dispose(), [];
																	if (
																		(this.f.set(
																			ke.originalResource.toString(),
																			Ue.object,
																		),
																		this.g.push(Ue.object.textEditorModel),
																		(0, R.$mZ)(Ue.object))
																	) {
																		const qe = this.h.getEncoding();
																		qe &&
																			Ue.object.setEncoding(
																				qe,
																				R.EncodingMode.Decode,
																			);
																	}
																	return (
																		this.q.add(Ue),
																		this.q.add(
																			Ue.object.textEditorModel.onDidChangeContent(
																				() => this.J(),
																			),
																		),
																		ke
																	);
																} catch {
																	return [];
																}
															}),
														)
													).flat()),
								)),
								this.m.finally(() => {
									this.m = void 0;
								}));
					}
					async O() {
						if (this.s) return Promise.resolve([]);
						const Se = this.h.resource;
						return this.z.getQuickDiffs(
							Se,
							this.h.getLanguageId(),
							this.h.textEditorModel
								? (0, D.$TN)(this.h.textEditorModel)
								: void 0,
						);
					}
					findNextClosestChange(Se, ke = !0, Ue) {
						let qe;
						!Ue && ke && (qe = this.quickDiffs.find((Me) => Me.isSCM)?.label);
						const Ae = [];
						for (let Me = 0; Me < this.changes.length; Me++) {
							if (Ue && this.changes[Me].label !== Ue) continue;
							const De = this.changes[Me],
								Re = Ae.length;
							if (ke) {
								if (ee(De.change) >= Se)
									if (qe && De.label !== qe) Ae.push(Me);
									else return Me;
							} else if (De.change.modifiedStartLineNumber > Se) return Me;
							if (Ae.length > 0 && Ae.length === Re) return Ae[0];
						}
						return Ae.length > 0 ? Ae[0] : 0;
					}
					findPreviousClosestChange(Se, ke = !0, Ue) {
						for (let qe = this.changes.length - 1; qe >= 0; qe--) {
							if (Ue && this.changes[qe].label !== Ue) continue;
							const Ae = this.changes[qe].change;
							if (ke) {
								if (Ae.modifiedStartLineNumber <= Se) return qe;
							} else if (ee(Ae) < Se) return qe;
						}
						return this.changes.length - 1;
					}
					dispose() {
						super.dispose(),
							(this.s = !0),
							(this.c = []),
							this.f.clear(),
							(this.g = []),
							this.j.cancel(),
							this.n.forEach((Se) => (0, w.$Vc)(Se)),
							this.n.clear();
					}
				};
				(e.$fnc = Te),
					(e.$fnc = Te =
						Ne(
							[
								j(1, u.$c7),
								j(2, J.$8mc),
								j(3, m.$Cxb),
								j(4, r.$gj),
								j(5, d.$MO),
								j(6, x.$8N),
							],
							Te,
						));
				class Ee {
					constructor(Se, ke) {
						(this.model = Se), (this.decorator = ke);
					}
					dispose() {
						this.decorator.dispose(), this.model.dispose();
					}
				}
				let Ie = class extends w.$1c {
					constructor(Se, ke, Ue, qe) {
						super(),
							(this.m = Se),
							(this.n = ke),
							(this.q = Ue),
							(this.s = qe),
							(this.c = !1),
							(this.f = { width: 3, visibility: "always" }),
							(this.g = new q.$Gc()),
							(this.h = this.D(new w.$Zc())),
							(this.j = A.$Rgb(void 0, void 0, this.B));
						const Ae = E.Event.filter(Ue.onDidChangeConfiguration, (Re) =>
							Re.affectsConfiguration("scm.diffDecorations"),
						);
						this.D(Ae(this.t, this)), this.t();
						const Me = E.Event.filter(Ue.onDidChangeConfiguration, (Re) =>
							Re.affectsConfiguration("scm.diffDecorationsGutterWidth"),
						);
						this.D(Me(this.u, this)), this.u();
						const De = E.Event.filter(Ue.onDidChangeConfiguration, (Re) =>
							Re.affectsConfiguration("scm.diffDecorationsGutterVisibility"),
						);
						this.D(De(this.w, this)), this.w();
					}
					t() {
						this.q.getValue("scm.diffDecorations") !== "none"
							? this.z()
							: this.C();
					}
					u() {
						let Se = this.q.getValue("scm.diffDecorationsGutterWidth");
						(isNaN(Se) || Se <= 0 || Se > 5) && (Se = 3),
							this.y({ ...this.f, width: Se });
					}
					w() {
						const Se = this.q.getValue("scm.diffDecorationsGutterVisibility");
						this.y({ ...this.f, visibility: Se });
					}
					y(Se) {
						(this.f = Se),
							(this.j.textContent = `
			.monaco-editor .dirty-diff-added,
			.monaco-editor .dirty-diff-modified {
				border-left-width:${Se.width}px;
			}
			.monaco-editor .dirty-diff-added-pattern,
			.monaco-editor .dirty-diff-added-pattern:before,
			.monaco-editor .dirty-diff-modified-pattern,
			.monaco-editor .dirty-diff-modified-pattern:before {
				background-size: ${Se.width}px ${Se.width}px;
			}
			.monaco-editor .dirty-diff-added,
			.monaco-editor .dirty-diff-added-pattern,
			.monaco-editor .dirty-diff-modified,
			.monaco-editor .dirty-diff-modified-pattern,
			.monaco-editor .dirty-diff-deleted {
				opacity: ${Se.visibility === "always" ? 1 : 0};
			}
		`);
					}
					z() {
						this.c && this.C(),
							this.h.add(
								E.Event.any(
									this.m.onDidCloseEditor,
									this.m.onDidVisibleEditorsChange,
								)(() => this.F()),
							),
							this.F(),
							(this.c = !0);
					}
					C() {
						if (this.c) {
							this.h.clear();
							for (const [, Se] of this.g) (0, w.$Vc)(Se.values());
							this.g.clear(), (this.c = !1);
						}
					}
					F() {
						for (const Se of this.m.visibleTextEditorControls)
							if ((0, n.$0sb)(Se)) {
								const ke = Se.getModel(),
									Ue = fe.get(Se);
								if (
									(Ue && (Ue.modelRegistry = this),
									ke &&
										(!this.g.has(ke.uri) ||
											!this.g.get(ke.uri).has(Se.getId())))
								) {
									const qe = this.s.files.get(ke.uri);
									if (qe?.isResolved()) {
										const Ae = this.n.createInstance(Te, qe),
											Me = new He(qe.textEditorModel, Se, Ae, this.q);
										this.g.has(ke.uri) || this.g.set(ke.uri, new Map()),
											this.g.get(ke.uri)?.set(Se.getId(), new Ee(Ae, Me));
									}
								}
							}
						for (const [Se, ke] of this.g)
							for (const Ue of ke.keys())
								this.m.visibleTextEditorControls.find(
									(qe) =>
										(0, n.$0sb)(qe) &&
										qe.getModel()?.uri.toString() === Se.toString() &&
										qe.getId() === Ue,
								) ||
									(ke.has(Ue) &&
										(ke.get(Ue)?.dispose(),
										ke.delete(Ue),
										ke.size === 0 && this.g.delete(Se)));
					}
					getModel(Se, ke) {
						return this.g.get(Se.uri)?.get(ke.getId())?.model;
					}
					dispose() {
						this.C(), super.dispose();
					}
				};
				(e.$gnc = Ie),
					(e.$gnc = Ie =
						Ne([j(0, V.$IY), j(1, C.$Li), j(2, r.$gj), j(3, R.$kZ)], Ie)),
					(0, g.$qtb)(
						fe.ID,
						fe,
						g.EditorContributionInstantiation.AfterFirstRender,
					);
			},
		),
		