import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/editor.js';
import './editorTabsControl.js';
import '../../labels.js';
import '../../../common/theme.js';
import '../../../../base/browser/touch.js';
import '../../../../base/browser/dom.js';
import './editorCommands.js';
import '../../../../base/common/color.js';
import '../../../../base/common/types.js';
import '../../../../base/common/objects.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import './breadcrumbsControl.js';
import '../../../../css!vs/workbench/browser/parts/editor/media/singleeditortabscontrol.js';
define(
			de[4011],
			he([
				1, 0, 44, 1055, 233, 123, 159, 7, 247, 97, 28, 82, 3, 106, 1879, 1515,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ltc = void 0);
				class g extends i.$qtc {
					constructor() {
						super(...arguments), (this.Ab = Object.create(null));
					}
					get Cb() {
						return this.Bb?.control;
					}
					bb(o) {
						super.bb(o);
						const f = (this.kb = o);
						(f.draggable = !0), this.Eb(f), this.D(C.$Qhb.addTarget(f));
						const b = document.createElement("div");
						b.classList.add("label-container"),
							f.appendChild(b),
							(this.zb = this.D(
								this.U.createInstance(w.$vPb, b, { hoverDelegate: this.xb() }),
							).element),
							this.D(
								(0, d.$0fb)(this.zb.element, d.$$gb.CLICK, (s) => this.Fb(s)),
							),
							(this.Bb = this.D(
								this.U.createInstance(n.$yrc, b, this.Q, {
									showFileIcons: !1,
									showSymbolIcons: !0,
									showDecorationColors: !1,
									widgetStyles: {
										...c.$Byb,
										breadcrumbsBackground: r.$UL.transparent.toString(),
									},
									showPlaceholder: !1,
								}),
							)),
							this.D(this.Bb.onDidEnablementChange(() => this.Kb())),
							f.classList.toggle("breadcrumbs", !!this.Cb),
							this.D((0, h.$Yc)(() => f.classList.remove("breadcrumbs"))),
							this.db(f, ["title-actions"]);
					}
					Eb(o) {
						let f,
							b = !1;
						this.D(
							new d.$Hhb(o, {
								onDragStart: (s) => {
									b = this.mb(s, o);
								},
								onDrag: (s) => {
									f = s;
								},
								onDragEnd: (s) => {
									this.nb(s, f, o, b);
								},
							}),
						),
							this.D((0, d.$0fb)(o, d.$$gb.DBLCLICK, (s) => this.Gb(s))),
							this.D((0, d.$0fb)(o, d.$$gb.AUXCLICK, (s) => this.Hb(s))),
							this.D((0, d.$0fb)(o, C.EventType.Tap, (s) => this.Ib(s)));
						for (const s of [d.$$gb.CONTEXT_MENU, C.EventType.Contextmenu])
							this.D(
								(0, d.$0fb)(o, s, (l) => {
									this.R.activeEditor && this.sb(this.R.activeEditor, l, o);
								}),
							);
					}
					Fb(o) {
						d.$ahb.stop(o, !1), setTimeout(() => this.Z.quickAccess.show());
					}
					Gb(o) {
						d.$ahb.stop(o), this.Q.pinEditor();
					}
					Hb(o) {
						o.button === 1 &&
							this.R.activeEditor &&
							(d.$ahb.stop(o, !0),
							(0, t.$z1)(
								this.R,
								this.R.activeEditor,
								t.EditorCloseMethod.MOUSE,
								this.P.partOptions,
							) || this.Q.closeEditor(this.R.activeEditor));
					}
					Ib(o) {
						const f = o.initialTarget;
						!(0, d.$Ygb)(f) ||
							!this.zb ||
							!(0, d.$Bgb)(f, this.zb.element) ||
							setTimeout(() => this.Z.quickAccess.show(), 50);
					}
					openEditor(o) {
						return this.Jb();
					}
					openEditors(o) {
						return this.Jb();
					}
					Jb() {
						const o = this.Lb(() => this.Ob());
						return o || this.Mb(() => this.Ob()), o;
					}
					beforeCloseEditor(o) {}
					closeEditor(o) {
						this.Lb(() => this.Ob());
					}
					closeEditors(o) {
						this.Lb(() => this.Ob());
					}
					moveEditor(o, f, b) {
						this.Lb(() => this.Ob());
					}
					pinEditor(o) {
						this.Nb(o, () => this.Ob());
					}
					stickEditor(o) {}
					unstickEditor(o) {}
					setActive(o) {
						this.Ob();
					}
					updateEditorSelections() {}
					updateEditorLabel(o) {
						this.Nb(o, () => this.Ob());
					}
					updateEditorDirty(o) {
						this.Nb(o, () => {
							const f = (0, u.$wg)(this.kb);
							o.isDirty() && !o.isSaving()
								? f.classList.add("dirty")
								: f.classList.remove("dirty");
						});
					}
					updateOptions(o, f) {
						super.updateOptions(o, f),
							(o.labelFormat !== f.labelFormat ||
								!(0, a.$zo)(o.decorations, f.decorations)) &&
								this.Ob();
					}
					updateStyles() {
						this.Ob();
					}
					Kb() {
						(0, u.$wg)(this.kb).classList.toggle("breadcrumbs", !!this.Cb),
							this.Ob();
					}
					Lb(o) {
						return (!this.Ab.editor && this.R.activeEditor) ||
							(this.Ab.editor && !this.R.activeEditor) ||
							!this.Ab.editor ||
							!this.R.isActive(this.Ab.editor)
							? (o(), !0)
							: !1;
					}
					Mb(o) {
						!this.Ab.editor ||
							!this.R.activeEditor ||
							(this.Ab.pinned !== this.R.isPinned(this.R.activeEditor) && o());
					}
					Nb(o, f) {
						this.R.isActive(o) && f();
					}
					Ob() {
						const o = this.R.activeEditor ?? void 0,
							f = this.P.partOptions,
							b = o ? this.R.isPinned(o) : !1,
							s = this.P.activeGroup === this.Q;
						(this.Ab = { editor: o, pinned: b }),
							this.Cb &&
								(s
									? (this.Cb.update(),
										this.Cb.domNode.classList.toggle("preview", !b))
									: this.Cb.hide());
						const [l, y] = (0, u.$xg)(this.kb, this.zb);
						if (!o) l.classList.remove("dirty"), y.clear(), this.lb();
						else {
							this.updateEditorDirty(o);
							const { labelFormat: $ } = this.P.partOptions;
							let v;
							(this.Cb && !this.Cb.isHidden()) || ($ === "default" && !s)
								? (v = "")
								: (v = o.getDescription(this.Pb($)) || ""),
								y.setResource(
									{
										resource: t.$A1.getOriginalUri(o, {
											supportSideBySide: t.SideBySideEditor.BOTH,
										}),
										name: o.getName(),
										description: v,
									},
									{
										title: this.wb(o),
										italic: !b,
										extraClasses: ["single-tab", "title-label"].concat(
											o.getLabelExtraClasses(),
										),
										fileDecorations: {
											colors: !!f.decorations?.colors,
											badges: !!f.decorations?.badges,
										},
										icon: o.getIcon(),
										hideIcon: f.showIcons === !1,
									},
								),
								s
									? (l.style.color = this.w(E.$QEb) || "")
									: (l.style.color = this.w(E.$SEb) || ""),
								this.hb();
						}
					}
					Pb(o) {
						switch (o) {
							case "short":
								return t.Verbosity.SHORT;
							case "long":
								return t.Verbosity.LONG;
							default:
								return t.Verbosity.MEDIUM;
						}
					}
					ib(o) {
						return this.P.activeGroup === this.Q
							? o
							: {
									primary: this.P.partOptions.alwaysShowEditorActions
										? o.primary
										: o.primary.filter(
												(b) => b.id === m.$YVb || b.id === m.$0Vb,
											),
									secondary: o.secondary,
								};
					}
					getHeight() {
						return this.vb;
					}
					layout(o) {
						return (
							this.Cb?.layout(void 0),
							new d.$pgb(o.container.width, this.getHeight())
						);
					}
				}
				e.$ltc = g;
			},
		),
		