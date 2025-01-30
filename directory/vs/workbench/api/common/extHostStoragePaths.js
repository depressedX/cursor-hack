import '../../../../require.js';
import '../../../../exports.js';
import '../../../platform/instantiation/common/instantiation.js';
import './extHostInitDataService.js';
import '../../../platform/log/common/log.js';
import './extHostFileSystemConsumer.js';
import '../../../base/common/uri.js';
define(
			Pe[146],
			Ne([1, 0, 5, 34, 14, 115, 2]),
			function (we, t, e, r, S, N, P) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$whd = t.$vhd = void 0),
					(t.$vhd = (0, e.$Mi)("IExtensionStoragePaths"));
				let I = class {
					constructor(n, p, y) {
						(this.d = p),
							(this.f = y),
							(this.a = n.workspace ?? void 0),
							(this.b = n.environment),
							(this.whenReady = this.h().then((d) => (this.c = d)));
					}
					async g(n) {
						return P.URI.joinPath(this.b.workspaceStorageHome, n);
					}
					async h() {
						if (!this.a) return Promise.resolve(void 0);
						const n = this.a.id,
							p = await this.g(n);
						try {
							return (
								await this.f.value.stat(p),
								this.d.trace("[ExtHostStorage] storage dir already exists", p),
								p
							);
						} catch {}
						try {
							return (
								this.d.trace(
									"[ExtHostStorage] creating dir and metadata-file",
									p,
								),
								await this.f.value.createDirectory(p),
								await this.f.value.writeFile(
									P.URI.joinPath(p, "meta.json"),
									new TextEncoder().encode(
										JSON.stringify(
											{
												id: this.a.id,
												configuration: P.URI.revive(
													this.a.configuration,
												)?.toString(),
												name: this.a.name,
											},
											void 0,
											2,
										),
									),
								),
								p
							);
						} catch (y) {
							this.d.error("[ExtHostStorage]", y);
							return;
						}
					}
					workspaceValue(n) {
						if (this.c) return P.URI.joinPath(this.c, n.identifier.value);
					}
					globalValue(n) {
						return P.URI.joinPath(
							this.b.globalStorageHome,
							n.identifier.value.toLowerCase(),
						);
					}
					onWillDeactivateAll() {}
				};
				(t.$whd = I),
					(t.$whd = I = wt([rt(0, r.$98), rt(1, S.$ik), rt(2, N.$uhd)], I));
			},
		),
		