import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../services/environment/common/environmentService.js';
import '../../../../platform/files/common/files.js';
import '../../../services/configuration/common/jsonEditing.js';
import '../../../../base/common/types.js';
import '../../../../platform/environment/common/environmentService.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../base/common/json.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/event.js';
define(
			de[1019],
			he([1, 0, 34, 5, 78, 22, 423, 28, 1178, 20, 187, 3, 6]),
			function (ce /*require*/,
 e /*exports*/,
 t /*log*/,
 i /*instantiation*/,
 w /*environmentService*/,
 E /*files*/,
 C /*jsonEditing*/,
 d /*types*/,
 m /*environmentService*/,
 r /*extensions*/,
 u /*json*/,
 a /*lifecycle*/,
 h /*event*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$GMc = void 0),
					(e.$GMc = (0, i.$Mi)("IDefaultLogLevelsService"));
				let c = class extends a.$1c {
					constructor(g, p, o, f, b) {
						super(),
							(this.b = g),
							(this.c = p),
							(this.f = o),
							(this.g = f),
							(this.h = b),
							(this.a = this.D(new h.$re())),
							(this.onDidChangeDefaultLogLevels = this.a.event);
					}
					async getDefaultLogLevels() {
						const g = await this.n();
						return {
							default: g?.default ?? this.r(),
							extensions: g?.extensions ?? this.s(),
						};
					}
					async getDefaultLogLevel(g) {
						const p = (await this.n()) ?? {};
						return g ? ((g = g.toLowerCase()), this.j(p, g)) : this.j(p);
					}
					async setDefaultLogLevel(g, p) {
						const o = (await this.n()) ?? {};
						if (p) {
							p = p.toLowerCase();
							const f = this.j(o, p);
							o.extensions = o.extensions ?? [];
							const b = o.extensions.find(([l]) => l === p);
							b ? (b[1] = g) : o.extensions.push([p, g]), await this.m(o);
							const s = [...this.h.getRegisteredLoggers()].filter(
								(l) => l.extensionId && l.extensionId.toLowerCase() === p,
							);
							for (const { resource: l } of s)
								this.h.getLogLevel(l) === f && this.h.setLogLevel(l, g);
						} else {
							const f = this.j(o);
							(o.default = g),
								await this.m(o),
								this.h.getLogLevel() === f && this.h.setLogLevel(g);
						}
						this.a.fire();
					}
					j(g, p) {
						if (p) {
							const o = g.extensions?.find(([f]) => f === p);
							if (o) return o[1];
						}
						return g.default ?? (0, t.$wk)(this.b);
					}
					async m(g) {
						const p = [];
						(0, d.$sg)(g.default) || p.push((0, t.$xk)(g.default));
						for (const [o, f] of g.extensions ?? [])
							p.push(`${o}=${(0, t.$xk)(f)}`);
						await this.f.write(
							this.b.argvResource,
							[{ path: ["log-level"], value: p.length ? p : void 0 }],
							!0,
						);
					}
					async n() {
						const g = { extensions: [] },
							p = await this.q();
						for (const o of p) {
							const f = m.$hn.exec(o);
							if (f && f[1] && f[2]) {
								const b = (0, t.$zk)(f[2]);
								(0, d.$sg)(b) || g.extensions?.push([f[1].toLowerCase(), b]);
							} else {
								const b = (0, t.$zk)(o);
								(0, d.$sg)(b) || (g.default = b);
							}
						}
						return !(0, d.$sg)(g.default) || g.extensions?.length ? g : void 0;
					}
					async migrateLogLevels() {
						const g = await this.q(),
							p = /^([^.]+\..+):(.+)$/;
						if (g.some((o) => p.test(o))) {
							const o = await this.n();
							o && (await this.m(o));
						}
					}
					async q() {
						try {
							const g = await this.c.readFile(this.b.argvResource),
								p = (0, u.$do)(g.value.toString());
							return (0, d.$lg)(p["log-level"])
								? [p["log-level"]]
								: Array.isArray(p["log-level"])
									? p["log-level"]
									: [];
						} catch (g) {
							(0, E.$Cl)(g) !== E.FileOperationResult.FILE_NOT_FOUND &&
								this.g.error(g);
						}
						return [];
					}
					r() {
						return (0, t.$wk)(this.b);
					}
					s() {
						const g = [];
						for (const [p, o] of this.b.extensionLogLevel ?? []) {
							const f = (0, t.$zk)(o);
							(0, d.$sg)(f) || g.push([p, f]);
						}
						return g;
					}
				};
				(c = Ne(
					[j(0, w.$r8), j(1, E.$ll), j(2, C.$$Qb), j(3, t.$ik), j(4, t.$jk)],
					c,
				)),
					(0, r.$lK)(e.$GMc, c, r.InstantiationType.Delayed);
			},
		)
