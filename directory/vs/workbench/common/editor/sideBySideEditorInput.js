import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../nls.js';
import '../../../platform/registry/common/platform.js';
import '../editor.js';
import './editorInput.js';
import '../../services/editor/common/editorService.js';
define(
			de[313],
			he([1, 0, 6, 4, 30, 44, 223, 18]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				var m;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kY = e.$jY = e.$iY = void 0);
				let r = class extends C.$LO {
					static {
						m = this;
					}
					static {
						this.ID = "workbench.editorinputs.sidebysideEditorInput";
					}
					get typeId() {
						return m.ID;
					}
					get capabilities() {
						let c = this.primary.capabilities;
						return (
							(c &= ~E.EditorInputCapabilities.CanSplitInGroup),
							this.secondary.hasCapability(
								E.EditorInputCapabilities.RequiresTrust,
							) && (c |= E.EditorInputCapabilities.RequiresTrust),
							this.secondary.hasCapability(
								E.EditorInputCapabilities.Singleton,
							) && (c |= E.EditorInputCapabilities.Singleton),
							(c |= E.EditorInputCapabilities.MultipleEditors),
							c
						);
					}
					get resource() {
						if (this.a) return this.primary.resource;
					}
					constructor(c, n, g, p, o) {
						super(),
							(this.c = c),
							(this.h = n),
							(this.secondary = g),
							(this.primary = p),
							(this.m = o),
							(this.a = this.primary.matches(this.secondary)),
							this.n();
					}
					n() {
						this.D(
							t.Event.once(
								t.Event.any(
									this.primary.onWillDispose,
									this.secondary.onWillDispose,
								),
							)(() => {
								this.isDisposed() || this.dispose();
							}),
						),
							this.D(this.primary.onDidChangeDirty(() => this.b.fire())),
							this.D(this.primary.onDidChangeCapabilities(() => this.g.fire())),
							this.D(
								this.secondary.onDidChangeCapabilities(() => this.g.fire()),
							),
							this.D(this.primary.onDidChangeLabel(() => this.f.fire())),
							this.D(this.secondary.onDidChangeLabel(() => this.f.fire()));
					}
					getName() {
						const c = this.getPreferredName();
						return (
							c ||
							(this.a
								? this.primary.getName()
								: (0, i.localize)(
										4079,
										null,
										this.secondary.getName(),
										this.primary.getName(),
									))
						);
					}
					getPreferredName() {
						return this.c;
					}
					getDescription(c) {
						const n = this.getPreferredDescription();
						return (
							n ||
							(this.a
								? this.primary.getDescription(c)
								: super.getDescription(c))
						);
					}
					getPreferredDescription() {
						return this.h;
					}
					getTitle(c) {
						let n;
						this.a
							? (n = this.primary.getTitle(c) ?? this.getName())
							: (n = super.getTitle(c));
						const g = this.q();
						return g && (n = `${g} (${n})`), n;
					}
					q() {
						if (this.c && this.h) return `${this.c} ${this.h}`;
						if (this.c || this.h) return this.c ?? this.h;
					}
					getLabelExtraClasses() {
						return this.a
							? this.primary.getLabelExtraClasses()
							: super.getLabelExtraClasses();
					}
					getAriaLabel() {
						return this.a ? this.primary.getAriaLabel() : super.getAriaLabel();
					}
					getTelemetryDescriptor() {
						return {
							...this.primary.getTelemetryDescriptor(),
							...super.getTelemetryDescriptor(),
						};
					}
					isDirty() {
						return this.primary.isDirty();
					}
					isSaving() {
						return this.primary.isSaving();
					}
					async save(c, n) {
						const g = await this.primary.save(c, n);
						return this.r(g);
					}
					async saveAs(c, n) {
						const g = await this.primary.saveAs(c, n);
						return this.r(g);
					}
					r(c) {
						if (!c || !this.a) return c;
						if (this.primary.matches(c)) return this;
						if (c instanceof C.$LO) return new m(this.c, this.h, c, c, this.m);
						if (
							!(0, E.$j1)(c) &&
							!(0, E.$k1)(c) &&
							!(0, E.$m1)(c) &&
							!(0, E.$o1)(c) &&
							!(0, E.$l1)(c)
						)
							return {
								primary: c,
								secondary: c,
								label: this.c,
								description: this.h,
							};
					}
					revert(c, n) {
						return this.primary.revert(c, n);
					}
					async rename(c, n) {
						if (!this.a) return;
						const g = await this.primary.rename(c, n);
						if (g) {
							if ((0, E.$r1)(g.editor))
								return {
									editor: new m(this.c, this.h, g.editor, g.editor, this.m),
									options: {
										...g.options,
										viewState: (0, E.$h1)(this, c, this.m),
									},
								};
							if ((0, E.$i1)(g.editor))
								return {
									editor: {
										label: this.c,
										description: this.h,
										primary: g.editor,
										secondary: g.editor,
										options: {
											...g.options,
											viewState: (0, E.$h1)(this, c, this.m),
										},
									},
								};
						}
					}
					isReadonly() {
						return this.primary.isReadonly();
					}
					toUntyped(c) {
						const n = this.primary.toUntyped(c),
							g = this.secondary.toUntyped(c);
						if (
							n &&
							g &&
							!(0, E.$j1)(n) &&
							!(0, E.$j1)(g) &&
							!(0, E.$k1)(n) &&
							!(0, E.$k1)(g) &&
							!(0, E.$m1)(n) &&
							!(0, E.$m1)(g) &&
							!(0, E.$o1)(n) &&
							!(0, E.$o1)(g) &&
							!(0, E.$l1)(n) &&
							!(0, E.$l1)(g)
						) {
							const p = {
								label: this.c,
								description: this.h,
								primary: n,
								secondary: g,
							};
							return (
								typeof c?.preserveViewState == "number" &&
									(p.options = {
										viewState: (0, E.$h1)(this, c.preserveViewState, this.m),
									}),
								p
							);
						}
					}
					matches(c) {
						return this === c
							? !0
							: (0, E.$t1)(c) || (0, E.$j1)(c)
								? !1
								: c instanceof m
									? this.primary.matches(c.primary) &&
										this.secondary.matches(c.secondary)
									: (0, E.$m1)(c)
										? this.primary.matches(c.primary) &&
											this.secondary.matches(c.secondary)
										: !1;
					}
				};
				(e.$iY = r), (e.$iY = r = m = Ne([j(4, d.$IY)], r));
				class u {
					canSerialize(c) {
						const n = c;
						if (n.primary && n.secondary) {
							const [g, p] = this.a(n.secondary.typeId, n.primary.typeId);
							return !!(
								g?.canSerialize(n.secondary) && p?.canSerialize(n.primary)
							);
						}
						return !1;
					}
					serialize(c) {
						const n = c;
						if (n.primary && n.secondary) {
							const [g, p] = this.a(n.secondary.typeId, n.primary.typeId);
							if (p && g) {
								const o = p.serialize(n.primary),
									f = g.serialize(n.secondary);
								if (o && f) {
									const b = {
										name: n.getPreferredName(),
										description: n.getPreferredDescription(),
										primarySerialized: o,
										secondarySerialized: f,
										primaryTypeId: n.primary.typeId,
										secondaryTypeId: n.secondary.typeId,
									};
									return JSON.stringify(b);
								}
							}
						}
					}
					deserialize(c, n) {
						const g = JSON.parse(n),
							[p, o] = this.a(g.secondaryTypeId, g.primaryTypeId);
						if (o && p) {
							const f = o.deserialize(c, g.primarySerialized),
								b = p.deserialize(c, g.secondarySerialized);
							if (f instanceof C.$LO && b instanceof C.$LO)
								return this.b(c, g.name, g.description, b, f);
						}
					}
					a(c, n) {
						const g = w.$Io.as(E.$a1.EditorFactory);
						return [g.getEditorSerializer(c), g.getEditorSerializer(n)];
					}
				}
				e.$jY = u;
				class a extends u {
					b(c, n, g, p, o) {
						return c.createInstance(r, n, g, p, o);
					}
				}
				e.$kY = a;
			},
		),
		