import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../platform/native/common/native.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../base/common/lifecycle.js';
import '../common/hostColorSchemeService.js';
import '../../environment/electron-sandbox/environmentService.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../base/common/types.js';
define(
			de[3729],
			he([1, 0, 6, 110, 20, 3, 1888, 151, 21, 28]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*native*/,
 w /*extensions*/,
 E /*lifecycle*/,
 C /*hostColorSchemeService*/,
 d /*environmentService*/,
 m /*storage*/,
 r /*types*/) {
				"use strict";
				var u;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Idd = void 0);
				let a = class extends E.$1c {
					static {
						u = this;
					}
					static {
						this.STORAGE_KEY = "HostColorSchemeData";
					}
					constructor(c, n, g) {
						super(),
							(this.b = c),
							(this.c = g),
							(this.a = this.D(new t.$re())),
							(this.onDidChangeColorScheme = this.a.event),
							this.D(this.b.onDidChangeColorScheme((o) => this.g(o)));
						const p = this.f() ?? n.window.colorScheme;
						(this.dark = p.dark),
							(this.highContrast = p.highContrast),
							this.b.getOSColorScheme().then((o) => this.g(o));
					}
					f() {
						const c = this.c.get(u.STORAGE_KEY, m.StorageScope.APPLICATION);
						if (c)
							try {
								const n = JSON.parse(c);
								if (
									(0, r.$ng)(n) &&
									(0, r.$rg)(n.highContrast) &&
									(0, r.$rg)(n.dark)
								)
									return n;
							} catch {}
					}
					g({ highContrast: c, dark: n }) {
						(n !== this.dark || c !== this.highContrast) &&
							((this.dark = n),
							(this.highContrast = c),
							this.c.store(
								u.STORAGE_KEY,
								JSON.stringify({ highContrast: c, dark: n }),
								m.StorageScope.APPLICATION,
								m.StorageTarget.MACHINE,
							),
							this.a.fire());
					}
				};
				(e.$Idd = a),
					(e.$Idd = a = u = Ne([j(0, i.$y7c), j(1, d.$ucd), j(2, m.$lq)], a)),
					(0, w.$lK)(C.$1vc, a, w.InstantiationType.Delayed);
			},
		)
