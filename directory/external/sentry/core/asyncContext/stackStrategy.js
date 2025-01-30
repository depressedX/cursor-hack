import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
import '../defaultScopes.js';
import '../scope.js';
import '../carrier.js';
define(
			de[2104],
			he([1, 0, 80, 1441, 732, 578]),
			function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*defaultScopes*/,
 w /*scope*/,
 E /*carrier*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.AsyncContextStack = void 0),
					(e.getStackAsyncContextStrategy = a);
				class C {
					constructor(c, n) {
						let g;
						c ? (g = c) : (g = new w.Scope());
						let p;
						n ? (p = n) : (p = new w.Scope()),
							(this._stack = [{ scope: g }]),
							(this._isolationScope = p);
					}
					withScope(c) {
						const n = this._pushScope();
						let g;
						try {
							g = c(n);
						} catch (p) {
							throw (this._popScope(), p);
						}
						return (0, t.isThenable)(g)
							? g.then(
									(p) => (this._popScope(), p),
									(p) => {
										throw (this._popScope(), p);
									},
								)
							: (this._popScope(), g);
					}
					getClient() {
						return this.getStackTop().client;
					}
					getScope() {
						return this.getStackTop().scope;
					}
					getIsolationScope() {
						return this._isolationScope;
					}
					getStackTop() {
						return this._stack[this._stack.length - 1];
					}
					_pushScope() {
						const c = this.getScope().clone();
						return this._stack.push({ client: this.getClient(), scope: c }), c;
					}
					_popScope() {
						return this._stack.length <= 1 ? !1 : !!this._stack.pop();
					}
				}
				e.AsyncContextStack = C;
				function d() {
					const h = (0, E.getMainCarrier)(),
						c = (0, E.getSentryCarrier)(h);
					return (c.stack =
						c.stack ||
						new C(
							(0, i.getDefaultCurrentScope)(),
							(0, i.getDefaultIsolationScope)(),
						));
				}
				function m(h) {
					return d().withScope(h);
				}
				function r(h, c) {
					const n = d();
					return n.withScope(() => ((n.getStackTop().scope = h), c(h)));
				}
				function u(h) {
					return d().withScope(() => h(d().getIsolationScope()));
				}
				function a() {
					return {
						withIsolationScope: u,
						withScope: m,
						withSetScope: r,
						withSetIsolationScope: (h, c) => u(c),
						getCurrentScope: () => d().getScope(),
						getIsolationScope: () => d().getIsolationScope(),
					};
				}
			},
		),
		