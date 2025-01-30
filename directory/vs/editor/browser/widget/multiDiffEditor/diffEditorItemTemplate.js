import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/button/button.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/observable.js';
import '../../../../base/common/observableInternal/base.js';
import '../../observableCodeEditor.js';
import '../diffEditor/diffEditorWidget.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../platform/actions/browser/toolbar.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './utils.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/serviceCollection.js';
define(
			de[1682],
			he([
				1, 0, 7, 183, 14, 3, 77, 407, 542, 309, 92, 173, 11, 5, 1588, 8, 128,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*button*/,
 w /*codicons*/,
 E /*lifecycle*/,
 C /*observable*/,
 d /*base*/,
 m /*observableCodeEditor*/,
 r /*diffEditorWidget*/,
 u /*menuEntryActionViewItem*/,
 a /*toolbar*/,
 h /*actions*/,
 c /*instantiation*/,
 n /*utils*/,
 g /*contextkey*/,
 p /*serviceCollection*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$DGc = e.$CGc = void 0);
				class o {
					constructor(s, l) {
						(this.viewModel = s), (this.deltaScrollVertical = l);
					}
					getId() {
						return this.viewModel;
					}
				}
				e.$CGc = o;
				let f = class extends E.$1c {
					constructor(s, l, y, $, v) {
						super(),
							(this.z = s),
							(this.C = l),
							(this.F = y),
							(this.G = $),
							(this.a = (0, d.$_d)(this, void 0)),
							(this.b = (0, C.derived)(this, (T) =>
								this.a.read(T)?.collapsed.read(T),
							)),
							(this.c = (0, d.$_d)(this, 500)),
							(this.contentHeight = (0, C.derived)(
								this,
								(T) => (this.b.read(T) ? 0 : this.c.read(T)) + this.w,
							)),
							(this.f = (0, d.$_d)(this, 0)),
							(this.j = (0, d.$_d)(this, 0)),
							(this.m = (0, d.$_d)(this, 0)),
							(this.n = (0, d.$_d)(this, 0)),
							(this.maxScroll = (0, C.derived)(this, (T) => {
								const P = this.f.read(T) - this.j.read(T),
									k = this.m.read(T) - this.n.read(T);
								return P > k
									? { maxScroll: P, width: this.j.read(T) }
									: { maxScroll: k, width: this.n.read(T) };
							})),
							(this.q = (0, t.h)("div.multiDiffEntry", [
								(0, t.h)("div.header@header", [
									(0, t.h)("div.header-content", [
										(0, t.h)("div.collapse-button@collapseButton"),
										(0, t.h)("div.file-path", [
											(0, t.h)(
												"div.title.modified.show-file-icons@primaryPath",
												[],
											),
											(0, t.h)("div.status.deleted@status", ["R"]),
											(0, t.h)(
												"div.title.original.show-file-icons@secondaryPath",
												[],
											),
										]),
										(0, t.h)("div.actions@actions"),
									]),
								]),
								(0, t.h)("div.editorParent", [
									(0, t.h)("div.editorContainer@editor"),
								]),
							])),
							(this.editor = this.D(
								this.G.createInstance(
									r.$3yb,
									this.q.editor,
									{ overflowWidgetsDomNode: this.C },
									{
										originalEditor: { contributions: [] },
										modifiedEditor: { contributions: [] },
									},
								),
							)),
							(this.r = (0, m.$Uwb)(this.editor.getModifiedEditor()).isFocused),
							(this.s = (0, m.$Uwb)(this.editor.getOriginalEditor()).isFocused),
							(this.isFocused = (0, C.derived)(
								this,
								(T) => this.r.read(T) || this.s.read(T),
							)),
							(this.t = this.F.createResourceLabel
								? this.D(this.F.createResourceLabel(this.q.primaryPath))
								: void 0),
							(this.u = this.F.createResourceLabel
								? this.D(this.F.createResourceLabel(this.q.secondaryPath))
								: void 0),
							(this.H = this.D(new E.$Zc())),
							(this.J = 40),
							(this.L = -1),
							(this.M = !1);
						const S = new i.$oob(this.q.collapseButton, {});
						this.D(
							(0, C.autorun)((T) => {
								(S.element.className = ""),
									(S.icon = this.b.read(T)
										? w.$ak.chevronRight
										: w.$ak.chevronDown);
							}),
						),
							this.D(
								S.onDidClick(() => {
									this.a.get()?.collapsed.set(!this.b.get(), void 0);
								}),
							),
							this.D(
								(0, C.autorun)((T) => {
									this.q.editor.style.display = this.b.read(T)
										? "none"
										: "block";
								}),
							),
							this.D(
								this.editor.getModifiedEditor().onDidLayoutChange((T) => {
									const P = this.editor
										.getModifiedEditor()
										.getLayoutInfo().contentWidth;
									this.j.set(P, void 0);
								}),
							),
							this.D(
								this.editor.getOriginalEditor().onDidLayoutChange((T) => {
									const P = this.editor
										.getOriginalEditor()
										.getLayoutInfo().contentWidth;
									this.n.set(P, void 0);
								}),
							),
							this.D(
								this.editor.onDidContentSizeChange((T) => {
									(0, d.$8d)((P) => {
										this.c.set(T.contentHeight, P),
											this.f.set(
												this.editor.getModifiedEditor().getContentWidth(),
												P,
											),
											this.m.set(
												this.editor.getOriginalEditor().getContentWidth(),
												P,
											);
									});
								}),
							),
							this.D(
								this.editor.getOriginalEditor().onDidScrollChange((T) => {
									if (this.M || !T.scrollTopChanged || !this.I) return;
									const P = T.scrollTop - this.L;
									this.I.deltaScrollVertical(P);
								}),
							),
							this.D(
								(0, C.autorun)((T) => {
									const P = this.a.read(T)?.isActive.read(T);
									this.q.root.classList.toggle("active", P);
								}),
							),
							this.z.appendChild(this.q.root),
							(this.w = this.J),
							(this.y = this.D(v.createScoped(this.q.actions)));
						const I = this.D(this.G.createChild(new p.$Ki([g.$6j, this.y])));
						this.D(
							I.createInstance(
								a.$Tyb,
								this.q.actions,
								h.$XX.MultiDiffEditorFileToolbar,
								{
									actionRunner: this.D(
										new n.$hyb(() => this.a.get()?.modifiedUri),
									),
									menuOptions: { shouldForwardArgs: !0 },
									toolbarOptions: {
										primaryGroup: (T) => T.startsWith("navigation"),
									},
									actionViewItemProvider: (T, P) => (0, u.$Pyb)(I, T, P),
								},
							),
						);
					}
					setScrollLeft(s) {
						this.f.get() - this.j.get() > this.m.get() - this.n.get()
							? this.editor.getModifiedEditor().setScrollLeft(s)
							: this.editor.getOriginalEditor().setScrollLeft(s);
					}
					setData(s) {
						this.I = s;
						function l($) {
							return {
								...$,
								scrollBeyondLastLine: !1,
								hideUnchangedRegions: { enabled: !0 },
								scrollbar: {
									vertical: "hidden",
									horizontal: "hidden",
									handleMouseWheel: !1,
									useShadows: !1,
								},
								renderOverviewRuler: !1,
								fixedOverflowWidgets: !0,
								overviewRulerBorder: !1,
							};
						}
						if (!s) {
							(0, d.$8d)(($) => {
								this.a.set(void 0, $),
									this.editor.setDiffModel(null, $),
									this.H.clear();
							});
							return;
						}
						const y = s.viewModel.documentDiffItem;
						if (
							((0, d.$8d)(($) => {
								this.t?.setUri(
									s.viewModel.modifiedUri ?? s.viewModel.originalUri,
									{ strikethrough: s.viewModel.modifiedUri === void 0 },
								);
								let v = !1,
									S = !1,
									I = !1,
									T = "";
								s.viewModel.modifiedUri &&
								s.viewModel.originalUri &&
								s.viewModel.modifiedUri.path !== s.viewModel.originalUri.path
									? ((T = "R"), (v = !0))
									: s.viewModel.modifiedUri
										? s.viewModel.originalUri || ((T = "A"), (I = !0))
										: ((T = "D"), (S = !0)),
									this.q.status.classList.toggle("renamed", v),
									this.q.status.classList.toggle("deleted", S),
									this.q.status.classList.toggle("added", I),
									(this.q.status.innerText = T),
									this.u?.setUri(v ? s.viewModel.originalUri : void 0, {
										strikethrough: !0,
									}),
									this.H.clear(),
									this.a.set(s.viewModel, $),
									this.editor.setDiffModel(
										s.viewModel.diffEditorViewModelRef,
										$,
									),
									this.editor.updateOptions(l(y.options ?? {}));
							}),
							y.onOptionsDidChange &&
								this.H.add(
									y.onOptionsDidChange(() => {
										this.editor.updateOptions(l(y.options ?? {}));
									}),
								),
							s.viewModel.isAlive.recomputeInitiallyAndOnChange(this.H, ($) => {
								$ || this.setData(void 0);
							}),
							s.viewModel.documentDiffItem.contextKeys)
						)
							for (const [$, v] of Object.entries(
								s.viewModel.documentDiffItem.contextKeys,
							))
								this.y.createKey($, v);
					}
					render(s, l, y, $) {
						(this.q.root.style.visibility = "visible"),
							(this.q.root.style.top = `${s.start}px`),
							(this.q.root.style.height = `${s.length}px`),
							(this.q.root.style.width = `${l}px`),
							(this.q.root.style.position = "absolute");
						const v = s.length - this.J,
							S = Math.max(0, Math.min($.start - s.start, v));
						(this.q.header.style.transform = `translateY(${S}px)`),
							(0, d.$8d)((I) => {
								this.editor.layout({
									width: l - 2 * 8 - 2 * 1,
									height: s.length - this.w,
								});
							});
						try {
							(this.M = !0),
								(this.L = y),
								this.editor.getOriginalEditor().setScrollTop(y);
						} finally {
							this.M = !1;
						}
						this.q.header.classList.toggle("shadow", S > 0 || y > 0),
							this.q.header.classList.toggle("collapsed", S === v);
					}
					hide() {
						(this.q.root.style.top = "-100000px"),
							(this.q.root.style.visibility = "hidden");
					}
				};
				(e.$DGc = f), (e.$DGc = f = Ne([j(3, c.$Li), j(4, g.$6j)], f));
			},
		),
		