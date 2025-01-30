import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../editor/common/services/model.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../services/output/common/output.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/common/services/languageFeatures.js';
import '../../../../base/browser/defaultWorkerFactory.js';
import '../../../../editor/common/services/textModelSync/textModelSync.impl.js';
define(
			de[3524],
			he([1, 0, 15, 67, 25, 297, 3, 69, 540, 935]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*model*/,
 w /*workspace*/,
 E /*output*/,
 C /*lifecycle*/,
 d /*languageFeatures*/,
 m /*defaultWorkerFactory*/,
 r /*textModelSync.impl*/) {
				"use strict";
				var u;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_Tc = void 0);
				let a = class extends C.$1c {
					static {
						u = this;
					}
					static {
						this.a = 3 * 60 * 1e3;
					}
					constructor(n, g, p) {
						super(),
							(this.g = n),
							(this.h = g),
							(this.j = p),
							(this.c = new t.$Yh(() => this.s(), u.a)),
							this.m(),
							this.n();
					}
					m() {
						this.D(this.g.onDidChangeWorkspaceFolders(() => this.n()));
					}
					n() {
						this.g.getWorkspace().folders.length > 0
							? this.f ||
								(this.f = this.j.linkProvider.register(
									[
										{ language: E.$e8, scheme: "*" },
										{ language: E.$g8, scheme: "*" },
									],
									{
										provideLinks: async (g) => {
											const p = await this.r(g.uri);
											return p && { links: p };
										},
									},
								))
							: ((0, C.$Vc)(this.f), (this.f = void 0)),
							this.s(),
							this.c.cancel();
					}
					q() {
						return (
							this.c.schedule(),
							this.b || (this.b = new h(this.g, this.h)),
							this.b
						);
					}
					async r(n) {
						return this.q().provideLinks(n);
					}
					s() {
						this.b && (this.b.dispose(), (this.b = void 0));
					}
				};
				(e.$_Tc = a),
					(e.$_Tc = a = u = Ne([j(0, w.$Vi), j(1, i.$QO), j(2, d.$k3)], a));
				let h = class extends C.$1c {
					constructor(n, g) {
						super(),
							(this.f = n),
							(this.a = this.D(
								(0, m.$ijb)(
									"vs/workbench/contrib/output/common/outputLinkComputer",
									"OutputLinkDetectionWorker",
								),
							)),
							(this.b = r.$wxb.create(this.a, g)),
							(this.c = this.g());
					}
					async g() {
						await this.a.proxy.$setWorkspaceFolders(
							this.f.getWorkspace().folders.map((n) => n.uri.toString()),
						);
					}
					async provideLinks(n) {
						return (
							await this.c,
							await this.b.ensureSyncedResources([n]),
							this.a.proxy.$computeLinks(n.toString())
						);
					}
				};
				h = Ne([j(0, w.$Vi), j(1, i.$QO)], h);
			},
		),
		