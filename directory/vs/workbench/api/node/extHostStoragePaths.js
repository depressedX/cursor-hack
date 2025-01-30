import '../../../../require.js';
import '../../../../exports.js';
import '../../../../fs.js';
import '../../../base/common/path.js';
import '../../../base/common/uri.js';
import '../common/extHostStoragePaths.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/network.js';
import '../../../base/common/async.js';
import '../../../base/node/pfs.js';
define(
			Pe[594],
			Ne([1, 0, 59, 18, 2, 146, 3, 16, 9, 43]),
			function (we, t, e, r, S, N, P, I, l, n) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$8jd = void 0),
					(e = tt(e)),
					(r = tt(r));
				class p extends N.$whd {
					constructor() {
						super(...arguments), (this.i = null);
					}
					async g(f) {
						const o = await super.g(f);
						if (o.scheme !== I.Schemas.file) return o;
						if (this.b.skipWorkspaceStorageLock)
							return this.d.info(`Skipping acquiring lock for ${o.fsPath}.`), o;
						const w = o.fsPath;
						let m = 0;
						do {
							let E;
							m === 0
								? (E = w)
								: (E = /[/\\]$/.test(w)
										? `${w.substr(0, w.length - 1)}-${m}`
										: `${w}-${m}`),
								await y(E);
							const R = r.$oc(E, "vscode.lock"),
								C = await c(this.d, R, !1);
							if (C)
								return (
									(this.i = C),
									process.on("exit", () => {
										C.dispose();
									}),
									S.URI.file(E)
								);
							m++;
						} while (m < 10);
						return o;
					}
					onWillDeactivateAll() {
						this.i?.setWillRelease(6e3);
					}
				}
				t.$8jd = p;
				async function y(s) {
					try {
						await e.promises.stat(s);
						return;
					} catch {}
					try {
						await e.promises.mkdir(s, { recursive: !0 });
					} catch {}
				}
				const d = 1e3,
					k = 10 * 60 * 1e3;
				class g extends P.$1c {
					constructor(f, o) {
						super(),
							(this.b = f),
							(this.c = o),
							(this.a = this.D(new l.$Xh())),
							this.a.cancelAndSet(async () => {
								const w = await h(f, o);
								(!w || w.pid !== process.pid) &&
									(f.info(`Lock '${o}': The lock was lost unexpectedly.`),
									this.a.cancel());
								try {
									await e.promises.utimes(o, new Date(), new Date());
								} catch (m) {
									f.error(m), f.info(`Lock '${o}': Could not update mtime.`);
								}
							}, d);
					}
					dispose() {
						super.dispose();
						try {
							e.unlinkSync(this.c);
						} catch {}
					}
					async setWillRelease(f) {
						this.b.info(
							`Lock '${this.c}': Marking the lockfile as scheduled to be released in ${f} ms.`,
						);
						try {
							const o = { pid: process.pid, willReleaseAt: Date.now() + f };
							await n.Promises.writeFile(this.c, JSON.stringify(o), {
								flag: "w",
							});
						} catch (o) {
							this.b.error(o);
						}
					}
				}
				async function c(s, f, o) {
					try {
						const m = { pid: process.pid, willReleaseAt: 0 };
						await n.Promises.writeFile(f, JSON.stringify(m), { flag: "wx" });
					} catch (m) {
						s.error(m);
					}
					const w = await h(s, f);
					return !w || w.pid !== process.pid
						? o
							? (s.info(`Lock '${f}': Could not acquire lock, giving up.`),
								null)
							: (s.info(
									`Lock '${f}': Could not acquire lock, checking if the file is stale.`,
								),
								a(s, f))
						: (s.info(`Lock '${f}': Lock acquired.`), new g(s, f));
				}
				async function h(s, f) {
					let o;
					try {
						o = await e.promises.readFile(f);
					} catch (w) {
						return s.error(w), null;
					}
					try {
						return JSON.parse(String(o));
					} catch (w) {
						return s.error(w), null;
					}
				}
				async function $(s, f) {
					let o;
					try {
						o = await e.promises.stat(f);
					} catch (w) {
						return s.error(w), 0;
					}
					return o.mtime.getTime();
				}
				function T(s) {
					try {
						return process.kill(s, 0), !0;
					} catch {
						return !1;
					}
				}
				async function a(s, f) {
					const o = await h(s, f);
					if (!o)
						return (
							s.info(`Lock '${f}': Could not read pid of lock holder.`), u(s, f)
						);
					if (o.willReleaseAt) {
						let C = o.willReleaseAt - Date.now();
						if (C < 5e3) {
							for (
								C > 0
									? s.info(
											`Lock '${f}': The lockfile is scheduled to be released in ${C} ms.`,
										)
									: s.info(
											`Lock '${f}': The lockfile is scheduled to have been released.`,
										);
								C > 0;
							) {
								if ((await (0, l.$Nh)(Math.min(100, C)), (await $(s, f)) === 0))
									return u(s, f);
								C = o.willReleaseAt - Date.now();
							}
							return u(s, f);
						}
					}
					if (!T(o.pid))
						return (
							s.info(`Lock '${f}': The pid ${o.pid} appears to be gone.`),
							u(s, f)
						);
					const w = await $(s, f),
						m = Date.now() - w;
					if (m <= k)
						return (
							s.info(
								`Lock '${f}': The lock does not look stale, elapsed: ${m} ms, giving up.`,
							),
							null
						);
					s.info(`Lock '${f}': The lock looks stale, waiting for 2s.`),
						await (0, l.$Nh)(2e3);
					const E = await $(s, f),
						R = Date.now() - E;
					return R <= k
						? (s.info(
								`Lock '${f}': The lock does not look stale, elapsed: ${R} ms, giving up.`,
							),
							null)
						: (s.info(
								`Lock '${f}': The lock looks stale even after waiting for 2s.`,
							),
							u(s, f));
				}
				async function u(s, f) {
					s.info(`Lock '${f}': Deleting a stale lock.`);
					try {
						await e.promises.unlink(f);
					} catch {}
					return c(s, f, !0);
				}
			},
		),
		