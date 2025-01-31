import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/idGenerator.js';
import '../../../../base/common/objects.js';
define(de[3132], he([1, 0, 584, 82]), function (ce /*require*/,
 e /*exports*/,
 t /*idGenerator*/,
 i /*objects*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$d9b = void 0);
			var w;
			(function (C) {
				(C[(C.Created = 1)] = "Created"),
					(C[(C.Loading = 2)] = "Loading"),
					(C[(C.Loaded = 3)] = "Loaded"),
					(C[(C.Errored = 4)] = "Errored"),
					(C[(C.Disposed = 5)] = "Disposed");
			})(w || (w = {}));
			class E {
				get cacheKey() {
					return this.c === w.Loaded || !this.h ? this.a : this.h.cacheKey;
				}
				get isLoaded() {
					const d = this.c === w.Loaded;
					return d || !this.h ? d : this.h.isLoaded;
				}
				get isUpdating() {
					const d = this.c === w.Loading;
					return d || !this.h ? d : this.h.isUpdating;
				}
				constructor(d, m, r, u) {
					if (
						((this.e = d),
						(this.f = m),
						(this.g = r),
						(this.h = u),
						(this.a = t.$Sdb.nextId()),
						(this.b = this.e(this.a)),
						(this.c = w.Created),
						this.h)
					) {
						const a = Object.assign({}, this.b, { cacheKey: null }),
							h = Object.assign({}, this.h.b, { cacheKey: null });
						(0, i.$zo)(a, h) || (this.h.dispose(), (this.h = void 0));
					}
				}
				load() {
					return this.isUpdating
						? this
						: ((this.c = w.Loading),
							(this.d = (async () => {
								try {
									await this.f(this.b),
										(this.c = w.Loaded),
										this.h && (this.h.dispose(), (this.h = void 0));
								} catch (d) {
									throw ((this.c = w.Errored), d);
								}
							})()),
							this);
				}
				dispose() {
					this.d
						? (async () => {
								try {
									await this.d;
								} catch {}
								(this.c = w.Disposed), this.g(this.a);
							})()
						: (this.c = w.Disposed),
						this.h && (this.h.dispose(), (this.h = void 0));
				}
			}
			e.$d9b = E;
		})
