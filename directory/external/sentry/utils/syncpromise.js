import '../../../require.js';
import '../../../exports.js';
import './is.js';
define(de[1425], he([1, 0, 430]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.SyncPromise = void 0),
				(e.resolvedSyncPromise = w),
				(e.rejectedSyncPromise = E);
			var i;
			(function (d) {
				(d[(d.PENDING = 0)] = "PENDING"),
					(d[(d.RESOLVED = 1)] = "RESOLVED"),
					(d[(d.REJECTED = 2)] = "REJECTED");
			})(i || (i = {}));
			function w(d) {
				return new C((m) => {
					m(d);
				});
			}
			function E(d) {
				return new C((m, r) => {
					r(d);
				});
			}
			class C {
				constructor(m) {
					(this._resolve = (r) => {
						this._setResult(i.RESOLVED, r);
					}),
						(this._reject = (r) => {
							this._setResult(i.REJECTED, r);
						}),
						(this._setResult = (r, u) => {
							if (this._state === i.PENDING) {
								if ((0, t.isThenable)(u)) {
									u.then(this._resolve, this._reject);
									return;
								}
								(this._state = r), (this._value = u), this._executeHandlers();
							}
						}),
						(this._executeHandlers = () => {
							if (this._state === i.PENDING) return;
							const r = this._handlers.slice();
							(this._handlers = []),
								r.forEach((u) => {
									u[0] ||
										(this._state === i.RESOLVED && u[1](this._value),
										this._state === i.REJECTED && u[2](this._value),
										(u[0] = !0));
								});
						}),
						(this._state = i.PENDING),
						(this._handlers = []);
					try {
						m(this._resolve, this._reject);
					} catch (r) {
						this._reject(r);
					}
				}
				then(m, r) {
					return new C((u, a) => {
						this._handlers.push([
							!1,
							(h) => {
								if (!m) u(h);
								else
									try {
										u(m(h));
									} catch (c) {
										a(c);
									}
							},
							(h) => {
								if (!r) a(h);
								else
									try {
										u(r(h));
									} catch (c) {
										a(c);
									}
							},
						]),
							this._executeHandlers();
					});
				}
				catch(m) {
					return this.then((r) => r, m);
				}
				finally(m) {
					return new C((r, u) => {
						let a, h;
						return this.then(
							(c) => {
								(h = !1), (a = c), m && m();
							},
							(c) => {
								(h = !0), (a = c), m && m();
							},
						).then(() => {
							if (h) {
								u(a);
								return;
							}
							r(a);
						});
					});
				}
			}
			e.SyncPromise = C;
		}),
		