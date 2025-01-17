import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import './sideBySideEditorInput.js';
import '../editor.js';
import './textEditorModel.js';
import './diffEditorModel.js';
import './textDiffEditorModel.js';
import '../../services/editor/common/editorService.js';
import '../../../base/common/labels.js';
import '../../../platform/editor/common/editor.js';
define(
			de[296],
			he([1, 0, 4, 313, 44, 702, 1699, 1226, 18, 222, 116]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				var a;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$HVb = e.$GVb = void 0);
				let h = class extends i.$iY {
					static {
						a = this;
					}
					static {
						this.ID = "workbench.editors.diffEditorInput";
					}
					get typeId() {
						return a.ID;
					}
					get editorId() {
						return this.modified.editorId === this.original.editorId
							? this.modified.editorId
							: void 0;
					}
					get capabilities() {
						let g = super.capabilities;
						return (
							this.t.forceDescription &&
								(g |= w.EditorInputCapabilities.ForceDescription),
							g
						);
					}
					constructor(g, p, o, f, b, s) {
						super(g, p, o, f, s),
							(this.original = o),
							(this.modified = f),
							(this.u = b),
							(this.s = void 0),
							(this.t = this.w());
					}
					w() {
						let g,
							p = !1;
						if (this.c) g = this.c;
						else {
							const v = this.original.getName(),
								S = this.modified.getName();
							(g = (0, t.localize)(4078, null, v, S)), (p = v === S);
						}
						let o, f, b;
						if (this.h) (o = this.h), (f = this.h), (b = this.h);
						else {
							(o = this.y(
								this.original.getDescription(w.Verbosity.SHORT),
								this.modified.getDescription(w.Verbosity.SHORT),
							)),
								(b = this.y(
									this.original.getDescription(w.Verbosity.LONG),
									this.modified.getDescription(w.Verbosity.LONG),
								));
							const v = this.original.getDescription(w.Verbosity.MEDIUM),
								S = this.modified.getDescription(w.Verbosity.MEDIUM);
							if (typeof v == "string" && typeof S == "string" && (v || S)) {
								const [I, T] = (0, r.$AO)([v, S]);
								f = this.y(I, T);
							}
						}
						let s = this.y(
								this.original.getTitle(w.Verbosity.SHORT) ??
									this.original.getName(),
								this.modified.getTitle(w.Verbosity.SHORT) ??
									this.modified.getName(),
								" \u2194 ",
							),
							l = this.y(
								this.original.getTitle(w.Verbosity.MEDIUM) ??
									this.original.getName(),
								this.modified.getTitle(w.Verbosity.MEDIUM) ??
									this.modified.getName(),
								" \u2194 ",
							),
							y = this.y(
								this.original.getTitle(w.Verbosity.LONG) ??
									this.original.getName(),
								this.modified.getTitle(w.Verbosity.LONG) ??
									this.modified.getName(),
								" \u2194 ",
							);
						const $ = this.q();
						return (
							$ &&
								((s = `${$} (${s})`), (l = `${$} (${l})`), (y = `${$} (${y})`)),
							{
								name: g,
								shortDescription: o,
								mediumDescription: f,
								longDescription: b,
								forceDescription: p,
								shortTitle: s,
								mediumTitle: l,
								longTitle: y,
							}
						);
					}
					y(g, p, o = " - ") {
						if (!(!g || !p)) return g === p ? p : `${g}${o}${p}`;
					}
					getName() {
						return this.t.name;
					}
					getDescription(g = w.Verbosity.MEDIUM) {
						switch (g) {
							case w.Verbosity.SHORT:
								return this.t.shortDescription;
							case w.Verbosity.LONG:
								return this.t.longDescription;
							case w.Verbosity.MEDIUM:
							default:
								return this.t.mediumDescription;
						}
					}
					getTitle(g) {
						switch (g) {
							case w.Verbosity.SHORT:
								return this.t.shortTitle;
							case w.Verbosity.LONG:
								return this.t.longTitle;
							default:
							case w.Verbosity.MEDIUM:
								return this.t.mediumTitle;
						}
					}
					async resolve() {
						const g = await this.z();
						return this.s?.dispose(), (this.s = g), this.s;
					}
					prefersEditorPane(g) {
						return this.u
							? g.find((p) => p.typeId === w.$e1)
							: g.find((p) => p.typeId === w.$d1);
					}
					async z() {
						const [g, p] = await Promise.all([
							this.original.resolve(),
							this.modified.resolve(),
						]);
						return p instanceof E.$VO && g instanceof E.$VO
							? new d.$FVb(g, p)
							: new C.$EVb(
									(0, u.$vO)(g) ? g : void 0,
									(0, u.$vO)(p) ? p : void 0,
								);
					}
					toUntyped(g) {
						const p = super.toUntyped(g);
						if (p) return { ...p, modified: p.primary, original: p.secondary };
					}
					matches(g) {
						return this === g
							? !0
							: g instanceof a
								? this.modified.matches(g.modified) &&
									this.original.matches(g.original) &&
									g.u === this.u
								: (0, w.$j1)(g)
									? this.modified.matches(g.modified) &&
										this.original.matches(g.original)
									: !1;
					}
					dispose() {
						this.s && (this.s.dispose(), (this.s = void 0)), super.dispose();
					}
				};
				(e.$GVb = h), (e.$GVb = h = a = Ne([j(5, m.$IY)], h));
				class c extends i.$jY {
					b(g, p, o, f, b) {
						return g.createInstance(h, p, o, f, b, void 0);
					}
				}
				e.$HVb = c;
			},
		),
		