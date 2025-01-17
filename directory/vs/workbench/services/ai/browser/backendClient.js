import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/bufbuild/connect.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import './connectRequestService.js';
define(de[285], he([1, 0, 340, 3, 45, 1280]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$q6b = void 0);
			let C = class extends i.$1c {
				constructor(m, r, u) {
					super(),
						(this.c = m),
						(this.f = r),
						(this.g = u),
						(this.b = !1),
						(this.a = this.D(this.f.createScoped(this))),
						this.D(
							this.g.onDidChangeTransport(() => {
								this.createServer();
							}),
						);
				}
				async get() {
					const m = this.h;
					(!this.b || m === void 0) && (this.createServer(), (this.b = !0));
					const r = await this.h;
					if (r === void 0)
						throw new Error("Invariant violated! server did not get created.");
					return r;
				}
				createServer() {
					this.h = this.createSingleServer();
				}
				async createSingleServer() {
					const m = await this.g.transport();
					return (0, t.createPromiseClient)(this.c.service, m);
				}
			};
			(e.$q6b = C), (e.$q6b = C = Ne([j(1, w.$0zb), j(2, E.$o6b)], C));
		}),
		