define(de[1655], he([1, 0, 12, 1654]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$fK = void 0);
			const w = new Map([
				[i.EnvironmentVariableMutatorType.Append, "APPEND"],
				[i.EnvironmentVariableMutatorType.Prepend, "PREPEND"],
				[i.EnvironmentVariableMutatorType.Replace, "REPLACE"],
			]);
			class E {
				constructor(u) {
					(this.collections = u),
						(this.a = new Map()),
						(this.b = new Map()),
						u.forEach((a, h) => {
							this.d(a, h);
							const c = a.map.entries();
							let n = c.next();
							for (; !n.done; ) {
								const g = n.value[1],
									p = n.value[0];
								let o = this.a.get(p);
								if (
									(o || ((o = []), this.a.set(p, o)),
									o.length > 0 &&
										o[0].type === i.EnvironmentVariableMutatorType.Replace)
								) {
									n = c.next();
									continue;
								}
								const f = {
									extensionIdentifier: h,
									value: g.value,
									type: g.type,
									scope: g.scope,
									variable: g.variable,
									options: g.options,
								};
								f.scope || delete f.scope, o.unshift(f), (n = c.next());
							}
						});
				}
				async applyToProcessEnvironment(u, a, h) {
					let c;
					t.$l &&
						((c = {}), Object.keys(u).forEach((n) => (c[n.toLowerCase()] = n)));
					for (const [n, g] of this.getVariableMap(a)) {
						const p = (t.$l && c[n.toLowerCase()]) || n;
						for (const o of g) {
							const f = h ? await h(o.value) : o.value;
							if (o.options?.applyAtProcessCreation ?? !0)
								switch (o.type) {
									case i.EnvironmentVariableMutatorType.Append:
										u[p] = (u[p] || "") + f;
										break;
									case i.EnvironmentVariableMutatorType.Prepend:
										u[p] = f + (u[p] || "");
										break;
									case i.EnvironmentVariableMutatorType.Replace:
										u[p] = f;
										break;
								}
							if (o.options?.applyAtShellIntegration ?? !1) {
								const b = `VSCODE_ENV_${w.get(o.type)}`;
								u[b] = (u[b] ? u[b] + ":" : "") + n + "=" + this.c(f);
							}
						}
					}
				}
				c(u) {
					return u.replaceAll(":", "\\x3a");
				}
				diff(u, a) {
					const h = new Map(),
						c = new Map(),
						n = new Map();
					if (
						(u.getVariableMap(a).forEach((g, p) => {
							const o = this.getVariableMap(a).get(p),
								f = d(g, o);
							f && h.set(p, f);
						}),
						this.getVariableMap(a).forEach((g, p) => {
							const o = u.getVariableMap(a).get(p),
								f = d(g, o);
							f && n.set(p, f);
						}),
						this.getVariableMap(a).forEach((g, p) => {
							const o = u.getVariableMap(a).get(p),
								f = m(g, o);
							f && c.set(p, f);
						}),
						!(h.size === 0 && c.size === 0 && n.size === 0))
					)
						return { added: h, changed: c, removed: n };
				}
				getVariableMap(u) {
					const a = new Map();
					for (const h of this.a.values()) {
						const c = h.filter((n) => C(n, u));
						c.length > 0 && a.set(c[0].variable, c);
					}
					return a;
				}
				getDescriptionMap(u) {
					const a = new Map();
					for (const h of this.b.values()) {
						const c = h.filter((n) => C(n, u, !0));
						for (const n of c) a.set(n.extensionIdentifier, n.description);
					}
					return a;
				}
				d(u, a) {
					if (!u.descriptionMap) return;
					const h = u.descriptionMap.entries();
					let c = h.next();
					for (; !c.done; ) {
						const n = c.value[1],
							g = c.value[0];
						let p = this.b.get(g);
						p || ((p = []), this.b.set(g, p));
						const o = {
							extensionIdentifier: a,
							scope: n.scope,
							description: n.description,
						};
						o.scope || delete o.scope, p.push(o), (c = h.next());
					}
				}
			}
			e.$fK = E;
			function C(r, u, a = !1) {
				return r.scope
					? !!(
							r.scope.workspaceFolder &&
							u?.workspaceFolder &&
							r.scope.workspaceFolder.index === u.workspaceFolder.index
						)
					: a
						? u === r.scope
						: !0;
			}
			function d(r, u) {
				if (!u) return r;
				const a = new Set();
				u.forEach((c) => a.add(c.extensionIdentifier));
				const h = [];
				return (
					r.forEach((c) => {
						a.has(c.extensionIdentifier) || h.push(c);
					}),
					h.length === 0 ? void 0 : h
				);
			}
			function m(r, u) {
				if (!u) return;
				const a = new Map();
				u.forEach((c) => a.set(c.extensionIdentifier, c));
				const h = [];
				return (
					r.forEach((c) => {
						const n = a.get(c.extensionIdentifier);
						n &&
							(c.type !== n.type ||
								c.value !== n.value ||
								c.scope?.workspaceFolder?.index !==
									n.scope?.workspaceFolder?.index) &&
							h.push(n);
					}),
					h.length === 0 ? void 0 : h
				);
			}
		}),
		