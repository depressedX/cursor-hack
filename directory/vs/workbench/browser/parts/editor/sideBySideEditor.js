import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/browser/dom.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/editor.js';
import '../../../common/editor/sideBySideEditorInput.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../../base/browser/ui/splitview/splitview.js';
import '../../../../base/common/event.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../base/common/types.js';
import '../../../../platform/configuration/common/configuration.js';
import './editor.js';
import '../../../../base/common/lifecycle.js';
import '../../../common/theme.js';
import './editorWithViewState.js';
import '../../../../editor/common/services/textResourceConfiguration.js';
import '../../../services/editor/common/editorService.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/uri.js';
import '../../../../css!vs/workbench/browser/parts/editor/media/sidebysideeditor.js';
define(
			de[825],
			he([
				1, 0, 4, 7, 30, 44, 313, 32, 5, 35, 66, 279, 6, 21, 28, 10, 548, 3, 123,
				1016, 125, 18, 19, 9, 2346,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*dom*/,
				w /*platform*/,
				E /*editor*/,
				C /*sideBySideEditorInput*/,
				d /*telemetry*/,
				m /*instantiation*/,
				r /*themeService*/,
				u /*editorGroupsService*/,
				a /*splitview*/,
				h /*event*/,
				c /*storage*/,
				n /*types*/,
				g /*configuration*/,
				p /*editor*/,
				o /*lifecycle*/,
				f /*theme*/,
				b /*editorWithViewState*/,
				s /*textResourceConfiguration*/,
				l /*editorService*/,
				y /*resources*/,
				$ /*uri*/,
) {
				"use strict";
				var v;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$AVb = void 0);
				function S(P) {
					const k = P;
					return (
						typeof k?.primary == "object" && typeof k.secondary == "object"
					);
				}
				let I = class extends b.$zVb {
					static {
						v = this;
					}
					static {
						this.ID = E.$c1;
					}
					static {
						this.SIDE_BY_SIDE_LAYOUT_SETTING =
							"workbench.editor.splitInGroupLayout";
					}
					static {
						this.a = "sideBySideEditorViewState";
					}
					get c() {
						return this.zb ? this.zb.minimumWidth : 0;
					}
					get f() {
						return this.zb ? this.zb.maximumWidth : Number.POSITIVE_INFINITY;
					}
					get r() {
						return this.zb ? this.zb.minimumHeight : 0;
					}
					get qb() {
						return this.zb ? this.zb.maximumHeight : Number.POSITIVE_INFINITY;
					}
					get rb() {
						return this.Ab ? this.Ab.minimumWidth : 0;
					}
					get sb() {
						return this.Ab ? this.Ab.maximumWidth : Number.POSITIVE_INFINITY;
					}
					get tb() {
						return this.Ab ? this.Ab.minimumHeight : 0;
					}
					get ub() {
						return this.Ab ? this.Ab.maximumHeight : Number.POSITIVE_INFINITY;
					}
					set minimumWidth(k) {}
					set maximumWidth(k) {}
					set minimumHeight(k) {}
					set maximumHeight(k) {}
					get minimumWidth() {
						return this.c + this.rb;
					}
					get maximumWidth() {
						return this.f + this.sb;
					}
					get minimumHeight() {
						return this.r + this.tb;
					}
					get maximumHeight() {
						return this.qb + this.ub;
					}
					constructor(k, L, D, M, N, A, R, O, B) {
						super(v.ID, k, v.a, L, D, N, R, M, O, B),
							(this.Jb = A),
							(this.wb = this.D(new h.$re())),
							(this.xb = this.D(new h.$Ae())),
							(this.onDidChangeSizeConstraints = h.Event.any(
								this.wb.event,
								this.xb.event,
							)),
							(this.yb = this.D(new h.$re())),
							(this.onDidChangeSelection = this.yb.event),
							(this.zb = void 0),
							(this.Ab = void 0),
							(this.Eb = this.D(new o.$Zc())),
							(this.Fb = this.D(new o.$Zc())),
							(this.Gb =
								this.Jb.getValue(v.SIDE_BY_SIDE_LAYOUT_SETTING) === "vertical"
									? a.Orientation.VERTICAL
									: a.Orientation.HORIZONTAL),
							(this.Hb = new i.$pgb(0, 0)),
							(this.Ib = void 0),
							this.Kb();
					}
					Kb() {
						this.D(this.Jb.onDidChangeConfiguration((k) => this.Lb(k)));
					}
					Lb(k) {
						k.affectsConfiguration(v.SIDE_BY_SIDE_LAYOUT_SETTING) &&
							((this.Gb =
								this.Jb.getValue(v.SIDE_BY_SIDE_LAYOUT_SETTING) === "vertical"
									? a.Orientation.VERTICAL
									: a.Orientation.HORIZONTAL),
							this.Db && this.Mb());
					}
					Mb() {
						const k = (0, n.$wg)(this.getContainer()),
							L = this.Nb();
						this.Db && (this.Db.el.remove(), this.Eb.clear()),
							this.Pb(k, L),
							this.layout(this.Hb);
					}
					Nb() {
						let k;
						if (this.Db) {
							const L = this.Db.getViewSize(0),
								D = this.Db.getViewSize(1);
							if (Math.abs(L - D) > 1) {
								const M =
									this.Db.orientation === a.Orientation.HORIZONTAL
										? this.Hb.width
										: this.Hb.height;
								k = L / M;
							}
						}
						return k;
					}
					Y(k) {
						k.classList.add("side-by-side-editor"),
							(this.Cb = (0, i.$)(
								".side-by-side-editor-container.editor-instance",
							)),
							(this.Bb = (0, i.$)(
								".side-by-side-editor-container.editor-instance",
							)),
							this.Pb(k);
					}
					Pb(k, L) {
						(this.Db = this.Eb.add(new a.$vob(k, { orientation: this.Gb }))),
							this.Eb.add(
								this.Db.onDidSashReset(() => this.Db?.distributeViewSizes()),
							),
							this.Gb === a.Orientation.HORIZONTAL
								? (this.Db.orthogonalEndSash = this.vb?.bottom)
								: ((this.Db.orthogonalStartSash = this.vb?.left),
									(this.Db.orthogonalEndSash = this.vb?.right));
						let D = a.Sizing.Distribute,
							M = a.Sizing.Distribute;
						if (L) {
							const R =
								this.Db.orientation === a.Orientation.HORIZONTAL
									? this.Hb.width
									: this.Hb.height;
							(D = Math.round(R * L)),
								(M = R - D),
								this.Db.layout(
									this.Gb === a.Orientation.HORIZONTAL
										? this.Hb.width
										: this.Hb.height,
								);
						}
						const N = (0, n.$wg)(this.Cb);
						this.Db.addView(
							{
								element: N,
								layout: (R) => this.Wb(this.Ab, R),
								minimumSize:
									this.Gb === a.Orientation.HORIZONTAL
										? p.$DEb.width
										: p.$DEb.height,
								maximumSize: Number.POSITIVE_INFINITY,
								onDidChange: h.Event.None,
							},
							D,
						);
						const A = (0, n.$wg)(this.Bb);
						this.Db.addView(
							{
								element: A,
								layout: (R) => this.Wb(this.zb, R),
								minimumSize:
									this.Gb === a.Orientation.HORIZONTAL
										? p.$DEb.width
										: p.$DEb.height,
								maximumSize: Number.POSITIVE_INFINITY,
								onDidChange: h.Event.None,
							},
							M,
						),
							this.updateStyles();
					}
					getTitle() {
						return this.input
							? this.input.getName()
							: (0, t.localize)(3548, null);
					}
					async setInput(k, L, D, M) {
						const N = this.input;
						await super.setInput(k, L, D, M),
							(!N || !k.matches(N)) && (N && this.$b(), this.Rb(k));
						const { primary: A, secondary: R, viewState: O } = this.Qb(k, L, D);
						if (
							((this.Ib = O?.focus), typeof O?.ratio == "number" && this.Db)
						) {
							const B =
								this.Db.orientation === a.Orientation.HORIZONTAL
									? this.Hb.width
									: this.Hb.height;
							this.Db.resizeView(0, Math.round(B * O.ratio));
						} else this.Db?.distributeViewSizes();
						await Promise.all([
							this.Ab?.setInput(k.secondary, R, D, M),
							this.zb?.setInput(k.primary, A, D, M),
						]),
							typeof L?.target == "number" && (this.Ib = L.target);
					}
					Qb(k, L, D) {
						const M = S(L?.viewState) ? L?.viewState : this.jb(k, D);
						let N = Object.create(null),
							A;
						return (
							L?.target === E.SideBySideEditor.SECONDARY
								? (A = { ...L })
								: (N = { ...L }),
							(N.viewState = M?.primary),
							M?.secondary &&
								(A
									? (A.viewState = M?.secondary)
									: (A = { viewState: M.secondary })),
							{ primary: N, secondary: A, viewState: M }
						);
					}
					Rb(k) {
						(this.Ab = this.Sb(k.secondary, (0, n.$wg)(this.Cb))),
							(this.zb = this.Sb(k.primary, (0, n.$wg)(this.Bb))),
							this.layout(this.Hb),
							(this.xb.input = h.Event.any(
								h.Event.map(this.Ab.onDidChangeSizeConstraints, () => {}),
								h.Event.map(this.zb.onDidChangeSizeConstraints, () => {}),
							)),
							this.wb.fire(void 0),
							this.Fb.add(
								this.zb.onDidFocus(() => this.Tb(E.SideBySideEditor.PRIMARY)),
							),
							this.Fb.add(
								this.Ab.onDidFocus(() => this.Tb(E.SideBySideEditor.SECONDARY)),
							);
					}
					Sb(k, L) {
						const D = w.$Io.as(E.$a1.EditorPane).getEditorPane(k);
						if (!D)
							throw new Error("No editor pane descriptor for editor found");
						const M = D.instantiate(this.m, this.group);
						return (
							M.create(L),
							M.setVisible(this.isVisible()),
							(0, E.$f1)(M) &&
								this.Fb.add(M.onDidChangeSelection((N) => this.yb.fire(N))),
							this.Fb.add(M),
							M
						);
					}
					Tb(k) {
						(this.Ib = k), this.S.fire();
					}
					getSelection() {
						const k = this.Vb();
						if ((0, E.$f1)(k)) {
							const L = k.getSelection();
							if (L)
								return new T(
									L,
									k === this.zb
										? E.SideBySideEditor.PRIMARY
										: E.SideBySideEditor.SECONDARY,
								);
						}
					}
					setOptions(k) {
						super.setOptions(k),
							typeof k?.target == "number" && (this.Ib = k.target),
							this.Vb()?.setOptions(k);
					}
					Z(k) {
						this.zb?.setVisible(k), this.Ab?.setVisible(k), super.Z(k);
					}
					clearInput() {
						super.clearInput(),
							this.zb?.clearInput(),
							this.Ab?.clearInput(),
							this.$b();
					}
					focus() {
						super.focus(), this.Vb()?.focus();
					}
					Vb() {
						return this.Ib === E.SideBySideEditor.SECONDARY ? this.Ab : this.zb;
					}
					layout(k) {
						(this.Hb = k),
							(0, n.$wg)(this.Db).layout(
								this.Gb === a.Orientation.HORIZONTAL ? k.width : k.height,
							);
					}
					setBoundarySashes(k) {
						(this.vb = k), this.Db && (this.Db.orthogonalEndSash = k.bottom);
					}
					Wb(k, L) {
						k?.layout(
							this.Gb === a.Orientation.HORIZONTAL
								? new i.$pgb(L, this.Hb.height)
								: new i.$pgb(this.Hb.width, L),
						);
					}
					getControl() {
						return this.Vb()?.getControl();
					}
					getPrimaryEditorPane() {
						return this.zb;
					}
					getSecondaryEditorPane() {
						return this.Ab;
					}
					nb(k) {
						return k instanceof C.$iY;
					}
					mb(k) {
						if (!this.input || !(0, y.$gh)(k, this.pb(this.input))) return;
						const L = this.zb?.getViewState(),
							D = this.Ab?.getViewState();
						if (!(!L || !D))
							return {
								primary: L,
								secondary: D,
								focus: this.Ib,
								ratio: this.Nb(),
							};
					}
					pb(k) {
						let L, D;
						if (
							(k instanceof C.$iY &&
								((L = k.primary.resource), (D = k.secondary.resource)),
							!(!D || !L))
						)
							return $.URI.from({
								scheme: "sideBySide",
								path: `${(0, i.$Ehb)(D.toString())}${(0, i.$Ehb)(L.toString())}`,
							});
					}
					updateStyles() {
						super.updateStyles(),
							this.Bb &&
								(this.Gb === a.Orientation.HORIZONTAL
									? ((this.Bb.style.borderLeftWidth = "1px"),
										(this.Bb.style.borderLeftStyle = "solid"),
										(this.Bb.style.borderLeftColor = this.w(f.$pFb) ?? ""),
										(this.Bb.style.borderTopWidth = "0"))
									: ((this.Bb.style.borderTopWidth = "1px"),
										(this.Bb.style.borderTopStyle = "solid"),
										(this.Bb.style.borderTopColor = this.w(f.$oFb) ?? ""),
										(this.Bb.style.borderLeftWidth = "0")));
					}
					dispose() {
						this.$b(), super.dispose();
					}
					$b() {
						this.Fb.clear(),
							(this.Ab = void 0),
							(this.zb = void 0),
							(this.Ib = void 0),
							this.Cb && (0, i.$9fb)(this.Cb),
							this.Bb && (0, i.$9fb)(this.Bb);
					}
				};
				(e.$AVb = I),
					(e.$AVb =
						I =
						v =
							Ne(
								[
									j(1, d.$km),
									j(2, m.$Li),
									j(3, r.$iP),
									j(4, c.$lq),
									j(5, g.$gj),
									j(6, s.$XO),
									j(7, l.$IY),
									j(8, u.$EY),
								],
								I,
							));
				class T {
					constructor(k, L) {
						(this.a = k), (this.b = L);
					}
					compare(k) {
						return !(k instanceof T) || this.b !== k.b
							? E.EditorPaneSelectionCompareResult.DIFFERENT
							: this.a.compare(k.a);
					}
					restore(k) {
						const L = { ...k, target: this.b };
						return this.a.restore(L);
					}
				}
			},
		),
		