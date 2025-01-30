import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/files/common/files.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/buffer.js';
import '../../../../base/common/async.js';
define(de[3250], he([1, 0, 22, 19, 76, 15]), function (ce /*require*/,
 e /*exports*/,
 t /*files*/,
 i /*resources*/,
 w /*buffer*/,
 E /*async*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$G3c = void 0);
			class C {
				constructor(r, u, a) {
					(this.c = r),
						(this.d = a),
						(this.b = new Map()),
						(this.a = u.cacheHome);
				}
				needsCaching(r) {
					return !this.c.includes(r.scheme);
				}
				read(r) {
					return this.f(r).read();
				}
				write(r, u) {
					return this.f(r).save(u);
				}
				remove(r) {
					return this.f(r).remove();
				}
				f({ type: r, key: u }) {
					const a = `${r}:${u}`;
					let h = this.b.get(a);
					return (
						h ||
							((h = new d({ type: r, key: u }, this.a, this.d)),
							this.b.set(a, h)),
						h
					);
				}
			}
			e.$G3c = C;
			class d {
				constructor({ type: r, key: u }, a, h) {
					(this.d = h),
						(this.b = (0, i.$nh)(a, "CachedConfigurations", r, u)),
						(this.c = (0, i.$nh)(
							this.b,
							r === "workspaces" ? "workspace.json" : "configuration.json",
						)),
						(this.a = new E.$Th());
				}
				async read() {
					try {
						return (await this.d.readFile(this.c)).value.toString();
					} catch {
						return "";
					}
				}
				async save(r) {
					(await this.f()) &&
						(await this.a.queue(async () => {
							await this.d.writeFile(this.c, w.$Te.fromString(r));
						}));
				}
				async remove() {
					try {
						await this.a.queue(() =>
							this.d.del(this.b, { recursive: !0, useTrash: !1 }),
						);
					} catch (r) {
						if (r.fileOperationResult !== t.FileOperationResult.FILE_NOT_FOUND)
							throw r;
					}
				}
				async f() {
					if (await this.d.exists(this.b)) return !0;
					try {
						return await this.d.createFolder(this.b), !0;
					} catch {
						return !1;
					}
				}
			}
		}),
		