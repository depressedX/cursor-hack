define(de[800], he([1, 0, 29, 3, 5]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Knc = e.$Jnc = e.$Inc = void 0),
				(e.$Inc = (0, w.$Mi)("multiDiffSourceResolverService"));
			class E {
				constructor(m, r, u, a) {
					if (
						((this.originalUri = m),
						(this.modifiedUri = r),
						(this.goToFileUri = u),
						(this.contextKeys = a),
						!m && !r)
					)
						throw new t.$gb("Invalid arguments");
				}
				getKey() {
					return JSON.stringify([
						this.modifiedUri?.toString(),
						this.originalUri?.toString(),
					]);
				}
			}
			e.$Jnc = E;
			class C {
				constructor() {
					this.a = new Set();
				}
				registerResolver(m) {
					if (this.a.has(m)) throw new t.$gb("Duplicate resolver");
					return this.a.add(m), (0, i.$Yc)(() => this.a.delete(m));
				}
				resolve(m) {
					for (const r of this.a)
						if (r.canHandleUri(m)) return r.resolveDiffSource(m);
					return Promise.resolve(void 0);
				}
			}
			e.$Knc = C;
		}),
		