import '../../../../require.js';
import '../../../../exports.js';
import '../common/extHostFileSystemConsumer.js';
import '../../../base/common/network.js';
import '../../../platform/log/common/log.js';
import '../../../platform/files/node/diskFileSystemProvider.js';
import '../../../platform/files/common/files.js';
import '../../../base/common/platform.js';
define(
			Pe[592],
			Ne([1, 0, 115, 16, 14, 488, 32, 13]),
			function (we, t, e, r, S, N, P, I) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Xjd = void 0);
				let l = class {
					constructor(y, d) {
						y.addFileSystemProvider(r.Schemas.file, new n(d), {
							isCaseSensitive: I.$n,
						});
					}
				};
				(t.$Xjd = l), (t.$Xjd = l = wt([rt(0, e.$uhd), rt(1, S.$ik)], l));
				class n {
					constructor(y) {
						(this.b = y), (this.a = new N.$Vr(this.b));
					}
					async stat(y) {
						const d = await this.a.stat(y);
						return {
							type: d.type,
							ctime: d.ctime,
							mtime: d.mtime,
							size: d.size,
							permissions:
								d.permissions === P.FilePermission.Readonly ? 1 : void 0,
						};
					}
					readDirectory(y) {
						return this.a.readdir(y);
					}
					createDirectory(y) {
						return this.a.mkdir(y);
					}
					readFile(y) {
						return this.a.readFile(y);
					}
					writeFile(y, d, k) {
						return this.a.writeFile(y, d, { ...k, unlock: !1, atomic: !1 });
					}
					delete(y, d) {
						return this.a.delete(y, { ...d, useTrash: !1, atomic: !1 });
					}
					rename(y, d, k) {
						return this.a.rename(y, d, k);
					}
					copy(y, d, k) {
						return this.a.copy(y, d, k);
					}
					get onDidChangeFile() {
						throw new Error("Method not implemented.");
					}
					watch(y, d) {
						throw new Error("Method not implemented.");
					}
				}
			},
		),
		