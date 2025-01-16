define(de[2791], he([1, 0, 33, 23, 22, 327]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$qfb = void 0);
			let C = class {
				constructor(m, r) {
					(this.a = m), (this.b = r);
				}
				async download(m, r, u = t.CancellationToken.None) {
					if (
						m.scheme === i.Schemas.file ||
						m.scheme === i.Schemas.vscodeRemote
					) {
						await this.b.copy(m, r);
						return;
					}
					const a = { type: "GET", url: m.toString(!0) },
						h = await this.a.request(a, u);
					if (h.res.statusCode === 200) await this.b.writeFile(r, h.stream);
					else {
						const c = await (0, E.$Fq)(h);
						throw new Error(`Expected 200, got back ${h.res.statusCode} instead.

${c}`);
					}
				}
			};
			(e.$qfb = C), (e.$qfb = C = Ne([j(0, E.$Aq), j(1, w.$ll)], C));
		}),
		define(
			de[2792],
			he([1, 0, 2228, 10, 34, 327]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$O3c = void 0);
				let C = class extends E.$Bq {
					constructor(m, r) {
						super(r), (this.f = m);
					}
					async request(m, r) {
						return (
							m.proxyAuthorization ||
								(m.proxyAuthorization = this.f.getValue(
									"http.proxyAuthorization",
								)),
							this.c("browser", m, () => (0, t.$Erb)(m, r))
						);
					}
					async resolveProxy(m) {}
					async lookupAuthorization(m) {}
					async lookupKerberosAuthorization(m) {}
					async loadCertificates() {
						return [];
					}
				};
				(e.$O3c = C), (e.$O3c = C = Ne([j(0, i.$gj), j(1, w.$jk)], C));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	