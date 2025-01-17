import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../common/editor.js';
import './editorPane.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../editor/common/services/textResourceConfiguration.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
import '../../../../base/common/lifecycle.js';
define(
			de[1016],
			he([1, 0, 6, 44, 217, 21, 5, 32, 35, 125, 66, 18, 3]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zVb = void 0);
				let c = class extends w.$JEb {
					constructor(g, p, o, f, b, s, l, y, $, v) {
						super(g, p, f, y, s),
							(this.m = b),
							(this.s = l),
							(this.u = $),
							(this.cb = v),
							(this.g = this.D(new h.$2c())),
							(this.b = this.ab(v, l, o, 100));
					}
					Z(g) {
						(this.g.value = this.group.onWillCloseEditor((p) => this.eb(p))),
							super.Z(g);
					}
					eb(g) {
						const p = g.editor;
						p === this.input && this.gb(p);
					}
					clearInput() {
						this.gb(this.input), super.clearInput();
					}
					I() {
						this.gb(this.input), super.I();
					}
					gb(g) {
						if (!g || !this.nb(g)) return;
						const p = this.pb(g);
						p &&
							(this.ob() ||
								(this.j || (this.j = new Map()),
								this.j.has(g) ||
									this.j.set(
										g,
										t.Event.once(g.onWillDispose)(() => {
											this.lb(p, this.group), this.j?.delete(g);
										}),
									)),
							(g.isDisposed() && !this.ob()) ||
							(!this.hb(g) && !this.group.contains(g))
								? this.lb(p, this.group)
								: g.isDisposed() || this.ib(p));
					}
					hb(g, p) {
						return p?.newInGroup
							? this.s.getValue(
									i.$A1.getOriginalUri(g, {
										supportSideBySide: i.SideBySideEditor.PRIMARY,
									}),
									"workbench.editor.restoreViewState",
								) !== !1
							: !0;
					}
					getViewState() {
						const g = this.input;
						if (!g || !this.nb(g)) return;
						const p = this.pb(g);
						if (p) return this.mb(p);
					}
					ib(g) {
						const p = this.mb(g);
						p && this.b.saveEditorState(this.group, g, p);
					}
					jb(g, p) {
						if (!g || !this.nb(g) || !this.hb(g, p)) return;
						const o = this.pb(g);
						if (o) return this.b.loadEditorState(this.group, o);
					}
					kb(g, p, o) {
						return this.b.moveEditorState(g, p, o);
					}
					lb(g, p) {
						this.b.clearEditorState(g, p);
					}
					dispose() {
						if ((super.dispose(), this.j)) {
							for (const [, g] of this.j) g.dispose();
							this.j = void 0;
						}
					}
					ob() {
						return !1;
					}
				};
				(e.$zVb = c),
					(e.$zVb = c =
						Ne(
							[
								j(3, d.$km),
								j(4, C.$Li),
								j(5, E.$lq),
								j(6, r.$XO),
								j(7, m.$iP),
								j(8, a.$IY),
								j(9, u.$EY),
							],
							c,
						));
			},
		),
		