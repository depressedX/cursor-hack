define(de[109], he([1, 0, 37, 5, 438]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Pn =
					e.$In =
					e.$Hn =
					e.$Gn =
					e.TargetPlatform =
					e.ExtensionType =
					e.$Fn =
					e.$Dn =
					e.$Cn =
					e.$Bn =
					e.$An =
						void 0),
				(e.$En = E),
				(e.$Jn = a),
				(e.$Kn = h),
				(e.$Ln = c),
				(e.$Mn = n),
				(e.$Nn = g),
				(e.$On = p),
				(t = mt(t)),
				(e.$An = "extensions.user.cache"),
				(e.$Bn = "extensions.builtin.cache"),
				(e.$Cn = "undefined_publisher"),
				(e.$Dn = ["ui", "workspace", "web"]);
			function E(o) {
				if (typeof o == "object" && o !== null && o.supported !== !0)
					return o.description;
			}
			e.$Fn = [
				"AI",
				"Azure",
				"Chat",
				"Data Science",
				"Debuggers",
				"Extension Packs",
				"Education",
				"Formatters",
				"Keymaps",
				"Language Packs",
				"Linters",
				"Machine Learning",
				"Notebooks",
				"Programming Languages",
				"SCM Providers",
				"Snippets",
				"Testing",
				"Themes",
				"Visualization",
				"Other",
			];
			var C;
			(function (o) {
				(o[(o.System = 0)] = "System"), (o[(o.User = 1)] = "User");
			})(C || (e.ExtensionType = C = {}));
			var d;
			(function (o) {
				(o.WIN32_X64 = "win32-x64"),
					(o.WIN32_ARM64 = "win32-arm64"),
					(o.LINUX_X64 = "linux-x64"),
					(o.LINUX_ARM64 = "linux-arm64"),
					(o.LINUX_ARMHF = "linux-armhf"),
					(o.ALPINE_X64 = "alpine-x64"),
					(o.ALPINE_ARM64 = "alpine-arm64"),
					(o.DARWIN_X64 = "darwin-x64"),
					(o.DARWIN_ARM64 = "darwin-arm64"),
					(o.WEB = "web"),
					(o.UNIVERSAL = "universal"),
					(o.UNKNOWN = "unknown"),
					(o.UNDEFINED = "undefined");
			})(d || (e.TargetPlatform = d = {}));
			class m {
				constructor(f) {
					(this.value = f), (this._lower = f.toLowerCase());
				}
				static equals(f, b) {
					if (typeof f > "u" || f === null) return typeof b > "u" || b === null;
					if (typeof b > "u" || b === null) return !1;
					if (typeof f == "string" || typeof b == "string") {
						const s = typeof f == "string" ? f : f.value,
							l = typeof b == "string" ? b : b.value;
						return t.$Mf(s, l);
					}
					return f._lower === b._lower;
				}
				static toKey(f) {
					return typeof f == "string" ? f.toLowerCase() : f._lower;
				}
			}
			e.$Gn = m;
			class r {
				get size() {
					return this.c.size;
				}
				constructor(f) {
					if (((this.c = new Set()), f)) for (const b of f) this.add(b);
				}
				add(f) {
					this.c.add(m.toKey(f));
				}
				delete(f) {
					return this.c.delete(m.toKey(f));
				}
				has(f) {
					return this.c.has(m.toKey(f));
				}
			}
			e.$Hn = r;
			class u {
				constructor() {
					this.c = new Map();
				}
				clear() {
					this.c.clear();
				}
				delete(f) {
					this.c.delete(m.toKey(f));
				}
				get(f) {
					return this.c.get(m.toKey(f));
				}
				has(f) {
					return this.c.has(m.toKey(f));
				}
				set(f, b) {
					this.c.set(m.toKey(f), b);
				}
				values() {
					return this.c.values();
				}
				forEach(f) {
					this.c.forEach(f);
				}
				[Symbol.iterator]() {
					return this.c[Symbol.iterator]();
				}
			}
			e.$In = u;
			function a(o) {
				return h(o);
			}
			function h(o) {
				return o.contributes && o.contributes.localizations
					? o.contributes.localizations.length > 0
					: !1;
			}
			function c(o) {
				return o.contributes && o.contributes.authentication
					? o.contributes.authentication.length > 0
					: !1;
			}
			function n(o, f) {
				if (f) {
					const b = `onResolveRemoteAuthority:${(0, w.$xn)(f)}`;
					return !!o.activationEvents?.includes(b);
				}
				return !1;
			}
			function g(o) {
				return o.map((f) => {
					const [b, s] = f.split("@");
					return { proposalName: b, version: s ? parseInt(s) : void 0 };
				});
			}
			function p(o) {
				return o.map((f) => f.split("@")[0]);
			}
			e.$Pn = (0, i.$Mi)("IBuiltinExtensionsScannerService");
		}),
		