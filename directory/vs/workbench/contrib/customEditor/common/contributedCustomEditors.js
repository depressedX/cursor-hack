import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../nls.js';
import '../../../../platform/storage/common/storage.js';
import '../../../common/memento.js';
import './customEditor.js';
import './extensionPoint.js';
import '../../../services/editor/common/editorResolverService.js';
define(
			de[3577],
			he([1, 0, 6, 3, 4, 21, 282, 625, 3576, 231]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$BSc = void 0),
					(w = mt(w));
				class u extends i.$1c {
					static {
						this.a = "customEditors";
					}
					static {
						this.b = "editors";
					}
					constructor(c) {
						super(),
							(this.c = new Map()),
							(this.g = this.D(new t.$re())),
							(this.onChange = this.g.event),
							(this.f = new C.$eEb(u.a, c));
						const n = this.f.getMemento(
							E.StorageScope.PROFILE,
							E.StorageTarget.MACHINE,
						);
						for (const g of n[u.b] || []) this.j(new d.$mnc(g));
						m.$ASc.setHandler((g) => {
							this.h(g);
						});
					}
					h(c) {
						this.c.clear();
						for (const g of c)
							for (const p of g.value)
								this.j(
									new d.$mnc({
										id: p.viewType,
										displayName: p.displayName,
										providerDisplayName: g.description.isBuiltin
											? w.localize(5125, null)
											: g.description.displayName ||
												g.description.identifier.value,
										selector: p.selector || [],
										priority: a(p, g.description),
									}),
								);
						const n = this.f.getMemento(
							E.StorageScope.PROFILE,
							E.StorageTarget.MACHINE,
						);
						(n[u.b] = Array.from(this.c.values())),
							this.f.saveMemento(),
							this.g.fire();
					}
					[Symbol.iterator]() {
						return this.c.values();
					}
					get(c) {
						return this.c.get(c);
					}
					getContributedEditors(c) {
						return Array.from(this.c.values()).filter((n) => n.matches(c));
					}
					j(c) {
						if (this.c.has(c.id)) {
							console.error(
								`Custom editor with id '${c.id}' already registered`,
							);
							return;
						}
						this.c.set(c.id, c);
					}
				}
				e.$BSc = u;
				function a(h, c) {
					switch (h.priority) {
						case r.RegisteredEditorPriority.default:
						case r.RegisteredEditorPriority.option:
							return h.priority;
						case r.RegisteredEditorPriority.builtin:
							return c.isBuiltin
								? r.RegisteredEditorPriority.builtin
								: r.RegisteredEditorPriority.default;
						default:
							return r.RegisteredEditorPriority.default;
					}
				}
			},
		),
		