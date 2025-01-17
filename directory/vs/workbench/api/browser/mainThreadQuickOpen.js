import '../../../../require.js';
import '../../../../exports.js';
import '../../../platform/quickinput/common/quickInput.js';
import '../common/extHost.protocol.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../../base/common/uri.js';
import '../../../base/common/lifecycle.js';
define(
			de[3363],
			he([1, 0, 63, 88, 101, 9, 3]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ioc = void 0);
				function d(r) {
					(r.dark = E.URI.revive(r.dark)),
						r.light && (r.light = E.URI.revive(r.light));
				}
				let m = class {
					constructor(u, a) {
						(this.c = {}),
							(this.d = new Map()),
							(this.a = u.getProxy(i.$mbb.ExtHostQuickOpen)),
							(this.b = a);
					}
					dispose() {
						for (const [u, a] of this.d) a.store.dispose();
					}
					$show(u, a, h) {
						const c = new Promise((n, g) => {
							this.c[u] = { resolve: n, reject: g };
						});
						return (
							(a = {
								...a,
								onDidFocus: (n) => {
									n && this.a.$onItemSelected(n.handle);
								},
							}),
							a.canPickMany
								? this.b.pick(c, a, h).then((n) => {
										if (n) return n.map((g) => g.handle);
									})
								: this.b.pick(c, a, h).then((n) => {
										if (n) return n.handle;
									})
						);
					}
					$setItems(u, a) {
						return (
							this.c[u] && (this.c[u].resolve(a), delete this.c[u]),
							Promise.resolve()
						);
					}
					$setError(u, a) {
						return (
							this.c[u] && (this.c[u].reject(a), delete this.c[u]),
							Promise.resolve()
						);
					}
					$input(u, a, h) {
						const c = Object.create(null);
						return (
							u &&
								((c.title = u.title),
								(c.password = u.password),
								(c.placeHolder = u.placeHolder),
								(c.valueSelection = u.valueSelection),
								(c.prompt = u.prompt),
								(c.value = u.value),
								(c.ignoreFocusLost = u.ignoreFocusOut)),
							a && (c.validateInput = (n) => this.a.$validateInput(n)),
							this.b.input(c, h)
						);
					}
					$createOrUpdate(u) {
						const a = u.id;
						let h = this.d.get(a);
						if (!h) {
							const g = new C.$Zc(),
								p =
									u.type === "quickPick"
										? this.b.createQuickPick()
										: this.b.createInputBox();
							if (
								(g.add(p),
								g.add(
									p.onDidAccept(() => {
										this.a.$onDidAccept(a);
									}),
								),
								g.add(
									p.onDidTriggerButton((o) => {
										this.a.$onDidTriggerButton(a, o.handle);
									}),
								),
								g.add(
									p.onDidChangeValue((o) => {
										this.a.$onDidChangeValue(a, o);
									}),
								),
								g.add(
									p.onDidHide(() => {
										this.a.$onDidHide(a);
									}),
								),
								u.type === "quickPick")
							) {
								const o = p;
								g.add(
									o.onDidChangeActive((f) => {
										this.a.$onDidChangeActive(
											a,
											f.map((b) => b.handle),
										);
									}),
								),
									g.add(
										o.onDidChangeSelection((f) => {
											this.a.$onDidChangeSelection(
												a,
												f.map((b) => b.handle),
											);
										}),
									),
									g.add(
										o.onDidTriggerItemButton((f) => {
											this.a.$onDidTriggerItemButton(
												a,
												f.item.handle,
												f.button.handle,
											);
										}),
									);
							}
							(h = { input: p, handlesToItems: new Map(), store: g }),
								this.d.set(a, h);
						}
						const { input: c, handlesToItems: n } = h;
						for (const g in u)
							g === "id" ||
								g === "type" ||
								(g === "visible"
									? u.visible
										? c.show()
										: c.hide()
									: g === "items"
										? (n.clear(),
											u[g].forEach((p) => {
												p.type !== "separator" &&
													(p.buttons &&
														(p.buttons = p.buttons.map(
															(o) => (o.iconPath && d(o.iconPath), o),
														)),
													n.set(p.handle, p));
											}),
											(c[g] = u[g]))
										: g === "activeItems" || g === "selectedItems"
											? (c[g] = u[g]
													.filter((p) => n.has(p))
													.map((p) => n.get(p)))
											: g === "buttons"
												? (c[g] = u.buttons.map((p) =>
														p.handle === -1
															? this.b.backButton
															: (p.iconPath && d(p.iconPath), p),
													))
												: (c[g] = u[g]));
						return Promise.resolve(void 0);
					}
					$dispose(u) {
						const a = this.d.get(u);
						return (
							a && (a.store.dispose(), this.d.delete(u)),
							Promise.resolve(void 0)
						);
					}
				};
				(e.$ioc = m),
					(e.$ioc = m =
						Ne([(0, w.$tmc)(i.$lbb.MainThreadQuickOpen), j(1, t.$DJ)], m));
			},
		),
		