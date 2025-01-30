import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/lifecycle.js';
import '../../editorExtensions.js';
define(de[2799], he([1, 0, 7, 29, 3, 46]), function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*errors*/,
 w /*lifecycle*/,
 E /*editorExtensions*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Qvb = void 0);
			class C extends w.$1c {
				constructor() {
					super(),
						(this.a = null),
						(this.b = null),
						(this.c = this.D(new w.$0c())),
						(this.f = new Map()),
						(this.g = []),
						(this.g[E.EditorContributionInstantiation.Eager] = !1),
						(this.g[E.EditorContributionInstantiation.AfterFirstRender] = !1),
						(this.g[E.EditorContributionInstantiation.BeforeFirstInteraction] =
							!1),
						(this.g[E.EditorContributionInstantiation.Eventually] = !1);
				}
				initialize(m, r, u) {
					(this.a = m), (this.b = u);
					for (const a of r) {
						if (this.f.has(a.id)) {
							(0, i.$4)(
								new Error(
									`Cannot have two contributions with the same id ${a.id}`,
								),
							);
							continue;
						}
						this.f.set(a.id, a);
					}
					this.h(E.EditorContributionInstantiation.Eager),
						this.D(
							(0, t.$egb)((0, t.getWindow)(this.a.getDomNode()), () => {
								this.h(E.EditorContributionInstantiation.AfterFirstRender);
							}),
						),
						this.D(
							(0, t.$egb)((0, t.getWindow)(this.a.getDomNode()), () => {
								this.h(
									E.EditorContributionInstantiation.BeforeFirstInteraction,
								);
							}),
						),
						this.D(
							(0, t.$egb)(
								(0, t.getWindow)(this.a.getDomNode()),
								() => {
									this.h(E.EditorContributionInstantiation.Eventually);
								},
								5e3,
							),
						);
				}
				saveViewState() {
					const m = {};
					for (const [r, u] of this.c)
						typeof u.saveViewState == "function" && (m[r] = u.saveViewState());
					return m;
				}
				restoreViewState(m) {
					for (const [r, u] of this.c)
						typeof u.restoreViewState == "function" && u.restoreViewState(m[r]);
				}
				get(m) {
					return this.m(m), this.c.get(m) || null;
				}
				set(m, r) {
					this.c.set(m, r);
				}
				onBeforeInteractionEvent() {
					this.h(E.EditorContributionInstantiation.BeforeFirstInteraction);
				}
				onAfterModelAttached() {
					return (0, t.$egb)(
						(0, t.getWindow)(this.a?.getDomNode()),
						() => {
							this.h(E.EditorContributionInstantiation.AfterFirstRender);
						},
						50,
					);
				}
				h(m) {
					if (this.g[m]) return;
					this.g[m] = !0;
					const r = this.j(m);
					for (const u of r) this.m(u.id);
				}
				j(m) {
					const r = [];
					for (const [, u] of this.f) u.instantiation === m && r.push(u);
					return r;
				}
				m(m) {
					const r = this.f.get(m);
					if (r) {
						if ((this.f.delete(m), !this.b || !this.a))
							throw new Error(
								"Cannot instantiate contributions before being initialized!",
							);
						try {
							const u = this.b.createInstance(r.ctor, this.a);
							this.c.set(r.id, u),
								typeof u.restoreViewState == "function" &&
									r.instantiation !== E.EditorContributionInstantiation.Eager &&
									console.warn(
										`Editor contribution '${r.id}' should be eager instantiated because it uses saveViewState / restoreViewState.`,
									);
						} catch (u) {
							(0, i.$4)(u);
						}
					}
				}
			}
			e.$Qvb = C;
		}),
		