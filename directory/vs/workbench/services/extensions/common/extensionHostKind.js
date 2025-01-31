import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/extensions/common/extensions.js';
define(de[517], he([1, 0, 109]), function (ce /*require*/,
 e /*exports*/,
 t /*extensions*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ExtensionRunningPreference = e.ExtensionHostKind = void 0),
				(e.$c2 = w),
				(e.$d2 = C),
				(e.$e2 = d);
			var i;
			(function (a) {
				(a[(a.LocalProcess = 1)] = "LocalProcess"),
					(a[(a.LocalWebWorker = 2)] = "LocalWebWorker"),
					(a[(a.Remote = 3)] = "Remote");
			})(i || (e.ExtensionHostKind = i = {}));
			function w(a) {
				if (a === null) return "None";
				switch (a) {
					case i.LocalProcess:
						return "LocalProcess";
					case i.LocalWebWorker:
						return "LocalWebWorker";
					case i.Remote:
						return "Remote";
				}
			}
			var E;
			(function (a) {
				(a[(a.None = 0)] = "None"),
					(a[(a.Local = 1)] = "Local"),
					(a[(a.Remote = 2)] = "Remote");
			})(E || (e.ExtensionRunningPreference = E = {}));
			function C(a) {
				switch (a) {
					case E.None:
						return "None";
					case E.Local:
						return "Local";
					case E.Remote:
						return "Remote";
				}
			}
			function d(a, h, c, n) {
				const g = m(a, c),
					p = m(h, c),
					o = new Map(),
					f = (s) => {
						if (o.has(s.key)) return;
						const l = g.get(s.key) || null,
							y = p.get(s.key) || null,
							$ = new u(l, y);
						o.set($.key, $);
					};
				g.forEach((s) => f(s)), p.forEach((s) => f(s));
				const b = new Map();
				return (
					o.forEach((s) => {
						const l = !!s.local,
							y = !!s.remote,
							$ = !!(s.local && s.local.isUnderDevelopment),
							v = !!(s.remote && s.remote.isUnderDevelopment);
						let S = E.None;
						$ && !v ? (S = E.Local) : v && !$ && (S = E.Remote),
							b.set(s.key, n(s.identifier, s.kind, l, y, S));
					}),
					b
				);
			}
			function m(a, h) {
				const c = new Map();
				return (
					a.forEach((n) => {
						const g = new r(n, h(n));
						c.set(g.key, g);
					}),
					c
				);
			}
			class r {
				constructor(h, c) {
					(this.desc = h), (this.kind = c);
				}
				get key() {
					return t.$Gn.toKey(this.desc.identifier);
				}
				get isUnderDevelopment() {
					return this.desc.isUnderDevelopment;
				}
			}
			class u {
				constructor(h, c) {
					(this.local = h), (this.remote = c);
				}
				get key() {
					return this.local ? this.local.key : this.remote.key;
				}
				get identifier() {
					return this.local
						? this.local.desc.identifier
						: this.remote.desc.identifier;
				}
				get kind() {
					return this.local ? this.local.kind : this.remote.kind;
				}
			}
		})
