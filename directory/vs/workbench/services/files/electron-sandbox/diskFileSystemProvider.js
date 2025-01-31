import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/platform.js';
import '../../../../platform/files/common/diskFileSystemProvider.js';
import '../../../../platform/files/common/diskFileSystemProviderClient.js';
import './watcherClient.js';
import '../../../../platform/log/common/logService.js';
define(
			de[3384],
			he([1, 0, 4, 12, 2741, 1614, 3383, 1621]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*platform*/,
 w /*diskFileSystemProvider*/,
 E /*diskFileSystemProviderClient*/,
 C /*watcherClient*/,
 d /*logService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Wcd = void 0);
				class m extends w.$Er {
					constructor(u, a, h, c) {
						super(h, { watcher: { forceUniversal: !0 } }),
							(this.L = u),
							(this.M = a),
							(this.N = c),
							(this.f = this.D(
								new E.$Ueb(this.L.getChannel(E.$Teb), {
									pathCaseSensitive: i.$n,
									trash: !0,
								}),
							)),
							(this.R = void 0),
							this.O();
					}
					O() {
						this.D(this.f.onDidChangeFile((u) => this.c.fire(u))),
							this.D(this.f.onDidWatchError((u) => this.g.fire(u)));
					}
					get onDidChangeCapabilities() {
						return this.f.onDidChangeCapabilities;
					}
					get capabilities() {
						return this.f.capabilities;
					}
					stat(u) {
						return this.f.stat(u);
					}
					readdir(u) {
						return this.f.readdir(u);
					}
					readFile(u, a) {
						return this.f.readFile(u, a);
					}
					readFileStream(u, a, h) {
						return this.f.readFileStream(u, a, h);
					}
					writeFile(u, a, h) {
						return this.f.writeFile(u, a, h);
					}
					open(u, a) {
						return this.f.open(u, a);
					}
					close(u) {
						return this.f.close(u);
					}
					read(u, a, h, c, n) {
						return this.f.read(u, a, h, c, n);
					}
					write(u, a, h, c, n) {
						return this.f.write(u, a, h, c, n);
					}
					mkdir(u) {
						return this.f.mkdir(u);
					}
					delete(u, a) {
						return this.f.delete(u, a);
					}
					rename(u, a, h) {
						return this.f.rename(u, a, h);
					}
					copy(u, a, h) {
						return this.f.copy(u, a, h);
					}
					cloneFile(u, a) {
						return this.f.cloneFile(u, a);
					}
					s(u, a, h) {
						return new C.$Vcd(
							(c) => u(c),
							(c) => a(c),
							h,
							this.M,
						);
					}
					F() {
						throw new Error("Method not implemented in sandbox.");
					}
					get S() {
						return (
							this.R ||
								(this.R = new d.$_eb(
									this.N.createLogger("fileWatcher", {
										name: (0, t.localize)(12462, null),
									}),
								)),
							this.R
						);
					}
					H(u) {
						this.S[u.type](u.message),
							u.type !== "trace" && u.type !== "debug" && super.H(u);
					}
				}
				e.$Wcd = m;
			},
		)
