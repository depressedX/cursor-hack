import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../files/common/files.js';
import '../../../base/common/ternarySearchTree.js';
import '../../../base/common/map.js';
define(
			de[2883],
			he([1, 0, 6, 3, 22, 387, 59]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$T8c = void 0);
				class d extends i.$1c {
					constructor(r, u, a, h, c, n) {
						super(),
							(this.f = r),
							(this.g = u),
							(this.h = a),
							(this.j = h),
							(this.m = c),
							(this.n = n),
							(this.capabilities = this.g.capabilities),
							(this.onDidChangeCapabilities = this.g.onDidChangeCapabilities),
							(this.a = this.D(new t.$re())),
							(this.onDidChangeFile = this.a.event),
							(this.b = E.$Si.forUris(
								() =>
									!(
										this.capabilities &
										w.FileSystemProviderCapabilities.PathCaseSensitive
									),
							)),
							(this.c = new C.$Hc((g) =>
								this.m.extUri.getComparisonKey(this.s(g)),
							)),
							this.q(),
							this.D(h.onDidChangeProfiles(() => this.q())),
							this.D(this.g.onDidChangeFile((g) => this.r(g)));
					}
					q() {
						this.c.clear();
						for (const r of this.j.profiles)
							this.c.add(r.settingsResource),
								this.c.add(r.keybindingsResource),
								this.c.add(r.tasksResource),
								this.c.add(r.extensionsResource);
					}
					open(r, u) {
						return this.g.open(this.s(r), u);
					}
					close(r) {
						return this.g.close(r);
					}
					read(r, u, a, h, c) {
						return this.g.read(r, u, a, h, c);
					}
					write(r, u, a, h, c) {
						return this.g.write(r, u, a, h, c);
					}
					watch(r, u) {
						this.b.set(r, r);
						const a = this.g.watch(this.s(r), u);
						return (0, i.$Yc)(() => {
							this.b.delete(r), a.dispose();
						});
					}
					stat(r) {
						return this.g.stat(this.s(r));
					}
					mkdir(r) {
						return this.g.mkdir(this.s(r));
					}
					rename(r, u, a) {
						return this.g.rename(this.s(r), this.s(u), a);
					}
					readFile(r, u) {
						return this.g.readFile(this.s(r), u);
					}
					readFileStream(r, u, a) {
						return this.g.readFileStream(this.s(r), u, a);
					}
					readdir(r) {
						return this.g.readdir(this.s(r));
					}
					enforceAtomicReadFile(r) {
						return this.c.has(r);
					}
					writeFile(r, u, a) {
						return this.g.writeFile(this.s(r), u, a);
					}
					enforceAtomicWriteFile(r) {
						return this.c.has(r) ? { postfix: ".vsctmp" } : !1;
					}
					delete(r, u) {
						return this.g.delete(this.s(r), u);
					}
					copy(r, u, a) {
						if ((0, w.$pl)(this.g)) return this.g.copy(this.s(r), this.s(u), a);
						throw new Error("copy not supported");
					}
					cloneFile(r, u) {
						if ((0, w.$ql)(this.g))
							return this.g.cloneFile(this.s(r), this.s(u));
						throw new Error("clone not supported");
					}
					r(r) {
						const u = [];
						for (const a of r) {
							if (a.resource.scheme !== this.f) continue;
							const h = this.t(a.resource);
							this.b.findSubstr(h) &&
								u.push({ resource: h, type: a.type, cId: a.cId });
						}
						u.length && (this.n.debug("User data changed"), this.a.fire(u));
					}
					s(r) {
						return r.with({ scheme: this.f });
					}
					t(r) {
						return r.with({ scheme: this.h });
					}
				}
				e.$T8c = d;
			},
		),
		